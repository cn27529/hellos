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

	module.exports = __webpack_require__(106);


/***/ },

/***/ 21:
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

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var QuestionContent = __webpack_require__(107);
	
	var init = function init() {
	    ReactDOM.render(React.createElement(QuestionContent, null), document.getElementById('content'));
	};
	
	window.nemReact.reacts['question'] = {
	    init: init
	};

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var QuestionFillinView = __webpack_require__(108);
	var QuestionListView = __webpack_require__(109);
	
	var QuestionContent = React.createClass({
		displayName: 'QuestionContent',
	
	
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'askQuestion' },
				React.createElement(
					'div',
					{ className: 'title' },
					React.createElement(
						'h3',
						null,
						'問答中心'
					)
				),
				React.createElement(
					'div',
					{ className: 'askQuestionPage' },
					React.createElement('input', { type: 'radio', name: 'askQuestionTab', id: 'askQuestionTab01', hidden: true, defaultChecked: { true: true } }),
					React.createElement('input', { type: 'radio', name: 'askQuestionTab', id: 'askQuestionTab02', hidden: true }),
					React.createElement(
						'div',
						{ className: 'askQuestiontabs' },
						React.createElement(
							'label',
							{ htmlFor: 'askQuestionTab01' },
							'我要發問'
						),
						React.createElement(
							'label',
							{ htmlFor: 'askQuestionTab02' },
							'問答紀錄'
						)
					),
					React.createElement(
						'ul',
						{ className: 'askQuestionTabContent' },
						React.createElement(QuestionFillinView, null),
						React.createElement(QuestionListView, null)
					)
				)
			);
		}
	});
	
	module.exports = QuestionContent;

/***/ },

/***/ 108:
/***/ function(module, exports) {

	"use strict";
	
	var QuestionFillinView = React.createClass({
	    displayName: "QuestionFillinView",
	
	    render: function render() {
	        return React.createElement(QaFillin, { qaSteps: qaClass });
	    }
	});
	
	var qaClass = [{
	    type: "payment",
	    text: "付款問題",
	    questionType: ["何時匯款", "匯款帳號好像不對", "ATM被搬走了", "銀行忽然多了好多錢"]
	}, {
	    type: "ship",
	    text: "配送問題",
	    questionType: ["不小心送錯地址", "送到天堂了", "地獄直達沒有24H嗎"]
	}, {
	    type: "orderQA",
	    text: "訂單問題",
	    questionType: ["訂單是假的", "我需要退一千筆訂單", "訂單系統怪怪的"]
	}];
	
	var QaFillin = React.createClass({
	    displayName: "QaFillin",
	
	
	    getInitialState: function getInitialState() {
	        return {
	            qaName: "",
	            qaPhonenumber: "",
	            qaEmail: "",
	            qaOrdernumber: "",
	            qaStorenumber: "",
	            qaExplan: "",
	
	            qaClass: [],
	            qatype: "",
	            qaIndex: null,
	            qaSubject: ""
	        };
	    },
	
	    componentWillMount: function componentWillMount() {
	        this.setState({
	            qaClass: this.props.qaSteps
	        });
	    },
	
	    checkQatype: function checkQatype(e) {
	        var index = e.target.value;
	
	        if (!!index) {
	            this.setState({
	                qatype: this.state.qaClass[index].type,
	                qaIndex: index,
	                qaSubject: ""
	            });
	        } else {
	            this.setState({
	                qatype: "",
	                qaIndex: null,
	                qaSubject: ""
	            });
	        }
	    },
	
	    checkQaSubject: function checkQaSubject(e) {
	        this.setState({ qaSubject: e.target.value });
	    },
	
	    handleQaInput: function handleQaInput(e) {
	        var names = e.target.name,
	            targetValue = e.target.value;
	
	        switch (names) {
	            case 'name':
	                this.setState({ qaName: targetValue });
	                break;
	            case 'phonenumber':
	                this.setState({ qaPhonenumber: targetValue });
	                break;
	            case 'email':
	                this.setState({ qaEmail: targetValue });
	                break;
	            case 'ordernumber':
	                this.setState({ qaOrdernumber: targetValue });
	                break;
	            case 'storenumber':
	                this.setState({ qaStorenumber: targetValue });
	                break;
	            case 'explan':
	                this.setState({ qaExplan: targetValue });
	                break;
	            default:
	        }
	    },
	
	    render: function render() {
	        console.log(this.state.qaName + "," + this.state.qaPhonenumber + "," + this.state.qaEmail + "," + this.state.qaOrdernumber + "," + this.state.qaStorenumber + "," + this.state.qaExplan);
	
	        return React.createElement(
	            "li",
	            { className: "fillinQuestion" },
	            React.createElement(
	                "p",
	                null,
	                React.createElement(
	                    "label",
	                    { htmlFor: "name" },
	                    React.createElement(
	                        "span",
	                        { className: "req" },
	                        "*"
	                    ),
	                    "姓名"
	                ),
	                React.createElement("input", { type: "text", name: "name", placeholder: "", defaultValue: this.state.qaName, onChange: this.handleQaInput })
	            ),
	            React.createElement(
	                "p",
	                null,
	                React.createElement(
	                    "label",
	                    { htmlFor: "phonenumber" },
	                    "連絡電話"
	                ),
	                React.createElement("input", { type: "text", name: "phonenumber", placeholder: "", defaultValue: this.state.qaPhonenumber, onChange: this.handleQaInput })
	            ),
	            React.createElement(
	                "p",
	                null,
	                React.createElement(
	                    "label",
	                    { htmlFor: "Email" },
	                    React.createElement(
	                        "span",
	                        { className: "req" },
	                        "*"
	                    ),
	                    "連絡E-Mail"
	                ),
	                React.createElement("input", { type: "text", name: "email", placeholder: "", defaultValue: this.state.qaEmail, onChange: this.handleQaInput })
	            ),
	            React.createElement(
	                "p",
	                { className: "selectWrap" },
	                React.createElement(
	                    "label",
	                    { htmlFor: "Email" },
	                    React.createElement(
	                        "span",
	                        { className: "req" },
	                        "*"
	                    ),
	                    "問題類型"
	                ),
	                React.createElement(
	                    "select",
	                    { onChange: this.checkQatype },
	                    React.createElement(
	                        "option",
	                        { value: "" },
	                        "請選擇問題類型"
	                    ),
	                    this.state.qaClass.map(function (item, index) {
	                        return React.createElement(
	                            "option",
	                            { value: index, key: index },
	                            item.text
	                        );
	                    }, this)
	                )
	            ),
	            React.createElement(
	                "p",
	                { className: "selectWrap" },
	                React.createElement(
	                    "label",
	                    { htmlFor: "Email" },
	                    React.createElement(
	                        "span",
	                        { className: "req" },
	                        "*"
	                    ),
	                    "問題主旨"
	                ),
	                React.createElement(
	                    "select",
	                    { defaultValue: "this.state.qaSubject", onChange: this.checkQaSubject },
	                    React.createElement(
	                        "option",
	                        { value: "" },
	                        "請選擇問題主旨"
	                    ),
	                    !!this.state.qaIndex ? this.state.qaClass[this.state.qaIndex].questionType.map(function (obj, index) {
	                        return React.createElement(
	                            "option",
	                            { value: obj, key: index },
	                            obj
	                        );
	                    }, this) : null
	                )
	            ),
	            React.createElement(
	                "p",
	                null,
	                React.createElement(
	                    "label",
	                    { htmlFor: "Ordernumber" },
	                    "訂單編號"
	                ),
	                React.createElement("input", { type: "text", name: "ordernumber", placeholder: "", defaultValue: this.state.Ordernumber, onChange: this.handleQaInput })
	            ),
	            React.createElement(
	                "p",
	                null,
	                React.createElement(
	                    "label",
	                    { htmlFor: "Storenumber" },
	                    "賣場編號"
	                ),
	                React.createElement("input", { type: "text", name: "storenumber", placeholder: "", defaultValue: this.state.Storenumber, onChange: this.handleQaInput })
	            ),
	            React.createElement(
	                "p",
	                null,
	                React.createElement(
	                    "label",
	                    { htmlFor: "explan" },
	                    React.createElement(
	                        "span",
	                        { className: "req" },
	                        "*"
	                    ),
	                    "請說明"
	                ),
	                React.createElement("textarea", { rows: "3", name: "explan", defaultValue: this.state.explan, onChange: this.handleQaInput })
	            ),
	            React.createElement(
	                "a",
	                { className: "send", href: "" },
	                "送出"
	            )
	        );
	    }
	});
	
	module.exports = QuestionFillinView;

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var QaPopupBox = __webpack_require__(110);
	
	var QuestionListView = React.createClass({
	    displayName: "QuestionListView",
	
	
	    render: function render() {
	        return React.createElement(
	            "li",
	            { className: "questionList" },
	            React.createElement(
	                "p",
	                { className: "selectWrap noLabel" },
	                React.createElement(
	                    "select",
	                    { value: this.props.selected, defaultValue: "A" },
	                    React.createElement(
	                        "option",
	                        { value: "A" },
	                        "顯示近三個月資料"
	                    ),
	                    React.createElement(
	                        "option",
	                        { value: "B" },
	                        "2"
	                    ),
	                    React.createElement(
	                        "option",
	                        { value: "C" },
	                        "3"
	                    ),
	                    React.createElement(
	                        "option",
	                        { value: "D" },
	                        "4"
	                    )
	                )
	            ),
	            React.createElement(
	                "ul",
	                { className: "questionRecord" },
	                React.createElement(QuestionRecordData, null),
	                React.createElement(QuestionRecordData, null)
	            )
	        );
	    }
	});
	
	var QuestionRecordData = React.createClass({
	    displayName: "QuestionRecordData",
	
	
	    QaRecordLightbox: function QaRecordLightbox() {
	        ReactDOM.render(React.createElement(QaPopupBox, null), document.getElementById('popupBox'));
	    },
	
	    render: function render() {
	        return React.createElement(
	            "li",
	            null,
	            React.createElement(
	                "p",
	                { className: "questionNumber" },
	                React.createElement(
	                    "span",
	                    null,
	                    "問題編號:"
	                ),
	                React.createElement(
	                    "span",
	                    null,
	                    "R13456789"
	                ),
	                React.createElement(
	                    "span",
	                    null,
	                    "2016/01/01"
	                )
	            ),
	            React.createElement(
	                "p",
	                { className: "orderNumber" },
	                React.createElement(
	                    "span",
	                    null,
	                    "訂單編號"
	                ),
	                React.createElement(
	                    "span",
	                    null,
	                    "LBO123456789"
	                )
	            ),
	            React.createElement(
	                "p",
	                { className: "productName" },
	                React.createElement(
	                    "span",
	                    null,
	                    "產品名稱"
	                ),
	                React.createElement(
	                    "span",
	                    null,
	                    "2015/06/12"
	                )
	            ),
	            React.createElement(
	                "p",
	                { className: "questionContent" },
	                React.createElement(
	                    "span",
	                    null,
	                    "問題內容"
	                ),
	                React.createElement(
	                    "span",
	                    null,
	                    "測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容測試內容"
	                )
	            ),
	            React.createElement(
	                "span",
	                { className: "askQuestionBtn" },
	                React.createElement(
	                    "a",
	                    { className: "askAgainBtn", href: "" },
	                    "再次發問"
	                ),
	                React.createElement(
	                    "a",
	                    { className: "questionRecordBtn", href: "#", onClick: this.QaRecordLightbox },
	                    "問答紀錄"
	                )
	            )
	        );
	    }
	});
	
	module.exports = QuestionListView;

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Mask = __webpack_require__(21);
	var QaClientMsg = __webpack_require__(111);
	var QaCompanyMsg = __webpack_require__(112);
	
	var QaPopupBox = React.createClass({
	    displayName: 'QaPopupBox',
	
	
	    componentDidMount: function componentDidMount() {
	        ReactDOM.render(React.createElement(Mask, { showClass: 'show', closeFunc: function closeFunc() {} }), document.getElementById('mask'));
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        setTimeout(function () {
	            ReactDOM.unmountComponentAtNode(document.getElementById('mask'));
	        }, 10);
	    },
	
	    QaRecordClose: function QaRecordClose() {
	        setTimeout(function () {
	            ReactDOM.unmountComponentAtNode(document.getElementById('popupBox'));
	        }, 10);
	    },
	
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'popupBox show' },
	            React.createElement('a', { href: '#', className: 'close', onClick: this.QaRecordClose }),
	            React.createElement(
	                'div',
	                { className: 'popupBoxContent qrlbContent' },
	                React.createElement(
	                    'div',
	                    { className: 'qrlbTit' },
	                    React.createElement(
	                        'p',
	                        null,
	                        '問題編號：R13456789'
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'Dialog' },
	                    React.createElement(QaClientMsg, null),
	                    React.createElement(QaCompanyMsg, null),
	                    React.createElement(QaCompanyMsg, null),
	                    React.createElement(QaClientMsg, null)
	                )
	            )
	        );
	    }
	});
	
	module.exports = QaPopupBox;

/***/ },

/***/ 111:
/***/ function(module, exports) {

	"use strict";
	
	var QaClientMsg = React.createClass({
	    displayName: "QaClientMsg",
	
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "clientMessages" },
	            React.createElement("div", { className: "clientIcon" }),
	            React.createElement(
	                "div",
	                { className: "dialogBox" },
	                React.createElement(
	                    "div",
	                    { className: "clientDialog" },
	                    React.createElement(
	                        "p",
	                        { className: "dialogRecord" },
	                        React.createElement(
	                            "span",
	                            null,
	                            "客戶主旨"
	                        ),
	                        "-",
	                        React.createElement(
	                            "span",
	                            null,
	                            "其他問題"
	                        ),
	                        React.createElement("br", null),
	                        React.createElement(
	                            "span",
	                            null,
	                            "問題:"
	                        ),
	                        React.createElement("br", null),
	                        React.createElement(
	                            "span",
	                            null,
	                            "收到了，非常好！！收到了，非常好！！收到了，非常好！！收到了，非常好！！收到了，非常好！！收到了，非常好！！"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "p",
	                    { className: "dialogTime" },
	                    React.createElement(
	                        "span",
	                        null,
	                        "2016.03.05"
	                    ),
	                    React.createElement(
	                        "span",
	                        null,
	                        "14:25"
	                    )
	                )
	            )
	        );
	    }
	});
	
	module.exports = QaClientMsg;

/***/ },

/***/ 112:
/***/ function(module, exports) {

	"use strict";
	
	var QaCompanyMsg = React.createClass({
	    displayName: "QaCompanyMsg",
	
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "companyMessages" },
	            React.createElement("div", { className: "companyIcon" }),
	            React.createElement(
	                "div",
	                { className: "dialogBox" },
	                React.createElement(
	                    "div",
	                    { className: "companyDialog" },
	                    React.createElement(
	                        "p",
	                        { className: "dialogRecord" },
	                        React.createElement(
	                            "span",
	                            null,
	                            "客服回覆:您好‧"
	                        ),
	                        React.createElement("br", null),
	                        React.createElement(
	                            "span",
	                            null,
	                            "謝謝您的購買，您的肯定是我們整體團隊最大的動力，期待您能繼續支持台灣新蛋，謝謝您！謝謝您的購買，您的肯定是我們整體團隊最大的動力，期待您能繼續支持台灣新蛋，謝謝您！謝謝您的購買，您的肯定是我們整體團隊最大的動力，期待您能繼續支持台灣新蛋，謝謝您！謝謝您的購買，您的肯定是我們整體團隊最大的動力，期待您能繼續支持台灣新蛋，謝謝您！謝謝您的購買，您的肯定是我們整體團隊最大的動力，期待您能繼續支持台灣新蛋，謝謝您！謝謝您的購買，您的肯定是我們整體團隊最大的動力，期待您能繼續支持台灣新蛋，謝謝您！謝謝您的購買，您的肯定是我們整體團隊最大的動力，期待您能繼續支持台灣新蛋，謝謝您！謝謝您的購買，您的肯定是我們整體團隊最大的動力，期待您能繼續支持台灣新蛋，謝謝您！謝謝您的購買，您的肯定是我們整體團隊最大的動力，期待您能繼續支持台灣新蛋，謝謝您！謝謝您的購買，您的肯定是我們整體團隊最大的動力，期待您能繼續支持台灣新蛋，謝謝您！"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "p",
	                    { className: "dialogTime" },
	                    React.createElement(
	                        "span",
	                        null,
	                        "2016.03.05"
	                    ),
	                    React.createElement(
	                        "span",
	                        null,
	                        "14:25"
	                    )
	                )
	            )
	        );
	    }
	});
	
	module.exports = QaCompanyMsg;

/***/ }

/******/ });
//# sourceMappingURL=question.js.map