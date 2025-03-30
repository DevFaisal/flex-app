import React from "react";
import videoBg from "../../assets/videos/background.mp4";

const BackgroundVideo = ({ handleEndVideo = () => {} }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        onEnded={handleEndVideo}
        src={videoBg}
        autoPlay
        loop={false}
        muted
      />
    </div>
  );
};

export default BackgroundVideo;
