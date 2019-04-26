(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./app/widget/components/Component.js":
/*!********************************************!*\
  !*** ./app/widget/components/Component.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 *
 * @export
 * @description style:object,className:str
 * @class AddIcon 
 * @extends {React.Component}
 */
var AddIcon = exports.AddIcon = function (_React$Component) {
    _inherits(AddIcon, _React$Component);

    function AddIcon(props) {
        _classCallCheck(this, AddIcon);

        return _possibleConstructorReturn(this, (AddIcon.__proto__ || Object.getPrototypeOf(AddIcon)).call(this, props));
    }

    _createClass(AddIcon, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                style = _props.style,
                className = _props.className;

            return React.createElement("img", { className: className, style: style, src: "../../../../img/icon/add2.png" });
        }
    }]);

    return AddIcon;
}(React.Component);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/Copyright.js":
/*!********************************************!*\
  !*** ./app/widget/components/Copyright.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Copyright = function (_React$Component) {
    _inherits(Copyright, _React$Component);

    function Copyright(props) {
        _classCallCheck(this, Copyright);

        return _possibleConstructorReturn(this, (Copyright.__proto__ || Object.getPrototypeOf(Copyright)).call(this, props));
    }

    _createClass(Copyright, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: this.props.clazzName ? this.props.clazzName : 'Copyright' },
                'Copyright \xA9 \u676D\u5DDE\u4E45\u70B9\u7F51\u7EDC\u6280\u672F\u6709\u9650\u516C\u53F8'
            );
        }
    }]);

    return Copyright;
}(React.Component);

exports.default = Copyright;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/index/Administrator/ComplaintsAccount/tpl.js":
/*!*****************************************************************!*\
  !*** ./app/widget/index/Administrator/ComplaintsAccount/tpl.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _alert = __webpack_require__(/*! antd/es/alert */ "./node_modules/_antd@3.10.1@antd/es/alert/index.js");

var _alert2 = _interopRequireDefault(_alert);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@3.10.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/alert/style/css */ "./node_modules/_antd@3.10.1@antd/es/alert/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@3.10.1@antd/es/tabs/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _Component = __webpack_require__(/*! ../../../components/Component */ "./app/widget/components/Component.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var FormItem = _form2.default.Item;
var Search = _input2.default.Search;
var TabPane = _tabs2.default.TabPane;
var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        pageNo = _that$state.pageNo,
        pageSize = _that$state.pageSize,
        totalNum = _that$state.totalNum,
        checkAll = _that$state.checkAll,
        platform = _that$state.platform,
        title = _that$state.title,
        selectedRowKeys = _that$state.selectedRowKeys,
        dataList = _that$state.dataList;

    var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: function onChange(selectedRowKeys) {
            return that.onTableCheckChange(selectedRowKeys);
        }
    };

    return React.createElement(
        'div',
        { className: 'ComplaintsAccount' },
        React.createElement(
            'div',
            { className: 'Breadcrumb' },
            React.createElement(
                _breadcrumb2.default,
                null,
                React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u7528\u6237\u7BA1\u7406'
                ),
                React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u6295\u8BC9\u8D26\u53F7\u7BA1\u7406'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'content' },
            React.createElement(
                _tabs2.default,
                { style: { display: 'flex', flexDirection: 'column' }, activeKey: platform, onChange: that.changeTabs },
                React.createElement(
                    TabPane,
                    { tab: '\u963F\u91CC\u6295\u8BC9\u8D26\u53F7', key: 'ALIBABA' },
                    React.createElement(
                        'div',
                        { className: 'list-box' },
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'div',
                                { style: { display: 'flex', justifyContent: 'space-between' } },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        _button2.default,
                                        { className: ' btn1-main', onClick: function onClick() {
                                                return that.onAddBoxFrom(true);
                                            }, style: { marginRight: '10px', color: '#fff' } },
                                        React.createElement(_Component.AddIcon, { style: { paddingRight: '8px' } }),
                                        '\u65B0\u589E'
                                    ),
                                    React.createElement(
                                        _button2.default,
                                        { onClick: function onClick() {
                                                return that.allStopStart();
                                            }, style: { marginRight: '10px' } },
                                        '\u6279\u91CF\u5220\u9664'
                                    )
                                ),
                                React.createElement(Search, {
                                    placeholder: '\u8BF7\u8F93\u5165',
                                    value: title,
                                    onSearch: that.onSearch,
                                    onChange: that.searchChange,
                                    style: { width: 250 }
                                })
                            ),
                            React.createElement(
                                'div',
                                { style: { padding: '10px 0px' } },
                                React.createElement(_alert2.default, { message: React.createElement(
                                        'div',
                                        null,
                                        '\u5171 ',
                                        React.createElement(
                                            'a',
                                            null,
                                            totalNum
                                        ),
                                        ' \u9879\uFF0C\u5DF2\u9009\u62E9 ',
                                        React.createElement(
                                            'a',
                                            null,
                                            checkAll ? totalNum : selectedRowKeys.length
                                        ),
                                        ' \u9879 ',
                                        React.createElement(
                                            'a',
                                            { onClick: function onClick() {
                                                    return that.checkAll(true);
                                                } },
                                            '\u52FE\u9009\u5168\u90E8'
                                        ),
                                        '/',
                                        React.createElement(
                                            'a',
                                            { onClick: function onClick() {
                                                    return that.checkAll(false);
                                                } },
                                            '\u53D6\u6D88\u52FE\u9009'
                                        )
                                    ), type: 'info', showIcon: true })
                            ),
                            React.createElement(_table2.default, { rowKey: 'id', pagination: false, rowSelection: rowSelection, columns: that.formatColumn(), dataSource: dataList })
                        ),
                        React.createElement(
                            'div',
                            { className: 'footer' },
                            React.createElement(
                                'div',
                                { className: 'info' },
                                '\u5171 ' + totalNum + ' \u6761\u8BB0\u5F55 ',
                                '\xA0\xA0',
                                '\u7B2C  ' + pageNo + '  / ' + Math.ceil(totalNum / pageSize) + ' \u9875'
                            ),
                            React.createElement(_pagination2.default, { pageSize: pageSize, current: pageNo, total: totalNum, onChange: that.changePagination, onShowSizeChange: that.onPaginationSize, showSizeChanger: true, showQuickJumper: true })
                        )
                    )
                ),
                React.createElement(
                    TabPane,
                    { tab: '\u4EAC\u4E1C\u6295\u8BC9\u8D26\u53F7', key: 'JINGDONG' },
                    React.createElement(
                        'div',
                        { className: 'list-box' },
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'div',
                                { style: { display: 'flex', justifyContent: 'space-between' } },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        _button2.default,
                                        { className: ' btn1-main', onClick: function onClick() {
                                                return that.onAddBoxFrom(true);
                                            }, style: { marginRight: '10px' } },
                                        '\u65B0\u589E'
                                    ),
                                    React.createElement(
                                        _button2.default,
                                        { onClick: function onClick() {
                                                return that.allStopStart();
                                            }, style: { marginRight: '10px' } },
                                        '\u6279\u91CF\u5220\u9664'
                                    )
                                ),
                                React.createElement(Search, {
                                    placeholder: '\u8BF7\u8F93\u5165',
                                    value: title,
                                    onSearch: that.onSearch,
                                    onChange: that.searchChange,
                                    style: { width: 250 }
                                })
                            ),
                            React.createElement(
                                'div',
                                { style: { padding: '10px 0px' } },
                                React.createElement(_alert2.default, { message: React.createElement(
                                        'div',
                                        null,
                                        '\u5171 ',
                                        React.createElement(
                                            'a',
                                            null,
                                            totalNum
                                        ),
                                        ' \u9879\uFF0C\u5DF2\u9009\u62E9 ',
                                        React.createElement(
                                            'a',
                                            null,
                                            checkAll ? totalNum : selectedRowKeys.length
                                        ),
                                        ' \u9879 ',
                                        React.createElement(
                                            'a',
                                            { onClick: function onClick() {
                                                    return that.checkAll(true);
                                                } },
                                            '\u52FE\u9009\u5168\u90E8'
                                        ),
                                        '/',
                                        React.createElement(
                                            'a',
                                            { onClick: function onClick() {
                                                    return that.checkAll(false);
                                                } },
                                            '\u53D6\u6D88\u52FE\u9009'
                                        )
                                    ), type: 'info', showIcon: true })
                            ),
                            React.createElement(_table2.default, { rowKey: 'id', pagination: false, rowSelection: rowSelection, columns: that.formatColumn(), dataSource: dataList })
                        ),
                        React.createElement(
                            'div',
                            { className: 'footer' },
                            React.createElement(
                                'div',
                                { className: 'info' },
                                '\u5171 ' + totalNum + ' \u6761\u8BB0\u5F55 ',
                                '\xA0\xA0',
                                '\u7B2C  ' + pageNo + '  / ' + Math.ceil(totalNum / pageSize) + ' \u9875'
                            ),
                            React.createElement(_pagination2.default, { pageSize: pageSize, current: pageNo, total: totalNum, onChange: that.changePagination, onShowSizeChange: that.onPaginationSize, showSizeChanger: true, showQuickJumper: true })
                        )
                    )
                )
            )
        ),
        React.createElement(AddBoxFrom, { that: that }),
        React.createElement(_Copyright2.default, { clazzName: 'copyright' })
    );
});

exports.default = Tpl;


var AddBoxFrom = _form2.default.create()(function (props) {
    var _props$form = props.form,
        getFieldDecorator = _props$form.getFieldDecorator,
        resetFields = _props$form.resetFields,
        validateFields = _props$form.validateFields;
    var _props$that = props.that,
        state = _props$that.state,
        onAddBoxFrom = _props$that.onAddBoxFrom,
        onSubmit = _props$that.onSubmit;

    var addHandleSubmit = function addHandleSubmit(e) {
        e.preventDefault();
        validateFields(function (err, values) {
            if (!err) {
                onSubmit(values, resetFields);
            }
        });
    };
    var cancel = function cancel(e) {
        e.preventDefault();
        resetFields();
        onAddBoxFrom(false);
    };

    return React.createElement(
        _modal2.default,
        {
            maskClosable: false,
            title: state.targetData.id ? '编辑' : '新增',
            onCancel: cancel,
            visible: state.actionVisible,
            onOk: addHandleSubmit,
            className: 'YellowWhite'
        },
        React.createElement(
            _form2.default,
            { onSubmit: addHandleSubmit },
            React.createElement(
                FormItem,
                {
                    label: React.createElement(
                        'span',
                        null,
                        '\u540D\u79F0'
                    ),
                    labelCol: { span: 7 },
                    wrapperCol: { span: 12 }
                },
                getFieldDecorator('title', {
                    initialValue: state.targetData.title,
                    rules: [{ required: true, message: '请输入名称' }]
                })(React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165\u540D\u79F0\uFF0C\u5E76\u4FDD\u6301\u572825\u4E2A\u5B57\u4EE5\u5185', maxLength: 25 }))
            ),
            React.createElement(
                FormItem,
                {
                    label: React.createElement(
                        'span',
                        null,
                        '\u8D26\u53F7'
                    ),
                    labelCol: { span: 7 },
                    wrapperCol: { span: 12 }
                },
                getFieldDecorator('username', {
                    initialValue: state.targetData.username,
                    rules: [{ required: true, message: '请输入账号' }]
                })(React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165', maxLength: 45 }))
            ),
            React.createElement(
                FormItem,
                {
                    label: React.createElement(
                        'span',
                        null,
                        '\u5BC6\u7801'
                    ),
                    labelCol: { span: 7 },
                    wrapperCol: { span: 12 }
                },
                getFieldDecorator('password', {
                    initialValue: state.targetData.password,
                    rules: [{ required: true, message: '请输入密码' }]
                })(React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165', maxLength: 45 }))
            ),
            React.createElement(
                FormItem,
                {
                    label: React.createElement(
                        'span',
                        null,
                        state.platform == 'ALIBABA' ? '淘宝Cookie' : '京东Cookie'
                    ),
                    labelCol: { span: 7 },
                    wrapperCol: { span: 12 }
                },
                getFieldDecorator('cookie', {
                    initialValue: state.targetData.cookie,
                    rules: [{ required: true, message: '请输入淘宝Cookie' }]
                })(React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165' }))
            ),
            state.platform == 'ALIBABA' ? React.createElement(
                FormItem,
                {
                    label: React.createElement(
                        'span',
                        null,
                        '1688Cookie'
                    ),
                    labelCol: { span: 7 },
                    wrapperCol: { span: 12 }
                },
                getFieldDecorator('cookie1688', {
                    initialValue: state.targetData.cookie1688
                })(React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165' }))
            ) : null
        )
    );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=63_fee11d616be97b46602b.js.map