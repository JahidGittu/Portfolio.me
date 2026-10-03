"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPostman,
  SiStrapi,
  SiRedux,
  SiJsonwebtokens,
  SiFirebase,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface TechItem {
  name: string;
  icon: IconType;
  colors: [string, string];
}

const techs: TechItem[] = [
  { name: "HTML5", icon: FaHtml5, colors: ["#F06529", "#531C07"] },
  { name: "CSS3", icon: FaCss3Alt, colors: ["#1B49F1", "#091D4C"] },
  { name: "JavaScript", icon: SiJavascript, colors: ["#D3B80B", "#584D06"] },
  { name: "TypeScript", icon: SiTypescript, colors: ["#24719A", "#073260"] },
  { name: "React", icon: FaReact, colors: ["#61dafb", "#06334A"] },
  { name: "Next.js", icon: SiNextdotjs, colors: ["#494949", "#000000"] },
  { name: "Tailwind CSS", icon: SiTailwindcss, colors: ["#38bdf8", "#0f4a6e"] },
  { name: "Node.js", icon: FaNodeJs, colors: ["#3c873a", "#1d3e1d"] },
  { name: "Express.js", icon: SiExpress, colors: ["#777777", "#3c3c3c"] },
  { name: "MongoDB", icon: SiMongodb, colors: ["#47a248", "#1f4a20"] },
  { name: "PostgreSQL", icon: SiPostgresql, colors: ["#336791", "#1b374d"] },
  { name: "Strapi", icon: SiStrapi, colors: ["#4945FF", "#1B1870"] },
  { name: "Redux", icon: SiRedux, colors: ["#764ABC", "#381765"] },
  { name: "JWT", icon: SiJsonwebtokens, colors: ["#D63AFF", "#5B0D70"] },
  { name: "Firebase", icon: SiFirebase, colors: ["#FFA000", "#734302"] },
  { name: "Git", icon: FaGitAlt, colors: ["#f34f29", "#7a2714"] },
  { name: "GitHub", icon: FaGithub, colors: ["#c6c6c6", "#4d4d4d"] },
  { name: "Postman", icon: SiPostman, colors: ["#FF6C37", "#66260C"] },
];

interface SkillCardProps {
  name: string;
  Icon: IconType;
  colors: [string, string];
}

const SkillCard: React.FC<SkillCardProps> = ({ name, Icon, colors }) => {
  const originalColor = colors[0];
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer overflow-hidden group"
      style={{
        background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
        boxShadow: `0 8px 20px ${colors[1]}cc, 0 4px 10px #00000088`,
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          boxShadow:
            "inset 4px 4px 10px rgba(0,0,0,0.6), inset -4px -4px 10px rgba(255,255,255,0.1)",
          borderRadius: "1rem",
        }}
      />

      <Icon
        className="mb-4 relative drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
        style={{ fontSize: "2.5rem", color: originalColor, zIndex: 10 }}
      />
      <span className="text-lg font-semibold tracking-wide relative z-10 text-white text-center">
        {name}
      </span>
    </motion.div>
  );
};

const SkillsProficiency: React.FC = () => {
  return (
    <section className="relative min-h-screen text-white pt-32">
      {/* Background blurred gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            My Skills &amp; Tools
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Every Day is a New Challenge. I’m continuously learning and working
            with the latest technologies to build modern, scalable, and
            responsive applications.
          </p>
        </div>

        {/* Skills Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <SkillCard
                name={tech.name}
                Icon={tech.icon}
                colors={tech.colors}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsProficiency;
