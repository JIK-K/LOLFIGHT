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

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth < 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && <Mobile />}
      {!isMobile && !hideDefaultLayoutPaths && <Header />}
      {/* {!isMobile && !hideDefaultLayoutPaths && <Navigation />} */}
      {!isMobile && hideDefaultLayoutPaths && <DesktopNavigation />}
      {!isMobile && <div className="main">{children}</div>}
      {!isMobile && !hideDefaultLayoutPaths && <Footer />}
    </>
  );
}
