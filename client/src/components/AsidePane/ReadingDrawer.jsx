import { useState } from 'react';
import { Drawer, Box, Button, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import './ReadingDrawer.css';

const ReadingDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState( false );

    const handelSpreadsClick = () => {
        setIsDrawerOpen( false );
    }

    const handleDeckClick = () => {
        setIsDrawerOpen( true );
    }

    const spreadItems = ['Daily Draw', 'Three Card', 'Interview'];
    const deckItems = ['Tarot', 'Oracle', 'Lenormand'];

    return (
        <div className='reading-aside'>
            <Box className='top-buttons' sx={ { display: 'flex', justifyContent: 'space-between', padding: '1rem' } }>
                <Button className='spreads-button' variant='contained' onClick={ handelSpreadsClick }>
                    Spreads
                </Button>
                <Button className='decks-button' variant='contained' onClick={ handleDeckClick }>
                    Decks
                </Button>
            </Box>
        </div>
    )
};

export default ReadingDrawer;