// src/components/Footer.jsx
import React from "react";
import { ArrowRight, Twitter, Instagram, Youtube, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 font-['Poppins'] pt-20 pb-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-0">
            Let’s <span className="text-orange-500">Connect</span> there
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 transition-all text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2">
            Hire me <ArrowRight size={18} />
          </button>
        </div>

        <hr className="border-gray-700 mb-10" />

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo + Bio */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-lg font-bold">
                J
              </div>
              <h3 className="text-lg font-semibold text-white">Jenny</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2A2A2A] hover:bg-orange-500 transition-all"
              >
                <Globe size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2A2A2A] hover:bg-orange-500 transition-all"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2A2A2A] hover:bg-orange-500 transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2A2A2A] hover:bg-orange-500 transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Project
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="hover:text-orange-500 transition-colors">
                  +0123-456-789
                </span>
              </li>
              <li>
                <span className="hover:text-orange-500 transition-colors">
                  www.example.com
                </span>
              </li>
              <li>
                <span className="hover:text-orange-500 transition-colors">
                  example@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Get the latest information
            </h4>
            <div className="flex bg-[#2A2A2A] rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent px-4 py-3 text-sm text-gray-300 w-full focus:outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 transition-all px-4 flex items-center justify-center">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>
            Copyright © 2023{" "}
            <span className="text-orange-500 font-medium">Jenny</span>. All
            Rights Reserved.
          </p>
          <p className="mt-3 md:mt-0">
            User Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
