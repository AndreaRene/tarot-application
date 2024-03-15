import { gql } from '@apollo/client';

export const GET_USER = gql`
    query user($userId: ID!) {
      user(userId: $userId) {
        _id
        email
      }
    }    
`

export const GET_ME = gql`
    query me {
      me {
        _id
        email
      }
    }
`

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

  export const QUERY_CARDS_BY_DECK = gql`
    query allCardsByDeck($deckId: ID!) {
    allCardsByDeck(deckId: $deckId)} {
        cards {
        _id
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
      cardUprightImage
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
}`;

export const QUERY_ONE_SPREAD = gql`
  query OneSpread($spreadId: ID!) {
  oneSpread(spreadId: $spreadId) {
    _id
    numCards
    positions
    spreadDescription
    spreadImage
    spreadName
    spreadTips
    tags
  }
}`;