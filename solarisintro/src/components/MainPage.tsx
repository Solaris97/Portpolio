import React, { useState, useEffect } from "react";
import About from './About';
import Carrer from './Carrer';
import ShootingStars from "./ShootingStar";
const MainPage: React.FC = () => {
    return (
        <div className="inline">
            {/* 시작 페이지 영역 */}
            <div className="w-full h-100v text-center mx-0 my-auto">
                <div className="relative w-full h-100v">
                    {/* 텍스트 영역 */}
                    <div className="absolute w-full h-100v flex items-center flex-col justify-center">
                        <ul className="absolute z-10">
                            <li className="font-engTitile text-white text-7xl md:text-9xl m-6 transition-colors duration-500 hover:text-starYellow">
                                Web Developer
                            </li>
                            <li className="font-engTitile text-white text-7xl md:text-9xl m-20 transition-colors duration-500 hover:text-starYellow">
                                portfolio
                            </li>
                        </ul>
                    </div>

                    {/* 배경 캔버스 */}
                    <div className="absolute z-0">
                        <ShootingStars />
                    </div>

                    {/* 하단 이동 버튼 */}
                    <div>
                        <button className="absolute bottom-20 ml-auto mr-auto w-12 min-h-12 max-h-12 animate-bounce opacity-60 text-xl rounded-full bg-gray-500 text-white hover:opacity-100">▼</button>
                    </div>
                </div>
            </div>
            <About />
            <Carrer />
        </div >
    )
};

export default MainPage;