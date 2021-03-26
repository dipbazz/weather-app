import WeatherView from './view/weather';

const API = {
  ENDPOINT: 'https://api.openweathermap.org/data/2.5/weather',
  IMG_ENDPOINT: 'https://openweathermap.org/img/wn/',
  KEY: 'b45c41f3e642f4072bee82112f733a7e',
};

const form = document.getElementById('weather-form');
const temperatureToogle = document.getElementById('temperature');
const IMG_PATH = './images/';
const TEMPERATURE_TOOGLE_KEY = 'weather.toogle_state';

const getToogleState = () => {
  const storage = JSON.parse(localStorage.getItem(TEMPERATURE_TOOGLE_KEY));
  if (storage) return storage.state;

  return false;
};

temperatureToogle.checked = getToogleState();

const processWeatherData = data => {
  const obj = {};
  obj.city = data.name;
  obj.country = data.sys.country;
  obj.temperature = {
    value: Math.floor(data.main.temp),
    unit: getToogleState() ? 'F' : 'C',
  };
  obj.feels_like = Math.floor(data.main.feels_like);
  obj.humidity = {
    value: data.main.humidity,
  };
  obj.pressure = {
    value: data.main.pressure,
    unit: 'hPa',
  };
  obj.wind = data.wind;
  obj.weather = data.weather[0];
  obj.image = {
    sm: `${API.IMG_ENDPOINT}${data.weather[0].icon}.png`,
    '2x': `${API.IMG_ENDPOINT}${data.weather[0].icon}@2x.png`,
    bg: `${IMG_PATH}${data.weather[0].main.toLocaleLowerCase()}.jpg`,
  };

  return obj;
};

const getTemperatureUnit = () => {
  if (getToogleState()) return 'Imperial';

  return 'Metric';
};

const getWeatherOf = async (city, units = getTemperatureUnit()) => {
  try {
    const response = await fetch(`${API.ENDPOINT}/?q=${city}&units=${units}&appid=${API.KEY}`);
    if (response.status === 404) {
      new WeatherView('main-weather').renderError({ message: `No weather information for city: ${city}` });
      return;
    }
    const data = await response.json();
    new WeatherView('main-weather').render(processWeatherData(data));
  } catch (error) {
    new WeatherView('main-weather').renderError({ message: 'Something went wrong.' });
  }
};

// getWeatherOf('Kathmandu');

form.addEventListener('submit', e => {
  e.preventDefault();
  const { city } = form;
  getWeatherOf(city.value);

  form.reset();
});

temperatureToogle.addEventListener('change', e => {
  localStorage.setItem(TEMPERATURE_TOOGLE_KEY, JSON.stringify({ state: e.target.checked }));
});
