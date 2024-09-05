import { useState } from 'react';
import { Box, Button, Typography, Slide } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Daily from '../../assets/Spreads/daily_draw_example.jpg';
import ThreeCard from '../../assets/Spreads/three_card_draw.jpg';
import Interview from '../../assets/Spreads/interview_spread.png';

import EOTS from '../../assets/CardBacks/eots_backs_01.jpg';
import RWSD from '../../assets/CardBacks/rwsd_backs_01.jpg';

const ReadingAside = () => {
    const [isDrawerOpen, setDrawerOpen] = useState( false );

    const handleSpreadsClick = () => setDrawerOpen( false );
    const handleDecksClick = () => setDrawerOpen( true );

    const spreadsItems = [
        { image: Daily, name: 'Daily Draw' },
        { image: ThreeCard, name: 'Three Card Draw' },
        { image: Interview, name: 'Interview Spread' },
        { image: Daily, name: 'Daily Draw' },
        { image: ThreeCard, name: 'Three Card Draw' },
        { image: Interview, name: 'Interview Spread' },
        { image: Daily, name: 'Daily Draw' },
        { image: ThreeCard, name: 'Three Card Draw' },
        { image: Interview, name: 'Interview Spread' },
        { image: Daily, name: 'Daily Draw' },
        { image: ThreeCard, name: 'Three Card Draw' },
        { image: Interview, name: 'Interview Spread' },
    ];

    const decksItems = [
        { image: EOTS, name: 'Eclipse of the Soul' },
        { image: RWSD, name: 'Rider-Waite-Smith' },
        { image: EOTS, name: 'Eclipse of the Soul' },
        { image: RWSD, name: 'Rider-Waite-Smith' },
        { image: EOTS, name: 'Eclipse of the Soul' },
        { image: RWSD, name: 'Rider-Waite-Smith' },
        { image: EOTS, name: 'Eclipse of the Soul' },
        { image: RWSD, name: 'Rider-Waite-Smith' },
    ];

    return (
        <div className="reading-aside" style={ { height: '100%', position: 'relative', overflow: 'hidden' } }>
            {/* Top Buttons for Spreads and Decks */ }
            <Box className="top-buttons" sx={ { display: 'flex', justifyContent: 'space-between', padding: '16px' } }>
                <Button variant="contained" onClick={ handleSpreadsClick }>Spreads</Button>
                <Button variant="contained" onClick={ handleDecksClick }>Decks</Button>
            </Box>

            {/* Static Vertical Carousel for Spreads */ }
            { !isDrawerOpen && (
                <Box sx={ { width: '100%', height: '70vh', overflow: 'hidden' } }>
                    <Swiper
                        direction="vertical"
                        slidesPerView={ 4 }
                        spaceBetween={ 20 }
                        loop={ true }
                        mousewheel={ true }
                        navigation={ {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        } }
                        style={ { height: '100%' } }
                    >
                        { spreadsItems.map( ( item, idx ) => (
                            <SwiperSlide key={ idx }>
                                <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' } }>
                                    <img src={ item.image } alt={ item.name } style={ { maxWidth: '80%', height: 'auto', borderRadius: '8px' } } />
                                    <Typography variant="subtitle1" sx={ { marginTop: '8px' } }>{ item.name }</Typography>
                                </Box>
                            </SwiperSlide>
                        ) ) }
                    </Swiper>
                </Box>
            ) }

            {/* Custom Drawer with Vertical Carousel for Decks */ }
            <Slide direction="right" in={ isDrawerOpen } mountOnEnter unmountOnExit>
                <Box
                    sx={ {
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: 200,
                        height: 'calc(100% - 64px)',
                        backgroundColor: 'var(--color-bg)',
                        zIndex: 1,
                        // paddingTop: '5em',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    } }
                >
                    <Swiper
                        direction="vertical"
                        slidesPerView={ 4 }
                        spaceBetween={ 20 }
                        loop={ true }
                        mousewheel={ true }
                        style={ { height: '100%' } }
                    >
                        { decksItems.map( ( item, idx ) => (
                            <SwiperSlide key={ idx }>
                                <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' } }>
                                    <img src={ item.image } alt={ item.name } style={ { maxWidth: '80%', height: 'auto', borderRadius: '8px' } } />
                                    <Typography variant="subtitle1" sx={ { marginTop: '8px' } }>{ item.name }</Typography>
                                </Box>
                            </SwiperSlide>
                        ) ) }
                    </Swiper>
                </Box>
            </Slide>
        </div>
    );
};

export default ReadingAside;
