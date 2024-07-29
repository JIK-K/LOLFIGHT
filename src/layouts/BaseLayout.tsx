"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import Navigation from "../common/components/Navigation";
import Mobile from "../common/components/Mobile";
import DesktopNavigation from "../common/components/Desktop/DesktopHeader";

type Props = {
  children: React.ReactNode;
};
export default function BaseLayout({ children }: Props) {
  const pathname = usePathname();
  const hideDefaultLayoutPaths =
    pathname.startsWith("/register") || pathname.startsWith("/desktop");

  return (
    <>
      {!hideDefaultLayoutPaths && <Header />}
      {/* {!isMobile && !hideDefaultLayoutPaths && <Navigation />} */}
      {hideDefaultLayoutPaths && <DesktopNavigation />}
      <div className="main">{children}</div>
      {!hideDefaultLayoutPaths && <Footer />}
    </>
  );
}
