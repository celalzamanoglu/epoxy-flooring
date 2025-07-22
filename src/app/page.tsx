"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

import { HeroSection } from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import NumbersSection from "@/components/NumbersSection";
import LearnMoreCards from "@/components/LearnMoreCardsSection";
import ReviewsSection from "@/components/ReviewsSection";
import HexagonSections from "@/components/HexagonSections";
import HowItWorksSection from "@/components/HowItWorksSection";
import ResultsSection from "@/components/ResultsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import EmailCollector from "@/components/EmailCollector";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showEmailCollector, setShowEmailCollector] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      lenis.destroy();
    };
  }, []);
  return (
    <main className="mt-[50vh] mb-[100vh] bg-[#1C1C1C]">
      <HeroSection />
      {isMobile && <VideoSection />}
      <NumbersSection />
      <LearnMoreCards />
      <ReviewsSection />
      <BeforeAfterSection />
      <HexagonSections />
      <HowItWorksSection />
      <ResultsSection />
      <CtaSection />
      <Footer />

      <EmailCollector isOpen={showEmailCollector} onClose={() => setShowEmailCollector(false)} />
    </main>
  );
}
