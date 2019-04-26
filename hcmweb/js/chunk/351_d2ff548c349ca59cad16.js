(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[351],{

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

/***/ "./app/widget/user/LogIn/main.js":
/*!***************************************!*\
  !*** ./app/widget/user/LogIn/main.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/user/LogIn/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _lib = __webpack_require__(/*! ../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

var _crypto = __webpack_require__(/*! ../../../js/common/crypto */ "./app/js/common/crypto.js");

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
        // document.title = '登录';


        _this.getOs = function () {
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串

            var isOpera = userAgent.indexOf("Opera") > -1;

            if (isOpera) {

                return "Opera";
            }; //判断是否Opera浏览器

            if (userAgent.indexOf("Firefox") > -1) {

                return "FF";
            } //判断是否Firefox浏览器

            if (userAgent.indexOf("Chrome") > -1) {

                return "Chrome";
            }
        };

        _this.login = function () {
            if (_this.getOs() == "Chrome") {
                window.location = "/user.html?#/Forgetpwd/" + _this.state.usertypeS;
            } else if (_this.getOs() == "FF") {
                window.location = "/user.html#/Forgetpwd/" + _this.state.usertypeS;
            } else {
                window.location = "/user.html?#/Forgetpwd/" + _this.state.usertypeS;
            }
            // window.location = "/user.html?#/Forgetpwd/" + this.state.usertypeS
        };

        _this.Trim = function (str) {

            return str.replace(/(^\s*)|(\s*$)/g, "");
        };

        _this.getCookie = function (name) {
            var arr;
            var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg)) return unescape(arr[2]);else return null;
        };

        _this.checkCookie = function () {

            if (document.cookie.length > 0) {

                if (_this.getCookie("username") != null && _this.getCookie("username") != "" && _this.getCookie("username") != undefined) {
                    _this.setState({
                        userCookie: _this.getCookie("username")
                    });
                }
            }
        };

        _this.setCookie = function (cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
            var expires = "expires=" + d.toGMTString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();
            var usertype = null;
            if (window.location.hash.indexOf('loginu') > -1) {
                usertype = 'u';
            } else if (window.location.hash.indexOf('loginc') > -1) {
                usertype = 'c';
            } else {
                return;
            }
            _this.props.form.validateFields(function (err, values) {

                if (values.userName == undefined && values.password == undefined) {
                    //console.log(values)
                    _this.setState({
                        loginxs: true,
                        Errortit: "请填写用户名/密码/验证码"
                    });
                } else if (values.yzm == undefined) {
                    _this.setState({
                        loginxs: true,
                        Errortit: "验证码错误"
                    });
                } else {

                    _this.setState({ loginxs: false });
                    _ajax2.default.post('/hcm/login_login', {
                        "username": _this.Trim(values.userName),
                        "password": _crypto2.default.Encrypt(_this.Trim(values.password)),
                        "code": values.yzm,
                        "usertype": usertype,
                        "invitecode": usertype == 'c' ? _this.props.match.params.invitecode ? _this.props.match.params.invitecode : null : null
                    }).then(function (res) {
                        //console.log(res.data.data.version)
                        _this.setState({ loginxs: false });
                        if (res.data.status == 10000) {
                            var logintype = res.data.data.logintype;
                            var catid = res.data.data.catid;
                            var realname = res.data.data.realname;
                            var roleid = res.data.data.roleid;

                            // if (this.state.checked == true) {

                            var date = new Date();
                            document.cookie = "username=" + values.userName;
                            _this.setCookie("username", values.userName, 3);
                            document.cookie = "version=" + res.data.data.version;
                            _this.setCookie("version", res.data.data.version, 3);
                            window.localStorage.setItem('logintype', logintype);
                            window.localStorage.setItem('catid', catid);
                            window.localStorage.setItem('realname', realname);
                            window.localStorage.setItem('roleid', roleid);
                            if (res.data.data.catid == null && res.data.data.logintype == 'HCM') {
                                window.location = "/index.html#/CategorySelect";
                            } else {
                                window.location = "/index.html#/";
                            }
                            //res.data.data.version
                            // $.ajax({
                            //     url: '/hcm/getMenuListByUser',
                            //     method: 'GET',
                            //     dataType:'JSON',
                            //     async: false,
                            //     success:  (response)=>{
                            //         window.localStorage.setItem('menuList',JSON.stringify(response))
                            //         if (res.data.data.catid == null && res.data.data.logintype == 'HCM') {
                            //             window.location = "/index.html#/CategorySelect";
                            //         } else {
                            //             window.location = "/index.html#/";
                            //         }
                            //     },
                            //     error:  (err)=>{
                            //         if(err.status === 503){
                            //             if(localStorage.logintype == 'ADMIN'||localStorage.logintype == 'KEFU'){
                            //                 window.location = "/user.html#/loginu";
                            //             }else{
                            //                 window.location = "/user.html#/loginc";
                            //             }
                            //             window.localStorage.clear()
                            //         } 
                            //     },
                            // })
                            // } else {
                            //     window.localStorage.setItem('logintype', logintype)
                            //     window.localStorage.setItem('catid', catid)
                            //     this.setCookie("username", values.userName, 0);
                            //     window.localStorage.setItem('realname', realname)
                            //     if (res.data.data.catid == null && res.data.data.logintype == 'HCM') {

                            //         window.location = "/index.html#/CategorySelect";
                            //     } else {
                            //         window.location = "/index.html#/";
                            //     }
                            // }

                        } else {
                            _this.setState({
                                loginxs: true,
                                Errortit: res.data.message
                            });
                            _message3.default.error(res.data.message);
                        }
                    }, function () {
                        _this.setState({ loginxs: true });
                    });
                }
            });
        };

        _this.HyZ = function () {
            var data = new Date();
            _this.setState({
                urlsrc: "/hcm/code?t=" + data
            });
        };

        _this.handleClick = function () {
            //微信二维码登录
            //   window.location=" https://open.weixin.qq.com/connect/qrconnect?appid=wx60347aee47eb12bc&redirect_uri=http%3A%2F%2Fbrm.qmipr.com%2Fuser.html%23%2FLogIns&response_type=code&scope=snsapi_login&state=c#wechat_redirect"
            _this.setState({ show: !_this.state.show, loginxs: false, titX: !_this.state.titX });
        };

        _this.onFocus = function () {
            _this.setState({ Focus: true });
        };

        _this.onChange = function (e) {
            console.log(e);
            _this.setState({
                checked: e.target.checked
            });
        };

        _this.onBlur = function () {
            _this.setState({ Focus: false });
        };

        _this.onpwd = function () {
            _this.setState({ onpwd: true });
        };

        _this.onpws = function () {
            _this.setState({ onpwd: false });
        };

        _this.onyzm = function () {
            _this.setState({ onyzm: true });
        };

        _this.onyzms = function () {
            _this.setState({ onyzm: false });
        };

        _this.state = {
            show: true,
            Focus: false,
            onpwd: false,
            onyzm: false,
            loginxs: false,
            urlsrc: '/hcm/code',
            Errortit: "用户名或密码错误",
            usertypeDIs: false,
            usertypeS: "",
            userCookie: null,
            titX: true,
            checked: true //记住账号
        };
        return _this;
    }

    _createClass(Login, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window.location.hash.indexOf('loginu') > -1) {
                this.setState({
                    usertypeDIs: false,
                    usertypeS: "u"
                });
            } else if (window.location.hash.indexOf('loginc') > -1) {
                this.setState({
                    usertypeDIs: true,
                    usertypeS: "c"
                });
            } else {
                return;
            }
            this.checkCookie();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return Login;
}(React.Component);

exports.default = _form2.default.create()(Login);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=351_d2ff548c349ca59cad16.js.map