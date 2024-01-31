import React, { useState, useEffect } from "react";

import IconGithub from "../assets/logo/githubLogo.svg"

const Archive: React.FC = () => {

    return (


        <div className="font-baseFont w-full h-[780px] md:h-[840px] text-center mx-0 my-auto bg-orange-200 overflow-hidden">
            {/* 텍스트 영역 */}
            <div className="absolute w-full flex items-center flex-col px-24 mt-10">
                <h2 className="font-bold text-white text-5xl md:text-6xl m-6 cursor-default">
                    Archive
                </h2>
                <div className=" border-b-2 border-white w-32 h-2">
                </div>


                <div className="flex items-center flex-col justify-center mt-20 w-full gap-8">
                    <a href="https://github.com/Solaris97">
                        <div className="min-w-[360px] w-11/12 md:w-[600px] h-[500px]">
                            <div className="bg-white w-full h-[380px] rounded-lg text-left shadow-lg
                    hover:scale-110 transition-transform ease-in-out duration-500" >
                                <div className="p-16 flex flex-col items-center">
                                    <div className="flex">
                                        <img className="w-12 h-12 mr-4" src={IconGithub} />
                                        <p className="font-engTitile text-5xl">GitHub</p>
                                    </div>
                                    <div className="mt-12">
                                        <a href="https://github.com/Solaris97">
                                            <p>https://github.com/Solaris97</p>
                                        </a>
                                    </div>
                                    <div className="mt-6">
                                        <ul className="list-inside list-disc">
                                            <li>진행한 프로젝트의 코드</li>
                                            <li>공부하면서 만든 작업물의 코드</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </a>

                </div>
            </div>


        </div>
    )
};

export default Archive;