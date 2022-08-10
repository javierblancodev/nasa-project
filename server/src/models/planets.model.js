const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

// Filter out those planets that are habitable

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
            && planet['koi_insol'] > 0.36 
            && planet['koi_insol'] < 1.11
            && planet['koi_prad'] < 1.6;
}


// fs.createReadStream('kepler_data.csv')
//     .on('data', (data) => {
//         results.push(data);
//    })
//    .on('error', (err) => {
//        console.log(err);
//    })
//    .on('end', () => {
//        console.log(results);
//        //Since the createReadStream method deal with raw data, it will return an array of buffers, i.e. data represented in bytes
//        console.log('Done!');
//    });

    // So we still need to parse our data
    // That is where our parse function comes in, this parse funcion is made to be used with streams like our readable streams
    //We can pipe or createReadStream function with our parse function like so

fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true
    }))
    .on('data', (data) => {
        if (isHabitablePlanet(data)) {
            habitablePlanets.push(data);
        }
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(habitablePlanets.map((planet) => {
            return planet.kepler_name;
        }));
        console.log(`${habitablePlanets.length} habitable planets found!`);
    });

module.exports = {
    planets: habitablePlanets
}