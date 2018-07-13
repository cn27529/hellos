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

	module.exports = __webpack_require__(87);


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

/***/ 26:
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

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*import tools*/
	var NetwApiCall = __webpack_require__(88);
	var NetwCookies = __webpack_require__(90);
	var NetwTools = __webpack_require__(93);
	
	/*declare tools*/
	nemReact.setModules('NetwApiCall', NetwApiCall);
	nemReact.setModules('NetwCookies', NetwCookies);
	nemReact.setModules('NetwTools', NetwTools);

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; //import NetwApiMethods from '../constants/NetwApiMethods';
	
	//import AjaxCallSuperAgent from './ApiCall.SuperAgent';
	
	
	var _NetwCookieConstants = __webpack_require__(26);
	
	var _NetwCookieConstants2 = _interopRequireDefault(_NetwCookieConstants);
	
	var _AjaxCall = __webpack_require__(89);
	
	var _AjaxCall2 = _interopRequireDefault(_AjaxCall);
	
	var _NetwCookies = __webpack_require__(90);
	
	var _NetwCookies2 = _interopRequireDefault(_NetwCookies);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NetwApiCall = function NetwApiCall(opt) {
	    this._setting = {
	        url: '',
	        async: true,
	        cache: true,
	        dataType: 'json',
	        //contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
	        contentType: 'application/json',
	        crossDomain: false,
	        headers: {},
	        customAuthorization: false
	    };
	    if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object') {
	        jQuery.extend(this._setting, opt);
	    }
	};
	
	NetwApiCall.prototype.get = function (queryString, opt) {
	    if (!this._setting.customAuthorization) {
	        var neui = new _NetwCookies2.default(_NetwCookieConstants2.default.CookieKeys.NETW_USER, null);
	        this._setting.headers.Authorization = 'Basic ' + neui.get();
	    }
	    if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object') {
	        jQuery.extend(this._setting, opt);
	    }
	    var apiCall = new _AjaxCall2.default(this._setting);
	    return apiCall.get(queryString);
	};
	
	NetwApiCall.prototype.post = function (postData, opt) {
	    if (!this._setting.customAuthorization) {
	        var neui = new _NetwCookies2.default(_NetwCookieConstants2.default.CookieKeys.NETW_USER, null);
	        this._setting.headers.Authorization = 'Basic ' + neui.get();
	    }
	    if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object') {
	        jQuery.extend(this._setting, opt);
	    }
	    if ((typeof postData === 'undefined' ? 'undefined' : _typeof(postData)) === 'object' || jQuery.isArray(postData) === true) {
	        this._setting.data = JSON.stringify(postData);
	    } else {
	        this._setting.data = postData;
	    }
	    var apiCall = new _AjaxCall2.default(this._setting);
	    return apiCall.post();
	};
	
	NetwApiCall.prototype.put = function (putData, opt) {
	    if (!this._setting.customAuthorization) {
	        var neui = new _NetwCookies2.default(_NetwCookieConstants2.default.CookieKeys.NETW_USER, null);
	        this._setting.headers.Authorization = 'Basic ' + neui.get();
	    }
	    if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object') {
	        jQuery.extend(this._setting, opt);
	    }
	    if ((typeof putData === 'undefined' ? 'undefined' : _typeof(putData)) === 'object' || jQuery.isArray(putData) === true) {
	        this._setting.data = JSON.stringify(putData);
	    } else {
	        this._setting.data = putData;
	    }
	    var apiCall = new _AjaxCall2.default(this._setting);
	    return apiCall.put();
	};
	
	NetwApiCall.prototype.delete = function (deleteData, opt) {
	    if (!this._setting.customAuthorization) {
	        var neui = new _NetwCookies2.default(_NetwCookieConstants2.default.CookieKeys.NETW_USER, null);
	        this._setting.headers.Authorization = 'Basic ' + neui.get();
	    }
	    if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object') {
	        jQuery.extend(this._setting, opt);
	    }
	    if ((typeof deleteData === 'undefined' ? 'undefined' : _typeof(deleteData)) === 'object' || jQuery.isArray(deleteData) === true) {
	        this._setting.data = JSON.stringify(deleteData);
	    } else {
	        this._setting.data = deleteData;
	    }
	    var apiCall = new _AjaxCall2.default(this._setting);
	    return apiCall.delete();
	};
	
	module.exports = NetwApiCall;

/***/ },

/***/ 89:
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var AjaxCallJQuery = function AjaxCallJQuery(opt) {
	    this._setting = {
	        url: '',
	        async: true,
	        cache: true,
	        dataType: 'json',
	        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
	        crossDomain: false,
	        data: '',
	        headers: {}
	    };
	    if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object') {
	        jQuery.extend(this._setting, opt);
	    }
	};
	
	AjaxCallJQuery.prototype.get = function (queryString) {
	    this._setting.url = this._setting.url + (!queryString || 0 === queryString.length ? '' : '?' + queryString);
	    var option = this._setting;
	    return new Promise(function (resolve, reject) {
	        jQuery.ajax({
	            method: 'GET',
	            url: option.url,
	            dataType: option.dataType,
	            async: option.async,
	            cache: option.cache,
	            contentType: option.contentType,
	            crossDomain: option.crossDomain,
	            beforeSend: function beforeSend(xhr) {
	                var headerKeys = Object.keys(option.headers);
	                if (jQuery.isArray(headerKeys) === true && headerKeys.length > 0) {
	                    headerKeys.forEach(function (element) {
	                        xhr.setRequestHeader(element, option.headers[element]);
	                    });
	                }
	            }
	        }).then(function (data, textStatus, jqXHR) {
	            resolve(data);
	        }, function (jqXHR, textStatus, errorThrown) {
	            var errorMessage = {};
	            errorMessage['jqXHR'] = jqXHR;
	            errorMessage['textStatus'] = textStatus;
	            errorMessage['errorThrown'] = errorThrown;
	            reject(errorMessage);
	        });
	    });
	};
	
	AjaxCallJQuery.prototype.post = function () {
	    var option = this._setting;
	    return new Promise(function (resolve, reject) {
	        jQuery.ajax({
	            method: 'POST',
	            url: option.url,
	            dataType: option.dataType,
	            data: option.data,
	            contentType: option.contentType,
	            crossDomain: option.crossDomain,
	            beforeSend: function beforeSend(xhr) {
	                var headerKeys = Object.keys(option.headers);
	                if (jQuery.isArray(headerKeys) === true && headerKeys.length > 0) {
	                    headerKeys.forEach(function (element) {
	                        xhr.setRequestHeader(element, option.headers[element]);
	                    });
	                }
	            }
	        }).then(function (data, textStatus, jqXHR) {
	            resolve(data);
	        }, function (jqXHR, textStatus, errorThrown) {
	            var errorMessage = {};
	            errorMessage['jqXHR'] = jqXHR;
	            errorMessage['textStatus'] = textStatus;
	            errorMessage['errorThrown'] = errorThrown;
	            reject(errorMessage);
	        });
	    });
	};
	
	AjaxCallJQuery.prototype.put = function () {
	    var option = this._setting;
	    return new Promise(function (resolve, reject) {
	        jQuery.ajax({
	            method: 'PUT',
	            url: option.url,
	            dataType: option.dataType,
	            data: option.data,
	            contentType: option.contentType,
	            crossDomain: option.crossDomain,
	            beforeSend: function beforeSend(xhr) {
	                var headerKeys = Object.keys(option.headers);
	                if (jQuery.isArray(headerKeys) === true && headerKeys.length > 0) {
	                    headerKeys.forEach(function (element) {
	                        xhr.setRequestHeader(element, option.headers[element]);
	                    });
	                }
	            }
	        }).then(function (data, textStatus, jqXHR) {
	            resolve(data);
	        }, function (jqXHR, textStatus, errorThrown) {
	            var errorMessage = {};
	            errorMessage['jqXHR'] = jqXHR;
	            errorMessage['textStatus'] = textStatus;
	            errorMessage['errorThrown'] = errorThrown;
	            reject(errorMessage);
	        });
	    });
	};
	
	AjaxCallJQuery.prototype.delete = function () {
	    var option = this._setting;
	    return new Promise(function (resolve, reject) {
	        jQuery.ajax({
	            method: 'DELETE',
	            url: option.url,
	            dataType: option.dataType,
	            data: option.data,
	            contentType: option.contentType,
	            crossDomain: option.crossDomain,
	            beforeSend: function beforeSend(xhr) {
	                var headerKeys = Object.keys(option.headers);
	                if (jQuery.isArray(headerKeys) === true && headerKeys.length > 0) {
	                    headerKeys.forEach(function (element) {
	                        xhr.setRequestHeader(element, option.headers[element]);
	                    });
	                }
	            }
	        }).then(function (data, textStatus, jqXHR) {
	            resolve(data);
	        }, function (jqXHR, textStatus, errorThrown) {
	            var errorMessage = {};
	            errorMessage['jqXHR'] = jqXHR;
	            errorMessage['textStatus'] = textStatus;
	            errorMessage['errorThrown'] = errorThrown;
	            reject(errorMessage);
	        });
	    });
	};
	
	module.exports = AjaxCallJQuery;

/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _reactCookie = __webpack_require__(91);
	
	var _reactCookie2 = _interopRequireDefault(_reactCookie);
	
	var _NetwCookieConstants = __webpack_require__(26);
	
	var _NetwCookieConstants2 = _interopRequireDefault(_NetwCookieConstants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _getNetwCookieKey = function _getNetwCookieKey(key, customize) {
	    var _cookieKeys = _NetwCookieConstants2.default.CookieKeys;
	    var cookieName = '';
	    if (typeof customize !== 'string') {
	        customize = 'netwCookie';
	    }
	    switch (key) {
	        case _cookieKeys.NETW_USER:
	            cookieName = 'neui';
	            break;
	        case _cookieKeys.CART_NAME:
	            cookieName = 'sc';
	            break;
	        default:
	            cookieName = customize;
	    }
	    return cookieName;
	};
	
	var NetwCookie = function NetwCookie(key, opt) {
	    this._cookieName = _getNetwCookieKey(key, key);
	    this._setting = {
	        path: '/',
	        expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
	        expiredays: 0,
	        //expires: null,
	        //maxAge: 0,
	        //domain: netwGlobal.neRootDM,
	        domain: window._netwCookieDomain,
	        secure: false,
	        httpOnly: false,
	        firstPartyOnly: false
	    };
	
	    if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object') {
	        jQuery.extend(this._setting, opt);
	    }
	    if (this._setting.expiredays !== 0) {
	        this._setting.expires = new Date(new Date().getTime() + 24 * this._setting.expiredays * 60 * 60 * 1000);
	    }
	};
	
	NetwCookie.prototype.get = function () {
	    return _reactCookie2.default.load(this._cookieName);
	};
	
	NetwCookie.prototype.set = function (val) {
	    return _reactCookie2.default.save(this._cookieName, val, this._setting);
	};
	
	NetwCookie.prototype.delete = function () {
	    return _reactCookie2.default.remove(this._cookieName, this._setting);
	};
	
	module.exports = NetwCookie;

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var cookie = __webpack_require__(92);
	
	if (typeof Object.assign != 'function') {
	  Object.assign = function (target) {
	    'use strict';
	
	    if (target == null) {
	      throw new TypeError('Cannot convert undefined or null to object');
	    }
	
	    target = Object(target);
	    for (var index = 1; index < arguments.length; index++) {
	      var source = arguments[index];
	      if (source != null) {
	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }
	    }
	    return target;
	  };
	}
	
	var _rawCookie = {};
	var _res = undefined;
	
	function _isResWritable() {
	  if (!_res) return false;
	  if (_res.headersSent === true) return false;
	  return true;
	}
	
	function load(name, doNotParse) {
	  var cookies = typeof document === 'undefined' ? _rawCookie : cookie.parse(document.cookie);
	  var cookieVal = cookies && cookies[name];
	
	  if (!doNotParse) {
	    try {
	      cookieVal = JSON.parse(cookieVal);
	    } catch (e) {
	      // Not serialized object
	    }
	  }
	
	  return cookieVal;
	}
	
	function select(regex) {
	  var cookies = typeof document === 'undefined' ? _rawCookie : cookie.parse(document.cookie);
	  if (!cookies) return {};
	  if (!regex) return cookies;
	  return Object.keys(cookies).reduce(function (accumulator, name) {
	    if (!regex.test(name)) return accumulator;
	    var newCookie = {};
	    newCookie[name] = cookies[name];
	    return Object.assign({}, accumulator, newCookie);
	  }, {});
	}
	
	function save(name, val, opt) {
	  _rawCookie[name] = val;
	
	  // allow you to work with cookies as objects.
	  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	    _rawCookie[name] = JSON.stringify(val);
	  }
	
	  // Cookies only work in the browser
	  if (typeof document !== 'undefined') {
	    document.cookie = cookie.serialize(name, _rawCookie[name], opt);
	  }
	
	  if (_isResWritable() && _res.cookie) {
	    _res.cookie(name, val, opt);
	  }
	}
	
	function remove(name, opt) {
	  delete _rawCookie[name];
	
	  if (typeof opt === 'undefined') {
	    opt = {};
	  } else if (typeof opt === 'string') {
	    // Will be deprecated in future versions
	    opt = { path: opt };
	  }
	
	  if (typeof document !== 'undefined') {
	    opt.expires = new Date(1970, 1, 1, 0, 0, 1);
	    document.cookie = cookie.serialize(name, '', opt);
	  }
	
	  if (_isResWritable() && _res.clearCookie) {
	    _res.clearCookie(name, opt);
	  }
	}
	
	function setRawCookie(rawCookie) {
	  if (rawCookie) {
	    _rawCookie = cookie.parse(rawCookie);
	  } else {
	    _rawCookie = {};
	  }
	}
	
	function plugToRequest(req, res) {
	  if (req.cookie) {
	    _rawCookie = req.cookie;
	  } else if (req.cookies) {
	    _rawCookie = req.cookies;
	  } else if (req.headers && req.headers.cookie) {
	    setRawCookie(req.headers.cookie);
	  } else {
	    _rawCookie = {};
	  }
	
	  _res = res;
	  return function unplug() {
	    _res = null;
	    _rawCookie = {};
	  };
	}
	
	var reactCookie = {
	  load: load,
	  select: select,
	  save: save,
	  remove: remove,
	  setRawCookie: setRawCookie,
	  plugToRequest: plugToRequest
	};
	
	if (typeof window !== 'undefined') {
	  window['reactCookie'] = reactCookie;
	}
	
	module.exports = reactCookie;

/***/ },

/***/ 92:
/***/ function(module, exports) {

	'use strict';
	
	/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 * @public
	 */
	
	exports.parse = parse;
	exports.serialize = serialize;
	
	/**
	 * Module variables.
	 * @private
	 */
	
	var decode = decodeURIComponent;
	var encode = encodeURIComponent;
	
	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */
	
	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
	
	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */
	
	function parse(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }
	
	  var obj = {};
	  var opt = options || {};
	  var pairs = str.split(/; */);
	  var dec = opt.decode || decode;
	
	  pairs.forEach(function (pair) {
	    var eq_idx = pair.indexOf('=');
	
	    // skip things that don't look like key=value
	    if (eq_idx < 0) {
	      return;
	    }
	
	    var key = pair.substr(0, eq_idx).trim();
	    var val = pair.substr(++eq_idx, pair.length).trim();
	
	    // quoted values
	    if ('"' == val[0]) {
	      val = val.slice(1, -1);
	    }
	
	    // only assign once
	    if (undefined == obj[key]) {
	      obj[key] = tryDecode(val, dec);
	    }
	  });
	
	  return obj;
	}
	
	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */
	
	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;
	
	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }
	
	  var value = enc(val);
	
	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }
	
	  var pairs = [name + '=' + value];
	
	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;
	    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
	    pairs.push('Max-Age=' + maxAge);
	  }
	
	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }
	
	    pairs.push('Domain=' + opt.domain);
	  }
	
	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }
	
	    pairs.push('Path=' + opt.path);
	  }
	
	  if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());
	  if (opt.httpOnly) pairs.push('HttpOnly');
	  if (opt.secure) pairs.push('Secure');
	
	  return pairs.join('; ');
	}
	
	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */
	
	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}

/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var NetwCookieKeys = __webpack_require__(26);
	var NetwWebAPIUtils = __webpack_require__(88);
	var NetwCookie = __webpack_require__(90);
	
	var _host = window._netwHost;
	
	module.exports = {
	    parseUrlFormatByName: function parseUrlFormatByName(content, name) {
	        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	            results = regex.exec(content);
	        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	    },
	    parseUrlFormatByNameIC: function parseUrlFormatByNameIC(content, name) {
	        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)", "gi"),
	            results = regex.exec(content);
	        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	    },
	    isHttpUriAbsolute: function isHttpUriAbsolute(uri) {
	        var result = false;
	        if (uri.indexOf('http://') === 0 || uri.indexOf('https://') === 0) {
	            result = true;
	        }
	        return result;
	    },
	    isUriAbsolute: function isUriAbsolute(uri) {
	        var result = false;
	        var absoluteUrl = new RegExp('^(?:[a-z]+:)?//', 'i');
	        result = absoluteUrl.test(uri);
	        return result;
	    },
	    isSecure: function isSecure() {
	        if (window.location.protocol != "https:") {
	            return false;
	        } else {
	            return true;
	        }
	    },
	    isLogin: function isLogin() {
	        var path = window._netwHost + '/api/auchk';
	        var opt = {
	            url: path,
	            async: true,
	            cache: false,
	            dataType: 'json',
	            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
	            crossDomain: true,
	            headers: {},
	            customAuthorization: false
	        };
	        var neui = new NetwCookie(NetwCookieKeys.CookieKeys.NETW_USER, null);
	        var _neui = neui.get();
	        if (!_neui) {
	            return new Promise(function (resolve, reject) {
	                resolve(false);
	            });
	        }
	
	        var netwApi = new NetwWebAPIUtils(opt);
	        return netwApi.get();
	    },
	    getEamil: function getEamil() {
	        var neui = new NetwCookie(NetwCookieKeys.CookieKeys.NETW_USER, null);
	        var _neui = neui.get();
	        if (!_neui) {
	            return "";
	        }
	        var email = this.parseUrlFormatByName(_neui, "mail");
	        return email;
	    },
	    matchEmail: function matchEmail(email) {
	        var emailRule = /^([\w-\.\+\-\_]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4})$/;
	        return email.match(emailRule);
	    }
	};

/***/ }

/******/ });
//# sourceMappingURL=nemLib.js.map