(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[296],{

/***/ "./app/widget/index/Dealers/DataInformation/main.js":
/*!**********************************************************!*\
  !*** ./app/widget/index/Dealers/DataInformation/main.js ***!
  \**********************************************************/
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

var _dec, _class;

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Dealers/DataInformation/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@5.0.7@react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapState = function mapState(state) {
    return {
        currentBrand: state.dealer.currentBrand
    };
};
var DataInformation = (_dec = (0, _reactRedux.connect)(mapState), _dec(_class = function (_React$Component) {
    _inherits(DataInformation, _React$Component);

    function DataInformation(props) {
        _classCallCheck(this, DataInformation);

        var _this = _possibleConstructorReturn(this, (DataInformation.__proto__ || Object.getPrototypeOf(DataInformation)).call(this, props));
        // document.title = '资料信息';


        _this.ModifyPhone = function () {
            if (_this.state.mobile != "" && _this.state.mobile != undefined) {
                window.location = "/index.html#/ModifyBindings/c/" + _this.state.mobile + "/n";
            } else {
                window.location = "/index.html#/ModifyPhone/c/" + _this.state.mobile;
            }
        };

        _this.HistoryGo = function () {
            window.history.go(-1);
        };

        _this.JBWEIxing = function () {
            _ajax2.default.post('/hcm/user/unbindWX', {
                userid: _this.state.userid,
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
            console.log(1);
            _ajax2.default.post('/hcm/wechat/getQRcode', {
                userid: _this.state.userid,
                usertype: "c"
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

            _ajax2.default.post('/hcm/dealer/findById').then(function (res) {
                if (res.data.status == 10000) {
                    if (res.data.data != null && res.data.data != undefined) {
                        console.log(res);
                        var provinceApplyb = [];
                        provinceApplyb.push(res.data.data.province);
                        provinceApplyb.push(res.data.data.city);
                        provinceApplyb.push(res.data.data.strict);
                        // console.log(provinceApplyb)
                        _this.setState({
                            address: res.data.data.address,
                            approve_date: moment(res.data.data.approve_date).format('YYYY-MM-DD'),
                            brand_take_people: res.data.data.brand_take_people,
                            city: res.data.data.city,
                            contact: res.data.data.contact,
                            creditscore: res.data.data.creditscore,
                            dealername: res.data.data.dealername,
                            dutynumber: res.data.data.dutynumber,
                            memo_dealername: res.data.data.memo_dealername,
                            authorize_num: res.data.data.authorize_num,
                            id: res.data.data.id,
                            userid: res.data.data.userid,
                            match_status: res.data.data.match_status,
                            mobile: res.data.data.mobile,
                            province: res.data.data.province,
                            source: res.data.data.source,
                            take_people: res.data.data.take_people,
                            username: res.data.data.username,
                            realname: res.data.data.realname,
                            strict: res.data.data.strict,
                            usertype: res.data.data.usertype,
                            provinceApply: provinceApplyb,
                            PopoWei: res.data.data.unionid,
                            authorize_start: moment(res.data.data.authorize_start).format('YYYY-MM-DD'),
                            authorize_end: moment(res.data.data.authorize_end).format('YYYY-MM-DD')
                        });
                        if (_this.state.PopoWei != "" && _this.state.PopoWei != undefined) {
                            _this.setState({
                                WEIXING: res.data.data.nickname
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
                if (values.province[0] != "" && values.province[0] != undefined) {
                    if (values.contact != "" && values.contact != undefined) {
                        if (values.take_people != "" && values.take_people != undefined) {
                            if (values.contact.length <= 50) {
                                var han = /[\u4E00-\u9FA5]/i;
                                if (!han.test(values.contact)) {
                                    if (values.take_people.length <= 32) {
                                        if (values.address.length <= 100) {
                                            _ajax2.default.post('/hcm/dealer/updateDealer', {
                                                id: _this.state.id,
                                                province: values.province[0],
                                                city: values.province[1],
                                                strict: values.province[2],
                                                address: values.address,
                                                contact: values.contact,
                                                takePeople: values.take_people
                                            }).then(function (res) {
                                                if (res.data.status == 10000) {
                                                    console.log(res);
                                                    _this.setState({
                                                        visible: false,
                                                        confirmLoading: false
                                                    });
                                                    _this.DidMountText();
                                                } else if (res.data.status == 12003) {
                                                    _message3.default.error(res.data.message);
                                                }
                                            });
                                        } else {
                                            _message3.default.error("详情地址限制100个字符以内！");
                                        }
                                    } else {
                                        _message3.default.error("对接人限制32个字符以内！");
                                    }
                                } else {
                                    _message3.default.error("联系方式不可以输入汉字！");
                                }
                            } else {
                                _message3.default.error("联系方式限制50个字以内！");
                            }
                        } else {
                            _message3.default.error("请输入对接人！");
                        }
                    } else {
                        _message3.default.error(" 请输入联系方式！");
                    }
                } else {
                    _message3.default.error(" 请输入所在地区！");
                }
            });
        };

        _this.ModifyPassword = function () {

            window.location = "/index.html#/ModifyPassword/" + _this.state.username;
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
            PoneBtn: "",
            address: "",
            approve_date: "",
            brand_take_people: "",
            city: "",
            contact: "",
            creditscore: "",
            dealername: "",
            dutynumber: "",
            id: "",
            userid: "",
            match_status: "",
            mobile: "",
            province: "",
            source: "",
            take_people: "",
            username: "",
            strict: "",
            BTNtit: "",
            usertype: "",
            provinceApply: [],
            authorize_start: "",
            authorize_end: "",
            memo_dealername: "",
            authorize_num: "",
            ticket: "",
            realname: "",
            PopoWei: "",
            WEIXING: "未绑定"
        };

        return _this;
    }

    _createClass(DataInformation, [{
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

    return DataInformation;
}(React.Component)) || _class);
exports.default = _form2.default.create()(DataInformation);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=296_60b12ae9654080fdff73.js.map