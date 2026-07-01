import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "아장 수영장 | 인천 남동구",
    template: "%s | 아장 수영장",
  },
  description:
    "인천 남동구 아장 수영장 — 아라비안나이트 테마 야외 워터파크와 25m 실내 수영장. 유수풀, 파도풀, 미끄럼틀, 영유아풀, 평상 BBQ. 09:00~18:00 운영.",
  keywords: ["아장 수영장", "인천 수영장", "야외 수영장", "실내 수영장", "남동구 수영장", "워터파크"],
  openGraph: { type: "website", locale: "ko_KR", siteName: "아장 수영장" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600;700;900&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-amber-50 text-stone-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
