import React, { useState, useEffect } from "react";
import PanelOne from "./PanelOne";
import PanelTwo from "./PanelTwo";
import PanelThree from "./PanelThree";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

// const CustomStepIcon = ({ active, completed }) => (
//     <div style={{
//         width: 24,
//         height: 24,
//         borderRadius: '50%',
//         backgroundColor: active ? 'rgb(168, 148, 103)' : 'transparent', // Change color to gold when active
//         border: '1px solid white', 
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     }}>
//         {active ? <div style={{
//             width: 8,
//             height: 8,
//             borderRadius: '50%',
//             backgroundColor: 'rgb(51, 24, 52)',
//         }} /> : null}
//     </div>
// );


const Carousel = () => {
    const length = 3;
    const steps = ['', '', ''];
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

    return (
        <div style={{ display: 'flex', transition: 'transform 2s ease-in-out' }}>
            <Panel index={activeStep} steps={steps} />
        </div>
    );
};

const Panel = ({ index, steps }) => {
    const panels = [<PanelOne />, <PanelTwo />, <PanelThree />];

    return (
        <div style={{ display: 'flex', backgroundColor: '#4F3052' }}>
            <Stepper
                activeStep={index}
                orientation='vertical'
                style={{
                    marginLeft: '10px',
                    margin: 'auto',
                }}
            >
                {steps.map((label, stepIndex) => (
                    <Step key={`step_${stepIndex}`}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {panels[index]}
        </div>
    );
}

export default Carousel;
