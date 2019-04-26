(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

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

/***/ "./app/widget/components/FullSpin.js":
/*!*******************************************!*\
  !*** ./app/widget/components/FullSpin.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _spin = __webpack_require__(/*! antd/es/spin */ "./node_modules/_antd@3.10.1@antd/es/spin/index.js");

var _spin2 = _interopRequireDefault(_spin);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/spin/style/css */ "./node_modules/_antd@3.10.1@antd/es/spin/style/css.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullSpin = function (_React$Component) {
    _inherits(FullSpin, _React$Component);

    function FullSpin(props) {
        _classCallCheck(this, FullSpin);

        return _possibleConstructorReturn(this, (FullSpin.__proto__ || Object.getPrototypeOf(FullSpin)).call(this, props));
    }

    _createClass(FullSpin, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                _modal2.default,
                { maskClosable: false, className: 'full-spin', bodyStyle: { textAlign: 'center' }, footer: null, closable: false, visible: this.props.spinning },
                React.createElement(_spin2.default, { size: 'large', delay: 100, spinning: true, className: 'example', tip: 'Loading...' })
            );
        }
    }]);

    return FullSpin;
}(React.Component);

exports.default = FullSpin;
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

/***/ "./app/widget/index/Administrator/BrandList/tpl.js":
/*!*********************************************************!*\
  !*** ./app/widget/index/Administrator/BrandList/tpl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@3.10.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _alert = __webpack_require__(/*! antd/es/alert */ "./node_modules/_antd@3.10.1@antd/es/alert/index.js");

var _alert2 = _interopRequireDefault(_alert);

var _popconfirm = __webpack_require__(/*! antd/es/popconfirm */ "./node_modules/_antd@3.10.1@antd/es/popconfirm/index.js");

var _popconfirm2 = _interopRequireDefault(_popconfirm);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@3.10.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/alert/style/css */ "./node_modules/_antd@3.10.1@antd/es/alert/style/css.js");

__webpack_require__(/*! antd/es/popconfirm/style/css */ "./node_modules/_antd@3.10.1@antd/es/popconfirm/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _Component = __webpack_require__(/*! ../../../components/Component */ "./app/widget/components/Component.js");

var _FullSpin = __webpack_require__(/*! ../../../components/FullSpin */ "./app/widget/components/FullSpin.js");

var _FullSpin2 = _interopRequireDefault(_FullSpin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Copyright from "../../../components/Copyright";
var FormItem = _form2.default.Item;
var Option = _select2.default.Option,
    OptGroup = _select2.default.OptGroup;
var TextArea = _input2.default.TextArea;

var Tpl = (0, _That2.default)(function (that) {
    var fullSpinVisible = that.state.fullSpinVisible;

    return React.createElement(
        _Layout2.default,
        {
            breadcrumbList: ['用户管理', '品牌方账号'],
            linkList: ['', ''],
            history: that.props.history
        },
        React.createElement(
            'div',
            { className: 'brandinfo' },
            React.createElement(Brand, { that: that }),
            React.createElement(_FullSpin2.default, { spinning: fullSpinVisible })
        )
    );
});

var Brand = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        dataList = _that$state.dataList,
        customerList = _that$state.customerList,
        versionList = _that$state.versionList,
        version = _that$state.version,
        companyMemoname = _that$state.companyMemoname,
        companyname = _that$state.companyname,
        username = _that$state.username,
        status = _that$state.status,
        kefu = _that$state.kefu,
        totalNum = _that$state.totalNum,
        pageSize = _that$state.pageSize,
        pageNo = _that$state.pageNo,
        columns = _that$state.columns,
        checkAll = _that$state.checkAll;

    var clearIconStyle = {
        width: '14px',
        height: '14px',
        opacity: 0.25,
        cursor: 'pointer'
    };
    var clearIcon = function clearIcon(fieldName) {
        return that.state[fieldName] && that.state[fieldName].length ? React.createElement(_icon2.default, {
            type: 'close-circle',
            onClick: function onClick() {
                return that.handleClearIconClick(fieldName);
            },
            style: clearIconStyle
        }) : null;
    };
    return React.createElement(
        'div',
        { className: 'content brand' },
        React.createElement(
            'div',
            { className: 'search-box' },
            React.createElement(
                'div',
                { className: 'input-box' },
                React.createElement(
                    'div',
                    { className: 'item' },
                    React.createElement(
                        'span',
                        { className: 'lab' },
                        '\u516C\u53F8\u540D\u79F0:'
                    ),
                    React.createElement(_input2.default, { onChange: function onChange(e) {
                            return that.chSearchIpt(e, 'companyname');
                        }, value: companyname, suffix: clearIcon('companyname'), className: 'ipt', style: { width: 200 } })
                ),
                React.createElement(
                    'div',
                    { className: 'item' },
                    React.createElement(
                        'span',
                        { className: 'lab' },
                        '\u7528\u6237\u540D:'
                    ),
                    React.createElement(_input2.default, { onChange: function onChange(e) {
                            return that.chSearchIpt(e, 'username');
                        }, value: username, suffix: clearIcon('username'), className: 'ipt', style: { width: 200 } })
                ),
                React.createElement(
                    'div',
                    { className: 'item' },
                    React.createElement(
                        'span',
                        { className: 'lab' },
                        '\u5907\u6CE8\u540D:'
                    ),
                    React.createElement(_input2.default, { onChange: function onChange(e) {
                            return that.chSearchIpt(e, 'companyMemoname');
                        }, value: companyMemoname, suffix: clearIcon('companyMemoname'), className: 'ipt', style: { width: 200 } })
                )
            ),
            React.createElement(
                'div',
                { className: 'butbox' },
                React.createElement(
                    'div',
                    { style: { position: 'relative' }, id: 'status', className: 'item' },
                    React.createElement(
                        'span',
                        { className: 'lab' },
                        '\u72B6\u6001:'
                    ),
                    React.createElement(
                        _select2.default,
                        { onChange: function onChange(e) {
                                return that.seSearchIpt(e, 'status');
                            }, value: status, className: 'ipt', style: { width: 200 }, getPopupContainer: function getPopupContainer() {
                                return document.getElementById('status');
                            } },
                        React.createElement(
                            Option,
                            { value: null },
                            '\u5168\u90E8'
                        ),
                        React.createElement(
                            Option,
                            { value: '1' },
                            '\u542F\u7528'
                        ),
                        React.createElement(
                            Option,
                            { value: '0' },
                            '\u7981\u7528'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'item', style: { position: 'relative' }, id: 'kefu' },
                    React.createElement(
                        'span',
                        { className: 'lab' },
                        '\u670D\u52A1\u5BA2\u670D:'
                    ),
                    React.createElement(
                        _select2.default,
                        { showSearch: true, onChange: function onChange(e) {
                                return that.seSearchIpt(e, 'kefu');
                            }, value: kefu, className: 'ipt', filterOption: function filterOption(input, option) {
                                return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                            }, style: { width: 200 }, getPopupContainer: function getPopupContainer() {
                                return document.getElementById('kefu');
                            } },
                        React.createElement(
                            Option,
                            { value: null },
                            '\u5168\u90E8'
                        ),
                        customerList.map(function (item, index) {
                            return React.createElement(
                                Option,
                                { key: index, value: item.id },
                                item.realname
                            );
                        })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'item', style: { position: 'relative' }, id: 'version' },
                    React.createElement(
                        'span',
                        { className: 'lab' },
                        '\u4F7F\u7528\u7248\u672C:'
                    ),
                    React.createElement(
                        _select2.default,
                        { onChange: function onChange(e) {
                                return that.seSearchIpt(e, 'version');
                            }, value: version, className: 'ipt', filterOption: function filterOption(input, option) {
                                return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                            }, style: { width: 200 }, getPopupContainer: function getPopupContainer() {
                                return document.getElementById('version');
                            } },
                        React.createElement(
                            Option,
                            { value: null },
                            '\u5168\u90E8'
                        ),
                        versionList.map(function (item, index) {
                            return React.createElement(
                                Option,
                                { key: index, value: item.id },
                                item.dictName
                            );
                        })
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'butbox', style: { justifyContent: 'flex-end' } },
                React.createElement(
                    'div',
                    { className: 'item', style: { justifyContent: 'flex-end', paddingRight: '76px' } },
                    React.createElement(
                        _button2.default,
                        { onClick: function onClick(e) {
                                return that.onSearch();
                            } },
                        '\u67E5\u8BE2'
                    )
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'add-all' },
            React.createElement(
                _button2.default,
                { onClick: function onClick() {
                        return that.stateModal(true, '新增', false);
                    }, className: 'add btn1-main', type: 'primary' },
                React.createElement(_Component.AddIcon, { style: { paddingRight: '8px' } }),
                '\u65B0\u589E'
            ),
            React.createElement(
                _button2.default,
                { onClick: function onClick() {
                        return that.allClick();
                    } },
                columns[0].key == 'checkStatue' ? '取消批量操作' : '批量操作'
            ),
            columns[0].key == 'checkStatue' ? React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    _popconfirm2.default,
                    { title: React.createElement(
                            'div',
                            null,
                            checkAll ? React.createElement(
                                'p',
                                null,
                                '\u4F60\u786E\u8BA4\u8981\u542F\u7528',
                                React.createElement(
                                    'span',
                                    { className: 'red' },
                                    '\u6240\u6709\u7528\u6237'
                                ),
                                '\u5417\uFF1F'
                            ) : React.createElement(
                                'p',
                                null,
                                '\u4F60\u786E\u8BA4\u8981\u542F\u7528\u8BE5\u7528\u6237\u5417\uFF1F'
                            ),
                            React.createElement(
                                'p',
                                null,
                                '\u542F\u7528\u540E\u8D26\u53F7\u5C06',
                                React.createElement(
                                    'span',
                                    { className: 'red' },
                                    '\u6062\u590D\u6B63\u5E38\u4F7F\u7528'
                                )
                            )
                        ), onConfirm: function onConfirm() {
                            return that.allStart();
                        }, okText: '\u662F', cancelText: '\u5426' },
                    React.createElement(
                        _button2.default,
                        null,
                        '\u6279\u91CF\u542F\u7528'
                    )
                ),
                React.createElement(
                    _popconfirm2.default,
                    { title: React.createElement(
                            'div',
                            null,
                            checkAll ? React.createElement(
                                'p',
                                null,
                                '\u4F60\u786E\u8BA4\u8981\u505C\u7528',
                                React.createElement(
                                    'span',
                                    { className: 'red' },
                                    '\u6240\u6709\u7528\u6237'
                                ),
                                '\u5417\uFF1F'
                            ) : React.createElement(
                                'p',
                                null,
                                '\u4F60\u786E\u8BA4\u8981\u542F\u7528\u8BE5\u7528\u6237\u5417\uFF1F'
                            ),
                            React.createElement(
                                'p',
                                null,
                                '\u505C\u7528\u540E\u8D26\u53F7\u5C06',
                                React.createElement(
                                    'span',
                                    { className: 'red' },
                                    '\u65E0\u6CD5\u4F7F\u7528'
                                )
                            )
                        ), onConfirm: function onConfirm() {
                            return that.allStop();
                        }, okText: '\u662F', cancelText: '\u5426' },
                    React.createElement(
                        _button2.default,
                        { type: 'danger' },
                        '\u6279\u91CF\u505C\u7528'
                    )
                ),
                React.createElement(
                    _button2.default,
                    { onClick: function onClick() {
                            return that.stateEditService(true);
                        }, type: 'primary' },
                    '\u6279\u91CF\u53D8\u66F4\u5BA2\u670D'
                )
            ) : null
        ),
        columns[0].key == 'checkStatue' ? React.createElement(
            'div',
            { style: { padding: '10px' } },
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
                        checkAll ? totalNum : dataList.filter(function (item, index) {
                            return item.checkStatue;
                        }).length
                    ),
                    ' \u9879 ',
                    React.createElement(
                        'a',
                        { onClick: function onClick() {
                                return that.checkAll(true);
                            }, style: { marginLeft: '20px' } },
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
        ) : null,
        React.createElement(_table2.default, { pagination: false, loading: that.state.login, rowKey: 'userid', columns: columns, dataSource: dataList }),
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
        ),
        React.createElement(AddModal, { that: that }),
        React.createElement(BindBoxFrom, { that: that }),
        React.createElement(EditService, { that: that })
    );
});

var AddModal = (0, _That2.default)(function (that) {
    var getFieldDecorator = that.props.form.getFieldDecorator;
    var _that$state2 = that.state,
        visible = _that$state2.visible,
        type = _that$state2.type,
        targetModal = _that$state2.targetModal,
        customerList = _that$state2.customerList,
        rolePage = _that$state2.rolePage,
        versionList = _that$state2.versionList;

    type == '新增' ? targetModal = {} : targetModal = targetModal;
    return React.createElement(
        _modal2.default,
        {
            title: type,
            maskClosable: false,
            footer: null,
            onCancel: function onCancel() {
                return that.stateModal(false, '', false);
            },
            visible: visible
        },
        visible ? React.createElement(
            _form2.default,
            { onSubmit: function onSubmit(e) {
                    return that.handleSubmit(e);
                } },
            React.createElement(
                FormItem,
                {
                    label: React.createElement(
                        'span',
                        { className: 'required' },
                        '\u516C\u53F8\u540D\u79F0'
                    ),
                    labelCol: { span: 7 },
                    wrapperCol: { span: 12 }
                },
                getFieldDecorator('companyname', {
                    initialValue: targetModal.companyname
                })(React.createElement(_input2.default, null))
            ),
            React.createElement(
                FormItem,
                {
                    label: React.createElement(
                        'span',
                        null,
                        '\u5907\u6CE8\u540D'
                    ),
                    labelCol: { span: 7 },
                    wrapperCol: { span: 12 },
                    style: { position: 'relative' }
                },
                getFieldDecorator('companyMemoname', {
                    initialValue: targetModal.companyMemoname
                })(React.createElement(_input2.default, null))
            ),
            React.createElement(
                FormItem,
                {
                    label: React.createElement(
                        'span',
                        { className: 'required' },
                        '\u7528\u6237\u540D'
                    ),
                    labelCol: { span: 7 },
                    wrapperCol: { span: 12 }
                },
                React.createElement(
                    _tooltip2.default,
                    { overlayStyle: { maxWidth: '400px' }, placement: 'right', title: React.createElement(
                            'ul',
                            null,
                            React.createElement(
                                'li',
                                null,
                                '6 - 16 \u4E2A\u5B57\u7B26\uFF0C\u53EF\u4F7F\u7528\u6570\u5B57\u3001\u5B57\u6BCD\u3001\u4E0B\u5212\u7EBF;'
                            ),
                            React.createElement(
                                'li',
                                null,
                                '\u9700\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u5B57\u6BCD\u533A\u5206\u5927\u5C0F\u5199\u3002'
                            ),
                            React.createElement(
                                'li',
                                null,
                                '\u9996\u5C3E\u7A7A\u683C\u65E0\u6548;'
                            ),
                            React.createElement(
                                'li',
                                null,
                                '\u521B\u5EFA\u540E\u4E0D\u53EF\u4FEE\u6539;'
                            )
                        ) },
                    getFieldDecorator('username', {
                        initialValue: targetModal.username
                    })(React.createElement(_input2.default, { disabled: type == '新增' ? false : true }))
                )
            ),
            React.createElement(
                FormItem,
                {
                    label: React.createElement(
                        'span',
                        { className: 'required' },
                        '\u5BC6\u7801'
                    ),
                    labelCol: { span: 7 },
                    wrapperCol: { span: 12 }
                },
                React.createElement(
                    _tooltip2.default,
                    { placement: 'right', title: '6 - 16  个字符' },
                    getFieldDecorator('password', {
                        initialValue: targetModal.password
                    })(React.createElement(_input2.default, { type: 'password' }))
                )
            ),
            React.createElement(
                FormItem,
                {
                    label: React.createElement(
                        'span',
                        { className: 'required' },
                        '\u670D\u52A1\u5BA2\u670D'
                    ),
                    labelCol: { span: 7 },
                    wrapperCol: { span: 12 }
                },
                getFieldDecorator('kefuid', {
                    initialValue: targetModal.kefuid ? targetModal.kefuid.split(',') : []
                })(React.createElement(
                    _select2.default,
                    { showSearch: true, mode: 'multiple', filterOption: function filterOption(input, option) {
                            return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                        } },
                    customerList.map(function (item, index) {
                        return React.createElement(
                            Option,
                            { key: index, value: item.id + '' },
                            item.realname
                        );
                    })
                ))
            ),
            React.createElement(
                FormItem,
                {
                    label: '\u89D2\u8272\u83DC\u5355',
                    labelCol: { span: 7 },
                    wrapperCol: { span: 12 }
                },
                getFieldDecorator('roleIds', {
                    initialValue: targetModal.roleIds,
                    rules: [{ required: true, message: '请选择' }]
                })(React.createElement(
                    _select2.default,
                    { getPopupContainer: function getPopupContainer() {
                            return document.getElementById('status');
                        } },
                    rolePage.map(function (item, index) {
                        return React.createElement(
                            Option,
                            { key: index, value: item.id },
                            item.role_name
                        );
                    })
                ))
            ),
            React.createElement(
                FormItem,
                {
                    label: '\u4F7F\u7528\u7248\u672C',
                    labelCol: { span: 7 },
                    wrapperCol: { span: 12 }
                },
                getFieldDecorator('version', {
                    initialValue: targetModal.versionid,
                    rules: [{ required: true, message: '请选择' }]
                })(React.createElement(
                    _select2.default,
                    { getPopupContainer: function getPopupContainer() {
                            return document.getElementById('status');
                        } },
                    versionList.map(function (item, index) {
                        return React.createElement(
                            Option,
                            { key: index, value: item.id },
                            item.dictName
                        );
                    })
                ))
            ),
            React.createElement(
                FormItem,
                {
                    label: '\u5907\u6CE8\u8BF4\u660E',
                    labelCol: { span: 7 },
                    wrapperCol: { span: 12 }
                },
                getFieldDecorator('memo', {
                    initialValue: targetModal.memo,
                    rules: [{ required: false, message: '请输入' }]
                })(React.createElement(TextArea, null))
            ),
            React.createElement(
                FormItem,
                {
                    label: '\u8D26\u53F7\u6709\u6548\u671F',
                    labelCol: { span: 7 },
                    wrapperCol: { span: 12 }
                },
                getFieldDecorator('validtime', {
                    initialValue: targetModal.validtime ? moment(targetModal.validtime) : moment().add(1, 'year'),
                    rules: [{ required: true, message: '请输入' }]
                })(React.createElement(_datePicker2.default, { disabledDate: function disabledDate(currentDate) {
                        return currentDate && currentDate < moment().subtract(1, 'days');
                    }, style: { width: '100%' } }))
            ),
            React.createElement(
                FormItem,
                {
                    wrapperCol: { offset: 20 }
                },
                React.createElement(
                    _button2.default,
                    { className: 'btn2-main', htmlType: 'submit' },
                    '\u4FDD\u5B58'
                )
            )
        ) : null
    );
});
var EditService = (0, _That2.default)(function (that) {
    var _that$state3 = that.state,
        editService = _that$state3.editService,
        customerList = _that$state3.customerList,
        oService = _that$state3.oService;

    return React.createElement(
        _modal2.default,
        {
            maskClosable: false,
            title: '变更客服',
            onCancel: function onCancel() {
                return that.stateEditService(false);
            },
            visible: editService,
            onOk: function onOk() {
                return that.allEditService();
            }
        },
        React.createElement(
            'div',
            { className: 'editService' },
            React.createElement(
                'span',
                { className: 'lab' },
                '\u670D\u52A1\u5BA2\u670D:'
            ),
            React.createElement(
                _select2.default,
                { mode: 'multiple', onChange: function onChange(e) {
                        return that.selectService(e);
                    }, value: oService, showSearch: true, className: 'ipt', filterOption: function filterOption(input, option) {
                        return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                    }, style: { width: '100%' } },
                customerList.map(function (item, index) {
                    return React.createElement(
                        Option,
                        { key: index, value: item.id },
                        item.realname
                    );
                })
            )
        )
    );
});

var BindBoxFrom = _form2.default.create()(function (props) {
    var _props$form = props.form,
        getFieldDecorator = _props$form.getFieldDecorator,
        resetFields = _props$form.resetFields,
        validateFields = _props$form.validateFields;
    var _props$that = props.that,
        state = _props$that.state,
        actionVisible = _props$that.actionVisible,
        onBindSubmit = _props$that.onBindSubmit,
        fetchUser = _props$that.fetchUser,
        onSelectBlur = _props$that.onSelectBlur,
        _onSelect = _props$that.onSelect,
        _onDeselect = _props$that.onDeselect;

    var addHandleSubmit = function addHandleSubmit(e) {
        e.preventDefault();
        validateFields(function (err, values) {
            if (!err) {

                onBindSubmit(values, resetFields);
            }
        });
    };
    var cancel = function cancel(e) {
        e.preventDefault();
        resetFields();
        actionVisible(false);
    };

    var ALcomplaiontId = state.targetData.alid ? state.targetData.alid.split(',') : [];
    var JDcomplaiontId = state.targetData.jdid ? state.targetData.jdid.split(',') : [];
    return React.createElement(
        _modal2.default,
        {
            maskClosable: false,
            title: '绑定投诉账号',
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
                        '\u963F\u91CC\u6295\u8BC9\u8D26\u53F7'
                    ),
                    labelCol: { span: 7 },
                    wrapperCol: { span: 14 }
                },
                getFieldDecorator('ALcomplaiontId', {
                    initialValue: ALcomplaiontId

                })(React.createElement(
                    _select2.default,
                    {
                        mode: 'multiple',
                        filterOption: false,
                        onBlur: function onBlur(e) {
                            return onSelectBlur(e, 'aliList');
                        },
                        onSearch: function onSearch(e) {
                            return fetchUser(e, 'aliList');
                        },
                        onSelect: function onSelect(e, option) {
                            return _onSelect(e, option, 'aliList', 'oldaliList');
                        },
                        onDeselect: function onDeselect(e, option) {
                            return _onDeselect(e, option, 'aliList', 'oldaliList');
                        },
                        style: { width: '100%' }
                    },
                    React.createElement(
                        OptGroup,
                        { label: '\u5DF2\u9009\u4E2D' },
                        state.oldaliList.map(function (item, index) {
                            return React.createElement(
                                Option,
                                { key: item.id },
                                item.title + ':' + item.username
                            );
                        })
                    ),
                    React.createElement(
                        OptGroup,
                        { label: '\u641C\u7D22\u7ED3\u679C' },
                        state.aliList.map(function (item, index) {
                            return React.createElement(
                                Option,
                                { key: item.id },
                                item.title + ':' + item.username
                            );
                        })
                    )
                ))
            ),
            React.createElement(
                FormItem,
                {
                    label: React.createElement(
                        'span',
                        null,
                        '\u4EAC\u4E1C\u6295\u8BC9\u8D26\u53F7'
                    ),
                    labelCol: { span: 7 },
                    wrapperCol: { span: 14 }
                },
                getFieldDecorator('JDcomplaiontId', {
                    initialValue: JDcomplaiontId

                })(React.createElement(
                    _select2.default,
                    {
                        mode: 'multiple',
                        filterOption: false,
                        onBlur: function onBlur(e) {
                            return onSelectBlur(e, 'jdList');
                        },
                        onSearch: function onSearch(e) {
                            return fetchUser(e, 'jdList');
                        },
                        onSelect: function onSelect(e, option) {
                            return _onSelect(e, option, 'jdList', 'oldjdList');
                        },
                        onDeselect: function onDeselect(e, option) {
                            return _onDeselect(e, option, 'jdList', 'oldjdList');
                        },
                        style: { width: '100%' }
                    },
                    React.createElement(
                        OptGroup,
                        { label: '\u5DF2\u9009\u4E2D' },
                        state.oldjdList.map(function (item, index) {
                            return React.createElement(
                                Option,
                                { key: item.id },
                                item.title + ':' + item.username
                            );
                        })
                    ),
                    React.createElement(
                        OptGroup,
                        { label: '\u641C\u7D22\u7ED3\u679C' },
                        state.jdList.map(function (item, index) {
                            return React.createElement(
                                Option,
                                { key: item.id },
                                item.title + ':' + item.username
                            );
                        })
                    )
                ))
            )
        )
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=61_3beea190c002e536b632.js.map