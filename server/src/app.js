const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

// log any incoming request in a nice predefined format
app.use(morgan('combined'))

// Parse any incoming json from the body of any incoming request
app.use(express.json())

// Serve all our public files
app.use(express.static(path.join(__dirname, '..', 'public')));

// Add the middleware planetsRouter and others on the top of our express app (chain of middleware)
app.use(planetsRouter);
app.use(launchesRouter);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})



module.exports = app;