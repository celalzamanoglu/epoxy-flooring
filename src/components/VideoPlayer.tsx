import React, { useRef, useEffect, useState } from "react";
import styles from "./VideoPlayer.module.css";

interface VideoPlayerProps {
  videoUrl: string;
  title?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  modestBranding?: boolean;
  showRelatedVideos?: boolean;
  startTime?: number;
  endTime?: number;
  playInView?: boolean;
  compact?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  title = "Company Video",
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  modestBranding = true,
  showRelatedVideos = false,
  startTime,
  endTime,
  playInView = false,
  compact = false,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Validate conflicting props
  if (autoPlay && playInView) {
    console.warn("VideoSection: autoPlay and playInView cannot be used together. Using autoPlay.");
  }

  // Build URL parameters for YouTube embed
  const buildVideoUrl = () => {
    const url = new URL(videoUrl);
    const params = new URLSearchParams();

    // Use autoPlay if both are provided (with warning above)
    const shouldAutoPlay = autoPlay || (playInView && !autoPlay);

    if (shouldAutoPlay) params.set("autoplay", "1");
    if (muted || playInView) params.set("mute", "1"); // playInView requires muted
    if (loop) params.set("loop", "1");
    if (!controls) params.set("controls", "0");
    if (modestBranding) params.set("modestbranding", "1");
    if (!showRelatedVideos) params.set("rel", "0");
    if (startTime) params.set("start", startTime.toString());
    if (endTime) params.set("end", endTime.toString());

    // Enable JS API for playInView functionality
    if (playInView && !autoPlay) {
      params.set("enablejsapi", "1");
      params.set("autoplay", "0"); // Override autoplay for playInView
    }

    return `${url.origin}${url.pathname}?${params.toString()}`;
  };

  // Intersection Observer for playInView
  useEffect(() => {
    if (!playInView || autoPlay) return;

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
  }, [playInView, autoPlay]);

  // Control video playback based on view state
  useEffect(() => {
    if (!playInView || autoPlay || !iframeRef.current) return;

    const iframe = iframeRef.current;

    if (isInView) {
      // Play video when in view
      iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    } else {
      // Pause video when out of view
      iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
    }
  }, [isInView, playInView, autoPlay]);
  return (
    <section ref={sectionRef} className={compact ? styles.videoSectionCompact : styles.videoSection}>
      <div className={styles.container}>
        <div className={compact ? styles.videoWrapperCompact : styles.videoWrapper}>
          <iframe
            ref={iframeRef}
            src={buildVideoUrl()}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
