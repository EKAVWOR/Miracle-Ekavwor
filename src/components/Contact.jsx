// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ii0698q", // ✅ your EmailJS service ID
        "template_klt0iak", // ✅ your EmailJS template ID
        form.current,
        "578f_wn2kdPZUx74B6iSR" // ✅ your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          setIsSent(true);
          form.current.reset();
          setTimeout(() => setIsSent(false), 4000);
        },
        (error) => {
          setLoading(false);
          console.error(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#0A192F] text-white py-20 md:py-28 px-6 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="text-[#FF7A00]">Touch</span>
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            You can reach out to me through the contact form or via my social
            links. I’ll respond as soon as possible.
          </p>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#FF7A00]" />
              <p>ekavworrmiracle@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#FF7A00]" />
              <p>+234 810 123 4567</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#FF7A00]" />
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-8 text-xl">
            <a
              href="https://linkedin.com/in/ekavworrmiracle"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF7A00]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/ekavwor.miracle"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF7A00]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/2348101234567"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF7A00]"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* Right Section (Contact Form) */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#112240] p-8 rounded-2xl shadow-lg"
        >
          <div className="grid gap-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:border-[#FF7A00] outline-none text-white"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:border-[#FF7A00] outline-none text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:border-[#FF7A00] outline-none text-white resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#FF7A00] hover:bg-[#e96e00] text-white font-semibold py-3 rounded-lg transition transform hover:scale-105"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {isSent && (
              <p className="text-green-400 text-sm mt-3 text-center">
                ✅ Message sent successfully!
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
