const mongoose = require('mongoose');

const { Schema } = mongoose;

const NodeSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: "Node needs a name"
    },
    parentNodeId: {
      type: String
    },
    childrenId: {
      type: [String]
    },
    userId: {
      type: String,
      required: "Node needs a user"
    },
    isRoot: {
      type: Boolean,
      required: "Node is probably not the root"
    }
  },
  { collection: 'node' }
)

module.exports = mongoose.model('Node', NodeSchema);
