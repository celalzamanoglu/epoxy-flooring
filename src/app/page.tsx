"use client";

import { HeroSection } from "@/components/HeroSection";
/* import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection"; */
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
    <main className="mt-[50vh] mb-[100vh]">
      <HeroSection />
      {/*       <AboutSection />
      <TestimonialsSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection /> */}
    </main>
  );
}
