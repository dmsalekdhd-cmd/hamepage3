import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '실내 수영장 — 25m 레인 수영장',
  description: '아장 수영장 실내 25m 수영장 — 넓은 레인, 풍부한 채광, 쾌적한 휴식공간. 1회 10,000원 / 월정액 50,000원',
};

const laneFeatures = [
  { icon: '📏', title: '25m 표준 레인', desc: '국제 표준 규격의 넓은 레인으로 편안한 수영을' },
  { icon: '☀️', title: '풍부한 채광',   desc: '대형 창문을 통해 자연 햇살이 가득 들어와요' },
  { icon: '🌡️', title: '쾌적한 수온',   desc: '연중 26~28°C 쾌적한 수온 유지' },
  { icon: '🪑', title: '휴식 공간',     desc: '수영 후 편히 쉴 수 있는 넓은 휴식 공간' },
  { icon: '🚿', title: '개인 샤워실',   desc: '수영 후 깨끗하게 씻을 수 있는 개인 부스' },
  { icon: '🎽', title: '개인 탈의실',   desc: '프라이버시 보장 개인 탈의 부스' },
];

const priceCards = [
  {
    title: '1회 이용권',
    price: '10,000',
    per: '/ 1회',
    features: ['당일 1회 이용', '모든 레인 이용 가능', '로커 무료 제공'],
    bg: 'bg-gradient-to-br from-sky-50 to-teal-50',
    border: 'border-sky-200',
    textColor: 'text-sky-600',
    btn: 'btn-sky',
    recommended: false,
  },
  {
    title: '월정액 이용권',
    price: '50,000',
    per: '/ 1개월',
    features: ['30일 무제한 이용', '모든 레인 이용 가능', '로커 무료 제공', '입퇴장 체크 시스템'],
    bg: 'bg-gradient-to-br from-gold-50 to-amber-50',
    border: 'border-gold-200',
    textColor: 'text-gold-600',
    btn: 'btn-gold',
    recommended: true,
  },
];

export default function IndoorPage() {
  return (
    <div className="min-h-screen bg-white pt-20">

      {/* ── 히어로 ─────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-white" />

        {/* 햇빛 기둥 */}
        {[15, 30, 50, 70, 85].map((pos) => (
          <div key={pos} className="absolute top-0 bottom-0 w-12 opacity-10 pointer-events-none"
            style={{ left: pos + '%', background: 'linear-gradient(180deg, rgba(255,255,180,1) 0%, transparent 70%)' }} />
        ))}

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <path d="M0,30 C360,55 720,5 1080,30 C1260,43 1380,25 1440,30 L1440,60 L0,60 Z"
              fill="#E0F7FA" fillOpacity="0.8"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="badge-sky mb-6 mx-auto w-fit">☀️ 채광 가득 25m 실내 수영장</div>
          <h1 className="title-ocean mb-4">실내 수영장</h1>
          <div className="divider-sky max-w-xs mx-auto" />
          <p className="text-stone-600 font-body text-lg leading-relaxed">
            탁 트인 공간에 따뜻한 햇살이 가득 들어오는<br/>
            아장 수영장 실내 25m 수영장입니다.
          </p>
        </div>
      </section>

      {/* ── 수영장 시각화 ──────────────────── */}
      <section className="py-16 px-4 bg-sky-50">
        <div className="max-w-5xl mx-auto">
          <div className="card-ocean bg-gradient-to-b from-sky-100 to-teal-50 border-sky-200 p-8 shadow-card-lg mb-12">
            <div className="text-center mb-6">
              <span className="font-display text-sky-700 text-lg tracking-widest">TOP VIEW — 25m 수영장</span>
            </div>

            {/* 햇빛 창문 효과 */}
            <div className="relative mb-4">
              <div className="flex justify-around">
                {[1,2,3,4,5].map(w => (
                  <div key={w} className="w-12 h-6 rounded-t-full bg-gradient-to-b from-yellow-100 to-transparent opacity-60" />
                ))}
              </div>
              <div className="absolute top-0 w-full flex justify-around pointer-events-none">
                {[1,2,3,4,5].map(w => (
                  <div key={w} className="w-8 h-24 opacity-15"
                    style={{ background: 'linear-gradient(180deg,rgba(255,255,180,0.8) 0%,transparent 100%)' }} />
                ))}
              </div>
            </div>

            {[1,2,3,4,5].map(lane => (
              <div key={lane} className="flex items-center gap-2 mb-1.5">
                <div className="w-14 text-center text-xs text-sky-600 font-body">{lane}레인</div>
                <div className="flex-1 h-11 rounded-lg relative overflow-hidden shadow-sm"
                  style={{ background: 'linear-gradient(90deg, #7DD3FC 0%, #22D3EE 50%, #7DD3FC 100%)' }}>
                  <div className="absolute inset-0 opacity-30"
                    style={{ backgroundImage: 'repeating-linear-gradient(90deg,transparent,transparent 25px,rgba(255,255,255,0.5) 25px,rgba(255,255,255,0.5) 26px)' }}/>
                  {/* 물결 반짝임 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                    animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                </div>
              </div>
            ))}

            <div className="mt-4 flex justify-center gap-6 text-xs font-body">
              <span className="flex items-center gap-1 text-teal-600">🔵 수심 1.2~1.8m</span>
              <span className="flex items-center gap-1 text-sky-600">🌡️ 수온 26~28°C</span>
              <span className="flex items-center gap-1 text-green-600">✅ 안전요원 상주</span>
            </div>
          </div>

          {/* 채광 표현 */}
          <div className="card-ocean bg-gradient-to-b from-yellow-50 to-sky-50 border-sky-200 p-10 shadow-card">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-300/40 via-yellow-100/60 to-yellow-300/40 rounded-t-3xl" />
            <div className="text-center">
              <div className="text-5xl mb-4 animate-sun-pulse inline-block">☀️</div>
              <h3 className="font-display text-sky-700 text-xl mb-2">풍부한 자연 채광</h3>
              <p className="text-stone-500 font-body text-sm max-w-md mx-auto">
                대형 창문을 통해 자연 햇살이 가득 들어와 밝고 쾌적합니다.<br/>
                따뜻한 햇빛 아래 상쾌하게 수영을 즐기세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 특징 카드 ──────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="title-ocean mb-4">시설 특징</h2>
            <div className="divider-sky max-w-xs mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {laneFeatures.map((feat) => (
              <div key={feat.title}
                className="card-ocean bg-gradient-to-br from-sky-50 to-white border-sky-200 p-6 group hover:scale-[1.02] transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:animate-float">{feat.icon}</div>
                <h3 className="font-display text-sky-700 text-base mb-2">{feat.title}</h3>
                <p className="text-stone-500 font-body text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 요금 ───────────────────────────── */}
      <section className="py-16 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="title-ocean mb-4">이용 요금</h2>
            <div className="divider-sky max-w-xs mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {priceCards.map((card) => (
              <div key={card.title}
                className={`relative rounded-3xl border ${card.border} ${card.bg} p-8 shadow-card
                  ${card.recommended ? 'ring-2 ring-gold-400 shadow-gold' : ''}`}>
                {card.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge-gold text-xs">⭐ 추천</span>
                  </div>
                )}
                <h3 className="font-display text-stone-700 text-lg mb-4">{card.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`font-arabic text-4xl ${card.textColor}`}>{card.price}</span>
                  <span className="text-stone-400 text-sm ml-1">{card.per}</span>
                </div>
                <ul className="space-y-2 mb-8">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-stone-600 text-sm font-body">
                      <span className={card.textColor}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/membership" className={`block text-center ${card.btn} w-full`}>구매하기</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 이용 안내 ─────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="card-ocean bg-gradient-to-br from-sky-50 to-white border-sky-200 p-8">
            <h3 className="font-display text-sky-700 text-xl mb-6">실내 수영장 이용 안내</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-body">
              <div>
                <h4 className="text-sky-600 font-semibold mb-3">운영 정보</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>⏰ 운영시간: 09:00 ~ 18:00</li>
                  <li>📏 수영장 규격: 25m × 5레인</li>
                  <li>🌡️ 수온: 26~28°C 상시 유지</li>
                  <li>🅿️ 주차: 무료 주차장 완비</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sky-600 font-semibold mb-3">주의 사항</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>🩲 수영복·수영모 착용 필수</li>
                  <li>🚫 음식물 반입 금지</li>
                  <li>📱 수영장 내 사진 촬영 제한</li>
                  <li>⚠️ 준비운동 후 입수</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
