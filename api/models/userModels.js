const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
      type: String,
      trim: true,
      required: "Email is required."
    },
    username: {
      type: String,
      trim: true,
      required: "Username is required."
    },
    urlname: {
      type: String,
      required: "Urlname is required."
    },
    password: {
      type: String,
      required: "Password is required.",
      bcrypt: true
    },
    isAdmin: {
      type: Boolean,
      required: "You're probably not an admin."
    },
    tagIds: {
      type: [String]
    },
    nodeIds: {
      type: [String]
    },
    glossaryIds: {
      type: [String]
    }
  },
  { collection: 'user' }
)

UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('User', UserSchema);
