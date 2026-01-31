import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import image1 from "../assets/images/Testimonialsimg/Picture1.jpg";
import image2 from "../assets/images/Testimonialsimg/Picture2.jpg";
import image3 from "../assets/images/Testimonialsimg/Picture3.jpg";
import image4 from "../assets/images/Testimonialsimg/Picture4.jpg";
import image5 from "../assets/images/Testimonialsimg/Picture5.jpg";
import image6 from "../assets/images/Testimonialsimg/Picture66.jpeg";



const testimonials = [
  {
    text: "I’ve seen Gourvi grow steadily in confidence and capability. She approaches work with sincerity, attention to detail, and a strong learning mindset.Her strength lies in understanding expectations clearly and executing them with precision while maintaining quality standards. She is committed, responsive, and a pleasure to work with.",
    name: "Jyoti Sinkar",
    image: image1 ,
  },
  {
    text: "Gourvi brings clarity, consistency, and strong intent to content and engagement. She listens well, adapts quickly, and executes with ease, making the entire process seamless and stress-free. What truly stands out is her commitment to sustained visibility and positioning individuals as credible authorities in their space. A thoughtful, dependable professional who delivers consistent impact.",
    name: "Anyuta Dhir",
    image: image2,
  },
  {
    text: "I connected with Gourvi professionally some time ago and found her to be energetic, creative, and deeply passionate about her work in content writing, personal branding, and network expansion. I wish her continued success as she keeps learning, growing, and exploring her potential.",
    name: "Niraj Kumar",
    image: image3,
  },
  {
    text: "Working with Gourvi has been a positive experience for our community engagement efforts. Her dedication and consistency were evident throughout the collaboration. She took the time to understand our brand and audience and remained committed to improving engagement strategies. Even when challenges arose, her determination to grow and deliver better results was clear.",
    name: "Chipra Singh",
    image: image4,
  },
  {
    text: "Working with Gourvi has been great. She truly understands my content and engagement needs. Her writing is clear, simple, and effective, and she is always open to feedback and revisions until everything feels right. Her dedication and understanding make her incredibly valuable, and I highly recommend her to anyone looking for reliable support.",
    name: "Sanghamitra D Sen",
    image: image5,
  },
  {
    text: "Working with Gourvi over the last 6 months has been an amazing experience. She brings consistency and creativity to both content and engagement, understands requirements quickly, adapts seamlessly, and consistently delivers high-quality results. Her commitment and dedication make her an invaluable partner for me.",
    name: " Dr. Shreya Govind, Certified POSH & Behavioral Trainer",
    image: image6,
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className=" px-6 md:px-16  text-white bg-[#0a0a0a] -mt-20 md:-mt-10 py-20 max-w-8xl mx-auto">
      {/* Heading */}
      <div className="text-center mt-5 md:mt-10 mb-14">
        <h2 className="text-3xl  md:text-4xl font-bold">
          Real People, Real <span className="text-[#b85c5c]" >Impact</span>
        </h2>
        {/* Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-36 h-1 bg-[#b85c5c] mx-auto mt-4 rounded-full"
          />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-[#121212] rounded-2xl p-6 shadow-xl hover:shadow-2xl flex flex-col h-full"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4 text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
            </div>

            {/* Quote */}
            <p className="text-white italic mb-8">“{item.text}”</p>

            {/* Bottom User Info */}
            <div className="flex items-center gap-4 mt-auto">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="font-semibold text-sm uppercase">— {item.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
