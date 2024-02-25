import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSystemProps() {
    return (
        <Box
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
        height={300}
        width={200}
        my={4}
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap={4}
        p={3}
        bg='indigo'
        border='2px solid gold'
        borderRadius='8px'
        sx={{ backgroundColor: 'indigo' }}
        >
            Tarot Deck logo Here
        </Box>
    );
}
