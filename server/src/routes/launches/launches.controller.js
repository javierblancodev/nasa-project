const { getAllLaunches } = require('../../models/launches.model');


function httpGetAllLaunches(req, res) {
    // json only accept data in the form of objects ot arrays, no maps
    // the mehtod values return an iterable on the map for its values
    // This iterable can be converted into an array with the array method from
    // console.log(Array.from(launches.values()));
    return res.status(200).json(getAllLaunches())
}

module.exports = {
    httpGetAllLaunches
}