import { Schema, model } from 'mongoose';

const deckSchema = new Schema({

});

const Deck = model('Deck', deckSchema);

export default Deck;
