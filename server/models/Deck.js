const { Schema, model } = require('mongoose');

const deckSchema = new Schema({
    deckName: {
        type: String
    },
    deckCreators: [String],
    deckDescription: {
        type: String
    },
    deckImages: [String],
    deckCardBackImage: {
        type: String
    },
    sampleCardImages: [String],
    cards: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Card'
        }
    ]
});

module.exports = (connection) => connection.model('Deck', deckSchema);
