(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[314],{

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

/***/ "./app/widget/index/Modify/ModifyPassword/main.js":
/*!********************************************************!*\
  !*** ./app/widget/index/Modify/ModifyPassword/main.js ***!
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Modify/ModifyPassword/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _crypto = __webpack_require__(/*! ../../../../js/common/crypto */ "./app/js/common/crypto.js");

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModifyPassword = function (_React$Component) {
    _inherits(ModifyPassword, _React$Component);

    function ModifyPassword(props) {
        _classCallCheck(this, ModifyPassword);

        var _this = _possibleConstructorReturn(this, (ModifyPassword.__proto__ || Object.getPrototypeOf(ModifyPassword)).call(this, props));
        // document.title = '修改密码';


        _this.HistoryGo = function () {
            window.history.go(-1);
        };

        _this.DidMountText = function () {
            console.log(_this.props.match.params.type);
            //const {dispatch}=this.props
            _ajax2.default.post('/hcm/userin/getByUserId').then(function (res) {
                console.log(res);
                _this.setState({
                    userName: res.username
                });
                //dispatch(getNavList(this.state.userName))
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

        _this.ForgetSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                console.log(values);
                if (values.pwd != "" && values.pwd != undefined) {
                    if (values.pwd != values.pwds) {
                        _this.setState({
                            forgetxs: true,
                            titlesx: "两次输入的密码不同，请重新输入。"
                        });
                    } else {
                        if (_this.Trim(values.pwd).length >= 6 && _this.Trim(values.pwd).length <= 16) {
                            _this.setState({
                                forgetxs: false
                            });
                            _ajax2.default.post('/hcm/user/updatePassword', {
                                "username": _this.props.match.params.type,
                                "password": _crypto2.default.Encrypt(_this.Trim(values.pwd)),
                                "oldPassword": _crypto2.default.Encrypt(_this.Trim(values.oldpwd))
                            }).then(function (res) {
                                console.log(res);
                                if (res.data.status == 10000) {
                                    //message.success("修改成功")
                                    window.history.go(-1);
                                } else {
                                    _message3.default.error(res.data.message);
                                }
                            });
                        } else {
                            _message3.default.error("密码必须在6-16位之间！");
                        }
                    }
                } else {
                    _this.setState({
                        forgetxs: true,
                        titlesx: "密码不能为空。"
                    });
                }
            });
        };

        _this.onBlur = function () {
            _this.props.form.validateFields(function (err, values) {
                // console.log(values)
                var number = new RegExp("^[0-9]*$");
                var regEn = new RegExp("^[~!@#$%^&*()_+<>?:{},.\/;'[\]]*$");
                if (values.pwd != undefined && values.pwd.length >= 6 && values.pwd != "") {
                    console.log(1);
                    if (number.test(values.pwd) || new RegExp("^\w*$").test(values.pwd) || regEn.test(values.pwd)) {
                        console.log(values.pwd);
                        _this.setState({
                            AqPercentSum: 30,
                            forgetmmClock: "red",
                            AqPercentx: "弱"
                        });
                    } else if (number.test(values.pwd) && regEn.test(values.pwd)) {
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

        _this.state = {
            forgetxs: false, //输入错误提示
            shows: true,
            AqPercentSum: 30,
            forgetmmClock: "red",
            AqPercentx: "弱",
            userName: ""
        };

        return _this;
    }

    _createClass(ModifyPassword, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.DidMountText();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return ModifyPassword;
}(React.Component);

exports.default = _form2.default.create()(ModifyPassword);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=314_e9dd8ad2e2339d53a880.js.map