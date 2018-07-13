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

	module.exports = __webpack_require__(23);


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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*三頁以上會使用的Action和Store才放進這裡面*/
	/*import actions*/
	var CartAction = __webpack_require__(24);
	var TrackAction = __webpack_require__(27);
	var AccountAction = __webpack_require__(29);
	var GreetingWordsAction = __webpack_require__(31);
	var HotWordsAction = __webpack_require__(33);
	var MenuAction = __webpack_require__(35);
	
	/*import stores*/
	var CartStore = __webpack_require__(37);
	var TrackStore = __webpack_require__(38);
	var AccountStore = __webpack_require__(39);
	var GreetingWordsStore = __webpack_require__(40);
	var HotWordsStore = __webpack_require__(41);
	var MenuStore = __webpack_require__(42);
	
	/*declare actions*/
	nemReact.setModules('CartAction', CartAction);
	nemReact.setModules('TrackAction', TrackAction);
	nemReact.setModules('AccountAction', AccountAction);
	nemReact.setModules('GreetingWordsAction', GreetingWordsAction);
	nemReact.setModules('HotWordsAction', HotWordsAction);
	nemReact.setModules('MenuAction', MenuAction);
	
	/*declare stores*/
	nemReact.setModules('TrackStore', TrackStore);
	//nemReact.modules['TrackStore']  = TrackStore;
	nemReact.setModules('CartStore', CartStore);
	//nemReact.modules['CartStore']  = CartStore;
	nemReact.setModules('AccountStore', AccountStore);
	nemReact.setModules('GreetingWordsStore', GreetingWordsStore);
	nemReact.setModules('HotWordsStore', HotWordsStore);
	nemReact.setModules('MenuStore', MenuStore);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwCartConstants = __webpack_require__(25);
	var NetwCookieKeys = __webpack_require__(26);
	/*var NetwWebAPIUtils = require('../../utilities/NetwApiCall');
	var NetwCookie = require('../../utilities/NetwCookies');
	var NetwTools = require('../../utilities/NetwTools');*/
	var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	var NetwCookie = nemReact.require('NetwCookies');
	var NetwTools = nemReact.require('NetwTools');
	
	var CartMethods = NetwCartConstants.CartMethods;
	var CookieKeys = NetwCookieKeys.CookieKeys;
	
	var _nesc = new NetwCookie(NetwCookieKeys.CookieKeys.CART_NAME, null);
	
	var _host = window._netwHost;
	var _cartPath = _host + '/api/Cart';
	var _itemPath = _host + '/api/Item/GetItemDetailByItemIds';
	var _cartOpt = {
	    url: _cartPath,
	    async: true,
	    cache: false,
	    dataType: 'json',
	    contentType: 'application/json',
	    crossDomain: true,
	    headers: {},
	    customAuthorization: false
	};
	var _itemOpt = {
	    url: _itemPath,
	    async: true,
	    cache: false,
	    dataType: 'json',
	    contentType: 'application/json',
	    crossDomain: true,
	    headers: {},
	    customAuthorization: false
	};
	
	var _netwCartApi = new NetwWebAPIUtils(_cartOpt);
	var _netwItemApi = new NetwWebAPIUtils(_itemOpt);
	
	function _getCartNumber(login) {
	    var queryString = "cType=all";
	    if (login) {
	        return _netwCartApi.get(queryString);
	    } else {
	        var trackData = _nesc.get();
	        var cartNumber = { domesCart: 0, interCart: 0, chooseCart: 0 };
	        var itemIDs = [];
	        if (jQuery.isArray(trackData)) {
	            for (var i = 0; i < trackData.length; i++) {
	                if (trackData[i].stu == 0 || trackData[i].stu == 100 || trackData[i].stu == 101 || trackData[i].stu == 102) {
	                    if (trackData[i].cty != null) {
	                        cartNumber.chooseCart++;
	                    } else {
	                        itemIDs.push(trackData[i].iid);
	                    }
	                }
	            }
	        }
	        return _netwItemApi.post(itemIDs).then(function (itemDatas) {
	            var totalLength = [];
	            if (itemDatas != null) {
	                totalLength = itemDatas.length;
	            }
	            for (var i = 0; i < totalLength; i++) {
	                if (itemDatas[i].DelvType == 3 || itemDatas[i].DelvType == 6) {
	                    cartNumber.interCart++;
	                } else {
	                    cartNumber.domesCart++;
	                }
	            }
	            return cartNumber;
	        });
	    }
	}
	
	function activityCartNumDispatcher(cartNumber) {
	    NEMAppDispatcher.dispatch({
	        type: CartMethods.CAR_GETNUMBER,
	        cartNumber: cartNumber
	    });
	}
	
	module.exports = {
	    getCartNumber: function getCartNumber() {
	        NetwTools.isLogin().then(function (login) {
	            return _getCartNumber(login);
	        }).then(function (cartNumber) {
	            activityCartNumDispatcher(cartNumber);
	        });
	    }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keymirror = __webpack_require__(8);
	
	var _keymirror2 = _interopRequireDefault(_keymirror);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  CartMethods: (0, _keymirror2.default)({
	    CAR_GET: null,
	    CAR_GETNUMBER: null
	  })
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keymirror = __webpack_require__(8);
	
	var _keymirror2 = _interopRequireDefault(_keymirror);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  CookieKeys: (0, _keymirror2.default)({
	    NETW_USER: null,
	    CART_NAME: null
	  })
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*MUST COMPATIBILITY WITH COMPUTER*/
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwTrackConstants = __webpack_require__(28);
	var NetwCookieKeys = __webpack_require__(26);
	/*var NetwWebAPIUtils = require('../../utilities/NetwApiCall');
	var NetwCookie = require('../../utilities/NetwCookies');
	var NetwTools = require('../../utilities/NetwTools');*/
	var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	var NetwCookie = nemReact.require('NetwCookies');
	var NetwTools = nemReact.require('NetwTools');
	
	var TrackMethods = NetwTrackConstants.TrackMethods;
	var CookieKeys = NetwCookieKeys.CookieKeys;
	
	var _nesc = new NetwCookie(NetwCookieKeys.CookieKeys.CART_NAME, null);
	
	var _host = window._netwHost;
	var _path = _host + '/api/Track';
	var _opt = {
	    url: _path,
	    async: true,
	    cache: false,
	    dataType: 'json',
	    contentType: 'application/json',
	    crossDomain: true,
	    headers: {},
	    customAuthorization: false
	};
	
	var _netwApi = new NetwWebAPIUtils(_opt);
	// private variables
	var _trackName = {
	    cart: "cart",
	    wish: "wish",
	    cartAdditional: "cartadditional",
	    chooseAdditional: "chooseadditional",
	    interAdditional: "interadditional",
	    categoryID: "categoryId",
	    categoryType: "categoryType",
	    iid: "iid",
	    qty: "qty",
	    stu: "stu",
	    cid: "cid",
	    cty: "cty",
	    cpd: "cpd"
	};
	
	var _trackStatus = {
	    cart: 0,
	    wish: 1,
	    aiDomesticCart: 100,
	    aiInterCart: 101,
	    aiChooseCart: 102
	};
	
	/****************** Start Common Functions Start ******************/
	function convertToCartStatus(status) {
	    var cartStatus = _trackStatus.cart;
	    switch (status) {
	        case 'cart':
	            cartStatus = _trackStatus.cart;
	            break;
	        case 'wish':
	            cartStatus = _trackStatus.wish;
	            break;
	        case 'aiDomesticCart':
	            cartStatus = _trackStatus.aiDomesticCart;
	            break;
	        case 'aiInterCart':
	            cartStatus = _trackStatus.aiInterCart;
	            break;
	        case 'aiChooseCart':
	            cartStatus = _trackStatus.aiChooseCart;
	            break;
	        default:
	
	    }
	    return cartStatus;
	}
	function paraToPostModel(itemIds, qtys, status, categoryIds, categoryTypes, couponIds) {
	    var postData = [];
	    for (var i = 0; i < itemIds.length; i++) {
	        var singleData = {};
	        singleData["iid"] = itemIds[i];
	        singleData["qty"] = qtys ? qtys[i] : 1;
	        singleData["stu"] = status;
	        singleData["cid"] = categoryIds ? categoryIds[i] : null;
	        singleData["cty"] = categoryTypes ? categoryTypes[i] : null;
	        singleData["cpd"] = couponIds ? couponIds[i] : null;
	        postData.push(singleData);
	    }
	    return postData;
	}
	
	function processResponse(action, itemDatas, response) {
	    if (!jQuery.isArray(itemDatas) && !jQuery.isArray(response)) {
	        console.log("response error.");
	        return;
	    }
	    for (var i = 0; i < response.length; i++) {
	        if (response[i] && response[i].lastIndexOf("成功") > 0) {
	            switch (action) {
	                case "add":
	                    addToCookies(itemDatas[i]);
	                    break;
	                case "update":
	                    updateToCookies(itemDatas[i]);
	                    break;
	                case "delete":
	                    deleteFromCookies(itemDatas[i]);
	                    break;
	                default:
	                    break;
	            }
	        } else {
	            console.log(action + " fail.");
	        }
	    }
	}
	
	function addToCookies(itemDetail) {
	    if (!_nesc.get()) {
	        var content = [];
	        content.push(itemDetail);
	        _nesc.set(content);
	    } else {
	        var content = _nesc.get();
	        var isSame = false;
	        if (content.length > 40) {
	            //twNewegg().checkState("tips", "超過上限");
	            console.log("超過上限");
	            return;
	        }
	        for (var i = 0; i < content.length; i++) {
	            if (content[i].iid == itemDetail.iid) {
	                isSame = true;
	                content[i].qty = itemDetail.qty;
	                content[i].stu = itemDetail.stu;
	                content[i].cid = itemDetail.cid;
	                content[i].cty = itemDetail.cty;
	                content[i].cpd = itemDetail.cpd;
	            }
	        }
	        if (!isSame) {
	            content.push(itemDetail);
	        }
	        _nesc.set(content);
	    }
	}
	
	function updateToCookies(itemDetail) {
	    if (!_nesc.get()) {
	        //twNewegg().checkState("tips", "無此商品");
	        console.log("無此商品");
	    } else {
	        var content = _nesc.get();
	        for (var i = 0; i < content.length; i++) {
	            if (content[i].iid == itemDetail.iid) {
	                content[i].qty = itemDetail.qty;
	                content[i].stu = itemDetail.stu;
	                content[i].cid = itemDetail.cid;
	                content[i].cty = itemDetail.cty;
	                content[i].cpd = itemDetail.cpd;
	            }
	        }
	        _nesc.set(content);
	    }
	}
	
	function deleteFromCookies(itemDetail) {
	    if (!_nesc.get()) {
	        //twNewegg().checkState("tips", "無此商品");
	        console.log("無此商品");
	    } else {
	        var content = _nesc.get();
	        var newContent = [];
	        for (var i = 0; i < content.length; i++) {
	            if (content[i].iid !== itemDetail.iid) {
	                newContent.push(content[i]);
	            }
	        }
	        _nesc.set(newContent);
	    }
	}
	
	/****************** End Common Functions End ******************/
	
	/****************** Start Modify Data To Track Start ******************/
	function addTrack(login, postDatas) {
	    if (login) {
	        return _netwApi.post(postDatas);
	    } else {
	        var response = [];
	        for (var i = 0; i < postDatas.length; i++) {
	            response.push("加入成功");
	        }
	        return new Promise(function (resolve, reject) {
	            resolve(response);
	        });
	    }
	}
	/****************** End Modify Data To Track End ******************/
	
	/****************** Start Query Data From Track Start ******************/
	//convert category to object for track api.
	function paraToQueryModel(categoryIds, categoryTypes) {
	    var queryData = {};
	    for (var i = 0; i < categoryIds.length && i < 1; i++) {
	        queryData[_trackName.categoryID] = categoryIds[i];
	    }
	    for (var i = 0; i < categoryTypes.length && i < 1; i++) {
	        queryData[_trackName.categoryType] = categoryTypes[i];
	    }
	    return queryData;
	}
	
	// Read track information from api or cookies.
	function readFromCart(login, categoryIds, categoryTypes) {
	    var queryData = paraToQueryModel(categoryIds, categoryTypes);
	    var queryString = typeof queryData[_trackName.categoryID] === "number" ? "cid=" + queryData[_trackName.categoryID] : "";
	    if (login) {
	        return _netwApi.get(queryString).then(function (trackData) {
	            /*resolve(successQuery(categoryIds, categoryTypes, trackData));*/
	            return successQuery(categoryIds, categoryTypes, trackData);
	        });
	    } else {
	        return new Promise(function (resolve, reject) {
	            resolve(_nesc.get());
	        });
	    }
	}
	
	function queryModelToCookies(cartData) {
	    var cookieModel = [];
	    if (jQuery.isArray(cartData[_trackName.cart])) {
	        for (var i = 0; i < cartData[_trackName.cart].length; i++) {
	            var singleData = {};
	            singleData[_trackName.iid] = cartData[_trackName.cart][i].ItemID;
	            singleData[_trackName.qty] = cartData[_trackName.cart][i].ItemQty;
	            singleData[_trackName.stu] = _trackStatus.cart;
	            singleData[_trackName.cid] = cartData[_trackName.cart][i].CategoryID;
	            singleData[_trackName.cty] = cartData[_trackName.cart][i].CategoryType;
	            singleData[_trackName.cpd] = "";
	            cookieModel.push(singleData);
	        }
	    }
	    if (jQuery.isArray(cartData[_trackName.wish])) {
	        for (var i = 0; i < cartData[_trackName.wish].length; i++) {
	            var singleData = {};
	            singleData[_trackName.iid] = cartData[_trackName.wish][i].ItemID;
	            singleData[_trackName.qty] = cartData[_trackName.wish][i].ItemQty;
	            singleData[_trackName.stu] = _trackStatus.wish;
	            singleData[_trackName.cid] = cartData[_trackName.wish][i].CategoryID;
	            singleData[_trackName.cty] = cartData[_trackName.wish][i].CategoryType;
	            singleData[_trackName.cpd] = "";
	            cookieModel.push(singleData);
	            if (i > 9) {
	                break;
	            }
	        }
	    }
	    if (jQuery.isArray(cartData[_trackName.cartadditional])) {
	        for (var i = 0; i < cartData[_trackName.cartadditional].length; i++) {
	            var singleData = {};
	            singleData[_trackName.iid] = cartData[_trackName.cartadditional][i].ItemID;
	            singleData[_trackName.qty] = cartData[_trackName.cartadditional][i].ItemQty;
	            singleData[_trackName.stu] = _trackStatus.aiDomesticCart;
	            singleData[_trackName.cid] = cartData[_trackName.cartadditional][i].CategoryID;
	            singleData[_trackName.cty] = cartData[_trackName.cartadditional][i].CategoryType;
	            singleData[_trackName.cpd] = "";
	            cookieModel.push(singleData);
	            if (i > 9) {
	                break;
	            }
	        }
	    }
	    if (jQuery.isArray(cartData[_trackName.chooseadditional])) {
	        for (var i = 0; i < cartData[_trackName.chooseadditional].length; i++) {
	            var singleData = {};
	            singleData[_trackName.iid] = cartData[_trackName.chooseadditional][i].ItemID;
	            singleData[_trackName.qty] = cartData[_trackName.chooseadditional][i].ItemQty;
	            singleData[_trackName.stu] = _trackStatus.aiChooseCart;
	            singleData[_trackName.cid] = cartData[_trackName.chooseadditional][i].CategoryID;
	            singleData[_trackName.cty] = cartData[_trackName.chooseadditional][i].CategoryType;
	            singleData[_trackName.cpd] = "";
	            cookieModel.push(singleData);
	            if (i > 9) {
	                break;
	            }
	        }
	    }
	    if (jQuery.isArray(cartData[_trackName.interadditional])) {
	        for (var i = 0; i < cartData[_trackName.interadditional].length; i++) {
	            var singleData = {};
	            singleData[_trackName.iid] = cartData[_trackName.interadditional][i].ItemID;
	            singleData[_trackName.qty] = cartData[_trackName.interadditional][i].ItemQty;
	            singleData[_trackName.stu] = _trackStatus.aiInterCart;
	            singleData[_trackName.cid] = cartData[_trackName.interadditional][i].CategoryID;
	            singleData[_trackName.cty] = cartData[_trackName.interadditional][i].CategoryType;
	            singleData[_trackName.cpd] = "";
	            cookieModel.push(singleData);
	            if (i > 9) {
	                break;
	            }
	        }
	    }
	    return cookieModel;
	}
	
	function successQuery(categoryId, categoryType, trackData) {
	    var cid = 0,
	        ctp = 0;
	    if (typeof categoryId === "number") {
	        cid = categoryId;
	    }
	    if (typeof categoryType === "number") {
	        ctp = categoryType;
	    }
	    if ((typeof trackData === 'undefined' ? 'undefined' : _typeof(trackData)) === "object") {
	        var queryData = queryModelToCookies(trackData);
	        if (cid === 0 && ctp === 0) {
	            _nesc.set(queryData);
	            return queryData;
	        }
	    }
	    return {};
	}
	
	function activityTrackDispatcher(trackData) {
	    NEMAppDispatcher.dispatch({ type: TrackMethods.TRA_GET, trackData: trackData });
	}
	
	/****************** End Query Data From Track End ******************/
	
	module.exports = {
	    // Add item to web api or cookies.
	    add: function add(status, itemIds, qtys, categoryIds, categoryTypes, couponIds) {
	        var cartStatus = convertToCartStatus(status);
	        var postDatas = paraToPostModel(itemIds, qtys, cartStatus, categoryIds, categoryTypes, couponIds);
	        var that = this;
	        NetwTools.isLogin().then(function (login) {
	            return addTrack(login, postDatas);
	        }).then(function (response) {
	            processResponse("add", postDatas, response);
	            //activityTrackDispatcher(trackData);
	        }).then(function () {
	            that.getCart([], []);
	        });
	    },
	    // Add item to web api or cookies.
	    addToCart: function addToCart(itemIds, qtys, categoryIds, categoryTypes, couponIds) {
	        this.add("cart", itemIds, qtys, categoryIds, categoryTypes, couponIds);
	    },
	    addToAddiDomestic: function addToAddiDomestic(itemIds, qtys, categoryIds, categoryTypes, couponIds) {
	        this.add("aiDomesticCart", itemIds, qtys, categoryIds, categoryTypes, couponIds);
	    },
	    addToAddiInter: function addToAddiInter(itemIds, qtys, categoryIds, categoryTypes, couponIds) {
	        this.add("aiInterCart", itemIds, qtys, categoryIds, categoryTypes, couponIds);
	    },
	    addToAddiChoose: function addToAddiChoose(itemIds, qtys, categoryIds, categoryTypes, couponIds) {
	        this.add("aiChooseCart", itemIds, qtys, categoryIds, categoryTypes, couponIds);
	    },
	    addToWish: function addToWish(itemIds, qtys, categoryIds, categoryTypes, couponIds) {
	        this.add("wish", itemIds, qtys, categoryIds, categoryTypes, couponIds);
	    },
	
	    // Update item to web api or cookies.
	    updateToCart: function updateToCart() {
	        console.log("use add/addToCart function. instead.");
	    },
	    /* same with updateToCart, so don't need.
	    updateToAddition: function() {},
	    updateToWish: function() {},
	    */
	    // Delete item from web api or cookies.
	    delete: function _delete() {},
	    // Delete item from web api or cookies.
	    deleteFromCart: function deleteFromCart() {},
	    deleteFromWish: function deleteFromWish() {},
	    // Get Track data from web api or cookies.
	    getCart: function getCart(categoryIds, categoryTypes) {
	        NetwTools.isLogin().then(function (login) {
	            return readFromCart(login, categoryIds, categoryTypes);
	        }).then(function (trackData) {
	            activityTrackDispatcher(trackData);
	        });
	    },
	    /* same with getCart, so don't need.
	    getWish: function() {},*/
	    // Get Track full item data from web api.
	    getAll: function getAll() {}
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keymirror = __webpack_require__(8);
	
	var _keymirror2 = _interopRequireDefault(_keymirror);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  TrackMethods: (0, _keymirror2.default)({
	    TRA_GET: null,
	    TRA_ADD: null,
	    TRA_UPDATE: null,
	    TRA_DELETE: null /*,
	                     ADDTOCART: null,
	                     ADDTOADDITION: null,
	                     ADDTOWISH: null,
	                     UPDATETOCART: null,
	                     UPDATETOADDITION: null,
	                     UPDATETOWISH: null,
	                     DELETECART: null,
	                     DELETEWISH: null,
	                     GETCART: null,
	                     GETALL: null*/
	  })
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwAccountConstants = __webpack_require__(30);
	var NetwCookieKeys = __webpack_require__(26);
	/*var NetwWebAPIUtils = require('../../utilities/NetwApiCall');*/
	/*var NetwCookie = require('../../utilities/NetwCookies');
	var NetwTools = require('../../utilities/NetwTools');*/
	var NetwCookie = nemReact.require('NetwCookies');
	var NetwTools = nemReact.require('NetwTools');
	
	var AccountMethods = NetwAccountConstants.AccountMethods;
	
	/*
	var _host = 'http://localhost:62608';
	var _path = _host + '/api/auchk';
	var _opt = {
	    url: _path,
	    async: false,
	    cache: false,
	    dataType: 'json',
	    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
	    crossDomain: true,
	    headers: {},
	    customAuthorization: false
	};
	*/
	
	var _neui = new NetwCookie(NetwCookieKeys.CookieKeys.NETW_USER, null);
	/*var _netwApi = new NetwWebAPIUtils(_opt);*/
	
	module.exports = {
	  getEmail: function getEmail() {
	    var logInfo = _neui.get();
	    var email = NetwTools.parseUrlFormatByName(logInfo, "mail");
	    NEMAppDispatcher.dispatch({
	      type: AccountMethods.ACC_GETEMAIL,
	      email: email
	    });
	  }
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keymirror = __webpack_require__(8);
	
	var _keymirror2 = _interopRequireDefault(_keymirror);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  AccountMethods: (0, _keymirror2.default)({
	    ACC_GETEMAIL: null,
	    ACC_GETID: null,
	    ACC_CHECKLOGIN: null,
	    ACC_SIGNUP: null
	  })
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwGreetingWordsConstants = __webpack_require__(32);
	/*var NetwWebAPIUtils = require('../../utilities/NetwApiCall');
	var NetwTools = require('../../utilities/NetwTools');*/
	var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	var NetwTools = nemReact.require('NetwTools');
	
	var GreetingWordsMethods = NetwGreetingWordsConstants.GreetingWordsMethods;
	
	var _host = window._netwHost;
	var _path = _host + '/api/GreetingWords';
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
	
	function _getGreetingWords(login, queryString) {
	  if (login) {
	    _netwApi.get(queryString).then(function (results) {
	      NEMAppDispatcher.dispatch({
	        type: GreetingWordsMethods.GRE_GETGREETINGWORDS,
	        greetingWords: results.Description
	      });
	    }, function (errorMessage) {
	      console.log(errorMessage);
	    });
	  }
	}
	
	function _getGreetingCards(login, queryString) {
	  if (login) {
	    _netwApi.get(queryString).then(function (results) {
	      NEMAppDispatcher.dispatch({
	        type: GreetingWordsMethods.GRE_GETGREETINGCARDS,
	        greetingCards: results.ImageUrl
	      });
	    }, function (errorMessage) {
	      console.log(errorMessage);
	    });
	  }
	}
	
	module.exports = {
	  getGreetingWords: function getGreetingWords() {
	    var queryString = "type=words";
	    NetwTools.isLogin().then(function (login) {
	      _getGreetingWords(login, queryString);
	    });
	  },
	  getGreetingCards: function getGreetingCards() {
	    var queryString = "type=cards";
	    NetwTools.isLogin().then(function (login) {
	      _getGreetingCards(login, queryString);
	    });
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keymirror = __webpack_require__(8);
	
	var _keymirror2 = _interopRequireDefault(_keymirror);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  GreetingWordsMethods: (0, _keymirror2.default)({
	    GRE_GETGREETINGWORDS: null,
	    GRE_GETGREETINGCARDS: null
	  })
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwHotWordsConstants = __webpack_require__(34);
	/*var NetwWebAPIUtils = require('../../utilities/NetwApiCall');*/
	var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	
	var HotWordsMethods = NetwHotWordsConstants.HotWordsMethods;
	
	var _host = window._netwHost;
	var _path = _host + '/api/hotwords';
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
	
	  getHotWords: function getHotWords(categoryID) {
	    var queryString = "categoryid=";
	    if (typeof categoryID != 'undefined') {
	      queryString += categoryID.toString();
	    }
	
	    _netwApi.get(queryString).then(function (allHotwords) {
	      NEMAppDispatcher.dispatch({
	        type: HotWordsMethods.HOT_GETBYCID,
	        categoryID: categoryID,
	        allHotwords: allHotwords
	      });
	    });
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keymirror = __webpack_require__(8);
	
	var _keymirror2 = _interopRequireDefault(_keymirror);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  HotWordsMethods: (0, _keymirror2.default)({
	    HOT_GETBYCID: null
	  })
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwMenuConstants = __webpack_require__(36);
	/*var NetwWebAPIUtils = require('../../utilities/NetwApiCall');
	var NetwTools = require('../../utilities/NetwTools');*/
	var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	var NetwTools = nemReact.require('NetwTools');
	
	var MenuMethods = NetwMenuConstants.MenuMethods;
	
	var _host = window._netwHost;
	var _path = _host + '/api/Category';
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
	
	function activityHome(categoryData) {
	    if (!jQuery.isArray(categoryData) || categoryData.length == 0 || categoryData[0].category_id != 0 || categoryData[0].category_layer != 0 || categoryData[0].Nodes.length == 0) {
	        return;
	    }
	    NEMAppDispatcher.dispatch({
	        type: MenuMethods.MEN_GETHOME,
	        homeCategory: categoryData[0].Nodes
	    });
	}
	
	function activityCategory(categoryID, layerID, categoryData) {
	    if (!jQuery.isArray(categoryData) || categoryData.length == 0 || categoryData[0].category_id != categoryID || categoryData[0].category_layer != layerID || categoryData[0].Nodes.length == 0) {
	        return;
	    }
	    NEMAppDispatcher.dispatch({
	        type: MenuMethods.MEN_GETCATEGORY,
	        categoryID: categoryID,
	        layerID: layerID,
	        categoryData: categoryData[0].Nodes
	    });
	}
	
	module.exports = {
	    getHome: function getHome() {
	        var queryString = "cID=0&lID=0";
	        _netwApi.get(queryString).then(function (categoryData) {
	            activityHome(categoryData);
	        });
	    },
	    getCategory: function getCategory(categoryID, layerID) {
	        var cid = 0,
	            lid = 10;
	        var queryString = "cID={cid}&lID={lID}";
	        if (typeof categoryID === 'number') {
	            cid = categoryID;
	        }
	        if (typeof layerID === 'number') {
	            lid = layerID;
	        }
	        queryString = queryString.replace(/{cid}/, cid.toString());
	        queryString = queryString.replace(/{lID}/, lid.toString());
	        _netwApi.get(queryString).then(function (categoryData) {
	            activityCategory(cid, lid, categoryData);
	        });
	    }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keymirror = __webpack_require__(8);
	
	var _keymirror2 = _interopRequireDefault(_keymirror);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  MenuMethods: (0, _keymirror2.default)({
	    MEN_GETHOME: null,
	    MEN_GETCATEGORY: null
	  })
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwCartConstants = __webpack_require__(25);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var CartMethods = NetwCartConstants.CartMethods;
	var CHANGE_EVENT = 'cartChange';
	var _cartNumber = { domesCart: 0, interCart: 0, chooseCart: 0 };
	
	function _setCartNumber(cartNumber) {
	  if ((typeof cartNumber === 'undefined' ? 'undefined' : _typeof(cartNumber)) === 'object') {
	    _cartNumber = cartNumber;
	  }
	}
	
	var CartStore = assign({}, EventEmitter.prototype, {
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
	
	  getCartNumber: function getCartNumber() {
	    return _cartNumber;
	  }
	});
	
	CartStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	  switch (action.type) {
	    case CartMethods.CAR_GETNUMBER:
	      _setCartNumber(action.cartNumber);
	      CartStore.emitChange();
	      break;
	    default:
	    // do nothing
	  }
	});
	
	module.exports = CartStore;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwTrackConstants = __webpack_require__(28);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var TrackMethods = NetwTrackConstants.TrackMethods;
	var CHANGE_EVENT = 'trackChange';
	var _trackData = {};
	
	function _setTrackData(trackData) {
	  if ((typeof trackData === 'undefined' ? 'undefined' : _typeof(trackData)) === 'object') {
	    _trackData = trackData;
	  }
	}
	
	var TrackStore = assign({}, EventEmitter.prototype, {
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
	    return _trackData;
	  }
	});
	
	TrackStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	  switch (action.type) {
	    case TrackMethods.TRA_GET:
	      _setTrackData(action.trackData);
	      TrackStore.emitChange();
	      break;
	    default:
	    // do nothing
	  }
	});
	
	module.exports = TrackStore;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwAccountConstants = __webpack_require__(30);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var AccountMethods = NetwAccountConstants.AccountMethods;
	var CHANGE_EVENT = 'accountChange';
	var _accountData = {};
	
	function _setEmail(email) {
	  if (email) {
	    _accountData.email = email;
	  }
	}
	
	var AccountStore = assign({}, EventEmitter.prototype, {
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
	
	  getEmail: function getEmail() {
	    var email = '';
	    if (_accountData.hasOwnProperty('email')) {
	      email = _accountData.email;
	    }
	    return email;
	  }
	});
	
	AccountStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	  switch (action.type) {
	    case AccountMethods.ACC_GETEMAIL:
	      _setEmail(action.email);
	      AccountStore.emitChange();
	      break;
	    default:
	    // do nothing
	  }
	});
	
	module.exports = AccountStore;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwGreetingWordsConstants = __webpack_require__(32);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var GreetingWordsMethods = NetwGreetingWordsConstants.GreetingWordsMethods;
	var CHANGE_EVENT = 'greetingWordsChange';
	var _greetingWordsData = {};
	
	function _setGreetingWords(greetingWords) {
	  if (greetingWords) {
	    _greetingWordsData.greetingWords = greetingWords;
	  }
	}
	
	var GreetingWordsStore = assign({}, EventEmitter.prototype, {
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
	
	  getGreetingWords: function getGreetingWords() {
	    var greetingWords = '';
	    if (_greetingWordsData.hasOwnProperty('greetingWords')) {
	      greetingWords = _greetingWordsData.greetingWords;
	    }
	    return greetingWords;
	  }
	});
	
	GreetingWordsStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	  switch (action.type) {
	    case GreetingWordsMethods.GRE_GETGREETINGWORDS:
	      _setGreetingWords(action.greetingWords);
	      GreetingWordsStore.emitChange();
	      break;
	    default:
	    // do nothing
	  }
	});
	
	module.exports = GreetingWordsStore;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwHotWordsConstants = __webpack_require__(34);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var HotWordsMethods = NetwHotWordsConstants.HotWordsMethods;
	var CHANGE_EVENT = 'hotwordsChange';
	var _allHotWords = {};
	
	function _addHotWords(allHotwords) {
	  if ((typeof allHotwords === 'undefined' ? 'undefined' : _typeof(allHotwords)) === 'object') {
	    _allHotWords = allHotwords;
	  }
	}
	
	var HotWordsStore = assign({}, EventEmitter.prototype, {
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
	    return _allHotWords;
	  }
	});
	
	HotWordsStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	  switch (action.type) {
	    case HotWordsMethods.HOT_GETBYCID:
	      _addHotWords(action.allHotwords);
	      HotWordsStore.emitChange();
	      break;
	    default:
	    // do nothing
	  }
	});
	
	module.exports = HotWordsStore;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwMenuConstants = __webpack_require__(36);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var MenuMethods = NetwMenuConstants.MenuMethods;
	var CHANGE_EVENT = 'categoryChange';
	var SCROLL_EVENT = 'homeCategoryScroll';
	var _homeData = [];
	var _childData = {};
	
	function _setHomeCategory(categoryData) {
	    if (jQuery.isArray(categoryData)) {
	        _homeData = categoryData;
	    }
	}
	
	function _setChildCategory(categoryID, layerID, categoryData) {
	    if (jQuery.isArray(categoryData)) {
	        _childData[categoryID.toString()] = categoryData;
	    }
	}
	
	var MenuStore = assign({}, EventEmitter.prototype, {
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
	
	    getHome: function getHome() {
	        return _homeData;
	    },
	
	    getCategory: function getCategory(categoryID, layerID) {
	        if (_childData.hasOwnProperty(categoryID.toString())) {
	            return _childData[categoryID.toString()];
	        }
	        return [];
	    }
	});
	
	MenuStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	    switch (action.type) {
	        case MenuMethods.MEN_GETHOME:
	            _setHomeCategory(action.homeCategory);
	            /*MenuStore.emitChange();*/
	            break;
	        case MenuMethods.MEN_GETCATEGORY:
	            _setChildCategory(action.categoryID, action.layerID, action.categoryData);
	            MenuStore.emitChange();
	            break;
	        default:
	        // do nothing
	    }
	});
	
	module.exports = MenuStore;

/***/ }
/******/ ]);
//# sourceMappingURL=commonLib.js.map