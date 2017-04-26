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

	module.exports = __webpack_require__(96);


/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ProdpageContent = __webpack_require__(97);
	
	var init = function init() {
	    ReactDOM.render(React.createElement(ProdpageContent, null), document.getElementById('content'));
	};
	
	window.nemReact.reacts['prodpage'] = {
	    init: init
	};

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var ProdFloatCartView = __webpack_require__(98);
	var ProdPhotoView = __webpack_require__(99);
	var ProdDescInfoView = __webpack_require__(100);
	var ProdShipInfoView = __webpack_require__(101);
	
	var NetwTools = nemReact.require('NetwTools');
	var ProdPageAction = nemReact.require('ProdPageAction');
	var ProdPageStore = nemReact.require('ProdPageStore');
	
	var ProdPagePATH = "/prodpage.html";
	var queryArr = [];
	
	//process duplicate value
	function unique(origArr) {
		var newArr = [],
		    origLen = origArr.length,
		    found,
		    x,
		    y;
	
		for (x = 0; x < origLen; x++) {
			found = undefined;
			for (y = 0; y < newArr.length; y++) {
				if (origArr[x] === newArr[y]) {
					found = true;
					break;
				}
			}
			if (!found) {
				newArr.push(origArr[x]);
			}
		}
		return newArr;
	}
	
	//prodSpecSelectView
	var ProdSpecSelectView = React.createClass({
		displayName: 'ProdSpecSelectView',
	
		getInitialState: function getInitialState() {
			var prodSpecKeys = !!this.props.prodSpecSelect ? Object.keys(this.props.prodSpecSelect) : [];
			var specKey,
			    prodSpecSelect = [],
			    nowItemid = NetwTools.parseUrlFormatByNameIC(location.search, "itemid");
			if (prodSpecKeys.length > 0) {
				specKey = Object.keys(this.props.prodSpecSelect)[0];
				prodSpecSelect = this.props.prodSpecSelect[specKey];
			}
			return {
				prodSpecAllData: prodSpecSelect,
				specData: [],
				sizeData: [],
				secondState: 0,
				prodPieces: this.props.prodCurrentQty,
				activeIndexFirst: 0,
				activeIndexSecond: 0,
				userChoicePiece: 1,
				nowItemid: nowItemid
			};
		},
	
		componentDidMount: function componentDidMount() {
			var specSelectData = this.refactorData(this.state.prodSpecAllData),
			    itemid = this.state.nowItemid;
			for (var i in specSelectData) {
				for (var j in specSelectData[i].size) {
					var listsItemid = specSelectData[i].size[j].itemid;
					if (itemid == listsItemid) {
						this.setState({
							activeIndexFirst: i,
							activeIndexSecond: j,
							specData: specSelectData,
							sizeData: specSelectData[i].size,
							prodPieces: specSelectData[i].size[j].pieces,
							secondState: specSelectData[i].size[j].secState
						});
	
						this.props.callParentFunction(this.state.nowItemid);
					}
				}
			}
		},
	
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			var prevItemid = NetwTools.parseUrlFormatByNameIC(location.search, "itemid");
			//var prevItemid = nextProps.nowItemid.split("=")[1];
			this.setState({ nowItemid: prevItemid });
	
			if (!!prevItemid) {
				for (var i in this.state.specData) {
					for (var j in this.state.specData[i].size) {
						var listsItemid = this.state.specData[i].size[j].itemid;
						if (prevItemid == listsItemid) {
							this.setState({
								activeIndexFirst: i,
								activeIndexSecond: j,
								prodPieces: this.state.specData[i].size[j].pieces,
								secondState: this.state.specData[i].size[j].secState
							});
						}
					}
				}
			}
		},
	
		refactorData: function refactorData(obj) {
			var selectItemGroup = [],
			    masterKeyColor = [],
			    subKeySize = [];
	
			obj.map(function (item, index) {
	
				var tempObj = {
					secState: '',
					color: '',
					itemid: '',
					name: '',
					pieces: ''
				};
	
				masterKeyColor.push(item.MasterPropertyValueDisplay);
	
				tempObj.secState = item.SecondPropertyId;
				tempObj.color = item.MasterPropertyValueDisplay;
				tempObj.itemid = item.ItemId;
				tempObj.pieces = item.SellingQty;
				tempObj.name = item.SecondPropertyValueDisplay;
	
				subKeySize[index] = tempObj;
			});
	
			var masterColor = unique(masterKeyColor),
			    masterLen = masterColor.length,
			    subLen = subKeySize.length;
	
			for (var i = 0; i < masterLen; i++) {
				var group = {
					style: '',
					itemID: '',
					size: []
				};
	
				group.style = masterColor[i];
	
				if (subLen != 0) {
					for (var j = 0; j < subLen; j++) {
						if (subKeySize[j].color == group.style) {
							group.size.push(subKeySize[j]);
	
							if (subKeySize[j].secState == 0) {
								group.itemID = subKeySize[j].itemid;
							}
						}
					}
				}
	
				selectItemGroup[i] = group;
			}
			return selectItemGroup;
		},
	
		//第一層款式選單
		handleFirstSelect: function handleFirstSelect(e) {
			var nowIndex = e.target.dataset.key,
			    itemid = e.target.dataset.itemid;
	
			this.setState({
				sizeData: this.state.specData[nowIndex].size,
				activeIndexFirst: nowIndex,
				activeIndexSecond: 0,
				userChoicePiece: 1
			});
	
			//判斷是否有itemid
			if (!!itemid) {
				var nowPieces = this.state.specData[nowIndex].size[0].pieces;
	
				this.setState({
					prodPieces: nowPieces,
					userChoicePiece: 1,
					nowItemid: itemid
				});
	
				//回傳itemid 更換賣場
				this.props.callParentFunction(itemid, this.state.activeIndexFirst, this.state.activeIndexSecond);
	
				//判斷商品量是否為0
				if (nowPieces == 0) {
					this.setState({ userChoicePiece: 0 });
				}
			}
		},
	
		//第二層尺寸選單
		handleSecondSelect: function handleSecondSelect(e) {
			var nowIndex = e.target.dataset.key,
			    nowPieces = this.state.sizeData[nowIndex].pieces,
			    itemid = e.target.dataset.itemid;
	
			//判斷商品量數不為空及不為0
			if (!!nowPieces || nowPieces != 0) {
				this.setState({
					activeIndexSecond: nowIndex,
					prodPieces: nowPieces,
					userChoicePiece: 1,
					nowItemid: itemid
				});
			} else if (nowPieces == 0) {
				this.setState({
					activeIndexSecond: nowIndex,
					prodPieces: nowPieces,
					userChoicePiece: 0,
					nowItemid: itemid
				});
			}
	
			//回傳itemid 更換賣場
			this.props.callParentFunction(itemid, this.state.activeIndexFirst, this.state.activeIndexSecond);
		},
	
		//第三層數量選單
		handlePieceSelect: function handlePieceSelect(e) {
			var chooseQty = 1;
			var userChooseQty = parseInt(e.target.value, 10);
			if (!isNaN(userChooseQty)) {
				chooseQty = userChooseQty;
			}
			this.props.setChooseQty(chooseQty);
			this.setState({ userChoicePiece: chooseQty });
		},
	
		//active狀態
		checkActive: function checkActive(state, activeIndex, obj, index) {
			var classState = "";
	
			if (obj == 0) {
				classState += "disabled";
			} else if (activeIndex == index) {
				classState += " active";
			}
	
			return classState;
		},
	
		render: function render() {
			var ProdSizeData = this.state.sizeData,
			    checkSecState = this.state.secondState,
			    activeIndexFirst = this.state.activeIndexFirst,
			    activeIndexSecond = this.state.activeIndexSecond;
	
			return React.createElement(
				'div',
				{ className: 'prodSpecSelect' },
				React.createElement(
					'ul',
					null,
					React.createElement(
						'li',
						{ style: { display: this.state.prodSpecAllData.length == 0 ? 'none' : 'block' } },
						React.createElement(
							'p',
							{ className: 'title' },
							'顏色'
						),
						React.createElement(
							'p',
							{ className: 'select' },
							this.state.specData.map(function (item, index) {
								return React.createElement(
									'span',
									{
										className: this.checkActive(checkSecState, activeIndexFirst, item.size[0].pieces, index),
										key: index, 'data-itemid': item.size[0].secState == 0 ? item.itemID : '',
										'data-key': index,
										onClick: this.handleFirstSelect },
									item.style
								);
							}, this)
						)
					),
					React.createElement(
						'li',
						{ style: { display: checkSecState == 0 ? 'none' : 'block' } },
						React.createElement(
							'p',
							{ className: 'title' },
							'尺寸'
						),
						React.createElement(
							'p',
							{ className: 'select' },
							!!this.state.sizeData ? this.state.sizeData.map(function (item, index) {
								return React.createElement(
									'span',
									{
										className: this.checkActive(checkSecState, activeIndexSecond, item.pieces, index),
										key: index,
										'data-key': index,
										'data-itemid': item.itemid,
										onClick: this.handleSecondSelect },
									item.name
								);
							}, this) : null
						)
					),
					React.createElement(
						'li',
						{ style: { display: this.props.prodCurrentQty != 0 ? 'block' : 'none' } },
						React.createElement(
							'p',
							{ className: 'title' },
							'數量'
						),
						React.createElement(
							'p',
							{ className: 'selectWrap noLabel' },
							React.createElement(
								'select',
								{ id: 'qtySelect', value: this.state.userChoicePiece, onChange: this.handlePieceSelect },
								!!this.props.prodCurrentQty ? [,].concat(_toConsumableArray(Array(this.props.prodCurrentQty))).map(function (item, index) {
									return React.createElement(
										'option',
										{ value: index, key: index },
										index
									);
								}, this) : null
							)
						)
					)
				)
			);
		}
	});
	
	//ProdpageContent View
	var ProdpageContent = React.createClass({
		displayName: 'ProdpageContent',
	
		getInitialState: function getInitialState() {
			//var urlItemId = window.location.search.split("?")[1].split("=")[1];
			var urlItemId = NetwTools.parseUrlFormatByNameIC(location.search, "itemid");
			return {
				itemid: urlItemId,
				chooseQty: 1,
				prodData: {}
			};
		},
	
		componentWillMount: function componentWillMount() {
			var queryString = "itemid=" + this.state.itemid;
			ProdPageAction.getAll(queryString);
			ProdPageStore.addChangeListener(this._onChange);
		},
	
		componentDidMount: function componentDidMount() {
			window.onpopstate = function (event) {
				//var historyItemid = document.location.search.split("?")[1];
				var historyItemid = NetwTools.parseUrlFormatByNameIC(location.search, "itemid");
				ProdPageAction.getAll(historyItemid);
				ProdPageStore.addChangeListener(this._onChange);
			};
		},
	
		componentWillUnmount: function componentWillUnmount() {
			ProdPageStore.removeChangeListener(this._onChange);
		},
	
		currencyChange: function currencyChange(currency) {
			if (!!currency) {
				return currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		},
	
		checkPrice: function checkPrice() {
			var checkState = "",
			    prodMarketPrice = this.state.prodData.Price,
			    prodPrice = this.state.prodData.PromotionPrice;
			if (!!prodMarketPrice < !!prodPrice) {
				checkState = "none";
			}
	
			return checkState;
		},
	
		getChildId: function getChildId(itemid) {
			var queryString = "itemid=" + itemid;
	
			if (queryString != this.state.itemid) {
				this.setState({ itemid: itemid });
				ProdPageAction.getAll(queryString);
	
				//history data push
				//window.history.pushState({}, this.state.prodData.Name, ProdPagePATH+"?"+queryString);
				window.history.pushState({}, this.state.prodData.Name, nemReact.generateUrl("product", { itemid: itemid }));
			}
		},
	
		setChooseQty: function setChooseQty(chooseQty) {
			if (typeof chooseQty === "number") {
				this.setState({ chooseQty: chooseQty });
			}
		},
	
		render: function render() {
			var prodPhotos = this.state.prodData.ImgUrlList,
			    prodName = this.state.prodData.Name,
			    prodMarketPrice = this.state.prodData.Price,
			    prodPrice = this.state.prodData.PromotionPrice,
			    prodPushText = this.state.prodData.Slogan,
			    prodDescribe = this.state.prodData.Description,
			    prodSpecSeletGroup = this.state.prodData.DictItemMarketGroup,
			    prodCurrentQty = this.state.prodData.Amount;
			if (Object.keys(this.state.prodData) == 0) {
				return null;
			}
			return React.createElement(
				'div',
				{ className: 'prodPage' },
				!!prodPhotos ? React.createElement(ProdPhotoView, { prodImgaes: prodPhotos, itemid: this.state.itemid }) : null,
				React.createElement(
					'div',
					{ className: 'prodPushDesc' },
					React.createElement(
						'h3',
						null,
						prodName
					),
					React.createElement(
						'div',
						{ className: 'prodPrice' },
						React.createElement(
							'p',
							{ className: 'marketPrice', style: { display: this.checkPrice() } },
							React.createElement(
								'span',
								{ className: 'currency' },
								'$'
							),
							React.createElement(
								'span',
								{ className: 'priceNums' },
								this.currencyChange(prodMarketPrice)
							)
						),
						React.createElement(
							'p',
							{ className: 'price' },
							React.createElement(
								'span',
								{ className: 'currency' },
								'$'
							),
							React.createElement(
								'span',
								{ className: 'priceNums' },
								this.currencyChange(prodPrice)
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'pushText' },
						React.createElement('ul', { dangerouslySetInnerHTML: { __html: prodPushText } })
					)
				),
				React.createElement(ProdSpecSelectView, { prodSpecSelect: prodSpecSeletGroup, prodCurrentQty: prodCurrentQty, nowItemid: this.state.itemid, callParentFunction: this.getChildId, setChooseQty: this.setChooseQty }),
				!!prodDescribe ? React.createElement(ProdDescInfoView, { prodDesc: prodDescribe }) : null,
				React.createElement(ProdFloatCartView, { chooseQty: this.state.chooseQty })
			);
		},
		_onChange: function _onChange() {
	
			//var prevItemid = window.location.search.split("?")[1];
			var prevItemid = NetwTools.parseUrlFormatByNameIC(location.search, "itemid");
	
			this.setState({
				itemid: prevItemid,
				prodData: ProdPageStore.getAll()
			});
		}
	});
	
	module.exports = ProdpageContent;

/***/ },

/***/ 98:
/***/ function(module, exports) {

	'use strict';
	
	//ProdFloatCartView
	var TrackAction = nemReact.require('TrackAction');
	var NetwTools = nemReact.require('NetwTools');
	
	var ProdFloatCartView = React.createClass({
		displayName: 'ProdFloatCartView',
	
		handleAddCart: function handleAddCart() {
			var getItemid = this.getNowitemId(),
			    selectQty = this.props.chooseQty;
			if (!!getItemid && !!selectQty != '') {
				TrackAction.addToCart([getItemid], [selectQty], [], [], []);
			} else {
				console.log("error");
			}
		},
	
		handleAddToWish: function handleAddToWish() {
			var getItemid = this.getNowitemId(),
			    selectQty = this.props.chooseQty;
			if (!!getItemid && !!selectQty != '') {
				TrackAction.addToCart([getItemid], [selectQty], [], [], []);
			} else {
				console.log("error");
			}
		},
	
		getNowitemId: function getNowitemId() {
			return NetwTools.parseUrlFormatByNameIC(location.search, "itemid");
			//return window.location.search.split("?")[1].split("=")[1]
		},
	
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'floatCartBtn' },
				React.createElement(
					'a',
					{ className: 'btnAddTrackLists', onClick: this.handleAddToWish },
					'加入追蹤清單'
				),
				React.createElement(
					'a',
					{ className: 'btnAddCart', onClick: this.handleAddCart },
					'加入購物車'
				)
			);
		}
	});
	
	module.exports = ProdFloatCartView;

/***/ },

/***/ 99:
/***/ function(module, exports) {

	"use strict";
	
	//prodPhotoImg Slider
	var ProdPhotoView = React.createClass({
		displayName: "ProdPhotoView",
	
	
		getInitialState: function getInitialState() {
			return {
				prodPhotos: [],
				itemid: ""
			};
		},
	
		componentWillMount: function componentWillMount() {
			if (!!this.props.prodImgaes) {
				this.setState({ prodPhotos: this.props.prodImgaes });
			}
		},
	
		componentDidMount: function componentDidMount() {
			$(function () {
				$(".prodPhotoImg").slick({
					dots: true
				});
			});
		},
	
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			if (!!nextProps.prodImgaes) {
				this.setState({ prodPhotos: nextProps.prodImgaes });
			}
	
			$(function () {
				$(".prodPhotoImg").slick('unslick');
				$(".prodPhotoImg").slick({
					dots: true
				});
			});
		},
	
		render: function render() {
	
			return React.createElement(
				"div",
				{ className: "slider single-item prodPhotoImg" },
				!!this.state.prodPhotos ? this.state.prodPhotos.map(function (imgUrl, index) {
					return React.createElement(
						"div",
						{ key: index },
						React.createElement("img", { src: imgUrl })
					);
				}, this) : null
			);
		}
	});
	
	module.exports = ProdPhotoView;

/***/ },

/***/ 100:
/***/ function(module, exports) {

	"use strict";
	
	//ProdDescInfoView
	var ProdDescInfoView = React.createClass({
		displayName: "ProdDescInfoView",
	
	
		getInitialState: function getInitialState() {
			return {
				prodDesc: ""
			};
		},
	
		componentWillMount: function componentWillMount() {
			window.addEventListener("scroll", this.detectScroll);
		},
	
		componentDidMount: function componentDidMount() {
			$(function () {
				var $tabTarget = $(".prodDescTabs > .slider");
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
	
				$(".prodDescTabs .btn-prev").on("click", function () {
					$(".prodDescTabs > .slider").slick("slickPrev");
				});
				$(".prodDescTabs .btn-next").on("click", function () {
					$(".prodDescTabs > .slider").slick("slickNext");
				});
			});
		},
	
		detectScroll: function detectScroll(event) {
			var scrollT = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
			var target = document.getElementById("prodDesc"),
			    taParent = document.getElementById("content");
			var targetPos = getElementOffset(target).top,
			    taParentPos = getElementOffset(taParent).top,
			    taTotalPos = targetPos + taParentPos;
	
			if (scrollT > 55) {
				this.setState({ prodDesc: this.props.prodDesc });
			}
	
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
				"div",
				{ id: "prodDesc", className: "prodDesc" },
				React.createElement(
					"div",
					{ className: "tabs prodDescTabs" },
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
						React.createElement(
							"div",
							null,
							React.createElement(
								"a",
								{ href: "javascript:void(0);" },
								React.createElement(
									"span",
									null,
									"商品說明"
								)
							)
						),
						React.createElement(
							"div",
							null,
							React.createElement(
								"a",
								{ href: "javascript:void(0);" },
								React.createElement(
									"span",
									null,
									"運送/購買說明"
								)
							)
						),
						React.createElement(
							"div",
							null,
							React.createElement(
								"a",
								{ href: "javascript:void(0);" },
								React.createElement(
									"span",
									null,
									"網友留言"
								)
							)
						)
					),
					React.createElement(
						"ul",
						{ className: "prodDescTabContent" },
						React.createElement("li", { className: "show", dangerouslySetInnerHTML: { __html: this.state.prodDesc } }),
						React.createElement(
							"li",
							null,
							React.createElement(
								"ul",
								null,
								React.createElement(
									"li",
									null,
									"送貨範圍：我們提供的商品配送區域僅限於台灣本島。"
								),
								React.createElement(
									"li",
									null,
									"到貨天數：商品預計訂單成立(即確認交易條件無誤、付款完成且仍有庫存)後 7 個工作天內送達(不含週六日及國定假日)。如廠商有約定日將於約定日期內送達，約定日期需於訂單成立後 14天內。"
								),
								React.createElement(
									"li",
									null,
									"換貨說明：若您收到的新品有瑕疵、破損、規格不符或是零件短缺的狀況，請您於收到貨後7天內， 至「我的帳戶>我的訂單」頁面點選「我要換貨」，填寫需換貨的原因/事由，我們將會回覆您辦理換貨事宜。",
									React.createElement("br", null),
									"若需更換新品，換貨廠商將於收到您退回的商品後更換給您。(換貨商品必須為全新狀態且完整包裝，包括且不限於主機、附件、內外包裝、原廠紙箱、隨機文件或資料之完整性等)"
								),
								React.createElement(
									"li",
									null,
									"退貨說明：根據《消費者保護法》，於新蛋全球生活網購物的會員，可享有商品貨到次日起7天猶豫期的權益。 提醒您猶豫期並非試用期，您所退回的商品必須是全新狀態(不得有刮傷、破損、受潮)，並且保持完整包裝， 意即必須恢復至您收到商品時的原始狀態(包括且不限於商品本體、配件、原廠包裝、保護袋、保麗龍、保證書、隨附文件、贈品等)。 否則將影響您的退貨權益，也可能依照損毀程度扣除回復原狀之必要費用。",
									React.createElement(
										"span",
										{ "class": "blue UnderLine" },
										React.createElement(
											"a",
											{ href: "/Policies/Return", target: "_blank" },
											"(各類商品退貨規定說明)"
										)
									)
								),
								React.createElement(
									"li",
									null,
									"待商品收回並驗收無誤後，我們將進行退款，並於退款日當天發送E-mail通知您。"
								),
								React.createElement(
									"li",
									null,
									"商品保固：依原廠/出貨廠商標示為主。"
								),
								React.createElement(
									"li",
									null,
									"本網站全館免運費。"
								)
							),
							React.createElement(
								"p",
								null,
								"其它更多有關台灣新蛋生活網說明請至",
								React.createElement(
									"span",
									{ "class": "blue" },
									"首頁>服務說明>",
									React.createElement(
										"a",
										{ href: "/Service/AboutService", target: "_blank" },
										"售後服務"
									)
								)
							)
						),
						React.createElement(
							"li",
							null,
							"3"
						)
					)
				)
			);
		}
	});
	
	module.exports = ProdDescInfoView;

/***/ },

/***/ 101:
/***/ function(module, exports) {

	"use strict";
	
	//prodShipInfo
	var ProdShipInfoView = React.createClass({
		displayName: "ProdShipInfoView",
	
		getInitialState: function getInitialState() {
			return {
				shipInfoData: {}
			};
		},
	
		componentWillMount: function componentWillMount() {
			this.setState({
				shipInfoData: this.props.shipInfoData
			});
		},
	
		shipWayCheck: function shipWayCheck() {
			var shipWay = this.state.shipInfoData.shipWay,
			    shipWayText = "";
			for (var i = 0; i < shipWay.length; i++) {
				var checkShip = shipWay[i].shipOn;
				var shipStateName = shipWay[i].shipName;
	
				if (checkShip == true) {
					console.log(shipStateName);
					shipWayText += " / " + shipStateName;
				}
			}
	
			return shipWayText.slice(3);
		},
	
		render: function render() {
			return React.createElement(
				"div",
				{ className: "shipWay" },
				React.createElement(
					"span",
					null,
					"配送方式："
				),
				React.createElement(
					"span",
					null,
					this.shipWayCheck()
				),
				React.createElement(
					"span",
					null,
					this.state.shipInfoData.notice
				)
			);
		}
	});
	
	module.exports = ProdShipInfoView;

/***/ }

/******/ });
//# sourceMappingURL=prodpage.js.map