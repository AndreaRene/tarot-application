const typeDefs = `

    type User {
        _id: ID!
        userName: String
        email: String
        password: String
        useReverseCards: Boolean
    }

    type Card {
        _id: ID!
        cardName: String
        number: Int
        arcana: String
        suit: String
        deck: Deck
    }

    type Deck {
        _id: ID!
        deckName: String
        description: String
        cards: [Card]
    }

    type Query {
        allDecks: [Deck]
    }

`;

module.exports = typeDefs;
