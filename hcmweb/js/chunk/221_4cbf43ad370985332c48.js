(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[221],{

/***/ "./app/widget/index/Administrator/Home/main.js":
/*!*****************************************************!*\
  !*** ./app/widget/index/Administrator/Home/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Administrator/Home/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _echarts = __webpack_require__(/*! echarts */ "./node_modules/_echarts@4.1.0@echarts/index.js");

var _echarts2 = _interopRequireDefault(_echarts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.myChart = function () {
            var customereProportion = _this.state.dataList.customereProportion;
            var myChart = _echarts2.default.init(document.getElementById('echarts'));
            var totnum = 0;
            if (customereProportion.length) {
                totnum = customereProportion.map(function (item) {
                    return item.value;
                }).reduce(function (total, currentValue, index, arr) {
                    return total + currentValue;
                });
            }

            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    right: '30',
                    top: 'center',
                    itemGap: 20,
                    data: customereProportion.map(function (item) {
                        return item.name;
                    })
                },

                series: [{
                    name: '品牌方',
                    type: 'pie',
                    radius: ['0%', '30%'],
                    center: ['38%', '50%'],
                    color: ['#fff'],
                    silent: true,
                    label: {
                        position: 'center',
                        formatter: '{c| {c}}\n{a|{a}}',
                        color: '#333',
                        fontSize: 20,
                        rich: {
                            a: {
                                fontSize: 14,
                                color: '#999',
                                align: 'center'
                            },
                            c: {
                                color: '#333',
                                fontSize: 20,
                                padding: 10,
                                align: 'center'
                            }
                        }
                    },
                    data: [{ value: totnum, name: '' }]
                }, {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['38%', '50%'],
                    avoidLabelOverlap: true,
                    color: ['#55a0f8', '#66c8ca', '#72c77c', '#f4d358', '#e17c7d', '#8e66dd'],
                    data: customereProportion
                }]
            });
        };

        _this.myChart2 = function () {
            var dealerProportion = _this.state.dataList.dealerProportion;
            var myChart = _echarts2.default.init(document.getElementById('echarts2'));
            var totnum = 0;
            if (dealerProportion.length) {
                totnum = dealerProportion.map(function (item) {
                    return item.value;
                }).reduce(function (total, currentValue, index, arr) {
                    return total + currentValue;
                });
            }

            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    right: '30',
                    top: 'center',
                    itemGap: 20,
                    data: dealerProportion.map(function (item) {
                        return item.name;
                    })
                },

                series: [{
                    name: '经销商',
                    type: 'pie',
                    radius: ['0%', '30%'],
                    center: ['38%', '50%'],
                    color: ['#fff'],
                    silent: true,
                    label: {
                        position: 'center',
                        formatter: '{c| {c}}\n{a|{a}}',
                        color: '#333',
                        fontSize: 20,
                        rich: {
                            a: {
                                fontSize: 14,
                                color: '#999',
                                align: 'center'
                            },
                            c: {
                                color: '#333',
                                fontSize: 20,
                                padding: 10,
                                align: 'center'
                            }
                        }
                    },
                    data: [{ value: totnum, name: '' }]
                }, {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['38%', '50%'],
                    avoidLabelOverlap: true,
                    color: ['#55a0f8', '#66c8ca', '#72c77c', '#f4d358', '#e17c7d', '#8e66dd'],
                    data: dealerProportion
                }]
            });
        };

        _this.state = {
            dataList: {
                customereSum: 0,
                dataSum: 0,
                dealerSum: 0,
                itemListSum: 0,
                brandSum: 0,
                linkDataSum: 0,
                shopSum: 0,
                productSum: 0,
                customereProportion: [{ value: 0, name: '品牌方' }],
                dealerProportion: [{ value: 0, name: '经销商' }]
            }
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
        }
    }, {
        key: 'getList',
        value: function getList() {
            var _this2 = this;

            _ajax2.default.get('/hcm/Index/adminIndex').then(function (response) {

                if (response.data.status == '10000') {
                    _this2.setState({
                        dataList: response.data.data
                    }, function () {
                        _this2.myChart();
                        _this2.myChart2();
                    });
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=221_4cbf43ad370985332c48.js.map