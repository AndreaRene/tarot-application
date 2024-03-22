import React from 'react';
import { MobileStepper } from '@mui/material';

const DotStepper = ({ items, activeStep, handleDotClick, handleChange }) => {
    const handleStepChange = (index) => {
        handleDotClick(items[index].description);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <MobileStepper
                variant='dots'
                steps={items.length}
                position='static'
                activeStep={activeStep}
                onChange={(event, index) => {
                    console.log('onChange called with index:', index);
                    handleChange(index);
                    handleStepChange(index);
                }}
                sx={{
                    maxWidth: 250,
                    flexGrow: 1,
                    backgroundColor: 'transparent',
                    color: 'white',
                    '& .MuiMobileStepper-dot': {
                        backgroundColor: 'hsla(296, 37%, 15%, 1)',
                        border: '1px solid white',
                        margin: '5px',
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer',
                    },
                    '& .MuiMobileStepper-dotActive': {
                        backgroundColor: 'rgb(168, 148, 103)',
                    },
                    '& .MuiButton-root': {
                        color: 'white',
                        fontSize: '3rem',
                        cursor: 'pointer',
                    },
                }}
            />
        </div>
    );
};

export default DotStepper;
