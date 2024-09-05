import { useState } from "react";
import { Drawer, Box, Button, Typography } from '@mui/material';
// import { Carousel } from 'react-materials-ui-carousel';

const ReadingDrawer = () => {
    const [isDrawerOpen, setDrawerOpen] = useState( false );

    const handleSpreadClick = () => {
        setDrawerOpen( false );
    }
    const handleDecksClick = () => {
        setDrawerOpen( true );
    }

    return (
        <div ClassName='reading-drawer'>
            <Box classname='top-buttons' sx={ { display: 'flex', justifyContent: 'space-between', padding: '1rem' } }>
                <Button ClassName='spread-button' variant='contained' onClick={ handleSpreadClick }>
                    Spreads
                </Button>
                <Button ClassName='deck-button' variant='contained' onClick={ handleDecksClick }>
                    Decks
                </Button>
            </Box>
        </div>
    )
};

export default ReadingDrawer;

