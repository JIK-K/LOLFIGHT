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

  return (
    <>
      {pathname !== "/register" && <Header />}
      {pathname !== "/register" && <Navigation />}
      {children}
      {pathname !== "/register" && <Footer />}
    </>
  );
}
