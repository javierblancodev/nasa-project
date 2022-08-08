const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

// Parse any incoming json from the body of any incoming request
app.use(express.json())

// Add the middleware planetsRouter on the top of our express app (chain of middleware)
app.use(planetsRouter);

module.exports = app;