import { Card, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { deckContainer, avatarContainer, themeAndBundleContainer } from './ModalContainerChoice';

import './Shop.css';

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

const CustomButton = styled(Button)(({ theme }) => ({
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

const ShopModal = ({ onClose, modalData }) => {
    const ContainerChoice = () => {
        if (modalData.type === 'Deck') {
            return deckContainer(modalData);
        } else if (modalData.type === 'Avatar') {
            return avatarContainer(modalData);
        } else if (modalData.type === 'Theme' || modalData.type === 'Bundle') {
            return themeAndBundleContainer(modalData);
        } else {
            return <div>Unknown Container</div>;
        }
    };

    return (
        <Card sx={style}>
            <div className='infoWrapper'>
                <div className='modalTitle'>
                    <h1 className='custom-underline'>{modalData.name}</h1>
                </div>
                {/* <div className='subTitle'>
                    <h2 className='custom-underline'>Deck Details</h2>
                </div> */}
                <p className='modalDescription'>{modalData.description}</p>
            </div>

            <ContainerChoice />

            <div className='shopButtonContainer'>
                <CustomButton sx={{ width: '150px' }}>Add to Cart</CustomButton>
                <CustomButton onClick={onClose}>Close</CustomButton>
            </div>
        </Card>
    );
};

export default ShopModal;
