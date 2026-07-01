import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '부대시설 — 개인 샤워실·탈의실',
  description: '아장 수영장 부대시설 — 개인 칸막이 샤워실, 개인 탈의실, 로커, 드라이어 완비',
};

const showerFeatures = [
  { icon: '🚿', title: '개인 샤워 부스', desc: '완벽한 프라이버시가 보장되는 개인 칸막이 샤워 부스' },
  { icon: '🔥', title: '온·냉수 조절', desc: '원하는 수온으로 조절 가능한 샤워 시스템' },
  { icon: '🧴', title: '세면도구 비치', desc: '샴푸, 바디워시, 린스 무료 제공' },
  { icon: '🪒', title: '청결 관리', desc: '이용 후 즉시 청소, 항상 청결한 상태 유지' },
];

const lockerFeatures = [
  { icon: '🔐', title: '개인 탈의 부스', desc: '1인 전용 탈의 공간으로 프라이버시 완벽 보장' },
  { icon: '🗄️', title: '사물함 제공', desc: '넉넉한 크기의 사물함 무료 제공 (자물쇠 대여 가능)' },
  { icon: '💨', title: '드라이어', desc: '헤어 드라이어 무료 사용 가능' },
  { icon: '👙', title: '수영복 탈수기', desc: '탈수기 비치로 젖은 수영복 편리하게 처리' },
];

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* ── 히어로 ─────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-midnight-800 to-teal-50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="badge-gold mb-6 mx-auto w-fit">🚿 부대시설</div>
          <h1 className="title-arabian mb-4">편의 시설</h1>
          <div className="divider-gold max-w-xs mx-auto" />
          <p className="text-stone-600 font-body text-lg leading-relaxed">
            수영 전후 쾌적한 환경을 위한 모든 것.<br />
            개인 샤워실과 탈의실로 완벽한 프라이버시를 보장합니다.
          </p>
        </div>
      </section>

      {/* ── 샤워실 ──────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="title-arabian mb-4">개인 샤워실</h2>
            <div className="divider-gold max-w-xs mx-auto" />
            <p className="text-stone-500 font-body">1인 1부스 — 완벽한 프라이버시 보장</p>
          </div>

          {/* 샤워 부스 시각화 */}
          <div className="relative rounded-3xl overflow-hidden border border-gold-200 bg-gradient-to-br from-amber-50 to-amber-50 p-10 mb-10 shadow-gold">
            <div className="flex flex-wrap justify-center gap-4">
              {[1, 2, 3, 4, 5].map((booth) => (
                <div key={booth} className="relative w-24 flex flex-col items-center">
                  {/* 부스 상단 */}
                  <div className="w-full h-2 rounded-t-lg bg-gradient-to-r from-gold-600 to-gold-400" />
                  {/* 부스 몸체 */}
                  <div className="w-full flex-1 min-h-[120px] rounded-b-lg border border-gold-200 bg-white/80 relative overflow-hidden flex flex-col items-center justify-center gap-2 p-2">
                    {/* 칸막이 */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gold-600/40" />
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-gold-600/40" />
                    {/* 내부 아이콘 */}
                    <span className="text-2xl">🚿</span>
                    <div className="text-xs text-sky-500 font-body text-center">
                      {booth}번 부스
                    </div>
                    <div className="w-8 h-px bg-aqua-500/30" />
                    <div className="text-xs text-stone-400 font-body">온·냉수</div>
                  </div>
                  {/* 문 */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-4 rounded-t-sm bg-white/80 border border-gold-200 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-gold-500" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-stone-400 text-xs font-body mt-6">* 남녀 구분 운영, 각 5부스 이상</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {showerFeatures.map((feat) => (
              <div key={feat.title} className="card-arabian p-5 group hover:scale-[1.02] transition-all duration-300">
                <div className="text-3xl mb-3 group-hover:animate-float">{feat.icon}</div>
                <h3 className="font-display text-gold-600 text-sm mb-2">{feat.title}</h3>
                <p className="text-stone-500 font-body text-xs leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 탈의실 ──────────────────────────────── */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-teal-50" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="title-ocean mb-4">개인 탈의실</h2>
            <div className="divider-aqua max-w-xs mx-auto" />
            <p className="text-stone-500 font-body">1인 전용 탈의 공간 + 사물함</p>
          </div>

          {/* 탈의실 시각화 */}
          <div className="relative rounded-3xl overflow-hidden border border-sky-200 bg-gradient-to-br from-sky-50 to-amber-50 p-10 mb-10 shadow-aqua">
            <div className="flex flex-wrap justify-center gap-4">
              {[1, 2, 3, 4, 5, 6].map((room) => (
                <div key={room} className="relative w-20 flex flex-col">
                  {/* 사물함 */}
                  <div className="w-full h-16 rounded-t-lg border border-sky-200 bg-sky-50 flex flex-col items-center justify-center gap-1 p-2">
                    <span className="text-sm">🗄️</span>
                    <div className="w-4 h-0.5 bg-aqua-600/40 rounded" />
                    <div className="w-2 h-2 rounded-full border border-sky-200" />
                  </div>
                  {/* 탈의 공간 */}
                  <div className="w-full min-h-[80px] border-x border-b border-sky-200 bg-sky-50 flex flex-col items-center justify-center gap-1 p-2">
                    <span className="text-xl">👙</span>
                    <div className="text-xs text-aqua-500 font-body">{room}번</div>
                  </div>
                  {/* 문 */}
                  <div className="w-full h-5 rounded-b-lg bg-sky-50 border border-sky-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full border border-aqua-400/40 flex items-center justify-center">
                      <div className="w-0.5 h-0.5 rounded-full bg-aqua-400/60" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
                <span className="text-lg">💨</span>
                <span className="text-xs text-stone-500 font-body">드라이어 구역</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">👙</span>
                <span className="text-xs text-stone-500 font-body">수영복 탈수기</span>
              </div>
            </div>
            <p className="text-center text-stone-400 text-xs font-body mt-2">* 남녀 구분 운영</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {lockerFeatures.map((feat) => (
              <div key={feat.title} className="card-ocean p-5 group hover:scale-[1.02] transition-all duration-300">
                <div className="text-3xl mb-3 group-hover:animate-float">{feat.icon}</div>
                <h3 className="font-display text-sky-600 text-sm mb-2">{feat.title}</h3>
                <p className="text-stone-500 font-body text-xs leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 기타 편의시설 ─────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center title-arabian mb-8">기타 편의시설</h2>
          <div className="divider-gold max-w-xs mx-auto mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🅿️', name: '무료 주차', desc: '넓은 주차장' },
              { icon: '🏧', name: '무인 결제', desc: '카드·현금' },
              { icon: '💧', name: '정수기', desc: '음수대 완비' },
              { icon: '🏥', name: '구급함', desc: '안전 장비 상시' },
            ].map((item) => (
              <div key={item.name} className="text-center p-6 rounded-2xl bg-white/80 border border-gold-200 hover:border-gold-400/30 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-display text-gold-600 text-sm mb-1">{item.name}</div>
                <div className="text-stone-400 text-xs font-body">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
