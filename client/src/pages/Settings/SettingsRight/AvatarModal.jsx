import { useState, useEffect, useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Button from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import '../Settings.css';
import './SettingsRight.css';

import { useLazyQuery } from '@apollo/client';
import { QUERY_ALL_AVATARS } from '../../../utils/queries';
import { CookieSettingsContext } from './CookiesSettings';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: '75%',
    aspectRatio: '8/9',
    backgroundColor: `var(--panel-color)`,
    border: `3px solid var(--universal-image-border)`,
    borderRadius: '8px',
    boxShadow: 24,
    p: 0
};

const AvatarModal = ({ onClose }) => {
    const { preferences, updatePreferences } = useContext(CookieSettingsContext);
    const [allAvatars, { data: allAvatarsData }] = useLazyQuery(QUERY_ALL_AVATARS);

    const [avatarUrls, setAvatarUrls] = useState({});

    useEffect(() => {
        if (allAvatarsData && allAvatarsData.allAvatars) {
            // Extract image URLs from fetched data
            const urls = allAvatarsData.allAvatars.reduce((acc, avatar) => {
                acc[avatar.avatarName] = avatar.imageUrl;
                return acc;
            }, {});

            // Store URLs in state
            setAvatarUrls(urls);
        }
    }, [allAvatarsData]);

    useEffect(() => {
        allAvatars();
    }, [allAvatars]);

    const [selectedAvatar, setSelectedAvatar] = useState(preferences.avatar);

    const handleClose = (name) => {
        if (name === 'save') {
            setSelectedAvatar();
        }
        onClose(); // Call the onClose function passed from the parent
    };

    const selectAvatar = (img) => {
        setSelectedAvatar(img);
    };

    const AvatarImages = () => {
        const maxAvatarsPerRow = 3;

        if (Object.keys(avatarUrls).length === 0) {
            return <p>Loading avatars...</p>;
        }

        const rows = [];
        for (let i = 0; i < Object.entries(avatarUrls).length; i += maxAvatarsPerRow) {
            rows.push(
                <Box
                    key={i}
                    sx={{
                        padding: '1.5rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    {Object.entries(avatarUrls)
                        .slice(i, i + maxAvatarsPerRow)
                        .map(([name, url], idx) => (
                            <Avatar
                                key={name} // Use a unique key, `name` is preferred over `i + idx`
                                src={url}
                                sx={{ width: 100, height: 100, margin: '0.5rem' }}
                                draggable='false'
                                className='avatarImg'
                                alt={name}
                                onClick={() => selectAvatar(url)} // Replace with your selectAvatar function
                            />
                        ))}
                </Box>
            );
        }

        return <>{rows}</>;
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
            color: '#121212',
            border: '2px solid #A89467'
        }
    }));
    const SaveButton = styled(Button)(({ theme }) => ({
        fontFamily: 'Quicksand',
        backgroundColor: '#A89467',
        color: 'white',
        border: '2px solid #382337',
        padding: '6px 12px',
        width: '120px',
        height: '43px',
        '&:hover': {
            backgroundColor: '#A89467',
            color: 'white',
            border: '2px solid white'
        }
    }));

    const handleSelectorChange = (key, value) => {
        updatePreferences({ [key]: value });
        handleClose();
    };

    return (
        <Card sx={style}>
            <AvatarImages />
            <Box className='avatar-modal-container'>
                <Box>
                    <img
                        alt='avatar'
                        src={selectedAvatar}
                        className='selectedAvatar'
                    />
                </Box>
                <Box className='avatar-content'>
                    <CardContent>
                        <Typography
                            // gutterBottom
                            variant='h4'
                            className='avatar-title'
                            fontFamily='Macondo'
                            component='div'>
                            Avatar Selection
                        </Typography>
                        <Typography
                            variant='body2'
                            fontFamily='Quicksand'
                            color='white'>
                            Choose your avatar! You can change it at any time.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <CancelButton onClick={handleClose}>Cancel</CancelButton>
                        <SaveButton onClick={() => handleSelectorChange('avatar', selectedAvatar)}>Save</SaveButton>
                    </CardActions>
                </Box>
            </Box>
        </Card>
    );
};

export default AvatarModal;
