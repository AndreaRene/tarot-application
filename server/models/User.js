const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    // must follow email address format
    match: [/.+@.+\..+/, "Must match an email address!"],
  },

  phoneNumber: {
    type: String,
    // Must match one of a variety of phone number formats, including optional country codes and different separators like spaces, dots, or dashes.
    match: [
      /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Must be a valid phone number.",
    ],
  },

  birthday: {
    type: String,
    // Must be date format YYYY-MM-DD
    match: [/^\d{4}-\d{2}-\d{2}$/, "Must be a valid date."],
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
    // Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character
    match: [
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "Must be a valid password.",
    ],
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
