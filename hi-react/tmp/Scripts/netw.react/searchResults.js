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

	module.exports = __webpack_require__(114);


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

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var SearchResultsContent = __webpack_require__(115);
	
	var init = function init() {
	    ReactDOM.render(React.createElement(SearchResultsContent, null), document.getElementById('content'));
	};
	
	window.nemReact.reacts['searchResults'] = {
	    init: init
	};

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var NEProduct = nemReact.require("NEProduct", "react");
	var NetwTools = nemReact.require('NetwTools');
	var SelectFrameProds = __webpack_require__(116);
	var Loading = __webpack_require__(50);
	var SearchAction = nemReact.require('SearchAction');
	var SearchStore = nemReact.require('SearchStore');
	
	var SEARCHPATH = "/searchResults.html";
	
	var ORDERLIST = [{
	    orderMenu: "6",
	    orderName: "最新上架"
	}, {
	    orderMenu: "3",
	    orderName: "人氣排行榜"
	}, {
	    orderMenu: "2",
	    orderName: "推薦排行"
	}, {
	    orderMenu: "0",
	    orderName: "金額高"
	}, {
	    orderMenu: "1",
	    orderName: "金額低"
	}];
	
	var SrchInInputBar = React.createClass({
	    displayName: "SrchInInputBar",
	
	
	    handleChange: function handleChange(event) {
	        this.setState({ srchIn: event.target.value });
	    },
	
	    getInitialState: function getInitialState() {
	        return { searchWord: this.props.searchWord, srchIn: this.props.srchIn };
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({ searchWord: nextProps.searchWord, srchIn: nextProps.srchIn });
	    },
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "searchAgain" },
	            React.createElement("input", { type: "text", placeholder: "請輸入商品關鍵字", value: this.state.srchIn, onChange: this.handleChange }),
	            React.createElement(
	                "a",
	                { href: "", className: "remove", onClick: this._clearSrchIn },
	                React.createElement(
	                    "span",
	                    null,
	                    "清除"
	                )
	            ),
	            React.createElement(
	                "button",
	                { type: "button", name: "button", onClick: this._goSrchIn },
	                "搜尋"
	            )
	        );
	    },
	    _clearSrchIn: function _clearSrchIn(event) {
	        event.preventDefault();
	        if (!this.state.srchIn) {
	            return;
	        }
	
	        var srchIn = "";
	        this.setState({ srchIn: srchIn });
	        this.props.setSrchIn(srchIn);
	    },
	    _goSrchIn: function _goSrchIn() {
	        if (!this.state.srchIn) {
	            return;
	        }
	        this.props.setSrchIn(this.state.srchIn);
	    }
	});
	
	function getSearchItems(searchWord, order, pageNumber, srchIn) {
	    var searchItems = SearchStore.getSearchItems();
	    if (searchItems == null || searchItems.length === 0) {
	        SearchAction.getSearchItems(searchWord, order, pageNumber, srchIn);
	    }
	    return { searchItems: searchItems };
	}
	
	var SearchResultsContent = React.createClass({
	    displayName: "SearchResultsContent",
	
	
	    setSrchIn: function setSrchIn(srchIn) {
	        var queryString = "searchword=" + this.state.searchWord + "&order=" + this.state.order + "&srchin=" + srchIn;
	        history.pushState({
	            searchWord: this.state.searchWord,
	            order: this.state.order,
	            srchIn: srchIn
	        }, "", "?" + queryString);
	        this.setState({ srchIn: srchIn, pageNumber: 0, searchItems: [], isLoad: true });
	        var that = this;
	        setTimeout(function () {
	            SearchAction.getSearchItems(that.state.searchWord, that.state.order, that.state.pageNumber, srchIn);
	        }, 200);
	    },
	
	    setOrder: function setOrder(order) {
	        var queryString = "searchword=" + this.state.searchWord + "&order=" + order + "&srchin=" + this.state.srchIn;
	        history.pushState({
	            searchWord: this.state.searchWord,
	            order: order,
	            srchIn: this.state.srchIn
	        }, "", "?" + queryString);
	        this.setState({ order: order, pageNumber: 0, searchItems: [], isLoad: true });
	        setTimeout(function () {
	            SearchAction.getSearchItems(this.state.searchWord, order, this.state.pageNumber, this.state.srchIn);
	        }.bind(this), 200);
	    },
	
	    handleScroll: function handleScroll(e) {
	        //this function will be triggered if user scrolls
	        //var windowHeight = $(window).height();
	        var windowHeight = $("#searchResults").height();
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
	            if (!this.state.isLoad && SearchStore.getHasData()) {
	                this.setState({ isLoad: true });
	                var maxPage = SearchStore.getSearchMaxPage();
	                var getPage = ++this.state.pageNumber;
	                if (maxPage >= getPage) {
	                    SearchAction.getSearchItems(this.state.searchWord, this.state.order, this.state.pageNumber, this.state.srchIn);
	                } else {
	                    this.setState({ isLoad: false });
	                }
	            } else {
	                this.setState({ isLoad: false });
	            }
	        }
	    },
	
	    handleOnPopState: function handleOnPopState(event) {
	        if (event.state) {
	            this.setState({ searchWord: event.state.searchWord, order: event.state.order, pageNumber: 0, srchIn: event.state.srchIn, isLoad: true });
	            //console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
	            setTimeout(function () {
	                SearchAction.getSearchItems(this.state.searchWord, this.state.order, 0, this.state.srchIn);
	            }.bind(this), 200);
	        } else {
	            var order = NetwTools.parseUrlFormatByNameIC(location.search, "order");
	            if (!order) {
	                order = "2";
	            }
	            var searchWord = NetwTools.parseUrlFormatByNameIC(location.search, "searchword");
	            var srchIn = NetwTools.parseUrlFormatByNameIC(location.search, "srchin");
	
	            this.setState({ searchWord: searchWord, order: order, pageNumber: 0, srchIn: srchIn, isLoad: true });
	            setTimeout(function () {
	                SearchAction.getSearchItems(this.state.searchWord, this.state.order, 0, this.state.srchIn);
	            }.bind(this), 200);
	        }
	    },
	
	    showLoad: function showLoad() {
	        if (this.state.isLoad) {
	            return React.createElement(Loading, null);
	        } else {
	            return null;
	        }
	    },
	
	    generateNEProd: function generateNEProd() {
	        var productLists = [];
	        for (var i = 0; i < this.state.searchItems.length; i++) {
	            var product = React.createElement(NEProduct, {
	                productID: this.state.searchItems[i].ID,
	                imgUrl: this.state.searchItems[i].PhotoName,
	                productLink: '',
	                title: this.state.searchItems[i].Name,
	                qty: this.state.searchItems[i].SellingQty,
	                marketPrice: 0,
	                sellingPrice: this.state.searchItems[i].Pricecash
	            });
	            productLists.push(product);
	        }
	        return productLists;
	    },
	
	    componentWillMount: function componentWillMount() {
	        window.addEventListener("scroll", this.handleScroll);
	        window.addEventListener("popstate", this.handleOnPopState);
	        this.setState(getSearchItems(this.state.searchWord, this.state.order, this.state.pageNumber, this.state.srchIn));
	    },
	
	    componentDidMount: function componentDidMount() {
	        SearchStore.addChangeListener(this._onChange);
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        SearchStore.removeChangeListener(this._onChange);
	        window.removeEventListener("scroll", this.handleScroll);
	        window.removeEventListener("popstate", this.handleOnPopState);
	    },
	
	    getInitialState: function getInitialState() {
	        var order = NetwTools.parseUrlFormatByNameIC(location.search, "order");
	        if (!order) {
	            order = "2";
	        }
	        return {
	            searchWord: NetwTools.parseUrlFormatByNameIC(location.search, "searchword"),
	            srchIn: NetwTools.parseUrlFormatByNameIC(location.search, "srchin"),
	            order: order,
	            pageNumber: 0,
	            totalNum: 0,
	            isLoad: true,
	            searchItems: []
	        };
	    },
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "searchResults", id: "searchResults" },
	            React.createElement(
	                "div",
	                { className: "searchBar" },
	                React.createElement(
	                    "div",
	                    { className: "sRsText" },
	                    React.createElement(
	                        "p",
	                        null,
	                        "搜尋結果:"
	                    ),
	                    React.createElement(
	                        "p",
	                        null,
	                        this.state.searchWord
	                    ),
	                    React.createElement(
	                        "p",
	                        null,
	                        "(共",
	                        this.state.totalNum,
	                        "筆)"
	                    )
	                ),
	                React.createElement(SrchInInputBar, { searchWord: this.state.searchWord, srchIn: this.state.srchIn, setSrchIn: this.setSrchIn })
	            ),
	            React.createElement(
	                "div",
	                { className: "searchResultsContent" },
	                React.createElement(SelectFrameProds, {
	                    noProductWords: "無搜尋結果，請嘗試其他關鍵字",
	                    productLists: this.generateNEProd(),
	                    prodListKey: this.state.searchWord + this.state.srchIn + this.state.order,
	                    orderList: ORDERLIST,
	                    orderMenu: this.state.order,
	                    setOrder: this.setOrder,
	                    isLoad: this.state.isLoad
	                })
	            ),
	            this.showLoad()
	        );
	    },
	
	    _onChange: function _onChange() {
	        this.setState({ isLoad: false, totalNum: SearchStore.getSearchTotalNum() });
	        if (SearchStore.getHasData()) {
	            this.setState(getSearchItems(this.state.searchWord, this.state.order, this.state.pageNumber, this.state.srchIn));
	        }
	    }
	});
	
	module.exports = SearchResultsContent;

/***/ },

/***/ 116:
/***/ function(module, exports) {

	"use strict";
	
	//var NEProduct = nemReact.require("NEProduct", "react");
	
	// Default order list
	var orderList = [{
	    orderMenu: "newArrival",
	    orderName: "最新上架"
	}, {
	    orderMenu: "popularity",
	    orderName: "人氣排行榜"
	}, {
	    orderMenu: "recommended",
	    orderName: "推薦排行"
	}, {
	    orderMenu: "highPrice",
	    orderName: "金額高"
	}, {
	    orderMenu: "lowPrice",
	    orderName: "金額低"
	}];
	
	var ProductInLi = React.createClass({
	    displayName: "ProductInLi",
	
	    render: function render() {
	        return React.createElement(
	            "li",
	            null,
	            this.props.product
	        );
	    }
	});
	
	var SelectFrameProds = React.createClass({
	    displayName: "SelectFrameProds",
	
	
	    setProdStyle: function setProdStyle(isFull) {
	        this.setState({ fullProdStyle: isFull });
	    },
	
	    showProducts: function showProducts() {
	        var productLists = [];
	        if (typeof this.state.productLists === "undefined" || this.state.productLists.length == 0 && !this.state.isLoad) {
	            var product = React.createElement(
	                "div",
	                { key: "noProducts" },
	                this.state.noProductWords
	            );
	            productLists.push(product);
	            return productLists;
	        }
	        for (var i = 0; i < this.state.productLists.length; i++) {
	            var product = React.createElement(ProductInLi, { key: i, product: this.state.productLists[i] });
	            productLists.push(product);
	        }
	        return productLists;
	    },
	
	    propTypes: {
	        productLists: React.PropTypes.array,
	        noProductWords: React.PropTypes.string,
	        orderList: React.PropTypes.array.isRequired
	    },
	
	    handleSelectOrder: function handleSelectOrder(e) {
	        this.setState({ currentOrderMenu: e.target.value });
	        //var that = this;
	        setTimeout(function () {
	            this.props.setOrder(this.state.currentOrderMenu);
	        }.bind(this), 200);
	    },
	
	    getInitialState: function getInitialState() {
	        return { orderSelect: orderList, currentOrderMenu: orderList[0].orderMenu, fullProdStyle: false, productLists: this.props.productLists, noProductWords: this.props.noProductWords, isLoad: this.props.isLoad };
	    },
	
	    componentWillMount: function componentWillMount() {
	        this.setState({ orderSelect: this.props.orderList, currentOrderMenu: this.props.orderMenu });
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({ productLists: nextProps.productLists, noProductWords: nextProps.noProductWords, currentOrderMenu: nextProps.orderMenu, isLoad: nextProps.isLoad });
	    },
	
	    componentDidMount: function componentDidMount() {
	        // $(function(){
	        //     $(function(){
	        //         $('.frameTwo').click(function() {
	        //     		$('.frameList .prodLists').addClass("full");
	        //     		$(this).addClass("frameColor");
	        //     		$('.frameOne').removeClass("frameColor");
	        //     	});
	        //         $('.frameOne').click(function() {
	        //             $('.frameList .prodLists').removeClass("full");
	        //             $(this).addClass("frameColor");
	        //             $('.frameTwo').removeClass("frameColor");
	        //         });
	        //     });
	        // });
	    },
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "SelectFramePage" },
	            React.createElement(
	                "div",
	                { className: "selectFrame" },
	                React.createElement(
	                    "p",
	                    { className: "selectWrap noLabel" },
	                    React.createElement(
	                        "select",
	                        { value: this.state.currentOrderMenu, onChange: this.handleSelectOrder },
	                        this.state.orderSelect.map(function (item, index) {
	                            return React.createElement(
	                                "option",
	                                { key: index, value: item.orderMenu },
	                                item.orderName
	                            );
	                        }, this)
	                    )
	                ),
	                React.createElement("p", { className: "frameTwo fa " + (this.state.fullProdStyle ? "frameColor" : ""), onClick: this.setProdStyle.bind(this, true) }),
	                React.createElement("p", { className: "frameOne fa " + (this.state.fullProdStyle ? "" : "frameColor"), onClick: this.setProdStyle.bind(this, false) })
	            ),
	            React.createElement(
	                "div",
	                { className: "subprodLists frameList" },
	                React.createElement(
	                    "ul",
	                    { className: "prodLists " + (this.state.fullProdStyle ? "full" : ""), key: this.props.prodListKey },
	                    this.showProducts()
	                )
	            )
	        );
	    }
	});
	
	module.exports = SelectFrameProds;

/***/ }

/******/ });
//# sourceMappingURL=searchResults.js.map