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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var CategoryContent = __webpack_require__(2);
	
	var init = function init() {
	    ReactDOM.render(React.createElement(CategoryContent, null), document.getElementById('content'));
	};
	
	window.nemReact.reacts['category'] = {
	    init: init
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var NEProduct = nemReact.require("NEProduct", "react");
	var ProductType = __webpack_require__(3);
	
	var storeBannerAction = nemReact.require('storeBannerAction');
	var StoresBannerStore = nemReact.require('StoresBannerStore');
	
	var storeAction = nemReact.require('storeAction');
	var storesStore = nemReact.require('storesStore');
	
	var NetwTools = nemReact.require('NetwTools');
	
	//bannerSlide
	var CateBannerView = React.createClass({
	    displayName: "CateBannerView",
	
	    getInitialState: function getInitialState() {
	        return {
	            BannerData: []
	        };
	    },
	
	    componentWillMount: function componentWillMount() {
	        this.setState({ BannerData: this.props.bannerData });
	    },
	
	    componentDidMount: function componentDidMount() {
	        $(function () {
	            $(".catesBnSlide").slick({
	                dots: true
	            });
	        });
	    },
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "module slider single-item catesBnSlide" },
	            !!this.state.BannerData ? this.state.BannerData.map(function (item, index) {
	                return React.createElement(
	                    "div",
	                    { key: index },
	                    React.createElement(
	                        "a",
	                        { "data-id": item.id, href: item.link },
	                        React.createElement("img", { src: NetwTools.isHttpUriAbsolute(item.imgUrl) ? item.imgUrl : _netwImageDM + item.imgUrl, alt: item.name })
	                    )
	                );
	            }, this) : null
	        );
	    }
	});
	
	var ShopWindowItemView = React.createClass({
	    displayName: "ShopWindowItemView",
	
	    getInitialState: function getInitialState() {
	        return {
	            ItemAllData: []
	        };
	    },
	
	    componentWillMount: function componentWillMount() {
	        this.setState({ ItemAllData: this.props.ItemAllData });
	    },
	
	    render: function render() {
	        var ProdListsData = this.state.ItemAllData;
	
	        return React.createElement(
	            "ul",
	            { className: "prodLists" },
	            ProdListsData.length != 0 ? ProdListsData.map(function (item, index) {
	                return React.createElement(
	                    "li",
	                    { key: index },
	                    React.createElement(NEProduct, {
	                        productID: item.ItemID,
	                        imgUrl: NetwTools.isHttpUriAbsolute(item.ItemImage) ? item.ItemImage : _netwImageDM + item.ItemImage
	                        //imgUrl= { NetwTools.isHttpUriAbsolute(item.ItemImage) ? item.ItemImage : item.ItemImage  }
	                        , productLink: "",
	                        title: !!item.Title ? item.Title : '', qty: 2,
	                        marketPrice: item.marketPrice, sellingPrice: item.UnitPrice })
	                );
	            }, this) : null
	        );
	    }
	});
	
	var CateNavView = React.createClass({
	    displayName: "CateNavView",
	
	    getInitialState: function getInitialState() {
	        return {
	            shopWindowData: []
	        };
	    },
	
	    componentWillMount: function componentWillMount() {
	        this.setState({ shopWindowData: this.props.storeSubData });
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({ shopWindowData: nextProps.storeSubData });
	
	        $(function () {
	            var $tabTarget = $(".Categorytabs > .slider");
	            $tabTarget.slick('unslick');
	
	            $tabTarget.slick({
	                infinite: false,
	                slidesToShow: 3,
	                slidesToScroll: 3,
	                dots: false,
	                arrows: false
	            });
	        });
	    },
	
	    componentDidMount: function componentDidMount() {
	        $(function () {
	            var $tabTarget = $(".Categorytabs > .slider");
	            var $tabContentClass = $tabTarget.next("ul").attr("class");
	
	            $tabTarget.children("div").addClass("tab");
	            $tabTarget.next("ul").removeClass("").attr("class", "tabsContent " + $tabContentClass);
	            $tabTarget.find("div.tab").eq(0).addClass("tab-current");
	
	            $tabTarget.find("div.tab").each(function () {
	                $(this).find("a").click(function () {
	                    var $index = $(this).parent("div").index();
	                    $(this).parent("div").addClass("tab-current").siblings("div.tab-current").removeClass("tab-current");
	                    $("ul.tabsContent").children("li").eq($index).addClass("show").siblings("li.show").removeClass("show");
	                });
	            });
	
	            $tabTarget.slick({
	                infinite: false,
	                slidesToShow: 3,
	                slidesToScroll: 3,
	                dots: false,
	                arrows: false
	            });
	
	            $(".Categorytabs .btn-prev").on("click", function () {
	                $(".Categorytabs > .slider").slick("slickPrev");
	            });
	            $(".Categorytabs .btn-next").on("click", function () {
	                $(".Categorytabs > .slider").slick("slickNext");
	            });
	        });
	    },
	
	    render: function render() {
	        var shopWindowLists = this.state.shopWindowData,
	            firstChildNode = shopWindowLists[0].cateID;
	
	        return React.createElement(
	            "div",
	            { className: "tabs Categorytabs" },
	            React.createElement(
	                "button",
	                { type: "button", className: "btn-arrow btn-prev" },
	                "Previous"
	            ),
	            React.createElement(
	                "button",
	                { type: "button", className: "btn-arrow btn-next" },
	                "Next"
	            ),
	            React.createElement(
	                "div",
	                { className: "slider multiple-items" },
	                shopWindowLists.map(function (item, index) {
	                    return React.createElement(
	                        "div",
	                        { key: index },
	                        React.createElement(
	                            "a",
	                            { "data-cateid": item.cateID },
	                            React.createElement(
	                                "span",
	                                null,
	                                item.Title
	                            )
	                        )
	                    );
	                }, this)
	            ),
	            React.createElement(
	                "ul",
	                { className: "CategoryTabContent" },
	                shopWindowLists.map(function (item, index) {
	                    return React.createElement(
	                        "li",
	                        { key: index, className: item.cateID == firstChildNode ? 'show' : '' },
	                        React.createElement(ShopWindowItemView, { ItemAllData: item.Itemlists })
	                    );
	                }, this)
	            )
	        );
	    }
	});
	
	var CategoryContent = React.createClass({
	    displayName: "CategoryContent",
	
	
	    getInitialState: function getInitialState() {
	        var nowStoreID = window.location.search.split("?")[1].split("=")[1];
	
	        return {
	            storeID: nowStoreID,
	            storeData: [],
	            storeBannerData: []
	        };
	    },
	
	    componentWillMount: function componentWillMount() {
	        storeBannerAction.getAll(this.state.storeID);
	        storeAction.getAll(this.state.storeID);
	
	        StoresBannerStore.addChangeListener(this._onBannerChange);
	        storesStore.addChangeListener(this._onChange);
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        StoresBannerStore.removeChangeListener(this._onBannerChange);
	        storesStore.removeChangeListener(this._onChange);
	    },
	
	    mapingClassName: function mapingClassName(string) {
	        var classNameMap = [{
	            name: '美國新蛋直購',
	            class: 'NeweggUSA'
	        }, {
	            name: '尋找禮品',
	            class: 'Gift'
	        }, {
	            name: '設計風尚',
	            class: 'Design'
	        }, {
	            name: '國際名品',
	            class: 'Fashion'
	        }, {
	            name: '美妝保養',
	            class: 'Beauty'
	        }, {
	            name: '保健養生',
	            class: 'Healthcare'
	        }, {
	            name: '樂活食尚',
	            class: 'Foods'
	        }, {
	            name: '運動健身',
	            class: 'Sport'
	        }, {
	            name: '戶外休旅',
	            class: 'Outdoor'
	        }, {
	            name: '親子寵物',
	            class: 'Lovely'
	        }, {
	            name: '居家用品',
	            class: 'Living'
	        }, {
	            name: '生活家電',
	            class: 'Appliance'
	        }, {
	            name: '數位3C',
	            class: 'Digital'
	        }, {
	            name: '電腦週邊',
	            class: 'Computer'
	        }, {
	            name: '世界城市好好逛',
	            class: null
	        }];
	
	        var currentClass = 'category';
	
	        for (var i in classNameMap) {
	            if (string == classNameMap[i].name) {
	                currentClass += " cate" + classNameMap[i].class;
	            }
	        }
	
	        return currentClass;
	    },
	
	    processShopWindowLists: function processShopWindowLists(datatSource) {
	        var shopWindowData = [];
	        for (var i in datatSource) {
	            // console.log();
	            var tempArr = {
	                Title: '',
	                cateID: '',
	                Itemlists: []
	            };
	
	            tempArr.Title = datatSource[i].MainZone.Title;
	            tempArr.cateID = datatSource[i].ID;
	            tempArr.Itemlists = processItemLists(datatSource[i]);
	            processItemLists(datatSource[i]);
	            shopWindowData[i] = tempArr;
	        }
	
	        function processItemLists(obj) {
	            var itemListCollect = [];
	            var MainItemList = obj.MainZone.ItemList;
	            var SubItemLists = obj.ListZone.ItemList;
	
	            for (var i in MainItemList) {
	                if (MainItemList[i].ItemID == 0) {
	                    delete MainItemList[i];
	                }
	            }
	
	            return MainItemList.concat(SubItemLists);
	        }
	
	        return shopWindowData;
	    },
	
	    render: function render() {
	        var storeTitle = this.state.storeData.Title,
	            storeBannerData = this.state.storeBannerData,
	            storeSubTabs = this.state.storeData.Elevator,
	            shopWindowList = this.processShopWindowLists(this.state.storeData.ShopWindowList);
	
	        return React.createElement(
	            "div",
	            { className: this.mapingClassName(storeTitle) },
	            React.createElement(
	                "div",
	                { className: "title" },
	                React.createElement(
	                    "h3",
	                    { style: { display: !storeTitle ? 'none' : '' } },
	                    storeTitle
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "CategoryContent" },
	                storeBannerData != 0 ? React.createElement(CateBannerView, { bannerData: storeBannerData }) : null,
	                React.createElement(
	                    "div",
	                    { className: "catesNav" },
	                    shopWindowList.length != 0 ? React.createElement(CateNavView, { storeSubData: shopWindowList }) : null
	                )
	            )
	        );
	    },
	
	    _onChange: function _onChange() {
	        this.setState({
	            storeData: storesStore.getAll()
	        });
	    },
	
	    _onBannerChange: function _onBannerChange() {
	        this.setState({
	            storeBannerData: StoresBannerStore.getAll()
	        });
	    }
	});
	
	module.exports = CategoryContent;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	var ProductType = React.createClass({
	    displayName: "ProductType",
	
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "ProductType" },
	            React.createElement(
	                "ul",
	                { className: "ProductTypeContent TypeBorder8" },
	                React.createElement(
	                    "li",
	                    { className: "Type" },
	                    React.createElement(
	                        "a",
	                        { href: "" },
	                        React.createElement(
	                            "span",
	                            { className: "TypeBg" },
	                            React.createElement("img", { src: "https://negcdn.azureedge.net/www/pic/item/0048/5083_1_300.jpg", alt: "" })
	                        ),
	                        React.createElement(
	                            "span",
	                            { className: "TypeTxt" },
	                            "智慧穿戴智慧穿戴智慧穿戴智慧穿戴"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "li",
	                    { className: "Type" },
	                    React.createElement(
	                        "a",
	                        { href: "" },
	                        React.createElement(
	                            "span",
	                            { className: "TypeBg" },
	                            React.createElement("img", { src: "https://negcdn.azureedge.net/www/pic/item/0054/1752_1_300.jpg", alt: "" })
	                        ),
	                        React.createElement(
	                            "span",
	                            { className: "TypeTxt" },
	                            "智慧穿戴"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "li",
	                    { className: "Type" },
	                    React.createElement(
	                        "a",
	                        { href: "" },
	                        React.createElement(
	                            "span",
	                            { className: "TypeBg" },
	                            React.createElement("img", { src: "https://negcdn.azureedge.net/www/pic/item/0012/5512_1_300.jpg", alt: "" })
	                        ),
	                        React.createElement(
	                            "span",
	                            { className: "TypeTxt" },
	                            "智慧穿戴"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "li",
	                    { className: "Type" },
	                    React.createElement(
	                        "a",
	                        { href: "" },
	                        React.createElement("span", { className: "TypeBg" }),
	                        React.createElement(
	                            "span",
	                            { className: "TypeTxt" },
	                            "智慧穿戴"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "li",
	                    { className: "Type" },
	                    React.createElement(
	                        "a",
	                        { href: "" },
	                        React.createElement("span", { className: "TypeBg" }),
	                        React.createElement(
	                            "span",
	                            { className: "TypeTxt" },
	                            "智慧穿戴"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "li",
	                    { className: "Type" },
	                    React.createElement(
	                        "a",
	                        { href: "" },
	                        React.createElement("span", { className: "TypeBg" }),
	                        React.createElement(
	                            "span",
	                            { className: "TypeTxt" },
	                            "智慧穿戴"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "li",
	                    { className: "Type" },
	                    React.createElement(
	                        "a",
	                        { href: "" },
	                        React.createElement("span", { className: "TypeBg" }),
	                        React.createElement(
	                            "span",
	                            { className: "TypeTxt" },
	                            "智慧穿戴"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "li",
	                    { className: "Type" },
	                    React.createElement(
	                        "a",
	                        { href: "" },
	                        React.createElement("span", { className: "TypeBg" }),
	                        React.createElement(
	                            "span",
	                            { className: "TypeTxt" },
	                            "智慧穿戴"
	                        )
	                    )
	                )
	            )
	        );
	    }
	});
	
	module.exports = ProductType;

/***/ }
/******/ ]);
//# sourceMappingURL=category.js.map