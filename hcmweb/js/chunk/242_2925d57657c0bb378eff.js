(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[242],{

/***/ "./app/widget/index/Brand/ClientCheck/main.js":
/*!****************************************************!*\
  !*** ./app/widget/index/Brand/ClientCheck/main.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _dropdown = __webpack_require__(/*! antd/es/dropdown */ "./node_modules/_antd@3.10.1@antd/es/dropdown/index.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = __webpack_require__(/*! antd/es/menu */ "./node_modules/_antd@3.10.1@antd/es/menu/index.js");

var _menu2 = _interopRequireDefault(_menu);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@3.10.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@3.10.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/dropdown/style/css */ "./node_modules/_antd@3.10.1@antd/es/dropdown/style/css.js");

__webpack_require__(/*! antd/es/menu/style/css */ "./node_modules/_antd@3.10.1@antd/es/menu/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@3.10.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/ClientCheck/tpl.js");

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
                bossid: bl ? null : _this.state.bossid,
                takePeople: bl ? null : _this.state.takePeople,
                contact: bl ? null : _this.state.contact,
                memoDealername: bl ? null : _this.state.memoDealername,
                oldSearch: {
                    dealername: bl ? null : _this.state.dealername,
                    bossid: bl ? null : _this.state.bossid,
                    takePeople: bl ? null : _this.state.takePeople,
                    contact: bl ? null : _this.state.contact,
                    memoDealername: bl ? null : _this.state.memoDealername
                }
            }, function () {
                _this.getList();
            });
        };

        _this.getList = function () {
            var _this$state = _this.state,
                dealername = _this$state.dealername,
                bossid = _this$state.bossid,
                takePeople = _this$state.takePeople,
                contact = _this$state.contact,
                memoDealername = _this$state.memoDealername;

            _ajax2.default.get('/hcm/dealer/getlist', {
                params: {
                    pageNo: _this.state.pageNo,
                    pageSize: _this.state.pageSize,
                    dealername: dealername,
                    bossid: bossid,
                    takePeople: takePeople,
                    contact: contact,
                    memoDealername: memoDealername
                }
            }).then(function (response) {
                var dataList = response.data.data;
                _this.setState({
                    dataList: dataList,
                    pageNo: dataList.page_info.pageNo,
                    pageSize: dataList.page_info.pageSize,
                    linkSwitch: dataList.bmainCustomer.invitestatus == '0' ? false : true,
                    checkAll: false,
                    selectedRowKeys: [],
                    totalNum: dataList.page_info.totalNum
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.getColumn = function () {
            _ajax2.default.get('/hcm/hcmCustomModel/getBybmcidAndModule', {
                params: {
                    module: 'DEALER'
                }
            }).then(function (response) {
                _this.setState({
                    setTableData: response.data.data
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

        _this.formatColumn = function () {
            var arr = [];
            var column = [{
                title: 'No',
                dataIndex: 'index',
                key: 'index',
                fixed: 'left',
                width: '80px',
                render: function render(text, record, index) {
                    return React.createElement(
                        'div',
                        { style: { width: '80px' } },
                        index + 1
                    );
                }
            }];
            var data = _this.state.setTableData;

            var _loop = function _loop(key) {
                data[key].data.forEach(function (item, index) {
                    if (item.isChecked) {
                        item.target = [key, index, item.fieldRequired];
                        return arr.push(item);
                    }
                });
            };

            for (var key in data) {
                _loop(key);
            }
            arr.sort(function (a, b) {
                return a.sort - b.sort;
            });
            arr.forEach(function (item, index) {
                column.push({
                    title: item.fieldname,
                    dataIndex: item.fieldvalue,
                    key: item.fieldvalue,

                    render: function render(text, record, index) {

                        return item.fieldtype == 'DATE' ? text ? moment(text).format('YYYY-MM-DD') : text : item.fieldvalue === 'dealername' ? JSON.stringify(record.status_info) == '{}' ? React.createElement(
                            'a',
                            { className: 'tab-a-text', onClick: function onClick() {
                                    return _this.ClientDetail.current.onShow(record.id);
                                } },
                            text
                        ) : React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return _this.ClientDetail.current.onShow(record.id);
                                    } },
                                text
                            ),
                            React.createElement(
                                _tooltip2.default,
                                { placement: 'bottom', title: record.status_info.info },
                                React.createElement(
                                    'span',
                                    { className: record.status_info.info_type },
                                    record.status_info.title
                                )
                            )
                        ) : React.createElement(
                            'div',
                            { className: 'table-tb-box' },
                            React.createElement(
                                _tooltip2.default,
                                { placement: 'bottom', title: text },
                                text
                            )
                        );
                    }

                });
            });
            column.push({
                title: React.createElement(
                    'div',
                    { className: 'action' },
                    React.createElement(
                        'span',
                        null,
                        '\u64CD\u4F5C'
                    )
                ),
                key: 'action',
                fixed: 'right',
                width: '160px',
                render: function render(text, record, index) {
                    return React.createElement(
                        'div',
                        { className: 'action' },
                        React.createElement(
                            'a',
                            { href: '/index.html#/CustomerEditor/' + record.id },
                            React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_edit.png' }),
                            '\u7F16\u8F91'
                        ),
                        React.createElement(_divider2.default, { type: 'vertical' }),
                        React.createElement(
                            _dropdown2.default,
                            { overlay: React.createElement(
                                    _menu2.default,
                                    null,
                                    React.createElement(
                                        _menu2.default.Item,
                                        null,
                                        React.createElement(
                                            'a',
                                            { className: 'A-COLOR', href: '/index.html#/ChangeHistorys/DEALER/' + record.dealername + '/' + record.id },
                                            React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_history.png' }),
                                            '\u53D8\u66F4\u5386\u53F2'
                                        )
                                    ),
                                    React.createElement(
                                        _menu2.default.Item,
                                        null,
                                        React.createElement(
                                            'a',
                                            { className: 'A-COLOR', style: { color: '#1890ff' }, onClick: function onClick() {
                                                    return _this.allStopConfirm('item', record.id);
                                                } },
                                            React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_Release.png' }),
                                            '\u89E3\u7EA6'
                                        )
                                    )
                                ) },
                            React.createElement(
                                'a',
                                { className: 'ant-dropdown-link' },
                                '\xB7\xB7\xB7\xA0\u66F4\u591A'
                            )
                        )
                    );
                }
            });
            return column;
        };

        _this.addModalStatus = function (bl) {
            _this.setState({
                addModalStatus: bl,
                clientNames: []
            });
        };

        _this.addClientChange = function (value) {
            _this.setState({
                clientNames: value
            });
        };

        _this.onSubClients = function () {
            if (_this.state.clientNames.length > 300) {
                _message3.default.error(React.createElement(
                    'span',
                    null,
                    '\u5BA2\u6237\u540D\u79F0\u6570\u91CF\u6BCF\u6B21\u6700\u591A\u6DFB\u52A0300\u4E2A\uFF01\u5F53\u524D\u6570\u91CF\u4E3A',
                    React.createElement(
                        'span',
                        null,
                        _this.state.clientNames.length
                    )
                ));
                return;
            }
            _this.setState({
                spinning: true
            }, function () {
                _ajax2.default.post('/hcm/dealer/create', {
                    dealernameList: JSON.stringify(_this.state.clientNames)
                }).then(function (response) {
                    if (response.data.data.dbRepeateSet.length) {
                        response.data.data.dbRepeateSet.forEach(function (item) {
                            _message3.default.error('\u5DF2\u6709\u540D\u4E3A' + item + '\u7684\u5BA2\u6237\uFF0C\u8BF7\u52FF\u91CD\u590D\u6DFB\u52A0');
                        });
                    } else {
                        _this.setState({
                            clientNames: []
                        });
                    }
                    _this.setState({
                        spinning: false,
                        addModalStatus: false

                    }, function () {
                        _this.getList();
                        if (response.data.data.insertSet.length) {
                            _message3.default.success(response.data.message);
                        }
                    });
                }).catch(function (error) {

                    _this.setState({
                        spinning: false
                    });
                    _message3.default.error(error.statusText);
                });
            });
        };

        _this.inviteLinkStatus = function (bl) {
            _this.setState({
                inviteLinkStatus: bl
            });
        };

        _this.appLinkStatusStatus = function (bl) {
            _this.setState({
                appLinkStatus: bl
            });
        };

        _this.inviteLinkSwitch = function (checked) {
            _this.setState({
                linkSwitch: checked
            }, function () {
                _ajax2.default.get('/hcm/cus/changeInviteStatus', {
                    params: {
                        invitecode: _this.state.dataList.bmainCustomer.invitecode,
                        status: _this.state.linkSwitch ? 1 : 0
                    }
                }).then(function (response) {
                    _this.getList();
                }).catch(function (error) {
                    _message3.default.error(error.statusText);
                });
            });
        };

        _this.setTableStatus = function (bl) {
            _this.setState({
                setTableStatus: bl
            }, function () {
                if (bl == false) {
                    _this.getColumn();
                }
            });
        };

        _this.num = 100;

        _this.oCheckitem = function (e, key, item, index) {
            var setTableData = _this.state.setTableData;
            setTableData[key].data[index].isChecked = e.target.checked ? 1 : 0;
            setTableData[key].data[index].sort = _this.num++;
            _this.setState({
                setTableData: setTableData
            });
        };

        _this.onSortList = function (data) {
            _this.setState({
                setTableData: data
            });
        };

        _this.onSortSubmit = function (data) {
            var arr = [];
            data.forEach(function (item, index) {
                arr.push(item.id);
            });
            _this.setState({
                spinning: true
            }, function () {
                _ajax2.default.get('/hcm/hcmCustomModel/saveSort', {
                    params: {
                        ids: arr.join(','),
                        module: 'DEALER'
                    }
                }).then(function (response) {
                    if (response.data.status == '10000') {
                        _this.getColumn();
                        _this.setTableStatus(false);
                    }

                    _this.setState({
                        spinning: false
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
            // console.log(selectedRowKeys)
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

        _this.allStop = function (type, id) {
            var _this$state2 = _this.state,
                selectedRowKeys = _this$state2.selectedRowKeys,
                checkAll = _this$state2.checkAll;


            var params = {};
            if (type == 'all') {
                var _this$state$oldSearch = _this.state.oldSearch,
                    dealername = _this$state$oldSearch.dealername,
                    bossid = _this$state$oldSearch.bossid,
                    takePeople = _this$state$oldSearch.takePeople,
                    contact = _this$state$oldSearch.contact,
                    memoDealername = _this$state$oldSearch.memoDealername;


                params = {
                    ids: selectedRowKeys.join(','),
                    checkAll: checkAll,
                    dealername: !checkAll ? null : dealername,
                    bossid: !checkAll ? null : bossid,
                    takePeople: !checkAll ? null : takePeople,
                    contact: !checkAll ? null : contact,
                    memoDealername: !checkAll ? null : memoDealername

                };
            } else {
                params.ids = id;
                params.checkAll = false;
            }

            _this.setState({
                spinning: true
            }, function () {
                _ajax2.default.get('/hcm/dealer/stop', {
                    params: params
                }).then(function (response) {

                    _this.setState({
                        spinning: false,
                        selectedRowKeys: []
                    }, function () {
                        _message3.default.success(response.data.message);
                        if (response.data.status == '10000') {
                            _this.getColumn();
                            _this.onSearch(true);
                        }
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
                params.ids = selectedRowKeys.join(',');
                params.checkAll = checkAll;
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
                            _this.getColumn();
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

        _this.allStopConfirm = function (type, id) {
            var _this$state4 = _this.state,
                checkAll = _this$state4.checkAll,
                totalNum = _this$state4.totalNum,
                selectedRowKeys = _this$state4.selectedRowKeys;

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
                        { className: 'Dtitle' },
                        '\u4F60\u786E\u8BA4\u8981\u5C06\u52FE\u9009\u7684',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            checkAll ? totalNum : selectedRowKeys.length
                        ),
                        '\u9879\u5BA2\u6237\u79FB\u5165\u89E3\u7EA6\u5417\uFF1F'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u89E3\u7EA6\u540E',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            '\u5C06\u4E0E\u5BA2\u6237\u53D6\u6D88\u5408\u4F5C\u5173\u7CFB'
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
                        { className: 'Dtitle' },
                        '\u4F60\u786E\u8BA4\u8981\u5C06\u8BE5\u5BA2\u6237\u79FB\u5165\u89E3\u7EA6\u5417'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u89E3\u7EA6\u540E',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            '\u5C06\u4E0E\u5BA2\u6237\u53D6\u6D88\u5408\u4F5C\u5173\u7CFB'
                        )
                    )
                ),
                okText: '确定',
                cancelText: '取消',
                okButtonProps: { className: 'btn2-main' },
                cancelButtonProps: { className: 'btn2-sub' },
                className: 'alert-item-confirm',
                onOk: function onOk() {
                    return _this.allStop(type, id);
                }
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
                className: 'alert-item-confirm YellowWhite',
                onOk: function onOk() {
                    return _this.allRm(type, id);
                }
            });
        };

        _this.ClientDetail = React.createRef();
        _this.state = {
            pageNo: 1,
            pageSize: 10,
            checkAll: false,
            totalNum: 0,

            dealername: null,
            bossid: null,
            takePeople: null,
            contact: null,
            memoDealername: null,

            oldSearch: {
                dealername: null,
                bossid: null,
                takePeople: null,
                contact: null,
                memoDealername: null

            },

            spinning: false,
            selectedRowKeys: [],
            setTableStatus: false,
            addModalStatus: false,
            inviteLinkStatus: false,
            appLinkStatus: false,
            linkSwitch: false,
            clientNames: [],
            dataList: {}
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
            this.getColumn();
        }
        //---

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
//# sourceMappingURL=242_2925d57657c0bb378eff.js.map