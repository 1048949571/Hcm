(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[300],{

/***/ "./app/widget/index/Dealers/StoreManagement/main.js":
/*!**********************************************************!*\
  !*** ./app/widget/index/Dealers/StoreManagement/main.js ***!
  \**********************************************************/
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

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Dealers/StoreManagement/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@5.0.7@react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/_redux@4.0.1@redux/es/redux.js");

var _index = __webpack_require__(/*! ../../../../js/actions/index */ "./app/js/actions/index.js");

var _dealer = __webpack_require__(/*! ../../../../js/actions/dealer */ "./app/js/actions/dealer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;
var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        collapsed: state.collapsed,
        brandList: state.dealer.brandList
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return (0, _redux.bindActionCreators)({ toggleCollapsed: _index.toggleCollapsed, getBrandList: _dealer.getBrandList, setCurrentBrand: _dealer.setCurrentBrand }, dispatch);
};
var StoreManagement = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_React$Component) {
    _inherits(StoreManagement, _React$Component);

    function StoreManagement(props) {
        _classCallCheck(this, StoreManagement);

        var _this = _possibleConstructorReturn(this, (StoreManagement.__proto__ || Object.getPrototypeOf(StoreManagement)).call(this, props));
        // document.title = '店铺管理';


        _this.ForgetSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                console.log(values);
                if (!err) {
                    if (_this.state.XZ == true) {
                        if (values.shop_type != undefined) {
                            if (values.mcids != undefined && values.mcids != "") {
                                var bmcidsX = [];
                                if (_this.state.codeValue != "" && _this.state.codeValue != undefined && values.FieldName.label != "") {
                                    if (values.shop_name != "" && values.shop_name != undefined) {
                                        if (values.shop_url != "" && values.shop_url != undefined) {
                                            if (values.shop_type != "" && values.shop_type != undefined) {
                                                if (_this.state.WangWAN != false) {

                                                    if (values.wangwang != "" && values.wangwang != undefined) {
                                                        // var reg = /^[0-9]*$/
                                                        //  if (!reg.test(values.shop_url)) {
                                                        console.log(1);
                                                        _this.setState({
                                                            XZ: false,
                                                            BJ: false
                                                        }, function () {
                                                            _ajax2.default.post('/hcm/dealerShop/Create', {
                                                                "platform_code": _this.state.codeValue,
                                                                "shop_name": values.shop_name,
                                                                "wangwang": values.wangwang,
                                                                "shop_url": values.shop_url.replace(/\+/g, "%2B").replace(/\&/g, "%26").replace(/\=/g, "%27"),
                                                                "shop_type": values.shop_type,
                                                                "status": 0,
                                                                "bmcids": values.mcids.join(",")
                                                            }).then(function (res) {
                                                                console.log(res);
                                                                if (res.data.status == 10000) {
                                                                    _this.setState({
                                                                        visible: false,
                                                                        confirmLoading: false,
                                                                        XZ: false,
                                                                        BJ: false,
                                                                        WangWAN: false
                                                                    });
                                                                    _this.StoreManagement_list();
                                                                    var _this$props$form = _this.props.form,
                                                                        resetFields = _this$props$form.resetFields,
                                                                        getFieldsValue = _this$props$form.getFieldsValue;
                                                                    //console.log(this.props)

                                                                    resetFields();
                                                                } else {
                                                                    _this.setState({
                                                                        XZ: true,
                                                                        BJ: false
                                                                    });
                                                                    // console.log(this.state.XZ)
                                                                    _message3.default.error(res.data.message);
                                                                }
                                                            });
                                                        });

                                                        // } else {
                                                        //  message.error("请输入正确格式！")
                                                        // }
                                                    } else {
                                                        _message3.default.error("请输入旺旺！");
                                                    }
                                                } else {
                                                    var reg = /^[0-9]*$/;
                                                    // if (!reg.test(values.shop_url)) {
                                                    _ajax2.default.post('/hcm/dealerShop/Create', {
                                                        "platform_code": _this.state.codeValue,
                                                        "shop_name": values.shop_name,
                                                        "wangwang": "",
                                                        "shop_url": values.shop_url.replace(/\+/g, "%2B").replace(/\&/g, "%26").replace(/\=/g, "%27"),
                                                        "shop_type": values.shop_type,
                                                        "status": 0,
                                                        "bmcids": values.mcids.join(",")
                                                    }).then(function (res) {
                                                        console.log(res);
                                                        if (res.data.status == 10000) {
                                                            _this.setState({
                                                                visible: false,
                                                                confirmLoading: false,
                                                                XZ: false,
                                                                BJ: false,
                                                                WangWAN: false
                                                            });
                                                            var _this$props$form2 = _this.props.form,
                                                                resetFields = _this$props$form2.resetFields,
                                                                getFieldsValue = _this$props$form2.getFieldsValue;
                                                            //console.log(this.props)

                                                            resetFields();
                                                            _this.StoreManagement_list();
                                                        } else {
                                                            _message3.default.error(res.data.message);
                                                        }
                                                    });
                                                    //} else {
                                                    //    message.error("请输入正确格式！")
                                                    // }
                                                }
                                            } else {
                                                _message3.default.error("请输入店铺类型名称！");
                                            }
                                        } else {
                                            _message3.default.error("请输入店铺首页地址名称！");
                                        }
                                    } else {
                                        _message3.default.error("请输入店铺名称！");
                                    }
                                } else {
                                    _message3.default.error("请选择平台！");
                                }
                            } else {
                                _message3.default.error("请选择要新增的授权品牌方！");
                            }
                        }
                    } else if (_this.state.BJ == true) {
                        if (values.shop_type != undefined) {
                            if (values.mcids != undefined && values.mcids != "") {
                                var _bmcidsX = [];
                                if (_this.state.codeValue != "" && _this.state.codeValue != undefined || values.FieldName.key != "" || values.FieldName.key != undefined) {
                                    if (values.shop_name != "" && values.shop_name != undefined) {
                                        if (values.shop_url != "" && values.shop_url != undefined) {
                                            if (values.shop_type != "") {
                                                if (_this.state.WangWAN != false) {

                                                    if (values.wangwang != "" && values.wangwang != undefined) {
                                                        _ajax2.default.post('/hcm/dealerShop/Update', {
                                                            "platform_code": values.FieldName.key,
                                                            "shop_name": values.shop_name,
                                                            "wangwang": values.wangwang,
                                                            "shop_url": values.shop_url.replace(/\+/g, "%2B").replace(/\&/g, "%26").replace(/\=/g, "%27"),
                                                            "shop_type": values.shop_type,
                                                            "id": _this.state.id,
                                                            "status": 0,
                                                            "bmcids": values.mcids.join(",")
                                                        }).then(function (res) {
                                                            if (res.data.status == 10000) {
                                                                // console.log(res,"xs")
                                                                _this.StoreManagement_list();
                                                                _this.setState({
                                                                    visible: false,
                                                                    confirmLoading: false,
                                                                    XZ: false,
                                                                    BJ: false,
                                                                    WangWAN: false
                                                                });
                                                                var _this$props$form3 = _this.props.form,
                                                                    resetFields = _this$props$form3.resetFields,
                                                                    getFieldsValue = _this$props$form3.getFieldsValue;
                                                                //console.log(this.props)

                                                                resetFields();
                                                            } else {
                                                                // this.setState({
                                                                //     XZ: false,
                                                                //     BJ: true
                                                                // })
                                                                _message3.default.error(res.data.message);
                                                            }
                                                        });
                                                    } else {
                                                        _message3.default.error("请输入旺旺！");
                                                    }
                                                } else {
                                                    _ajax2.default.post('/hcm/dealerShop/Update', {
                                                        "platform_code": values.FieldName.key,
                                                        "shop_name": values.shop_name,
                                                        "wangwang": "",
                                                        "shop_url": values.shop_url.replace(/\+/g, "%2B").replace(/\&/g, "%26").replace(/\=/g, "%27"),
                                                        "shop_type": values.shop_type,
                                                        "id": _this.state.id,
                                                        "status": 0,
                                                        "bmcids": values.mcids.join(",")
                                                    }).then(function (res) {
                                                        if (res.data.status == 10000) {
                                                            // console.log(res,"xs")
                                                            _this.StoreManagement_list();
                                                            _this.setState({
                                                                visible: false,
                                                                confirmLoading: false,
                                                                XZ: false,
                                                                BJ: false,
                                                                WangWAN: false
                                                            });
                                                            var _this$props$form4 = _this.props.form,
                                                                resetFields = _this$props$form4.resetFields,
                                                                getFieldsValue = _this$props$form4.getFieldsValue;
                                                            //console.log(this.props)

                                                            resetFields();
                                                        } else {
                                                            _message3.default.error(res.data.message);
                                                        }
                                                    });
                                                }
                                            } else {
                                                _message3.default.error("请输入店铺类型名称！");
                                            }
                                        } else {
                                            _message3.default.error("请输入店铺首页地址名称！");
                                        }
                                    } else {
                                        _message3.default.error("请输入店铺名称！");
                                    }
                                } else {
                                    _message3.default.error("请选择平台！");
                                }
                            } else {
                                _message3.default.error("请选择要编辑的授权品牌方！");
                            }
                        }
                    }
                }
            });
        };

        _this.addStore = function () {
            var _this$props$form5 = _this.props.form,
                resetFields = _this$props$form5.resetFields,
                getFieldsValue = _this$props$form5.getFieldsValue;

            resetFields();
            console.log(_this.state.FieldName);
            _this.setState({
                visible: true,
                confirmLoading: true,
                type: "新增",
                XZ: true,
                FieldName: "", //平台
                FieldID: "",
                shop_name: "", //店铺名称
                wangwang: "", //旺旺
                shop_url: "", //店铺首页地址
                shop_type: "", //店铺类型,
                mcids: [],
                bmcShopList: []
            });
        };

        _this.BJStore = function (username) {
            var arr = [];
            username.bmcShopList.forEach(function (v, i) {

                arr.push({
                    key: v.bmcid,
                    value: v.bmcname
                });
            });
            _this.setState({
                visible: true,
                confirmLoading: true,
                type: "编辑",
                BJ: true,
                FieldName: username.platform_name, //平台
                FieldID: username.platform_code,
                shop_name: username.shop_name, //店铺名称
                wangwang: username.wangwang, //旺旺
                shop_url: username.shop_url.replace(/\%2B/g, "+").replace(/\%26/g, "&").replace(/\%27/g, "="), //店铺首页地址
                shop_type: username.shop_type, //店铺类型,
                bmcShopList: username.bmcShopList,
                mcidsx: username.bmcShopList[0].bmcname, //授权品牌方username.wangwang
                mcidsID: username.bmcShopList[0].bmcid,
                id: username.id
            });
            // console.log()
            if (username.platform_name == "淘宝网" || username.platform_name == "天猫商城" || username.platform_name == "1688" || username.platform_name == "速卖通") {
                _this.setState({
                    WangWAN: true
                });
            } else {
                _this.setState({
                    WangWAN: false
                });
            }
        };

        _this.handleChange = function (value) {
            if (value.label == "淘宝网" || value.label == "天猫商城" || value.label == "1688" || value.label == "速卖通") {
                _this.setState({
                    WangWAN: true,
                    codeValue: value.key
                });
            } else {
                _this.setState({
                    WangWAN: false,
                    codeValue: value.key
                });
            }
        };

        _this.handleChangesx = function (value) {
            //授权品牌方
            _this.setState({
                mcids: value.join(",")
            });
        };

        _this.StoreManagement_list = function () {
            _ajax2.default.get('/hcm/hcmShop/findShopsByDealer').then(function (res) {
                if (res.data.status == 10000) {
                    _this.setState({
                        StoreManagement_list: res.data.data
                    });
                    console.log(_this.state.StoreManagement_list);
                }
            });
        };

        _this.BtnFun = function () {
            _this.setState({
                userName: ""
            });
        };

        _this.SearchFun = function (value) {
            _ajax2.default.get('/hcm/hcmShop/findShopsByDealer', {
                params: {
                    "shop_name": value
                }
            }).then(function (res) {
                if (res.data.status == 10000) {

                    _this.setState({
                        StoreManagement_list: res.data.data
                    });
                }
            });
        };

        _this.DeleList = function (e) {
            _ajax2.default.post('/hcm/dealerShop/Delete', {
                "id": e.target.getAttribute("id")
            }).then(function (res) {
                if (res.data.status == 10000) {
                    _this.StoreManagement_list();
                }
            });
        };

        _this.handleCancel = function () {
            var _this$props$form6 = _this.props.form,
                resetFields = _this$props$form6.resetFields,
                getFieldsValue = _this$props$form6.getFieldsValue;
            //console.log(this.props)

            resetFields();
            _this.setState({
                visible: false,
                confirmLoading: false,
                XZ: false,
                BJ: false,
                WangWAN: false
            });
        };

        _this.state = {
            type: "新增",
            codeValue: "",
            userName: '1',
            // childrenBTPl: "",
            onChangeSele: "",
            visible: false, //新增弹框
            Editvisible: false, //编辑弹框
            confirmLoading: false,
            StoreManagement_list: [],
            FieldName: "", //平台
            FieldID: "",
            shop_name: "", //店铺名称
            wangwang: "", //旺旺
            shop_url: "", //店铺首页地址
            shop_type: "", //店铺类型,
            children: [], //授权品牌方
            mcids: [],
            mcidx: [],
            mcidsID: "",
            childrenx: [],
            bmcShopList: [],
            BJ: false,
            XZ: false,
            id: "",
            StoreManagement: "", //Option平台列表
            WangWAN: false //旺旺显示隐藏
        };
        return _this;
    }

    _createClass(StoreManagement, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.StoreManagement_list();

            for (var i = 10; i < 36; i++) {

                this.state.children.push(React.createElement(
                    Option,
                    { key: i.toString(36) + i },
                    i.toString(36) + i
                ));
            }
            // ajax.post('/hcm/sys/GetList', {
            //     "dictcode": "platform"
            // }).then((res) => {
            //     if (res.data.status == 10000) {
            this.setState({
                StoreManagement: can.platform || []
            }, function () {
                _this2.state.StoreManagement.forEach(function (element, key) {
                    _this2.state.childrenx.push(React.createElement(
                        Option,
                        { key: element.id },
                        element.dictName
                    ));
                });
            });

            //     }

            // })
            // this.setState({
            //     childrenBTPl: this.props.brandList
            // })
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return StoreManagement;
}(React.Component)) || _class);
exports.default = _form2.default.create()(StoreManagement);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=300_58ac266918e47320670d.js.map