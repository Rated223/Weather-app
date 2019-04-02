const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicmF0ZWQyMjMiLCJhIjoiY2p0dWJvZ3Z5MGN6djN5cXkyb3FqNmdqdCJ9.Cl27a30lu7vxXbm-b9-Tiw&limit=1`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to mapbox', undefined);
    } else if (!response.body.features[0]) {
      callback('This location do not exist', undefined);
    } else {
      const {center, place_name} = response.body.features[0];
      callback(undefined,{
        latitude: center[1],
        longitude: center[0],
        location: place_name
      });
    }
  });
}

module.exports = geocode;