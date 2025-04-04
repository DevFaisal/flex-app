import { useEffect, useState } from "react";
import BackgroundVideo from "../components/other/BackgroundVideo";

const HandleBGVideo = ({ children }) => {
  const TIMEOUT_DURATION = window.innerWidth <= 768 ? 600 : 1400;
  const SPEED = 2.5;

  const [play, setPlay] = useState(true);
<<<<<<< HEAD
  const [, setIsvideoEnded] = useState(false);

  const handleEndVideo = () => {
    setIsvideoEnded(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlay(false);
    }, TIMEOUT_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {play ? (
        <div>
          <BackgroundVideo handleEndVideo={handleEndVideo} speed={SPEED} />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
=======

  useEffect(() => {
    const timer = setTimeout(() => setPlay(false), TIMEOUT_DURATION);
    return () => clearTimeout(timer);
  }, [TIMEOUT_DURATION]);

  return play ? <BackgroundVideo speed={SPEED} /> : <>{children}</>;
>>>>>>> testing
};

export default HandleBGVideo;
