const db = require('../config/connection');
const { Card, Deck } = require('../models');
const cardSeeds = require('./cardSeeds.json');
const deckSeeds = require('./deckSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Card', 'cards');
    await cleanDB('Deck', 'decks');

    // create deck
    const deck = await Deck.create(deckSeeds[0]);

    // create each card and collect their IDs
    let cardIds = [];
    for (const cardSeed of cardSeeds) {
      const card = await Card.create({ ...cardSeed, deck: deck._id });
      cardIds.push(card._id);
    }

    // update deck with the card IDs
    await Deck.findByIdAndUpdate(deck._id, { $set: { cards: cardIds } });

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});