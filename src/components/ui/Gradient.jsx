// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import videoBg from "../../assets/videos/background.mp4";
// import centerImage from "../../assets/png/background.png";
// import Navbar from "../view/Navbar";

// const Gradient = ({ children }) => {
//   const videoRef = useRef(null);
//   const [videoEnded, setVideoEnded] = useState(false);
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   // Handle video end event
//   const handleVideoEnd = () => {
//     setVideoEnded(true);
//   };

//   // Handle video loaded event
//   const handleVideoLoaded = () => {
//     setVideoLoaded(true);
//   };

//   // Handle image loaded event
//   const handleImageLoaded = () => {
//     setImageLoaded(true);
//   };

//   // Preload the image
//   useEffect(() => {
//     const img = new Image();
//     img.src = centerImage;
//     img.onload = () => setImageLoaded(true);
//   }, []);

//   return (
//     <motion.div className="absolute h-screen w-full z-0 flex items-center justify-center overflow-hidden">
//       {/* Gradient container that rotates after video ends */}
//       <motion.div
//         className="absolute w-full md:w-[110%] h-full overflow-hidden"
//         initial={{
//           rotate: 0,
//           top: 0,
//         }}
//         animate={{
//           rotate: videoEnded ? "-18deg" : 0,
//           top: videoEnded ? "-40%" : 0,
//         }}
//         transition={{
//           duration: 1.5,
//           ease: "easeInOut",
//           delay: videoEnded ? 0.3 : 0,
//         }}
//       >
//         {/* Gradient background that appears after video ends */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-[#0569E8] to-[#76D232] rounded-4xl"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: videoEnded ? 1 : 0 }}
//           transition={{ duration: 1, ease: "easeIn" }}
//         />

//         {/* Video container (no gradient during video playback) */}
//         <AnimatePresence>
//           {!videoEnded && (
//             <motion.div className="absolute inset-0 bg-black over">
//               <motion.video
//                 ref={videoRef}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: videoLoaded ? 1 : 0 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="w-full h-full object-cover"
//                 src={videoBg}
//                 autoPlay
//                 muted
//                 playsInline
//                 onLoadedData={handleVideoLoaded}
//                 onEnded={handleVideoEnd}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Image container that fills the gradient after video ends */}
//         <AnimatePresence>
//           {videoEnded && (
//             <motion.div
//               className="absolute inset-0 flex items-center justify-center"
//               initial={{ opacity: 0, rotate: 0 }}
//               animate={{
//                 opacity: 1,
//                 rotate: "18deg", // Counter-rotate to keep image straight
//               }}
//               transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
//             >
//               <motion.img
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: imageLoaded ? 0.5 : 0 }}
//                 transition={{ duration: 1.2, ease: "easeInOut" }}
//                 src={centerImage}
//                 onLoad={handleImageLoaded}
//                 className="w-full h-full absolute top-90 object-cover "
//                 alt="background"
//                 loading="lazy"
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>

//       {/* Centered Children */}
//       <div className="relative h-full w-full z-10">
//         <Navbar />
//         {videoEnded && children}
//       </div>
//     </motion.div>
//   );
// };

// export default Gradient;

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import videoBg from "../../assets/videos/background.mp4";
import centerImage from "../../assets/png/background.png";

const Gradient = ({ children }) => {
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle video end event
  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  // Handle video loaded event
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  // Handle image loaded event
  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = centerImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <motion.div className="absolute h-screen w-full z-0 flex items-center justify-center overflow-hidden">
      {/* Main gradient container with rotation */}
      <div
        className="absolute top-0 sm:top-[-20%] md:top-[-30%] lg:top-[-40%]
                   w-[110%] h-full
                   bg-gradient-to-r from-[#0569E8] to-[#76D232]
                   sm:rounded-3xl md:rounded-4xl
                   sm:-rotate-[10deg] md:-rotate-[15deg] lg:-rotate-[18deg] xl:-rotate-[25deg]
                   transform-gpu transition-all duration-300
                   overflow-hidden"
      >
        {/* Content container that counter-rotates to keep media horizontal */}
        <div
          className="absolute inset-0
                     sm:rotate-[10deg] md:rotate-[15deg] lg:rotate-[18deg] xl:rotate-[25deg]
                     transform-gpu flex items-center justify-center"
        >
          <div className="absolute xl:top-89  h-full flex items-center justify-center overflow-hidden">
            <AnimatePresence>
              {/* Video plays first */}
              {!videoEnded && (
                <motion.video
                  ref={videoRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-[80vh] object-cover xl:mr-190"
                  src={videoBg}
                  autoPlay
                  muted
                  playsInline
                  onLoadedData={handleVideoLoaded}
                  onEnded={handleVideoEnd}
                />
              )}

              {/* Image fades in after video ends */}
              {videoEnded && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded ? 0.5 : 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  src={centerImage}
                  onLoad={handleImageLoaded}
                  className="w-full h-full object-cover"
                  alt="background"
                  loading="lazy"
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Centered Children */}
      <div className="relative h-full w-full z-10">{children}</div>
    </motion.div>
  );
};

export default Gradient;
