import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useObserver = () => {
    const animation = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            animation.start("visible");
            console.log("v");
        } else {
            animation.start("hidden");
            console.log("h")
        }
    }, [animation, inView]);

    return { ref, animation };
};

export default useObserver;