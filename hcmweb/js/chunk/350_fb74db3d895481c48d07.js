(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[350],{

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

/***/ "./app/widget/user/Forgetpwd/main.js":
/*!*******************************************!*\
  !*** ./app/widget/user/Forgetpwd/main.js ***!
  \*******************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/user/Forgetpwd/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _crypto = __webpack_require__(/*! ../../../js/common/crypto */ "./app/js/common/crypto.js");

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Forgetpwd = function (_React$Component) {
    _inherits(Forgetpwd, _React$Component);

    function Forgetpwd(props) {
        _classCallCheck(this, Forgetpwd);

        var _this = _possibleConstructorReturn(this, (Forgetpwd.__proto__ || Object.getPrototypeOf(Forgetpwd)).call(this, props));
        // document.title = '忘记密码';


        _this.state = {
            autn: '',
            lock: false
        };

        _this.ForgetSubmit = function () {
            //提交用户名
            _this.props.form.validateFields(function (err, values) {
                //console.log(this.state.usertypeID)

                if (!err) {

                    if (_this.state.current == 0 && values.userName != undefined) {

                        _ajax2.default.post('/hcm/login/getUserByNameOrMobile', {
                            "name": _this.Trim(values.userName),
                            "usertype": _this.state.usertypeID
                        }).then(function (res) {
                            console.log(res);
                            if (res.data.status == 10000) {
                                console.log(res.data.data);
                                if (res.data.data != null && res.data.data.mobile != undefined && res.data.data.mobile != "") {
                                    var current = _this.state.current + 1;
                                    _this.setState({
                                        yzm: "获取验证码",
                                        shows: true,
                                        forgetxs: false,
                                        Pone: res.data.data.mobile,
                                        current: current
                                    });
                                } else {
                                    if (res.data.data == null) {

                                        _message3.default.error("当前账号未注册！");
                                    } else {
                                        var _current = _this.state.current + 1;
                                        _this.setState({
                                            yzm: "获取验证码",
                                            shows: true,
                                            forgetxs: false,
                                            Pone: "",
                                            NOphone: true,
                                            NOphones: true,
                                            current: _current
                                        });
                                    }
                                }
                            } else {

                                _this.setState({
                                    forgetxs: true
                                });
                                console.log(1);
                            }
                        });
                    } else if (_this.state.current == 1) {
                        console.log(values.yzm, "验证码");

                        if (values.yzm != undefined) {
                            _ajax2.default.post('/hcm/login/validateSMS', {
                                "mobile": _this.state.Pone,
                                "usertype": _this.state.usertypeID,
                                "code": values.yzm
                            }).then(function (res) {
                                console.log(res);
                                if (res.data == true) {
                                    var current = _this.state.current + 1;
                                    _this.setState({
                                        AqPercent: true,
                                        forgetxs: false,
                                        current: current
                                    });
                                } else {
                                    _this.setState({
                                        forgetxs: true
                                    });
                                }
                            });
                        } else {
                            _this.setState({
                                forgetxs: true
                            });
                        }
                    } else if (_this.state.current == 2) {
                        if (values.pws != "" && values.pws != undefined && values.spws != "" && values.spws != undefined) {
                            if (_this.Trim(values.pws) == _this.Trim(values.spws)) {
                                if (_this.Trim(values.pws).length >= 6) {
                                    console.log(values.pws.length);
                                    if (_this.Trim(values.pws).length <= 16) {
                                        _ajax2.default.post('/hcm/login/updatePasswordBySMS', {
                                            "username": _this.state.Pone, //this.state.pws
                                            "password": _crypto2.default.Encrypt(_this.Trim(values.pws)),
                                            "usertype": _this.state.usertypeID
                                        }).then(function (res) {
                                            console.log(res);
                                            if (res.data.status == 10000) {
                                                var current = _this.state.current + 1;
                                                _this.setState({ current: current });
                                                _this.setState({
                                                    NODl: true,
                                                    NOphones: true
                                                });
                                            }
                                        });
                                    } else {
                                        _message3.default.error('密码最多16位');
                                    }
                                } else {

                                    _message3.default.error('密码不能少于6位');
                                }
                            } else if (_this.Trim(values.pws) == "" || _this.Trim(values.spws) == "") {
                                _this.setState({
                                    forgetxs: true
                                });
                            } else {
                                _this.setState({
                                    forgetxs: true
                                });
                            }
                        } else {
                            _message3.default.error("密码不能为空！");
                        }
                    } else {
                        _this.setState({
                            forgetxs: true
                        });
                    }
                } else {
                    _this.setState({
                        forgetxs: true
                    });
                }
            });
        };

        _this.BACK = function () {

            var current = _this.state.current - 1;
            _this.setState({
                current: current,
                NOphone: false,
                NOphones: false
            });
        };

        _this.Trim = function (str) {

            return str.replace(/(^\s*)|(\s*$)/g, "");
        };

        _this.onBlur = function () {
            _this.props.form.validateFields(function (err, values) {
                console.log(values);
                var number = new RegExp("^[0-9]*$");
                var regEn = new RegExp("^[~!@#$%^&*()_+<>?:{},.\/;'[\]]*$");
                if (values.pws != undefined && values.pws.length >= 6) {
                    if (number.test(values.pws) || new RegExp("^\w*$").test(values.pws) || regEn.test(values.pws)) {
                        _this.setState({
                            AqPercentSum: 30,
                            forgetmmClock: "red",
                            AqPercentx: "弱"
                        });
                    } else if (number.test(values.pws) && regEn.test(values.pws)) {
                        _this.setState({
                            AqPercentSum: 60,
                            forgetmmClock: "yellow",
                            AqPercentx: "中"
                        });
                    } else {
                        _this.setState({
                            AqPercentSum: 100,
                            forgetmmClock: "green",
                            AqPercentx: "强"
                        });
                    }
                } else {}
            });
        };

        _this.onChangeAutn = function (autn) {
            //console.log(autn)
            _this.setState({
                autn: autn
            });
        };

        _this.getAuthCode = function () {
            var _this$state = _this.state,
                value = _this$state.value,
                lock = _this$state.lock,
                yzm = _this$state.yzm,
                yzmpwd = _this$state.yzmpwd;

            console.log(value);
            if (!lock == true && yzmpwd == "" && _this.state.Pone != "") {
                // this.setState({
                //     forgetxs:false
                // })
                if (yzm == "获取验证码") {
                    console.log(_this.state.current);
                    console.log(_this.state.Pone);
                    if (_this.state.seconds == 59) {
                        if (_this.state.Pone != "未绑定手机号") {
                            var siv = setInterval(function () {
                                _this.setState({
                                    yzm: _this.state.seconds-- + 's\u540E\u91CD\u65B0\u53D1\u9001',
                                    shows: false,
                                    forgetxs: false
                                }, function () {
                                    if (_this.state.seconds == 1) {
                                        clearInterval(siv);
                                        _this.setState({
                                            yzm: "获取验证码",
                                            shows: true,
                                            seconds: 59
                                        });
                                    }
                                });
                            }, 1000);
                            _ajax2.default.post('/hcm/login/sendSMS', {
                                "mobile": _this.state.Pone,
                                "codeType": "HCM_PWD",
                                "usertype": _this.state.usertypeID
                            }).then(function (res) {
                                console.log(res);
                            });
                        }
                    } else {
                        if (_this.state.Pone != "未绑定手机号") {
                            var _siv = setInterval(function () {
                                _this.setState({
                                    yzm: _this.state.seconds-- + 's\u540E\u91CD\u65B0\u53D1\u9001',
                                    shows: false,
                                    forgetxs: false
                                }, function () {
                                    if (_this.state.seconds == 1) {
                                        clearInterval(_siv);
                                        _this.setState({
                                            yzm: "获取验证码",
                                            shows: true,
                                            seconds: 59
                                        });
                                    }
                                });
                            }, 1000);
                            _ajax2.default.post('/hcm/login/sendSMS', {
                                "mobile": _this.state.Pone,
                                "codeType": "HCM_PWD",
                                "usertype": _this.state.usertypeID
                            }).then(function (res) {
                                console.log(res);
                            });
                        }
                    }
                }
            }
        };

        _this.prev = function () {

            if (_this.state.current == 0) {
                var current = _this.state.current;
                _this.setState({ current: current });
            } else {
                _this.setState({
                    yzm: "获取验证码",
                    shows: true,
                    forgetxs: false,
                    AqPercent: false
                });
                var _current2 = _this.state.current - 1;
                _this.setState({ current: _current2 });
            }
        };

        _this.DL = function () {
            window.location = "/user.html#/login" + _this.state.usertypeID;
        };

        _this.GOdl = function () {
            window.location = "/user.html#/login" + _this.state.usertypeID;
        };

        _this.state = {
            current: 0,
            yzm: "获取验证码",
            yzmpwd: "",
            seconds: 59, //倒计时
            shows: true, //验证码提示
            forgetxs: false, //输入错误提示
            NOphone: false, //未绑定手机号
            NOphones: false, //上一步
            NODl: false, //
            AqPercent: false, //密码强度,
            AqPercentx: "弱",
            AqPercentSum: 0,
            forgetmmClock: "red",
            Pone: "", //手机号
            usertypeID: ""
        };
        return _this;
    }

    _createClass(Forgetpwd, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //console.log(this.props.match.params.type)

            if (this.props.match.params.type == "u") {
                this.setState({
                    usertypeID: this.props.match.params.type
                });
            } else if (this.props.match.params.type == "c") {
                this.setState({
                    usertypeID: this.props.match.params.type
                });
            } else {
                return;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return Forgetpwd;
}(React.Component);

exports.default = _form2.default.create()(Forgetpwd);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=350_fb74db3d895481c48d07.js.map