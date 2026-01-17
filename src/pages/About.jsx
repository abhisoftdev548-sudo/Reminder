import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="w-full min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black
            bg-linear-to-r from-[#38bdf8] via-[#293ad2] to-[#0008ff]
            bg-clip-text text-transparent"
          >
            About Us
          </h1>

          <p className="mt-6 text-slate-400 text-base sm:text-lg">
            Remember Your Work With Us is a modern task management platform
            designed to help you stay organized, productive, and focused on
            what truly matters.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-14">

          {/* What We Do */}
          <div className="bg-blue-500/10 border border-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              What We Do
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Our platform helps users manage tasks efficiently, track their
              progress in real time, and automate repetitive work. Everything
              is designed to be simple, clean, and easy to use so you can focus
              on your goals without distractions.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-blue-500/10 border border-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Our Mission
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Our mission is to simplify productivity. We believe task
              management should be fast, intuitive, and stress-free. By
              combining modern UI design with useful features, we aim to help
              users stay consistent and productive every day.
            </p>
          </div>

          {/* Who It's For */}
          <div className="bg-blue-500/10 border border-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Who This Platform Is For
            </h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Students managing daily studies and schedules</li>
              <li>Professionals handling work and deadlines</li>
              <li>Anyone who wants a better way to organize their day</li>
            </ul>
          </div>

          {/* Technology */}
          <div className="bg-blue-500/10 border border-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Technology & Design
            </h2>
            <p className="text-slate-300 leading-relaxed">
              This project is built using modern web technologies like React
              and Tailwind CSS, focusing on performance, responsiveness, and a
              clean user experience across all devices.
            </p>
          </div>

          {/* Future */}
          <div className="bg-blue-500/10 border border-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Looking Ahead
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We are continuously improving the platform by adding new
              features, better automation, and enhanced usability to make task
              management even more powerful and effective.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
