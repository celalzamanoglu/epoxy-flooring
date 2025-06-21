import React from "react";
import styles from "./ResultsSection.module.css";
import Image from "next/image";

const staticImages = [
  "/1.jpeg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
];

const scrollingImages1 = [
  "/1.jpeg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/hero-content-bg.jpg",
];

const scrollingImages2 = [...scrollingImages1].reverse();

function ImageRow({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) {
  const allImages = [...images, ...images];
  return (
    <div className={reverse ? styles.rowReverse : styles.row}>
      <div className={styles.track}>
        {allImages.map((src, idx) => (
          <div className={styles.card} key={idx}>
            <Image
              src={src}
              alt={`result image ${idx + 1}`}
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const ResultsSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>RESULTS</h2>
      <div className={styles.grid}>
        {staticImages.map((src, index) => (
          <div key={index} className={styles.gridItem}>
            <Image
              src={src}
              alt={`grid image ${index + 1}`}
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
        ))}
      </div>
      <div className={styles.scrollingSection}>
        <ImageRow images={scrollingImages1} />
        <ImageRow images={scrollingImages2} reverse />
      </div>
    </section>
  );
};

export default ResultsSection;
