(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

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

/***/ "./app/widget/index/1688/1688AppealDetails/OneSIXAppealDetails.less":
/*!**************************************************************************!*\
  !*** ./app/widget/index/1688/1688AppealDetails/OneSIXAppealDetails.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/1688/1688AppealDetails/tpl.js":
/*!********************************************************!*\
  !*** ./app/widget/index/1688/1688AppealDetails/tpl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _timeline = __webpack_require__(/*! antd/es/timeline */ "./node_modules/_antd@3.10.1@antd/es/timeline/index.js");

var _timeline2 = _interopRequireDefault(_timeline);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

__webpack_require__(/*! antd/es/timeline/style/css */ "./node_modules/_antd@3.10.1@antd/es/timeline/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

__webpack_require__(/*! ./OneSIXAppealDetails.less */ "./app/widget/index/1688/1688AppealDetails/OneSIXAppealDetails.less");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tpl = (0, _That2.default)(function (that) {
    return React.createElement(
        'div',
        { className: 'OneSIXAppealDetails' },
        React.createElement(
            'div',
            { className: 'Breadcrumb' },
            React.createElement(
                _breadcrumb2.default,
                null,
                React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u6295\u8BC9\u67E5\u8BE2'
                ),
                React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    React.createElement(
                        'a',
                        { href: '/index.html#/OneSIXInquiries', target: '_blank' },
                        '1688\u6295\u8BC9\u67E5\u8BE2'
                    )
                ),
                React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u6848\u4EF6\u8BE6\u60C5'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'content' },
            React.createElement(
                'div',
                { className: 'contentTop' },
                React.createElement(
                    'div',
                    { className: 'contentTopDiv' },
                    React.createElement(
                        'h4',
                        null,
                        '\u57FA\u7840\u4FE1\u606F'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'contentTopDiv' },
                    React.createElement(
                        'div',
                        null,
                        '\u6295\u8BC9\u53D7\u7406\u65E5\u671F: ',
                        that.state.basicInfo.投诉受理日期
                    ),
                    React.createElement(
                        'div',
                        null,
                        '\u6295\u8BC9\u5355\u53F7:  ',
                        that.state.basicInfo.投诉单号
                    ),
                    React.createElement(
                        'div',
                        null,
                        '\u77E5\u8BC6\u4EA7\u6743\u7F16\u53F7:  ',
                        that.state.basicInfo.知识产权编号
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'contentTopDiv' },
                    React.createElement(
                        'div',
                        null,
                        '\u77E5\u8BC6\u4EA7\u6743\u7C7B\u578B: ',
                        that.state.basicInfo.知识产权类型
                    ),
                    React.createElement(
                        'div',
                        null,
                        '\u4FE1\u606F\u6765\u6E90: ',
                        that.state.basicInfo.信息来源
                    ),
                    React.createElement(
                        'div',
                        null,
                        '\u6295\u8BC9\u94FE\u63A5: ',
                        React.createElement(
                            'a',
                            { style: { width: "200px", overflow: "hidden", display: "inline-block" }, href: that.state.basicInfo.链接地址 },
                            that.state.basicInfo.链接地址
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'contentTopDiv' },
                    React.createElement(
                        'div',
                        null,
                        '\u6295\u8BC9\u7406\u7531: ',
                        that.state.basicInfo.投诉理由
                    ),
                    React.createElement(
                        'div',
                        null,
                        '\u6295\u8BC9\u8BF4\u660E\uFF1A',
                        that.state.basicInfo.投诉说明
                    ),
                    React.createElement('div', null)
                ),
                React.createElement(
                    'div',
                    { className: 'contentTopDiv' },
                    React.createElement(
                        'div',
                        null,
                        '\u9644\u8FD1\uFF1A',
                        that.state.basicInfo.附近 ? React.createElement(
                            'span',
                            null,
                            that.state.basicInfo.附近.map(function (v, i) {
                                return React.createElement('img', { key: i, src: v, alt: v, style: { width: "96px", height: "96px" } });
                            })
                        ) : null
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'contentTopDiv' },
                    React.createElement(
                        'div',
                        null,
                        '\u6700\u65B0\u8FDB\u5C55\uFF1A',
                        that.state.basicInfo.最新进展 ? that.state.basicInfo.最新进展.ajzt : null,
                        ' : ',
                        that.state.basicInfo.最新进展 ? that.state.basicInfo.最新进展.xylx : null
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'contentTop' },
                React.createElement(
                    'div',
                    { className: 'contentTopDiv' },
                    React.createElement(
                        'h4',
                        null,
                        '\u88AB\u6295\u8BC9\u65B9\u4FE1\u606F'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'contentTopDiv' },
                    React.createElement(
                        'div',
                        null,
                        '\u516C\u53F8/\u5546\u94FA: ',
                        that.state.defendantInfo.companyname
                    ),
                    React.createElement(
                        'div',
                        null,
                        '\u5546\u94FA\u53F7\uFF1A ',
                        that.state.defendantInfo.商铺号
                    ),
                    React.createElement('div', null)
                )
            ),
            React.createElement(
                'div',
                { className: 'contentCon' },
                React.createElement(
                    'div',
                    { className: 'contentTopDiv' },
                    React.createElement(
                        'h4',
                        null,
                        '\u5386\u53F2\u8BB0\u5F55'
                    )
                ),
                that.state.history_lis ? React.createElement(
                    _timeline2.default,
                    { style: { marginTop: "10px" } },
                    that.state.history_lis.map(function (v, i) {
                        return React.createElement(
                            _timeline2.default.Item,
                            { key: i },
                            React.createElement(
                                'h4',
                                null,
                                v.时间,
                                ' \u64CD\u4F5C\u4EBA\uFF1A',
                                v.操作人,
                                ' \u64CD\u4F5C\u7C7B\u578B\uFF1A',
                                v.操作类型
                            ),
                            React.createElement(
                                'p',
                                null,
                                '\u5907\u6CE8:',
                                v.备注
                            )
                        );
                    })
                ) : null
            )
        ),
        React.createElement(_Copyright2.default, { clazzName: 'copyright' })
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=57_cfeb955033693c056152.js.map