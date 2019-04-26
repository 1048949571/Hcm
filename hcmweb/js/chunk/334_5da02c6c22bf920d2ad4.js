(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[334],{

/***/ "./app/widget/index/Service/StoreSearch/main.js":
/*!******************************************************!*\
  !*** ./app/widget/index/Service/StoreSearch/main.js ***!
  \******************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Service/StoreSearch/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoreSearch = function (_React$Component) {
    _inherits(StoreSearch, _React$Component);

    function StoreSearch(props) {
        _classCallCheck(this, StoreSearch);

        var _this = _possibleConstructorReturn(this, (StoreSearch.__proto__ || Object.getPrototypeOf(StoreSearch)).call(this, props));

        _this.downLoad = function () {
            LoadingModal({ bl: true });
            _ajax2.default.post("/hcm/search/downLoad_search", {
                storeName: _this.state.storeName
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    _message3.default.success(res.data.data);
                    LoadingModal({ bl: false });
                    //  window.location.href="/hcm/search/downLoad_search?storeName="+this.state.storeName
                } else {
                    _message3.default.error(res.data.data);
                    LoadingModal({ bl: false });
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);

                LoadingModal({ bl: false });
            });
        };

        _this.store_search = function (storeName, pageNum, pageSize) {
            LoadingModal({ bl: true });
            _ajax2.default.post("/hcm/search/store_search", {
                storeName: storeName,
                pageNum: pageNum,
                pageSize: pageSize
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    if (res.data.data.content != "" && res.data.data.content != null) {

                        _this.setState({
                            data: res.data.data.content,
                            totalNum: res.data.data.totalElements,
                            pageSize: res.data.data.pageSize,
                            pageNo: res.data.data.pageNumber,
                            loading: false
                        });
                    } else {
                        _this.setState({
                            loading: false,
                            data: []
                        });

                        _message3.default.success(res.data.data);
                    }
                    LoadingModal({ bl: false });
                } else {
                    _this.setState({
                        loading: false,
                        data: []
                    });
                    _message3.default.error(res.data.message);
                    LoadingModal({ bl: false });
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
                _this.setState({
                    loading: false,
                    data: []
                });
                LoadingModal({ bl: false });
            });
        };

        _this.ForgetSubmit = function (e) {
            e.preventDefault();
            _this.setState({
                loading: true,
                titButton: "",
                pageSize: 10,
                pageNo: 1,
                totalNum: 0
            }, function () {
                _this.props.form.validateFields(function (err, values) {
                    if (!err) {
                        _this.setState({
                            storeName: values.DPandWW_name
                        }, function () {
                            _this.store_search(_this.state.storeName, _this.state.pageNo, _this.state.pageSize);
                        });
                    }
                });
            });
        };

        _this.changePagination = function (a, b) {

            _this.setState({
                loading: true,
                pageSize: b,
                pageNo: a,
                titButton: ""
            }, function () {
                _this.store_search(_this.state.storeName, _this.state.pageNo, _this.state.pageSize);
            });
        };

        _this.onPaginationSize = function (a, b) {
            _this.setState({
                loading: true,
                pageSize: b,
                pageNo: a,
                titButton: ""
            }, function () {
                _this.store_search(_this.state.storeName, _this.state.pageNo, _this.state.pageSize);
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
                    React.createElement('img', { style: { width: "50px", float: "left", height: "60px", marginTop: "10px" }, src: record.mainPicUrl, alt: '' }),
                    React.createElement(
                        'a',
                        { href: record.auctionURL, style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden", lineHeight: "20px", marginTop: "10px" }, target: '_blank' },
                        record.itemTitle
                    )
                );
            }
        }, {
            title: '价格',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.priceShow.unit,
                    ' ',
                    record.priceShow.price
                );
            }
        }, {
            title: '30天销量',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.totalSoldQuantity
                );
            }
        }, {
            title: '优惠活动',
            render: function render(content, record, index) {
                return React.createElement('span', { key: index });
            }
        }];
        _this.state = {
            pageSize: 10,
            pageNo: 1,
            totalNum: 0,
            loading: false,
            data: [],
            ProductInformation_list: columns,
            storeName: "",
            titButton: ""
        };

        return _this;
    }

    _createClass(StoreSearch, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // this.setState({
            //     loading: true
            // },()=>{
            //     this.store_search(this.state.storeName,this.state.pageNo,this.state.pageSize)
            // })

        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return StoreSearch;
}(React.Component);

exports.default = _form2.default.create()(StoreSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=334_5da02c6c22bf920d2ad4.js.map