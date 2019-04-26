(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[238],{

/***/ "./app/widget/index/Brand/BrandMerchandise/main.js":
/*!*********************************************************!*\
  !*** ./app/widget/index/Brand/BrandMerchandise/main.js ***!
  \*********************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/BrandMerchandise/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _echarts = __webpack_require__(/*! echarts */ "./node_modules/_echarts@4.1.0@echarts/index.js");

var _echarts2 = _interopRequireDefault(_echarts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrandMerchandise = function (_React$Component) {
    _inherits(BrandMerchandise, _React$Component);

    function BrandMerchandise(props) {
        _classCallCheck(this, BrandMerchandise);

        var _this = _possibleConstructorReturn(this, (BrandMerchandise.__proto__ || Object.getPrototypeOf(BrandMerchandise)).call(this, props));

        _this.JingPinPT = function () {
            _ajax2.default.post('/hcm/search/itemlistInfo').then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    if (res.data.data != "" && res.data.data != []) {

                        _this.setState({
                            JingPinPTx: res.data.data,
                            CardStyle: res.data.data[0].platform_code
                        }, function () {
                            console.log(_this.state.JingPinPTx[0].platform_name);
                            _this.shopGroupData(_this.state.CardStyle);
                            _this.brandItemAreaSort(_this.state.pageNo, _this.state.pageSize, _this.state.CardStyle);
                            _this.shopLevelZhanbi(_this.state.CardStyle);
                        });
                    }
                } else {
                    _message3.default.error(res.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.shopGroupData = function (platform_code) {
            _ajax2.default.post('/hcm/search/brandPriceSectionRatio', {
                platform_code: platform_code
            }).then(function (res) {
                if (res.data.status == 10000) {
                    if (res.data.data != "" && res.data.data != []) {
                        _this.setState({
                            shopGroupData: res.data.data[0],
                            contertier: res.data.data[0]
                        }, function () {
                            _this.myChart(_this.state.shopGroupData);
                            _this.contertier(_this.state.contertier);
                        });
                    }
                } else {

                    _message3.default.error(res.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.shopLevelZhanbi = function (platform_code) {
            _ajax2.default.post('/hcm/search/shopLevelZhanbi', {
                platform_code: platform_code
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    if (res.data.data != "" && res.data.data != []) {
                        _this.setState({
                            shopLevelZhanbi: res.data.data
                        }, function () {});
                    }
                } else {

                    _message3.default.error(res.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.myChart = function (shopGroupData) {
            var shopLevelZhanbi = _this.state.shopLevelZhanbi;
            //console.log(shopGroupData)
            var myChart = _echarts2.default.init(document.getElementById('echartsxx'));
            var myChartb = _echarts2.default.init(document.getElementById('echartsxxb'));
            var carvarCard = _echarts2.default.init(document.getElementById('carvarCard'));
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
                    name: '占比',
                    type: 'pie',
                    radius: ['0%', '30%'],
                    center: ['50%', '60%'],
                    color: ['#fff'],
                    silent: true,
                    label: {
                        position: 'center',
                        formatter: function formatter(params) {
                            //console.log(params)
                            var a = shopGroupData.authlist[1].value;
                            var b = shopGroupData.authlist[0].value;
                            var xum = a / b * 100;
                            return a != 0 && b != 0 ? xum.toFixed(2) + "%" + "\n" + "占比" : 0 + "\n" + "占比";
                        },
                        color: '#333',
                        fontSize: 14,
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
                    center: ['50%', '60%'],
                    color: ['#36CBCB', '#ccc'],
                    data: _this.state.shopGroupData.authlist

                }]
            });
            myChartb.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)"
                },
                series: [{
                    name: '占比',
                    type: 'pie',
                    radius: ['0%', '30%'],
                    center: ['50%', '60%'],
                    color: ['#fff'],
                    silent: true,
                    label: {
                        position: 'center',
                        formatter: function formatter(params) {
                            //console.log(params)
                            var a = shopGroupData.whitelist[1].value;
                            var b = shopGroupData.whitelist[0].value;
                            var sum = a / b * 100;
                            return a != 0 && b != 0 ? sum.toFixed(2) + "%" + "\n" + "占比" : 0 + "\n" + "占比";
                        },
                        color: '#333',
                        fontSize: 14,
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
                    center: ['50%', '60%'],
                    color: ['#FAD43B', '#ccc'],
                    data: _this.state.shopGroupData.whitelist
                }]
            });
            carvarCard.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)"
                },
                series: [{
                    name: '总店铺数',
                    type: 'pie',
                    radius: ['0%', '30%'],
                    center: ['50%', '40%'],
                    color: ['#fff'],
                    silent: true,
                    label: {
                        position: 'center',
                        formatter: function formatter(params) {
                            console.log(shopLevelZhanbi[0]);

                            return shopLevelZhanbi != "" && shopLevelZhanbi != [] ? shopLevelZhanbi[0].total + "\n" + "总店铺数" : 0 + "\n" + "总店铺数";
                        },
                        color: '#333',
                        fontSize: 14,
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
                    color: ['#1890FF', '#37CBCB', "#FAD337", "#F2637B", "#975FE4", "#ccc"],
                    data: _this.state.shopLevelZhanbi ? _this.state.shopLevelZhanbi : [{
                        name: "天猫",
                        value: 0
                    }, {
                        name: "黄冠级",
                        value: 0
                    }, {
                        name: "蓝冠级",
                        value: 0
                    }, {
                        name: "钻级",
                        value: 0
                    }, {
                        name: "心级",
                        value: 0
                    }]
                }]
            });
        };

        _this.CardStyle = function (CardStyle) {
            _this.setState({
                CardStyle: CardStyle,
                shopLevelZhanbi: [],
                pageNo: 1,
                pageSize: 10,
                totalNum: 0,
                Tabledata: []
                // shopGroupData: []
            }, function () {
                _this.shopGroupData(_this.state.CardStyle);
                if (CardStyle == "TBTM") {
                    _this.brandItemAreaSort(_this.state.pageNo, _this.state.pageSize, _this.state.CardStyle);
                    _this.shopLevelZhanbi(_this.state.CardStyle);
                }
            });
        };

        _this.handlePrev = function () {
            _this.refx.current.prev();
        };

        _this.handleNext = function () {
            _this.refx.current.next();
        };

        _this.contertier = function (contertier) {
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
                        //console.log(params)
                        var res = "价格区间：" + params[0].axisValue + "<br/>" + params[0].seriesName + ":" + params[0].data + "<br/>占比:" + contertier.zhanbi_list[params[0].dataIndex] + "%";

                        return res;
                    }
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
                    data: _this.state.contertier.zhanbi_list != "" ? _this.state.contertier.zhanbi_list : ["0", "25", "50", "70", '100'],
                    axisLine: { onZero: false },
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }],
                series: [{
                    name: '数量',
                    type: 'bar',
                    barWidth: '40%',
                    color: "#108CEE",
                    data: _this.state.contertier.shulianglist,
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }]
            }, true);
        };

        _this.brandItemAreaSort = function (pageNos, pageSizes, platform_codes) {
            _ajax2.default.post('/hcm/search/brandItemAreaSort', {
                pageNo: pageNos,
                pageSize: pageSizes,
                platform_code: platform_codes
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    if (res.data.data.content != "" && res.data.data.content != []) {

                        _this.setState({
                            Tabledata: res.data.data.content,
                            pageNo: res.data.data.pageNumber,
                            totalNum: res.data.data.totalElements
                        }, function () {});
                    }
                } else {
                    _message3.default.error(res.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.changePagination = function (a, b) {
            console.log(a, b);
            _this.setState({
                pageNo: a,
                Tabledata: []
            }, function () {
                _this.brandItemAreaSort(_this.state.pageNo, _this.state.pageSize, _this.state.CardStyle);
            });
        };

        _this.onPaginationSize = function (a, b) {
            console.log(a, b);
            // this.setState({
            //     pageNo: a,
            //     Tabledata: []
            // }, () => {
            //     this.brandItemAreaSort(this.state.pageNo, this.state.pageSize, this.state.CardStyle)
            // })
        };

        var columns = [{
            title: '排名',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    index + 1 == "1" || index + 1 == "2" || index + 1 == "3" ? React.createElement(
                        'span',
                        { style: { textAlign: "center", width: "20px", height: "20px", background: "rgba(189,165,113,1)", borderRadius: "50%", display: "inline-block", color: "#fff" } },
                        index + 1
                    ) : index + 1
                );
            }
        }, {
            title: '地区',
            dataIndex: 'area'
        }, {
            title: '商品数',
            dataIndex: 'count'
        }, {
            title: '占比',
            dataIndex: 'zhanbi'
        }];

        _this.refx = React.createRef();
        _this.state = {
            JingPinPTx: [],
            CardStyle: "",
            shopGroupData: [],
            contertier: [],
            columns: columns,
            pageNo: 1,
            pageSize: 10,
            totalNum: 0,
            Tabledata: [],
            shopLevelZhanbi: []

        };
        return _this;
    }

    _createClass(BrandMerchandise, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.JingPinPT();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return BrandMerchandise;
}(React.Component);

exports.default = BrandMerchandise;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=238_85433ee118ee22255c8e.js.map