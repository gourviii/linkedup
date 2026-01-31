// import AnimatedUser from "../assets/images/animateduser.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import LogosCard from "../components/LogosCard";
import LinkedInMakeover from "../components/LinkedInMakeover";

const Hero = () => {


  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });
      // 🔥 Clear the state after scrolling
      navigate("/", { replace: true, state: {} });
    }
  }, [location, navigate]);
  return (
    <>
      <section
        id="home"
        className="relative bg-[#0a0a0a] overflow-x-hidden w-full h-170 md:h-170 scroll-mt-18 flex flex-col overflow-hidden justify-center items-center px-6 md:px-45"
      >
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-6xl font-semibold text-[#b85c5c]  mt-2 mb-3">
              LinkedIn Personal Brand Strategist
            </h2>
          </motion.div>
        <div className="max-w-5x text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold max-w-3xl text-white leading-tight">
              Stop Posting. Start Being Remembered.
            </h1>
          </motion.div>
   
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
            className="flex justify-center "
          >
            <p className="w-100 md:w-140 mt-4 text-gray-500">
              Helping coaches, founders, and executives create LinkedIn profiles
              that attract opportunities, build credibility, and grow influence
              effortlessly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-4 justify-center items-center  mt-6">
              <Link to="/contact">
                <button className="px-6 py-2 bg-[#b85c5c] text-white rounded-lg hover:bg-sky-100 hover:text-black cursor-pointer transition">
                  Let’s Build Your LinkedIn Presence
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <About />
      <Services />
      <LinkedInMakeover/>
         <Testimonials />
          {/* My client have worked at -  */}
      <section className="w-full py-16 overflow-hidden bg-[#0a0a0a] text-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center ">
          My client have worked at
        </h1>
          {/* Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "10rem" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-36 h-1 mb-4 bg-[#b85c5c] mx-auto mt-4 rounded-full"
          />
       <LogosCard />
      </section>

  

   
    </>
  );
};

export default Hero;
