// src/components/Testimonials.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Henry Arthur",
    role: "CEO, Food Express",
    rating: 5,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    name: "Joshua Arthur",
    role: "CTO, EV Charger",
    rating: 5,
    text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    name: "Grace Thomas",
    role: "Product Manager, DesignHub",
    rating: 5,
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur.",
  },
  {
    name: "Michael Stone",
    role: "Director, NovaWorks",
    rating: 4,
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
  {
    name: "Linda Okafor",
    role: "UX Designer, SoftEdge",
    rating: 5,
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white text-gray-900 py-24 px-6 font-['Poppins'] relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          What My Clients <span className="text-orange-500">Say</span>
        </motion.h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Hear what my clients have to say about our collaboration and results achieved together.
        </p>

        {/* Slider */}
        <div className="relative h-[360px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 120,
                damping: 15,
              }}
              className="bg-gray-50 rounded-3xl shadow-xl p-10 mx-auto max-w-3xl relative"
            >
              <Quote className="absolute text-gray-200 top-6 right-10 w-10 h-10" />

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-orange-400 fill-orange-400 w-5 h-5"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                “{testimonials[index].text}”
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold text-lg">
                  {testimonials[index].name.split(" ")[0][0]}
                  {testimonials[index].name.split(" ")[1][0]}
                </div>
                <div className="text-left">
                  <h4 className="text-gray-900 font-semibold">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-orange-500 hover:text-white flex items-center justify-center transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 flex items-center justify-center transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: i === index ? 1.3 : 1,
                backgroundColor: i === index ? "#f97316" : "#d1d5db",
              }}
              transition={{ duration: 0.3 }}
              className="w-3 h-3 rounded-full"
            ></motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
