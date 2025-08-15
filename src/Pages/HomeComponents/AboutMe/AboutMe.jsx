import React from "react";
import { FaCode, FaMobileAlt, FaServer } from "react-icons/fa";
import SVG from "../../../Components/SVG/SVG";

const services = [
  { icon: FaCode, title: "Website Development", dot: true },
  { icon: FaMobileAlt, title: "App Development", dot: true },
  { icon: FaServer, title: "Website Hosting", dot: false },
];

const stats = [
  { value: "12+", label: "Completed Projects" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "1+", label: "Year of Experience" },
];

const AboutMe = () => {
  return (
    <section className="bg-base-100/90 bg-transparent-50 text-base-content pt-32">
      <h2 className="text-3xl font-bold mb-4 text-center text-primary-content">
        About me
      </h2>

      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 px-4 md:px-16">

        {/* Left Side - Services */}
        <div className="flex flex-col items-start relative">
          {services.map(({ icon: Icon, title, dot }, index) => (
            <div
              key={index}
              className="flex items-center gap-4 relative mb-8 pt-2 text-2xl md:text-3xl"
            >
              {/* Vertical line */}
              <div className="absolute left-0 top-1 h-10 w-[2px] bg-accent"></div>

              {/* Yellow dot (except last item if dot:false) */}
              {dot && (
                <div className="absolute left-[-3px] top-14 w-2 h-2 rounded-full bg-amber-300"></div>
              )}

              {/* Icon & Title */}
              <div className="ml-4 flex items-center gap-4">
                <Icon size={24} className="text-accent" />
                <span className="text-lg font-semibold">{title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - About Me Text */}
        <div className="w-full lg:w-1/2">
          <div className="text-accent text-left md:text-justify mb-6">
            <p>
              I love coding — it gives me clarity, creativity, and confidence.
              As a full stack developer with a frontend-focused mindset, every
              time I build something from a blank canvas, it feels like solving
              a meaningful puzzle.
            </p>

            <div className="flex justify-center">
              <SVG />
            </div>

            <p>
              I’m happiest when I’m deep into code, shaping smooth user
              experiences as a UI lover and turning ideas into real-world
              applications. That joy is what keeps me learning, building, and
              pushing boundaries every day.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-5 md:gap-10 mt-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl font-bold text-secondary">
                  {stat.value}
                  {!stat.value.includes("%") && <span className="text-accent">+</span>}
                </p>
                <p className="text-sm text-accent">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
