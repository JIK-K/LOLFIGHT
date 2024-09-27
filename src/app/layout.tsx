import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";
import "../css/tailwind.css";
import Header from "../common/components/Header";
import Navigation from "../common/components/Navigation";
import Footer from "../common/components/Footer";
import localFont from "next/font/local";
import BaseLayout from "./../layouts/BaseLayout";

const inter = Inter({ subsets: ["latin"] });

const nanum_gothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LOL.FIGHT",
  description: "롤 내전/스크림은 LOLFIGHT - 롤 길드 대항전, 스크림, 내전",
  keywords: ["롤파이트", "LOLFIGHT", "내전", "스크림", "롤 커스텀", "길드전"],
  icons: {
    icon: "/icon-blue.ico",
  },
  other: {
    "google-adsense-account": "ca-pub-9861327972888599",
    "naver-site-verification": "4daab45dcb1a6c0d2ca0a0a6af3fa98575cce7a4",
  },
  verification: {
    google: "4TuSFIptJgyhAxtNwjEP3SKSVgMpvfm3_w43Zb3e91M",
  },
  openGraph: {
    title: "LOL.FIGHT - 롤 길드 대항전, 스크림, 내전",
    description: "롤 내전/스크림은 LOLFIGHT - 롤 길드 대항전, 스크림, 내전",
    url: "https://lolfight.kr", // 실제 사이트 URL로 변경
    type: "website",
    images: [
      {
        url: "https://lolfight.kr/api/public/image/icon-blue.png", // 실제 이미지 URL로 변경
        width: 800,
        height: 600,
        alt: "LOL.FIGHT",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "1280",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-['Pretendard'] bg-brandbgcolor h-screen">
      <body className={`bg-[#FCFCFC] dark:bg-black`}>
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
      {/* <body className={`${pretendard.className}`}>{children}</body> */}
    </html>
  );
}

import { Providers } from "./providers";
