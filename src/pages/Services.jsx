import { motion } from "framer-motion";
import Image2 from "../assets/images/Contantcreation.jpeg";
import Image3 from "../assets/images/managment.gif";
import Image1 from "../assets/images/optimization.png";
import "../../src/index.css";

const services = [
  {
    image: Image1,
    title: "LinkedIn Profile Optimization",
    subtitle: "For professionals who want clarity and visibility",
    intro: "Your profile is not just a resume — it’s your first impression.",
    whatIDo: [
      "Rewrite your headline and About section for clarity and positioning",
      "Optimize your profile for search and discovery",
      "Align your profile with your personal brand and goals",
    ],
    results: [
      "Better profile views",
      "More relevant inbound conversations",
      "Stronger credibility at first glance",
    ],
  },
  {
    image: Image2,
    title: "Content Creation",
    subtitle: "For people who want to post with confidence and consistency",
    intro:
      "Good content isn’t about posting daily, it’s about saying the right things.",
    whatIDo: [
      "Define your content pillars (what you talk about and why)",
      "Create content that blends storytelling, thought leadership, and value",
      "Design content that feels natural, not forced",
    ],
    results: [
      "Posts going from 50 engagements to 1,500+ engagement",
      "Growing engagement even on newer profiles",
      "A clear content direction without burnout",
    ],
  },
  {
    image: Image3,
    title: "Engagement Support",
    subtitle: "For sustainable, organic LinkedIn growth",
    intro:
      "Growth doesn’t come from posting alone. Engagement builds visibility.",
    whatIDo: [
      "Strategic engagement with the right audience",
      "Community-building support",
      "Consistency systems that fit your schedule",
    ],
    results: [
      "From low or zero engagement to 100+ daily interactions",
      "Stronger network quality",
      "Higher reach without paid promotions",
    ],
  },
];

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="px-4 -mt-30 md:mt-0  py-20 max-w-7xl mx-auto"
      >
        {/* Headline */}
        <div className="text-center mt-5 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Services</h2>

          {/* Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-blue-500 mt-3 mb-8 rounded-full mx-auto"
          />

          <p className="mt-4 text-2xl text-gray-600">
            “LinkedIn works better when your message is clear.”
          </p>
          <p className="mt-2 text-gray-500">
            Three ways I help you grow on LinkedIn
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.1 }}
              className="cursor-pointer max-h-120 overflow-y-auto no-scrollbar bg-white rounded-2xl overflow-hidden object-cover shadow-xl hover:shadow-2xl transition"
            >
              <img
                src={service.image}
                className="h-50 w-full object-cover"
                alt="services"
              />
              <div className="p-6 pb-6 ">
                <h3 className="text-xl font-bold mb-2 text-blue-500">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-900 mb-3">{service.subtitle}</p>

                <p className="text-gray-900 mb-5">{service.intro}</p>

                <div className="mb-5">
                  <h4 className="font-semibold mb-2">What I do:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                    {service.whatIDo.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Results clients see:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                    {service.results.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
