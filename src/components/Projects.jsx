// src/components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "NovaBoard Dashboard",
    category: "Web App",
    image: "/assets/project1.jpg",
    description:
      "A dynamic React dashboard featuring user authentication, real-time data display, and notification system.",
    link: "https://novaboard-demo.netlify.app",
  },
  {
    id: 2,
    title: "Mtech Creative Website",
    category: "Web Design",
    image: "/assets/project2.jpg",
    description:
      "A sleek responsive site for a design agency showcasing creative portfolios and brand identity.",
    link: "https://mtechcreative.netlify.app",
  },
  {
    id: 3,
    title: "Real Estate Landing Page",
    category: "Landing Page",
    image: "/assets/project3.jpg",
    description:
      "Modern real estate landing page with storytelling visuals, built using React and Tailwind.",
    link: "https://realestate-demo.vercel.app",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="bg-[#0A192F] text-white py-20 md:py-28 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          My <span className="text-[#FF7A00]">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-14"
        >
          A showcase of some of my favorite work — combining functionality,
          creativity, and clean design using React and Tailwind CSS.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setSelected(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.category}
                </p>
                <button className="bg-[#FF7A00] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition">
                  View Project <FaExternalLinkAlt size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-[#112240] p-8 rounded-2xl max-w-lg text-left relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-[#FF7A00]"
              >
                ✕
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-52 object-cover rounded-lg mb-5"
              />
              <h3 className="text-2xl font-bold mb-2 text-[#FF7A00]">
                {selected.title}
              </h3>
              <p className="text-gray-300 mb-4">{selected.description}</p>
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF7A00] text-white px-5 py-2 rounded-full hover:scale-105 transition"
              >
                Visit Project <FaExternalLinkAlt size={14} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
