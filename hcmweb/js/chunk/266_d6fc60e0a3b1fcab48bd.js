(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[266],{

/***/ "./app/widget/index/Brand/PriceMonitor/main.js":
/*!*****************************************************!*\
  !*** ./app/widget/index/Brand/PriceMonitor/main.js ***!
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

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/PriceMonitor/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.getMore = function () {
            _this.setState({
                pageNum: _this.state.pageNum + 1
            }, function () {
                _this.getList();
            });
        };

        _this.chAngeHis = function (item) {
            window.location = "/index.html#/ChangeHistoryx/HcmProductClassify_MonitorPrice/" + item.productClassifyName + "/" + item.id + "/Sjsj";
        };

        _this.editVisible = function (bl, item) {
            var classfiyUpdate = _this.state.classfiyUpdate;
            if (item) {
                classfiyUpdate.id = item.id;
                classfiyUpdate.monitorDate = moment('' + item.monitorDate, 'HH:mm');
            }
            _this.setState({
                visible: bl,
                classfiyUpdate: classfiyUpdate
            });
        };

        _this.editOnchange = function (e, type) {
            var classfiyUpdate = _this.state.classfiyUpdate;
            classfiyUpdate[type] = e;
            _this.setState({
                classfiyUpdate: classfiyUpdate
            });
        };

        _this.editSubmit = function () {

            var that = _this;
            var _this$state$classfiyU = _this.state.classfiyUpdate,
                monitorDate = _this$state$classfiyU.monitorDate,
                frequency = _this$state$classfiyU.frequency,
                monitor_range = _this$state$classfiyU.monitor_range,
                id = _this$state$classfiyU.id;


            _ajax2.default.get('/hcm/priceMonitor/ClassfiyUpdate', {
                params: {
                    MonitorDate: moment(monitorDate).format('HH:mm'),
                    // platform_code:platform_code,
                    frequency: frequency,
                    type: '2',
                    monitor_range: monitor_range,
                    id: id
                }
            }).then(function (response) {
                that.editVisible(false);
                if (response.data.status == '10000') {
                    _message3.default.success(response.data.message);
                    that.getList();
                } else {
                    _message3.default.warning(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.state = {
            pageSize: 12,
            pageNum: 1,
            totalElements: 0,

            dataList: [],
            visible: false,
            classfiyUpdate: {
                monitorDate: moment(moment().hour() + ':00\'', 'HH:mm'),
                // platform_code:'1',
                frequency: '1次/24H',
                monitor_range: '授权店铺',
                id: null
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

            var _state = this.state,
                pageSize = _state.pageSize,
                pageNum = _state.pageNum;

            _ajax2.default.get('/hcm/priceMonitor/GetList', {
                params: {
                    pageSize: pageSize,
                    pageNum: pageNum
                }
            }).then(function (response) {
                if (response.data.status == '10000') {
                    _this2.setState({
                        dataList: response.data.data.list,
                        totalElements: response.data.data.count
                    });
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
//# sourceMappingURL=266_d6fc60e0a3b1fcab48bd.js.map