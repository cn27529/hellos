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

	module.exports = __webpack_require__(60);


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

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var HomeTabThree = __webpack_require__(61);
	
	var init = function init(elementID) {
	    ReactDOM.render(React.createElement(HomeTabThree, null), document.getElementById(elementID));
	};
	
	var getComponent = function getComponent() {
	    return React.createElement(HomeTabThree, null);
	};
	
	window.nemReact.reacts['homeHotSale'] = {
	    init: init,
	    getComponent: getComponent
	};

/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var NEProduct = nemReact.require("NEProduct", "react");
	var Loading = __webpack_require__(50);
	var AdvEventAction = nemReact.require('AdvEventAction');
	var AdvEventStore = nemReact.require('AdvEventStore');
	var NetwTools = nemReact.require('NetwTools');
	
	function getHotSales() {
	    var hotSales = AdvEventStore.getHotSales();
	    if (typeof hotSales === 'undefined' || Object.keys(hotSales).length === 0) {
	        AdvEventAction.getHotSales();
	    }
	    return { hotSales: hotSales };
	}
	
	var HotSalesRadio = React.createClass({
	    displayName: "HotSalesRadio",
	
	    render: function render() {
	        return React.createElement("input", { type: "radio", name: "hotSaleTab", id: "hotSaleTab0" + this.props.order.toString(), hidden: true, defaultChecked: this.props.order == 1 ? true : false });
	    }
	});
	
	var HotSalesLabel = React.createClass({
	    displayName: "HotSalesLabel",
	
	
	    showSixTab: function showSixTab(order) {
	        var name = "";
	        switch (order) {
	            case 1:
	                name = "國際風尚";
	                break;
	            case 2:
	                name = "品味生活";
	                break;
	            case 3:
	                name = "活力健康";
	                break;
	            case 4:
	                name = "時尚科技";
	                break;
	            case 5:
	                name = "樂活時尚";
	                break;
	            case 6:
	                name = "海外直購";
	                break;
	            default:
	                name = "熱銷" + index;
	        }
	        return name;
	    },
	
	    render: function render() {
	        return React.createElement(
	            "label",
	            { htmlFor: "hotSaleTab0" + this.props.order, onClick: this.props.setCurrentTab },
	            React.createElement(
	                "span",
	                null,
	                this.showSixTab(this.props.order)
	            )
	        );
	    }
	});
	
	var HotSalesTabProduct = React.createClass({
	    displayName: "HotSalesTabProduct",
	
	    render: function render() {
	        return React.createElement(
	            "li",
	            { className: "hotSaleTop0" + this.props.currentTab },
	            React.createElement(
	                "h3",
	                null,
	                this.props.hotSales.advEventType.AdvTypeName
	            ),
	            React.createElement(
	                "ul",
	                { className: "prodLists ranks" },
	                this.props.hotSales.advEventList.map(function (advEvent, index) {
	                    return React.createElement(
	                        "li",
	                        { key: index, className: "top" + (index > 8 ? "" + (index + 1) : "0" + (index + 1)) },
	                        React.createElement(NEProduct, {
	                            key: index,
	                            productID: advEvent.ItemID,
	                            imgUrl: NetwTools.isHttpUriAbsolute(advEvent.ImgUrl) ? advEvent.ImgUrl : _netwImageSSLDM + advEvent.ImgUrl,
	                            productLink: advEvent.LinkUrl,
	                            title: advEvent.Title,
	                            qty: advEvent.ItemStock,
	                            marketPrice: advEvent.MarketPrice,
	                            sellingPrice: advEvent.SalePrice })
	                    );
	                }, this)
	            )
	        );
	    }
	});
	
	var HomeTabThree = React.createClass({
	    displayName: "HomeTabThree",
	
	
	    showRadioInput: function showRadioInput() {
	        var radios = [];
	        for (var i = 1; i <= Object.keys(this.state.hotSales).length; i++) {
	            var singleRadio = React.createElement(HotSalesRadio, { key: i, order: i });
	            radios.push(singleRadio);
	        }
	        return radios;
	    },
	    showLabelForRadio: function showLabelForRadio() {
	        var labels = [];
	        for (var i = 1; i <= Object.keys(this.state.hotSales).length; i++) {
	            var label = React.createElement(HotSalesLabel, { key: i, order: i, name: this.state.hotSales[i.toString()].advEventType.AdvTypeName, setCurrentTab: this.setCurrentTab.bind(this, i) });
	            labels.push(label);
	        }
	        return labels;
	    },
	
	    showLoad: function showLoad() {
	        if (this.state.isLoad) {
	            return React.createElement(Loading, null);
	        } else {
	            return null;
	        }
	    },
	
	    setCurrentTab: function setCurrentTab(tabNumber) {
	        this.setState({ currentTab: tabNumber });
	    },
	
	    showTabProduct: function showTabProduct() {
	        var tabProducts;
	        var currentTab = this.state.currentTab.toString();
	        if (this.state.hotSales.hasOwnProperty(currentTab)) {
	            tabProducts = React.createElement(HotSalesTabProduct, { currentTab: this.state.currentTab, hotSales: this.state.hotSales[currentTab] });
	        }
	        return tabProducts;
	    },
	
	    getInitialState: function getInitialState() {
	        return { hotSales: {}, currentTab: 1, isLoad: true };
	    },
	
	    componentWillMount: function componentWillMount() {
	        var hotSales = getHotSales();
	        if (Object.keys(hotSales.hotSales).length > 0) {
	            this.setState({ isLoad: false });
	        }
	        this.setState(hotSales);
	    },
	
	    componentDidMount: function componentDidMount() {
	        AdvEventStore.addChangeListener(this._onChange);
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        AdvEventStore.removeChangeListener(this._onChange);
	    },
	
	    render: function render() {
	        return React.createElement(
	            "li",
	            { className: "current", style: {
	                    display: "block"
	                } },
	            React.createElement(
	                "div",
	                { className: "hotSaleTop" },
	                this.showRadioInput(),
	                React.createElement(
	                    "div",
	                    { className: "hotSaleTabs" },
	                    this.showLabelForRadio()
	                ),
	                React.createElement(
	                    "ul",
	                    { className: "hotSaleTopContent" },
	                    this.showTabProduct()
	                )
	            ),
	            this.showLoad()
	        );
	    },
	
	    _onChange: function _onChange() {
	        this.setState({ isLoad: false });
	        this.setState(getHotSales());
	    }
	});
	
	module.exports = HomeTabThree;

/***/ }

/******/ });
//# sourceMappingURL=home.hotsale.js.map