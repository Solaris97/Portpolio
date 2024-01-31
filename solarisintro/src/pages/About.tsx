import React, { useState, useEffect } from "react";

type aboutItems = {
    title?: string;
    fields?: string;
}

const ABOUT_FIELD: aboutItems[] = [
    { title: '이름', fields: '이정현' },
    { title: '생년월일', fields: '1997.12.19' },
    { title: '주소지', fields: '서울특별시 광진구' },
    { title: '이메일', fields: 'leejh121995@gmail.com' },

]

const About: React.FC = () => {
    return (
        <div className="font-baseFont w-full h-[850px] md:h-[600px] text-center mx-0 my-auto overflow-hidden">
            {/* 타이틀 텍스트 영역 */}
            <div className="absolute w-full flex items-center flex-col px-20 mt-10">
                <h2 className="font-bold text-black text-5xl md:text-6xl m-6 cursor-default">
                    About Me
                </h2>
                <div className=" border-b-2 border-purple-400 w-40 min-h-2">
                </div>
                {/* 내용 텍스트 영역 */}
                <div className="inline md:flex md:items-center mt-20 w-full">
                    
                    {/* 상세 내용 텍스트 영역 */}
                    {ABOUT_FIELD.map(({ fields, title }) => (
                        <div className="flex-auto" key={title}>
                            <p className="text-2xl min-h-12 font-semibold">{title}</p>
                            <div className="border-b-2 border-gray w-10 min-h-2 m-auto">
                            </div>
                            <p className="mt-3 mb-10 md:mb-3 text-xl">{fields}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
};

export default About;