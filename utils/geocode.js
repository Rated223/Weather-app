const request = require('request');

const geocode = (address, callback) => {
  const mapbox_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicmF0ZWQyMjMiLCJhIjoiY2p0dWJvZ3Z5MGN6djN5cXkyb3FqNmdqdCJ9.Cl27a30lu7vxXbm-b9-Tiw&limit=1`;
  request({ url: mapbox_url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to mapbox', undefined);
    } else if (!response.body.features[0]) {
      callback('This location do not exist', undefined);
    } else {
      callback(undefined,{
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
}

module.exports = geocode;