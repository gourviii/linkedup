import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";
import { useEffect, useState } from "react";

const WhatsAppFloat = () => {
  // to connect with whatsapp--

  const phoneNumber = "918889824987"; // your number
  const message = "Hi, I want to connect with you!";

  const [hidden, setHidden] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (hidden) return null;

  return (
    <>
      <motion.a
        href={`https://www.linkedin.com/in/gourvi-tiwari/`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        className="group fixed bottom-24 md:bottom-24 right-8 md:right-8 z-50 bg-blue-500 p-3 flex items-center rounded-full shadow-lg overflow-hidden"
      >
        <FaLinkedinIn size={28} color="white" />

        <p className="text-white text-sm whitespace-nowrap max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-400">
          <span className="pl-1">Connect on Linkedin</span>
        </p>
      </motion.a>
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        className="group fixed bottom-8 right-8 z-50 bg-green-500 p-3 flex items-center rounded-full shadow-lg overflow-hidden"
      >
        <FaWhatsapp size={28} color="white" />

        <p className="text-white text-sm whitespace-nowrap max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-400">
          <span className="pl-1">Say hi on WhatsApp 👋</span>
        </p>
      </motion.a>
      {/* <motion.a
        href={`https://topmate.io/gourvi_tiwari/1915104`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        className="group fixed bottom-8 right-8 z-50 bg-blue-500 p-3 flex items-center rounded-full shadow-lg overflow-hidden"
      >
        <FaCalendarCheck size={28} color="white" />

        <p className="text-white text-sm whitespace-nowrap max-w">
          <span className="pl-1">Book an appointment</span>
        </p>
      </motion.a> */}
    </>
  );
};

export default WhatsAppFloat;
