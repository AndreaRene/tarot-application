import { useState } from 'react';
import { Drawer, Box, Button, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import DailyDraw from '../../assets/Spreads/daily_draw_example.jpg';
import ThreeCard from '../../assets/Spreads/three_card_draw.jpg';
import Interview from '../../assets/Spreads/interview_spread.png';

import EotS from '../../assets/CardBacks/eots_backs_01.jpg';
import Rwsd from '../../assets/CardBacks/rwsd_backs_01.jpg';

import './ReadingDrawer.css';

const ReadingDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState( false );

    const handleSpreadsClick = () => {
        setIsDrawerOpen( false );
    }

    const handleDeckClick = () => {
        setIsDrawerOpen( true );
    }

    const spreadItems = [
        { image: DailyDraw, title: 'Daily Draw' },
        { image: ThreeCard, title: 'Three Card Draw' },
        { image: Interview, title: 'Interview Spread' }
    ];

    const deckItems = [
        { image: EotS, title: 'Eclipse of the Soul' },
        { image: Rwsd, title: 'Rider-Waite-Smith' }
    ];

    return (
        <div className='reading-aside'>
            <Box className='top-buttons' sx={ { display: 'flex', justifyContent: 'space-between', padding: '1rem' } }>
                <Button variant='contained' onCLick={ handleSpreadsClick }>Spreads</Button>
                <Button variant='contained' onClick={ handleDeckClick }>Decks</Button>
            </Box>

            { !isDrawerOpen && (
                <Box sx={ { width: '100%', height: '100%', padding: '1rem' } }>
                    <Swiper
                        direction='vertical'
                        slidesPerView={ 4 }
                        spaceBetween={ 20 }
                        loop={ true }
                    >
                        { spreadItems.map( ( item, idx ) => (
                            <SwiperSlide key={ idx }>
                                <Box sx={ { padding: '1rem', textAlign: 'center' } }>
                                    <img src={ item.image } alt={ item.name } style={ { width: '100%', borderRadius: '8px' } } />
                                </Box>
                                <Typography variant='subtitle1' sx={ { marginTop: '.5rem' } }>{ item.title }</Typography>
                            </SwiperSlide>
                        ) ) }

                    </Swiper>
                </Box>
            )
            }
            <Drawer anchor="left" open={ isDrawerOpen } onClose={ handleSpreadsClick }>
                <Box sx={ { width: '100%', padding: '16px' } }>
                    <Typography variant="h6">Decks</Typography>
                    <Swiper
                        direction="vertical"
                        slidesPerView={ 4 }
                        spaceBetween={ 20 }
                        loop={ false }
                    >
                        { deckItems.map( ( item, idx ) => (
                            <SwiperSlide key={ idx }>
                                <Box sx={ { padding: '16px', textAlign: 'center' } }>
                                    <img src={ item.image } alt={ item.name } style={ { width: '100%', borderRadius: '8px' } } />
                                    <Typography variant="subtitle1" sx={ { marginTop: '8px' } }>{ item.name }</Typography>
                                </Box>
                            </SwiperSlide>
                        ) ) }
                    </Swiper>
                </Box>
            </Drawer>
        </div >
    )

};

export default ReadingDrawer;