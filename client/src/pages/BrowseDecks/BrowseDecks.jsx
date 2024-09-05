import { useState, forwardRef, cloneElement, useEffect } from 'react';
import { Button, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';
import DecksModal from './DecksModal';
import tarot_board from '../../assets/tarot_board.png';

import { useLazyQuery } from '@apollo/client';
import { QUERY_ALL_DECKS } from '../../utils/queries';

import './BrowseDecks.css';

const Fade = forwardRef(function Fade(props, ref) {
    const { children, in: open, onClick, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        }
    });

    return (
        <animated.div
            ref={ref}
            style={style}
            {...other}>
            {cloneElement(children, { onClick })}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func
};

const BrowseDecks = () => {
    const [open, setOpen] = useState(false); // Toggles Spread Modal
    const [allDecks, { data: allDecksData }] = useLazyQuery(QUERY_ALL_DECKS);

    const [deckInfo, setDeckInfo] = useState({});
    const [modalData, setModalData] = useState({
        deckName: '',
        deckDescription: '',
        imageUrl: ''
    });

    useEffect(() => {
        if (allDecksData) {
            const formattedDecks = allDecksData.allDecks.reduce((acc, deck) => {
                acc[deck.deckId] = {
                    deckName: deck.deckName,
                    deckDescription: deck.deckDescription,
                    imageUrl: deck.imageUrl
                };
                return acc;
            }, {});

            setDeckInfo(formattedDecks);
        }
    }, [allDecksData]);

    useEffect(() => {
        allDecks();
    }, [allDecks]);

    const handleOpen = (deck) => {
        setModalData(deck);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const DeckMap = () => {
        const totalDecks = 5;
        const deckIds = Object.keys(deckInfo);
        const numDecksToShow = Math.min(deckIds.length, totalDecks);
        const numComingSoon = totalDecks - numDecksToShow;

        return (
            <div className='deckContainer'>
                {deckIds.slice(0, numDecksToShow).map((deckId) => (
                    <img
                        key={deckId}
                        className='deckImgs'
                        alt={deckInfo[deckId].deckName}
                        src={deckInfo[deckId].imageUrl}
                        onClick={() =>
                            handleOpen({
                                deckName: deckInfo[deckId].deckName,
                                deckDescription: deckInfo[deckId].deckDescription,
                                imageUrl: deckInfo[deckId].imageUrl
                            })
                        }
                    />
                ))}

                {Array.from({ length: numComingSoon }).map((_, idx) => (
                    <div
                        key={`coming-soon-${idx}`}
                        className='deckImgs comingSoon'>
                        <h2 className='comingSoonTitle'>COMING SOON</h2>
                    </div>
                ))}
            </div>
        );
    };

    const FeaturedDeck = () => {
        if (!deckInfo.RWSD) {
            // Optionally, you can return a placeholder or loading spinner here
            return <div>Loading...</div>;
        } else {
            return (
                <div
                    style={{ backgroundImage: `url(${tarot_board})` }}
                    className='featuredDeckImgContainer'>
                    <img
                        className='featuredDeckImg'
                        alt={deckInfo.EOTS.deckName}
                        src={deckInfo.EOTS.imageUrl}
                        onClick={() =>
                            handleOpen({
                                deckName: deckInfo.EOTS.deckName,
                                deckDescription: deckInfo.EOTS.deckDescription,
                                imageUrl: deckInfo.EOTS.imageUrl
                            })
                        }
                    />
                </div>
            );
        }
    };

    return (
        <section className='decksWrapper'>
            <div className='topSection'>
                <div className='deckLeftSide'>
                    <h3 className='featuredDeckTitle'>Featured Deck: Eclipse of the Soul</h3>
                    <FeaturedDeck />
                </div>
                <div className='deckRightSide'>
                    <div className='rightSideInsideContainer'>
                        <h1 className='title'>Tarot Card Decks</h1>
                        <h3 className='description'>
                            Find decks that speak to you. Choose from a variety of themes and styles to customize your
                            experience.
                        </h3>
                        <Button sx={{ textTransform: 'none', fontSize: '2.2rem', margin: '25px 0 25px' }}>
                            Browse Decks
                        </Button>
                    </div>
                </div>
            </div>
            <div className='bottomSection'>
                <Button className='arrow'>❮</Button>
                <DeckMap />
                <Button className='arrow'>❯</Button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'>
                <Fade in={open}>
                    <DecksModal
                        onClose={handleClose}
                        deckName={modalData.deckName}
                        deckDescription={modalData.deckDescription}
                        imageUrl={modalData.imageUrl}
                    />
                </Fade>
            </Modal>
        </section>
    );
};

export default BrowseDecks;
