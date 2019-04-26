(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

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

/***/ "./app/widget/index/Brand/CustomFields/tpl.js":
/*!****************************************************!*\
  !*** ./app/widget/index/Brand/CustomFields/tpl.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tpl = (0, _That2.default)(function (that) {
    var FORMtit = {
        fontSize: "14px",
        fontFamily: "PingFang-SC-Medium",
        color: "rgba(51,51,51,1)",
        lineHeight: "40px",
        height: "40px",
        marginRight: "5px",
        marginTop: "10px",
        width: "100%",
        float: "left"
    };
    var FORMtitHidex = that.state.FORMtitHides ? " block " : "none";

    var FORMtitHide = {
        fontSize: "14px", fontFamily: "PingFang-SC-Medium", color: "rgba(51,51,51,1)", lineHeight: "40px", marginRight: "5px", marginTop: "10px", width: "100%", float: "left", /*overflowY: "scroll", height: "200px",*/
        display: FORMtitHidex
    };
    var FORMtitHideb = {
        fontSize: "14px", fontFamily: "PingFang-SC-Medium", color: "rgba(51,51,51,1)", lineHeight: "40px", marginRight: "5px", marginTop: "10px", width: "100%", float: "left", height: "200px",
        display: FORMtitHidex
    };
    var FormItem = _form2.default.Item;
    var Option = _select2.default.Option;
    var _that$props$form = that.props.form,
        getFieldDecorator = _that$props$form.getFieldDecorator,
        getFieldValue = _that$props$form.getFieldValue;

    var formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 4 }
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 }
        }
    };
    var formItemLayoutWithOutLabel = {
        wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 20, offset: 4 }
        }
    };
    //const Editvisible=that.state.Editvisible==true ? getFieldDecorator('keys', { initialValue: that.state.bBRRay }) : getFieldDecorator('keys', { initialValue: [] })
    if (that.state.Editvisible == true) {
        var abcARR = that.state.bBRRay.map(function (v, k) {
            return k;
        });

        getFieldDecorator('keys', { initialValue: abcARR });
    } else {

        getFieldDecorator('keys', { initialValue: [] });
    }
    var a = 1;
    var b = 2;
    var keys = getFieldValue('keys');
    var formItems = keys.map(function (k, index) {

        return React.createElement(
            FormItem,
            _extends({}, index === 0 ? formItemLayout : formItemLayoutWithOutLabel, {
                label: index === 0 ? '选项：' : '',
                required: false,
                key: k,
                style: {/* width: "320px", marginLeft: "80px", marginBottom: "5px" */}
            }),
            getFieldDecorator('names[' + k + ']', {
                validateTrigger: ['onChange', 'onBlur']
            })(React.createElement(_input2.default, { placeholder: '', style: { /* width: '80%', marginRight: 8 */width: '320px', marginRight: 8 } })),
            keys.length > 1 ? React.createElement(_icon2.default, {
                className: 'dynamic-delete-button',
                type: 'minus-circle-o',
                disabled: keys.length === 1,
                onClick: function onClick() {
                    return that.remove(k);
                }
            }) : null
        );
    });

    document.getElementsByClassName("ant-btn-primary").style = "submit";
    return React.createElement(
        _Layout2.default,
        {
            title: '\u6D3B\u52A8\u8BE6\u60C5',
            breadcrumbList: ['客户盘点', '客户信息', '自定义字段'],
            linkList: ['', '1', ''],
            history: that.props.history
        },
        React.createElement(
            'div',
            { className: 'CustomFields' },
            React.createElement(
                'div',
                { className: 'CustomFieldsBOX' },
                React.createElement(
                    'div',
                    { className: 'CustomFieldsHeader' },
                    React.createElement(
                        _button2.default,
                        { className: 'NewJ', type: 'primary', onClick: function onClick() {
                                return that.NewJ();
                            } },
                        React.createElement(_icon2.default, { type: 'plus', style: { fontWeight: '700', fontSize: '14px' } }),
                        '\u65B0\u589E'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'CustomFieldsBody' },
                    React.createElement(_table2.default, {
                        pagination: false,
                        rowKey: 'id',
                        columns: that.state.CustomFields_list,
                        dataSource: that.state.data,
                        loading: that.state.loading,
                        onChange: that.handleTableChange
                    })
                )
            ),
            React.createElement(
                _modal2.default,
                {

                    maskClosable: false,
                    title: that.state.type,
                    visible: that.state.visible,
                    footer: null,
                    confirmLoading: that.state.confirmLoading,
                    onCancel: function onCancel() {
                        return that.handleCancel();
                    }
                },
                React.createElement(
                    _form2.default,
                    { onSubmit: that.ForgetSubmit, className: 'forget-form', style: { display: "inline-block" } },
                    React.createElement(
                        'div',
                        { className: 'FORMtit', style: FORMtit },
                        ' ',
                        React.createElement(
                            'div',
                            { className: 'FORMus', style: { width: "auto", float: "left" } },
                            ' ',
                            React.createElement(
                                'b',
                                { style: { color: "red" } },
                                '*'
                            ),
                            ' \u5B57\u6BB5\u540D\u79F0\uFF1A'
                        ),
                        React.createElement(
                            FormItem,
                            { className: 'tops',
                                style: {
                                    width: "320px",
                                    height: "60px",
                                    float: "left", borderRadius: "2px"
                                } },
                            getFieldDecorator('FieldName', {
                                initialValue: that.state.FieldName || ""
                            })(React.createElement(_input2.default, { className: 'user-name',

                                placeholder: '\u8BF7\u4F7F\u7528\u7B80\u77ED\u7684\u5B57\u6BB5\u540D\u79F0\uFF0C6\u5B57\u4EE5\u5185\u3002'
                                //  getfieldsvalue={that.state.FieldNameValue}
                            }))
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'FORMtit', style: FORMtit },
                        ' ',
                        React.createElement(
                            'div',
                            { className: 'FORMus', style: { width: "auto", float: "left" } },
                            ' ',
                            React.createElement(
                                'b',
                                { style: { color: "#fff" } },
                                '*'
                            ),
                            ' \u5B57\u6BB5\u5360\u4F4D\uFF1A'
                        ),
                        React.createElement(
                            FormItem,
                            { className: 'tops',
                                style: {
                                    width: "320px",
                                    height: "60px",
                                    float: "left", borderRadius: "2px"
                                } },
                            getFieldDecorator('FieldOccupancy', {
                                initialValue: that.state.FieldOccupancy || ""
                            })(React.createElement(_input2.default, { className: 'user-name',
                                maxLength: '50',
                                placeholder: '\u8BF7\u8F93\u5165\u5B57\u6BB5\u5360\u4F4D'
                                // value={that.state.FieldOccupancyValue}
                            }))
                        )
                    ),
                    React.createElement(
                        'div',
                        { style: { marginLeft: "80px", fontSize: "14px", color: "#999" } },
                        ' \u8BF7\u586B\u5199\u5B57\u6BB5\u5360\u4F4D\uFF0C\u4F8B\u5982\uFF1A\u201C\u8BF7\u8F93\u5165\u59D3\u540D\u201D'
                    ),
                    React.createElement(
                        'div',
                        { className: 'FORMtit', style: FORMtit },
                        ' ',
                        React.createElement(
                            'div',
                            { className: 'FORMus', style: { width: "auto", float: "left" } },
                            ' ',
                            React.createElement(
                                'b',
                                { style: { color: "red" } },
                                '*'
                            ),
                            ' \u5B57\u6BB5\u7C7B\u578B\uFF1A'
                        ),
                        React.createElement(
                            FormItem,
                            { className: 'tops',
                                style: {
                                    width: "320px",
                                    height: "60px",
                                    float: "left", borderRadius: "2px"
                                } },
                            getFieldDecorator('FieldType', {
                                initialValue: that.state.FieldType
                            })(React.createElement(
                                _select2.default,
                                {
                                    showSearch: true,
                                    style: { width: 320 },
                                    placeholder: '\u8BF7\u9009\u62E9',
                                    optionFilterProp: 'children',
                                    onChange: that.handleChange,
                                    filterOption: function filterOption(input, option) {
                                        return undefined.option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                                    }
                                },
                                React.createElement(
                                    Option,
                                    { value: 'TEXT' },
                                    '\u6587\u672C\u6846'
                                ),
                                React.createElement(
                                    Option,
                                    { value: 'Single' },
                                    '\u6587\u672C\u57DF'
                                ),
                                React.createElement(
                                    Option,
                                    { value: 'SINGLESELECT' },
                                    '\u5355\u9009\u4E0B\u62C9\u6846'
                                ),
                                React.createElement(
                                    Option,
                                    { value: 'MULTISELECT' },
                                    '\u591A\u9009\u4E0B\u62C9\u6846'
                                )
                            )),
                            a && b != 0 ? a > b ? "a" : b > a ? "b" : a : ""
                        )
                    ),

                    // that.state.bBRRay.length > 3 || that.state.uuid>3 ? 
                    React.createElement(
                        'div',
                        { className: 'FORMtit', style: FORMtitHide },
                        React.createElement('div', { className: 'FORMus', style: { width: "auto", float: "left", marginLeft: "30px", position: "absolute" } }),
                        formItems,
                        React.createElement(
                            FormItem,
                            formItemLayoutWithOutLabel,
                            React.createElement(
                                _button2.default,
                                {
                                    type: 'dashed',
                                    onClick: that.add,
                                    style: { /* width: "55%", marginLeft: "15%" */
                                        width: '320px',
                                        color: '#1890ff',
                                        borderColor: '#1890ff'
                                    } },
                                React.createElement(_icon2.default, { type: 'plus' })
                            )
                        )
                    )
                    // : 
                    // <div className="FORMtit" style={FORMtitHideb}>
                    //         <div className="FORMus" style={{ width: "auto", float: "left", marginLeft: "30px", position: "absolute" }}></div>

                    //         {formItems}
                    //         <FormItem {...formItemLayoutWithOutLabel}>
                    //             <Button 
                    //                 type="dashed" 
                    //                 onClick={that.add} 
                    //                 style={{ 
                    //                 /* width: "55%", marginLeft: "15%" */ 
                    //                     width:'320px',
                    //                     color:'#1890ff',
                    //                     borderColor:'#1890ff'
                    //                 }}>
                    //                 <Icon type="plus" />
                    //             </Button>
                    //         </FormItem>
                    //     </div>
                    // null
                    ,
                    React.createElement(
                        'div',
                        { className: 'FORMtit', style: FORMtit },
                        React.createElement(
                            FormItem,
                            { style: { float: "left", marginLeft: "54%", marginRight: "0px" } },
                            React.createElement(
                                _button2.default,
                                { className: 'btn2-main', type: 'primary', htmlType: 'submit' },
                                '\u786E\u8BA4'
                            )
                        ),
                        React.createElement(
                            FormItem,
                            { style: { float: "left", width: "60px", height: "40px" } },
                            React.createElement(
                                _button2.default,
                                { className: 'btn2-sub noneFloat', onClick: function onClick() {
                                        return that.handleCancel();
                                    } },
                                '\u53D6\u6D88'
                            )
                        )
                    )
                )
            )
        )
    );
});
exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/Breadcrumb.js":
/*!********************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/breadcrumb/Breadcrumb.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util/warning */ "./node_modules/_antd@3.10.1@antd/es/_util/warning.js");
/* harmony import */ var _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BreadcrumbItem */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/BreadcrumbItem.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);










function getBreadcrumbName(route, params) {
    if (!route.breadcrumbName) {
        return null;
    }
    var paramsKeys = Object.keys(params).join('|');
    var name = route.breadcrumbName.replace(new RegExp(':(' + paramsKeys + ')', 'g'), function (replacement, key) {
        return params[key] || replacement;
    });
    return name;
}
function defaultItemRender(route, params, routes, paths) {
    var isLastItem = routes.indexOf(route) === routes.length - 1;
    var name = getBreadcrumbName(route, params);
    return isLastItem ? react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
        'span',
        null,
        name
    ) : react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
        'a',
        { href: '#/' + paths.join('/') },
        name
    );
}

var Breadcrumb = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Breadcrumb, _React$Component);

    function Breadcrumb() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Breadcrumb);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Breadcrumb, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            Object(_util_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(!('linkRender' in props || 'nameRender' in props), '`linkRender` and `nameRender` are removed, please use `itemRender` instead, ' + 'see: https://u.ant.design/item-render.');
        }
    }, {
        key: 'render',
        value: function render() {
            var crumbs = void 0;
            var _props = this.props,
                separator = _props.separator,
                prefixCls = _props.prefixCls,
                style = _props.style,
                className = _props.className,
                routes = _props.routes,
                _props$params = _props.params,
                params = _props$params === undefined ? {} : _props$params,
                children = _props.children,
                _props$itemRender = _props.itemRender,
                itemRender = _props$itemRender === undefined ? defaultItemRender : _props$itemRender;

            if (routes && routes.length > 0) {
                var paths = [];
                crumbs = routes.map(function (route) {
                    route.path = route.path || '';
                    var path = route.path.replace(/^\//, '');
                    Object.keys(params).forEach(function (key) {
                        path = path.replace(':' + key, params[key]);
                    });
                    if (path) {
                        paths.push(path);
                    }
                    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
                        _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_7__["default"],
                        { separator: separator, key: route.breadcrumbName || path },
                        itemRender(route, params, routes, paths)
                    );
                });
            } else if (children) {
                crumbs = react__WEBPACK_IMPORTED_MODULE_4__["Children"].map(children, function (element, index) {
                    if (!element) {
                        return element;
                    }
                    Object(_util_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(element.type && element.type.__ANT_BREADCRUMB_ITEM, 'Breadcrumb only accepts Breadcrumb.Item as it\'s children');
                    return Object(react__WEBPACK_IMPORTED_MODULE_4__["cloneElement"])(element, {
                        separator: separator,
                        key: index
                    });
                });
            }
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
                'div',
                { className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, prefixCls), style: style },
                crumbs
            );
        }
    }]);

    return Breadcrumb;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

Breadcrumb.defaultProps = {
    prefixCls: 'ant-breadcrumb',
    separator: '/'
};
Breadcrumb.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5__["string"],
    separator: prop_types__WEBPACK_IMPORTED_MODULE_5__["node"],
    routes: prop_types__WEBPACK_IMPORTED_MODULE_5__["array"],
    params: prop_types__WEBPACK_IMPORTED_MODULE_5__["object"],
    linkRender: prop_types__WEBPACK_IMPORTED_MODULE_5__["func"],
    nameRender: prop_types__WEBPACK_IMPORTED_MODULE_5__["func"]
};

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/BreadcrumbItem.js":
/*!************************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/breadcrumb/BreadcrumbItem.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);





var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var BreadcrumbItem = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(BreadcrumbItem, _React$Component);

    function BreadcrumbItem() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BreadcrumbItem);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (BreadcrumbItem.__proto__ || Object.getPrototypeOf(BreadcrumbItem)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BreadcrumbItem, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                separator = _a.separator,
                children = _a.children,
                restProps = __rest(_a, ["prefixCls", "separator", "children"]);
            var link = void 0;
            if ('href' in this.props) {
                link = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'a',
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: prefixCls + '-link' }, restProps),
                    children
                );
            } else {
                link = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'span',
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: prefixCls + '-link' }, restProps),
                    children
                );
            }
            if (children) {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'span',
                    null,
                    link,
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        'span',
                        { className: prefixCls + '-separator' },
                        separator
                    )
                );
            }
            return null;
        }
    }]);

    return BreadcrumbItem;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BreadcrumbItem);

BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
BreadcrumbItem.defaultProps = {
    prefixCls: 'ant-breadcrumb',
    separator: '/'
};
BreadcrumbItem.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6__["string"],
    separator: prop_types__WEBPACK_IMPORTED_MODULE_6__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_6__["string"], prop_types__WEBPACK_IMPORTED_MODULE_6__["element"]]),
    href: prop_types__WEBPACK_IMPORTED_MODULE_6__["string"]
};

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/Breadcrumb.js");
/* harmony import */ var _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreadcrumbItem */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/BreadcrumbItem.js");


_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"].Item = _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/index.css":
/*!**********************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/index.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

}]);
//# sourceMappingURL=81_39a0d4b656dcf35567a5.js.map