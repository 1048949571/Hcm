(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

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

/***/ "./app/widget/components/platform.js":
/*!*******************************************!*\
  !*** ./app/widget/components/platform.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (name) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { width: '20px', height: '20px' };

    var data = {
        "TB": React.createElement('img', { style: style, src: '../../../../img/platform/1_taobao.svg' }),
        "TM": React.createElement('img', { style: style, src: '../../../../img/platform/2_tall.svg' }),
        "JD": React.createElement('img', { style: style, src: '../../../../img/platform/3_jd.svg' }),
        "SN": React.createElement('img', { style: style, src: '../../../../img/platform/4_suning.svg' }),
        "GM": React.createElement('img', { style: style, src: '../../../../img/platform/5_gome.svg' }),
        "PDD": React.createElement('img', { style: style, src: '../../../../img/platform/6_pinduoduo.svg' }),
        "AMAZON": React.createElement('img', { style: style, src: '../../../../img/platform/7_a.svg' }),
        "WPH": React.createElement('img', { style: style, src: '../../../../img/platform/8_weipinhui.svg' }),
        "1688": React.createElement('img', { style: style, src: '../../../../img/platform/9_1688.svg' }),
        "SMT": React.createElement('img', { style: style, src: '../../../../img/platform/10_sumaitong.svg' }),
        "DD": React.createElement('img', { style: style, src: '../../../../img/platform/11_dangdang.svg' }),
        "ALST": React.createElement('img', { style: style, src: '../../../../img/platform/12_lingshoutong.svg' }),
        "1HD": React.createElement('img', { style: style, src: '../../../../img/platform/13_1haodian.svg' }),
        "YJWD": React.createElement('img', { style: style, src: '../../../../img/platform/14_yunji.svg' }),
        "YLW": React.createElement('img', { style: style, src: '../../../../img/platform/15_youle.svg' }),
        "XY": React.createElement('img', { style: style, src: '../../../../img/platform/16_xainyu.svg' }),
        "WECD": React.createElement('img', { style: style, src: '../../../../img/platform/17_weixin.svg' }),
        "MGJ": React.createElement('img', { style: style, src: '../../../../img/platform/18_mogujie.svg' }),
        "JMYP": React.createElement('img', { style: style, src: '../../../../img/platform/19_jumei.svg' }),
        "CCJ": React.createElement('img', { style: style, src: '../../../../img/platform/20_chuchujie.svg' }),
        "BBWG": React.createElement('img', { style: style, src: '../../../../img/platform/21_beibeiwang.svg' }),
        "platform_OTHER": React.createElement('img', { style: style, src: '../../../../img/platform/22_qita.svg' })
    };
    return data[name];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/index/Brand/BrandMerchandise/BrandMerchandise.less":
/*!***********************************************************************!*\
  !*** ./app/widget/index/Brand/BrandMerchandise/BrandMerchandise.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/BrandMerchandise/tpl.js":
/*!********************************************************!*\
  !*** ./app/widget/index/Brand/BrandMerchandise/tpl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _carousel = __webpack_require__(/*! antd/es/carousel */ "./node_modules/_antd@3.10.1@antd/es/carousel/index.js");

var _carousel2 = _interopRequireDefault(_carousel);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@3.10.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/carousel/style/css */ "./node_modules/_antd@3.10.1@antd/es/carousel/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! ./BrandMerchandise.less */ "./app/widget/index/Brand/BrandMerchandise/BrandMerchandise.less");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _platform = __webpack_require__(/*! ../../../components/platform */ "./app/widget/components/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tpl = (0, _That2.default)(function (that) {
    var CardStylex = {
        cursor: "pointer",
        border: "1px solid dodgerblue"
    };
    var CardStyles = {
        cursor: "pointer",
        border: "1px solid #fff"
    };
    var style = ["rgba(24,144,255,1)", "rgba(55,203,203,1)", "rgba(250,211,55,1)", "rgba(242,99,123,1)", "rgba(151,95,228,1)", "#ccc"];
    // console.log(that.state.shopGroupData)
    return React.createElement(
        'div',
        { className: 'BrandMerchandise' },
        React.createElement(
            'div',
            { className: 'content' },
            React.createElement(
                'div',
                { className: 'contentBox' },
                React.createElement(
                    _card2.default,
                    { bodyStyle: { padding: '0px', display: 'flex', flexGrow: '1' }, title: '\u54C1\u724C\u5546\u54C1\u5E93\u4FE1\u606F\u6982\u89C8', bordered: false, style: { width: '100%', display: 'flex', height: "100%", flexDirection: 'column', color: "#333" } },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(_icon2.default, { type: 'left', theme: 'outlined', style: { fontSize: '30px', lineHeight: "344px", margin: "0px 5px", color: "#D9D9D9" }, onClick: that.handlePrev })
                    ),
                    that.state.JingPinPTx != "" ? React.createElement(
                        _carousel2.default,
                        { style: { width: "95%", height: "320px" }, dots: false, beforeChange: that.beforeChange, afterChange: that.onChange, ref: that.refx },
                        React.createElement(
                            'div',
                            { style: { height: "320px", marginTop: "10px" } },
                            React.createElement(
                                _row2.default,
                                { gutter: 16 },
                                React.createElement(
                                    _col2.default,
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginLeft: "20px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[0].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[0].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "150px", marginLeft: "30%" } },
                                                ' ',
                                                (0, _platform2.default)('TB', { float: "left", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" } },
                                                    that.state.JingPinPTx[0].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5546\u54C1\u6570  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[0].my_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[0].my_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[0].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[0].my_brand.itemcount / that.state.JingPinPTx[0].my_brand.shopcount) : 0,
                                                '\u4E2A/\u5E97'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    _col2.default,
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", margin: "0 30px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[3].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[3].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "150px", marginLeft: "30%" } },
                                                (0, _platform2.default)('JD', { float: "left", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" } },
                                                    that.state.JingPinPTx[3].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5546\u54C1\u6570  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[3].my_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[3].my_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[3].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[3].my_brand.itemcount / that.state.JingPinPTx[3].my_brand.shopcount) : 0,
                                                '\u4E2A/\u5E97'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    _col2.default,
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginRight: "30px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[4].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[4].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "150px", marginLeft: "30%" } },
                                                ' ',
                                                (0, _platform2.default)('PDD', { float: "left", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" } },
                                                    that.state.JingPinPTx[4].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5546\u54C1\u6570  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[4].my_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[4].my_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[4].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[4].my_brand.itemcount / that.state.JingPinPTx[4].my_brand.shopcount) : 0,
                                                '\u4E2A/\u5E97'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { style: { height: "320px", marginTop: "10px" } },
                            React.createElement(
                                _row2.default,
                                { gutter: 16 },
                                React.createElement(
                                    _col2.default,
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginLeft: "20px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[1].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[1].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "150px", marginLeft: "30%" } },
                                                ' ',
                                                (0, _platform2.default)('1688', { float: "left", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" } },
                                                    that.state.JingPinPTx[1].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5546\u54C1\u6570  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[1].my_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[1].my_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[1].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[1].my_brand.itemcount / that.state.JingPinPTx[1].my_brand.shopcount) : 0,
                                                '\u4E2A/\u5E97'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    _col2.default,
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", margin: "0 30px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[5].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[5].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "150px", marginLeft: "30%" } },
                                                (0, _platform2.default)('SN', { float: "left", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" } },
                                                    that.state.JingPinPTx[5].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5546\u54C1\u6570  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[5].my_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[5].my_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[5].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[5].my_brand.itemcount / that.state.JingPinPTx[5].my_brand.shopcount) : 0,
                                                '\u4E2A/\u5E97'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    _col2.default,
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginRight: "30px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[2].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[2].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "150px", marginLeft: "30%" } },
                                                ' ',
                                                (0, _platform2.default)('DD', { float: "left", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" } },
                                                    that.state.JingPinPTx[2].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5546\u54C1\u6570  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[2].my_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[2].my_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[2].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[2].my_brand.itemcount / that.state.JingPinPTx[2].my_brand.shopcount) : 0,
                                                '\u4E2A/\u5E97'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { style: { height: "320px", marginTop: "10px" } },
                            React.createElement(
                                _row2.default,
                                { gutter: 16 },
                                React.createElement(
                                    _col2.default,
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginLeft: "20px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[7].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[7].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "150px", marginLeft: "30%" } },
                                                ' ',
                                                (0, _platform2.default)('XY', { float: "left", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" } },
                                                    that.state.JingPinPTx[7].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5546\u54C1\u6570  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[7].my_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[7].my_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[7].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[7].my_brand.itemcount / that.state.JingPinPTx[7].my_brand.shopcount) : 0,
                                                '\u4E2A/\u5E97'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    _col2.default,
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", margin: "0 30px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[6].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[6].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "150px", marginLeft: "30%" } },
                                                (0, _platform2.default)('WPH', { float: "left", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" } },
                                                    that.state.JingPinPTx[6].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5546\u54C1\u6570  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[6].my_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[6].my_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[6].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[6].my_brand.itemcount / that.state.JingPinPTx[6].my_brand.shopcount) : 0,
                                                '\u4E2A/\u5E97'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(_col2.default, { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginRight: "30px" } })
                            )
                        )
                    ) : React.createElement(
                        _carousel2.default,
                        { style: { width: "95%", height: "320px" }, dots: false, beforeChange: that.beforeChange, afterChange: that.onChange, ref: that.refx },
                        React.createElement('div', { style: { height: "320px", marginTop: "10px" } })
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement(_icon2.default, { type: 'right', theme: 'outlined', style: { fontSize: '30px', lineHeight: "344px", margin: "0px 5px", color: "#D9D9D9" }, onClick: that.handleNext })
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'contentBoxs', style: { width: "40%" } },
                React.createElement(
                    _card2.default,
                    { bodyStyle: { padding: '0px', display: 'flex', flexGrow: '1' }, title: '\u6388\u6743\u3001\u767D\u540D\u5355\u5E97\u94FA\u5360\u6BD4', bordered: false, style: { width: '100%', display: 'flex', flex: "1", height: "100%", flexDirection: 'column', color: "#333" } },
                    React.createElement(
                        'div',
                        { style: { width: "100%", marginTop: "10px" } },
                        React.createElement(
                            'div',
                            { style: { height: "200px" } },
                            React.createElement(
                                'div',
                                { className: 'echarts' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'h4',
                                        null,
                                        that.state.shopGroupData != "" && that.state.shopGroupData != undefined ? that.state.shopGroupData.authlist[1].value : 0
                                    ),
                                    React.createElement(
                                        'h5',
                                        null,
                                        '\u6388\u6743\u5E97\u94FA'
                                    )
                                )
                            ),
                            React.createElement('div', { id: 'echartsxx', style: { background: "#fff" } })
                        ),
                        React.createElement(
                            'div',
                            { style: { height: "200px" } },
                            React.createElement(
                                'div',
                                { className: 'echartsb' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'h4',
                                        null,
                                        that.state.shopGroupData != "" && that.state.shopGroupData != undefined ? that.state.shopGroupData.whitelist[1].value : 0
                                    ),
                                    React.createElement(
                                        'h5',
                                        null,
                                        '\u767D\u540D\u5355\u5E97\u94FA'
                                    )
                                )
                            ),
                            React.createElement('div', { id: 'echartsxxb', style: { background: "#fff" } })
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'contentBoxs', style: { width: "57%", marginLeft: "30px", overflowX: "scroll" } },
                React.createElement(
                    _card2.default,
                    { bodyStyle: { padding: '0px', display: 'flex', flexGrow: '1', width: "1000px" }, title: '\u4EF7\u683C\u533A\u95F4\u5185\u5546\u54C1\u6570\u91CF\u53CA\u5360\u6BD4\u5206\u5E03', bordered: false, style: { width: '100%', display: 'flex', flex: "1", height: "100%", flexDirection: 'column', color: "#333" } },
                    React.createElement('div', { id: 'container', style: { width: "1000px" } })
                )
            ),
            React.createElement(
                'div',
                { className: 'contentBoxs', style: { width: "45%", height: "690px" } },
                React.createElement(
                    _card2.default,
                    { bodyStyle: { padding: '0px', display: 'flex', flexGrow: '1' }, title: '\u5546\u54C1\u6240\u5728\u5730\u6392\u884C', bordered: false, style: { width: '100%', display: 'flex', flex: "1", height: "100%", flexDirection: 'column', color: "#333" } },
                    React.createElement(_table2.default, { pagination: false, style: { width: "100%", marginTop: "10px" }, columns: that.state.columns, dataSource: that.state.Tabledata }),
                    React.createElement(_pagination2.default, { pageSize: that.state.pageSize, current: that.state.pageNo, total: that.state.totalNum, onChange: that.changePagination, onShowSizeChange: that.onPaginationSize })
                )
            ),
            React.createElement(
                'div',
                { className: 'contentBoxs', style: { width: "52%", height: "690px", marginLeft: "30px" } },
                React.createElement(
                    _card2.default,
                    { bodyStyle: { padding: '0px', display: 'flex', flexGrow: '1' }, title: '\u5E97\u94FA\u7B49\u7EA7\u5360\u6BD4', bordered: false, style: { width: '100%', display: 'flex', flex: "1", height: "100%", flexDirection: 'column', color: "#333" } },
                    React.createElement(
                        'div',
                        { style: { width: "70%", marginTop: "50px" } },
                        React.createElement('div', { id: 'carvarCard', style: { background: "#fff" } })
                    ),
                    React.createElement(
                        'div',
                        { style: { width: "30%", marginTop: "50px" } },
                        that.state.shopLevelZhanbi ? React.createElement(
                            'ul',
                            { style: { marginTop: "50%" } },
                            that.state.shopLevelZhanbi.map(function (v, i) {
                                return React.createElement(
                                    'li',
                                    { key: i, style: { display: "flex", marginTop: "10px" } },
                                    React.createElement(
                                        'span',
                                        { style: { flex: "1" } },
                                        React.createElement('span', { style: { display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", marginRight: "10px", background: style[i] } }),
                                        v.name
                                    ),
                                    React.createElement(
                                        'span',
                                        { style: { flex: "1" } },
                                        v.value,
                                        '\uFF08',
                                        (v.total != 0 ? v.value / v.total * 100 : v.total).toFixed(2),
                                        '%\uFF09'
                                    )
                                );
                            })
                        ) : React.createElement(
                            'ul',
                            { style: { marginTop: "50%" } },
                            React.createElement(
                                'li',
                                { style: { display: "flex", marginTop: "10px" } },
                                React.createElement(
                                    'span',
                                    { style: { flex: "1" } },
                                    React.createElement('span', { style: { display: "inline-block", width: "10px", height: "10px", background: "rgba(24,144,255,1)", borderRadius: "50%", marginRight: "10px" } }),
                                    '\u5929\u732B'
                                ),
                                React.createElement(
                                    'span',
                                    { style: { flex: "1" } },
                                    '0\uFF080%\uFF09'
                                )
                            ),
                            React.createElement(
                                'li',
                                { style: { display: "flex", marginTop: "10px" } },
                                React.createElement(
                                    'span',
                                    { style: { flex: "1" } },
                                    React.createElement('span', { style: { display: "inline-block", width: "10px", height: "10px", background: "rgba(55,203,203,1)", borderRadius: "50%", marginRight: "10px" } }),
                                    '\u9EC4\u51A0\u7EA7'
                                ),
                                React.createElement(
                                    'span',
                                    { style: { flex: "1" } },
                                    '0\uFF080%\uFF09'
                                )
                            ),
                            React.createElement(
                                'li',
                                { style: { display: "flex", marginTop: "10px" } },
                                React.createElement(
                                    'span',
                                    { style: { flex: "1" } },
                                    React.createElement('span', { style: { display: "inline-block", width: "10px", height: "10px", background: "rgba(250,211,55,1)", borderRadius: "50%", marginRight: "10px" } }),
                                    '\u84DD\u51A0\u7EA7'
                                ),
                                React.createElement(
                                    'span',
                                    { style: { flex: "1" } },
                                    '0\uFF080%\uFF09'
                                )
                            ),
                            React.createElement(
                                'li',
                                { style: { display: "flex", marginTop: "10px" } },
                                React.createElement(
                                    'span',
                                    { style: { flex: "1" } },
                                    React.createElement('span', { style: { display: "inline-block", width: "10px", height: "10px", background: "rgba(242,99,123,1)", borderRadius: "50%", marginRight: "10px" } }),
                                    '\u94BB\u7EA7'
                                ),
                                React.createElement(
                                    'span',
                                    { style: { flex: "1" } },
                                    '0\uFF080%\uFF09'
                                )
                            ),
                            React.createElement(
                                'li',
                                { style: { display: "flex", marginTop: "10px" } },
                                React.createElement(
                                    'span',
                                    { style: { flex: "1" } },
                                    React.createElement('span', { style: { display: "inline-block", width: "10px", height: "10px", background: "rgba(151,95,228,1)", borderRadius: "50%", marginRight: "10px" } }),
                                    '\u5FC3\u7EA7'
                                ),
                                React.createElement(
                                    'span',
                                    { style: { flex: "1" } },
                                    '0\uFF080%\uFF09'
                                )
                            )
                        )
                    )
                )
            )
        ),
        React.createElement(_Copyright2.default, { clazzName: 'copyright' })
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js":
/*!************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/col/style/css.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../grid/style/index.css */ "./node_modules/_antd@3.10.1@antd/es/grid/style/index.css");
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/grid/style/index.css":
/*!****************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/grid/style/index.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js":
/*!************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/row/style/css.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../grid/style/index.css */ "./node_modules/_antd@3.10.1@antd/es/grid/style/index.css");
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

}]);
//# sourceMappingURL=76_4dd7d0394d81d3a3fc63.js.map