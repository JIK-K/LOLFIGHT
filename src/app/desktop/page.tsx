import { Metadata } from "next";
import ScrollUp from "@/src/common/components/Desktop/ScrollUp";
import Hero from "@/src/common/components/Hero";
import Features from "@/src/common/components/Features";
import AboutSectionOne from "@/src/common/components/About/AboutSectionOne";

export const metadata: Metadata = {
  title: "LOL.FIGHT.DESKTOP",
  description: "Create and join League of Legends tournaments.",
};

export default function Page() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
    </>
  );
}
