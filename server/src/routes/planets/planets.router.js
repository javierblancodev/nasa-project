const express = require('express');
const { httpGetAllPlanets } = require('./planets.controllers');

// Recall that the express Router is just a middleware that group together related routes
const planetsRouter =  express.Router();

planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;