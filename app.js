// Init weather object


const ui = new UI();

// Init storage
const storage = new Storage();
const s = storage.getLocationData();
let loc = `${s.city}, ${s.state}`;

const weather = new Weather(s.city, s.state);

// Get storage location data

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getCoordinates);

// Change location event
document.getElementById('w-change-btn'). addEventListener('click', () =>{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  loc = `${city}, ${state}`;
  weather.changeLocation(city, state);

  // Set location in LS
  storage.setLocationData(city, state);
  
  // Get and display weather
  getCoordinates();

  // Close modal
  $('#locModal').modal('hide');
});

// weather functions
function getCoordinates(){
  weather.getCoordinates()
    .then(results => {
      inputWeather(results.lat, results.lng)
    })
    .catch(err => console.log(err));
}

  
  function inputWeather(lat, lng){
    weather.getWeather(lng, lat)
    .then(results => getForecast(results))
    .catch(err => err);
  }

  function getForecast(forecast){
    weather.getForecast(forecast)
    .then(results => ui.paint(results, loc))
    .catch(err);
  }