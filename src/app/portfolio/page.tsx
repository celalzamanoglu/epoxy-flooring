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

  // Array-driven list of images for the portfolio sections
  const images = [
    "/portfolio/IMG_4004.jpg",
    "/portfolio/IMG_4018.jpg",
    "/portfolio/IMG_4029.jpg",
    "/portfolio/IMG_4034.jpg",
    "/portfolio/IMG_5193.jpg",
    "/portfolio/IMG_5270.jpg",
    "/portfolio/IMG_5273.jpg",
    "/portfolio/IMG_1712.JPG",
    "/portfolio/IMG_4507.JPG",
    "/portfolio/IMG_4663.JPG",
    "/portfolio/IMG_4509.JPG",
    "/portfolio/IMG_4439.PNG",
    "/portfolio/IMG_4508.PNG",
    "/portfolio/IMG_4511.PNG",
    "/portfolio/IMG_4512.PNG",
    "/portfolio/IMG_4513.PNG",
    "/portfolio/IMG_4519.PNG",
    "/portfolio/IMG_4520.PNG",
    "/portfolio/IMG_4521.PNG",
    "/portfolio/IMG_4522.PNG",
    "/portfolio/IMG_4524.PNG",
    "/portfolio/IMG_4525.PNG",
    "/portfolio/IMG_4526.PNG",
    "/portfolio/IMG_4571.PNG",
    "/portfolio/IMG_4572.PNG",
    "/portfolio/IMG_4585.PNG",
    "/portfolio/IMG_4586.PNG",
    "/portfolio/IMG_4759.PNG",
  ];

  const PortfolioImageSection = ({
    index,
    src,
    scrollYProgress,
    totalTransitions,
  }: {
    index: number;
    src: string;
    scrollYProgress: MotionValue<number>;
    totalTransitions: number;
  }) => {
    const transitions = Math.max(1, totalTransitions);
    const segmentStart = index === 0 ? 0 : (index - 1) / transitions;
    const segmentEnd = index === 0 ? 1 / transitions : index / transitions;

    const scale = useTransform(
      scrollYProgress,
      [segmentStart, segmentEnd],
      index === 0 ? [1, 0.8] : [0.8, 1]
    );
    const rotate = useTransform(
      scrollYProgress,
      [segmentStart, segmentEnd],
      index === 0 ? [0, -5] : [5, 0]
    );

    const sectionClassName = index === 0 ? "sticky top-0 h-screen" : "relative h-screen";

    return (
      <motion.div style={{ scale, rotate }} className={sectionClassName}>
        <Image
          src={src}
          alt="Featured epoxy flooring project"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority={index === 0}
        />
      </motion.div>
    );
  };

  return (
    <main
      ref={container}
      className="relative"
      style={{ height: `${images.length * 100}vh` }}
    >
      {images.map((src, index) => (
        <PortfolioImageSection
          key={src}
          index={index}
          src={src}
          scrollYProgress={scrollYProgress}
          totalTransitions={images.length - 1}
        />
      ))}
      <Footer />
    </main>
  );
};

export default PortfolioPage;
