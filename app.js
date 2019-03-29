const request = require('request');

const mapbox_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/los%20angeles.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicmF0ZWQyMjMiLCJhIjoiY2p0dWJvZ3Z5MGN6djN5cXkyb3FqNmdqdCJ9.Cl27a30lu7vxXbm-b9-Tiw&limit=1`;
request({ url: mapbox_url, json: true }, (error, response) => {
  if (error) {
    console.log(`Unable to connect to mapbox`);
  } else if(!response.body.features[0]) {
    console.log(`this place do not exist`);
  } else {
    const lat = response.body.features[0].center[1];
    const long = response.body.features[0].center[0];
    console.log(`${lat}, ${long}`);
  }
});


const url = `https://api.darksky.net/forecast/9a092f4f99fcbfa3dc1bf1c24feb3eb6/37,-112?units=si`;
request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log(`Unable to connect to darksky API`);
  } else if (response.body.error) {
    console.log(response.body.error);
  } else {
    console.log(`${response.body.daily.data[0]. summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`);
  }
});