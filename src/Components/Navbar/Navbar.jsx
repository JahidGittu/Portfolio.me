import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { FaDownload } from "react-icons/fa6";
import Logo from "../Logo/Logo";

const Navbar = ({ onResumeClick }) => {
  const navMenu = (
    <>
      <li>
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-secondary transition duration-300 cursor-pointer"
        >
          Home
        </ScrollLink>
      </li>

      <li>
        <ScrollLink
          to="service"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-secondary transition duration-300 cursor-pointer"
        >
          About
        </ScrollLink>
      </li>

      <li>
        <ScrollLink
          to="skills-proficiency"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-secondary transition duration-300 cursor-pointer"
        >
          Skills
        </ScrollLink>
      </li>

      <li>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-secondary transition duration-300 cursor-pointer"
        >
          Projects
        </ScrollLink>
      </li>

      <li>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-secondary transition duration-300 cursor-pointer"
        >
          Contact
        </ScrollLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/90 backdrop-blur-md shadow-md text-base-content px-4 md:px-8">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navMenu}
          </ul>
        </div>

        {/* Logo for Desktop */}
        <div className="hidden lg:block">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-secondary text-xl cursor-pointer"
          >
            <Logo />
          </ScrollLink>
        </div>
      </div>

      {/* Logo for Mobile Centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 lg:hidden">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-secondary text-xl cursor-pointer"
        >
          <Logo />
        </ScrollLink>
      </div>

      {/* Navbar Center for Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-10 text-lg font-semibold menu-horizontal px-1 uppercase tracking-wide">
          {navMenu}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <button
          onClick={onResumeClick}
          className="btn btn-sm md:btn-lg btn-outline border-accent rounded-full text-accent hover:bg-accent hover:text-base-100 transition-all duration-300 flex items-center gap-2"
        >
          <HiOutlineViewfinderCircle size={24} />
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
