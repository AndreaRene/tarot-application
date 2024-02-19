const {
	Deck
} = require('../models');

const resolvers = {
	Query: {
		allDecks: async () => Deck.find()
	},
};

module.exports = resolvers;
