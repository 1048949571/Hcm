(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[255],{

/***/ "./app/widget/index/Brand/ExpiringClientList/main.js":
/*!***********************************************************!*\
  !*** ./app/widget/index/Brand/ExpiringClientList/main.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/ExpiringClientList/tpl.js");

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

        _this.onSearch = function () {
            var bl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            _this.setState({
                pageNo: 1,
                dealername: bl ? null : _this.state.dealername,
                takePeople: bl ? null : _this.state.takePeople,
                rangePicker: bl ? [null, null] : _this.state.rangePicker,
                oldSearch: {
                    dealername: bl ? null : _this.state.dealername,
                    takePeople: bl ? null : _this.state.takePeople,
                    rangePicker: bl ? [null, null] : _this.state.rangePicker
                }
            }, function () {
                _this.getList();
            });
        };

        _this.getList = function () {
            var _this$state = _this.state,
                dealername = _this$state.dealername,
                takePeople = _this$state.takePeople,
                rangePicker = _this$state.rangePicker;

            _ajax2.default.get('/hcm/dealer/getlistStop', {
                params: {
                    pageNo: _this.state.pageNo,
                    pageSize: _this.state.pageSize,
                    dealername: dealername,
                    takePeople: takePeople,
                    stopDateStart: rangePicker[0] ? rangePicker[0].format('YYYY-MM-DD') + ' 00:00:00' : null,
                    stopDateEnd: rangePicker[1] ? rangePicker[1].format('YYYY-MM-DD') + ' 23:59:59' : null
                }
            }).then(function (response) {
                var dataList = response.data.data;
                _this.setState({
                    dataList: dataList,
                    pageNo: dataList.page_info.pageNo,
                    pageSize: dataList.page_info.pageSize,
                    checkAll: false,
                    selectedRowKeys: [],
                    startTarget: {},
                    visible: false,
                    totalNum: dataList.page_info.totalNum
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.chSearchIpt = function (e, type) {
            var state = _this.state;
            if (type == 'rangePicker' || type == 'restorePicker') {
                state[type][0] = e[0];
                state[type][1] = e[1];
                console.log(state[type]);
            } else {
                state[type] = e.target.value;
            }
            _this.setState(state);
        };

        _this.handleClearIconClick = function (type) {
            var state = _this.state;
            state[type] = null;
            _this.setState(state);
        };

        _this.formatColumn = function () {
            var arr = [];
            var column = [{
                title: 'No',
                dataIndex: 'index',
                key: 'index',
                render: function render(text, record, index) {
                    return index + 1;
                }
            }, {
                title: '客户名称',
                dataIndex: 'dealername',
                key: 'dealername'
            }, {
                title: '对接人',
                dataIndex: 'take_people',
                key: 'take_people'
            }, {
                title: '联系方式',
                dataIndex: 'contact',
                key: 'contact'
            }, {
                title: '到期时间',
                dataIndex: 'stop_date',
                key: 'stop_date',
                render: function render(text) {
                    return text ? moment(text).format('YYYY-MM-DD HH:mm:ss') : '--';
                }
            }, {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                align: 'right',
                width: 150,
                render: function render(text, record, index) {
                    return React.createElement(
                        'div',
                        { className: 'action' },
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this.allStartConfirm('item', record.id, true);
                                } },
                            '\u6062\u590D\u5408\u7EA6'
                        ),
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this.allRmConfirm('item', record.id);
                                } },
                            '\u5220\u9664'
                        )
                    );
                }
            }];
            return column;
        };

        _this.itemStart = function (record) {
            var restorePicker = _this.state.restorePicker;


            var params = {};

            params.ids = record.id;
            params.checkAll = false;

            params.authorizeStart = restorePicker[0].format('YYYY-MM-DD');
            params.authorizeEnd = restorePicker[1].format('YYYY-MM-DD');
            _this.setState({
                spinning: true
            }, function () {
                _ajax2.default.get('/hcm/dealer/start', {
                    params: params
                }).then(function (response) {

                    _this.setState({
                        spinning: false
                    }, function () {

                        if (response.data.status == '10000') {
                            _this.getList();
                        }
                        _message3.default.success(response.data.message);
                    });
                }).catch(function (error) {
                    _this.setState({
                        spinning: false
                    });
                    _message3.default.error(error.statusText);
                });
            });
        };

        _this.onTableCheckChange = function (selectedRowKeys) {
            _this.setState({
                selectedRowKeys: selectedRowKeys,
                checkAll: false
            });
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

        _this.checkAll = function (bl) {
            var selectedRowKeys = _this.state.selectedRowKeys;
            if (bl) {
                _this.state.dataList.dealer_list.forEach(function (item, index) {
                    selectedRowKeys.push(item.id);
                });
            } else {
                selectedRowKeys = [];
            }
            _this.setState({
                checkAll: bl,
                selectedRowKeys: selectedRowKeys
            });
        };

        _this.allStart = function () {
            var _this$state2 = _this.state,
                restorePicker = _this$state2.restorePicker,
                selectedRowKeys = _this$state2.selectedRowKeys,
                checkAll = _this$state2.checkAll,
                startTarget = _this$state2.startTarget;


            var params = {};
            if (startTarget.type == 'all') {
                var _this$state$oldSearch = _this.state.oldSearch,
                    dealername = _this$state$oldSearch.dealername,
                    takePeople = _this$state$oldSearch.takePeople,
                    rangePicker = _this$state$oldSearch.rangePicker;

                params = {
                    ids: selectedRowKeys.join(','),
                    checkAll: checkAll,
                    dealername: checkAll ? dealername : '',
                    takePeople: checkAll ? takePeople : '',
                    stopDateStart: checkAll ? rangePicker[0] ? rangePicker[0].format('YYYY-MM-DD') + ' 00:00:00' : '' : '',
                    stopDateEnd: checkAll ? rangePicker[1] ? rangePicker[1].format('YYYY-MM-DD') + ' 23:59:59' : '' : ''
                };
            } else {
                params.ids = startTarget.id;
                params.checkAll = false;
            }
            params.authorizeStart = restorePicker[0].format('YYYY-MM-DD');
            params.authorizeEnd = restorePicker[1].format('YYYY-MM-DD');
            _this.setState({
                spinning: true
            }, function () {
                _ajax2.default.get('/hcm/dealer/start', {
                    params: params
                }).then(function (response) {

                    _this.setState({
                        spinning: false
                    }, function () {

                        if (response.data.status == '10000') {
                            _this.onSearch(true);
                        }
                        _message3.default.success(response.data.message);
                    });
                }).catch(function (error) {
                    _this.setState({
                        spinning: false
                    });
                    _message3.default.error(error.statusText);
                });
            });
        };

        _this.allRm = function (type, id) {
            var _this$state3 = _this.state,
                selectedRowKeys = _this$state3.selectedRowKeys,
                checkAll = _this$state3.checkAll;

            var params = {};
            if (type == 'all') {
                var _this$state$oldSearch2 = _this.state.oldSearch,
                    dealername = _this$state$oldSearch2.dealername,
                    takePeople = _this$state$oldSearch2.takePeople,
                    rangePicker = _this$state$oldSearch2.rangePicker;


                params = {
                    ids: selectedRowKeys.join(','),
                    checkAll: checkAll,
                    dealername: checkAll ? dealername : '',
                    takePeople: checkAll ? takePeople : '',
                    stopDateStart: checkAll ? rangePicker[0] ? rangePicker[0].format('YYYY-MM-DD') + ' 00:00:00' : '' : '',
                    stopDateEnd: checkAll ? rangePicker[1] ? rangePicker[1].format('YYYY-MM-DD') + ' 23:59:59' : '' : ''
                };
            } else {
                params.ids = id;
                params.checkAll = false;
            }

            _this.setState({
                spinning: true
            }, function () {
                _ajax2.default.get('/hcm/dealer/delete', {
                    params: params
                }).then(function (response) {
                    _this.setState({
                        spinning: false
                    }, function () {

                        if (response.data.status == '10000') {
                            _this.onSearch(true);
                        }
                        _message3.default.success(response.data.message);
                    });
                }).catch(function (error) {
                    _this.setState({
                        spinning: false
                    });
                    _message3.default.error(error.statusText);
                });
            });
        };

        _this.allStartConfirm = function (type, id, bl) {
            var _this$state4 = _this.state,
                selectedRowKeys = _this$state4.selectedRowKeys,
                startTarget = _this$state4.startTarget;

            if (!selectedRowKeys.length && type == 'all') {
                _message3.default.error('至少选择一条');
                return;
            }
            startTarget.type = type;
            startTarget.id = id;
            if (type == 'close') {
                startTarget = {};
            }

            _this.setState({
                visible: bl,
                startTarget: startTarget
            });
        };

        _this.allRmConfirm = function (type, id) {
            var _this$state5 = _this.state,
                checkAll = _this$state5.checkAll,
                totalNum = _this$state5.totalNum,
                selectedRowKeys = _this$state5.selectedRowKeys;

            if (!selectedRowKeys.length && type == 'all') {
                _message3.default.error('至少选择一条');
                return;
            }
            _modal2.default.confirm({
                title: null,
                maskClosable: false,
                content: type == 'all' ? React.createElement(
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
                        null,
                        '\u4F60\u786E\u8BA4\u8981\u5220\u9664\u52FE\u9009\u7684',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            checkAll ? totalNum : selectedRowKeys.length
                        ),
                        '\u9879\u5BA2\u6237\u4FE1\u606F\u5417'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u5220\u9664\u540E',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            '\u76F8\u5173\u5BA2\u6237\u4FE1\u606F\u5C06\u65E0\u6CD5\u627E\u56DE'
                        )
                    )
                ) : React.createElement(
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
                        null,
                        '\u4F60\u786E\u8BA4\u8981\u5220\u9664\u8BE5\u5BA2\u6237\u4FE1\u606F\u5417\uFF1F'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u5220\u9664\u540E',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            '\u76F8\u5173\u5BA2\u6237\u4FE1\u606F\u5C06\u65E0\u6CD5\u627E\u56DE'
                        )
                    )
                ),
                okText: '确定',
                cancelText: '取消',
                className: 'alert-item-confirm',
                onOk: function onOk() {
                    return _this.allRm(type, id);
                }
            });
        };

        _this.state = {
            visible: false,
            pageNo: 1,
            pageSize: 10,
            checkAll: false,
            totalNum: null,
            dataList: [],

            dealername: null,
            takePeople: null,
            rangePicker: [null, null],
            oldSearch: {
                dealername: null,
                takePeople: null,
                rangePicker: [null, null]
            },

            restorePicker: [moment(), moment().add(1, 'year')],
            spinning: false,
            selectedRowKeys: [],
            startTarget: {}

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

exports.default = _form2.default.create()(App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=255_bbd5fe75a408879d193e.js.map