const { Schema, Types, model } = require('mongoose');

const cardSchema = new Schema({
    cardName: {
        type: String,
    },
    number: {
        type: Number,
    },
    arcana: {
        type: String,
        enum: ['Major', 'Minor'],
    },
    deck: {
        type: Types.ObjectId,
        ref: 'Deck'
    } 
});

const Card = model('Card', cardSchema);

module.exports = Card;
