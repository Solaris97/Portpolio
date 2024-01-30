import React, { useState, useEffect } from "react";
import Slider from "../components/Slider"
import ppImg1 from "../assets/Img/ppImg1.png";
import ppImg2 from "../assets/Img/ppImg2.png";
import ppImg3 from "../assets/Img/ppImg3.png";
import ppImg4 from "../assets/Img/ppImg4.png";
import hpImg1 from "../assets/Img/hpImg1.png";
import hpImg2 from "../assets/Img/hpImg2.png";

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


const PROJECT_IMG2: imgItems[] = [
    { index: 0, id: 'hpImg1', src: hpImg1 },
    { index: 1, id: 'hpImg2', src: hpImg2 },
]


const Projects: React.FC = () => {

    return (


        <div className="w-full h-[2500px] lg:h-[1600px] text-center mx-0 my-auto bg-yellow-400 overflow-hidden">
            {/* 텍스트 영역 */}
            <div className="absolute w-full flex items-center flex-col px-24 mt-10 overflow-hidden">
                <h2 className="font-engTitile text-white text-5xl lg:text-6xl m-6 cursor-default">
                    Projects
                </h2>
                <div className=" border-b-2 border-white w-32 h-2">
                </div>

                <div className="flex items-center flex-col justify-center mt-20 w-full gap-8 ">
                    <div className="w-[550px] lg:w-[1000px] h-[2200px] lg:h-[1380px]">
                        <div className="bg-white w-full h-[1050px] lg:h-[600px] rounded-lg text-left shadow-lg" >
                            <div className="p-4 flex flex-col items-center">
                                <div className="mt-6 text-center">
                                    <p className="font-bold text-3xl">포트폴리오 프로젝트</p>
                                    <p className="text-gray-500 mt-4">2024.01 ~ 2024.01 1인 개발</p>
                                </div>
                                <div className="lg:flex lg:gap-8">
                                    <div>
                                        <Slider projectImages={PROJECT_IMG1} />
                                    </div>
                                    <div>
                                        <div className="mt-12 w-[420px] h-60">
                                            <span><p>해당 프로젝트는 <strong>포트폴리오</strong> 용도로 제작했습니다.</p></span>
                                            <p className="mt-6">개발을 진행하면서 <strong>Tailwind CSS</strong>의 장단점에 대해서 알게되었고, 평소 라이브러리를 사용하던 캐러셀등의 기능도
                                                직접 구현을 해보면서  프로젝트 입니다.
                                            </p>
                                            <p className="mt-6">배포를 진행하여 어쩌고 저쩌고
                                            </p>
                                        </div>
                                        <div className="w-[420px] border-t borer-gray flex">
                                            <div className="mt-6 w-28 font-bold">
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

                        <div className="bg-white w-full h-[1050px] mt-12 lg:h-[600px] rounded-lg text-left shadow-lg " >
                            <div className="p-4 flex flex-col items-center">
                                <div className="mt-6 text-center">
                                    <p className="font-bold text-3xl">사전문진 웹 사이트</p>
                                    <p className="text-gray-500 mt-4">2022.12 ~ 2023.03 FE 1명    BE 1명</p>
                                </div>
                                <div className="lg:flex lg:gap-8">
                                    <div>
                                        <Slider projectImages={PROJECT_IMG2} />
                                    </div>
                                    <div>
                                        <div className="mt-12 w-[420px] h-60">
                                            <span><p>해당 프로젝트는 <strong>모바일 웹 / PC 웹</strong> 플랫폼으로 제작했습니다.</p></span>
                                            <p className="mt-2">환자용 모바일 웹과 의사용 PC웹을 따로 개발하였고 확장가능성을 고려하여 코드 최적화 및 모듈화에
                                                신경을 많이 썼고 주 사용자층이 연령대가 있으시다 보니 구 버전 브라우저를 사용하시는 경우가 많아 브라우저 호환성 해결을 위해
                                                <strong> webpack과 babel</strong>에 대해서 많이 알게되었습니다.
                                            </p>
                                            <p className="mt-2">Jenkins와 Git을 연동하여 <strong>CI/CD</strong> 구축을 했습니다.
                                            </p>
                                        </div>
                                        <div className="w-[420px] border-t borer-gray flex">
                                            <div className="mt-6 w-28 font-bold">
                                                <p>주요 기능</p>
                                                <p className="mt-4">기술 스택</p>
                                            </div>
                                            <div className="mt-6">
                                                <p>회원가입, 로그인, 차트생성, 환자 모니터링</p>
                                                <p className="mt-4">React, TypeScript, Styled-Components, Recoil, React Query</p>
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