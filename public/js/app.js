
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;
  fetch(`http://localhost:3006/weather?address=${location}`).then( (response) => {
    response.json().then( (data) => {
      if (data.error) {
        return console.log(data.error);  
      }
      console.log(data.location);
      console.log(data.forecast);
    });
  });
} );