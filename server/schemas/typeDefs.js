const typeDefs = `
    scalar Date

    type User {
        _id: ID!
        username: String!
        email: String!
        phoneNumber: String
        birthday: Date
        password: String
        useReverseCards: Boolean
        readings: [Reading]
        decks: [Deck]
        theme: String
        dateCreated: Date
    }
      
      type Card {
        _id: ID!
        cardName: String!
        number: Int
        arcana: String!
        suit: String!
        cardDescription: String!
        meanings: [CardMeaning!]!
        imageUrl: String!
        imageFileName: String!
        prominentSymbols: [ProminentSymbol!]!
        prominentColors: [ProminentColor!]!
        deck: Deck!
    }
      
    type CardMeaning {
        title: String!
        description: String!
        keywords: [String!]!
    }
      
      type ProminentSymbol {
        symbol: String!
        meaning: String!
    }
      
      type ProminentColor {
        color: String!
        meaning: String!
    }
      
    type Deck {
        _id: ID!
        deckName: String
        deckCreators: [String]
        deckDescription: String
        deckImages: [String]
        deckCardBackImage: String
        sampleCardImages: [String]
        cards: [Card]
    }

    type Spread {
        _id: ID!
        spreadName: String
        spreadDescription: String
        spreadImage: String
        numCards: Int
        positions:[SpreadPositions]
        spreadTips: [String]
        tags: [String]
    }

    type SpreadPositions {
        positionNumber: Int
        positionDescription: String
        positionDetails: String
        positionCoordinates: PositionCoords
    }

    type PositionCoords {
        x: Int
        y: Int
    }

    type Reading {
        _id: ID!
        user: User
        deck: Deck
        spread: Spread
        cards: [ReadingCards]
        userNotes: UserNotes
        dateCreated: Date
    }

    type ReadingCards {
        card: Card
        position: Int
        orientation: String
    }

    type UserNotes {
        noteTitle: String
        textBody: String
    }

    input UpdateUserProfileInput {
        username: String
        email: String
        phoneNumber: String
        birthday: Date
        useReverseCards: Boolean
        theme: String
    }

    input UpdateUserPasswordInput {
        currentPassword: String!
        newPassword: String!
    }

    input UpdateUserDecksInput {
        decks: [ID]
    }

    input UpdateUserReadingsInput {
        readings: [ID]
    }

    input UpdateReadingNotesInput {
        noteTitle: String
        textBody: String
    }

    type UpdateReadingNotesMessage {
        message: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        allDecks: [Deck]
        oneDeck(deckId: ID!): Deck
        allCardsByDeck(deckId: ID!): [Card]
        oneCard(cardId: ID!): Card
        allSpreads: [Spread]
        oneSpread(spreadId: ID!): Spread
        allReadingsByUser(userId: ID!): [Reading]
        oneReadingByUser(userId: ID!, readingId: ID!): Reading
        user(userId: ID!): User
        users: [User]
        me: User
        usernameChecker(username: String!): User
    }

    type DeleteUser {
        message: String!
    }

    type Mutation {
        signup(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        updateUserProfile(userId: ID!, input: UpdateUserProfileInput):User
        updateUserPassword(userId: ID!, input: UpdateUserPasswordInput): User
        updateUserDecks(userId: ID!, input: UpdateUserDecksInput): User
        createTarotReading(userId: ID!, deckId: ID!, spreadId: ID!): Reading
        updateUserReadings(userId: ID!, input: UpdateUserReadingsInput): User
        updateReadingNotes(userId: ID!, readingId: ID!, input: UpdateReadingNotesInput): UpdateReadingNotesMessage
        deleteReading(userId: ID!, readingId: ID!): Reading

        deleteUser(userId: ID!): DeleteUser
    }

`;

module.exports = typeDefs;
