const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Function to add unique IDs to each card
const addUniqueIdsToFile = (inputFilePath, outputFilePath) => {
  // Read the JSON file
  const data = JSON.parse(fs.readFileSync(inputFilePath, 'utf8'));

  // Log the structure of the data
  console.log('Data structure:', JSON.stringify(data, null, 2));

  // Check if the data is an array
  if (!Array.isArray(data)) {
    throw new Error('The JSON data is not an array.');
  }

  // Add unique ID to each card
  data.forEach((card) => {
    card.id = uuidv4();
  });

  // Write the updated JSON to a new file
  fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2), 'utf8');

  console.log(`Unique IDs added to cards in ${outputFilePath}`);
};

// Example usage
const inputFilePath = path.join(__dirname, '../seeders/EotScardSeeds.json');
const outputFilePath = path.join(__dirname, './EotsCardsUIDs.json');

addUniqueIdsToFile(inputFilePath, outputFilePath);
