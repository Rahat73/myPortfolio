import React, { useRef } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import SkillsCanvas from '../MySkills/SkillsCanvas';
import Banner from '../Sections/Banner/Banner';
import Projects from '../Sections/Projects';

const Home = () => {
    const projects = useRef(null);
    const skills = useRef(null);
    const aboutme = useRef(null);

    const handleSection = (section) => {
        if (section === "aboutme") {
            aboutme.current?.scrollIntoView({ behavior: 'smooth' });
        }
        if (section === "projects") {
            projects.current?.scrollIntoView({ behavior: 'smooth' });
        }
        if (section === "skills") {
            skills.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Banner handleSection={handleSection}></Banner>
            <div ref={aboutme}><AboutMe></AboutMe></div>
            <div ref={projects}><Projects></Projects></div>
            <div ref={skills}><SkillsCanvas></SkillsCanvas></div>

        </div>
    );
};

export default Home;