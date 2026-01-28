import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import { Link, useNavigate, useLocation } from "react-router-dom";
import WebsiteLogo from "../assets/WebsiteLogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll2 = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`navbar md:overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.3)]
 bg-white w-full flex items-center justify-between  sm:justify-around  px-4 md:px-8 py-4 md:py-3 sticky top-0 z-50 transition-all duration-300
   "bg-white"`}
      >
        <img className="h-11 w-auto object-contain " src={WebsiteLogo} alt="" />
        <ul className="  hidden nav-elem text-lg gap-5 lg:gap-8 sm:flex text-black cursor-pointer">
          <li
            onClick={() => handleScroll2("home")}
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </li>
          <li
            onClick={() => handleScroll2("about")}
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </li>
          <li
            onClick={() => handleScroll2("services")}
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Services
          </li>
          <li
            onClick={() => handleScroll2("workwithme")}
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Framework
          </li>
          <li
            onClick={() => handleScroll2("testimonials")}
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Testimonials
          </li>

          <Link
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            to="/impact"
          >
            Impact
          </Link>
          <Link
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            to="/contact"
          >
            Contact
          </Link>
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full text-black  text-center text-[20px] bg-white/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 sm:hidden"
            >
              <ul className=" flex flex-col gap-4 cursor-pointer items-center ">
                <li
                  onClick={() => {
                    handleScroll2("home");
                    setOpen(false);
                  }}
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    handleScroll2("about");
                    setOpen(false);
                  }}
                >
                  About
                </li>
                <li
                  onClick={() => {
                    handleScroll2("services");
                    setOpen(false);
                  }}
                >
                  Services
                </li>
                <li
                  onClick={() => {
                    handleScroll2("workwithme");
                    setOpen(false);
                  }}
                >
                  Framework
                </li>
                <li
                  onClick={() => {
                    handleScroll2("testimonials");
                    setOpen(false);
                  }}
                >
                  Testimonials
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Link to="/impact">Impact</Link>
                </li>
                <li
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Link to="/contact">Contact Me</Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-black text-3xl"
        >
          {!open ? <RxHamburgerMenu /> : <MdClose />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
