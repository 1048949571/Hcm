(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[231],{

/***/ "./app/js/common/crypto.js":
/*!*********************************!*\
  !*** ./app/js/common/crypto.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CryptoJS = __webpack_require__(/*! crypto-js */ "./node_modules/_crypto-js@3.1.9-1@crypto-js/index.js");
exports.default = {
    Encrypt: function Encrypt(word) {
        var key = CryptoJS.enc.Utf8.parse("hcmabcdefghijklm");
        var srcs = CryptoJS.enc.Utf8.parse(word);
        var encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        return encrypted.toString();
    },
    Decrypt: function Decrypt(word) {
        var key = CryptoJS.enc.Utf8.parse("hcmabcdefghijklm");
        var decrypt = CryptoJS.AES.decrypt(word, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }
};

/***/ }),

/***/ "./app/js/common/lib.js":
/*!******************************!*\
  !*** ./app/js/common/lib.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    onVisibilityChange: function onVisibilityChange(fn1, fn2) {
        var hiddenProperty = 'hidden' in document ? 'hidden' : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null;
        var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
        var onVisibilityChange = function onVisibilityChange() {
            if (!document[hiddenProperty]) {
                console.log('页面非激活' + new Date());
            }
            if (document[hiddenProperty]) {
                console.log('页面激活' + new Date());
            }
        };
        document.addEventListener(visibilityChangeEvent, onVisibilityChange);
    },

    //银行卡号格式化
    formatAccount: function formatAccount(number) {
        number = number.replace(/[\s]/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
        return number;
    },
    formatThousandMoney: function formatThousandMoney(money, currencyText) {
        if (isNaN(money)) return '';
        currencyText = currencyText || '';
        if ($.isNumeric(money) === false || money == 0) {
            return '0.00';
        } else {
            money = +money;
        }
        money = money.toFixed(2);
        if (money == 0) {
            return '0.00';
        } else {
            return currencyText + ' ' + (money + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
        }
    },
    encryption: function encryption() {
        var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var str = '' + s;
        return str.replace(/(\d{3})\d*([0-9a-zA-Z]{4})/, "$1****$2");
    },

    browser: {
        versions: function () {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            var isInApp = u.indexOf('Ourydc.Yuebaobao') > -1;
            var locAppVersion = '';
            if (isInApp) {
                var infoArr = u.match(/Ourydc.Yuebaobao.*/);
                if (infoArr.length > 0) {
                    var info = infoArr[0];
                    locAppVersion = info.substr(info.indexOf("/") + 1);
                }
            }

            return {
                trident: u.indexOf('Trident') > -1, //IE�ں�
                presto: u.indexOf('Presto') > -1, //opera�ں�
                webKit: u.indexOf('AppleWebKit') > -1, //ƻ�����ȸ��ں�
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //����ں�
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //�Ƿ�Ϊ�ƶ��ն�
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios�ն�
                android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android�ն�
                iPhone: u.indexOf('iPhone') > -1, //�Ƿ�ΪiPhone����QQHD�����
                iPad: u.indexOf('iPad') > -1, //�Ƿ�iPad
                webApp: u.indexOf('Safari') == -1, //�Ƿ�webӦ�ó���û��ͷ����ײ�
                weixin: u.indexOf('MicroMessenger') > -1, //�Ƿ�΢��
                weibo: u.match(/WeiBo/i) == "WeiBo" || u.match(/Weibo/i) == "Weibo" || u.match(/weibo/i) == "weibo",
                qq: u.match(/qq/i) == "qq" || u.match(/QQ/i) == "QQ", //�Ƿ�QQ
                qqBrower: u.indexOf("Mobile MQQBrowser") == -1 && u.indexOf("MQQBrowser") != -1,
                isInApp: u.indexOf('Ourydc.Yuebaobao') > -1,
                locAppVersion: locAppVersion

            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    },

    /**
     * 验证账号格式
     */
    checkAccount: function checkAccount(name) {
        var patt = /^[a-zA-Z](\w|\s+){5,15}$/;
        return patt.test(this.trim(name ? name : ''));
    },
    checkUrl: function checkUrl(name) {
        var patt = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
        return patt.test(this.trim(name ? name : ''));
    },


    /**
         * 对接人
         */
    Reg: function Reg() {
        var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var patt = /^[^\u4e00-\u9fa5]{5,31}$/;
        return patt.test(this.trim(str ? str : ''));
    },


    /**
     * 验证密码格式
     */
    checkPassword: function checkPassword() {
        var password = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var patt = /^.{6,16}$/;
        return patt.test(this.trim(password ? password : ''));
    },

    /**
     * 去除左右空格
     */
    trim: function trim(s) {
        s = '' + s;
        return s.replace(/(^\s*)|(\s*$)/g, "");
    },


    /**
      * 获取对应名称的cookie
      * @param name cookie的名称
      * @returns {null} 不存在时，返回null
      */
    getCookie: function getCookie(name) {
        var arr;
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) return unescape(arr[2]);else return null;
    },
    required: function required(s) {

        var str = this.trim(s ? s : '');
        if (str && str.length) {
            return true;
        } else {
            return false;
        }
    },
    legnthCheck: function legnthCheck() {
        var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'INPUT';

        var str = this.trim(s ? s : '');
        return str.length < this.LENGTH[type];
    },


    LENGTH: {
        URL: 500,
        TEXTAREA: 200,
        INPUT: 50
    },

    /**
     * 获取URL中的参数
     * @param name
     * @returns {string}
     */
    getQueryString: function getQueryString(name) {
        var reg = new RegExp("(^|&|[?])" + name + "=([^&]*)(&|$)");
        var r = window.location.href.substr(1).match(reg);
        var newName = r != null ? r[2] : "";
        return newName;
    },


    /**
     * 获取str中的参数
     * @param name
     * @returns {string}
     */
    getParamString: function getParamString(str, name) {
        var reg = new RegExp("(^|&|[?])" + name + "=([^&]*)(&|$)");
        var r = str.substr(1).match(reg);
        var newName = r != null ? r[2] : "";
        return newName;
    },
    Trim: function Trim(str) {
        //去除空格
        return str.replace(/(^\s*)|(\s*$)/g, "");
    },


    /**
     * 获取设备名称
     * @returns {string}
     */
    deviceCheck: function deviceCheck() {
        var device = "";
        if (browser.versions.mobile) {
            if (browser.versions.android) {
                device = "android";
            } else if (browser.versions.ios) {
                device = "ios";
            } else {
                device = "mobile";
            }
        } else {
            device = "web";
        }
        return device;
    }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.3.1@jquery/dist/jquery.js")))

/***/ }),

/***/ "./app/widget/components/Copyright.js":
/*!********************************************!*\
  !*** ./app/widget/components/Copyright.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Copyright = function (_React$Component) {
    _inherits(Copyright, _React$Component);

    function Copyright(props) {
        _classCallCheck(this, Copyright);

        return _possibleConstructorReturn(this, (Copyright.__proto__ || Object.getPrototypeOf(Copyright)).call(this, props));
    }

    _createClass(Copyright, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: this.props.clazzName ? this.props.clazzName : 'Copyright' },
                'Copyright \xA9 \u676D\u5DDE\u4E45\u70B9\u7F51\u7EDC\u6280\u672F\u6709\u9650\u516C\u53F8'
            );
        }
    }]);

    return Copyright;
}(React.Component);

exports.default = Copyright;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/index/Brand/AccountManagement/AddDepartment.js":
/*!*******************************************************************!*\
  !*** ./app/widget/index/Brand/AccountManagement/AddDepartment.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _treeSelect = __webpack_require__(/*! antd/es/tree-select */ "./node_modules/_antd@3.10.1@antd/es/tree-select/index.js");

var _treeSelect2 = _interopRequireDefault(_treeSelect);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/tree-select/style/css */ "./node_modules/_antd@3.10.1@antd/es/tree-select/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;
var TextArea = _input2.default.TextArea;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.getDepartmentLeaderList = function () {
            var parentId = _this.state.parentId;

            _ajax2.default.get('/hcm/userout/getDepartmentLeaderList', {
                params: {
                    departmentId: parentId
                }
            }).then(function (response) {
                _this.setState({
                    leaderList: response.data.data,
                    departLeader: []
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.chTreeSelect = function (value, label, extra, type) {
            var state = _this.state;
            state[type] = value;
            _this.setState(state, function () {
                // this.getDepartmentLeaderList()
            });
        };

        _this.onChange = function (e, type) {
            var state = _this.state;
            state[type] = e.target.value;
            _this.setState(state);
        };

        _this.handleChange = function (e) {
            _this.setState({
                departLeader: e
            });
        };

        _this.onSubmit = function () {
            var _this$state = _this.state,
                parentId = _this$state.parentId,
                departName = _this$state.departName,
                departLeader = _this$state.departLeader;

            if (!parentId) {
                _message3.default.error('请选择父级部门');
                return;
            }
            if (!departName || departName.length <= 0) {
                _message3.default.error('请输入部门名称');
                return;
            }
            _ajax2.default.post('/hcm/department/savaDepartment', {
                parentId: parentId, departName: departName,
                departState: 1,
                departLeader: departLeader.join(',')
            }).then(function (response) {
                if (response.data.status == '10000') {
                    _message3.default.success(response.data.message);
                    var _this$props = _this.props,
                        onShowAdd = _this$props.onShowAdd,
                        getDepartmentList = _this$props.getDepartmentList;

                    getDepartmentList();
                    onShowAdd(false);
                } else {
                    _message3.default.warning(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.state = {
            departmentList: _this.props.departmentList,
            visible: _this.props.visible,
            parentId: null,
            departName: null,
            leaderList: [],
            departLeader: []
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _nextProps$department = nextProps.departmentList,
                departmentList = _nextProps$department === undefined ? [] : _nextProps$department;
            // let departmentList = []

            this.setState({
                parentId: null,
                departName: null,
                departLeader: [],
                visible: nextProps.visible,
                departmentList: departmentList
            }, function () {
                if (departmentList.length == 0 || departmentList[0] && departmentList[0].key != '0') {
                    departmentList.unshift({
                        key: '0',
                        title: '无',
                        value: '0'
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                departmentList = _state.departmentList,
                visible = _state.visible,
                parentId = _state.parentId,
                departName = _state.departName,
                leaderList = _state.leaderList,
                departLeader = _state.departLeader;
            var onShowAdd = this.props.onShowAdd;

            return React.createElement(
                _modal2.default,
                {
                    maskClosable: false,
                    title: '\u65B0\u589E\u90E8\u95E8',
                    visible: visible,
                    className: 'add-department',
                    onCancel: function onCancel() {
                        return onShowAdd(false);
                    },
                    onOk: function onOk() {
                        return _this2.onSubmit();
                    }
                },
                React.createElement(
                    'ul',
                    { className: 'items' },
                    React.createElement(
                        'li',
                        { className: 'item' },
                        React.createElement(
                            'span',
                            { className: 'title  red-ck' },
                            '\u7236\u7EA7\u90E8\u95E8'
                        ),
                        React.createElement(
                            'div',
                            { className: 'ipt-box' },
                            React.createElement(_treeSelect2.default, {
                                style: { width: '100%' },
                                dropdownStyle: { maxHeight: 200, overflow: 'auto' },
                                value: [parentId],
                                treeData: departmentList,
                                onChange: function onChange(value, label, extra) {
                                    return _this2.chTreeSelect(value, label, extra, 'parentId');
                                }
                            })
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'item' },
                        React.createElement(
                            'span',
                            { className: 'title  red-ck' },
                            '\u90E8\u95E8\u540D\u79F0'
                        ),
                        React.createElement(
                            'div',
                            { className: 'ipt-box' },
                            React.createElement(_input2.default, { onChange: function onChange(e) {
                                    return _this2.onChange(e, 'departName');
                                }, value: departName })
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/index/Brand/AccountManagement/InfoItem.js":
/*!**************************************************************!*\
  !*** ./app/widget/index/Brand/AccountManagement/InfoItem.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _treeSelect = __webpack_require__(/*! antd/es/tree-select */ "./node_modules/_antd@3.10.1@antd/es/tree-select/index.js");

var _treeSelect2 = _interopRequireDefault(_treeSelect);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@3.10.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/tree-select/style/css */ "./node_modules/_antd@3.10.1@antd/es/tree-select/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@3.10.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _AddDepartment = __webpack_require__(/*! ./AddDepartment */ "./app/widget/index/Brand/AccountManagement/AddDepartment.js");

var _AddDepartment2 = _interopRequireDefault(_AddDepartment);

var _lib = __webpack_require__(/*! ../../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

var _crypto = __webpack_require__(/*! ../../../../js/common/crypto */ "./app/js/common/crypto.js");

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {LoadingModal} from '../.././../components/LoadingModal/LoadingModal';
var TextArea = _input2.default.TextArea;
var App = (_temp = _class = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _initialiseProps.call(_this);

        var _this$props$match$par = _this.props.match.params,
            id = _this$props$match$par.id,
            type = _this$props$match$par.type;

        _this.state = {
            id: id,
            type: type,
            addshow: false,
            departmentList: [],
            departid: null,
            username: null,
            realname: null,
            password: null,
            memo: null
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.getDepartmentList();
            if (this.state.type == 'edit') {
                this.getInfo();
            }
            _ajax2.default.get('/hcm/userout/getParentUseroutName').then(function (response) {
                _this2.setState({
                    masterName: response.data.data.username
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        }
    }, {
        key: 'getInfo',
        value: function getInfo() {
            var _this3 = this;

            _ajax2.default.get('/hcm/userout/getUserById', {
                params: {
                    userId: this.state.id,
                    usertype: 'c'
                }
            }).then(function (response) {
                var data = response.data.data;
                _this3.setState({
                    departid: '' + data.departid,
                    username: data.username,
                    realname: data.realname,
                    password: '******',
                    memo: data.memo
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _state = this.state,
                addshow = _state.addshow,
                masterName = _state.masterName,
                username = _state.username,
                realname = _state.realname,
                password = _state.password,
                memo = _state.memo,
                departid = _state.departid,
                departmentList = _state.departmentList,
                type = _state.type;


            return React.createElement(
                'div',
                { className: 'info-item' },
                React.createElement(
                    'div',
                    { className: 'Breadcrumb' },
                    React.createElement(
                        _breadcrumb2.default,
                        null,
                        React.createElement(
                            _breadcrumb2.default.Item,
                            null,
                            React.createElement(
                                'a',
                                { href: '/index.html#/AccountManagement' },
                                '\u8D26\u53F7\u7BA1\u7406'
                            )
                        ),
                        React.createElement(
                            _breadcrumb2.default.Item,
                            null,
                            type == 'edit' ? '编辑' : '新增'
                        )
                    )
                ),
                React.createElement(
                    'ul',
                    { className: 'content' },
                    React.createElement(
                        'li',
                        { className: 'item' },
                        React.createElement(
                            'span',
                            { className: 'title red-ck' },
                            '\u59D3\u540D'
                        ),
                        React.createElement(
                            'div',
                            { className: 'ipt-box' },
                            React.createElement(_input2.default, { onChange: function onChange(e) {
                                    return _this4.onChange(e, 'realname');
                                }, maxLength: '32', value: realname })
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'item' },
                        React.createElement(
                            'span',
                            { className: 'title red-ck' },
                            '\u7528\u6237\u540D'
                        ),
                        React.createElement(
                            'div',
                            { className: 'ipt-box' },
                            React.createElement(
                                _tooltip2.default,
                                { overlayStyle: { maxWidth: '400px' }, placement: 'right', title: React.createElement(
                                        'ul',
                                        null,
                                        React.createElement(
                                            'li',
                                            null,
                                            '6 - 16 \u4E2A\u5B57\u7B26\uFF0C\u53EF\u4F7F\u7528\u6570\u5B57\u3001\u5B57\u6BCD\u3001\u4E0B\u5212\u7EBF;'
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            '\u9700\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u5B57\u6BCD\u533A\u5206\u5927\u5C0F\u5199\u3002'
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            '\u9996\u5C3E\u7A7A\u683C\u65E0\u6548;'
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            '\u521B\u5EFA\u540E\u4E0D\u53EF\u4FEE\u6539;'
                                        )
                                    ) },
                                React.createElement(_input2.default, { disabled: type == 'edit' ? true : false, addonBefore: masterName + ':', onChange: function onChange(e) {
                                        return _this4.onChange(e, 'username');
                                    }, value: username })
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'item' },
                        React.createElement(
                            'span',
                            { className: 'title red-ck' },
                            '\u5BC6\u7801'
                        ),
                        React.createElement(
                            'div',
                            { className: 'ipt-box' },
                            React.createElement(
                                _tooltip2.default,
                                { placement: 'right', title: '6 - 16  个字符' },
                                React.createElement(_input2.default, { onChange: function onChange(e) {
                                        return _this4.onChange(e, 'password');
                                    }, type: 'password', value: password })
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'item' },
                        React.createElement(
                            'span',
                            { className: 'title  red-ck' },
                            '\u6240\u5C5E\u90E8\u95E8'
                        ),
                        React.createElement(
                            'div',
                            { className: 'ipt-box' },
                            React.createElement(_treeSelect2.default, {
                                style: { width: '100%' },
                                dropdownStyle: { maxHeight: 300, overflow: 'auto' },
                                value: [departid],
                                treeData: departmentList,
                                onChange: function onChange(value, label, extra) {
                                    return _this4.chTreeSelect(value, label, extra, 'departid');
                                }
                            })
                        ),
                        React.createElement(
                            'a',
                            {
                                onClick: function onClick() {
                                    return _this4.onShowAdd(true);
                                },
                                style: { fontSize: '14px', paddingLeft: '20px' } },
                            React.createElement(_icon2.default, { style: { paddingRight: '10px' }, type: 'plus-circle', theme: 'outlined' }),
                            '\u65B0\u589E\u90E8\u95E8'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'item' },
                        React.createElement(
                            'span',
                            { className: 'title' },
                            '\u5907\u6CE8\u8BF4\u660E'
                        ),
                        React.createElement(
                            'div',
                            { className: 'ipt-box' },
                            React.createElement(TextArea, { onChange: function onChange(e) {
                                    return _this4.onChange(e, 'memo');
                                }, value: memo, placeholder: '', autosize: { minRows: 2, maxRows: 6 } })
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'item' },
                        React.createElement('span', { className: 'title' }),
                        React.createElement(
                            'div',
                            { className: 'ipt-box' },
                            React.createElement(
                                _button2.default,
                                { className: 'AccountEdit btn2-main', onClick: function onClick() {
                                        return _this4.onSubmit();
                                    } },
                                '\u786E\u5B9A'
                            ),
                            React.createElement(
                                'a',
                                { href: '/index.html#/AccountManagement' },
                                React.createElement(
                                    _button2.default,
                                    null,
                                    '\u8FD4\u56DE'
                                )
                            )
                        )
                    )
                ),
                React.createElement(_AddDepartment2.default, { getDepartmentList: function getDepartmentList() {
                        return _this4.getDepartmentList();
                    }, onShowAdd: function onShowAdd(bl) {
                        return _this4.onShowAdd(bl);
                    }, departmentList: departmentList, visible: addshow }),
                React.createElement(_Copyright2.default, { clazzName: 'copyright' })
            );
        }
    }]);

    return App;
}(React.Component), _initialiseProps = function _initialiseProps() {
    var _this5 = this;

    this.getDepartmentList = function () {
        _ajax2.default.get('/hcm/department/fuByIds', {
            params: {
                id: 0
            }
        }).then(function (response) {
            if (response.data.status == '10000' && response.data.data) {
                var _format = function _format(data) {
                    return data.map(function (item, index) {
                        if (item.subSysDepartment != null) {
                            return {
                                title: item.departName,
                                value: '' + item.id,
                                key: '' + item.id,
                                children: _format(item.subSysDepartment)
                            };
                        } else {
                            return {
                                title: item.departName,
                                value: '' + item.id,
                                key: '' + item.id
                            };
                        }
                    });
                };

                var data = response.data.data;

                _this5.setState({
                    departmentList: _format(data)
                });
            }
        }).catch(function (error) {
            _message3.default.error(error.statusText);
        });
    };

    this.chTreeSelect = function (value, label, extra, type) {
        var state = _this5.state;
        state[type] = value;
        _this5.setState(state);
    };

    this.onChange = function (e, type) {
        var state = _this5.state;
        state[type] = e.target.value;
        _this5.setState(state);
    };

    this.onSubmit = function () {
        var _state2 = _this5.state,
            masterName = _state2.masterName,
            departid = _state2.departid,
            username = _state2.username,
            realname = _state2.realname,
            password = _state2.password,
            memo = _state2.memo,
            id = _state2.id,
            type = _state2.type;

        if (realname == null || realname.length == 0) {
            _message3.default.error('请输入姓名');
            return;
        }
        if (!_lib2.default.legnthCheck(realname, 'INPUT')) {
            _message3.default.error('姓名长度不允许超过50');
            return;
        }
        if (!_lib2.default.checkAccount(username)) {
            _message3.default.error('请按照要求用户名');
            return;
        }
        if (!_lib2.default.checkPassword(password)) {
            _message3.default.error('密码长度不符');
            return;
        }
        if (!departid) {
            _message3.default.error('请输入部门');
            return;
        }
        if (!_lib2.default.legnthCheck(memo, 'URL')) {
            _message3.default.error('备注说明长度不允许超过500');
            return;
        }
        LoadingModal({ bl: true, text: '保存中,请稍后...' });
        _ajax2.default.post('/hcm/userout/saveUserOutChildren', {
            departid: departid,
            realname: realname,
            password: _crypto2.default.Encrypt(_lib2.default.trim(password)),
            memo: memo,
            username: masterName + ':' + _lib2.default.trim(username),
            id: type == 'edit' ? id : null
        }).then(function (response) {
            if (response.data.status == '10000') {
                _message3.default.success('成功');
                if (type == 'edit') {
                    window.location.href = '/index.html#/AccountManagement';
                } else {
                    _this5.setState({
                        addshow: false,
                        departid: null,
                        username: null,
                        realname: null,
                        password: null,
                        memo: null
                    });
                }
                LoadingModal({ bl: false });
            } else {
                _message3.default.warning(response.data.message);
                LoadingModal({ bl: false });
            }
        }).catch(function (error) {
            _message3.default.error(error.statusText);
        });
    };

    this.onShowAdd = function (bl) {
        _this5.setState({
            addshow: bl
        });
    };
}, _temp);
exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=231_9c152b3fdf13a5f24392.js.map