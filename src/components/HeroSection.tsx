"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import { MotionValue } from "framer-motion";
import styles from "./HeroSection.module.css";

interface Cell {
  id: string;
  content: string;
  description?: string;
  scale: MotionValue<number>;
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

  // Transform scroll progress to different scale values for each cell (like tutorial)
  const scale4 = useTransform(scrollYProgress, [0, 0.8], [4, 1]);
  const scale5 = useTransform(scrollYProgress, [0, 0.8], [9, 1]);
  const scale6 = useTransform(scrollYProgress, [0, 0.8], [9, 1]);
  const scale8 = useTransform(scrollYProgress, [0, 0.8], [9, 1]);
  const scale9 = useTransform(scrollYProgress, [0, 0.8], [9, 1]);

  // Memoize cells array to prevent unnecessary re-renders
  const cells: Cell[] = useMemo(
    () => [
      {
        id: "cell1",
        content: "Hero Content",
        scale: scale4,
        bgClass:
          "bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 border-gray-700",
        imageStyle: "bg-[url('/hero-content-bg.jpg')] bg-cover bg-center",
        isHero: true,
      },
      {
        id: "cell2a",
        content: "Garage Flooring",
        description: "Durable & Chemical Resistant",
        scale: scale5,
        bgClass: "bg-gradient-to-br from-gray-800 via-gray-700 to-slate-600",
        imageStyle: "bg-[url('/1.jpeg')] bg-cover bg-center",
      },
      {
        id: "cell2b",
        content: "Industrial Coatings",
        description: "Heavy-Duty Performance",
        scale: scale6,
        bgClass: "bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900",
        imageStyle: "bg-[url('/2.jpg')] bg-cover bg-center",
      },
      {
        id: "cell3",
        content: "Decorative Epoxy",
        description: "Metallic & Color Flakes",
        scale: scale5,
        bgClass:
          "bg-gradient-to-br from-amber-800 via-yellow-700 to-orange-800",
        imageStyle: "bg-[url('/3.jpg')] bg-cover bg-center",
      },
      {
        id: "cell4",
        content: "Commercial Floors",
        description: "High-Traffic Solutions",
        scale: scale6,
        bgClass: "bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900",
        imageStyle: "bg-[url('/4.jpg')] bg-cover bg-center",
      },
      {
        id: "cell5",
        content: "Basement Waterproofing",
        description: "Moisture Protection",
        scale: scale8,
        bgClass: "bg-gradient-to-br from-cyan-900 via-blue-800 to-slate-900",
        imageStyle: "bg-[url('/5.jpg')] bg-cover bg-center",
      },
      {
        id: "cell6",
        content: "Outdoor Patios",
        description: "Weather Resistant",
        scale: scale9,
        bgClass: "bg-gradient-to-br from-stone-700 via-gray-600 to-slate-700",
        imageStyle: "bg-[url('/6.jpg')] bg-cover bg-center",
      },
    ],
    [scale4, scale5, scale6, scale8, scale9]
  );

  return (
    <section>
      {/* Main Container - Exact Tutorial Structure */}
      <div ref={container} className={styles.container}>
        {/* Sticky Container - Exact Tutorial Structure */}
        <div className={styles.sticky}>
          {cells.map((cell) => (
            <motion.div
              key={cell.id}
              style={{
                scale: cell.scale,
                willChange: "transform",
              }}
              className={styles.el}
            >
              {/* imageContainer equivalent */}
              <div
                className={`${styles.imageContainer} ${
                  cell.bgClass
                } overflow-hidden ${cell.imageStyle || ""}`}
              >
                {cell.isHero ? (
                  // Hero Content
                  <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
                    {/* Background Image */}
                    <div className={`absolute inset-0 ${cell.imageStyle}`} />

                    {/* Gradient Overlay - Same as AboutSection */}
                    {/* <div
                      className="absolute inset-0 opacity-80"
                      style={{
                        backgroundImage: `linear-gradient(
                          125deg,
                          hsl(0deg 0% 11%) 0%,
                          hsl(178deg 11% 15%) -1%,
                          hsl(178deg 26% 19%) -1%,
                          hsl(178deg 45% 20%) -2%,
                          hsl(178deg 52% 21%) 0%,
                          hsl(178deg 32% 19%) 21%,
                          hsl(178deg 16% 17%) 40%,
                          hsl(178deg 4% 13%) 55%,
                          hsl(0deg 0% 11%) 67%,
                          hsl(0deg 0% 11%) 79%,
                          hsl(0deg 0% 11%) 90%,
                          hsl(0deg 0% 11%) 100%
                        )`,
                      }}
                    />
 */}
                    {/* Blurred Glass Effect Overlay */}
                    <div className="absolute inset-0 bg-black/20" />

                    <motion.h1
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight relative z-10"
                    >
                      Transform Your
                      <br />
                      <span>Floors</span>
                    </motion.h1>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-xs md:text-sm text-gray-200 mb-4 leading-relaxed max-w-xs relative z-10"
                    >
                      Professional epoxy flooring solutions that combine
                      durability, beauty, and innovation.
                    </motion.p>
                  </div>
                ) : (
                  // Epoxy Flooring Images
                  <div className="relative h-full w-full">
                    {/* Background Image */}
                    <div className={`absolute inset-0 ${cell.imageStyle}`} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
