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
                    <div className="w-[800px] md:w-[1000px] h-[780px]">
                        <div className="bg-white w-full h-[600px] rounded-lg text-left shadow-lg" >
                            <div className="p-4 flex flex-col items-center">
                                <div className="mt-6 text-center">
                                    <p className="font-bold text-3xl">포트폴리오 프로젝트</p>
                                    <p className="text-gray-500 mt-4">2024.01 ~ 2024.01</p>
                                </div>
                                <div className="flex gap-8">
                                    <div>
                                        <Slider projectImages={PROJECT_IMG1} />
                                    </div>
                                    <div>
                                        <div className="mt-12 w-[420px] h-60">
                                            <span><p>해당 프로젝트는 <span className="font-bold">포트폴리오</span> 용도로 제작했습니다.</p></span>
                                            <p className="mt-6">개발을 진행하면서 Tailwind CSS의 장단점에 대해서 알게되었고, 평소 라이브러리를 사용하던 캐러셀등의 기능도
                                                직접 구현을 해본 프로젝트 입니다.
                                            </p>
                                            <p className="mt-6">배포를 진행하여 어쩌고 저쩌고
                                            </p>
                                        </div>
                                        <div className="w-[420px] border-t borer-gray flex">
                                            <div className="mt-6 w-40">
                                                <p className="h-12">주요 기능</p>
                                                <p className="mt-2">Github</p>
                                                <p className="mt-2">기술 스택</p>
                                            </div>
                                            <div className="mt-6">
                                                <p>인적 사항 소개,기술 스택,GitHub 링크,프로젝트 경험,경력</p>
                                                <a href="https://github.com/Solaris97/Solaris_Introduce">
                                                    <p className="mt-2">https://github.com/Solaris97/Solaris_Introduce</p>
                                                </a>
                                                <p className="mt-2">React, TypeScript, Tailwind CSS</p>
                                            </div>
                                        </div>
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