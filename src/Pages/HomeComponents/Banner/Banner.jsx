import React from "react";
import { FaDownload } from "react-icons/fa";
import { LiaHireAHelper } from "react-icons/lia";
import { motion } from "framer-motion";
import SVG from "../../../Components/SVG/SVG";
// import myImg from "../../../assets/Jahid.jpg"
import myImg from "../../../assets/mj.jpg"

const Banner = () => {
    return (
        <motion.section
            className="text-base-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between pt-20">
                {/* Left Content */}
                <motion.div
                    className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-primary-content w-full">
                        <div className="flex flex-col items-end relative">
                            <span className="self-start">Hey, I'm</span>
                            <span className=" self-center text-secondary">Jahid Hossen</span>
                            <div className="absolute left-1/2 top-28 transform -translate-x-1/2">
                                <SVG />
                            </div>
                        </div>
                    </h1>

                    <p className="mt-6 mb-8 text-lg text-accent">
                        A Passionate full stack Web developer.<br />
                        I love building awesome, responsive, and user-friendly websites using modern technologies.
                    </p>


                    <div className="flex flex-col sm:flex-row items-center gap-4">
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
                    className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <img
                        src={myImg}
                        alt="Banner Illustration"
                        className="h-72 sm:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-2xl shadow-2xl border border-gray-600 blur-[0.5px]"
                        style={{
                            maskImage: "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
                            WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)",
                        }}
                    />

                  

                </motion.div>
            </div>
        </motion.section>
    );
};

export default Banner;
