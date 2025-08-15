import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content border-t border-accent/30 mt-20">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Logo & About */}
        <div className="flex flex-col gap-4 md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-bold text-secondary">Jahid Hossen</h2>
          <p className="text-accent">
            Full Stack Web Developer creating responsive, modern, and
            user-friendly websites & apps. Let’s build something amazing together.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a
              href="https://www.facebook.com/Mohammad.Jahid.Hossen.fb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-secondary transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://linkedin.com/in/jahidgittu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-secondary transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/JahidGittu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-secondary transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 md:w-1/3 text-center md:text-left">
          <h3 className="text-xl font-semibold text-secondary mb-2">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-1">
            <li className="li-style-arrow hover:text-secondary transition-colors cursor-pointer">
              <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
                Home
              </ScrollLink>
            </li>
            <li className="li-style-arrow hover:text-secondary transition-colors cursor-pointer">
              <ScrollLink
                to="skills-short"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Skills
              </ScrollLink>
            </li>
            <li className="li-style-arrow hover:text-secondary transition-colors cursor-pointer">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Projects
              </ScrollLink>
            </li>
            <li className="li-style-arrow hover:text-secondary transition-colors cursor-pointer">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 md:w-1/3 text-center md:text-left">
          <h3 className="text-xl font-semibold text-secondary mb-2">Contact</h3>
          <p className="text-accent">
            Email:{" "}
            <a
              href="mailto:jahid.hossen.me@gmail.com"
              className="hover:text-secondary"
            >
              jahid.hossen.me@gmail.com
            </a>
          </p>
          <p className="text-accent">
            Phone:{" "}
            <a href="tel:+8801640726858" className="hover:text-secondary">
              +8801640726858
            </a>
          </p>
          <p className="text-accent">
            Location: Raipur, Lakshmipur, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
