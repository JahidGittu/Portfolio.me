import React from 'react';

import Banner from '../HomeComponents/Banner/Banner';
import AboutMe from '../HomeComponents/AboutMe/AboutMe';
import ShortSkills from '../HomeComponents/ShortSkills/ShortSkills';
import SkillsProficiency from '../HomeComponents/SkillsProficiency/SkillsProficiency';
import Education from '../HomeComponents/Education/Education';
import Experience from '../HomeComponents/Experience/Experience';
import ContactMe from '../HomeComponents/ContactMe/ContactMe';
import Projects from '../HomeComponents/Projects/Projects';

const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;
