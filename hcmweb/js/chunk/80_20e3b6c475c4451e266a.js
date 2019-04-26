(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

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

/***/ "./app/widget/index/Brand/CommodityStore/CommodityStore.less":
/*!*******************************************************************!*\
  !*** ./app/widget/index/Brand/CommodityStore/CommodityStore.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/CommodityStore/tpl.js":
/*!******************************************************!*\
  !*** ./app/widget/index/Brand/CommodityStore/tpl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

__webpack_require__(/*! antd/es/carousel/style/css */ "./node_modules/_antd@3.10.1@antd/es/carousel/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! ./CommodityStore.less */ "./app/widget/index/Brand/CommodityStore/CommodityStore.less");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _platform = __webpack_require__(/*! ../../../components/platform */ "./app/widget/components/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tpl = (0, _That2.default)(function (that) {
    var styleSXx = {
        borderBottom: "2px solid #fff"
    };
    var styleSX = {
        color: "dodgerblue",
        borderBottom: "2px solid dodgerblue"
    };
    var CardStylex = {
        cursor: "pointer",
        border: "1px solid dodgerblue"
    };
    var CardStyles = {
        cursor: "pointer",
        border: "1px solid #fff"
    };
    return React.createElement(
        'div',
        { className: 'CommodityStore' },
        React.createElement(
            'div',
            { className: 'content' },
            React.createElement(
                'div',
                { className: 'contentBox' },
                that.state.jingPinBrandList ? React.createElement(
                    'ul',
                    null,
                    that.state.jingPinBrandList.map(function (v, i) {
                        return React.createElement(
                            'li',
                            { key: i, style: that.state.styleSX == v.bid ? styleSX : styleSXx, onClick: function onClick() {
                                    return that.JPList(v.bid);
                                } },
                            v.name
                        );
                    })
                ) : React.createElement(
                    'li',
                    null,
                    '\u8BF7\u8BBE\u7F6E\u7ADE\u54C1\u5546\u54C1\u540D\u79F0'
                )
            ),
            React.createElement(
                'div',
                { className: 'contentBox', style: { height: "400px" } },
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
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginLeft: "30px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[0].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[0].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "100%" } },
                                                ' ',
                                                (0, _platform2.default)('TB', { float: "left", marginLeft: "80px", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "10px" } },
                                                    that.state.JingPinPTx[0].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u6211\u7684\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[0].my_brand.shopcount
                                                ),
                                                ' ',
                                                that.state.JingPinPTx[0].my_brand.shopcount < that.state.JingPinPTx[0].jingpin_brand.shopcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null,
                                                '  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[0].my_brand.itemcount
                                                ),
                                                that.state.JingPinPTx[0].my_brand.itemcount < that.state.JingPinPTx[0].jingpin_brand.itemcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[0].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[0].my_brand.itemcount / that.state.JingPinPTx[0].my_brand.shopcount) : 0,
                                                    '\u4E2A/\u5E97'
                                                ),
                                                parseInt(that.state.JingPinPTx[0].my_brand.itemcount / that.state.JingPinPTx[0].my_brand.shopcount) < parseInt(that.state.JingPinPTx[0].jingpin_brand.itemcount / that.state.JingPinPTx[0].jingpin_brand.shopcount) ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDiv', style: { float: "left", width: "104px", textAlign: "center" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    { className: 'vs' },
                                                    'vs'
                                                )
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "12px" } },
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5546\u54C1\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u7ADE\u54C1\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[0].jingpin_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[0].jingpin_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[0].jingpin_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[0].jingpin_brand.itemcount / that.state.JingPinPTx[0].jingpin_brand.shopcount) : 0,
                                                '/\u4E2A\u5E97'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    _col2.default,
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", margin: "0 30px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[1].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[1].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "100%" } },
                                                (0, _platform2.default)('1688', { float: "left", marginLeft: "80px", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "10px" } },
                                                    that.state.JingPinPTx[1].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u6211\u7684\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[1].my_brand.shopcount
                                                ),
                                                ' ',
                                                that.state.JingPinPTx[1].my_brand.shopcount < that.state.JingPinPTx[1].jingpin_brand.shopcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null,
                                                '  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[1].my_brand.itemcount
                                                ),
                                                that.state.JingPinPTx[1].my_brand.itemcount < that.state.JingPinPTx[1].jingpin_brand.itemcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[1].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[1].my_brand.itemcount / that.state.JingPinPTx[1].my_brand.shopcount) : 0,
                                                    '\u4E2A/\u5E97'
                                                ),
                                                parseInt(that.state.JingPinPTx[1].my_brand.itemcount / that.state.JingPinPTx[1].my_brand.shopcount) < parseInt(that.state.JingPinPTx[1].jingpin_brand.itemcount / that.state.JingPinPTx[1].jingpin_brand.shopcount) ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDiv', style: { float: "left", width: "104px", textAlign: "center" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    { className: 'vs' },
                                                    'vs'
                                                )
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "12px" } },
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5546\u54C1\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u7ADE\u54C1\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[1].jingpin_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[1].jingpin_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[1].jingpin_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[1].jingpin_brand.itemcount / that.state.JingPinPTx[1].jingpin_brand.shopcount) : 0,
                                                '/\u4E2A\u5E97'
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
                                                { style: { width: "100%" } },
                                                ' ',
                                                (0, _platform2.default)('DD', { float: "left", marginLeft: "80px", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "10px" } },
                                                    that.state.JingPinPTx[2].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u6211\u7684\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[2].my_brand.shopcount
                                                ),
                                                ' ',
                                                that.state.JingPinPTx[2].my_brand.shopcount < that.state.JingPinPTx[2].jingpin_brand.shopcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null,
                                                '  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[2].my_brand.itemcount
                                                ),
                                                that.state.JingPinPTx[2].my_brand.itemcount < that.state.JingPinPTx[2].jingpin_brand.itemcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[2].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[2].my_brand.itemcount / that.state.JingPinPTx[2].my_brand.shopcount) : 0,
                                                    '\u4E2A/\u5E97'
                                                ),
                                                parseInt(that.state.JingPinPTx[2].my_brand.itemcount / that.state.JingPinPTx[2].my_brand.shopcount) < parseInt(that.state.JingPinPTx[2].jingpin_brand.itemcount / that.state.JingPinPTx[2].jingpin_brand.shopcount) ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDiv', style: { float: "left", width: "104px", textAlign: "center" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    { className: 'vs' },
                                                    'vs'
                                                )
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "12px" } },
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5546\u54C1\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u7ADE\u54C1\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[2].jingpin_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[2].jingpin_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[2].jingpin_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[2].jingpin_brand.itemcount / that.state.JingPinPTx[2].jingpin_brand.shopcount) : 0,
                                                '/\u4E2A\u5E97'
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
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginLeft: "30px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[3].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[3].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "100%" } },
                                                ' ',
                                                (0, _platform2.default)('JD', { float: "left", marginLeft: "80px", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "10px" } },
                                                    that.state.JingPinPTx[3].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u6211\u7684\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[3].my_brand.shopcount
                                                ),
                                                ' ',
                                                that.state.JingPinPTx[3].my_brand.shopcount < that.state.JingPinPTx[3].jingpin_brand.shopcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null,
                                                '  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[3].my_brand.itemcount
                                                ),
                                                that.state.JingPinPTx[3].my_brand.itemcount < that.state.JingPinPTx[3].jingpin_brand.itemcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[3].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[3].my_brand.itemcount / that.state.JingPinPTx[3].my_brand.shopcount) : 0,
                                                    '\u4E2A/\u5E97'
                                                ),
                                                parseInt(that.state.JingPinPTx[3].my_brand.itemcount / that.state.JingPinPTx[3].my_brand.shopcount) < parseInt(that.state.JingPinPTx[3].jingpin_brand.itemcount / that.state.JingPinPTx[3].jingpin_brand.shopcount) ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDiv', style: { float: "left", width: "104px", textAlign: "center" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    { className: 'vs' },
                                                    'vs'
                                                )
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "12px" } },
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5546\u54C1\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u7ADE\u54C1\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[3].jingpin_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[3].jingpin_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[3].jingpin_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[3].jingpin_brand.itemcount / that.state.JingPinPTx[3].jingpin_brand.shopcount) : 0,
                                                '/\u4E2A\u5E97'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    _col2.default,
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", margin: "0 30px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[4].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[4].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "100%" } },
                                                ' ',
                                                (0, _platform2.default)('PDD', { float: "left", marginLeft: "80px", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "10px" } },
                                                    that.state.JingPinPTx[4].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u6211\u7684\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[4].my_brand.shopcount
                                                ),
                                                ' ',
                                                that.state.JingPinPTx[4].my_brand.shopcount < that.state.JingPinPTx[4].jingpin_brand.shopcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null,
                                                '  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[4].my_brand.itemcount
                                                ),
                                                that.state.JingPinPTx[4].my_brand.itemcount < that.state.JingPinPTx[4].jingpin_brand.itemcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[4].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[4].my_brand.itemcount / that.state.JingPinPTx[4].my_brand.shopcount) : 0,
                                                    '\u4E2A/\u5E97'
                                                ),
                                                parseInt(that.state.JingPinPTx[4].my_brand.itemcount / that.state.JingPinPTx[4].my_brand.shopcount) < parseInt(that.state.JingPinPTx[4].jingpin_brand.itemcount / that.state.JingPinPTx[4].jingpin_brand.shopcount) ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDiv', style: { float: "left", width: "104px", textAlign: "center" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    { className: 'vs' },
                                                    'vs'
                                                )
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "12px" } },
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5546\u54C1\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u7ADE\u54C1\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[4].jingpin_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[4].jingpin_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[4].jingpin_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[4].jingpin_brand.itemcount / that.state.JingPinPTx[4].jingpin_brand.shopcount) : 0,
                                                '/\u4E2A\u5E97'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    _col2.default,
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginRight: "30px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[5].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[5].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "100%" } },
                                                ' ',
                                                (0, _platform2.default)('SN', { float: "left", marginLeft: "80px", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "10px" } },
                                                    that.state.JingPinPTx[5].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u6211\u7684\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[5].my_brand.shopcount
                                                ),
                                                ' ',
                                                that.state.JingPinPTx[5].my_brand.shopcount < that.state.JingPinPTx[5].jingpin_brand.shopcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null,
                                                '  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[5].my_brand.itemcount
                                                ),
                                                that.state.JingPinPTx[5].my_brand.itemcount < that.state.JingPinPTx[5].jingpin_brand.itemcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[5].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[5].my_brand.itemcount / that.state.JingPinPTx[5].my_brand.shopcount) : 0,
                                                    '\u4E2A/\u5E97'
                                                ),
                                                parseInt(that.state.JingPinPTx[5].my_brand.itemcount / that.state.JingPinPTx[5].my_brand.shopcount) < parseInt(that.state.JingPinPTx[5].jingpin_brand.itemcount / that.state.JingPinPTx[5].jingpin_brand.shopcount) ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDiv', style: { float: "left", width: "104px", textAlign: "center" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    { className: 'vs' },
                                                    'vs'
                                                )
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "12px" } },
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5546\u54C1\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u7ADE\u54C1\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[5].jingpin_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[5].jingpin_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[5].jingpin_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[5].jingpin_brand.itemcount / that.state.JingPinPTx[5].jingpin_brand.shopcount) : 0,
                                                '/\u4E2A\u5E97'
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
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginLeft: "30px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[6].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[6].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "100%" } },
                                                ' ',
                                                (0, _platform2.default)('WPH', { float: "left", marginLeft: "80px", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "10px" } },
                                                    that.state.JingPinPTx[6].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u6211\u7684\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[6].my_brand.shopcount
                                                ),
                                                ' ',
                                                that.state.JingPinPTx[6].my_brand.shopcount < that.state.JingPinPTx[6].jingpin_brand.shopcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null,
                                                '  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[6].my_brand.itemcount
                                                ),
                                                that.state.JingPinPTx[6].my_brand.itemcount < that.state.JingPinPTx[6].jingpin_brand.itemcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[6].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[6].my_brand.itemcount / that.state.JingPinPTx[6].my_brand.shopcount) : 0,
                                                    '\u4E2A/\u5E97'
                                                ),
                                                parseInt(that.state.JingPinPTx[6].my_brand.itemcount / that.state.JingPinPTx[6].my_brand.shopcount) < parseInt(that.state.JingPinPTx[6].jingpin_brand.itemcount / that.state.JingPinPTx[6].jingpin_brand.shopcount) ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDiv', style: { float: "left", width: "104px", textAlign: "center" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    { className: 'vs' },
                                                    'vs'
                                                )
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "12px" } },
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5546\u54C1\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u7ADE\u54C1\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[6].jingpin_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[6].jingpin_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[6].jingpin_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[6].jingpin_brand.itemcount / that.state.JingPinPTx[6].jingpin_brand.shopcount) : 0,
                                                '/\u4E2A\u5E97'
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    _col2.default,
                                    { span: 7, style: { padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", margin: "0 30px" } },
                                    React.createElement(
                                        _card2.default,
                                        { style: that.state.CardStyle == that.state.JingPinPTx[7].platform_code ? CardStylex : CardStyles, onClick: function onClick() {
                                                return that.CardStyle(that.state.JingPinPTx[7].platform_code);
                                            }, title: React.createElement(
                                                'div',
                                                { style: { width: "100%" } },
                                                (0, _platform2.default)('XY', { float: "left", marginLeft: "80px", width: "34px", height: "34px" }),
                                                ' ',
                                                React.createElement(
                                                    'b',
                                                    { style: { fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "10px" } },
                                                    that.state.JingPinPTx[7].platform_name
                                                )
                                            ), bordered: false },
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "left", textAlign: "left" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u6211\u7684\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[7].my_brand.shopcount
                                                ),
                                                ' ',
                                                that.state.JingPinPTx[7].my_brand.shopcount < that.state.JingPinPTx[7].jingpin_brand.shopcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null,
                                                '  '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[7].my_brand.itemcount
                                                ),
                                                that.state.JingPinPTx[7].my_brand.itemcount < that.state.JingPinPTx[7].jingpin_brand.itemcount ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    null,
                                                    that.state.JingPinPTx[7].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[7].my_brand.itemcount / that.state.JingPinPTx[7].my_brand.shopcount) : 0,
                                                    '\u4E2A/\u5E97'
                                                ),
                                                parseInt(that.state.JingPinPTx[7].my_brand.itemcount / that.state.JingPinPTx[7].my_brand.shopcount) < parseInt(that.state.JingPinPTx[7].jingpin_brand.itemcount / that.state.JingPinPTx[7].jingpin_brand.shopcount) ? React.createElement('img', { src: '../../../../img/icon/under.png', alt: '' }) : null
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDiv', style: { float: "left", width: "104px", textAlign: "center" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                React.createElement(
                                                    'b',
                                                    { className: 'vs' },
                                                    'vs'
                                                )
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "12px" } },
                                                '\u5E97\u94FA\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5546\u54C1\u6570'
                                            ),
                                            React.createElement(
                                                'h5',
                                                { style: { marginTop: "20px" } },
                                                '\u5E73\u5747\u94FA\u8D27\u5BC6\u5EA6'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'CardDivs', style: { float: "right", textAlign: "right" } },
                                            React.createElement(
                                                'h4',
                                                null,
                                                '\u7ADE\u54C1\u54C1\u724C'
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[7].jingpin_brand.shopcount,
                                                ' '
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[7].jingpin_brand.itemcount
                                            ),
                                            React.createElement(
                                                'h5',
                                                null,
                                                that.state.JingPinPTx[7].jingpin_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[7].jingpin_brand.itemcount / that.state.JingPinPTx[7].jingpin_brand.shopcount) : 0,
                                                '/\u4E2A\u5E97'
                                            )
                                        )
                                    )
                                )
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
                { className: 'contentBox', style: { background: "#f2f2f9" } },
                React.createElement(
                    _row2.default,
                    { gutter: 16, style: { margin: "0" } },
                    React.createElement(
                        _col2.default,
                        { span: 14, style: { background: "#fff", overflowX: "scroll" } },
                        React.createElement(_card2.default, { title: '\u4EF7\u683C\u533A\u95F4\u5185\u5546\u54C1\u6570\u91CF\u5360\u6BD4\u5206\u5E03', style: { color: "#333333", fontSize: "16px" }, bordered: false }),
                        React.createElement('div', { id: 'container', style: { width: "800px" } })
                    ),
                    React.createElement(
                        _col2.default,
                        { span: 10 },
                        React.createElement(_card2.default, { title: '\u91CD\u5408\u5E97\u94FA\u5360\u6BD4', style: { color: "#333333", fontSize: "16px" }, bordered: false }),
                        React.createElement('div', { id: 'echartsxx', style: { background: "#fff" } })
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



/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_Symbol.js":
/*!********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_Symbol.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/_lodash@4.17.11@lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_baseGetTag.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_baseGetTag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/_lodash@4.17.11@lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/_lodash@4.17.11@lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/_lodash@4.17.11@lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_freeGlobal.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_freeGlobal.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../_webpack@4.21.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.21.0@webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_getRawTag.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_getRawTag.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/_lodash@4.17.11@lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_objectToString.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_objectToString.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_root.js":
/*!******************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_root.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/_lodash@4.17.11@lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/isObject.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/isObject.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/isObjectLike.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/isObjectLike.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/isSymbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/isSymbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/_lodash@4.17.11@lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/_lodash@4.17.11@lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ })

}]);
//# sourceMappingURL=80_20e3b6c475c4451e266a.js.map