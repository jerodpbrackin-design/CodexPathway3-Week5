// Hero.jsx
import React from "react";

const Hero = () => {
  return (
    /* .hero: min-height, flex-center, padding */
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] p-5 w-full box-border">
      {/* .hero h1: margin, max-width */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-[800px] text-slate-900">
        Build a Professional Resume in 60 Seconds
      </h1>
      
      {/* .hero p: margin, max-width */}
      <p className="text-lg text-slate-600 mb-8 max-w-[600px]">
        Generate ATS-optimized resumes instantly with AI.
      </p>
      
      {/* .hero-button: bg, text, rounded, hover */}
      <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
        Create Your Resume
      </button>
    </section>
  );
};

export default Hero;