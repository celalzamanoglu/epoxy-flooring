import React from "react";
import VideoPlayer from "./VideoPlayer";

const VideoSection: React.FC = () => {
  return (
    <VideoPlayer
      videoUrl="https://www.youtube.com/embed/wz7THPQuxhA"
      title="Milkway Epoxy - Company Overview"
      playInView={true}
      loop={true}
    />
  );
};

export default VideoSection;
