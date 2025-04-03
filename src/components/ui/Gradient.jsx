// import React from "react";
// import centerImage from "../../assets/png/background.png";
// import { motion } from "motion/react";

// const Gradient = () => {
//   return (
//     <motion.div className="absolute h-screen w-full z-[-9999] overflow-hidden flex items-center justify-center">
//       {/* Gradient Background */}
//       <motion.div
//         className="absolute top-[0%] lg:top-[-40%] lg:right-[-3%] w-[110%] h-full
//                    bg-gradient-to-r from-[#0569E8] to-[#76D232]
//                    lg:rounded-4xl lg:-rotate-[18deg] xl:-rotate-[25deg] overflow-hidden duration-300"
//       >
//         {/* Background Image (Centered & Unrotated) */}
//         <motion.img
//           initial={{ y: -40 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 1 }}
//           src={centerImage}
//           width={800}
//           height={600}
//           className="absolute transition-opacity duration-300  lg:rotate-[25deg] w-full h-full lg:top-[34%] lg:right-[10%] object-cover opacity-50"
//           alt="background"
//           loading="lazy"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Gradient;
import React from "react";
import centerImage from "../../assets/png/background.png";
import { motion } from "framer-motion";

const Gradient = () => {
  return (
    <motion.div className="absolute h-screen w-full z-[-1] overflow-hidden flex items-center justify-center">
      {/* Gradient Background */}
      <motion.div
        className="absolute top-0 xl:top-[-40%] lg:top-[-30%] lg:right-[-3%] w-full lg:w-[110%] h-full 
                   bg-gradient-to-r from-blue-500 to-green-500 
                   lg:rounded-4xl lg:-rotate-12 xl:-rotate-25 overflow-hidden transition-all duration-300"
      >
        {/* Background Image (Centered & Unrotated) */}
        <motion.img
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          src={centerImage}
          className="absolute transition-opacity duration-300 xl:top-[35%] lg:rotate-[12deg] xl:rotate-[25deg] w-full h-full lg:top-[25%] xl:[top-15%] lg:right-[3%] object-cover opacity-50"
          alt="background"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
};

export default Gradient;

// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import videoBg from "../../assets/videos/background.mp4";
// import centerImage from "../../assets/png/background.png";

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
//       {/* Main gradient container with rotation */}
//       <div
//         className="absolute top-0 sm:top-[-20%] md:top-[-30%] lg:top-[-40%]
//                    w-[110%] h-full
//                    bg-gradient-to-r from-[#0569E8] to-[#76D232]
//                    sm:rounded-3xl md:rounded-4xl
//                    sm:-rotate-[10deg] md:-rotate-[15deg] lg:-rotate-[18deg] xl:-rotate-[25deg]
//                    transform-gpu transition-all duration-300
//                    overflow-hidden"
//       >
//         {/* Content container that counter-rotates to keep media horizontal */}
//         <div
//           className="absolute inset-0
//                      sm:rotate-[10deg] md:rotate-[15deg] lg:rotate-[18deg] xl:rotate-[25deg]
//                      transform-gpu flex items-center justify-center"
//         >
//           <div className="absolute xl:top-89  h-full flex items-center justify-center overflow-hidden">
//             <AnimatePresence>
//               {/* Video plays first */}
//               {!videoEnded && (
//                 <motion.video
//                   ref={videoRef}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.8 }}
//                   className="w-full h-[80vh] object-cover xl:mr-190"
//                   src={videoBg}
//                   autoPlay
//                   muted
//                   playsInline
//                   onLoadedData={handleVideoLoaded}
//                   onEnded={handleVideoEnd}
//                 />
//               )}

//               {/* Image fades in after video ends */}
//               {videoEnded && (
//                 <motion.img
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: imageLoaded ? 0.5 : 0 }}
//                   transition={{ duration: 1.2, ease: "easeInOut" }}
//                   src={centerImage}
//                   onLoad={handleImageLoaded}
//                   className="w-full h-full object-cover"
//                   alt="background"
//                   loading="lazy"
//                 />
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>

//       {/* Centered Children */}
//       <div className="relative h-full w-full z-10">{children}</div>
//     </motion.div>
//   );
// };

// export default Gradient;
