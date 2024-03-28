const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5,
    maxlength: 20,
    // Must start with a letter, letters can be uppercase or lowercase, can contain numbers and underscores
    validate: {
      validator: (value) => /^[A-Za-z][A-Za-z0-9_]{4,19}$/.test(value),
      message: "Please choose a valid username.",
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => /.+@.+\..+/.test(value),
      message: "Must match an email address!",
    },
  },

  phoneNumber: {
    type: String,
    validate: {
      validator: (value) => /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value),
      message: "Must be a valid phone number.",
    },
  },

  birthday: {
    type: Date,
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 25,
    // Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character
    validate: {
      validator: (value) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,25}$/.test(value),
      message: "Must be a valid password.",
    },
  },
  useReverseCards: {
    type: Boolean,
    default: true,
  },

  readings: [
    {
      type: Types.ObjectId,
      ref: "Reading",
    },
  ],

  decks: [
    {
      type: Types.ObjectId,
      ref: "Deck",
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
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
