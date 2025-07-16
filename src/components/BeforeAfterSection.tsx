import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {isMobile && (
            <VideoPlayer
              videoUrl="/before_after_video.mov"
              muted={true}
              autoPlayInView={true}
              loop={true}
              disableControls={true}
              fullscreen={true}
              videoType="mobile"
            />
          )}
          {!isMobile && (
            <div className={styles.sliderWrapper}>
              <ImageComparisonSlider
                imageBefore="/before_1.jpg"
                imageAfter="/after_1.jpg"
                beforeAlt="Before image"
                afterAlt="After image"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
