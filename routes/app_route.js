const express = require('express');
const appRoute = express.Router();

// importing constrollers
const appController = require('../controllers/appControllers');

appRoute.get('', appController.index);

module.exports = appRoute;