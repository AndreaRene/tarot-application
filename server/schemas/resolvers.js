const { Deck, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        allDecks: async () => Deck.find(),
        oneDeck: async (_, { deckId }) => {
            return Deck.findOne({ _id: deckId }).populate('cards');
        },

        users: async () => {
            return User.find();
        },

        user: async (parent, { userID }) => {
            return User.findOne({ _id: userID });
        },
    },
    Mutation: {
        signup: async (parent, { userName, email, password }) => {
            // Where we get the email and password from the args object
            const user = await User.create({ userName, email, password });
            const token = signToken(user);

            return { token, user };
        },
    },
};

module.exports = resolvers;
