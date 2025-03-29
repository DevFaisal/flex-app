import { useEffect, useState } from "react";
import BackgroundVideo from "../components/other/BackgroundVideo";

const HandleBGVideo = ({ children }) => {
  const TIMEOUT_DURATION = 5000;

  const [play, setPlay] = useState(true);
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
          <BackgroundVideo handleEndVideo={handleEndVideo} />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default HandleBGVideo;
