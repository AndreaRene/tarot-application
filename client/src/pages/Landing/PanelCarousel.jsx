import React, { useState, useEffect } from "react";
import PanelOne from "./PanelOne";
import PanelTwo from "./PanelTwo";
import PanelThree from "./PanelThree";


const Carousel = () => {
    const length = 3;
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const handleScroll = (e) => {
            const deltaY = e.deltaY;
            if (deltaY > 0) {
                const newIndex = activeStep + 1;
                setActiveStep(newIndex >= length ? length - 1 : newIndex);
            } else if (deltaY < 0 && activeStep > 0) {
                const newIndex = activeStep - 1;
                setActiveStep(newIndex);
            }
        };
        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [activeStep, length]);

    const panels = [<PanelOne />, <PanelTwo />, <PanelThree />];

    return (
        <div>
            {panels[activeStep]}
        </div>
    );
};

export default Carousel;
