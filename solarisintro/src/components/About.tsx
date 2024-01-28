import React, { useState, useEffect } from "react";

const About: React.FC = () => {
    return (
        <div className="w-full h-70v md:h-60v text-center mx-0 my-auto overflow-hidden">
            {/* 타이틀 텍스트 영역 */}
            <div className="absolute w-full h-full flex items-center flex-col px-20 mt-10">
                <h2 className="font-engTitile text-black text-5xl md:text-6xl m-6">
                    About Me
                </h2>
                <div className=" border-b-2 border-purple-400 w-40 min-h-2">
                </div>
                {/* 내용 텍스트 영역 */}
                <div className="inline md:flex md:items-center mt-20 w-full">
                    {/* 상세 내용 텍스트 영역 */}
                    <div className="flex-auto">
                        <p className="text-2xl min-h-12">이름</p>
                        <div className="border-b-2 border-gray w-10 min-h-2 m-auto">
                        </div>
                        <p className="mt-3 mb-10 md:mb-3 text-xl">이정현</p>
                    </div>
                    {/* 상세 내용 텍스트 영역 */}
                    <div className="flex-auto">
                        <p className="text-2xl min-h-12">생년월일</p>
                        <div className=" border-b-2 border-gray w-10 min-h-2 m-auto">
                        </div>
                        <p className="mt-3 mb-10 md:mb-3 text-xl">1997.12.19</p>
                    </div>
                    {/* 상세 내용 텍스트 영역 */}
                    <div className="flex-auto">
                        <p className="text-2xl min-h-12">주소지</p>
                        <div className=" border-b-2 border-gray w-10 min-h-2 m-auto">
                        </div>
                        <p className="mt-3 mb-10 md:mb-3 text-xl">서울특별시 광진구</p>
                    </div>
                    {/* 상세 내용 텍스트 영역 */}
                    <div className="flex-auto">
                        <p className="text-2xl min-h-12">이메일</p>
                        <div className=" border-b-2 border-gray w-10 min-h-2 m-auto">
                        </div>
                        <p className="mt-3 mb-10 md:mb-3 text-xl">leejh121995@gmail.com</p>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default About;