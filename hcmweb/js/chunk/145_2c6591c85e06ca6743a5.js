(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[145],{

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

/***/ "./app/widget/index/Taobao/TaoBaoAppealDetails/TaoBaoAppealDetails.less":
/*!******************************************************************************!*\
  !*** ./app/widget/index/Taobao/TaoBaoAppealDetails/TaoBaoAppealDetails.less ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Taobao/TaoBaoAppealDetails/tpl.js":
/*!************************************************************!*\
  !*** ./app/widget/index/Taobao/TaoBaoAppealDetails/tpl.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _timeline = __webpack_require__(/*! antd/es/timeline */ "./node_modules/_antd@3.10.1@antd/es/timeline/index.js");

var _timeline2 = _interopRequireDefault(_timeline);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(/*! antd/es/timeline/style/css */ "./node_modules/_antd@3.10.1@antd/es/timeline/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

__webpack_require__(/*! ./TaoBaoAppealDetails.less */ "./app/widget/index/Taobao/TaoBaoAppealDetails/TaoBaoAppealDetails.less");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tpl = (0, _That2.default)(function (that) {
    return React.createElement(
        'div',
        { className: 'TaoBaoAppealDetails' },
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
                        { href: '/index.html#/TaobaoInquiries', target: '_blank' },
                        '\u6DD8\u5B9D\u6295\u8BC9\u67E5\u8BE2'
                    )
                ),
                React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u6295\u8BC9\u8BE6\u60C5'
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
                        '\u6295\u8BC9\u57FA\u7840\u4FE1\u606F'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'contentTopDiv' },
                    React.createElement(
                        'div',
                        null,
                        '\u6295\u8BC9\u4EFB\u52A1\u7F16\u53F7: ',
                        that.state.detail_taobao.id
                    ),
                    React.createElement(
                        'div',
                        null,
                        '\u6295\u8BC9\u5355\u53F7:',
                        that.state.detail_taobao.batchId
                    ),
                    React.createElement(
                        'div',
                        null,
                        '\u6295\u8BC9\u65F6\u95F4:  ',
                        moment(that.state.detail_taobao.gmtCreate).format('YYYY-MM-DD HH:mm:ss')
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'contentTopDiv' },
                    React.createElement(
                        'div',
                        null,
                        '\u77E5\u8BC6\u4EA7\u6743\u540D\u79F0: ',
                        that.state.detail_taobao.iprName
                    ),
                    React.createElement(
                        'div',
                        null,
                        '\u5E73\u53F0:',
                        that.state.detail_taobao.entityPlatform
                    ),
                    React.createElement(
                        'div',
                        null,
                        '\u6295\u8BC9\u94FE\u63A5\u7C7B\u578B:  ',
                        that.state.detail_taobao.entityType
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'contentTopDiv' },
                    React.createElement(
                        'div',
                        null,
                        '\u88AB\u6295\u8BC9\u5546\u5BB6: ',
                        that.state.detail_taobao.entityOwnerName
                    ),
                    React.createElement(
                        'div',
                        null,
                        '\u6295\u8BC9\u94FE\u63A5\uFF1A',
                        React.createElement(
                            'a',
                            { href: that.state.detail_taobao.entityContent },
                            that.state.detail_taobao.entityContent
                        )
                    ),
                    React.createElement('div', null)
                ),
                React.createElement(
                    'div',
                    { className: 'contentTopDiv', style: { float: "left", width: "100%", marginBottom: "10px" } },
                    React.createElement(
                        'div',
                        null,
                        that.state.detail_taobao.complaintReasonExtendEntities ? React.createElement(
                            'span',
                            { style: { float: "left" } },
                            '\u6295\u8BC9\u7406\u7531\uFF1A',
                            that.state.detail_taobao.complaintReasonExtendEntities.length > 1 ? React.createElement(
                                'span',
                                { style: { marginLeft: "10px", width: "50%", display: "inline-block", overflow: "hidden" } },
                                that.state.detail_taobao.complaintReasonExtendEntities[1].value
                            ) : React.createElement(
                                'span',
                                { style: { marginLeft: "10px", width: "50%", display: "inline-block", overflow: "hidden" } },
                                that.state.detail_taobao.complaintReasonExtendEntities[0].value
                            ),
                            ' '
                        ) : React.createElement(
                            'span',
                            { style: { float: "left" } },
                            '\u6295\u8BC9\u7406\u7531\uFF1A'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'contentTopDiv' },
                    React.createElement(
                        'div',
                        null,
                        '\u4E3E\u8BC1\u8BC1\u660E\uFF1A',
                        that.state.detail_taobao.proofFile ? React.createElement(
                            'span',
                            { style: { marginLeft: "10px", width: "50%", display: "inline-block" } },
                            that.state.detail_taobao.proofFile.data.map(function (v, i) {
                                return React.createElement(
                                    'a',
                                    { key: i, href: v.fileUrl },
                                    v.fileName
                                );
                            })
                        ) : null
                    )
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
                        '\u5904\u7406\u8BB0\u5F55'
                    )
                ),
                that.state.detail_taobao.log && _typeof(that.state.detail_taobao.log) == "object" ? React.createElement(
                    _timeline2.default,
                    { style: { marginTop: "20px", marginLeft: "20px" } },
                    that.state.detail_taobao.log.map(function (v, i) {
                        return React.createElement(
                            _timeline2.default.Item,
                            { key: i },
                            moment(v.gmtCreate).format('YYYY-MM-DD HH:mm:ss'),
                            ' ',
                            v.type,
                            ' ',
                            v.type == "卖家提交申诉" ? React.createElement(
                                'a',
                                { href: '/index.html?#/TaoBaocomplaints/' + that.state.batchid + '/' + that.state.ID + '/' + that.state.accountId + '/' + that.state.ID, target: '_blank' },
                                '\u67E5\u770B\u7533\u8BC9\u94FE\u63A5'
                            ) : null
                        );
                    })
                ) : that.state.detail_taobao.log && typeof that.state.detail_taobao.log == "string" ? React.createElement(
                    _timeline2.default,
                    { style: { marginTop: "20px", marginLeft: "20px" } },
                    JSON.parse(that.state.detail_taobao.log).map(function (v, i) {
                        return React.createElement(
                            _timeline2.default.Item,
                            { key: i },
                            moment(v.gmtCreate).format('YYYY-MM-DD HH:mm:ss'),
                            ' ',
                            v.type,
                            ' ',
                            v.type == "卖家提交申诉" ? React.createElement(
                                'a',
                                { href: '/index.html?#/TaoBaocomplaints/' + that.state.batchid + '/' + that.state.ID + '/' + that.state.accountId + '/' + that.state.ID, target: '_blank' },
                                '\u67E5\u770B\u7533\u8BC9\u94FE\u63A5'
                            ) : null
                        );
                    })
                ) : null
            )
        ),
        React.createElement(_Copyright2.default, { clazzName: 'copyright' })
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=145_2c6591c85e06ca6743a5.js.map