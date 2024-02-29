const { Schema, model } = require('mongoose');

const deckSchema = new Schema({
    deckName: {
        type: String,
    },
    deckCreators: [String],
    deckDescription: {
        type: String,
    },
    deckImages: [String],
    deckCardBack: {
        type: String
    },
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }]
});

const Deck = model('Deck', deckSchema);

module.exports = Deck;
