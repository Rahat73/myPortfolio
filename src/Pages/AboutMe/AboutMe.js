import React from 'react';
import Lottie from "lottie-react";
import computer from "../../assets/computer.json"
import Fade from 'react-reveal/Fade';
import dp from '../../assets/images/displayPicture.jpg'

const AboutMe = () => {
    return (
        <div className='min-h-screen'>
            <Lottie animationData={computer} loop={true} className="h-96" />
            <Fade bottom>
                <div className="avatar -top-64">
                    <div className="w-32 rounded-full">
                        <img src={dp} alt='dp' />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default AboutMe;