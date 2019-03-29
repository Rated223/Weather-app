const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const location = process.argv[2];

if (!location) {
  console.log(`Please provide an address`);
} else {
  geocode (location, (error, {latitude, longitude, location}) => {
    if (error) {
       return console.log(`ERROR: ${error}`);
    }
    forecast (latitude, longitude, (error, {summary, temperature, precipProbability}) => {
      if (error) {
        return console.log('Error', error)
      }
      console.log(location);
      console.log(`${summary} It is currently ${temperature} degrees. There is a ${precipProbability}% chance of rain.`);
    });
  });
}

