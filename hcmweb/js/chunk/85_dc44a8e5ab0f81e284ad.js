(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

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

/***/ "./app/widget/index/Brand/DepartmentManagement/DepartmentManagement.less":
/*!*******************************************************************************!*\
  !*** ./app/widget/index/Brand/DepartmentManagement/DepartmentManagement.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/DepartmentManagement/tpl.js":
/*!************************************************************!*\
  !*** ./app/widget/index/Brand/DepartmentManagement/tpl.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _tree = __webpack_require__(/*! antd/es/tree */ "./node_modules/_antd@3.10.1@antd/es/tree/index.js");

var _tree2 = _interopRequireDefault(_tree);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/tree/style/css */ "./node_modules/_antd@3.10.1@antd/es/tree/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

__webpack_require__(/*! ./DepartmentManagement.less */ "./app/widget/index/Brand/DepartmentManagement/DepartmentManagement.less");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Option = _select2.default.Option;
var FormItem = _form2.default.Item;

var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        addshow = _that$state.addshow,
        treeData = _that$state.treeData,
        expandedKeys = _that$state.expandedKeys,
        visible = _that$state.visible,
        confirmLoading = _that$state.confirmLoading,
        ModalText = _that$state.ModalText,
        ModalTexts = _that$state.ModalTexts;

    return React.createElement(
        _Layout2.default,
        {
            breadcrumbList: ['子账号管理', '部门管理'],
            linkList: ['', '']
        },
        React.createElement(
            'div',
            { className: 'DepartmentManagement-wrapper' },
            React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                    'div',
                    { className: 'add-box' },
                    React.createElement(
                        _button2.default,
                        { disabled: addshow, onClick: function onClick() {
                                return that.addStatus(true);
                            }, className: 'add-but', type: 'dashed' },
                        '+\u65B0\u589E\u90E8\u95E8'
                    )
                ),
                addshow ? React.createElement(AddBoxFrom, { that: that }) : null,
                React.createElement(
                    'div',
                    { className: 'tree-list' },
                    treeData != null ? React.createElement(
                        _tree2.default,
                        { expandedKeys: expandedKeys, onExpand: function onExpand(expandedKeys, evtnt) {
                                return that.onExpand(expandedKeys, evtnt);
                            }, showLine: true },
                        that.creatTreeDom(treeData)
                    ) : null
                )
            ),
            React.createElement(
                _modal2.default,
                {
                    maskClosable: false,
                    visible: visible,
                    onOk: that.handleOk,
                    confirmLoading: confirmLoading,
                    onCancel: that.handleCancels
                },
                React.createElement(
                    'span',
                    { style: { display: "inline-block " } },
                    ' ',
                    React.createElement('img', { src: '../../../../img/userTB.jpg', alt: '' }),
                    ' '
                ),
                React.createElement(
                    'span',
                    { style: { display: "inline-block ", marginLeft: "10px", marginTop: "20px" } },
                    ' ',
                    React.createElement(
                        'h5',
                        null,
                        ModalText
                    ),
                    React.createElement(
                        'h5',
                        null,
                        ModalTexts
                    )
                )
            )
        )
    );
});
exports.default = Tpl;


var AddBoxFrom = _form2.default.create()(function (props) {
    var getFieldDecorator = props.form.getFieldDecorator;
    var _props$that = props.that,
        addStatus = _props$that.addStatus,
        getList = _props$that.getList;

    console.log(props);
    var addHandleSubmit = function addHandleSubmit(e) {
        e.preventDefault();
        props.form.validateFields(function (err, values) {
            if (!err) {
                console.log(values);
                if (values.departNamex != "" && values.departNamex != undefined) {
                    if (values.departNamex.length <= 50) {
                        if (values.defaultValue != undefined) {
                            _ajax2.default.post('/hcm/department/savaDepartment', {
                                parentId: 0,
                                departName: values.departNamex,
                                departLeader: values.defaultValue.join(",")
                            }).then(function (res) {
                                // console.log(res)
                                if (res.data.status == 10000) {
                                    getList();
                                    addStatus(false);
                                } else if (res.data.status == 400) {
                                    _message3.default.error(res.data.message);
                                }
                            });
                        } else {
                            _ajax2.default.post('/hcm/department/savaDepartment', {
                                parentId: 0,
                                departName: values.departNamex,
                                departLeader: ""
                            }).then(function (res) {
                                console.log(res);
                                if (res.data.status == 10000) {
                                    getList();
                                    addStatus(false);
                                } else if (res.data.status == 400) {
                                    _message3.default.error(res.data.message);
                                } else if (res.data.status == 10400) {
                                    _message3.default.error(res.data.message);
                                }
                            });
                        }
                    } else {
                        _message3.default.error("新增部门名字限制50个字符以内！");
                    }
                } else {
                    _message3.default.error("请输入新增部门名称！");
                }
            }
        });
    };
    return React.createElement(
        _form2.default,
        { onSubmit: addHandleSubmit },
        React.createElement(
            _row2.default,
            { style: _defineProperty({ marginTop: 20, justifyContent: 'space-between', alignItems: 'center', height: 40 }, 'marginTop', 14), type: 'flex', justify: 'space-between' },
            React.createElement(
                _col2.default,
                { style: { height: '100%' }, span: 9 },
                React.createElement(
                    FormItem,
                    null,
                    getFieldDecorator('departNamex', {})(React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0' }))
                )
            ),
            React.createElement(
                _col2.default,
                { style: { height: '100%' }, span: 9 },
                React.createElement(
                    FormItem,
                    null,
                    getFieldDecorator('departLeader', {})(React.createElement(
                        _select2.default,
                        {
                            mode: 'multiple',
                            placeholder: '\u8BF7\u9009\u62E9\u8D1F\u8D23\u4EBA'
                        },
                        React.createElement(
                            Option,
                            { value: 'disabled', disabled: true },
                            '\u6682\u65E0\u6570\u636E'
                        )
                    ))
                )
            ),
            React.createElement(
                _col2.default,
                { style: { height: '100%' }, className: 'text-right', span: 4 },
                React.createElement(
                    FormItem,
                    null,
                    React.createElement(
                        _button2.default,
                        { type: 'primary', htmlType: 'submit' },
                        ' \u786E\u5B9A '
                    ),
                    React.createElement(
                        _button2.default,
                        { onClick: function onClick() {
                                return addStatus(false);
                            }, style: { marginLeft: '20px' }, type: 'primary' },
                        '\u53D6\u6D88 '
                    )
                )
            )
        )
    );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=85_dc44a8e5ab0f81e284ad.js.map