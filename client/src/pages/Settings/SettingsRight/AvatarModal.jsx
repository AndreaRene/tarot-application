import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import '../Settings.css';

import Fool from '../../../assets/01_The_Fool_Edited.png';
import Magician from '../../../assets/01_The_Magician.jpg';
import Empress from '../../../assets/03_The_Empress.jpg';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
};

const AvatarModal = ({ onClose }) => {
    const [selectedAvatar, setSelectedAvatar] = useState(Fool);

    const handleClose = (name) => {
        if (name === 'save') {
            setSelectedAvatar();
        }
        onClose(); // Call the onClose function passed from the parent
    };

    const selectAvatar = (img) => {
        setSelectedAvatar(img);
    };

    const currentAvatar = (avatar) => {
        let disabled = true;
        if (avatar === !currentAvatar) {
            disabled = false;
        }

        return disabled;
    };

    const imgArray = [
        Fool,
        Magician,
        Empress,
        Fool,
        Magician,
        Empress,
        Fool,
        Magician,
        Empress,
        Fool,
    ];

    const AvatarImages = () => {
        const maxAvatarsPerRow = 5;
        const rows = [];
        for (let i = 0; i < imgArray.length; i += maxAvatarsPerRow) {
            rows.push(
                <Box
                    key={i}
                    sx={{
                        padding: '1rem',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    {imgArray
                        .slice(i, i + maxAvatarsPerRow)
                        .map((image, index) => (
                            <Avatar
                                key={i + index}
                                src={image}
                                sx={{ width: 100, height: 100 }}
                                draggable='false'
                                className='avatarImg'
                                onClick={() => selectAvatar(image)}
                            />
                        ))}
                </Box>
            );
        }
        return <>{rows}</>;
    };

    const CancelButton = styled(Button)(({ theme }) => ({
        fontFamily: 'Courier New Courier monospace',
        color: '#382337',
        border: '2px solid #382337',
        padding: '6px 12px',
        width: '120px',
        height: '40px',
        '&:hover': {
            backgroundColor: '#4F3052',
            color: 'white',
            border: '2px solid #4F3052',
        },
    }));
    const SaveButton = styled(Button)(({ theme }) => ({
        fontFamily: 'Courier New Courier monospace',
        backgroundColor: '#382337',
        color: 'white',
        border: '2px solid #382337',
        padding: '6px 12px',
        width: '120px',
        height: '40px',
        '&:hover': {
            backgroundColor: '#4F3052',
            color: 'white',
            border: '2px solid #4F3052',
        },
    }));

    return (
        <Card sx={style}>
            <AvatarImages />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '196px',
                    justifyContent: 'start',
                    alignItems: 'center',
                    padding: '10px',
                    borderTop: '2px solid rgb(168, 148, 103)',
                }}
            >
                <Box>
                    <img
                        alt='avatar'
                        src={selectedAvatar}
                        className='selectedAvatar'
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <CardContent>
                        <Typography gutterBottom variabnt='h5' component='div'>
                            Avatar Selection
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Choose your avatar! You can change it at any time.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <CancelButton onClick={handleClose}>
                            Cancel
                        </CancelButton>
                        <SaveButton onClick={handleClose}>Save</SaveButton>
                    </CardActions>
                </Box>
            </Box>
        </Card>
    );
};

export default AvatarModal;
