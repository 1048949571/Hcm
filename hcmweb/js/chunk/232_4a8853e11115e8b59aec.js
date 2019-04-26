(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[232],{

/***/ "./app/widget/index/Brand/AccountManagement/main.js":
/*!**********************************************************!*\
  !*** ./app/widget/index/Brand/AccountManagement/main.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _switch = __webpack_require__(/*! antd/es/switch */ "./node_modules/_antd@3.10.1@antd/es/switch/index.js");

var _switch2 = _interopRequireDefault(_switch);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/switch/style/css */ "./node_modules/_antd@3.10.1@antd/es/switch/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/AccountManagement/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

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
                _this.state.dataList.forEach(function (item, index) {
                    selectedRowKeys.push(item.userid);
                });
            } else {
                selectedRowKeys = [];
            }
            _this.setState({
                checkAll: bl,
                selectedRowKeys: selectedRowKeys
            });
        };

        _this.allStartOrStop = function (type, status) {
            var _this$state = _this.state,
                selectedRowKeys = _this$state.selectedRowKeys,
                checkAll = _this$state.checkAll,
                totalNum = _this$state.totalNum;

            if (type == 'all' && selectedRowKeys.length == 0) {
                _message3.default.error('至少选择一条');
                return;
            }
            var data = {};
            var confirminfo = {};
            var _this$state$oldSearch = _this.state.oldSearch,
                username = _this$state$oldSearch.username,
                realname = _this$state$oldSearch.realname,
                departid = _this$state$oldSearch.departid,
                status1 = _this$state$oldSearch.status1;

            if (type == 'all') {
                data = {
                    userIds: checkAll ? 'checkAllBmc' : selectedRowKeys.join(','),
                    status: status,
                    usertype: 'c',
                    realname: checkAll ? realname : '',
                    departid: checkAll ? departid : '',
                    username: checkAll ? username : '',
                    status1: checkAll ? status1 : ''
                };
                if (status == '0') {
                    confirminfo.title = null;
                    confirminfo.content = React.createElement(
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
                            '\u4F60\u786E\u8BA4\u8981\u505C\u7528\u52FE\u9009\u7684 ',
                            checkAll ? totalNum : selectedRowKeys.length,
                            ' \u9879\u7528\u6237\u8D26\u53F7\u5417?'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\u505C\u7528\u540E',
                            React.createElement(
                                'span',
                                { className: 'red' },
                                '\u8D26\u53F7\u5C06\u65E0\u6CD5\u4F7F\u7528'
                            )
                        )
                    );
                } else {
                    confirminfo.title = null;
                    confirminfo.content = React.createElement(
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
                            '\u4F60\u786E\u8BA4\u8981\u542F\u7528\u52FE\u9009\u7684 ',
                            checkAll ? totalNum : selectedRowKeys.length,
                            ' \u9879\u7528\u6237\u8D26\u53F7\u5417?'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\u542F\u7528\u540E',
                            React.createElement(
                                'span',
                                { className: 'red' },
                                '\u8D26\u53F7\u5C06\u6062\u590D\u6B63\u5E38\u4F7F\u7528'
                            )
                        )
                    );
                }
            } else {
                data = {
                    userIds: type,
                    status: status,
                    usertype: 'c'
                };
                if (status == '0') {
                    confirminfo.title = null;
                    confirminfo.content = React.createElement(
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
                            '\u4F60\u786E\u8BA4\u8981\u505C\u7528\u8BE5\u7528\u6237\u5417\uFF1F'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\u505C\u7528\u540E',
                            React.createElement(
                                'span',
                                { className: 'red' },
                                '\u8D26\u53F7\u5C06\u65E0\u6CD5\u4F7F\u7528'
                            )
                        )
                    );
                } else {
                    confirminfo.title = null;
                    confirminfo.content = React.createElement(
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
                            '\u4F60\u786E\u8BA4\u8981\u542F\u7528\u8BE5\u7528\u6237\u8D26\u53F7\u5417\uFF1F'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\u542F\u7528\u540E',
                            React.createElement(
                                'span',
                                { className: 'red' },
                                '\u8D26\u53F7\u5C06\u6062\u590D\u6B63\u5E38\u4F7F\u7528'
                            )
                        )
                    );
                }
            }
            var that = _this;
            confirm({
                title: confirminfo.title,
                content: confirminfo.content,
                okText: '确定',
                cancelText: '取消',
                className: 'alert-item-confirm YellowWhite',
                onOk: function onOk() {
                    _ajax2.default.post('/hcm/user/StartOrStop', data).then(function (response) {
                        if (response.data.status == '10000') {
                            that.setState({
                                checkAll: false,
                                selectedRowKeys: []
                            }, function () {
                                that.onSearch(true);
                            });

                            _message3.default.success(response.data.message);
                        }
                    }).catch(function (error) {
                        _message3.default.error(error.statusText);
                    });
                }
            });
        };

        _this.unBindphone = function (record) {
            var that = _this;
            confirm({
                title: '你确认要解绑该用户绑定手机吗？',
                content: React.createElement(
                    'p',
                    null,
                    '\u89E3\u7ED1\u540E',
                    React.createElement(
                        'span',
                        { className: 'red' },
                        '\u8D26\u53F7\u5C06\u53D6\u6D88\u5F53\u524D\u7ED1\u5B9A\u624B\u673A'
                    )
                ),
                okText: '确定',
                cancelText: '取消',
                className: 'YellowWhite',
                onOk: function onOk() {
                    _ajax2.default.get('/hcm/user/UnbindPhone', {
                        params: {
                            mobiles: record.userid,
                            usertype: 'c'
                        }
                    }).then(function (response) {
                        _message3.default.success(response.data.message);
                        if (response.data.status == '10000') {
                            that.getList();
                        }
                    }).catch(function (error) {
                        _message3.default.error(error.statusText);
                    });
                }
            });
        };

        _this.onTableCheckChange = function (selectedRowKeys) {
            _this.setState({
                selectedRowKeys: selectedRowKeys,
                checkAll: false
            });
        };

        _this.getDepartmentList = function () {
            _ajax2.default.get('/hcm/department/fuByIds', {
                params: {
                    id: 0
                }
            }).then(function (response) {
                if (response.data.status == '10000' && response.data.data) {
                    var _format = function _format(data) {
                        return data.map(function (item, index) {
                            if (item.subSysDepartment != null) {
                                return {
                                    title: item.departName,
                                    value: '' + item.id,
                                    key: '' + item.id,
                                    children: _format(item.subSysDepartment)
                                };
                            } else {
                                return {
                                    title: item.departName,
                                    value: '' + item.id,
                                    key: '' + item.id
                                };
                            }
                        });
                    };

                    var data = response.data.data;

                    var arr = _format(data);

                    arr.unshift({
                        title: '全部',
                        value: null,
                        key: null
                    });
                    _this.setState({
                        departmentList: arr
                    });
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.onSearch = function () {
            var bl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            _this.setState({
                pageNo: 1,
                username: bl ? null : _this.state.username,
                realname: bl ? null : _this.state.realname,
                departid: bl ? null : _this.state.departid,
                status: bl ? null : _this.state.status,
                oldSearch: {
                    username: bl ? null : _this.state.username,
                    realname: bl ? null : _this.state.realname,
                    departid: bl ? null : _this.state.departid,
                    status1: bl ? null : _this.state.status
                }
            }, function () {
                _this.getList();
            });
        };

        _this.getList = function () {
            var _this$state2 = _this.state,
                realname = _this$state2.realname,
                username = _this$state2.username,
                departid = _this$state2.departid,
                status = _this$state2.status,
                pageNo = _this$state2.pageNo,
                pageSize = _this$state2.pageSize;

            _ajax2.default.get('/hcm/userout/getUseroutChildrenPage', {
                params: {
                    realname: realname, username: username, departid: departid, status: status, pageNo: pageNo, pageSize: pageSize
                }
            }).then(function (response) {
                var data = response.data.data;
                _this.setState({
                    dataList: data.content,
                    totalNum: data.totalElements,
                    pageSize: data.pageSize,
                    pageNo: data.pageNumber

                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.chSearchIpt = function (e, type) {
            var state = _this.state;
            if (e && e.target && e.target.nodeName == "INPUT") {
                state[type] = e.target.value;
            } else {
                state[type] = e;
            }
            _this.setState(state);
        };

        _this.handleClearIconClick = function (type) {
            var state = _this.state;
            state[type] = null;
            _this.setState(state);
        };

        _this.chTreeSelect = function (value, label, extra, type) {
            if (value !== undefined) {
                var state = _this.state;
                state[type] = value;
                _this.setState(state);
            }
        };

        _this.formatColumn = function () {
            return [{
                title: '序号',
                dataIndex: 'index',
                key: 'index',
                render: function render(text, item, index) {
                    return index + 1;
                }
            }, {
                title: '姓名',
                dataIndex: 'realname',
                key: 'realname'
            }, {
                title: '用户名',
                dataIndex: 'username',
                key: 'username'
            }, {
                title: '绑定手机',
                dataIndex: 'mobile',
                key: 'mobile',
                render: function render(text, item, index) {
                    return text && text.length ? React.createElement(
                        'p',
                        null,
                        text,
                        React.createElement(
                            'a',
                            { style: { paddingLeft: '10px' }, onClick: function onClick() {
                                    return _this.unBindphone(item);
                                } },
                            React.createElement(_icon2.default, { type: 'link' }),
                            '\u89E3\u7ED1\u624B\u673A'
                        )
                    ) : '--';
                }
            }, {
                title: '所在部门',
                dataIndex: 'depart_name',
                key: 'depart_name'
            }, {
                title: '备注说明',
                dataIndex: 'memo',
                key: 'memo'
            }, {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render: function render(text, item, index) {
                    // text == '1' ? <span className='open'>启用</span> : <span className='close'>禁用</span>
                    return React.createElement(_switch2.default, { checked: text == '1' ? true : false, onChange: function onChange() {
                            return _this.allStartOrStop(item.userid, item.status == '0' ? '1' : '0');
                        }, checkedChildren: '\u5F00', unCheckedChildren: '\u5173', defaultChecked: true });
                }
            }, {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                width: 116,
                className: 'action-padding',
                align: 'right',
                render: function render(text, item, index) {
                    return React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'a',
                            { href: '/index.html#/AccountManagement/edit/' + item.userid },
                            React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_edit.png' }),
                            '\u7F16\u8F91'
                        )
                    );
                }
            }];
        };

        _this.state = {
            username: null,
            realname: null,
            departid: null,
            status: null,

            oldSearch: {
                username: null,
                realname: null,
                departid: null,
                status1: null
            },

            departmentList: [],
            selectedRowKeys: [],
            checkAll: false,
            dataList: [],
            totalNum: 0,
            pageSize: 10,
            pageNo: 1

        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
            this.getDepartmentList();
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/switch/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/switch/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-switch */ "./node_modules/_rc-switch@1.8.0@rc-switch/es/index.js");
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rc_switch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! omit.js */ "./node_modules/_omit.js@1.0.0@omit.js/es/index.js");
/* harmony import */ var _util_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_util/wave */ "./node_modules/_antd@3.10.1@antd/es/_util/wave.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");














var Switch = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Switch, _React$Component);

    function Switch() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Switch);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));

        _this.saveSwitch = function (node) {
            _this.rcSwitch = node;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Switch, [{
        key: 'focus',
        value: function focus() {
            this.rcSwitch.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcSwitch.blur();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                loading = _props.loading,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className;

            var classes = classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-small', size === 'small'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-loading', loading), _classNames));
            var loadingIcon = loading ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_12__["default"], { type: 'loading', className: prefixCls + '-loading-icon' }) : null;
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _util_wave__WEBPACK_IMPORTED_MODULE_11__["default"],
                { insertExtraNode: true },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_switch__WEBPACK_IMPORTED_MODULE_8___default.a, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(omit_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this.props, ['loading']), { className: classes, ref: this.saveSwitch, loadingIcon: loadingIcon }))
            );
        }
    }]);

    return Switch;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Switch);

Switch.defaultProps = {
    prefixCls: 'ant-switch'
};
Switch.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
    // HACK: https://github.com/ant-design/ant-design/issues/5368
    // size=default and size=large are the same
    size: prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"](['small', 'default', 'large']),
    className: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]
};

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/switch/style/css.js":
/*!***************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/switch/style/css.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/switch/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/switch/style/index.css":
/*!******************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/switch/style/index.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/_rc-switch@1.8.0@rc-switch/es/Switch.js":
/*!**************************************************************!*\
  !*** ./node_modules/_rc-switch@1.8.0@rc-switch/es/Switch.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);









var classNames = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");

function noop() {}

var Switch = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Switch, _Component);

  function Switch(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Switch);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _initialiseProps.call(_this);

    var checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    _this.state = { checked: checked };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Switch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          autoFocus = _props.autoFocus,
          disabled = _props.disabled;

      if (autoFocus && !disabled) {
        this.focus();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: !!nextProps.checked
        });
      }
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      if (this.props.disabled) {
        return;
      }
      if (!('checked' in this.props)) {
        this.setState({
          checked: checked
        });
      }
      this.props.onChange(checked);
    }

    // Handle auto focus when click switch in Chrome

  }, {
    key: 'focus',
    value: function focus() {
      this.node.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.node.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          className = _props2.className,
          prefixCls = _props2.prefixCls,
          disabled = _props2.disabled,
          loadingIcon = _props2.loadingIcon,
          checkedChildren = _props2.checkedChildren,
          unCheckedChildren = _props2.unCheckedChildren,
          restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_props2, ['className', 'prefixCls', 'disabled', 'loadingIcon', 'checkedChildren', 'unCheckedChildren']);

      var checked = this.state.checked;
      var switchClassName = classNames((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, className, !!className), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-checked', checked), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-disabled', disabled), _classNames));
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'button',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, {
          type: 'button',
          role: 'switch',
          'aria-checked': checked,
          disabled: disabled,
          className: switchClassName,
          ref: this.saveNode,
          onKeyDown: this.handleKeyDown,
          onClick: this.toggle,
          onMouseUp: this.handleMouseUp
        }),
        loadingIcon,
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'span',
          { className: prefixCls + '-inner' },
          checked ? checkedChildren : unCheckedChildren
        )
      );
    }
  }]);

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.toggle = function () {
    var onClick = _this2.props.onClick;

    var checked = !_this2.state.checked;
    _this2.setChecked(checked);
    onClick(checked);
  };

  this.handleKeyDown = function (e) {
    if (e.keyCode === 37) {
      // Left
      _this2.setChecked(false);
    } else if (e.keyCode === 39) {
      // Right
      _this2.setChecked(true);
    }
  };

  this.handleMouseUp = function (e) {
    if (_this2.node) {
      _this2.node.blur();
    }
    if (_this2.props.onMouseUp) {
      _this2.props.onMouseUp(e);
    }
  };

  this.saveNode = function (node) {
    _this2.node = node;
  };
};

Switch.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  checkedChildren: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  unCheckedChildren: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onMouseUp: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  defaultChecked: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  loadingIcon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node
};

Switch.defaultProps = {
  prefixCls: 'rc-switch',
  checkedChildren: null,
  unCheckedChildren: null,
  className: '',
  defaultChecked: false,
  onChange: noop,
  onClick: noop
};

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./node_modules/_rc-switch@1.8.0@rc-switch/es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/_rc-switch@1.8.0@rc-switch/es/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./Switch */ "./node_modules/_rc-switch@1.8.0@rc-switch/es/Switch.js");

/***/ })

}]);
//# sourceMappingURL=232_4a8853e11115e8b59aec.js.map