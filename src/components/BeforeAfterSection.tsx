import React from "react";
import styles from "./BeforeAfterSection.module.css";
import { ImageComparisonSlider } from "./ImageComparisonSlider";
import VideoPlayer from "./VideoPlayer";

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
          <VideoPlayer
            videoUrl="/before_after_video.mov"
            title="Milkway Epoxy - Before & After Video"
            playInView={true}
            loop={true}
            videoType="youtubeShorts"
            compact={true}
          />
          <div className={styles.sliderWrapper}>
            <ImageComparisonSlider
              imageBefore="/before_1.jpg"
              imageAfter="/after_1.jpg"
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
