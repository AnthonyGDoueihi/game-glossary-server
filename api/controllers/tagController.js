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

exports.getGlossaryTags = ( req, res ) => {
  Tag.find({ glossaryIds: req.params.glossaryId }, (error, tags) => {
    if (error){
      res.send(error);
    }

    res.json(tags);
  })
}

exports.getTag = ( req, res ) => {
  Tag.findOne({ userId: req.params.userId, _id: req.params.tagId }, (error, tag) => {
    if (error){
      res.send(error);
    }

    res.json(tag);
  })
}

exports.createTag = ( req, res ) => {
  const newTag = new Tag({ userId: req.body.userId, name: req.body.name, glossaryIds: [] });
  newTag.save(( error, tag ) => {
    if (error){
      res.send(error);
    }

    res.json(tag);
  })
}

exports.updateTag = ( req, res ) => {
    Tag.findOneAndUpdate({ _id: req.params.tagId }, { name: req.body.name  }, (error, tag) => {
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

exports.addGlossaryId = ( req, res ) => {
  Tag.findOneAndUpdate({ _id: req.params.tagId }, { $addToSet: { glossaryIds: req.body.glossaryId }}, (error, user) => {
    if(error){
      res.send(error);
    }

    res.send(user);
  })
}
