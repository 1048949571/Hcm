(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[340],{

/***/ "./app/widget/index/Shop/DataAnalysis/main.js":
/*!****************************************************!*\
  !*** ./app/widget/index/Shop/DataAnalysis/main.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Shop/DataAnalysis/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _echarts = __webpack_require__(/*! echarts */ "./node_modules/_echarts@4.1.0@echarts/index.js");

var _echarts2 = _interopRequireDefault(_echarts);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.handlePanelChange = function (value, type) {
            if (value[1].diff(value[0], 'months') > 11) {
                _message3.default.error('时间区间请小于12个月');
                return;
            }
            _this.setState(_defineProperty({}, type, value));
        };

        _this.inChart = function () {
            var chartData = _this.state.chartData;

            var myChart = _echarts2.default.init(document.getElementById('chart-bar'));
            myChart.setOption({
                tooltip: {
                    trigger: 'axis',
                    formatter: function formatter(params) {
                        var _params = _slicedToArray(params, 1),
                            a = _params[0];

                        return '<div class=\'tooltip\'>\n                            <p>' + a.axisValueLabel + '</p>\n                            <p>\n                                ' + a.seriesName + ':' + a.value + '\uFF08\u4E07\u5143\uFF09\n                               \n                            </p>\n                            <p>\u73AF\u6BD4\uFF1A<span style=\'' + (+chartData.huanbi[a.dataIndex].indexOf('-') == -1 ? 'border-bottom-color: red;    vertical-align: 3px;' : 'border-top-color: #42d342;    vertical-align: -6px;') + '\'></span>' + chartData.huanbi[a.dataIndex] + '</p>\n                        </div>';
                    }
                },
                grid: {
                    left: 60,
                    top: 60,
                    bottom: 20,
                    right: 60
                },
                xAxis: [{
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    data: chartData.my_month
                }],
                yAxis: [{
                    type: 'value',
                    name: '销售金额（万元）',
                    nameTextStyle: {
                        padding: [0, 0, 15, 0]
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }

                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }],
                series: [{
                    name: '销售金额',
                    type: 'bar',
                    itemStyle: {
                        color: '#108CEE'
                    },
                    data: chartData.trade_money

                }]
            });
        };

        _this.getfindSaleSalaryQS = function () {
            _ajax2.default.get('/hcm/hcmShopMonitor/findSaleSalaryQS', {
                params: {
                    pageNo: '1',
                    pageSize: '12',
                    start_time: moment().subtract(1, 'years').format('YYYY-MM'),
                    end_time: moment().subtract(1, 'months').format('YYYY-MM')

                }
            }).then(function (response) {
                var _response$data = response.data,
                    status = _response$data.status,
                    message = _response$data.message,
                    data = _response$data.data;

                if (status == '10000') {
                    var chartData = {
                        my_month: [],
                        huanbi: [],
                        trade_money: []
                    };
                    for (var i = 0; i < data.content.length; i++) {
                        chartData.my_month.push(data.content[i].my_month);
                        chartData.huanbi.push(data.content[i].huanbi);
                        chartData.trade_money.push(data.content[i].trade_money);
                    }
                    _this.setState({
                        chartData: chartData
                    }, function () {
                        _this.inChart();
                    });
                } else {
                    _message3.default.warning(message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.getfindCamItemZB = function () {
            var activityDate = _this.state.activityDate;

            _ajax2.default.get('/hcm/campgign/findCamItemZB', {
                params: {

                    start_time: activityDate[0].format('YYYY-MM'),
                    end_time: activityDate[1].format('YYYY-MM')

                }
            }).then(function (response) {
                var _response$data2 = response.data,
                    status = _response$data2.status,
                    message = _response$data2.message,
                    data = _response$data2.data;

                if (status == '10000') {
                    _this.setState({
                        activityData: data
                    });
                } else {
                    _message3.default.warning(message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.getHotTop = function () {
            var _this$state = _this.state,
                hotDate = _this$state.hotDate,
                hotData = _this$state.hotData;

            _ajax2.default.get('/hcm/hcmShopMonitor/getGoodsSalesRankingByBmcid', {
                params: {
                    pageNo: hotData.pageNumber,
                    pageSize: hotData.pageSize,
                    start_time: hotDate[0].format('YYYY-MM'),
                    end_time: hotDate[1].format('YYYY-MM')

                }
            }).then(function (response) {
                var _response$data3 = response.data,
                    status = _response$data3.status,
                    message = _response$data3.message,
                    data = _response$data3.data;

                if (status == '10000') {
                    var content = data.content,
                        pageNumber = data.pageNumber,
                        pageSize = data.pageSize,
                        totalElements = data.totalElements;

                    var _hotData = _this.state.hotData;
                    _hotData.content = content;
                    _hotData.pageNumber = pageNumber;
                    _hotData.pageSize = pageSize;
                    _hotData.totalElements = totalElements;
                    _this.setState({
                        hotData: _hotData
                    });
                } else {
                    _message3.default.warning(message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.columns = function () {
            return [{
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
                        React.createElement('img', { style: { flex: '1 0 50px', width: '50px', height: '50px', marginRight: 10 }, src: text }),
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
            }];
        };

        _this.shopColumns = function () {
            return [{
                title: '排名',
                dataIndex: 'index',
                key: 'index',
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
            }];
        };

        _this.changePagination = function (page, pageSize, type, fn) {

            var data = _this.state[type];

            data.pageNumber = page;
            data.pageSize = pageSize;
            _this.setState(_defineProperty({}, type, data), function () {
                fn();
            });
        };

        _this.getHotShopTop = function () {
            var _this$state2 = _this.state,
                hotShopDate = _this$state2.hotShopDate,
                hotShopData = _this$state2.hotShopData;

            _ajax2.default.get('/hcm/hcmShopMonitor/getShopMoneyTop', {
                params: {
                    pageNo: hotShopData.pageNumber,
                    pageSize: hotShopData.pageSize,
                    start_time: hotShopDate[0].format('YYYY-MM'),
                    end_time: hotShopDate[1].format('YYYY-MM')

                }
            }).then(function (response) {
                var _response$data4 = response.data,
                    status = _response$data4.status,
                    message = _response$data4.message,
                    data = _response$data4.data;

                if (status == '10000') {
                    var content = data.content,
                        pageNumber = data.pageNumber,
                        pageSize = data.pageSize,
                        totalElements = data.totalElements;

                    var _hotShopData = _this.state.hotShopData;
                    _hotShopData.content = content;
                    _hotShopData.pageNumber = pageNumber;
                    _hotShopData.pageSize = pageSize;
                    _hotShopData.totalElements = totalElements;
                    _this.setState({
                        hotShopData: _hotShopData
                    });
                } else {
                    _message3.default.warning(message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.AddModal = React.createRef();
        _this.state = {
            id: null,
            chartData: {},
            activityData: {
                all_count: 0,
                my_count: 0
            },
            activityDate: [moment().subtract(1, 'months'), moment().subtract(1, 'months')],
            hotDate: [moment().subtract(1, 'months'), moment().subtract(1, 'months')],
            hotData: {
                content: [],
                pageNumber: 1,
                pageSize: 6,
                totalElements: 0
            },
            hotShopDate: [moment().subtract(1, 'months'), moment().subtract(1, 'months')],
            hotShopData: {
                content: [],
                pageNumber: 1,
                pageSize: 10,
                totalElements: 0
            }
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getfindCamItemZB();
            this.getfindSaleSalaryQS();
            this.getHotTop();
            this.getHotShopTop();
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=340_1a7ad13f780cf3222df2.js.map