(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[249],{

/***/ "./app/widget/index/Brand/CustomerOverview/ChartPie.js":
/*!*************************************************************!*\
  !*** ./app/widget/index/Brand/CustomerOverview/ChartPie.js ***!
  \*************************************************************/
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

var _china = __webpack_require__(/*! ./china.json */ "./app/widget/index/Brand/CustomerOverview/china.json");

var _china2 = _interopRequireDefault(_china);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartPie = function (_React$Component) {
    _inherits(ChartPie, _React$Component);

    function ChartPie() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ChartPie);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChartPie.__proto__ || Object.getPrototypeOf(ChartPie)).call.apply(_ref, [this].concat(args))), _this), _this.initChart = function () {
            var data = [];
            for (var i = 0; i < _this.props.data.length; i++) {
                for (var j = 0; j < _this.props.data[i].children.length; j++) {
                    data.push({
                        name: _this.props.data[i].children[j].name,
                        value: _this.props.data[i].children[j].value
                    });
                }
            }
            data.push({ name: '南海诸岛', value: 0, itemStyle: { normal: { opacity: 0, label: { show: false } } } });
            _echarts2.default.registerMap('china', _china2.default);
            var myChart = _echarts2.default.init(document.getElementById('pie-container'));
            console.log(data);
            myChart.setOption({

                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br/>经销商数量 /{c} 家)'
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                visualMap: {
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ['lightskyblue', 'rgba(0, 80, 179, 1)', 'rgba(186, 231, 255, 1)']
                    }
                },
                series: [{
                    type: 'map',
                    map: 'china',
                    itemStyle: {
                        normal: { label: { show: true } },
                        emphasis: { label: { show: true } }
                    },
                    data: data,

                    nameMap: {
                        '台湾': '台湾',
                        '河北': '河北省',
                        '山西': '山西省',
                        '内蒙古': '内蒙古自治区',
                        '辽宁': '辽宁省',
                        '吉林': '吉林省',
                        '黑龙江': '黑龙江省',
                        '江苏': '江苏省',
                        '浙江': '浙江省',
                        '安徽': '安徽省',
                        '福建': '福建省',
                        '江西': '江西省',
                        '山东': '山东省',
                        '河南': '河南省',
                        '湖北': '湖北省',
                        '湖南': '湖南省',
                        '广东': '广东省',
                        '广西': '广西壮族自治区',
                        '海南': '海南省',
                        '四川': '四川省',
                        '贵州': '贵州省',
                        '云南': '云南省',
                        '西藏': '西藏自治区',
                        '陕西': '陕西省',
                        '甘肃': '甘肃省',
                        '青海': '青海省',
                        '宁夏': '宁夏回族自治区',
                        '新疆': '新疆维吾尔自治区',
                        '北京': '北京市',
                        '天津': '天津市',
                        '上海': '上海市',
                        '重庆': '重庆市',
                        '香港': '香港',
                        '澳门': '澳门'
                    }
                }]

            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ChartPie, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dom = $('#' + this.props.nodeDom);
            $('#pie-container').css({
                width: dom.width() + 'px',
                height: dom.height() + 'px'
            });
            this.initChart();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement('div', { id: 'pie-container' });
        }
    }]);

    return ChartPie;
}(React.Component);

exports.default = ChartPie;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.3.1@jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=249_d3ed11af3f625a1240ba.js.map