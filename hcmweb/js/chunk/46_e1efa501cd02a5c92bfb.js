(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

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

/***/ "./app/widget/components/FullSpin.js":
/*!*******************************************!*\
  !*** ./app/widget/components/FullSpin.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _spin = __webpack_require__(/*! antd/es/spin */ "./node_modules/_antd@3.10.1@antd/es/spin/index.js");

var _spin2 = _interopRequireDefault(_spin);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/spin/style/css */ "./node_modules/_antd@3.10.1@antd/es/spin/style/css.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullSpin = function (_React$Component) {
    _inherits(FullSpin, _React$Component);

    function FullSpin(props) {
        _classCallCheck(this, FullSpin);

        return _possibleConstructorReturn(this, (FullSpin.__proto__ || Object.getPrototypeOf(FullSpin)).call(this, props));
    }

    _createClass(FullSpin, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                _modal2.default,
                { maskClosable: false, className: 'full-spin', bodyStyle: { textAlign: 'center' }, footer: null, closable: false, visible: this.props.spinning },
                React.createElement(_spin2.default, { size: 'large', delay: 100, spinning: true, className: 'example', tip: 'Loading...' })
            );
        }
    }]);

    return FullSpin;
}(React.Component);

exports.default = FullSpin;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/index/Administrator/ClientInfo/SearchContent.js":
/*!********************************************************************!*\
  !*** ./app/widget/index/Administrator/ClientInfo/SearchContent.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@3.10.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _switch = __webpack_require__(/*! antd/es/switch */ "./node_modules/_antd@3.10.1@antd/es/switch/index.js");

var _switch2 = _interopRequireDefault(_switch);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _popconfirm = __webpack_require__(/*! antd/es/popconfirm */ "./node_modules/_antd@3.10.1@antd/es/popconfirm/index.js");

var _popconfirm2 = _interopRequireDefault(_popconfirm);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@3.10.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/switch/style/css */ "./node_modules/_antd@3.10.1@antd/es/switch/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

__webpack_require__(/*! antd/es/popconfirm/style/css */ "./node_modules/_antd@3.10.1@antd/es/popconfirm/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _FullSpin = __webpack_require__(/*! ../../../components/FullSpin */ "./app/widget/components/FullSpin.js");

var _FullSpin2 = _interopRequireDefault(_FullSpin);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _lib = __webpack_require__(/*! ../../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

var _main = __webpack_require__(/*! ../../../components/TagInput/main */ "./app/widget/components/TagInput/main.js");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var alert = '请先保存或取消编辑新增状态的条目';
var alert_success = '成功';
var nameAlert = '品牌名不能为空';
var keywordnameAlert = '关键字不能为空';
var categoryAlert = '类目名不能为空';
var catAlert = '淘宝cat值不能为空';

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.Trim = function (s) {
            if (s != null) {
                s = '' + s;
                return s.replace(/(^\s*)|(\s*$)/g, "");
            } else {
                return "";
            }
        };

        _this.replaceTrim = function (value, type) {
            if (value == "") {
                _message3.default.error(type + "Cat值不能为空");
                _this.setState({
                    replaceTrim: true
                });
            } else {
                _this.setState({
                    replaceTrim: false
                });
            }
        };

        _this.onExpand = function (expanded, record) {
            // console.log(expanded, record, this)
            var setArr = new Set(_this.state.expandedRowKeys);
            if (expanded) {
                setArr.add(record.key);
            } else {
                setArr.delete(record.key);
            }
            _this.setState({
                expandedRowKeys: [].concat(_toConsumableArray(setArr))
            });
        };

        _this.addModalStatus = function (bl, item, index) {
            _this.setState({
                addModalStatus: bl,
                clientNames: [],
                brandId: item.brandId,
                TBCat: "", //淘宝
                JDCat: "", //京东
                LeiM: "" //类目
            });
        };

        _this.addModal = function (bl) {
            _this.setState({
                addModalStatus: bl,
                clientNames: [],
                brandId: "",
                TBCat: "", //淘宝
                JDCat: "", //京东
                LeiM: "" //类目
            });
        };

        _this.addClientChange = function (value) {
            // console.log(value)
            // value.forEach((v,i)=>{
            //     console.log(v)
            //     if(/^\s+$/gi.test(v)){
            //         console.log("不能为空777")
            //     }else{
            //         console.log(9877)
            //     }
            // })
            if (/^\s+$/gi.test(value)) {
                _this.setState({
                    addClientChange: "品牌关键词不能有内容为空"
                });
                //console.log("不能为空")
            } else {
                _this.setState({
                    addClientChange: "",
                    clientNames: value
                });
            }
            // this.setState({
            //     clientNames: value
            // })

            // console.log()
        };

        _this.chSearchIpt = function (e, type) {
            var state = _this.state;
            state[type] = e.target.value;
            _this.setState(state);
        };

        _this.deletelast = function (arr) {
            //  var newarr=arr.slice(0);
            var newarr = arr.concat();
            newarr.pop();
            return newarr;
        };

        _this.onSubClients = function () {
            if (_this.state.clientNames.length > 50) {
                _message3.default.error(React.createElement(
                    'span',
                    null,
                    '\u54C1\u724C\u5173\u952E\u8BCD\u6570\u91CF\u6BCF\u6B21\u6700\u591A\u6DFB\u52A050\u4E2A\uFF01\u5F53\u524D\u6570\u91CF\u4E3A',
                    React.createElement(
                        'span',
                        null,
                        _this.state.clientNames.length
                    )
                ));
                return;
            }
            LoadingModal({ bl: true });
            if (/^\s+$/gi.test(_this.state.clientNames) || /^\s+$/gi.test(_this.state.TBCat) || /^\s+$/gi.test(_this.state.JDCat) || /^\s+$/gi.test(_this.state.OneSixCat) || /^\s+$/gi.test(_this.state.LeiM) || /^\s+$/gi.test(_this.state.SnCat) || /^\s+$/gi.test(_this.state.DdCat)) {
                LoadingModal({ bl: false });
                _message3.default.error('不能全部输入空格');
            } else {
                if (_this.state.addClientChange == "品牌关键词不能有内容为空") {
                    _message3.default.error(_this.state.addClientChange);
                } else {
                    if (_this.Trim(_this.state.clientNames).length < 51 && _this.Trim(_this.state.clientNames) != "" && _this.Trim(_this.state.clientNames) != undefined) {
                        if (_this.Trim(_this.state.TBCat).length < 51) {
                            if (_this.Trim(_this.state.JDCat).length < 51) {
                                if (_this.Trim(_this.state.OneSixCat).length < 51) {
                                    if (_this.Trim(_this.state.LeiM).length < 51 && _this.Trim(_this.state.LeiM) != "" && _this.Trim(_this.state.LeiM) != undefined) {
                                        //if (this.state.OneSixCat.length < 51) {
                                        if (_this.Trim(_this.state.DdCat).length < 51) {
                                            if (_this.Trim(_this.state.SnCat).length < 51) {
                                                if (_this.state.JDCat != "" && _this.state.JDCat != undefined || _this.state.TBCat != "" && _this.state.TBCat != undefined || _this.state.OneSixCat != "" && _this.state.OneSixCat != undefined || _this.state.SnCat != "" && _this.state.SnCat != undefined || _this.state.DdCat != "" && _this.state.DdCat != undefined) {

                                                    var brr = [];
                                                    _this.state.clientNames.forEach(function (v, i) {
                                                        brr.push(_this.Trim(v));
                                                    });
                                                    // console.log(brr,brr.join(","))
                                                    _ajax2.default.post('/hcm/cus/save_keyword_batch', {
                                                        bid: _this.state.brandId,
                                                        keywordname: brr.join(","), //关键词
                                                        catid: _this.Trim(_this.state.TBCat), //淘宝
                                                        catidJd: _this.Trim(_this.state.JDCat), //京东
                                                        catid1688: _this.Trim(_this.state.OneSixCat), //1688
                                                        catidSn: _this.Trim(_this.state.SnCat), //苏宁
                                                        catidDd: _this.Trim(_this.state.DdCat), //当当
                                                        catname: _this.Trim(_this.state.LeiM), //类目
                                                        save_flag: "save",
                                                        catidDdShu: _this.Trim(_this.state.catidDdShu),
                                                        type: _this.state.type
                                                    }).then(function (response) {
                                                        if (response.data.status == 10000) {
                                                            // message.success(alert_success, 5);
                                                            _this.getData();
                                                            _this.setState({
                                                                addModalStatus: false,
                                                                clientNames: [],
                                                                catidDdShu: "0",
                                                                catid1688: "", //1688
                                                                catidSn: "", //苏宁
                                                                catidDd: "" //当当
                                                            });
                                                            LoadingModal({ bl: false });
                                                        } else {
                                                            _this.getData();
                                                            _message3.default.error(response.data.message);
                                                            _this.setState({
                                                                addModalStatus: false
                                                            });
                                                            LoadingModal({ bl: false });
                                                        }
                                                        // this.getData()
                                                    }).catch(function (error) {

                                                        _this.setState({
                                                            spinning: false,
                                                            addModalStatus: false
                                                        });
                                                        LoadingModal({ bl: false });
                                                        _message3.default.error(error.statusText);
                                                    });
                                                } else {
                                                    LoadingModal({ bl: false });
                                                    _message3.default.error('至少填写一个Cat值');
                                                }
                                                // console.log(1)
                                            } else {
                                                _message3.default.error("苏宁Cat长度不允许超过50");
                                                // console.log(2)
                                                LoadingModal({ bl: false });
                                            }
                                            // console.log(3)
                                        } else {
                                            _message3.default.error("当当Cat长度不允许超过50");
                                            // console.log(4)
                                            LoadingModal({ bl: false });
                                        }
                                    } else {
                                        _message3.default.error("类目不能为空并且长度不允许超过50");

                                        LoadingModal({ bl: false });
                                    }
                                } else {
                                    _message3.default.error("1688Cat长度不允许超过50");

                                    LoadingModal({ bl: false });
                                }
                            } else {
                                _message3.default.error("京东Cat长度不允许超过50");

                                LoadingModal({ bl: false });
                            }
                        } else {
                            _message3.default.error("淘宝Cat长度不允许超过50");

                            LoadingModal({ bl: false });
                        }
                    } else {
                        _message3.default.error("品牌关键字不能为空并且长度不允许超过50");

                        LoadingModal({ bl: false });
                    }
                }
            }
        };

        _this.updateKeyword = function (item, index) {
            _ajax2.default.post('/hcm/cus/updateGoodsLibraries', {
                bid: item.brandId,
                type: _this.state.type,
                state: "1"
            }).then(function (response) {
                if (response.data.status == 10000) {
                    _message3.default.success('商品库更新命令已执行，请等待一定时间后刷新。');
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.message);
            });
        };

        _this.SwitchonChange = function (item, index) {
            // console.log(item, index)

            if (item.updateNow == "7") {
                //关闭
                _ajax2.default.post('/hcm/cus/updateGoodsLibraries', {
                    state: "1", //开启
                    bid: item.brandId,
                    type: _this.state.type
                }).then(function (response) {
                    if (response.data.status == 10000) {
                        _message3.default.success('商品库开启命令已执行，请等待一定时间后刷新。');
                    } else {
                        _message3.default.error(response.data.message);
                    }
                }).catch(function (error) {
                    _message3.default.error(error.message);
                });
            } else {
                //开启
                _ajax2.default.post('/hcm/cus/updateGoodsLibraries', {
                    state: "7", //关闭
                    bid: item.brandId,
                    type: _this.state.type
                }).then(function (response) {
                    if (response.data.status == 10000) {
                        _message3.default.success('商品库暂停命令已执行，请等待一定时间后刷新。');
                    } else {
                        _message3.default.error(response.data.message);
                    }
                }).catch(function (error) {
                    _message3.default.error(error.message);
                });
            }
        };

        _this.deleteAll = function () {
            LoadingModal({ bl: true });
            _ajax2.default.post('/hcm/search/deleteItemlistByBmcid', {
                type: _this.state.type
            }).then(function (response) {
                if (response.data.status == 10000) {
                    _message3.default.success(response.data.message);
                    _this.getData();
                } else {
                    _message3.default.error(response.data.message);
                }
                LoadingModal({ bl: false });
            }).catch(function (error) {
                _message3.default.error(error.message);
                LoadingModal({ bl: false });
            });
        };

        _this.handleChange = function (value) {

            _this.setState({
                catidDdShu: value
            });
        };

        _this.state = {
            addData: {
                key: 'add',
                spinning: false,
                state: false,
                disabled: false,
                name: null,
                category: null,
                cat: null,
                catidJd: null,
                catid1688: null,
                catidDdShu: "0",
                catidDd: null,
                catidSn: null
            },
            addKeyState: false,
            expandedRowKeys: [],
            editKey: [],
            brand_list: [],
            addModalStatus: false,
            clientNames: [],
            spinning: false,
            bl: "",
            LeiM: null,
            TBCat: null,
            JDCat: null,
            OneSixCat: "",
            DdCat: "",
            SnCat: "",
            brandId: "",
            myFuntions: "",
            defaultValue: "书籍",
            catidDdShu: "0",
            styleWidth: "0",
            editKeyword: "",
            replaceTrim: true,
            addClientChange: ""
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'reset',
        value: function reset() {

            this.setState({
                addData: {
                    key: 'add',
                    spinning: false,
                    state: false,
                    name: null,
                    category: null,
                    cat: null,
                    catidJd: null,
                    catid1688: null,
                    catidDdShu: "0",
                    catidDd: null,
                    catidSn: null,
                    type: "",
                    ClientInfos: ""

                }
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // console.log( this)
            this.setState({
                ClientInfos: this.props.statex
            }, function () {
                //console.log(this.props.statex)
                if (_this2.props.statex == "/ClientInfos") {
                    _this2.setState({
                        type: "jingpin"
                    }, function () {

                        console.log(_this2.state.type);
                        _this2.getData();
                    });
                } else {
                    _this2.setState({
                        type: ""
                    }, function () {
                        console.log(_this2.state.type);
                        _this2.getData();
                    });
                }
            });
        }
    }, {
        key: 'getData',
        value: function getData() {
            var _this3 = this;

            _ajax2.default.post('/hcm/cus/get_cus_detail_list', {
                type: this.state.type
            }).then(function (response) {
                if (response.data.status == '10000' && response.data.data.brand_list) {

                    _this3.setState({
                        brand_list: _this3.formatData(response.data.data.brand_list ? response.data.data.brand_list : [])
                    }, function () {
                        if (_this3.props.statex == "/ClientInfos") {
                            if (_this3.state.brand_list.length > 4) {
                                var disabled = _this3.state.addData;
                                disabled.disabled = true;
                                _this3.setState({
                                    disabled: disabled
                                }, function () {
                                    console.log(_this3.state.addData.disabled);
                                });
                            } else {
                                var _disabled = _this3.state.addData;
                                _disabled.disabled = false;
                                _this3.setState({
                                    disabled: _disabled
                                }, function () {
                                    console.log(_this3.state.addData.disabled);
                                });
                            }
                        }
                    });
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.message);
            });
        }
    }, {
        key: 'formatData',
        value: function formatData(data) {
            var num = Math.random();
            var newArr = [];
            for (var i = 0; i < data.length; i++) {
                var _data$i = data[i],
                    brandId = _data$i.bid,
                    brandName = _data$i.name,
                    updateTime = _data$i.updatetime,
                    level = _data$i.level,
                    updateNow = _data$i.updateNow,
                    catidJd = _data$i.catidJd,
                    keywordList = _data$i.keyword_list;
                // let { brandId,brandName,updateTime,level,keywordList} = data[i];

                var newKeyword = [];
                for (var n = 0; n < keywordList.length; n++) {
                    // let { keywordId,keywordname,catid ,catname,level,categoryList} = keywordList[n];
                    var _keywordList$n = keywordList[n],
                        keywordId = _keywordList$n.keyword_id,
                        keywordname = _keywordList$n.keywordname,
                        catid = _keywordList$n.catid,
                        catname = _keywordList$n.catname,
                        _level = _keywordList$n.level,
                        catidSn = _keywordList$n.catidSn,
                        catid1688 = _keywordList$n.catid1688,
                        catidDd = _keywordList$n.catidDd,
                        catidDdShu = _keywordList$n.catidDdShu,
                        _catidJd = _keywordList$n.catidJd,
                        categoryList = _keywordList$n.category_list,
                        kid = _keywordList$n.kid;

                    var children = categoryList.length ? [] : null;
                    for (var x = 0; x < categoryList.length; x++) {
                        var _categoryList$x = categoryList[x],
                            _catid = _categoryList$x.catid,
                            _catname = _categoryList$x.catname,
                            _level2 = _categoryList$x.level,
                            _kid = _categoryList$x.kid,
                            _catidJd2 = _categoryList$x.catidJd,
                            _catidSn = _categoryList$x.catidSn,
                            _catid2 = _categoryList$x.catid1688,
                            _catidDd = _categoryList$x.catidDd,
                            _catidDdShu = _categoryList$x.catidDdShu,
                            _updateNow = _categoryList$x.updateNow;

                        children.push({
                            "brandId": brandId,
                            "index": [i, n, x],
                            "key": '' + _catid + _catname + _kid + x,
                            "keywordId": keywordId,
                            "kid": _kid,
                            "catid": _catid,
                            "catidJd": _catidJd2,
                            "catidSn": _catidSn,
                            "catidDd": _catidDd,
                            "catid1688": _catid2,
                            "catidDdShu": _catidDdShu,
                            "keywordname": keywordname,
                            "catname": _catname,
                            "level": _level2,
                            "celData": {
                                "catid": _catid,
                                "catidJd": _catidJd2,
                                "catidSn": _catidSn,
                                "catidDdShu": _catidDdShu,
                                "catidDd": _catidDd,
                                "catid1688": _catid2,
                                "catname": _catname
                            }
                        });
                    }

                    newKeyword.push({
                        "celData": {
                            "keywordname": keywordname,
                            "catid": catid,
                            "catidJd": _catidJd,
                            "catidSn": catidSn,
                            "catidDd": catidDd,
                            "catidDdShu": catidDdShu,
                            "catid1688": catid1688,
                            "catname": catname
                        },
                        "index": [i, n],
                        "kid": kid,
                        "key": '' + keywordname + keywordId + kid + n,
                        "keywordId": keywordId,
                        "keywordname": keywordname,
                        "catid": catid,
                        "catidJd": _catidJd,
                        "catidSn": catidSn,
                        "catidDd": catidDd,
                        "catidDdShu": catidDdShu,
                        "catid1688": catid1688,
                        "catname": catname,
                        "brandId": brandId,
                        "level": _level,
                        "children": children
                    });
                }
                newArr.push({
                    "celData": {
                        "brandName": brandName,
                        "updateTime": updateTime
                    },
                    "key": '' + brandName + brandId + updateTime + i,
                    "brandId": brandId,
                    "index": [i],
                    "brandName": brandName,
                    "updateNow": updateNow,
                    "updateTime": updateTime,
                    "level": level,
                    "keywordList": newKeyword
                });
            }
            return newArr;
        }
    }, {
        key: 'addBoxState',
        value: function addBoxState(state) {
            if (!state) {
                this.reset();
            } else {
                var addData = this.state.addData;
                addData.state = state;
                addData.disabled = state;
                this.setState({
                    addData: addData,
                    disabled: addData
                });
            }
        }
    }, {
        key: 'addChange',
        value: function addChange(e, type) {
            var addData = this.state.addData;
            addData[type] = e.target.value;
            this.setState({
                addData: addData
            });
        }
        //

    }, {
        key: 'addSubmit',
        value: function addSubmit() {
            var _this4 = this;

            var _state$addData = this.state.addData,
                name = _state$addData.name,
                category = _state$addData.category,
                cat = _state$addData.cat,
                catidJd = _state$addData.catidJd,
                catid1688 = _state$addData.catid1688,
                catidDd = _state$addData.catidDd,
                catidSn = _state$addData.catidSn;

            if (name == null || name.length == 0) {
                _message3.default.error(nameAlert, 5);
                return;
            }
            if (category == null || category.length == 0) {
                _message3.default.error(categoryAlert, 5);
                return;
            }
            // if (cat == null || cat.length == 0) {
            //     message.error(catAlert, 5)
            //     return
            // }

            if (!_lib2.default.legnthCheck(name, 'INPUT')) {
                _message3.default.error('品牌名长度不允许超过50');
                return;
            }
            if (!_lib2.default.legnthCheck(category, 'INPUT')) {
                _message3.default.error('类目长度不允许超过50');
                return;
            }
            if (!_lib2.default.legnthCheck(cat, 'INPUT')) {
                _message3.default.error('淘宝Cat值长度不允许超过50');
                return;
            }
            if (!_lib2.default.legnthCheck(catidJd, 'INPUT')) {
                _message3.default.error('京东Cat值长度不允许超过50');
                return;
            }
            if (!_lib2.default.legnthCheck(catid1688, 'INPUT')) {
                _message3.default.error('1688Cat值长度不允许超过50');
                return;
            }
            if (!_lib2.default.legnthCheck(catidDd, 'INPUT')) {
                _message3.default.error('当当Cat值长度不允许超过50');
                return;
            }
            if (!_lib2.default.legnthCheck(catidSn, 'INPUT')) {
                _message3.default.error('苏宁Cat值长度不允许超过50');
                return;
            }

            //  console.log(name.length)
            if (cat != "" && cat != undefined || catidJd != "" && catidJd != undefined || catid1688 != "" && catid1688 != undefined || catidSn != "" && catidSn != undefined || catidDd != "" && catidDd != undefined) {
                var addData = this.state.addData;
                addData.state = true;
                // console.log(cat.length)
                if (/^\s+$/gi.test(name) || /^\s+$/gi.test(category) || /^\s+$/gi.test(cat) || /^\s+$/gi.test(catidJd) || /^\s+$/gi.test(catid1688) || /^\s+$/gi.test(catidSn) || /^\s+$/gi.test(catidDd)) {

                    _message3.default.error('不能全部输入空格');
                } else {
                    _ajax2.default.post('/hcm/cus/save_brand', {
                        "brand_name": this.Trim(name),
                        "catid": this.Trim(cat),
                        "catidJd": this.Trim(catidJd),
                        "catname": this.Trim(category), //category
                        "type": this.state.type,
                        "catid1688": this.Trim(catid1688),
                        "catidDdShu": this.Trim(this.state.catidDdShu),
                        "catidDd": this.Trim(catidDd),
                        "catidSn": this.Trim(catidSn)
                    }).then(function (response) {
                        // console.log(response.data.status)
                        if (response.data.status == 10000) {
                            _message3.default.success(alert_success, 5);
                            addData.name = null;
                            addData.cat = null;
                            addData.category = null;
                            addData.catidJd = null;
                            addData.catid1688 = null, addData.catidDdShu = "0", addData.catidDd = null, addData.catidSn = null;
                            addData.state = false;
                            addData.disabled = false;
                            _this4.setState({
                                addData: addData,
                                disabled: addData
                            }, function () {
                                _this4.getData();
                                //console.log(1)
                            });
                        } else {
                            _message3.default.error(response.data.message, 5);
                            addData.state = true;
                            addData.disabled = false;
                            _this4.setState({
                                addData: addData,
                                disabled: addData
                            }, function () {
                                _this4.getData();
                                //console.log(1)
                            });
                        }

                        // addData.state = false;
                        // addData.disabled = false;
                        // this.setState({
                        //     addData: addData,
                        //     disabled: addData
                        // }, () => {
                        //     this.getData()
                        //     //console.log(1)
                        // })
                    }).catch(function (error) {
                        // console.log(error)
                        _message3.default.error(error.message);
                        addData.state = true; //spinning
                        addData.disabled = false;
                        _this4.setState({
                            addData: addData,
                            disabled: addData
                        });
                    });
                }
            } else {
                _message3.default.error('至少填写一个Cat值');
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, a) {
            if (this.props.show !== nextProps.show) {
                this.reset();
            }
        }
    }, {
        key: 'addCategory',
        value: function addCategory(record) {

            if (this.state.addKeyState || this.state.editKey.length) {
                _message3.default.warning(alert, 5);
                return;
            }

            var _record$index = _slicedToArray(record.index, 3),
                a = _record$index[0],
                b = _record$index[1],
                c = _record$index[2];

            var setArr = new Set(this.state.expandedRowKeys);

            var brand_list = this.state.brand_list;
            var editKey = new Set(this.state.editKey);
            var num = Math.random();
            if (brand_list[a].keywordList[b].children == null) {
                brand_list[a].keywordList[b].children = [{
                    "key": num,
                    "level": 3,
                    "brandId": record.brandId,
                    "index": [a, b, 0],
                    "keywordId": record.keywordId,
                    "keywordname": record.keywordname,
                    "catid": null,
                    "catidJd": null,
                    "catname": null,
                    "updateNow": 0,
                    "catid1688": null,
                    "catidDdShu": "0",
                    "catidDd": null,
                    "catidSn": null,
                    "addKeyword": true
                }];
            } else {
                brand_list[a].keywordList[b].children.unshift({
                    "key": num,
                    "level": 3,
                    "brandId": record.brandId,
                    "index": [a, b, 0],
                    "keywordId": record.keywordId,
                    "keywordname": record.keywordname,
                    "catid": null,
                    "catidJd": null,
                    "updateNow": 0,
                    "catname": null,
                    "catid1688": null,
                    "catidDdShu": "0",
                    "catidDd": null,
                    "catidSn": null,
                    "addKeyword": true
                });
            }

            editKey.add(num);
            setArr.add(record.key);
            this.setState({
                addKeyState: true,
                expandedRowKeys: [].concat(_toConsumableArray(setArr)),
                brand_list: brand_list,
                editKey: [].concat(_toConsumableArray(editKey))
            });
        }
    }, {
        key: 'editKeyword',
        value: function editKeyword(record, bl) {
            // console.log(record, bl)
            if (this.state.addKeyState) {
                _message3.default.warning(alert, 5);
                return;
            }
            var setArr = new Set(this.state.editKey);
            setArr.add(record.key);
            this.setState({
                editKey: [].concat(_toConsumableArray(setArr)),
                catidDdShu: record.catidDdShu,
                editKeyword: bl
            });
        }
    }, {
        key: 'cancelKeyword',
        value: function cancelKeyword(record) {
            var setArr = new Set(this.state.editKey);
            var brand_list = this.state.brand_list;
            var addKeyState = this.state.addKeyState;

            var _record$index2 = _slicedToArray(record.index, 3),
                a = _record$index2[0],
                b = _record$index2[1],
                c = _record$index2[2];

            if (record.addKeyword) {
                if (record.index.length == 2) {
                    brand_list[a].keywordList.shift();
                    addKeyState = false;
                } else if (record.index.length == 3) {
                    brand_list[a].keywordList[b].children.shift();
                    addKeyState = false;
                }
            } else {
                if (record.index.length == 2) {
                    brand_list[a].keywordList[b].keywordname = record.celData.keywordname;
                    brand_list[a].keywordList[b].catid = record.celData.catid;
                    brand_list[a].keywordList[b].catidJd = record.celData.catidJd;
                    brand_list[a].keywordList[b].catidDd = record.celData.catidDd;
                    brand_list[a].keywordList[b].catidSn = record.celData.catidSn;
                    brand_list[a].keywordList[b].catid1688 = record.celData.catid1688;
                    brand_list[a].keywordList[b].catname = record.celData.catname;
                    brand_list[a].keywordList[b].catidDdShu = record.celData.catidDdShu;
                    brand_list[a].keywordList[b].updateNow = record.celData.updateNow;
                } else if (record.index.length == 3) {
                    brand_list[a].keywordList[b].children[c].catid = record.celData.catid;
                    brand_list[a].keywordList[b].children[c].catidJd = record.celData.catidJd;
                    brand_list[a].keywordList[b].children[c].catidDd = record.celData.catidDd;
                    brand_list[a].keywordList[b].children[c].catidSn = record.celData.catidSn;
                    brand_list[a].keywordList[b].children[c].catid1688 = record.celData.catid1688;
                    brand_list[a].keywordList[b].children[c].catname = record.celData.catname;
                    brand_list[a].keywordList[b].children[c].catidDdShu = record.celData.catidDdShu;
                    brand_list[a].keywordList[b].children[c].updateNow = record.celData.updateNow;
                }
            }
            setArr.delete(record.key);

            this.setState({
                editKey: [].concat(_toConsumableArray(setArr)),
                addKeyState: addKeyState,
                brand_list: brand_list
            });
        }
    }, {
        key: 'rmKeyword',
        value: function rmKeyword(record) {
            var _this5 = this;

            var keywordId = record.keywordId,
                kid = record.kid,
                level = record.level,
                keywordname = record.keywordname,
                brandId = record.brandId;


            var addData = this.state.addData;
            addData.spinning = true;
            var rmData = function rmData(url, params) {
                _ajax2.default.get(url, { params: params }).then(function (response) {
                    // console.log(response)
                    if (response.data.status == 10000) {
                        _message3.default.success(alert_success, 5);
                        _this5.setState({
                            addKeyState: false
                        }, function () {
                            close(_this5.getData());
                        });
                    } else {
                        close();
                        _message3.default.error(response.data.message, 5);
                    }
                }).catch(function (error) {
                    close();
                    _message3.default.error(error.message);
                });
                close = function close() {
                    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};


                    addData.spinning = false;
                    _this5.setState({
                        addData: addData
                    }, fn());
                };
            };
            if (level == 2) {
                rmData('/hcm/cus/del_keyword', { "keyword_id": keywordId, 'bid': brandId, 'keywordname': keywordname, 'type': this.state.type });
            } else if (level == 3) {
                rmData('/hcm/cus/del_keyword_cat', { "kid": kid, "type": this.state.type });
            } else if (level == 1) {
                rmData('/hcm/cus/del_brand', { 'bid': brandId, "type": this.state.type });
            }
        }
    }, {
        key: 'changInp',
        value: function changInp(e, record, type) {
            var brand_list = this.state.brand_list;

            var _record$index3 = _slicedToArray(record.index, 3),
                a = _record$index3[0],
                b = _record$index3[1],
                c = _record$index3[2];

            if (record.index.length == 2) {
                brand_list[a].keywordList[b][type] = e.target.value;
            } else if (record.index.length == 3) {
                brand_list[a].keywordList[b].children[c][type] = e.target.value;
            }
            this.setState({
                brand_list: brand_list
            });
        }
    }, {
        key: 'addKeyword',
        value: function addKeyword(item, index) {
            if (this.state.editKey.length) {
                _message3.default.warning(alert, 5);
                return;
            }
            var brand_list = this.state.brand_list;
            var setArr = new Set(this.state.editKey);
            var num = Math.random();
            setArr.add(num);
            brand_list[index].keywordList.unshift({
                "key": num,
                "level": 2,
                "brandId": item.brandId,
                "index": [index, 0],
                "keywordname": null,
                "catid": null,
                "catidJd": null,
                "updateNow": 0,
                "catidSn": null,
                "catidDd": null,
                "catid1688": null,
                "catidDdShu": "0",
                "catname": null,
                "addKeyword": true
            });
            this.setState({
                addKeyState: true,
                editKey: [].concat(_toConsumableArray(setArr)),
                brand_list: brand_list,
                styleWidth: "1",
                editKeyword: "11"
            });
        }
    }, {
        key: 'save',
        value: function save(record) {
            var _this6 = this;

            var addKeyword = record.addKeyword,
                bmcid = record.bmcid,
                kid = record.kid,
                level = record.level,
                keywordname = record.keywordname,
                brandId = record.brandId,
                keywordId = record.keywordId,
                catid = record.catid,
                catidJd = record.catidJd,
                catname = record.catname,
                catid1688 = record.catid1688,
                catidSn = record.catidSn,
                catidDd = record.catidDd;

            var addData = this.state.addData;
            addData.spinning = true;
            close = function close() {
                var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};


                addData.spinning = false;
                _this6.setState({
                    addData: addData,
                    addKeyState: false
                }, fn());
            };
            this.setState({
                addData: addData
            });
            if (level == 2) {
                // console.log(2)
                if (this.state.editKeyword == "10") {
                    if (keywordname == null || keywordname.length == 0) {
                        _message3.default.error(keywordnameAlert, 5);
                        close();
                        return;
                    }
                    if (catname == null || catname.length == 0) {
                        _message3.default.error(categoryAlert, 5);
                        close();
                        return;
                    }
                    // if(catid==null||catid.length==0){
                    //     message.error(catAlert,5)
                    //     close()
                    //     return
                    // }

                    if (!_lib2.default.legnthCheck(keywordname, 'INPUT')) {
                        _message3.default.error('品牌关键字长度不允许超过50');
                        close();
                        return;
                    }
                    if (!_lib2.default.legnthCheck(catname, 'INPUT')) {
                        _message3.default.error('类目长度不允许超过50');
                        close();
                        return;
                    }
                    if (!_lib2.default.legnthCheck(catid, 'INPUT')) {
                        _message3.default.error('Cat值长度不允许超过50');
                        close();
                        return;
                    }
                    if (!_lib2.default.legnthCheck(catidJd, 'INPUT')) {
                        _message3.default.error('京东Cat值长度不允许超过50');
                        close();
                        return;
                    }
                    if (!_lib2.default.legnthCheck(catid1688, 'INPUT')) {
                        _message3.default.error('1688Cat值长度不允许超过50');
                        close();
                        return;
                    }
                    if (!_lib2.default.legnthCheck(catidSn, 'INPUT')) {
                        _message3.default.error('苏宁Cat值长度不允许超过50');
                        close();
                        return;
                    }
                    if (!_lib2.default.legnthCheck(catidDd, 'INPUT')) {
                        _message3.default.error('当当Cat值长度不允许超过50');
                        close();
                        return;
                    }
                    var params = {
                        "bid": brandId,
                        "keyword_id": keywordId,
                        "kid": kid,
                        "keywordname": this.Trim(keywordname),
                        "catid": this.Trim(catid),
                        "catidJd": this.Trim(catidJd),
                        "catname": this.Trim(catname),
                        "catid1688": this.Trim(catid1688),
                        "catidSn": this.Trim(catidSn),
                        "catidDd": this.Trim(catidDd),
                        "catidDdShu": this.Trim(this.state.catidDdShu),
                        "save_flag": "save",
                        "type": this.state.type
                    };

                    if (!addKeyword) {
                        params.save_flag = 'update';
                    }
                    // console.log(keywordname)
                    if (keywordname !== "" && keywordname !== undefined) {
                        if (catname != undefined && catname != "") {
                            if (catid != "" && catid != undefined) {
                                _ajax2.default.post('/hcm/cus/saveOrUpdate_keyword', params).then(function (response) {
                                    // console.log(response)
                                    if (response.data.status == 10000) {
                                        _message3.default.success(alert_success, 5);
                                        _this6.setState({
                                            addKeyState: false,
                                            editKey: [],
                                            catidDdShu: "0"
                                        }, function () {
                                            close(_this6.getData());
                                        });
                                    } else {
                                        close();
                                        _message3.default.error(response.data.message, 5);
                                    }
                                }).catch(function (error) {
                                    close();
                                    _message3.default.error(error.message);
                                });
                            } else {
                                _message3.default.error('淘宝Cat值不能为空');
                                close();
                                LoadingModal({ bl: false });
                            }
                        } else {
                            _message3.default.error('类目不能为空');
                            close();
                            LoadingModal({ bl: false });
                        }
                    } else {
                        _message3.default.error('关键词不能为空');
                        close();
                        LoadingModal({ bl: false });
                    }
                } else {

                    if (keywordname == null || keywordname.length == 0) {
                        _message3.default.error(keywordnameAlert, 5);
                        close();
                        return;
                    }
                    if (catname == null || catname.length == 0) {
                        _message3.default.error(categoryAlert, 5);
                        close();
                        return;
                    }
                    // if(catid==null||catid.length==0){
                    //     message.error(catAlert,5)
                    //     close()
                    //     return
                    // }

                    if (!_lib2.default.legnthCheck(keywordname, 'INPUT')) {
                        _message3.default.error('品牌关键字长度不允许超过50');
                        close();
                        return;
                    }
                    if (!_lib2.default.legnthCheck(catname, 'INPUT')) {
                        _message3.default.error('类目长度不允许超过50');
                        close();
                        return;
                    }
                    if (!_lib2.default.legnthCheck(catid, 'INPUT')) {
                        _message3.default.error('Cat值长度不允许超过50');
                        close();
                        return;
                    }
                    if (!_lib2.default.legnthCheck(catidJd, 'INPUT')) {
                        _message3.default.error('京东Cat值长度不允许超过50');
                        close();
                        return;
                    }
                    if (!_lib2.default.legnthCheck(catid1688, 'INPUT')) {
                        _message3.default.error('1688Cat值长度不允许超过50');
                        close();
                        return;
                    }
                    if (!_lib2.default.legnthCheck(catidSn, 'INPUT')) {
                        _message3.default.error('苏宁Cat值长度不允许超过50');
                        close();
                        return;
                    }
                    if (!_lib2.default.legnthCheck(catidDd, 'INPUT')) {
                        _message3.default.error('当当Cat值长度不允许超过50');
                        close();
                        return;
                    }
                    var _params = {
                        "bid": brandId,
                        "keyword_id": keywordId,
                        "kid": kid,
                        "keywordname": this.Trim(keywordname),
                        "catid": this.Trim(catid),
                        "catidJd": this.Trim(catidJd),
                        "catname": this.Trim(catname),
                        "catid1688": this.Trim(catid1688),
                        "catidSn": this.Trim(catidSn),
                        "catidDd": this.Trim(catidDd),
                        "catidDdShu": this.Trim(this.state.catidDdShu),
                        "save_flag": "save",
                        "type": this.state.type
                    };
                    var paramsx = {
                        "bid": brandId,
                        "keyword_id": keywordId,
                        "kid": kid,
                        "keywordname": this.Trim(keywordname),
                        "catid": "",
                        "catidJd": this.Trim(catidJd),
                        "catname": this.Trim(catname),
                        "catid1688": this.Trim(catid1688),
                        "catidSn": this.Trim(catidSn),
                        "catidDd": this.Trim(catidDd),
                        "catidDdShu": this.Trim(this.state.catidDdShu),
                        "save_flag": "save",
                        "type": this.state.type
                    };
                    if (!addKeyword) {
                        _params.save_flag = 'update';
                        paramsx.save_flag = 'update';
                    }
                    if (/^\s+$/gi.test(keywordname) || /^\s+$/gi.test(catname) || /^\s+$/gi.test(catid) || /^\s+$/gi.test(catidJd) || /^\s+$/gi.test(catid1688) || /^\s+$/gi.test(catidSn) || /^\s+$/gi.test(catidDd)) {
                        close();
                        _message3.default.error('不能全部输入空格');
                    } else {
                        if (catid != "" && catid != undefined || catidJd != "" && catidJd != undefined || catid1688 != "" && catid1688 != undefined || catidSn != "" && catidSn != undefined || catidDd != "" && catidDd != undefined) {
                            if (catid != "" && catid != undefined) {
                                if (catid.substr(0, 6) != "111111") {

                                    _ajax2.default.post('/hcm/cus/saveOrUpdate_keyword_cat', _params).then(function (response) {
                                        // console.log(response)
                                        if (response.data.status == 10000) {
                                            _message3.default.success(alert_success, 5);
                                            _this6.setState({
                                                addKeyState: false,
                                                editKey: [],
                                                catidDdShu: "0"
                                            }, function () {
                                                close(_this6.getData());
                                            });
                                        } else {
                                            close();
                                            _message3.default.error(response.data.message, 5);
                                        }
                                    }).catch(function (error) {
                                        close();
                                        _message3.default.error(error.message);
                                    });
                                } else {
                                    //console.log("淘宝")
                                    if (catid.substr(0, 6) != "111111" && catid != "" && catid != undefined || catidJd != "" && catidJd != undefined || catid1688 != "" && catid1688 != undefined || catidSn != "" && catidSn != undefined || catidDd != "" && catidDd != undefined) {

                                        _ajax2.default.post('/hcm/cus/saveOrUpdate_keyword_cat', paramsx).then(function (response) {
                                            // console.log(response)
                                            if (response.data.status == 10000) {
                                                _message3.default.success(alert_success, 5);
                                                _this6.setState({
                                                    addKeyState: false,
                                                    editKey: [],
                                                    catidDdShu: "0"
                                                }, function () {
                                                    close(_this6.getData());
                                                });
                                            } else {
                                                close();
                                                _message3.default.error(response.data.message, 5);
                                            }
                                        }).catch(function (error) {
                                            close();
                                            _message3.default.error(error.message);
                                        });
                                    } else {
                                        close();
                                        _message3.default.error('至少填写一个Cat值');
                                        LoadingModal({ bl: false });
                                    }
                                }
                            } else {
                                // console.log("淘宝")
                                _ajax2.default.post('/hcm/cus/saveOrUpdate_keyword_cat', paramsx).then(function (response) {
                                    // console.log(response)
                                    if (response.data.status == 10000) {
                                        _message3.default.success(alert_success, 5);
                                        _this6.setState({
                                            addKeyState: false,
                                            editKey: [],
                                            catidDdShu: "0"
                                        }, function () {
                                            close(_this6.getData());
                                        });
                                    } else {
                                        close();
                                        _message3.default.error(response.data.message, 5);
                                    }
                                }).catch(function (error) {
                                    close();
                                    _message3.default.error(error.message);
                                });
                            }
                        } else {
                            close();
                            _message3.default.error('至少填写一个Cat值');
                            LoadingModal({ bl: false });
                        }
                    }
                }
            } else if (level == 3) {

                if (catname == null || catname.length == 0) {
                    _message3.default.error(categoryAlert, 5);
                    close();
                    return;
                }
                // if(catid==null||catid.length==0){
                //     message.error(catAlert,5)
                //     close()
                //     return
                // }

                if (!_lib2.default.legnthCheck(catname, 'INPUT')) {
                    _message3.default.error('类目长度不允许超过50');
                    close();
                    return;
                }

                if (!_lib2.default.legnthCheck(catid, 'INPUT')) {
                    _message3.default.error('Cat值长度不允许超过50');
                    close();
                    return;
                }

                if (!_lib2.default.legnthCheck(catidJd, 'INPUT')) {
                    _message3.default.error('京东Cat值长度不允许超过50');
                    close();
                    return;
                }
                if (!_lib2.default.legnthCheck(catid1688, 'INPUT')) {
                    _message3.default.error('1688Cat值长度不允许超过50');
                    close();
                    return;
                }
                if (!_lib2.default.legnthCheck(catidSn, 'INPUT')) {
                    _message3.default.error('苏宁Cat值长度不允许超过50');
                    close();
                    return;
                }
                if (!_lib2.default.legnthCheck(catidDd, 'INPUT')) {
                    _message3.default.error('当当Cat值长度不允许超过50');
                    close();
                    return;
                }
                var _params2 = {
                    "keywordname": this.Trim(keywordname),
                    "bid": brandId,
                    "catid": this.Trim(catid),
                    "catidJd": this.Trim(catidJd),
                    "kid": kid,
                    "catname": this.Trim(catname),
                    "catid1688": this.Trim(catid1688),
                    "catidSn": this.Trim(catidSn),
                    "catidDd": this.Trim(catidDd),
                    "catidDdShu": this.Trim(this.state.catidDdShu),
                    "save_flag": "save",
                    "type": this.state.type
                };
                var _paramsx = {
                    "keywordname": this.Trim(keywordname),
                    "bid": brandId,
                    "catid": "",
                    "catidJd": this.Trim(catidJd),
                    "kid": kid,
                    "catname": this.Trim(catname),
                    "catid1688": this.Trim(catid1688),
                    "catidSn": this.Trim(catidSn),
                    "catidDd": this.Trim(catidDd),
                    "catidDdShu": this.Trim(this.state.catidDdShu),
                    "save_flag": "save",
                    "type": this.state.type
                };
                if (!addKeyword) {
                    _params2.save_flag = 'update';
                    _paramsx.save_flag = 'update';
                }

                if (/^\s+$/gi.test(keywordname) || /^\s+$/gi.test(catname) || /^\s+$/gi.test(catid) || /^\s+$/gi.test(catidJd) || /^\s+$/gi.test(catid1688) || /^\s+$/gi.test(catidSn) || /^\s+$/gi.test(catidDd)) {
                    close();
                    _message3.default.error('不能全部输入空格');
                } else {
                    if (catid != "" && catid != undefined) {
                        // console.log("--8-")
                        if (catid.substr(0, 6) != "111111") {
                            // console.log("--8-")
                            if (catid != "" && catid != undefined || catidJd != "" && catidJd != undefined || catid1688 != "" && catid1688 != undefined || catidSn != "" && catidSn != undefined || catidDd != "" && catidDd != undefined) {
                                _ajax2.default.post('/hcm/cus/saveOrUpdate_keyword_cat', _params2).then(function (response) {
                                    // console.log(response)
                                    if (response.data.status == 10000) {
                                        _message3.default.success(alert_success, 5);
                                        _this6.setState({
                                            addKeyState: false,
                                            editKey: [],
                                            catidDdShu: "0"
                                        }, function () {
                                            close(_this6.getData());
                                        });
                                    } else {
                                        close();
                                        _message3.default.error(response.data.message, 5);
                                    }
                                }).catch(function (error) {
                                    close();
                                    _message3.default.error(error.message);
                                });
                            } else {
                                close();
                                _message3.default.error('至少填写一个Cat值');
                                LoadingModal({ bl: false });
                            }
                        } else {
                            // console.log("--8-0")

                            if (catid.substr(0, 6) != "111111" && catid != "" && catid != undefined || catidJd != "" && catidJd != undefined || catid1688 != "" && catid1688 != undefined || catidSn != "" && catidSn != undefined || catidDd != "" && catidDd != undefined) {

                                _ajax2.default.post('/hcm/cus/saveOrUpdate_keyword_cat', _paramsx).then(function (response) {
                                    // console.log(response)
                                    if (response.data.status == 10000) {
                                        _message3.default.success(alert_success, 5);
                                        _this6.setState({
                                            addKeyState: false,
                                            editKey: [],
                                            catidDdShu: "0"
                                        }, function () {
                                            close(_this6.getData());
                                        });
                                    } else {
                                        close();
                                        _message3.default.error(response.data.message, 5);
                                    }
                                }).catch(function (error) {
                                    close();
                                    _message3.default.error(error.message);
                                });
                            } else {
                                close();
                                _message3.default.error('至少填写一个Cat值');
                                LoadingModal({ bl: false });
                            }
                        }
                    } else {
                        // console.log("--888-")
                        if (catid != "" && catid != undefined || catidJd != "" && catidJd != undefined || catid1688 != "" && catid1688 != undefined || catidSn != "" && catidSn != undefined || catidDd != "" && catidDd != undefined) {

                            _ajax2.default.post('/hcm/cus/saveOrUpdate_keyword_cat', _paramsx).then(function (response) {
                                // console.log(response)
                                if (response.data.status == 10000) {
                                    _message3.default.success(alert_success, 5);
                                    _this6.setState({
                                        addKeyState: false,
                                        editKey: [],
                                        catidDdShu: "0"
                                    }, function () {
                                        close(_this6.getData());
                                    });
                                } else {
                                    close();
                                    _message3.default.error(response.data.message, 5);
                                }
                            }).catch(function (error) {
                                close();
                                _message3.default.error(error.message);
                            });
                        } else {
                            close();
                            _message3.default.error('至少填写一个Cat值');
                            LoadingModal({ bl: false });
                        }
                    }
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            var _props = this.props,
                show = _props.show,
                onClose = _props.onClose,
                targetId = _props.targetId;
            var _state = this.state,
                TBCat = _state.TBCat,
                JDCat = _state.JDCat,
                DdCat = _state.DdCat,
                SnCat = _state.SnCat,
                LeiM = _state.LeiM,
                OneSixCat = _state.OneSixCat,
                addData = _state.addData,
                brand_list = _state.brand_list,
                expandedRowKeys = _state.expandedRowKeys,
                addKeyState = _state.addKeyState,
                addModalStatus = _state.addModalStatus,
                clientNames = _state.clientNames,
                tokenSeparators = _state.tokenSeparators;

            var EDIT = React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_edit.png' });
            var DELETE = React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_del.png' });
            var ADD = React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_add.png' });
            var columns2 = [{
                title: '品牌关键词',
                dataIndex: 'keywordname',
                key: 'keywordname',
                className: 'pad-left-30 ',
                render: function render(text, record, index) {
                    var setArr = new Set(_this7.state.editKey);

                    if (setArr.has(record.key) && record.level <= 2) {
                        return React.createElement(_input2.default, { disabled: !record.addKeyword && index == 0, placeholder: '\u8BF7\u8F93\u5165\u5173\u952E\u8BCD', onChange: function onChange(e) {
                                return _this7.changInp(e, record, 'keywordname');
                            }, style: { maxWidth: '130px' }, value: text });
                    } else if (record.level <= 2) {
                        return React.createElement(
                            'span',
                            { style: { maxWidth: '500px', display: 'inline-block' } },
                            text
                        );
                    } else {
                        return null;
                    }
                }
            }, {
                title: '类目',
                dataIndex: 'catname',
                key: 'catname',
                render: function render(text, record, index) {
                    var setArr = new Set(_this7.state.editKey);

                    if (setArr.has(record.key)) {
                        return React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165\u7C7B\u76EE', onChange: function onChange(e) {
                                return _this7.changInp(e, record, 'catname');
                            }, style: { maxWidth: '130px' }, value: text });
                    } else {
                        return text;
                    }
                }
            }, {
                title: '淘宝Cat值',
                dataIndex: 'catid',
                key: 'catid',
                render: function render(text, record, index) {
                    var setArr = new Set(_this7.state.editKey);
                    if (setArr.has(record.key)) {
                        if (text != "" && text != undefined) {
                            if (text.substr(0, 6) == "111111") {
                                return React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165\u6DD8\u5B9DCat\u503C', onChange: function onChange(e) {
                                        return _this7.changInp(e, record, 'catid');
                                    }, style: { maxWidth: '130px' }, value: '' });
                            } else {
                                return React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165\u6DD8\u5B9DCat\u503C', onChange: function onChange(e) {
                                        return _this7.changInp(e, record, 'catid');
                                    }, style: { maxWidth: '130px' }, value: text });
                            }
                        } else {
                            return React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165\u6DD8\u5B9DCat\u503C', onChange: function onChange(e) {
                                    return _this7.changInp(e, record, 'catid');
                                }, style: { maxWidth: '130px' }, value: text });
                        }
                    } else {
                        if (text != "" && text != undefined) {
                            if (text.substr(0, 6) == "111111") {
                                return null;
                            } else {
                                return text;
                            }
                        } else {
                            return text;
                        }
                    }
                }
            }, {
                title: '京东Cat值',
                dataIndex: 'catidJd',
                key: 'catidJd',
                render: function render(text, record, index) {
                    var setArr = new Set(_this7.state.editKey);
                    // console.log(text, record)
                    if (setArr.has(record.key)) {
                        return React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165\u4EAC\u4E1CCat\u503C', onChange: function onChange(e) {
                                return _this7.changInp(e, record, 'catidJd');
                            }, style: { maxWidth: '130px' }, value: text });
                    } else {
                        return text;
                    }
                }
            }, {
                title: '1688Cat值',
                dataIndex: 'catid1688',
                key: 'catid1688',
                render: function render(text, record, index) {
                    var setArr = new Set(_this7.state.editKey);

                    if (setArr.has(record.key)) {
                        return React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u51651688Cat\u503C', onChange: function onChange(e) {
                                return _this7.changInp(e, record, 'catid1688');
                            }, style: { maxWidth: '130px' }, value: text });
                    } else {
                        return text;
                    }
                }
            }, {
                title: '苏宁Cat值',
                dataIndex: 'catidSn',
                key: 'catidSn',
                render: function render(text, record, index) {
                    var setArr = new Set(_this7.state.editKey);
                    if (setArr.has(record.key)) {
                        return React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165\u82CF\u5B81Cat\u503C', onChange: function onChange(e) {
                                return _this7.changInp(e, record, 'catidSn');
                            }, style: { maxWidth: '130px' }, value: record.catidSn == null ? "" : record.catidSn });
                    } else {
                        return React.createElement(
                            'span',
                            null,
                            record.catidSn ? record.catidSn : ""
                        );
                    }
                }
            }, {
                title: '当当Cat值',
                dataIndex: 'catidDd',
                key: 'catidDd',
                render: function render(text, record, index) {
                    var setArr = new Set(_this7.state.editKey);

                    // console.log(text, record)
                    if (setArr.has(record.key)) {
                        return React.createElement(
                            'div',
                            null,
                            React.createElement(
                                _select2.default,
                                { defaultValue: record.catidDdShu == "0" ? "书籍" : record.catidDdShu == "1" ? "其他" : "书籍", style: { width: 80, float: "left" }, onChange: _this7.handleChange },
                                React.createElement(
                                    Option,
                                    { value: '0' },
                                    '\u4E66\u7C4D'
                                ),
                                React.createElement(
                                    Option,
                                    { value: '1' },
                                    '\u5176\u4ED6'
                                )
                            ),
                            React.createElement(_input2.default, { placeholder: '\u4E66\u7C4D\u7684\u683C\u5F0F\u4F8B\uFF1A01.43.70.01.00.00', onChange: function onChange(e) {
                                    return _this7.changInp(e, record, 'catidDd');
                                }, style: { maxWidth: '150px' }, value: text })
                        );
                    } else {
                        if (record.catidDdShu != "" && record.catidDdShu != undefined && record.catidDdShu != null) {
                            if (record.catidDdShu == "0") {
                                return text ? "书籍：" + text : "";
                            } else {
                                return text ? "其他：" + text : "";
                            }
                        } else {
                            return "";
                        }
                    }
                }
            }, {
                title: '操作',
                dataIndex: 'address',
                className: 'text-right pad-rig-30',
                key: 'address',
                render: function render(text, record, index) {
                    var setArr = new Set(_this7.state.editKey);
                    if (record.level == 2) {
                        if (index == 0 || index == 1 && _this7.state.addKeyState) {
                            if (setArr.has(record.key)) {
                                return React.createElement(
                                    'span',
                                    { style: { fontSize: '20px' }, className: 'action-box' },
                                    React.createElement(
                                        'a',
                                        { style: { marginRight: '10px' }, onClick: function onClick() {
                                                return _this7.save(record);
                                            }, href: 'javascript:;' },
                                        React.createElement(_icon2.default, { type: 'check' })
                                    ),
                                    React.createElement(
                                        'a',
                                        { onClick: function onClick() {
                                                return _this7.cancelKeyword(record);
                                            }, href: 'javascript:;' },
                                        React.createElement(_icon2.default, { type: 'close' })
                                    )
                                );
                            } else {
                                return React.createElement(
                                    'span',
                                    { className: 'action-box-one' },
                                    React.createElement(
                                        'a',
                                        { onClick: function onClick() {
                                                return _this7.addCategory(record);
                                            }, href: 'javascript:;' },
                                        ADD,
                                        '\u65B0\u589E\u7C7B\u76EE'
                                    ),
                                    React.createElement(
                                        'a',
                                        { onClick: function onClick() {
                                                return _this7.editKeyword(record, "11");
                                            }, href: 'javascript:;' },
                                        EDIT,
                                        '\u7F16\u8F91'
                                    )
                                );
                            }
                        } else {
                            if (setArr.has(record.key)) {
                                return React.createElement(
                                    'span',
                                    { style: { fontSize: '20px' }, className: 'action-box' },
                                    React.createElement(
                                        'a',
                                        { style: { marginRight: '10px' }, onClick: function onClick() {
                                                return _this7.save(record);
                                            }, href: 'javascript:;' },
                                        React.createElement(_icon2.default, { type: 'check' })
                                    ),
                                    React.createElement(
                                        'a',
                                        { onClick: function onClick() {
                                                return _this7.cancelKeyword(record);
                                            }, href: 'javascript:;' },
                                        React.createElement(_icon2.default, { type: 'close' })
                                    )
                                );
                            } else {
                                return React.createElement(
                                    'span',
                                    { className: 'action-box' },
                                    React.createElement(
                                        'a',
                                        { onClick: function onClick() {
                                                return _this7.addCategory(record);
                                            }, href: 'javascript:;' },
                                        ADD,
                                        '\u65B0\u589E\u7C7B\u76EE'
                                    ),
                                    React.createElement(
                                        'a',
                                        { onClick: function onClick() {
                                                return _this7.editKeyword(record, "11");
                                            }, href: 'javascript:;' },
                                        EDIT,
                                        '\u7F16\u8F91'
                                    ),
                                    React.createElement(
                                        _popconfirm2.default,
                                        { title: '\u4F60\u786E\u5B9A\u8981\u5220\u9664\u6B64\u9879\u5417?', onConfirm: function onConfirm() {
                                                return _this7.rmKeyword(record);
                                            }, okText: '\u5220\u9664', cancelText: '\u53D6\u6D88' },
                                        React.createElement(
                                            'a',
                                            { href: 'javascript:;' },
                                            DELETE,
                                            '\u5220\u9664'
                                        )
                                    )
                                );
                            }
                        }
                    } else if (record.level == 3) {
                        if (setArr.has(record.key)) {
                            return React.createElement(
                                'span',
                                { style: { fontSize: '20px' }, className: 'action-box' },
                                React.createElement(
                                    'a',
                                    { style: { marginRight: '10px' }, onClick: function onClick() {
                                            return _this7.save(record);
                                        }, href: 'javascript:;' },
                                    React.createElement(_icon2.default, { type: 'check' })
                                ),
                                React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return _this7.cancelKeyword(record);
                                        }, href: 'javascript:;' },
                                    React.createElement(_icon2.default, { type: 'close' })
                                )
                            );
                        } else {
                            return React.createElement(
                                'span',
                                { className: 'action-box' },
                                React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return _this7.editKeyword(record, "11");
                                        }, href: 'javascript:;' },
                                    EDIT,
                                    '\u7F16\u8F91'
                                ),
                                React.createElement(
                                    _popconfirm2.default,
                                    { title: '\u4F60\u786E\u5B9A\u8981\u5220\u9664\u6B64\u9879\u5417?', onConfirm: function onConfirm() {
                                            return _this7.rmKeyword(record);
                                        }, okText: '\u5220\u9664', cancelText: '\u53D6\u6D88' },
                                    React.createElement(
                                        'a',
                                        { href: 'javascript:;' },
                                        DELETE,
                                        '\u5220\u9664'
                                    )
                                )
                            );
                        }
                    }
                }
            }];
            var Option = _select2.default.Option;
            var columns = [{
                title: '品牌名',
                dataIndex: 'name',
                key: 'name',
                width: '10%',
                render: function render(text, record) {
                    return React.createElement(_input2.default, { onChange: function onChange(e) {
                            return _this7.addChange(e, 'name');
                        }, value: text, placeholder: '\u8BF7\u8F93\u5165\u54C1\u724C\u540D' });
                }
            }, {
                title: '类目',
                dataIndex: 'category',
                key: 'category',
                width: '10%',
                render: function render(text, record) {
                    return React.createElement(_input2.default, { onChange: function onChange(e) {
                            return _this7.addChange(e, 'category');
                        }, value: text, placeholder: '\u8BF7\u8F93\u5165\u7C7B\u76EE\u540D\u79F0' });
                }
            }, {
                title: '淘宝Cat值',
                dataIndex: 'cat',
                key: 'cat',
                render: function render(text, record) {
                    return React.createElement(_input2.default, { onChange: function onChange(e) {
                            return _this7.addChange(e, 'cat');
                        }, value: text, placeholder: '\u8BF7\u8F93\u5165\u6DD8\u5B9DCat\u503C' });
                }
            }, {
                title: '京东Cat值',
                dataIndex: 'catidJd',
                key: 'catidJd',
                render: function render(text, record) {
                    return React.createElement(_input2.default, { onChange: function onChange(e) {
                            return _this7.addChange(e, 'catidJd');
                        }, value: text, placeholder: '\u8BF7\u8F93\u5165\u4EAC\u4E1CCat\u503C' });
                }
            }, {
                title: '1688Cat值',
                dataIndex: 'catid1688',
                key: 'catid1688',
                render: function render(text, record) {
                    return React.createElement(_input2.default, { onChange: function onChange(e) {
                            return _this7.addChange(e, 'catid1688');
                        }, value: text, placeholder: '\u8BF7\u8F93\u51651688Cat\u503C' });
                }
            }, {
                title: '苏宁Cat值',
                dataIndex: 'catidSn',
                key: 'catidSn',
                render: function render(text, record) {
                    return React.createElement(_input2.default, { onChange: function onChange(e) {
                            return _this7.addChange(e, 'catidSn');
                        }, value: text, placeholder: '\u8BF7\u8F93\u5165\u82CF\u5B81Cat\u503C' });
                }
            }, {
                title: '当当Cat值',
                dataIndex: 'catidDd',
                key: 'catidDd',
                width: '20%',
                render: function render(text, record) {
                    return React.createElement(
                        'div',
                        null,
                        React.createElement(
                            _select2.default,
                            { defaultValue: record.catidDdShu == "0" ? "书籍" : record.catidDdShu == "1" ? "其他" : "书籍", style: { width: 80, float: "left" }, onChange: _this7.handleChange },
                            React.createElement(
                                Option,
                                { value: '0' },
                                '\u4E66\u7C4D'
                            ),
                            React.createElement(
                                Option,
                                { value: '1' },
                                '\u5176\u4ED6'
                            )
                        ),
                        React.createElement(_input2.default, { style: { width: "100px" }, onChange: function onChange(e) {
                                return _this7.addChange(e, 'catidDd');
                            }, value: text, placeholder: '\u4E66\u7C4D\u7684\u683C\u5F0F\u4F8B\uFF1A01.43.70.01.00.00' })
                    );
                }
            }, {
                title: '操作',
                key: 'action',
                width: '17%',
                className: 'action-table',
                render: function render(text, record) {
                    return React.createElement(
                        'span',
                        { style: { width: 100, display: 'block', fontSize: '20px' } },
                        React.createElement(
                            'a',
                            { style: { marginRight: '10px' }, onClick: function onClick() {
                                    return _this7.addSubmit();
                                }, href: 'javascript:;' },
                            React.createElement(_icon2.default, { type: 'check' })
                        ),
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this7.addBoxState(false);
                                }, href: 'javascript:;' },
                            React.createElement(_icon2.default, { type: 'close' })
                        )
                    );
                }
            }];
            var text = React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    '\u6309ENTER\u952E\u9ED8\u8BA4\u6240\u6709\u6587\u5B57\u4E3A\u4E00\u884C\u6570\u636E'
                ),
                React.createElement(
                    'p',
                    null,
                    '\u6309TAB\u952E\u9ED8\u8BA4\u6240\u6709\u6587\u5B57\u6309\u7167\u7A7A\u683C\u62C6\u5206\u4E3A\u591A\u884C\u6570\u636E'
                )
            );

            return React.createElement(
                'div',
                { className: show ? 'search-content search-show' : 'search-content', style: show ? { display: 'flex' } : { display: 'none' } },
                React.createElement(
                    'div',
                    { className: 'Breadcrumbbox' },
                    React.createElement(
                        _breadcrumb2.default,
                        { className: 'Breadcrumb' },
                        React.createElement(
                            _breadcrumb2.default.Item,
                            null,
                            this.state.type == "jingpin" ? "竞品商品库设置" : "商品库爬虫设置"
                        ),
                        React.createElement(
                            _breadcrumb2.default.Item,
                            null,
                            '\u5173\u952E\u5B57\u7C7B\u76EE\u8BBE\u7F6E'
                        )
                    ),
                    React.createElement(
                        'h2',
                        null,
                        '\u5173\u952E\u5B57\u7C7B\u76EE\u8BBE\u7F6E'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'content' },
                    React.createElement(
                        'div',
                        { className: 'but-box-add' },
                        React.createElement(
                            _button2.default,
                            { type: 'dashed', disabled: addData.disabled, onClick: function onClick() {
                                    return _this7.addBoxState(true);
                                }, className: 'add' },
                            '+ \u65B0\u589E\u54C1\u724C'
                        ),
                        React.createElement(
                            _popconfirm2.default,
                            { title: React.createElement(
                                    'span',
                                    { className: 'red' },
                                    '\u4F60\u786E\u5B9A\u8981\u6E05\u7A7A\u5546\u54C1\u5E93\u6570\u636E\u5417?'
                                ), onConfirm: function onConfirm() {
                                    return _this7.deleteAll();
                                }, okText: '\u5220\u9664', cancelText: '\u53D6\u6D88' },
                            React.createElement(
                                _button2.default,
                                { type: 'danger' },
                                '\u6E05\u7A7A\u5546\u54C1\u5E93\u6570\u636E'
                            )
                        )
                    ),
                    addData.state ? React.createElement(
                        'div',
                        { className: 'add-box' },
                        React.createElement(_table2.default, { pagination: false, columns: columns, dataSource: [addData] })
                    ) : null,
                    React.createElement(
                        'ul',
                        { className: 'searchItems' },
                        brand_list.length ? brand_list.map(function (item, index) {
                            return React.createElement(
                                'li',
                                { key: index, className: 'item' },
                                React.createElement(
                                    'div',
                                    { className: 'item-header' },
                                    React.createElement(
                                        'div',
                                        null,
                                        item.brandName
                                    ),
                                    React.createElement(
                                        'div',
                                        null,
                                        '\u5546\u54C1\u5E93\u66F4\u65B0\u65F6\u95F4 ',
                                        item.updateTime
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'action' },
                                        React.createElement(
                                            _button2.default,
                                            { className: 'btn1-main', disabled: addKeyState, onClick: function onClick(e) {
                                                    return _this7.addKeyword(item, index);
                                                }, type: 'primary' },
                                            '\u65B0\u589E\u5173\u952E\u8BCD'
                                        ),
                                        React.createElement(
                                            _button2.default,
                                            { onClick: function onClick() {
                                                    return _this7.addModalStatus(true, item, index);
                                                } },
                                            '\u6279\u91CF\u65B0\u589E'
                                        ),
                                        React.createElement(
                                            _popconfirm2.default,
                                            { title: '\u4F60\u786E\u5B9A\u8981\u5220\u9664\u6B64\u9879\u5417?', onConfirm: function onConfirm() {
                                                    return _this7.rmKeyword(item);
                                                }, okText: '\u5220\u9664', cancelText: '\u53D6\u6D88' },
                                            React.createElement(
                                                _button2.default,
                                                null,
                                                '\u5220\u9664'
                                            )
                                        ),
                                        React.createElement(
                                            _button2.default,
                                            { onClick: function onClick(e) {
                                                    return _this7.updateKeyword(item, index);
                                                } },
                                            '\u66F4\u65B0\u5546\u54C1\u5E93'
                                        ),
                                        React.createElement(_switch2.default, { checkedChildren: '\u5F00\u542F\u5546\u54C1\u5E93', style: { marginTop: "5px" }, onChange: function onChange(e) {
                                                return _this7.SwitchonChange(item, index);
                                            }, defaultChecked: item.updateNow != 7 ? true : false, unCheckedChildren: '\u6682\u505C\u5546\u54C1\u5E93' })
                                    )
                                ),
                                React.createElement(_table2.default, { onExpand: _this7.onExpand, expandedRowKeys: expandedRowKeys, rowKey: function rowKey(record) {
                                        return record.key;
                                    }, className: 'item-table', pagination: false, columns: columns2, dataSource: item.keywordList })
                            );
                        }) : null
                    )
                ),
                React.createElement(_FullSpin2.default, { spinning: addData.spinning }),
                React.createElement(
                    _modal2.default,
                    {
                        maskClosable: false,
                        title: '批量新增',
                        wrapClassName: 'boxModal',
                        visible: addModalStatus,
                        onOk: function onOk() {
                            return _this7.onSubClients();
                        },
                        onCancel: function onCancel() {
                            return _this7.addModal(false);
                        },
                        className: 'YellowWhite'
                    },
                    React.createElement(
                        'div',
                        { className: 'alertbox' },
                        React.createElement(
                            'p',
                            null,
                            '\u5C0F\u63D0\u793A:'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\u672C\u6279\u91CF\u65B0\u589E\u4EC5\u9002\u7528\u4E8E\u591A\u5173\u952E\u8BCD\u5171\u7528\u4E00\u4E2ACat\u503C\u7684\u60C5\u51B5\u3002'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'Selectbox' },
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                _tooltip2.default,
                                { placement: 'top', arrowPointAtCenter: true, title: text },
                                React.createElement(_icon2.default, { style: { color: 'red', marginRight: '6px' }, type: 'info-circle' })
                            ),
                            '\u54C1\u724C\u5173\u952E\u8BCD:'
                        ),
                        React.createElement(_main2.default, {
                            className: 'addclient',
                            style: { width: 376, height: 300 },
                            value: clientNames,
                            placeholder: ' \u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u540D\u79F0,\u4E00\u884C\u4E00\u4E2A\uFF0C\u53EF\u591A\u4E2A\uFF0C\u6700\u591A50\u4E2A.',
                            onChange: function onChange(value) {
                                return _this7.addClientChange(value);
                            },
                            maxText: 50
                        })
                    ),
                    React.createElement(
                        'div',
                        { className: 'alertbox' },
                        React.createElement(
                            'p',
                            { style: { color: "#333" } },
                            '*\u7C7B\u76EE:'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(_input2.default, { onChange: function onChange(e) {
                                    return _this7.chSearchIpt(e, 'LeiM');
                                }, placeholder: '\u8BF7\u8F93\u5165', value: LeiM })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'alertbox' },
                        React.createElement(
                            'p',
                            { style: { color: "#333" } },
                            '\u6DD8\u5B9DCat\u503C:'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(_input2.default, { onChange: function onChange(e) {
                                    return _this7.chSearchIpt(e, 'TBCat');
                                }, placeholder: '\u8BF7\u8F93\u5165', value: TBCat })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'alertbox' },
                        React.createElement(
                            'p',
                            { style: { color: "#333" } },
                            '\u4EAC\u4E1CCat\u503C:'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(_input2.default, { onChange: function onChange(e) {
                                    return _this7.chSearchIpt(e, 'JDCat');
                                }, placeholder: '\u8BF7\u8F93\u5165', value: JDCat })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'alertbox' },
                        React.createElement(
                            'p',
                            { style: { color: "#333" } },
                            '1688Cat\u503C:'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(_input2.default, { onChange: function onChange(e) {
                                    return _this7.chSearchIpt(e, 'OneSixCat');
                                }, placeholder: '\u8BF7\u8F93\u5165', value: OneSixCat })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'alertbox' },
                        React.createElement(
                            'p',
                            { style: { color: "#333" } },
                            '\u82CF\u5B81Cat\u503C:'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(_input2.default, { onChange: function onChange(e) {
                                    return _this7.chSearchIpt(e, 'SnCat');
                                }, placeholder: '\u8BF7\u8F93\u5165', value: SnCat })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'alertbox' },
                        React.createElement(
                            'p',
                            { style: { color: "#333" } },
                            '\u5F53\u5F53Cat\u503C:'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                _select2.default,
                                { defaultValue: '\u4E66\u7C4D', style: { width: 80, float: "left" }, onChange: this.handleChange },
                                React.createElement(
                                    Option,
                                    { value: '0' },
                                    '\u4E66\u7C4D'
                                ),
                                React.createElement(
                                    Option,
                                    { value: '1' },
                                    '\u5176\u4ED6'
                                )
                            ),
                            React.createElement(_input2.default, { onChange: function onChange(e) {
                                    return _this7.chSearchIpt(e, 'DdCat');
                                }, style: { width: "310px" }, placeholder: '\u4E66\u7C4D\u7684\u683C\u5F0F\u4F8B\uFF1A01.43.70.01.00.00', value: DdCat })
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

exports.default = Header;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=46_e1efa501cd02a5c92bfb.js.map