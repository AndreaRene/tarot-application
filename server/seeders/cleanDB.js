const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName) => {
  const collectionName = models[modelName].collection.collectionName;
  const modelExists = await db.listCollections({ name: collectionName }).toArray();

  if (modelExists.length) {
    await db.dropCollection(collectionName);
  }
};
