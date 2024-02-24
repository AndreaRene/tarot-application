const { Schema, model, Types } = require('mongoose');

//don't forget to add to typedefs!

const readingSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: 'User'
    },
    deck: {
        type: Types.ObjectId,
        ref: 'Deck'
    },
    spread: {
        type: Types.ObjectId,
        ref: 'Spread'
    },
    cards: [{
        type: Types.ObjectId,
        ref: 'Card'
    }],
    userNotes: [{
        noteTitle: {
            type: String
        },
        textBody: {
            type: String
        }
    }]
});

const Reading = model('Reading', readingSchema);

module.exports = Reading;