const mongoose = require('mongoose');
const Node = mongoose.model('Node');

exports.getUsersNodes = ( req, res ) => {
  Node.find({ userId: req.params.userId }, (error, nodes) => {
    if (error){
      res.send(error);
    }

    res.json(nodes);
  })
}

// TODO req.body needs more specifics
exports.createNode = ( req, res ) => {
  const newNode = new Node(req.body);
  newNode.save(( error, node ) => {
    if (error){
      res.send(error);
    }

    res.json(node);
  })
}

// TODO req.body needs more specifics
exports.updateNode = ( req, res ) => {
    Node.findOneAndUpdate({ _id: req.params.nodeId }, req.body, (error, node) => {
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
