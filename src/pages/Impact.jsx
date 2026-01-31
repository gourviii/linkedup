import React from "react";

const Impact = () => {

  // const elements = [
  //   {
  //     id: "01",
  //     title: "Your banner is prime real estate",
  //     subtitle: "Don't leave it blank! Use it to showcase:",
  //     list: [
  //       "Your expertise or niche",
  //       "Your personal brand colors",
  //       "A call-to-action (CTA)",
  //       "Portfolio highlights or achievements",
  //     ],
  //     tip: "Think of it as a billboard for your professional brand",
  //   },
  //   {
  //     id: "02",
  //     title: "Your profile pic should have a clean headshot",
  //     subtitle: "NOT NECESSARILY FORMAL, JUST GENUINELY YOU",
  //     list: [
  //       "Clear face visibility",
  //       "Good lighting",
  //       "Professional background",
  //       "Warm expression",
  //       "High resolution",
  //       "Approachable vibe",
  //     ],
  //   },
  //   {
  //     id: "03",
  //     title: "Skip vague words",
  //     subtitle: "NO 'SEEKING', NO 'ENTHUSIASTS'. SAY WHAT YOU DO.",
  //     description:
  //       "Your headline should make someone stop scrolling. Be specific about who you help and what makes you stand out.",
  //     example:
  //       "Product Manager | Ex-Google | Helping startups build user-loved products through data-driven strategy",
  //   },
  //   {
  //     id: "04",
  //     title: "Your About should tell your story",
  //     subtitle: "SKIP THE BUZZWORDS (WRITE LIKE YOU ACTUALLY TALK!)",
  //     list: [
  //       "Start with a hook",
  //       "Share your journey",
  //       "Highlight your unique approach",
  //       "Mention achievements with numbers",
  //       "End with what you do + how you help",
  //       "Include a CTA",
  //     ],
  //   },
  //   {
  //     id: "05",
  //     title: "Featured posts = your best hits + products",
  //     list: [
  //       "High-engagement posts",
  //       "Case studies or projects",
  //       "Speaking engagements",
  //       "Published articles",
  //       "Certifications or courses",
  //       "Media mentions",
  //     ],
  //   },
  //   {
  //     id: "06",
  //     title: "Make your experience section results-driven",
  //     subtitle: "DON'T JUST LIST DUTIES - SHOWCASE IMPACT!",
  //     example:
  //       "Grew Instagram following from 5K to 50K in 6 months, driving 3x website traffic",
  //   },
  // ];

const elements = [
  {
    id: "01",
    image: "/6keyelementimg/Pbanner.jpeg",
    title: "Your banner is prime real estate",
    subtitle: "Don't leave it blank! Use it to showcase:",
    list: [
      "Your expertise or niche",
      "Your personal brand colors",
      "A call-to-action (CTA)",
      "Portfolio highlights or achievements",
    ],
    tip: "Think of it as a billboard for your professional brand",
  },
  {
    id: "02",
    image: "/6keyelementimg/Pprofile.jpeg",
    title: "Your profile pic should have a clean headshot",
    subtitle: "NOT NECESSARILY FORMAL, JUST GENUINELY YOU",
    list: [
      "Clear face visibility",
      "Good lighting",
      "Professional background",
      "Warm expression",
      "High resolution",
      "Approachable vibe",
    ],
  },
  {
    id: "03",
    image: "/6keyelementimg/Aboutimg.jpeg",
    title: "Skip vague words",
    subtitle: "NO 'SEEKING', NO 'ENTHUSIASTS'. SAY WHAT YOU DO.",
    description:
      "Your headline should make someone stop scrolling. Be specific about who you help and what makes you stand out.",
    example:
      "Product Manager | Ex-Google | Helping startups build user-loved products through data-driven strategy",
    format: "[Your Role or Skill] | [Background] | [Your Unique Edge] | [Who You Help]",
  },
  {
    id: "04",
    image: "/6keyelementimg/Featuresimg.jpeg",
    title: "Your About should tell your story",
    subtitle: "SKIP THE BUZZWORDS (WRITE LIKE YOU ACTUALLY TALK!)",
    list: [
      "Start with a hook (bold or surprising statement)",
      "Share your journey authentically",
      "Highlight your unique approach or philosophy",
      "Mention achievements with numbers",
      "End with what you do now + how you help",
      "Include a clear CTA",
    ],
  },
  {
    id: "05",
    image: "/6keyelementimg/Experienceimg.jpeg",
    title: "Featured posts = your best hits + products",
    description:
      "Add your top posts, portfolio, courses, testimonials, personal website, or even a Google Doc of your best work.",
    list: [
      "High-engagement posts",
      "Case studies or projects",
      "Speaking engagements",
      "Published articles",
      "Certifications or courses",
      "Media mentions",
    ],
  },
  {
    id: "06",
    image: "/6keyelementimg/experience.jpeg",
    title: "Make your experience section results-driven",
    subtitle: "DON'T JUST LIST DUTIES - SHOWCASE IMPACT!",
    description:
      "Transform boring job descriptions into compelling proof of your capabilities.",
    example:
      "Grew Instagram following from 5K to 50K in 6 months, driving 3x website traffic",
    format: "[Action verb] + [What you did] + [Measurable result]",
    instead: "Responsible for managing social media",
    tip: "Use bullet points and include metrics wherever possible",
  },
];


  return (
    <div className="bg-[#0a0a0a] text-gray-200">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-5xl">
          <p className="text-xs tracking-[3px] text-gray-400 mb-6">
            PROFILE OPTIMIZATION EXPERT
          </p>
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            The impact I create <br />
            <span className="italic text-[#b85c5c]">through my work</span>
          </h1>
          <p className="text-gray-400 mb-10">
            Every post, banner, and section is designed to{" "}
            <strong>do something</strong>.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
         
            <button  onClick={() => {
                document
                  .getElementById("realresults")
                  .scrollIntoView({ behavior: "smooth" });
              }} className="px-10 py-4 rounded-full bg-[#8b5a5a] hover:bg-[#a06868] transition">
              See My Approach
            </button>
           
            <button
              onClick={() => {
                document
                  .getElementById("six-keys")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="px-10 py-4 rounded-full border border-gray-500 hover:bg-[#1a1a1a] transition"
            >
              The 6 Key Elements
            </button>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-white mb-6">
          Your profile is not a decoration.{" "}
          <span className="italic text-[#b85c5c]">It's positioning.</span>
        </h2>

        <p className="text-gray-400 mb-12">
          Turn your profile into a clear message — not a generic template.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {["What you do", "Who it's for", "Why you're different"].map(
            (item, i) => (
              <div
                key={i}
                className="bg-[#3d3427] p-8 rounded-lg border-l-4 border-[#8b5a5a]"
              >
                <h3 className="text-xl text-white">{item}</h3>
              <p className="italic text-gray-400">(clearly)</p>   {/*  //paragraph */}
              </div>
            ),
          )}
        </div>

        <p className="italic text-center text-gray-400">
          If your profile looks nice but says nothing, it's not working.
        </p>
      </section>

      {/* KEY ELEMENTS */}
      <section id="six-keys" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-white text-center mb-4">
          The <span className="italic text-[#b85c5c]">6 Key Elements</span>
        </h2>
        <p className="text-center text-gray-400 mb-20">
          Every element of your profile should work together.
        </p>

      
<section className="py-24bg-black text-gray-200">
  <div className="max-w-6xl mx-auto px-0 md:px-6 space-y-16">

    {elements.map((item, index) => (
      <div
        key={item.id}
        className={`grid md:grid-cols-2  gap-12 items-center 
        bg-gradient-to-r from-[#0f0f0f] to-[#151515] 
        rounded-2xl p-12 shadow-2xl`}
      >
        {/* LEFT TEXT */}
        <div>
          <span className="text-6xl font-light text-[#b07a7a] block mb-4">
            {item.id}
          </span>

          <h3 className="text-2xl md:text-3xl text-white mb-6">
            {item.title}
          </h3>

          {item.list && (
            <ul className="space-y-3 text-[#9fb3c8]">
              {item.list.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#9fb3c8] mt-1">•</span>
                  {point}
                </li>
              ))}
            </ul>
          )}

          {item.subtitle && (
            <p className="uppercase text-sm text-gray-500 mt-4">
              {item.subtitle}
            </p>
          )}

          {item.example && (
            <div className="mt-6 p-4 bg-[#1a1a1a] rounded-lg border-l-4 border-[#8b5a5a]">
              <p className="italic text-gray-300">{item.example}</p>
            </div>
          )}
        </div>

        {/* RIGHT VISUAL */}
        <div className="bg-[#3d3427] rounded-2xl h-64 flex items-center justify-center text-[#9fb3c8] shadow-inner overflow-hidden">
          {item.image ? (
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          ) : (
            <span>Visual here</span>
          )}
        </div>
      </div>
    ))}

  </div>
</section>
      </section>

      {/* RESULTS */}
      <section id="realresults" className="py-24 px-6 bg-[#0a0a0a]">
        <h2 className="text-4xl md:text-5xl text-white text-center mb-4">
          Real <span className="italic text-[#b85c5c]">Results</span>
        </h2>

<div className="grid md:grid-cols-3 gap-6 mt-16">
  {[
    { images: "/realresultsimg/img1.jpeg" },
    { images: "/realresultsimg/img2.jpeg" },
    { images: "/realresultsimg/img3.jpeg" },
    { images: "/realresultsimg/img4.jpeg" },
    { images: "/realresultsimg/img5.jpeg" },
    { images: "/realresultsimg/img6.jpeg" },
   
  ].map((item, i) => (
    <div
      key={i}
      className="bg-[#141414] rounded-xl overflow-hidden"
    >
      <img
        src={item.images}
        alt=""
        className="w-full h-64 p-0 object-cover"
      />
    </div>
  ))}
</div>


        <p className="italic text-center mt-10 text-gray-400">
          Your profile could be next.
        </p>
      </section>

      {/* QUOTE */}
      <section className="py-24 bg-gradient-to-r from-[#6d4545] to-[#8b5a5a] text-center">
        <p className="text-3xl md:text-5xl italic text-[#f5e6d3]">
          "Design isn't about looking good. <br /> It's about being understood."
        </p>
      </section>

      {/* STORY */}

      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              I don't optimize profiles.{" "}
              <span className="italic text-[#c46b6b]">
                I help people tell their story.
              </span>
            </h2>

            <p className="mt-8 text-gray-400">
              No "seeking opportunities". No vague titles. No empty enthusiasm.
            </p>

            <p className="mt-4 text-gray-400">
              I rewrite and restructure profiles so they sound like a{" "}
              <span className="text-white font-semibold">real human</span> —
              confident, clear, and intentional.
            </p>

            <p className="mt-6 italic text-gray-500">
              Because people don’t connect with keywords. They connect with
              clarity.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0e0e0e] rounded-2xl p-10 shadow-2xl border border-[#2a2a2a]">
            <h3 className="text-xl text-white mb-2">
              This isn't about looking impressive.
            </h3>

            <h4 className="italic text-[#c46b6b] mb-6 text-lg">
              It's about being remembered.
            </h4>

            <p className="text-gray-400 mb-6">
              When someone lands on your page, they should instantly know:
            </p>

            <div className="space-y-4">
              {[
                "Who you help",
                "What problem you solve",
                "Why they should trust you",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#3a2f22] p-4 rounded-lg border-l-4 border-[#c46b6b]"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-md bg-[#8b5a5a] text-white font-bold">
                    {i + 1}
                  </span>
                  <p className="text-white">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 italic text-gray-400">
              That's the impact I focus on — every single time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <a href="https://topmate.io/gourvi_tiwari/1915104" target="_blank">
        <button  className="px-16 py-5 bg-[#8b5a5a] text-white rounded-full hover:bg-[#a06868] transition">
          Book a Discovery Call
        </button>
        </a>
        <p className="italic text-gray-500 mt-4">
          Let’s transform your profile into a powerful personal brand
        </p>
      </section>








    </div>
  );
};

export default Impact;
