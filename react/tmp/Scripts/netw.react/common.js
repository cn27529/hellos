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

	module.exports = __webpack_require__(14);


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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var WholeBnContent = __webpack_require__(15);
	var HeaderNav = __webpack_require__(16);
	
	var _defaultPro = {
	    id: 0,
	    name: "[重要公告]這是一則的訊息!!!",
	    link: "http://www.666.dead.you"
	};
	
	var datas = typeof _promoNoteData !== 'undefined' && _promoNoteData.length > 0 ? _promoNoteData[0] : _defaultPro;
	
	ReactDOM.render(React.createElement(WholeBnContent, { content: datas }), document.getElementById('wholeBanner'));
	
	ReactDOM.render(React.createElement(HeaderNav, null), document.getElementById('header'));

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	var WholeBnContent = React.createClass({
	    displayName: 'WholeBnContent',
	
	
	    getInitialState: function getInitialState() {
	        return {
	            text: '',
	            link: ''
	        };
	    },
	
	    componentWillMount: function componentWillMount() {
	        var BannerInfo = this.props.content,
	            BNState = false;
	
	        if (!!BannerInfo) {
	            this.setState({
	                text: BannerInfo.name,
	                link: BannerInfo.link
	            });
	
	            BNState = true;
	        } else {
	            BNState = false;
	        }
	        this.checkNowState(BNState);
	    },
	
	    checkNowState: function checkNowState(obj) {
	        var ParentNodeClass = document.getElementById('wholeBanner').classList;
	
	        if (obj == false) {
	            ParentNodeClass.add('hidden-banner');
	        } else {
	            ParentNodeClass.remove('hidden-banner');
	        }
	    },
	
	    closeWholeInfo: function closeWholeInfo() {
	        this.checkNowState(false);
	        document.getElementById("floatPromoBtn").style.display = "block";
	    },
	
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'wholeInfoContent' },
	            React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'a',
	                    { href: this.state.link },
	                    this.state.text
	                )
	            ),
	            React.createElement(
	                'a',
	                { className: 'closeBnBtn', onClick: this.closeWholeInfo },
	                'close'
	            )
	        );
	    }
	});
	
	module.exports = WholeBnContent;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _React$createClass;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var SearchNavBox = __webpack_require__(17);
	var AccountNavBox = __webpack_require__(18);
	var CartNavBox = __webpack_require__(19);
	var MenuNavBox = __webpack_require__(20);
	var NEProduct = __webpack_require__(22);
	/*var TrackStore = require('../../stores/cart/TrackStore');
	var TrackAction = require('../../actions/cart/TrackAction');
	var MenuStore = require('../../stores/common/MenuStore');
	var MenuAction = require('../../actions/common/MenuAction');*/
	var TrackStore = nemReact.require('TrackStore');
	var TrackAction = nemReact.require('TrackAction');
	var MenuStore = nemReact.require('MenuStore');
	var MenuAction = nemReact.require('MenuAction');
	var NetwTools = nemReact.require('NetwTools');
	//var React = require('react');
	//var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
	
	var NONE_NAV = 'noneNav';
	var SEARCH_NAV = 'searchNav';
	var ACCOUNT_NAV = 'accountNav';
	var CART_NAV = 'cartNav';
	var MENU_NAV = 'menuNav';
	var SHOWNAVBOX = 'show';
	var HIDENAVBOX = '';
	
	function getTrackNumber() {
	    var trackData = TrackStore.getAll();
	    var trackNumber = 0;
	
	    if (jQuery.isArray(trackData)) {
	        for (var i = 0; i < trackData.length; i++) {
	            if (trackData[i].stu == 0 || trackData[i].stu == 100 || trackData[i].stu == 101 || trackData[i].stu == 102) {
	                trackNumber++;
	            }
	        }
	    }
	
	    return trackNumber;
	}
	
	var HeaderNav = React.createClass((_React$createClass = {
	    displayName: 'HeaderNav',
	
	    getInitialState: function getInitialState() {
	        return {
	            nowState: ''
	        };
	    },
	
	    getActivityHeader: function getActivityHeader(act) {
	        switch (act) {
	            case SEARCH_NAV:
	                if (this.state.headerShowNav === SEARCH_NAV) {
	                    this.setState({ headerShowNav: NONE_NAV, showNavBox: HIDENAVBOX });
	                } else {
	                    this.setState({ headerShowNav: SEARCH_NAV, showNavBox: SHOWNAVBOX });
	                }
	                break;
	            case ACCOUNT_NAV:
	                if (NetwTools.getEamil() != "") {
	                    if (this.state.headerShowNav === ACCOUNT_NAV) {
	                        this.setState({ headerShowNav: NONE_NAV, showNavBox: HIDENAVBOX });
	                    } else {
	                        this.setState({ headerShowNav: ACCOUNT_NAV, showNavBox: SHOWNAVBOX });
	                    }
	                } else {
	                    location.href = nemReact.generateUrl("login");
	                }
	                break;
	            case CART_NAV:
	                if (this.state.headerShowNav === CART_NAV) {
	                    this.setState({ headerShowNav: NONE_NAV, showNavBox: HIDENAVBOX });
	                } else {
	                    this.setState({ headerShowNav: CART_NAV, showNavBox: SHOWNAVBOX });
	                }
	                break;
	            case MENU_NAV:
	                if (this.state.headerShowNav === MENU_NAV) {
	                    this.setState({ headerShowNav: NONE_NAV, showNavBox: HIDENAVBOX });
	                } else {
	                    this.setState({ headerShowNav: MENU_NAV, showNavBox: HIDENAVBOX });
	                    this.activeMainMenu();
	                }
	                break;
	            default:
	                this.setState({ headerShowNav: NONE_NAV, showNavBox: HIDENAVBOX });
	        }
	    },
	
	    activeMainMenu: function activeMainMenu() {
	        ReactDOM.render(React.createElement(MenuNavBox, { close: this.getActivityHeader.bind(this, MENU_NAV) }), document.getElementById('mainMenu'));
	    },
	
	    componentDidMount: function componentDidMount() {
	        TrackStore.addChangeListener(this._onTrackChange);
	        TrackAction.getCart([], []);
	        this.getActivityHeader(NONE_NAV);
	        MenuAction.getHome();
	    },
	
	    componentWillMount: function componentWillMount() {
	        this.setState({ trackNumber: getTrackNumber() });
	    }
	
	}, _defineProperty(_React$createClass, 'getInitialState', function getInitialState() {
	    return { headerShowNav: NONE_NAV, showNavBox: HIDENAVBOX, trackNumber: 0 };
	}), _defineProperty(_React$createClass, 'componentWillUnmount', function componentWillUnmount() {
	    TrackStore.removeChangeListener(this._onTrackChange);
	}), _defineProperty(_React$createClass, 'checkCurrentClass', function checkCurrentClass(obj) {
	    var checkNowState = this.state.headerShowNav,
	        currentClass = '';
	
	    currentClass = checkNowState != NONE_NAV && checkNowState == obj ? " active" : "";
	    return currentClass;
	}), _defineProperty(_React$createClass, 'render', function render() {
	    var showNav = this.state.headerShowNav;
	    var navBox;
	    switch (showNav) {
	        case SEARCH_NAV:
	            navBox = React.createElement(SearchNavBox, null);
	            break;
	        case ACCOUNT_NAV:
	            navBox = React.createElement(AccountNavBox, null);
	            break;
	        case CART_NAV:
	            navBox = React.createElement(CartNavBox, null);
	            break;
	        case MENU_NAV:
	            /*navBox = <MenuNavBox close={this.getActivityHeader.bind(this, MENU_NAV)}/>;*/
	
	            break;
	        default:
	    }
	    return React.createElement(
	        'div',
	        { className: 'header' },
	        React.createElement(
	            'div',
	            { className: 'navs' },
	            React.createElement('div', { className: 'btn btnMainMenu', onClick: this.getActivityHeader.bind(this, MENU_NAV) }),
	            React.createElement(
	                'div',
	                { className: "btn btnGroup btnSearch" + this.checkCurrentClass(SEARCH_NAV), onClick: this.getActivityHeader.bind(this, SEARCH_NAV) },
	                'search'
	            ),
	            React.createElement(
	                'h1',
	                null,
	                React.createElement(
	                    'a',
	                    { href: '/' },
	                    'LOGO'
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: "btn btnGroup btnAccount" + this.checkCurrentClass(ACCOUNT_NAV), onClick: this.getActivityHeader.bind(this, ACCOUNT_NAV) },
	                'Account '
	            ),
	            React.createElement(
	                'div',
	                { className: "btn btnGroup btnShop" + this.checkCurrentClass(CART_NAV), onClick: this.getActivityHeader.bind(this, CART_NAV) },
	                'shopCart',
	                React.createElement(
	                    'span',
	                    { className: 'nums' },
	                    this.state.trackNumber
	                )
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'navBox ' + this.state.showNavBox, onClick: this.getActivityHeader.bind(this, NONE_NAV) },
	            navBox
	        )
	    );
	}), _defineProperty(_React$createClass, '_onTrackChange', function _onTrackChange() {
	    this.setState({ trackNumber: getTrackNumber() });
	}), _React$createClass));
	
	module.exports = HeaderNav;

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	//var React = require('react');
	/*var HotWordsStore = require('../../stores/common/HotWordsStore');
	var HotWordsAction = require('../../actions/common/HotWordsAction');*/
	var HotWordsStore = nemReact.require('HotWordsStore');
	var HotWordsAction = nemReact.require('HotWordsAction');
	
	//var SEARCHPATH = "/searchResults.html";
	
	function getHotWordsItems(hotWord) {
	  return React.createElement(HotWordsItem, {
	    key: hotWord.ID,
	    path: hotWord.Clickpath,
	    title: hotWord.Description
	  });
	}
	
	function getHotWordsByCategoryID(categoryID) {
	  var hotWords = HotWordsStore.getAll();
	  if (hotWords == null || Object.keys(hotWords).length === 0) {
	    HotWordsAction.getHotWords(0);
	  }
	  return {
	    allHotWords: hotWords
	  };
	}
	
	var HotWordsItem = React.createClass({
	  displayName: 'HotWordsItem',
	
	  render: function render() {
	    return React.createElement(
	      'a',
	      { href: this.props.path },
	      this.props.title
	    );
	  }
	});
	
	var SearchInputBar = React.createClass({
	  displayName: 'SearchInputBar',
	
	
	  handleChange: function handleChange(event) {
	    this.setState({ searchWord: event.target.value });
	  },
	  searchClick: function searchClick() {
	    if (typeof this.state.searchWord !== 'string' || !this.state.searchWord) {
	      return;
	    }
	
	    //var queryString = "searchword={0}";
	    //queryString = queryString.replace("{0}", this.state.searchWord);
	    //location.href = SEARCHPATH + "?" + queryString;
	    location.href = nemReact.generateUrl("search", { searchword: this.state.searchWord });
	  },
	  getInitialState: function getInitialState() {
	    return { searchWord: '' };
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'searchNow' },
	      React.createElement('input', { type: 'text', placeholder: '請輸入商品關鍵字', value: this.state.searchWord, onChange: this.handleChange }),
	      React.createElement(
	        'button',
	        { type: 'button', className: 'button', onClick: this.searchClick },
	        '搜尋'
	      )
	    );
	  }
	});
	
	var SearchNavBox = React.createClass({
	  displayName: 'SearchNavBox',
	
	
	  getInitialState: function getInitialState() {
	    return { allHotWords: {} };
	  },
	
	  componentWillMount: function componentWillMount() {
	    '';
	    /*if(jQuery.isEmptyObject(this.state.allHotWords.length)){*/
	    /*HotWordsAction.getHotWords(0);*/
	    this.setState(getHotWordsByCategoryID(0));
	    /*}*/
	  },
	
	  componentDidMount: function componentDidMount() {
	    HotWordsStore.addChangeListener(this._onChange);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    HotWordsStore.removeChangeListener(this._onChange);
	  },
	
	  stateClick: function stateClick(e) {
	    e.stopPropagation();
	  },
	
	  render: function render() {
	    var hotWordsItems = [];
	    for (var i = 0; i < this.state.allHotWords.length; i++) {
	      hotWordsItems.push(getHotWordsItems(this.state.allHotWords[i]));
	    }
	    /*var hotWordsItems = this.state.allHotWords.map(getHotWordsItems);*/
	    return React.createElement(
	      'div',
	      { className: 'state searchBox slideDown', onClick: this.stateClick },
	      React.createElement(
	        'div',
	        null,
	        React.createElement(SearchInputBar, null),
	        React.createElement(
	          'div',
	          { className: 'keywords' },
	          hotWordsItems
	        )
	      )
	    );
	  },
	
	  _onChange: function _onChange() {
	    this.setState(getHotWordsByCategoryID(0));
	  }
	});
	
	module.exports = SearchNavBox;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	//var React = require('react');
	/*var AccountStore = require('../../stores/common/AccountStore');
	var AccountAction = require('../../actions/common/AccountAction');
	var GreetingWordsStore = require('../../stores/common/GreetingWordsStore');
	var GreetingWordsAction = require('../../actions/common/GreetingWordsAction');*/
	var AccountStore = nemReact.require('AccountStore');
	var AccountAction = nemReact.require('AccountAction');
	var GreetingWordsStore = nemReact.require('GreetingWordsStore');
	var GreetingWordsAction = nemReact.require('GreetingWordsAction');
	
	function getAccountEmail() {
	  return AccountStore.getEmail();
	}
	
	function getGreetingWords() {
	  return GreetingWordsStore.getGreetingWords();
	}
	
	var WelcomeText = React.createClass({
	  displayName: 'WelcomeText',
	
	
	  getInitialState: function getInitialState() {
	    return {
	      email: '',
	      greetingWord: ''
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    AccountStore.addChangeListener(this._onMailChange);
	    AccountAction.getEmail();
	    GreetingWordsStore.addChangeListener(this._onGreetingWordChange);
	    GreetingWordsAction.getGreetingWords();
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    AccountStore.removeChangeListener(this._onMailChange);
	    GreetingWordsStore.removeChangeListener(this._onGreetingWordChange);
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { 'class': 'welcomeText' },
	      React.createElement(
	        'p',
	        null,
	        'Hi, ',
	        React.createElement(
	          'span',
	          { className: 'memberMail' },
	          this.state.email
	        ),
	        ',您好'
	      ),
	      React.createElement(
	        'p',
	        { className: 'text' },
	        this.state.greetingWord
	      )
	    );
	  },
	
	  _onMailChange: function _onMailChange() {
	    this.setState({ email: getAccountEmail() });
	  },
	
	  _onGreetingWordChange: function _onGreetingWordChange() {
	    this.setState({ greetingWord: getGreetingWords() });
	  }
	
	});
	
	var AccountNavBox = React.createClass({
	  displayName: 'AccountNavBox',
	
	
	  stateClick: function stateClick(e) {
	    e.stopPropagation();
	  },
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'state accountBox slideDown', onClick: this.stateClick },
	      React.createElement(
	        'div',
	        null,
	        React.createElement(WelcomeText, null),
	        React.createElement(
	          'ul',
	          { className: 'links' },
	          React.createElement(
	            'li',
	            { className: 'favors' },
	            React.createElement(
	              'a',
	              { href: _netwWebURL + nemReact.generateUrl("wish") },
	              React.createElement(
	                'span',
	                null,
	                '最愛清單'
	              )
	            )
	          ),
	          React.createElement(
	            'li',
	            { className: 'coupons' },
	            React.createElement(
	              'a',
	              { href: _netwWebURL + nemReact.generateUrl("coupon") },
	              React.createElement(
	                'span',
	                null,
	                '折價券'
	              )
	            )
	          ),
	          React.createElement(
	            'li',
	            { className: 'myOrder' },
	            React.createElement(
	              'a',
	              { href: _netwWebURL + nemReact.generateUrl("order") },
	              React.createElement(
	                'span',
	                null,
	                '我的訂單'
	              )
	            )
	          ),
	          React.createElement(
	            'li',
	            { className: 'myQA' },
	            React.createElement(
	              'a',
	              { href: _netwWebURL + nemReact.generateUrl("askques") },
	              React.createElement(
	                'span',
	                null,
	                '我要發問'
	              )
	            )
	          ),
	          React.createElement(
	            'li',
	            { className: 'myAccount' },
	            React.createElement(
	              'a',
	              { href: _netwWebURL + nemReact.generateUrl("editperson") },
	              React.createElement(
	                'span',
	                null,
	                '我的帳號'
	              )
	            )
	          ),
	          React.createElement(
	            'li',
	            { className: 'Logout' },
	            React.createElement(
	              'a',
	              { href: nemReact.generateUrl("logout") },
	              React.createElement(
	                'span',
	                null,
	                '登出'
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});
	
	module.exports = AccountNavBox;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	//var React = require('react');
	/*var CartStore = require('../../stores/cart/CartStore');
	var CartAction = require('../../actions/cart/CartAction');*/
	var CartStore = nemReact.require('CartStore');
	var CartAction = nemReact.require('CartAction');
	
	var CartNavBox = React.createClass({
	    displayName: 'CartNavBox',
	
	
	    stateClick: function stateClick(e) {
	        e.stopPropagation();
	    },
	
	    getInitialState: function getInitialState() {
	        return { domesCart: 0, interCart: 0, chooseCart: 0 };
	    },
	
	    componentDidMount: function componentDidMount() {
	        CartStore.addChangeListener(this._onCartNumberChange);
	        CartAction.getCartNumber();
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        CartStore.removeChangeListener(this._onCartNumberChange);
	    },
	
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'state shopBox slideDown', onClick: this.stateClick },
	            React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'a',
	                    { className: 'cartBtn', href: _netwWebURL + nemReact.generateUrl("cart", { TypeID: 1 }) },
	                    React.createElement(
	                        'span',
	                        { className: 'nums' },
	                        this.state.domesCart
	                    ),
	                    React.createElement(
	                        'span',
	                        { className: 'cartName' },
	                        '新蛋購物車'
	                    )
	                ),
	                React.createElement(
	                    'a',
	                    { className: 'cartBtn', href: _netwWebURL + nemReact.generateUrl("cart", { TypeID: 2 }) },
	                    React.createElement(
	                        'span',
	                        { className: 'nums' },
	                        this.state.interCart
	                    ),
	                    React.createElement(
	                        'span',
	                        { className: 'cartName' },
	                        '海外購物車'
	                    )
	                ),
	                React.createElement(
	                    'a',
	                    { className: 'cartBtn', href: _netwWebURL + nemReact.generateUrl("cart", { TypeID: 3 }) },
	                    React.createElement(
	                        'span',
	                        { className: 'nums' },
	                        this.state.chooseCart
	                    ),
	                    React.createElement(
	                        'span',
	                        { className: 'cartName' },
	                        '任選館購物車'
	                    )
	                )
	            )
	        );
	    },
	
	    _onCartNumberChange: function _onCartNumberChange() {
	        this.setState(CartStore.getCartNumber());
	    }
	});
	
	module.exports = CartNavBox;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Mask = __webpack_require__(21);
	//var React = require('react');
	//var ReactDOM = require('react/lib/ReactDOM');
	/*var MenuStore = require('../../stores/common/MenuStore');
	var MenuAction = require('../../actions/common/MenuAction');*/
	var MenuStore = nemReact.require('MenuStore');
	var MenuAction = nemReact.require('MenuAction');
	
	var MenuCategoryItem = React.createClass({
	  displayName: 'MenuCategoryItem',
	
	  render: function render() {
	    return React.createElement(
	      'li',
	      null,
	      React.createElement(
	        'a',
	        { href: nemReact.generateUrl("category", { categoryid: this.props.categoryid }) },
	        this.props.title
	      )
	    );
	  }
	
	});
	
	var MenuCategory = React.createClass({
	  displayName: 'MenuCategory',
	
	
	  propTypes: {
	    categoryTitle: React.PropTypes.string.isRequired,
	    category: React.PropTypes.array
	  },
	
	  render: function render() {
	    return React.createElement(
	      'li',
	      null,
	      React.createElement(
	        'h3',
	        { className: "subTitle " + this.props.clickClass, onClick: this.props.click },
	        this.props.categoryTitle
	      ),
	      React.createElement(
	        'ul',
	        null,
	        this.props.category.map(function (menuCategoryItem, index) {
	          return React.createElement(MenuCategoryItem, { title: menuCategoryItem.category_description, key: menuCategoryItem.category_id, categoryid: menuCategoryItem.category_id });
	        }, this)
	      )
	    );
	  }
	
	});
	
	var MenuTab = React.createClass({
	  displayName: 'MenuTab',
	
	
	  propTypes: {
	    tabTitle: React.PropTypes.string.isRequired,
	    tabCategory: React.PropTypes.array
	  },
	
	  tabItemClick: function tabItemClick(categoryID, categoryTitle) {
	    this.setState({ currentCategoryID: categoryID, currentCategoryTitle: categoryTitle });
	  },
	
	  componentWillMount: function componentWillMount() {},
	
	  componentDidMount: function componentDidMount() {},
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({ currentCategoryID: nextProps.tabID, currentCategoryTitle: nextProps.tabTitle });
	    if (nextProps.tabCategory.length > 0) {
	      this.tabItemClick(nextProps.tabCategory[0].category_id, nextProps.tabCategory[0].category_description);
	    }
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      currentCategoryID: 0,
	      currentCategoryTitle: ""
	    };
	  },
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: "shopContent " + this.props.tabClass, style: { display: 'block' } },
	      React.createElement(
	        'a',
	        { className: 'catesMainLink', href: nemReact.generateUrl("store", { storeId: this.props.tabID }) },
	        '進入',
	        this.props.tabTitle,
	        '館'
	      ),
	      React.createElement(
	        'div',
	        { className: 'subMain' },
	        React.createElement(
	          'ul',
	          null,
	          this.props.tabCategory.map(function (menuTabItem, index) {
	            return React.createElement(MenuCategory, {
	              key: menuTabItem.category_id,
	              categoryClass: menuTabItem.ClassName,
	              clickClass: menuTabItem.category_id == this.state.currentCategoryID ? "current" : "",
	              categoryTitle: menuTabItem.category_description,
	              click: this.tabItemClick.bind(this, menuTabItem.category_id, menuTabItem.category_description),
	              category: this.getChildCategory(menuTabItem.category_id) });
	          }, this)
	        )
	      )
	    );
	  },
	
	  getChildCategory: function getChildCategory(categoryID) {
	    var childCategory = [];
	    // for(var i = 0; i < this.state.currentChildCategory.length; i++){
	    //   if(this.state.currentChildCategory[i].category_id == categoryID){
	    //     childCategory = this.state.currentChildCategory[i].Nodes;
	    //   }
	    // }
	    for (var i = 0; i < this.props.tabCategory.length; i++) {
	      if (this.props.tabCategory[i].category_id == categoryID) {
	        childCategory = this.props.tabCategory[i].Nodes;
	      }
	    }
	    return childCategory;
	  }
	
	});
	
	var MenuHome = React.createClass({
	  displayName: 'MenuHome',
	
	
	  render: function render() {
	    return React.createElement(
	      'li',
	      { className: this.props.clickClass },
	      React.createElement(
	        'a',
	        { className: "shops " + this.props.categoryClass, onClick: this.props.click },
	        React.createElement(
	          'span',
	          null,
	          this.props.title
	        )
	      )
	    );
	  }
	
	});
	
	var MenuNavBox = React.createClass({
	  displayName: 'MenuNavBox',
	
	
	  stateClick: function stateClick(e) {
	    e.stopPropagation();
	  },
	
	  homeItemClick: function homeItemClick(index, categoryID, categoryTitle, categoryClass) {
	    var childCategory = MenuStore.getCategory(categoryID, 0);
	    if (childCategory == null || Object.keys(childCategory).length === 0) {
	      MenuAction.getCategory(categoryID, 0);
	    }
	    this.setState({ currentCategoryIndex: index, currentCategoryID: categoryID, currentCategoryTitle: categoryTitle, childCategory: childCategory, topCategoryCalss: categoryClass });
	  },
	
	  catesScroll: function catesScroll(event) {
	    /*var nowSelect = this.state.currentCategoryIndex * 81;*/
	    var showTab = 45;
	    var node = ReactDOM.findDOMNode(this.refs[this.state.currentCategoryID]);
	    var pos = node.getBoundingClientRect();
	    /*var ttt = ReactDOM.findDOMNode(this.refs[this.state.currentCategoryID]);
	    var ccc = ttt.getBoundingClientRect();
	    console.log('-------------------');
	    console.log('ttt.top');
	    console.log(ccc.top);
	    console.log('ttt.left');
	    console.log(ccc.left);
	    console.log('ttt.scrollTop');
	    console.log(ttt.scrollTop);
	    console.log('ttt.scrollHeight');
	    console.log(ttt.scrollHeight);
	    console.log('ttt.offsetTop');
	    console.log(ttt.offsetTop);
	    console.log('ttt.offsetHeight');
	    console.log(ttt.offsetHeight);
	    console.log('-------------------');*/
	    if (pos.top < showTab && this.state.topCategoryShow == false) {
	      this.setState({ topCategoryShow: true });
	    } else if (pos.top >= showTab && this.state.topCategoryShow == true) {
	      this.setState({ topCategoryShow: false });
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    MenuStore.addChangeListener(this._onHomeChange);
	    this.homeItemClick(1, this.state.homeCategory[0].category_id, this.state.homeCategory[0].category_description, this.state.homeCategory[0].ClassName);
	    var node = ReactDOM.findDOMNode(this.refs.mainMenu);
	    setTimeout(function () {
	      node.classList.add("active");
	    }, 100);
	  },
	
	  componentWillMount: function componentWillMount() {
	    ReactDOM.render(React.createElement(Mask, { showClass: 'show', closeFunc: this._onClose.bind(this, this.props.close) }), document.getElementById('mask'));
	    /*var mask = document.getElementById('mask');
	    mask.classList.remove("hide");
	    mask.classList.add("show");*/
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    this.catesScroll();
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      homeCategory: MenuStore.getHome(),
	      childCategory: [],
	      currentCategoryID: 0,
	      currentCategoryTitle: "",
	      topCategoryShow: false,
	      topCategoryCalss: "",
	      currentCategoryIndex: 0
	    };
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    MenuStore.removeChangeListener(this._onHomeChange);
	  },
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'mainMenu', ref: 'mainMenu', onClick: this.stateClick },
	      React.createElement(
	        'div',
	        { className: 'title' },
	        React.createElement(
	          'span',
	          null,
	          '全部類別'
	        ),
	        React.createElement('a', { className: 'closeCatesBtn', onClick: this._onClose.bind(this, this.props.close) })
	      ),
	      React.createElement(
	        'div',
	        { className: "tabShow " + (this.state.topCategoryShow ? "show" : "hide") },
	        React.createElement(
	          'a',
	          { className: "shops " + this.state.topCategoryCalss },
	          React.createElement(
	            'span',
	            null,
	            this.state.currentCategoryTitle
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'cates', onScroll: this.catesScroll },
	        React.createElement(
	          'ul',
	          null,
	          this.state.homeCategory.map(function (menuHomeItem, index) {
	            return React.createElement(MenuHome, {
	              key: menuHomeItem.category_id,
	              categoryClass: menuHomeItem.ClassName,
	              clickClass: menuHomeItem.category_id == this.state.currentCategoryID ? "highlight" : "",
	              title: menuHomeItem.category_description,
	              click: this.homeItemClick.bind(this, index, menuHomeItem.category_id, menuHomeItem.category_description, menuHomeItem.ClassName),
	              ref: menuHomeItem.category_id
	            });
	          }, this)
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'listContent' },
	        React.createElement(MenuTab, { tabID: this.state.currentCategoryID, tabTitle: this.state.currentCategoryTitle, tabCategory: this.state.childCategory, tabClass: this.state.topCategoryCalss })
	      )
	    );
	  },
	
	  _onHomeChange: function _onHomeChange() {
	    this.setState({ childCategory: MenuStore.getCategory(this.state.currentCategoryID, 0) });
	  },
	
	  _onClose: function _onClose(close) {
	    close();
	    /*var mask = document.getElementById('mask');
	    mask.classList.remove("show");
	    mask.classList.add("hide");*/
	    setTimeout(function () {
	      ReactDOM.unmountComponentAtNode(document.getElementById('mainMenu'));
	    }, 10);
	    setTimeout(function () {
	      ReactDOM.unmountComponentAtNode(document.getElementById('mask'));
	    }, 10);
	  }
	
	});
	
	module.exports = MenuNavBox;

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	var Mask = React.createClass({
	    displayName: "Mask",
	
	
	    propTypes: {
	        showClass: React.PropTypes.string.isRequired,
	        closeFunc: React.PropTypes.func.isRequired
	    },
	
	    render: function render() {
	        return React.createElement("div", { className: "mask " + this.props.showClass, onClick: this.props.closeFunc });
	    }
	});
	
	module.exports = Mask;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	/*import LazyLoad from 'react-lazy-load';*/
	var TrackAction = nemReact.require('TrackAction');
	
	var ERRORIMGSRC = "/Themes/2016/images/img_LoadingErr.jpg";
	var LOADIMGSRC = "/Themes/2016/images/img_Loading.jpg";
	
	var ProductSlogan = React.createClass({
	    displayName: "ProductSlogan",
	
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { "class": "prodTit" },
	            this.props.slogan
	        );
	    }
	});
	
	var ProductShowLeft = React.createClass({
	    displayName: "ProductShowLeft",
	
	
	    render: function render() {
	        return React.createElement(
	            "p",
	            { "class": "restOf" },
	            "剩下",
	            React.createElement(
	                "span",
	                null,
	                this.props.qty
	            ),
	            "個"
	        );
	    }
	});
	
	var ProductComingSoon = React.createClass({
	    displayName: "ProductComingSoon",
	
	
	    render: function render() {
	        return React.createElement(
	            "p",
	            { "class": "notSaletext" },
	            "敬請期待"
	        );
	    }
	});
	
	var ProductDisCount = React.createClass({
	    displayName: "ProductDisCount",
	
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "tagDiscount" },
	            React.createElement(
	                "span",
	                { className: "discountNums" },
	                this.props.discountNums
	            ),
	            React.createElement(
	                "span",
	                null,
	                "折"
	            )
	        );
	    }
	});
	
	var ProductFavorButton = React.createClass({
	    displayName: "ProductFavorButton",
	
	    addToWish: function addToWish(event) {
	        event.preventDefault();
	        if (this.props.enableClickFunc) {
	            TrackAction.addToWish([this.props.chooseID], [this.props.chooseQty], [], [], []);
	        }
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "addFavor", onClick: this.addToWish },
	            React.createElement(
	                "a",
	                { href: "javascript:void(0);" },
	                "加入最愛"
	            )
	        );
	    }
	});
	
	var ProductBuyButton = React.createClass({
	    displayName: "ProductBuyButton",
	
	    addToCart: function addToCart(event) {
	        event.preventDefault();
	        if (this.props.enableClickFunc) {
	            TrackAction.addToCart([this.props.chooseID], [this.props.chooseQty], [], [], []);
	        }
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: this.props.showClass, onClick: this.addToCart },
	            React.createElement(
	                "a",
	                { href: "#" },
	                React.createElement(
	                    "span",
	                    null,
	                    this.props.showWord
	                )
	            )
	        );
	    }
	});
	
	var ProductFlashTime = React.createClass({
	    displayName: "ProductFlashTime",
	
	
	    getInitialState: function getInitialState() {
	        return { days: 0, hours: 0, minutes: 0, seconds: 0, countDownID: 0 };
	    },
	
	    componentDidMount: function componentDidMount() {
	        var flashTime = this.props.flashTime;
	        var countDown = this.countDown;
	        var countDownID = setInterval(function () {
	            countDown(flashTime);
	        }, 1000);
	        this.setState({ countDownID: countDownID });
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        clearInterval(this.state.countDownID);
	    },
	
	    countDown: function countDown(tpeTime) {
	        if (typeof tpeTime === 'undefined') {
	            clearInterval(this.state.countDownID);
	            return;
	        }
	        var utcNow = new Date().toUTCString();
	        var utcEndTime = new Date(tpeTime).toUTCString();
	        var totals = Date.parse(utcEndTime) - Date.parse(utcNow);
	
	        if (typeof totals !== "number") {
	            clearInterval(this.state.countDownID);
	            return;
	        }
	        if (totals < 1) {
	            this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
	            clearInterval(this.state.countDownID);
	            this.props.setNotSale(true);
	            return;
	        }
	        var seconds = Math.floor(totals / 1000 % 60);
	        var minutes = Math.floor(totals / 1000 / 60 % 60);
	        var hours = Math.floor(totals / (1000 * 60 * 60) % 24);
	        var days = Math.floor(totals / (1000 * 60 * 60 * 24));
	        this.setState({ days: days, hours: hours, minutes: minutes, seconds: seconds });
	    },
	
	    leftTime: function leftTime() {
	        var timeFormat = "{0}天{1}:{2}:{3}";
	        timeFormat = timeFormat.replace("{0}", this.state.days);
	        timeFormat = timeFormat.replace("{1}", this.state.hours > 9 ? "" + this.state.hours : "0" + this.state.hours);
	        timeFormat = timeFormat.replace("{2}", this.state.minutes > 9 ? "" + this.state.minutes : "0" + this.state.minutes);
	        timeFormat = timeFormat.replace("{3}", this.state.seconds > 9 ? "" + this.state.seconds : "0" + this.state.seconds);
	        return timeFormat;
	    },
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "snapUp" },
	            React.createElement(
	                "p",
	                null,
	                "搶購時間"
	            ),
	            React.createElement(
	                "div",
	                { className: "snapUpTime" },
	                this.leftTime()
	            )
	        );
	    }
	});
	
	var ProductPrice = React.createClass({
	    displayName: "ProductPrice",
	
	
	    displayPrice: function displayPrice(price) {
	        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	    },
	
	    setPriceClass: function setPriceClass() {
	        var className = "price";
	        if (this.props.priceType == "market") {
	            className = "marketPrice";
	        }
	        return className;
	    },
	
	    render: function render() {
	        return React.createElement(
	            "p",
	            { className: this.setPriceClass() },
	            React.createElement(
	                "span",
	                { className: "currency" },
	                "$"
	            ),
	            React.createElement(
	                "span",
	                { className: "priceNums" },
	                this.displayPrice(this.props.price)
	            )
	        );
	    }
	});
	
	var NEImage = React.createClass({
	    displayName: "NEImage",
	
	    getInitialState: function getInitialState() {
	        return { errored: false, isShow: false };
	    },
	
	    handleError: function handleError(event) {
	        window.removeEventListener("scroll", this.handleScroll);
	        this.setState({ errored: true });
	    },
	
	    detectPosition: function detectPosition() {
	        if (typeof this._reactInternalInstance === 'undefined') {
	            return;
	        }
	        var node = ReactDOM.findDOMNode(this);
	        var img = node.getBoundingClientRect();
	        var top = img.top;
	        var height = img.height;
	
	        // update showImage state if component element is in the viewport
	        //var min = window.pageYOffset;
	        var innerHeight = window.innerHeight;
	        if (0 <= top + height && top <= innerHeight) {
	            window.removeEventListener("scroll", this.handleScroll);
	            this.setState({ isShow: true });
	        }
	    },
	
	    handleScroll: function handleScroll() {
	        if (this.state.isShow) {
	            return;
	        }
	        this.detectPosition();
	    },
	
	    componentDidMount: function componentDidMount() {
	        var that = this;
	        window.addEventListener("scroll", this.handleScroll);
	        setTimeout(function () {
	            that.detectPosition();
	        }, 250);
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        window.removeEventListener("scroll", this.handleScroll);
	    },
	
	    render: function render() {
	        if (this.state.errored) {
	            return React.createElement("img", { style: { width: '100px', margin: '0 auto' }, src: ERRORIMGSRC, alt: this.props.alt });
	        } else {
	            return React.createElement("img", { style: this.state.isShow ? null : { width: '100px', margin: '0 auto' }, onError: this.handleError, src: this.state.isShow ? this.props.src : LOADIMGSRC, alt: this.props.alt });
	        }
	    }
	});
	
	var NEProduct = React.createClass({
	    displayName: "NEProduct",
	
	
	    propTypes: {
	        /*Item ID*/
	        productID: React.PropTypes.number.isRequired,
	        categoryID: React.PropTypes.number,
	        storeID: React.PropTypes.number,
	        /*Show discount or not*/
	        isDiscount: React.PropTypes.bool,
	        /*Item Link*/
	        productLink: React.PropTypes.string.isRequired,
	        /*Item image url*/
	        imgUrl: React.PropTypes.string,
	        /*Item image alt*/
	        imgAlt: React.PropTypes.string,
	        /*Item slogan*/
	        slogan: React.PropTypes.string,
	        /*show slogan or not*/
	        isSlogan: React.PropTypes.bool,
	        /*Item title*/
	        title: React.PropTypes.string.isRequired,
	        /*Item left qty*/
	        qty: React.PropTypes.number.isRequired,
	        /*show item qty or not*/
	        showLeft: React.PropTypes.bool,
	        /*Item market price*/
	        marketPrice: React.PropTypes.number,
	        /*Item selling price*/
	        sellingPrice: React.PropTypes.number.isRequired,
	        /*set this item can't be sell*/
	        notSale: React.PropTypes.bool,
	        /*set this item is flash item*/
	        isFlash: React.PropTypes.bool,
	        /*flash item's countdown time*/
	        flashTime: React.PropTypes.string
	    },
	
	    getInitialState: function getInitialState() {
	        return { chooseQty: 1, chooseID: this.props.productID, notSale: false };
	    },
	
	    _calcuDiscountNumber: function _calcuDiscountNumber() {
	        var discount = "";
	        if (typeof this.props.marketPrice === "number" && typeof this.props.sellingPrice === "number" && this.props.marketPrice > 0) {
	            var discountNums = Math.round(this.props.sellingPrice / this.props.marketPrice * 100);
	            if (discountNums < 96) {
	                discount = discountNums > 9 ? discountNums % 10 == 0 ? (discountNums / 10).toString() : discountNums.toString() : "<1";
	            }
	        }
	        return discount;
	    },
	
	    setNotSale: function setNotSale(isSale) {
	        this.setState({ notSale: isSale });
	    },
	
	    setProductClass: function setProductClass() {
	        var className = "prod";
	        if (typeof this.props.isDiscount === "boolean" && this.props.isDiscount) {
	            className += " prodDiscount";
	        }
	        if (typeof this.props.qty === "number" && this.props.qty == 0) {
	            className += " soldOut";
	        }
	        return className;
	    },
	
	    setBuyButtonClass: function setBuyButtonClass() {
	        var className = "prodBtns";
	        if (typeof this.props.isFlash === "boolean" && this.props.isFlash) {
	            className += " flashSoonBuy";
	        }
	        return className;
	    },
	
	    setDiscountDom: function setDiscountDom() {
	        var discountDom;
	        if (typeof this.props.isDiscount === "boolean" && this.props.isDiscount && this._calcuDiscountNumber() !== "") {
	            discountDom = React.createElement(ProductDisCount, { discountNums: this._calcuDiscountNumber() });
	        }
	        return discountDom;
	    },
	
	    setPriceDom: function setPriceDom(type, price) {
	        var priceDom;
	        if (type === "market" && this._calcuDiscountNumber() === "") {
	            return priceDom;
	        }
	        if (typeof price === "number") {
	            priceDom = React.createElement(ProductPrice, { priceType: type, price: price });
	        }
	        return priceDom;
	    },
	
	    isSlogan: function isSlogan() {
	        var slogan;
	        if (typeof this.props.isSlogan === "boolean" && this.props.isSlogan) {
	            slogan = React.createElement(ProductSlogan, { slogan: this.props.slogan });
	        }
	        return slogan;
	    },
	
	    isComingSoon: function isComingSoon() {
	        var comingSoon;
	        if (typeof this.props.notSale === "boolean" && this.props.notSale || this.state.notSale) {
	            comingSoon = React.createElement(ProductComingSoon, null);
	        }
	        return comingSoon;
	    },
	
	    isShowLeft: function isShowLeft() {
	        var showLeft;
	        if (typeof this.props.showLeft === "boolean" && this.props.showLeft) {
	            showLeft = React.createElement(ProductShowLeft, { qty: this.props.qty });
	        }
	        return showLeft;
	    },
	
	    setBuyButton: function setBuyButton() {
	        var className = "soonBuy",
	            buttonWord = "立即購買",
	            enableClickFunc = true;
	        if (typeof this.props.notSale === "boolean" && this.props.notSale || this.state.notSale) {
	            className = "notSale";
	            buttonWord = "尚未開賣";
	            enableClickFunc = false;
	        }
	        if (typeof this.props.qty === "number" && this.props.qty == 0) {
	            className = " notSale";
	            buttonWord = "已售完";
	            enableClickFunc = false;
	        }
	        return React.createElement(ProductBuyButton, { showClass: className, showWord: buttonWord, enableClickFunc: enableClickFunc, chooseID: this.state.chooseID, chooseQty: this.state.chooseQty });
	    },
	
	    isFlashTime: function isFlashTime() {
	        var flashDom,
	            enableClickFunc = true;
	        if (typeof this.props.isFlash === "boolean" && this.props.isFlash) {
	            flashDom = React.createElement(ProductFlashTime, { flashTime: this.props.flashTime, setNotSale: this.setNotSale });
	        } else {
	            flashDom = React.createElement(ProductFavorButton, { enableClickFunc: enableClickFunc, chooseID: this.state.chooseID, chooseQty: this.state.chooseQty });
	        }
	        return flashDom;
	    },
	
	    generateProductLink: function generateProductLink() {
	        if (this.props.productLink == "") {
	            return nemReact.generateUrl("product", { itemid: this.props.productID });
	        } else {
	            return this.props.productLink;
	        }
	    },
	
	    render: function render() {
	        var discountDom = this.setDiscountDom();
	        var marketPrice = this.setPriceDom("market", this.props.marketPrice);
	        var sellingPrice = this.setPriceDom("selling", this.props.sellingPrice);
	        var buyButton = this.setBuyButton();
	        return React.createElement(
	            "div",
	            { className: this.setProductClass() },
	            discountDom,
	            React.createElement(
	                "a",
	                { href: this.generateProductLink() },
	                React.createElement(
	                    "div",
	                    { className: "prodImg" },
	                    React.createElement(NEImage, { key: this.props.imgUrl, src: this.props.imgUrl, alt: this.props.imgAlt })
	                ),
	                this.isSlogan(),
	                React.createElement(
	                    "div",
	                    { className: "prodName" },
	                    this.props.title
	                ),
	                React.createElement(
	                    "div",
	                    { className: "prodPrice" },
	                    this.isShowLeft(),
	                    marketPrice,
	                    sellingPrice,
	                    this.isComingSoon()
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: this.setBuyButtonClass() },
	                this.isFlashTime(),
	                buyButton
	            )
	        );
	    }
	});
	
	window.nemReact.reacts['NEImage'] = NEImage;
	module.exports = window.nemReact.reacts['NEProduct'] = NEProduct;

/***/ }
/******/ ]);
//# sourceMappingURL=common.js.map