const { Schema, model, Types } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: (value) => /^[A-Za-z][A-Za-z0-9_]{4,19}$/.test(value),
            message:
                'Username must start with a letter and can only contain letters, numbers, and underscores. It must be between 5 and 20 characters long.',
        },
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /.+@.+\..+/.test(value),
            message: 'Please provide a valid email address.',
        },
    },

    password: {
        type: String,
        required: true,
        validate: {
            validator: (value) =>
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?=\S+$).{8,25}$/.test(
                    value
                ),
            message:
                'Password must be between 8 and 25 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.',
        },
    },

    avatar: [
        {
            imageUrl: {
                type: String,
                required: true,
            },
            imageFileName: {
                type: String,
                required: true,
            },
        },
    ],

    avatarIcon: [
        {
            imageUrl: {
                type: String,
                required: true,
            },
            imageFileName: {
                type: String,
                required: true,
            },
        },
    ],

    discordHandle: {
        type: String,
        validate: {
            validator: (value) => /^(?!.*\.\.)[a-zA-Z0-9_.]{2,32}$/.test(value),
            message:
                'Please provide a valid Discord handle in the format username#discriminator.',
        },
    },

    displayDiscordHandle: {
        type: Boolean,
    },

    phoneNumber: {
        type: String,
        validate: {
            validator: (value) =>
                /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
                    value
                ),
            message: 'Please provide a valid phone number.',
        },
    },

    firstName: {
        type: String,
        validate: {
            validator: (value) => /^[A-Za-z]{1,25}$/.test(value),
            message:
                'Please provide a valid first name with letters only and between 1 and 25 characters long.',
        },
    },

    lastName: {
        type: String,
        validate: {
            validator: (value) => /^[A-Za-z]{1,25}$/.test(value),
            message:
                'Please provide a valid last name with letters only and between 1 and 25 characters long.',
        },
    },

    birthday: {
        type: Date,
    },

    displayBirthday: {
        type: Boolean,
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

    favoriteDecks: [
        {
            type: Types.ObjectId,
            ref: 'Deck',
        },
    ],

    favoriteSpreads: [
        {
            type: Types.ObjectId,
            ref: 'Spread',
        },
    ],

    advancedSecurity: {
        type: Boolean,
        default: false,
    },

    notifications: {
        type: Boolean,
        default: true,
    },

    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
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
