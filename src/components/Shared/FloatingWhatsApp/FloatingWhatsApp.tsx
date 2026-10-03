"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const whatsappNumber = "8801640726858";
const defaultMessage = encodeURIComponent(
  "Hello Jahid! I visited your portfolio and would like to discuss a project."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.aside
      className="fixed bottom-6 right-6 z-50 flex items-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      aria-label="Contact options"
    >
      {/* Tooltip Label */}
      <span className="hidden sm:block absolute right-16 px-3 py-1.5 bg-[#1d1f29] text-gray-200 text-xs font-medium rounded-lg shadow-xl border border-gray-700 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat on WhatsApp
      </span>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Jahid Hossen"
        className="relative w-14 h-14 rounded-full flex items-center justify-center bg-[#1d1f29]/95 text-[#25D366] border-2 border-[#25D366]/60 shadow-[0_4px_25px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.55)] hover:bg-[#25D366] hover:text-white transition-all duration-300 transform hover:scale-110"
      >
        {/* Subtle Ambient Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none opacity-75" />
        <FaWhatsapp className="text-3xl relative z-10" />
      </a>
    </motion.aside>
  );
};

export default FloatingWhatsApp;
