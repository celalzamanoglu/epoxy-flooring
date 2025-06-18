"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

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

  // Track scroll progress for the hero section
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Single scale transform for the entire grid
  const scale = useTransform(scrollYProgress, [0, 0.8], [4, 1]);
  // Content scales up as parent zooms out
  const contentScale = useTransform(scrollYProgress, [0, 0.3], [0.3, 0.4]);

  // Memoize cells array to prevent unnecessary re-renders
  const cells: Cell[] = useMemo(
    () => [
      {
        id: "cell1",
        content: "Hero Content",
        bgClass:
          "bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 border-gray-700",
        imageStyle: "bg-[url('/hero-content-bg.jpg')] bg-cover bg-center",
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
    <section>
      {/* Main Container */}
      <div ref={container} className={styles.container}>
        {/* Sticky Container */}
        <div className={styles.sticky}>
          {/* Single motion.div wrapping all cells */}
          <motion.div
            style={{
              scale: scale,
              willChange: "transform",
            }}
            className="relative w-full h-full"
          >
            {cells.map((cell) => (
              <div key={cell.id} className={styles.el}>
                {/* imageContainer equivalent */}
                <div
                  className={`${styles.imageContainer} ${
                    cell.bgClass
                  } overflow-hidden ${cell.imageStyle || ""}`}
                >
                  {cell.isHero ? (
                    <HeroContent contentScale={contentScale} />
                  ) : (
                    <div className="relative h-full w-full">
                      <div className={`absolute inset-0 ${cell.imageStyle}`} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
