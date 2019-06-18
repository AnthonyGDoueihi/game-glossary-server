const mongoose = require('mongoose');
const Tag = mongoose.model('Tag');

exports.getUsersTags = ( req, res ) => {
  Tag.find({ userId: req.params.userId }, (error, tags) => {
    if (error){
      res.send(error);
    }

    res.json(tags);
  })
}

// TODO req.body needs more specifics
exports.createTag = ( req, res ) => {
  const newTag = new Tag(req.body);
  newTag.save(( error, tag ) => {
    if (error){
      res.send(error);
    }

    res.json(tag);
  })
}

// TODO req.body needs more specifics
exports.updateTag = ( req, res ) => {
    Tag.findOneAndUpdate({ _id: req.params.tagId }, req.body, (error, tag) => {
      if(error){
        res.send(error);
      }

      res.send(tag);
    });
}


exports.deleteTag = ( req, res ) => {
  Tag.deleteOne({ _id: req.params.tagId}, (error) => {
    if(error){
      res.send(error);
    }

    res.json({
      message: "Tag sucessfully deleted",
      _id: res.params.tagId
    })
  })
}
