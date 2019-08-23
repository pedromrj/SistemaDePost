const express = require('express');
const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const routes = express.Router();

routes.post('/user', UserController.store);
routes.post('/user/post', PostController.store);

module.exports = routes;