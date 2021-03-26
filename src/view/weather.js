import moment from 'moment';

const getWindDirection = deg => {
  // https://www.campbellsci.com/blog/convert-wind-directions
  const windDirection = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'];
  return windDirection[Math.round(deg / 22.5, 0)];
};

const weatherTemplate = weather => `
  <div class="text-center">
    <h1 class="text-5xl capitalize font-normal">${weather.city}, ${weather.country}</h1>
    <h4 class="capitalize mt-2">
      ${moment().format('dddd, MMM, Do YYYY')}
    </h4>

    <div class="flex justify-center items-center">
      <div>
        <div class="font-medium">
          <p class="relative inline-block">
            <span class="text-8xl mr-2">${weather.temperature.value}</span>
            <span class="text-3xl absolute -right-2 top-0">o</span>
          </p>
          <span class="inline-block text-8xl ml-1">${weather.temperature.unit}</span>
        </div>
        <span class="font-light text-xl block">${weather.weather.description}</span>
        <span class="font-light">
          Feels like:
          <p class="font-extrabold inline-block">
            <div class="relative inline-block">
              <span class="">${weather.feels_like}</span>
              <span class=" absolute text-xs -right-2 top-0">o</span>
            </div>
            <span class="inline-block  ml-1">${weather.temperature.unit}</span>
          </p>
        </span>
      </div>
      <div>
        <img class="h-60 weather-icon" src="${weather.image['2x']}" alt="${weather.weather.description}">
      </div>
      <div class="text-left">
        <div class="text-2xl">
          <p class="mb-3">
            <span class="iconify inline-block text-3xl mr-2" data-icon="carbon:humidity" data-inline="false"></span>
            ${weather.humidity.value}% humidity
          </p>
          <p class="mb-3">
            <span class="iconify inline-block text-3xl mr-2" data-icon="bi:thermometer-half" data-inline="false"></span>
            ${weather.pressure.value} ${weather.pressure.unit}
          </p>
          <p class="mb-3">
            <span class="iconify inline-block text-3xl mr-2" data-icon="bi:wind" data-inline="false"></span>
            ${weather.wind.speed} mps ${getWindDirection(weather.wind.deg)}
          </p>
        </div>
      </div>
    </div>
  </div>
`;

const errorTemplate = error => `
  <div class="text-center">
    <h1 class="text-6xl font-bold">${error.message}</h1>
  </div>
`;

class WeatherView {
  constructor(id) {
    this.element = document.getElementById(id);
    this.template = weatherTemplate;
    this.errorTemplate = errorTemplate;
  }

  render(weather) {
    document.body.style.backgroundImage = `url(${weather.image.bg})`;
    this.element.innerHTML = this.template(weather);
  }

  renderError(error) {
    this.element.innerHTML = this.errorTemplate(error);
  }
}
export default WeatherView;
