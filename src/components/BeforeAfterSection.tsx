import React from "react";
import styles from "./BeforeAfterSection.module.css";
import { ImageComparisonSlider } from "./ImageComparisonSlider";

interface BeforeAfterSectionProps {
  title?: string;
  subtitle?: string;
}

const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  title = "BEFORE & AFTER",
  subtitle = "See the transformation with our expert epoxy flooring installations",
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <div className={styles.sliderWrapper}>
            <ImageComparisonSlider
              imageBefore="/1.jpeg"
              imageAfter="/2.jpg"
              beforeAlt="Before image"
              afterAlt="After image"
            />
          </div>
          <div className={styles.sliderWrapper}>
            <ImageComparisonSlider
              imageBefore="/3.jpg"
              imageAfter="/4.jpg"
              beforeAlt="Before image"
              afterAlt="After image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
