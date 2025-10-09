"use client";

import React from "react";
import styles from "./SectionWithTextAndVideo.module.css";
import VideoPlayer from "./VideoPlayer";
import Button from "./Button";
import Link from "next/link";
import { useIsMobile } from "@/lib/useIsMobile";

interface SectionWithTextAndVideoProps {
  title: string;
  description: string;
  videoUrl?: string;
  hideTextOnMobile?: boolean;
  hideAllOnMobile?: boolean;
}

const SectionWithTextAndVideo: React.FC<SectionWithTextAndVideoProps> = ({
  title,
  description,
  videoUrl,
  hideTextOnMobile = false,
  hideAllOnMobile = false,
}) => {
  const isMobile = useIsMobile();
  const shouldShowText = !(hideTextOnMobile && isMobile);

  if (hideAllOnMobile && isMobile) {
    return null;
  }

  return (
    <>
      {/* Hero and Video Section - Side by Side on Desktop */}
      <section className={styles.heroVideoSection}>
        <div className={`${styles.heroVideoContainer} ${videoUrl ? styles.withVideo : styles.withoutVideo}`}>
          {/* Hero Content - Left Side */}
          {shouldShowText && (
            <div className={styles.heroContent}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p>
              <div className={styles.ctaButtonWrapper}>
                <Link href="/contact">
                  <Button>CONTACT US</Button>
                </Link>
              </div>
            </div>
          )}

          {/* Video - Right Side */}
          {videoUrl && (
            <div className={styles.videoContent}>
              <VideoPlayer
                videoUrl={videoUrl}
                muted={isMobile}
                autoPlayInView={true}
                loop={true}
                fullscreen={isMobile}
                videoType="mobile"
              />
            </div>
          )}
        </div>
      </section>

      {/* Mobile Video - Outside containers */}
      {videoUrl && (
        <div className={styles.mobileVideoWrapper}>
          <VideoPlayer
            videoUrl={videoUrl}
            muted={isMobile}
            autoPlayInView={true}
            loop={true}
            videoType="mobile"
            fullscreen={isMobile}
          />
        </div>
      )}
    </>
  );
};

export default SectionWithTextAndVideo;
