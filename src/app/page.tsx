import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '아장 수영장 | 인천 남동구 야외 워터파크 & 실내 수영장',
  description: '인천 남동구 아장 수영장 — 야자수가 우거진 아라비안 테마 야외 워터파크와 25m 실내 수영장. 09:00~18:00',
};

const features = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
    title: '아라비안 야외 파크',
    desc: '야자수와 황금 아치 아래 유수풀·파도풀·미끄럼틀을 즐기세요',
    href: '/outdoor',
    bg: 'bg-gradient-to-br from-gold-50 to-sand-100',
    border: 'border-gold-200',
    badge: '50,000원 / 1일',
    badgeClass: 'badge-gold',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    title: '실내 25m 수영장',
    desc: '채광 가득한 넓은 레인과 쾌적한 휴식 공간의 실내 수영장',
    href: '/indoor',
    bg: 'bg-gradient-to-br from-sky-50 to-teal-50',
    border: 'border-sky-200',
    badge: '10,000원 / 1회',
    badgeClass: 'badge-sky',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    title: '평상 & BBQ',
    desc: '아라비안 천막 아래 평상에서 고기를 구워먹는 특별한 경험',
    href: '/outdoor#pavilion',
    bg: 'bg-gradient-to-br from-orange-50 to-amber-100',
    border: 'border-amber-200',
    badge: '야외권 포함',
    badgeClass: 'badge-gold',
  },
];

const stats = [
  { value: '25m', label: '실내 수영장' },
  { value: '4종', label: '야외 어트랙션' },
  { value: '09-18', label: '운영 시간' },
  { value: '인천', label: '남동구 위치' },
];

const outdoorHighlights = [
  { imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=400&q=80', name: '유수풀', desc: '야자수 따라 흐르는 물길', color: 'from-gold-50 to-amber-100', border: 'border-gold-200' },
  { imageUrl: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=400&q=80', name: '파도풀', desc: '하와이 스타일 파도 체험', color: 'from-sky-50 to-teal-100', border: 'border-sky-200' },
  { imageUrl: 'https://images.unsplash.com/photo-1579684947550-22e945224d51?auto=format&fit=crop&w=400&q=80', name: '미끄럼틀', desc: '짜릿한 워터슬라이드', color: 'from-orange-50 to-amber-100', border: 'border-orange-200' },
  { imageUrl: 'https://images.unsplash.com/photo-1564507592937-25994a9015b2?auto=format&fit=crop&w=400&q=80', name: '영유아풀', desc: '안전한 아이 전용 풀', color: 'from-teal-50 to-sky-100', border: 'border-teal-200' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ══ 히어로 ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* 하늘 배경 그라디언트 */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sand-100" />

        {/* 태양 */}
        <div className="absolute top-16 right-1/4 w-28 h-28 rounded-full
          bg-gradient-to-br from-yellow-200 to-sand-300 animate-sun-pulse opacity-90" />
        <div className="absolute top-16 right-1/4 w-20 h-20 rounded-full
          bg-gradient-to-br from-yellow-100 to-yellow-200 mt-4 mr-4" style={{ top: '4.5rem', right: 'calc(25% + 1rem)' }} />

        {/* 구름 */}
        <div className="absolute top-20 left-16 opacity-80">
          <div className="relative">
            <div className="w-24 h-10 bg-white rounded-full" />
            <div className="absolute -top-4 left-4 w-16 h-14 bg-white rounded-full" />
            <div className="absolute -top-2 left-12 w-12 h-10 bg-white rounded-full" />
          </div>
        </div>
        <div className="absolute top-14 right-16 opacity-70">
          <div className="relative">
            <div className="w-20 h-8 bg-white rounded-full" />
            <div className="absolute -top-3 left-3 w-12 h-11 bg-white rounded-full" />
            <div className="absolute -top-1 left-10 w-10 h-8 bg-white rounded-full" />
          </div>
        </div>
        <div className="absolute top-32 left-1/3 opacity-60">
          <div className="relative">
            <div className="w-32 h-9 bg-white rounded-full" />
            <div className="absolute -top-4 left-6 w-20 h-14 bg-white rounded-full" />
            <div className="absolute -top-1 left-18 w-14 h-10 bg-white rounded-full" />
          </div>
        </div>

        {/* 야자수 왼쪽 */}
        <div className="absolute bottom-0 left-0 w-48 h-80 pointer-events-none">
          <svg viewBox="0 0 120 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 나무 줄기 */}
            <path d="M65 280 Q62 240 58 200 Q60 160 64 120 Q62 80 66 50" stroke="#a16207" strokeWidth="8" fill="none" strokeLinecap="round"/>
            {/* 잎 */}
            <ellipse cx="66" cy="50" rx="38" ry="9" fill="#15803d" transform="rotate(-35 66 50)" opacity="0.95"/>
            <ellipse cx="66" cy="46" rx="34" ry="8" fill="#16a34a" transform="rotate(25 66 46)" opacity="0.9"/>
            <ellipse cx="66" cy="42" rx="32" ry="7" fill="#15803d" transform="rotate(-65 66 42)" opacity="0.95"/>
            <ellipse cx="66" cy="38" rx="30" ry="7" fill="#22c55e" transform="rotate(55 66 38)" opacity="0.85"/>
            <ellipse cx="66" cy="34" rx="28" ry="6" fill="#16a34a" transform="rotate(-15 66 34)" opacity="0.9"/>
            <ellipse cx="66" cy="30" rx="24" ry="6" fill="#15803d" transform="rotate(75 66 30)" opacity="0.85"/>
            {/* 코코넛 */}
            <circle cx="63" cy="54" r="5" fill="#92400e" opacity="0.8"/>
            <circle cx="70" cy="56" r="4" fill="#78350f" opacity="0.8"/>
          </svg>
        </div>

        {/* 야자수 오른쪽 */}
        <div className="absolute bottom-0 right-0 w-48 h-80 pointer-events-none">
          <svg viewBox="0 0 120 280" className="w-full h-full transform scale-x-[-1]" xmlns="http://www.w3.org/2000/svg">
            <path d="M65 280 Q62 240 58 200 Q60 160 64 120 Q62 80 66 50" stroke="#a16207" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <ellipse cx="66" cy="50" rx="38" ry="9" fill="#15803d" transform="rotate(-35 66 50)" opacity="0.95"/>
            <ellipse cx="66" cy="46" rx="34" ry="8" fill="#16a34a" transform="rotate(25 66 46)" opacity="0.9"/>
            <ellipse cx="66" cy="42" rx="32" ry="7" fill="#15803d" transform="rotate(-65 66 42)" opacity="0.95"/>
            <ellipse cx="66" cy="38" rx="30" ry="7" fill="#22c55e" transform="rotate(55 66 38)" opacity="0.85"/>
            <ellipse cx="66" cy="34" rx="28" ry="6" fill="#16a34a" transform="rotate(-15 66 34)" opacity="0.9"/>
            <ellipse cx="66" cy="30" rx="24" ry="6" fill="#15803d" transform="rotate(75 66 30)" opacity="0.85"/>
            <circle cx="63" cy="54" r="5" fill="#92400e" opacity="0.8"/>
            <circle cx="70" cy="56" r="4" fill="#78350f" opacity="0.8"/>
          </svg>
        </div>

        {/* 아라비안 아치 장식 */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-56 pointer-events-none opacity-15">
          <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 200 Q30 60 150 20 Q270 60 270 200" stroke="#C8962A" strokeWidth="3" fill="none"/>
            <path d="M60 200 Q60 90 150 55 Q240 90 240 200" stroke="#C8962A" strokeWidth="2" fill="none"/>
            {/* 아라비안 별 */}
            <polygon points="150,10 155,25 170,25 158,34 163,49 150,40 137,49 142,34 130,25 145,25" fill="#C8962A" opacity="0.6"/>
          </svg>
        </div>

        {/* 터콰이즈 물결 바닥 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
            <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
              fill="#22D3EE" fillOpacity="0.5"/>
            <path d="M0,80 C360,40 720,100 1080,60 C1260,40 1380,80 1440,70 L1440,120 L0,120 Z"
              fill="#0EA5E9" fillOpacity="0.35"/>
            <path d="M0,95 C480,75 960,105 1440,90 L1440,120 L0,120 Z"
              fill="#0284C7" fillOpacity="0.2"/>
          </svg>
        </div>

        {/* 히어로 콘텐츠 */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">

          <div className="mb-5 animate-fade-in-up">
            <span className="badge-gold text-sm tracking-widest">
              🌴 인천 남동구 아라비안 워터파크 🌴
            </span>
          </div>

          <h1 className="font-arabic text-5xl md:text-7xl lg:text-8xl
            text-transparent bg-clip-text bg-gradient-to-b from-gold-700 to-gold-500
            mb-3 tracking-widest drop-shadow-sm animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            아장 수영장
          </h1>

          <p className="font-display text-gold-600/70 text-sm md:text-base tracking-[0.5em] uppercase mb-6
            animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            AJANG SWIMMING & WATERPARK
          </p>

          <p className="font-body text-sky-800 text-base md:text-xl max-w-2xl mx-auto leading-relaxed
            mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            야자수 그늘 아래 황금빛 아라비안 테마 야외 워터파크와<br className="hidden md:block"/>
            채광 가득한 실내 25m 수영장이 함께하는 특별한 공간
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}>
            <Link href="/outdoor" className="btn-gold text-base px-10 py-4">
              🌴 야외 파크 둘러보기
            </Link>
            <Link href="/membership" className="btn-sky text-base px-10 py-4">
              🎫 회원권 구매
            </Link>
          </div>

          {/* 운영 정보 */}
          <div className="flex flex-wrap gap-4 justify-center mt-10 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}>
            <span className="flex items-center gap-2 text-sm text-sky-700 font-body bg-white/70 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              오늘 운영 중 (09:00~18:00)
            </span>
            <span className="text-sm text-sky-700 font-body bg-white/70 px-4 py-2 rounded-full">
              📍 인천광역시 남동구
            </span>
          </div>
        </div>
      </section>

      {/* ══ 통계 ══════════════════════════════════════ */}
      <section className="relative py-10 bg-white border-y border-gold-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center group">
              <div className="font-arabic text-3xl md:text-4xl text-gold-500 group-hover:text-gold-600 transition-colors">
                {s.value}
              </div>
              <div className="font-body text-stone-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 시설 소개 카드 ══════════════════════════ */}
      <section className="py-20 px-4 bg-amber-50 arabic-pattern">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="title-arabian mb-4">시설 안내</h2>
            <div className="divider-gold max-w-xs mx-auto" />
            <p className="text-stone-500 font-body">아장 수영장의 모든 시설을 만나보세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feat) => (
              <Link key={feat.href} href={feat.href} className="group">
                <div className={`card-arabian ${feat.bg} border ${feat.border} h-full p-6
                  group-hover:scale-[1.02] group-hover:shadow-card-lg transition-all duration-500 cursor-pointer flex flex-col`}>
                  
                  {/* Real Image instead of Emoji */}
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 border border-gold-100 shadow-sm">
                    <img src={feat.imageUrl} alt={feat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  <h3 className="font-display text-gold-700 text-xl mb-3">{feat.title}</h3>
                  <p className="text-stone-500 font-body text-sm leading-relaxed mb-6 flex-grow">{feat.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className={feat.badgeClass}>{feat.badge}</span>
                    <span className="text-gold-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 야외 파크 하이라이트 ══════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        {/* 밝은 하늘+모래 배경 */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 to-sand-100" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge-gold mb-4 mx-auto w-fit">🌴 아라비안나이트 × 트로피컬</div>
            <h2 className="title-arabian mb-4">야외 워터파크</h2>
            <div className="divider-gold max-w-xs mx-auto" />
            <p className="text-stone-600 font-body max-w-xl mx-auto">
              야자수와 황금 아치가 어우러진 밝고 이국적인 공간에서<br/>
              파도풀·유수풀·미끄럼틀을 마음껏 즐기세요
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {outdoorHighlights.map((item) => (
              <div key={item.name} className={`group rounded-2xl bg-gradient-to-br ${item.color} border ${item.border}
                p-4 text-center shadow-card hover:shadow-card-lg hover:scale-105 transition-all duration-300 flex flex-col`}>
                
                {/* Real Image instead of Emoji */}
                <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3 border border-sand-200">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="font-display text-gold-700 text-sm mb-1">{item.name}</div>
                <div className="text-stone-500 text-xs font-body">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* 평상 BBQ 카드 */}
          <div className="card-arabian bg-gradient-to-r from-amber-50 to-gold-50 border-gold-200 p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-full md:w-48 h-32 rounded-2xl overflow-hidden border border-gold-200 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80" alt="BBQ" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-display text-gold-700 text-xl mb-2">아라비안 평상 & BBQ</h3>
                <p className="text-stone-500 font-body text-sm leading-relaxed">
                  야자수와 황금 천막 아래 목재 평상에서 여유로운 휴식과 BBQ를 즐기세요.<br/>
                  바람은 통하고 햇빛은 막아주는 이국적인 공간입니다.
                </p>
              </div>
              <Link href="/outdoor" className="btn-gold whitespace-nowrap text-sm">자세히 보기</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 실내 수영장 하이라이트 ══════════════════ */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="badge-sky mb-4 w-fit mx-auto md:mx-0">🏊 실내 수영장</div>
              <h2 className="title-ocean mb-4">25m 실내 수영장</h2>
              <div className="divider-sky max-w-xs md:mx-0" />
              <p className="text-stone-600 font-body leading-relaxed mb-8">
                탁 트인 넓은 공간에 햇살이 가득 들어오는 실내 25m 수영장.<br/>
                깨끗하고 쾌적한 환경에서 수영을 즐기세요.
              </p>
              <div className="flex gap-4 justify-center md:justify-start mb-8">
                <div className="card-ocean bg-sky-50 border-sky-200 p-5 text-center">
                  <div className="font-arabic text-3xl text-sky-600">10,000원</div>
                  <div className="text-stone-500 text-xs font-body mt-1">1회 이용</div>
                </div>
                <div className="card-ocean bg-teal-50 border-teal-200 p-5 text-center">
                  <div className="font-arabic text-3xl text-teal-600">50,000원</div>
                  <div className="text-stone-500 text-xs font-body mt-1">월정액 무제한</div>
                </div>
              </div>
              <Link href="/indoor" className="btn-sky">실내 수영장 보기</Link>
            </div>
            <div className="flex-1">
              <div className="card-ocean bg-gradient-to-br from-sky-100 to-teal-100 border-sky-200 p-8"
                style={{ minHeight: 280 }}>
                <div className="text-center mb-4">
                  <span className="font-display text-sky-700 text-lg tracking-widest">25m 수영장</span>
                </div>
                {[1,2,3,4,5].map((lane) => (
                  <div key={lane} className="flex items-center gap-2 mb-2">
                    <span className="text-sky-500 text-xs w-12 font-body">{lane}레인</span>
                    <div className="flex-1 h-9 rounded-lg bg-gradient-to-r from-sky-300/60 via-teal-200/80 to-sky-300/60
                      border border-sky-300/40 relative overflow-hidden shadow-sm">
                      <div className="absolute inset-0 opacity-40"
                        style={{backgroundImage: 'repeating-linear-gradient(90deg,transparent,transparent 30px,rgba(255,255,255,0.4) 30px,rgba(255,255,255,0.4) 31px)'}}/>
                    </div>
                  </div>
                ))}
                <div className="mt-3 flex justify-between text-xs text-sky-600 font-body px-14">
                  <span>출발</span><span>— 25m —</span><span>도착</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════ */}
      <section className="py-20 px-4 bg-gradient-to-r from-gold-50 via-amber-50 to-sky-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-6">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=150&q=80" className="w-16 h-16 rounded-full object-cover border border-gold-200 shadow-sm" alt="Pool" />
            <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=150&q=80" className="w-16 h-16 rounded-full object-cover border border-gold-200 shadow-sm" alt="Cabana" />
            <img src="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=150&q=80" className="w-16 h-16 rounded-full object-cover border border-gold-200 shadow-sm" alt="Beach" />
          </div>
          <h2 className="font-arabic text-3xl md:text-4xl text-gold-600 mb-4 tracking-widest">
            지금 바로 시작하세요
          </h2>
          <div className="divider-gold max-w-xs mx-auto" />
          <p className="text-stone-600 font-body mb-10 leading-relaxed">
            회원가입 후 이용권을 구매하고<br/>아장 수영장의 모든 시설을 즐겨보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-gold text-lg px-12 py-4">
              🎫 회원가입 / 이용권 구매
            </Link>
            <Link href="/contact" className="btn-sky text-lg px-12 py-4">
              📍 오시는 길
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
