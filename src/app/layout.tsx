import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";
import "../css/tailwind.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.ttf",
  variable: "--font-pretendard",
});

const nanum_gothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en" className={pretendard.className}>
    <html lang="en">
      <body className={`${pretendard.className}`}>{children}</body>
    </html>
  );
}
