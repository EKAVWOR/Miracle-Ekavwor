import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profile from "../assets/profile.png";

const Hero = () => {
  const skills = ["Brand Designer", "Fullstack Developer", "Mobile App Developer "];
  const [index, setIndex] = useState(0);

  // Cycle through skills every 3 seconds
  useEffect(() => {   
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-gray-900 py-10 min-h-screen flex flex-col font-['Poppins'] overflow-hidden">
      

      {/* HERO CONTENT */}
      <div className="flex flex-col items-center justify-center flex-1 mt-20 text-center px-6">
        {/* Text Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center border border-gray-300 px-5 py-1.5 rounded-full text-gray-600 text-sm mb-4">
            Hello!
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-extrabold leading-tight text-[#0A192F]">
            I’m <span className="text-[#FF5B00]">Miracle,</span>
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={skills[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="inline-block text-[#0A192F]"
              >
                {skills[index]}
              </motion.span>
            </AnimatePresence>
          </h1>
        </motion.div>

        {/* IMAGE + SIDE TEXTS */}
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-6xl mt-20 gap-10 sm:gap-20 relative">
          {/* LEFT SIDE */}
          <div className="text-left sm:w-1/3">
            <p className="italic text-gray-600 text-base mb-4 leading-relaxed">
              “Ekavwor’s exceptional frontend work ensured our platform’s success.
              Highly recommended!”
            </p>
            <h3 className="text-3xl font-bold text-[#0A192F]">
              450+
              <span className="ml-2 text-gray-500 text-base font-medium">
                Clients Served
              </span>
            </h3>
          </div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center justify-end"
          >
            {/* Larger orange semi-circle */}
            <div className="absolute bottom-[-20px] w-[420px] h-[220px] bg-gradient-to-t from-[#FF5B00] to-orange-400 rounded-t-full shadow-xl -z-10"></div>

            {/* Profile image */}
            <div className="relative w-80 h-80 sm:w-[22rem] sm:h-[22rem] rounded-full overflow-hidden shadow-2xl">
              <img
                src={profile}
                alt="Ekavwor"
                className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
              />
              {/* Soft glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-100/20 via-transparent to-white/5"></div>
            </div>

            {/* Orange reflection */}
            <div className="absolute bottom-[-15px] w-72 h-6 bg-[#FF5B00]/50 blur-2xl rounded-full opacity-70"></div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="text-center sm:text-right sm:w-1/3">
            <p className="text-[#FF5B00] text-2xl mb-2">★★★★★</p>
            <h3 className="text-3xl font-bold text-[#0A192F]">10 Years</h3>
            <p className="text-gray-500 text-sm font-medium">Experience</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-5 mt-16">
          <button className="bg-[#FF5B00] hover:bg-orange-600 transition text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2">
            Portfolio <ArrowRight size={18} />
          </button>
          <button className="border-2 border-[#0A192F] text-[#0A192F] px-8 py-3 rounded-full font-semibold hover:bg-[#0A192F] hover:text-white transition">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
