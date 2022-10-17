const { getAllLaunches, addNewLaunch } = require('../../models/launches.model');


function httpGetAllLaunches(req, res) {
    // json only accept data in the form of objects ot arrays, no maps
    // the mehtod values return an iterable on the map for its values
    // This iterable can be converted into an array with the array method from
    // console.log(Array.from(launches.values()));
    return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    // Check for any field missing
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property'
        });
    }

    // Check for a valid date
    launch.launchDate = new Date(launch.launchDate);
    
    //Option 1:
    if(launch.launchDate.toString() === 'Invalid Date') {
        return res.status(400).json({
            error: 'Invalid launch date'
        })
    }

    //Option 2:
    // if(isNaN(launch.launchDate)) { // new Date is tried to be converted into a number, which is the timestamp from 1970
    //     res.status(400).json({
    //         error: 'Invalid launch date'
    //     })
    // }


    // Convert whatever datatype for date we get from the request into a date object
    launch.launchDate = new Date(launch.launchDate)

    addNewLaunch(launch);
    return res.status(201).json(launch)
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
}