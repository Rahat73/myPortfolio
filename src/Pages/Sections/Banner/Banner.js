import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='min-h-screen p-10'>
            <div className='relative flex justify-center items-center box  bg-black'>
                <div className='absolute top-0 left-0 w-2 h-full rounded-xl bg-white z-10 lightbar'></div>
                <div className='topLayer absolute top-0 left-0 w-full h-full bg-black'></div>
                <h1 className='text-4xl tracking-widest text-shadow-main font-zendots'>RAHAT ASHIK</h1>
            </div>
            <div className='rotation'>
                <div className='flex justify-end'><h1 className='text-6xl font-extrabold font-zendots fill-none texts'>This is a text</h1></div>
                <div className='flex justify-end'><h1 className='text-6xl font-extrabold font-zendots fill-none texts'>Now second text</h1></div>
                <div className='flex justify-end'><h1 className='text-6xl font-extrabold font-zendots fill-none texts'>Lastly third text</h1></div>
            </div>
        </div>
    );
};

export default Banner;