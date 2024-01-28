import React, { useState, useEffect } from "react";
import IconHtml from "../img/logo/html5Logo.png";
import IconCss from "../img/logo/css3Logo.png";
import IconJs from "../img/logo/jsLogo.png";


type skillsItems = {
    id?: string;
    src?: string;
}

const SKILLS_FIELD: skillsItems[] = [
    { id: 'html', src: IconHtml },
    { id: 'css', src: IconCss },
    { id: 'js', src: IconJs },
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
                        <div className="bg-white w-80 h-[600px] rounded-lg text-left shadow-lg" >
                            <div className="p-8">
                                <p className="text-xl">Front-End</p>

                                <div className="flex items-center justify-center mt-4 gap-2">
                                    {SKILLS_FIELD.map(({ id, src }) => (
                                        <div className="border-2 rounded-lg border-gray w-24 h-24 flex items-center justify-center hover:scale-110" id={id}>
                                            <img className="w-18 h-20" src={src} alt={id}></img>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="w-90 h-[600px]">
                        <div className="bg-white w-80 h-[600px] rounded-lg text-left shadow-lg" >
                            <p>Backend</p>
                        </div>
                    </div>
                    <div className="w-90 h-[600px]">
                        <div className="bg-white w-80 h-96 rounded-lg text-left shadow-lg" >
                            <p>community</p>
                        </div>
                        <div className="bg-white w-80 h-96 mt-8 rounded-lg text-left shadow-lg" >
                            <p>community</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
};

export default Skills;