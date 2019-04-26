(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[257],{

/***/ "./app/widget/components/platform.js":
/*!*******************************************!*\
  !*** ./app/widget/components/platform.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (name) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { width: '20px', height: '20px' };

    var data = {
        "TB": React.createElement('img', { style: style, src: '../../../../img/platform/1_taobao.svg' }),
        "TM": React.createElement('img', { style: style, src: '../../../../img/platform/2_tall.svg' }),
        "JD": React.createElement('img', { style: style, src: '../../../../img/platform/3_jd.svg' }),
        "SN": React.createElement('img', { style: style, src: '../../../../img/platform/4_suning.svg' }),
        "GM": React.createElement('img', { style: style, src: '../../../../img/platform/5_gome.svg' }),
        "PDD": React.createElement('img', { style: style, src: '../../../../img/platform/6_pinduoduo.svg' }),
        "AMAZON": React.createElement('img', { style: style, src: '../../../../img/platform/7_a.svg' }),
        "WPH": React.createElement('img', { style: style, src: '../../../../img/platform/8_weipinhui.svg' }),
        "1688": React.createElement('img', { style: style, src: '../../../../img/platform/9_1688.svg' }),
        "SMT": React.createElement('img', { style: style, src: '../../../../img/platform/10_sumaitong.svg' }),
        "DD": React.createElement('img', { style: style, src: '../../../../img/platform/11_dangdang.svg' }),
        "ALST": React.createElement('img', { style: style, src: '../../../../img/platform/12_lingshoutong.svg' }),
        "1HD": React.createElement('img', { style: style, src: '../../../../img/platform/13_1haodian.svg' }),
        "YJWD": React.createElement('img', { style: style, src: '../../../../img/platform/14_yunji.svg' }),
        "YLW": React.createElement('img', { style: style, src: '../../../../img/platform/15_youle.svg' }),
        "XY": React.createElement('img', { style: style, src: '../../../../img/platform/16_xainyu.svg' }),
        "WECD": React.createElement('img', { style: style, src: '../../../../img/platform/17_weixin.svg' }),
        "MGJ": React.createElement('img', { style: style, src: '../../../../img/platform/18_mogujie.svg' }),
        "JMYP": React.createElement('img', { style: style, src: '../../../../img/platform/19_jumei.svg' }),
        "CCJ": React.createElement('img', { style: style, src: '../../../../img/platform/20_chuchujie.svg' }),
        "BBWG": React.createElement('img', { style: style, src: '../../../../img/platform/21_beibeiwang.svg' }),
        "platform_OTHER": React.createElement('img', { style: style, src: '../../../../img/platform/22_qita.svg' })
    };
    return data[name];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/index/Brand/Home/main.js":
/*!*********************************************!*\
  !*** ./app/widget/index/Brand/Home/main.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _notification2 = __webpack_require__(/*! antd/es/notification */ "./node_modules/_antd@3.10.1@antd/es/notification/index.js");

var _notification3 = _interopRequireDefault(_notification2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/notification/style/css */ "./node_modules/_antd@3.10.1@antd/es/notification/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/Home/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _echarts = __webpack_require__(/*! echarts */ "./node_modules/_echarts@4.1.0@echarts/index.js");

var _echarts2 = _interopRequireDefault(_echarts);

var _platform = __webpack_require__(/*! ../../../components/platform */ "./app/widget/components/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.expire = function () {
            var expire = _this.state.expire;

            var exDay = Math.ceil((expire.format('X') - moment().format('X')) / 60 / 60 / 24) + 1;
            var close = function close() {
                _notification3.default.close('date');
                sessionStorage.setItem('exdate', true);
            };
            var args = {
                message: '账号即将到期提醒',
                description: '\u4F60\u7684\u8D26\u53F7\u6709\u6548\u671F\u81F3 ' + expire.format('YYYY年MM月DD日') + ' \uFF0C\u4F7F\u7528\u671F\u9650\u4EC5\u5269 ' + exDay + '\u5929\uFF0C\u8FC7\u671F\u540E\u8D26\u53F7\u5C06\u4E0D\u80FD\u4F7F\u7528\uFF0C\u8BF7\u53CA\u65F6\u8054\u7CFB\u7BA1\u7406\u5458\u7EED\u671F',
                duration: 0,
                key: 'date',
                btn: React.createElement(
                    _button2.default,
                    { onClick: close },
                    '\u6211\u77E5\u9053\u4E86'
                ),
                onClose: close
            };
            _notification3.default.config({
                top: 60
            });
            if (exDay <= 30 && !sessionStorage.getItem('exdate')) {
                _notification3.default.warning(args);
            }
        };

        _this.myChart = function (data, id, title) {

            var myChart = _echarts2.default.init(document.getElementById(id));
            var totnum = 0;
            if (data.length) {
                totnum = data.map(function (item) {
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
                    data: data.map(function (item) {
                        return item.name;
                    })
                },

                series: [{
                    name: title,
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
                    radius: ['40%', '55%'],
                    center: ['38%', '50%'],
                    label: {
                        formatter: '{b}：{c}\n占比：{d}%'
                    },
                    avoidLabelOverlap: true,
                    color: ['#55a0f8', '#66c8ca', '#72c77c', '#f4d358', '#e17c7d', '#8e66dd'],
                    data: data
                }]
            });
        };

        _this.carouselItem = function () {
            var dom = [];
            var num = 6;
            var _this$state$dataList$ = _this.state.dataList.item_shop_data,
                item_shop_data = _this$state$dataList$ === undefined ? [] : _this$state$dataList$;

            var styles = {
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            };
            function oFor(num, index) {

                var arr = [];
                for (var i = 0; i < num; i++) {
                    if (item_shop_data[num * index + i]) {
                        arr.push(React.createElement(
                            'div',
                            { key: i, className: 'item' },
                            (0, _platform2.default)(item_shop_data[num * index + i].platform_code, { width: 40, height: 40 }),
                            React.createElement(
                                'p',
                                { style: { padding: '5px 0px 10px' } },
                                item_shop_data[num * index + i].platform_name
                            ),
                            React.createElement(
                                'p',
                                { style: styles },
                                React.createElement(
                                    'span',
                                    null,
                                    '\u5E97\u94FA\u6570'
                                ),
                                React.createElement(
                                    'span',
                                    { style: { fontSize: 18 } },
                                    item_shop_data[num * index + i].shop_num
                                )
                            ),
                            React.createElement(
                                'p',
                                { style: styles },
                                React.createElement(
                                    'span',
                                    null,
                                    '\u5546\u54C1\u6570'
                                ),
                                React.createElement(
                                    'span',
                                    { style: { fontSize: 18 } },
                                    item_shop_data[num * index + i].item_num
                                )
                            )
                        ));
                    }
                }
                return arr;
            }
            for (var i = 0; i < Math.ceil(item_shop_data.length / num); i++) {
                dom.push(React.createElement(
                    'div',
                    { key: i, className: 'carousel-item' },
                    oFor(num, i)
                ));
            }
            return dom;
        };

        _this.CarouselHome = React.createRef();
        _this.state = {
            expire: moment(),
            dataList: {
                binding: null,
                userid: null,
                data: []
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
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _notification3.default.close('date');
        }
    }, {
        key: 'getList',
        value: function getList() {
            var _this2 = this;

            _ajax2.default.get('/hcm/Index/bmaincustomerIndex').then(function (response) {
                if (response.data.status == '10000') {
                    _this2.setState({
                        dataList: response.data.data,
                        expire: moment(response.data.data.bmaincustomer_validtime)
                    }, function () {
                        _this2.expire();
                        _this2.myChart(_this2.state.dataList.daquData, 'chart-dealers', '客户总数量');
                        _this2.myChart(_this2.state.dataList.shopGroupData, 'chart-shops', '店铺总数量');
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=257_0f84afac61e529e3e987.js.map