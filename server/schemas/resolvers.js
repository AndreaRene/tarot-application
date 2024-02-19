const {
	Deck
} = require('../models');

const resolvers = {
	Query: {
		allDecks: async () => Deck.find(),
		oneDeck: async (_, {  deckId }) => {
			return Deck.findOne({_id: deckId})
			.populate('cards')
		}
	},
};

module.exports = resolvers;
