(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

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

/***/ "./app/widget/index/Brand/CustomerEditor/CustomerEditor.less":
/*!*******************************************************************!*\
  !*** ./app/widget/index/Brand/CustomerEditor/CustomerEditor.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/CustomerEditor/tpl.js":
/*!******************************************************!*\
  !*** ./app/widget/index/Brand/CustomerEditor/tpl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _treeSelect = __webpack_require__(/*! antd/es/tree-select */ "./node_modules/_antd@3.10.1@antd/es/tree-select/index.js");

var _treeSelect2 = _interopRequireDefault(_treeSelect);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _steps = __webpack_require__(/*! antd/es/steps */ "./node_modules/_antd@3.10.1@antd/es/steps/index.js");

var _steps2 = _interopRequireDefault(_steps);

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/tree-select/style/css */ "./node_modules/_antd@3.10.1@antd/es/tree-select/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/steps/style/css */ "./node_modules/_antd@3.10.1@antd/es/steps/style/css.js");

__webpack_require__(/*! ./CustomerEditor.less */ "./app/widget/index/Brand/CustomerEditor/CustomerEditor.less");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Footer from "../../../components/Copyright"

var Step = _steps2.default.Step;
var FormItem = _form2.default.Item;
var Option = _select2.default.Option;
var RangePicker = _datePicker2.default.RangePicker;

var SHOW_PARENT = _treeSelect2.default.SHOW_PARENT;
var ZIduan = {
    display: "",
    marginTop: "20px"
};
var children = [];
var childrenn = [];

var Tpl = (0, _That2.default)(function (that) {
    var getFieldDecorator = that.props.form.getFieldDecorator;

    var abcARRAy = [];
    abcARRAy.push(that.state.Brrby);
    return React.createElement(
        _Layout2.default,
        {
            breadcrumbList: ['客户盘点', '客户信息', '编辑'],
            linkList: ['', '1', ''],
            history: that.props.history
        },
        React.createElement(
            'div',
            { className: 'CustomerEditor' },
            React.createElement(
                'div',
                { className: 'CustomerEditorBOX' },
                React.createElement(
                    _form2.default,
                    { onSubmit: that.ForgetSubmit, className: 'forget-form', style: { marginLeft: "20px", width: "400px" } },
                    React.createElement(
                        'div',
                        { className: 'FORMtit' },
                        React.createElement(
                            'div',
                            { className: that.state.USERS, style: { float: "right" } },
                            React.createElement('img', { src: that.state.IMGS, style: { float: "left", marginRight: "10px", marginTop: "7px" } }),
                            ' ',
                            React.createElement(
                                'b',
                                { style: { lineHeight: "32px", float: "left" } },
                                that.state.IMGStxt
                            ),
                            ' '
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'FORMtit' },
                        ' ',
                        React.createElement(
                            'div',
                            { className: 'FORMus' },
                            '\u5BA2\u6237\u540D\u79F0\uFF1A'
                        ),
                        that.state.apply_statuS == "APPLYING" ? React.createElement(
                            FormItem,
                            { className: 'tops' },
                            getFieldDecorator('CustomerName', {
                                initialValue: that.state.dealername || ""
                            })(React.createElement(_input2.default, { className: 'user-name',
                                maxLength: '50',
                                disabled: true
                            }))
                        ) : React.createElement(
                            FormItem,
                            { className: 'tops' },
                            getFieldDecorator('CustomerName', {
                                initialValue: that.state.dealername || ""
                            })(React.createElement(_input2.default, { className: 'user-name',
                                maxLength: '50'

                            }))
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'FORMtit' },
                        ' ',
                        React.createElement(
                            'div',
                            { className: 'FORMus' },
                            '\u5907\u6CE8\u540D\u79F0\uFF1A'
                        ),
                        React.createElement(
                            FormItem,
                            { className: 'tops' },
                            getFieldDecorator('NameOfNote', {
                                initialValue: that.state.dutynumber || ''
                            })(React.createElement(_input2.default, { className: 'user-name',
                                maxLength: '50'
                            }))
                        )
                    ),
                    that.state.treeData ? React.createElement(
                        'div',
                        { id: 'areaxb', className: 'FORMtit', style: { position: "relative" } },
                        ' ',
                        React.createElement(
                            'div',
                            { className: 'FORMus' },
                            '\u76F4\u5C5E\u4E0A\u7EA7\uFF1A'
                        ),
                        React.createElement(
                            FormItem,
                            { className: 'tops' },
                            getFieldDecorator('Subordinate', {
                                initialValue: that.state.subordinate
                            })(React.createElement(_treeSelect2.default, {
                                getPopupContainer: function getPopupContainer() {
                                    return document.getElementById('areaxb');
                                },
                                style: { width: 320 }
                                //value={that.state.value}
                                , dropdownStyle: { maxHeight: 400, overflow: 'auto' },
                                treeData: that.state.treeData,
                                placeholder: '\u8BF7\u9009\u62E9\u90E8\u95E8\u4EBA\u5458',
                                treeDefaultExpandAll: true,
                                onChange: that.onChangeSubor
                            }))
                        )
                    ) : React.createElement(
                        'div',
                        { className: 'FORMtit' },
                        ' ',
                        React.createElement(
                            'div',
                            { className: 'FORMus' },
                            '\u76F4\u5C5E\u4E0A\u7EA7\uFF1A'
                        ),
                        React.createElement(
                            FormItem,
                            { className: 'tops' },
                            '\u8BF7\u5728\u8D26\u53F7\u7BA1\u7406\u4E2D\u6DFB\u52A0\u76F4\u5C5E\u4E0A\u7EA7 '
                        ),
                        ' '
                    ),
                    React.createElement(
                        'div',
                        { className: 'FORMtit' },
                        React.createElement(
                            'div',
                            { className: 'FORMus' },
                            '\u6388\u6743\u671F\u9650\uFF1A'
                        ),
                        React.createElement(
                            FormItem,
                            { className: 'tops' },
                            getFieldDecorator('approve_start', {
                                initialValue: that.state.approve_start ? [moment(that.state.approve_start), moment(that.state.approve_end)] : [moment(), moment()]
                            })(React.createElement(RangePicker, { className: 'user-name', style: { display: "inline-block", width: "320px" }, onChange: that.onChange }))
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'FORMtit' },
                        ' ',
                        React.createElement(
                            'div',
                            { className: 'FORMus' },
                            '\u6388\u6743\u7F16\u7801\uFF1A'
                        ),
                        React.createElement(
                            FormItem,
                            { className: 'tops' },
                            getFieldDecorator('authorize_num', {
                                initialValue: that.state.authorize_num || ''
                            })(React.createElement(_input2.default, { className: 'user-name',
                                maxLength: '50'
                            }))
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'FORMtit' },
                        React.createElement(
                            'div',
                            { className: 'FORMus' },
                            '\u5BA1\u6279\u65E5\u671F\uFF1A'
                        ),
                        React.createElement(
                            FormItem,
                            { className: 'tops' },
                            getFieldDecorator('approve_date', {
                                initialValue: that.state.approve_date ? moment(that.state.approve_date) : moment()
                            })(React.createElement(_datePicker2.default, { className: 'user-name', style: { display: "inline-block", width: "320px" }, onChange: that.onChangeX }))
                        )
                    ),
                    that.state.Array ? React.createElement(
                        'div',
                        null,
                        that.state.Array.map(function (item, index) {
                            return React.createElement(
                                'div',
                                { key: index },
                                abcARRAy ? React.createElement(
                                    'div',
                                    null,
                                    abcARRAy.map(function (im, ind) {
                                        return React.createElement(
                                            'div',
                                            { key: ind },
                                            item.fieldtype == "TEXT" ? React.createElement(
                                                'div',
                                                { className: 'FORMtit', style: { marginTop: "10px" } },
                                                React.createElement(
                                                    'div',
                                                    { className: 'FORMus' },
                                                    item.fieldname,
                                                    '\uFF1A'
                                                ),
                                                React.createElement(
                                                    FormItem,
                                                    { className: 'tops' },
                                                    getFieldDecorator(item.fieldvalue, {
                                                        initialValue: im[item.fieldvalue]
                                                    })(React.createElement(_input2.default, { className: 'user-name', maxLength: '50', placeholder: item.prompt ? item.prompt : "请输入内容"
                                                    }))
                                                )
                                            ) : item.fieldtype == "MULTISELECT" ? React.createElement(
                                                'div',
                                                { id: 'areaxbn', className: 'FORMtit', style: { marginTop: "20px", position: 'relative' } },
                                                React.createElement(
                                                    'div',
                                                    { className: 'FORMus' },
                                                    item.fieldname,
                                                    '\uFF1A'
                                                ),
                                                item.opotion.split(",") ? React.createElement(
                                                    FormItem,
                                                    { className: 'tops' },
                                                    getFieldDecorator(item.fieldvalue, {
                                                        initialValue: im[item.fieldvalue]
                                                    })(React.createElement(
                                                        _select2.default,
                                                        {
                                                            getPopupContainer: function getPopupContainer() {
                                                                return document.getElementById('areaxbn');
                                                            },
                                                            mode: 'multiple',
                                                            style: { width: '100%' },
                                                            placeholder: item.prompt ? item.prompt : "请选择内容",
                                                            onChange: that.handle
                                                        },
                                                        item.opotion.split(",").map(function (v, i) {
                                                            return React.createElement(
                                                                Option,
                                                                { key: i, value: v },
                                                                v
                                                            );
                                                        })
                                                    ))
                                                ) : React.createElement(
                                                    FormItem,
                                                    { className: 'tops' },
                                                    getFieldDecorator(item.fieldvalue, {
                                                        initialValue: im[item.fieldvalue]
                                                    })(React.createElement(
                                                        _select2.default,
                                                        {
                                                            getPopupContainer: function getPopupContainer() {
                                                                return document.getElementById('areaxbn');
                                                            },
                                                            mode: 'multiple',
                                                            style: { width: '100%' },
                                                            placeholder: item.prompt ? item.prompt : "请选择内容",
                                                            onChange: that.handle
                                                        },
                                                        children
                                                    ))
                                                )
                                            ) : item.fieldtype == "Single" ? React.createElement(
                                                'div',
                                                { className: 'FORMtit', style: { marginTop: "20px" } },
                                                React.createElement(
                                                    'div',
                                                    { className: 'FORMus' },
                                                    item.fieldname,
                                                    '\uFF1A'
                                                ),
                                                React.createElement(
                                                    FormItem,
                                                    { className: 'tops' },
                                                    getFieldDecorator(item.fieldvalue, {
                                                        initialValue: im[item.fieldvalue] //that.state.Brrby[item.prompt]
                                                    })(React.createElement('textarea', { className: 'user-name', placeholder: item.prompt ? item.prompt : "请输入内容", maxLength: '100', style: { width: "320px", height: "60px" }
                                                    }))
                                                )
                                            ) : React.createElement(
                                                'div',
                                                { id: 'areax', className: 'FORMtit', style: { marginTop: "20px", position: 'relative' } },
                                                React.createElement(
                                                    'div',
                                                    { className: 'FORMus' },
                                                    item.fieldname,
                                                    '\uFF1A'
                                                ),
                                                item.opotion.split(",") ? React.createElement(
                                                    FormItem,
                                                    { className: 'tops' },
                                                    getFieldDecorator(item.fieldvalue, {
                                                        initialValue: im[item.fieldvalue]
                                                    })(React.createElement(
                                                        _select2.default,
                                                        {
                                                            style: { width: '100%' },
                                                            placeholder: item.prompt ? item.prompt : "请选择内容",
                                                            onChange: that.handle,
                                                            getPopupContainer: function getPopupContainer() {
                                                                return document.getElementById('areax');
                                                            }
                                                        },
                                                        item.opotion.split(",").map(function (v, i) {
                                                            return React.createElement(
                                                                Option,
                                                                { key: i, value: v },
                                                                v
                                                            );
                                                        })
                                                    ))
                                                ) : React.createElement(
                                                    FormItem,
                                                    { className: 'tops' },
                                                    getFieldDecorator(item.fieldvalue, {
                                                        initialValue: '请选择'
                                                    })(React.createElement(
                                                        _select2.default,
                                                        {
                                                            getPopupContainer: function getPopupContainer() {
                                                                return document.getElementById('areax');
                                                            },
                                                            style: { width: '100%' },
                                                            placeholder: item.prompt ? item.prompt : "请选择内容",
                                                            onChange: that.handle
                                                        },
                                                        childrenn
                                                    ))
                                                )
                                            )
                                        );
                                    })
                                ) : null
                            );
                        })
                    ) : null,
                    React.createElement(
                        'div',
                        { className: 'FORMtit', style: { marginTop: "20px", marginBottom: "20px" } },
                        React.createElement(
                            _button2.default,
                            { className: 'btn2-main', htmlType: 'submit', onClick: function onClick() {
                                    return that.SuccessBTN();
                                }, style: { marginLeft: 150 } },
                            '\u786E\u8BA4'
                        ),
                        React.createElement(
                            _button2.default,
                            { className: 'ErrorBTN', onClick: function onClick() {
                                    return that.ErrorBTN();
                                }, style: { marginLeft: 10 } },
                            '\u53D6\u6D88'
                        )
                    )
                )
            )
        )
    );
});
exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=82_a2f3c7044408a6012e9c.js.map