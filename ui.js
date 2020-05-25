class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.temperature = document.getElementById('w-temp');
    this.whatTime = document.getElementById('w-time');
    this.windDirection = document.getElementById('w-direction');
    this.windSpeed = document.getElementById('w-speed');
    this.icon = document.getElementById('w-icon');
    this.shortForecast = document.getElementById('w-shortForecast');
    this.detailedForecast = document.getElementById('w-detailedForecast');
  }

  paint(weather, location) {

    var direction = '';
    switch(weather.windDirection){
      case 'N':
        direction = 'North';
        break;
      case 'NE':
        direction = 'North East';
        break;
      case 'S':
        direction = 'South';
        break;
      case 'SW':
        direction = 'South West';
        break;
      case 'E':
        direction = 'East';
        break;
      case 'NNW':
        direction = 'North-North West';
        break;
      case 'W':
        direction = 'West';
        break;
      case 'ESE':
        direction = 'East-South West';
        break;
      default:
        direction = 'All directions';
        break;
    }
    this.location.textContent = location;
    this.temperature.textContent = `${weather.temperature} °F`;
    this.windDirection.textContent = `Direction: ${direction}`;
    this.windSpeed.textContent = `Wind Speed: ${weather.windSpeed}`;
    this.icon.setAttribute('src', weather.icon);
    this.shortForecast.textContent = weather.shortForecast;
    this.detailedForecast.textContent = weather.detailedForecast;
  }
}