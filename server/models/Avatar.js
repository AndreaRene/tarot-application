const { Schema, model } = require('mongoose');

const avatarSchema = new Schema({
    avatarName: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    },

    objectCode: {
        type: String,
        required: true
    }
});

module.exports = (connection) => connection.model('Avatar', avatarSchema);
