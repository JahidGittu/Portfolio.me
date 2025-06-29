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
            <Banner />
            <ShortSkills />
            <AboutMe />
            <SkillsProficiency />
            <Education />
            <Projects />
            <Experience />
            <ContactMe />
        </div>
    );
};

export default Home;