"use client";

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-100 text-base-content border-t border-accent/30 mt-20">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-4 md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-bold text-secondary">Jahid Hossen</h2>
          <p className="text-accent text-sm leading-relaxed">
            Full Stack Web Developer specializing in React, Next.js, TypeScript, and Node.js.
            Building high-performance, responsive web applications and digital experiences with clean architecture.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a
              href="https://www.facebook.com/Mohammad.Jahid.Hossen.fb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center text-accent hover:text-secondary hover:bg-base-300 transition-colors"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jahidgittu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center text-accent hover:text-secondary hover:bg-base-300 transition-colors"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://github.com/JahidGittu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center text-accent hover:text-secondary hover:bg-base-300 transition-colors"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:w-1/3 text-center md:text-left">
          <h3 className="text-xl font-semibold text-secondary mb-2">
            Quick Navigation
          </h3>
          <ul className="flex flex-col gap-1.5 text-sm">
            <li className="li-style-arrow hover:text-secondary transition-colors cursor-pointer">
              <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
                Home
              </ScrollLink>
            </li>
            <li className="li-style-arrow hover:text-secondary transition-colors cursor-pointer">
              <ScrollLink to="service" smooth={true} duration={500} offset={-70}>
                About &amp; Overview
              </ScrollLink>
            </li>
            <li className="li-style-arrow hover:text-secondary transition-colors cursor-pointer">
              <ScrollLink to="skills-proficiency" smooth={true} duration={500} offset={-70}>
                Skills &amp; Tech Stack
              </ScrollLink>
            </li>
            <li className="li-style-arrow hover:text-secondary transition-colors cursor-pointer">
              <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
                Featured Projects
              </ScrollLink>
            </li>
            <li className="li-style-arrow hover:text-secondary transition-colors cursor-pointer">
              <ScrollLink to="experience" smooth={true} duration={500} offset={-70}>
                Work Experience
              </ScrollLink>
            </li>
            <li className="li-style-arrow hover:text-secondary transition-colors cursor-pointer">
              <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
                Contact Me
              </ScrollLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 md:w-1/3 text-center md:text-left text-sm">
          <h3 className="text-xl font-semibold text-secondary mb-2">Contact Details</h3>
          <p className="text-accent">
            Email:{" "}
            <a href="mailto:jahid.hossen.me@gmail.com" className="hover:text-secondary text-gray-300">
              jahid.hossen.me@gmail.com
            </a>
          </p>
          <p className="text-accent">
            Phone &amp; WhatsApp:{" "}
            <a href="tel:+8801640726858" className="hover:text-secondary text-gray-300">
              +880 1640-726858
            </a>
          </p>
          <p className="text-accent">
            Location: <span className="text-gray-300">Bogura, Bangladesh</span>
          </p>
          <p className="text-xs text-accent mt-4">
            © {new Date().getFullYear()} Jahid Hossen (Code Gittu). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
