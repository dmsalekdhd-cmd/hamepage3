'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: '홈' },
  { href: '/outdoor', label: '야외 수영장' },
  { href: '/indoor', label: '실내 수영장' },
  { href: '/facilities', label: '부대시설' },
  { href: '/membership', label: '회원권/요금' },
  { href: '/inquiry', label: '회원 문의' },
  { href: '/contact', label: '오시는 길' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gold-200 shadow-[0_2px_20px_rgba(200,150,42,0.12)]'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-3xl animate-float">🌴</span>
          <div className="leading-tight">
            <div className="font-arabic text-gold-600 text-xl tracking-widest group-hover:text-gold-500 transition-colors">
              아장
            </div>
            <div className="font-body text-gold-400 text-[10px] tracking-[0.4em]">SWIMMING</div>
          </div>
        </Link>

        {/* 데스크톱 메뉴 */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3 py-2 rounded-lg font-body text-sm font-medium transition-all duration-300 group
                    ${isActive ? 'text-gold-600' : 'text-stone-600 hover:text-gold-600'}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full
                    bg-gradient-to-r from-gold-400 to-sand-400 transition-all duration-300
                    ${isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* 우측 버튼 */}
        <div className="hidden md:flex items-center">
          <Link href="/membership" className="btn-gold text-sm py-2 px-5">
            🎫 회원 입장
          </Link>
        </div>

        {/* 모바일 햄버거 */}
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2" aria-label="메뉴">
          {[0,1,2].map((i) => (
            <span key={i} className={`block h-0.5 w-6 bg-gold-500 transition-all duration-300
              ${i === 0 && mobileOpen ? 'rotate-45 translate-y-2' : ''}
              ${i === 1 && mobileOpen ? 'opacity-0' : ''}
              ${i === 2 && mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          ))}
        </button>
      </nav>

      {/* 모바일 메뉴 */}
      <div className={`md:hidden overflow-hidden transition-all duration-500
        ${mobileOpen ? 'max-h-screen' : 'max-h-0'}
        bg-white border-t border-gold-100`}>
        <ul className="px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-body text-sm font-medium transition-all duration-200
                    ${isActive
                      ? 'bg-gold-50 text-gold-600 border border-gold-200'
                      : 'text-stone-600 hover:bg-amber-50 hover:text-gold-600'}`}>
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <Link href="/membership" onClick={() => setMobileOpen(false)}
              className="block btn-gold text-center text-sm">
              🎫 회원 입장
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
