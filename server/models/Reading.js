const { Schema, model } = require('mongoose');

const readingSchema = new Schema({

});

const Reading = model('Reading', readingSchema);

module.exports = Reading;