import { gql } from '@apollo/client';

export const GET_ALL_DECKS = gql`
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
`
