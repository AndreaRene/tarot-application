import React from 'react';
import { useTheme } from '@mui/material/styles';
import { MobileStepper } from '@mui/material';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const DotStepper = ({ items, activeStep, handleDotClick }) => {
    const theme = useTheme();

    const handleNext = () => {
        handleDotClick(activeStep + 1);
    };

    const handleBack = () => {
        handleDotClick(activeStep - 1);
    };

    return (
        <MobileStepper
            variant='dots'
            steps={items.length}
            position='static'
            activeStep={activeStep}
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
            nextButton={
                <Button
                    size='large'
                    onClick={handleNext}
                    disabled={activeStep === items.length - 1}>

                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </Button>
            }
            backButton={
                <Button
                    size='large'
                    onClick={handleBack}
                    disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                </Button>
            }
        />
    );
};

export default DotStepper;
