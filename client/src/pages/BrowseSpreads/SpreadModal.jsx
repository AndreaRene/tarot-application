import { Card, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import DailyDraw from '../../assets/Spreads/daily_draw_example.jpg';

import './BrowseSpreads.css';

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
    height: '80%',
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

const SpreadModal = ({ onClose, spreadName, spreadDescription, imageUrl }) => {
    return (
        <Card sx={style}>
            <div className='infoWrapper'>
                <div className='modalTitle'>
                    <h2 className='custom-underline'>{spreadName}</h2>
                </div>
                <div className='subTitle'>
                    <h2 className='custom-underline'>Daily Draw</h2>
                </div>
                <p className='modalDescription'>{spreadDescription}</p>
            </div>
            <img
                className='modalImg'
                src={imageUrl}
                alt={spreadName}
            />
            <CancelButton onClick={onClose}>Close</CancelButton>
        </Card>
    );
};

export default SpreadModal;
