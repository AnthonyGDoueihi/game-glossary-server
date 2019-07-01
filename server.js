const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const MONGO_PASSWORD = process.env.GAME_GLOSSARY_MONGO_PASSWORD;
const SECRET_KEY = process.env.GAME_GLOSSARY_SECRET_KEY;

global.Glossary = require('./api/models/glossaryModels');
global.Node = require('./api/models/nodeModels');
global.Tag = require('./api/models/tagModels');
global.User = require('./api/models/userModels');

const routes = require('./api/routes/glossaryRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  `mongodb+srv://mainUser:${MONGO_PASSWORD}@cluster0-eolnh.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
)

const PORT = process.env.PORT || 4000;

const server = express();
server.set('secretKey', SECRET_KEY);

server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

routes(server);

server.listen(PORT);

server.use((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`})
})

console.log(`Server started on port http://localhost:${PORT}/`)
