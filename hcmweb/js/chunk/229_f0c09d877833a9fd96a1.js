(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[229],{

/***/ "./app/widget/index/Announcements/main.js":
/*!************************************************!*\
  !*** ./app/widget/index/Announcements/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Announcements/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var confirm = _modal2.default.confirm;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.onRangePicker = function (e) {

            _this.setState({
                start_time: e[0],
                end_time: e[1]
            });
        };

        _this.chTreeSelect = function (value, label, extra, type) {
            var state = _this.state;
            state[type] = value;
            _this.setState(state);
        };

        _this.getNoticeTypeList = function () {
            _ajax2.default.get('/hcm/sys/GetList', {
                params: {
                    dictcode: 'notice_type'
                }
            }).then(function (response) {
                _this.setState({
                    noticeTypeList: response.data.data
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.onSearch = function () {
            _this.setState({
                pageNo: 1
            }, function () {
                _this.getList();
            });
        };

        _this.getList = function () {
            var _this$state = _this.state,
                pageNo = _this$state.pageNo,
                pageSize = _this$state.pageSize,
                start_time = _this$state.start_time,
                end_time = _this$state.end_time,
                notice_title = _this$state.notice_title,
                notice_type = _this$state.notice_type,
                user_name = _this$state.user_name;

            _ajax2.default.get('/hcm/notice/Getlist', {
                params: {
                    pageNo: pageNo,
                    pageSize: pageSize,
                    start_time: start_time ? start_time.format('YYYY-MM-DD HH:mm:ss') : null,
                    end_time: end_time ? end_time.format('YYYY-MM-DD HH:mm:ss') : null,
                    notice_title: notice_title, notice_type: notice_type, user_name: user_name
                }
            }).then(function (response) {
                var data = response.data.data;
                // console.log(data)
                _this.setState({
                    dataList: data.content,
                    pageNo: data.pageNumber,
                    pageSize: data.pageSize,
                    totalNum: data.totalElements
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.chSearchIpt = function (e, type) {
            var state = _this.state;
            state[type] = e.target.value;
            _this.setState(state);
        };

        _this.handleClearIconClick = function (type) {
            var state = _this.state;
            state[type] = null;
            _this.setState(state);
        };

        _this.changePagination = function (page, pageSize) {
            _this.setState({
                pageNo: page,
                pageSize: pageSize
            }, function () {
                _this.getList();
            });
        };

        _this.onPaginationSize = function (current, size) {
            _this.setState({
                pageNo: 1,
                pageSize: size
            }, function () {
                _this.getList();
            });
        };

        _this.rmDepart = function (item) {
            var that = _this;
            confirm({
                title: null,
                content: React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { className: 'tips' },
                        '\u63D0\u793A'
                    ),
                    React.createElement('div', { className: 'pline' }),
                    React.createElement(
                        'p',
                        { className: 'Dtitle' },
                        '\u4F60\u786E\u8BA4\u8981\u5220\u9664\u8BE5\u901A\u77E5\u516C\u544A\u5417\uFF1F'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u5220\u9664\u540E',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            '\u76F8\u5173\u4EBA\u5458\u5C06\u4E0D\u518D\u80FD\u770B\u5230\u8BE5\u516C\u544A'
                        )
                    )
                ),
                okText: '确定',
                cancelText: '取消',
                className: 'alert-item-confirm',
                onOk: function onOk() {
                    _ajax2.default.post('/hcm/notice/Delete', {
                        notice_id: item.id
                    }).then(function (response) {
                        if (response.data.status == '10000') {
                            that.getList();
                            _message3.default.success(response.data.message);
                        }
                    }).catch(function (error) {
                        _message3.default.error(error.statusText);
                    });
                }
            });
        };

        _this.state = {
            start_time: moment().subtract(3, 'months'),
            end_time: moment(),
            notice_title: null,
            notice_type: null,
            user_name: null,

            dataList: [],

            noticeTypeList: [],
            pageNo: 1,
            pageSize: 10,
            totalNum: null
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
            this.getNoticeTypeList();
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
//# sourceMappingURL=229_f0c09d877833a9fd96a1.js.map