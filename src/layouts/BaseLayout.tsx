"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import Navigation from "../common/components/Navigation";

type Props = {
  children: React.ReactNode;
};
export default function BaseLayout({ children }: Props) {
  const pathname = usePathname();
  const hideDefaultLayoutPaths = pathname.startsWith("/register");

  return (
    <>
      {!hideDefaultLayoutPaths && <Header />}
      {!hideDefaultLayoutPaths && <Navigation />}
      {children}
      {!hideDefaultLayoutPaths && <Footer />}
    </>
  );
}
