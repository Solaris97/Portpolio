import React, { useCallback, useRef, useState, useEffect } from "react";
import "./slideStyle.css"
import arrowButton from "../assets/Img/arrowButton.png";
type imgItems = {
    index: number;
    id?: string;
    src?: string;
}

//이미지 배열 타입 설정
interface SliderProps {
    projectImages: imgItems[];
}


const Slider: React.FC<SliderProps> = ({ projectImages }) => {
    const [pickIndex, setPickIndex] = useState<number>(0);
    const [pickers, setPickers] = useState<JSX.Element[]>([]);

    //TailwindCSS 동적 할당을 위해 선언
    const [animation, setAnimation] = useState<string>("w-[300px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[400px]");

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [offset, setOffset] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const onPickIndex = useCallback((index: number): void => {
        if (pickIndex === index) {
            // 똑같은 index 선택시 이동X
            return;
        }
        if (pickIndex > index) {
            setAnimation("animate-rightSlide w-[300px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[400px]");
        } else {
            setAnimation("animate-leftSlide w-[300px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[400px]");
        }
        setPickIndex(index);
    }, [pickIndex]);

    //Dot으로 이동
    useEffect(() => {
        //하단 버튼으로 이동할 시에도 애니메이션 적용
        setPickers(projectImages.map((image: imgItems, index: number) => {
            return (
                <div className={`${pickIndex === index ? "bg-orange-400 w-3 h-3 rounded-full" : "bg-gray-400 w-3 h-3 rounded-full"}`}
                    onClick={() => onPickIndex(index)}>
                </div>
            );
        }));
    }, [onPickIndex, pickIndex]);

    // 왼쪽 화살표 클릭
    const handlePrevClick = useCallback((): void => {
        if (pickIndex <= 0) {
            // state 업데이트 전, 해당 변수의 값이 0이라면
            // length의 -1로 지정하여 가장 마지막으로 이동

            setPickIndex(projectImages.length - 1);
            setAnimation("animate-rightSlide w-[300px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[400px]");

            return;
        }

        setPickIndex(pickIndex - 1);
        setAnimation("animate-rightSlide w-[300px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[400px]");

        // // 인덱스 감소
    }, [pickIndex]);

    // 오른쪽 화살표 클릭
    const handleNextClick = useCallback((): void => {
        if (pickIndex + 1 === projectImages.length) {
            // +1 했을 때, 배열의 인덱스를 벗어난다면
            // 0으로 설정하여 가장 첫번째로 이동
            setPickIndex(0);
            setAnimation("animate-leftSlide w-[300px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[400px]");

            return;
        }
        setPickIndex(pickIndex + 1);
        setAnimation("animate-leftSlide w-[300px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[400px]");

        // 인덱스 증가
    }, [pickIndex]);

    // 마우스 드래그 이벤트 시작
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX - offset);
    };

    //마우스 드래그 이벤트
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        const x = e.clientX - startX;
        setOffset(x);

        // 마우스 움직임에 따라 이미지의 위치를 업데이트
        if (sliderRef.current) {
            const slider = sliderRef.current;
            const currentImage = slider.getElementsByTagName('img')[0];
            currentImage.style.transform = `translateX(${x}px)`;
        }
    };


    //마우스 드래그 종료
    const handleMouseUp = () => {
        setIsDragging(false);
        // 좌우 슬라이드가 아니면 원래 위치로 돌아가기
        if (Math.abs(offset) < sliderRef.current!.offsetWidth / 2) {
            // 원래 위치로 돌아가기 위한 애니메이션
            const currentImage = sliderRef.current!.getElementsByTagName('img')[0];
            currentImage.style.transition = 'transform 0.3s ease-out';
            currentImage.style.transform = 'translateX(0px)';

            // 애니메이션 종료 후 transition 제거
            setTimeout(() => {
                currentImage.style.transition = '';
            }, 300);
            setAnimation("w-[300px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[400px]");
            return;
        }

        // 슬라이드가 50% 이상 이동하면 다음 또는 이전 이미지로 이동
        if (offset > sliderRef.current!.offsetWidth / 2) {
            handlePrevClick();
            const currentImage = sliderRef.current!.getElementsByTagName('img')[0];
            currentImage.style.transition = 'transform 0.3s ease-out';
            currentImage.style.transform = 'translateX(0px)';

        } else if (offset < -sliderRef.current!.offsetWidth / 2) {
            handleNextClick();
            const currentImage = sliderRef.current!.getElementsByTagName('img')[0];
            currentImage.style.transition = 'transform 0.3s ease-out';
            currentImage.style.transform = 'translateX(0px)';

        }

        // 초기화
        setOffset(0);
    };


    //마우스가 포커스에서 벗어날 경우 강제로 마우스 드래그 종료
    const handleMouseLeave = () => {
        if (isDragging) {
            // 포커스가 벗어나면서 드래그 중인 경우
            handleMouseUp();
        }
    };

    // 6초 후 자동으로 다음 슬라이드로 이동
    useEffect(() => {
        const timer = setTimeout(() => {
            handleNextClick();
        }, 6000);

        return () => clearTimeout(timer);
    }, [pickIndex, handleNextClick]);


    return (

        <div className="w-8/12 h-[220px] md:w-[260px] md:h-[280px] lg:w-[440px] lg:h-[360px]">
            <div className="relative w-full h-full flex items-center cursor-grab active:cursor-grabbing"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                <div className="w-full h-full relative flex items-center flex-col">
                    <div className="overflow-hidden">
                        <img src={projectImages[pickIndex].src} key={animation} className={animation} />
                    </div>
                    <div className="absolute flex -bottom-4 gap-2 cursor-pointer">
                        {pickers}
                    </div>
                </div>
                <div className="absolute left-4 " >
                    <img onClick={handlePrevClick} src={arrowButton} className="h-6 w-6 rotate-180 text-base rounded-full opacity-60 hover:opacity-100 bg-white" />
                </div>
                <div className="absolute right-4 ">
                    <img onClick={handleNextClick} src={arrowButton} className="h-6 w-6 text-base rounded-full opacity-60 hover:opacity-100 bg-white" />
                </div>
            </div>
        </div>
    )
}

export default Slider;