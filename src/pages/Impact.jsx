import React from "react";

const Impact = () => {
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
            <button className="px-10 py-4 rounded-full bg-[#8b5a5a] hover:bg-[#a06868] transition">
              See My Approach
            </button>
            <button className="px-10 py-4 rounded-full border border-gray-500 hover:bg-[#1a1a1a] transition">
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
                <p className="italic text-gray-400">(clearly)</p>
              </div>
            ),
          )}
        </div>

        <p className="italic text-center text-gray-400">
          If your profile looks nice but says nothing, it's not working.
        </p>
      </section>

      {/* KEY ELEMENTS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-white text-center mb-4">
          The <span className="italic text-[#b85c5c]">6 Key Elements</span>
        </h2>
        <p className="text-center text-gray-400 mb-20">
          Every element of your profile should work together.
        </p>

        {[
          {
            num: "01",
            title: "Your banner is prime real estate",
            points: ["Expertise", "Brand colors", "CTA", "Achievements"],
          },
          {
            num: "02",
            title: "Your profile pic should be a clean headshot",
            points: [
              "Clear face",
              "Good lighting",
              "Professional background",
              "Warm expression",
            ],
          },
          {
            num: "03",
            title: "Skip vague words",
            points: ["Be specific", "Say who you help", "Show your value"],
          },
          {
            num: "04",
            title: "Your About should tell your story",
            points: ["Hook", "Journey", "Achievements", "CTA"],
          },
          {
            num: "05",
            title: "Featured posts = your best work",
            points: ["Top posts", "Projects", "Certifications", "Articles"],
          },
          {
            num: "06",
            title: "Make experience results-driven",
            points: ["Action verbs", "Metrics", "Impact"],
          },
        ].map((el, i) => (
          <div
            key={i}
            className="grid md:grid-cols-2 gap-10 bg-[#141414] p-10 rounded-xl mb-16"
          >
            <div>
              <span className="text-6xl text-[#8b5a5a]">{el.num}</span>
              <h3 className="text-2xl text-white mb-4">{el.title}</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-400">
                {el.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#3d3427] h-64 rounded-xl flex items-center justify-center text-gray-400">
              Visual here
            </div>
          </div>
        ))}
      </section>

      {/* RESULTS */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <h2 className="text-4xl md:text-5xl text-white text-center mb-4">
          Real <span className="italic text-[#b85c5c]">Results</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {["Client 1", "Client 2", "Client 3", "Client 4"].map((c, i) => (
            <div key={i} className="bg-[#141414] p-6 rounded-xl text-center">
              <div className="w-24 h-24 bg-[#3d3427] rounded-full mx-auto mb-4" />
              <h3 className="text-white">{c}</h3>
              <p className="text-gray-400">Growth result</p>
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
        <button className="px-16 py-5 bg-[#8b5a5a] text-white rounded-full hover:bg-[#a06868] transition">
          Book a Discovery Call
        </button>
        <p className="italic text-gray-500 mt-4">
          Let’s transform your profile into a powerful personal brand
        </p>
      </section>
    </div>
  );
};

export default Impact;
