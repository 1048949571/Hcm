(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./app/widget/index/Brand/CustomerOverview/ChartTree.js":
/*!**************************************************************!*\
  !*** ./app/widget/index/Brand/CustomerOverview/ChartTree.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, $) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _echarts = __webpack_require__(/*! echarts */ "./node_modules/_echarts@4.1.0@echarts/index.js");

var _echarts2 = _interopRequireDefault(_echarts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var myChart = null;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
        // document.title = '客户总览';


        _this.onScale = function (bl) {
            var scale = _this.state.scale;
            var _this$state = _this.state,
                clientHeight = _this$state.clientHeight,
                clientWidth = _this$state.clientWidth;

            if (bl) {
                _this.setState({
                    scale: scale >= 2 ? 2 : scale + 0.1
                }, function () {
                    $('#container').css({
                        height: Math.floor(clientHeight * (_this.state.scale < 1 ? 1 : _this.state.scale)) + 'px',
                        width: Math.floor(clientWidth * _this.state.scale) + 'px'
                    });
                    myChart.resize();
                });
            } else {
                _this.setState({
                    scale: scale <= 0.2 ? 0.2 : scale - 0.1
                }, function () {
                    $('#container').css({
                        height: clientHeight + 'px',
                        width: Math.floor(clientWidth * _this.state.scale) + 'px'
                    });
                    myChart.resize();
                });
            }
        };

        _this.inChart = function () {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var data = _this.props.data;

            var bl = false;
            myChart = _echarts2.default.init(document.getElementById("container"));

            function recursive(data) {
                _echarts2.default.util.each(data, function (datum, index) {
                    datum.collapsed = true;

                    delete datum.label;
                    if (value.length) {

                        if (datum.children && datum.children.length) {
                            bl = false;
                            if (recursiveColor(datum.children, value)) {
                                datum.collapsed = false;
                                console.log(datum.children);
                            } else {
                                datum.collapsed = true;
                            }
                        }
                        if (datum.name.toUpperCase().indexOf(value) != -1) {
                            datum.label = {
                                'color': 'red'
                            };
                        }
                        if (datum.children && datum.children.length) {
                            recursive(datum.children);
                        }
                    } else {
                        if (datum.children && datum.children.length) {
                            datum.collapsed = false;
                        } else {
                            datum.collapsed = true;
                        }
                    }
                });
            }

            function recursiveColor(data, value) {
                if (value) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].name.toUpperCase().indexOf(value) != -1) {
                            bl = true;
                            break;
                        }
                        if (data[i].children && data[i].children.length) {
                            recursiveColor(data[i].children, value);
                        }
                    }
                }
                return bl;
            }

            recursive(data.children);

            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove',
                    formatter: function formatter(params) {
                        var _params$data = params.data,
                            _params$data$take_peo = _params$data.take_people,
                            take_people = _params$data$take_peo === undefined ? '' : _params$data$take_peo,
                            contact = _params$data.contact,
                            dutynumber = _params$data.dutynumber,
                            _params$data$address = _params$data.address,
                            address = _params$data$address === undefined ? '' : _params$data$address,
                            level = _params$data.level,
                            platform_name = _params$data.platform_name,
                            _params$data$shop_url = _params$data.shop_url,
                            shop_url = _params$data$shop_url === undefined ? '' : _params$data$shop_url;

                        if (level == 2) {
                            return '\n                        <div>\n                            <p>\u8054\u7CFB\u65B9\u5F0F:' + contact + '</p>\n                            <p>\u5BF9\u63A5\u4EBA:' + take_people + '</p>\n                            <p>\u516C\u53F8\u7A0E\u53F7:' + dutynumber + '</p>\n                            <p>\u516C\u53F8\u5730\u5740:' + address + '</p>\n                        </div>\n                        ';
                        } else if (level == 3) {
                            return '\n                        <div>\n                            <p>\u5E73\u53F0:' + platform_name + '</p>\n                            <p>\u94FE\u63A5\u5730\u5740:' + shop_url + '</p>\n                        </div>\n                        ';
                        }
                    }
                },
                series: [{
                    type: 'tree',
                    roam: true,
                    data: [data],
                    top: '1%',
                    left: '7%',
                    bottom: '1%',
                    right: '20%',
                    symbolSize: 15,
                    // symbol: 'rect',
                    // lineStyle: {
                    //     curveness: 0.8
                    // },
                    // itemStyle: {
                    //     borderWidth: 10,
                    //     borderColor: 'none'
                    // },
                    label: {
                        formatter: function formatter(params) {
                            return ' ' + params.data.name + ' ' + (params.data.children && params.data.children.length ? '>' : '');
                        },
                        align: 'right',
                        padding: [0, 10, 0, 0],
                        color: '#4493e8'
                    },
                    leaves: {
                        label: {
                            normal: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        }
                    },
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }]
            });
        };

        _this.render = function () {
            var scale = _this.state.scale;

            return (
                // <div className='scale-box'>
                React.createElement('div', { id: 'container' })
                //     <div className='bs-box'>
                //         <Icon onClick={() => this.onScale(false)} type="minus-circle" />
                //         {Math.round(scale * 100)}%
                //         <Icon onClick={() => this.onScale(true)} type="plus-circle" />
                //     </div>
                // </div>

            );
        };

        _this.state = {
            data: props.data,
            scale: 1,
            clientHeight: 0,
            clientWidth: 0
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var that = this;
            // let customerOverview = $(".CustomerOverview")[0];
            var customerOverview = $(this.props.nodeDom)[0];
            $('.scale-box').css({
                height: customerOverview.clientHeight + 'px',
                width: customerOverview.clientWidth + 'px'
            });
            $('#container').css({
                height: customerOverview.clientHeight + 'px',
                width: customerOverview.clientWidth + 'px'
            });
            this.setState({
                clientHeight: customerOverview.clientHeight,
                clientWidth: customerOverview.clientWidth
            });
            this.inChart();
        }
    }]);

    return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.3.1@jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=47_67497d5553f93a3023e2.js.map