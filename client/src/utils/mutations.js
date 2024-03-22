import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
    mutation signup($username: String!, $email: String!, $password: String!) {
        signup(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                email
                username
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
                username
            }
        }
    }
`;

export const EDIT_USER_PROFILE = gql`
    mutation updateUserProfile($userId: ID!, $input: UpdateUserProfileInput!) {
        updateUserProfile(userId: $userId, input: $input) {
            _id
            username
            email
            phoneNumber
            birthday
            useReverseCards
            theme
        }
    }
`;

export const EDIT_USER_PASSWORD = gql`
    mutation updateUserPassword(
        $userId: ID!
        $input: UpdateUserPasswordInput!
    ) {
        updateUserPassword(userId: $userId, input: $input) {
            _id
            email
        }
    }
`;

export const EDIT_USER_DECKS = gql`
    mutation updateUserDecks($userId: ID!, $input: UpdateUserDecksInput) {
        updateUserDecks(userId: $userId, input: $input) {
            _id
            decks {
                _id
            }
        }
    }
`;

export const EDIT_USER_READINGS = gql`
    mutation updateUserReadings($userId: ID!, $input: UpdateUserReadingsInput) {
        updateUserReadings(userId: $userId, input: $input) {
            _id
            readings {
                _id
            }
        }
    }
`;

export const CREATE_TAROT_READING = gql`
    mutation createTarptReading($userId: ID!, $deckId: ID!, $spreadId: ID!) {
        createTarotReading(
            userId: $userId
            deckId: $deckId
            spreadId: $spreadId
        ) {
            _id
            cards {
                card {
                    number
                    cardName
                }
            }
        }
    }
`;
