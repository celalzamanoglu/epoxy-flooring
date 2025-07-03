import React from "react";
import styles from "./HeroContent.module.css";
import Button from "./Button";
import Link from "next/link";

const HeroContent: React.FC = () => (
  <div className={styles.heroContentWrapper}>
    {/* Blurred Gradient Overlay */}
    <div className={styles.heroOverlay} />
    {/* Content */}
    <div className={styles.heroContent}>
      {/* Info Box with Checkmark */}
      <div className={styles.infoBox}>
        <span className={styles.checkCircle}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#2ee9c7" />
            <path d="M6 10.5l2 2 4-4" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className={styles.infoText}>
          Flake, Metallic & Polished Concrete in 📍 South Florida — We Travel for Metallic & Large-Scale Projects
          Nationwide
        </span>
      </div>
      {/* Big Headline */}
      <h1 className={styles.heroTitle}>TRANSFORM YOUR FLOORS INTO ART</h1>
      {/* Subtitle */}
      <p className={styles.heroSubtitle}>
        Premium metallic, flake, and polished epoxy flooring for residential, commercial, and industrial spaces.
        Durable. Stunning. One-of-a-kind.
      </p>
      {/* CTA Button */}
      <Link href="/contact">
        <Button className={styles.heroButton}>CONTACT US</Button>
      </Link>
      {/* Guarantee Text */}
      <div className={styles.guaranteeText}>Limited Life Time Warranty For Flake Floors</div>
    </div>
  </div>
);

export default HeroContent;
