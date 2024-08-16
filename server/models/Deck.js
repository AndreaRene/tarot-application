const { Schema, model } = require('mongoose');

const deckSchema = new Schema({
    deckName: {
        type: String
    },
    deckCreators: [String],
    deckDescription: {
        type: String
    },
    imageUrl: {
        type: String
    },
    objectCode: {
        type: String
    },
    deckId: {
        type: String
    },
    sampleCardImages: [String],
    cardIds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Card'
        }
    ]
});

module.exports = (connection) => connection.model('Deck', deckSchema);
