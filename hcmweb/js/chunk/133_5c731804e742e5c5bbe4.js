(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[133],{

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

/***/ "./app/widget/index/Service/PriceMonitorSetting/tpl.js":
/*!*************************************************************!*\
  !*** ./app/widget/index/Service/PriceMonitorSetting/tpl.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alert = __webpack_require__(/*! antd/es/alert */ "./node_modules/_antd@3.10.1@antd/es/alert/index.js");

var _alert2 = _interopRequireDefault(_alert);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@3.10.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _avatar = __webpack_require__(/*! antd/es/avatar */ "./node_modules/_antd@3.10.1@antd/es/avatar/index.js");

var _avatar2 = _interopRequireDefault(_avatar);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! antd/es/alert/style/css */ "./node_modules/_antd@3.10.1@antd/es/alert/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/avatar/style/css */ "./node_modules/_antd@3.10.1@antd/es/avatar/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Option = _select2.default.Option;
var Tpl = (0, _That2.default)(function (that) {
    var _ref;

    var _that$state = that.state,
        dataList = _that$state.dataList,
        totalElements = _that$state.totalElements,
        pageSize = _that$state.pageSize,
        pageNum = _that$state.pageNum,
        companyname = _that$state.companyname;

    var clearIconStyle = {
        width: '14px',
        height: '14px',
        opacity: 0.25,
        cursor: 'pointer'
    };
    var clearIcon = function clearIcon(fieldName) {
        return that.state[fieldName] && that.state[fieldName].length ? React.createElement(_icon2.default, {
            type: 'close-circle',
            onClick: function onClick() {
                return that.handleClearIconClick(fieldName);
            },
            style: clearIconStyle
        }) : null;
    };
    return React.createElement(
        'div',
        { className: 'price-monitor-setting' },
        React.createElement(
            'div',
            { className: 'Breadcrumb' },
            React.createElement(
                _breadcrumb2.default,
                null,
                React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u7CFB\u7EDF\u8BBE\u7F6E'
                ),
                React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u552E\u4EF7\u76D1\u63A7\u8BBE\u7F6E'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'content' },
            React.createElement(
                'div',
                { className: 'search-box' },
                React.createElement(
                    'div',
                    null,
                    '\u670D\u52A1\u5BA2\u6237\u6570\u91CF\uFF1A',
                    totalElements
                ),
                React.createElement(
                    'div',
                    { className: 'input-box' },
                    React.createElement(
                        'span',
                        null,
                        '\u516C\u53F8\u540D\u79F0:'
                    ),
                    React.createElement(_input2.default, { onChange: function onChange(e) {
                            return that.onChangeInput(e);
                        }, suffix: clearIcon('companyname'), style: { width: '200px' }, value: companyname }),
                    React.createElement(
                        _button2.default,
                        { onClick: function onClick() {
                                return that.getList(1);
                            } },
                        '\u67E5\u8BE2'
                    )
                )
            ),
            React.createElement(
                'ul',
                { className: 'items' },
                dataList.length ? dataList.map(function (item, index) {
                    var bmcid = item.bmcid,
                        companyname = item.companyname,
                        brand_count = item.brand_count,
                        keyword_count = item.keyword_count,
                        cat_count = item.cat_count;

                    return React.createElement(
                        'li',
                        { className: 'item', key: index },
                        React.createElement(
                            'div',
                            { className: 'comp-box' },
                            React.createElement(
                                _avatar2.default,
                                {
                                    style: { backgroundColor: '#108CEE', margin: '0px 20px' },
                                    size: 40 },
                                companyname.substr(0, 1)
                            ),
                            React.createElement(
                                'div',
                                { style: { paddingTop: '14px' } },
                                React.createElement(
                                    'a',
                                    { href: '/index.html#/ProductClass/' + bmcid },
                                    React.createElement(
                                        'span',
                                        { className: 'text-overflow' },
                                        companyname
                                    )
                                ),
                                React.createElement(
                                    'p',
                                    { style: { paddingTop: '13px', fontSize: '13px' } },
                                    '\u5F85\u8BBE\u7F6E\u4EA7\u54C1\u4FE1\u606F\uFF1A',
                                    Number(brand_count)
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'footer-buts' },
                            React.createElement(
                                'span',
                                null,
                                '\u76D1\u63A7\u4EA7\u54C1\u5206\u7C7B\uFF1A',
                                Number(keyword_count)
                            ),
                            React.createElement(_divider2.default, { type: 'vertical' }),
                            React.createElement(
                                'span',
                                null,
                                '\u76D1\u63A7\u4EA7\u54C1\u6570\uFF1A',
                                Number(cat_count)
                            )
                        )
                    );
                }) : React.createElement(_alert2.default, { style: (_ref = { textAlign: 'center' }, _defineProperty(_ref, 'textAlign', 'center'), _defineProperty(_ref, 'width', '100%'), _defineProperty(_ref, 'height', '40px'), _defineProperty(_ref, 'marginTop', '20px'), _ref), message: '\u6682\u65E0\u6570\u636E', type: 'error' })
            ),
            React.createElement(
                'div',
                { style: { textAlign: 'center' }, className: 'addbut' },
                pageNum * pageSize >= totalElements ? null : React.createElement(
                    _button2.default,
                    { onClick: function onClick() {
                            return that.getMore();
                        } },
                    '\u52A0\u8F7D\u66F4\u591A...'
                )
            )
        ),
        React.createElement(_Copyright2.default, { clazzName: 'copyright' })
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=133_5c731804e742e5c5bbe4.js.map