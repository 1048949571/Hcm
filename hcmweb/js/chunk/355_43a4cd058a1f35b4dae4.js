(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[355],{

/***/ "./app/js/common/ajax.js":
/*!*******************************!*\
  !*** ./app/js/common/ajax.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/_axios@0.18.0@axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _qs = __webpack_require__(/*! qs */ "./node_modules/_qs@6.5.2@qs/lib/index.js");

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//https://blog.csdn.net/frank_come/article/details/80010611
_axios2.default.defaults.timeout = 600000;
// 自定义判断元素类型JS
function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
// 参数过滤函数
function filterNull(o) {
    for (var key in o) {

        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim();
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key]);
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key]);
        }
    }
    return o;
}

//整理数据
_axios2.default.defaults.transformRequest = function (data) {
    if (data) {
        data = filterNull(data);
    }
    if (data instanceof FormData) {
        return data;
    } else {
        data = _qs2.default.stringify(data);
        return data;
    }
};

// 路由请求拦截
// http request 拦截器
_axios2.default.interceptors.request.use(function (config) {
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    if (config.method == 'get') {
        config.params = filterNull(config.params);
    }
    return config;
}, function (error) {
    return Promise.reject(error.response);
});

// 路由响应拦截
// http response 拦截器
_axios2.default.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status == "503") {

        if (localStorage.logintype == 'ADMIN' || localStorage.logintype == 'KEFU') {
            window.location = "/user.html#/loginu";
            window.localStorage.clear();
            return;
        } else {
            window.location = "/user.html#/loginc";
            window.localStorage.clear();
            return;
        }
    } else {
        return Promise.reject(error.response); // 返回接口返回的错误信息
    }
});
exports.default = _axios2.default;

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

/***/ "./app/widget/wechat/Daily/main.js":
/*!*****************************************!*\
  !*** ./app/widget/wechat/Daily/main.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/wechat/Daily/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _lib = __webpack_require__(/*! ../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { LoadingModal } from '../../components/LoadingModal/LoadingModal'

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.getWechatOpenId = function (callback) {
            var code = _lib2.default.getQueryString('code');
            _ajax2.default.post('/hcm/wechat/getGZAccess_token', {
                code: code
            }).then(function (res) {
                if (res.data.openid) {
                    _this.setState({
                        openid: res.data.openid
                    }, function () {
                        callback();
                    });
                } else {
                    _message3.default.error("微信接口调用失败，请关注公众号!并从公众号内进入 ");
                }
            }).catch(function (err) {
                _message3.default.error("微信接口调用失败，请稍后再试！");
            });
        };

        _this.getData = function () {
            var _this$state = _this.state,
                platform = _this$state.platform,
                start_time = _this$state.start_time,
                end_time = _this$state.end_time,
                urlType = _this$state.urlType,
                openid = _this$state.openid;

            var url = '';
            var data = {
                start_time: moment(start_time).format('YYYY-MM-DD'),
                end_time: moment(end_time).format('YYYY-MM-DD'),
                openid: openid
            };
            if (urlType === 'tb') {
                url = '/hcm/wechat/tb_list';
                data.platform_code = platform;
            }
            if (urlType === 'jd') {
                url = '/hcm/wechat/list_jd';
            }
            if (urlType === '1688') {
                url = 'hcm/wechat/list_1688';
                data.site = platform;
            }
            LoadingModal({ bl: true });
            _ajax2.default.post(url, data).then(function (res) {
                LoadingModal({ bl: false });
                var _res$data = res.data,
                    data = _res$data.data,
                    status = _res$data.status,
                    message = _res$data.message;

                if (status === '10000') {
                    _this.setState({
                        dataList: data.map(function (v) {
                            return Object.assign({}, v, { isShowDetail: false });
                        })
                    });
                }
            }).catch(function (err) {
                LoadingModal({ bl: false });
                _message3.default.error('系统繁忙，请稍后再试！');
            });
        };

        _this.showPlatformList = function () {
            _this.setState({
                isShowPlatformList: !_this.state.isShowPlatformList
            });
        };

        _this.toggleClick = function (index, e) {
            e.stopPropagation();
            var copyList = JSON.parse(JSON.stringify(_this.state.dataList));
            copyList[index].isShowDetail = !copyList[index].isShowDetail;
            _this.setState({
                dataList: copyList
            });
        };

        _this.handleClickPlatform = function (e) {
            e.stopPropagation();
            _this.setState({
                platform: e.target.dataset.platform,
                urlType: e.target.dataset.type,
                isShowPlatformList: false
            }, function () {
                _this.getData();
            });
        };

        _this.handleConfirm = function (key, date) {
            var _this$state2 = _this.state,
                start_time = _this$state2.start_time,
                end_time = _this$state2.end_time;

            if (moment(date).valueOf() > moment().valueOf()) {
                _message3.default.warning('时间不能大于当前时间！');
                return;
            }
            if (key === 'start_time') {
                if (moment(date).valueOf() > moment(end_time).valueOf()) {
                    _message3.default.warning('开始时间不能大于结束时间！');
                    return;
                }
            }
            if (key === 'end_time') {
                if (moment(date).valueOf() < moment(start_time).valueOf()) {
                    _message3.default.warning('结束时间不能小于开始时间！');
                    return;
                }
            }
            _this.setState(_defineProperty({}, key, new Date(date)), function () {
                _this.getData();
            });
        };

        _this.state = {
            start_time: new Date(),
            end_time: new Date(),
            platform: 'taobao',
            isShowPlatformList: false,
            dataList: [],
            urlType: 'tb',
            openid: ''
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _message3.default.config({
                top: 150
            });
            this.getWechatOpenId(this.getData);
            // this.getData()
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.title = '投诉信息查询';
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=355_43a4cd058a1f35b4dae4.js.map