import React from "react";
import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa";
import SVG from "../../../Components/SVG/SVG";

const AboutMe = () => {
    return (
        <section className="bg-base-100/90 bg-transparent-50 text-base-content py-20">
            <h2 className="text-3xl font-bold mb-4 text-center text-primary-content">About me</h2>
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">

                <div className="flex flex-col items-start relative">

                    {/* Segment 1 */}
                    <div className="flex items-center gap-4 relative mb-8">
                        <div className="absolute left-0 top-1 h-8 w-[2px] bg-accent"></div>
                        <div className="absolute left-[-3px] top-12 w-2 h-2 rounded-full bg-amber-300"></div>
                        <div className="ml-4 flex items-center gap-4">
                            <FaCode className="text-accent" />
                            <span className="text-lg font-semibold">Website Development</span>
                        </div>
                    </div>

                    {/* Segment 2 */}
                    <div className="flex items-center gap-4 relative mb-8">
                        <div className="absolute left-0 top-1 h-8 w-[2px] bg-accent"></div>
                        <div className="absolute left-[-3px] top-12 w-2 h-2 rounded-full bg-amber-300"></div>
                        <div className="ml-4 flex items-center gap-4">
                            <FaMobileAlt className="text-accent" />
                            <span className="text-lg font-semibold">App Development</span>
                        </div>
                    </div>

                    {/* Segment 3 */}
                    <div className="flex items-center gap-4 relative">
                        <div className="absolute left-0 top-1 h-8 w-[2px] bg-accent"></div>
                        <div className="ml-4 flex items-center gap-4">
                            <FaServer className="text-accent" />
                            <span className="text-lg font-semibold">Website Hosting</span>
                        </div>
                    </div>
                </div>



                {/* Right Side: About Me Text */}
                <div className="w-full lg:w-1/2">

                    <div className="text-accent text-left md:text-justify mb-6">
                        <p>
                            I love coding — it gives me clarity, creativity, and confidence. As a full stack developer with a frontend-focused mindset, every time I build something from a blank canvas, it feels like solving a meaningful puzzle.
                        </p>

                        {/* <div className="my-2 w-[50%] h-[1px] bg-gray-600 mx-auto">  </div> */}
                        <div className="flex justify-center"> <SVG />  </div>

                        <p>
                            I’m happiest when I’m deep into code, shaping smooth user experiences as a UI lover and turning ideas into real-world applications. That joy is what keeps me learning, building, and pushing boundaries every day.
                        </p>
                    </div>


                    <div className="flex gap-5 md:gap-10 mt-8 text-center">
                        <div>
                            <p className="text-3xl font-bold text-secondary">10<span className="text-accent">+</span></p>
                            <p className="text-sm text-accent">Completed Projects</p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-secondary">0<span className="text-accent">%</span></p>
                            <p className="text-sm text-accent">Client satisfaction</p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-secondary">1<span className="text-accent">+</span></p>
                            <p className="text-sm text-accent">Year of experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
