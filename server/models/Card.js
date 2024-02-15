const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    name: {
        type: String,
    },
    number: {
        type: Number,
    },
    arcana: {
        type: String,
        enum: ['Major', 'Minor'],
    } 
});

const Card = model('Card', cardSchema);

module.exports = Card;
