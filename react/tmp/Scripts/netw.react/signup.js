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

	module.exports = __webpack_require__(121);


/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var SignupContent = __webpack_require__(122);
	
	var init = function init() {
	    ReactDOM.render(React.createElement(SignupContent, null), document.getElementById('content'));
	};
	
	window.nemReact.reacts['signup'] = {
	    init: init
	};

/***/ },

/***/ 122:
/***/ function(module, exports) {

	'use strict';
	
	var NetwTools = nemReact.require('NetwTools');
	var SignupAction = nemReact.require('SignupAction');
	var SignupStore = nemReact.require('SignupStore');
	
	var INPUTDOMNAME = {
	    email: "email",
	    password: "password",
	    passwordAgain: "passwordAgain",
	    phonenumber: "phonenumber",
	    lastName: "lastName",
	    firstName: "firstName",
	    txtDate: "txtDate",
	    gender: "gender"
	};
	
	var SignupContent = React.createClass({
	    displayName: 'SignupContent',
	
	
	    checkEmail: function checkEmail(email) {
	        var errorObject = this.state.errorMessage;
	        var isCorrect = false;
	        if (!NetwTools.matchEmail(email)) {
	            errorObject[INPUTDOMNAME.email] = "";
	        } else {
	            delete errorObject[INPUTDOMNAME.email];
	            isCorrect = true;
	        }
	        this.setState({ signupEmail: email, errorMessage: errorObject });
	        return isCorrect;
	    },
	
	    checkPassword: function checkPassword(password) {
	        var errorObject = this.state.errorMessage;
	        var isCorrect = false;
	        if (!password) {
	            errorObject[INPUTDOMNAME.password] = "";
	        } else {
	            delete errorObject[INPUTDOMNAME.password];
	            isCorrect = true;
	        }
	        this.setState({ signupPassword: password, errorMessage: errorObject });
	        return isCorrect;
	    },
	
	    checkPasswordAgain: function checkPasswordAgain(passwordAgain) {
	        var errorObject = this.state.errorMessage;
	        var isCorrect = false;
	        if (passwordAgain != this.state.signupPassword) {
	            errorObject[INPUTDOMNAME.passwordAgain] = "";
	        } else {
	            delete errorObject[INPUTDOMNAME.passwordAgain];
	            isCorrect = true;
	        }
	        this.setState({ signupPasswordAgain: passwordAgain, errorMessage: errorObject });
	        return isCorrect;
	    },
	
	    handleSignupInput: function handleSignupInput(e) {
	        var names = e.target.name,
	            targetValue = e.target.value;
	
	        switch (names) {
	            case INPUTDOMNAME.email:
	                var setObject = this.checkEmail(targetValue);
	                //this.setState(setObject);
	                break;
	            case INPUTDOMNAME.password:
	                var setObject = this.checkPassword(targetValue);
	                //this.setState({signupPassword: targetValue});
	                break;
	            case INPUTDOMNAME.passwordAgain:
	                var setObject = this.checkPasswordAgain(targetValue);
	                //this.setState({signupPasswordAgain: targetValue});
	                break;
	            default:
	        }
	    },
	
	    checkAndSubmit: function checkAndSubmit(event) {
	        event.preventDefault();
	        //console.log(this.state);
	        var email = this.checkEmail(this.state.signupEmail);
	        var password = this.checkPassword(this.state.signupPassword);
	        var passwordAgain = this.checkPasswordAgain(this.state.signupPasswordAgain);
	        var reCaptcha = this.state.googleReCaptcha ? true : false;
	        // console.log(email);
	        // console.log(password);
	        // console.log(passwordAgain);
	        // console.log(reCaptcha);
	        if (email && password && passwordAgain && reCaptcha) {
	            this.signupNow();
	        }
	        return;
	    },
	
	    signupNow: function signupNow() {
	        var actName = "";
	        var signupModel = {
	            "Email": this.state.signupEmail,
	            "PWD": this.state.signupPassword,
	            "confirmPWD": this.state.signupPasswordAgain,
	            "ACTName": actName,
	            "AgreePaper": 1,
	            "MessagePaper": 1
	        };
	        var postData = JSON.stringify({ "SaveAccountVM": signupModel, "activity": actName });
	        SignupAction.signup(postData);
	    },
	
	    showError: function showError(inputName) {
	        var errClass = "";
	        var allError = Object.keys(this.state.errorMessage);
	        for (var i = 0; i < allError.length; i++) {
	            if (inputName == allError[i]) {
	                errClass = "errMsg";
	            }
	        }
	        return errClass;
	    },
	
	    initGreCaptcha: function initGreCaptcha(idName, verifyCallback, theme, type) {
	        grecaptcha.render(idName, {
	            'sitekey': '6LdBUgATAAAAAMLJw020y8KArh95QbmWer4P_q7k',
	            'callback': verifyCallback,
	            'theme': theme,
	            'type': type
	        });
	    },
	
	    verifyCallback: function verifyCallback(reponse) {
	        this.setState({ googleReCaptcha: reponse });
	        //$("#gcap").val(reponse);
	    },
	
	    isPassword: function isPassword() {
	        var inputType = "password";
	        if (this.state.showPassword) {
	            inputType = "text";
	        }
	        return inputType;
	    },
	
	    showPassword: function showPassword(event) {
	        this.setState({
	            showPassword: !this.state.showPassword
	        });
	    },
	
	    getInitialState: function getInitialState() {
	        return {
	            signupEmail: "",
	            signupPassword: "",
	            showPassword: false,
	            signupPasswordAgain: "",
	            googleReCaptcha: "",
	            errorMessage: {}
	        };
	    },
	
	    componentWillMount: function componentWillMount() {
	        SignupStore.addChangeListener(this._onChange);
	    },
	
	    componentDidMount: function componentDidMount() {
	        var verifyCallback = this.verifyCallback;
	        var enableReCaptcha = this.initGreCaptcha;
	        $(window).load(function () {
	            enableReCaptcha('googlecaptcha', verifyCallback, 'light', 'image');
	        });
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        SignupStore.removeChangeListener(this._onChange);
	    },
	
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'signup' },
	            React.createElement(
	                'div',
	                { className: 'title' },
	                React.createElement(
	                    'h3',
	                    null,
	                    '歡迎加入新蛋會員'
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'signupPage' },
	                React.createElement(
	                    'ul',
	                    { className: 'signupContent' },
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'p',
	                            { className: "signupInfo " + this.showError(INPUTDOMNAME.email) },
	                            React.createElement('input', { type: 'email', name: INPUTDOMNAME.email, placeholder: '請輸入e-mail(新蛋帳號)', defaultValue: this.state.signupEmail, onChange: this.handleSignupInput })
	                        ),
	                        React.createElement(
	                            'p',
	                            { className: "signupInfo " + this.showError(INPUTDOMNAME.password) },
	                            React.createElement('input', { type: this.isPassword(), name: INPUTDOMNAME.password, placeholder: '請輸入密碼', defaultValue: this.state.signupPassword, onChange: this.handleSignupInput }),
	                            React.createElement('input', { type: 'button', value: '顯示密碼', className: 'showPassword', onClick: this.showPassword })
	                        ),
	                        React.createElement(
	                            'p',
	                            { className: "signupInfo " + this.showError(INPUTDOMNAME.passwordAgain) },
	                            React.createElement('input', { type: 'password', name: INPUTDOMNAME.passwordAgain, placeholder: '再次輸入密碼', defaultValue: this.state.signupPasswordAgain, onChange: this.handleSignupInput })
	                        ),
	                        React.createElement(
	                            'div',
	                            { className: 'signupInfo googlecaptcha' },
	                            React.createElement('div', { className: 'captchaContent', id: 'googlecaptcha' })
	                        ),
	                        React.createElement(
	                            'a',
	                            { className: 'signupBtn', href: '', onClick: this.checkAndSubmit },
	                            '加入會員'
	                        ),
	                        React.createElement(
	                            'p',
	                            { className: 'provision' },
	                            '我同意接受',
	                            React.createElement(
	                                'a',
	                                { href: '' },
	                                '新蛋服務條款'
	                            ),
	                            '和',
	                            React.createElement(
	                                'a',
	                                { href: '' },
	                                '隱私權政策'
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    },
	
	    _onChange: function _onChange() {
	        var errorObject = this.state.errorMessage;
	        var response = SignupStore.getResponse();
	        switch (response) {
	            case "0":
	                alert("您已正式成為新蛋全球生活網的會員，誠摯歡迎您的加入");
	                ga('send', 'pageview', '/myaccount/signupcomplete');
	                location.href = "/";
	                break;
	            case "1":
	                alert("系統錯誤，請洽服務人員");
	                break;
	            case "Email已存在\n":
	                alert("Email已存在");
	                errorObject[INPUTDOMNAME.email] = "";
	                break;
	            case "帳號格式錯誤\n":
	                alert("帳號格式錯誤");
	                errorObject[INPUTDOMNAME.password] = "";
	                break;
	            case "確認密碼與密碼不符\n":
	                alert("確認密碼與密碼不符");
	                errorObject[INPUTDOMNAME.password] = "";
	                errorObject[INPUTDOMNAME.passwordAgain] = "";
	                break;
	            case "密碼有誤\n":
	                alert("密碼有誤");
	                errorObject[INPUTDOMNAME.password] = "";
	                break;
	            case "資料錯誤\n":
	                alert("資料錯誤，請檢查後再送出");
	                break;
	            default:
	                location.href = "/";
	                break;
	        }
	        this.setState({ signupPassword: "", signupPasswordAgain: "", errorMessage: errorObject });
	    }
	});
	
	module.exports = SignupContent;

/***/ }

/******/ });
//# sourceMappingURL=signup.js.map