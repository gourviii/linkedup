import React from "react";
import { Link } from "react-router-dom";

const Package = () => {
  return (
    <section id="investment" className="py-16 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#b85c5c] text-white px-4 py-1 rounded-full text-sm font-semibold">
            Investment
          </span>
          <h1 className="text-4xl font-bold text-[#b85c5c] mt-4">The Packages</h1>
          <p className=" text-white mt-2">
            Choose the level of support that matches your growth goals
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Presence Package */}
          <div className="bg-[#121212] rounded-2xl shadow-lg p-8 ">
            <h2 className="text-2xl font-bold">Presence Package</h2>
            <p className="text-gray-600 mt-2">
              A done-for-you system to stay consistent, visible, and aligned.
            </p>

            <h3 className="mt-6 font-semibold text-lg">What You Get</h3>

            <ul className="mt-4 space-y-3">
              {[
                "3 posts per week (written in your brand voice)",
                "30–35 targeted engagements per week",
                "Profile optimisation for clarity and positioning",
                "Clear messaging to improve discoverability",
                "On-brand content formatting",
                "Audience-focused engagement to build relevance",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <p className="font-semibold">Best For</p>
              <p className="text-gray-600">
                Professionals looking for steady growth and clarity
              </p>
            </div>
            <Link to="/contact">
              <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition">
                Apply to work together
              </button>
            </Link>
          </div>

          {/* Scale Package */}
          <div className="bg-[#121212] rounded-2xl shadow-xl p-8 border-2 border-[#b85c5c] relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#b85c5c] text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </span>

            <h2 className="text-2xl font-bold">Scale Package</h2>
            <p className="text-gray-600 mt-2">
              Built for founders and creators ready to grow faster and convert
              attention into trust.
            </p>

            <h3 className="mt-6 font-semibold text-lg">What You Get</h3>

            <ul className="mt-4 space-y-3">
              {[
                "5 posts per week for stronger visibility",
                "30–35 targeted engagements per week",
                "Overall profile optimisation",
                "Active DM review & response support",
                "Quarterly profile revamp based on performance",
                "Custom carousel creatives",
                "Clear, distinctive brand positioning",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
              <p className="font-semibold">Best For</p>
              <p className="text-gray-600">
                Founders, coaches, consultants building authority
              </p>
            </div>
            <Link to="/contact">
              <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition">
                Apply to work together
              </button>
            </Link>
          </div>
        </div>

        {/* Discovery Call */}
        <a href="https://topmate.io/gourvi_tiwari/1915104" target="_blank">
          <div className="mt-16 text-center bg-white p-8 rounded-2xl shadow-md">
            <p className="text-gray-700 mb-4">
              Not sure which package fits your goals? Book a 20-minute clarity
              call and we’ll decide together.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
              Book a discovery call!
            </button>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Package;
