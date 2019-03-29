const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/9a092f4f99fcbfa3dc1bf1c24feb3eb6/${latitude},${longitude}?units=si`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback(`Unable to connect to darksky API`, undefined);
    } else if (response.body.error) {
      callback(response.body.error, undefined);
    } else {
      callback(undefined, {
        summary: response.body.daily.data[0].summary,
        temperature: response.body.currently.temperature,
        PrecipProbability: response.body.currently.precipProbability

      });
    }
  });
}

module.exports = forecast;

