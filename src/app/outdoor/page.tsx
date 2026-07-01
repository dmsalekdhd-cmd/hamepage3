import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '야외 수영장 — 아라비안 × 트로피컬 워터파크',
  description: '아장 수영장 야외 파크 — 야자수와 황금 아치 아래 유수풀, 파도풀, 미끄럼틀, 영유아풀, 평상 BBQ. 50,000원/1일',
};

const attractions = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80',
    name: '유수풀',
    eng: 'Lazy River',
    desc: '야자수와 황금 아라비안 조형물이 늘어선 느긋한 유수풀. 튜브를 타고 이국적인 풍경을 감상하세요.',
    color: 'from-gold-50 to-amber-100',
    border: 'border-gold-200',
    features: ['튜브 대여 가능', '성인·어린이 모두 이용', '전장 약 150m'],
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80',
    name: '파도풀',
    eng: 'Wave Pool',
    desc: '실감 나는 파도가 주기적으로 일어나는 대형 파도풀. 하와이 바다 느낌을 내륙에서 즐겨보세요!',
    color: 'from-sky-50 to-teal-100',
    border: 'border-sky-200',
    features: ['시간별 파도 운영', '구명조끼 대여 가능', '안전요원 상주'],
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1579684947550-22e945224d51?auto=format&fit=crop&w=600&q=80',
    name: '미끄럼틀',
    eng: 'Water Slide',
    desc: '아라비안 탑 형태의 워터슬라이드. 높이에서 내려오는 짜릿함과 함께 탁 트인 풍경을 즐겨보세요.',
    color: 'from-orange-50 to-amber-100',
    border: 'border-orange-200',
    features: ['2종 슬라이드', '키 110cm 이상 이용', '안전 계단 완비'],
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1564507592937-25994a9015b2?auto=format&fit=crop&w=600&q=80',
    name: '영유아 수영장',
    eng: 'Kids Pool',
    desc: '영유아 전용 안전 수영장. 수심이 얕고 야자수 그늘 아래 설치되어 아이들이 안심하고 즐길 수 있어요.',
    color: 'from-teal-50 to-sky-100',
    border: 'border-teal-200',
    features: ['수심 40cm 이하', '안전 매트 바닥', '안전요원 전담'],
  },
];

const pavilionFeatures = [
  { icon: '🌴', text: '야자수 그늘 & 아라비안 천막 지붕' },
  { icon: '🔥', text: '그릴·숯 대여 가능 (BBQ 구역)' },
  { icon: '🍖', text: '고기, 해산물 개인 식재료 반입 가능' },
  { icon: '🛋️', text: '목재 평상 + 방석 완비' },
  { icon: '💨', text: '사방 개방형으로 시원한 바람' },
  { icon: '🔒', text: '평상 단위 예약 가능' },
];

export default function OutdoorPage() {
  return (
    <div className="min-h-screen bg-amber-50 pt-20">

      {/* ── 히어로 ─────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        {/* 밝은 하늘 배경 */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-sand-100" />

        {/* 태양 */}
        <div className="absolute top-12 right-20 w-24 h-24 rounded-full
          bg-gradient-to-br from-yellow-200 to-amber-300 animate-sun-pulse" />

        {/* 구름 */}
        <div className="absolute top-14 left-24 opacity-80">
          <div className="relative">
            <div className="w-28 h-10 bg-white rounded-full"/>
            <div className="absolute -top-5 left-5 w-18 h-14 bg-white rounded-full" style={{width:'4.5rem',height:'3.5rem'}}/>
            <div className="absolute -top-2 left-14 w-14 h-10 bg-white rounded-full"/>
          </div>
        </div>

        {/* 야자수 장식 */}
        <div className="absolute bottom-0 left-4 w-36 h-60 pointer-events-none opacity-60">
          <svg viewBox="0 0 100 200" className="w-full h-full">
            <path d="M52 200 Q50 165 47 130 Q49 95 53 65 Q50 40 54 18" stroke="#a16207" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <ellipse cx="54" cy="18" rx="28" ry="7" fill="#15803d" transform="rotate(-35 54 18)"/>
            <ellipse cx="54" cy="15" rx="25" ry="6" fill="#22c55e" transform="rotate(25 54 15)"/>
            <ellipse cx="54" cy="12" rx="23" ry="6" fill="#15803d" transform="rotate(-65 54 12)"/>
            <ellipse cx="54" cy="9" rx="21" ry="5" fill="#22c55e" transform="rotate(55 54 9)"/>
            <circle cx="51" cy="22" r="4" fill="#92400e" opacity="0.8"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-4 w-36 h-60 pointer-events-none opacity-60 transform scale-x-[-1]">
          <svg viewBox="0 0 100 200" className="w-full h-full">
            <path d="M52 200 Q50 165 47 130 Q49 95 53 65 Q50 40 54 18" stroke="#a16207" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <ellipse cx="54" cy="18" rx="28" ry="7" fill="#15803d" transform="rotate(-35 54 18)"/>
            <ellipse cx="54" cy="15" rx="25" ry="6" fill="#22c55e" transform="rotate(25 54 15)"/>
            <ellipse cx="54" cy="12" rx="23" ry="6" fill="#15803d" transform="rotate(-65 54 12)"/>
            <ellipse cx="54" cy="9" rx="21" ry="5" fill="#22c55e" transform="rotate(55 54 9)"/>
            <circle cx="51" cy="22" r="4" fill="#92400e" opacity="0.8"/>
          </svg>
        </div>

        {/* 물결 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
            <path d="M0,40 C240,70 480,10 720,40 C960,70 1200,10 1440,40 L1440,80 L0,80 Z"
              fill="#22D3EE" fillOpacity="0.4"/>
            <path d="M0,55 C360,25 720,65 1080,45 C1260,35 1380,55 1440,50 L1440,80 L0,80 Z"
              fill="#0EA5E9" fillOpacity="0.25"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="badge-gold mb-6 mx-auto w-fit">🌴 아라비안 × 트로피컬 워터파크</div>
          <h1 className="title-arabian mb-4">야외 수영장</h1>
          <div className="divider-gold max-w-xs mx-auto" />
          <p className="text-stone-600 font-body text-lg leading-relaxed mb-8">
            야자수와 황금 아치가 어우러진 밝고 화사한 야외 워터파크.<br/>
            와이키키처럼 탁 트이고 시원한 이국적 분위기를 즐기세요!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="card-arabian bg-gold-50 border-gold-200 px-8 py-5 text-center">
              <div className="font-arabic text-gold-600 text-3xl">50,000원</div>
              <div className="text-stone-500 text-sm font-body mt-1">1일 이용권 (09:00~18:00)</div>
            </div>
            <Link href="/membership" className="btn-gold self-center">이용권 구매</Link>
          </div>
        </div>
      </section>

      {/* ── 어트랙션 ────────────────────────── */}
      <section className="py-20 px-4 bg-white arabic-pattern">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="title-arabian mb-4">어트랙션</h2>
            <div className="divider-gold max-w-xs mx-auto" />
            <p className="text-stone-500 font-body">총 4가지 야외 수영 어트랙션</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attr) => (
              <div key={attr.name}
                className={`rounded-3xl bg-gradient-to-br ${attr.color} border ${attr.border}
                p-6 shadow-card hover:shadow-card-lg hover:scale-[1.01] transition-all duration-300 group flex flex-col`}>
                
                {/* Real Image instead of Emoji */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 border border-gold-100 shadow-sm flex-shrink-0">
                  <img src={attr.imageUrl} alt={attr.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-grow">
                    <h3 className="font-display text-gold-700 text-xl">{attr.name}</h3>
                    <p className="font-body text-gold-500 text-xs tracking-widest uppercase">{attr.eng}</p>
                  </div>
                </div>
                <p className="text-stone-600 font-body text-sm leading-relaxed mb-5 flex-grow">{attr.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {attr.features.map((f) => (
                    <span key={f} className="text-xs px-3 py-1 rounded-full bg-white/70 text-stone-600 border border-stone-200 font-body shadow-sm">
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 평상 & BBQ ──────────────────────── */}
      <section id="pavilion" className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="title-arabian mb-4">평상 & BBQ</h2>
            <div className="divider-gold max-w-xs mx-auto" />
            <p className="text-stone-500 font-body max-w-lg mx-auto">
              야자수 그늘과 아라비안 천막 지붕 아래 목재 평상에서<br/>
              BBQ와 함께 특별한 하루를 만끽하세요
            </p>
          </div>

          {/* 평상 시각화 */}
          <div className="rounded-3xl overflow-hidden border border-gold-200 bg-gradient-to-b from-sky-200 to-sand-100
            p-10 mb-10 shadow-card-lg">

            {/* 하늘 배경 안의 야자수 */}
            <div className="flex justify-around mb-6">
              {[1,2,3].map(i => (
                <div key={i} className="text-center">
                  <div className="text-5xl mb-1">🌴</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative">
                  {/* 천막 지붕 */}
                  <div className="w-full h-4 bg-gradient-to-r from-gold-500 to-sand-400 rounded-t-2xl shadow-gold"/>
                  <div className="w-full h-5 bg-gradient-to-b from-gold-400/70 to-gold-200/40"/>
                  {/* 평상 본체 */}
                  <div className="w-full rounded-b-xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300
                    p-4 min-h-[90px] flex items-center justify-center shadow-sm">
                    <div className="text-center">
                      <span className="text-3xl">🛋️</span>
                      <div className="text-xs text-amber-700 font-body mt-1 font-medium font-bold">평상 {i}구역</div>
                    </div>
                  </div>
                  {/* BBQ */}
                  <div className="mt-3 text-center">
                    <span className="text-2xl">🔥🍖</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-stone-400 text-xs font-body mt-6">* 평상 배치 예시 (실제와 다를 수 있음)</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {pavilionFeatures.map((feat) => (
              <div key={feat.text}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gold-100 shadow-card hover:shadow-card-lg transition-shadow">
                <span className="text-xl">{feat.icon}</span>
                <span className="text-stone-600 text-sm font-body leading-relaxed">{feat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 이용 안내 ───────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="card-arabian bg-gradient-to-br from-gold-50 to-amber-50 border-gold-200 p-8">
            <h3 className="font-display text-gold-700 text-xl mb-6">야외 이용 안내</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-body">
              <div>
                <h4 className="text-gold-600 font-semibold mb-3">운영 정보</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>⏰ 운영시간: 09:00 ~ 18:00</li>
                  <li>💰 이용요금: 50,000원 / 1일</li>
                  <li>📍 위치: 인천광역시 남동구</li>
                  <li>🅿️ 주차: 무료 주차장 완비</li>
                </ul>
              </div>
              <div>
                <h4 className="text-gold-600 font-semibold mb-3">주의 사항</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>🚫 음식물 반입: 평상 구역만 허용</li>
                  <li>🩲 수영복 착용 필수</li>
                  <li>⚠️ 영유아 보호자 동반 필수</li>
                  <li>🍺 주류 반입 금지</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className="py-16 px-4 text-center bg-gradient-to-b from-white to-amber-50">
        <Link href="/membership" className="btn-gold text-lg px-12 py-4">
          🎫 야외 이용권 구매하기
        </Link>
      </section>
    </div>
  );
}
