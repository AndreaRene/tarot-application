// import React from 'react';
// import { MobileStepper as MuiMobileStepper } from '@mui/material';

// const CustomMobileStepper = ({ items, activeStep, handleDotClick, handleChange }) => {
//     const handleStepChange = (index) => {
//         handleDotClick(items[index].description);
//     };

//     return (
//         <div
//             style={{
//                 display: 'flex',
//                 justifyContent: 'center'
//             }}
//         >
//             <MuiMobileStepper
//                 variant='dots'
//                 steps={items.length}
//                 position='static'
//                 activeStep={activeStep}
//                 onChange={(event, index) => {
//                     console.log('onChange called with index:', index);
//                     handleChange(index);
//                     handleStepChange(index);
//                 }}
//                 sx={{
//                     maxWidth: 250,
//                     flexGrow: 1,
//                     backgroundColor: 'transparent',
//                     color: 'white',
//                     '& .MuiMobileStepper-dot': {
//                         backgroundColor: 'hsla(296, 37%, 15%, 1)',
//                         border: '1px solid white',
//                         margin: '5px',
//                         width: '20px',
//                         height: '20px',
//                         zIndex: '5'
//                     },
//                     '& .MuiMobileStepper-dotActive': {
//                         backgroundColor: 'rgb(168, 148, 103)',
//                     },
//                     '& .MuiButton-root': {
//                         color: 'white',
//                         fontSize: '3rem',
//                         cursor: 'pointer',
//                     },
//                 }}
//             />
//         </div>
//     );
// };

// export default CustomMobileStepper;
