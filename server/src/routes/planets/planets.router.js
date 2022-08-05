const express = require('express');
const { getAllPlanets } = require('./planets.controllers');

// Recall that the express Router is just a middleware that group together related routes
const planetsRouter =  express.Router();

planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;