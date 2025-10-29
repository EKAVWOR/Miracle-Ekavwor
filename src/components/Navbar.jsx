// src/components/Navbar.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import profile from "../assets/profile.png"

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0A192F] text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <div className="flex items-center gap-3">
          <img
            src={profile} // <-- replace with your actual profile photo path
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-[#FF7A00] object-cover"
          />
          <span className="text-[16px] font-semibold">Ekavwor Miracle</span>
        </div>
        

        {/* CENTER - Nav Links */}
        <ul className="hidden md:flex gap-8 text-[15px] font-medium">
          {["Home", "About", "Skills", "Projects", "Testimonials", "Contact"].map(
            (link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-[#FF7A00] transition duration-300"
                >
                  {link}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF7A00] transition duration-300"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF7A00] transition duration-300"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF7A00] transition duration-300"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>

        
      </div>
    </motion.nav>
  );
};

export default Navbar;
