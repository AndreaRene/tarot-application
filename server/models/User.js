const { Schema, model, Types } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        // Must start with a letter, letters can be uppercase or lowercase, can contain numbers and underscores, must be between 5 and 20 characters
        match: [
            /^[A-Za-z][A-Za-z0-9_]{4,19}$/,
            'Please choose a valid username.',
        ],
    },

    email: {
        type: String,
        required: true,
        unique: true,
        // must follow email address format
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },

    fullName: {
        type: String,
    },

    phoneNumber: {
        type: String,
        // Must match one of a variety of phone number formats, including optional country codes and different separators like spaces, dots, or dashes.
        match: [
            /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/,
            'Must be a valid phone number.',
        ],
    },

    birthday: {
        type: Date,
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
        // Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character maximum 25 characters
        match: [
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,25}$/,
            'Must be a valid password.',
        ],
    },
    useReverseCards: {
        type: Boolean,
        default: true,
    },

    readings: [
        {
            type: Types.ObjectId,
            ref: 'Reading',
        },
    ],

    decks: [
        {
            type: Types.ObjectId,
            ref: 'Deck',
        },
    ],

    theme: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
