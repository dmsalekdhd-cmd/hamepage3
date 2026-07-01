import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '부대시설 — 개인 샤워실·탈의실',
  description: '아장 수영장 부대시설 — 개인 칸막이 샤워실, 개인 탈의실, 로커, 드라이어 완비',
};

const showerFeatures = [
  { icon: '🚿', title: '개인 샤워 부스', desc: '완벽한 프라이버시가 보장되는 1인 칸막이 샤워 부스' },
  { icon: '🔥', title: '온·냉수 조절', desc: '원하는 수온으로 정밀 조절 가능한 최신 샤워 시스템' },
  { icon: '🧴', title: '고급 어메니티', desc: '샴푸, 바디워시, 컨디셔너 무료 제공' },
  { icon: '✨', title: '청결 철저 관리', desc: '매 이용 주기마다 청소하여 항상 쾌적한 위생 상태' },
];

const lockerFeatures = [
  { icon: '🔑', title: '개인 탈의 부스', desc: '1인 전용 공간으로 완벽한 개인 프라이버시 보장' },
  { icon: '🗄️', title: '대용량 사물함', desc: '넉넉한 수납 공간 및 전자식 도어락 사물함 무료 제공' },
  { icon: '💨', title: '파우더 존', desc: '헤어 드라이어와 스킨케어 제품 무료 사용 가능' },
  { icon: '🌀', title: '수영복 탈수기', desc: '최신 원심 탈수기로 젖은 수영복을 간편하게' },
];

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      
      {/* ── 히어로 ─────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-stone-50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="badge-gold mb-6 mx-auto w-fit">🚿 편의 시설</div>
          <h1 className="title-arabian mb-4">개인 샤워실 & 탈의실</h1>
          <div className="divider-gold max-w-xs mx-auto" />
          <p className="text-stone-600 font-body text-lg leading-relaxed">
            프라이버시를 최우선으로 생각하는 아장 수영장.<br />
            개인별로 편안하게 들어갈 수 있는 독립형 샤워실과 탈의실을 완비하였습니다.
          </p>
        </div>
      </section>

      {/* ── 개인 샤워실 ────────────────────────── */}
      <section className="py-16 px-4 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* 실사 이미지 */}
            <div className="relative rounded-3xl overflow-hidden border border-gold-200 shadow-card-lg">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80" 
                alt="개인 샤워실" 
                className="w-full h-[400px] object-cover" 
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-gold-200 shadow-sm">
                <span className="text-gold-700 text-xs font-bold font-body">✓ 1인 개별 독립 샤워 부스</span>
              </div>
            </div>

            {/* 설명 및 특징 */}
            <div>
              <div className="badge-gold mb-4">🚿 Private Shower Room</div>
              <h2 className="title-arabian mb-4">독립형 개인 샤워실</h2>
              <div className="divider-gold max-w-xs mx-0 mb-6" />
              <p className="text-stone-600 font-body leading-relaxed mb-8">
                공용 샤워실의 불편함 없이 개별 부스에서 문을 닫고 혼자서 여유롭게 샤워를 즐길 수 있습니다. 
                온도 조절이 자유로운 독립 샤워 시설과 고급 세면도구가 기본 비치되어 있습니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {showerFeatures.map((feat) => (
                  <div key={feat.title} className="p-4 rounded-xl bg-amber-50/50 border border-gold-100">
                    <span className="text-2xl mb-2 block">{feat.icon}</span>
                    <h4 className="text-stone-800 font-bold text-sm font-body mb-1">{feat.title}</h4>
                    <p className="text-stone-500 text-xs font-body leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 개인 탈의실 ────────────────────────── */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* 설명 및 특징 (좌) */}
            <div className="order-2 lg:order-1">
              <div className="badge-sky mb-4">🔑 Individual Dressing Room</div>
              <h2 className="title-ocean mb-4">1인 전용 개인 탈의실</h2>
              <div className="divider-sky max-w-xs mx-0 mb-6" />
              <p className="text-stone-600 font-body leading-relaxed mb-8">
                옷을 갈아입을 때 프라이버시가 완벽히 차단되는 개인별 탈의 부스가 마련되어 있습니다. 
                개별 옷 보관을 위한 전자식 도어락 사물함과 대형 거울이 준비된 개인 파우더 공간도 함께 이용해 보세요.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {lockerFeatures.map((feat) => (
                  <div key={feat.title} className="p-4 rounded-xl bg-sky-50/50 border border-sky-100">
                    <span className="text-2xl mb-2 block">{feat.icon}</span>
                    <h4 className="text-stone-800 font-bold text-sm font-body mb-1">{feat.title}</h4>
                    <p className="text-stone-500 text-xs font-body leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 실사 이미지 (우) */}
            <div className="relative rounded-3xl overflow-hidden border border-sky-200 shadow-card-lg order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80" 
                alt="개인 탈의실" 
                className="w-full h-[400px] object-cover" 
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-sky-200 shadow-sm">
                <span className="text-sky-700 text-xs font-bold font-body">✓ 프라이빗 1인 탈의 부스 & 로커</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 기타 편의시설 ─────────────────────── */}
      <section className="py-16 px-4 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center title-arabian mb-8 font-bold">기타 편의시설</h2>
          <div className="divider-gold max-w-xs mx-auto mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🅿️', name: '무료 주차', desc: '넓은 자주식 주차장' },
              { icon: '🏧', name: '무인 키오스크', desc: '간편한 입장권 발행' },
              { icon: '💧', name: '정수 시스템', desc: '위생 음수대 완비' },
              { icon: '🏥', name: '구급실 운영', desc: '안전 요원 및 상비약' },
            ].map((item) => (
              <div key={item.name} className="text-center p-6 rounded-2xl bg-stone-50 border border-gold-200 hover:border-gold-400/50 transition-all duration-300 shadow-sm">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-stone-800 text-sm mb-1 font-body">{item.name}</div>
                <div className="text-stone-500 text-xs font-body">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
