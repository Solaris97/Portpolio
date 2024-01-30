import React, { useState, useEffect, useRef, forwardRef } from "react";
import Intro from "./Intro";
import About from "./About";
import Archive from "./Archive";
import Skills from "./Skills";
import Projects from "./Projects";
import useObserver from "../components/opacityVariants ";

const MainPage: React.FC = () => {
    const AboutRef = useRef<HTMLDivElement | null>(null);

    //하단 스크롤 이동 버튼
    const handleMoveDownClick = () => {
        AboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    const { ref, observer } = useObserver();

    return (
        <div className="relative">
            <Intro handleMoveDownClick={handleMoveDownClick} />
            <div ref={AboutRef}>
                <About />
            </div>
            <Archive />

            <div ref={ref} className={observer}>
                <Skills />
            </div>

            <Projects />
        </div>
    )
};

export default MainPage;