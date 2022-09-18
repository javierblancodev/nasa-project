const { launches } = require('../../models/launches.model');


function getAllLaunches(req, res) {
    // json only accept data in the form of objects ot arrays, no maps
    // the mehtod values return an iterable on the map for its values
    // This iterable can be converted into an array with the array method from
    // console.log(Array.from(launches.values()));
    return res.status(200).json(Array.from(launches.values()))
}

module.exports = {
    getAllLaunches
}