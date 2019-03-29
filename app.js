const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

geocode ('Los Angeles', (error, data) => {
  if (error) {
     return console.log(`ERROR: ${error}`);
  }
  forecast (data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log('Error', error)
    }
    console.log(data.location);
    console.log(`${forecastData.summary} It is currently ${forecastData.temperature} degrees. There is a${forecastData.PrecipProbability}% chance of rain.`);
  });
});

