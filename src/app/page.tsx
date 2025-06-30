"use client";

import { HeroSection } from "@/components/HeroSection";
import NumbersSection from "@/components/NumbersSection";
import LearnMoreCards from "@/components/LearnMoreCardsSection";
import { useEffect } from "react";
import Lenis from "lenis";
import ReviewsSection from "@/components/ReviewsSection";
import HexagonSections from "@/components/HexagonSections";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import ResultsSection from "@/components/ResultsSection";
import HowItWorksSection from "@/components/HowItWorksSection";

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
