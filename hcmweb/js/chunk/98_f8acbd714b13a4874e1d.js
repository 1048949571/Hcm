(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

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

/***/ "./app/widget/components/Layout/index.js":
/*!***********************************************!*\
  !*** ./app/widget/components/Layout/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

var _Copyright = __webpack_require__(/*! ../Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

__webpack_require__(/*! ./index.less */ "./app/widget/components/Layout/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightBox = function RightBox(props) {
  return React.createElement(
    'div',
    { className: 'layout-wrapper ' + (props.className || '') },
    React.createElement(
      'div',
      { className: 'header-wrapper' },
      React.createElement(
        _breadcrumb2.default,
        { className: 'breadcrumb' },
        props.breadcrumbList.map(function (v, i) {
          if (props.linkList[i] === '') {
            return React.createElement(
              _breadcrumb2.default.Item,
              { key: v },
              v
            );
          }
          return React.createElement(
            _breadcrumb2.default.Item,
            {
              href: 'javascript:;',
              key: v },
            React.createElement(
              'span',
              { onClick: function onClick() {
                  props.history.go(-props.linkList[i]);
                } },
              v
            )
          );
        })
      )
    ),
    React.createElement(
      'div',
      { className: 'layout-content' },
      props.children
    ),
    React.createElement(
      'div',
      { className: 'copyright' },
      React.createElement(_Copyright2.default, null)
    )
  );
};

RightBox.defaultProps = {
  title: '标题',
  breadcrumbList: [],
  linkList: []
};

exports.default = RightBox;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/Layout/index.less":
/*!*************************************************!*\
  !*** ./app/widget/components/Layout/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/WhiteList/tpl.js":
/*!*************************************************!*\
  !*** ./app/widget/index/Brand/WhiteList/tpl.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _alert = __webpack_require__(/*! antd/es/alert */ "./node_modules/_antd@3.10.1@antd/es/alert/index.js");

var _alert2 = _interopRequireDefault(_alert);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@3.10.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/alert/style/css */ "./node_modules/_antd@3.10.1@antd/es/alert/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@3.10.1@antd/es/tabs/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _Component = __webpack_require__(/*! ../../../components/Component */ "./app/widget/components/Component.js");

var _main = __webpack_require__(/*! ../../../components/TagInput/main */ "./app/widget/components/TagInput/main.js");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Option = _select2.default.Option;
var FormItem = _form2.default.Item;
var Search = _input2.default.Search;
var TabPane = _tabs2.default.TabPane;

var TYPELIST = [{
    name: '淘宝天猫',
    type: 'TB'
}, {
    name: '1688网',
    type: '1688'
}, {
    name: '闲鱼',
    type: 'XY'
}, {
    name: '拼多多',
    type: 'PDD'
}, {
    name: '京东商城',
    type: 'JD'
}, {
    name: '苏宁易购',
    type: 'SN'
}, {
    name: '当当网',
    type: 'DD'
}, {
    name: '唯品会',
    type: 'WP'
}];
/////////
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
        _Layout2.default,
        {
            breadcrumbList: ['维权服务', '维权白名单'],
            linkList: ['', '']
        },
        React.createElement(
            'div',
            { className: 'WhiteList' },
            React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                    _tabs2.default,
                    { style: { display: 'flex', flexDirection: 'column' }, activeKey: platform, onChange: that.changeTabs },
                    TYPELIST.map(function (item, index) {
                        return React.createElement(
                            TabPane,
                            _defineProperty({ key: index, tab: item.name }, 'key', item.type),
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
                                                { className: 'btn1-main btn_f', onClick: function onClick() {
                                                        return that.onAddBoxFrom(true);
                                                    }, style: { marginRight: '10px', color: '#fff' } },
                                                React.createElement(_Component.AddIcon, { style: { paddingRight: '8px' } }),
                                                '\u65B0\u589E'
                                            ),
                                            React.createElement(
                                                _button2.default,
                                                { className: 'btn1-sub', onClick: function onClick() {
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
                        );
                    })
                )
            ),
            React.createElement(AddBoxFrom, { that: that })
        )
    );
});

exports.default = Tpl;


var AddBoxFrom = _form2.default.create()(function (props) {
    var _props$form = props.form,
        getFieldDecorator = _props$form.getFieldDecorator,
        resetFields = _props$form.resetFields,
        validateFields = _props$form.validateFields,
        setFieldsValue = _props$form.setFieldsValue;
    var _props$that = props.that,
        state = _props$that.state,
        onAddBoxFrom = _props$that.onAddBoxFrom,
        onSubmit = _props$that.onSubmit;

    var addHandleSubmit = function addHandleSubmit(e) {
        e.preventDefault();
        validateFields(function (err, values) {
            if (!err) {
                if (values.title.length > 300) {
                    _message3.default.error(React.createElement(
                        'span',
                        null,
                        '\u6BCF\u6B21\u6700\u591A\u6DFB\u52A0300\u4E2A\uFF01\u5F53\u524D\u6570\u91CF\u4E3A',
                        React.createElement(
                            'span',
                            null,
                            values.title.length
                        )
                    ));
                    return;
                }
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
            wrapClassName: 'boxModal',
            title: '新增',
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
                        state.platform == 'TB' || state.platform == '1688' || state.platform == 'XY' ? '旺旺名称' : '店铺名称'
                    ),
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 }
                },
                getFieldDecorator('title', {
                    rules: [{ required: true, message: '请输入名称' }]
                })(React.createElement(_main2.default, {
                    className: '',
                    style: { width: 376, height: 300 },
                    placeholder: '\u8BF7\u8F93\u5165' + (state.platform == 'TB' || state.platform == '1688' || state.platform == 'XY' ? '旺旺名称' : '店铺名称') + '\u540D\u79F0,\u4E00\u884C\u4E00\u4E2A\uFF0C\u53EF\u591A\u4E2A\uFF0C\u6700\u591A300\u4E2A.',
                    maxText: 64
                })
                // <Select
                //     mode="tags"
                //     placeholder={`一行一个，可多个，最多300个.`}
                //     style={{ width: '100%' }}
                //     className='addclient'
                //     maxTagCount={300}
                //     onBlur={changeItem}
                //     dropdownClassName='dropdownaddclient'
                //     tokenSeparators={['    ']}
                // >

                // </Select>
                )
            )
        )
    );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=98_f8acbd714b13a4874e1d.js.map