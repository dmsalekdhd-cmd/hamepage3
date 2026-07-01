import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '문의하기 — 오시는 길',
  description: '아장 수영장 위치 및 문의 — 인천광역시 남동구, 인스타그램·카카오톡으로 문의하세요. 운영시간 09:00~18:00',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* ── 히어로 ─────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="badge-gold mb-6 mx-auto w-fit">📍 위치 & 문의</div>
          <h1 className="title-arabian mb-4">오시는 길</h1>
          <div className="divider-gold max-w-xs mx-auto" />
          <p className="text-stone-600 font-body text-lg">
            인천광역시 남동구에 위치한 아장 수영장입니다.<br />
            궁금하신 사항은 아래 채널로 문의해 주세요.
          </p>
        </div>
      </section>

      {/* ── 지도 + 연락처 ───────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 지도 */}
          <div className="rounded-3xl overflow-hidden border border-gold-200 bg-white shadow-gold" style={{ minHeight: 380 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50831.07438!2d126.7!3d37.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b61a0cef59e4d%3A0x41e1cf04d!2z7J207LKc6rSR7Ja07IucIOuCmOuPhOq1rA!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="아장 수영장 위치"
            />
          </div>

          {/* 정보 */}
          <div className="flex flex-col gap-5">
            {/* 기본 정보 */}
            <div className="card-arabian p-6">
              <h3 className="font-display text-gold-600 text-lg mb-5 tracking-wide">기본 정보</h3>
              <div className="space-y-4 font-body text-sm">
                {[
                  { icon: '📍', label: '주소', value: '인천광역시 남동구' },
                  { icon: '⏰', label: '운영시간', value: '매일 09:00 ~ 18:00' },
                  { icon: '🅿️', label: '주차', value: '무료 주차 가능' },
                  { icon: '🚌', label: '대중교통', value: '인근 버스 정류장 도보 5분' },
                ].map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <span className="text-xl w-7 flex-shrink-0">{info.icon}</span>
                    <div>
                      <span className="text-stone-400 text-xs">{info.label}</span>
                      <p className="text-stone-700">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SNS 문의 */}
            <div className="card-arabian p-6">
              <h3 className="font-display text-gold-600 text-lg mb-5 tracking-wide">SNS 문의</h3>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/ajang_pool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-pink-900/20 to-purple-900/20
                    border border-pink-500/20 hover:border-pink-400/40 hover:scale-[1.01] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-2xl flex-shrink-0">
                    📸
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium group-hover:text-pink-300 transition-colors">Instagram</div>
                    <div className="text-stone-400 text-xs">@ajang_pool</div>
                  </div>
                  <span className="text-stone-400 group-hover:text-pink-400 transition-colors">→</span>
                </a>

                <a
                  href="https://open.kakao.com/ajang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-yellow-900/20 to-yellow-800/20
                    border border-yellow-500/20 hover:border-yellow-400/40 hover:scale-[1.01] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-2xl flex-shrink-0">
                    💬
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium group-hover:text-yellow-300 transition-colors">카카오톡 오픈채팅</div>
                    <div className="text-stone-400 text-xs">실시간 문의 가능</div>
                  </div>
                  <span className="text-stone-400 group-hover:text-yellow-400 transition-colors">→</span>
                </a>

                <Link
                  href="/inquiry"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gold-900/20 to-amber-50
                    border border-gold-200 hover:border-gold-400/40 hover:scale-[1.01] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-2xl flex-shrink-0">
                    ✉️
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium group-hover:text-gold-600 transition-colors">회원 문의 게시판</div>
                    <div className="text-stone-400 text-xs">로그인 후 문의 작성 가능</div>
                  </div>
                  <span className="text-stone-400 group-hover:text-gold-400 transition-colors">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 운영시간 달력 ─────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="card-arabian p-8 text-center">
            <h3 className="font-display text-gold-600 text-xl mb-6 tracking-wide">운영 시간</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { day: '월~금', time: '09:00 ~ 18:00', status: '정상 운영' },
                { day: '토·일', time: '09:00 ~ 18:00', status: '정상 운영' },
                { day: '공휴일', time: '09:00 ~ 18:00', status: '정상 운영' },
                { day: '시설 점검일', time: '별도 공지', status: '휴장' },
              ].map((item) => (
                <div key={item.day} className="p-4 rounded-xl bg-white/80 border border-gold-200">
                  <div className="font-display text-gold-400 text-sm mb-1">{item.day}</div>
                  <div className="text-white font-body text-base font-medium">{item.time}</div>
                  <div className={`text-xs font-body mt-1 ${item.status === '휴장' ? 'text-red-400' : 'text-green-400'}`}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-stone-400 text-xs font-body mt-6">
              * 기상 악화 등 불가피한 사정으로 운영이 변경될 수 있습니다.<br />
              인스타그램 또는 카카오톡으로 사전 확인해 주세요.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
