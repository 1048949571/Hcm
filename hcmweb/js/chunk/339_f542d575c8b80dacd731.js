(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[339],{

/***/ "./app/widget/components/Copyright.js":
/*!********************************************!*\
  !*** ./app/widget/components/Copyright.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Copyright = function (_React$Component) {
    _inherits(Copyright, _React$Component);

    function Copyright(props) {
        _classCallCheck(this, Copyright);

        return _possibleConstructorReturn(this, (Copyright.__proto__ || Object.getPrototypeOf(Copyright)).call(this, props));
    }

    _createClass(Copyright, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: this.props.clazzName ? this.props.clazzName : 'Copyright' },
                'Copyright \xA9 \u676D\u5DDE\u4E45\u70B9\u7F51\u7EDC\u6280\u672F\u6709\u9650\u516C\u53F8'
            );
        }
    }]);

    return Copyright;
}(React.Component);

exports.default = Copyright;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/Layout/index.js":
/*!***********************************************!*\
  !*** ./app/widget/components/Layout/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

var _Copyright = __webpack_require__(/*! ../Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

__webpack_require__(/*! ./index.less */ "./app/widget/components/Layout/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightBox = function RightBox(props) {
  return React.createElement(
    'div',
    { className: 'layout-wrapper ' + (props.className || '') },
    React.createElement(
      'div',
      { className: 'header-wrapper' },
      React.createElement(
        _breadcrumb2.default,
        { className: 'breadcrumb' },
        props.breadcrumbList.map(function (v, i) {
          if (props.linkList[i] === '') {
            return React.createElement(
              _breadcrumb2.default.Item,
              { key: v },
              v
            );
          }
          return React.createElement(
            _breadcrumb2.default.Item,
            {
              href: 'javascript:;',
              key: v },
            React.createElement(
              'span',
              { onClick: function onClick() {
                  props.history.go(-props.linkList[i]);
                } },
              v
            )
          );
        })
      )
    ),
    React.createElement(
      'div',
      { className: 'layout-content' },
      props.children
    ),
    React.createElement(
      'div',
      { className: 'copyright' },
      React.createElement(_Copyright2.default, null)
    )
  );
};

RightBox.defaultProps = {
  title: '标题',
  breadcrumbList: [],
  linkList: []
};

exports.default = RightBox;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/Layout/index.less":
/*!*************************************************!*\
  !*** ./app/widget/components/Layout/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Shop/DataAnalysis/CONFIG.js":
/*!******************************************************!*\
  !*** ./app/widget/index/Shop/DataAnalysis/CONFIG.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    activities: {
        name: '活动商品数占比',
        rowKey: 'my_month',
        url: '/hcm/campgign/findCamItemZBList',
        downloadUrl: '/hcm/campgign/downCamItemZBList',
        columns: [{
            title: 'No',
            dataIndex: 'index',
            key: 'index',
            render: function render(text, item, index) {
                return index + 1;
            }
        }, {
            title: '月份',
            dataIndex: 'my_month',
            key: 'my_month'
        }, {
            title: '共活动商品数',
            dataIndex: 'all_count',
            key: 'all_count'
        }, {
            title: '我活动商品数',
            dataIndex: 'my_count',
            key: 'my_count'
        }, {
            title: '活动商品占比',
            dataIndex: 'zhanbi',
            key: 'zhanbi'
        }]
    },
    order: {
        name: '销售金额趋势',
        rowKey: 'my_month',
        url: '/hcm/hcmShopMonitor/findSaleSalaryQS',
        downloadUrl: '/hcm/campgign/downSaleSalaryQS',
        columns: [{
            title: 'No',
            dataIndex: 'index',
            key: 'index',
            render: function render(text, item, index) {
                return index + 1;
            }
        }, {
            title: '月份',
            dataIndex: 'my_month',
            key: 'my_month'
        }, {
            title: '销售金额（万元）',
            dataIndex: 'trade_money',
            key: 'trade_money',
            width: '40%'
        }, {
            title: '环比',
            dataIndex: 'huanbi',
            key: 'huanbi',
            width: '10%',
            render: function render() {
                var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                var item = arguments[1];
                var index = arguments[2];
                return React.createElement(
                    'div',
                    null,
                    text.indexOf('-') == -1 ? React.createElement(_icon2.default, { style: { color: '#F5222D' }, type: 'caret-up' }) : React.createElement(_icon2.default, { style: { color: '#52C41A' }, type: 'caret-down' }),
                    text
                );
            }
        }]
    },
    hotGoods: {
        name: '热销商品排名',
        rowKey: 'num_iid',
        url: '/hcm/hcmShopMonitor/getGoodsSalesRankingByBmcid',
        downloadUrl: '/hcm/hcmShopMonitor/downloadGoodsSalesRankingByBmcid',
        columns: [{
            title: 'No',
            dataIndex: 'index',
            key: 'index',
            render: function render(text, item, index) {
                return index + 1;
            }
        }, {
            title: '商品信息',
            dataIndex: 'itempic',
            key: 'itempic',
            width: '50%',
            render: function render(text, item, index) {
                return React.createElement(
                    'div',
                    { style: { display: 'flex', alignItems: 'center' } },
                    React.createElement('img', { style: { flex: '0 0 50px', width: '50px', height: '50px', marginRight: 10 }, src: text }),
                    React.createElement(
                        'span',
                        null,
                        item.itemtitle
                    )
                );
            }
        }, {
            title: '店铺名称',
            dataIndex: 'shop_name',
            key: 'shop_name'
        }, {
            title: '销量指数',
            dataIndex: 'buynum',
            key: 'buynum'
        }, {
            title: '销售额指数',
            dataIndex: 'money',
            key: 'money'
        }]
    },
    hotShops: {
        name: '热卖店铺排名',
        rowKey: 'shop_id',
        url: '/hcm/hcmShopMonitor/getShopMoneyTop',
        downloadUrl: '/hcm/hcmShopMonitor/downloadShopMoneyTop',
        columns: [{
            title: '排名',
            dataIndex: 'index',
            key: 'index',
            width: '100px',
            align: 'center',
            render: function render(text, item, index) {
                return index < 3 ? React.createElement(
                    'span',
                    { className: 'top-span' },
                    index + 1
                ) : index + 1;
            }
        }, {
            title: '店铺名称',
            dataIndex: 'shop_name',
            key: 'shop_name'
        }, {
            title: '销售额指数',
            align: 'right',
            dataIndex: 'money',
            key: 'money'
        }]
    }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/index/Shop/DataAnalysis/DataAnalysisInfo.js":
/*!****************************************************************!*\
  !*** ./app/widget/index/Shop/DataAnalysis/DataAnalysisInfo.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _CONFIG = __webpack_require__(/*! ./CONFIG */ "./app/widget/index/Shop/DataAnalysis/CONFIG.js");

var _CONFIG2 = _interopRequireDefault(_CONFIG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangePicker = _datePicker2.default.RangePicker;
var App = (_temp = _class = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _initialiseProps.call(_this);

        var type = props.match.params.type;

        _this.state = {
            type: type,
            date: [moment().subtract(1, 'months'), moment().subtract(1, 'months')],
            data: [],
            pageNumber: 1,
            pageSize: 10,
            totalElements: 0
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                type = _state.type,
                data = _state.data,
                pageNumber = _state.pageNumber,
                pageSize = _state.pageSize,
                totalElements = _state.totalElements,
                date = _state.date;


            return React.createElement(
                _Layout2.default,
                {
                    breadcrumbList: ['数据中心', '数据分析', _CONFIG2.default[type].name],
                    linkList: ['', '1', ''],
                    history: this.props.history
                },
                React.createElement(
                    'div',
                    { className: 'dataAnalysisInfo' },
                    React.createElement(
                        'div',
                        { className: 'action-box' },
                        React.createElement(
                            _button2.default,
                            { href: _CONFIG2.default[type].downloadUrl + '?start_time=' + date[0].format('YYYY-MM') + '&end_time=' + date[1].format('YYYY-MM') },
                            '\u4E0B\u8F7D\u6570\u636E'
                        ),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'span',
                                null,
                                '\u9009\u62E9\u6708\u4EFD\xA0\xA0'
                            ),
                            React.createElement(RangePicker, {
                                mode: ['month', 'month'],
                                format: "YYYY-MM",
                                onPanelChange: this.handlePanelChange,
                                onOpenChange: function onOpenChange(status) {
                                    !status && _this2.getList();
                                },
                                value: date
                            })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'tab-box' },
                        React.createElement(_table2.default, { rowKey: _CONFIG2.default[type].rowKey, pagination: false, columns: _CONFIG2.default[type].columns, dataSource: data }),
                        type == 'activities' ? null : React.createElement(
                            'div',
                            { className: 'footer' },
                            React.createElement(
                                'div',
                                { className: 'info' },
                                '\u5171 ' + totalElements + ' \u6761\u8BB0\u5F55 ',
                                '\xA0\xA0',
                                '\u7B2C  ' + pageNumber + '  / ' + Math.ceil(totalElements / pageSize) + ' \u9875'
                            ),
                            React.createElement(_pagination2.default, { pageSize: pageSize, current: pageNumber, total: totalElements, onChange: this.changePagination, onShowSizeChange: this.onPaginationSize, showSizeChanger: true, showQuickJumper: true })
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component), _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.getList = function () {
        var _state2 = _this3.state,
            type = _state2.type,
            pageNumber = _state2.pageNumber,
            pageSize = _state2.pageSize,
            date = _state2.date;

        var params = {
            activities: {
                params: {
                    start_time: date[0].format('YYYY-MM'),
                    end_time: date[1].format('YYYY-MM')
                }
            },
            other: {
                params: {
                    pageNo: pageNumber,
                    pageSize: pageSize,
                    start_time: date[0].format('YYYY-MM'),
                    end_time: date[1].format('YYYY-MM')
                }
            }
        };
        _ajax2.default.get(_CONFIG2.default[type].url, type == 'activities' ? params.activities : params.other).then(function (response) {
            var _response$data = response.data,
                status = _response$data.status,
                message = _response$data.message,
                data = _response$data.data;

            if (status == '10000') {
                if (type == 'activities') {
                    _this3.setState({
                        data: data
                    });
                } else if (type == 'order') {
                    _this3.setState({
                        data: data.content,
                        pageNumber: data.pageNumber,
                        pageSize: data.pageSize,
                        totalElements: data.totalElements
                    });
                } else if (type == 'hotGoods') {
                    _this3.setState({
                        data: data.content,
                        pageNumber: data.pageNumber,
                        pageSize: data.pageSize,
                        totalElements: data.totalElements
                    });
                } else if (type == 'hotShops') {
                    _this3.setState({
                        data: data.content,
                        pageNumber: data.pageNumber,
                        pageSize: data.pageSize,
                        totalElements: data.totalElements
                    });
                }
            } else {
                _message3.default.warning(message);
            }
        }).catch(function (error) {
            _message3.default.error(error.statusText);
        });
    };

    this.handlePanelChange = function (value, type) {
        if (value[1].diff(value[0], 'months') > 11) {
            _message3.default.error('时间区间请小于12个月');
            return;
        }
        _this3.setState({
            date: value
        });
    };

    this.changePagination = function (page, pageSize) {
        _this3.setState({
            pageNumber: page,
            pageSize: pageSize
        }, function () {
            _this3.getList();
        });
    };

    this.onPaginationSize = function (current, size) {
        _this3.setState({
            pageNumber: 1,
            pageSize: size
        }, function () {
            _this3.getList();
        });
    };
}, _temp);
exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=339_f542d575c8b80dacd731.js.map