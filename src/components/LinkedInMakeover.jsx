import { motion } from "framer-motion";
import Pichart from "../assets/images/Pichart.png";
import Package from "./Package.jsx";

const weeks = [
  {
    title: (
      <>
        <span className="text-[#b85c5c]">Week 1:</span> Profile & Positioning
      </>
    ),
    points: [
      "Clear niche and personal brand direction",
      "Optimized headline and About section",
      "Profile built for clarity and visibility",
    ],
    result: "Your profile clearly shows who you are and what you do.",
  },
  {
    title: (
      <>
        <span className="text-[#b85c5c]">Week 2:</span> Content Clarity
      </>
    ),
    points: [
      "Clear content pillars",
      "Simple post structure",
      "Hooks that get attention",
    ],
    result: "You know exactly what to post and how to say it.",
  },
  {
    title: (
      <>
        <span className="text-[#b85c5c]">Week 3:</span> Engagement & Consistency
      </>
    ),
    points: [
      "Posting rhythm that fits your schedule",
      "Strategic engagement support",
      "Visibility with the right audience",
    ],
    result: "Engagement starts growing naturally.",
  },
  {
    title: (
      <>
        <span className="text-[#b85c5c]">Week 4:</span> Growth & Momentum
      </>
    ),
    points: [
      "Better reach and interactions",
      "Insights on what content works",
      "A repeatable LinkedIn system",
    ],
    result:
      "Many clients move from low engagement to 100+ daily interactions and 1,000+ post engagement.",
  },
];

const LinkedInMakeover = () => {
  return (
    <>
    <section
      id="workwithme"
      className="px-6 -mt-20 md:mt-0 py-25 bg-[#0a0a0a] text-white max-w-8xl mx-auto "
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center  ">
        Frame <span className="text-[#b85c5c]">Work</span>
      </h1>
      {/* Underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "5rem" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-30 h-1 bg-[#b85c5c] mt-3 mb-8 rounded-full mx-auto"
      />
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold">
          Your 30-Day LinkedIn Makeover
        </h1>
        <p className="mt-6 text-lg text-white max-w-3xl mx-auto">
          “Get a LinkedIn profile that speaks for you. Attract opportunities,
          grow your authority, and get noticed in just 30 days.”
        </p>
      </div>

      {/* Week Cards */}
      <div className="grid grid-cols-1 md:px-30 md:grid-cols-2 gap-10 ">
        {weeks.map((week, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#121212] rounded-2xl shadow-xl p-6  hover:shadow-2xl"
          >
            <h3 className="text-xl text-[#b85c5c] font-bold mb-4">{week.title}</h3>

            <ul className="list-disc pl-5 space-y-2 text-white mb-4">
              {week.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="font-semibold text-[#b85c5c]">Result: {week.result}</p>
          </motion.div>
        ))}
      </div>

      {/* After 30 Days Section */}
      <div className="mt-20 px-30 flex flex-col md:flex-row items-center gap-12 md:gap-76">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="text-3xl text-[#b85c5c] font-bold mb-6">
            After 30 Days, You’ll Have
          </h2>

          <ul className="list-disc pl-5 space-y-3 text-white mb-6">
            <li>A clear, optimized LinkedIn profile</li>
            <li>Confidence to post consistently</li>
            <li>Stronger engagement and visibility</li>
          </ul>

          <p className="italic text-lg font-medium text-white">
            “When your direction is clear, growth becomes consistent.”
          </p>
        </div>

        {/* Right: Framework Image Placeholder */}
        <div className="flex-1 flex justify-center">
          <div className="w-[300px] h-[220px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
            <img src={Pichart} alt="" />
          </div>
        </div>
      </div>
    </section>
    <Package/>
    </>
  );
};

export default LinkedInMakeover;
