(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[157],{

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

/***/ "./node_modules/_antd@3.10.1@antd/es/divider/index.js":
/*!************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/divider/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Divider; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);


var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


function Divider(_a) {
    var _classNames;

    var _a$prefixCls = _a.prefixCls,
        prefixCls = _a$prefixCls === undefined ? 'ant' : _a$prefixCls,
        _a$type = _a.type,
        type = _a$type === undefined ? 'horizontal' : _a$type,
        _a$orientation = _a.orientation,
        orientation = _a$orientation === undefined ? '' : _a$orientation,
        className = _a.className,
        children = _a.children,
        dashed = _a.dashed,
        restProps = __rest(_a, ["prefixCls", "type", "orientation", "className", "children", "dashed"]);

    var orientationPrefix = orientation.length > 0 ? '-' + orientation : orientation;
    var classString = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, prefixCls + '-divider', prefixCls + '-divider-' + type, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-divider-with-text' + orientationPrefix, children), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-divider-dashed', !!dashed), _classNames));
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: classString }, restProps),
        children && react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            'span',
            { className: prefixCls + '-divider-inner-text' },
            children
        )
    );
}

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js":
/*!****************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/divider/style/css.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/divider/style/index.css":
/*!*******************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/divider/style/index.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/switch/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/switch/index.js ***!
  \***********************************************************/
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
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-switch */ "./node_modules/_rc-switch@1.8.0@rc-switch/es/index.js");
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rc_switch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! omit.js */ "./node_modules/_omit.js@1.0.0@omit.js/es/index.js");
/* harmony import */ var _util_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_util/wave */ "./node_modules/_antd@3.10.1@antd/es/_util/wave.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");














var Switch = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Switch, _React$Component);

    function Switch() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Switch);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));

        _this.saveSwitch = function (node) {
            _this.rcSwitch = node;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Switch, [{
        key: 'focus',
        value: function focus() {
            this.rcSwitch.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcSwitch.blur();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                loading = _props.loading,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className;

            var classes = classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-small', size === 'small'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-loading', loading), _classNames));
            var loadingIcon = loading ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_12__["default"], { type: 'loading', className: prefixCls + '-loading-icon' }) : null;
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _util_wave__WEBPACK_IMPORTED_MODULE_11__["default"],
                { insertExtraNode: true },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_switch__WEBPACK_IMPORTED_MODULE_8___default.a, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(omit_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this.props, ['loading']), { className: classes, ref: this.saveSwitch, loadingIcon: loadingIcon }))
            );
        }
    }]);

    return Switch;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Switch);

Switch.defaultProps = {
    prefixCls: 'ant-switch'
};
Switch.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
    // HACK: https://github.com/ant-design/ant-design/issues/5368
    // size=default and size=large are the same
    size: prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"](['small', 'default', 'large']),
    className: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]
};

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/switch/style/css.js":
/*!***************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/switch/style/css.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/switch/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/switch/style/index.css":
/*!******************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/switch/style/index.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/_copy-to-clipboard@3.0.8@copy-to-clipboard/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_copy-to-clipboard@3.0.8@copy-to-clipboard/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/_toggle-selection@1.0.6@toggle-selection/index.js");

var defaultMessage = 'Copy to clipboard: #{key}, Enter';

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) { options = {}; }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement('span');
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = 'unset';
    // prevents scrolling to the end of the page
    mark.style.position = 'fixed';
    mark.style.top = 0;
    mark.style.clip = 'rect(0, 0, 0, 0)';
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = 'pre';
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = 'text';
    mark.style.MozUserSelect = 'text';
    mark.style.msUserSelect = 'text';
    mark.style.userSelect = 'text';

    document.body.appendChild(mark);

    range.selectNode(mark);
    selection.addRange(range);

    var successful = document.execCommand('copy');
    if (!successful) {
      throw new Error('copy command was unsuccessful');
    }
    success = true;
  } catch (err) {
    debug && console.error('unable to copy using execCommand: ', err);
    debug && console.warn('trying IE specific stuff');
    try {
      window.clipboardData.setData('text', text);
      success = true;
    } catch (err) {
      debug && console.error('unable to copy using clipboardData: ', err);
      debug && console.error('falling back to prompt');
      message = format('message' in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == 'function') {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/_rc-switch@1.8.0@rc-switch/es/Switch.js":
/*!**************************************************************!*\
  !*** ./node_modules/_rc-switch@1.8.0@rc-switch/es/Switch.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
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









var classNames = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");

function noop() {}

var Switch = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Switch, _Component);

  function Switch(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Switch);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _initialiseProps.call(_this);

    var checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    _this.state = { checked: checked };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Switch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          autoFocus = _props.autoFocus,
          disabled = _props.disabled;

      if (autoFocus && !disabled) {
        this.focus();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: !!nextProps.checked
        });
      }
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      if (this.props.disabled) {
        return;
      }
      if (!('checked' in this.props)) {
        this.setState({
          checked: checked
        });
      }
      this.props.onChange(checked);
    }

    // Handle auto focus when click switch in Chrome

  }, {
    key: 'focus',
    value: function focus() {
      this.node.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.node.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          className = _props2.className,
          prefixCls = _props2.prefixCls,
          disabled = _props2.disabled,
          loadingIcon = _props2.loadingIcon,
          checkedChildren = _props2.checkedChildren,
          unCheckedChildren = _props2.unCheckedChildren,
          restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_props2, ['className', 'prefixCls', 'disabled', 'loadingIcon', 'checkedChildren', 'unCheckedChildren']);

      var checked = this.state.checked;
      var switchClassName = classNames((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, className, !!className), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-checked', checked), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-disabled', disabled), _classNames));
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'button',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, {
          type: 'button',
          role: 'switch',
          'aria-checked': checked,
          disabled: disabled,
          className: switchClassName,
          ref: this.saveNode,
          onKeyDown: this.handleKeyDown,
          onClick: this.toggle,
          onMouseUp: this.handleMouseUp
        }),
        loadingIcon,
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'span',
          { className: prefixCls + '-inner' },
          checked ? checkedChildren : unCheckedChildren
        )
      );
    }
  }]);

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.toggle = function () {
    var onClick = _this2.props.onClick;

    var checked = !_this2.state.checked;
    _this2.setChecked(checked);
    onClick(checked);
  };

  this.handleKeyDown = function (e) {
    if (e.keyCode === 37) {
      // Left
      _this2.setChecked(false);
    } else if (e.keyCode === 39) {
      // Right
      _this2.setChecked(true);
    }
  };

  this.handleMouseUp = function (e) {
    if (_this2.node) {
      _this2.node.blur();
    }
    if (_this2.props.onMouseUp) {
      _this2.props.onMouseUp(e);
    }
  };

  this.saveNode = function (node) {
    _this2.node = node;
  };
};

Switch.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  checkedChildren: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  unCheckedChildren: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onMouseUp: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  defaultChecked: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  loadingIcon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node
};

Switch.defaultProps = {
  prefixCls: 'rc-switch',
  checkedChildren: null,
  unCheckedChildren: null,
  className: '',
  defaultChecked: false,
  onChange: noop,
  onClick: noop
};

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./node_modules/_rc-switch@1.8.0@rc-switch/es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/_rc-switch@1.8.0@rc-switch/es/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./Switch */ "./node_modules/_rc-switch@1.8.0@rc-switch/es/Switch.js");

/***/ }),

/***/ "./node_modules/_react-copy-to-clipboard@5.0.1@react-copy-to-clipboard/lib/Component.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_react-copy-to-clipboard@5.0.1@react-copy-to-clipboard/lib/Component.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _copyToClipboard = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/_copy-to-clipboard@3.0.8@copy-to-clipboard/index.js");

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CopyToClipboard = exports.CopyToClipboard = function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  function CopyToClipboard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CopyToClipboard.__proto__ || Object.getPrototypeOf(CopyToClipboard)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;


      var elem = _react2.default.Children.only(children);

      var result = (0, _copyToClipboard2.default)(text, options);

      if (onCopy) {
        onCopy(text, result);
      }

      // Bypass onClick if it was present
      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CopyToClipboard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _text = _props.text,
          _onCopy = _props.onCopy,
          _options = _props.options,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['text', 'onCopy', 'options', 'children']);

      var elem = _react2.default.Children.only(children);

      return _react2.default.cloneElement(elem, _extends({}, props, { onClick: this.onClick }));
    }
  }]);

  return CopyToClipboard;
}(_react2.default.PureComponent);

CopyToClipboard.defaultProps = {
  onCopy: undefined,
  options: undefined
};

/***/ }),

/***/ "./node_modules/_react-copy-to-clipboard@5.0.1@react-copy-to-clipboard/lib/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_react-copy-to-clipboard@5.0.1@react-copy-to-clipboard/lib/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./Component */ "./node_modules/_react-copy-to-clipboard@5.0.1@react-copy-to-clipboard/lib/Component.js"),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

/***/ }),

/***/ "./node_modules/_toggle-selection@1.0.6@toggle-selection/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/_toggle-selection@1.0.6@toggle-selection/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ })

}]);
//# sourceMappingURL=157_9a541202ca0ae82a7f44.js.map