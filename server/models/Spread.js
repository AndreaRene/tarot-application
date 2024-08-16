const { Schema, model } = require('mongoose');

const spreadSchema = new Schema({
    spreadName: {
        type: String,
        required: true
    },
    spreadDescription: {
        type: String
    },
    spreadImage: {
        type: String
    },
    numCards: {
        type: Number,
        required: true
    },
    positions: [
        {
            positionNumber: {
                type: Number,
                required: true
            },
            positionDescription: {
                type: String,
                required: true
            },
            positionDetails: {
                type: String
            },
            positionCoordinates: {
                x: Number,
                y: Number
            }
        }
    ],
    spreadTips: [String],
    tags: [String]
});

module.exports = (connection) => connection.model('spread', spreadSchema);
