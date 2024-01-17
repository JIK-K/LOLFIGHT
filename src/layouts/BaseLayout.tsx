"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

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
