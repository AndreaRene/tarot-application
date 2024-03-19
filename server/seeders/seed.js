const db = require('../config/connection');
const { Card, Deck, Spread } = require('../models');
const cardSeeds = require('./cardSeeds.js');
const deckSeeds = require('./deckSeeds.json');
const spreadSeeds = require('./spreadSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Card', 'cards');
    await cleanDB('Deck', 'decks');
    await cleanDB('Spread', 'spreads');

    await Spread.create(spreadSeeds);
    
    // create deck
    const deck = await Deck.create(deckSeeds[0]);

    // create each card and collect their IDs
    let cardIds = [];
    for (const cardSeed of cardSeeds) {
  
      //  Construct the image URL
      let imageName = cardSeed[process.env.FIELD_Y] + '.jpg'; 
      
      let imageUrl;
      if (cardSeed[process.env.FIELD_X] === process.env.PATH_1) { 
          imageUrl = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${process.env.DECK_ID}/${process.env.PATH_1}/${imageName}`;
      } else {
          imageUrl = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${process.env.DECK_ID}/${process.env.PATH_2}/${imageName}`;
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

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});