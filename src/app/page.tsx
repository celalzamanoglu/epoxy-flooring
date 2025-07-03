"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { HeroSection } from "@/components/HeroSection";
import NumbersSection from "@/components/NumbersSection";
import LearnMoreCards from "@/components/LearnMoreCardsSection";
import ReviewsSection from "@/components/ReviewsSection";
import HexagonSections from "@/components/HexagonSections";
import HowItWorksSection from "@/components/HowItWorksSection";
import ResultsSection from "@/components/ResultsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <main className="mt-[50vh] mb-[100vh] bg-[#1C1C1C]">
      <HeroSection />
      <NumbersSection />
      <LearnMoreCards />
      <ReviewsSection />
      <HexagonSections />
      <HowItWorksSection />
      <ResultsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
