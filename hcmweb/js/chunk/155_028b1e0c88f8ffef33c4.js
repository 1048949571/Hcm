(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[155],{

/***/ "./node_modules/_antd@3.10.1@antd/es/badge/ScrollNumber.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/badge/ScrollNumber.js ***!
  \*****************************************************************/
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
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! omit.js */ "./node_modules/_omit.js@1.0.0@omit.js/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);









function getNumberArray(num) {
    return num ? num.toString().split('').reverse().map(function (i) {
        return Number(i);
    }) : [];
}

var ScrollNumber = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ScrollNumber, _Component);

    function ScrollNumber(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ScrollNumber);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (ScrollNumber.__proto__ || Object.getPrototypeOf(ScrollNumber)).call(this, props));

        _this.state = {
            animateStarted: true,
            count: props.count
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ScrollNumber, [{
        key: 'getPositionByNum',
        value: function getPositionByNum(num, i) {
            if (this.state.animateStarted) {
                return 10 + num;
            }
            var currentDigit = getNumberArray(this.state.count)[i];
            var lastDigit = getNumberArray(this.lastCount)[i];
            // 同方向则在同一侧切换数字
            if (this.state.count > this.lastCount) {
                if (currentDigit >= lastDigit) {
                    return 10 + num;
                }
                return 20 + num;
            }
            if (currentDigit <= lastDigit) {
                return 10 + num;
            }
            return num;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if ('count' in nextProps) {
                if (this.state.count === nextProps.count) {
                    return;
                }
                this.lastCount = this.state.count;
                // 复原数字初始位置
                this.setState({
                    animateStarted: true
                }, function () {
                    // 等待数字位置复原完毕
                    // 开始设置完整的数字
                    setTimeout(function () {
                        _this2.setState({
                            animateStarted: false,
                            count: nextProps.count
                        }, function () {
                            var onAnimated = _this2.props.onAnimated;
                            if (onAnimated) {
                                onAnimated();
                            }
                        });
                    }, 5);
                });
            }
        }
    }, {
        key: 'renderNumberList',
        value: function renderNumberList(position) {
            var childrenToReturn = [];
            for (var i = 0; i < 30; i++) {
                var currentClassName = position === i ? 'current' : '';
                childrenToReturn.push(react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'p',
                    { key: i.toString(), className: currentClassName },
                    i % 10
                ));
            }
            return childrenToReturn;
        }
    }, {
        key: 'renderCurrentNumber',
        value: function renderCurrentNumber(num, i) {
            var position = this.getPositionByNum(num, i);
            var removeTransition = this.state.animateStarted || getNumberArray(this.lastCount)[i] === undefined;
            return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])('span', {
                className: this.props.prefixCls + '-only',
                style: {
                    transition: removeTransition ? 'none' : undefined,
                    msTransform: 'translateY(' + -position * 100 + '%)',
                    WebkitTransform: 'translateY(' + -position * 100 + '%)',
                    transform: 'translateY(' + -position * 100 + '%)'
                },
                key: i
            }, this.renderNumberList(position));
        }
    }, {
        key: 'renderNumberElement',
        value: function renderNumberElement() {
            var _this3 = this;

            var state = this.state;
            if (!state.count || isNaN(state.count)) {
                return state.count;
            }
            return getNumberArray(state.count).map(function (num, i) {
                return _this3.renderCurrentNumber(num, i);
            }).reverse();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                style = _props.style,
                title = _props.title,
                _props$component = _props.component,
                component = _props$component === undefined ? 'sup' : _props$component;
            // fix https://fb.me/react-unknown-prop

            var restProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this.props, ['count', 'onAnimated', 'component', 'prefixCls']);
            var newProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, { className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(prefixCls, className), title: title });
            // allow specify the border
            // mock border-color by box-shadow for compatible with old usage:
            // <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />
            if (style && style.borderColor) {
                newProps.style.boxShadow = '0 0 0 1px ' + style.borderColor + ' inset';
            }
            return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(component, newProps, this.renderNumberElement());
        }
    }]);

    return ScrollNumber;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ScrollNumber);

ScrollNumber.defaultProps = {
    prefixCls: 'ant-scroll-number',
    count: null,
    onAnimated: function onAnimated() {}
};

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/badge/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/badge/index.js ***!
  \**********************************************************/
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
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-animate */ "./node_modules/_rc-animate@2.5.4@rc-animate/es/Animate.js");
/* harmony import */ var _ScrollNumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ScrollNumber */ "./node_modules/_antd@3.10.1@antd/es/badge/ScrollNumber.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};






var Badge = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Badge, _React$Component);

    function Badge() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Badge);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Badge, [{
        key: 'render',
        value: function render() {
            var _classNames, _classNames2, _classNames3;

            var _a = this.props,
                count = _a.count,
                showZero = _a.showZero,
                prefixCls = _a.prefixCls,
                scrollNumberPrefixCls = _a.scrollNumberPrefixCls,
                overflowCount = _a.overflowCount,
                className = _a.className,
                style = _a.style,
                children = _a.children,
                dot = _a.dot,
                status = _a.status,
                text = _a.text,
                offset = _a.offset,
                title = _a.title,
                restProps = __rest(_a, ["count", "showZero", "prefixCls", "scrollNumberPrefixCls", "overflowCount", "className", "style", "children", "dot", "status", "text", "offset", "title"]);
            var displayCount = count > overflowCount ? overflowCount + '+' : count;
            var isZero = displayCount === '0' || displayCount === 0;
            var isDot = dot && !isZero || status;
            // dot mode don't need count
            if (isDot) {
                displayCount = '';
            }
            var isEmpty = displayCount === null || displayCount === undefined || displayCount === '';
            var hidden = (isEmpty || isZero && !showZero) && !isDot;
            var statusCls = classnames__WEBPACK_IMPORTED_MODULE_10___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-status-dot', !!status), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-status-' + status, !!status), _classNames));
            var scrollNumberCls = classnames__WEBPACK_IMPORTED_MODULE_10___default()((_classNames2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames2, prefixCls + '-dot', isDot), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames2, prefixCls + '-count', !isDot), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames2, prefixCls + '-multiple-words', !isDot && count && count.toString && count.toString().length > 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames2, prefixCls + '-status-' + status, !!status), _classNames2));
            var badgeCls = classnames__WEBPACK_IMPORTED_MODULE_10___default()(className, prefixCls, (_classNames3 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames3, prefixCls + '-status', !!status), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames3, prefixCls + '-not-a-wrapper', !children), _classNames3));
            var styleWithOffset = offset ? babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ right: -parseInt(offset[0], 10), marginTop: offset[1] }, style) : style;
            // <Badge status="success" />
            if (!children && status) {
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'span',
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, { className: badgeCls, style: styleWithOffset }),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('span', { className: statusCls }),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'span',
                        { className: prefixCls + '-status-text' },
                        text
                    )
                );
            }
            var scrollNumber = hidden ? null : react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_ScrollNumber__WEBPACK_IMPORTED_MODULE_9__["default"], { prefixCls: scrollNumberPrefixCls, 'data-show': !hidden, className: scrollNumberCls, count: displayCount, title: title || count, style: styleWithOffset, key: 'scrollNumber' });
            var statusText = hidden || !text ? null : react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: prefixCls + '-status-text' },
                text
            );
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, { className: badgeCls }),
                children,
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"],
                    { component: '', showProp: 'data-show', transitionName: children ? prefixCls + '-zoom' : '', transitionAppear: true },
                    scrollNumber
                ),
                statusText
            );
        }
    }]);

    return Badge;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Badge);

Badge.defaultProps = {
    prefixCls: 'ant-badge',
    scrollNumberPrefixCls: 'ant-scroll-number',
    count: null,
    showZero: false,
    dot: false,
    overflowCount: 99
};
Badge.propTypes = {
    count: prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
    showZero: prop_types__WEBPACK_IMPORTED_MODULE_7__["bool"],
    dot: prop_types__WEBPACK_IMPORTED_MODULE_7__["bool"],
    overflowCount: prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]
};

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/badge/style/css.js":
/*!**************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/badge/style/css.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/badge/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/badge/style/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/badge/style/index.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/_core-js@2.5.7@core-js/library/fn/object/get-own-property-descriptor.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/_core-js@2.5.7@core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/get.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/get.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/fn/object/get-own-property-descriptor.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/fn/object/get-own-property-descriptor.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/fn/object/get-prototype-of.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/fn/object/get-prototype-of.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-sap.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/_object-sap.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.get-prototype-of.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_core-js@2.5.7@core-js/library/modules/es6.object.get-prototype-of.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/_core-js@2.5.7@core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/_rc-gesture@0.0.22@rc-gesture/es/config.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_rc-gesture@0.0.22@rc-gesture/es/config.js ***!
  \*****************************************************************/
/*! exports provided: DIRECTION_NONE, DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, DIRECTION_DOWN, DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, DIRECTION_ALL, PRESS, SWIPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_NONE", function() { return DIRECTION_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_LEFT", function() { return DIRECTION_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_RIGHT", function() { return DIRECTION_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_UP", function() { return DIRECTION_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_DOWN", function() { return DIRECTION_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_HORIZONTAL", function() { return DIRECTION_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_VERTICAL", function() { return DIRECTION_VERTICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION_ALL", function() { return DIRECTION_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRESS", function() { return PRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWIPE", function() { return SWIPE; });
/* tslint:disable:no-bitwise */
// http://hammerjs.github.io/api/#directions
var DIRECTION_NONE = 1; // 00001
var DIRECTION_LEFT = 2; // 00010
var DIRECTION_RIGHT = 4; // 00100
var DIRECTION_UP = 8; // 01000
var DIRECTION_DOWN = 16; // 10000
var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT; // 00110 6
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN; // 11000 24
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL; // 11110  30
// http://hammerjs.github.io/recognizer-press/
var PRESS = {
    time: 251
};
// http://hammerjs.github.io/recognizer-swipe/
var SWIPE = {
    threshold: 10,
    velocity: 0.3
};

/***/ }),

/***/ "./node_modules/_rc-gesture@0.0.22@rc-gesture/es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/_rc-gesture@0.0.22@rc-gesture/es/index.js ***!
  \****************************************************************/
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./node_modules/_rc-gesture@0.0.22@rc-gesture/es/util.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config */ "./node_modules/_rc-gesture@0.0.22@rc-gesture/es/config.js");





/* tslint:disable:no-console */



;
;
var directionMap = {
    all: _config__WEBPACK_IMPORTED_MODULE_7__["DIRECTION_ALL"],
    vertical: _config__WEBPACK_IMPORTED_MODULE_7__["DIRECTION_VERTICAL"],
    horizontal: _config__WEBPACK_IMPORTED_MODULE_7__["DIRECTION_HORIZONTAL"]
};

var Gesture = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Gesture, _Component);

    function Gesture(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Gesture);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Gesture.__proto__ || Object.getPrototypeOf(Gesture)).call(this, props));

        _this.state = {};
        _this.triggerEvent = function (name) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            var cb = _this.props[name];
            if (typeof cb === 'function') {
                // always give user gesture object as first params first
                cb.apply(undefined, [_this.getGestureState()].concat(args));
            }
        };
        _this.triggerCombineEvent = function (mainEventName, eventStatus) {
            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
            }

            _this.triggerEvent.apply(_this, [mainEventName].concat(args));
            _this.triggerSubEvent.apply(_this, [mainEventName, eventStatus].concat(args));
        };
        _this.triggerSubEvent = function (mainEventName, eventStatus) {
            for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                args[_key3 - 2] = arguments[_key3];
            }

            if (eventStatus) {
                var subEventName = Object(_util__WEBPACK_IMPORTED_MODULE_6__["getEventName"])(mainEventName, eventStatus);
                _this.triggerEvent.apply(_this, [subEventName].concat(args));
            }
        };
        _this.triggerPinchEvent = function (mainEventName, eventStatus) {
            for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
                args[_key4 - 2] = arguments[_key4];
            }

            var scale = _this.gesture.scale;

            if (eventStatus === 'move' && typeof scale === 'number') {
                if (scale > 1) {
                    _this.triggerEvent('onPinchOut');
                }
                if (scale < 1) {
                    _this.triggerEvent('onPinchIn');
                }
            }
            _this.triggerCombineEvent.apply(_this, [mainEventName, eventStatus].concat(args));
        };
        _this.initPressTimer = function () {
            _this.cleanPressTimer();
            _this.pressTimer = setTimeout(function () {
                _this.setGestureState({
                    press: true
                });
                _this.triggerEvent('onPress');
            }, _config__WEBPACK_IMPORTED_MODULE_7__["PRESS"].time);
        };
        _this.cleanPressTimer = function () {
            /* tslint:disable:no-unused-expression */
            _this.pressTimer && clearTimeout(_this.pressTimer);
        };
        _this.setGestureState = function (params) {
            if (!_this.gesture) {
                _this.gesture = {};
            }
            // cache the previous touches
            if (_this.gesture.touches) {
                _this.gesture.preTouches = _this.gesture.touches;
            }
            _this.gesture = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.gesture, params);
        };
        _this.getGestureState = function () {
            if (!_this.gesture) {
                return _this.gesture;
            } else {
                // shallow copy
                return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.gesture);
            }
        };
        _this.cleanGestureState = function () {
            delete _this.gesture;
        };
        _this.getTouches = function (e) {
            return Array.prototype.slice.call(e.touches).map(function (item) {
                return {
                    x: item.screenX,
                    y: item.screenY
                };
            });
        };
        _this.triggerUserCb = function (status, e) {
            var cbName = Object(_util__WEBPACK_IMPORTED_MODULE_6__["getEventName"])('onTouch', status);
            if (cbName in _this.props) {
                _this.props[cbName](e);
            }
        };
        _this._handleTouchStart = function (e) {
            _this.triggerUserCb('start', e);
            _this.event = e;
            if (e.touches.length > 1) {
                e.preventDefault();
            }
            _this.initGestureStatus(e);
            _this.initPressTimer();
            _this.checkIfMultiTouchStart();
        };
        _this.initGestureStatus = function (e) {
            _this.cleanGestureState();
            // store the gesture start state
            var startTouches = _this.getTouches(e);
            var startTime = Object(_util__WEBPACK_IMPORTED_MODULE_6__["now"])();
            var startMutliFingerStatus = Object(_util__WEBPACK_IMPORTED_MODULE_6__["calcMutliFingerStatus"])(startTouches);
            _this.setGestureState({
                startTime: startTime,
                startTouches: startTouches,
                startMutliFingerStatus: startMutliFingerStatus,
                /* copy for next time touch move cala convenient*/
                time: startTime,
                touches: startTouches,
                mutliFingerStatus: startMutliFingerStatus,
                srcEvent: _this.event
            });
        };
        _this.checkIfMultiTouchStart = function () {
            var _this$props = _this.props,
                enablePinch = _this$props.enablePinch,
                enableRotate = _this$props.enableRotate;
            var touches = _this.gesture.touches;

            if (touches.length > 1 && (enablePinch || enableRotate)) {
                if (enablePinch) {
                    var startMutliFingerStatus = Object(_util__WEBPACK_IMPORTED_MODULE_6__["calcMutliFingerStatus"])(touches);
                    _this.setGestureState({
                        startMutliFingerStatus: startMutliFingerStatus,
                        /* init pinch status */
                        pinch: true,
                        scale: 1
                    });
                    _this.triggerCombineEvent('onPinch', 'start');
                }
                if (enableRotate) {
                    _this.setGestureState({
                        /* init rotate status */
                        rotate: true,
                        rotation: 0
                    });
                    _this.triggerCombineEvent('onRotate', 'start');
                }
            }
        };
        _this._handleTouchMove = function (e) {
            _this.triggerUserCb('move', e);
            _this.event = e;
            if (!_this.gesture) {
                // sometimes weird happen: touchstart -> touchmove..touchmove.. --> touchend --> touchmove --> touchend
                // so we need to skip the unnormal event cycle after touchend
                return;
            }
            // not a long press
            _this.cleanPressTimer();
            _this.updateGestureStatus(e);
            _this.checkIfSingleTouchMove();
            _this.checkIfMultiTouchMove();
        };
        _this.checkIfMultiTouchMove = function () {
            var _this$gesture = _this.gesture,
                pinch = _this$gesture.pinch,
                rotate = _this$gesture.rotate,
                touches = _this$gesture.touches,
                startMutliFingerStatus = _this$gesture.startMutliFingerStatus,
                mutliFingerStatus = _this$gesture.mutliFingerStatus;

            if (!pinch && !rotate) {
                return;
            }
            if (touches.length < 2) {
                _this.setGestureState({
                    pinch: false,
                    rotate: false
                });
                // Todo: 2 finger -> 1 finger, wait to test this situation
                pinch && _this.triggerCombineEvent('onPinch', 'cancel');
                rotate && _this.triggerCombineEvent('onRotate', 'cancel');
                return;
            }
            if (pinch) {
                var scale = mutliFingerStatus.z / startMutliFingerStatus.z;
                _this.setGestureState({
                    scale: scale
                });
                _this.triggerPinchEvent('onPinch', 'move');
            }
            if (rotate) {
                var rotation = Object(_util__WEBPACK_IMPORTED_MODULE_6__["calcRotation"])(startMutliFingerStatus, mutliFingerStatus);
                _this.setGestureState({
                    rotation: rotation
                });
                _this.triggerCombineEvent('onRotate', 'move');
            }
        };
        _this.allowGesture = function () {
            return Object(_util__WEBPACK_IMPORTED_MODULE_6__["shouldTriggerDirection"])(_this.gesture.direction, _this.directionSetting);
        };
        _this.checkIfSingleTouchMove = function () {
            var _this$gesture2 = _this.gesture,
                pan = _this$gesture2.pan,
                touches = _this$gesture2.touches,
                moveStatus = _this$gesture2.moveStatus,
                preTouches = _this$gesture2.preTouches,
                _this$gesture2$availa = _this$gesture2.availablePan,
                availablePan = _this$gesture2$availa === undefined ? true : _this$gesture2$availa;

            if (touches.length > 1) {
                _this.setGestureState({
                    pan: false
                });
                // Todo: 1 finger -> 2 finger, wait to test this situation
                pan && _this.triggerCombineEvent('onPan', 'cancel');
                return;
            }
            // add avilablePan condition to fix the case in scrolling, which will cause unavailable pan move.
            if (moveStatus && availablePan) {
                var direction = Object(_util__WEBPACK_IMPORTED_MODULE_6__["getMovingDirection"])(preTouches[0], touches[0]);
                _this.setGestureState({ direction: direction });
                var eventName = Object(_util__WEBPACK_IMPORTED_MODULE_6__["getDirectionEventName"])(direction);
                if (!_this.allowGesture()) {
                    // if the first move is unavailable, then judge all of remaining touch movings are also invalid.
                    if (!pan) {
                        _this.setGestureState({ availablePan: false });
                    }
                    return;
                }
                if (!pan) {
                    _this.triggerCombineEvent('onPan', 'start');
                    _this.setGestureState({
                        pan: true,
                        availablePan: true
                    });
                } else {
                    _this.triggerCombineEvent('onPan', eventName);
                    _this.triggerSubEvent('onPan', 'move');
                }
            }
        };
        _this.checkIfMultiTouchEnd = function (status) {
            var _this$gesture3 = _this.gesture,
                pinch = _this$gesture3.pinch,
                rotate = _this$gesture3.rotate;

            if (pinch) {
                _this.triggerCombineEvent('onPinch', status);
            }
            if (rotate) {
                _this.triggerCombineEvent('onRotate', status);
            }
        };
        _this.updateGestureStatus = function (e) {
            var time = Object(_util__WEBPACK_IMPORTED_MODULE_6__["now"])();
            _this.setGestureState({
                time: time
            });
            if (!e.touches || !e.touches.length) {
                return;
            }
            var _this$gesture4 = _this.gesture,
                startTime = _this$gesture4.startTime,
                startTouches = _this$gesture4.startTouches,
                pinch = _this$gesture4.pinch,
                rotate = _this$gesture4.rotate;

            var touches = _this.getTouches(e);
            var moveStatus = Object(_util__WEBPACK_IMPORTED_MODULE_6__["calcMoveStatus"])(startTouches, touches, time - startTime);
            var mutliFingerStatus = void 0;
            if (pinch || rotate) {
                mutliFingerStatus = Object(_util__WEBPACK_IMPORTED_MODULE_6__["calcMutliFingerStatus"])(touches);
            }
            _this.setGestureState({
                /* update status snapshot */
                touches: touches,
                mutliFingerStatus: mutliFingerStatus,
                /* update duration status */
                moveStatus: moveStatus
            });
        };
        _this._handleTouchEnd = function (e) {
            _this.triggerUserCb('end', e);
            _this.event = e;
            if (!_this.gesture) {
                return;
            }
            _this.cleanPressTimer();
            _this.updateGestureStatus(e);
            _this.doSingleTouchEnd('end');
            _this.checkIfMultiTouchEnd('end');
        };
        _this._handleTouchCancel = function (e) {
            _this.triggerUserCb('cancel', e);
            _this.event = e;
            // Todo: wait to test cancel case
            if (!_this.gesture) {
                return;
            }
            _this.cleanPressTimer();
            _this.updateGestureStatus(e);
            _this.doSingleTouchEnd('cancel');
            _this.checkIfMultiTouchEnd('cancel');
        };
        _this.triggerAllowEvent = function (type, status) {
            if (_this.allowGesture()) {
                _this.triggerCombineEvent(type, status);
            } else {
                _this.triggerSubEvent(type, status);
            }
        };
        _this.doSingleTouchEnd = function (status) {
            var _this$gesture5 = _this.gesture,
                moveStatus = _this$gesture5.moveStatus,
                pinch = _this$gesture5.pinch,
                rotate = _this$gesture5.rotate,
                press = _this$gesture5.press,
                pan = _this$gesture5.pan,
                direction = _this$gesture5.direction;

            if (pinch || rotate) {
                return;
            }
            if (moveStatus) {
                var z = moveStatus.z,
                    velocity = moveStatus.velocity;

                var swipe = Object(_util__WEBPACK_IMPORTED_MODULE_6__["shouldTriggerSwipe"])(z, velocity);
                _this.setGestureState({
                    swipe: swipe
                });
                if (pan) {
                    // pan need end, it's a process
                    // sometimes, start with pan left, but end with pan right....
                    _this.triggerAllowEvent('onPan', status);
                }
                if (swipe) {
                    var directionEvName = Object(_util__WEBPACK_IMPORTED_MODULE_6__["getDirectionEventName"])(direction);
                    // swipe just need a direction, it's a endpoint
                    _this.triggerAllowEvent('onSwipe', directionEvName);
                    return;
                }
            }
            if (press) {
                _this.triggerEvent('onPressUp');
                return;
            }
            _this.triggerEvent('onTap');
        };
        _this.getTouchAction = function () {
            var _this$props2 = _this.props,
                enablePinch = _this$props2.enablePinch,
                enableRotate = _this$props2.enableRotate;
            var directionSetting = _this.directionSetting;

            if (enablePinch || enableRotate || directionSetting === _config__WEBPACK_IMPORTED_MODULE_7__["DIRECTION_ALL"]) {
                return 'pan-x pan-y';
            }
            if (directionSetting === _config__WEBPACK_IMPORTED_MODULE_7__["DIRECTION_VERTICAL"]) {
                return 'pan-x';
            }
            if (directionSetting === _config__WEBPACK_IMPORTED_MODULE_7__["DIRECTION_HORIZONTAL"]) {
                return 'pan-y';
            }
            return 'auto';
        };
        _this.directionSetting = directionMap[props.direction];
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Gesture, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.cleanPressTimer();
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;

            var child = react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.only(children);
            var touchAction = this.getTouchAction();
            var events = {
                onTouchStart: this._handleTouchStart,
                onTouchMove: this._handleTouchMove,
                onTouchCancel: this._handleTouchCancel,
                onTouchEnd: this._handleTouchEnd
            };
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(child, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, events, { style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ touchAction: touchAction }, child.props.style || {}) }));
        }
    }]);

    return Gesture;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Gesture);

Gesture.defaultProps = {
    enableRotate: false,
    enablePinch: false,
    direction: 'all'
};

/***/ }),

/***/ "./node_modules/_rc-gesture@0.0.22@rc-gesture/es/util.js":
/*!***************************************************************!*\
  !*** ./node_modules/_rc-gesture@0.0.22@rc-gesture/es/util.js ***!
  \***************************************************************/
/*! exports provided: now, calcMutliFingerStatus, calcMoveStatus, calcRotation, getEventName, shouldTriggerSwipe, shouldTriggerDirection, getDirection, getMovingDirection, getDirectionEventName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcMutliFingerStatus", function() { return calcMutliFingerStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcMoveStatus", function() { return calcMoveStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcRotation", function() { return calcRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventName", function() { return getEventName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldTriggerSwipe", function() { return shouldTriggerSwipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldTriggerDirection", function() { return shouldTriggerDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirection", function() { return getDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovingDirection", function() { return getMovingDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectionEventName", function() { return getDirectionEventName; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/_rc-gesture@0.0.22@rc-gesture/es/config.js");
/* tslint:disable:no-bitwise */

function _calcTriangleDistance(x, y) {
    return Math.sqrt(x * x + y * y);
}
function _calcAngle(x, y) {
    var radian = Math.atan2(y, x);
    return 180 / (Math.PI / radian);
}
function now() {
    return Date.now();
}
function calcMutliFingerStatus(touches) {
    if (touches.length < 2) {
        return;
    }
    var _touches$ = touches[0],
        x1 = _touches$.x,
        y1 = _touches$.y;
    var _touches$2 = touches[1],
        x2 = _touches$2.x,
        y2 = _touches$2.y;

    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    return {
        x: deltaX,
        y: deltaY,
        z: _calcTriangleDistance(deltaX, deltaY),
        angle: _calcAngle(deltaX, deltaY)
    };
}
function calcMoveStatus(startTouches, touches, time) {
    var _startTouches$ = startTouches[0],
        x1 = _startTouches$.x,
        y1 = _startTouches$.y;
    var _touches$3 = touches[0],
        x2 = _touches$3.x,
        y2 = _touches$3.y;

    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    var deltaZ = _calcTriangleDistance(deltaX, deltaY);
    return {
        x: deltaX,
        y: deltaY,
        z: deltaZ,
        time: time,
        velocity: deltaZ / time,
        angle: _calcAngle(deltaX, deltaY)
    };
}
function calcRotation(startMutliFingerStatus, mutliFingerStatus) {
    var startAngle = startMutliFingerStatus.angle;
    var angle = mutliFingerStatus.angle;

    return angle - startAngle;
}
function getEventName(prefix, status) {
    return prefix + status[0].toUpperCase() + status.slice(1);
}
function shouldTriggerSwipe(delta, velocity) {
    return Math.abs(delta) >= _config__WEBPACK_IMPORTED_MODULE_0__["SWIPE"].threshold && Math.abs(velocity) > _config__WEBPACK_IMPORTED_MODULE_0__["SWIPE"].velocity;
}
function shouldTriggerDirection(direction, directionSetting) {
    if (directionSetting & direction) {
        return true;
    }
    return false;
}
/**
 * @private
 * get the direction between two points
 * Note: will change next version
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_NONE"];
    }
    if (Math.abs(x) >= Math.abs(y)) {
        return x < 0 ? _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_LEFT"] : _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_RIGHT"];
    }
    return y < 0 ? _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_UP"] : _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_DOWN"];
}
/**
 * @private
 * get the direction between tow points when touch moving
 * Note: will change next version
 * @param {Object} point1 coordinate point, include x & y attributes
 * @param {Object} point2 coordinate point, include x & y attributes
 * @return {Number} direction
 */
function getMovingDirection(point1, point2) {
    var x1 = point1.x,
        y1 = point1.y;
    var x2 = point2.x,
        y2 = point2.y;

    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    if (deltaX === 0 && deltaY === 0) {
        return _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_NONE"];
    }
    if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        return deltaX < 0 ? _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_LEFT"] : _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_RIGHT"];
    }
    return deltaY < 0 ? _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_UP"] : _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_DOWN"];
}
function getDirectionEventName(direction) {
    var name = void 0;
    switch (direction) {
        case _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_NONE"]:
            break;
        case _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_LEFT"]:
            name = 'left';
            break;
        case _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_RIGHT"]:
            name = 'right';
            break;
        case _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_UP"]:
            name = 'up';
            break;
        case _config__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_DOWN"]:
            name = 'down';
            break;
        default:
    }
    return name;
}

/***/ }),

/***/ "./node_modules/_rmc-date-picker@6.0.8@rmc-date-picker/es/DatePicker.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_rmc-date-picker@6.0.8@rmc-date-picker/es/DatePicker.js ***!
  \******************************************************************************/
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
/* harmony import */ var rmc_picker_es_MultiPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rmc-picker/es/MultiPicker */ "./node_modules/_rmc-picker@5.0.5@rmc-picker/es/MultiPicker.js");
/* harmony import */ var rmc_picker_lib_Picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rmc-picker/lib/Picker */ "./node_modules/_rmc-picker@5.0.5@rmc-picker/lib/Picker.js");
/* harmony import */ var rmc_picker_lib_Picker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rmc_picker_lib_Picker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _locale_en_US__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locale/en_US */ "./node_modules/_rmc-date-picker@6.0.8@rmc-date-picker/es/locale/en_US.js");









function getDaysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}
function pad(n) {
    return n < 10 ? '0' + n : n + '';
}
function cloneDate(date) {
    return new Date(+date);
}
function setMonth(date, month) {
    date.setDate(Math.min(date.getDate(), getDaysInMonth(new Date(date.getFullYear(), month))));
    date.setMonth(month);
}
var DATETIME = 'datetime';
var DATE = 'date';
var TIME = 'time';
var MONTH = 'month';
var YEAR = 'year';
var ONE_DAY = 24 * 60 * 60 * 1000;

var DatePicker = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DatePicker, _React$Component);

    function DatePicker() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DatePicker);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));

        _this.state = {
            date: _this.props.date || _this.props.defaultDate
        };
        _this.getNewDate = function (values, index) {
            var value = parseInt(values[index], 10);
            var props = _this.props;
            var mode = props.mode;

            var newValue = cloneDate(_this.getDate());
            if (mode === DATETIME || mode === DATE || mode === YEAR || mode === MONTH) {
                switch (index) {
                    case 0:
                        newValue.setFullYear(value);
                        break;
                    case 1:
                                                                        setMonth(newValue, value);
                        break;
                    case 2:
                        newValue.setDate(value);
                        break;
                    case 3:
                        _this.setHours(newValue, value);
                        break;
                    case 4:
                        newValue.setMinutes(value);
                        break;
                    case 5:
                        _this.setAmPm(newValue, value);
                        break;
                    default:
                        break;
                }
            } else if (mode === TIME) {
                switch (index) {
                    case 0:
                        _this.setHours(newValue, value);
                        break;
                    case 1:
                        newValue.setMinutes(value);
                        break;
                    case 2:
                        _this.setAmPm(newValue, value);
                        break;
                    default:
                        break;
                }
            }
            return _this.clipDate(newValue);
        };
        _this.onValueChange = function (values, index) {
            var props = _this.props;
            var newValue = _this.getNewDate(values, index);
            if (!('date' in props)) {
                _this.setState({
                    date: newValue
                });
            }
            if (props.onDateChange) {
                props.onDateChange(newValue);
            }
            if (props.onValueChange) {
                props.onValueChange(values, index);
            }
        };
        _this.onScrollChange = function (values, index) {
            var props = _this.props;
            if (props.onScrollChange) {
                var newValue = _this.getNewDate(values, index);
                props.onScrollChange(newValue, values, index);
            }
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DatePicker, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('date' in nextProps) {
                this.setState({
                    date: nextProps.date || nextProps.defaultDate
                });
            }
        }
    }, {
        key: 'setHours',
        value: function setHours(date, hour) {
            if (this.props.use12Hours) {
                var dh = date.getHours();
                var nhour = hour;
                nhour = dh >= 12 ? hour + 12 : hour;
                nhour = nhour >= 24 ? 0 : nhour;                 date.setHours(nhour);
            } else {
                date.setHours(hour);
            }
        }
    }, {
        key: 'setAmPm',
        value: function setAmPm(date, index) {
            if (index === 0) {
                date.setTime(+date - ONE_DAY / 2);
            } else {
                date.setTime(+date + ONE_DAY / 2);
            }
        }
    }, {
        key: 'getDefaultMinDate',
        value: function getDefaultMinDate() {
            if (!this.defaultMinDate) {
                this.defaultMinDate = new Date(2000, 1, 1, 0, 0, 0);
            }
            return this.defaultMinDate;
        }
    }, {
        key: 'getDefaultMaxDate',
        value: function getDefaultMaxDate() {
            if (!this.defaultMaxDate) {
                this.defaultMaxDate = new Date(2030, 1, 1, 23, 59, 59);
            }
            return this.defaultMaxDate;
        }
    }, {
        key: 'getDate',
        value: function getDate() {
            return this.clipDate(this.state.date || this.getDefaultMinDate());
        }
        
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.getDate();
        }
    }, {
        key: 'getMinYear',
        value: function getMinYear() {
            return this.getMinDate().getFullYear();
        }
    }, {
        key: 'getMaxYear',
        value: function getMaxYear() {
            return this.getMaxDate().getFullYear();
        }
    }, {
        key: 'getMinMonth',
        value: function getMinMonth() {
            return this.getMinDate().getMonth();
        }
    }, {
        key: 'getMaxMonth',
        value: function getMaxMonth() {
            return this.getMaxDate().getMonth();
        }
    }, {
        key: 'getMinDay',
        value: function getMinDay() {
            return this.getMinDate().getDate();
        }
    }, {
        key: 'getMaxDay',
        value: function getMaxDay() {
            return this.getMaxDate().getDate();
        }
    }, {
        key: 'getMinHour',
        value: function getMinHour() {
            return this.getMinDate().getHours();
        }
    }, {
        key: 'getMaxHour',
        value: function getMaxHour() {
            return this.getMaxDate().getHours();
        }
    }, {
        key: 'getMinMinute',
        value: function getMinMinute() {
            return this.getMinDate().getMinutes();
        }
    }, {
        key: 'getMaxMinute',
        value: function getMaxMinute() {
            return this.getMaxDate().getMinutes();
        }
    }, {
        key: 'getMinDate',
        value: function getMinDate() {
            return this.props.minDate || this.getDefaultMinDate();
        }
    }, {
        key: 'getMaxDate',
        value: function getMaxDate() {
            return this.props.maxDate || this.getDefaultMaxDate();
        }
    }, {
        key: 'getDateData',
        value: function getDateData() {
            var _props = this.props,
                locale = _props.locale,
                formatMonth = _props.formatMonth,
                formatDay = _props.formatDay,
                mode = _props.mode;

            var date = this.getDate();
            var selYear = date.getFullYear();
            var selMonth = date.getMonth();
            var minDateYear = this.getMinYear();
            var maxDateYear = this.getMaxYear();
            var minDateMonth = this.getMinMonth();
            var maxDateMonth = this.getMaxMonth();
            var minDateDay = this.getMinDay();
            var maxDateDay = this.getMaxDay();
            var years = [];
            for (var i = minDateYear; i <= maxDateYear; i++) {
                years.push({
                    value: i + '',
                    label: i + locale.year + ''
                });
            }
            var yearCol = { key: 'year', props: { children: years } };
            if (mode === YEAR) {
                return [yearCol];
            }
            var months = [];
            var minMonth = 0;
            var maxMonth = 11;
            if (minDateYear === selYear) {
                minMonth = minDateMonth;
            }
            if (maxDateYear === selYear) {
                maxMonth = maxDateMonth;
            }
            for (var _i = minMonth; _i <= maxMonth; _i++) {
                var label = formatMonth ? formatMonth(_i, date) : _i + 1 + locale.month + '';
                months.push({
                    value: _i + '',
                    label: label
                });
            }
            var monthCol = { key: 'month', props: { children: months } };
            if (mode === MONTH) {
                return [yearCol, monthCol];
            }
            var days = [];
            var minDay = 1;
            var maxDay = getDaysInMonth(date);
            if (minDateYear === selYear && minDateMonth === selMonth) {
                minDay = minDateDay;
            }
            if (maxDateYear === selYear && maxDateMonth === selMonth) {
                maxDay = maxDateDay;
            }
            for (var _i2 = minDay; _i2 <= maxDay; _i2++) {
                var _label = formatDay ? formatDay(_i2, date) : _i2 + locale.day + '';
                days.push({
                    value: _i2 + '',
                    label: _label
                });
            }
            return [yearCol, monthCol, { key: 'day', props: { children: days } }];
        }
    }, {
        key: 'getDisplayHour',
        value: function getDisplayHour(rawHour) {
                        if (this.props.use12Hours) {
                if (rawHour === 0) {
                    rawHour = 12;
                }
                if (rawHour > 12) {
                    rawHour -= 12;
                }
                return rawHour;
            }
            return rawHour;
        }
    }, {
        key: 'getTimeData',
        value: function getTimeData(date) {
            var minHour = 0;
            var maxHour = 23;
            var minMinute = 0;
            var maxMinute = 59;
            var _props2 = this.props,
                mode = _props2.mode,
                locale = _props2.locale,
                minuteStep = _props2.minuteStep,
                use12Hours = _props2.use12Hours;

            var minDateMinute = this.getMinMinute();
            var maxDateMinute = this.getMaxMinute();
            var minDateHour = this.getMinHour();
            var maxDateHour = this.getMaxHour();
            var hour = date.getHours();
            if (mode === DATETIME) {
                var year = date.getFullYear();
                var month = date.getMonth();
                var day = date.getDate();
                var minDateYear = this.getMinYear();
                var maxDateYear = this.getMaxYear();
                var minDateMonth = this.getMinMonth();
                var maxDateMonth = this.getMaxMonth();
                var minDateDay = this.getMinDay();
                var maxDateDay = this.getMaxDay();
                if (minDateYear === year && minDateMonth === month && minDateDay === day) {
                    minHour = minDateHour;
                    if (minDateHour === hour) {
                        minMinute = minDateMinute;
                    }
                }
                if (maxDateYear === year && maxDateMonth === month && maxDateDay === day) {
                    maxHour = maxDateHour;
                    if (maxDateHour === hour) {
                        maxMinute = maxDateMinute;
                    }
                }
            } else {
                minHour = minDateHour;
                if (minDateHour === hour) {
                    minMinute = minDateMinute;
                }
                maxHour = maxDateHour;
                if (maxDateHour === hour) {
                    maxMinute = maxDateMinute;
                }
            }
            var hours = [];
            if (minHour === 0 && maxHour === 0 || minHour !== 0 && maxHour !== 0) {
                minHour = this.getDisplayHour(minHour);
            } else if (minHour === 0 && use12Hours) {
                minHour = 1;
                hours.push({ value: '0', label: locale.hour ? '12' + locale.hour : '12' });
            }
            maxHour = this.getDisplayHour(maxHour);
            for (var i = minHour; i <= maxHour; i++) {
                hours.push({
                    value: i + '',
                    label: locale.hour ? i + locale.hour + '' : pad(i)
                });
            }
            var minutes = [];
            var selMinute = date.getMinutes();
            for (var _i3 = minMinute; _i3 <= maxMinute; _i3 += minuteStep) {
                minutes.push({
                    value: _i3 + '',
                    label: locale.minute ? _i3 + locale.minute + '' : pad(_i3)
                });
                if (selMinute > _i3 && selMinute < _i3 + minuteStep) {
                    minutes.push({
                        value: selMinute + '',
                        label: locale.minute ? selMinute + locale.minute + '' : pad(selMinute)
                    });
                }
            }
            var cols = [{ key: 'hours', props: { children: hours } }, { key: 'minutes', props: { children: minutes } }].concat(use12Hours ? [{
                key: 'ampm',
                props: { children: [{ value: '0', label: locale.am }, { value: '1', label: locale.pm }] }
            }] : []);
            return { cols: cols, selMinute: selMinute };
        }
    }, {
        key: 'clipDate',
        value: function clipDate(date) {
            var mode = this.props.mode;

            var minDate = this.getMinDate();
            var maxDate = this.getMaxDate();
            if (mode === DATETIME) {
                if (date < minDate) {
                    return cloneDate(minDate);
                }
                if (date > maxDate) {
                    return cloneDate(maxDate);
                }
            } else if (mode === DATE || mode === YEAR || mode === MONTH) {
                                if (+date + ONE_DAY <= minDate) {
                    return cloneDate(minDate);
                }
                if (date >= +maxDate + ONE_DAY) {
                    return cloneDate(maxDate);
                }
            } else if (mode === TIME) {
                var maxHour = maxDate.getHours();
                var maxMinutes = maxDate.getMinutes();
                var minHour = minDate.getHours();
                var minMinutes = minDate.getMinutes();
                var hour = date.getHours();
                var minutes = date.getMinutes();
                if (hour < minHour || hour === minHour && minutes < minMinutes) {
                    return cloneDate(minDate);
                }
                if (hour > maxHour || hour === maxHour && minutes > maxMinutes) {
                    return cloneDate(maxDate);
                }
            }
            return date;
        }
    }, {
        key: 'getValueCols',
        value: function getValueCols() {
            var _props3 = this.props,
                mode = _props3.mode,
                use12Hours = _props3.use12Hours;

            var date = this.getDate();
            var cols = [];
            var value = [];
            if (mode === YEAR) {
                return {
                    cols: this.getDateData(),
                    value: [date.getFullYear() + '']
                };
            }
            if (mode === MONTH) {
                return {
                    cols: this.getDateData(),
                    value: [date.getFullYear() + '', date.getMonth() + '']
                };
            }
            if (mode === DATETIME || mode === DATE) {
                cols = this.getDateData();
                value = [date.getFullYear() + '', date.getMonth() + '', date.getDate() + ''];
            }
            if (mode === DATETIME || mode === TIME) {
                var time = this.getTimeData(date);
                cols = cols.concat(time.cols);
                var hour = date.getHours();
                var dtValue = [hour + '', time.selMinute + ''];
                var nhour = hour;
                if (use12Hours) {
                    nhour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
                    dtValue = [nhour + '', time.selMinute + '', (hour >= 12 ? 1 : 0) + ''];
                }
                value = value.concat(dtValue);
            }
            return {
                value: value,
                cols: cols
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _getValueCols = this.getValueCols(),
                value = _getValueCols.value,
                cols = _getValueCols.cols;

            var _props4 = this.props,
                disabled = _props4.disabled,
                pickerPrefixCls = _props4.pickerPrefixCls,
                prefixCls = _props4.prefixCls,
                rootNativeProps = _props4.rootNativeProps,
                className = _props4.className,
                style = _props4.style,
                itemStyle = _props4.itemStyle;

            var multiStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ flexDirection: 'row', alignItems: 'center' }, style);
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rmc_picker_es_MultiPicker__WEBPACK_IMPORTED_MODULE_6__["default"], { style: multiStyle, rootNativeProps: rootNativeProps, className: className, prefixCls: prefixCls, selectedValue: value, onValueChange: this.onValueChange, onScrollChange: this.onScrollChange }, cols.map(function (p) {
                return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rmc_picker_lib_Picker__WEBPACK_IMPORTED_MODULE_7___default.a, { style: { flex: 1 }, key: p.key, disabled: disabled, prefixCls: pickerPrefixCls, itemStyle: itemStyle }, p.props.children.map(function (item) {
                    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rmc_picker_lib_Picker__WEBPACK_IMPORTED_MODULE_7___default.a.Item, { key: item.value, value: item.value }, item.label);
                }));
            }));
        }
    }]);

    return DatePicker;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

DatePicker.defaultProps = {
    prefixCls: 'rmc-date-picker',
    pickerPrefixCls: 'rmc-picker',
    locale: _locale_en_US__WEBPACK_IMPORTED_MODULE_8__["default"],
    mode: DATE,
    disabled: false,
    minuteStep: 1,
    onDateChange: function onDateChange() {},

    use12Hours: false
};
/* harmony default export */ __webpack_exports__["default"] = (DatePicker);

/***/ }),

/***/ "./node_modules/_rmc-date-picker@6.0.8@rmc-date-picker/es/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_rmc-date-picker@6.0.8@rmc-date-picker/es/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatePicker */ "./node_modules/_rmc-date-picker@6.0.8@rmc-date-picker/es/DatePicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DatePicker__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/_rmc-date-picker@6.0.8@rmc-date-picker/es/locale/en_US.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_rmc-date-picker@6.0.8@rmc-date-picker/es/locale/en_US.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    am: 'AM',
    pm: 'PM'
});

/***/ }),

/***/ "./node_modules/_rmc-picker@5.0.5@rmc-picker/es/MultiPicker.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_rmc-picker@5.0.5@rmc-picker/es/MultiPicker.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MultiPickerMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MultiPickerMixin */ "./node_modules/_rmc-picker@5.0.5@rmc-picker/es/MultiPickerMixin.js");




var MultiPicker = function MultiPicker(props) {
    var prefixCls = props.prefixCls,
        className = props.className,
        rootNativeProps = props.rootNativeProps,
        children = props.children,
        style = props.style;

    var selectedValue = props.getValue();
    var colElements = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, function (col, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(col, {
            selectedValue: selectedValue[i],
            onValueChange: function onValueChange() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return props.onValueChange.apply(props, [i].concat(args));
            },
            onScrollChange: props.onScrollChange && function () {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                return props.onScrollChange.apply(props, [i].concat(args));
            }
        });
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rootNativeProps, { style: style, className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefixCls) }),
        colElements
    );
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_MultiPickerMixin__WEBPACK_IMPORTED_MODULE_3__["default"])(MultiPicker));

/***/ }),

/***/ "./node_modules/_rmc-picker@5.0.5@rmc-picker/es/MultiPickerMixin.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_rmc-picker@5.0.5@rmc-picker/es/MultiPickerMixin.js ***!
  \**************************************************************************/
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






/* harmony default export */ __webpack_exports__["default"] = (function (ComposedComponent) {
    return _a = function (_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(_a, _React$Component);

        function _a() {
            babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, _a);

            var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_a.__proto__ || Object.getPrototypeOf(_a)).apply(this, arguments));

            _this.getValue = function () {
                var _this$props = _this.props,
                    children = _this$props.children,
                    selectedValue = _this$props.selectedValue;

                if (selectedValue && selectedValue.length) {
                    return selectedValue;
                } else {
                    if (!children) {
                        return [];
                    }
                    return react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.map(children, function (c) {
                        var cc = react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.toArray(c.children || c.props.children);
                        return cc && cc[0] && cc[0].props.value;
                    });
                }
            };
            _this.onChange = function (i, v, cb) {
                var value = _this.getValue().concat();
                value[i] = v;
                if (cb) {
                    cb(value, i);
                }
            };
            _this.onValueChange = function (i, v) {
                _this.onChange(i, v, _this.props.onValueChange);
            };
            _this.onScrollChange = function (i, v) {
                _this.onChange(i, v, _this.props.onScrollChange);
            };
            return _this;
        }

        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(_a, [{
            key: 'render',
            value: function render() {
                return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ComposedComponent, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, { getValue: this.getValue, onValueChange: this.onValueChange, onScrollChange: this.props.onScrollChange && this.onScrollChange }));
            }
        }]);

        return _a;
    }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component), _a.defaultProps = {
        prefixCls: 'rmc-multi-picker',
        onValueChange: function onValueChange() {}
    }, _a;
    var _a;
});
;

/***/ }),

/***/ "./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/DefaultTabBar.js":
/*!********************************************************************!*\
  !*** ./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/DefaultTabBar.js ***!
  \********************************************************************/
/*! exports provided: StateType, DefaultTabBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateType", function() { return StateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTabBar", function() { return DefaultTabBar; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_gesture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-gesture */ "./node_modules/_rc-gesture@0.0.22@rc-gesture/es/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/util/index.js");





var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var StateType = function StateType() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, StateType);

    this.transform = '';
    this.isMoving = false;
    this.showPrev = false;
    this.showNext = false;
};
var DefaultTabBar = function (_React$PureComponent) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(DefaultTabBar, _React$PureComponent);

    function DefaultTabBar(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, DefaultTabBar);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (DefaultTabBar.__proto__ || Object.getPrototypeOf(DefaultTabBar)).call(this, props));

        _this.onPan = function () {
            var lastOffset = 0;
            var finalOffset = 0;
            var getLastOffset = function getLastOffset() {
                var isVertical = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.isTabBarVertical();

                var offset = +('' + lastOffset).replace('%', '');
                if (('' + lastOffset).indexOf('%') >= 0) {
                    offset /= 100;
                    offset *= isVertical ? _this.layout.clientHeight : _this.layout.clientWidth;
                }
                return offset;
            };
            return {
                onPanStart: function onPanStart() {
                    _this.setState({ isMoving: true });
                },
                onPanMove: function onPanMove(status) {
                    if (!status.moveStatus || !_this.layout) return;
                    var isVertical = _this.isTabBarVertical();
                    var offset = getLastOffset() + (isVertical ? status.moveStatus.y : status.moveStatus.x);
                    var canScrollOffset = isVertical ? -_this.layout.scrollHeight + _this.layout.clientHeight : -_this.layout.scrollWidth + _this.layout.clientWidth;
                    offset = Math.min(offset, 0);
                    offset = Math.max(offset, canScrollOffset);
                    Object(_util__WEBPACK_IMPORTED_MODULE_7__["setPxStyle"])(_this.layout, offset, 'px', isVertical);
                    finalOffset = offset;
                    _this.setState({
                        showPrev: -offset > 0,
                        showNext: offset > canScrollOffset
                    });
                },
                onPanEnd: function onPanEnd() {
                    var isVertical = _this.isTabBarVertical();
                    lastOffset = finalOffset;
                    _this.setState({
                        isMoving: false,
                        transform: Object(_util__WEBPACK_IMPORTED_MODULE_7__["getPxStyle"])(finalOffset, 'px', isVertical)
                    });
                },
                setCurrentOffset: function setCurrentOffset(offset) {
                    return lastOffset = offset;
                }
            };
        }();
        _this.getTransformByIndex = function (props) {
            var activeTab = props.activeTab,
                tabs = props.tabs,
                _props$page = props.page,
                page = _props$page === undefined ? 0 : _props$page;

            var isVertical = _this.isTabBarVertical();
            var size = _this.getTabSize(page, tabs.length);
            var center = page / 2;
            var pos = Math.min(activeTab, tabs.length - center - .5);
            var skipSize = Math.min(-(pos - center + .5) * size, 0);
            _this.onPan.setCurrentOffset(skipSize + '%');
            return {
                transform: Object(_util__WEBPACK_IMPORTED_MODULE_7__["getPxStyle"])(skipSize, '%', isVertical),
                showPrev: activeTab > center - .5 && tabs.length > page,
                showNext: activeTab < tabs.length - center - .5 && tabs.length > page
            };
        };
        _this.onPress = function (index) {
            var _this$props = _this.props,
                goToTab = _this$props.goToTab,
                onTabClick = _this$props.onTabClick,
                tabs = _this$props.tabs;

            onTabClick && onTabClick(tabs[index], index);
            goToTab && goToTab(index);
        };
        _this.isTabBarVertical = function () {
            var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.tabBarPosition;
            return position === 'left' || position === 'right';
        };
        _this.renderTab = function (t, i, size, isTabBarVertical) {
            var _this$props2 = _this.props,
                prefixCls = _this$props2.prefixCls,
                renderTab = _this$props2.renderTab,
                activeTab = _this$props2.activeTab,
                tabBarTextStyle = _this$props2.tabBarTextStyle,
                tabBarActiveTextColor = _this$props2.tabBarActiveTextColor,
                tabBarInactiveTextColor = _this$props2.tabBarInactiveTextColor,
                instanceId = _this$props2.instanceId;

            var textStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, tabBarTextStyle);
            var cls = prefixCls + '-tab';
            var ariaSelected = false;
            if (activeTab === i) {
                cls += ' ' + cls + '-active';
                ariaSelected = true;
                if (tabBarActiveTextColor) {
                    textStyle.color = tabBarActiveTextColor;
                }
            } else if (tabBarInactiveTextColor) {
                textStyle.color = tabBarInactiveTextColor;
            }
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'div',
                { key: 't_' + i, style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, textStyle, isTabBarVertical ? { height: size + '%' } : { width: size + '%' }), id: 'm-tabs-' + instanceId + '-' + i, role: 'tab', 'aria-selected': ariaSelected, className: cls, onClick: function onClick() {
                        return _this.onPress(i);
                    } },
                renderTab ? renderTab(t) : t.title
            );
        };
        _this.setContentLayout = function (div) {
            _this.layout = div;
        };
        _this.getTabSize = function (page, tabLength) {
            return 100 / Math.min(page, tabLength);
        };
        _this.state = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, new StateType(), _this.getTransformByIndex(props));
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DefaultTabBar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.activeTab !== nextProps.activeTab || this.props.tabs !== nextProps.tabs || this.props.tabs.length !== nextProps.tabs.length) {
                this.setState(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.getTransformByIndex(nextProps)));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                animated = _props.animated,
                _props$tabs = _props.tabs,
                tabs = _props$tabs === undefined ? [] : _props$tabs,
                _props$page2 = _props.page,
                page = _props$page2 === undefined ? 0 : _props$page2,
                _props$activeTab = _props.activeTab,
                activeTab = _props$activeTab === undefined ? 0 : _props$activeTab,
                tabBarBackgroundColor = _props.tabBarBackgroundColor,
                tabBarUnderlineStyle = _props.tabBarUnderlineStyle,
                tabBarPosition = _props.tabBarPosition,
                renderUnderline = _props.renderUnderline;
            var _state = this.state,
                isMoving = _state.isMoving,
                transform = _state.transform,
                showNext = _state.showNext,
                showPrev = _state.showPrev;

            var isTabBarVertical = this.isTabBarVertical();
            var needScroll = tabs.length > page;
            var size = this.getTabSize(page, tabs.length);
            var Tabs = tabs.map(function (t, i) {
                return _this2.renderTab(t, i, size, isTabBarVertical);
            });
            var cls = prefixCls;
            if (animated && !isMoving) {
                cls += ' ' + prefixCls + '-animated';
            }
            var style = {
                backgroundColor: tabBarBackgroundColor || ''
            };
            var transformStyle = needScroll ? babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(_util__WEBPACK_IMPORTED_MODULE_7__["getTransformPropValue"])(transform)) : {};
            var _a = this.onPan,
                setCurrentOffset = _a.setCurrentOffset,
                onPan = __rest(_a, ["setCurrentOffset"]);
            var underlineProps = {
                style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, isTabBarVertical ? { height: size + '%' } : { width: size + '%' }, isTabBarVertical ? { top: size * activeTab + '%' } : { left: size * activeTab + '%' }, tabBarUnderlineStyle),
                className: prefixCls + '-underline'
            };
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'div',
                { className: cls + ' ' + prefixCls + '-' + tabBarPosition, style: style },
                showPrev && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div', { className: prefixCls + '-prevpage' }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    rc_gesture__WEBPACK_IMPORTED_MODULE_6__["default"],
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, onPan, { direction: isTabBarVertical ? 'vertical' : 'horizontal' }),
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        'div',
                        { role: 'tablist', className: prefixCls + '-content', style: transformStyle, ref: this.setContentLayout },
                        Tabs,
                        renderUnderline ? renderUnderline(underlineProps) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div', underlineProps)
                    )
                ),
                showNext && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div', { className: prefixCls + '-nextpage' })
            );
        }
    }]);

    return DefaultTabBar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);
DefaultTabBar.defaultProps = {
    prefixCls: 'rmc-tabs-tab-bar',
    animated: true,
    tabs: [],
    goToTab: function goToTab() {},
    activeTab: 0,
    page: 5,
    tabBarUnderlineStyle: {},
    tabBarBackgroundColor: '#fff',
    tabBarActiveTextColor: '',
    tabBarInactiveTextColor: '',
    tabBarTextStyle: {}
};

/***/ }),

/***/ "./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/TabPane.js":
/*!**************************************************************!*\
  !*** ./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/TabPane.js ***!
  \**************************************************************/
/*! exports provided: TabPane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return TabPane; });
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/util/index.js");





var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


var TabPane = function (_React$PureComponent) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TabPane, _React$PureComponent);

    function TabPane() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TabPane);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).apply(this, arguments));

        _this.offsetX = 0;
        _this.offsetY = 0;
        _this.setLayout = function (div) {
            _this.layout = div;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TabPane, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.active !== nextProps.active) {
                if (nextProps.active) {
                    this.offsetX = 0;
                    this.offsetY = 0;
                } else {
                    this.offsetX = this.layout.scrollLeft;
                    this.offsetY = this.layout.scrollTop;
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                active = _a.active,
                fixX = _a.fixX,
                fixY = _a.fixY,
                props = __rest(_a, ["active", "fixX", "fixY"]);
            var style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fixX && this.offsetX ? Object(_util__WEBPACK_IMPORTED_MODULE_6__["getTransformPropValue"])(Object(_util__WEBPACK_IMPORTED_MODULE_6__["getPxStyle"])(-this.offsetX, 'px', false)) : {}, fixY && this.offsetY ? Object(_util__WEBPACK_IMPORTED_MODULE_6__["getTransformPropValue"])(Object(_util__WEBPACK_IMPORTED_MODULE_6__["getPxStyle"])(-this.offsetY, 'px', true)) : {});
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'div',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, { style: style, ref: this.setLayout }),
                props.children
            );
        }
    }]);

    return TabPane;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);
TabPane.defaultProps = {
    fixX: true,
    fixY: true
};

/***/ }),

/***/ "./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/Tabs.base.js":
/*!****************************************************************!*\
  !*** ./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/Tabs.base.js ***!
  \****************************************************************/
/*! exports provided: StateType, Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateType", function() { return StateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






var StateType = function StateType() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, StateType);
};
var instanceId = 0;
var Tabs = function (_React$PureComponent) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Tabs, _React$PureComponent);

    function Tabs(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Tabs);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

        _this.tabCache = {};
        _this.isTabVertical = function () {
            var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.tabDirection;
            return direction === 'vertical';
        };
        _this.shouldRenderTab = function (idx) {
            var _this$props$prerender = _this.props.prerenderingSiblingsNumber,
                prerenderingSiblingsNumber = _this$props$prerender === undefined ? 0 : _this$props$prerender;
            var _this$state$currentTa = _this.state.currentTab,
                currentTab = _this$state$currentTa === undefined ? 0 : _this$state$currentTa;

            return currentTab - prerenderingSiblingsNumber <= idx && idx <= currentTab + prerenderingSiblingsNumber;
        };
        _this.getOffsetIndex = function (current, width) {
            var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.props.distanceToChangeTab || 0;

            var ratio = Math.abs(current / width);
            var direction = ratio > _this.state.currentTab ? '<' : '>';
            var index = Math.floor(ratio);
            switch (direction) {
                case '<':
                    return ratio - index > threshold ? index + 1 : index;
                case '>':
                    return 1 - ratio + index > threshold ? index : index + 1;
                default:
                    return Math.round(ratio);
            }
        };
        _this.getSubElements = function () {
            var children = _this.props.children;

            var subElements = {};
            return function () {
                var defaultPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$i$-';
                var allPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '$ALL$';

                if (Array.isArray(children)) {
                    children.forEach(function (child, index) {
                        if (child.key) {
                            subElements[child.key] = child;
                        }
                        subElements['' + defaultPrefix + index] = child;
                    });
                } else if (children) {
                    subElements[allPrefix] = children;
                }
                return subElements;
            };
        };
        _this.state = {
            currentTab: _this.getTabIndex(props)
        };
        _this.nextCurrentTab = _this.state.currentTab;
        _this.instanceId = instanceId++;
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tabs, [{
        key: 'getTabIndex',
        value: function getTabIndex(props) {
            var page = props.page,
                initialPage = props.initialPage,
                tabs = props.tabs;

            var param = (page !== undefined ? page : initialPage) || 0;
            var index = 0;
            if (typeof param === 'string') {
                tabs.forEach(function (t, i) {
                    if (t.key === param) {
                        index = i;
                    }
                });
            } else {
                index = param || 0;
            }
            return index < 0 ? 0 : index;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.page !== nextProps.page && nextProps.page !== undefined) {
                this.goToTab(this.getTabIndex(nextProps), true);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.prevCurrentTab = this.state.currentTab;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.prevCurrentTab = this.state.currentTab;
        }
    }, {
        key: 'goToTab',
        value: function goToTab(index) {
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var newState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            if (!force && this.nextCurrentTab === index) {
                return false;
            }
            this.nextCurrentTab = index;
            var _props = this.props,
                tabs = _props.tabs,
                onChange = _props.onChange;

            if (index >= 0 && index < tabs.length) {
                if (!force) {
                    onChange && onChange(tabs[index], index);
                    if (this.props.page !== undefined) {
                        return false;
                    }
                }
                this.setState(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ currentTab: index }, newState));
            }
            return true;
        }
    }, {
        key: 'tabClickGoToTab',
        value: function tabClickGoToTab(index) {
            this.goToTab(index);
        }
    }, {
        key: 'getTabBarBaseProps',
        value: function getTabBarBaseProps() {
            var currentTab = this.state.currentTab;
            var _props2 = this.props,
                animated = _props2.animated,
                onTabClick = _props2.onTabClick,
                tabBarActiveTextColor = _props2.tabBarActiveTextColor,
                tabBarBackgroundColor = _props2.tabBarBackgroundColor,
                tabBarInactiveTextColor = _props2.tabBarInactiveTextColor,
                tabBarPosition = _props2.tabBarPosition,
                tabBarTextStyle = _props2.tabBarTextStyle,
                tabBarUnderlineStyle = _props2.tabBarUnderlineStyle,
                tabs = _props2.tabs;

            return {
                activeTab: currentTab,
                animated: !!animated,
                goToTab: this.tabClickGoToTab.bind(this),
                onTabClick: onTabClick,
                tabBarActiveTextColor: tabBarActiveTextColor,
                tabBarBackgroundColor: tabBarBackgroundColor,
                tabBarInactiveTextColor: tabBarInactiveTextColor,
                tabBarPosition: tabBarPosition,
                tabBarTextStyle: tabBarTextStyle,
                tabBarUnderlineStyle: tabBarUnderlineStyle,
                tabs: tabs,
                instanceId: this.instanceId
            };
        }
    }, {
        key: 'renderTabBar',
        value: function renderTabBar(tabBarProps, DefaultTabBar) {
            var renderTabBar = this.props.renderTabBar;

            if (renderTabBar === false) {
                return null;
            } else if (renderTabBar) {
                // return React.cloneElement(this.props.renderTabBar(props), props);
                return renderTabBar(tabBarProps);
            } else {
                return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DefaultTabBar, tabBarProps);
            }
        }
    }, {
        key: 'getSubElement',
        value: function getSubElement(tab, index, subElements) {
            var defaultPrefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '$i$-';
            var allPrefix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '$ALL$';

            var key = tab.key || '' + defaultPrefix + index;
            var elements = subElements(defaultPrefix, allPrefix);
            var component = elements[key] || elements[allPrefix];
            if (component instanceof Function) {
                component = component(tab, index);
            }
            return component || null;
        }
    }]);

    return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);
Tabs.defaultProps = {
    tabBarPosition: 'top',
    initialPage: 0,
    swipeable: true,
    animated: true,
    prerenderingSiblingsNumber: 1,
    tabs: [],
    destroyInactiveTab: false,
    usePaged: true,
    tabDirection: 'horizontal',
    distanceToChangeTab: .3
};

/***/ }),

/***/ "./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/Tabs.js":
/*!***********************************************************!*\
  !*** ./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/Tabs.js ***!
  \***********************************************************/
/*! exports provided: StateType, Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateType", function() { return StateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/get */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/get.js");
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_gesture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-gesture */ "./node_modules/_rc-gesture@0.0.22@rc-gesture/es/index.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TabPane */ "./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/TabPane.js");
/* harmony import */ var _DefaultTabBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DefaultTabBar */ "./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/DefaultTabBar.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util */ "./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/util/index.js");
/* harmony import */ var _Tabs_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Tabs.base */ "./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/Tabs.base.js");












var getPanDirection = function getPanDirection(direction) {
    switch (direction) {
        case 2:
        case 4:
            return 'horizontal';
        case 8:
        case 16:
            return 'vertical';
        default:
            return 'none';
    }
};
var StateType = function (_BaseStateType) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(StateType, _BaseStateType);

    function StateType() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, StateType);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (StateType.__proto__ || Object.getPrototypeOf(StateType)).apply(this, arguments));

        _this.contentPos = '';
        _this.isMoving = false;
        return _this;
    }

    return StateType;
}(_Tabs_base__WEBPACK_IMPORTED_MODULE_11__["StateType"]);
var Tabs = function (_Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Tabs, _Component);

    function Tabs(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Tabs);

        var _this2 = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

        _this2.onPan = function () {
            var lastOffset = 0;
            var finalOffset = 0;
            var panDirection = void 0;
            var getLastOffset = function getLastOffset() {
                var isVertical = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this2.isTabVertical();

                var offset = +('' + lastOffset).replace('%', '');
                if (('' + lastOffset).indexOf('%') >= 0) {
                    offset /= 100;
                    offset *= isVertical ? _this2.layout.clientHeight : _this2.layout.clientWidth;
                }
                return offset;
            };
            return {
                onPanStart: function onPanStart(status) {
                    if (!_this2.props.swipeable || !_this2.props.animated) return;
                    panDirection = getPanDirection(status.direction);
                    _this2.setState({
                        isMoving: true
                    });
                },
                onPanMove: function onPanMove(status) {
                    var _this2$props = _this2.props,
                        swipeable = _this2$props.swipeable,
                        animated = _this2$props.animated,
                        useLeftInsteadTransform = _this2$props.useLeftInsteadTransform;

                    if (!status.moveStatus || !_this2.layout || !swipeable || !animated) return;
                    var isVertical = _this2.isTabVertical();
                    var offset = getLastOffset();
                    if (isVertical) {
                        offset += panDirection === 'horizontal' ? 0 : status.moveStatus.y;
                    } else {
                        offset += panDirection === 'vertical' ? 0 : status.moveStatus.x;
                    }
                    var canScrollOffset = isVertical ? -_this2.layout.scrollHeight + _this2.layout.clientHeight : -_this2.layout.scrollWidth + _this2.layout.clientWidth;
                    offset = Math.min(offset, 0);
                    offset = Math.max(offset, canScrollOffset);
                    Object(_util__WEBPACK_IMPORTED_MODULE_10__["setPxStyle"])(_this2.layout, offset, 'px', isVertical, useLeftInsteadTransform);
                    finalOffset = offset;
                },
                onPanEnd: function onPanEnd() {
                    if (!_this2.props.swipeable || !_this2.props.animated) return;
                    lastOffset = finalOffset;
                    var isVertical = _this2.isTabVertical();
                    var offsetIndex = _this2.getOffsetIndex(finalOffset, isVertical ? _this2.layout.clientHeight : _this2.layout.clientWidth);
                    _this2.setState({
                        isMoving: false
                    });
                    if (offsetIndex === _this2.state.currentTab) {
                        if (_this2.props.usePaged) {
                            Object(_util__WEBPACK_IMPORTED_MODULE_10__["setTransform"])(_this2.layout.style, _this2.getContentPosByIndex(offsetIndex, _this2.isTabVertical(), _this2.props.useLeftInsteadTransform));
                        }
                    } else {
                        _this2.goToTab(offsetIndex);
                    }
                },
                setCurrentOffset: function setCurrentOffset(offset) {
                    return lastOffset = offset;
                }
            };
        }();
        _this2.onSwipe = function (status) {
            var _this2$props2 = _this2.props,
                tabBarPosition = _this2$props2.tabBarPosition,
                swipeable = _this2$props2.swipeable,
                usePaged = _this2$props2.usePaged;

            if (!swipeable || !usePaged || _this2.isTabVertical()) return;
            // DIRECTION_NONE	1
            // DIRECTION_LEFT	2
            // DIRECTION_RIGHT	4
            // DIRECTION_UP	8
            // DIRECTION_DOWN	16
            // DIRECTION_HORIZONTAL	6
            // DIRECTION_VERTICAL	24
            // DIRECTION_ALL	30
            switch (tabBarPosition) {
                case 'top':
                case 'bottom':
                    switch (status.direction) {
                        case 2:
                            if (!_this2.isTabVertical()) {
                                _this2.goToTab(_this2.prevCurrentTab + 1);
                            }
                        case 8:
                            if (_this2.isTabVertical()) {
                                _this2.goToTab(_this2.prevCurrentTab + 1);
                            }
                            break;
                        case 4:
                            if (!_this2.isTabVertical()) {
                                _this2.goToTab(_this2.prevCurrentTab - 1);
                            }
                        case 16:
                            if (_this2.isTabVertical()) {
                                _this2.goToTab(_this2.prevCurrentTab - 1);
                            }
                            break;
                    }
                    break;
            }
        };
        _this2.setContentLayout = function (div) {
            _this2.layout = div;
        };
        _this2.state = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this2.state, new StateType(), { contentPos: _this2.getContentPosByIndex(_this2.getTabIndex(props), _this2.isTabVertical(props.tabDirection), props.useLeftInsteadTransform) });
        return _this2;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tabs, [{
        key: 'goToTab',
        value: function goToTab(index) {
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var usePaged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.usePaged;
            var _props = this.props,
                tabDirection = _props.tabDirection,
                useLeftInsteadTransform = _props.useLeftInsteadTransform;

            var newState = {};
            if (usePaged) {
                newState = {
                    contentPos: this.getContentPosByIndex(index, this.isTabVertical(tabDirection), useLeftInsteadTransform)
                };
            }
            return babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(Tabs.prototype.__proto__ || Object.getPrototypeOf(Tabs.prototype), 'goToTab', this).call(this, index, force, newState);
        }
    }, {
        key: 'tabClickGoToTab',
        value: function tabClickGoToTab(index) {
            this.goToTab(index, false, true);
        }
    }, {
        key: 'getContentPosByIndex',
        value: function getContentPosByIndex(index, isVertical) {
            var useLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var value = -index * 100 + '%';
            this.onPan.setCurrentOffset(value);
            if (useLeft) {
                return '' + value;
            } else {
                var translate = isVertical ? '0px, ' + value : value + ', 0px';
                // fix: content overlay TabBar on iOS 10. ( 0px -> 1px )
                return 'translate3d(' + translate + ', 1px)';
            }
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            var _this3 = this;

            var getSubElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSubElements();
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                tabs = _props2.tabs,
                animated = _props2.animated,
                destroyInactiveTab = _props2.destroyInactiveTab,
                useLeftInsteadTransform = _props2.useLeftInsteadTransform;
            var _state = this.state,
                currentTab = _state.currentTab,
                isMoving = _state.isMoving,
                contentPos = _state.contentPos;

            var isTabVertical = this.isTabVertical();
            var contentCls = prefixCls + '-content-wrap';
            if (animated && !isMoving) {
                contentCls += ' ' + contentCls + '-animated';
            }
            var contentStyle = animated ? useLeftInsteadTransform ? babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ position: 'relative' }, this.isTabVertical() ? { top: contentPos } : { left: contentPos }) : Object(_util__WEBPACK_IMPORTED_MODULE_10__["getTransformPropValue"])(contentPos) : babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ position: 'relative' }, this.isTabVertical() ? { top: -currentTab * 100 + '%' } : { left: -currentTab * 100 + '%' });

            var _getTabBarBaseProps = this.getTabBarBaseProps(),
                instanceId = _getTabBarBaseProps.instanceId;

            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                'div',
                { className: contentCls, style: contentStyle, ref: this.setContentLayout },
                tabs.map(function (tab, index) {
                    var cls = prefixCls + '-pane-wrap';
                    if (_this3.state.currentTab === index) {
                        cls += ' ' + cls + '-active';
                    } else {
                        cls += ' ' + cls + '-inactive';
                    }
                    var key = tab.key || 'tab_' + index;
                    // update tab cache
                    if (_this3.shouldRenderTab(index)) {
                        _this3.tabCache[index] = _this3.getSubElement(tab, index, getSubElements);
                    } else if (destroyInactiveTab) {
                        _this3.tabCache[index] = undefined;
                    }
                    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                        _TabPane__WEBPACK_IMPORTED_MODULE_8__["TabPane"],
                        { key: key, className: cls, active: currentTab === index, role: 'tabpanel', 'aria-hidden': currentTab !== index, 'aria-labelledby': 'm-tabs-' + instanceId + '-' + index, fixX: isTabVertical, fixY: !isTabVertical },
                        _this3.tabCache[index]
                    );
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                tabBarPosition = _props3.tabBarPosition,
                tabDirection = _props3.tabDirection,
                useOnPan = _props3.useOnPan,
                noRenderContent = _props3.noRenderContent;

            var isTabVertical = this.isTabVertical(tabDirection);
            var tabBarProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.getTabBarBaseProps());
            var onPan = !isTabVertical && useOnPan ? this.onPan : {};
            var content = [react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                'div',
                { key: 'tabBar', className: prefixCls + '-tab-bar-wrap' },
                this.renderTabBar(tabBarProps, _DefaultTabBar__WEBPACK_IMPORTED_MODULE_9__["DefaultTabBar"])
            ), !noRenderContent && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                rc_gesture__WEBPACK_IMPORTED_MODULE_7__["default"],
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ key: '$content', onSwipe: this.onSwipe }, onPan),
                this.renderContent()
            )];
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                'div',
                { className: prefixCls + ' ' + prefixCls + '-' + tabDirection + ' ' + prefixCls + '-' + tabBarPosition },
                tabBarPosition === 'top' || tabBarPosition === 'left' ? content : content.reverse()
            );
        }
    }]);

    return Tabs;
}(_Tabs_base__WEBPACK_IMPORTED_MODULE_11__["Tabs"]);
Tabs.DefaultTabBar = _DefaultTabBar__WEBPACK_IMPORTED_MODULE_9__["DefaultTabBar"];
Tabs.defaultProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _Tabs_base__WEBPACK_IMPORTED_MODULE_11__["Tabs"].defaultProps, { prefixCls: 'rmc-tabs', useOnPan: true });

/***/ }),

/***/ "./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/index.js":
/*!************************************************************!*\
  !*** ./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/index.js ***!
  \************************************************************/
/*! exports provided: Tabs, DefaultTabBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs */ "./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/Tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_0__["Tabs"]; });

/* harmony import */ var _DefaultTabBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultTabBar */ "./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/DefaultTabBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTabBar", function() { return _DefaultTabBar__WEBPACK_IMPORTED_MODULE_1__["DefaultTabBar"]; });




/***/ }),

/***/ "./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/util/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_rmc-tabs@1.2.27@rmc-tabs/es/util/index.js ***!
  \*****************************************************************/
/*! exports provided: getTransformPropValue, getPxStyle, setPxStyle, setTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformPropValue", function() { return getTransformPropValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPxStyle", function() { return getPxStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPxStyle", function() { return setPxStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransform", function() { return setTransform; });
function getTransformPropValue(v) {
    return {
        transform: v,
        WebkitTransform: v,
        MozTransform: v
    };
}
function getPxStyle(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
    var vertical = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    value = vertical ? '0px, ' + value + unit + ', 0px' : '' + value + unit + ', 0px, 0px';
    return 'translate3d(' + value + ')';
}
function setPxStyle(el, value) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'px';
    var vertical = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var useLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    if (useLeft) {
        if (vertical) {
            el.style.top = '' + value + unit;
        } else {
            el.style.left = '' + value + unit;
        }
    } else {
        setTransform(el.style, getPxStyle(value, unit, vertical));
    }
}
function setTransform(style, v) {
    style.transform = v;
    style.webkitTransform = v;
    style.mozTransform = v;
}

/***/ })

}]);
//# sourceMappingURL=155_028b1e0c88f8ffef33c4.js.map