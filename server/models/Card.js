const { Schema, model } = require('mongoose');

const cardSchema = new Schema({

});

const Card = model('Card', cardSchema);

module.exports = Card;
