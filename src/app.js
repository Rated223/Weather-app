const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath)); // this routes gonna have priority

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather app',
    name: 'Andrew Mead'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About', 
    name: 'Andrew Mead'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    helpText: 'This is a help text gueguegue',
    name: 'Andrew Mead'
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    });
  }
  geocode (req.query.address, (error, {latitude, longitude, location} = {}) => {
    if (error) {
      return res.send({error});
    }
    forecast (latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({error});
      }
      res.send({
        forecast: forecastData,
        location,
        address: req.query.address
      });
    });
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    });
  }
  
  res.send({
    products: []
  });
});

app.get('/help/*', (req, res) => {
  res.render('help404', {
    title: '404',
    msgError: 'Error 404: help article not found',
    name: 'Andrew Mead'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    mdgError: 'Error 404: Page not found',
    name: 'Andrew Mead'
  })
});

app.listen(3006, () => {
  console.log('server running in port 3006');
})

