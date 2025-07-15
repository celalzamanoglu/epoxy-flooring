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
  videoType?: "youtubeVideo" | "youtubeShorts";
  customWidth?: string; // e.g., "1000px", "100%", "50vw"
  customHeight?: string; // e.g., "625px", "auto"
  customAspectRatio?: string; // e.g., "16/10", "16/9", "9/16"
  customMaxWidth?: string; // e.g., "1000px"
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
  videoType = "youtubeVideo",
  customWidth,
  customHeight,
  customAspectRatio,
  customMaxWidth,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Determine if this is a local video file
  const isLocalVideo =
    !videoUrl.includes("youtube.com") &&
    !videoUrl.includes("youtu.be") &&
    !videoUrl.includes("/embed/");

  // Validate conflicting props
  if (autoPlay && playInView) {
    console.warn(
      "VideoSection: autoPlay and playInView cannot be used together. Using autoPlay."
    );
  }

  // Build URL parameters for YouTube embed
  const buildVideoUrl = () => {
    let url: URL;

    // Handle YouTube shorts URLs
    if (videoUrl.includes("/shorts/")) {
      // Extract video ID from shorts URL: https://youtube.com/shorts/VIDEO_ID?feature=shared
      const shortsMatch = videoUrl.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
      if (shortsMatch) {
        const videoId = shortsMatch[1];
        url = new URL(`https://www.youtube.com/embed/${videoId}`);
      } else {
        url = new URL(videoUrl);
      }
    } else {
      url = new URL(videoUrl);
    }

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

    // Add quality parameters for better resolution
    params.set("hd", "1"); // Request HD quality
    params.set("vq", "hd720"); // Set video quality to 720p minimum

    return `${url.origin}${url.pathname}?${params.toString()}`;
  };

  // Get appropriate CSS classes based on video type and compact mode
  const getSectionClass = () => {
    if (videoType === "youtubeShorts") {
      return compact
        ? styles.videoSectionShortsCompact
        : styles.videoSectionShorts;
    }
    return compact ? styles.videoSectionCompact : styles.videoSection;
  };

  const getWrapperClass = () => {
    let baseClass = "";
    if (videoType === "youtubeShorts") {
      baseClass = compact
        ? styles.videoWrapperShortsCompact
        : styles.videoWrapperShorts;
    } else {
      baseClass = compact ? styles.videoWrapperCompact : styles.videoWrapper;
    }

    // Add custom sizing class when custom props are provided
    const hasCustomSizing =
      customWidth || customHeight || customAspectRatio || customMaxWidth;
    if (hasCustomSizing) {
      return `${baseClass} ${styles.customSized}`;
    }

    return baseClass;
  };

  const getVideoClass = () => {
    if (videoType === "youtubeShorts") {
      return styles.videoShorts;
    }
    return styles.video;
  };

  // Build custom style object when custom dimensions are provided
  const getCustomWrapperStyle = () => {
    const style: React.CSSProperties = {};

    if (customWidth || customHeight || customAspectRatio || customMaxWidth) {
      if (customWidth) style.width = customWidth;
      if (customHeight) style.height = customHeight;
      if (customAspectRatio) style.aspectRatio = customAspectRatio;
      if (customMaxWidth) style.maxWidth = customMaxWidth;

      // Override default max-width when custom sizing is used
      if (customMaxWidth || customWidth) {
        style.maxWidth = customMaxWidth || customWidth || "none";
      }
    }

    return style;
  };

  const getCustomVideoStyle = () => {
    const style: React.CSSProperties = {
      objectFit: videoType === "youtubeShorts" ? "cover" : "fill",
      width: "100%",
      height: "100%",
      maxWidth: "none",
      maxHeight: "none",
    };

    // When using custom dimensions, ensure video fills the container
    if (customWidth || customHeight || customAspectRatio) {
      style.width = "100%";
      style.height = "100%";
    }

    return style;
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
    if (!playInView || autoPlay) return;

    if (isLocalVideo && videoRef.current) {
      // Handle local video playback
      if (isInView) {
        videoRef.current.play().catch(console.error);
      } else {
        videoRef.current.pause();
      }
    } else if (iframeRef.current) {
      // Handle YouTube video playback
      const iframe = iframeRef.current;
      if (isInView) {
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      } else {
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    }
  }, [isInView, playInView, autoPlay, isLocalVideo]);

  return (
    <section ref={sectionRef} className={getSectionClass()}>
      <div
        className={styles.container}
        style={
          customWidth || customHeight || customAspectRatio || customMaxWidth
            ? { display: "flex", justifyContent: "center", width: "100%" }
            : {}
        }
      >
        <div className={getWrapperClass()} style={getCustomWrapperStyle()}>
          {isLocalVideo ? (
            <video
              ref={videoRef}
              src={videoUrl}
              className={getVideoClass()}
              controls={controls}
              autoPlay={autoPlay}
              muted={muted}
              loop={loop}
              playsInline
              style={getCustomVideoStyle()}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <iframe
              ref={iframeRef}
              src={buildVideoUrl()}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={getVideoClass()}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
