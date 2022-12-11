import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='flex justify-center min-h-screen items-center bg-black'>
            <div className='relative flex justify-center items-center box'>
                <div className='absolute top-0 left-0 w-3 h-full rounded-xl bg-white z-10 lightbar'></div>
                <div className='topLayer absolute top-0 left-0 w-full h-full bg-black'></div>
                <h1 className='text-5xl tracking-widest text-shadow-main font-zendots'>RAHAT ASHIK</h1>
            </div>
        </div>
    );
};

export default Banner;