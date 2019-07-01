const mongoose = require('mongoose');

const { Schema } = mongoose;

const ContentSchema = new Schema({
  style: {
    type: String,
    require: "Needs a style, image or text"
  },
  content: {
    type: String,
  },
  header: {
    type: String,
    require: "Needs a header"
  }
});


const GlossarySchema = new Schema({
    title: {
      type: String,
      trim: true,
      required: "Glossary needs a title."
    },
    urltitle:{
      type: String,
      required: "Glossary needs a title."
    },
    content: [ContentSchema],
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

module.exports = mongoose.model('Glossary', GlossarySchema);
