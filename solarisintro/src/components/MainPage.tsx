import React, { useState, useEffect } from "react";
import About from './About';
import Carrer from './Carrer';

const MainPage: React.FC = () => {
    return (
        <div className="inline">
            <div className="grid place-items-center w-full h-100v text-center bg-blue-500 mx-0 my-auto">
                <span className='font-["NotoSans"] text-white'>웹 개발자 이정현의 포트폴리오입니다</span>
            </div>
            <About />
            <Carrer />
        </div>
    )
};

export default MainPage;