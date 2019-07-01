const glossaryBuilder = require('../controllers/glossaryController');
const tagBuilder = require('../controllers/tagController');
const userBuilder = require('../controllers/userController');
const nodeBuilder = require('../controllers/nodeController');

// TODO REDO ALL OF THIS IN CORRECT ORDER MAKE A LIST OF ALL ROUTES
module.exports = (app) => {
  app
    .route('/signup')
    .post(userBuilder.createUser)

  app
    .route('/login')
    .post(userBuilder.authenticateUser)

  app
    .route('/usercheck/:urlname')
    .post(userBuilder.validateUser)

  app
    .route('/nodesystem/:urlname')
    .get(nodeBuilder.getUsersNodesGlossaries)


  // app
  // .route('/user/:userId')
  // .get(/* TODO maybe a profile thing */)

  // app
    // .route('/newnode/:userId')
    // .get(nodeBuilder.getUsersNodes) // not in use atm
    // .post(nodeBuilder.createNode) // not in use atm

  // app
    // .route('/node/:nodeId')
    // .put(nodeBuilder.updateNode ) // not in use atm
    // .delete(nodeBuilder.deleteNode ) // not in use atm

  // app
    // .route('/user/:userId/tag')
    // .get(tagBuilder.getUsersTags) // not in use atm
    // .post(tagBuilder.createTag) // not in use atm

  // app
    // .route('/tag/:tagId')
    // .get(tagBuilder.getTag) // not in use atm
    // .put(tagBuilder.updateTag) // not in use atm
    // .delete(tagBuilder.deleteTag) // not in use atm

  // app
    // .route('/user/:userId/glossary')
    // .get(glossaryBuilder.getUsersGlossaries) // not in use atm
    // .post(glossaryBuilder.createGlossary) // not in use atm

  // app
    // .route('/glossary/:glossaryId')
    // .get(glossaryBuilder.getGlossary) // not in use atm
    // .put(glossaryBuilder.updateGlossary) // not in use atm
    // .delete(glossaryBuilder.deleteGlossary) // not in use atm

  // app
    // .route('/glossary/:glossaryId/tag')
    // .get(tagBuilder.getGlossaryTags) // not in use atm

}

// TODO
// User Update and Delete
