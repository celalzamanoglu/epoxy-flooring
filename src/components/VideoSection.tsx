import React from "react";
import styles from "./VideoSection.module.css";

const VideoSection: React.FC = () => {
  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        <iframe
          width="315"
          height="560"
          src="https://www.youtube.com/embed/qSXVdGwdP1k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <iframe
          width="315"
          height="560"
          src="https://www.youtube.com/embed/qSXVdGwdP1k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default VideoSection;
