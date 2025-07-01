import React, { useEffect, useRef, useState } from "react";
import styles from "./NumbersSection.module.css";

const counters = [
  { end: 400, suffix: "+", label: "Floors Perfected" },
  { end: 300, suffix: "+", label: "Happy Clients" },
  { end: 300000, suffix: "+", label: "SF Floors Installed" },
];

function formatNumber(num: number) {
  if (num >= 1000 && num < 1000000) return (num / 1000).toFixed(0) + "K";
  if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
  return num.toString();
}

const NumbersSection: React.FC = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start = [0, 0, 0];
    const ends = counters.map((c) => c.end);
    const duration = 1500; // ms
    const steps = 400;
    const increments = ends.map((end) => Math.ceil(end / steps));
    let currentStep = 0;

    intervalRef.current = setInterval(() => {
      currentStep++;
      start = start.map((val, i) => {
        const next = val + increments[i];
        return next > ends[i] ? ends[i] : next;
      });
      setCounts([...start]);
      if (currentStep >= steps) {
        setCounts(ends);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, duration / steps);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hasAnimated]);

  return (
    <section className={styles.numbersSection} ref={sectionRef}>
      <div className={styles.numbersContainer}>
        {counters.map((counter, i) => (
          <div className={styles.counter} key={counter.label}>
            <span className={styles.number}>
              {formatNumber(counts[i])}
              {counter.suffix}
            </span>
            <span className={styles.label}>{counter.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumbersSection;
