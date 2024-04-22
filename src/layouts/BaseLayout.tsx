"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import Navigation from "../common/components/Navigation";
import Mobile from "../common/components/Mobile";

type Props = {
  children: React.ReactNode;
};
export default function BaseLayout({ children }: Props) {
  const pathname = usePathname();
  const hideDefaultLayoutPaths = pathname.startsWith("/register");

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth < 768);
    };
    handleResize();

    console.log(window.outerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="dd">
      {isMobile && <Mobile />}
      {!isMobile && !hideDefaultLayoutPaths && <Header />}
      {!isMobile && !hideDefaultLayoutPaths && <Navigation />}
      {!isMobile && <div className="main">{children}</div>}
      {!isMobile && !hideDefaultLayoutPaths && <Footer />}
    </div>
  );
}
