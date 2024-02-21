const {
	Deck
} = require('../models');

const resolvers = {
	Query: {
		allDecks: async () => Deck.find(),
		oneDeck: async (_, { deckId }) => {
			return Deck.findOne({_id: deckId})
		}
		//query all cards from one deck
		//query x number of random cards from one deck
		//query one card
		//query one spread
		//query all spreads
		//query ME
	},
};

module.exports = resolvers;
