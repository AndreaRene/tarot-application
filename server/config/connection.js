const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const mongoose = require('mongoose');

// Verify that environment variables are set
console.log('TDUD_01_URI:', process.env.TDUD_01_URI);
console.log('TDSD_01_URI:', process.env.TDSD_01_URI);

if (!process.env.TDUD_01_URI || !process.env.TDSD_01_URI) {
    throw new Error('Environment variables TDUD_01_URI and TDSD_01_URI must be set');
}

// Connect to the user-related database
const dynamicDB = mongoose.createConnection(process.env.TDUD_01_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Connect to the content-related database
const staticDB = mongoose.createConnection(process.env.TDSD_01_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Pass the specific connection to each model
const User = require('../models/User')(dynamicDB);
const Deck = require('../models/Deck')(staticDB);
const Card = require('../models/Card')(staticDB);
const Spread = require('../models/Spread')(staticDB);
const Reading = require('../models/Reading')(dynamicDB);

module.exports = { dynamicDB, staticDB, User, Deck, Card, Spread, Reading };
