import { Schema, Types, model } from 'mongoose';

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

export default Card;
