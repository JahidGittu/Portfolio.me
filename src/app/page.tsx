"use client";

import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Resume from "@/components/Shared/Resume/Resume";

import Banner from "@/components/sections/Banner/Banner";
import ShortSkills from "@/components/sections/ShortSkills/ShortSkills";
import AboutMe from "@/components/sections/AboutMe/AboutMe";
import SkillsProficiency from "@/components/sections/SkillsProficiency/SkillsProficiency";
import Education from "@/components/sections/Education/Education";
import Projects from "@/components/sections/Projects/Projects";
import Experience from "@/components/sections/Experience/Experience";
import ContactMe from "@/components/sections/ContactMe/ContactMe";
import FloatingWhatsApp from "@/components/Shared/FloatingWhatsApp/FloatingWhatsApp";

// Dynamic import for ParticleBg (heavy, client-only, uses Web Workers)
const ParticleBg = dynamic(
  () => import("@/components/Shared/ParticleBg"),
  { ssr: false }
);

export default function HomePage(): React.JSX.Element {
  return (
    <div className="relative min-h-screen bg-[#252734]">
      <ParticleBg />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <Navbar />
        <main>
          <section id="home">
            <Banner />
          </section>
          <section id="service">
            <ShortSkills />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="skills-proficiency">
            <SkillsProficiency />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="contact">
            <ContactMe />
          </section>
        </main>
        <Footer />
        <Resume />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
