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

	module.exports = __webpack_require__(58);


/***/ },

/***/ 50:
/***/ function(module, exports) {

	"use strict";
	
	var Loading = React.createClass({
	    displayName: "Loading",
	
	
	    loadStyle: function loadStyle() {
	        var divStyle = { height: "60px" };
	        if (typeof this.props.height === 'number') {
	            divStyle.height = this.props.height + "px";
	        }
	        return divStyle;
	    },
	
	    showContent: function showContent() {
	        var loadContent = React.createElement(
	            "div",
	            { className: "load" },
	            React.createElement(
	                "span",
	                null,
	                "Loading..."
	            )
	        );
	        if (typeof this.props.content === 'string') {
	            loadContent = this.props.content;
	        }
	        return loadContent;
	    },
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { style: this.loadStyle() },
	            this.showContent()
	        );
	    }
	});
	
	module.exports = Loading;

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var HomeTabTwo = __webpack_require__(59);
	
	var init = function init(elementID) {
	    ReactDOM.render(React.createElement(HomeTabTwo, null), document.getElementById(elementID));
	};
	
	var getComponent = function getComponent() {
	    return React.createElement(HomeTabTwo, null);
	};
	
	window.nemReact.reacts['homeFlash'] = {
	    init: init,
	    getComponent: getComponent
	};

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var NEProduct = nemReact.require("NEProduct", "react");
	var Loading = __webpack_require__(50);
	var FlashAction = nemReact.require('FlashAction');
	var FlashStore = nemReact.require('FlashStore');
	
	function getFlashItems(pageSize, pageNumber) {
	    var flashItems = FlashStore.getFlashItems();
	    if (flashItems == null || flashItems.length === 0) {
	        FlashAction.getFlashItems(pageSize, pageNumber);
	    }
	    return { flashItems: flashItems };
	}
	
	function generateFlashItem(flashItem) {
	    return React.createElement(NEProduct, {
	        key: flashItem.ID,
	        productID: flashItem.ItemID,
	        isDiscount: true,
	        imgUrl: flashItem.ImgUrl,
	        productLink: flashItem.ItemLink,
	        title: flashItem.Title,
	        qty: parseInt(flashItem.SellQuantity, 10),
	        marketPrice: parseInt(flashItem.OriginalPrice),
	        sellingPrice: parseInt(flashItem.GroupBuyPrice),
	        slogan: flashItem.Sdesc,
	        isSlogan: false,
	        showLeft: true,
	        notSale: flashItem.isExpired,
	        isFlash: true,
	        flashTime: flashItem.EndDate });
	}
	
	var HomeTabTwo = React.createClass({
	    displayName: "HomeTabTwo",
	
	
	    getInitialState: function getInitialState() {
	        return { pageNumber: FlashStore.getFlashCurrentPage(), pageSize: 3, flashItems: [], isLoad: true, reachMax: false };
	    },
	
	    componentWillMount: function componentWillMount() {
	        window.addEventListener("scroll", this.handleScroll);
	        this.setState(getFlashItems(this.state.pageSize, this.state.pageNumber));
	    },
	
	    componentDidMount: function componentDidMount() {
	        FlashStore.addChangeListener(this._onChange);
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        FlashStore.removeChangeListener(this._onChange);
	        window.removeEventListener("scroll", this.handleScroll);
	    },
	
	    handleScroll: function handleScroll(e) {
	        //this function will be triggered if user scrolls
	        //var windowHeight = $(window).height();
	        var windowHeight = $("#IndexTabContent").height();
	        var inHeight = window.innerHeight;
	        var scrollT = $(window).scrollTop();
	        var totalScrolled = scrollT + inHeight;
	        /*console.log('-------------------------------');
	        console.log(scrollT);
	        console.log(inHeight);
	        console.log(totalScrolled);
	        console.log(windowHeight);
	        console.log('-------------------------------');*/
	        if (totalScrolled + 100 > windowHeight) {
	            //user reached at bottom
	            if (!this.state.isLoad && !this.state.reachMax) {
	                this.setState({ isLoad: true });
	                var maxPage = FlashStore.getFlashMaxPage();
	                var getPage = ++this.state.pageNumber;
	                if (maxPage >= getPage) {
	                    FlashAction.getFlashItems(this.state.pageSize, getPage);
	                } else {
	                    this.setState({ reachMax: true, isLoad: false });
	                }
	            } else {
	                this.setState({ isLoad: false });
	            }
	        }
	    },
	
	    showLoad: function showLoad() {
	        if (this.state.isLoad) {
	            return React.createElement(Loading, null);
	        } else {
	            return null;
	        }
	    },
	
	    render: function render() {
	
	        var flashItems = [];
	        for (var i = 0; i < this.state.flashItems.length; i++) {
	            flashItems.push(generateFlashItem(this.state.flashItems[i]));
	        }
	        return React.createElement(
	            "li",
	            { className: "current", style: {
	                    display: "block"
	                } },
	            React.createElement(
	                "div",
	                { className: "flash" },
	                React.createElement(
	                    "div",
	                    { className: "flashBanner" },
	                    React.createElement("img", { src: "/Themes/2016/images/daySoonBuy_logo.svg" })
	                ),
	                flashItems,
	                this.showLoad()
	            )
	        );
	    },
	
	    _onChange: function _onChange() {
	        this.setState({ isLoad: false });
	        if (FlashStore.getHasData()) {
	            this.setState(getFlashItems(this.state.pageSize, this.state.pageNumber));
	        }
	    }
	});
	
	module.exports = HomeTabTwo;

/***/ }

/******/ });
//# sourceMappingURL=home.flash.js.map