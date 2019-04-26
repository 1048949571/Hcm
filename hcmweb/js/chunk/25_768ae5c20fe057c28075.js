(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

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

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/input-number/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/input-number/index.js ***!
  \*****************************************************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_input_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-input-number */ "./node_modules/_rc-input-number@4.1.0@rc-input-number/es/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};





var InputNumber = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(InputNumber, _React$Component);

    function InputNumber() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, InputNumber);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (InputNumber.__proto__ || Object.getPrototypeOf(InputNumber)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(InputNumber, [{
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _a = this.props,
                className = _a.className,
                size = _a.size,
                others = __rest(_a, ["className", "size"]);
            var inputNumberClass = classnames__WEBPACK_IMPORTED_MODULE_7___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, this.props.prefixCls + '-lg', size === 'large'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, this.props.prefixCls + '-sm', size === 'small'), _classNames), className);
            var upIcon = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_9__["default"], { type: 'up', className: this.props.prefixCls + '-handler-up-inner' });
            var downIcon = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_9__["default"], { type: 'down', className: this.props.prefixCls + '-handler-down-inner' });
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_input_number__WEBPACK_IMPORTED_MODULE_8__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ ref: function ref(c) {
                    return _this2.inputNumberRef = c;
                }, className: inputNumberClass, upHandler: upIcon, downHandler: downIcon }, others));
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.inputNumberRef.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.inputNumberRef.blur();
        }
    }]);

    return InputNumber;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (InputNumber);

InputNumber.defaultProps = {
    prefixCls: 'ant-input-number',
    step: 1
};

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/input-number/style/css.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/input-number/style/css.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/input-number/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/input-number/style/index.css":
/*!************************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/input-number/style/index.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/_is-negative-zero@2.0.0@is-negative-zero/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/_is-negative-zero@2.0.0@is-negative-zero/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isNegativeZero(number) {
	return number === 0 && (1 / number) === -Infinity;
};



/***/ }),

/***/ "./node_modules/_rc-input-number@4.1.0@rc-input-number/es/InputHandler.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_rc-input-number@4.1.0@rc-input-number/es/InputHandler.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rmc_feedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rmc-feedback */ "./node_modules/_rmc-feedback@2.0.0@rmc-feedback/es/index.js");








var InputHandler = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(InputHandler, _Component);

  function InputHandler() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, InputHandler);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _Component.apply(this, arguments));
  }

  InputHandler.prototype.render = function render() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        disabled = _props.disabled,
        otherProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_props, ['prefixCls', 'disabled']);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      rmc_feedback__WEBPACK_IMPORTED_MODULE_6__["default"],
      {
        disabled: disabled,
        activeClassName: prefixCls + '-handler-active'
      },
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('span', otherProps)
    );
  };

  return InputHandler;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

InputHandler.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onTouchEnd: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseUp: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (InputHandler);

/***/ }),

/***/ "./node_modules/_rc-input-number@4.1.0@rc-input-number/es/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_rc-input-number@4.1.0@rc-input-number/es/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var is_negative_zero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! is-negative-zero */ "./node_modules/_is-negative-zero@2.0.0@is-negative-zero/index.js");
/* harmony import */ var is_negative_zero__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(is_negative_zero__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/_rc-util@4.6.0@rc-util/es/KeyCode.js");
/* harmony import */ var _InputHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InputHandler */ "./node_modules/_rc-input-number@4.1.0@rc-input-number/es/InputHandler.js");











function noop() {}

function preventDefault(e) {
  e.preventDefault();
}

function defaultParser(input) {
  return input.replace(/[^\w\.-]+/g, '');
}

/**
 * When click and hold on a button - the speed of auto changin the value.
 */
var SPEED = 200;

/**
 * When click and hold on a button - the delay before auto changin the value.
 */
var DELAY = 600;

/**
 * Max Safe Integer -- on IE this is not available, so manually set the number in that case.
 * The reason this is used, instead of Infinity is because numbers above the MSI are unstable
 */
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var InputNumber = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(InputNumber, _React$Component);

  function InputNumber(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, InputNumber);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var value = void 0;
    if ('value' in props) {
      value = props.value;
    } else {
      value = props.defaultValue;
    }
    value = _this.toNumber(value);

    _this.state = {
      inputValue: _this.toPrecisionAsStep(value),
      value: value,
      focused: props.autoFocus
    };
    return _this;
  }

  InputNumber.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate();
  };

  InputNumber.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      var value = this.state.focused ? nextProps.value : this.getValidValue(nextProps.value, nextProps.min, nextProps.max);
      this.setState({
        value: value,
        inputValue: this.inputting ? value : this.toPrecisionAsStep(value)
      });
    }

    // Trigger onChange when max or min change
    // https://github.com/ant-design/ant-design/issues/11574
    var nextValue = 'value' in nextProps ? nextProps.value : this.state.value;
    var _props = this.props,
        onChange = _props.onChange,
        max = _props.max,
        min = _props.min;

    if ('max' in nextProps && nextProps.max !== max && nextValue > nextProps.max && onChange) {
      onChange(nextProps.max);
    }
    if ('min' in nextProps && nextProps.min !== min && nextValue < nextProps.min && onChange) {
      onChange(nextProps.min);
    }
  };

  InputNumber.prototype.componentDidUpdate = function componentDidUpdate() {
    // Restore cursor
    try {
      // Firefox set the input cursor after it get focused.
      // This caused that if an input didn't init with the selection,
      // set will cause cursor not correct when first focus.
      // Safari will focus input if set selection. We need skip this.
      if (this.cursorStart !== undefined && this.state.focused) {
        // In most cases, the string after cursor is stable.
        // We can move the cursor before it

        if (
        // If not match full str, try to match part of str
        !this.partRestoreByAfter(this.cursorAfter)) {
          // If not match any of then, let's just keep the position
          // TODO: Logic should not reach here, need check if happens
          var pos = this.cursorStart + 1;

          // If not have last string, just position to the end
          if (!this.cursorAfter) {
            pos = this.input.value.length;
          } else if (this.lastKeyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__["default"].BACKSPACE) {
            pos = this.cursorStart - 1;
          } else if (this.lastKeyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__["default"].DELETE) {
            pos = this.cursorStart;
          }
          this.fixCaret(pos, pos);
        } else if (this.currentValue === this.input.value) {
          // Handle some special key code
          switch (this.lastKeyCode) {
            case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__["default"].BACKSPACE:
              this.fixCaret(this.cursorStart - 1, this.cursorStart - 1);
              break;
            case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__["default"].DELETE:
              this.fixCaret(this.cursorStart + 1, this.cursorStart + 1);
              break;
            default:
            // Do nothing
          }
        }
      }
    } catch (e) {}
    // Do nothing


    // Reset last key
    this.lastKeyCode = null;

    // pressingUpOrDown is true means that someone just click up or down button
    if (!this.pressingUpOrDown) {
      return;
    }
    if (this.props.focusOnUpDown && this.state.focused) {
      if (document.activeElement !== this.input) {
        this.focus();
      }
    }

    this.pressingUpOrDown = false;
  };

  InputNumber.prototype.componentWillUnmount = function componentWillUnmount() {
    this.stop();
  };

  InputNumber.prototype.getCurrentValidValue = function getCurrentValidValue(value) {
    var val = value;
    if (val === '') {
      val = '';
    } else if (!this.isNotCompleteNumber(val)) {
      val = this.getValidValue(val);
    } else {
      val = this.state.value;
    }
    return this.toNumber(val);
  };

  InputNumber.prototype.getRatio = function getRatio(e) {
    var ratio = 1;
    if (e.metaKey || e.ctrlKey) {
      ratio = 0.1;
    } else if (e.shiftKey) {
      ratio = 10;
    }
    return ratio;
  };

  InputNumber.prototype.getValueFromEvent = function getValueFromEvent(e) {
    // optimize for chinese input expierence
    // https://github.com/ant-design/ant-design/issues/8196
    var value = e.target.value.trim().replace(/。/g, '.');

    if ('decimalSeparator' in this.props) {
      value = value.replace(this.props.decimalSeparator, '.');
    }

    return value;
  };

  InputNumber.prototype.getValidValue = function getValidValue(value) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.min;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.max;

    var val = parseFloat(value, 10);
    // https://github.com/ant-design/ant-design/issues/7358
    if (isNaN(val)) {
      return value;
    }
    if (val < min) {
      val = min;
    }
    if (val > max) {
      val = max;
    }
    return val;
  };

  InputNumber.prototype.setValue = function setValue(v, callback) {
    // trigger onChange
    var newValue = this.isNotCompleteNumber(parseFloat(v, 10)) ? undefined : parseFloat(v, 10);
    var changed = newValue !== this.state.value || '' + newValue !== '' + this.state.inputValue; // https://github.com/ant-design/ant-design/issues/7363
    if (!('value' in this.props)) {
      this.setState({
        value: newValue,
        inputValue: this.toPrecisionAsStep(v)
      }, callback);
    } else {
      // always set input value same as value
      this.setState({
        inputValue: this.toPrecisionAsStep(this.state.value)
      }, callback);
    }
    if (changed) {
      this.props.onChange(newValue);
    }
  };

  InputNumber.prototype.getPrecision = function getPrecision(value) {
    if ('precision' in this.props) {
      return this.props.precision;
    }
    var valueString = value.toString();
    if (valueString.indexOf('e-') >= 0) {
      return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
    }
    var precision = 0;
    if (valueString.indexOf('.') >= 0) {
      precision = valueString.length - valueString.indexOf('.') - 1;
    }
    return precision;
  };

  // step={1.0} value={1.51}
  // press +
  // then value should be 2.51, rather than 2.5
  // if this.props.precision is undefined
  // https://github.com/react-component/input-number/issues/39


  InputNumber.prototype.getMaxPrecision = function getMaxPrecision(currentValue) {
    var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    if ('precision' in this.props) {
      return this.props.precision;
    }
    var step = this.props.step;

    var ratioPrecision = this.getPrecision(ratio);
    var stepPrecision = this.getPrecision(step);
    var currentValuePrecision = this.getPrecision(currentValue);
    if (!currentValue) {
      return ratioPrecision + stepPrecision;
    }
    return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
  };

  InputNumber.prototype.getPrecisionFactor = function getPrecisionFactor(currentValue) {
    var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var precision = this.getMaxPrecision(currentValue, ratio);
    return Math.pow(10, precision);
  };

  InputNumber.prototype.fixCaret = function fixCaret(start, end) {
    if (start === undefined || end === undefined || !this.input || !this.input.value) {
      return;
    }

    try {
      var currentStart = this.input.selectionStart;
      var currentEnd = this.input.selectionEnd;

      if (start !== currentStart || end !== currentEnd) {
        this.input.setSelectionRange(start, end);
      }
    } catch (e) {
      // Fix error in Chrome:
      // Failed to read the 'selectionStart' property from 'HTMLInputElement'
      // http://stackoverflow.com/q/21177489/3040605
    }
  };

  InputNumber.prototype.focus = function focus() {
    this.input.focus();
    this.recordCursorPosition();
  };

  InputNumber.prototype.blur = function blur() {
    this.input.blur();
  };

  InputNumber.prototype.formatWrapper = function formatWrapper(num) {
    // http://2ality.com/2012/03/signedzero.html
    // https://github.com/ant-design/ant-design/issues/9439
    if (is_negative_zero__WEBPACK_IMPORTED_MODULE_7___default()(num)) {
      return '-0';
    }
    if (this.props.formatter) {
      return this.props.formatter(num);
    }
    return num;
  };

  InputNumber.prototype.toPrecisionAsStep = function toPrecisionAsStep(num) {
    if (this.isNotCompleteNumber(num) || num === '') {
      return num;
    }
    var precision = Math.abs(this.getMaxPrecision(num));
    if (precision === 0) {
      return num.toString();
    }
    if (!isNaN(precision)) {
      return Number(num).toFixed(precision);
    }
    return num.toString();
  };

  // '1.' '1x' 'xx' '' => are not complete numbers


  InputNumber.prototype.isNotCompleteNumber = function isNotCompleteNumber(num) {
    return isNaN(num) || num === '' || num === null || num && num.toString().indexOf('.') === num.toString().length - 1;
  };

  InputNumber.prototype.toNumber = function toNumber(num) {
    if (this.isNotCompleteNumber(num)) {
      return num;
    }
    if ('precision' in this.props) {
      return Number(Number(num).toFixed(this.props.precision));
    }
    return Number(num);
  };

  // '1.0' '1.00'  => may be a inputing number


  InputNumber.prototype.toNumberWhenUserInput = function toNumberWhenUserInput(num) {
    // num.length > 16 => prevent input large number will became Infinity
    if ((/\.\d*0$/.test(num) || num.length > 16) && this.state.focused) {
      return num;
    }
    return this.toNumber(num);
  };

  InputNumber.prototype.upStep = function upStep(val, rat) {
    var _props2 = this.props,
        step = _props2.step,
        min = _props2.min;

    var precisionFactor = this.getPrecisionFactor(val, rat);
    var precision = Math.abs(this.getMaxPrecision(val, rat));
    var result = void 0;
    if (typeof val === 'number') {
      result = ((precisionFactor * val + precisionFactor * step * rat) / precisionFactor).toFixed(precision);
    } else {
      result = min === -Infinity ? step : min;
    }
    return this.toNumber(result);
  };

  InputNumber.prototype.downStep = function downStep(val, rat) {
    var _props3 = this.props,
        step = _props3.step,
        min = _props3.min;

    var precisionFactor = this.getPrecisionFactor(val, rat);
    var precision = Math.abs(this.getMaxPrecision(val, rat));
    var result = void 0;
    if (typeof val === 'number') {
      result = ((precisionFactor * val - precisionFactor * step * rat) / precisionFactor).toFixed(precision);
    } else {
      result = min === -Infinity ? -step : min;
    }
    return this.toNumber(result);
  };

  InputNumber.prototype.step = function step(type, e) {
    var _this2 = this;

    var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var recursive = arguments[3];

    this.stop();
    if (e) {
      e.persist();
      e.preventDefault();
    }
    var props = this.props;
    if (props.disabled) {
      return;
    }
    var value = this.getCurrentValidValue(this.state.inputValue) || 0;
    if (this.isNotCompleteNumber(value)) {
      return;
    }
    var val = this[type + 'Step'](value, ratio);
    var outOfRange = val > props.max || val < props.min;
    if (val > props.max) {
      val = props.max;
    } else if (val < props.min) {
      val = props.min;
    }
    this.setValue(val);
    this.setState({
      focused: true
    });
    if (outOfRange) {
      return;
    }
    this.autoStepTimer = setTimeout(function () {
      _this2[type](e, ratio, true);
    }, recursive ? SPEED : DELAY);
  };

  InputNumber.prototype.render = function render() {
    var _classNames;

    var props = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props);
    var prefixCls = props.prefixCls,
        disabled = props.disabled,
        readOnly = props.readOnly,
        useTouch = props.useTouch;

    var classes = classnames__WEBPACK_IMPORTED_MODULE_6___default()((_classNames = {}, _classNames[prefixCls] = true, _classNames[props.className] = !!props.className, _classNames[prefixCls + '-disabled'] = disabled, _classNames[prefixCls + '-focused'] = this.state.focused, _classNames));
    var upDisabledClass = '';
    var downDisabledClass = '';
    var value = this.state.value;

    if (value || value === 0) {
      if (!isNaN(value)) {
        var val = Number(value);
        if (val >= props.max) {
          upDisabledClass = prefixCls + '-handler-up-disabled';
        }
        if (val <= props.min) {
          downDisabledClass = prefixCls + '-handler-down-disabled';
        }
      } else {
        upDisabledClass = prefixCls + '-handler-up-disabled';
        downDisabledClass = prefixCls + '-handler-down-disabled';
      }
    }

    var dataOrAriaAttributeProps = {};
    for (var key in props) {
      if (props.hasOwnProperty(key) && (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role')) {
        dataOrAriaAttributeProps[key] = props[key];
      }
    }

    var editable = !props.readOnly && !props.disabled;

    // focus state, show input value
    // unfocus state, show valid value
    var inputDisplayValue = this.getInputDisplayValue();

    var upEvents = void 0;
    var downEvents = void 0;
    if (useTouch) {
      upEvents = {
        onTouchStart: editable && !upDisabledClass ? this.up : noop,
        onTouchEnd: this.stop
      };
      downEvents = {
        onTouchStart: editable && !downDisabledClass ? this.down : noop,
        onTouchEnd: this.stop
      };
    } else {
      upEvents = {
        onMouseDown: editable && !upDisabledClass ? this.up : noop,
        onMouseUp: this.stop,
        onMouseLeave: this.stop
      };
      downEvents = {
        onMouseDown: editable && !downDisabledClass ? this.down : noop,
        onMouseUp: this.stop,
        onMouseLeave: this.stop
      };
    }

    var inputDisplayValueFormat = this.formatWrapper(inputDisplayValue);
    if ('decimalSeparator' in this.props) {
      inputDisplayValueFormat = inputDisplayValueFormat.toString().replace('.', this.props.decimalSeparator);
    }
    var isUpDisabled = !!upDisabledClass || disabled || readOnly;
    var isDownDisabled = !!downDisabledClass || disabled || readOnly;
    // ref for test
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      'div',
      {
        className: classes,
        style: props.style,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onMouseOver: props.onMouseOver,
        onMouseOut: props.onMouseOut
      },
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        'div',
        { className: prefixCls + '-handler-wrap' },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          _InputHandler__WEBPACK_IMPORTED_MODULE_9__["default"],
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            ref: this.saveUp,
            disabled: isUpDisabled,
            prefixCls: prefixCls,
            unselectable: 'unselectable'
          }, upEvents, {
            role: 'button',
            'aria-label': 'Increase Value',
            'aria-disabled': !!isUpDisabled,
            className: prefixCls + '-handler ' + prefixCls + '-handler-up ' + upDisabledClass
          }),
          this.props.upHandler || react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('span', {
            unselectable: 'unselectable',
            className: prefixCls + '-handler-up-inner',
            onClick: preventDefault
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          _InputHandler__WEBPACK_IMPORTED_MODULE_9__["default"],
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            ref: this.saveDown,
            disabled: isDownDisabled,
            prefixCls: prefixCls,
            unselectable: 'unselectable'
          }, downEvents, {
            role: 'button',
            'aria-label': 'Decrease Value',
            'aria-disabled': !!isDownDisabled,
            className: prefixCls + '-handler ' + prefixCls + '-handler-down ' + downDisabledClass
          }),
          this.props.downHandler || react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('span', {
            unselectable: 'unselectable',
            className: prefixCls + '-handler-down-inner',
            onClick: preventDefault
          })
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        'div',
        {
          className: prefixCls + '-input-wrap',
          role: 'spinbutton',
          'aria-valuemin': props.min,
          'aria-valuemax': props.max,
          'aria-valuenow': value
        },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('input', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          required: props.required,
          type: props.type,
          placeholder: props.placeholder,
          onClick: props.onClick,
          onMouseUp: this.onMouseUp,
          className: prefixCls + '-input',
          tabIndex: props.tabIndex,
          autoComplete: 'off',
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onKeyDown: editable ? this.onKeyDown : noop,
          onKeyUp: editable ? this.onKeyUp : noop,
          autoFocus: props.autoFocus,
          maxLength: props.maxLength,
          readOnly: props.readOnly,
          disabled: props.disabled,
          max: props.max,
          min: props.min,
          step: props.step,
          name: props.name,
          id: props.id,
          onChange: this.onChange,
          ref: this.saveInput,
          value: inputDisplayValueFormat,
          pattern: props.pattern
        }, dataOrAriaAttributeProps))
      )
    );
  };

  return InputNumber;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

InputNumber.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string]),
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string]),
  focusOnUpDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number]),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  max: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  min: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  step: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string]),
  upHandler: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
  downHandler: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
  useTouch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  formatter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  parser: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseOver: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseOut: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseUp: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  precision: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  required: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  pattern: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  decimalSeparator: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
InputNumber.defaultProps = {
  focusOnUpDown: true,
  useTouch: false,
  prefixCls: 'rc-input-number',
  min: -MAX_SAFE_INTEGER,
  step: 1,
  style: {},
  onChange: noop,
  onKeyDown: noop,
  onFocus: noop,
  onBlur: noop,
  parser: defaultParser,
  required: false
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onKeyDown = function (e) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var onKeyDown = _this3.props.onKeyDown;


    if (e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__["default"].UP) {
      var ratio = _this3.getRatio(e);
      _this3.up(e, ratio);
      _this3.stop();
    } else if (e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__["default"].DOWN) {
      var _ratio = _this3.getRatio(e);
      _this3.down(e, _ratio);
      _this3.stop();
    }

    // Trigger user key down
    _this3.recordCursorPosition();
    _this3.lastKeyCode = e.keyCode;
    if (onKeyDown) {
      onKeyDown.apply(undefined, [e].concat(args));
    }
  };

  this.onKeyUp = function (e) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var onKeyUp = _this3.props.onKeyUp;


    _this3.stop();

    _this3.recordCursorPosition();

    // Trigger user key up
    if (onKeyUp) {
      onKeyUp.apply(undefined, [e].concat(args));
    }
  };

  this.onChange = function (e) {
    if (_this3.state.focused) {
      _this3.inputting = true;
    }
    var input = _this3.props.parser(_this3.getValueFromEvent(e));
    _this3.setState({ inputValue: input });
    _this3.props.onChange(_this3.toNumberWhenUserInput(input)); // valid number or invalid string
  };

  this.onMouseUp = function () {
    var onMouseUp = _this3.props.onMouseUp;


    _this3.recordCursorPosition();

    if (onMouseUp) {
      onMouseUp.apply(undefined, arguments);
    }
  };

  this.onFocus = function () {
    var _props4;

    _this3.setState({
      focused: true
    });
    (_props4 = _this3.props).onFocus.apply(_props4, arguments);
  };

  this.onBlur = function (e) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    _this3.inputting = false;
    _this3.setState({
      focused: false
    });
    var value = _this3.getCurrentValidValue(_this3.state.inputValue);
    e.persist(); // fix https://github.com/react-component/input-number/issues/51
    _this3.setValue(value, function () {
      var _props5;

      (_props5 = _this3.props).onBlur.apply(_props5, [e].concat(args));
    });
  };

  this.getInputDisplayValue = function () {
    var _state = _this3.state,
        focused = _state.focused,
        inputValue = _state.inputValue,
        value = _state.value;

    var inputDisplayValue = void 0;
    if (focused) {
      inputDisplayValue = inputValue;
    } else {
      inputDisplayValue = _this3.toPrecisionAsStep(value);
    }

    if (inputDisplayValue === undefined || inputDisplayValue === null) {
      inputDisplayValue = '';
    }

    return inputDisplayValue;
  };

  this.recordCursorPosition = function () {
    // Record position
    try {
      _this3.cursorStart = _this3.input.selectionStart;
      _this3.cursorEnd = _this3.input.selectionEnd;
      _this3.currentValue = _this3.input.value;
      _this3.cursorBefore = _this3.input.value.substring(0, _this3.cursorStart);
      _this3.cursorAfter = _this3.input.value.substring(_this3.cursorEnd);
    } catch (e) {
      // Fix error in Chrome:
      // Failed to read the 'selectionStart' property from 'HTMLInputElement'
      // http://stackoverflow.com/q/21177489/3040605
    }
  };

  this.restoreByAfter = function (str) {
    if (str === undefined) return false;

    var fullStr = _this3.input.value;
    var index = fullStr.lastIndexOf(str);

    if (index === -1) return false;

    if (index + str.length === fullStr.length) {
      _this3.fixCaret(index, index);

      return true;
    }
    return false;
  };

  this.partRestoreByAfter = function (str) {
    if (str === undefined) return false;

    // For loop from full str to the str with last char to map. e.g. 123
    // -> 123
    // -> 23
    // -> 3
    return Array.prototype.some.call(str, function (_, start) {
      var partStr = str.substring(start);

      return _this3.restoreByAfter(partStr);
    });
  };

  this.stop = function () {
    if (_this3.autoStepTimer) {
      clearTimeout(_this3.autoStepTimer);
    }
  };

  this.down = function (e, ratio, recursive) {
    _this3.pressingUpOrDown = true;
    _this3.step('down', e, ratio, recursive);
  };

  this.up = function (e, ratio, recursive) {
    _this3.pressingUpOrDown = true;
    _this3.step('up', e, ratio, recursive);
  };

  this.saveUp = function (node) {
    _this3.upHandler = node;
  };

  this.saveDown = function (node) {
    _this3.downHandler = node;
  };

  this.saveInput = function (node) {
    _this3.input = node;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (InputNumber);

/***/ }),

/***/ "./node_modules/_rmc-feedback@2.0.0@rmc-feedback/es/TouchFeedback.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_rmc-feedback@2.0.0@rmc-feedback/es/TouchFeedback.js ***!
  \***************************************************************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);








var TouchFeedback = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TouchFeedback, _React$Component);

    function TouchFeedback() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TouchFeedback);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (TouchFeedback.__proto__ || Object.getPrototypeOf(TouchFeedback)).apply(this, arguments));

        _this.state = {
            active: false
        };
        _this.onTouchStart = function (e) {
            _this.triggerEvent('TouchStart', true, e);
        };
        _this.onTouchMove = function (e) {
            _this.triggerEvent('TouchMove', false, e);
        };
        _this.onTouchEnd = function (e) {
            _this.triggerEvent('TouchEnd', false, e);
        };
        _this.onTouchCancel = function (e) {
            _this.triggerEvent('TouchCancel', false, e);
        };
        _this.onMouseDown = function (e) {
            // pc simulate mobile
            _this.triggerEvent('MouseDown', true, e);
        };
        _this.onMouseUp = function (e) {
            _this.triggerEvent('MouseUp', false, e);
        };
        _this.onMouseLeave = function (e) {
            _this.triggerEvent('MouseLeave', false, e);
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TouchFeedback, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.disabled && this.state.active) {
                this.setState({
                    active: false
                });
            }
        }
    }, {
        key: 'triggerEvent',
        value: function triggerEvent(type, isActive, ev) {
            var eventType = 'on' + type;
            var children = this.props.children;

            if (children.props[eventType]) {
                children.props[eventType](ev);
            }
            if (isActive !== this.state.active) {
                this.setState({
                    active: isActive
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                disabled = _props.disabled,
                activeClassName = _props.activeClassName,
                activeStyle = _props.activeStyle;

            var events = disabled ? undefined : {
                onTouchStart: this.onTouchStart,
                onTouchMove: this.onTouchMove,
                onTouchEnd: this.onTouchEnd,
                onTouchCancel: this.onTouchCancel,
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onMouseLeave: this.onMouseLeave
            };
            var child = react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.only(children);
            if (!disabled && this.state.active) {
                var _child$props = child.props,
                    style = _child$props.style,
                    className = _child$props.className;

                if (activeStyle !== false) {
                    if (activeStyle) {
                        style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, activeStyle);
                    }
                    className = classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, activeClassName);
                }
                return react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(child, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: className,
                    style: style }, events));
            }
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(child, events);
        }
    }]);

    return TouchFeedback;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TouchFeedback);

TouchFeedback.defaultProps = {
    disabled: false
};

/***/ }),

/***/ "./node_modules/_rmc-feedback@2.0.0@rmc-feedback/es/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_rmc-feedback@2.0.0@rmc-feedback/es/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TouchFeedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TouchFeedback */ "./node_modules/_rmc-feedback@2.0.0@rmc-feedback/es/TouchFeedback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TouchFeedback__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

}]);
//# sourceMappingURL=25_768ae5c20fe057c28075.js.map