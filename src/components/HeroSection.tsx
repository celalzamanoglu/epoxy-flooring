"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo, useState, useEffect } from "react";

import styles from "./HeroSection.module.css";
import HeroContent from "./HeroContent";

interface Cell {
  id: string;
  content: string;
  description?: string;
  bgClass: string;
  imageStyle?: string;
  isHero?: boolean;
}

export function HeroSection() {
  const container = useRef(null);
  const [isXLargeScreen, setIsXLargeScreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isXSmallScreen, setIsXSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXLargeScreen(window.innerWidth >= 1920);
      setIsLargeScreen(window.innerWidth >= 1280);
      setIsMediumScreen(window.innerWidth >= 1024);
      setIsSmallScreen(window.innerWidth >= 768);
      setIsXSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Track scroll progress for the hero section
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Scale the grid
  const gridScale = useTransform(scrollYProgress, [0, 0.8], [3.8, 1]);

  // Define the end scale for the content based on screen size
  // It shrinks less on smaller screens to prevent overflow
  const contentStartScale = isXLargeScreen
    ? 0.9
    : isLargeScreen
    ? 0.9
    : isMediumScreen
    ? 0.8
    : isSmallScreen
    ? 0.8
    : isXSmallScreen
    ? 0.64
    : 0.5;

  const contentEndScale = isXLargeScreen
    ? 0.4
    : isLargeScreen
    ? 0.31
    : isMediumScreen
    ? 0.26
    : isSmallScreen
    ? 0.55
    : isXSmallScreen
    ? 0.5
    : 0.5;

  // Inverse scale for the content to maintain proportional size
  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.8],
    [contentStartScale, contentEndScale]
  );

  // Original 7-cell layout for larger screens
  const cells: Cell[] = useMemo(
    () => [
      {
        id: "cell1",
        content: "Hero Content",
        bgClass:
          "bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 border-gray-700",
        isHero: true,
      },
      {
        id: "cell2a",
        content: "Garage Flooring",
        description: "Durable & Chemical Resistant",
        bgClass: "bg-gradient-to-br from-gray-800 via-gray-700 to-slate-600",
        imageStyle: "bg-[url('/1.jpeg')] bg-cover bg-center",
      },
      {
        id: "cell2b",
        content: "Industrial Coatings",
        description: "Heavy-Duty Performance",
        bgClass: "bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900",
        imageStyle: "bg-[url('/2.jpg')] bg-cover bg-center",
      },
      {
        id: "cell3",
        content: "Decorative Epoxy",
        description: "Metallic & Color Flakes",
        bgClass:
          "bg-gradient-to-br from-amber-800 via-yellow-700 to-orange-800",
        imageStyle: "bg-[url('/3.jpg')] bg-cover bg-center",
      },
      {
        id: "cell4",
        content: "Commercial Floors",
        description: "High-Traffic Solutions",
        bgClass: "bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900",
        imageStyle: "bg-[url('/4.jpg')] bg-cover bg-center",
      },
      {
        id: "cell5",
        content: "Basement Waterproofing",
        description: "Moisture Protection",
        bgClass: "bg-gradient-to-br from-cyan-900 via-blue-800 to-slate-900",
        imageStyle: "bg-[url('/5.jpg')] bg-cover bg-center",
      },
      {
        id: "cell6",
        content: "Outdoor Patios",
        description: "Weather Resistant",
        bgClass: "bg-gradient-to-br from-stone-700 via-gray-600 to-slate-700",
        imageStyle: "bg-[url('/6.jpg')] bg-cover bg-center",
      },
    ],
    []
  );

  return (
    <section className={styles.heroSectionRoot}>
      {/* Main Container */}
      <div ref={container} className={styles.container}>
        {/* Sticky Container */}
        <div className={styles.sticky}>
          {/* Scaled grid background */}
          <motion.div
            style={{
              scale: gridScale,
              willChange: "transform",
            }}
            className="relative w-full h-full"
          >
            {cells.map((cell) => (
              <div key={cell.id} className={styles.el}>
                <div
                  className={`${styles.imageContainer} ${
                    cell.bgClass
                  } overflow-hidden ${cell.imageStyle || ""}`}
                >
                  {/* Only show image for all cells, not hero content */}
                  <div className="relative h-full w-full">
                    {/* Video background for hero cell */}
                    {cell.id === "cell1" ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src="/wide-2.mp4" type="video/mp4" />
                      </video>
                    ) : (
                      <div className={`absolute inset-0 ${cell.imageStyle}`} />
                    )}
                    {cell.id === "cell1" && (
                      <div className="absolute inset-0 bg-gradient-to-tl from-slate-900 via-gray-900 to-green-100 border-gray-700 opacity-60" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          {/* Absolutely centered, inversely-scaled hero content */}
          <motion.div
            className={styles.heroContentOverlay}
            style={{
              scale: contentScale,
              willChange: "transform",
            }}
          >
            <HeroContent />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
