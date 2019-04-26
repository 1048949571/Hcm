(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[246],{

/***/ "./app/widget/index/Brand/CommodityStore/main.js":
/*!*******************************************************!*\
  !*** ./app/widget/index/Brand/CommodityStore/main.js ***!
  \*******************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/CommodityStore/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _echarts = __webpack_require__(/*! echarts */ "./node_modules/_echarts@4.1.0@echarts/index.js");

var _echarts2 = _interopRequireDefault(_echarts);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommodityStore = function (_React$Component) {
    _inherits(CommodityStore, _React$Component);

    function CommodityStore(props) {
        _classCallCheck(this, CommodityStore);

        var _this = _possibleConstructorReturn(this, (CommodityStore.__proto__ || Object.getPrototypeOf(CommodityStore)).call(this, props));

        _this.JINGPINGList = function () {
            _ajax2.default.post('/hcm/search/jingPinBrandList', {}).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    if (res.data.data != "" && res.data.data != []) {

                        _this.setState({
                            jingPinBrandList: res.data.data,
                            styleSX: res.data.data[0].bid
                        }, function () {
                            _this.JingPinPT(_this.state.styleSX);
                        });
                    }
                } else {
                    _message3.default.error(res.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.JingPinPT = function (dataCompare) {
            LoadingModal({ bl: true });
            _ajax2.default.post('/hcm/search/dataCompare', {
                bid: dataCompare,
                type: "jingpin"
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    if (res.data.data != "" && res.data.data != []) {

                        _this.setState({
                            JingPinPTx: res.data.data,
                            CardStyle: res.data.data[0].platform_code
                        }, function () {
                            LoadingModal({ bl: false });
                            _this.shopGroupData(dataCompare, _this.state.CardStyle);
                            console.log(_this.state.JingPinPTx[0].platform_name);
                        });
                    }
                } else {
                    LoadingModal({ bl: false });
                    _message3.default.error(res.data.message);
                }
            }).catch(function (error) {
                LoadingModal({ bl: false });
                _message3.default.error(error.statusText);
            });
        };

        _this.shopGroupData = function (dataCompare, platform_code) {
            LoadingModal({ bl: true });
            _ajax2.default.post('/hcm/search/priceSectionRatio', {
                bid: dataCompare,
                platform_code: platform_code,
                type: "jingpin"
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    if (res.data.data != "" && res.data.data != []) {

                        _this.setState({
                            shopGroupData: res.data.data[0].cover_list,
                            contertier: res.data.data[0]
                        }, function () {
                            LoadingModal({ bl: false });
                            _this.myChart();
                            _this.contertier();
                        });
                    }
                } else {
                    LoadingModal({ bl: false });
                    _message3.default.error(res.data.message);
                }
            }).catch(function (error) {
                LoadingModal({ bl: false });
                _message3.default.error(error.statusText);
            });
        };

        _this.myChart = function () {
            var shopGroupData = _this.state.shopGroupData;
            console.log(shopGroupData);
            var myChart = _echarts2.default.init(document.getElementById('echartsxx'));
            var totnum = 0;

            if (shopGroupData.length) {
                totnum = shopGroupData.map(function (item) {
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
                series: [{
                    name: '店铺数量',
                    type: 'pie',
                    radius: ['0%', '30%'],
                    center: ['50%', '40%'],
                    color: ['#fff'],
                    silent: true,
                    label: {
                        position: 'center',
                        formatter: function formatter(params) {
                            return params.seriesName + ":" + shopGroupData[1].value;
                        },
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
                    center: ['50%', '40%'],
                    color: ['#66c8ca', '#ccc'],
                    data: shopGroupData
                }]
            });
        };

        _this.onChange = function (a, b, c) {
            console.log(a, b, c);
        };

        _this.beforeChange = function (a, b, v) {
            console.log(a, b, v);
        };

        _this.handlePrev = function () {
            _this.refx.current.prev();
        };

        _this.handleNext = function () {
            _this.refx.current.next();
        };

        _this.JPList = function (style) {

            _this.setState({
                styleSX: style,
                JingPinPT: []
            }, function () {
                _this.JingPinPT(_this.state.styleSX);
            });
        };

        _this.CardStyle = function (CardStyle) {
            _this.setState({
                CardStyle: CardStyle,
                shopGroupData: []
            }, function () {
                console.log(_this.state.CardStyle);
                _this.shopGroupData(_this.state.styleSX, _this.state.CardStyle);
            });
        };

        _this.contertier = function () {
            //var dom = document.getElementById("container");
            var myChart = _echarts2.default.init(document.getElementById("container"));
            var app = {};
            var option = null;
            app.title = '坐标轴刻度与标签对齐';

            myChart.setOption({
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function formatter(params) {
                        var res = "价格区间：" + params[0].axisValue + "<br/>" + params[0].seriesName + ":" + params[0].data + "% <br/>" + params[1].seriesName + ":" + params[1].data + "%";
                        //var res =`/hcm/search/down_itemlist?type=${that.state.type}`
                        return res;
                    } //"价格区间：{b} <br/> {a}:{c}% <br/> {a}:{c}%"
                },
                legend: {
                    data: ['我的品牌', '竞品品牌'],
                    center: ['38%', '50%'],
                    color: "#666",
                    fontSize: 14
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: _this.state.contertier.section_list != "" ? _this.state.contertier.section_list : ["0-100", "101-200", "201-300", "301-400"],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: { interval: 0 }
                }],
                yAxis: [{
                    type: 'value',
                    axisLine: { onZero: false },
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }],
                series: [{
                    name: '我的品牌',
                    type: 'bar',
                    barWidth: '40%',
                    color: "#108CEE",
                    data: _this.state.contertier.my_brand_list,
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }, {
                    name: '竞品品牌',
                    type: 'bar',
                    barWidth: '40%',
                    color: "#4ECB73",
                    data: _this.state.contertier.jingpin_list
                }]
            }, true);
        };

        _this.refx = React.createRef();
        _this.state = {

            shopGroupData: [],
            jingPinBrandList: [],
            styleSX: "",
            JingPinPTx: [],
            CardStyle: "",
            contertier: []
        };
        return _this;
    }

    _createClass(CommodityStore, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //335455
            // this.myChart();
            // this.contertier()
            this.JINGPINGList();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return CommodityStore;
}(React.Component);

exports.default = CommodityStore;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=246_de7e5e49b7dc0f8b7481.js.map