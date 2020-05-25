class Weather {
  constructor(city, state) {
    this.apiKey = 'a81b27ad4b74442a9d1efc37392c7da5';
    this.city = city;
    this.state = state;
  }
  // Fetch longitude and Latitude from API
  async getCoordinates(){
    const query = encodeURIComponent(`${this.city}, ${this.state}`);
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${this.apiKey}&pretty=1`);

    const responseData = await response.json();
    return {
      lat: responseData.results[0].geometry.lat,
      lng: responseData.results[0].geometry.lng
    };
  }

  // Change weather location
  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
  //Fetch weather from API
  async getWeather(longitude, latitude) {
    const response = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`);

    const responseData = await response.json();
    return responseData.properties.forecast;
  }

  async getForecast(url){
    const response = await fetch(url);

    const responseData = await response.json();
    return responseData.properties.periods[0];
  } 
}