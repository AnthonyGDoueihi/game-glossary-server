const mongoose = require('mongoose');
const Node = mongoose.model('Node');
const User = mongoose.model('User');
const Glossary = mongoose.model('Glossary');


exports.getUsersNodesGlossaries = ( req, res ) => {
  User.findOne({ urlname: req.params.urlname }, (error, user) => {
    if (error){
      res.send(error);
    }

    Node.find({ userId: user._id }, (error, nodes) => {
      if (error){
        res.send(error);
      }

      Glossary.find({ userId: user._id }, (error, glossaries) => {
        if (error){
          res.send(error);
        }

        res.json({
          nodes,
          glossaries
        });
      })
  })
})


}

// exports.getUsersNodes = ( req, res ) => {
//   Node.find({ userId: req.params.userId }, (error, nodes) => {
//     if (error){
//       res.send(error);
//     }
//
//     res.json(nodes);
//   })
// }

exports.createNode = ( req, res ) => {
  const newNode = new Node( { name: req.body.name, parentNodeId: req.body.parentNodeId, childrenId: [], userId: req.body.userId, isRoot: req.body.isRoot });
  newNode.save(( error, node ) => {
    if (error){
      res.send(error);
    }

    res.json(node);
  })
}

exports.updateNode = ( req, res ) => {
    Node.findOneAndUpdate({ _id: req.params.nodeId }, { name: req.body.name }, (error, node) => {
      if(error){
        res.send(error);
      }

      res.send(node);
    });
}

exports.deleteNode = ( req, res ) => {
  Node.deleteOne({ _id: req.params.nodeId}, (error) => {
    if(error){
      res.send(error);
    }

    res.json({
      message: "Node sucessfully deleted",
      _id: res.params.nodeId
    })
  })
}

exports.addChildId = ( req, res ) => {
  Node.findOneAndUpdate({ _id: req.params.nodeId }, { $addToSet: { childrenId: req.body.childId }}, (error, user) => {
    if(error){
      res.send(error);
    }

    res.send(user);
  })
}
