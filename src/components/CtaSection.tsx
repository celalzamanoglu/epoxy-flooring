import React from "react";
import styles from "./CtaSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

const CtaSection = () => {
  const images = [
    "/1.jpeg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/hero-content-bg.jpg",
    "/1.jpeg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/hero-content-bg.jpg",
    "/1.jpeg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/hero-content-bg.jpg",
    "/1.jpeg",
    "/2.jpg",
    "/3.jpg",
  ];

  return (
    <section className={styles.ctaSection}>
      <motion.div
        className={styles.backgroundContainer}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.imageGrid}>
          {images.map((src, index) => (
            <div key={index} className={styles.gridItem}>
              <Image src={src} alt={`background image ${index + 1}`} width={200} height={150} />
            </div>
          ))}
        </div>
        <div className={styles.content}>
          <h2>READY TO TRANSFORM YOUR SPACE?</h2>
          <p>Get a durable, stunning epoxy floor. Let&apos;s create your unique design.</p>
          <div className={styles.buttonContainer}>
            <Button size="large">GET A FREE QUOTE</Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
