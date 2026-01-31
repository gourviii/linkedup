import React, { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import logo1 from "../assets/Logos/logo1.jpeg";
import logo2 from "../assets/Logos/logo2.jpeg";
import logo3 from "../assets/Logos/logo3.jpeg";
import logo4 from "../assets/Logos/logo4.jpeg";
import logo5 from "../assets/Logos/logo5.jpeg";
import logo6 from "../assets/Logos/logo6.jpeg";
import logo7 from "../assets/Logos/logo7.jpeg";
import logo8 from "../assets/Logos/logo8.jpeg";
import logo9 from "../assets/Logos/logo9.jpeg";
import logo10 from "../assets/Logos/logo10.jpeg";
import logo11 from "../assets/Logos/logo11.jpeg";
import logo12 from "../assets/Logos/logo12.jpeg";
import logo13 from "../assets/Logos/logo13.jpeg";
import logo14 from "../assets/Logos/logo14.jpeg";
import logo15 from "../assets/Logos/logo15.jpeg";
import logo16 from "../assets/Logos/logo16.jpeg";
import logo17 from "../assets/Logos/logo17.jpeg";
import logo18 from "../assets/Logos/logo18.jpeg";

const LogosCard = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
  ];

  const controls = useAnimation();
  const x = useMotionValue(0);

   const startAutoScroll = () => {
    controls.start({
      x: "-50%",
      transition: {
        ease: "linear",
        duration: 20,
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startAutoScroll();
  }, );

  return (
    <div className="relative w-full bg-[#0a0a0a] overflow-hidden">
   <motion.div
        className="flex gap-6 pt-4 pb-4 w-max cursor-grab active:cursor-grabbing"
        style={{ x }}                // 🔥 important
        animate={controls}
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        onDragStart={() => controls.stop()}
        onDragEnd={startAutoScroll}  // resumes from current position
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="min-w-[200px] h-[120px] bg-white rounded-xl shadow-md hover:shadow-xl flex items-center justify-center p-4"
          >
            <img
              src={logo}
              alt="Client Logo"
              className="max-h-full max-w-full object-contain "
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogosCard;
