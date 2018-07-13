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

	module.exports = __webpack_require__(94);


/***/ },

/***/ 94:
/***/ function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	(function (window, $) {
	    var loadedModules = {},
	        neModules = {},
	        neReacts = {},
	        jsBasePath = "",
	        jsPaths = {},
	        pageDomain = "",
	        pageSSLDomain = "",
	        mpagePaths = {};
	
	    var nemModules = function nemModules(moduleName, moduleType, modulePath) {
	        var nemModule;
	        switch (moduleType) {
	            case 'react':
	                if (nemReact.reacts.hasOwnProperty(moduleName)) {
	                    nemModule = nemReact.reacts[moduleName];
	                }
	                break;
	            default:
	                if (nemReact.modules.hasOwnProperty(moduleName)) {
	                    nemModule = nemReact.modules[moduleName];
	                } else {
	                    nemModule = nemReact.modules[moduleName] = {};
	                }
	        }
	        /*
	        load js sync and execute
	        synchronous Script Loading and Lazy Loading
	        */
	        return nemModule;
	    };
	
	    var isLoadModules = function isLoadModules(src, isLoad) {
	        loadedModules[src] = isLoad;
	    };
	
	    var setModules = function setModules(moduleName, moduleObject) {
	        if (nemReact.modules.hasOwnProperty(moduleName)) {
	            var module = nemReact.modules[moduleName];
	            if (Object.keys(module).length === 0) {
	                $.extend(module, moduleObject);
	            }
	        } else {
	            nemReact.modules[moduleName] = moduleObject;
	        }
	    };
	
	    var initJS = function initJS(jsPath) {
	        if (!$.isArray(jsPath)) {
	            return;
	        }
	        for (var i = 0; i < jsPath.length; i++) {
	            if ((typeof jsPath === "undefined" ? "undefined" : _typeof(jsPath)) === "object") {
	                var src = "",
	                    async = true,
	                    defer = false,
	                    configJS = {},
	                    callback = null,
	                    args = [];
	                if (jsPath[i].hasOwnProperty('key') && typeof jsPath[i].key === 'string') {
	                    var key = jsPath[i].key;
	                    var keys = Object.keys(jsPaths);
	                    var configJS,
	                        isFind = false;
	                    for (var j = 0; j < keys.length; j++) {
	                        if (keys[j] == key) {
	                            isFind = true;
	                            configJS = jsPaths[key];
	                        }
	                    }
	                    if (!isFind) {
	                        console.log("Can't find the key[" + key + "] information in nemConfig.");
	                    }
	                }
	                if (configJS.hasOwnProperty("path") && typeof configJS.path === "string") {
	                    src = configJS.path;
	                }
	                if (configJS.hasOwnProperty("asyn") && typeof configJS.asyn === "boolean") {
	                    async = configJS.asyn;
	                }
	                if (configJS.hasOwnProperty("defer") && typeof configJS.defer === "boolean") {
	                    defer = configJS.defer;
	                }
	                if (jsPath[i].hasOwnProperty("cb") && typeof jsPath[i].cb === "function") {
	                    callback = jsPath[i].cb;
	                }
	                if (jsPath[i].hasOwnProperty("ag") && $.isArray(jsPath[i].ag) === true) {
	                    args = jsPath[i].ag;
	                }
	                if (src && src.indexOf("http") !== 0 && src.indexOf("//") !== 0 && !loadedModules.hasOwnProperty(src)) {
	                    jsLoad(src, async, defer, callback, args);
	                }
	                if (callback && loadedModules.hasOwnProperty(src)) {
	                    handleCallBack(callback, args);
	                }
	            }
	        }
	        return;
	    };
	
	    function config(configObject) {
	        if (configObject.hasOwnProperty('jsUrl') && typeof configObject.jsUrl === 'string') {
	            jsBasePath = configObject.jsUrl;
	        }
	        if (configObject.hasOwnProperty('jsPaths') && _typeof(configObject.jsPaths) === 'object') {
	            jsPaths = configObject.jsPaths;
	        }
	        if (configObject.hasOwnProperty('pageDomain') && typeof configObject.pageDomain === 'string') {
	            pageDomain = configObject.pageDomain;
	        }
	        if (configObject.hasOwnProperty('pageSSLDomain') && typeof configObject.pageSSLDomain === 'string') {
	            pageSSLDomain = configObject.pageSSLDomain;
	        }
	        if (configObject.hasOwnProperty('mpagePaths') && _typeof(configObject.mpagePaths) === 'object') {
	            mpagePaths = configObject.mpagePaths;
	        }
	    };
	
	    function jsLoad(src, async, defer, callback, args) {
	        var script = document.createElement("script");
	        var loaded;
	        script.type = "text/javascript";
	        script.src = src + ".js";
	        script.async = !defer ? async : false;
	        script.defer = defer;
	        if (callback) {
	            script.onreadystatechange = script.onload = function () {
	                if (!loaded) {
	                    handleCallBack(callback, args);
	                }
	                loaded = true;
	                isLoadModules(src, loaded);
	            };
	        } else {
	            script.onreadystatechange = script.onload = function () {
	                loaded = true;
	                isLoadModules(src, loaded);
	            };
	        }
	        /*
	        if load fail, then do something.
	        */
	        //document.getElementsByTagName('head')[0].appendChild(script);
	        document.head.appendChild(script);
	    };
	
	    function handleCallBack(callback, args) {
	        switch (args.length) {
	            // fast cases
	            case 0:
	                callback();
	                break;
	            case 1:
	                callback.call(this, args[0]);
	                break;
	            case 2:
	                callback.call(this, args[0], args[1]);
	                break;
	            // slower
	            default:
	                handler.apply(this, args);
	        }
	    }
	
	    function generateUrl(key, parameters) {
	        var path = "/";
	        var queryString = [];
	        var keys = Object.keys(mpagePaths);
	        var pageConfig,
	            isFind = false;
	        for (var i = 0; i < keys.length; i++) {
	            if (keys[i] == key) {
	                isFind = true;
	                pageConfig = mpagePaths[key];
	            }
	        }
	        if (!isFind) {
	            console.log("Can't find the page[" + key + "] information in pageConfig.");
	            return path;
	        }
	        if ((typeof parameters === "undefined" ? "undefined" : _typeof(parameters)) !== 'object') {
	            parameters = {};
	        }
	        var requiredKeys = [];
	        var parameterKeys = Object.keys(parameters);
	        path = pageConfig.relative;
	
	        if (pageConfig.hasOwnProperty("required")) {
	            requiredKeys = pageConfig.required;
	        }
	        var requiredNumber = 0;
	        for (var i = 0; i < parameterKeys.length; i++) {
	            for (var j = 0; j < requiredKeys.length; j++) {
	                if (parameterKeys[i].toUpperCase() == requiredKeys[j].toUpperCase()) {
	                    requiredNumber++;
	                }
	            }
	            queryString.push(encodeURI(parameterKeys[i] + "=" + parameters[parameterKeys[i]]));
	        }
	        if (requiredNumber != requiredKeys.length) {
	            console.log("Require parameter name [" + requiredKeys.toString() + "].");
	            return;
	        }
	        if (queryString.length == 0) {
	            return path;
	        }
	        path += "?";
	        for (var i = 0; i < queryString.length; i++) {
	            path += queryString[i];
	            if (i + 1 < queryString.length) {
	                path += "&";
	            }
	        }
	        return path;
	    }
	
	    /*
	    function sync_load(modulePath) {
	      var s = document.createElement('script');
	      s.type = 'text/javascript';
	      s.async = false;
	      s.src = '.' + modulePath;
	      var x = document.getElementsByTagName('script')[0];
	      x.parentNode.insertBefore(s, x);
	    }
	    function async_load(modulePath) {
	      var s = document.createElement('script');
	      s.type = 'text/javascript';
	      s.async = true;
	      s.src = '.' + modulePath;
	      var x = document.getElementsByTagName('script')[0];
	      x.parentNode.insertBefore(s, x);
	    }
	    */
	    window.nemReact = {
	        flux: new Flux.Dispatcher(),
	        modules: neModules,
	        reacts: neReacts,
	        require: nemModules,
	        initJS: initJS,
	        loadedModules: loadedModules,
	        isLoadModules: isLoadModules,
	        setModules: setModules,
	        config: config,
	        jsBasePath: jsBasePath,
	        jsPaths: jsPaths,
	        generateUrl: generateUrl
	    };
	})(window, jQuery);

/***/ }

/******/ });
//# sourceMappingURL=nemModules.js.map