const { Schema, Types, model } = require('mongoose');

const cardSchema = new Schema({
    cardName: {
        type: String,
        required: true
    },
    number: {
        type: Number
    },
    arcana: {
        type: String,
        enum: ['Major', 'Minor'],
        required: true,
        index: true
    },
    suit: {
        type: String,
        required: true,
        index: true
    },
    cardDescription: {
        type: String,
        required: true
    },
    meanings: [
        {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            keywords: [
                {
                    type: String,
                    required: true
                }
            ]
        }
    ],
    prominentSymbols: [
        {
            symbol: {
                type: String,
                required: true
            },
            meaning: {
                type: String,
                required: true
            }
        }
    ],
    prominentColors: [
        {
            color: {
                type: String,
                required: true
            },
            meaning: {
                type: String,
                required: true
            }
        }
    ],
    deck: {
        type: Types.ObjectId,
        ref: 'Deck',
        index: true,
        required: true
    },

    objectCode: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    }
});

module.exports = (connection) => connection.model('Card', cardSchema);
