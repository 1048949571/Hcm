(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[343],{

/***/ "./app/widget/index/Shop/DataPresentation/main.js":
/*!********************************************************!*\
  !*** ./app/widget/index/Shop/DataPresentation/main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Shop/DataPresentation/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataPresentation = function (_React$Component) {
    _inherits(DataPresentation, _React$Component);

    function DataPresentation(props) {
        _classCallCheck(this, DataPresentation);

        var _this = _possibleConstructorReturn(this, (DataPresentation.__proto__ || Object.getPrototypeOf(DataPresentation)).call(this, props));

        _this.GetDateStr = function (AddDayCount) {
            var dd = new Date();dd.setDate(dd.getDate() + AddDayCount);
            var y = dd.getFullYear();var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
            var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
            return y + "-" + m + "-" + d;
        };

        _this.shopDataDayReportPageList = function (pageNo, pageSize, start_time, end_time) {
            _ajax2.default.post("/hcm/dayReport/shopDataDayReportPageList", {
                pageNo: pageNo,
                pageSize: pageSize,
                start_time: start_time,
                end_time: end_time
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {

                    if (res.data.data.content.length) {
                        _this.setState({
                            link_taobao: res.data.data.content,
                            totalNum: res.data.data.totalElements
                        }, function () {});
                    }
                    _this.setState({
                        obj: res.data.data.obj
                    });
                } else {

                    _message3.default.error(res.data.message);
                }
            });
        };

        _this.zrsj = function () {
            _ajax2.default.post("/hcm/dayReport/shopZRReportTJ").then(function (res) {

                if (res.data.status == 10000) {

                    _message3.default.success("昨日数据提报统计成功");
                    // this.shopDataDayReportPageList(this.state.pageNo,this.state.pageSize,this.GetDateStr(-30),this.GetDateStr(0))
                    _this.shopDataDayReportPageList(_this.state.pageNo, _this.state.pageSize, _this.state.start_time, _this.state.end_time);
                } else {

                    _message3.default.error(res.data.message);
                }
            });
        };

        _this.onChange = function (date, dateString) {
            if (date != "" && date != [] && date != undefined) {
                _this.setState({
                    start_time: dateString[0],
                    end_time: dateString[1],
                    link_taobao: [],
                    totalNum: 0
                }, function () {
                    _this.shopDataDayReportPageList(_this.state.pageNo, _this.state.pageSize, _this.state.start_time, _this.state.end_time);
                });
            } else {
                _this.setState({
                    start_time: _this.GetDateStr(-30),
                    end_time: _this.GetDateStr(0),
                    link_taobao: [],
                    totalNum: 0
                }, function () {
                    _this.shopDataDayReportPageList(_this.state.pageNo, _this.state.pageSize, _this.state.start_time, _this.state.end_time);
                });
            }
        };

        _this.SwitchonChange = function () {
            if (_this.state.obj == "0") {
                _ajax2.default.post("/hcm/dayReport/shopAutoSubmit", {
                    state: "1"
                }).then(function (res) {
                    console.log(res);
                    if (res.data.status == 10000) {

                        _message3.default.success("已开启自动提报");
                        _this.shopDataDayReportPageList(_this.state.pageNo, _this.state.pageSize, _this.GetDateStr(-30), _this.GetDateStr(0));
                    } else {

                        _message3.default.error(res.data.message);
                    }
                });
            } else {
                _ajax2.default.post("/hcm/dayReport/shopAutoSubmit", {
                    state: "0"
                }).then(function (res) {
                    console.log(res);
                    if (res.data.status == 10000) {

                        _message3.default.success("已关闭自动提报");
                        _this.shopDataDayReportPageList(_this.state.pageNo, _this.state.pageSize, _this.GetDateStr(-30), _this.GetDateStr(0));
                    } else {

                        _message3.default.error(res.data.message);
                    }
                });
            }
        };

        _this.onPaginationSize = function (current, pageSize) {
            _this.setState({
                pageSize: pageSize,
                link_taobao: []
            }, function () {
                _this.shopDataDayReportPageList(_this.state.pageNo, _this.state.pageSize, _this.state.start_time, _this.state.end_time);
            });
        };

        _this.changePagination = function (current, pageSize) {
            _this.setState({
                pageNo: current,
                link_taobao: []
            }, function () {
                _this.shopDataDayReportPageList(_this.state.pageNo, _this.state.pageSize, _this.state.start_time, _this.state.end_time);
            });
        };

        var columns = [{
            title: '序号',
            dataIndex: 'entity_owner_name',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    index + 1
                );
            }
        }, {
            title: '数据时间',
            dataIndex: 'platform_code',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    React.createElement(
                        'a',
                        { href: '/index.html#/DataDetails/' + moment(parseInt(record.daydate)).format('YYYY-MM-DD') },
                        moment(parseInt(record.daydate)).format('YYYY-MM-DD'),
                        ' \u9500\u552E\u6570\u636E\u62A5\u8868'
                    )
                );
            }
        }, {
            title: '提报时间',
            width: "200px",
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.submit_status == "1" ? React.createElement(
                        'span',
                        null,
                        ' ',
                        moment(parseInt(record.submit_time)).format('YYYY-MM-DD HH:mm:ss')
                    ) : null
                );
            }
        }, {
            title: '状态',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.submit_status == "0" ? React.createElement(
                        'span',
                        null,
                        '\u672A\u63D0\u62A5 ',
                        React.createElement(
                            'a',
                            { href: '/index.html#/DataDetails/' + moment(parseInt(record.daydate)).format('YYYY-MM-DD') },
                            '\u7ACB\u5373\u63D0\u62A5>'
                        )
                    ) : React.createElement(
                        'span',
                        null,
                        '\u5DF2\u63D0\u62A5 ',
                        React.createElement(
                            'a',
                            { href: '/index.html#/DataDetails/' + moment(parseInt(record.daydate)).format('YYYY-MM-DD') },
                            '\u67E5\u770B\u8BE6\u60C5'
                        )
                    )
                );
            }
        }];
        _this.state = {
            ProductInformation_list: columns,
            link_taobao: [],
            pageNo: 1,
            totalNum: 0,
            pageSize: 10,
            obj: ""
        };

        return _this;
    }

    _createClass(DataPresentation, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.setState({
                start_time: this.GetDateStr(-31),
                end_time: this.GetDateStr(-1)
            }, function () {
                _this2.shopDataDayReportPageList(_this2.state.pageNo, _this2.state.pageSize, _this2.state.start_time, _this2.state.end_time);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return DataPresentation;
}(React.Component);

exports.default = _form2.default.create()(DataPresentation);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=343_84a113f6c9de05470dfa.js.map