import { gql } from '@apollo/client';

export const QUERY_ALL_DECKS = gql`
  query AllDecks {
    allDecks {
      _id
      cards {
        _id
      }
      deckName
      description
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
      description
    }
  }
`;
