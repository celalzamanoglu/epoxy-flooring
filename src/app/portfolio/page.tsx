"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

import Footer from "@/components/Footer";

const PortfolioPage: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

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
