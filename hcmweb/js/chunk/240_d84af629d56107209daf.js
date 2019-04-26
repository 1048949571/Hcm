(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[240],{

/***/ "./app/widget/index/Brand/CategorySelect/tpl.js":
/*!******************************************************!*\
  !*** ./app/widget/index/Brand/CategorySelect/tpl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var Tpl = (0, _That2.default)(function (that) {
    var dataList = that.state.dataList;

    return React.createElement(
        'div',
        { className: 'CategorySelect' },
        React.createElement(
            'div',
            { className: 'content' },
            React.createElement(
                'h2',
                null,
                '\u8BF7\u9009\u62E9\u516C\u53F8\u6240\u5C5E\u884C\u4E1A\u7C7B\u76EE'
            ),
            React.createElement(
                'p',
                null,
                '\u884C\u4E1A\u7C7B\u76EE'
            ),
            React.createElement(
                _select2.default,
                {
                    showSearch: true,
                    style: { width: 300 },
                    value: that.state.id,
                    onChange: function onChange(value, option) {
                        return that.chSelect(value, option);
                    },
                    placeholder: '\u8BF7\u9009\u62E9',
                    filterOption: function filterOption(input, option) {
                        return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                    }
                },
                dataList.map(function (item, index) {
                    return React.createElement(
                        Option,
                        { key: index, value: item.id },
                        item.dictName
                    );
                })
            ),
            React.createElement(
                'p',
                { className: 'button' },
                React.createElement(
                    _button2.default,
                    { onClick: function onClick() {
                            return that.onSubmit();
                        } },
                    '\u786E\u8BA4'
                )
            )
        )
    );
});
exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=240_d84af629d56107209daf.js.map