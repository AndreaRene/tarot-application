const { AuthenticationError } = require('apollo-server-errors');
const { 
    Deck, 
    User,
    Card,
    Spread,
    Reading
} = require('../models');
const dateScalar = require('./DateScalar');

const { signToken } = require('../utils/auth');

const updateUser = async (userId, input) => {

    if (input.birthday) {
        input.birthday = new Date(input.birthday);
    }

    return updateObject(User, userId, input);
};


const updateObject = async (Model, objectId, input) => {
    try {

        const updatedObject = await Model.findOneAndUpdate(
            { _id: objectId },
            { $set: input },
            { new: true }
        );

        return updatedObject;
    } catch (error) {
        console.error('Error updating object:', error);
        throw new Error('Failed to update object.');
    }
};

const updateObjectArrays = async (
    objectId,
    input,
    updateFunction,
    populatePath
) => {
    try {
        const updatedObject = await updateFunction(
            { _id: objectId },
            { $addToSet: input },
            { new: true }
        ).populate(populatePath);

        return updatedObject;
    } catch (error) {
        console.error('Error updating object relationships:', error);
        throw new Error('Failed to update object relationships.');
    }
};

const checkAuthentication = (context, userId) => {
    if (!context.user || context.user._id !== userId) {
        throw new AuthenticationError(
            'You need to be logged in to perform this action!'
        );
    }
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const drawCards = (deck, numberOfCards) => {
  const shuffledDeck = shuffleArray([...deck]);
  return shuffledDeck.slice(0, numberOfCards);
}


const resolvers = {

    Date: dateScalar,

    Query: {
        allDecks: async () => Deck.find(),
        oneDeck: async (_, { deckId }) => {
            return Deck.findOne({ _id: deckId }).populate('cards');
        },
        allCardsByDeck: async (_, { deckId }) => {
            const deck = await Deck.findOne({ _id: deckId }).populate('cards');
            return deck.cards.map(card => card._id);
        },
        oneCard: async (_, { cardId }) => {
            return Card.findOne({ _id: cardId })
        },
        allSpreads: async () => Spread.find(),
        oneSpread: async (_, { spreadId }) => {
            return Spread.findOne({ _id: spreadId })
        },
        users: async () => {
            return User.find();
        },

        user: async (_, { userId }) => {
            return User.findOne({ _id: userId });
        },

        usernameChecker: async (_, { username }) => {
            return User.findOne({ username });
        },

        me: async (_, __, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        signup: async (_, { username, email, password }) => {
            // Where we get the email and password from the args object
            const user = await User.create({ username, email, password });
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
            return updateUser(userId, input);
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
        updateUserDecks: (_, { userId, input }, context) => {
            checkAuthentication(context, userId);
            return updateObjectArrays(
                userId,
                input,
                User.findOneAndUpdate.bind(User),
                'decks'
            );
        },

        updateUserReadings: (_, { userId, input }) => {
            checkAuthentication(context, userId);
            return updateObjectArrays(
                userId,
                input,
                User.findOneAndUpdate.bind(User),
                'readings'
            );
        },

        createTarotReading: async (_, {userId, deckId, spreadId }, context) => {
            checkAuthentication(context, userId);
            const spread = await Spread.findOne({ _id: spreadId });
            const deck = await Deck.findOne({ _id: deckId }).populate('cards');
            const selectedCards = drawCards(deck.cards, spread.numCards);

            const cardObjects = selectedCards.map((card, index) => ({
                card: card._id,
                position: index + 1,
                orientation: Math.random() < 0.5 ? 'Upright' : 'Reversed', 
            }));

            const reading = new Reading({
                user: context.user._id, 
                deck: deck._id,
                spread: spread._id,
                cards: cardObjects,
            });

            await reading.save();

            await reading.populate('user deck spread cards.card');

            return reading;
        },


        // Mutation to delete their account when logged in
        deleteUser: async (_, { userId }, context) => {
            // Check authentication
            checkAuthentication(context, userId);

            try {
                // Find the user by ID
                const user = await User.findById(userId);

                if (!user) {
                    throw new Error('User not found');
                }

                // Delete the user by ID
                const deletedUser = await User.findByIdAndDelete(userId);

                if (!deletedUser) {
                    throw new Error('Failed to delete user.');
                }

                // Return a message indicating successful deletion
                return {
                    message: 'User deleted successfully',
                };
            } catch (error) {
                console.error('Error deleting user:', error);
                throw new Error('Failed to delete user.');
            }
        },
    },
};

module.exports = resolvers;
