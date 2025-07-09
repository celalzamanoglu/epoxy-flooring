import React from "react";
import styles from "./BeforeAfterSection.module.css";
import { ImageComparisonSlider } from "./ImageComparisonSlider";

interface BeforeAfterSectionProps {
  title?: string;
  subtitle?: string;
  imageBefore: string;
  imageAfter: string;
  beforeAlt?: string;
  afterAlt?: string;
}

const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  title = "BEFORE & AFTER",
  subtitle = "See the transformation with our expert epoxy flooring installations",
  imageBefore,
  imageAfter,
  beforeAlt,
  afterAlt,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <div className={styles.sliderWrapper}>
            <ImageComparisonSlider
              imageBefore={imageBefore}
              imageAfter={imageAfter}
              beforeAlt={beforeAlt}
              afterAlt={afterAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
