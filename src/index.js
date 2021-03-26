import WeatherView from './view/weather';

const API = {
  ENDPOINT: 'https://api.openweathermap.org/data/2.5/weather',
  IMG_ENDPOINT: 'https://openweathermap.org/img/wn/',
  KEY: 'b45c41f3e642f4072bee82112f733a7e',
};

const form = document.getElementById('weather-form');
const temperatureToogleBtn = document.getElementById('temperature');
const IMG_PATH = './images/';
const TEMPERATURE_TOOGLE_KEY = 'weather.toogle_state';
const WEATHER_DATA_KEY = 'weather.weather';

const temperatureToogle = (() => {
  const getState = () => {
    const storage = JSON.parse(localStorage.getItem(TEMPERATURE_TOOGLE_KEY));
    if (storage) return storage.state;

    return false;
  }

  const setState = event => {
    localStorage.setItem(TEMPERATURE_TOOGLE_KEY, JSON.stringify({ state: event.target.checked }))
  }

  const tempUnit = () => {
    if(getState()) return 'F'

    return 'C'
  }

  const fahrenheitToCelsius = (value) => (Math.round(((value - 32) * 5/9) * 100) / 100)

  const celsiusToFahrenheit = (value) => (Math.round(((value * 9/5) + 32) * 100) / 100)

  return { getState, setState, tempUnit, fahrenheitToCelsius,  celsiusToFahrenheit}
})();

temperatureToogleBtn.checked = temperatureToogle.getState();

const weatherData = (() => {
  const set = data => {
    localStorage.setItem(WEATHER_DATA_KEY, JSON.stringify(data))
  }

  const get = () => {
    return JSON.parse(localStorage.getItem(WEATHER_DATA_KEY))
  }

  return {set, get};

})();


const processWeatherData = data => {
  const obj = {};
  obj.city = data.name;
  obj.country = data.sys.country;
  obj.temperature = {
    value: Math.round(data.main.temp * 100) / 100,
    unit: temperatureToogle.tempUnit(),
  };
  obj.feels_like = Math.round(data.main.feels_like * 100) / 100;
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

  weatherData.set(obj);

  return obj;
};

const getTemperatureUnit = () => {
  if (temperatureToogle.getState()) return 'Imperial';

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

getWeatherOf('Kathmandu');

form.addEventListener('submit', e => {
  e.preventDefault();
  const { city } = form;
  getWeatherOf(city.value);

  form.reset();
});

temperatureToogleBtn.addEventListener('change', e => {
  temperatureToogle.setState(e);
  const data = weatherData.get();
  data.temperature.unit = temperatureToogle.tempUnit();
  if(temperatureToogle.getState()) {
    data.temperature.value = temperatureToogle.celsiusToFahrenheit(data.temperature.value)
  }else {
    data.temperature.value = temperatureToogle.fahrenheitToCelsius(data.temperature.value)
  }
  weatherData.set(data);
  new WeatherView('main-weather').render(data);
});
