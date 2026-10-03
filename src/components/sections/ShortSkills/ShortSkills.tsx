"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const skills: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "REST API",
  "JWT",
  "Git & GitHub",
  "Vercel",
];

const ShortSkills: React.FC = () => {
  return (
    <section className="bg-[#1d1f29] w-full py-1">
      <div className="max-w-screen-xl mx-auto px-6">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-lg md:text-xl font-bold text-accent mx-8 hover:text-secondary transition-all"
            >
              {skill}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ShortSkills;
