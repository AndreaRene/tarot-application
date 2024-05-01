import { gql } from '@apollo/client';

export const GET_USER = gql`
    query user($userId: ID!) {
        user(userId: $userId) {
            _id
            email
        }
    }
`;

export const GET_ME = gql`
    query me {
        me {
            _id
            email
            username
            firstName
            lastName
            birthday
            phoneNumber
        }
    }
`;

export const CHECK_USERNAME = gql`
    query usernameChecker($username: String!) {
        usernameChecker(username: $username) {
            username
        }
    }
`;

export const QUERY_ALL_DECKS = gql`
    query AllDecks {
        allDecks {
            _id
            deckName
            deckDescription
        }
    }
`;

export const QUERY_ONE_DECK = gql`
    query OneDeck($deckId: ID!) {
        oneDeck(deckId: $deckId) {
            _id
            cards {
                _id
            }
            deckName
            deckDescription
        }
    }
`;

export const QUERY_CARDS_BY_DECK = gql`
    query allCardsByDeck($deckId: ID!) {
        allCardsByDeck(deckId: $deckId)
    }
    {
        cards {
            _id
        }
    }
`;

export const QUERY_ALL_DECKS_BY_USER = gql`
    query allDecksByUser($userId: ID!) {
        allDecksByUser(userId: $userId) {
            _id
            deckName
        }
    }
`;

export const QUERY_ALL_FAVORITE_DECKS_BY_USER = gql`
    query allFavoriteDecksByUser($userId: ID!) {
        allFavoriteDecksByUser(userId: $userId) {
            _id
            deckName
        }
    }
`;

export const QUERY_ONE_CARD = gql`
    query OneCard($cardId: ID!) {
        oneCard(cardId: $cardId) {
            _id
            arcana
            cardDescription
            cardName
            cardReverseImage
            cardReverseMeaning
            imageUrl
            cardUprightMeaning
            number
            prominentColors
            prominentSymbols
            suit
        }
    }
`;

export const QUERY_ALL_SPREADS = gql`
    query AllSpreads {
        allSpreads {
            _id
            spreadDescription
            spreadImage
            spreadName
        }
    }
`;

export const QUERY_ONE_SPREAD = gql`
    query OneSpread($spreadId: ID!) {
        oneSpread(spreadId: $spreadId) {
            _id
            numCards
            spreadDescription
            spreadImage
            spreadName
            spreadTips
            tags
            positions {
                positionDescription
                positionNumber
                positionCoordinates {
                    x
                    y
                }
            }
        }
    }
`;

export const QUERY_ALL_FAVORITE_SPREADS_BY_USER = gql`
    query allFavoriteSpreadsByUser($userId: ID!) {
        allFavoriteSpreadsByUser(userId: $userId) {
            _id
            spreadName
        }
    }
`;

export const QUERY_ONE_READING = gql`
    query OneReading($userId: ID!, $readingId: ID!) {
        oneReadingByUser(userId: $userId, spreadId: $spreadId) {
            _id
        }
    }
`;
