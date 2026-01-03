import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-transparent dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            <span className="gradient-text">About Home Nest</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
            <strong>Home Nest</strong> is a next-generation real estate
            management system designed to simplify property buying, selling,
            renting, and management — all in one seamless platform.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Our mission is to empower property owners, agents, and customers
            with smart tools, real-time insights, and a secure digital
            experience that transforms how real estate works in the modern
            world.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-3 rounded-xl gradient-bg text-white font-semibold shadow-lg">
              Trusted Platform
            </div>
            <div className="px-6 py-3 rounded-xl border gradient-border text-gray-700 dark:text-gray-200 font-semibold">
              Smart Management
            </div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Property Management",
              desc: "Manage listings, tenants, payments, and maintenance from a single powerful dashboard.",
            },
            {
              title: "Secure Transactions",
              desc: "Advanced security ensures safe data handling and transparent property dealings.",
            },
            {
              title: "Modern Experience",
              desc: "Built with a clean, responsive UI that works perfectly across all devices.",
            },
            {
              title: "Data-Driven Insights",
              desc: "Get real-time analytics to make smarter real estate decisions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border gradient-border bg-transparent dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 gradient-text">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
