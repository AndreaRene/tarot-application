const { Schema, model } = require('mongoose');

const spreadSchema = new Schema({
  spreadName: {
    type: String,
  },
  spreadMeaning: {
    type: String
  },
  numCards: {
    type: Number,
  },
  positions: [String],
});

const Spread = model('Spread', spreadSchema);

module.exports = Spread;
