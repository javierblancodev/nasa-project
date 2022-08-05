const planets = require('../../models/planets.model');

function getAllPlanets(req, res) {
    // EXpress does not use the return keyword, only the response part, however, though optional, it is a good idea to include it to prevent unexpected bugs.
    // Remember that if we run two lines of code where two different headers are set, an error will occurs since express lock in the first header that it encounters
    // The return keyword is therefore only used to terminate the function
    return res.status(200).json(planets);
}

module.exports = {
    getAllPlanets
}