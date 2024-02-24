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

        currentUser: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        signup: async (parent, { userName, email, password }) => {
            // Where we get the email and password from the args object
            const user = await User.create({ userName, email, password });
            const token = signToken(user);

            return { token, user };
        },

        // User login
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with that email');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);
            return { token, user };
        },

        // Logs out the current user
        logout: async (parent, args, context) => {
            if (!context.user) {
                throw new AuthenticationError('You are not logged in!');
            }

            // Clear the user's token from the context
            context.user = null;

            // Return an object containing the token and a logout message
            return {
                token: null,
                message: 'You have successfully logged out!',
            };
        },
    },
};

module.exports = resolvers;
