import { Schema, model } from 'mongoose';

const deckSchema = new Schema({
    deckName: {
        type: String,
    },
    description: {
        type: String,
    },
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }]
});

const Deck = model('Deck', deckSchema);

export default Deck;
