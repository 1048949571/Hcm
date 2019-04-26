(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[341],{

/***/ "./app/widget/index/Shop/DataDetails/main.js":
/*!***************************************************!*\
  !*** ./app/widget/index/Shop/DataDetails/main.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Shop/DataDetails/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _redux = __webpack_require__(/*! redux */ "./node_modules/_redux@4.0.1@redux/es/redux.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        collapsed: state.collapsed
    };
};

var DataPresentation = function (_React$Component) {
    _inherits(DataPresentation, _React$Component);

    function DataPresentation(props) {
        _classCallCheck(this, DataPresentation);

        var _this = _possibleConstructorReturn(this, (DataPresentation.__proto__ || Object.getPrototypeOf(DataPresentation)).call(this, props));

        _this.shopDataDayReportPageList = function (daydate) {
            _ajax2.default.post("/hcm/dayReport/shopDataDayReportDetailList", {
                daydate: daydate
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {

                    if (res.data.data.length) {
                        var sum = 0;
                        var money = 0;
                        for (var i = 0; i < res.data.data.length; i++) {
                            sum = sum + res.data.data[i].buy_num;
                            money = money + res.data.data[i].trade_money;
                        }
                        _this.setState({
                            link_shopDataReport: res.data.data,
                            SUM: sum,
                            trade_money: money.toFixed(2)
                        });
                    }
                } else {

                    _message3.default.error(res.data.message);
                }
            });
        };

        _this.yesButton = function () {
            LoadingModal({ bl: true });
            _ajax2.default.post("/hcm/dayReport/shopDataReportSubmit", {
                buy_num: _this.state.SUM,
                submit_money: _this.state.trade_money, //    总额
                daydate: _this.state.daydate //日期
            }).then(function (res) {

                if (res.data.status == 10000) {

                    _message3.default.success("提报成功");
                    setTimeout(function () {
                        window.location = "/index.html#/DataPresentation";
                    }, 2000);
                } else {

                    _message3.default.error("提报失败");
                    setTimeout(function () {
                        window.location = "/index.html#/DataPresentation";
                    }, 2000);
                }
                LoadingModal({ bl: false });
            }).catch(function () {
                LoadingModal({ bl: false });
                setTimeout(function () {
                    window.location = "/index.html#/DataPresentation";
                }, 2000);
            });
        };

        var columns = [{
            title: '序号',
            width: "100px",
            dataIndex: 'entity_owner_name',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    index + 1
                );
            }
        }, {
            title: '商品',
            dataIndex: 'itemtitle',
            width: "40%"
        }, {
            title: '销量（件）',
            width: "200px",
            dataIndex: "buy_num"

        }, {
            title: '销售金额（元）',
            width: "200px",
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.trade_money
                );
            }
        }];
        _this.state = {
            shopDataReportSubmit: columns,
            link_shopDataReport: [],
            daydate: "",
            SUM: 0,
            trade_money: 0,
            stateError: false
        };

        return _this;
    }

    _createClass(DataPresentation, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.setState({
                daydate: this.props.match.params.daydate
            }, function () {
                _this2.shopDataDayReportPageList(_this2.state.daydate);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=341_c9d8892dbdd79a57e987.js.map