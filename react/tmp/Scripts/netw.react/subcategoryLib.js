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

	module.exports = __webpack_require__(129);


/***/ },

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	//var Dispatcher = require('flux').Dispatcher;
	
	//module.exports = new Dispatcher();
	module.exports = nemReact['flux'];

/***/ },

/***/ 8:
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

/***/ 9:
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

/***/ 10:
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

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*import actions*/
	var SubCategoryAction = __webpack_require__(130);
	var CategoryParentAction = __webpack_require__(132);
	var SubCategoryTopTenAction = __webpack_require__(133);
	
	/*import stores*/
	var SubCategoryStore = __webpack_require__(134);
	var CategoryParentStore = __webpack_require__(135);
	var SubCategoryTopTenStore = __webpack_require__(136);
	
	/*declare actions*/
	nemReact.setModules('SubCategoryAction', SubCategoryAction);
	nemReact.setModules('CategoryParentAction', CategoryParentAction);
	nemReact.setModules('SubCategoryTopTenAction', SubCategoryTopTenAction);
	
	/*declare stores*/
	nemReact.setModules('SubCategoryStore', SubCategoryStore);
	nemReact.setModules('CategoryParentStore', CategoryParentStore);
	nemReact.setModules('SubCategoryTopTenStore', SubCategoryTopTenStore);

/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwSubCategoryConstants = __webpack_require__(131);
	var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	
	var SubCategoryMethods = NetwSubCategoryConstants.SubCategoryMethods;
	
	var _host = window._netwHost;
	var _path = _host + '/api/SubCategory';
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
	
	  getSubItems: function getSubItems(categoryID, order, pageNumber) {
	    var queryString = "maxPrice&minPrice&PVID&OrderBy={0}&Page={1}&ItemsQty=6&CategoryID={2}";
	
	    if (isNaN(parseInt(categoryID, 10))) {
	      NEMAppDispatcher.dispatch({
	        type: SubCategoryMethods.SUB_GET,
	        currentPage: pageNumber,
	        categoryID: 0,
	        order: order,
	        subItems: null
	      });
	      return;
	    }
	
	    if (typeof order !== 'string') {
	      order = "CreatDate";
	    }
	
	    if (typeof pageNumber !== 'number') {
	      pageNumber = 1;
	    }
	
	    queryString = queryString.replace("{0}", order);
	    queryString = queryString.replace("{1}", pageNumber);
	    queryString = queryString.replace("{2}", categoryID);
	    _netwApi.get(queryString).then(function (subItems) {
	      NEMAppDispatcher.dispatch({
	        type: SubCategoryMethods.SUB_GET,
	        currentPage: pageNumber,
	        categoryID: categoryID,
	        order: order,
	        subItems: subItems
	      });
	    });
	  }
	};

/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keymirror = __webpack_require__(8);
	
	var _keymirror2 = _interopRequireDefault(_keymirror);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  SubCategoryMethods: (0, _keymirror2.default)({
	    SUB_GET: null,
	    SUB_GETTOP: null,
	    SUB_GETPARENT: null
	  })
	};

/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwSubCategoryConstants = __webpack_require__(131);
	/*var NetwWebAPIUtils = require('../../utilities/NetwApiCall');*/
	var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	
	var SubCategoryMethods = NetwSubCategoryConstants.SubCategoryMethods;
	
	var _host = window._netwHost;
	var _path = _host + '/api/Item/GetItemParentCategories';
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
	
	  getItemParentCate: function getItemParentCate(categoryID) {
	    var queryString = "CategoryId=";
	    if (typeof categoryID != 'undefined' && !isNaN(parseInt(categoryID, 10))) {
	      queryString += categoryID.toString();
	    } else {}
	
	    _netwApi.get(queryString).then(function (categoryParent) {
	      NEMAppDispatcher.dispatch({
	        type: SubCategoryMethods.SUB_GETPARENT,
	        categoryID: categoryID,
	        categoryParent: categoryParent
	      });
	    });
	  }
	};

/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwSubCategoryConstants = __webpack_require__(131);
	/*var NetwWebAPIUtils = require('../../utilities/NetwApiCall');*/
	var NetwWebAPIUtils = nemReact.require('NetwApiCall');
	
	var SubCategoryMethods = NetwSubCategoryConstants.SubCategoryMethods;
	
	var _host = window._netwHost;
	var _path = _host + '/api/CategoryTopTenItems';
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
	
	  getTopTen: function getTopTen(categoryID) {
	    var queryString = "categoryID=";
	    if (typeof categoryID != 'undefined' && !isNaN(parseInt(categoryID, 10))) {
	      queryString += categoryID.toString();
	    } else {}
	
	    _netwApi.get(queryString).then(function (topTen) {
	      NEMAppDispatcher.dispatch({
	        type: SubCategoryMethods.SUB_GETTOP,
	        categoryID: categoryID,
	        topTen: topTen
	      });
	    });
	  }
	};

/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwSubCategoryConstants = __webpack_require__(131);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var SubCategoryMethods = NetwSubCategoryConstants.SubCategoryMethods;
	var CHANGE_EVENT = 'subCategoryChange';
	var _subCategoryData = {
	    currentPage: 0,
	    maxPage: 999,
	    categoryID: 0,
	    order: "CreateDate",
	    hasData: true
	};
	
	function _addSubCategoryItems(subCategoryItems, currentPage, categoryID, order) {
	
	    if (!subCategoryItems) {
	        _subCategoryData.hasData = false;
	        return;
	    }
	
	    if (subCategoryItems.CategoryItemInfo_ViewList.length == 0) {
	        _subCategoryData.maxPage = currentPage;
	        _subCategoryData.hasData = false;
	    } else {
	        _subCategoryData.maxPage = 999;
	        _subCategoryData.hasData = true;
	    }
	
	    if (_subCategoryData.hasOwnProperty('subCategoryItems')) {
	        var isNew = _detectSameCondition(categoryID, order);
	        for (var i = 0; i < subCategoryItems.CategoryItemInfo_ViewList.length; i++) {
	            var isSame = false;
	            for (var j = 0; j < _subCategoryData.subCategoryItems.length && !isNew; j++) {
	                if (subCategoryItems.CategoryItemInfo_ViewList[i].ID == _subCategoryData.subCategoryItems[j].ID) {
	                    isSame = true;
	                }
	            }
	            if (!isSame) {
	                _subCategoryData.subCategoryItems.push(subCategoryItems.CategoryItemInfo_ViewList[i]);
	            }
	        }
	    } else {
	        _subCategoryData.subCategoryItems = subCategoryItems.CategoryItemInfo_ViewList;
	    }
	
	    _subCategoryData.currentPage = currentPage;
	    _subCategoryData.categoryID = categoryID;
	    _subCategoryData.order = order;
	}
	
	function _detectSameCondition(categoryID, order) {
	    if (_subCategoryData.categoryID === categoryID && _subCategoryData.order === order) {
	        return false;
	    } else {
	        _subCategoryData.subCategoryItems.length = 0;
	        return true;
	    }
	}
	
	var SubCategoryStore = assign({}, EventEmitter.prototype, {
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
	
	    getCurrentPage: function getCurrentPage() {
	        var currentPage = 0;
	        if (_subCategoryData.hasOwnProperty('currentPage')) {
	            currentPage = _subCategoryData.currentPage;
	        }
	        return currentPage;
	    },
	
	    getMaxPage: function getMaxPage() {
	        var maxPage = 999;
	        if (_subCategoryData.hasOwnProperty('maxPage')) {
	            maxPage = _subCategoryData.maxPage;
	        }
	        return maxPage;
	    },
	
	    getCategoryID: function getCategoryID() {
	        var categoryID = 0;
	        if (_subCategoryData.hasOwnProperty('categoryID')) {
	            categoryID = _subCategoryData.categoryID;
	        }
	        return categoryID;
	    },
	
	    getHasData: function getHasData() {
	        var hasData = true;
	        if (_subCategoryData.hasOwnProperty('hasData')) {
	            hasData = _subCategoryData.hasData;
	        }
	        return hasData;
	    },
	
	    getSubItems: function getSubItems() {
	        var subCategoryItems = [];
	        if (_subCategoryData.hasOwnProperty('subCategoryItems')) {
	            subCategoryItems = _subCategoryData.subCategoryItems;
	        }
	        return subCategoryItems;
	    }
	});
	
	SubCategoryStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	    switch (action.type) {
	        case SubCategoryMethods.SUB_GET:
	            _addSubCategoryItems(action.subItems, action.currentPage, action.categoryID, action.order);
	            SubCategoryStore.emitChange();
	            break;
	        default:
	        // do nothing
	    }
	});
	
	module.exports = SubCategoryStore;

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwSubCategoryConstants = __webpack_require__(131);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var SubCategoryMethods = NetwSubCategoryConstants.SubCategoryMethods;
	var CHANGE_EVENT = 'cateParentChange';
	var _categoryParent = {};
	
	function _addCategoryParent(categoryParent) {
	    if (categoryParent && (typeof categoryParent === 'undefined' ? 'undefined' : _typeof(categoryParent)) === 'object') {
	        _categoryParent = categoryParent;
	    } else {
	        var defaultValue = {
	            DropDownItems: [{
	                CategoryID: 0,
	                Title: "商品分類"
	            }]
	        };
	        _categoryParent = defaultValue;
	    }
	}
	
	var CategoryParentStore = assign({}, EventEmitter.prototype, {
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
	        return _categoryParent;
	    }
	});
	
	CategoryParentStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	    switch (action.type) {
	        case SubCategoryMethods.SUB_GETPARENT:
	            _addCategoryParent(action.categoryParent);
	            CategoryParentStore.emitChange();
	            break;
	        default:
	        // do nothing
	    }
	});
	
	module.exports = CategoryParentStore;

/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var NEMAppDispatcher = __webpack_require__(6);
	var NetwSubCategoryConstants = __webpack_require__(131);
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var assign = __webpack_require__(10);
	
	var SubCategoryMethods = NetwSubCategoryConstants.SubCategoryMethods;
	var CHANGE_EVENT = 'topTenChange';
	var _topTen = [];
	
	function _addTopTen(categoryID, topTen) {
	    var singleTopTen = { categoryID: categoryID, topTenData: [] };
	    if (_topTen.length > 15) {
	        _topTen.shift();
	    }
	    if (topTen && (typeof topTen === 'undefined' ? 'undefined' : _typeof(topTen)) === 'object') {
	        singleTopTen.topTenData = topTen;
	    }
	    _topTen.push(singleTopTen);
	}
	
	var CategoryTopTenStore = assign({}, EventEmitter.prototype, {
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
	
	    getTopTen: function getTopTen(categoryID) {
	        var topTen = {};
	        for (var i = 0; i < _topTen.length; i++) {
	            if (_topTen[i].categoryID === categoryID) {
	                topTen = _topTen[i];
	            }
	        }
	        return topTen;
	    }
	});
	
	CategoryTopTenStore.dispatchToken = NEMAppDispatcher.register(function (action) {
	    switch (action.type) {
	        case SubCategoryMethods.SUB_GETTOP:
	            _addTopTen(action.categoryID, action.topTen);
	            CategoryTopTenStore.emitChange();
	            break;
	        default:
	        // do nothing
	    }
	});
	
	module.exports = CategoryTopTenStore;

/***/ }

/******/ });
//# sourceMappingURL=subcategoryLib.js.map