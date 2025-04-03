import React, { useEffect, useRef } from "react";
import videoBg from "../../assets/videos/background.webm";

const BackgroundVideo = ({ handleEndVideo = () => {}, speed = 1.5 }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed]);
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
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
