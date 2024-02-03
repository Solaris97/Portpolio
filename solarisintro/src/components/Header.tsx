import { useEffect, useState, useRef } from "react";
import hamburgerBlack from "../assets/Img/hamburgerBlack.png"
import hamburgerWhite from "../assets/Img/hamburgerWhite.png"

interface HeaderProps {
    handleMoveDownClick: (flag: string) => void;
    IntroYn: boolean;
}


const Header: React.FC<HeaderProps> = ({ handleMoveDownClick, IntroYn }) => {

    const [modalState, setModalState] = useState<boolean>(false);

    //ID 값을 받아 원하는 위치로 이동
    const handleClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalState === false) {
            setModalState(true);
        } else {
            setModalState(false);
        }
    }

    //포커싱 이동 버튼 
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        handleMoveDownClick(e.currentTarget.id);
    }



    return (
        // 인트로 포커싱 여부에 따라 배경 색, 글자 색 변경
        <>
            <div className={`${IntroYn ? "font-baseFont bg-starBlack text-white bg-opacity-70 shadow-xl  w-full h-16 fixed flex flex-row items-center justify-center z-40" :
                "font-baseFont bg-white text-black bg-opacity-70 shadow-xl  w-full h-16 fixed flex flex-row items-center justify-center z-40"}`}>
                <div className="font-bold text-3xl w-2/5 flex flex-col justify-center items-center">
                    <div>
                        <span className="cursor-pointer transition-colors duration-100 hover:text-orange-400" onClick={handleClick} id="Intro">Solaris</span>
                    </div>
                </div>
                {/* <div className=""> */}
                {/* 반응형 */}
                <div className="text-xl w-3/5 flex flex-row justify-center items-center text-center invisible md:visible">
                    <div className="w-1/5"><span className="cursor-pointer transition-colors duration-100 hover:text-orange-400" onClick={handleClick} id="About">About Me</span></div>
                    <div className="w-1/5"><span className="cursor-pointer transition-colors duration-100 hover:text-orange-400" onClick={handleClick} id="Projects">Projects</span></div>
                    <div className="w-1/5"><span className="cursor-pointer transition-colors duration-100 hover:text-orange-400" onClick={handleClick} id="Skills">Skills</span></div>
                    <div className="w-1/5"><span className="cursor-pointer transition-colors duration-100 hover:text-orange-400" onClick={handleClick} id="Carrer">Carrer</span></div>
                    <div className="w-1/5"><span className="cursor-pointer transition-colors duration-100 hover:text-orange-400" onClick={handleClick} id="Archive">Archive</span></div>
                </div>


                {/* 반응형 */}
                <div className="text-xl w-1/5 absolute right-14 flex flex-row justify-end visible md:invisible">
                    {IntroYn ?
                        <div className="w-10"><span className="cursor-pointer" onClick={handleClickModal} id="hamburger"><img src={hamburgerWhite} /></span>
                        </div>
                        : <div className="w-10"><span className="cursor-pointer" onClick={handleClickModal} id="hamburger"><img src={hamburgerBlack} /></span>
                        </div>}
                </div>
            </div>
            {modalState &&
                <div className={`${IntroYn ? "font-baseFont bg-starBlack text-2xl text-white text-right bg-opacity-50 items-center pl-10 w-full mt-16 h-80 fixed shadow-xl z-40 visible md:invisible" :
                    "font-baseFont bg-white text-2xl text-black text-right bg-opacity-50 items-center pl-10 w-full mt-16 h-80 fixed shadow-xl z-40 visible md:invisible"}`}>
                    <div className="w-full h-16 flex justify-start items-center"><span className="cursor-pointer transition-colors duration-100 hover:text-orange-400" onClick={handleClick} id="About">About Me</span></div>
                    <div className="w-full h-16 flex justify-start items-center"><span className="cursor-pointer transition-colors duration-100 hover:text-orange-400" onClick={handleClick} id="Projects">Projects</span></div>
                    <div className="w-full h-16 flex justify-start items-center"><span className="cursor-pointer transition-colors duration-100 hover:text-orange-400" onClick={handleClick} id="Skills">Skills</span></div>
                    <div className="w-full h-16 flex justify-start items-center"><span className="cursor-pointer transition-colors duration-100 hover:text-orange-400" onClick={handleClick} id="Carrer">Carrer</span></div>
                    <div className="w-full h-16 flex justify-start items-center"><span className="cursor-pointer transition-colors duration-100 hover:text-orange-400" onClick={handleClick} id="Archive">Archive</span></div>
                </div>
            }
        </>
    )
}

export default Header;