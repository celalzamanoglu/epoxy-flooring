import React from "react";
import VideoPlayer from "./VideoPlayer";

const VideoSection: React.FC = () => {
  return (
    <VideoPlayer
      videoUrl="/shorts-3.mp4"
      muted={true}
      autoPlayInView={true}
      loop={true}
      muteButtonOnly={true}
      fullscreen={true}
      videoType="mobile"
    />
  );
};

export default VideoSection;
