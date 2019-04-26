(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[313],{

/***/ "./app/widget/index/Modify/ModifyBindings/main.js":
/*!********************************************************!*\
  !*** ./app/widget/index/Modify/ModifyBindings/main.js ***!
  \********************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Modify/ModifyBindings/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModifyBindings = function (_React$Component) {
    _inherits(ModifyBindings, _React$Component);

    function ModifyBindings(props) {
        _classCallCheck(this, ModifyBindings);

        var _this = _possibleConstructorReturn(this, (ModifyBindings.__proto__ || Object.getPrototypeOf(ModifyBindings)).call(this, props));
        // document.title = '修改手机';


        _this.HistoryGo = function () {
            window.history.go(-1);
        };

        _this.prev = function () {
            var current = _this.state.current - 1;
            _this.setState({
                current: current,
                forgetxs: false
            });
        };

        _this.GOTOF = function () {
            window.history.go(-1);
            // window.location="/index.html#/DataInformatio"+this.props.match.params.km
        };

        _this.DidMountText = function () {
            // console.log(document.cookie.split(";")[1].split("=")[1])
            //console.log(this.props)
            _this.setState({
                Pone: _this.props.match.params.pone
            });
        };

        _this.BJBtn = function () {
            _this.setState({
                visible: true,
                confirmLoading: true
            });
        };

        _this.Trim = function (str) {

            return str.replace(/(^\s*)|(\s*$)/g, "");
        };

        _this.MEbtn = function (e) {
            _this.props.form.validateFields(function (err, values) {
                if (values.pones != undefined && values.pones != "") {
                    if (values.yzms != undefined && values.yzms != "") {} else {
                        _message3.default.error("请输入验证码！");
                    }
                } else {
                    _message3.default.error("请输入手机号！");
                }
            });
        };

        _this.MEbtns = function (e) {
            _this.props.form.validateFields(function (err, values) {
                if (values.yzmx != undefined && values.yzmx != "") {
                    if (_this.state.dataType == false) {
                        _this.setState({
                            forgetxs: true
                        });
                    }
                } else {
                    _message3.default.error("请输入验证码！");
                }
            });
        };

        _this.ForgetSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                console.log(values);
                if (_this.state.current == 0) {
                    if (values.yzmx != undefined && values.yzmx != "") {

                        _ajax2.default.post('/hcm/login/validateSMS', {
                            mobile: _this.props.match.params.pone,
                            code: values.yzmx
                        }).then(function (res) {
                            console.log(res);
                            if (res.data == true) {
                                var current = _this.state.current + 1;
                                _this.setState({
                                    current: current,
                                    forgetxs: false,
                                    shows: true
                                });
                            } else if (res.data == false) {

                                _this.setState({
                                    dataType: false
                                });
                            }
                        });
                    }
                } else if (_this.state.current == 1) {
                    if (values.pones != undefined && values.pones != "") {
                        if (values.yzms != undefined && values.yzms != "") {
                            _ajax2.default.post('/hcm/login/validateSMS', {
                                mobile: values.pones,
                                code: values.yzms
                            }).then(function (res) {
                                console.log(res);
                                if (res.data == true && res.status == 200) {
                                    _ajax2.default.post('/hcm/user/updatemobile', {
                                        mobile: values.pones
                                    }).then(function (res) {
                                        console.log(res);
                                        var current = _this.state.current + 1;
                                        _this.setState({
                                            current: current,
                                            forgetxs: false
                                        });
                                    });
                                }
                            });
                        } else {
                            // message.error("请输入验证码！")
                        }
                    } else {
                            // message.error("请输入手机号！")
                        }
                } else if (_this.state.current == 2) {}
            });
        };

        _this.getAuthCode = function () {
            _this.setState({
                forgetxs: false
            });

            _this.props.form.validateFields(function (err, values) {
                console.log(values);
                // this.setState({
                //     forgetxs:false
                // })
                if (values.pones != undefined && values.pones != "") {

                    if (_this.state.yzm == "获取验证码") {

                        if (_this.state.secondx == 59) {

                            _ajax2.default.post('/hcm/login/sendSMS', {
                                mobile: values.pones,
                                codeType: "HCM_BIND",
                                usertype: _this.props.match.params.type
                            }).then(function (res) {
                                if (res.data.status == 10000) {
                                    var siv = setInterval(function () {
                                        _this.setState(_defineProperty({
                                            yzm: _this.state.secondx-- + 's\u540E\u91CD\u65B0\u53D1\u9001',
                                            shows: false,
                                            forgetxs: false
                                        }, 'shows', false), function () {
                                            if (_this.state.secondx == 1) {
                                                clearInterval(siv);
                                                _this.setState({
                                                    yzm: "获取验证码",
                                                    shows: true,
                                                    secondx: 59
                                                });
                                            }
                                        });
                                    }, 1000);
                                } else if (res.data.status == 400) {
                                    _this.setState({
                                        forgetxs: true
                                    });
                                }
                                console.log(res);
                            });
                        } else {

                            _ajax2.default.post('/hcm/login/sendSMS', {
                                mobile: values.pones,
                                codeType: "HCM_BIND",
                                usertype: _this.props.match.params.type
                            }).then(function (res) {
                                if (res.data.status == 10000) {
                                    var siv = setInterval(function () {
                                        _this.setState({
                                            yzm: _this.state.secondx-- + 's\u540E\u91CD\u65B0\u53D1\u9001',
                                            shows: false,
                                            forgetxs: false
                                        }, function () {
                                            if (_this.state.secondx == 1) {
                                                clearInterval(siv);
                                                _this.setState({
                                                    yzm: "获取验证码",
                                                    shows: true,
                                                    secondx: 59
                                                });
                                            }
                                        });
                                    }, 1000);
                                } else if (res.data.status == 400) {
                                    _this.setState({
                                        forgetxs: true
                                    });
                                }
                                console.log(res);
                            });
                        }
                    }
                } else {
                    _message3.default.error("请输入手机号");
                }
            });
        };

        _this.getAuthCodex = function () {
            _this.setState({
                forgetxs: false
            });
            if (_this.state.yzmx == "获取验证码") {

                if (_this.state.seconds == 59) {

                    _ajax2.default.post('/hcm/login/sendSMS', {
                        mobile: _this.state.Pone,
                        codeType: "HCM_UPM",
                        usertype: _this.props.match.params.type
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            var siv = setInterval(function () {
                                _this.setState({
                                    yzmx: _this.state.seconds-- + 's\u540E\u91CD\u65B0\u53D1\u9001',
                                    shows: false,
                                    forgetxs: false
                                }, function () {
                                    if (_this.state.seconds == 1) {
                                        clearInterval(siv);
                                        _this.setState({
                                            yzmx: "获取验证码",
                                            shows: true,
                                            seconds: 59
                                        });
                                    }
                                });
                            }, 1000);
                        }
                    });
                } else {

                    _ajax2.default.post('/hcm/login/sendSMS', {
                        mobile: _this.state.Pone,
                        codeType: "HCM_UPM",
                        usertype: _this.props.match.params.type
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            var siv = setInterval(function () {
                                _this.setState({
                                    yzmx: _this.state.seconds-- + 's\u540E\u91CD\u65B0\u53D1\u9001',
                                    shows: false,
                                    forgetxs: false
                                }, function () {
                                    if (_this.state.seconds == 1) {
                                        clearInterval(siv);
                                        _this.setState({
                                            yzmx: "获取验证码",
                                            shows: true,
                                            seconds: 59
                                        });
                                    }
                                });
                            }, 1000);
                        }
                    });
                }
            }
        };

        _this.state = {
            yzm: "获取验证码",
            forgetxs: false, //输入错误提示
            shows: true,
            seconds: 59, //倒计时,
            secondx: 59,
            current: 0,
            Pone: "",
            yzmx: "获取验证码",
            dataType: true
        };

        return _this;
    }

    _createClass(ModifyBindings, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.DidMountText();
            console.log(this.props.match.params.km);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return ModifyBindings;
}(React.Component);

exports.default = _form2.default.create()(ModifyBindings);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=313_50fc46695122c464e8c2.js.map