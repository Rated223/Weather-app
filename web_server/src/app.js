const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('Hello express');
})

app.get('/help', (req, res) => {
  res.send('Help page');
})

app.get('/about', (req, res) => {
  res.send('about page');
})

app.get('/weather', (req, res) => {
  res.send('weather page');
})

app.listen(3005, () => {
  console.log('server running in port 3005');
})

