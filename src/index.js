import './scss/style.scss';

const API = {
  ENDPOINT: 'https://api.openweathermap.org/data/2.5/weather',
  IMG_ENDPOINT: 'https://openweathermap.org/img/wn/',
  KEY: 'b45c41f3e642f4072bee82112f733a7e',
};

const form = document.getElementById('weaterh-form');

const processWeatherData = data => {
  const obj = {};
  obj.name = data.name;
  obj.temp = data.main.temp;
  obj.temp_max = data.main.temp_max;
  obj.temp_min = data.main.temp_min;
  obj.pressure = data.main.pressure;
  obj.humidity = data.main.humidity;
  obj.weather = data.weather[0].main;
  obj.image_url = `${API.IMG_ENDPOINT}${data.weather[0].icon}.png`


  return obj
};

const getWeatherOf = async city => {
  const response = await fetch(`${API.ENDPOINT}/?q=${city}&appid=${API.KEY}`);
  const data = await response.json();
  console.log(data);
  return processWeatherData(data);
};

// const data = getWeatherOf('Kathmandu');
// data.then(r => console.log(r))

form.addEventListener('submit', e => {
  e.preventDefault();
  const { city } = form;
  getWeatherOf(city.value).then(response => {
    console.log(response);
  });

  form.reset();
})
