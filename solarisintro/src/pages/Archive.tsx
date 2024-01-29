import React, { useState, useEffect } from "react";

import IconGithub from "../img/logo/githubLogo.svg"


const Archive: React.FC = () => {

    return (


        <div className="w-full h-[780px] md:h-[840px]	text-center mx-0 my-auto bg-orange-200 overflow-hidden">
            {/* 텍스트 영역 */}
            <div className="absolute w-full h-full flex items-center flex-col px-24 mt-10">
                <h2 className="font-engTitile text-white text-5xl md:text-6xl m-6">
                    Archive
                </h2>
                <div className=" border-b-2 border-white w-32 h-2">
                </div>

                <div className="flex items-center flex-col justify-center mt-20 w-full gap-8">
                    <div className="w-96 md:w-[600px] h-[600px]">
                        <div className="bg-white w-full h-[500px] rounded-lg text-left shadow-lg" >
                            <div className="p-8 text-center">
                                <p className="text-xl border-b-2">GitHub</p>


                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
};

export default Archive;