(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[253],{

/***/ "./app/widget/index/Brand/DataInformationb/main.js":
/*!*********************************************************!*\
  !*** ./app/widget/index/Brand/DataInformationb/main.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/DataInformationb/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataInformationb = function (_React$Component) {
    _inherits(DataInformationb, _React$Component);

    function DataInformationb(props) {
        _classCallCheck(this, DataInformationb);

        var _this = _possibleConstructorReturn(this, (DataInformationb.__proto__ || Object.getPrototypeOf(DataInformationb)).call(this, props));
        // document.title = '资料信息';


        _this.HistoryGo = function () {
            window.history.go(-1);
        };

        _this.JBWEIxing = function () {
            _ajax2.default.post('/hcm/user/unbindWX', {
                userid: _this.state.id,
                usertype: "c"
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
            _ajax2.default.post('/hcm/wechat/getQRcode', {
                userid: _this.state.id,
                usertype: "c"
            }).then(function (res) {
                //console.log(res)
                if (res.data.status == 10000) {
                    _this.setState({
                        ticket: "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + res.data.data
                    }, function () {

                        _this.DidMountText();
                        // let siv = setInterval(() => {
                        //     this.DidMountText()
                        // }, 51000)
                    });
                } else {
                    _message3.default.error(res.data.message);
                }
            });
        };

        _this.DidMountText = function () {
            _ajax2.default.post('/hcm/userin/selectBmainOut').then(function (res) {
                if (res.data.status == 10000) {
                    console.log(res.data.data.data);
                    var provinceApplyx = [];
                    provinceApplyx.push(res.data.data.data.province);
                    provinceApplyx.push(res.data.data.data.city);
                    provinceApplyx.push(res.data.data.data.strict);
                    console.log(provinceApplyx);
                    _this.setState({
                        address: res.data.data.data.address,
                        city: res.data.data.data.city,
                        companyname: res.data.data.data.companyname,
                        contact: res.data.data.data.contact,
                        dict_name: res.data.data.data.dict_name,
                        id: res.data.data.data.id,
                        mobile: res.data.data.data.mobile,
                        password: res.data.data.data.password,
                        province: res.data.data.data.province,
                        realname: res.data.data.data.realname,
                        status: res.data.data.data.status,
                        strict: res.data.data.data.strict,
                        username: res.data.data.data.username,
                        usertype: res.data.data.data.usertype,
                        validtime: moment(res.data.data.data.validtime).format('YYYY-MM-DD'),
                        bmcid: res.data.data.data.bmcid,
                        provinceApplys: provinceApplyx,
                        PopoWei: res.data.data.data.unionid
                    });
                    if (_this.state.PopoWei != "" && _this.state.PopoWei != undefined) {
                        _this.setState({
                            WEIXING: res.data.data.data.nickname
                        });
                    }
                }
            });
        };

        _this.phones = function () {
            //document.cookie = "usernamePone=" + this.state.username;
            window.location = "/index.html#/ModifyPassword/" + _this.state.username;
        };

        _this.password = function () {
            //document.cookie = "usernamePone=" + this.state.username;
            window.location = "/index.html#/ModifyPhone/c/" + _this.state.mobile;
        };

        _this.Bding = function () {
            window.location = "/index.html#/ModifyBindings/c/" + _this.state.mobile + "/nb";
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
                if (values.companyname != undefined && values.companyname != "") {
                    if (values.companyname.length <= 50) {
                        if (values.contact.length <= 50) {
                            var han = /[\u4E00-\u9FA5]/i;
                            if (!han.test(values.contact)) {
                                if (values.address.length <= 100) {
                                    _ajax2.default.post('/hcm/cus/updateCustomer', {
                                        bmcid: _this.state.bmcid,
                                        province: values.province[0],
                                        city: values.province[1],
                                        strict: values.province[2],
                                        address: values.address,
                                        contact: values.contact,
                                        dict_name: values.dict_name,
                                        companyname: values.companyname
                                    }).then(function (res) {
                                        if (res.data.status == 10000) {
                                            //console.log(res)
                                            _this.setState({
                                                visible: false,
                                                confirmLoading: false
                                            });
                                            _this.DidMountText();
                                        }
                                    });
                                } else {
                                    _message3.default.error("详情地址限制100个字以内！");
                                }
                            } else {
                                _message3.default.error("不可以输入汉字！");
                            }
                        } else {
                            _message3.default.error("联系方式限制50个字以内！");
                        }
                    } else {
                        _message3.default.error("公司名称限制50个字以内！");
                    }
                } else {
                    _message3.default.error("请输入公司名称！");
                }
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
            address: "",
            city: "",
            companyname: "",
            contact: "",
            dict_name: "",
            id: "",
            mobile: "",
            password: "",
            province: "",
            realname: "",
            status: "",
            strict: "",
            username: "",
            usertype: "",
            validtime: "",
            bmcid: "",
            BTNtit: "",
            provinceApplys: [],
            ticket: "",
            PopoWei: "",
            WEIXING: "未绑定"

        };

        return _this;
    }

    _createClass(DataInformationb, [{
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

    return DataInformationb;
}(React.Component);

exports.default = _form2.default.create()(DataInformationb);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=253_9b3068edf7505e19e267.js.map