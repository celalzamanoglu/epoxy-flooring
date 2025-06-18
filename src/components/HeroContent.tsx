import React from "react";
import styles from "./HeroContent.module.css";
import { motion, MotionValue } from "framer-motion";
import Button from "./Button";

interface HeroContentProps {
  contentScale: MotionValue<number>;
}

const HeroContent: React.FC<HeroContentProps> = ({ contentScale }) => (
  <div className={styles.heroContentWrapper}>
    {/* Blurred Gradient Overlay */}
    <div className={styles.heroOverlay} />
    {/* Content */}
    <motion.div className={styles.heroContent} style={{ scale: contentScale }}>
      {/* Info Box with Checkmark */}
      <div className={styles.infoBox}>
        <span className={styles.checkCircle}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#2ee9c7" />
            <path
              d="M6 10.5l2 2 4-4"
              stroke="#fff"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className={styles.infoText}>
          Full-Service Epoxy Flooring For A Flat Monthly Rate
        </span>
      </div>
      {/* Big Headline */}
      <h1 className={styles.heroTitle}>
        SEAMLESS EPOXY FLOORING <br /> & UNSTOPPABLE GROWTH
      </h1>
      {/* Subtitle */}
      <p className={styles.heroSubtitle}>
        Ditch the flooring headaches and drama. Get fast, beautiful, durable
        floors with our plug-and-play team.
      </p>
      {/* CTA Button */}
      <Button className={styles.heroButton}>SCHEDULE A CALL</Button>
      {/* Guarantee Text */}
      <div className={styles.guaranteeText}>2-Year Satisfaction Guarantee</div>
    </motion.div>
  </div>
);

export default HeroContent;
