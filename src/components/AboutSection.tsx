"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: 1500, suffix: "+", label: "Projects Completed" },
    { number: 2, suffix: "M+", label: "Sq Ft Installed" },
    { number: 15, suffix: "+", label: "Years Experience" },
    { number: 99, suffix: "%", label: "Customer Satisfaction" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden flex items-center justify-center min-h-screen"
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at left, #26504f , #1C1C1C)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              isInView={isInView}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedStat({
  number,
  suffix,
  label,
  isInView,
  delay,
}: {
  number: number;
  suffix: string;
  label: string;
  isInView: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 fps
        const increment = number / steps;
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= number) {
            setCount(number);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, number, delay]);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-6xl font-bold text-white mb-2">
        {count.toLocaleString()}
        <span className="text-blue-400">{suffix}</span>
      </div>
      <div className="text-gray-300 text-sm md:text-base font-medium">
        {label}
      </div>
    </motion.div>
  );
}
