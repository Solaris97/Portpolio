import React, { useState, useEffect } from "react";
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

import IconNotion from "../assets/logo/notionLogo.svg";
import IconFigma from "../assets/logo/figmaLogo.svg";

import IconGit from "../assets/logo/gitLogo.svg";
import IconGithub from "../assets/logo/githubLogo.svg"

type skillsItems = {
    id?: string;
    src?: string;
}

const SKILLS_FIELD_FE1: skillsItems[] = [
    { id: 'html', src: IconHtml },
    { id: 'css', src: IconCss },
    { id: 'js', src: IconJs },
]

const SKILLS_FIELD_FE2: skillsItems[] = [
    { id: 'react', src: IconReact },
    { id: 'ts', src: IconTs },
    { id: 'recoil', src: IconRecoil },
]

const SKILLS_FIELD_FE3: skillsItems[] = [
    { id: 'styled', src: IconStyled },
    { id: 'tailwind', src: IconTw },
    { id: 'mui', src: IconMUI },
]

const SKILLS_FIELD_BE1: skillsItems[] = [
    { id: 'oracle', src: IconOracle },
    { id: 'spring', src: IconSpring },
]

const SKILLS_FIELD_BE2: skillsItems[] = [
    { id: 'mysql', src: IconMysql },
    { id: 'flask', src: IconFlask },
]

const SKILLS_FIELD_TOOLS: skillsItems[] = [
    { id: 'notion', src: IconNotion },
    { id: 'figma', src: IconFigma },
]

const SKILLS_FIELD_VCS: skillsItems[] = [
    { id: 'git', src: IconGit },
    { id: 'github', src: IconGithub },
]

const Skills: React.FC = () => {

    return (


        <div className="w-full h-[800px] md:h-[1100px]	text-center mx-0 my-auto bg-blue-500 overflow-hidden">
            {/* 텍스트 영역 */}
            <div className="absolute w-full h-full flex items-center flex-col px-24 mt-10">
                <h2 className="font-engTitile text-white text-5xl md:text-6xl m-6">
                    Skills
                </h2>
                <div className=" border-b-2 border-white w-32 h-2">
                </div>

                <div className="md:flex md:items-center justify-center mt-20 w-full gap-8">
                    <div className="w-90 h-[600px]">
                        <div className="bg-white w-80 h-[500px] rounded-lg text-left shadow-lg" >
                            <div className="p-8">
                                <p className="text-xl border-b-2">Front-End</p>

                                <div className="flex items-center justify-center mt-4 gap-2">
                                    {SKILLS_FIELD_FE1.map(({ id, src }) => (
                                        <div className="w-24 h-24 flex items-center justify-center hover:scale-110" id={id}>
                                            <img className="w-18 h-20" src={src} alt={id}></img>
                                        </div>
                                    ))}
                                </div>


                                <div className="flex items-center justify-center mt-4 gap-2">
                                    {SKILLS_FIELD_FE2.map(({ id, src }) => (
                                        <div className="w-24 h-24 flex items-center justify-center hover:scale-110" id={id}>
                                            <img className="w-18 h-20" src={src} alt={id}></img>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-center mt-4 gap-2">
                                    {SKILLS_FIELD_FE3.map(({ id, src }) => (
                                        <div className="w-24 h-24 flex items-center justify-center hover:scale-110" id={id}>
                                            <img className="w-18 h-20" src={src} alt={id}></img>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="w-90 h-[600px]">
                        <div className="bg-white w-80 h-[500px] rounded-lg text-left shadow-lg" >
                            <div className="p-8">
                                <p className="text-xl border-b-2">Back-End</p>
                                <div className="flex items-center justify-left mt-4 gap-8">
                                    {SKILLS_FIELD_BE1.map(({ id, src }) => (
                                        <div className="w-30 h-30 flex items-center justify-left hover:scale-110" id={id}>
                                            <img className="w-20 h-20" src={src} alt={id}></img>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-left mt-4 gap-8">
                                    {SKILLS_FIELD_BE2.map(({ id, src }) => (
                                        <div className="w-30 h-30 flex items-center justify-left hover:scale-110" id={id}>
                                            <img className="w-20 h-20" src={src} alt={id}></img>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-90 h-[600px]">
                        <div className="bg-white w-80 h-96 rounded-lg text-left shadow-lg" >
                            <div className="p-8">

                                <p className="text-xl border-b-2">Tools</p>
                                <div className="flex items-center justify-left mt-4 gap-8">
                                    {SKILLS_FIELD_TOOLS.map(({ id, src }) => (
                                        <div className="w-24 h-20 flex items-center justify-left hover:scale-110" id={id}>
                                            <img className="w-22 h-20" src={src} alt={id}></img>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-80 h-96 mt-8 rounded-lg text-left shadow-lg" >
                            <div className="p-8">
                                <p className="text-xl border-b-2">VCS</p>
                                <div className="flex items-center justify-left mt-4 gap-8">
                                    {SKILLS_FIELD_VCS.map(({ id, src }) => (
                                        <div className="w-24 h-20 flex items-center justify-left hover:scale-110" id={id}>
                                            <img className="w-16 h-16" src={src} alt={id}></img>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
};

export default Skills;