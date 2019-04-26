(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[329],{

/***/ "./app/widget/index/Service/PlatformRetrieval/main.js":
/*!************************************************************!*\
  !*** ./app/widget/index/Service/PlatformRetrieval/main.js ***!
  \************************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Service/PlatformRetrieval/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlatformRetrieval = function (_React$Component) {
    _inherits(PlatformRetrieval, _React$Component);

    function PlatformRetrieval(props) {
        _classCallCheck(this, PlatformRetrieval);

        var _this = _possibleConstructorReturn(this, (PlatformRetrieval.__proto__ || Object.getPrototypeOf(PlatformRetrieval)).call(this, props));

        _this.JINGPINGList = function () {
            _ajax2.default.post('/hcm/search/jingPinBrandList', {}).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    if (res.data.data != "" && res.data.data != []) {

                        _this.setState({
                            jingPinBrandList: res.data.data,
                            bid: res.data.data[0].bid
                        }, function () {
                            _this.itemlist(_this.state.pageNo, _this.state.pageSize, _this.state.type, _this.state.title, _this.state.bid, _this.state.brand_type);
                        });
                    }
                } else {
                    _message3.default.error(res.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.JPList = function (style) {
            var _this$props$form = _this.props.form,
                resetFields = _this$props$form.resetFields,
                getFieldsValue = _this$props$form.getFieldsValue;

            resetFields("DPandWW_name");

            _this.setState({
                bid: style,
                pageSize: 10,
                pageNo: 1,
                totalNum: 0,
                loading: true,
                data: [],
                title: ""
            }, function () {
                _this.itemlist(_this.state.pageNo, _this.state.pageSize, _this.state.type, _this.state.title, _this.state.bid, _this.state.brand_type);
            });
        };

        _this.handleOk = function () {
            _this.setState({
                visible: false
            });
        };

        _this.handleCancels = function () {
            _this.setState({
                visible: false
            });
        };

        _this.down_itemlist = function () {
            _ajax2.default.post("/hcm/search/down_itemlist", {
                pageNo: _this.state.pageNo,
                pageSize: _this.state.pageSize,
                type: _this.state.type, //taobao,jd,pdd,tianmao
                title: _this.state.title // 关键字
            }).then(function (res) {

                if (res.status == 200) {
                    window.location.href = "/hcm/search/down_itemlist?type=" + _this.state.type + "&title=" + _this.state.title + "&pageSize=" + _this.state.pageSize + "&pageNo=" + _this.state.pageNo;
                }
                _this.setState({
                    visible: true
                });
            });
        };

        _this.itemlist = function (pageNo, pageSize, type, title, bid, brand_type) {
            LoadingModal({ bl: true });
            _ajax2.default.post("/hcm/search/itemlist", {
                pageNo: pageNo,
                pageSize: pageSize,
                type: type, //taobao,jd,pdd,tianmao
                title: title, // 关键字
                bid: bid,
                brand_type: brand_type
            }).then(function (res) {
                if (res.data.status == 10000) {
                    console.log(res);
                    _this.setState({
                        data: res.data.data.content ? res.data.data.content : [],
                        pageSize: res.data.data.pageSize,
                        pageNo: res.data.data.pageNumber,
                        totalNum: res.data.data.totalElements,
                        loading: false
                    });
                    LoadingModal({ bl: false });
                } else {
                    _this.setState({

                        loading: false
                    });
                    LoadingModal({ bl: false });
                    _message3.default.error(res.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
                _this.setState({
                    loading: false
                });
                LoadingModal({ bl: false });
            });
        };

        _this.onChange = function (checkedValues) {
            console.log('checked = ', checkedValues);
            _this.setState({
                type: checkedValues.join(","),
                loading: true
            }, function () {
                _this.itemlist(_this.state.pageNo, _this.state.pageSize, _this.state.type, _this.state.title, _this.state.bid, _this.state.brand_type);
            });
        };

        _this.ForgetSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    _this.setState({
                        title: values.DPandWW_name,
                        data: [],
                        loading: true,
                        pageSize: 10,
                        pageNo: 1,
                        totalNum: 0
                    }, function () {
                        _this.itemlist(_this.state.pageNo, _this.state.pageSize, _this.state.type, _this.state.title, _this.state.bid, _this.state.brand_type);
                    });
                }
            });
        };

        _this.styleSXbtn = function (num) {
            var _this$props$form2 = _this.props.form,
                resetFields = _this$props$form2.resetFields,
                getFieldsValue = _this$props$form2.getFieldsValue;

            resetFields("DPandWW_name");
            _this.setState({
                styleSX: num,
                pageSize: 10,
                pageNo: 1,
                totalNum: 0,
                loading: true,
                data: [],
                title: ""
            }, function () {
                if (num == "淘宝天猫") {
                    _this.setState({
                        type: "TB,TM"
                    }, function () {
                        _this.itemlist(_this.state.pageNo, _this.state.pageSize, _this.state.type, _this.state.title, _this.state.bid, _this.state.brand_type);
                    });
                } else if (num == "1688网") {
                    _this.setState({
                        type: "1688"
                    }, function () {
                        _this.itemlist(_this.state.pageNo, _this.state.pageSize, _this.state.type, _this.state.title, _this.state.bid, _this.state.brand_type);
                    });
                } else if (num == "闲鱼") {
                    _this.setState({
                        type: "XY"
                    }, function () {
                        _this.itemlist(_this.state.pageNo, _this.state.pageSize, _this.state.type, _this.state.title, _this.state.bid, _this.state.brand_type);
                    });
                } else if (num == "拼多多") {
                    _this.setState({
                        type: "PDD"
                    }, function () {
                        _this.itemlist(_this.state.pageNo, _this.state.pageSize, _this.state.type, _this.state.title, _this.state.bid, _this.state.brand_type);
                    });
                } else if (num == "京东商城") {
                    _this.setState({
                        type: "JD"
                    }, function () {
                        _this.itemlist(_this.state.pageNo, _this.state.pageSize, _this.state.type, _this.state.title, _this.state.bid, _this.state.brand_type);
                    });
                } else if (num == "苏宁易购") {
                    _this.setState({
                        type: "SN"
                    }, function () {
                        _this.itemlist(_this.state.pageNo, _this.state.pageSize, _this.state.type, _this.state.title, _this.state.bid, _this.state.brand_type);
                    });
                } else if (num == "当当网") {
                    _this.setState({
                        type: "DD"
                    }, function () {
                        _this.itemlist(_this.state.pageNo, _this.state.pageSize, _this.state.type, _this.state.title, _this.state.bid, _this.state.brand_type);
                    });
                } else if (num == "唯品会") {
                    _this.setState({
                        type: "WPH"
                    }, function () {
                        _this.itemlist(_this.state.pageNo, _this.state.pageSize, _this.state.type, _this.state.title, _this.state.bid, _this.state.brand_type);
                    });
                }
            });
        };

        _this.changePagination = function (a, b) {
            _this.setState({
                pageNo: a,
                loading: true
            }, function () {
                _this.itemlist(_this.state.pageNo, _this.state.pageSize, _this.state.type, _this.state.title, _this.state.bid, _this.state.brand_type);
            });
        };

        var columns = [{
            title: '序号',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    index + 1
                );
            }
        }, {
            title: '商品信息',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    React.createElement('img', { style: { width: "50px", float: "left", marginTop: "10px", height: "60px" }, src: record.pic_url, alt: '' }),
                    React.createElement(
                        'a',
                        { href: record.item_url, target: '_blank', style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden", lineHeight: "20px", marginTop: "10px", height: "40px" } },
                        record.title
                    )
                );
            }
        }, {
            title: '旺旺名称',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.nickname,
                    React.createElement(
                        'h4',
                        { style: { marginTop: "20px" } },
                        React.createElement(
                            'b',
                            { className: 'TBBB' },
                            record.platform
                        )
                    )
                );
            }
        }, {
            title: '价格',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    '\uFFE5',
                    record.discount_price
                );
            }
        }, {
            title: '30天销量',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.salesvolume
                );
            }
        }, {
            title: '优惠活动',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.promotions
                );
            }
        }, {
            title: '发货地址',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.area
                );
            }
        }];
        var JDcolumns = [{
            title: '序号',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    index + 1
                );
            }
        }, {
            title: '商品信息',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    React.createElement('img', { style: { width: "50px", float: "left", marginTop: "10px", height: "60px" }, src: record.pic_url, alt: '' }),
                    React.createElement(
                        'a',
                        { href: record.item_url, target: '_blank', style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden", lineHeight: "20px", marginTop: "10px", height: "40px" } },
                        record.title
                    )
                );
            }
        }, {
            title: '店铺名称',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.nickname
                );
            }
        }, {
            title: "京东价",
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    '\uFFE5',
                    record.price
                );
            }
        }, {
            title: '评价数',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.ratenum
                );
            }
        }, {
            title: '促销',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index, style: { display: "inline-block", height: "45px", overflow: "hidden", width: "200px" } },
                    record.promotions
                );
            }
        }, {
            title: '优惠券',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.lingquan
                );
            }
        }];
        var DDcolumns = [{
            title: '序号',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    index + 1
                );
            }
        }, {
            title: '商品信息',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    React.createElement('img', { style: { width: "50px", float: "left", marginTop: "10px", height: "60px" }, src: record.pic_url, alt: '' }),
                    React.createElement(
                        'a',
                        { href: record.item_url, target: '_blank', style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden", lineHeight: "20px", marginTop: "10px", height: "40px" } },
                        record.title
                    )
                );
            }
        }, {
            title: '店铺名称',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.nickname
                );
            }
        }, {
            title: "当当价",
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    '\uFFE5',
                    record.dd_price
                );
            }
        }, {
            title: '评价数',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.ratenum
                );
            }
        }, {
            title: '促销',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index, style: { display: "inline-block", height: "45px", overflow: "hidden", width: "200px" } },
                    record.promotions
                );
            }
        }, {
            title: '优惠券',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.coupons
                );
            }
        }];
        var SNcolumns = [{
            title: '序号',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    index + 1
                );
            }
        }, {
            title: '商品信息',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    React.createElement('img', { style: { width: "50px", float: "left", marginTop: "10px", height: "60px" }, src: record.pic_url, alt: '' }),
                    React.createElement(
                        'a',
                        { href: record.item_url, target: '_blank', style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden", lineHeight: "20px", marginTop: "10px", height: "40px" } },
                        record.title
                    )
                );
            }
        }, {
            title: '店铺名称',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.nickname
                );
            }
        }, {
            title: "价格",
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    '\uFFE5',
                    record.discount_price
                );
            }
        }, {
            title: '评价数',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.ratenum
                );
            }
        }, {
            title: '优惠信息',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.promotions
                );
            }
        }];
        var PDDcolumns = [{
            title: '序号',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    index + 1
                );
            }
        }, {
            title: '商品信息',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    React.createElement('img', { style: { width: "50px", float: "left", marginTop: "10px", height: "60px" }, src: record.pic_url, alt: '' }),
                    React.createElement(
                        'a',
                        { href: record.item_url, target: '_blank', style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden", lineHeight: "20px", marginTop: "10px", height: "40px" } },
                        record.title
                    )
                );
            }
        }, {
            title: '店铺名称',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.nickname
                );
            }
        }, {
            title: '拼单价',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    '\uFFE5',
                    record.vip_price
                );
            }
        }, {
            title: '已拼件数',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.salesvolume
                );
            }
        }, {
            title: '评价数',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.ratenum
                );
            }
        }];
        var OneSixcolumns = [{
            title: '序号',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    index + 1
                );
            }
        }, {
            title: '商品信息',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    React.createElement('img', { style: { width: "50px", float: "left", marginTop: "10px", height: "60px" }, src: record.pic_url, alt: '' }),
                    React.createElement(
                        'a',
                        { href: record.item_url, target: '_blank', style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden", lineHeight: "20px", marginTop: "10px", height: "40px" } },
                        record.title
                    )
                );
            }
        }, {
            title: '公司名称',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.companyname
                );
            }
        }, {
            title: '价格',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    '\uFFE5',
                    record.firstgearprice
                );
            }
        }, {
            title: '30天成交数',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.salesvolume
                );
            }
        }, {
            title: '发货地',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.itemarea
                );
            }
        }];
        var WPHcolumns = [{
            title: '序号',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    index + 1
                );
            }
        }, {
            title: '商品信息',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    React.createElement('img', { style: { width: "50px", float: "left", marginTop: "10px", height: "60px" }, src: record.pic_url, alt: '' }),
                    React.createElement(
                        'a',
                        { href: record.item_url, target: '_blank', style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden", lineHeight: "20px", marginTop: "10px", height: "40px" } },
                        record.title
                    )
                );
            }
        }, {
            title: '店铺名称',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.nickname
                );
            }
        }, {
            title: '价格',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    '\uFFE5',
                    record.discount_price
                );
            }
        }, {
            title: '原价',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.price
                );
            }
        }, {
            title: '折扣率',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.discount
                );
            }
        }, {
            title: '优惠信息',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.promotions
                );
            }
        }];
        var XYcolumns = [{
            title: '序号',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    index + 1
                );
            }
        }, {
            title: '商品信息',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    React.createElement('img', { style: { width: "50px", float: "left", marginTop: "10px", height: "60px" }, src: record.pic_url, alt: '' }),
                    React.createElement(
                        'a',
                        { href: record.item_url, target: '_blank', style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden", lineHeight: "20px", marginTop: "10px", height: "40px" } },
                        record.title
                    )
                );
            }
        }, {
            title: '旺旺名称',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.nickname
                );
            }
        }, {
            title: '价格',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    '\uFFE5',
                    record.price
                );
            }
        }, {
            title: '所在地',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.itemarea
                );
            }
        }];
        _this.state = {
            pageSize: 10,
            pageNo: 1,
            totalNum: 0,
            loading: false,
            data: [],
            styleSX: "淘宝天猫",
            ProductInformation_list: columns,
            JD_list: JDcolumns,
            DD_list: DDcolumns,
            PDD_list: PDDcolumns,
            SN_list: SNcolumns,
            OneSix_list: OneSixcolumns,
            WPH_list: WPHcolumns,
            XY_list: XYcolumns,
            title: "",
            type: "TB,TM",
            TBTM: ["TB", "TM"],
            visible: false,
            jingPinBrandList: [],
            bid: "",
            brand_type: "",
            PlatformRetrievalJS: ""
        };

        return _this;
    }

    _createClass(PlatformRetrieval, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.setState({
                loading: true
            }, function () {
                if (_this2.props.match.path == "/PlatformRetrievalJS") {
                    _this2.setState({
                        brand_type: "jingpin",
                        PlatformRetrievalJS: "PlatformRetrievalJS"
                    }, function () {
                        _this2.JINGPINGList();
                    });
                } else {
                    _this2.setState({
                        brand_type: "",
                        PlatformRetrievalJS: ""
                    }, function () {
                        _this2.itemlist(_this2.state.pageNo, _this2.state.pageSize, _this2.state.type, _this2.state.title, _this2.state.bid, _this2.state.brand_type);
                    });
                }
            });
        }
    }, {
        key: 'render',

        // onPaginationSize = (a,b) => {
        //     this.setState({
        //         pageNo:a,
        //         pageSize:b,
        //         loading:true
        //     },()=>{
        //         this.itemlist(this.state.pageNo,this.state.pageSize,this.state.type,this.state.title,this.state.bid,this.state.brand_type)

        //     })
        // }
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return PlatformRetrieval;
}(React.Component);

exports.default = _form2.default.create()(PlatformRetrieval);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=329_2f1cb2d728958a595394.js.map