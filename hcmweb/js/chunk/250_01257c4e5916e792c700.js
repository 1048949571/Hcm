(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[250],{

/***/ "./app/widget/index/Brand/CustomerOverview/ShopPie.js":
/*!************************************************************!*\
  !*** ./app/widget/index/Brand/CustomerOverview/ShopPie.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, $) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _echarts = __webpack_require__(/*! echarts */ "./node_modules/_echarts@4.1.0@echarts/index.js");

var _echarts2 = _interopRequireDefault(_echarts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShopPie = function (_React$Component) {
    _inherits(ShopPie, _React$Component);

    function ShopPie() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ShopPie);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShopPie.__proto__ || Object.getPrototypeOf(ShopPie)).call.apply(_ref, [this].concat(args))), _this), _this.myChart = function () {
            var shopGroupData = _this.props.data;
            var myChart = _echarts2.default.init(document.getElementById('shop-pie-container'));
            var totnum = 0;
            if (shopGroupData.length) {
                shopGroupData.forEach(function (v) {
                    totnum += parseInt(v.value, 10);
                });
            }

            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    right: '20%',
                    top: 'center',
                    itemGap: 20,
                    data: shopGroupData.map(function (item) {
                        return item.name;
                    }),
                    icon: 'pin'
                },
                series: [{
                    name: '店铺总数量',
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
                    radius: ['35%', '45%'],
                    center: ['38%', '50%'],
                    avoidLabelOverlap: true,
                    label: {
                        formatter: '{b}：{c}\n占比：{d}%'
                    },
                    color: ['#55a0f8', '#66c8ca', '#72c77c', '#f4d358', '#e17c7d', '#8e66dd'],
                    data: shopGroupData
                }]
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ShopPie, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dom = $('#' + this.props.nodeDom);
            $('#shop-pie-container').css({
                width: dom.width() + 'px',
                height: dom.height() + 'px'
            });
            this.myChart();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'shop-pie-container' },
                ' '
            );
        }
    }]);

    return ShopPie;
}(React.Component);

exports.default = ShopPie;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.3.1@jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=250_01257c4e5916e792c700.js.map