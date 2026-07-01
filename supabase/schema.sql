-- ============================================================
-- 아장 수영장 Supabase Schema
-- ============================================================

-- 1. 회원 프로필 (auth.users 확장)
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  name        text not null,
  phone       text,
  created_at  timestamptz default now()
);

-- RLS 활성화
alter table public.profiles enable row level security;

create policy "본인 프로필만 조회" on public.profiles
  for select using (auth.uid() = id);

create policy "본인 프로필만 수정" on public.profiles
  for update using (auth.uid() = id);

create policy "회원가입 시 생성 허용" on public.profiles
  for insert with check (auth.uid() = id);

-- ============================================================
-- 2. 이용권 (memberships)
-- ============================================================
create type membership_type as enum ('outdoor', 'indoor_once', 'indoor_monthly');

create table if not exists public.memberships (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references public.profiles(id) on delete cascade,
  type          membership_type not null,
  purchased_at  timestamptz default now(),
  expires_at    timestamptz,        -- 야외/1회권: 당일 만료, 월정액: 30일 후
  is_active     boolean default true,
  created_at    timestamptz default now()
);

alter table public.memberships enable row level security;

create policy "본인 이용권만 조회" on public.memberships
  for select using (auth.uid() = user_id);

create policy "본인 이용권 구입" on public.memberships
  for insert with check (auth.uid() = user_id);

create policy "관리자 전체 조회" on public.memberships
  for all using (auth.jwt() ->> 'role' = 'service_role');

-- 이용권 자동 만료 처리 함수
create or replace function public.set_membership_expiry()
returns trigger as $$
begin
  if new.type = 'indoor_monthly' then
    new.expires_at := now() + interval '30 days';
  else
    -- 야외 1일권 / 실내 1회권: 당일 18:00 만료
    new.expires_at := (current_date + interval '18 hours')::timestamptz;
  end if;
  return new;
end;
$$ language plpgsql;

create trigger membership_expiry_trigger
  before insert on public.memberships
  for each row execute function public.set_membership_expiry();

-- ============================================================
-- 3. 입퇴장 기록 (entry_logs)
-- ============================================================
create type entry_action as enum ('in', 'out');

create table if not exists public.entry_logs (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid not null references public.profiles(id) on delete cascade,
  membership_id    uuid not null references public.memberships(id) on delete cascade,
  membership_type  membership_type not null,
  action           entry_action not null,
  created_at       timestamptz default now()
);

alter table public.entry_logs enable row level security;

create policy "본인 기록만 조회" on public.entry_logs
  for select using (auth.uid() = user_id);

create policy "본인 기록 추가" on public.entry_logs
  for insert with check (auth.uid() = user_id);

-- ============================================================
-- 4. 신규 회원 자동 프로필 생성 트리거
-- ============================================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, phone)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'name', '회원'),
    coalesce(new.raw_user_meta_data ->> 'phone', '')
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- 5. 뷰: 현재 활성 이용권 (만료 자동 비활성)
-- ============================================================
create or replace view public.active_memberships as
select *
from public.memberships
where is_active = true
  and (expires_at is null or expires_at > now());

-- ============================================================
-- 6. 회원 문의 게시판 (inquiries)
-- ============================================================
create type inquiry_status as enum ('pending', 'answered', 'closed');
create type inquiry_category as enum ('general', 'membership', 'facility', 'complaint', 'other');

create table if not exists public.inquiries (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references public.profiles(id) on delete cascade,
  title        text not null,
  content      text not null,
  category     inquiry_category not null default 'general',
  status       inquiry_status not null default 'pending',
  is_private   boolean default true,        -- 비공개 여부 (기본: 비공개)
  admin_reply  text,                        -- 관리자 답변
  replied_at   timestamptz,                 -- 답변 시각
  created_at   timestamptz default now(),
  updated_at   timestamptz default now()
);

alter table public.inquiries enable row level security;

-- 본인 문의 조회
create policy "본인 문의 조회" on public.inquiries
  for select using (auth.uid() = user_id);

-- 공개 문의 조회 (is_private = false)
create policy "공개 문의 조회" on public.inquiries
  for select using (is_private = false);

-- 본인 문의 작성
create policy "본인 문의 작성" on public.inquiries
  for insert with check (auth.uid() = user_id);

-- 본인 문의 수정 (답변 전만 가능)
create policy "본인 문의 수정" on public.inquiries
  for update using (auth.uid() = user_id and status = 'pending');

-- 본인 문의 삭제 (답변 전만 가능)
create policy "본인 문의 삭제" on public.inquiries
  for delete using (auth.uid() = user_id and status = 'pending');

-- updated_at 자동 갱신
create or replace function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at := now();
  return new;
end;
$$ language plpgsql;

create trigger inquiries_updated_at
  before update on public.inquiries
  for each row execute function public.update_updated_at();

-- ============================================================
-- 7. 인덱스
-- ============================================================
create index if not exists idx_memberships_user_id on public.memberships(user_id);
create index if not exists idx_memberships_active on public.memberships(is_active, expires_at);
create index if not exists idx_entry_logs_user_id on public.entry_logs(user_id);
create index if not exists idx_entry_logs_created_at on public.entry_logs(created_at desc);
create index if not exists idx_inquiries_user_id on public.inquiries(user_id);
create index if not exists idx_inquiries_status on public.inquiries(status);
create index if not exists idx_inquiries_created_at on public.inquiries(created_at desc);
