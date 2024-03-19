const { Schema, Types, model } = require("mongoose");

const cardSchema = new Schema({
  cardName: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  arcana: {
    type: String,
    enum: ["Major", "Minor"],
    required: true,
    index: true,
  },
  suit: {
    type: String,
    required: true,
    index: true,
  },
  cardDescription: {
    type: String,
    required: true,
  },
  cardUprightMeaning: {
    type: String,
    required: true,
  },
  cardReverseMeaning: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true
  },
  imageFileName: {
    type: String,
    required: true
  },
  prominentSymbols: [
    {
      type: String,
      required: true,
    },
  ],
  prominentColors: [
    {
      type: String,
      required: true,
    },
  ],
  deck: {
    type: Types.ObjectId,
    ref: "Deck",
    index: true, //need this?
    required: true
  },
});

const Card = model("Card", cardSchema);

module.exports = Card;
