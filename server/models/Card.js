const { Schema, Types, model } = require("mongoose");

const cardSchema = new Schema({
  cardName: {
    type: String,
  },
  number: {
    type: Number,
  },
  arcana: {
    type: String,
    enum: ["Major", "Minor"],
  },
  suit: {
    type: String,
  },
  cardDescription: {
    type: String,
  },
  cardMeaning: {
    type: String,
  },
  cardReverseMeaning: {
    type: String,
  },
  prominentSymbols: [
    {
      type: String,
    },
  ],
  prominentColors: [
    {
      type: String,
    },
  ],
  deck: {
    type: Types.ObjectId,
    ref: "Deck",
  },
});

const Card = model("Card", cardSchema);

module.exports = Card;
