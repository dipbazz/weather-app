/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/weather */ \"./src/view/weather.js\");\n\n\nconsole.log(_view_weather__WEBPACK_IMPORTED_MODULE_0__.default);\n\nconst API = {\n  ENDPOINT: 'https://api.openweathermap.org/data/2.5/weather',\n  IMG_ENDPOINT: 'https://openweathermap.org/img/wn/',\n  KEY: 'b45c41f3e642f4072bee82112f733a7e',\n};\n\nconst form = document.getElementById('weather-form');\n\nconst processWeatherData = data => {\n  const obj = {};\n  obj.name = data.name;\n  obj.main = data.main;\n  obj.wind = data.wind;\n  obj.weather = data.weather[0];\n  obj.image = {\n    \"sm\": `${API.IMG_ENDPOINT}${data.weather[0].icon}.png`,\n    \"2x\": `${API.IMG_ENDPOINT}${data.weather[0].icon}@2x.png`\n  }\n\n\n  return obj\n};\n\nconst getWeatherOf = async city => {\n  const response = await fetch(`${API.ENDPOINT}/?q=${city}&appid=${API.KEY}`);\n  const data = await response.json();\n  console.log(data);\n  return processWeatherData(data);\n};\n\n// const data = getWeatherOf('Kathmandu');\n// data.then(r => console.log(r))\n\nform.addEventListener('submit', e => {\n  e.preventDefault();\n  const { city } = form;\n  getWeatherOf(city.value).then(response => {\n    console.log(response);\n  });\n\n  form.reset();\n})\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/view/weather.js":
/*!*****************************!*\
  !*** ./src/view/weather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weatherView = weather => `\n  <div class=\"text-center\">\n    <h1 class=\"text-5xl capitalize font-light text-gray-600\">city name</h1>\n    <h4 class=\"capitalize mt-2 text-gray-500\">\n      <span class=\"\">thu, </span>\n      <span class=\"\">25 mar 2021</span>\n    </h4>\n\n    <div class=\"flex justify-center items-center\">\n      <div>\n        <div class=\"font-medium text-gray-600\">\n          <p class=\"relative inline-block\">\n            <span class=\"text-8xl\">21</span>\n            <span class=\"text-3xl absolute -right-2 top-0\">o</span>\n          </p>\n          <span class=\"inline-block text-8xl ml-1\">C</span>\n        </div>\n        <span class=\"font-light text-xl text-gray-400 block\">Cloudy rainy</span>\n        <span class=\"font-light text-gray-400\">\n          Feels like:\n          <p class=\"font-extrabold inline-block\">\n            <div class=\"relative inline-block\">\n              <span class=\"\">21</span>\n              <span class=\" absolute text-xs -right-2 top-0\">o</span>\n            </div>\n            <span class=\"inline-block  ml-1\">C</span>\n          </p>\n        </span>\n      </div>\n      <div>\n        <img class=\"h-60 weather-icon\" src=\"https://openweathermap.org/img/wn/02n@2x.png\" alt=\"image will be here\">\n      </div>\n      <div class=\"text-left\">\n        <div class=\"text-gray-600\">\n          <p class=\"mb-3\">\n            <span class=\"iconify inline-block text-2xl mr-2\" data-icon=\"carbon:humidity\" data-inline=\"false\"></span>\n            40% humidity\n          </p>\n          <p class=\"mb-3\">\n            <span class=\"iconify inline-block text-2xl mr-2\" data-icon=\"bi:thermometer-half\" data-inline=\"false\"></span>\n            734 mm Hg\n          </p>\n          <p class=\"mb-3\">\n            <span class=\"iconify inline-block text-2xl mr-2\" data-icon=\"bi:wind\" data-inline=\"false\"></span>\n            1.2 mph NW\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n`\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherView);\n\n\n//# sourceURL=webpack://weather-app/./src/view/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;