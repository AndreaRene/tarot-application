const { Schema, model } = require('mongoose');

const deckSchema = new Schema({

});

const Deck = model('Deck', deckSchema);

module.exports = Deck;
