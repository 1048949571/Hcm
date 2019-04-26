(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/_antd@3.10.1@antd/es/_util/isNumeric.js":
/*!**************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/_util/isNumeric.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isNumeric = function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
};
/* harmony default export */ __webpack_exports__["default"] = (isNumeric);

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/layout/Sider.js":
/*!***********************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/layout/Sider.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/_react-lifecycles-compat@3.0.4@react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! omit.js */ "./node_modules/_omit.js@1.0.0@omit.js/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_util/isNumeric */ "./node_modules/_antd@3.10.1@antd/es/_util/isNumeric.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
if (typeof window !== 'undefined') {
    var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
        return {
            media: mediaQuery,
            matches: false,
            addListener: function addListener() {},
            removeListener: function removeListener() {}
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}







var dimensionMap = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px'
};
var generateId = function () {
    var i = 0;
    return function () {
        var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        i += 1;
        return '' + prefix + i;
    };
}();

var Sider = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Sider, _React$Component);

    function Sider(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Sider);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Sider.__proto__ || Object.getPrototypeOf(Sider)).call(this, props));

        _this.responsiveHandler = function (mql) {
            _this.setState({ below: mql.matches });
            var onBreakpoint = _this.props.onBreakpoint;

            if (onBreakpoint) {
                onBreakpoint(mql.matches);
            }
            if (_this.state.collapsed !== mql.matches) {
                _this.setCollapsed(mql.matches, 'responsive');
            }
        };
        _this.setCollapsed = function (collapsed, type) {
            if (!('collapsed' in _this.props)) {
                _this.setState({
                    collapsed: collapsed
                });
            }
            var onCollapse = _this.props.onCollapse;

            if (onCollapse) {
                onCollapse(collapsed, type);
            }
        };
        _this.toggle = function () {
            var collapsed = !_this.state.collapsed;
            _this.setCollapsed(collapsed, 'clickTrigger');
        };
        _this.belowShowChange = function () {
            _this.setState({ belowShow: !_this.state.belowShow });
        };
        _this.uniqueId = generateId('ant-sider-');
        var matchMedia = void 0;
        if (typeof window !== 'undefined') {
            matchMedia = window.matchMedia;
        }
        if (matchMedia && props.breakpoint && props.breakpoint in dimensionMap) {
            _this.mql = matchMedia('(max-width: ' + dimensionMap[props.breakpoint] + ')');
        }
        var collapsed = void 0;
        if ('collapsed' in props) {
            collapsed = props.collapsed;
        } else {
            collapsed = props.defaultCollapsed;
        }
        _this.state = {
            collapsed: collapsed,
            below: false
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Sider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                siderCollapsed: this.state.collapsed,
                collapsedWidth: this.props.collapsedWidth
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.mql) {
                this.mql.addListener(this.responsiveHandler);
                this.responsiveHandler(this.mql);
            }
            if (this.context.siderHook) {
                this.context.siderHook.addSider(this.uniqueId);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.mql) {
                this.mql.removeListener(this.responsiveHandler);
            }
            if (this.context.siderHook) {
                this.context.siderHook.removeSider(this.uniqueId);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                theme = _a.theme,
                collapsible = _a.collapsible,
                reverseArrow = _a.reverseArrow,
                trigger = _a.trigger,
                style = _a.style,
                width = _a.width,
                collapsedWidth = _a.collapsedWidth,
                others = __rest(_a, ["prefixCls", "className", "theme", "collapsible", "reverseArrow", "trigger", "style", "width", "collapsedWidth"]);
            var divProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_9__["default"])(others, ['collapsed', 'defaultCollapsed', 'onCollapse', 'breakpoint', 'onBreakpoint']);
            var rawWidth = this.state.collapsed ? collapsedWidth : width;
            // use "px" as fallback unit for width
            var siderWidth = Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_12__["default"])(rawWidth) ? rawWidth + 'px' : String(rawWidth);
            // special trigger when collapsedWidth == 0
            var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { onClick: this.toggle, className: prefixCls + '-zero-width-trigger' },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_11__["default"], { type: 'bars' })
            ) : null;
            var iconObj = {
                'expanded': reverseArrow ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_11__["default"], { type: 'right' }) : react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_11__["default"], { type: 'left' }),
                'collapsed': reverseArrow ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_11__["default"], { type: 'left' }) : react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_11__["default"], { type: 'right' })
            };
            var status = this.state.collapsed ? 'collapsed' : 'expanded';
            var defaultTrigger = iconObj[status];
            var triggerDom = trigger !== null ? zeroWidthTrigger || react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                { className: prefixCls + '-trigger', onClick: this.toggle, style: { width: siderWidth } },
                trigger || defaultTrigger
            ) : null;
            var divStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, style, { flex: '0 0 ' + siderWidth, maxWidth: siderWidth, minWidth: siderWidth, width: siderWidth });
            var siderCls = classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, prefixCls, prefixCls + '-' + theme, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-collapsed', !!this.state.collapsed), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-has-trigger', collapsible && trigger !== null && !zeroWidthTrigger), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-below', !!this.state.below), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-zero-width', parseFloat(siderWidth) === 0), _classNames));
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ className: siderCls }, divProps, { style: divStyle }),
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: prefixCls + '-children' },
                    this.props.children
                ),
                collapsible || this.state.below && zeroWidthTrigger ? triggerDom : null
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps) {
            if ('collapsed' in nextProps) {
                return {
                    collapsed: nextProps.collapsed
                };
            }
            return null;
        }
    }]);

    return Sider;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Sider.__ANT_LAYOUT_SIDER = true;
Sider.defaultProps = {
    prefixCls: 'ant-layout-sider',
    collapsible: false,
    defaultCollapsed: false,
    reverseArrow: false,
    width: 200,
    collapsedWidth: 80,
    style: {},
    theme: 'dark'
};
Sider.childContextTypes = {
    siderCollapsed: prop_types__WEBPACK_IMPORTED_MODULE_10__["bool"],
    collapsedWidth: prop_types__WEBPACK_IMPORTED_MODULE_10__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_10__["number"], prop_types__WEBPACK_IMPORTED_MODULE_10__["string"]])
};
Sider.contextTypes = {
    siderHook: prop_types__WEBPACK_IMPORTED_MODULE_10__["object"]
};
Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_7__["polyfill"])(Sider);
/* harmony default export */ __webpack_exports__["default"] = (Sider);

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/layout/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/layout/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./node_modules/_antd@3.10.1@antd/es/layout/layout.js");
/* harmony import */ var _Sider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sider */ "./node_modules/_antd@3.10.1@antd/es/layout/Sider.js");


_layout__WEBPACK_IMPORTED_MODULE_0__["default"].Sider = _Sider__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_layout__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/layout/layout.js":
/*!************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/layout/layout.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);







var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



function generator(props) {
    return function (BasicComponent) {
        return function (_React$Component) {
            babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Adapter, _React$Component);

            function Adapter() {
                babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Adapter);

                return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Adapter.__proto__ || Object.getPrototypeOf(Adapter)).apply(this, arguments));
            }

            babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Adapter, [{
                key: 'render',
                value: function render() {
                    var prefixCls = props.prefixCls;

                    return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](BasicComponent, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({ prefixCls: prefixCls }, this.props));
                }
            }]);

            return Adapter;
        }(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
    };
}

var Basic = function (_React$Component2) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Basic, _React$Component2);

    function Basic() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Basic);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Basic, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                children = _a.children,
                others = __rest(_a, ["prefixCls", "className", "children"]);
            var divCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, prefixCls);
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                'div',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({ className: divCls }, others),
                children
            );
        }
    }]);

    return Basic;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var BasicLayout = function (_React$Component3) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(BasicLayout, _React$Component3);

    function BasicLayout() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, BasicLayout);

        var _this3 = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (BasicLayout.__proto__ || Object.getPrototypeOf(BasicLayout)).apply(this, arguments));

        _this3.state = { siders: [] };
        return _this3;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(BasicLayout, [{
        key: 'getChildContext',
        value: function getChildContext() {
            var _this4 = this;

            return {
                siderHook: {
                    addSider: function addSider(id) {
                        _this4.setState({
                            siders: [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_this4.state.siders), [id])
                        });
                    },
                    removeSider: function removeSider(id) {
                        _this4.setState({
                            siders: _this4.state.siders.filter(function (currentId) {
                                return currentId !== id;
                            })
                        });
                    }
                }
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                children = _a.children,
                hasSider = _a.hasSider,
                others = __rest(_a, ["prefixCls", "className", "children", "hasSider"]);
            var divCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, prefixCls, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, prefixCls + '-has-sider', hasSider || this.state.siders.length > 0));
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                'div',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({ className: divCls }, others),
                children
            );
        }
    }]);

    return BasicLayout;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

BasicLayout.childContextTypes = {
    siderHook: prop_types__WEBPACK_IMPORTED_MODULE_8__["object"]
};
var Layout = generator({
    prefixCls: 'ant-layout'
})(BasicLayout);
var Header = generator({
    prefixCls: 'ant-layout-header'
})(Basic);
var Footer = generator({
    prefixCls: 'ant-layout-footer'
})(Basic);
var Content = generator({
    prefixCls: 'ant-layout-content'
})(Basic);
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/layout/style/css.js":
/*!***************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/layout/style/css.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/layout/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/layout/style/index.css":
/*!******************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/layout/style/index.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_assignValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_assignValue.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/_lodash@4.17.11@lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/_lodash@4.17.11@lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_baseAssignValue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_baseAssignValue.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/_lodash@4.17.11@lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_defineProperty.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/_lodash@4.17.11@lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ })

}]);
//# sourceMappingURL=39_9db6ef0f9b46829f2939.js.map