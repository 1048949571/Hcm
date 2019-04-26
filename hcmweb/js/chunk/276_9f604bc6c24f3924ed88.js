(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[276],{

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

/***/ "./app/widget/components/Layout/index.js":
/*!***********************************************!*\
  !*** ./app/widget/components/Layout/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

var _Copyright = __webpack_require__(/*! ../Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

__webpack_require__(/*! ./index.less */ "./app/widget/components/Layout/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightBox = function RightBox(props) {
  return React.createElement(
    'div',
    { className: 'layout-wrapper ' + (props.className || '') },
    React.createElement(
      'div',
      { className: 'header-wrapper' },
      React.createElement(
        _breadcrumb2.default,
        { className: 'breadcrumb' },
        props.breadcrumbList.map(function (v, i) {
          if (props.linkList[i] === '') {
            return React.createElement(
              _breadcrumb2.default.Item,
              { key: v },
              v
            );
          }
          return React.createElement(
            _breadcrumb2.default.Item,
            {
              href: 'javascript:;',
              key: v },
            React.createElement(
              'span',
              { onClick: function onClick() {
                  props.history.go(-props.linkList[i]);
                } },
              v
            )
          );
        })
      )
    ),
    React.createElement(
      'div',
      { className: 'layout-content' },
      props.children
    ),
    React.createElement(
      'div',
      { className: 'copyright' },
      React.createElement(_Copyright2.default, null)
    )
  );
};

RightBox.defaultProps = {
  title: '标题',
  breadcrumbList: [],
  linkList: []
};

exports.default = RightBox;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/Layout/index.less":
/*!*************************************************!*\
  !*** ./app/widget/components/Layout/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/ShopFile/ActionShopFile.js":
/*!***********************************************************!*\
  !*** ./app/widget/index/Brand/ShopFile/ActionShopFile.js ***!
  \***********************************************************/
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

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _lib = __webpack_require__(/*! ../../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = _input2.default.TextArea;

var Option = _select2.default.Option;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.getUrlInfo = function () {
            var _this$state = _this.state,
                shopUrl = _this$state.shopUrl,
                platformCode = _this$state.platformCode;

            if (!shopUrl || !_lib2.default.checkUrl(shopUrl)) {
                _message3.default.error('首页地址验证不通过,请输入正确的首页地址！');
                return;
            }
            if (!platformCode || !platformCode.trim().length) {
                _message3.default.error('平台不可为空');
                return;
            }
            _this.setState({
                shopUrlStatus: true
            }, function () {
                _ajax2.default.get('/hcm/hcmShop/searchShopPy', {
                    params: {
                        shopUrls: shopUrl,
                        platform: platformCode
                    }
                }).then(function (response) {
                    if (response.data.status == '10000') {
                        var data = response.data.data[0];
                        if (data.success == 'True') {
                            _this.setState({
                                shopUrlStatus: false,
                                wangwang: data.wangwang,
                                shopUrl: data.resultShopUrl,
                                shopName: data.shopName,
                                shopmainid: data.shopmainid,
                                shopUrlCheck: true
                            });
                            _message3.default.success('店铺信息获取成功');
                        } else {
                            _this.setState({
                                shopUrlStatus: false
                            });
                            _message3.default.error('店铺信息获取失败，请检查首页地址是否正确');
                        }
                    } else {
                        _this.setState({
                            shopUrlStatus: false
                        });
                        _message3.default.error(response.data.message);
                    }
                }).catch(function (error) {
                    _message3.default.error(error.statusText);
                });
            });
        };

        _this.getPlatform = function () {
            // ajax.get('/hcm/sys/GetList', {
            //     params: {
            //         dictcode: 'platform'
            //     }
            // }).then((response) => {
            //     if (response.data.status == '10000') {
            _this.setState({
                platForm: can.platform || []
            });
            //     }

            // }).catch((error) => {
            //     message.error(error.statusText);
            // });
        };

        _this.getByProduct = function () {
            _ajax2.default.get('/hcm/hcmCustomModel/getBybmcidAndModule', {
                params: {
                    module: 'SHOP'
                }
            }).then(function (response) {
                var productList = response.data.data;
                _this.setState({
                    formatColumn: productList
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.onChangeSlect = function (e) {

            _this.setState({
                platformCode: e,
                shopUrlStatus: false,
                shopUrlCheck: false,
                wangwang: null,
                shopName: null,
                platTarget: can.platform.filter(function (item) {
                    return item.dictCode == e;
                })[0]
            }, function () {
                var platTarget = _this.state.platTarget;
                if (platTarget.pricename != 'main') {
                    _this.setState({
                        shopUrlCheck: true
                    }, function () {
                        console.log(1, _this.state.shopUrlCheck);
                    });
                }
            });
        };

        _this.brandList = function () {
            _ajax2.default.post('/hcm/ProductClassify/list', {}).then(function (response) {
                //console.log(response)
                if (response.data.status == '10000') {
                    _this.setState({
                        brandList: response.data.data
                    });
                } else {
                    _message3.default.warning(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.handleChangesx = function (value, a) {
            console.log(value, a);
            _this.setState({
                mcids: value.join(","),
                productclassifyid: value
            });
        };

        var _this$props$match$par = _this.props.match.params,
            id = _this$props$match$par.id,
            dealerid = _this$props$match$par.dealerid,
            type = _this$props$match$par.type;

        _this.state = {
            id: id, dealerid: dealerid, type: type,
            shopUrlStatus: false,
            shopUrlCheck: type == 'edit' ? true : false,
            formatColumn: {},
            product_classify_id: null,
            bmcid: 1,
            product_name: null,
            platformCode: null,
            shopmainid: null,
            brand_name: null,
            productclassifyid: [],
            addField: {},
            platForm: [],
            platTarget: {},
            brandList: [],
            mcids: ""

        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var type = this.props.match.params.type;

            this.getPlatform();
            this.getByProduct();
            if (type == 'add') {} else {
                this.getInfo();
            }
            this.brandList();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'getInfo',
        value: function getInfo() {
            var _this2 = this;

            var _props$match$params = this.props.match.params,
                id = _props$match$params.id,
                dealerid = _props$match$params.dealerid;

            _ajax2.default.get('/hcm/hcmShop/getById', {
                params: {
                    shopId: id,
                    dealerid: dealerid,
                    getType: 'UPDATE'
                }
            }).then(function (response) {
                var _response$data$data = response.data.data,
                    shopUrl = _response$data$data.shopUrl,
                    dealername = _response$data$data.dealername,
                    wangwang = _response$data$data.wangwang,
                    platformCode = _response$data$data.platformCode,
                    shopmainid = _response$data$data.shopmainid,
                    shopName = _response$data$data.shopName,
                    productclassifyid = _response$data$data.productclassifyid,
                    status = _response$data$data.status,
                    productClassifyName = _response$data$data.productClassifyName,
                    platformname = _response$data$data.platformname,
                    id = _response$data$data.id,
                    addField = _objectWithoutProperties(_response$data$data, ['shopUrl', 'dealername', 'wangwang', 'platformCode', 'shopmainid', 'shopName', 'productclassifyid', 'status', 'productClassifyName', 'platformname', 'id']);

                _this2.setState({
                    shopUrl: shopUrl, dealername: dealername, wangwang: wangwang, platformCode: platformCode, shopName: shopName, shopmainid: shopmainid, addField: addField, productclassifyid: productclassifyid ? productclassifyid.split(',') : []
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        }
    }, {
        key: 'fixedIptChange',
        value: function fixedIptChange(e, type) {
            var state = this.state;
            if (type == 'shopUrl') {

                state.shopUrlStatus = false;
                state.shopUrlCheck = state.platTarget.pricename == 'main' ? false : true;
                state.wangwang = null;
                state.shopName = null;
                state.shopmainid = null;
            }
            state[type] = e.target.value;
            this.setState(state);
        }
    }, {
        key: 'iptChange',
        value: function iptChange(e, type) {

            var addField = this.state.addField;
            console.log(e.target.value);
            addField[type.fieldvalue] = e.target.value;
            this.setState({
                addField: addField
            });
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit() {
            var _this3 = this;

            var _state = this.state,
                shopUrlCheck = _state.shopUrlCheck,
                id = _state.id,
                type = _state.type,
                shopUrl = _state.shopUrl,
                dealername = _state.dealername,
                wangwang = _state.wangwang,
                shopmainid = _state.shopmainid,
                platformCode = _state.platformCode,
                shopName = _state.shopName,
                addField = _state.addField,
                formatColumn = _state.formatColumn;

            if (!platformCode || !platformCode.trim().length) {
                _message3.default.error('平台不可为空');
                return;
            }
            if (!shopUrl || !_lib2.default.checkUrl(shopUrl)) {
                _message3.default.error('首页地址验证不通过');
                return;
            }
            if (!shopUrlCheck) {
                _message3.default.error('请先获取店铺信息');
                return;
            }
            if (!shopName || !shopName.trim().length) {
                _message3.default.error('店铺名不可为空');
                return;
            }
            if (!dealername || !dealername.trim().length) {
                _message3.default.error('经销商名称不可为空');
                return;
            }
            if (platformCode && (platformCode == 'TB' || platformCode == 'TM' || platformCode == '1688') && (!wangwang || !wangwang.trim().length)) {
                _message3.default.error('请输入旺旺名称');
                return;
            }
            LoadingModal({ bl: true, text: '保存中,请稍后...' });
            _ajax2.default.post('/hcm/hcmShop/saveHcmShopByBmc', {

                shopUrl: shopUrl, dealername: dealername, wangwang: wangwang, platformCode: platformCode, shopName: shopName, shopmainid: shopmainid, addField: JSON.stringify(addField), productclassifyid: this.state.mcids,
                id: type == 'add' ? null : id
            }).then(function (response) {

                if (response.data.status == '10000') {
                    _message3.default.success(response.data.message);
                    if (type == 'add') {
                        _this3.setState({
                            shopUrl: null,
                            dealername: null,
                            wangwang: null,
                            platformCode: null,
                            shopUrlStatus: false,
                            shopUrlCheck: false,
                            shopName: null,
                            shopmainid: null,
                            productclassifyid: [],
                            addField: {},
                            platTarget: {}
                        });
                    } else {
                        window.location.href = '/index.html#/ShopFile';
                    }
                } else {
                    console.log(response);
                    _message3.default.warning(response.data.message);
                }

                LoadingModal({ bl: false });
            }).catch(function (error) {
                LoadingModal({ bl: false });
                _message3.default.error(error.statusText);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _state2 = this.state,
                id = _state2.id,
                type = _state2.type,
                addField = _state2.addField,
                shopUrlStatus = _state2.shopUrlStatus,
                shopUrlCheck = _state2.shopUrlCheck,
                platTarget = _state2.platTarget,
                formatColumn = _state2.formatColumn,
                platForm = _state2.platForm;
            var add = formatColumn.add,
                basic = formatColumn.basic;

            var OPtionchildren = this.state.brandList.map(function (d, i) {
                return React.createElement(
                    Option,
                    { key: d.id },
                    d.productClassifyName
                );
            });
            return React.createElement(
                _Layout2.default,
                {
                    breadcrumbList: ['店铺档案', type == 'add' ? '新增店铺档案' : '编辑店铺档案'],
                    linkList: ['1', ''],
                    history: this.props.history
                },
                React.createElement(
                    'div',
                    { className: 'ActionShopFile' },
                    React.createElement(
                        'div',
                        { className: 'content' },
                        React.createElement(
                            'div',
                            { className: 'box' },
                            React.createElement(
                                'div',
                                { className: 'items' },
                                React.createElement(
                                    'div',
                                    { className: 'item' },
                                    React.createElement(
                                        'span',
                                        { className: 'text red' },
                                        '\u5E73\u53F0'
                                    ),
                                    React.createElement(
                                        _select2.default,
                                        { disabled: type == 'add' ? shopUrlStatus : true, value: this.state.platformCode, style: { width: 350 }, onChange: this.onChangeSlect },
                                        React.createElement(
                                            Option,
                                            { value: null },
                                            '\u8BF7\u9009\u62E9'
                                        ),
                                        platForm.map(function (item, index) {
                                            return React.createElement(
                                                Option,
                                                { key: index, value: item.dictCode },
                                                item.dictName
                                            );
                                        })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { style: { position: 'relative' }, className: 'item' },
                                    React.createElement(
                                        'span',
                                        { className: 'text red' },
                                        '\u5E97\u94FA\u9996\u9875\u5730\u5740'
                                    ),
                                    React.createElement(_input2.default, { disabled: type == 'add' ? shopUrlStatus : true, maxLength: 512, placeholder: '\u8BF7\u8F93\u5165', onChange: function onChange(e) {
                                            return _this4.fixedIptChange(e, 'shopUrl');
                                        }, value: this.state.shopUrl, className: 'input' }),
                                    platTarget.pricename == 'main' ? React.createElement(
                                        _button2.default,
                                        { disabled: shopUrlCheck, onClick: this.getUrlInfo, style: { position: 'absolute', right: '-150px' } },
                                        shopUrlCheck ? React.createElement(
                                            React.Fragment,
                                            null,
                                            '\u4FE1\u606F\u83B7\u53D6\u6210\u529F',
                                            React.createElement(_icon2.default, { type: 'check-circle', style: { paddingLeft: '9px', color: 'rgba(0,0,0,0.3)' } })
                                        ) : React.createElement(
                                            React.Fragment,
                                            null,
                                            '\u83B7\u53D6\u5E97\u94FA\u4FE1\u606F',
                                            shopUrlStatus ? React.createElement(_icon2.default, { spin: true, type: 'loading' }) : null
                                        )
                                    ) : null
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'item' },
                                    React.createElement(
                                        'span',
                                        { className: 'text red' },
                                        '\u5E97\u94FA\u540D\u79F0'
                                    ),
                                    React.createElement(_input2.default, {
                                        maxLength: 512,
                                        disabled: type == 'add' ? platTarget.pricename == 'main' : true,
                                        placeholder: platTarget.pricename == 'main' ? "店铺名称根据首页地址获取" : "请输入店铺名称",
                                        onChange: function onChange(e) {
                                            return _this4.fixedIptChange(e, 'shopName');
                                        },
                                        value: this.state.shopName,
                                        className: 'input'
                                    })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'item' },
                                    React.createElement(
                                        'span',
                                        { className: this.state.platformCode == 'TB' || this.state.platformCode == 'TM' || this.state.platformCode == '1688' ? 'text red' : 'text ' },
                                        '\u65FA\u65FA\u540D\u79F0'
                                    ),
                                    React.createElement(_input2.default, {
                                        maxLength: 32,
                                        disabled: type == 'add' ? platTarget.pricename == 'main' : true,
                                        placeholder: platTarget.pricename == 'main' ? "旺旺名称根据首页地址获取" : "请输入旺旺名称",
                                        onChange: function onChange(e) {
                                            return _this4.fixedIptChange(e, 'wangwang');
                                        },
                                        value: this.state.wangwang,
                                        className: 'input'
                                    })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'item' },
                                    React.createElement(
                                        'span',
                                        { className: 'text red' },
                                        '\u7ECF\u9500\u5546\u540D\u79F0'
                                    ),
                                    React.createElement(_input2.default, { maxLength: 32, placeholder: '\u8BF7\u8F93\u5165', disabled: type == 'add' ? false : true, onChange: function onChange(e) {
                                            return _this4.fixedIptChange(e, 'dealername');
                                        }, value: this.state.dealername, className: 'input' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'item' },
                                    React.createElement(
                                        'span',
                                        { className: 'text' },
                                        '\u7ECF\u8425\u54C1\u7C7B'
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'input' },
                                        React.createElement(
                                            _select2.default,
                                            {
                                                mode: 'multiple',
                                                placeholder: '\u8BF7\u9009\u62E9\u7ECF\u8425\u54C1\u7C7B',
                                                onChange: this.handleChangesx,
                                                onFocus: this.onFocusChang,
                                                value: this.state.productclassifyid
                                            },
                                            OPtionchildren
                                        )
                                    )
                                ),
                                add ? add.data.map(function (item, index) {
                                    if (item.fieldvalue !== "brand_name" && item.fieldvalue !== "product_name") {
                                        return React.createElement(
                                            'div',
                                            { key: 'add' + index, className: 'item' },
                                            React.createElement(
                                                'span',
                                                { className: 'text' },
                                                item.fieldname
                                            ),
                                            React.createElement(_input2.default, { maxLength: item.fieldvalue == 'memo' ? 128 : 32, placeholder: '\u8BF7\u8F93\u5165', onChange: function onChange(e) {
                                                    return _this4.iptChange(e, item);
                                                }, value: addField[item.fieldvalue], className: 'input' })
                                        );
                                    }
                                }) : null
                            ),
                            React.createElement(
                                'div',
                                { className: 'items' },
                                React.createElement(
                                    'div',
                                    { className: 'item' },
                                    React.createElement('span', { className: 'text' }),
                                    React.createElement(
                                        _button2.default,
                                        { className: 'btn2-main', onClick: function onClick() {
                                                return _this4.onSubmit();
                                            }, style: { marginLeft: '20px' } },
                                        '\u786E\u8BA4'
                                    ),
                                    React.createElement(
                                        'a',
                                        { href: '/index.html#/ShopFile' },
                                        React.createElement(
                                            _button2.default,
                                            { className: 'btn2-sub noneFloat' },
                                            '\u53D6\u6D88'
                                        )
                                    )
                                )
                            )
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

/***/ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/Breadcrumb.js":
/*!********************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/breadcrumb/Breadcrumb.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util/warning */ "./node_modules/_antd@3.10.1@antd/es/_util/warning.js");
/* harmony import */ var _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BreadcrumbItem */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/BreadcrumbItem.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);










function getBreadcrumbName(route, params) {
    if (!route.breadcrumbName) {
        return null;
    }
    var paramsKeys = Object.keys(params).join('|');
    var name = route.breadcrumbName.replace(new RegExp(':(' + paramsKeys + ')', 'g'), function (replacement, key) {
        return params[key] || replacement;
    });
    return name;
}
function defaultItemRender(route, params, routes, paths) {
    var isLastItem = routes.indexOf(route) === routes.length - 1;
    var name = getBreadcrumbName(route, params);
    return isLastItem ? react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
        'span',
        null,
        name
    ) : react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
        'a',
        { href: '#/' + paths.join('/') },
        name
    );
}

var Breadcrumb = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Breadcrumb, _React$Component);

    function Breadcrumb() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Breadcrumb);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Breadcrumb, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            Object(_util_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(!('linkRender' in props || 'nameRender' in props), '`linkRender` and `nameRender` are removed, please use `itemRender` instead, ' + 'see: https://u.ant.design/item-render.');
        }
    }, {
        key: 'render',
        value: function render() {
            var crumbs = void 0;
            var _props = this.props,
                separator = _props.separator,
                prefixCls = _props.prefixCls,
                style = _props.style,
                className = _props.className,
                routes = _props.routes,
                _props$params = _props.params,
                params = _props$params === undefined ? {} : _props$params,
                children = _props.children,
                _props$itemRender = _props.itemRender,
                itemRender = _props$itemRender === undefined ? defaultItemRender : _props$itemRender;

            if (routes && routes.length > 0) {
                var paths = [];
                crumbs = routes.map(function (route) {
                    route.path = route.path || '';
                    var path = route.path.replace(/^\//, '');
                    Object.keys(params).forEach(function (key) {
                        path = path.replace(':' + key, params[key]);
                    });
                    if (path) {
                        paths.push(path);
                    }
                    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
                        _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_7__["default"],
                        { separator: separator, key: route.breadcrumbName || path },
                        itemRender(route, params, routes, paths)
                    );
                });
            } else if (children) {
                crumbs = react__WEBPACK_IMPORTED_MODULE_4__["Children"].map(children, function (element, index) {
                    if (!element) {
                        return element;
                    }
                    Object(_util_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(element.type && element.type.__ANT_BREADCRUMB_ITEM, 'Breadcrumb only accepts Breadcrumb.Item as it\'s children');
                    return Object(react__WEBPACK_IMPORTED_MODULE_4__["cloneElement"])(element, {
                        separator: separator,
                        key: index
                    });
                });
            }
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
                'div',
                { className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, prefixCls), style: style },
                crumbs
            );
        }
    }]);

    return Breadcrumb;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

Breadcrumb.defaultProps = {
    prefixCls: 'ant-breadcrumb',
    separator: '/'
};
Breadcrumb.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5__["string"],
    separator: prop_types__WEBPACK_IMPORTED_MODULE_5__["node"],
    routes: prop_types__WEBPACK_IMPORTED_MODULE_5__["array"],
    params: prop_types__WEBPACK_IMPORTED_MODULE_5__["object"],
    linkRender: prop_types__WEBPACK_IMPORTED_MODULE_5__["func"],
    nameRender: prop_types__WEBPACK_IMPORTED_MODULE_5__["func"]
};

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/BreadcrumbItem.js":
/*!************************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/breadcrumb/BreadcrumbItem.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);





var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var BreadcrumbItem = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(BreadcrumbItem, _React$Component);

    function BreadcrumbItem() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BreadcrumbItem);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (BreadcrumbItem.__proto__ || Object.getPrototypeOf(BreadcrumbItem)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BreadcrumbItem, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                separator = _a.separator,
                children = _a.children,
                restProps = __rest(_a, ["prefixCls", "separator", "children"]);
            var link = void 0;
            if ('href' in this.props) {
                link = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'a',
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: prefixCls + '-link' }, restProps),
                    children
                );
            } else {
                link = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'span',
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: prefixCls + '-link' }, restProps),
                    children
                );
            }
            if (children) {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'span',
                    null,
                    link,
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        'span',
                        { className: prefixCls + '-separator' },
                        separator
                    )
                );
            }
            return null;
        }
    }]);

    return BreadcrumbItem;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BreadcrumbItem);

BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
BreadcrumbItem.defaultProps = {
    prefixCls: 'ant-breadcrumb',
    separator: '/'
};
BreadcrumbItem.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6__["string"],
    separator: prop_types__WEBPACK_IMPORTED_MODULE_6__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_6__["string"], prop_types__WEBPACK_IMPORTED_MODULE_6__["element"]]),
    href: prop_types__WEBPACK_IMPORTED_MODULE_6__["string"]
};

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/Breadcrumb.js");
/* harmony import */ var _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreadcrumbItem */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/BreadcrumbItem.js");


_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"].Item = _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/index.css":
/*!**********************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/index.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

}]);
//# sourceMappingURL=276_9f604bc6c24f3924ed88.js.map