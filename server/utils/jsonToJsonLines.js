const fs = require('fs');
const path = require('path');

function convertJsonToJsonLines(inputFile, outputFile) {
  const data = JSON.parse(fs.readFileSync(inputFile, 'utf8'));

  const output = data.map((item) => JSON.stringify(item)).join('\n');
  fs.writeFileSync(outputFile, output, 'utf8');

  console.log(`Converted ${inputFile} to ${outputFile} in JSON Lines format.`);
}

const inputFile = path.join(__dirname, '../seeders/EotScardSeeds.json');
const outputFile = path.join(__dirname, './EotSCardsLines.json');

convertJsonToJsonLines(inputFile, outputFile);
