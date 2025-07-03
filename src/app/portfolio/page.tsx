"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion"; /* 
import Lenis from "lenis"; */

import Footer from "@/components/Footer";

const PortfolioPage: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  /* useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Define scroll targets for each section
    const viewportHeight = window.innerHeight;
    const section1Target = 0;
    const section2Target = viewportHeight * 1.09; // Perfect for section 2
    const section3Target = viewportHeight * 2.1; // Reduced to show only section 3

    let currentSection = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (e.deltaY > 0 && currentSection < 2) {
        // Scrolling down
        currentSection++;
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scrolling up
        currentSection--;
      }

      let targetScroll = 0;
      switch (currentSection) {
        case 0:
          targetScroll = section1Target;
          break;
        case 1:
          targetScroll = section2Target;
          break;
        case 2:
          targetScroll = section3Target;
          break;
      }

      lenis.scrollTo(targetScroll);
    };

    let scrollTimeout: NodeJS.Timeout;
    const throttledWheel = (e: WheelEvent) => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => handleWheel(e), 100);
    };

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    document.addEventListener("wheel", throttledWheel, { passive: false });

    return () => {
      lenis.destroy();
      document.removeEventListener("wheel", throttledWheel);
      clearTimeout(scrollTimeout);
    };
  }, []); */

  const Section1 = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 0.5], [0, -5]);

    return (
      <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen">
        <Image src="/3.jpg" alt="Portfolio project showcase" fill style={{ objectFit: "cover" }} />
      </motion.div>
    );
  };

  const Section2 = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 0.5], [5, 0]);

    return (
      <motion.div style={{ scale, rotate }} className="relative h-screen">
        <Image src="/2.jpg" alt="Featured epoxy flooring project" fill style={{ objectFit: "cover" }} />
      </motion.div>
    );
  };

  const Section3 = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const scale = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0.5, 1], [5, 0]);

    return (
      <motion.div style={{ scale, rotate }} className="relative h-screen">
        <Image src="/4.jpg" alt="Featured epoxy flooring project" fill style={{ objectFit: "cover" }} />
      </motion.div>
    );
  };

  return (
    <main ref={container} className="relative h-[300vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
      <Section3 scrollYProgress={scrollYProgress} />
      <Footer />
    </main>
  );
};

export default PortfolioPage;
