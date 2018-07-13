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

	module.exports = __webpack_require__(126);


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

/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var SubcategoryContent = __webpack_require__(127);
	
	var init = function init() {
	    ReactDOM.render(React.createElement(SubcategoryContent, null), document.getElementById('content'));
	};
	
	window.nemReact.reacts['subcategory'] = {
	    init: init
	};

/***/ },

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var NEProduct = nemReact.require("NEProduct", "react");
	var Top10 = __webpack_require__(128);
	var SelectFrameProds = __webpack_require__(116);
	var NetwTools = nemReact.require('NetwTools');
	var Loading = __webpack_require__(50);
	var SubCategoryAction = nemReact.require('SubCategoryAction');
	var SubCategoryStore = nemReact.require('SubCategoryStore');
	var CategoryParentAction = nemReact.require('CategoryParentAction');
	var CategoryParentStore = nemReact.require('CategoryParentStore');
	
	var ORDERLIST = [{
	    orderMenu: "CreatDate",
	    orderName: "最新上架"
	}, {
	    orderMenu: "PopularityIndex",
	    orderName: "人氣排行榜"
	}, {
	    orderMenu: "Recommended",
	    orderName: "推薦排行"
	}, {
	    orderMenu: "HighPrice",
	    orderName: "金額高"
	}, {
	    orderMenu: "LowPrice",
	    orderName: "金額低"
	}];
	
	function getCategoryParentByCategoryID(categoryID) {
	    var categoryParent = CategoryParentStore.getAll();
	    if (categoryParent == null || Object.keys(categoryParent).length === 0) {
	        CategoryParentAction.getItemParentCate(categoryID);
	    }
	    return categoryParent;
	}
	
	var SubCategoryParent = React.createClass({
	    displayName: "SubCategoryParent",
	
	
	    handleSelectChange: function handleSelectChange(event) {
	        var value = event.target.value;
	        this.props.handleSelectChange(value);
	    },
	
	    fetchDropDownItems: function fetchDropDownItems(categoryParent) {
	
	        var subCatesData = [];
	
	        if (!categoryParent.hasOwnProperty('DropDownItems')) {
	            return subCatesData;
	        }
	        subCatesData.length = 0;
	        for (var i = 0; i < categoryParent.DropDownItems.length; i++) {
	            var singleCateData = {
	                subCateId: categoryParent.DropDownItems[i].CategoryID,
	                subCateName: categoryParent.DropDownItems[i].Title
	            };
	            subCatesData.push(singleCateData);
	        }
	
	        return subCatesData;
	    },
	
	    getInitialState: function getInitialState() {
	        return { subCateData: [], currentSubCateId: 0 };
	    },
	
	    componentWillMount: function componentWillMount() {
	        CategoryParentStore.addChangeListener(this._onChange);
	        this.setState({ subCateData: this.fetchDropDownItems(getCategoryParentByCategoryID(this.props.currentSubCategoryID)) });
	        //this.setState({subCateData: subCatesData, currentSubCateId: subCatesData[0].subCateId});
	    },
	
	    componentDidMount: function componentDidMount() {},
	
	    componentWillUnmount: function componentWillUnmount() {
	        CategoryParentStore.removeChangeListener(this._onChange);
	    },
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "selectWrap noLabel" },
	            React.createElement(
	                "select",
	                { value: this.props.currentSubCategoryID, onChange: this.handleSelectChange },
	                this.state.subCateData.map(function (item, index) {
	                    return React.createElement(
	                        "option",
	                        { key: index, value: item.subCateId },
	                        item.subCateName
	                    );
	                }, this)
	            )
	        );
	    },
	
	    _onChange: function _onChange() {
	        var categoryParent = getCategoryParentByCategoryID(this.props.currentSubCategoryID);
	        if (categoryParent != null) {
	            this.setState({ subCateData: this.fetchDropDownItems(categoryParent) });
	        }
	    }
	
	});
	
	function getSubItems(categoryID, order, pageNumber) {
	    var subItems = SubCategoryStore.getSubItems();
	    if (subItems == null || subItems.length === 0) {
	        SubCategoryAction.getSubItems(categoryID, order, pageNumber);
	    }
	    return { subItems: subItems };
	}
	
	var SubcategoryContent = React.createClass({
	    displayName: "SubcategoryContent",
	
	
	    setOrder: function setOrder(order) {
	        var queryString = "OrderBy=" + order + "&CategoryID=" + this.state.currentSubCateId;
	        history.pushState({
	            categoryID: this.state.currentSubCateId,
	            order: order
	        }, "", "?" + queryString);
	        this.setState({ order: order, pageNumber: 1, subItems: [], isLoad: true });
	        setTimeout(function () {
	            SubCategoryAction.getSubItems(this.state.currentSubCateId, this.state.order, this.state.pageNumber);
	        }.bind(this), 200);
	    },
	
	    handleScroll: function handleScroll(e) {
	        //this function will be triggered if user scrolls
	        //var windowHeight = $(window).height();
	        var windowHeight = $("#subCategory").height();
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
	            if (!this.state.isLoad && SubCategoryStore.getHasData()) {
	                this.setState({ isLoad: true });
	                var maxPage = SubCategoryStore.getMaxPage();
	                var getPage = ++this.state.pageNumber;
	                if (maxPage >= getPage) {
	                    SubCategoryAction.getSubItems(this.state.currentSubCateId, this.state.order, this.state.pageNumber);
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
	            this.setState({ currentSubCateId: event.state.categoryID, order: event.state.order, pageNumber: 1, isLoad: true });
	            //console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
	            setTimeout(function () {
	                SubCategoryAction.getSubItems(this.state.currentSubCateId, this.state.order, 1);
	            }.bind(this), 200);
	        } else {
	            var orderby = NetwTools.parseUrlFormatByNameIC(location.search, "orderby");
	            if (!orderby) {
	                orderby = "CreateDate";
	            }
	            var categoryID = NetwTools.parseUrlFormatByNameIC(location.search, "categoryid");
	
	            this.setState({ currentSubCateId: categoryID, order: orderby, pageNumber: 1, isLoad: true });
	            setTimeout(function () {
	                SubCategoryAction.getSubItems(this.state.currentSubCateId, this.state.order, 1);
	            }.bind(this), 200);
	        }
	    },
	
	    handleSelectChange: function handleSelectChange(categoryID) {
	        var queryString = "OrderBy=" + this.state.order + "&CategoryID=" + categoryID;
	        history.pushState({
	            categoryID: categoryID,
	            order: this.state.order
	        }, "", "?" + queryString);
	        this.setState({ currentSubCateId: categoryID, pageNumber: 1, subItems: [], isLoad: true });
	        setTimeout(function () {
	            SubCategoryAction.getSubItems(this.state.currentSubCateId, this.state.order, this.state.pageNumber);
	        }.bind(this), 200);
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
	        for (var i = 0; i < this.state.subItems.length; i++) {
	            var product = React.createElement(NEProduct, {
	                productID: this.state.subItems[i].ID,
	                imgUrl: this.state.subItems[i].imgPath,
	                productLink: "",
	                title: this.state.subItems[i].Name,
	                qty: this.state.subItems[i].SellingQty,
	                marketPrice: this.state.subItems[i].MarketPrice,
	                sellingPrice: this.state.subItems[i].PriceCash
	            });
	            productLists.push(product);
	        }
	        return productLists;
	    },
	
	    getInitialState: function getInitialState() {
	        var orderby = NetwTools.parseUrlFormatByNameIC(location.search, "orderby");
	        if (!orderby) {
	            orderby = "CreateDate";
	        }
	        return {
	            currentSubCateId: NetwTools.parseUrlFormatByNameIC(location.search, "categoryid"),
	            isLoad: true,
	            order: orderby,
	            pageNumber: 1,
	            subItems: []
	        };
	    },
	
	    componentWillMount: function componentWillMount() {
	        window.addEventListener("scroll", this.handleScroll);
	        window.addEventListener("popstate", this.handleOnPopState);
	        SubCategoryStore.addChangeListener(this._onChange);
	        this.setState(getSubItems(this.state.currentSubCateId, this.state.order, this.state.pageNumber));
	    },
	
	    componentDidMount: function componentDidMount() {},
	
	    componentWillUnmount: function componentWillUnmount() {
	        SubCategoryStore.removeChangeListener(this._onChange);
	        window.removeEventListener("scroll", this.handleScroll);
	        window.removeEventListener("popstate", this.handleOnPopState);
	    },
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "category subCates", id: "subCategory" },
	            React.createElement(
	                "div",
	                { className: "title" },
	                React.createElement(SubCategoryParent, { currentSubCategoryID: this.state.currentSubCateId, handleSelectChange: this.handleSelectChange })
	            ),
	            React.createElement(
	                "div",
	                { className: "CategoryContent" },
	                React.createElement(Top10, { currentCID: this.state.currentSubCateId }),
	                React.createElement(SelectFrameProds, {
	                    noProductWords: "Sorry，此處建構中...",
	                    productLists: this.generateNEProd(),
	                    prodListKey: this.state.currentSubCateId,
	                    orderList: ORDERLIST,
	                    orderMenu: this.state.order,
	                    setOrder: this.setOrder,
	                    isLoad: this.state.isLoad
	                }),
	                this.showLoad()
	            )
	        );
	    },
	
	    _onChange: function _onChange() {
	        this.setState({ isLoad: false });
	        if (SubCategoryStore.getHasData()) {
	            this.setState(getSubItems(this.state.currentSubCateId, this.state.order, this.state.pageNumber));
	        }
	    }
	});
	
	module.exports = SubcategoryContent;

/***/ },

/***/ 128:
/***/ function(module, exports) {

	"use strict";
	
	var NEProduct = nemReact.require("NEProduct", "react");
	var SubCategoryTopTenAction = nemReact.require('SubCategoryTopTenAction');
	var SubCategoryTopTenStore = nemReact.require('SubCategoryTopTenStore');
	var NetwTools = nemReact.require('NetwTools');
	
	function getTopTenByCategoryID(categoryID) {
	  var topTen = SubCategoryTopTenStore.getTopTen(categoryID);
	  if (Object.keys(topTen).length === 0) {
	    SubCategoryTopTenAction.getTopTen(categoryID);
	  }
	  return topTen;
	}
	
	var TopTenItemDom = React.createClass({
	  displayName: "TopTenItemDom",
	
	
	  generateDom: function generateDom(index, itemData) {
	    if (typeof itemData === 'undefined') {
	      return null;
	    } else {
	      var topRank = ++index;
	      return React.createElement(
	        "li",
	        { className: "prods prodsBig top" + (topRank > 9 ? "" + topRank : "0" + topRank) },
	        React.createElement(NEProduct, {
	          productID: itemData.ItemID,
	          imgUrl: NetwTools.isHttpUriAbsolute(itemData.ItemImage) ? itemData.ItemImage : _netwImageSSLDM + itemData.ItemImage,
	          productLink: "",
	          title: itemData.Title,
	          qty: itemData.SellingQty,
	          marketPrice: itemData.MarketPrice,
	          sellingPrice: itemData.UnitPrice
	        })
	      );
	    }
	  },
	
	  render: function render() {
	    return React.createElement(
	      "ul",
	      { className: "prodTop10List prodLists ranks" },
	      this.generateDom(this.props.first, this.props.firstData),
	      this.generateDom(this.props.second, this.props.secondData)
	    );
	  }
	});
	
	var TopTenRoot = React.createClass({
	  displayName: "TopTenRoot",
	
	  generateTopItem: function generateTopItem() {
	    var allTopTen = [];
	    if (!this.state.topTenItems) {
	      return allTopTen;
	    }
	
	    for (var i = 0; i < this.state.topTenItems.length; i = i + 2) {
	      var singleTopTen = React.createElement(TopTenItemDom, { key: i, first: i, second: i + 1, firstData: this.state.topTenItems[i], secondData: this.state.topTenItems[i + 1] });
	      allTopTen.push(singleTopTen);
	    }
	
	    return allTopTen;
	  },
	
	  getInitialState: function getInitialState() {
	
	    return {
	      topTenItems: this.props.topTenItems,
	      categoryID: this.props.categoryID,
	      isSlick: false
	    };
	  },
	
	  componentWillUnmount: function componentWillUnmount() {},
	
	  componentDidMount: function componentDidMount() {},
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var isSlick = this.state.isSlick;
	    if (isSlick) {
	      $('.subCatesTop10_Slide').slick("unslick");
	      $(".subCatesTop10_Slide").slick({
	        dots: true
	      });
	      isSlick = true;
	    } else {
	      $(".subCatesTop10_Slide").slick({
	        dots: true
	      });
	      isSlick = true;
	    }
	    if (this.state.categoryID != nextProps.categoryID) {
	      $('.subCatesTop10_Slide').slick("unslick");
	      isSlick = false;
	    }
	    this.setState({ topTenItems: nextProps.topTenItems, categoryID: nextProps.categoryID, isSlick: isSlick });
	  },
	
	  render: function render() {
	    if (typeof this.state.topTenItems === 'undefined' || this.state.topTenItems.length == 0) {
	      return React.createElement("div", { className: "module slider single-item subCatesTop10_Slide" });
	    } else {
	      return React.createElement(
	        "div",
	        { className: "module slider single-item subCatesTop10_Slide" },
	        this.generateTopItem()
	      );
	    }
	  }
	});
	
	var Top10 = React.createClass({
	  displayName: "Top10",
	
	
	  generateTopTenSlick: function generateTopTenSlick() {
	    var topTenRoot = React.createElement(TopTenRoot, { topTenItems: this.state.topTenItems, categoryID: this.state.categoryID });
	    return topTenRoot;
	  },
	  showTopTen: function showTopTen() {
	    var style = {};
	    if (!this.state.topTenItems || this.state.topTenItems.length == 0) {
	      style.display = "none";
	    }
	    return style;
	  },
	
	  getInitialState: function getInitialState() {
	
	    return {
	      categoryID: this.props.currentCID,
	      isLoad: true,
	      topTenItems: [],
	      isSlick: true
	    };
	  },
	
	  componentWillMount: function componentWillMount() {
	    SubCategoryTopTenStore.addChangeListener(this._onChange);
	    var topTenData = getTopTenByCategoryID(this.state.categoryID);
	    this.setState({ topTenItems: topTenData.topTenData });
	  },
	
	  componentDidMount: function componentDidMount() {},
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var topTenData = getTopTenByCategoryID(nextProps.currentCID);
	    this.setState({ categoryID: nextProps.currentCID, topTenItems: topTenData.topTenData });
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    SubCategoryTopTenStore.removeChangeListener(this._onChange);
	  },
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "Top10Page", style: this.showTopTen() },
	      React.createElement(
	        "p",
	        { className: "Top10Text" },
	        "銷售TOP10"
	      ),
	      React.createElement(
	        "div",
	        { className: "prodTop10" },
	        React.createElement(TopTenRoot, { topTenItems: this.state.topTenItems, categoryID: this.state.categoryID })
	      )
	    );
	  },
	
	  componentDidUpdate: function componentDidUpdate() {},
	
	  _onChange: function _onChange() {
	    var topTenData = getTopTenByCategoryID(this.state.categoryID);
	    this.setState({ isLoad: false, topTenItems: topTenData.topTenData });
	  }
	});
	
	module.exports = Top10;

/***/ }

/******/ });
//# sourceMappingURL=subcategory.js.map