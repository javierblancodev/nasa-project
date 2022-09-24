// We can use maps instead of objects for two main reasons:
// 1. keys in maps are more flexible (can be a number, boolean or even a function)
// 2. Every key-value order preserve the order the are set in

const { httpGetAllLaunches } = require("../routes/launches/launches.controller");

// Map
const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customers: ['NASA', 'ZTM'],
    upcoming: true,
    success: true
}

// We map each launch to its flight number (consider here as the ID number or identifier)
// Map uses the reserved keyword set to add new entries to the map
launches.set(launch.flightNumber, launch);

// Map uses the reserved keyword get to retrieve an entries from the map
// launches.get(100);

function getAllLaunches() {
    return Array.from(launches.values());
}

module.exports = {
    getAllLaunches
}