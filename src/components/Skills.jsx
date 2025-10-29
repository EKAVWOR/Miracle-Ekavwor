// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import uiux from "../assets/b0ce124b52e2c924eb123f36664a613a.jpg";
import webdesign from "../assets/838fdaf481d5c62a5346b223df808f52.jpg";
import landing from "../assets/976d59025f6873080d9e5f8bb48c52a4.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      image: uiux,
      title: "Brand Design",
      description:
        "Building unique and memorable brand identities that capture attention and tell your story.",
    },
    {
      id: 2,
      image: webdesign,
      title: "Web Design",
      description:
        "Designing modern, responsive websites that perfectly blend creativity and usability.",
    },
    {
      id: 3,
      image: landing,
      title: "Landing Page",
      description:
        "Crafting high-converting landing pages optimized for campaigns and business growth.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-24 bg-[#0A192F] text-center relative overflow-hidden" id="services">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0F213F] to-[#0A192F] opacity-70"></div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Title Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
        >
          My <span className="text-orange-500">Services</span>
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[3px] bg-orange-500 mx-auto mb-10 rounded-full"
        ></motion.div>
        <p className="text-gray-300 mb-16 max-w-2xl mx-auto">
          Delivering creativity, precision, and strategy through thoughtful and
          impactful digital design solutions.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_#ff7a18]"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-14 bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-3 rounded-full font-medium shadow-md hover:shadow-[0_0_25px_#ff7a18] transition-all duration-300"
        >
          See More →
        </motion.button>
      </div>
    </section>
  );
};

export default Services;
