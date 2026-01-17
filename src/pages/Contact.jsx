import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="w-full min-h-screen text-white">
      <Navbar />

      {/* Heading */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-black
          bg-linear-to-r from-[#38bdf8] via-[#293ad2] to-[#0008ff]
          bg-clip-text text-transparent"
        >
          Contact Us
        </h1>
        <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
          Have a question, suggestion, or feedback?  
          Feel free to reach out — we’d love to hear from you.
        </p>
      </section>

      {/* Contact Form */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto bg-blue-500/10 backdrop-blur-lg
                        border border-white/20 rounded-2xl shadow-2xl p-8">

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm mb-2 text-slate-300">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-black/40
                           border border-slate-700 text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-2 text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-black/40
                           border border-slate-700 text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-2 text-slate-300">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-black/40
                           border border-slate-700 text-white resize-none
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 font-semibold rounded-xl
                         bg-blue-600 hover:bg-blue-700
                         transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Extra Info */}
          <div className="mt-8 text-center text-sm text-slate-400">
            You can also reach us directly at  
            <span className="text-blue-400"> support@remindyourwork.com</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
