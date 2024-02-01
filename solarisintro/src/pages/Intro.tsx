import React, { forwardRef, useRef } from "react";
import ShootingStars from "../components/ShootingStar";


interface IntroProps {
    handleMoveDownClick: (flag: string) => void;
}


const Intro: React.FC<IntroProps> = ({ handleMoveDownClick }) => {

    const handleClick = () => {
        handleMoveDownClick("About");
    }

    return (
        <div className="w-full h-100v text-center mx-0 my-auto ">
            <div className="w-full h-100v">
                {/* 텍스트 영역 */}
                <div className="absolute w-full h-100v flex items-center flex-col justify-center overflow-hidden">
                    <ul className="absolute z-10 cursor-default">
                        <li className="font-engTitile text-white text-7xl md:text-9xl m-6 transition-colors duration-500 hover:text-starYellow">
                            FE Web Developer
                        </li>
                        <li className="font-engTitile text-white text-7xl md:text-9xl m-20 transition-colors duration-500 hover:text-starYellow">
                            portfolio
                        </li>
                    </ul>
                    {/* 하단 버튼 */}
                    <button onClick={handleClick} className="absolute z-10 bottom-20 w-12 min-h-12 max-h-12 animate-bounce opacity-60 text-xl rounded-full bg-gray-500 text-white hover:opacity-100">▼</button>
                </div>

                {/* 배경 캔버스 */}
                <div className="z-0 overflow-hidden">
                    <ShootingStars />
                </div>

            </div>
        </div>
    )
};

export default Intro;