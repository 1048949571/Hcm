(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[273],{

/***/ "./app/widget/index/Brand/SalesReports/main.js":
/*!*****************************************************!*\
  !*** ./app/widget/index/Brand/SalesReports/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/SalesReports/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _CONFIG = __webpack_require__(/*! ./CONFIG */ "./app/widget/index/Brand/SalesReports/CONFIG.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (_temp = _class = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _initialiseProps.call(_this);

        var _props$match$params = props.match.params,
            type = _props$match$params.type,
            form = _props$match$params.form;

        _this.state = {
            type: type,
            form: form,
            header: [],
            list: [],
            pageNumber: 1,
            pageSize: 10,
            totalElements: 0,
            date: [type == 'month' ? moment().subtract(1, 'years').subtract(1, 'months') : moment().subtract(1, 'months').add(1, 'days'), moment()]
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextprops) {
            var _this2 = this;

            var params = nextprops.match.params;
            var _state = this.state,
                type = _state.type,
                form = _state.form;

            if (params.type != type || params.form != form) {
                this.setState({
                    type: params.type,
                    form: params.form,
                    header: [],
                    list: [],
                    pageNumber: 1,
                    pageSize: 10,
                    totalElements: 0,
                    date: [params.type == 'month' ? moment().subtract(1, 'years').subtract(1, 'months') : moment().subtract(1, 'months').add(1, 'days'), moment()]
                }, function () {
                    _this2.getList();
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return App;
}(React.Component), _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.onChangePicker = function (date) {
        if (date[1].diff(date[0], 'days') > 30) {
            _message3.default.error('时间区间请小于31天');
            return;
        }
        _this3.setState({
            date: date
        }, function () {
            _this3.getList();
        });
    };

    this.handlePanelChange = function (value, mode) {
        if (value[1].diff(value[0], 'months') > 11) {
            _message3.default.error('时间区间请小于12个月');
            return;
        }
        _this3.setState({
            date: value
        });
    };

    this.getList = function () {
        var _state2 = _this3.state,
            type = _state2.type,
            form = _state2.form,
            pageNumber = _state2.pageNumber,
            pageSize = _state2.pageSize,
            date = _state2.date;


        _ajax2.default.get(_CONFIG.info[type][form].url, {
            params: {
                type: _CONFIG.info[type][form].type,
                start_time: type == 'month' ? date[0].format('YYYY-MM') : date[0].format('YYYY-MM-DD'),
                end_time: type == 'month' ? date[1].format('YYYY-MM') : date[1].format('YYYY-MM-DD'),
                pageNumber: pageNumber,
                pageSize: pageSize
            }
        }).then(function (response) {
            var _response$data = response.data,
                status = _response$data.status,
                message = _response$data.message,
                data = _response$data.data;

            if (status == '10000') {
                _this3.setState({
                    header: data.head,
                    list: data.page.content,
                    pageNumber: data.page.pageNumber,
                    pageSize: data.page.pageSize,
                    totalElements: data.page.totalElements
                });
            } else {
                _message3.default.warning(message);
            }
        }).catch(function (error) {
            _message3.default.error(error.statusText);
        });
    };

    this.getColumns = function (header, list) {
        var _state3 = _this3.state,
            type = _state3.type,
            form = _state3.form;

        var columns = [];
        for (var i = 0; i < header.length; i++) {
            switch (header[i]) {
                case _CONFIG.info[type][form].case:
                    columns.push({
                        title: header[i],
                        dataIndex: 'name',
                        className: 'name',
                        width: 150,
                        fixed: 'left',
                        render: function render(value, row, index) {
                            var obj = {
                                children: React.createElement(
                                    'span',
                                    { style: row.isauthed == 'NOTAUTH' ? { color: '#999' } : {} },
                                    value
                                ),
                                props: {}
                            };
                            if (index % 2 == 0) {
                                obj.props.rowSpan = 2;
                            } else {
                                obj.props.rowSpan = 0;
                            }
                            return obj;
                        }
                    });
                    break;
                case "类别":
                    columns.push({
                        title: header[i],
                        dataIndex: 'type',
                        className: 'type',
                        width: 150,
                        fixed: 'left'
                    });
                    break;

                case "合计":
                    columns.push({
                        title: header[i],
                        dataIndex: 'total',
                        className: 'total',
                        width: 100,
                        fixed: 'right'
                    });
                    break;
                default:
                    columns.push({
                        title: header[i],
                        dataIndex: header[i]
                    });
            }
        }
        return columns;
    };

    this.changePagination = function (page, pageSize) {
        _this3.setState({
            pageNumber: page,
            pageSize: pageSize
        }, function () {
            _this3.getList();
        });
    };

    this.onPaginationSize = function (current, size) {
        _this3.setState({
            pageNumber: 1,
            pageSize: size
        }, function () {
            _this3.getList();
        });
    };
}, _temp);
exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=273_f96bbf737d9accfd9cdb.js.map