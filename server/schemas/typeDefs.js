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

    type Spread {
        _id: ID!
        spreadName: String
        spreadMeaning: String
        numCards: Int
        positions:[String]
    }

    type Reading {
        _id: ID!
        user: User
        deck: Deck
        spread: Spread
        cards: [Card]
        userNotes: UserNotes
    }

    type UserNotes {
        noteTitle: String
        textBody: String
    }

    type Query {
        allDecks: [Deck]
        oneDeck(deckId: ID!): Deck
        
    }

`;

module.exports = typeDefs;
