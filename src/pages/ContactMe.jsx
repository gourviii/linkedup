import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)

      .then(
        () => {
          alert("Message sent successfully! 🚀");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Something went wrong 😢");
          console.log(error.text);
          setLoading(false);
        },
      );
  };

  return (
    <>
      <section
        id="contact"
        className="py-0 overflow-x-hidden bg-[#0a0a0a]  h-screen text-white"
      >
        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mt-10 mb-12"
        >
          Contact <span className="text-[#b85c5c]">Me</span>
                {/* Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-[#b85c5c] mt-3 mb-8 rounded-full mx-auto"
          />
        </motion.h2>
        <div className="max-w-4xl mx-auto px-6">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            ref={form}
            onSubmit={sendEmail}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-black bg-[#121212] p-8 rounded-2xl shadow-lg space-y-6"
          >
            <input type="hidden" name="title" value="Portfolio Contact" />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">
                  First Name
                </label>
                <input
                  name="firstname"
                  required
                  type="text"
                  placeholder="Enter your first name"
                  className="border border-[#b85c5c] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b85c5c]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">
                  Last Name
                </label>
                <input
                  name="lastname"
                  required
                  type="text"
                  placeholder="Enter your last name"
                  className="border border-[#b85c5c] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b85c5c]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">
                  Contact No.
                </label>
                <input
                  name="contact"
                  type="number"
                  placeholder="Enter your contact no."
                  className="border border-[#b85c5c] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b85c5c]"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email."
                  className="border border-[#b85c5c] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b85c5c]"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className=" w-full border border-[#b85c5c] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b85c5c]"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(245,158,11,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "none" }}
              className="w-full bg-[#b85c5c] text-white py-3 rounded-lg font-semibold cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;
