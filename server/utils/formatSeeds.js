const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const inputFilePath = path.join(__dirname, '../seeders/RWScardSeeds.json');
const intermediateFilePath = path.join(__dirname, './RWSCardsUIDs.json');
const outputFilePath = path.join(__dirname, './RWSFormattedCards.json');

// Function to add unique IDs to each card if missing
const addUniqueIdsToFile = (data) => {
  // Add unique ID to each card if it doesn't already have one
  data.forEach((card) => {
    if (!card.id) {
      card.id = uuidv4();
    }
  });

  return data;
};

// Function to convert JSON to JSON Lines format
const convertJsonToJsonLines = (data, outputFile) => {
  const output = data.map((item) => JSON.stringify(item)).join('\n');
  fs.writeFileSync(outputFile, output, 'utf8');

  console.log(`Converted to ${outputFile} in JSON Lines format.`);
};

// Main function to read input file, process data, and write output files
const processJsonFile = (
  inputFilePath,
  intermediateFilePath,
  outputFilePath
) => {
  // Read the JSON file
  const data = JSON.parse(fs.readFileSync(inputFilePath, 'utf8'));

  // Check if the data is an array
  if (!Array.isArray(data)) {
    throw new Error('The JSON data is not an array.');
  }

  // Add unique IDs to cards if missing
  const updatedData = addUniqueIdsToFile(data);

  // Write the updated JSON to a new intermediate file
  fs.writeFileSync(
    intermediateFilePath,
    JSON.stringify(updatedData, null, 2),
    'utf8'
  );
  console.log(`Unique IDs added to cards in ${intermediateFilePath}`);

  // Convert the updated JSON to JSON Lines format
  convertJsonToJsonLines(updatedData, outputFilePath);

  // Delete the intermediate file
  fs.unlinkSync(intermediateFilePath);
  console.log(`Deleted intermediate file: ${intermediateFilePath}`);
};

processJsonFile(inputFilePath, intermediateFilePath, outputFilePath);
