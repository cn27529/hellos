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

	module.exports = __webpack_require__(43);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var HomeContent = __webpack_require__(44);
	
	var init = function init() {
	    ReactDOM.render(React.createElement(HomeContent, null), document.getElementById('content'));
	};
	
	window.nemReact.reacts['home'] = {
	    init: init
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var HomeTabOne = __webpack_require__(45);
	var Loading = __webpack_require__(50);
	/*var HomeTabTwo = require('./HomeTabTwo.react');
	var HomeTabThree = require('./HomeTabThree.react');*/
	
	/*var TrackAction = require('../../actions/cart/TrackAction');*/
	var TrackAction = nemReact.require('TrackAction');
	var FloatRightBtn = __webpack_require__(53);
	
	var TAB_01 = "tab01";
	var TAB_02 = "tab02";
	var TAB_03 = "tab03";
	
	var HomeContent = React.createClass({
	    displayName: 'HomeContent',
	
	
	    /*testDis: function(){
	      TrackAction.getCart([], []);
	    },*/
	
	    clickActiveTab: function clickActiveTab(tab) {
	        if (this.state.activeTab == tab) {
	            return;
	        }
	        /*var cartNum = this.testDis();*/
	        var _setActiteTab = this.setActiveTab;
	        switch (tab) {
	            case TAB_01:
	                this.setState({ activeTab: TAB_01 });
	                _setActiteTab(React.createElement(Loading, null));
	                _setActiteTab(React.createElement(HomeTabOne, null));
	                break;
	            case TAB_02:
	                this.setState({ activeTab: TAB_02 });
	                _setActiteTab(React.createElement(Loading, null));
	                nemReact.initJS([{
	                    key: 'homeFlash',
	                    cb: function cb() {
	                        _setActiteTab(nemReact.require('homeFlash', 'react').getComponent());
	                    }
	                }]);
	                break;
	            case TAB_03:
	                this.setState({ activeTab: TAB_03 });
	                _setActiteTab(React.createElement(Loading, null));
	                nemReact.initJS([{
	                    key: 'homeHotSale',
	                    cb: function cb() {
	                        _setActiteTab(nemReact.require('homeHotSale', 'react').getComponent());
	                    }
	                }]);
	                break;
	            default:
	                this.setState({ activeTab: TAB_01 });
	                _setActiteTab(React.createElement(Loading, null));
	                _setActiteTab(React.createElement(HomeTabOne, null));
	        }
	    },
	
	    setActiveTab: function setActiveTab(obj) {
	        this.setState({ tabContent: obj });
	    },
	
	    getActiveTabClass: function getActiveTabClass(tab) {
	        var className = "";
	        if (this.state.activeTab == tab) {
	            className = "current";
	        }
	        return className;
	    },
	
	    getInitialState: function getInitialState() {
	        return { activeTab: TAB_01, tabContent: React.createElement(HomeTabOne, null) };
	    },
	
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'mainPage' },
	            React.createElement(
	                'div',
	                { className: 'Indextabs' },
	                React.createElement(
	                    'label',
	                    { htmlFor: 'IndexTab01', className: this.getActiveTabClass(TAB_01), onClick: this.clickActiveTab.bind(this, TAB_01) },
	                    '首頁'
	                ),
	                React.createElement(
	                    'label',
	                    { htmlFor: 'IndexTab02', className: this.getActiveTabClass(TAB_02), onClick: this.clickActiveTab.bind(this, TAB_02) },
	                    '天天閃購'
	                ),
	                React.createElement(
	                    'label',
	                    { htmlFor: 'IndexTab03', className: this.getActiveTabClass(TAB_03), onClick: this.clickActiveTab.bind(this, TAB_03) },
	                    '熱銷排行榜'
	                )
	            ),
	            React.createElement(
	                'ul',
	                { className: 'IndexTabContent', id: 'IndexTabContent' },
	                this.state.tabContent
	            ),
	            React.createElement(FloatRightBtn, null)
	        );
	    }
	});
	
	module.exports = HomeContent;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var HomeSliderBanner = __webpack_require__(46);
	var HomeShopUS = __webpack_require__(47);
	var HomeLifeProject = __webpack_require__(48);
	var HomeStore = __webpack_require__(49);
	var HomeCategoryMap = __webpack_require__(51);
	var HomeBankInfo = __webpack_require__(52);
	
	var HomeTabOne = React.createClass({
	                  displayName: 'HomeTabOne',
	
	
	                  componentWillUnmount: function componentWillUnmount() {},
	
	                  render: function render() {
	                                    return React.createElement(
	                                                      'li',
	                                                      { className: "current", style: { display: "block" } },
	                                                      React.createElement(HomeSliderBanner, null),
	                                                      React.createElement(HomeShopUS, null),
	                                                      React.createElement(HomeLifeProject, null),
	                                                      React.createElement(HomeStore, null),
	                                                      React.createElement(HomeCategoryMap, null),
	                                                      React.createElement(HomeBankInfo, null)
	                                    );
	                  }
	
	});
	
	module.exports = HomeTabOne;

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	var BannerSlideStore = nemReact.require('HomeBannerSlideStore');
	var BannerSlideAction = nemReact.require('HomeBannerSlideAction');
	var NetwTools = nemReact.require('NetwTools');
	
	var HomeSliderItem = React.createClass({
	    displayName: 'HomeSliderItem',
	
	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'a',
	                { href: this.props.BannerUrl },
	                React.createElement('img', { src: this.props.Imgurl })
	            )
	        );
	    }
	});
	
	var HomeSliderBanner = React.createClass({
	    displayName: 'HomeSliderBanner',
	
	
	    getInitialState: function functionName() {
	        return {
	            bannerSliderGroup: []
	        };
	    },
	
	    componentWillMount: function componentWillMount() {
	        BannerSlideStore.addChangeListener(this._onChange);
	        // this.setState({ bannerSliderGroup: getBannerData()});
	    },
	
	    componentDidMount: function componentDidMount() {
	        BannerSlideAction.getBannerData();
	    },
	
	    componentDidUpdate: function componentDidUpdate() {
	        if (this.state.bannerSliderGroup.length != 0) {
	            $(function () {
	                $(".BnSlide").slick({ dots: true });
	            });
	        }
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        BannerSlideStore.removeChangeListener(this._onChange);
	        $(function () {
	            $(".BnSlide").slick('unslick');
	        });
	    },
	
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'module slider single-item BnSlide', role: 'toolbar' },
	            this.state.bannerSliderGroup.length != 0 ? this.state.bannerSliderGroup.map(function (BannerItem, index) {
	                return React.createElement(HomeSliderItem, {
	                    BannerUrl: BannerItem.link,
	                    Imgurl: NetwTools.isHttpUriAbsolute(BannerItem.imgUrl) ? BannerItem.imgUrl : _netwImageDM + BannerItem.imgUrl
	                    //Imgurl={ NetwTools.isHttpUriAbsolute(BannerItem.imgUrl) ? BannerItem.imgUrl : BannerItem.imgUrl     }
	                    , key: index });
	            }, this) : null
	        );
	    },
	
	    _onChange: function _onChange() {
	        //console.log(BannerSlideStore.getAll());
	        this.setState({
	            bannerSliderGroup: BannerSlideStore.getAll()
	        });
	    }
	
	});
	
	module.exports = HomeSliderBanner;

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
	var HomeShopUsAction = nemReact.require('HomeShopUsAction');
	var HomeShopUsStore = nemReact.require('HomeShopUsStore');
	var NetwTools = nemReact.require('NetwTools');
	
	// function getShopUsData() {
	//     HomeShopUsAction.getShopUsData();
	//     return HomeShopUsStore.getAll();
	// }
	
	var ShopUsItem = React.createClass({
	    displayName: 'ShopUsItem',
	
	    render: function render() {
	        return React.createElement(
	            'a',
	            { href: this.props.linkUrl },
	            React.createElement('img', { src: this.props.Imgurl })
	        );
	    }
	});
	
	var HomeShopUS = React.createClass({
	    displayName: 'HomeShopUS',
	
	
	    getInitialState: function getInitialState() {
	        return {
	            shopUsBanner: []
	        };
	    },
	
	    componentWillMount: function componentWillMount() {
	        HomeShopUsStore.addChangeListener(this._onChange);
	        // this.setState({ shopUsBanner: getShopUsData()});
	    },
	
	    componentDidMount: function componentDidMount() {
	        HomeShopUsAction.getShopUsData();
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        HomeShopUsStore.removeChangeListener(this._onChange);
	    },
	
	    checkClass: function checkClass() {
	        var className = "module shopUs";
	        var nowLength = this.state.shopUsBanner.length;
	        if (nowLength == 1) {
	            className = "module shopUs full";
	        }
	
	        return className;
	    },
	
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: this.checkClass() },
	            React.createElement(
	                'h3',
	                { className: 'title' },
	                React.createElement(
	                    'span',
	                    null,
	                    '美國直購'
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'moduleContent' },
	                this.state.shopUsBanner.map(function (item, index) {
	                    return React.createElement(ShopUsItem, {
	                        linkUrl: item.link,
	                        Imgurl: NetwTools.isHttpUriAbsolute(item.imgUrl) ? item.imgUrl : _netwImageDM + item.imgUrl
	                        //Imgurl={ NetwTools.isHttpUriAbsolute(item.imgUrl) ? item.imgUrl : item.imgUrl  }
	                        , key: index });
	                }, this)
	            )
	        );
	    },
	
	    _onChange: function _onChange() {
	        //console.log(1);
	        this.setState({ shopUsBanner: HomeShopUsStore.getAll() });
	    }
	
	});
	
	module.exports = HomeShopUS;

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	
	var HomeLifeProjectStore = nemReact.require('HomeLifeProjectStore');
	var HomeLifeProjectAction = nemReact.require('HomeLifeProjectAction');
	var NetwTools = nemReact.require('NetwTools');
	
	// function getLifeProjectData() {
	//     //HomeLifeProjectAction.getData();
	//     //return HomeLifeProjectStore.getData();
	//     //var LifeProjectAllData = HomeLifeProjectStore.getData();
	//     //console.log(LifeProjectAllData);
	//     //console.log(LifeProjectAllData[1].listContent);
	//
	//     // return {
	//     //     lifeProjectData: LifeProjectAllData[1].listContent,
	//     //     moreLink: LifeProjectAllData[0].moreLink
	//     // }
	//
	//     return {
	//         lifeProjectData: [],
	//         moreLink: ""
	//     };
	//
	// }
	
	//生活提案的內容
	var LifeProjectContent = React.createClass({
	    displayName: 'LifeProjectContent',
	
	    getInitialState: function getInitialState() {
	        return {
	            LifeContentData: this.props.LifeContentData
	        };
	    },
	
	    componentWillMount: function componentWillMount() {},
	
	    render: function render() {
	
	        var current_data = this.state.LifeContentData;
	
	        //console.log(current_data);
	
	        function checkMainData() {
	            if (!!current_data.desc || !!current_data.desc2) {
	                return;
	            } else {
	                return { display: "none" };
	            }
	        }
	
	        return React.createElement(
	            'div',
	            { className: 'lifeProjectShow' },
	            React.createElement(
	                'div',
	                { className: 'main' },
	                React.createElement(
	                    'a',
	                    { href: current_data.link },
	                    React.createElement('img', {
	                        src: NetwTools.isHttpUriAbsolute(current_data.imgUrl) ? current_data.imgUrl : _netwImageDM + current_data.imgUrl
	                        //src={ NetwTools.isHttpUriAbsolute(current_data.imgUrl) ? current_data.imgUrl : current_data.imgUrl  }
	                        , alt: current_data.desc }),
	                    React.createElement(
	                        'div',
	                        { className: 'bannerTitle', style: checkMainData() },
	                        React.createElement(
	                            'p',
	                            null,
	                            current_data.desc
	                        ),
	                        React.createElement(
	                            'span',
	                            null,
	                            current_data.desc2
	                        )
	                    )
	                )
	            )
	        );
	    }
	
	});
	
	//生活提案上方主題名稱
	var HomeLifeProject = React.createClass({
	    displayName: 'HomeLifeProject',
	
	
	    getInitialState: function getInitialState() {
	        return {
	            lifeProjectData: [],
	            moreLink: ""
	        };
	    },
	
	    componentWillMount: function componentWillMount() {
	        HomeLifeProjectStore.addChangeListener(this._onChange);
	        // // this.setState({ lifeProjectData: getLifeProjectData()});
	    },
	
	    componentDidMount: function componentDidMount() {
	        HomeLifeProjectAction.getData();
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        HomeLifeProjectStore.removeChangeListener(this._onChange);
	    },
	
	    render: function render() {
	        var lifeProjectData = this.state.lifeProjectData;
	        // console.log(this.state.lifeProjectData.listContent);
	        // (!!lifeProjectData.listContent)
	        // ?lifeProjectData.listContent.map(function(item,index){
	        //   console.log(item.tabTitle);
	        // })
	        // :null
	        return React.createElement(
	            'div',
	            { className: 'module lifeProject' },
	            React.createElement(
	                'h3',
	                { className: 'title' },
	                React.createElement(
	                    'span',
	                    null,
	                    '生活提案'
	                ),
	                React.createElement(
	                    'a',
	                    { className: 'moreLink', href: this.state.lifeProjectData.moreLink },
	                    '查看更多'
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'moduleContent' },
	                React.createElement('input', { type: 'radio', name: 'lifeGroup', id: 'life01', hidden: { true: true }, defaultChecked: { true: true } }),
	                React.createElement('input', { type: 'radio', name: 'lifeGroup', id: 'life02', hidden: { true: true } }),
	                React.createElement('input', { type: 'radio', name: 'lifeGroup', id: 'life03', hidden: { true: true } }),
	                React.createElement('input', { type: 'radio', name: 'lifeGroup', id: 'life04', hidden: { true: true } }),
	                React.createElement(
	                    'ul',
	                    { className: 'lifeNavs' },
	                    !!lifeProjectData.listContent ? lifeProjectData.listContent.map(function (item, index) {
	                        return React.createElement(
	                            'li',
	                            { key: index },
	                            React.createElement(
	                                'label',
	                                { htmlFor: "life0" + (index + 1) },
	                                item.tabTitle
	                            )
	                        );
	                    }, this) : null
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'lifeNavContent' },
	                    !!lifeProjectData.listContent ? lifeProjectData.listContent.map(function (item, index) {
	                        return React.createElement(LifeProjectContent, { LifeContentData: item.sub, key: index });
	                    }, this) : null
	                )
	            )
	        );
	    },
	
	    _onChange: function _onChange() {
	        //console.log(HomeLifeProjectStore.getData());
	        this.setState({ lifeProjectData: HomeLifeProjectStore.getData() });
	    }
	
	});
	
	module.exports = HomeLifeProject;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var NEProduct = nemReact.require("NEProduct", "react");
	var NetwTools = nemReact.require('NetwTools');
	var HomeProdStore = nemReact.require('HomeProdStore');
	var HomeProdAction = nemReact.require('HomeProdAction');
	var Loading = __webpack_require__(50);
	
	//store title component
	var HomeStoreTitleView = React.createClass({
	    displayName: "HomeStoreTitleView",
	
	    getInitialState: function getInitialState() {
	        return { storeName: "", moreLink: "" };
	    },
	
	    componentWillMount: function componentWillMount() {
	        this.setState({ storeName: this.props.storeName, moreLink: this.props.moreLink });
	    },
	
	    render: function render() {
	        return React.createElement(
	            "h3",
	            { className: "title" },
	            React.createElement(
	                "span",
	                null,
	                this.state.storeName
	            )
	        );
	    }
	});
	
	//store content component
	var HomeStoreContent = React.createClass({
	    displayName: "HomeStoreContent",
	
	
	    showProduct: function showProduct() {
	        var items = [];
	        for (var i = 0; i < this.props.prodItems.length; i++) {
	            var itemData = this.props.prodItems[i].Item;
	            if (itemData) {
	
	                //console.log(itemData.ItemImage);
	
	                var item = React.createElement(
	                    "li",
	                    { key: itemData.ItemID + "-" + i },
	                    React.createElement(NEProduct, {
	                        key: itemData.ItemID,
	                        productID: itemData.ItemID,
	                        imgUrl: NetwTools.isHttpUriAbsolute(itemData.ItemImage) ? itemData.ItemImage : _netwImageDM + itemData.ItemImage,
	                        productLink: itemData.Url,
	                        title: itemData.Title,
	                        qty: 1,
	                        marketPrice: itemData.MarketPrice,
	                        sellingPrice: itemData.UnitPrice })
	                );
	                items.push(item);
	            }
	        }
	        return items;
	    },
	
	    getInitialState: function getInitialState() {
	        return { storeTitle: this.props.storeTitle, Link: this.props.moreLink, storeBannerData: this.props.storeBannerData, prodItemsData: this.props.prodItems };
	    },
	
	    componentWillMount: function componentWillMount() {},
	
	    componentDidMount: function componentDidMount() {
	        var className = "." + this.props.orderName;
	        $(function () {
	            $(className).slick({ dots: true });
	        });
	    },
	
	    render: function render() {
	
	        return React.createElement(
	            "div",
	            { className: "module IndexCateShow" },
	            React.createElement(HomeStoreTitleView, { storeName: this.state.storeTitle, moreLink: this.state.Link }),
	            React.createElement(
	                "div",
	                { className: "moduleContent" },
	                React.createElement(
	                    "div",
	                    { className: "moduleBanner" },
	                    React.createElement(
	                        "div",
	                        { className: "slider single-item mBnSlide " + this.props.orderName },
	                        this.state.storeBannerData.map(function (storeSlideData, index) {
	                            return React.createElement(
	                                "div",
	                                { key: index },
	                                React.createElement(
	                                    "a",
	                                    { href: storeSlideData.link },
	                                    React.createElement("img", { src: _netwImageSSLDM + storeSlideData.imgUrl })
	                                )
	                            );
	                        }, this)
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "prodModule" },
	                    React.createElement(
	                        "ul",
	                        { className: "prodLists" },
	                        this.showProduct()
	                    )
	                )
	            )
	        );
	    }
	});
	
	function getStoreDatas() {
	    var storeDatas = HomeProdStore.getProdsData();
	    return storeDatas;
	}
	
	//store main view
	var HomeStore = React.createClass({
	    displayName: "HomeStore",
	
	
	    /*parseBanner: function(beltBanner, blockList){
	        var banners = [];
	        var bannerFromBelt = {};
	        bannerFromBelt.imgUrl = _netwImageSSLDM + beltBanner.Image;
	        bannerFromBelt.linkUrl = beltBanner.Url;
	        banners.push(bannerFromBelt);
	        for(var i = 0; i < blockList.length; i++){
	          var bannerFromBlock = {};
	          var singleBlock = blockList[i];
	          switch (singleBlock.LayoutNumber) {
	            case 1:
	              bannerFromBlock.imgUrl = _netwImageSSLDM + singleBlock.CellList[1].ImageList[0].Image;
	              bannerFromBlock.linkUrl = singleBlock.CellList[1].ImageList[0].Url;
	              banners.push(bannerFromBlock);
	              break;
	            case 3:
	              bannerFromBlock.imgUrl = _netwImageSSLDM + singleBlock.CellList[0].ImageList[0].Image;
	              bannerFromBlock.linkUrl = singleBlock.CellList[0].ImageList[0].Url;
	              banners.push(bannerFromBlock);
	              break;
	            default:
	          }
	        }
	        return banners;
	    },*/
	
	    showStoreDOM: function showStoreDOM() {
	        var storeDoms = [];
	        for (var i = 0; i < this.state.pageNumber; i++) {
	            var pageNumber = i.toString();
	            if (this.state.storeDatas.hasOwnProperty(pageNumber)) {
	                var storeData = this.state.storeDatas[pageNumber];
	                var storeDom = React.createElement(HomeStoreContent, {
	                    storeTitle: storeData.Title,
	                    moreLink: "#"
	                    /*storeBannerData = {this.parseBanner(storeData.BeltBanner, storeData.BlockList)}*/
	                    , storeBannerData: storeData.SliderBanner,
	                    prodItems: storeData.BlockList[1].CellList,
	                    key: i,
	                    orderName: "storeBanner" + i
	                });
	                storeDoms.push(storeDom);
	            }
	        }
	        return storeDoms;
	    },
	
	    handleScroll: function handleScroll() {
	        var node = ReactDOM.findDOMNode(this);
	        var rect = node.getBoundingClientRect();
	        var bottom = rect.bottom;
	
	        // update showImage state if component element is in the viewport
	        //var min = window.pageYOffset;
	        var innerHeight = window.innerHeight;
	        if (bottom - 100 < innerHeight) {
	            if (!this.state.isLoad && !this.state.reachMax) {
	                this.setState({ isLoad: true });
	                var maxPage = HomeProdStore.getStoreMaxPage();
	                var getPage = ++this.state.pageNumber;
	                if (maxPage > getPage + 1) {
	                    HomeProdAction.getProdsData(getPage);
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
	
	    getInitialState: function getInitialState() {
	        return { storeDatas: {}, isLoad: true, reachMax: false, pageNumber: 0 };
	    },
	
	    componentWillMount: function componentWillMount() {
	        window.addEventListener("scroll", this.handleScroll);
	    },
	
	    componentDidMount: function componentDidMount() {
	        HomeProdStore.addChangeListener(this._onChange);
	        HomeProdAction.getProdsData(0);
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        window.removeEventListener("scroll", this.handleScroll);
	        HomeProdStore.removeChangeListener(this._onChange);
	    },
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "module IndexCateShow" },
	            this.showStoreDOM(),
	            this.showLoad()
	        );
	    },
	
	    _onChange: function _onChange() {
	        this.setState({ storeDatas: getStoreDatas() });
	        this.setState({ isLoad: false, pageNumber: HomeProdStore.getCurrentPage() });
	    }
	});
	
	module.exports = HomeStore;

/***/ },
/* 50 */
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
/* 51 */
/***/ function(module, exports) {

	"use strict";
	
	var NEImage = nemReact.require("NEImage", "react");
	
	var HomeCategoryMapAction = nemReact.require('HomeCategoryMapAction');
	var HomeCateMapStore = nemReact.require('HomeCateMapStore');
	var NetwTools = nemReact.require('NetwTools');
	
	var HomeCategoryMap = React.createClass({
	    displayName: "HomeCategoryMap",
	
	    getInitialState: function getInitialState() {
	        return {
	            catesMapData: [],
	            isLoad: false
	        };
	    },
	
	    componentWillMount: function componentWillMount() {
	        HomeCateMapStore.addChangeListener(this._onChange);
	    },
	
	    componentDidMount: function componentDidMount() {
	        HomeCategoryMapAction.getCatesMap();
	        // window.addEventListener("scroll", this.handleScroll);
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        HomeCateMapStore.removeChangeListener(this._onChange);
	        // window.removeEventListener("scroll", this.handleScroll);
	    },
	
	    // handleScroll: function(){
	    //     var isLoad = false;
	    //     var nowScrollPos = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	    //     var target = document.getElementById("catesMap"),
	    //         taParent = document.getElementById("content");
	    //     var targetHeight = target.offsetHeight,
	    //         targetPos = getElementOffset(target).top,
	    //         taParentPos = getElementOffset(taParent).top,
	    //         totalScrollPos = targetPos - (nowScrollPos + window.innerHeight);
	    //
	    //     if(totalScrollPos <= 0) {
	    //         this.setState({isLoad: true});
	    //     }
	    //
	    //     function getElementOffset(element){
	    //         var de = document.documentElement;
	    //         var box = element.getBoundingClientRect();
	    //         var top = box.top + window.pageYOffset - de.clientTop;
	    //         var left = box.left + window.pageXOffset - de.clientLeft;
	    //         return { top: top, left: left };
	    //     }
	    // },
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { id: "catesMap", className: "module catesMap" },
	            React.createElement(
	                "h3",
	                { className: "title" },
	                React.createElement(
	                    "span",
	                    null,
	                    "全館分類"
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "moduleContent" },
	                React.createElement(
	                    "ul",
	                    { className: "catesMapList" },
	                    this.state.catesMapData.length != 0 ? this.state.catesMapData.map(function (item, index) {
	                        return React.createElement(
	                            "li",
	                            { key: index },
	                            React.createElement(
	                                "a",
	                                { "data-id": item.id, href: item.link },
	                                React.createElement(NEImage, {
	                                    key: item.imgUrl,
	                                    src: NetwTools.isHttpUriAbsolute(item.imgUrl) ? item.imgUrl : _netwImageDM + item.imgUrl
	                                    //src={ NetwTools.isHttpUriAbsolute(item.imgUrl) ? item.imgUrl : item.imgUrl  }
	                                    , alt: item.name }),
	                                React.createElement(
	                                    "span",
	                                    null,
	                                    item.name
	                                )
	                            )
	                        );
	                    }, this) : null
	                )
	            )
	        );
	    },
	
	    _onChange: function _onChange() {
	        //console.log(HomeCateMapStore.getAll());
	        this.setState({ catesMapData: HomeCateMapStore.getAll() });
	    }
	});
	
	module.exports = HomeCategoryMap;

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	
	var HomeBankInfo = React.createClass({
	    displayName: "HomeBankInfo",
	
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "module banksInfo" },
	            React.createElement(
	                "h3",
	                { className: "title" },
	                React.createElement(
	                    "span",
	                    null,
	                    "銀行優惠"
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "moduleContent" },
	                React.createElement(
	                    "ul",
	                    null,
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "a",
	                            { href: "#" },
	                            React.createElement(
	                                "span",
	                                null,
	                                "刷卡優惠"
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "a",
	                            { href: "#" },
	                            React.createElement(
	                                "span",
	                                null,
	                                "刷卡分期"
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }
	});
	
	module.exports = HomeBankInfo;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var FloatDesktop = __webpack_require__(54);
	var FloatRecord = __webpack_require__(55);
	var FloatTop = __webpack_require__(56);
	var FloatPromotion = __webpack_require__(57);
	
	var FloatRightBtn = React.createClass({
	    displayName: 'FloatRightBtn',
	
	
	    componentDidMount: function componentDidMount() {
	        window.addEventListener("scroll", this.handleScroll);
	    },
	
	    handleScroll: function handleScroll() {
	        var scrollPos = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	        var winHeight = window.innerHeight;
	        var footer = document.getElementById('footer'),
	            target = document.getElementById('floatRightBtn'),
	            taParent = document.getElementById('content'),
	            taScrollTop = getElementOffset(target).top,
	            taParentScrollTop = getElementOffset(taParent).top,
	            footerScrollTop = getElementOffset(footer).top,
	            footerOutHeight = footer.offsetHeight,
	            documentHeight = document.documentElement.scrollHeight,
	            acturalScrollPos = scrollPos + winHeight;
	
	        acturalScrollPos > 1 || documentHeight < winHeight ? target.classList.add('show') : null;
	        acturalScrollPos == winHeight ? target.classList.remove('show') : null;
	        target.classList.toggle('moveUp', acturalScrollPos == documentHeight);
	
	        //math scrollTop & scollLeft position
	        function getElementOffset(element) {
	            var de = document.documentElement;
	            var box = element.getBoundingClientRect();
	            var top = box.top + window.pageYOffset - de.clientTop;
	            var left = box.left + window.pageXOffset - de.clientLeft;
	            return { top: top, left: left };
	        }
	    },
	
	    render: function render() {
	        return React.createElement(
	            'ul',
	            { id: 'floatRightBtn', className: 'floatRightBtn' },
	            React.createElement(FloatPromotion, null),
	            React.createElement(FloatDesktop, null),
	            React.createElement(FloatTop, null)
	        );
	    }
	});
	
	module.exports = FloatRightBtn;

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	
	var FloatDesktop = React.createClass({
	    displayName: "FloatDesktop",
	
	
	    render: function render() {
	        return React.createElement(
	            "li",
	            null,
	            React.createElement(
	                "a",
	                { className: "floatDesktop" },
	                React.createElement(
	                    "span",
	                    null,
	                    "桌機版"
	                )
	            )
	        );
	    }
	});
	
	module.exports = FloatDesktop;

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	
	var FloatRecord = React.createClass({
	    displayName: "FloatRecord",
	
	
	    render: function render() {
	        return React.createElement(
	            "li",
	            null,
	            React.createElement(
	                "a",
	                { className: "floatRecord" },
	                React.createElement(
	                    "span",
	                    null,
	                    "紀錄"
	                )
	            )
	        );
	    }
	});
	
	module.exports = FloatRecord;

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	
	var FloatTop = React.createClass({
	    displayName: "FloatTop",
	
	
	    componentDidMount: function componentDidMount() {
	        $(".floatTop").click(function () {
	            $("html,body").animate({ scrollTop: 0 }, 800);
	            return false;
	        });
	    },
	
	    render: function render() {
	        return React.createElement(
	            "li",
	            null,
	            React.createElement(
	                "a",
	                { id: "floatTop", className: "floatTop" },
	                React.createElement(
	                    "span",
	                    null,
	                    "TOP"
	                )
	            )
	        );
	    }
	});
	
	module.exports = FloatTop;

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";
	
	var FloatPromotion = React.createClass({
	    displayName: "FloatPromotion",
	
	
	    checkWholeBnInfo: function checkWholeBnInfo() {
	        document.getElementById("floatPromoBtn").style.display = "none";
	        document.getElementById('wholeBanner').classList.remove("hidden-banner");
	    },
	
	    render: function render() {
	        return React.createElement(
	            "li",
	            null,
	            React.createElement(
	                "a",
	                { id: "floatPromoBtn", style: { display: 'none' }, className: "floatPromotion", onClick: this.checkWholeBnInfo },
	                React.createElement(
	                    "span",
	                    null,
	                    "促"
	                )
	            )
	        );
	    }
	});
	
	module.exports = FloatPromotion;

/***/ }
/******/ ]);
//# sourceMappingURL=home.js.map