const { Schema, model } = require('mongoose');

const themeSchema = new Schema({
    value: {
        type: String,
        required: true
    },

    label: {
        type: String,
        required: true
    }
});

module.exports = (connection) => connection.model('Theme', themeSchema);
