import React, { useState } from 'react';
import { Link } from 'react-router';
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { FaDownload } from "react-icons/fa6";
import Logo from '../Logo/Logo';

const Navbar = () => {
    const navMenu = (
        <>
            <li><Link className='hover:text-secondary transition duration-300' to="/">Home</Link></li>
            <li><Link className='hover:text-secondary transition duration-300' to="/service">Service</Link></li>
            <li><Link className='hover:text-secondary transition duration-300' to="/projects">Projects</Link></li>
            <li><Link className='hover:text-secondary transition duration-300' to="/contact">Contact</Link></li>
        </>
    );

    const [hoverResuem, setHoverResume] = useState(false)


    const handleResume = () => {
        setHoverResume(!hoverResuem)
    }

    return (
        <div className="navbar  text-base-content shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {navMenu}
                    </ul>
                </div>
                <Link to="/" className="text-secondary text-xl"><Logo /> </Link>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="gap-10 text-lg font-semibold menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>

            <div className="navbar-end">
                <Link onMouseEnter={handleResume} className="btn btn-sm md:btn-xl btn-outline border-accent rounded-full text-accent hover:bg-accent hover:text-base-100 transition flex items-center gap-2"> {
                    hoverResuem ? <HiOutlineViewfinderCircle size={16} /> : <FaDownload size={16} />
                } Resume</Link>
            </div>
        </div>
    );
};

export default Navbar;
