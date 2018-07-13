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

	module.exports = __webpack_require__(83);


/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LoginContent = __webpack_require__(84);
	
	var init = function init() {
	    ReactDOM.render(React.createElement(LoginContent, null), document.getElementById('content'));
	};
	
	window.nemReact.reacts['login'] = {
	    init: init
	};

/***/ },

/***/ 84:
/***/ function(module, exports) {

	"use strict";
	
	var LoginContent = React.createClass({
	    displayName: "LoginContent",
	
	    getLoginData: function getLoginData(event) {
	        var emailRegx = /^([\w-\.\+\-\_]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4})$/;
	        if (this.state.userAccount != null) {
	            if (!this.state.userAccount.match(emailRegx)) {
	                this.setState({
	                    userAccountCheck: false,
	                    userAccountErrMsg: "請輸入正確E-Mail帳號"
	                });
	                return;
	            } else {
	                this.setState({ userAccountCheck: true });
	                document.getElementById("loginForm").submit();
	            }
	        } else {
	            this.setState({
	                userAccountCheck: false,
	                userAccountErrMsg: "請輸入E-Mail帳號"
	            });
	        }
	    },
	
	    getInitialState: function getInitialState() {
	        return {
	            userAccount: netwRespMessage.user,
	            userAccountCheck: true,
	            userAccountErrMsg: "",
	            userPassword: "",
	            response: netwRespMessage
	        };
	    },
	
	    handleInputText: function handleInputText(e) {
	        var names = e.target.name,
	            targetVal = e.target.value;
	
	        switch (names) {
	            case 'user':
	                this.setState({ userAccount: targetVal });
	                break;
	            case 'pass':
	                this.setState({ userPassword: targetVal });
	                break;
	            default:
	        }
	    },
	
	    checkUserError: function checkUserError() {
	        var className = '';
	        if (!!this.state.userAccountCheck == false) {
	            className = "errMsg";
	        } else {
	            return;
	        }
	
	        return className;
	    },
	
	    checkPwdError: function checkPwdError() {
	        var className = '';
	        if (!!this.state.response.Pwderro) {
	            className = "errMsg";
	        } else {
	            return;
	        }
	
	        return className;
	    },
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "login" },
	            React.createElement(
	                "div",
	                { className: "title" },
	                React.createElement(
	                    "h3",
	                    null,
	                    "新蛋全球生活網會員登入"
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "loginPage" },
	                React.createElement(
	                    "form",
	                    { id: "loginForm", action: nemReact.generateUrl("login"), method: "post" },
	                    React.createElement(
	                        "ul",
	                        { className: "loginContent" },
	                        React.createElement(
	                            "li",
	                            null,
	                            React.createElement(
	                                "p",
	                                { className: this.checkUserError() },
	                                React.createElement("input", { type: "Email", name: "user", defaultValue: this.state.userAccount, placeholder: "請輸入e-mail(新蛋帳號)", onChange: this.handleInputText }),
	                                React.createElement(
	                                    "span",
	                                    null,
	                                    this.state.userAccountErrMsg
	                                )
	                            ),
	                            React.createElement(
	                                "p",
	                                { className: this.checkPwdError() },
	                                React.createElement("input", { type: "password", name: "pass", defaultValue: this.state.userPassword, placeholder: "請輸入密碼(8-12碼數字或英文字母混合)", onChange: this.handleInputText }),
	                                React.createElement(
	                                    "span",
	                                    null,
	                                    this.state.response.Pwderro
	                                )
	                            ),
	                            React.createElement(
	                                "a",
	                                { className: "loginBtn", onClick: this.getLoginData },
	                                "登入"
	                            ),
	                            React.createElement(
	                                "p",
	                                { className: "forgetPwd" },
	                                React.createElement(
	                                    "a",
	                                    { href: _netwWebURL + nemReact.generateUrl("forgetpass") },
	                                    "忘記密碼?"
	                                )
	                            ),
	                            React.createElement(
	                                "a",
	                                { className: "registerBtn", href: nemReact.generateUrl("signup") },
	                                "申請註冊"
	                            ),
	                            React.createElement(
	                                "p",
	                                { className: "desktopView", style: {
	                                        display: 'none'
	                                    } },
	                                React.createElement(
	                                    "a",
	                                    { href: _netwWebURL },
	                                    "檢視桌上型電腦版"
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement("input", { type: "hidden", id: "ratm", name: "ratm", value: this.state.response.ratm }),
	                    React.createElement("input", { type: "hidden", id: "type", name: "type", value: this.state.response.type }),
	                    React.createElement("input", { type: "hidden", id: "acty", name: "acty", value: this.state.response.acty }),
	                    React.createElement("input", { type: "hidden", id: "returnUrl", name: "returnUrl", value: netwRespReturnUrl })
	                )
	            )
	        );
	    }
	});
	
	module.exports = LoginContent;

/***/ }

/******/ });
//# sourceMappingURL=login.js.map