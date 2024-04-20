import * as React from 'react';
import Box from '@mui/material/Box';

const CardFront = () => {
    return (
        
        <Box
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 relative mx-auto lg:ml-4 md:ml-4 sm:ml-4"
            height={425}
            width={260}
            my={4}
            display='flex'
            alignItems='center'
            justifyContent='center'
            gap={4}
            p={6}
            border='2px solid rgb(170, 142, 80)'
            borderRadius='8px'
            sx={{ backgroundColor: '#F0EDD8ff' }}
        >
            <img
                src='Splatter_transparent.png'
                alt='Tarot Desk logo card'
                className="inset-0 w-full h-full object-cover rounded-md"
            />
        </Box>
    );
};

export default CardFront;
