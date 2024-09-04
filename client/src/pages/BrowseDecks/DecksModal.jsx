import { Card, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import './BrowseDecks.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: '#4F3052',
    border: '1px solid rgb(168, 148, 103)',
    borderRadius: '8px',
    boxShadow: 24,
    p: 0,
    height: '60%',
    aspectRatio: '8/9',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
};

const CancelButton = styled(Button)(({ theme }) => ({
    fontFamily: 'Quicksand',
    backgroundColor: 'white',
    color: '#a89467',
    border: '2px solid white',
    padding: '6px 12px',
    width: '120px',
    height: '40px',
    '&:hover': {
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid rgb(168, 148, 103)'
    }
}));

const SpreadModal = ({ onClose, deckName, deckDescription, imageUrl }) => {
    console.log(deckName, deckDescription, imageUrl);

    return (
        <Card sx={style}>
            <div className='infoWrapper'>
                <div className='modalTitle'>
                    <h1 className='custom-underline'>{deckName}</h1>
                </div>
                <div className='subTitle'>
                    <h2 className='custom-underline'>Deck Details</h2>
                </div>
                <p className='modalDescription'>{deckDescription}</p>
            </div>
            <div className='deckModalImgContainer'>
                <img
                    className='deckModalImg'
                    alt='image1'
                    src={imageUrl}></img>
                <img
                    className='deckModalImg middleImg'
                    alt='image2'
                    src={imageUrl}></img>
                <img
                    className='deckModalImg'
                    alt='image3'
                    src={imageUrl}></img>
            </div>
            <CancelButton onClick={onClose}>Close</CancelButton>
        </Card>
    );
};

export default SpreadModal;
