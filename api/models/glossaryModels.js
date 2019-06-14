const mongoose = require('mongoose');

const { Schema } = mongoose;

const GlossarySchema = new Schema({
    title: {
      type: String,
      required: "Glossary needs a title."
    },
    content: {
      type: [Map]

      // Will most of the info for the page
      // Content Map {
        // type: image or text,
        // content: link or text,
        // header: subheader or header
      // }

    },
    userId: {
      type: String,
      required: "Glossary needs a user"
    },
    parentNodeId: {
      type: String,
      required: "Glossary must have a parent node."
    },
    tagIds: {
      type: [String]
    }
  },
  { collection: 'glossary' }
);

const NodeSchema = new Schema({
    parentNodeId: {
      type: String
    },
    childrenId: {
      type: [String]
    },
    userId: {
      type: String,
      required: "Node needs a user"
    }
  },
  { collection: 'node' }
)

const TagSchema = new Schema({
    userId: {
      type: String,
      required: "Tag needs a user"
    },
    name: {
      type: String,
      required: "Tag needs a name"
    },
    glossaryIds: {
      type: [String]
    }
  },
  { collection: 'tag' }
)

const UserSchema = new Schema({
    email: {
      type: String,
      required: "Email is required."
    },
    username: {
      type: String,
      required: "Username is required."
    },
    urlname: {
      type: String,
      required: "Urlname is required."
    },
    passwordEncrypt: {
      type: String,
      required: "Password is required."
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

module.exports = mongoose.model('Glossary', GloassarySchema);
module.exports = mongoose.model('Node', NodeSchema);
module.exports = mongoose.model('Tag', TagSchema);
module.exports = mongoose.model('User', UserSchema);
