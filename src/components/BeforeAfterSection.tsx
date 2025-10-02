import React from "react";
import styles from "./BeforeAfterSection.module.css";
import { ImageComparisonSlider } from "./ImageComparisonSlider";
import VideoPlayer from "./VideoPlayer";
import { useIsMobile } from "@/lib/useIsMobile";
import Button from "./Button";
import Link from "next/link";

interface BeforeAfterSectionProps {
  title?: string;
  subtitle?: string;
}

const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  title = "BEFORE & AFTER",
  subtitle = "See the transformation with our expert epoxy flooring installations",
}) => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.section}>
      {/* Mobile: keep single video only */}
      {isMobile ? (
        <VideoPlayer
          videoUrl="/shorts-2.mp4"
          muted={isMobile}
          autoPlayInView={true}
          loop={true}
          disableControls={true}
          fullscreen={true}
          videoType="mobile"
        />
      ) : (
        <>
          {/* First video block */}
          <div className={styles.contentWithVideoContainer}>
            <div className={styles.textContent}>
              <h3 className={styles.videoTitle}>PROFESSIONAL RESULTS GUARANTEED</h3>
              <p
                className={styles.videoDescription}
              >{`From start to finish, we ensure every detail is perfect. Our commitment to excellence and customer satisfaction means you get flooring solutions that are built to last and designed to impress.

We use premium materials and industry-leading techniques to deliver floors that combine beauty with unmatched performance. Whether it's a garage, warehouse, showroom, or home, we create surfaces that withstand the test of time while maintaining their stunning appearance.`}</p>
              <div className={styles.ctaButtonWrapper}>
                <Link href="/contact">
                  <Button>CONTACT US</Button>
                </Link>
              </div>
            </div>
            <div className={styles.videoContent}>
              <VideoPlayer
                videoUrl="/shorts-3.mp4"
                muted={isMobile}
                autoPlayInView={true}
                loop={true}
                videoType="mobile"
                fullscreen={isMobile}
              />
            </div>
          </div>

          {/* Image comparison slider */}
          <div className={styles.container}>
            <div className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
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

          {/* Second video block */}
          <div className={`${styles.contentWithVideoContainer}`}>
            <div className={styles.textContent}>
              <h3 className={styles.videoTitle}>REAL TRANSFORMATIONS IN ACTION</h3>
              <p
                className={styles.videoDescription}
              >{`Watch as we transform ordinary spaces into extraordinary environments. Our expert team delivers precision and quality in every project, ensuring stunning results that exceed expectations.

From preparation to final coating, we follow a meticulous process that guarantees exceptional durability and aesthetic appeal. See the dramatic difference our professional epoxy flooring installations make in residential, commercial, and industrial spaces.`}</p>
              <div className={styles.ctaButtonWrapper}>
                <Link href="/contact">
                  <Button>CONTACT US</Button>
                </Link>
              </div>
            </div>
            <div className={styles.videoContent}>
              <VideoPlayer
                videoUrl="/shorts-2.mp4"
                muted={isMobile}
                autoPlayInView={true}
                loop={true}
                videoType="mobile"
                fullscreen={isMobile}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default BeforeAfterSection;
