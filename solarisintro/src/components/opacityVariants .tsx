import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface UseObserverResult {
    ref: React.RefObject<HTMLDivElement>;
    IntroYn: boolean;
  }
  
//화면에 포커싱 되었는지 확인하는 CustomHook
const useObserver = () => {
    const [IntroYn, setIntroYn] = useState<boolean>(true);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            setIntroYn(true);
        } else {
            setIntroYn(false)
        }
    }, [IntroYn, inView]);

    return { ref, IntroYn };
};

export default useObserver;