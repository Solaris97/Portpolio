import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

//화면에 포커싱 되었는지 확인하는 CustomHook
const useObserver = () => {
    const [observer, setObserver] = useState("opacity-0");
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            setObserver("transition-all duration-[3000ms] transform opacity-100 translate-y-0");
        }
    }, [observer, inView]);

    return { ref, observer };
};

export default useObserver;