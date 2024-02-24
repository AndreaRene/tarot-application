const { Schema, Types, model } = require('mongoose');

const cardSchema = new Schema({
    cardName: {
        type: String,
    },
    number: {
        type: Number,
    },
    cardDescription: {
        type: String,
    },
    arcana: {
        type: String,
        enum: ['Major', 'Minor'],
    },
    suit: {
        type: String,
    },
    deck: {
        type: Types.ObjectId,
        ref: 'Deck'
    } 
});

const Card = model('Card', cardSchema);

module.exports = Card;
