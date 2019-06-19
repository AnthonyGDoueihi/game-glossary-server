const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

exports.createUser = ( req, res ) => {

  const urlname = req.body.username.replace(new RegExp(" ", "g"), "-").toLowerCase();

  const user = new User ({
    username: req.body.username,
    urlname,
    email: req.body.email,
    password: req.body.password,
    isAdmin: false,
    nodeIds: [],
    tagIds: [],
    glossaryIds: []
  });

  user.save(( error, user ) => {
    if (error){
      res.send(error);
    }

    res.json(user);
  })
}

exports.authenticateUser = ( req, res ) => {
  User.findOne( { email: req.body.email }, ( error, user ) => {
    if (error){
      res.send(error)
    }else{
      if ( user.verifyPasswordSync( req.body.password ) ){
        const token = jwt.sign({ id: user._id, urlname: user.urlname }, req.app.get('secretKey'), { expiresIn: '10 days' });

        res.json({ status: "success", message: "user found!!!", data: { user:  userInfo, token: token }});

      }else{
        res.json({ status: "error", message: "Invalid email/password!!!", data: null });
      }
    }
  })
}

exports.validateUser = ( req, res ) => {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), ( error, decode ) => {
    if (error){
      res.json({ status: "error", message: "Invalid JWT key", data: null })
    }else{
      if ( decoded.urlname === req.params.urlname ){
        res.json({ status: "success", message: "Your data can edit", data: { id: decoded.id } })
      }else{
        res.json({ status: "incorrect", message: "Not your data", data: null })
      }
    }
  })
}

exports.addTagId = ( req, res ) => {
  User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { tagIds: req.body.tagId }}, (error, user) => {
    if(error){
      res.send(error);
    }

    res.send(user);
  })
}

exports.addNodeId = ( req, res ) => {
  User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { nodeIds: req.body.nodeId }}, (error, user) => {
    if(error){
      res.send(error);
    }

    res.send(user);
  })
}

exports.addGlossaryId = ( req, res ) => {
  User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { glossaryIds: req.body.glossaryId }}, (error, user) => {
    if(error){
      res.send(error);
    }

    res.send(user);
  })
}
