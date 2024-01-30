import React, { useCallback, useState, useEffect } from "react";

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

    const onPickIndex = useCallback((index: number): void => {
        if (pickIndex === index) {
            // 선택되어 있는 인덱스를 클릭시에는 아무것도 실행하지 않는다.
            return;
        }

        setPickIndex(index);
    }, [pickIndex]);

    //Dot으로 이동
    useEffect(() => {
        setPickers(projectImages.map((image: imgItems, index: number) => {
            return (
                <div className={`${pickIndex === index ? "bg-orange-500 w-3 h-3 rounded-full" : "bg-white w-3 h-3 rounded-full"}`}
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

            return;
        }

        setPickIndex(pickIndex - 1);
        // // 인덱스 감소
    }, [pickIndex]);

    // 오른쪽 화살표 클릭
    const handleNextClick = useCallback((): void => {
        if (pickIndex + 1 === projectImages.length) {
            // +1 했을 때, 배열의 인덱스를 벗어난다면
            // 0으로 설정하여 가장 첫번째로 이동

            setPickIndex(0);

            return;
        }
        setPickIndex(pickIndex + 1);
        // 인덱스 증가
    }, [pickIndex]);

    return (

        <div className="w-[420px] h-[460px]">
            <div className="relative w-full h-full flex items-center">
            <div className="relative flex items-center flex-col">
                    <img src={projectImages[pickIndex].src} />
                    <div className="absolute flex bottom-4 gap-2">
                        {pickers}
                    </div>
                </div>
                <div className="absolute left-4">
                    <button onClick={handlePrevClick} className="h-6 w-6 rotate-90 text-base rounded-full bg-gray-500 text-white ro">▼</button>
                </div>
                <div className="absolute right-4 ">
                    <button onClick={handleNextClick} className="h-6 w-6 -rotate-90 text-base rounded-full bg-gray-500 text-white ro">▼</button>

                </div>
            </div>
        </div>
    )
}

export default Slider;