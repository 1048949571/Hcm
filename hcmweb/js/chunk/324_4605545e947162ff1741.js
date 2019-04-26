(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[324],{

/***/ "./app/widget/index/Service/DataInformationx/main.js":
/*!***********************************************************!*\
  !*** ./app/widget/index/Service/DataInformationx/main.js ***!
  \***********************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Service/DataInformationx/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataInformationx = function (_React$Component) {
    _inherits(DataInformationx, _React$Component);

    function DataInformationx(props) {
        _classCallCheck(this, DataInformationx);

        var _this = _possibleConstructorReturn(this, (DataInformationx.__proto__ || Object.getPrototypeOf(DataInformationx)).call(this, props));
        // document.title = '资料信息';


        _this.HistoryGo = function () {
            window.history.go(-1);
        };

        _this.password = function () {
            //document.cookie = "usernamePone=" + this.state.username;
            window.location = "/index.html#/ModifyPassword/" + _this.state.username;
        };

        _this.MePhone = function () {
            if (_this.state.mobile != "" && _this.state.mobile != undefined) {

                window.location = "/index.html#/ModifyBindings/u/" + _this.state.mobile + "/nx";
            } else {
                window.location = "/index.html#/ModifyPhone/u/" + _this.state.mobile;
            }
        };

        _this.JBWEIxing = function () {
            _ajax2.default.post('/hcm/user/unbindWX', {
                userid: _this.state.id,
                usertype: "u"
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    _this.setState({
                        WEIXING: "未绑定"
                    }, function () {
                        _this.DidMountText();
                    });
                } else {
                    _message3.default.error(res.data.message);
                }
            });
        };

        _this.BDWEIxing = function () {
            console.log(1);
            _ajax2.default.post('/hcm/wechat/getQRcode', {
                userid: _this.state.id,
                usertype: "u"
            }).then(function (res) {
                //console.log(res)
                if (res.data.status == 10000) {
                    _this.setState({
                        ticket: "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + res.data.data
                    }, function () {
                        _this.DidMountText();
                    });
                } else {
                    _message3.default.error(res.data.message);
                }
            });
        };

        _this.DidMountText = function () {

            _ajax2.default.post('/hcm/userin/selectBmainIn').then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    if (res.data.data != null && res.data.data != undefined) {
                        _this.setState({
                            realname: res.data.data.data.kefu.realname, //名字
                            username: res.data.data.data.kefu.username, //用户名
                            usertype: res.data.data.data.kefu.usertype,
                            mobile: res.data.data.data.kefu.mobile, //手机号
                            count: res.data.data.data.count, //
                            data: res.data.data.data.bc,
                            id: res.data.data.data.kefu.id,
                            PopoWei: res.data.data.data.kefu.unionid
                        });
                        console.log(res);
                        if (_this.state.PopoWei != "" && _this.state.PopoWei != undefined) {
                            _this.setState({
                                WEIXING: res.data.data.data.kefu.nickname
                            });
                        }
                        if (_this.state.mobile != "" && _this.state.mobile != undefined) {
                            _this.setState({
                                BTNtit: "修改绑定>"
                            });
                        } else {
                            _this.setState({
                                BTNtit: "绑定手机>"
                            });
                        }
                    } else {
                        _this.setState({
                            BTNtit: "绑定手机>"
                        });
                    }
                } else {
                    _this.setState({
                        BTNtit: "绑定手机>"
                    });
                }
            });
        };

        _this.BJBtn = function () {
            _this.setState({
                visible: true,
                confirmLoading: true
            });
        };

        _this.ForgetSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                console.log(values);
            });
        };

        _this.handleCancel = function () {
            _this.setState({
                visible: false,
                confirmLoading: false
            });
        };

        _this.state = {
            visible: false, //新增弹框
            confirmLoading: false,
            realname: "", //名字
            username: "", //用户名
            mobile: "", //手机号
            count: "", //
            data: "",
            usertype: "",
            BTNtit: "",
            WEIXING: "未绑定",
            PopoWei: "",
            ticket: "",
            id: ""
        };

        return _this;
    }

    _createClass(DataInformationx, [{
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

    return DataInformationx;
}(React.Component);

exports.default = _form2.default.create()(DataInformationx);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=324_4605545e947162ff1741.js.map