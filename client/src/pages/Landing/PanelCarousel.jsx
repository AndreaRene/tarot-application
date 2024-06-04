import React, { useEffect, useRef, useState } from "react";
import Splide from '@splidejs/splide';
import PanelOne from "./PanelOne";
import PanelTwo from "./PanelTwo";
import PanelThree from "./PanelThree";
import AuthComponent from "./Login_Signup/AuthComponent";
import '@splidejs/splide/dist/css/splide.min.css';
import './Landing.css'; 
import SimpleFooter from '../../components/FooterPane/SimpleFooter'

const PanelCarousel = () => {
    const splideRef = useRef(null);
    const [activePanel, setActivePanel] = useState(0);
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const handleLoginOpen = () => {
        setAuthModalOpen(true);
    };

    const handleSignUpOpen = () => {
        setAuthModalOpen(true);
    };

    useEffect(() => {
        if (splideRef.current) {
            const splide = new Splide(splideRef.current, {
                direction: 'ttb',
                height: '100vh',
                wheel: true,
                pagination: true,
                arrows: false,
                speed: 2000,  
                wheelSleep: 1000,
                classes: {
                    pagination: 'splide__pagination splide__pagination--custom',
                },
            });

            splide.on('move', (newIndex) => {
                setActivePanel(newIndex);
            });

            splide.mount();
        }
    }, []);

    return (
        <div>
            <div
                ref={splideRef}
                className="splide"
            >
                <div className="splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide"><PanelOne activePanel={activePanel} handleLoginOpen={handleLoginOpen} handleSignUpOpen={handleSignUpOpen} /></li>
                        <li className="splide__slide"><PanelTwo activePanel={activePanel} handleLoginOpen={handleLoginOpen} handleSignUpOpen={handleSignUpOpen} /></li>
                        <li className="splide__slide"><PanelThree activePanel={activePanel} handleLoginOpen={handleLoginOpen} handleSignUpOpen={handleSignUpOpen} /></li>
                    </ul>
                </div>
            </div>
            {isAuthModalOpen && <AuthComponent />}
            <SimpleFooter />
        </div>
    );
};

export default PanelCarousel;





// import React, { useState, useEffect } from "react";
// import PanelOne from "./PanelOne";
// import PanelTwo from "./PanelTwo";
// import PanelThree from "./PanelThree";
// import './Landing.css'; // Ensure to import your CSS

// const PanelCarousel = () => {
//     const length = 3;
//     const [activeStep, setActiveStep] = useState(0);

//     useEffect(() => {
//         const handleScroll = (e) => {
//             const deltaY = e.deltaY;
//             if (deltaY > 0) {
//                 const newIndex = activeStep + 1;
//                 setActiveStep(newIndex >= length ? length - 1 : newIndex);
//             } else if (deltaY < 0 && activeStep > 0) {
//                 const newIndex = activeStep - 1;
//                 setActiveStep(newIndex);
//             }
//         };
//         window.addEventListener('wheel', handleScroll);

//         return () => {
//             window.removeEventListener('wheel', handleScroll);
//         };
//     }, [activeStep, length]);

//     const panels = [<PanelOne />, <PanelTwo />, <PanelThree />];

//     return (
//         <div
//             className="carousel-container"
//             style={{ transform: `translateY(-${activeStep * 100}vh)` }}
//         >
//             {panels.map((panel, index) => (
//                 <div key={index} className="panel">
//                     {panel}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default PanelCarousel;