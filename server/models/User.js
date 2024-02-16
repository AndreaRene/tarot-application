const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password:{
        type: String,
    },
    useReverseCards: {
        type: Boolean,
        default: true,
    }
});

const User = model('User', userSchema);

module.exports = User;
