/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(86);


/***/ },

/***/ 86:
/***/ function(module, exports) {

	"use strict";
	
	var _jsPaths;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	nemReact.config({
	        jsUrl: "./js",
	        jsPaths: (_jsPaths = {
	                homeLib: { path: "/Scripts/netw.react/homeLib", asyn: false },
	                home: { path: "/Scripts/netw.react/home", defer: true },
	                homeFlash: { path: "/Scripts/netw.react/home.flash", defer: true },
	                homeHotSale: { path: "/Scripts/netw.react/home.hotsale", defer: true },
	
	                questionLib: { path: "/Scripts/netw.react/questionLib", asyn: false },
	                question: { path: "/Scripts/netw.react/question", defer: true },
	
	                loginLib: { path: "/Scripts/netw.react/loginLib", asyn: false },
	                login: { path: "/Scripts/netw.react/login", defer: true },
	
	                categoryLib: { path: "/Scripts/netw.react/categoryLib", asyn: false },
	                category: { path: "/Scripts/netw.react/category", defer: true },
	
	                subcategoryLib: { path: "/Scripts/netw.react/subcategoryLib", asyn: false },
	                subcategory: { path: "/Scripts/netw.react/subcategory", defer: true },
	
	                searchResultsLib: { path: "/Scripts/netw.react/searchResultsLib", asyn: false },
	                searchResults: { path: "/Scripts/netw.react/searchResults", defer: true },
	
	                signupLib: { path: "/Scripts/netw.react/signupLib", asyn: false },
	                signup: { path: "/Scripts/netw.react/signup", defer: true }
	
	        }, _defineProperty(_jsPaths, "loginLib", { path: "/Scripts/netw.react/loginLib", asyn: false }), _defineProperty(_jsPaths, "login", { path: "/Scripts/netw.react/login", defer: true }), _defineProperty(_jsPaths, "prodpageLib", { path: "/Scripts/netw.react/prodpageLib", asyn: false }), _defineProperty(_jsPaths, "prodpage", { path: "/Scripts/netw.react/prodpage", defer: true }), _jsPaths)
	});

/***/ }

/******/ });
//# sourceMappingURL=nemConfig.js.map