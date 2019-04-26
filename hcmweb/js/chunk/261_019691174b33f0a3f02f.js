(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[261],{

/***/ "./app/widget/index/Brand/OrderAnalysis/main.js":
/*!******************************************************!*\
  !*** ./app/widget/index/Brand/OrderAnalysis/main.js ***!
  \******************************************************/
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/OrderAnalysis/tpl.js");

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

var DEFAULT_PAGE = {
    pageNo: 1,
    pageSize: 10
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.handleTabChange = function (flag, key) {

            if (flag === '2') {
                _this.getImportantShopSalesRank(_this.commonParams(_extends({}, DEFAULT_PAGE, { product_id: key })));
                _this.getImportantVipPercent(_this.commonParams(_extends({}, DEFAULT_PAGE, { product_id: key })));
                _this.setState({
                    importantProductDefaultKey: key
                });
            }
            if (flag === '1') {
                _this.getProductSalesRank(_this.commonParams(_extends({}, DEFAULT_PAGE, { shopId: key })));
                _this.setState({
                    shopImportantDefaultKey: key
                });
            }
        };

        _this.handlePageChange = function (funcName, page) {
            var params = {
                pageNo: page,
                pageSize: DEFAULT_PAGE.pageSize
            };
            if (funcName === 'getProductSalesRank') {
                params.shopId = _this.state.shopImportantDefaultKey;
            }
            if (funcName === 'getImportantVipPercent' || funcName === 'getImportantShopSalesRank') {
                params.product_id = _this.state.importantProductDefaultKey;
            }
            _this[funcName](_this.commonParams(params));
        };

        _this.commonParams = function (pagination) {
            var data = {
                start_time: _this.state.start_time.format('YYYY-MM-DD') + ' 00:00:00',
                end_time: _this.state.end_time.format('YYYY-MM-DD') + ' 23:59:59',
                pageNo: pagination.pageNo,
                pageSize: pagination.pageSize
            };
            if (pagination.product_id) {
                data.product_id = pagination.product_id;
            }
            if (pagination.shopId) {
                data.shopId = pagination.shopId;
            }
            return data;
        };

        _this.handleTimeChange = function (dates) {
            if (dates.length === 0) {
                _message3.default.warning('时间不能为空！');
                return;
            }
            _this.setState({
                start_time: dates[0],
                end_time: dates[1]
            }, function () {
                _this.getHotProductSalesRank(_this.commonParams(DEFAULT_PAGE));
                _this.getCategorySalesRank(_this.commonParams(DEFAULT_PAGE));
                _this.getImportantProductData();

                _this.getVipProvincePercent(_this.commonParams(DEFAULT_PAGE));
                _this.getVipCityPercent(_this.commonParams(DEFAULT_PAGE));

                _this.getShopSalesRank(_this.commonParams(DEFAULT_PAGE));
                _this.getShopImportantList();
            });
        };

        _this.getChartData = function () {
            _ajax2.default.get('/hcm/hcmShopMonitor/getSalesYear').then(function (res) {
                var _res$data = res.data,
                    data = _res$data.data,
                    status = _res$data.status,
                    message = _res$data.message;

                if (status === '10000') {
                    _this.setState({
                        chartData: data
                    }, function () {
                        _this.inChart();
                    });
                } else {
                    _message3.default.error(message);
                }
            }).catch(function (err) {
                _message3.default.error('系统繁忙，请稍后再试！');
            });
        };

        _this.inChart = function () {
            var chartData = _this.state.chartData;

            var myChart = _echarts2.default.init(document.getElementById('chart-bar'));
            myChart.setOption({
                tooltip: {
                    trigger: 'axis',
                    formatter: function formatter(params) {
                        var _params = _slicedToArray(params, 2),
                            a = _params[0],
                            b = _params[1];

                        return '<div class=\'tooltip\'>\n                            ' + (a ? '\n                                <p>\n                                    <span style=\'background-color:' + a.color + ';\'></span>\n                                    ' + a.seriesName + ':' + a.value + '\n                                </p>\n                                ' : '') + '\n                            ' + (b ? '\n                                <p>\n                                    <span style=\'background-color:' + b.color + ';\'></span>\n                                    ' + b.seriesName + ':' + b.value + '\n                                </p>\n                                ' : '') + '\n                        </div>';
                    }
                },
                grid: {
                    left: 60,
                    top: 30,
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
                    data: chartData.month
                }],
                yAxis: [{
                    type: 'value',
                    name: '单位（ 单 ）',
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
                }, {
                    type: 'value',
                    name: '单位（ 万元 ）',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }],
                series: [{
                    name: '订单数',
                    type: 'bar',
                    barGap: 0,
                    yAxisIndex: 0,
                    itemStyle: {
                        color: '#3AA1FF'
                    },
                    data: chartData.ordernumList

                }, {
                    name: '销售额',
                    type: 'bar',
                    barGap: 0,
                    yAxisIndex: 1,
                    itemStyle: {
                        color: '#4ECB73'
                    },
                    data: chartData.salesList

                }]
            });
        };

        _this.getShopSalesRank = function (params) {
            var url = '/hcm/hcmShopMonitor/getShopMoneyTop';
            _this.getFn(url, 'shopSalesRank', params);
        };

        _this.getShopImportantList = function () {
            var params = {
                focus: 1
            };
            _ajax2.default.get('/hcm/hcmShop/getShopListByBmcid', { params: params }).then(function (res) {
                var _res$data2 = res.data,
                    data = _res$data2.data,
                    status = _res$data2.status,
                    message = _res$data2.message;

                if (status === '10000') {
                    // console.log('---yu', data)
                    _this.setState({
                        shopImportantList: data,
                        shopImportantDefaultKey: data.length ? data[0].id : ''
                    }, function () {
                        if (data.length !== 0) {
                            _this.getProductSalesRank(_this.commonParams(_extends({}, DEFAULT_PAGE, { shopId: data[0].id })));
                        }
                    });
                } else {
                    _message3.default.error(message);
                }
            }).catch(function (err) {
                _message3.default.error('系统繁忙，请稍后再试！');
            });
        };

        _this.getProductSalesRank = function (params) {
            var url = '/hcm/hcmShopMonitor/getShopProductTop';
            _this.getFn(url, 'productSalesRank', params);
        };

        _this.getVipProvincePercent = function (params) {
            var url = '/hcm/hcmShopMonitor/getOrderInfoSubAnalysisStrict';
            _this.getFn(url, 'vipProvincePercent', params);
        };

        _this.getVipCityPercent = function (params) {
            var url = '/hcm/hcmShopMonitor/getOrderInfoSubAnalysisCity';
            _this.getFn(url, 'vipCityPercent', params);
        };

        _this.getCategorySalesRank = function (params) {
            var url = '/hcm/hcmShopMonitor/findClassifyItemSort';
            _this.getFn(url, 'categorySalesRank', params);
        };

        _this.getHotProductSalesRank = function (params) {
            var url = '/hcm/hcmShopMonitor/findHotSingletItemSort';
            _this.getFn(url, 'hotProductSalesRank', params);
        };

        _this.getImportantProductData = function () {
            _ajax2.default.get('/hcm/hcmProduct/findSingletProList').then(function (res) {
                var _res$data3 = res.data,
                    data = _res$data3.data,
                    status = _res$data3.status,
                    message = _res$data3.message;

                if (status === '10000') {
                    // console.log('---yu', data)
                    _this.setState({
                        importantProductList: data,
                        importantProductDefaultKey: data.length ? data[0].id : ''
                    }, function () {
                        // console.log({...DEFAULT_PAGE,product_id:data[0].id})
                        if (data.length !== 0) {
                            _this.getImportantShopSalesRank(_this.commonParams(_extends({}, DEFAULT_PAGE, { product_id: data[0].id })));
                            _this.getImportantVipPercent(_this.commonParams(_extends({}, DEFAULT_PAGE, { product_id: data[0].id })));
                        }
                    });
                } else {
                    _message3.default.error(message);
                }
            }).catch(function (err) {
                _message3.default.error('系统繁忙，请稍后再试！');
            });
        };

        _this.getImportantShopSalesRank = function (params) {
            var url = '/hcm/hcmShopMonitor/findImpShopSort';
            _this.getFn(url, 'importantShopSalesRank', params);
        };

        _this.getImportantVipPercent = function (params) {
            var url = '/hcm/hcmShopMonitor/findImpBuyerSort';
            _this.getFn(url, 'importantVipPercent', params);
        };

        _this.getFn = function (url, key, params) {
            _ajax2.default.get(url, { params: params }).then(function (res) {
                var _res$data4 = res.data,
                    data = _res$data4.data,
                    status = _res$data4.status,
                    message = _res$data4.message;

                if (status === '10000') {
                    _this.setState(_defineProperty({}, key, {
                        list: data.content,
                        // total: data.obj,
                        pageNo: data.pageNumber,
                        pageSize: data.pageSize,
                        totalElements: data.totalElements
                    }));
                } else {
                    _message3.default.error(message);
                }
            }).catch(function (err) {
                _message3.default.error('系统繁忙，请稍后再试！');
            });
        };

        _this.AddModal = React.createRef();
        _this.state = {
            id: null,
            chartData: {},
            start_time: moment().subtract(30, 'd'),
            end_time: moment(),

            importantProductList: [],
            importantProductDefaultKey: '',
            importantShopSalesRank: {}, //重点关注单品-店铺销售额排名
            importantVipPercent: {}, //重点关注单品-会员所在城市占比排名
            hotProductSalesRank: {}, // 热销单品销售额
            categorySalesRank: {}, // 分类销售额排名


            shopSalesRank: {}, // 店铺销售额排名
            productSalesRank: {}, // 商品销售额排名
            shopImportantList: [], // 重点关注店铺列表
            shopImportantDefaultKey: '', // 


            vipProvincePercent: {}, // 订单信息分析 -> 会员分析-> 省份
            vipCityPercent: {} // 订单信息分析 -> 会员分析-> 城市


        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getChartData();
            this.getHotProductSalesRank(this.commonParams(DEFAULT_PAGE));
            this.getCategorySalesRank(this.commonParams(DEFAULT_PAGE));
            this.getImportantProductData();

            this.getVipProvincePercent(this.commonParams(DEFAULT_PAGE));
            this.getVipCityPercent(this.commonParams(DEFAULT_PAGE));

            this.getShopSalesRank(this.commonParams(DEFAULT_PAGE));
            this.getShopImportantList();
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
//# sourceMappingURL=261_019691174b33f0a3f02f.js.map