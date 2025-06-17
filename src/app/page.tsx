"use client";

import { HeroSection } from "@/components/HeroSection";
import NumbersSection from "@/components/NumbersSection";
import LearnMoreCards from "@/components/LearnMoreCardsSection";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="mt-[50vh] mb-[100vh] bg-[#222]">
      <HeroSection />
      <NumbersSection />
      <LearnMoreCards />
    </main>
  );
}
