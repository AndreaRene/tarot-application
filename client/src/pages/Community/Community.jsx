import { useEffect } from 'react';
import { Button } from '@mui/material';
import { EDIT_USER_SETTINGS } from '../../utils/mutations';
import { GET_ME } from '../../utils/queries';
import { useLazyQuery, useMutation } from '@apollo/client';

const Community = () => {
    const [updateSettings] = useMutation(EDIT_USER_SETTINGS);
    const [getMe, { data: currentUserData }] = useLazyQuery(GET_ME);

    useEffect(() => {
        getMe();
    }, []);

    const imageUrl = 'https://tarot-deck-images.s3.us-east-2.amazonaws.com/avatars/chibi_fool_avatar.png';
    const avatarName = 'Chibi Fool Avatar';

    const submit = async () => {
        if (currentUserData && currentUserData.me) {
            const userId = currentUserData.me._id;

            try {
                const { data } = await updateSettings({
                    variables: {
                        userId: userId,
                        input: {
                            avatar: [
                                {
                                    avatarName: avatarName, // Use avatarName
                                    imageUrl: imageUrl
                                }
                            ]
                        }
                    }
                });
                console.log('User settings updated:', data);
            } catch (e) {
                console.error('Mutation error:', e.networkError?.result?.errors || e);
            }
        } else {
            console.log('User data not yet available.');
        }
    };

    return (
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5rem' }}>
            <Button onClick={() => submit()}>Here</Button>
        </section>
    );
};

export default Community;
