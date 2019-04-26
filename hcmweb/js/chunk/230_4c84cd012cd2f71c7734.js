(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[230],{

/***/ "./app/widget/index/Brand/AccountManagement/AddDepartment.js":
/*!*******************************************************************!*\
  !*** ./app/widget/index/Brand/AccountManagement/AddDepartment.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _treeSelect = __webpack_require__(/*! antd/es/tree-select */ "./node_modules/_antd@3.10.1@antd/es/tree-select/index.js");

var _treeSelect2 = _interopRequireDefault(_treeSelect);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/tree-select/style/css */ "./node_modules/_antd@3.10.1@antd/es/tree-select/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;
var TextArea = _input2.default.TextArea;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.getDepartmentLeaderList = function () {
            var parentId = _this.state.parentId;

            _ajax2.default.get('/hcm/userout/getDepartmentLeaderList', {
                params: {
                    departmentId: parentId
                }
            }).then(function (response) {
                _this.setState({
                    leaderList: response.data.data,
                    departLeader: []
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.chTreeSelect = function (value, label, extra, type) {
            var state = _this.state;
            state[type] = value;
            _this.setState(state, function () {
                // this.getDepartmentLeaderList()
            });
        };

        _this.onChange = function (e, type) {
            var state = _this.state;
            state[type] = e.target.value;
            _this.setState(state);
        };

        _this.handleChange = function (e) {
            _this.setState({
                departLeader: e
            });
        };

        _this.onSubmit = function () {
            var _this$state = _this.state,
                parentId = _this$state.parentId,
                departName = _this$state.departName,
                departLeader = _this$state.departLeader;

            if (!parentId) {
                _message3.default.error('请选择父级部门');
                return;
            }
            if (!departName || departName.length <= 0) {
                _message3.default.error('请输入部门名称');
                return;
            }
            _ajax2.default.post('/hcm/department/savaDepartment', {
                parentId: parentId, departName: departName,
                departState: 1,
                departLeader: departLeader.join(',')
            }).then(function (response) {
                if (response.data.status == '10000') {
                    _message3.default.success(response.data.message);
                    var _this$props = _this.props,
                        onShowAdd = _this$props.onShowAdd,
                        getDepartmentList = _this$props.getDepartmentList;

                    getDepartmentList();
                    onShowAdd(false);
                } else {
                    _message3.default.warning(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.state = {
            departmentList: _this.props.departmentList,
            visible: _this.props.visible,
            parentId: null,
            departName: null,
            leaderList: [],
            departLeader: []
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _nextProps$department = nextProps.departmentList,
                departmentList = _nextProps$department === undefined ? [] : _nextProps$department;
            // let departmentList = []

            this.setState({
                parentId: null,
                departName: null,
                departLeader: [],
                visible: nextProps.visible,
                departmentList: departmentList
            }, function () {
                if (departmentList.length == 0 || departmentList[0] && departmentList[0].key != '0') {
                    departmentList.unshift({
                        key: '0',
                        title: '无',
                        value: '0'
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                departmentList = _state.departmentList,
                visible = _state.visible,
                parentId = _state.parentId,
                departName = _state.departName,
                leaderList = _state.leaderList,
                departLeader = _state.departLeader;
            var onShowAdd = this.props.onShowAdd;

            return React.createElement(
                _modal2.default,
                {
                    maskClosable: false,
                    title: '\u65B0\u589E\u90E8\u95E8',
                    visible: visible,
                    className: 'add-department',
                    onCancel: function onCancel() {
                        return onShowAdd(false);
                    },
                    onOk: function onOk() {
                        return _this2.onSubmit();
                    }
                },
                React.createElement(
                    'ul',
                    { className: 'items' },
                    React.createElement(
                        'li',
                        { className: 'item' },
                        React.createElement(
                            'span',
                            { className: 'title  red-ck' },
                            '\u7236\u7EA7\u90E8\u95E8'
                        ),
                        React.createElement(
                            'div',
                            { className: 'ipt-box' },
                            React.createElement(_treeSelect2.default, {
                                style: { width: '100%' },
                                dropdownStyle: { maxHeight: 200, overflow: 'auto' },
                                value: [parentId],
                                treeData: departmentList,
                                onChange: function onChange(value, label, extra) {
                                    return _this2.chTreeSelect(value, label, extra, 'parentId');
                                }
                            })
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'item' },
                        React.createElement(
                            'span',
                            { className: 'title  red-ck' },
                            '\u90E8\u95E8\u540D\u79F0'
                        ),
                        React.createElement(
                            'div',
                            { className: 'ipt-box' },
                            React.createElement(_input2.default, { onChange: function onChange(e) {
                                    return _this2.onChange(e, 'departName');
                                }, value: departName })
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/checkbox/style/css.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/checkbox/style/css.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/checkbox/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/checkbox/style/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/checkbox/style/index.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/_fbjs@0.8.17@fbjs/lib/emptyFunction.js":
/*!*************************************************************!*\
  !*** ./node_modules/_fbjs@0.8.17@fbjs/lib/emptyFunction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/_fbjs@0.8.17@fbjs/lib/warning.js":
/*!*******************************************************!*\
  !*** ./node_modules/_fbjs@0.8.17@fbjs/lib/warning.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/_fbjs@0.8.17@fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ })

}]);
//# sourceMappingURL=230_4c84cd012cd2f71c7734.js.map