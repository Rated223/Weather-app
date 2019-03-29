const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/9a092f4f99fcbfa3dc1bf1c24feb3eb6/${latitude},${longitude}?units=si`;
  request({ url, json: true }, (error, response) => {
    const {error:error2, daily, currently} = response.body;
    if (error) {
      callback(`Unable to connect to darksky API`, undefined);
    } else if (error2) {
      callback(error2, undefined);
    } else {
      callback(undefined, {
        summary: daily.data[0].summary,
        temperature: currently.temperature,
        precipProbability: currently.precipProbability

      });
    }
  });
}

module.exports = forecast;

