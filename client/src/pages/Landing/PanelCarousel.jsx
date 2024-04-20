import React, { useState, useEffect } from "react";
import PanelOne from "./PanelOne";
import PanelTwo from "./PanelTwo";
import PanelThree from "./PanelThree";

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const length = 3;

    useEffect(() => {
        const handleScroll = (e) => {
            const deltaY = e.deltaY;
            if (deltaY > 0) {
                const newIndex = index + 1;
                setIndex(newIndex >= length ? length - 1 : newIndex);
            } else if (deltaY < 0 && index > 0) {
                const newIndex = index - 1;
                setIndex(newIndex);
            }
        };
        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [index, length]);

    return (
        <div className="carousel" style={{ display: 'flex', transition: 'transform 2s ease-in-out' }}>
            <Panel index={index} />
        </div>
    );
};

const Panel = ({ index}) => {
    const panels = [<PanelOne />, <PanelTwo />, <PanelThree />];

    return panels[index];
}

export default Carousel;
