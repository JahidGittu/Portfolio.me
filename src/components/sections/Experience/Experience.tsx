import React from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiOfficeChairBold } from "react-icons/pi";
import { MdOutlineTimerOff } from "react-icons/md";
import { FaCircleCheck, FaListCheck } from "react-icons/fa6";

interface ExperienceItem {
  title: string;
  org: string;
  time: string;
  desc: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    org: "Meta Infinity BD",
    time: "Dec 2025 – Present",
    desc: "Developing responsive business websites, modern landing pages, and scalable web solutions using React, Next.js, Node.js, and Tailwind CSS.",
    responsibilities: [
      "Engineered production-ready web applications using React, Next.js, and TypeScript.",
      "Optimized website performance, SEO scores, accessibility, and user engagement.",
      "Integrated secure REST APIs with Node.js, Express, MongoDB, and PostgreSQL databases.",
      "Turned design mockups into pixel-perfect, mobile-first responsive user interfaces.",
    ],
  },
  {
    title: "Computer Trainer & Computer Operator",
    org: "Fatema Computer",
    time: "Feb 2023 – Nov 2025 (2 yrs 9 mos)",
    desc: "Trained students in basic computer tools and managed printing, formatting, and customer services.",
    responsibilities: [
      "Trained 150+ students in computer fundamentals, MS Office, and digital tools.",
      "Managed high-volume official document typing, formatting, and print operations.",
      "Assisted clients with online form submissions, digital registrations, and IT support.",
      "Supervised equipment maintenance, peripherals setup, and customer service delivery.",
    ],
  },
  {
    title: "Accountant & Computer Operator",
    org: "Nijhum Computer",
    time: "Feb 2022 – Nov 2022 (9 months)",
    desc: "Handled data entry, invoicing, and supported scanning, printing, and form-fill tasks.",
    responsibilities: [
      "Maintained accurate digital financial ledgers, billing sheets, and daily cash transactions.",
      "Processed customer data entry, digital invoicing, scanning, and file archiving.",
      "Executed government and institutional online form submissions and verifications.",
      "Ensured strict record accuracy and managed administrative client services.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="bg-base-100/90 text-white pt-32 px-4">
      <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-base-100 hidden md:block z-0" />

        {experiences.map((item, idx) => {
          const isEven = idx % 2 === 0; // 0: Left=Role, 1: Right=Role, 2: Left=Role

          const roleCard = (
            <div className="w-full md:w-[45%] bg-base-100 p-6 rounded-xl space-y-4 shadow-xl border border-gray-800/80 transition-all duration-300 hover:border-secondary/40">
              <h3 className="text-xl font-semibold flex gap-2 items-center text-white">
                <PiOfficeChairBold className="text-xl text-secondary shrink-0" />
                <span>{item.title}</span>
              </h3>
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <MdOutlineTimerOff className="text-base text-accent shrink-0" />
                <span>{item.time}</span>
              </p>
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <HiOutlineOfficeBuilding className="text-base text-accent shrink-0" />
                <span>{item.org}</span>
              </p>
              <p className="text-sm text-gray-400 pt-1 leading-relaxed border-t border-gray-800">
                {item.desc}
              </p>
            </div>
          );

          const responsibilitiesCard = (
            <div className="w-full md:w-[45%] bg-base-100/95 p-6 rounded-xl space-y-3 shadow-xl border border-gray-800/80 transition-all duration-300 hover:border-secondary/40">
              <div className="flex items-center gap-2 text-secondary font-semibold text-base border-b border-gray-800 pb-2">
                <FaListCheck className="text-secondary text-sm shrink-0" />
                <span>Key Responsibilities</span>
              </div>
              <ul className="space-y-2.5 pt-1">
                {item.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    <FaCircleCheck className="text-secondary text-xs shrink-0 mt-1" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          );

          const connector = (
            <div className="relative w-full md:w-[10%] flex justify-center items-center my-4 md:my-0">
              <div className="hidden md:block w-[2px] h-[80px] bg-white absolute top-0 left-1/2 transform -translate-x-1/2" />
              <div className="w-3 h-3 bg-white rounded-full z-10" />
              <div className="hidden md:block w-[2px] h-[80px] bg-white absolute bottom-0 left-1/2 transform -translate-x-1/2" />
            </div>
          );

          return (
            <div
              key={idx}
              className="flex flex-col md:flex-row justify-between items-center mb-20 relative z-10 space-y-6 md:space-y-0"
            >
              {isEven ? (
                <>
                  {roleCard}
                  {connector}
                  {responsibilitiesCard}
                </>
              ) : (
                <>
                  {responsibilitiesCard}
                  {connector}
                  {roleCard}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
