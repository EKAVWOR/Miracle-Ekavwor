// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Mtech Creative",
      date: "2024 - Present",
      role: "Lead Product Designer",
      description:
        "Overseeing digital product design projects, establishing design systems, and ensuring exceptional UI/UX standards for client platforms.",
    },
    {
      id: 2,
      company: "NovaBoard",
      date: "2023 - 2024",
      role: "Frontend Developer",
      description:
        "Built scalable frontends with React.js and Tailwind CSS, implementing reusable components and enhancing performance.",
    },
    {
      id: 3,
      company: "DesignLab",
      date: "2022 - 2023",
      role: "UX Researcher",
      description:
        "Conducted user research and usability tests to improve customer experience across digital platforms.",
    },
    {
      id: 4,
      company: "Freelance",
      date: "2021 - 2022",
      role: "Brand Identity Designer",
      description:
        "Developed brand identities and logo systems for startups and SMEs aligned with brand values.",
    },
    {
      id: 5,
      company: "NextGen Studio",
      date: "2020 - 2021",
      role: "Junior Web Designer",
      description:
        "Created responsive layouts, implemented animations, and ensured accessibility for modern web interfaces.",
    },
    {
      id: 6,
      company: "VisionHub",
      date: "2019 - 2020",
      role: "Graphic Designer",
      description:
        "Designed print and digital marketing materials including banners, flyers, and campaign assets.",
    },
    {
      id: 7,
      company: "Creatix Agency",
      date: "2018 - 2019",
      role: "Intern Designer",
      description:
        "Supported senior designers with visual concepts, prototypes, and branding projects.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white font-['Poppins'] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-[#0A192F] mb-4"
        >
          My <span className="text-orange-500">Work Experience</span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "150px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-[3px] bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-16 rounded-full"
        ></motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col md:grid md:grid-cols-9 gap-10">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gradient-to-b from-orange-400 via-orange-500 to-yellow-400 top-0 bottom-0 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`md:col-span-4 flex flex-col ${
                index % 2 === 0 ? "md:items-end text-right" : "md:col-start-6 md:items-start text-left"
              } relative`}
            >
              {/* Dot on timeline */}
              <div
                className={`hidden md:block absolute top-5 w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 shadow-[0_0_15px_rgba(255,100,0,0.5)] border-[3px] border-white ${
                  index % 2 === 0 ? "right-[-38px]" : "left-[-38px]"
                }`}
              ></div>

              {/* Card */}
              <div className="bg-[#F9FAFB] border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-full md:w-[90%] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {exp.company}
                </h3>
                <p className="text-sm text-gray-500 italic mb-2">{exp.date}</p>
                <h4 className="text-orange-600 font-semibold text-lg mb-2">{exp.role}</h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Resume Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-20 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(255,130,0,0.6)] transition-all duration-300 block mx-auto"
        >
          View Full Resume →
        </motion.button>
      </div>

      {/* Decorative blurred glows */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-orange-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-300/20 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Experience;
