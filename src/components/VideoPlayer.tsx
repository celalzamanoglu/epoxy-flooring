import React, { useRef, useEffect, useState } from "react";
import styles from "./VideoPlayer.module.css";

interface VideoPlayerProps {
  videoUrl: string;
  muted?: boolean; // if video starts muted or not
  autoPlayInView?: boolean; // if video should auto play when in view, and stop when outside the view
  loop?: boolean; // if video should loop
  disableControls?: boolean; // disable all controls
  muteButtonOnly?: boolean; // disable all controls except mute button
  fullscreen?: boolean; // Fill the entire viewport on mobile
  videoType?: "mobile" | "full"; // 'mobile' or 'full'
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  muted = false,
  autoPlayInView = false,
  loop = false,
  disableControls = false,
  muteButtonOnly = false,
  fullscreen = false,
  videoType = "full",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);

  // Sync video muted state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Intersection Observer for autoPlayInView
  useEffect(() => {
    if (!autoPlayInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of video is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [autoPlayInView]);

  // Control video playback based on view state
  useEffect(() => {
    if (!autoPlayInView || !videoRef.current) return;

    if (isInView) {
      videoRef.current.play().catch(console.error);
    } else {
      videoRef.current.pause();
    }
  }, [isInView, autoPlayInView]);

  // Validate conflicting props
  if (disableControls && muteButtonOnly) {
    console.error(
      "VideoPlayer: disableControls and muteButtonOnly cannot be used together."
    );
    return null;
  }

  // Get CSS classes based on video type and fullscreen
  const getSectionClass = () => {
    if (fullscreen && videoType === "mobile") {
      return styles.videoSectionMobileFullscreen;
    }
    if (videoType === "mobile") {
      return styles.videoSectionMobile;
    }
    return styles.videoSection;
  };

  const getWrapperClass = () => {
    if (fullscreen && videoType === "mobile") {
      return styles.videoWrapperMobileFullscreen;
    }
    if (videoType === "mobile") {
      return styles.videoWrapperMobile;
    }
    return styles.videoWrapper;
  };

  const getVideoClass = () => {
    if (fullscreen && videoType === "mobile") {
      return styles.videoMobileFullscreen;
    }
    if (videoType === "mobile") {
      return styles.videoMobile;
    }
    return styles.video;
  };

  return (
    <section ref={sectionRef} className={getSectionClass()}>
      <div
        className={fullscreen ? "" : styles.container}
        style={
          fullscreen
            ? { width: "100%", height: "100%", padding: 0, margin: 0 }
            : {}
        }
      >
        <div className={getWrapperClass()}>
          <div className={styles.videoContainer}>
            <video
              ref={videoRef}
              src={videoUrl}
              className={getVideoClass()}
              controls={!disableControls && !muteButtonOnly}
              autoPlay={!autoPlayInView}
              muted={isMuted}
              loop={loop}
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: videoType === "mobile" ? "cover" : "fill",
                pointerEvents: disableControls ? "none" : "auto",
              }}
            >
              Your browser does not support the video tag.
            </video>
            {muteButtonOnly && (
              <button
                className={styles.muteButton}
                onClick={() => {
                  const newMutedState = !isMuted;
                  setIsMuted(newMutedState);
                  if (videoRef.current) {
                    videoRef.current.muted = newMutedState;
                    // If unmuting, ensure video is playing
                    if (!newMutedState && videoRef.current.paused) {
                      videoRef.current.play().catch(console.error);
                    }
                  }
                }}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  // Muted icon - speaker with slash
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                    <path d="m22 9-6 6" />
                    <path d="m16 9 6 6" />
                  </svg>
                ) : (
                  // Unmuted icon - speaker with sound waves
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
