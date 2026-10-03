import React from "react";
import { FaCode, FaServer, FaLaptopCode } from "react-icons/fa";
import SVG from "@/components/SVG/SVG";
import type { IconType } from "react-icons";

interface ServiceItem {
  icon: IconType;
  title: string;
  dot: boolean;
}

interface StatItem {
  value: string;
  label: string;
}

const services: ServiceItem[] = [
  { icon: FaLaptopCode, title: "Frontend & Web Apps", dot: true },
  { icon: FaServer, title: "Backend & RESTful APIs", dot: true },
  { icon: FaCode, title: "Full Stack Architecture", dot: false },
];

const stats: StatItem[] = [
  { value: "Meta Infinity BD", label: "Full Stack Developer" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "Bogura, BD", label: "Current Location" },
];

const AboutMe: React.FC = () => {
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
          <div className="text-accent text-left md:text-justify mb-6 space-y-4">
            <p>
              I am a passionate Full Stack Web Developer experienced in building
              modern, responsive, and visually engaging websites using React,
              Next.js, TypeScript, and Tailwind CSS. Skilled in creating interactive
              user interfaces, business websites, landing pages, and digital experiences
              with strong attention to UI/UX, performance optimization, and clean code architecture.
            </p>

            <div className="flex justify-center py-1">
              <SVG />
            </div>

            <p>
              I also have hands-on experience designing robust backend services using
              Node.js, Express.js, MongoDB, and PostgreSQL. Currently developing production-ready
              solutions at <strong>Meta Infinity BD</strong> in Bogura, Bangladesh.
              Fluent in <strong>English</strong> (Professional Working Proficiency) and <strong>Bangla</strong> (Native).
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-5 md:gap-10 mt-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-2xl md:text-3xl font-bold text-secondary">
                  {stat.value}
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
