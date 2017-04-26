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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(62);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	//var Dispatcher = require('flux').Dispatcher;
	
	//module.exports = new Dispatcher();
	module.exports = nemReact['flux'];

/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */
	
	"use strict";
	
	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};
	
	module.exports = keyMirror;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function (n) {
	  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function (type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events) this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler)) return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++) {
	      listeners[i].apply(this, args);
	    }
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function (type, listener) {
	  var m;
	
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  if (!this._events) this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function (type, listener) {
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function (type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type]) return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener || isFunction(list.listener) && list.listener === listener) {
	    delete this._events[type];
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0) return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function (type) {
	  var key, listeners;
	
	  if (!this._events) return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length) {
	      this.removeListener(type, listeners[listeners.length - 1]);
	    }
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function (type) {
	  var ret;
	  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function (type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function (emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*import actions*/
	var HomeBannerSlideAction = __webpack_require__(63);
	var HomeShopUsAction = __webpack_require__(65);
	var HomeLifeProjectAction = __webpack_require__(67);
	var HomeProdAction = __webpack_require__(69);
	var FlashAction = __webpack_require__(71);
	var AdvEventAction = __webpack_require__(73);
	var HomeCategoryMapAction = __webpack_require__(75);
	
	/*import stores*/
	/* Home Stores import */
	var HomeBannerSlideStore = __webpack_require__(76);
	var HomeShopUsStore = __webpack_require__(77);
	var HomeLifeProjectStore = __webpack_require__(78);
	var HomeProdStore = __webpack_require__(79);
	var FlashStore = __webpack_require__(80);
	var AdvEventStore = __webpack_require__(81);
	var HomeCateMapStore = __webpack_require__(82);
	
	/*declare actions*/
	nemReact.setModules('HomeBannerSlideAction', HomeBannerSlideAction);
	nemReact.setModules('HomeShopUsAction', HomeShopUsAction);
	nemReact.setModules('HomeLifeProjectAction', HomeLifeProjectAction);
	nemReact.setModules('HomeProdAction', HomeProdAction);
	nemReact.setModules('FlashAction', FlashAction);
	nemReact.setModules('AdvEventAction', AdvEventAction);
	nemReact.setModules('HomeCategoryMapAction', HomeCategoryMapAction);
	
	/*declare stores*/
	nemReact.setModules('HomeBannerSlideStore', HomeBannerSlideStore);
	nemReact.setModules('HomeShopUsStore', HomeShopUsStore);
	nemReact.setModules('HomeLifeProjectStore', HomeLifeProjectStore);
	nemReact.setModules('HomeProdStore', HomeProdStore);
	nemReact.setModules('FlashStore', FlashStore);
	nemReact.setModules('AdvEventStore', AdvEventStore);
	nemReact.setModules('HomeCateMapStore', HomeCateMapStore);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var HomeBannerSlideConstants = __webpack_require__(64);
	
	var BannerSlideMethods = HomeBannerSlideConstants.BannerSlideMethods;
	
	// var mainFcousLists = [
	//     {
	//         link: "http://www.newegg.com.tw/activity/20160502_London01",
	//         imgUrl: "https://negcdn.azureedge.net/www/pic/advimage/0/3/19/1452/StartImg.jpg"
	//     },
	//     {
	//         link: "http://www.newegg.com.tw/activity/20160601_YearCelebration",
	//         imgUrl: "https://negcdn.azureedge.net/www/pic/advimage/1/3/17/1680/StartImg.jpg"
	//     },
	//     {
	//         link: "http://www.newegg.com.tw/VotingActivity/20160509_DragonBoatFestival",
	//         imgUrl: "https://negcdn.azureedge.net/www/pic/advimage/2/3/18/1349/StartImg.jpg"
	//     },
	//     {
	//         link: "http://www.newegg.com.tw/p/20160601summer",
	//         imgUrl: "https://negcdn.azureedge.net/www/pic/advimage/3/3/8/1682/StartImg.jpg"
	//     },
	//     {
	//         link: "http://www.newegg.com.tw/p/20160601CHOMOHO",
	//         imgUrl: "https://negcdn.azureedge.net/www/pic/advimage/4/3/30/875/StartImg.jpg"
	//     }
	// ];
	
	var mainFcousLists = _mainFcousLists;
	
	module.exports = {
	  getBannerData: function getBannerData() {
	    //console.log(mainFcousLists);
	    NEMAppDispatcher.dispatch({
	      type: BannerSlideMethods.BannerSlideGETBYDATA,
	      allBannerData: mainFcousLists
	
	    });
	  }
	};
	
	//
	// var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	// var NetwTools = nemReact.require('NetwTools');
	//
	// var _host = window._netwHost;
	// var _path = _host + '/api/HomeSliderBanner';
	// var _opt = {
	//     url: _path,
	//     async: true,
	//     cache: true,
	//     dataType: 'json',
	//     contentType: 'application/json',
	//     crossDomain: true,
	//     headers: {},
	//     customAuthorization: false
	// };
	//
	// var _netwApi = new NetwWebAPIUtils(_opt);
	//
	// module.exports = {
	// 	getBannerData: function(obj){
	// 		//var queryString = "storeID="+obj;
	//     var queryString ="";
	// 		_netwApi.get(queryString).then(function(collectData){
	//             //console.log(collectData);
	//             NEMAppDispatcher.dispatch({
	//               type: BannerSlideMethods.BannerSlideGETBYDATA,
	//               allBannerData: collectData
	//             });
	// 		});
	// 	}
	// }

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keymirror = __webpack_require__(8);
	
	var _keymirror2 = _interopRequireDefault(_keymirror);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  BannerSlideMethods: (0, _keymirror2.default)({
	    BannerSlideGETBYDATA: null
	  })
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var ShopUsConstants = __webpack_require__(66);
	
	var HomeShopUsMethods = ShopUsConstants.shopUsMethods;
	
	// var shopUsData = [
	// 	{
	// 		ImgUrl: "https://negcdn.azureedge.net/www/pic/advimage/0/0/31/1674/StartImg.png",
	// 		linkUrl: "http://tw.yahoo.com"
	// 	},
	// 	{
	// 		ImgUrl: "https://negcdn.azureedge.net/www/pic/advimage/0/0/31/1674/StartImg.png",
	// 		linkUrl: "http://www.google.com.tw"
	// 	}
	// ];
	
	var shopUsData = _shopUsData;
	
	module.exports = {
	
	    getShopUsData: function getShopUsData() {
	        //console.log(shopUsData);
	        NEMAppDispatcher.dispatch({
	            type: HomeShopUsMethods.shopUsGETBYALLDATA,
	            allShopUsData: shopUsData
	        });
	    }
	};
	
	// /**/
	// var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	// var NetwTools = nemReact.require('NetwTools');
	// var _host = window._netwHost;
	// var _path = _host + '/api/HomeShopUS';
	// var _opt = {
	//     url: _path,
	//     async: true,
	//     cache: true,
	//     dataType: 'json',
	//     contentType: 'application/json',
	//     crossDomain: true,
	//     headers: {},
	//     customAuthorization: false
	// };
	//
	// var _netwApi = new NetwWebAPIUtils(_opt);
	//
	// module.exports = {
	// 	getShopUsData: function(obj){
	// 		//var queryString = "storeID="+obj;
	//     var queryString ="";
	// 		_netwApi.get(queryString).then(function(collectData){
	//             //console.log(collectData);
	//             NEMAppDispatcher.dispatch({
	//               type: HomeShopUsMethods.shopUsGETBYALLDATA,
	//               allShopUsData: collectData
	//             });
	// 		});
	// 	}
	// }

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keymirror = __webpack_require__(8);
	
	var _keymirror2 = _interopRequireDefault(_keymirror);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  shopUsMethods: (0, _keymirror2.default)({
	    shopUsGETBYALLDATA: null
	  })
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var LifeProjectConstants = __webpack_require__(68);
	
	var LifeProjectMethods = LifeProjectConstants.LifeProjectMethods;
	
	// var lifeProjectData = [
	//     {
	//         moreLink: "http://www.newegg.com.tw"
	//     },
	//     {
	//         listContent: [
	//             {
	//                 tabTitle: "旅遊",
	//                 main: {
	//                     Link: "http://tw.yahoo.com",
	//                     ImgUrl: "images/slider/test01.jpg",
	//                     title: "作伙來菜市仔01",
	//                     subDesc: "市場體驗趣市場體驗趣市場體驗趣"
	//                 },
	//                 subOne: {
	//                     Link: "http://www.google.com/",
	//                     color: "#ff0000",
	//                     ItemImgUrl: "https://negcdn.azureedge.net/www/pic/item/0053/3157_1_640.jpg",
	//                     Desc: "這是測試02這是測試02這是測試02這是測試02這是測試02這是測試02"
	//                 },
	//                 subTwo: {
	//                     Link: "http://www.newegg.com.tw/",
	//                     color: "#ffff00",
	//                     ItemImgUrl: "https://negcdn.azureedge.net/www/pic/item/0053/3157_1_640.jpg",
	//                     Desc: "這是測試01這是測試01這是測試01這是測試01這是測試01這是測試01"
	//                 }
	//             },
	//             {
	//                 tabTitle: "飲食",
	//                 main: {
	//                     Link: "http://tw.yahoo.com",
	//                     ImgUrl: "images/slider/test01.jpg",
	//                     title: "好吃好玩在花蓮",
	//                     subDesc: null
	//                 },
	//                 subOne: {
	//                     Link: "http://www.google.com/",
	//                     color: "#ff0000",
	//                     ItemImgUrl: "https://negcdn.azureedge.net/www/pic/item/0053/3157_1_640.jpg",
	//                     Desc: "這是測試02這是測試02這是測試02這是測試02這是測試02這是測試02"
	//                 },
	//                 subTwo: {
	//                     Link: "http://www.newegg.com.tw/",
	//                     color: "#ffff00",
	//                     ItemImgUrl: "https://negcdn.azureedge.net/www/pic/item/0053/3157_1_640.jpg",
	//                     Desc: "這是測試01這是測試01這是測試01這是測試01這是測試01這是測試01"
	//                 }
	//             },
	//             {
	//                 tabTitle: "文化",
	//                 main: {
	//                     Link: "http://tw.yahoo.com",
	//                     ImgUrl: "images/slider/test01.jpg",
	//                     title: "作伙來菜市仔01",
	//                     subDesc: "市場體驗趣市場體驗趣市場體驗趣"
	//                 },
	//                 subOne: {
	//                     Link: "http://www.google.com/",
	//                     color: "#ff0000",
	//                     ItemImgUrl: "https://negcdn.azureedge.net/www/pic/item/0053/3157_1_640.jpg",
	//                     Desc: "這是測試02這是測試02這是測試02這是測試02這是測試02這是測試02"
	//                 },
	//                 subTwo: {
	//                     Link: "http://www.newegg.com.tw/",
	//                     color: "#ffff00",
	//                     ItemImgUrl: "https://negcdn.azureedge.net/www/pic/item/0053/3157_1_640.jpg",
	//                     Desc: "這是測試01這是測試01這是測試01這是測試01這是測試01這是測試01"
	//                 }
	//             },
	//             {
	//                 tabTitle: "關懷",
	//                 main: {
	//                     Link: "http://tw.yahoo.com",
	//                     ImgUrl: "images/slider/test01.jpg",
	//                     title: "作伙來菜市仔01",
	//                     subDesc: "市場體驗趣市場體驗趣市場體驗趣"
	//                 },
	//                 subOne: {
	//                     Link: "http://www.google.com/",
	//                     color: "#ff0000",
	//                     ItemImgUrl: "https://negcdn.azureedge.net/www/pic/item/0053/3157_1_640.jpg",
	//                     Desc: "這是測試02這是測試02這是測試02這是測試02這是測試02這是測試02"
	//                 },
	//                 subTwo: {
	//                     Link: "http://www.newegg.com.tw/",
	//                     color: "#ffff00",
	//                     ItemImgUrl: "https://negcdn.azureedge.net/www/pic/item/0053/3157_1_640.jpg",
	//                     Desc: "這是測試01這是測試01這是測試01這是測試01這是測試01這是測試01"
	//                 }
	//             }
	//         ]
	//     }
	// ];
	
	var lifeProjectData = {
	  moreLink: "http://www.newegg.com.tw",
	  listContent: _lifeProjectData
	};
	
	module.exports = {
	  getData: function getData() {
	    //console.log(lifeProjectData);
	    NEMAppDispatcher.dispatch({
	      type: LifeProjectMethods.LifeProjectGETBYALLDATA,
	      //getData: lifeProjectData
	      getData: lifeProjectData
	    });
	  }
	};
	
	// /**/
	// var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	// var NetwTools = nemReact.require('NetwTools');
	// var _host = window._netwHost;
	// var _path = _host + '/api/HomeLifeProject';
	// var _opt = {
	//     url: _path,
	//     async: true,
	//     cache: true,
	//     dataType: 'json',
	//     contentType: 'application/json',
	//     crossDomain: true,
	//     headers: {},
	//     customAuthorization: false
	// };
	//
	// var _netwApi = new NetwWebAPIUtils(_opt);
	//
	// //module.exports的function名最好與dispatch的名稱一樣------------add by bruce 20160630
	// module.exports = {
	//   getData: function(){
	//     //var queryString = "storeID="+obj;
	//     var queryString ="";
	//     _netwApi.get(queryString).then(function(collectData){
	//         //console.log(collectData);
	//         NEMAppDispatcher.dispatch({
	//             type: LifeProjectMethods.LifeProjectGETBYALLDATA,
	//             //將資料轉型為符合lifeProjectData的資料結構------------add by bruce 20160630
	//             getData: {
	//                 moreLink: "http://www.newegg.com.tw",
	//                 listContent: collectData
	//             }
	//
	//         });
	//     });
	//   }
	// };

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keymirror = __webpack_require__(8);
	
	var _keymirror2 = _interopRequireDefault(_keymirror);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	    LifeProjectMethods: (0, _keymirror2.default)({
	        LifeProjectGETBYALLDATA: null,
	        LifeProjectADD: null,
	        LifeProjectUPDATE: null,
	        LifeProjectDELETE: null
	    })
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var HomeProdConstants = __webpack_require__(70);
	var HomeProdMethods = HomeProdConstants.HomeProdMethods;
	
	var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	var NetwTools = nemReact.require('NetwTools');
	
	var _host = window._netwHost;
	var _pathStore = _host + '/api/HomeStore';
	var _pathStoreSlider = _host + '/api/HomeStoreSlider';
	var _optStore = {
	    url: _pathStore,
	    async: true,
	    cache: true,
	    dataType: 'json',
	    contentType: 'application/json',
	    crossDomain: true,
	    headers: {},
	    customAuthorization: false
	};
	var _optStoreSlider = {
	    url: _pathStoreSlider,
	    async: true,
	    cache: true,
	    dataType: 'json',
	    contentType: 'application/json',
	    crossDomain: true,
	    headers: {},
	    customAuthorization: false
	};
	
	var _netwApiStore = new NetwWebAPIUtils(_optStore);
	var _netwApiStoreSlider = new NetwWebAPIUtils(_optStoreSlider);
	
	module.exports = {
	    getProdsData: function getProdsData(index) {
	        var queryString = "index[]=" + index;
	        var queryStringSlider = "index[]=" + (index + 1);
	        _netwApiStore.get(queryString).then(function (collectData) {
	            _netwApiStoreSlider.get(queryStringSlider).then(function (storeSlider) {
	                NEMAppDispatcher.dispatch({
	                    type: HomeProdMethods.HPD_GET,
	                    index: index,
	                    prodData: collectData,
	                    storeSlider: storeSlider
	                });
	            });
	        });
	    }
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keymirror = __webpack_require__(8);
	
	var _keymirror2 = _interopRequireDefault(_keymirror);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	    HomeProdMethods: (0, _keymirror2.default)({
	        HPD_GET: null,
	        HPD_ADD: null,
	        HPD_UPDATE: null,
	        HPD_DELETE: null,
	        HPD_GETCATESMAP: null
	    })
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwFlashConstants = __webpack_require__(72);
	var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	
	var FlashMethods = NetwFlashConstants.FlashMethods;
	
	var _host = window._netwHost;
	var _path = _host + '/api/Flash/GetByNumber';
	var _opt = {
	  url: _path,
	  async: true,
	  cache: true,
	  dataType: 'json',
	  contentType: 'application/json',
	  crossDomain: true,
	  headers: {},
	  customAuthorization: false
	};
	
	var _netwApi = new NetwWebAPIUtils(_opt);
	
	module.exports = {
	
	  getFlashItems: function getFlashItems(pageSize, pageNumber) {
	    var queryString = "GroupBuyID=0&pageSize={0}&pageNumber={1}";
	    if (typeof pageSize === 'number') {
	      queryString = queryString.replace("{0}", pageSize);
	    } else {
	      queryString = queryString.replace("{0}", "3");
	    }
	    if (typeof pageNumber === 'number') {
	      queryString = queryString.replace("{1}", pageNumber);
	    } else {
	      queryString = queryString.replace("{1}", "1");
	    }
	
	    _netwApi.get(queryString).then(function (flashItems) {
	      NEMAppDispatcher.dispatch({
	        type: FlashMethods.FLA_GET,
	        currentPage: pageNumber,
	        flashItems: flashItems
	      });
	    });
	  }
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keymirror = __webpack_require__(8);
	
	var _keymirror2 = _interopRequireDefault(_keymirror);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  FlashMethods: (0, _keymirror2.default)({
	    FLA_GET: null
	  })
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwAdvEventConstants = __webpack_require__(74);
	var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	
	var AdvEventMethods = NetwAdvEventConstants.AdvEventMethods;
	
	var _host = window._netwHost;
	var _path = _host + '/api/AdvEvent';
	var _opt = {
	  url: _path,
	  async: true,
	  cache: true,
	  dataType: 'json',
	  contentType: 'application/json',
	  crossDomain: true,
	  headers: {},
	  customAuthorization: false
	};
	
	var _netwApi = new NetwWebAPIUtils(_opt);
	
	module.exports = {
	
	  getHotSales: function getHotSales() {
	    var queryString = "advEventID=4";
	
	    _netwApi.get(queryString).then(function (advEvents) {
	      NEMAppDispatcher.dispatch({
	        type: AdvEventMethods.ADV_GET,
	        advEvents: advEvents
	      });
	    });
	  }
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keymirror = __webpack_require__(8);
	
	var _keymirror2 = _interopRequireDefault(_keymirror);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  AdvEventMethods: (0, _keymirror2.default)({
	    ADV_GET: null
	  })
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var HomeProdConstants = __webpack_require__(70);
	var HomeProdMethods = HomeProdConstants.HomeProdMethods;
	
	// var catesMapData = [{"id":5017,"name":"生活家電","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon07.jpg"},
	// {"id":5018,"name":"設計風尚","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon01.jpg"},
	// {"id":5019,"name":"國際名品","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon02.jpg"},
	// {"id":5020,"name":"美妝保養","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon03.jpg"},
	// {"id":5021,"name":"戶外休旅","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon05.jpg"},
	// {"id":5022,"name":"運動健身","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon04.jpg"},
	// {"id":5023,"name":"電腦週邊","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon09.jpg"},
	// {"id":5024,"name":"數位３Ｃ","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon10.jpg"},
	// {"id":5025,"name":"居家用品","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon08.jpg"},
	// {"id":5026,"name":"親子寵物","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon06.jpg"},
	// {"id":5027,"name":"保健養生","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon12.jpg"},
	// {"id":5028,"name":"樂活食尚","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon11.jpg"},
	// {"id":5029,"name":"美國新蛋直購","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon13.jpg"},
	// {"id":5030,"name":"世界城市好好逛","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon15.jpg"},
	// {"id":5031,"name":"尋找禮品","link":"/Category?CategoryID=2397","imgUrl":"http://negcdn.azureedge.net/wwwtest/pic/device/cates_Icon/cates_Icon14.jpg"}
	// ];
	//
	// var catesMapData = _catesMapData;
	//
	// module.exports = {
	//   getCatesMap: function(){
	//     //console.log(catesMapData);
	//     NEMAppDispatcher.dispatch({
	//         type: HomeProdMethods.HPD_GETCATESMAP,
	//         catesMapData: catesMapData
	//     });
	//   }
	// }
	
	var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	var NetwTools = nemReact.require('NetwTools');
	var _host = window._netwHost;
	var _path = _host + '/api/HomeCategoryMap';
	var _opt = {
	    url: _path,
	    async: true,
	    cache: true,
	    dataType: 'json',
	    contentType: 'application/json',
	    crossDomain: true,
	    headers: {},
	    customAuthorization: false
	};
	
	var _netwApi = new NetwWebAPIUtils(_opt);
	
	module.exports = {
	    getCatesMap: function getCatesMap(index) {
	        _netwApi.get().then(function (catesMapData) {
	            //console.log(catesMapData);
	            NEMAppDispatcher.dispatch({
	                type: HomeProdMethods.HPD_GETCATESMAP,
	                catesMapData: catesMapData
	            });
	        });
	    }
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var NEMAppDispatcher = __webpack_require__(6);
	var HomeBannerSlideConstants = __webpack_require__(64);
	
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var HomeBannerSlideMethods = HomeBannerSlideConstants.BannerSlideMethods;
	var CHANGE_EVENT = 'BannerSlideChange';
	var _allBannerData = {};
	
	function _addBannerData(allBannerData) {
	    if ((typeof allBannerData === 'undefined' ? 'undefined' : _typeof(allBannerData)) === 'object') {
	        _allBannerData = allBannerData;
	    }
	}
	
	var HomeBannerSlideStore = assign({}, EventEmitter.prototype, {
	    emitChange: function emitChange() {
	        this.emit(CHANGE_EVENT);
	    },
	
	    /**
	    * @param {function} callback
	    */
	    addChangeListener: function addChangeListener(callback) {
	        this.on(CHANGE_EVENT, callback);
	    },
	
	    removeChangeListener: function removeChangeListener(callback) {
	        this.removeListener(CHANGE_EVENT, callback);
	    },
	
	    getAll: function getAll() {
	        //console.log(_allBannerData);
	        return _allBannerData;
	    }
	});
	
	HomeBannerSlideStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	    switch (action.type) {
	        case HomeBannerSlideMethods.BannerSlideGETBYDATA:
	            _addBannerData(action.allBannerData);
	            HomeBannerSlideStore.emitChange();
	            break;
	        default:
	        // do nothing
	    }
	});
	
	module.exports = HomeBannerSlideStore;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var NEMAppDispatcher = __webpack_require__(6);
	var ShopUsConstants = __webpack_require__(66);
	
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var HomeShopUsMethods = ShopUsConstants.shopUsMethods;
	var CHANGE_EVENT = 'shopUsChange';
	var _shopUsAllData = {};
	
	function _addBannerData(shopUsAllData) {
	
	    //console.log(shopUsAllData);
	    //console.log(typeof shopUsAllData);
	
	    if ((typeof shopUsAllData === 'undefined' ? 'undefined' : _typeof(shopUsAllData)) === 'object') {
	        _shopUsAllData = shopUsAllData;
	    }
	
	    //console.log(_shopUsAllData);
	    //console.log(_shopUsAllData);
	}
	
	var HomeShopUsStore = assign({}, EventEmitter.prototype, {
	    emitChange: function emitChange() {
	        this.emit(CHANGE_EVENT);
	    },
	
	    /**
	    * @param {function} callback
	    */
	    addChangeListener: function addChangeListener(callback) {
	        this.on(CHANGE_EVENT, callback);
	    },
	
	    removeChangeListener: function removeChangeListener(callback) {
	        this.removeListener(CHANGE_EVENT, callback);
	    },
	
	    getAll: function getAll() {
	        return _shopUsAllData;
	    }
	
	});
	
	HomeShopUsStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	    //console.log(action.type);
	    switch (action.type) {
	        case HomeShopUsMethods.shopUsGETBYALLDATA:
	            _addBannerData(action.allShopUsData);
	            HomeShopUsStore.emitChange();
	            break;
	        default:
	        // do nothing
	    }
	});
	
	module.exports = HomeShopUsStore;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var NEMAppDispatcher = __webpack_require__(6);
	var LifeProjectConstants = __webpack_require__(68);
	
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var LifeProjectMethods = LifeProjectConstants.LifeProjectMethods;
	var CHANGE_EVENT = 'LifeProjectChange';
	var _lifeProjectAllData = {};
	
	function _addLifeProjectData(data) {
	    //console.log(data);
	    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
	        _lifeProjectAllData = data;
	    }
	}
	
	var HomeLifeProjectStore = assign({}, EventEmitter.prototype, {
	    emitChange: function emitChange() {
	        this.emit(CHANGE_EVENT);
	    },
	
	    /**
	    * @param {function} callback
	    */
	    addChangeListener: function addChangeListener(callback) {
	        this.on(CHANGE_EVENT, callback);
	    },
	
	    removeChangeListener: function removeChangeListener(callback) {
	        this.removeListener(CHANGE_EVENT, callback);
	    },
	
	    getData: function getData() {
	        return _lifeProjectAllData;
	    }
	});
	
	HomeLifeProjectStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	    //console.log(action.type); //會得到所有action.type的名稱---------add by bruce 20160630
	    switch (action.type) {
	        case LifeProjectMethods.LifeProjectGETBYALLDATA:
	            //console.log(action.getData)
	            _addLifeProjectData(action.getData); //data名稱要與來源相同----------------add by bruce 20160630
	            HomeLifeProjectStore.emitChange();
	            break;
	        default:
	        // do nothing
	    }
	});
	
	module.exports = HomeLifeProjectStore;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var HomeProdConstants = __webpack_require__(70);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var HomeProdMethods = HomeProdConstants.HomeProdMethods;
	var CHANGE_EVENT = 'HomeProdChang';
	var _prodsCollectData = {
	    currentPage: 0,
	    maxPage: 999,
	    storeDatas: {}
	};
	
	function _setStoreCollectData(index, collectData, sliderBanner) {
	    var pageNumber = index.toString();
	    if (collectData.length == 0) {
	        _prodsCollectData.maxPage = index;
	    } else {
	        collectData[0].SliderBanner = sliderBanner;
	        if (!_prodsCollectData.storeDatas.hasOwnProperty(pageNumber)) {
	            _prodsCollectData.storeDatas[pageNumber] = collectData[0];
	        }
	    }
	}
	
	function _setCurrentPage(currentPage) {
	    if (typeof currentPage === "number") {
	        _prodsCollectData.currentPage = currentPage;
	    }
	}
	
	var HomeProdStore = assign({}, EventEmitter.prototype, {
	    emitChange: function emitChange() {
	        this.emit(CHANGE_EVENT);
	    },
	    /**
	    * @param {function} callback
	    */
	    addChangeListener: function addChangeListener(callback) {
	        this.on(CHANGE_EVENT, callback);
	    },
	
	    removeChangeListener: function removeChangeListener(callback) {
	        this.removeListener(CHANGE_EVENT, callback);
	    },
	
	    getProdsData: function getProdsData() {
	        var prodsCollectData = {};
	        if (_prodsCollectData.hasOwnProperty('storeDatas')) {
	            prodsCollectData = _prodsCollectData.storeDatas;
	        }
	        return prodsCollectData;
	    },
	
	    getStoreMaxPage: function getStoreMaxPage() {
	        var maxPage = 0;
	        if (_prodsCollectData.hasOwnProperty('maxPage')) {
	            maxPage = _prodsCollectData.maxPage;
	        }
	        return maxPage;
	    },
	    getCurrentPage: function getCurrentPage() {
	        var currentPage = 0;
	        if (_prodsCollectData.hasOwnProperty('currentPage')) {
	            currentPage = _prodsCollectData.currentPage;
	        }
	        return currentPage;
	    }
	});
	
	HomeProdStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	    switch (action.type) {
	        case HomeProdMethods.HPD_GET:
	            _setStoreCollectData(action.index, action.prodData, action.storeSlider);
	            _setCurrentPage(action.index);
	            HomeProdStore.emitChange();
	            break;
	        default:
	    }
	});
	
	module.exports = HomeProdStore;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwFlashConstants = __webpack_require__(72);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var FlashMethods = NetwFlashConstants.FlashMethods;
	var CHANGE_EVENT = 'flashItemChange';
	var _flashData = { currentPage: 1, maxPage: 999, hasData: true };
	
	function _addFlashItems(flashItems, currentPage) {
	  if (flashItems) {
	    if (flashItems.length == 0) {
	      _flashData.maxPage = currentPage;
	      _flashData.hasData = false;
	    }
	    if (_flashData.hasOwnProperty('flashItems')) {
	      for (var i = 0; i < flashItems.length; i++) {
	        var isSame = false;
	        for (var j = 0; j < _flashData.flashItems.length; j++) {
	          if (flashItems[i].ID == _flashData.flashItems[j].ID) {
	            isSame = true;
	          }
	        }
	        if (!isSame) {
	          _flashData.flashItems.push(flashItems[i]);
	        }
	      }
	    } else {
	      _flashData.flashItems = flashItems;
	    }
	  }
	}
	
	function _setCurrentPage(currentPage) {
	  if (typeof currentPage === "number") {
	    _flashData.currentPage = currentPage;
	  }
	}
	
	var FlashStore = assign({}, EventEmitter.prototype, {
	  emitChange: function emitChange() {
	    this.emit(CHANGE_EVENT);
	  },
	
	  /**
	   * @param {function} callback
	   */
	  addChangeListener: function addChangeListener(callback) {
	    this.on(CHANGE_EVENT, callback);
	  },
	
	  removeChangeListener: function removeChangeListener(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	  },
	
	  getFlashCurrentPage: function getFlashCurrentPage() {
	    var currentPage = 1;
	    if (_flashData.hasOwnProperty('currentPage')) {
	      currentPage = _flashData.currentPage;
	    }
	    return currentPage;
	  },
	
	  getFlashMaxPage: function getFlashMaxPage() {
	    var maxPage = 999;
	    if (_flashData.hasOwnProperty('maxPage')) {
	      maxPage = _flashData.maxPage;
	    }
	    return maxPage;
	  },
	
	  getHasData: function getHasData() {
	    var hasData = true;
	    if (_flashData.hasOwnProperty('hasData')) {
	      hasData = _flashData.hasData;
	    }
	    return hasData;
	  },
	
	  getFlashItems: function getFlashItems() {
	    var flashItems = [];
	    if (_flashData.hasOwnProperty('flashItems')) {
	      flashItems = _flashData.flashItems;
	    }
	    return flashItems;
	  }
	});
	
	FlashStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	  switch (action.type) {
	    case FlashMethods.FLA_GET:
	      _addFlashItems(action.flashItems, action.currentPage);
	      _setCurrentPage(action.currentPage);
	      FlashStore.emitChange();
	      break;
	    default:
	    // do nothing
	  }
	});
	
	module.exports = FlashStore;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwAdvEventConstants = __webpack_require__(74);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var AdvEventMethods = NetwAdvEventConstants.AdvEventMethods;
	var CHANGE_EVENT = 'advEventChange';
	var _advEventData = {};
	
	function _setHotSales(advEvents) {
	  if (advEvents) {
	    _advEventData.hotSales = advEvents;
	  }
	}
	
	var HomeAdvEventStore = assign({}, EventEmitter.prototype, {
	  emitChange: function emitChange() {
	    this.emit(CHANGE_EVENT);
	  },
	
	  /**
	   * @param {function} callback
	   */
	  addChangeListener: function addChangeListener(callback) {
	    this.on(CHANGE_EVENT, callback);
	  },
	
	  removeChangeListener: function removeChangeListener(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	  },
	
	  getHotSales: function getHotSales() {
	    var hotSales = {};
	    if (_advEventData.hasOwnProperty('hotSales')) {
	      hotSales = _advEventData.hotSales;
	    }
	    return hotSales;
	  }
	});
	
	HomeAdvEventStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	  switch (action.type) {
	    case AdvEventMethods.ADV_GET:
	      _setHotSales(action.advEvents);
	      HomeAdvEventStore.emitChange();
	      break;
	    default:
	    // do nothing
	  }
	});
	
	module.exports = HomeAdvEventStore;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var HomeProdConstants = __webpack_require__(70);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var HomeProdMethods = HomeProdConstants.HomeProdMethods;
	var CHANGE_EVENT = 'HomeCateMapChang';
	var _prodsCollectData = [];
	
	function _setCollectMapData(data) {
	    if (data.length != 0) {
	        _prodsCollectData = data;
	    }
	}
	
	var HomeCateMapStore = assign({}, EventEmitter.prototype, {
	    emitChange: function emitChange() {
	        this.emit(CHANGE_EVENT);
	    },
	    /**
	    * @param {function} callback
	    */
	    addChangeListener: function addChangeListener(callback) {
	        this.on(CHANGE_EVENT, callback);
	    },
	
	    removeChangeListener: function removeChangeListener(callback) {
	        this.removeListener(CHANGE_EVENT, callback);
	    },
	
	    getAll: function getAll() {
	        return _prodsCollectData;
	    }
	});
	
	HomeCateMapStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	    switch (action.type) {
	        case HomeProdMethods.HPD_GETCATESMAP:
	            _setCollectMapData(action.catesMapData);
	            HomeCateMapStore.emitChange();
	            break;
	        default:
	    }
	});
	
	module.exports = HomeCateMapStore;

/***/ }
/******/ ]);
//# sourceMappingURL=homeLib.js.map