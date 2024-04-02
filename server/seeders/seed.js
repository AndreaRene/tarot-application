require('dotenv').config();
const db = require('../config/connection');
const { Card, Deck, Spread, Reading } = require('../models');
const deckSeeds = require('./deckSeeds.json');
const spreadSeeds = require('./spreadSeeds.json');

const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Card', 'cards');
    await cleanDB('Deck', 'decks');
    await cleanDB('Spread', 'spreads');
    await cleanDB('Reading', 'readings');

    await Spread.create(spreadSeeds);

    const deckIds = process.env.DECK_IDS.split(',');

    for (let i = 0; i < deckSeeds.length; i++) {
      // create deck
      const deckSeed = deckSeeds[i];
      const deckId = deckIds[i];

      const deck = await Deck.create(deckSeed);

      // load card seeds for the deck
      const cardSeeds = require(`./${deckSeed.cardSeeds}`);

      // create each card for the deck
      let cardIds = [];
      for (const cardSeed of cardSeeds) {
        // Construct the image URL
        
        let imageName = cardSeed[process.env.FIELD_Y] + '.jpg';

        let imageUrl;
        if (cardSeed[process.env.FIELD_X] === process.env.PATH_1) {
          imageUrl = `https://${process.env.BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${deckId}/${process.env.PATH_1}/${imageName}`;
        } else {
          imageUrl = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${deckId}/${process.env.PATH_2}/${imageName}`;
        }

        // add the deckId to each card
        const card = await Card.create({
          ...cardSeed,
          deck: deck._id,
          imageUrl,
        });

        cardIds.push(card._id);
      }

      // update deck with the card IDs
      await Deck.findByIdAndUpdate(deck._id, { $set: { cards: cardIds } });
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
