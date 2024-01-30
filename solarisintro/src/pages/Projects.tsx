import React, { useState, useEffect } from "react";
import Slider from "../components/Slider"
import ppImg1 from "../assets/Img/ppImg1.png";
import ppImg2 from "../assets/Img/ppImg2.png";
import ppImg3 from "../assets/Img/ppImg3.png";
import ppImg4 from "../assets/Img/ppImg4.png";

type imgItems = {
    index: number;
    id?: string;
    src?: string;
}

const PROJECT_IMG1: imgItems[] = [
    { index: 0, id: 'ppImg1', src: ppImg1 },
    { index: 1, id: 'ppImg2', src: ppImg2 },
    { index: 2, id: 'ppImg3', src: ppImg3 },
    { index: 3, id: 'ppImg4', src: ppImg4 }
]

const Projects: React.FC = () => {

    return (


        <div className="w-full h-[800px] md:h-[1000px] text-center mx-0 my-auto bg-green-200 overflow-hidden">
            {/* 텍스트 영역 */}
            <div className="absolute w-full h-full flex items-center flex-col px-24 mt-10">
                <h2 className="font-engTitile text-white text-5xl md:text-6xl m-6">
                    Projects
                </h2>
                <div className=" border-b-2 border-white w-32 h-2">
                </div>

                <div className="flex items-center flex-col justify-center mt-20 w-full gap-8">
                    <div className="w-[800px] md:w-[1000px] h-[800px]">
                        <div className="bg-white w-full h-[640px] rounded-lg text-left shadow-lg" >
                            <div className="p-4 flex flex-col items-center">
                                <div className="mt-6">
                                    <p className="font-bold text-3xl">포트폴리오</p>
                                    <p className="text-gray-500 mt-4">2024.01 ~ 2024.01</p>
                                </div>
                                <div className="flex gap-8">
                                    <div>
                                        <Slider projectImages={PROJECT_IMG1} />
                                    </div>
                                    <div className="mt-6">
                                        <ul className="list-inside list-disc">
                                            <li>진행한 프로젝트의 코드가 있습니다.</li>
                                            <li>코드 공부하면서 만든 작업물이 있습니다.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
};

export default Projects;