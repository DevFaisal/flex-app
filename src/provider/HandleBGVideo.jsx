import { useEffect, useState } from 'react';
import BackgroundVideo from '../components/other/BackgroundVideo';

const HandleBGVideo = ({ children }) => {
  const TIMEOUT_DURATION = window.innerWidth <= 768 ? 1000 : 2200;
  const SPEED = 1.7;

  const [play, setPlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPlay(false), TIMEOUT_DURATION);
    return () => clearTimeout(timer);
  }, [TIMEOUT_DURATION]);

  return play ? <BackgroundVideo speed={SPEED} /> : <>{children}</>;
};

export default HandleBGVideo;
