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

	module.exports = __webpack_require__(95);


/***/ },

/***/ 95:
/***/ function(module, exports) {

	"use strict";
	
	nemReact.config({
	    pageDomain: "",
	    pageSSLDomain: "",
	    mpagePaths: {
	        home: { relative: "/" },
	        store: { relative: "/store", required: ["storeid"] },
	        category: { relative: "/category", required: ["categoryid"] },
	        product: { relative: "/item", required: ["itemid"] },
	        search: { relative: "/search", required: ["searchword"] },
	        login: { relative: "/myaccount/login" },
	        signup: { relative: "/myaccount/signup" },
	        wish: { relative: "/cart/wishcart" },
	        coupon: { relative: "/myaccount/coupon" },
	        order: { relative: "/myaccount/order" },
	        askques: { relative: "/myaccount/askquestion" },
	        editperson: { relative: "/myaccount/editpersoninfo" },
	        logout: { relative: "/logout" },
	        forgetpass: { relative: "/myaccount/forgetpassword" },
	        cart: { relative: "/cart" }
	    },
	    dpagePaths: {}
	});

/***/ }

/******/ });
//# sourceMappingURL=nemPath.js.map