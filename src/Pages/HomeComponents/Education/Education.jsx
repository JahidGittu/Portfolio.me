import React from "react";
import { FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import connector1 from "../../../assets/edubg2.png";
import connector2 from "../../../assets/edubg2.png"; 

const educations = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "RUET",
    year: "2020 – 2024",
    result: "CGPA: 3.85/4.00",
    details: "Major in Software Engineering. Coding club, hackathons, and web projects.",
  },
  {
    degree: "HSC (Science)",
    institute: "Dhaka College",
    year: "2017 – 2019",
    result: "GPA: 5.00/5.00",
    details: "Member of science club. Math Olympiad participant.",
  },
  {
    degree: "SSC (Science)",
    institute: "Ideal School & College",
    year: "2015 – 2017",
    result: "GPA: 5.00/5.00",
    details: "Debate club, class monitor.",
  },
];

const Education = () => (
  <section className="py-16 bg-base-100/90" id="education">
    <h2 className="text-3xl font-bold mb-12 text-secondary text-center flex gap-5 items-center justify-center">
      <FaUserGraduate />
      <span>Educational Qualification</span>
    </h2>
    <div className="max-w-4xl mx-auto relative flex">
      {/* Vertical timeline line */}
      <div className="absolute left-12 top-0 bottom-0 w-1 bg-accent rounded z-0" />
      <div className="flex flex-col gap-16 relative z-10 w-full">
        {educations.map((edu, idx) => (
          <div key={idx} className="flex items-center min-h-[120px] relative">
            {/* Timeline Dot+Icon */}
            <div className="w-24 flex justify-center items-center flex-col relative">
              <span
                className="w-12 h-12 flex items-center justify-center rounded-full bg-base-100 border-4 border-secondary shadow-lg z-10 transition-all duration-200"
                style={{ marginLeft: "8px" }}
              >
                <FaGraduationCap className="w-6 h-6 text-secondary" />
              </span>
            </div>
            {/* Education Card + Images */}
            <div className="flex-1 flex flex-col relative">
              {/* কার্ডের উপরে ইমেজ */}
              {idx === 0 && (
                <div className="relative h-[38px]">
                  <img
                    src={connector1}
                    alt=""
                    className="absolute opacity-30 left-0 right-0 top-0 w-full pointer-events-none select-none z-10"
                    style={{
                      minWidth: 160,
                      opacity: 0.8,
                      transform: "scaleY(-1)",
                    }}
                  />
                </div>
              )}
              <div className="bg-base-100 border-l-4 border-secondary rounded-xl shadow p-6 ml-4 flex flex-col justify-center min-h-[110px] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between z-20">
                  <div>
                    <div className="text-xl font-bold text-primary-content signika-font ">{edu.degree}</div>
                    <div className="text-sm text-accent ">{edu.institute}</div>
                    <div className="text-sm text-secondary font-bold ">{edu.year}</div>
                  </div>
                  <div className="text-lg font-bold text-green-500 mt-2 md:mt-0 ">{edu.result}</div>
                </div>
                <div className="mt-2 text-base-content text-sm ">{edu.details}</div>
              </div>
              {/* কার্ডের নিচে ইমেজ */}
              {idx === 1 && (
                <div className="relative h-[38px]">
                  <img
                    src={connector2}
                    alt=""
                    className="absolute left-0 right-0 bottom-0 -top-10 w-full pointer-events-none select-none z-10"
                    style={{
                      minWidth: 160,
                      opacity: 0.8,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

);

export default Education;
