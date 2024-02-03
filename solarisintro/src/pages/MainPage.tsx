import React, { useRef, useLayoutEffect } from "react";
import Intro from "./Intro";
import About from "./About";
import Archive from "./Archive";
import Skills from "./Skills";
import Projects from "./Projects";
import Carrer from "./Carrer";
import Header from "../components/Header"
import useObserver from "../hooks/useObserver";
import upArrowButton from "../assets/Img/upArrowButton.png";

import IconHtml from "../assets/logo/html5Logo.png";
import IconCss from "../assets/logo/css3Logo.png";
import IconJs from "../assets/logo/jsLogo.png";
import IconReact from "../assets/logo/reactLogo.png";
import IconTs from "../assets/logo/tsLogo.png";
import IconRecoil from "../assets/logo/recoilLogo.svg";
import IconStyled from "../assets/logo/styledLogo.png";
import IconTw from "../assets/logo/tailWindLogo.svg";
import IconMUI from "../assets/logo/muiLogo.svg";

import IconOracle from "../assets/logo/oracleLogo.svg";
import IconSpring from "../assets/logo/springLogo.svg";
import IconFlask from "../assets/logo/flaskLogo.svg";
import IconMysql from "../assets/logo/mysqlLogo.svg";

import IconNotion from "../assets/logo/notionLogo.png";
import IconFigma from "../assets/logo/figmaLogo.svg";

import IconGit from "../assets/logo/gitLogo.svg";
import IconGithub from "../assets/logo/githubLogo.svg"

//프리로드 이미지 함수
const preloadImages = (imagePaths: string[]) => {
    imagePaths.forEach((path) => {
        console.log(path);
        const img = new Image();
        img.src = path;
    });
};


const MainPage: React.FC = () => {

    //렌더링 이전에 실행
    useLayoutEffect(() => {
        // 이미지 경로 배열 선언
        const imagePaths = [
            IconHtml,
            IconCss,
            IconJs,
            IconReact,
            IconTs,
            IconRecoil,
            IconStyled,
            IconTw,
            IconMUI,
            IconOracle,
            IconSpring,
            IconFlask,
            IconMysql,
            IconNotion,
            IconFigma,
            IconGit,
            IconGithub,

        ];
        // 이미지를 프리로드
        preloadImages(imagePaths);
    }, []);

    //포커싱 이동을 위한 useRef
    const IntroRef = useRef<HTMLDivElement | null>(null);
    const AboutRef = useRef<HTMLDivElement | null>(null);
    const SkillsRef = useRef<HTMLDivElement | null>(null);
    const ProjectsRef = useRef<HTMLDivElement | null>(null);
    const CarrerRef = useRef<HTMLDivElement | null>(null);
    const ArchiveRef = useRef<HTMLDivElement | null>(null);


    //포커싱 이동
    const handleMoveDownClick = (flag: string) => {
        if (flag === "Intro") {
            IntroRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        else if (flag === "About") {
            AboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (flag === "Projects") {
            ProjectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (flag === "Skills") {
            SkillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (flag === "Carrer") {
            CarrerRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (flag === "Archive") {
            ArchiveRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };


    //포커싱 확인 Custom hooks
    const { ref, IntroYn } = useObserver();

    return (

        <div className="relative">
            <Header handleMoveDownClick={handleMoveDownClick} IntroYn={IntroYn} />
            <div className="z-30">
                {!IntroYn &&
                    <div className="fixed w-12 h-12 rotate-90 bottom-8 right-8 z-40"><img onClick={() => {
                        handleMoveDownClick("Intro");
                    }}
                        className="opacity-60 hover:opacity-100" src={upArrowButton} /></div>
                }
                <div ref={ref}>
                    <div ref={IntroRef}>
                        <Intro handleMoveDownClick={handleMoveDownClick} />
                    </div>
                </div>

                <div ref={AboutRef}>
                    <About />
                </div>
                <div ref={ProjectsRef}>
                    <Projects />
                </div>
                <div ref={SkillsRef}>
                    <Skills />
                </div>
                <div ref={CarrerRef}>
                    <Carrer />
                </div>
                <div ref={ArchiveRef}>
                    <Archive />
                </div>

            </div>
        </div >
    )
};

export default MainPage;