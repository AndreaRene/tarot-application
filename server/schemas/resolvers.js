const { AuthenticationError } = require('apollo-server-errors');

const { 
    Deck, 
    User 
} = require('../models');

const { signToken } = require('../utils/auth');

const updateObject = async (Model, objectId, updateInput) => {
    try {
        const updatedObject = await Model.findOneAndUpdate(
            { _id: objectId }, 
            { $set: updateInput }, 
            { new: true } 
        );

        return updatedObject;
    } catch(error) {
        console.error('Error updating object:', error);
        throw new Error('Failed to update object.');
     }
}

const updateObjectArrays = async (objectId, input, updateFunction) => {
    try {
        const updatedObject = await updateFunction(
            { _id: objectId },
            { $addToSet: input },
            { new: true }
        );
        return updatedObject;
    } catch (error) {
        console.error('Error updating object relationships:', error);
        throw new Error('Failed to update object relationships.');
    };
};

const checkAuthentication = (context, userId) => {
    if (!context.user || context.user._id !== userId) {
        throw new AuthenticationError('You need to be logged in to perform this action!');
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

        user: async (parent, { userID }) => {
            return User.findOne({ _id: userID });
        },

        me: async (parent, args, context) => {
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
        // mutation to add decks to user deck field array
        updateUserDecks: (_, { userId, input }) => {
            return updateObjectArrays(userId, input, User.findOneAndUpdate.bind(User))
        },
        
        // Mutation to delete their account when logged in
        deleteUser: async (parent, args, context) => {
            if (context.user) {
                return User.findOneAndDelete({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;
