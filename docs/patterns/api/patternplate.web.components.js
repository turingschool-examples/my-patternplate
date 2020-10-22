window["patternplate-components"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@patternplate/webpack-entry/lib/loader.js?entry=lib%2F**%2Fdemo.js&cwd=%2FUsers%2Fholtbolt%2Fturing%2Fnomads%2Fpatternplate-spike!./");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/button/demo.js":
/*!****************************!*\
  !*** ./lib/button/demo.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  html: () => '<button class=\"cta-button\">My first button</button>',\n  css: () => `\n   .cta-button {\n      border: none;\n      border-radius: 50px;\n      font-size: 14px;\n      letter-spacing: .5px;\n      line-height: 17px;\n      text-transform: uppercase;\n      padding: 18px 40px;\n      display: inline-block;\n      background-color: #12f1fc;\n      color: #036575;\n      cursor: pointer;\n   }',\n  `,\n  default: function() {\n    const el = document.querySelector(\"button\");\n\n    let count = 0;\n    el.addEventListener(\"click\", () => {\n      el.textContent = \"Clicked \" + (++count) + \" times.\"\n    });\n  }\n}\n\n\n//# sourceURL=webpack://patternplate-%5Bname%5D/./lib/button/demo.js?");

/***/ }),

/***/ "./lib/text/demo.js":
/*!**************************!*\
  !*** ./lib/text/demo.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  html: () => '<p class=\"medium-text\">Over 91% of graduates are working as professional software developers. Another 4% are working in related technical roles and 2% are teaching programming.</p>',\n  css: () => `\n  .medium-text {\n    font-family: sans-serif;\n    color: #929292;\n    max-width: 60%;\n    padding: 0 1rem;\n    font-size: 16px;\n  }`,\n  default: function() {\n    var el = document.querySelector(\"[data-hello-world]\");\n    var count = 0;\n    el.addEventListener(\"click\", function(e) {\n      e.target.textContent = \"Hello World, \" + (++count);\n    });\n  }\n};\n\n\n//# sourceURL=webpack://patternplate-%5Bname%5D/./lib/text/demo.js?");

/***/ }),

/***/ "./node_modules/@patternplate/webpack-entry/lib/loader.js?entry=lib%2F**%2Fdemo.js&cwd=%2FUsers%2Fholtbolt%2Fturing%2Fnomads%2Fpatternplate-spike!./":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@patternplate/webpack-entry/lib/loader.js?entry=lib%2F**%2Fdemo.js&cwd=%2FUsers%2Fholtbolt%2Fturing%2Fnomads%2Fpatternplate-spike ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports['lib/button/demo.js'] = __webpack_require__(/*! ./lib/button/demo.js */ \"./lib/button/demo.js\");\nmodule.exports['lib/button/demo.js'].js = function() { return __webpack_require__(/*! ./node_modules/raw-loader!./lib/button/demo.js */ \"./node_modules/raw-loader/index.js!./lib/button/demo.js\"); };\nmodule.exports['lib/text/demo.js'] = __webpack_require__(/*! ./lib/text/demo.js */ \"./lib/text/demo.js\");\nmodule.exports['lib/text/demo.js'].js = function() { return __webpack_require__(/*! ./node_modules/raw-loader!./lib/text/demo.js */ \"./node_modules/raw-loader/index.js!./lib/text/demo.js\"); };\n\n//# sourceURL=webpack://patternplate-%5Bname%5D/./node_modules/@patternplate/webpack-entry/lib/loader.js?");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./lib/button/demo.js":
/*!******************************************************!*\
  !*** ./node_modules/raw-loader!./lib/button/demo.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"module.exports = {\\n  html: () => '<button class=\\\"cta-button\\\">My first button</button>',\\n  css: () => `\\n   .cta-button {\\n      border: none;\\n      border-radius: 50px;\\n      font-size: 14px;\\n      letter-spacing: .5px;\\n      line-height: 17px;\\n      text-transform: uppercase;\\n      padding: 18px 40px;\\n      display: inline-block;\\n      background-color: #12f1fc;\\n      color: #036575;\\n      cursor: pointer;\\n   }',\\n  `,\\n  default: function() {\\n    const el = document.querySelector(\\\"button\\\");\\n\\n    let count = 0;\\n    el.addEventListener(\\\"click\\\", () => {\\n      el.textContent = \\\"Clicked \\\" + (++count) + \\\" times.\\\"\\n    });\\n  }\\n}\\n\"\n\n//# sourceURL=webpack://patternplate-%5Bname%5D/./lib/button/demo.js?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./lib/text/demo.js":
/*!****************************************************!*\
  !*** ./node_modules/raw-loader!./lib/text/demo.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"module.exports = {\\n  html: () => '<p class=\\\"medium-text\\\">Over 91% of graduates are working as professional software developers. Another 4% are working in related technical roles and 2% are teaching programming.</p>',\\n  css: () => `\\n  .medium-text {\\n    font-family: sans-serif;\\n    color: #929292;\\n    max-width: 60%;\\n    padding: 0 1rem;\\n    font-size: 16px;\\n  }`,\\n  default: function() {\\n    var el = document.querySelector(\\\"[data-hello-world]\\\");\\n    var count = 0;\\n    el.addEventListener(\\\"click\\\", function(e) {\\n      e.target.textContent = \\\"Hello World, \\\" + (++count);\\n    });\\n  }\\n};\\n\"\n\n//# sourceURL=webpack://patternplate-%5Bname%5D/./lib/text/demo.js?./node_modules/raw-loader");

/***/ })

/******/ });