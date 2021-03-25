/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const API = {\n  ENDPOINT: 'https://api.openweathermap.org/data/2.5/weather',\n  IMG_ENDPOINT: 'https://openweathermap.org/img/wn/',\n  KEY: 'b45c41f3e642f4072bee82112f733a7e',\n};\n\nconst form = document.getElementById('weather-form');\n\nconst processWeatherData = data => {\n  const obj = {};\n  obj.name = data.name;\n  obj.temp = data.main.temp;\n  obj.temp_max = data.main.temp_max;\n  obj.temp_min = data.main.temp_min;\n  obj.pressure = data.main.pressure;\n  obj.humidity = data.main.humidity;\n  obj.weather = data.weather[0].main;\n  obj.image_url = `${API.IMG_ENDPOINT}${data.weather[0].icon}.png`\n\n\n  return obj\n};\n\nconst getWeatherOf = async city => {\n  const response = await fetch(`${API.ENDPOINT}/?q=${city}&appid=${API.KEY}`);\n  const data = await response.json();\n  console.log(data);\n  return processWeatherData(data);\n};\n\n// const data = getWeatherOf('Kathmandu');\n// data.then(r => console.log(r))\n\nform.addEventListener('submit', e => {\n  e.preventDefault();\n  const { city } = form;\n  getWeatherOf(city.value).then(response => {\n    console.log(response);\n  });\n\n  form.reset();\n})\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;