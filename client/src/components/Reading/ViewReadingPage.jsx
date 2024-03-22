// import React from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// import Auth from '../../utils/auth';

// Define your GraphQL query
const QUERY_ALL_DECKS = gql`
    query AllDecks {
        allDecks {
            _id
            deckName
            deckDescription
        }
    }
`;

const CreateReadingTest = () => {
    const [getDecks] = useLazyQuery(QUERY_ALL_DECKS, {
        onError: (error) => {
            console.error('Error fetching me:', error);
        },
    });

    const createReadingSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await getDecks();
            console.log('data:', data);
        } catch (e) {
            console.error(e);
        }

        // Your submit logic here
    };

    return (
        <div>
            <form onSubmit={createReadingSubmit}>
                <h1
                    className='text-bold'
                    style={{
                        color: 'rgb(168, 148, 103)',
                        fontFamily: 'Playfair Display',
                    }}
                >
                    Create Reading
                </h1>
                {/* Your form elements here */}
                <Button id='button' type='submit'>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default CreateReadingTest;
