import React from "react";
import { FaDownload } from "react-icons/fa";
import { LiaHireAHelper } from "react-icons/lia";
import { motion } from "framer-motion";
import SVG from "../../../Components/SVG/SVG";
import myImg from "../../../assets/mj.jpg";

// Social icons as images
import githubImg from "../../../assets/Social-Icons/GitHub.png";
import linkedinImg from "../../../assets/Social-Icons/LinkdinIMG.png";
import facebookImg from "../../../assets/Social-Icons/Facebook.png";

const socialLinks = [
  { img: githubImg, url: "https://github.com/JahidGittu", bg: "bg-gray-800" },
  {
    img: linkedinImg,
    url: "https://linkedin.com/in/jahid-hossen",
    bg: "bg-blue-700",
  },
  {
    img: facebookImg,
    url: "https://facebook.com/jahid.hossen",
    bg: "bg-blue-600",
  },
];

const Banner = () => {
  return (
    <motion.section
      className="text-base-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between pt-24 relative">
        {/* Left Content */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-primary-content w-full">
            <div className="flex flex-col items-end relative ml-12 md:ml-4">
              <span className="self-start">Hey, I'm</span>
              <span className=" self-center text-secondary">Jahid Hossen</span>
              <div className="absolute left-1/2 top-28 transform -translate-x-1/2">
                <SVG />
              </div>
            </div>
          </h1>

          <div className="my-8 ml-4 text-lg text-accent">
            <p className="text-2xl font-semibold py-2">
              A Passionate full stack Web developer.
            </p>
            <p>
              I love building awesome, responsive, and user-friendly websites
              using modern technologies.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="btn bg-secondary text-secondary-content rounded-full border-none hover:opacity-90 transition flex items-center gap-2"
            >
              <LiaHireAHelper size={20} /> Hire Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn btn-outline border-accent text-accent rounded-full hover:bg-accent hover:text-base-100 transition flex items-center gap-2"
            >
              <FaDownload /> Resume
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Center Image */}
            <img
              src={myImg}
              alt="Banner Illustration"
              className="h-72 sm:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-2xl shadow-2xl border border-gray-600 blur-[0.5px]"
              style={{
                maskImage:
                  "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
              }}
            />

            {/* Social icons (images) along the right side */}
            <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${link.bg} overflow-hidden shadow-2xl`}
                  whileHover={{ scale: 1.2 }}
                >
                  <img
                    src={link.img}
                    alt="social"
                    className="bg-transparent border-none"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner;
