'use client';

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Membership, EntryLog, Profile, MEMBERSHIP_PRICES, MEMBERSHIP_LABEL } from '@/types';
import Link from 'next/link';
import type { User } from '@supabase/supabase-js';

type Tab = 'dashboard' | 'purchase' | 'history';
type AuthMode = 'login' | 'signup';

export default function MembershipPage() {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [memberships, setMemberships] = useState<Membership[]>([]);
  const [entryLogs, setEntryLogs] = useState<EntryLog[]>([]);
  const [tab, setTab] = useState<Tab>('dashboard');
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  // 인증 폼
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState('');

  const fetchData = useCallback(async (userId: string) => {
    const [profileRes, membershipsRes, logsRes] = await Promise.all([
      supabase.from('profiles').select('*').eq('id', userId).single(),
      supabase.from('memberships').select('*').eq('user_id', userId).order('created_at', { ascending: false }),
      supabase.from('entry_logs').select('*').eq('user_id', userId).order('created_at', { ascending: false }).limit(20),
    ]);
    setProfile(profileRes.data);
    setMemberships(membershipsRes.data || []);
    setEntryLogs(logsRes.data || []);
  }, [supabase]);

  useEffect(() => {
    supabase.auth.getSession().then((res: any) => {
      const session = res.data?.session;
      setUser(session?.user ?? null);
      if (session?.user) fetchData(session.user.id);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e: any, session: any) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchData(session.user.id);
      else { setProfile(null); setMemberships([]); setEntryLogs([]); }
    });
    return () => subscription.unsubscribe();
  }, [supabase, fetchData]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccess('');
    setActionLoading(true);
    try {
      if (authMode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setAuthError('이메일 또는 비밀번호가 올바르지 않습니다.');
      } else {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: { data: { name, phone } },
        });
        if (error) setAuthError(error.message);
        else setAuthSuccess('가입 완료! 이메일을 확인하거나 바로 로그인해 주세요.');
      }
    } finally {
      setActionLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const handlePurchase = async (type: 'outdoor' | 'indoor_once' | 'indoor_monthly') => {
    if (!user) return;
    setActionLoading(true);
    try {
      const { error } = await supabase.from('memberships').insert({ user_id: user.id, type });
      if (!error && user) {
        await fetchData(user.id);
        setTab('dashboard');
      }
    } finally {
      setActionLoading(false);
    }
  };

  const handleEntry = async (membership: Membership, action: 'in' | 'out') => {
    if (!user) return;
    setActionLoading(true);
    try {
      await supabase.from('entry_logs').insert({
        user_id: user.id,
        membership_id: membership.id,
        membership_type: membership.type,
        action,
      });
      await fetchData(user.id);
    } finally {
      setActionLoading(false);
    }
  };

  const getLastAction = (membershipId: string): 'in' | 'out' | null => {
    const log = entryLogs.find(l => l.membership_id === membershipId);
    return log ? log.action : null;
  };

  const activeMemberships = memberships.filter(m =>
    m.is_active && (!m.expires_at || new Date(m.expires_at) > new Date())
  );

  const formatDate = (d: string) =>
    new Date(d).toLocaleString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-gold-400 font-body animate-pulse text-lg">로딩 중...</div>
      </div>
    );
  }

  // ── 비로그인 상태 ─────────────────────────────────────
  if (!user) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <span className="text-4xl">🌊</span>
            <h1 className="font-arabic text-gold-400 text-3xl tracking-widest mt-2">아장 수영장</h1>
            <p className="text-stone-500 font-body mt-2">회원 로그인 / 가입</p>
          </div>

          <div className="card-arabian p-8">
            {/* 탭 */}
            <div className="flex rounded-xl overflow-hidden border border-gold-200 mb-6">
              {(['login', 'signup'] as AuthMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => { setAuthMode(mode); setAuthError(''); setAuthSuccess(''); }}
                  className={`flex-1 py-2.5 text-sm font-body font-medium transition-all duration-200
                    ${authMode === mode ? 'bg-gold-500/20 text-gold-600' : 'text-stone-500 hover:text-stone-700'}`}
                >
                  {mode === 'login' ? '로그인' : '회원가입'}
                </button>
              ))}
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              {authMode === 'signup' && (
                <>
                  <div>
                    <label className="block text-xs text-stone-500 font-body mb-1.5">이름 *</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required
                      placeholder="홍길동" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-500 font-body mb-1.5">전화번호</label>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                      placeholder="010-0000-0000" className="input-field" />
                  </div>
                </>
              )}
              <div>
                <label className="block text-xs text-stone-500 font-body mb-1.5">이메일 *</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                  placeholder="example@email.com" className="input-field" />
              </div>
              <div>
                <label className="block text-xs text-stone-500 font-body mb-1.5">비밀번호 *</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
                  placeholder="••••••••" minLength={6} className="input-field" />
              </div>

              {authError && <p className="text-red-400 text-xs font-body">{authError}</p>}
              {authSuccess && <p className="text-green-400 text-xs font-body">{authSuccess}</p>}

              <button type="submit" disabled={actionLoading}
                className="btn-gold w-full mt-2 disabled:opacity-50">
                {actionLoading ? '처리 중...' : authMode === 'login' ? '로그인' : '회원가입'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ── 로그인 상태 ───────────────────────────────────────
  const tabs = [
    { id: 'dashboard', label: '내 대시보드' },
    { id: 'purchase', label: '이용권 구매' },
    { id: 'history', label: '입퇴장 기록' },
  ] as const;

  return (
    <div className="min-h-screen pt-20 px-4 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="flex items-center justify-between py-8">
          <div>
            <h1 className="font-arabic text-gold-400 text-2xl tracking-widest">
              안녕하세요, {profile?.name || '회원'}님
            </h1>
            <p className="text-stone-400 text-sm font-body mt-1">{user.email}</p>
          </div>
          <button onClick={handleSignOut}
            className="px-4 py-2 rounded-xl border border-stone-200 text-stone-500 hover:text-red-400 hover:border-red-500/40 text-sm font-body transition-all">
            로그아웃
          </button>
        </div>

        {/* 탭 */}
        <div className="flex gap-1 p-1 rounded-2xl bg-white border border-gold-200 mb-8">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id as Tab)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-body font-medium transition-all duration-200
                ${tab === t.id ? 'bg-gold-500/20 text-gold-600 shadow-gold' : 'text-stone-500 hover:text-stone-700'}`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* ── 대시보드 탭 ── */}
        {tab === 'dashboard' && (
          <div className="space-y-6">
            {/* 활성 이용권 */}
            <div>
              <h2 className="font-display text-gold-600 text-lg mb-4 tracking-wide">현재 이용권</h2>
              {activeMemberships.length === 0 ? (
                <div className="card-arabian p-8 text-center">
                  <p className="text-stone-500 font-body mb-4">보유한 이용권이 없습니다.</p>
                  <button onClick={() => setTab('purchase')} className="btn-gold text-sm">이용권 구매</button>
                </div>
              ) : (
                <div className="space-y-4">
                  {activeMemberships.map(m => {
                    const lastAction = getLastAction(m.id);
                    const isInside = lastAction === 'in';
                    return (
                      <div key={m.id} className={`card-arabian p-6 border-l-4 ${isInside ? 'border-l-green-500' : 'border-l-gold-500'}`}>
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-display text-gold-600 text-base">
                                {MEMBERSHIP_LABEL[m.type]}
                              </span>
                              <span className={`text-xs px-2 py-0.5 rounded-full border font-body
                                ${isInside ? 'bg-green-500/10 text-green-400 border-green-500/30' : 'bg-gray-500/10 text-stone-500 border-stone-200/20'}`}>
                                {isInside ? '✓ 입장 중' : '퇴장'}
                              </span>
                            </div>
                            {m.expires_at && (
                              <p className="text-stone-400 text-xs font-body">
                                만료: {new Date(m.expires_at).toLocaleString('ko-KR')}
                              </p>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEntry(m, 'in')}
                              disabled={actionLoading || isInside}
                              className="px-5 py-2 rounded-xl bg-green-500/20 text-green-400 border border-green-500/30
                                hover:bg-green-500/30 disabled:opacity-30 text-sm font-body transition-all"
                            >
                              입장
                            </button>
                            <button
                              onClick={() => handleEntry(m, 'out')}
                              disabled={actionLoading || !isInside}
                              className="px-5 py-2 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30
                                hover:bg-red-500/30 disabled:opacity-30 text-sm font-body transition-all"
                            >
                              퇴장
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 빠른 링크 */}
            <div className="grid grid-cols-2 gap-4">
              <Link href="/inquiry/new"
                className="card-arabian p-5 text-center hover:scale-[1.02] transition-all duration-300 group">
                <div className="text-3xl mb-2 group-hover:animate-float">✉️</div>
                <div className="font-display text-gold-600 text-sm">문의 작성</div>
              </Link>
              <Link href="/inquiry"
                className="card-arabian p-5 text-center hover:scale-[1.02] transition-all duration-300 group">
                <div className="text-3xl mb-2 group-hover:animate-float">📋</div>
                <div className="font-display text-gold-600 text-sm">내 문의 내역</div>
              </Link>
            </div>
          </div>
        )}

        {/* ── 이용권 구매 탭 ── */}
        {tab === 'purchase' && (
          <div>
            <h2 className="font-display text-gold-600 text-lg mb-6 tracking-wide">이용권 구매</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {MEMBERSHIP_PRICES.map(price => (
                <div key={price.type} className="card-arabian p-7 flex flex-col">
                  <div className="font-display text-gold-600 text-base mb-1">{price.label}</div>
                  <div className="font-arabic text-3xl text-gold-400 mb-1">
                    {price.price.toLocaleString()}원
                  </div>
                  <div className="text-stone-400 text-xs font-body mb-4">/ {price.duration}</div>
                  <p className="text-stone-500 text-sm font-body leading-relaxed mb-6 flex-1">{price.description}</p>
                  <button
                    onClick={() => handlePurchase(price.type)}
                    disabled={actionLoading}
                    className="btn-gold w-full text-sm disabled:opacity-50"
                  >
                    {actionLoading ? '처리 중...' : '구매하기'}
                  </button>
                </div>
              ))}
            </div>
            <p className="text-stone-400 text-xs font-body text-center mt-6">
              * 실제 서비스에서는 결제 시스템과 연동됩니다.
            </p>
          </div>
        )}

        {/* ── 입퇴장 기록 탭 ── */}
        {tab === 'history' && (
          <div>
            <h2 className="font-display text-gold-600 text-lg mb-6 tracking-wide">입퇴장 기록</h2>
            {entryLogs.length === 0 ? (
              <div className="card-arabian p-8 text-center">
                <p className="text-stone-500 font-body">입퇴장 기록이 없습니다.</p>
              </div>
            ) : (
              <div className="space-y-2">
                {entryLogs.map(log => (
                  <div key={log.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/80 border border-gold-200 hover:border-gold-200 transition-colors">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0
                      ${log.action === 'in' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {log.action === 'in' ? '↓' : '↑'}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm font-body">
                          {MEMBERSHIP_LABEL[log.membership_type]}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-body
                          ${log.action === 'in' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                          {log.action === 'in' ? '입장' : '퇴장'}
                        </span>
                      </div>
                    </div>
                    <span className="text-stone-400 text-xs font-body flex-shrink-0">
                      {formatDate(log.created_at)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
