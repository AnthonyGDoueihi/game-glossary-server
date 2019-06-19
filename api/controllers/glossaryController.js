const mongoose = require('mongoose');
const Glossary = mongoose.model('Glossary');

exports.getUsersGlossaries = ( req, res ) => {
  Glossary.find({ userId: req.params.userId }, (error, glossaries) => {
    if (error){
      res.send(error);
    }

    res.json(glossaries);
  })
}

exports.getGlossary = ( req, res ) => {
  Glossary.findOne({ userId: req.params.userId, _id: req.params.glossaryId }, (error, tag) => {
    if (error){
      res.send(error);
    }

    res.json(tag);
  })
}

exports.createGlossary = ( req, res ) => {
  const urltitle = req.body.title.replace(new RegExp(" ", "g"), "-").toLowerCase();

  const newGlossary = new Glossary({
    userId: req.body.userId,
    title: req.body.title,
    urltitle,
    content : {
      style: req.body.style,
      content: req.body.content,
      header: req.body.header
    },
    parentNodeId: req.body.parentNodeId,
    tagsId: []
  });

  newGlossary.save(( error, tag ) => {
    if (error){
      res.send(error);
    }

    res.json(tag);
  })
}

// TODO Seperate this
exports.updateGlossary = ( req, res ) => {
  const urltitle = req.body.title.replace(new RegExp(" ", "g"), "-").toLowerCase();

  Glossary.findOneAndUpdate({ _id: req.params.tagId }, {
    title: req.body.title,
    urltitle,
    content : {
      style: req.body.style,
      content: req.body.content,
      header: req.body.header
    }
  }, (error, tag) => {
    if(error){
      res.send(error);
    }

    res.send(tag);
  });
}

exports.addTagId = ( req, res ) => {
  Glossary.findOneAndUpdate({ _id: req.params.glossaryId }, { $addToSet: { tagIds: req.body.tagId }}, (error, user) => {
    if(error){
      res.send(error);
    }

    res.send(user);
  })
}

exports.deleteGlossary = ( req, res ) => {
  Glossary.deleteOne({ _id: req.params.glossaryId}, (error) => {
    if(error){
      res.send(error);
    }

    res.json({
      message: "Glossary sucessfully deleted",
      _id: res.params.tagId
    })
  })
}
