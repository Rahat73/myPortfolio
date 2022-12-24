import React from 'react';
import cartivate from "../../assets/images/cartivate.png"
import GameMaster from "../../assets/images/GameMaster.png"
import LearningSpree from "../../assets/images/LearningSpree.png"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

const Projects = () => {
    return (
        <div className='bg-base-300 min-h-screen'>
            <h1 className='text-4xl font-semibold py-10'>Projects</h1>

            <div className='w-1/4 h-1/4 mx-auto'>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={cartivate} alt="project" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Cartivate</h2>
                                <p>A web-site on resale products</p>
                                <div className="card-actions justify-end">
                                    <a href="https://cartivate-0.web.app/"><button className=" btn btn-primary">Visit</button></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={GameMaster} alt="project" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">GameMaster</h2>
                                <p>Gaming lesson, trainer website</p>
                                <div className="card-actions justify-end">
                                    <a href="https://gamemaster-f68f3.web.app/"><button className="btn btn-primary">Visit</button></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={LearningSpree} alt="project" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">LeaningSpree</h2>
                                <p>Learning website</p>
                                <div className="card-actions justify-end">
                                    <a href="https://learning-spree.web.app/"><button className="btn btn-primary">Visit</button></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default Projects;