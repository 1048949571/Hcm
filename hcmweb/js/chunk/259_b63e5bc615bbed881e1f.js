(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[259],{

/***/ "./app/widget/index/Brand/MonitorInfo/main.js":
/*!****************************************************!*\
  !*** ./app/widget/index/Brand/MonitorInfo/main.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment, $) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/MonitorInfo/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.getList = function () {
            var _this$state = _this.state,
                date = _this$state.date,
                pageNo = _this$state.pageNo,
                pageSize = _this$state.pageSize,
                targetItem = _this$state.targetItem;

            LoadingModal({ bl: true });
            _ajax2.default.get('/hcm/priceMonitor/Detail', {
                params: {
                    pageNo: pageNo,
                    pageSize: pageSize,
                    price_type: targetItem.plat_code,
                    id: _this.props.match.params.id,
                    my_date: moment(date).format('YYYY-MM-DD')
                }
            }).then(function (response) {
                LoadingModal({ bl: false });
                if (response.data.status == '10000') {

                    _this.setState({
                        pageNo: response.data.data.pageNumber,
                        pageSize: response.data.data.pageSize,
                        totalNum: response.data.data.totalElements,
                        dataList: response.data.data.content,
                        priceList: response.data.data.obj,
                        targetItem: JSON.stringify(targetItem) == '{}' ? response.data.data.obj[0] : targetItem
                    });
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                LoadingModal({ bl: false });
                _message3.default.error(error.statusText);
            });
        };

        _this.editDate = function (e) {
            _this.setState({
                date: e,
                pageNo: 1
            }, function () {
                _this.getList();
            });
        };

        _this.getClassInfo = function () {
            _ajax2.default.get('/hcm/priceMonitor/DetailCount', {
                params: {
                    id: _this.props.match.params.id
                }
            }).then(function (response) {
                _this.setState({
                    classInfo: response.data.data
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.changePagination = function (page, pageSize) {
            _this.setState({
                pageNo: page,
                pageSize: pageSize
            }, function () {
                _this.getList();
            });
        };

        _this.onPaginationSize = function (current, size) {
            _this.setState({
                pageNo: 1,
                pageSize: size
            }, function () {
                _this.getList();
            });
        };

        _this.onScrollLeft = function (bl) {
            var num = $('.price-item').length * 240;
            var left = $('.price-list').scrollLeft();
            $('.price-list').stop(true, true);
            if (bl) {
                $('.price-list').animate({ scrollLeft: left + 900 }, 300);
            } else {
                $('.price-list').animate({ scrollLeft: left - 900 }, 300);
            }
        };

        _this.onSelectItem = function (item) {
            _this.setState({
                pageNo: 1,
                pageSize: 10,
                targetItem: item,
                dataList: []
            }, function () {
                _this.getList();
            });
        };

        _this.onExpand = function (expanded, record) {
            if (expanded) {
                var dataList = _this.state.dataList;
                var num = null;
                dataList.forEach(function (item, index) {
                    if (item.num_iid == record.num_iid) {
                        num = index;
                    }
                });
                var targetItem = _this.state.targetItem;

                _ajax2.default.get('/hcm/priceMonitor/DetailExp', {
                    params: {
                        shopmainid: record.shopmainid,
                        price_type: record.platform,
                        id: _this.props.match.params.id,
                        product_id: record.product_id,
                        wangwang: record.nickname
                    }
                }).then(function (response) {
                    if (response.data.status == '10000') {
                        dataList[num].info = response.data.data;
                        _this.setState({ dataList: dataList });
                    } else {
                        _message3.default.error(response.data.message);
                    }
                }).catch(function (error) {
                    _message3.default.error(error.statusText);
                });
                // dataList[num].info = 'ggggg'
                // this.setState({ dataList })
                //record => <p style={{ margin: 0 }}>{record.info}</p>
            }
        };

        _this.rowRender = function (record, index, indent, expanded) {

            if (record.info) {
                var _record$info = record.info,
                    floor_price = _record$info.floor_price,
                    floor_transaction_price = _record$info.floor_transaction_price,
                    brand_name = _record$info.brand_name,
                    product_name = _record$info.product_name,
                    custom_my = _record$info.custom_my,
                    list = _objectWithoutProperties(_record$info, ['floor_price', 'floor_transaction_price', 'brand_name', 'product_name', 'custom_my']);

                var dataList = Object.entries(list);
                console.log(dataList);
                return React.createElement(
                    'div',
                    { className: 'rowRender' },
                    record.platform == 'TB' || record.platform == 'TM' || record.platform == '1688' ? React.createElement(
                        'div',
                        { className: 'a-info' },
                        React.createElement(
                            'h6',
                            null,
                            '\u65FA\u65FA\u540D\u79F0\uFF1A',
                            record.nickname
                        ),
                        React.createElement(
                            'h6',
                            null,
                            '\u6240\u5C5E\u5BA2\u6237\uFF1A',
                            custom_my
                        )
                    ) : React.createElement(
                        'div',
                        { className: 'a-info' },
                        React.createElement(
                            'h6',
                            null,
                            '\u6240\u5C5E\u7ECF\u9500\u5546',
                            custom_my
                        )
                    ),
                    React.createElement(
                        'ul',
                        { className: 'list-info' },
                        React.createElement(
                            'li',
                            null,
                            '\u54C1\u724C:',
                            brand_name
                        ),
                        React.createElement(
                            'li',
                            null,
                            '\u54C1\u540D:',
                            product_name
                        ),
                        React.createElement(
                            'li',
                            null,
                            '\u6700\u4F4E\u6807\u4EF7:',
                            floor_price
                        ),
                        React.createElement(
                            'li',
                            null,
                            '\u6700\u4F4E\u6210\u4EA4\u4EF7:',
                            floor_transaction_price
                        ),
                        dataList.map(function (item, index) {
                            return React.createElement(
                                'li',
                                { key: index },
                                item[0],
                                ':',
                                item[1]
                            );
                        })
                    )
                );
            }
        };

        _this.state = {
            pageNo: 1,
            pageSize: 10,
            totalNum: 0,

            date: moment(),
            priceList: [],
            dataList: [],
            classInfo: {},
            targetItem: {}

        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getClassInfo();
            this.getList();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js"), __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.3.1@jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=259_b63e5bc615bbed881e1f.js.map