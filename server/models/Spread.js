const { Schema, model } = require('mongoose');

const spreadSchema = new Schema({
  spreadName: {
    type: String,
  },
  spreadDescription: {
    type: String
  },
  spreadImage: {
    type: String
  },
  numCards: {
    type: Number,
  },
  positions: [String],
  spreadTips: [String],
  tags: [String],
});

const Spread = model('Spread', spreadSchema);

module.exports = Spread;
