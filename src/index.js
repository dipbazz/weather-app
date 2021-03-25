import weatherView from './view/weather'

const API = {
  ENDPOINT: 'https://api.openweathermap.org/data/2.5/weather',
  IMG_ENDPOINT: 'https://openweathermap.org/img/wn/',
  KEY: 'b45c41f3e642f4072bee82112f733a7e',
};

const form = document.getElementById('weather-form');

const processWeatherData = data => {
  const obj = {};
  obj.city = data.name;
  obj.country = data.sys.country;
  obj.temperature = {
    value: Math.floor(data.main.temp),
    unit: 'C'
  }
  obj.feels_like = Math.floor(data.main.feels_like);
  obj.humidity =  {
    value: data.main.humidity
  }
  obj.pressure = {
    value: data.main.pressure,
    unit: 'hPa'
  }
  obj.wind = data.wind;
  obj.weather = data.weather[0];
  obj.image = {
    "sm": `${API.IMG_ENDPOINT}${data.weather[0].icon}.png`,
    "2x": `${API.IMG_ENDPOINT}${data.weather[0].icon}@2x.png`
  }


  return obj
};

const getWeatherOf = async (city, units='metric') => {
  const response = await fetch(`${API.ENDPOINT}/?q=${city}&units=${units}&appid=${API.KEY}`);
  const data = await response.json();
  console.log(data);
  return processWeatherData(data);
};

const generateWeather = city => {
  getWeatherOf(city).then(response => {
    new weatherView('main-weather').render(response);
  });
}

// generateWeather('Kathmandu');

form.addEventListener('submit', e => {
  e.preventDefault();
  const { city } = form;
  generateWeather(city.value);

  form.reset();
})
