import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const phoneNumber = "918889824987"; // your number
  const message = "Hi, I want to connect with you!";

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop reload
    if (loading) return;

     setLoading(true); // start spinner

    const formData = new FormData(e.target);
    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSc7Xu8M9AOENJoYTHLeUeiXq7gEw-XI4vRFRZT36ohjXO54kA/formResponse",

        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        },
      );
      
    // 🔥 Force spinner to stay visible for 1.5 sec
    await new Promise((resolve) => setTimeout(resolve, 500));

      alert("Email saved!");
      e.target.reset();
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const handleScroll2 = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-black overflow-x-hidden text-gray-300 pt-12 pb-6 px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Gourvi Tiwari</h2>
          <p className="mt-3 text-sm text-gray-400">
            Authority isn’t built by posting more.., It’s built through
            consistent, meaningful conversations.
          </p>

          {/* socials  */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/gourvi-tiwari/"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message,
                )}`}
                target="_blank"
                className="hover:text-white transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://topmate.io/gourvi_tiwari/1915104"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaCalendarCheck />
              </a>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="max-w-30">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
      {/* Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "2.5rem" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-10 h-[2px] bg-blue-500 mb-6"
          />
          <ul className="space-y-2">
            <li
              onClick={() => handleScroll2("home")}
              className="hover:text-white transition cursor-pointer"
            >
              Home
            </li>

            <li
              onClick={() => handleScroll2("about")}
              className="hover:text-white transition cursor-pointer"
            >
              About
            </li>

            <li
              onClick={() => handleScroll2("services")}
              className="hover:text-white transition cursor-pointer"
            >
              Services
            </li>
            <li
              onClick={() => handleScroll2("workwithme")}
              className="hover:text-white transition cursor-pointer"
            >
              Framework
            </li>
            <li
              onClick={() => handleScroll2("testimonials")}
              className="hover:text-white transition cursor-pointer"
            >
              Testimonials
            </li>
            <li>
              <Link to="/impact" className="hover:text-white transition">
                Impact
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>

        <div className=" text-white">
          {/* Heading */}
          <h3 className="text-xl font-semibold mb-2">Reach Us</h3>
      {/* Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "2.5rem" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-10 h-[2px] bg-blue-500 mb-6"
          />

          {/* Address */}
          <div className="flex items-start gap-3 mb-5">
            <FaMapMarkerAlt className="text-blue-500 mt-1" />
            <p className="text-sm text-gray-300">
              Gayatri bihar, House no.17, <br /> Near by Thatipur, <br />
              474011
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 mb-5">
            <FaEnvelope className="text-blue-500" />
            <a
              className="text-sm text-gray-300"
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gourvitiwari@gmail.com&su=Hello&body=I want to connect"
            >
              gourvitiwari@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-500" />
            <p className="text-sm text-gray-300">+91 8889824987</p>
          </div>
        </div>

        <div>
          {/* email connect  */}
          <div className="  rounded-xl w-full max-w-xl">
            <h2 className="text-white text-xl font-semibold mb-4">
              Stay Updated
            </h2>
         {/* Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "2.5rem" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-10 h-[2px] bg-blue-500 mb-6"
          />
            <p className="text-[15px] mb-4">Join for leadership insights</p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-start gap-2 w-full max-w-md"
            >
              <div className="flex items-center p-1 bg-white/10 backdrop-blur-md rounded-full w-full">
                <input
                  type="email"
                  name="entry.910240046"
                  placeholder="Enter your email..."
                  required
                  className="bg-transparent outline-none text-white placeholder-gray-400 flex-1 px-4 py-2 text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                target="_blank" 
                rel="noopener noreferrer"
                className={`bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-2 rounded-full text-sm whitespace-nowrap flex items-center justify-center gap-2 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Email"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Gourvi Tiwari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
