// We can use maps instead of objects for two main reasons:
// 1. keys in maps are more flexible (can be a number, boolean or even a function)
// 2. Every key-value order preserve the order the are set in

let latestFlightNumber = 100

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

function addNewLaunch(launch) {
    // increase the latest flight number recorded by 1
    latestFlightNumber++;
    // set the new launch into the collection/map of launches
    // the first parameter is the flight number and the second is the launch object where the fligh number must first to be assigned to (object assign do exactly this: it takes the second argument - the new property - and assign it to the first argument - the launch)
    launches.set(latestFlightNumber, Object.assign(launch, {
        flightNumber: latestFlightNumber,
        customers: ['ZTM', 'NASA'],
        upcoming: true,
        success: true
    }))
}

// Map uses the reserved keyword get to retrieve an entries from the map
// launches.get(100);

function getAllLaunches() {
    return Array.from(launches.values());
}

module.exports = {
    getAllLaunches,
    addNewLaunch
}