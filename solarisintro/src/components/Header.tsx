import { useEffect, useState } from "react";

interface HeaderProps {
    handleMoveDownClick: (flag: string) => void;
    IntroYn: boolean;
}



const Header: React.FC<HeaderProps> = ({ handleMoveDownClick, IntroYn }) => {

    //ID 값을 받아 원하는 위치로 이동
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        handleMoveDownClick(e.currentTarget.id);
    }

    return (
        // 인트로 포커싱 여부에 따라 배경 색, 글자 색 변경
        <div className={`${IntroYn ? "font-baseFont bg-starBlack text-white w-full h-16 fixed flex flex-row items-center justify-center  bg-opacity-70 shadow-xl z-40" :
            "font-baseFont bg-white text-black w-full h-16 fixed flex flex-row items-center justify-center bg-opacity-70 shadow-xl z-40"}`} >
            <div className="font-bold text-3xl w-2/5 flex lex-col justify-center items-center">
                <div>
                    <span className="cursor-pointer" onClick={handleClick} id="Intro">Solaris</span>
                </div>
            </div>

            {/* 반응형 */}
            <div className="text-xl w-3/5 flex lex-row justify-center items-center text-center invisible md:visible">
                <div className="w-1/5"><span className="cursor-pointer" onClick={handleClick} id="About">About Me</span></div>
                <div className="w-1/5"><span className="cursor-pointer" onClick={handleClick} id="Skills">Skills</span></div>
                <div className="w-1/5"><span className="cursor-pointer" onClick={handleClick} id="Projects">Projects</span></div>
                <div className="w-1/5"><span className="cursor-pointer" onClick={handleClick} id="Carrer">Carrer</span></div>
                <div className="w-1/5"><span className="cursor-pointer" onClick={handleClick} id="Archive">Archive</span></div>
            </div>
        </div >
    )
}

export default Header;