import { motion } from "framer-motion";
import AboutGourvi from "../assets/images/AboutGourvi.jpeg";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="overflow-x-hidden bg-[#0a0a0a] text-white "
      >
        <div className="px-34 py-16 mx-auto md:flex gap-16 ">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mb-40"
        >
          <img
            src={AboutGourvi}
            alt="Ownerimg"
            className="w-95 md:w-250 -mb-40 md:mb-0 rounded-2xl border-b-[6px] border-[#b85c5c]"
          />
        </motion.div>

        <div className="flex flex-col py-16 mt-20">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl text-center md:text-start md:text-4xl font-bold"
          >
            About <span className="text-[#b85c5c]">Me</span>
          </motion.h2>

          {/* Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-[#b85c5c] mt-3 m-auto md:ml-0 mb-8 rounded-full"
          />

          {/* Intro Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl space-y-6 text-[18px] text-white"
          >
            <p>
              Authority isn’t built by posting more.., It’s built through
              consistent, meaningful conversations.
            </p>

            <p>
              I’m{" "}
              <span className="font-semibold text-white">Gourvi Tiwari</span>, a
              LinkedIn{" "}
              <span className="font-semibold text-white">
                Personal Brand Strategist
              </span>{" "}
              who helps professionals show up clearly, consistently, and
              confidently on LinkedIn.
            </p>
          </motion.div>

<br/>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 text-white"
          >
            <p>
              Over the years, I’ve noticed a recurring pattern: talented,
              experienced individuals often stay invisible, while others with
              less expertise grow faster simply because they know how to position
              themselves online.
            </p>

            <p>
              That’s where I step in. My work focuses on{" "}
              <span className="font-semibold">clarity over noise</span> – not
              random posting, not chasing virality, but building a personal brand
              that feels authentic and performs.
            </p>

            <p className="font-semibold">
              I’ve helped clients go from low visibility to meaningful growth:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                From <span className="font-semibold">50 engagements</span> to{" "}
                <span className="font-semibold">
                  1,500+ on a single post
                </span>
              </li>
              <li>
                From{" "}
                <span className="font-semibold">almost no engagement</span> to{" "}
                <span className="font-semibold">
                  100+ daily interactions
                </span>
              </li>
              <li>
                From{" "}
                <span className="font-semibold">
                  new or inactive profiles
                </span>{" "}
                to{" "}
                <span className="font-semibold">
                  5,000+ organic impressions
                </span>
              </li>
            </ul>

                      {/* Highlighted Lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-3 mt-4 mb-8"
          >
            <p className="inline-block text-white py-1 font-bold">
              “Powered by the AVC Framework..,
            </p>
            <br />
            <p className="inline-block text-white px-3 py-1 font-semibold">
              <span className="bg-[#b85c5c] rounded-3xl p-2 text-white px-3">
                Authority
              </span>
              <span className="text-3xl font-bold"> → </span>
              <span className="bg-[#b85c5c] rounded-3xl p-2 text-white px-3">
                Visibility
              </span>
              <span className="text-3xl font-bold"> → </span>
              <span className="bg-[#b85c5c] rounded-3xl p-2 text-white px-3">
                Conversion
              </span>
            </p>
            <br />
            <p className="inline-block text-white py-1 font-bold">
              “Build trust first, get seen next, and convert naturally.”
            </p>
          </motion.div>

            <p className="mt-6">
              Your LinkedIn should sound like you, not a formula.
            </p>
            <p className="font-semibold">
              If that matters to you, we’re aligned.
            </p>
          </motion.div>
        </div>
        </div>
      </section>
    </>
  );
};

export default About;
