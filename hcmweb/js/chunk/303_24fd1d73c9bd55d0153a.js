(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[303],{

/***/ "./app/widget/index/Feedback/main.js":
/*!*******************************************!*\
  !*** ./app/widget/index/Feedback/main.js ***!
  \*******************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Feedback/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

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
                title = _this$state.title,
                totalNum = _this$state.totalNum;

            _ajax2.default.get('/hcm/hcmWorkOrder/getListWorkOrder', {
                params: {
                    title: title,
                    sysType: localStorage.logintype,
                    pageNo: pageNo,
                    pageSize: pageSize,
                    userid: 23
                }
            }).then(function (response) {
                var data = response.data.data;
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

        _this.onChange = function (e, type) {
            var state = _this.state;
            state[type] = e.target.value;
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

        _this.formatColumn = function () {
            return [{
                title: '序号',
                dataIndex: 'name',
                key: 'name',
                width: '15%',
                align: 'left',
                render: function render(text, item, index) {
                    return index + 1;
                }
            }, {
                title: '工单标题',
                dataIndex: 'work_title',
                key: 'work_title',
                width: '35%',
                render: function render(text, item, index) {
                    if (localStorage.logintype == "ADMIN") {
                        return React.createElement(
                            'a',
                            { className: item.adminstatus ? 'title-text ' : 'title-text red-ck', href: '/index.html#/InfoFeedback/' + item.id },
                            text
                        );
                    } else {
                        return React.createElement(
                            'a',
                            { className: item.userstatus ? 'title-text ' : 'title-text red-ck', href: '/index.html#/InfoFeedback/' + item.id },
                            text
                        );
                    }
                }
            }, {
                title: '提交用户',
                dataIndex: 'realname',
                key: 'realname',
                width: '25%'
            }, {
                title: '回复时间',
                dataIndex: 'updatetime',
                key: 'updatetime',
                align: 'right',
                width: '25%',
                render: function render(text, item, index) {
                    return moment(text).format('YYYY年MM月DD日 HH:mm:ss');
                }
            }];
        };

        _this.state = {
            title: null,
            pageNo: 1,
            pageSize: 10,
            totalNum: null,
            dataList: []
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
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
//# sourceMappingURL=303_24fd1d73c9bd55d0153a.js.map