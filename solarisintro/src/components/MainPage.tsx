import React, { useState, useEffect } from "react";
import About from './About';
import Carrer from './Carrer';
import ShootingStars from "./ShootingStar";
const MainPage: React.FC = () => {
    return (
        <div className="inline">
            <div className="w-full h-100v text-center bg- mx-0 my-auto">
                <div className="absolute">
                    <ShootingStars></ShootingStars>
                </div>
                <span className='font-["NotoSans"] text-white block mb-5' >이정현</span>
                <span className='font-["NotoSans"] text-white block mb-5'>Web Developer</span>
            </div>
            <About />
            <Carrer />
        </div >
    )
};

export default MainPage;