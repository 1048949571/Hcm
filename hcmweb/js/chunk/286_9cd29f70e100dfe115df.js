(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[286],{

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

/***/ "./app/widget/index/ChangeHistory/ChangeHistory.less":
/*!***********************************************************!*\
  !*** ./app/widget/index/ChangeHistory/ChangeHistory.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/ChangeHistory/tpl.js":
/*!***********************************************!*\
  !*** ./app/widget/index/ChangeHistory/tpl.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _timeline = __webpack_require__(/*! antd/es/timeline */ "./node_modules/_antd@3.10.1@antd/es/timeline/index.js");

var _timeline2 = _interopRequireDefault(_timeline);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/timeline/style/css */ "./node_modules/_antd@3.10.1@antd/es/timeline/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

__webpack_require__(/*! ./ChangeHistory.less */ "./app/widget/index/ChangeHistory/ChangeHistory.less");

var _That = __webpack_require__(/*! ../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Copyright = __webpack_require__(/*! ../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangePicker = _datePicker2.default.RangePicker;

var json = {
    ClientCheck: {
        name: '客户信息',
        type: 'ClientCheck',
        path: '/index.html#/ChangeHistory'
    },
    PricePublicity: {
        name: '泸州老窖',
        type: 'PricePublicity',
        path: '/index.html#/ProductInformation'
    }
};
var arr = [];
for (var key in json) {
    if (window.location.hash.substring(2).indexOf(key) > -1) {
        console.log(json[key]);
        arr.push(json[key]);
    }
}
//console.log(arr)

var Tpl = (0, _That2.default)(function (that) {
    // console.log(that.props.match.params)
    return React.createElement(
        'div',
        { className: 'ChangeHistory' },
        React.createElement(
            'div',
            { className: 'Breadcrumb' },
            React.createElement(
                _breadcrumb2.default,
                null,
                that.state.typeos == "DEALER" || that.state.typeos == "DEALER_DELETE" ? React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u6E20\u9053\u76D8\u70B9'
                ) : that.state.typeos == "Product" ? React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u552E\u4EF7\u516C\u5F0F'
                ) : that.state.typeos == "HcmProductClassify" ? null : null,
                that.state.TWOtit ? React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    React.createElement(
                        'a',
                        { style: { margin: '0' }, onClick: that.HistoryGo },
                        that.state.TWOtit
                    )
                ) : that.state.typeos == "HcmProductClassify" || that.state.typeos == "HcmCustomModel" ? React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    React.createElement(
                        'a',
                        { style: { margin: '0' }, href: '/index.html#/PriceNotice' },
                        '\u552E\u4EF7\u516C\u793A'
                    )
                ) : that.state.typeos == "DEALER" || that.state.typeos == "DEALER_DELETE" ? React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    React.createElement(
                        'a',
                        { style: { margin: '0' }, href: '/index.html#/ClientCheck' },
                        '\u5BA2\u6237\u4FE1\u606F'
                    )
                ) : that.state.typeos == "MonitorLink_Delete" ? React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    React.createElement(
                        'a',
                        { style: { margin: '0' }, href: '/index.html#/UrlMonitor' },
                        '\u5355\u94FE\u63A5\u76D1\u63A7'
                    )
                ) : null,
                React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u53D8\u66F4\u5386\u53F2'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'ChangeHistoryBOX' },
            React.createElement(
                'div',
                { className: 'ChangeHeader' },
                React.createElement(
                    'span',
                    null,
                    '\u53D8\u66F4\u65F6\u95F4'
                ),
                React.createElement(RangePicker, {
                    defaultValue: [moment(Date.now() - 2160 * 60 * 60 * 1000), moment(Date.now())],
                    onChange: that.onChange })
            ),
            React.createElement(
                'div',
                { className: 'ChangeBody' },
                React.createElement(
                    _timeline2.default,
                    null,
                    that.state.ChangeHistory_list.length > 0 ? that.state.ChangeHistory_list.map(function (val, index) {
                        return React.createElement(
                            _timeline2.default.Item,
                            { key: index },
                            React.createElement(
                                'h3',
                                null,
                                moment(val.changetime).format('YYYY-MM-DD HH:mm:ss')
                            ),
                            React.createElement(
                                'h5',
                                null,
                                '\u53D8\u66F4\u4EBA\uFF1A',
                                val.realname
                            ),
                            React.createElement(
                                'span',
                                { className: 'ChangeTit' },
                                val.changeMessage ? val.changeMessage : null,
                                React.createElement('br', null),
                                val.contentAfter,
                                ' ',
                                React.createElement('br', null),
                                val.contentBefore
                            )
                        );
                    }) : React.createElement(
                        _timeline2.default.Item,
                        null,
                        '\u6682\u65E0\u6570\u636E'
                    )
                )
            ),
            that.state.ChangeHistory_list.length > 0 ? React.createElement(
                'div',
                { className: 'ChangeFooter' },
                that.state.onLoading == that.state.ChangeHistory_list.length ? React.createElement(
                    _button2.default,
                    { onClick: that.onLoading, className: 'loading-button' },
                    '\u52A0\u8F7D\u66F4\u591A...'
                ) : null
            ) : null
        ),
        React.createElement(_Copyright2.default, { className: 'Copyright' })
    );
});
exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

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
//# sourceMappingURL=286_9cd29f70e100dfe115df.js.map