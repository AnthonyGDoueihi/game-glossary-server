const glossaryBuilder = require('../controllers/glossaryController');
const tagBuilder = require('../controllers/tagController');
const userBuilder = require('../controllers/userController');
const nodeBuilder = require('../controllers/nodeController');


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
    .get(/* TODO search for glossaries assosiated with the tag */)
    .put(tagBuilder.updateTag)
    .delete(tagBuilder.deleteTag)

  app
    .route('/user/:userId/glossary')
    .post(/* TODO user creates a glossary page */)

  app
    .route('/glossary/:glossaryId')
    .get(/* TODO get glossary info */)
    .put( /* TODO update glossary */)
    .delete( /* TODO delete Glossary */)

  app
    .route('/glossary/:glossaryId/tag')
    .get(/* TODO maybe grab the tags per glossary this way? */)

}

// TODO
// User Update and Delete
