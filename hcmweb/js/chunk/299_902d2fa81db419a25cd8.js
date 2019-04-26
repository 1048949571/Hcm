(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[299],{

/***/ "./app/widget/index/Dealers/ProductInformation/main.js":
/*!*************************************************************!*\
  !*** ./app/widget/index/Dealers/ProductInformation/main.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Dealers/ProductInformation/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductInformation = function (_React$Component) {
    _inherits(ProductInformation, _React$Component);

    function ProductInformation(props) {
        _classCallCheck(this, ProductInformation);

        document.title = '产品信息';

        var _this = _possibleConstructorReturn(this, (ProductInformation.__proto__ || Object.getPrototypeOf(ProductInformation)).call(this, props));

        _this.getByProduct = function () {
            _ajax2.default.get('/hcm/hcmCustomModel/getByProduct', {
                params: {
                    productClassifyid: _this.props.match.params.id
                }
            }).then(function (response) {
                var productList = response.data.data;
                _this.setState({
                    ProductInformation_list: _this.formAtDom(productList)
                });
            }).catch(function (error) {
                message.error(error.statusText);
            });
        };

        _this.formAtDom = function (data) {
            var arr = [{
                title: '序号',
                dataIndex: 'index',
                fixed: 'left',
                sort: 0,
                width: '100px',
                render: function render(text, record, index) {
                    return React.createElement(
                        'span',
                        { style: { width: '50px', display: 'inline-block' } },
                        index + 1
                    );
                }
            }];

            var _loop = function _loop(key) {
                data[key].data.forEach(function (item, index) {
                    if (item.isChecked) {
                        item.target = [key, index, item];
                        return arr.push({
                            title: item.fieldname,
                            dataIndex: item.fieldvalue,
                            key: item.id,
                            sort: item.sort,
                            width: '400px',
                            className: 'item-column'
                        });
                    }
                });
            };

            for (var key in data) {
                _loop(key);
            }
            arr.push({
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                sort: 999999,
                width: '150px',
                align: 'center',
                fixed: 'right',
                render: function render(text, record, index) {
                    return React.createElement(
                        'span',
                        { style: { width: "170px" } },
                        React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_history.png' }),
                        React.createElement(
                            'a',
                            { onClick: function onClick(text) {
                                    return _this.HistoryBtn(record);
                                } },
                            '\u53D8\u66F4\u5386\u53F2'
                        )
                    );
                }
            });
            return arr;
        };

        _this.HistoryBtn = function (index) {
            //变更历史
            console.log(index);
            window.location = "/index.html#/PricePublicity/ChangeHistory/Product/" + index.brand_name + "/" + index.id;
        };

        _this.handleClearIconClick = function () {
            var _this$props$form = _this.props.form,
                resetFields = _this$props$form.resetFields,
                getFieldsValue = _this$props$form.getFieldsValue;
            // console.log(getFieldsValue())
            //console.log(resetFields())

            resetFields("productName");
        };

        _this.handleClearIconClicks = function () {
            var _this$props$form2 = _this.props.form,
                resetFields = _this$props$form2.resetFields,
                getFieldsValue = _this$props$form2.getFieldsValue;

            resetFields("brandName");
        };

        _this.ForgetSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                // console.log(values)
                if (!err) {
                    console.log(_this.state.pageNo, _this.state.pageSize);
                    _ajax2.default.post('/hcm/hcmProduct/getPageBybmcid', {
                        classifyid: _this.props.match.params.id,
                        pageNo: 1,
                        pageSize: _this.state.pageSize,
                        brandName: values.brandName,
                        productName: values.productName
                    }).then(function (res) {
                        console.log(res);
                        if (res.data.status == 10000) {
                            if (res.data.data.content != "") {
                                _this.setState({
                                    data: res.data.data.content,
                                    loading: false,
                                    totalNum: res.data.data.totalElements,
                                    pageNo: res.data.data.pageNumber,
                                    pageSize: res.data.data.pageSize

                                });
                            } else {
                                _this.setState({
                                    data: "",
                                    loading: false,
                                    totalNum: "0"
                                });
                            }
                        }
                    });
                }
            });
        };

        _this.changePagination = function (current, pageSize) {
            console.log(current, pageSize);

            _ajax2.default.post('/hcm/hcmProduct/getPageBybmcid', {
                classifyid: _this.props.match.params.id,
                pageNo: current,
                pageSize: pageSize
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {

                    _this.setState({
                        totalNum: res.data.data.totalElements,
                        pageNo: res.data.data.pageNumber,
                        pageSize: res.data.data.pageSize
                    }, function () {
                        _this.fetch();
                    });
                }
            });
        };

        _this.onPaginationSize = function (current, size) {
            console.log(size);

            _ajax2.default.post('/hcm/hcmProduct/getPageBybmcid', {
                classifyid: _this.props.match.params.id,
                pageNo: current,
                pageSize: size
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    _this.setState({
                        pageNo: current,
                        pageSize: size
                    }, function () {
                        _this.fetch();
                    });
                }
            });
        };

        _this.handleTableChange = function (pagination, filters, sorter) {
            console.log(pagination, filters, sorter);
            var pager = _extends({}, _this.state.pagination);
            pager.current = pagination.current;
            _this.setState({
                pagination: pager
            });
            _this.fetch(_extends({
                results: pagination.pageSize,
                page: pagination.current,
                sortField: sorter.field,
                sortOrder: sorter.order
            }, filters));
        };

        _this.fetch = function () {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _ajax2.default.post('/hcm/productread/create', {
                classifyId: _this.props.match.params.id
            }).then(function (res) {
                console.log(res);
            });
            _this.setState({ loading: true });
            _this.setState({
                tit: _this.props.match.params.tit
            });
            _ajax2.default.post('/hcm/hcmProduct/getPageBybmcid', {
                classifyid: _this.props.match.params.id,
                pageNo: _this.state.pageNo,
                pageSize: _this.state.pageSize
            }).then(function (res) {
                console.log(res, "123321");
                if (res.data.status == 10000) {
                    if (res.data.data.content != "") {
                        console.log();
                        _this.setState({
                            data: res.data.data.content,
                            loading: false,
                            totalNum: res.data.data.totalElements,
                            pageNo: res.data.data.pageNumber,
                            pageSize: res.data.data.pageSize
                        });
                    } else {
                        _this.setState({
                            data: "",
                            loading: false,
                            totalNum: "0"
                        });
                    }
                }
            });
        };

        _this.state = {
            ProductInformation_list: [],
            data: [],
            type: "新增",
            pagination: {},
            loading: false,
            pageNo: 1,
            pageSize: 10,
            totalNum: 0,
            confirmLoading: false,
            tit: ""
        };

        return _this;
    }

    _createClass(ProductInformation, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetch();
            this.getByProduct();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return ProductInformation;
}(React.Component);

exports.default = _form2.default.create()(ProductInformation);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=299_902d2fa81db419a25cd8.js.map