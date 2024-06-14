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
  description: "Create and join League of Legends tournaments.",
  icons: {
    icon: "/icon-blue.ico",
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
