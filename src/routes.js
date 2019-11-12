const express = require('express');

const UserController = require('./controllers/UserController');
const StoryController = require('./controllers/StoryController');

const routes = express.Router();

routes.post('/users', UserController.store);

routes.post('/storys', StoryController.store);

module.exports = routes;