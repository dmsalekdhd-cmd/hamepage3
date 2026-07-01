import Link from 'next/link';

const quickLinks = [
  { href: '/outdoor',    label: '야외 수영장' },
  { href: '/indoor',     label: '실내 수영장' },
  { href: '/facilities', label: '부대시설' },
  { href: '/membership', label: '회원권/요금' },
  { href: '/inquiry',    label: '회원 문의' },
  { href: '/contact',    label: '오시는 길' },
];

const priceInfo = [
  { label: '야외 이용권',  price: '50,000원', sub: '1일' },
  { label: '실내 1회권',   price: '10,000원', sub: '1회' },
  { label: '실내 월정액',  price: '50,000원', sub: '1개월' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-50 to-gold-50 border-t border-gold-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* 브랜드 */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <span className="text-3xl animate-float">🌴</span>
              <div>
                <div className="font-arabic text-gold-600 text-xl tracking-widest group-hover:text-gold-500 transition-colors">아장</div>
                <div className="font-body text-gold-400 text-[10px] tracking-[0.4em]">SWIMMING</div>
              </div>
            </Link>
            <p className="text-stone-500 text-sm font-body leading-relaxed">
              인천 남동구 아라비안 × 트로피컬 테마<br/>
              야외 워터파크 + 실내 25m 수영장
            </p>
            <div className="mt-4 space-y-1 text-sm text-stone-500 font-body">
              <p>📍 인천광역시 남동구</p>
              <p>⏰ 09:00 ~ 18:00 (연중무휴)</p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="font-display text-gold-600 text-sm tracking-widest mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-stone-500 hover:text-gold-600 text-sm font-body transition-colors duration-200 flex items-center gap-1">
                    <span className="text-gold-400">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 요금 안내 */}
          <div>
            <h3 className="font-display text-gold-600 text-sm tracking-widest mb-4 uppercase">이용요금</h3>
            <ul className="space-y-3">
              {priceInfo.map((item) => (
                <li key={item.label} className="flex items-center justify-between">
                  <span className="text-stone-500 text-sm font-body">{item.label}</span>
                  <div className="text-right">
                    <span className="text-gold-600 text-sm font-bold">{item.price}</span>
                    <span className="text-stone-400 text-xs ml-1">/ {item.sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 문의 */}
          <div>
            <h3 className="font-display text-gold-600 text-sm tracking-widest mb-4 uppercase">문의하기</h3>
            <div className="space-y-3">
              <a href="https://instagram.com/ajang_pool" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-pink-200
                  hover:border-pink-400 hover:shadow-sm transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-xl flex-shrink-0">📸</div>
                <div>
                  <div className="text-stone-700 text-sm font-medium group-hover:text-pink-600 transition-colors">인스타그램</div>
                  <div className="text-stone-400 text-xs">@ajang_pool</div>
                </div>
              </a>
              <a href="https://open.kakao.com/ajang" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-yellow-200
                  hover:border-yellow-400 hover:shadow-sm transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-xl flex-shrink-0">💬</div>
                <div>
                  <div className="text-stone-700 text-sm font-medium group-hover:text-yellow-700 transition-colors">카카오톡</div>
                  <div className="text-stone-400 text-xs">오픈채팅 문의</div>
                </div>
              </a>
              <Link href="/inquiry"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-gold-200
                  hover:border-gold-400 hover:shadow-sm transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-xl flex-shrink-0">✉️</div>
                <div>
                  <div className="text-stone-700 text-sm font-medium group-hover:text-gold-600 transition-colors">회원 문의 게시판</div>
                  <div className="text-stone-400 text-xs">로그인 후 이용 가능</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="divider-gold mt-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-stone-400 text-xs font-body">© 2024 아장 수영장. All rights reserved.</p>
          <div className="flex items-center gap-1 text-xs text-stone-400 font-body">
            <span>인천광역시 남동구</span>
            <span className="text-gold-300 mx-1">|</span>
            <span>사업자등록번호: 000-00-00000</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
