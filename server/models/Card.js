import { Schema, model } from 'mongoose';

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
    } 
});

const Card = model('Card', cardSchema);

export default Card;
