import React from 'react';
import SkillsCanvas from '../MySkills/SkillsCanvas';
import Banner from '../Sections/Banner/Banner';
import Projects from '../Sections/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <SkillsCanvas></SkillsCanvas>
        </div>
    );
};

export default Home;