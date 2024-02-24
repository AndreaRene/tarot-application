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
        deck: Deck
    }

    type Deck {
        _id: ID!
        deckName: String
        description: String
        cards: [Card]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        allDecks: [Deck]
        oneDeck(deckId: ID!): Deck
        user(userID: ID!): User
        users: [User]
        currentUser: User
    }

    type Logout {
        token: String
        message: String!
    }

    type Mutation {
        signup(email: String!, password: String!, userName: String!): Auth
        login(email: String!, password: String!): Auth

        deleteUser: User
        logout: Logout!
    }

`;

module.exports = typeDefs;
