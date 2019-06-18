const mongoose = require('mongoose');

const { Schema } = mongoose;

const TagSchema = new Schema({
    userId: {
      type: String,
      required: "Tag needs a user"
    },
    name: {
      type: String,
      trim: true,
      required: "Tag needs a name"
    },
    glossaryIds: {
      type: [String]
    }
  },
  { collection: 'tag' }
)

module.exports = mongoose.model('Tag', TagSchema);
