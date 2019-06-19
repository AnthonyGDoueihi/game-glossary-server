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
  .route('/usercheck/:urlname/')
  .post(userBuilder.validateUser)

  app
    .route('/user/:userId')
    .get(/* TODO maybe a profile thing */)

  app
    .route('/user/:userId/node')
    .get(nodeBuilder.getUsersNodes)
    .post(nodeBuilder.createNode)

  app
    .route('/node/:nodeId')
    .put(nodeBuilder.updateNode )
    .delete(nodeBuilder.deleteNode )

  app
    .route('/user/:userId/tag')
    .get(tagBuilder.getUsersTags)
    .post(tagBuilder.createTag)

  app
    .route('/tag/:tagId')
    .get(tagBuilder.getTag)
    .put(tagBuilder.updateTag)
    .delete(tagBuilder.deleteTag)

  app
    .route('/user/:userId/glossary')
    .get(glossaryBuilder.getUsersGlossaries)
    .post(glossaryBuilder.createGlossary)

  app
    .route('/glossary/:glossaryId')
    .get(glossaryBuilder.getGlossary)
    .put(glossaryBuilder.updateGlossary)
    .delete(glossaryBuilder.deleteGlossary)

  app
    .route('/glossary/:glossaryId/tag')
    .get(tagBuilder.getGlossaryTags)

}

// TODO
// User Update and Delete
