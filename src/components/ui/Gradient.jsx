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
        // initial={{ y: -100, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute top-0 xl:top-[-45%] lg:top-[-30%] lg:right-[-3%] w-full lg:w-[110%] h-full
                   bg-gradient-to-r from-blue-500 to-green-500
                   lg:rounded-4xl lg:-rotate-12 xl:-rotate-30 overflow-hidden transition-all duration-300"
      >
        {/* Background Image (Centered & Unrotated) */}
        <motion.img
          // initial={{ y: -40 }}
          // animate={{ y: 0 }}
          // transition={{ duration: 1 }}
          src={centerImage}
          className="absolute transition-opacity duration-300 xl:top-[40%] lg:rotate-[12deg] xl:rotate-[30deg] w-full h-full lg:top-[25%] xl:[top-15%] lg:right-[5%] object-cover opacity-50"
          alt="background"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
};

export default Gradient;

// import React from "react";
// import centerImage from "../../assets/png/background.png";
// import { motion } from "framer-motion";

// const Gradient = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="absolute h-screen w-full z-[-1] overflow-hidden flex items-center justify-center"
//     >
//       {/* Animated Gradient Background */}
//       <motion.div
//         initial={{ y: 80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//         className="absolute top-0 xl:top-[-45%] lg:top-[-30%] lg:right-[-3%] w-full lg:w-[110%] h-full
//                    bg-gradient-to-r from-blue-500 to-green-500
//                    lg:rounded-4xl lg:-rotate-12 xl:-rotate-30 overflow-hidden transition-all duration-300"
//       >
//         {/* Background Image with floating and pulsing animation */}
//         <motion.img
//           src={centerImage}
//           alt="background"
//           loading="lazy"
//           initial={{ opacity: 0, y: 20, scale: 1.05 }}
//           animate={{
//             opacity: 0.5,
//             y: [0, -10, 0],
//             x: [0, 5, 0],
//             scale: [1.05, 1.07, 1.05],
//           }}
//           transition={{
//             duration: 6,
//             ease: "easeInOut",
//             repeat: Infinity,
//             repeatType: "mirror",
//           }}
//           className="absolute transition-opacity duration-300 xl:top-[40%] lg:rotate-[12deg] xl:rotate-[30deg] w-full h-full lg:top-[25%] xl:[top-15%] lg:right-[5%] object-cover"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Gradient;
