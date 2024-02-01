import React, { useState, useEffect, useRef, forwardRef } from "react";
import Intro from "./Intro";
import About from "./About";
import Archive from "./Archive";
import Skills from "./Skills";
import Projects from "./Projects";
import Carrer from "./Carrer";
import Header from "../components/Header"
import useObserver from "../components/opacityVariants ";

const MainPage: React.FC = () => {
    const IntroRef = useRef<HTMLDivElement | null>(null);
    const AboutRef = useRef<HTMLDivElement | null>(null);
    const SkillsRef = useRef<HTMLDivElement | null>(null);
    const ProjectsRef = useRef<HTMLDivElement | null>(null);
    const CarrerRef = useRef<HTMLDivElement | null>(null);
    const ArchiveRef = useRef<HTMLDivElement | null>(null);


    //이동 버튼
    const handleMoveDownClick = (flag: string) => {
        if (flag === "Intro") {
            IntroRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        else if (flag === "About") {
            AboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (flag === "Skills") {
            SkillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (flag === "Projects") {
            ProjectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (flag === "Carrer") {
            CarrerRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (flag === "Archive") {
            ArchiveRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };




    const { ref, IntroYn } = useObserver();

    useEffect(() => {
        console.log(IntroYn)
    }, [IntroYn])

    return (
        <div className="relative">

            
            <Header handleMoveDownClick={handleMoveDownClick} IntroYn={IntroYn} />
            <div className="z-30">

                <div ref={ref}>
                    <div ref={IntroRef}>
                        <Intro handleMoveDownClick={handleMoveDownClick} />
                    </div>
                </div>

                <div ref={AboutRef}>
                    <About />
                </div>
                <div ref={SkillsRef}>
                    <Skills />
                </div>
                <div ref={ProjectsRef}>
                    <Projects />
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