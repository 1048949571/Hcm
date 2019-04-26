(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[210],{

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

/***/ "./app/widget/index/Administrator/CategorySettings/main.js":
/*!*****************************************************************!*\
  !*** ./app/widget/index/Administrator/CategorySettings/main.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Administrator/CategorySettings/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _lib = __webpack_require__(/*! ../../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
        // document.title = '行业类目设置';


        _this.addChangev = function (e, type) {
            var state = _this.state;
            state[type] = e.target.value;
            _this.setState(state);
        };

        _this.addBoxState = function (bl) {
            _this.setState({
                addState: bl,
                dictName: null,
                dictType: null
            });
        };

        _this.getList = function () {
            _ajax2.default.get('/hcm/sys/GetList', {
                params: {
                    dictcode: 'category'
                }
            }).then(function (response) {
                response.data.data.forEach(function (item, index) {
                    item.dictName2 = item.dictName;
                    item.dictType2 = item.dictType;
                    item.pricename2 = item.pricename;
                });
                _this.setState({
                    dataList: response.data.data,
                    editState: false
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.subAdd = function () {
            var _this$state = _this.state,
                dictName = _this$state.dictName,
                dictType = _this$state.dictType;

            if (!_lib2.default.required(dictName)) {
                _message3.default.error('请输入行业类目名称');
                return;
            }
            if (!_lib2.default.required(dictType)) {
                _message3.default.error('请输入行业类目对应关键字');
                return;
            }
            if (!_lib2.default.legnthCheck(dictName, 'INPUT')) {
                _message3.default.error('行业类目名称长度不允许超过50');
                return;
            }
            if (!_lib2.default.legnthCheck(dictType, 'INPUT')) {
                _message3.default.error('行业类目对应关键字长度不允许超过50');
                return;
            }
            _ajax2.default.post('/hcm/sys/Create', {
                dictName: dictName,
                pricename: dictType,
                dictType: 'category'
            }).then(function (response) {
                if (response.data.status == '10000') {
                    _message3.default.success(response.data.message);
                    _this.addBoxState(false);
                    _this.getList();
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.rmDict = function (item) {
            _ajax2.default.post('/hcm/sys/delete', {
                id: item.id,
                dictType: 'category'
            }).then(function (response) {
                _message3.default.success(response.data.message);
                _this.getList();
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.editDict = function (item, index, bl) {

            if (item.status != true && _this.state.editState) {
                _message3.default.warning('请先保存已编辑条目');
                return;
            }
            var dataList = _this.state.dataList;
            dataList[index].status = bl;
            if (!bl) {
                dataList[index].dictName = dataList[index].dictName2;
                dataList[index].pricename = dataList[index].pricename2;
            }
            _this.setState({
                dataList: dataList,
                editState: bl
            });
        };

        _this.editChangev = function (e, index, type) {
            var dataList = _this.state.dataList;
            var tarItem = _this.state.tarItem;
            dataList[index][type] = e.target.value;
            _this.setState({
                dataList: dataList
            });
        };

        _this.saveDict = function (item) {
            if (!_lib2.default.required(item.dictName)) {
                _message3.default.error('请输入行业类目名称');
                return;
            }
            if (!_lib2.default.required(item.pricename)) {
                _message3.default.error('请输入行业类目对应关键字');
                return;
            }
            if (!_lib2.default.legnthCheck(item.dictName, 'INPUT')) {
                _message3.default.error('行业类目名称长度不允许超过50');
                return;
            }
            if (!_lib2.default.legnthCheck(item.pricename, 'INPUT')) {
                _message3.default.error('行业类目对应关键字长度不允许超过50');
                return;
            }
            _ajax2.default.post('/hcm/sys/Update', {
                id: item.id,
                dictName: item.dictName,
                pricename: item.pricename
            }).then(function (response) {
                if (response.data.status == '10000') {
                    _message3.default.success(response.data.message);
                    _this.getList();
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.state = {
            addState: false,
            editState: false,
            dictName: null,
            dictType: null,
            dataList: []

        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/index/Administrator/CategorySettings/tpl.js":
/*!****************************************************************!*\
  !*** ./app/widget/index/Administrator/CategorySettings/tpl.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _popconfirm = __webpack_require__(/*! antd/es/popconfirm */ "./node_modules/_antd@3.10.1@antd/es/popconfirm/index.js");

var _popconfirm2 = _interopRequireDefault(_popconfirm);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

__webpack_require__(/*! antd/es/popconfirm/style/css */ "./node_modules/_antd@3.10.1@antd/es/popconfirm/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        dictName = _that$state.dictName,
        dictType = _that$state.dictType,
        addState = _that$state.addState,
        dataList = _that$state.dataList;


    return React.createElement(
        'div',
        { className: 'category-settings' },
        React.createElement(
            'div',
            { className: 'Breadcrumb' },
            React.createElement(
                _breadcrumb2.default,
                null,
                React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u7CFB\u7EDF\u8BBE\u7F6E'
                ),
                React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u884C\u4E1A\u7C7B\u76EE\u8BBE\u7F6E'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'content' },
            React.createElement(
                'div',
                null,
                React.createElement(
                    _button2.default,
                    { disabled: addState, className: 'addbut', onClick: function onClick() {
                            return that.addBoxState(true);
                        }, type: 'dashed' },
                    '+\u65B0\u589E\u7C7B\u76EE'
                )
            ),
            React.createElement(
                'ul',
                { className: 'listbox' },
                addState ? React.createElement(
                    'li',
                    { className: 'add' },
                    React.createElement(
                        'div',
                        { style: { flexBasis: '260px' } },
                        React.createElement(_input2.default, { onChange: function onChange(e) {
                                return that.addChangev(e, 'dictName');
                            }, value: dictName, placeholder: '\u8BF7\u8F93\u5165\u884C\u4E1A\u7C7B\u76EE\u540D\u79F0' })
                    ),
                    React.createElement(
                        'div',
                        { style: { flexBasis: '260px' } },
                        React.createElement(_input2.default, { onChange: function onChange(e) {
                                return that.addChangev(e, 'dictType');
                            }, value: dictType, placeholder: '\u8BF7\u8F93\u5165\u884C\u4E1A\u7C7B\u76EE\u5BF9\u5E94\u5173\u952E\u5B57' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'operation' },
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return that.subAdd();
                                } },
                            '\u4FDD\u5B58'
                        ),
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return that.addBoxState(false);
                                } },
                            '\u53D6\u6D88'
                        )
                    )
                ) : null,
                dataList.map(function (item, index) {
                    return React.createElement(
                        'li',
                        { key: index, className: 'item' },
                        React.createElement(
                            'div',
                            { style: { flexBasis: '260px' } },
                            item.status ? React.createElement(_input2.default, { onChange: function onChange(e) {
                                    return that.editChangev(e, index, 'dictName');
                                }, value: item.dictName }) : item.dictName
                        ),
                        React.createElement(
                            'div',
                            { style: { flexBasis: '260px' } },
                            item.status ? React.createElement(_input2.default, { onChange: function onChange(e) {
                                    return that.editChangev(e, index, 'pricename');
                                }, value: item.pricename }) : item.pricename
                        ),
                        item.status ? React.createElement(
                            'div',
                            { className: 'operation' },
                            React.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return that.saveDict(item);
                                    } },
                                '\u4FDD\u5B58'
                            ),
                            React.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return that.editDict(item, index, false);
                                    } },
                                '\u53D6\u6D88'
                            )
                        ) : React.createElement(
                            'div',
                            { className: 'operation' },
                            React.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return that.editDict(item, index, true);
                                    } },
                                '\u7F16\u8F91'
                            ),
                            React.createElement(
                                _popconfirm2.default,
                                { title: '\u786E\u5B9A\u5220\u9664\u6B64\u6761\u8BB0\u5F55\u5417\uFF1F', onConfirm: function onConfirm() {
                                        return that.rmDict(item);
                                    }, okText: '\u786E\u5B9A', cancelText: '\u53D6\u6D88' },
                                React.createElement(
                                    'a',
                                    null,
                                    '\u5220\u9664'
                                )
                            )
                        )
                    );
                })
            )
        ),
        React.createElement(_Copyright2.default, { clazzName: 'copyright' })
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=210_42a6aef0da9c9ee620cd.js.map