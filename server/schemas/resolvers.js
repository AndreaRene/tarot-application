const { AuthenticationError } = require('apollo-server-errors');

const { Deck, User } = require('../models');

const { signToken } = require('../utils/auth');

const updateObject = async (Model, objectId, updateInput) => {
    try {
        const updatedObject = await Model.findOneAndUpdate(
            { _id: objectId },
            { $set: updateInput },
            { new: true }
        );

        return updatedObject;
    } catch (error) {
        console.error('Error updating object:', error);
        throw new Error('Failed to update object.');
    }
};

const checkAuthentication = (context, userId) => {
    if (!context.user || context.user._id !== userId) {
        throw new AuthenticationError(
            'You need to be logged in to perform this action!'
        );
    }
};

const resolvers = {
    Query: {
        allDecks: async () => Deck.find(),
        oneDeck: async (_, { deckId }) => {
            return Deck.findOne({ _id: deckId }).populate('cards');
        },

        users: async () => {
            return User.find();
        },

        user: async (_, { userID }) => {
            return User.findOne({ _id: userID });
        },

        me: async (_, __, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        signup: async (_, { userName, email, password }) => {
            // Where we get the email and password from the args object
            const user = await User.create({ userName, email, password });
            const token = signToken(user);

            return { token, user };
        },

        // User login
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });

            const correctPw = await user.isCorrectPassword(password);

            if (!user || !correctPw) {
                throw new AuthenticationError('Incorrect Password or Email');
            }

            const token = signToken(user);
            return { token, user };
        },

        // Mutation to update user profile info
        updateUserProfile: async (_, { userId, input }, context) => {
            checkAuthentication(context, userId);
            return updateObject(User, userId, input);
        },
        // Mutation to update user password info
        updateUserPassword: async (_, { userId, input }, context) => {
            checkAuthentication(context, userId);

            const user = await User.findById(userId);
            if (!user) {
                throw new Error('User not found');
            }

            const isMatch = await user.isCorrectPassword(input.currentPassword);
            if (!isMatch) {
                throw new Error('Current password is incorrect');
            }

            user.password = input.newPassword;
            await user.save();

            return user;
        },

        // Mutation to delete their account when logged in
        deleteUser: async (_, __, context) => {
            checkAuthentication(context, userId);
        },
    },
};

module.exports = resolvers;
