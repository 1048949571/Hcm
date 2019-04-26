(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

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

/***/ "./app/widget/components/Layout/index.js":
/*!***********************************************!*\
  !*** ./app/widget/components/Layout/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

var _Copyright = __webpack_require__(/*! ../Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

__webpack_require__(/*! ./index.less */ "./app/widget/components/Layout/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightBox = function RightBox(props) {
  return React.createElement(
    'div',
    { className: 'layout-wrapper ' + (props.className || '') },
    React.createElement(
      'div',
      { className: 'header-wrapper' },
      React.createElement(
        _breadcrumb2.default,
        { className: 'breadcrumb' },
        props.breadcrumbList.map(function (v, i) {
          if (props.linkList[i] === '') {
            return React.createElement(
              _breadcrumb2.default.Item,
              { key: v },
              v
            );
          }
          return React.createElement(
            _breadcrumb2.default.Item,
            {
              href: 'javascript:;',
              key: v },
            React.createElement(
              'span',
              { onClick: function onClick() {
                  props.history.go(-props.linkList[i]);
                } },
              v
            )
          );
        })
      )
    ),
    React.createElement(
      'div',
      { className: 'layout-content' },
      props.children
    ),
    React.createElement(
      'div',
      { className: 'copyright' },
      React.createElement(_Copyright2.default, null)
    )
  );
};

RightBox.defaultProps = {
  title: '标题',
  breadcrumbList: [],
  linkList: []
};

exports.default = RightBox;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/Layout/index.less":
/*!*************************************************!*\
  !*** ./app/widget/components/Layout/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "./app/widget/index/Brand/OrderMonitor/tpl.js":
/*!****************************************************!*\
  !*** ./app/widget/index/Brand/OrderMonitor/tpl.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _platform = __webpack_require__(/*! ../../../components/platform */ "./app/widget/components/platform.js");

var _platform2 = _interopRequireDefault(_platform);

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/_react-copy-to-clipboard@5.0.1@react-copy-to-clipboard/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
// import Copyright from "../../../components/Copyright";


var clearIconStyle = {
    width: '14px',
    height: '14px',
    opacity: 0.25,
    cursor: 'pointer'
};

var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        shop_name = _that$state.shop_name,
        order_situation = _that$state.order_situation,
        buy_status = _that$state.buy_status,
        suspentOrderCount = _that$state.suspentOrderCount,
        shopList = _that$state.shopList,
        pagination = _that$state.pagination;

    return React.createElement(
        _Layout2.default,
        {
            breadcrumbList: ['数据中心', '订单监控'],
            linkList: ['', '']
        },
        React.createElement(
            'div',
            { className: 'ordermonitor-wrapper' },
            React.createElement(
                'section',
                { className: 'exception-order-num' },
                React.createElement(
                    'span',
                    { className: 'num-wrapper' },
                    suspentOrderCount
                ),
                React.createElement(
                    'span',
                    null,
                    '\u7591\u4F3C\u5F02\u5E38\u8BA2\u5355\u5F85\u5904\u7406\u6570,'
                ),
                React.createElement(
                    'span',
                    { className: 'immediate-treatment', onClick: that.goTo.bind(that, '/SuspentExceptionOrder') },
                    '\u7ACB\u5373\u5904\u7406>>'
                )
            ),
            React.createElement(
                'section',
                { className: 'order-monitor-main-content' },
                React.createElement(
                    _row2.default,
                    { className: 'search-condition-wrapper' },
                    React.createElement(
                        _col2.default,
                        { span: 8, className: 'condition-field' },
                        React.createElement(
                            'span',
                            null,
                            '\u5E97\u94FA\u540D\u79F0'
                        ),
                        React.createElement(_input2.default, {
                            placeholder: '\u8BF7\u8F93\u5165',
                            style: { width: 242 },
                            value: shop_name,
                            onChange: that.searchChange.bind(that, 'shop_name', 'input'),
                            suffix: shop_name === '' ? null : React.createElement(_icon2.default, {
                                type: 'close-circle',
                                onClick: that.clearInputFn,
                                style: clearIconStyle
                            })
                        })
                    ),
                    React.createElement(
                        _col2.default,
                        { span: 12, className: 'condition-field' },
                        React.createElement(
                            'span',
                            null,
                            '\u5E94\u7528\u8BA2\u8D2D'
                        ),
                        React.createElement(
                            _select2.default,
                            {
                                getPopupContainer: function getPopupContainer(trigger) {
                                    return trigger.parentNode;
                                },
                                defaultValue: buy_status,
                                onChange: that.searchChange.bind(that, 'buy_status', 'select'),
                                style: { width: 242 } },
                            React.createElement(
                                Option,
                                { value: '' },
                                '\u5168\u90E8'
                            ),
                            React.createElement(
                                Option,
                                { value: 'AUTHED' },
                                '\u5DF2\u8BA2\u8D2D'
                            ),
                            React.createElement(
                                Option,
                                { value: 'NOTAUTH' },
                                '\u6682\u672A\u8BA2\u8D2D'
                            )
                        ),
                        React.createElement(
                            _button2.default,
                            { className: 'btn6', onClick: that.handleSearch },
                            '\u67E5\u8BE2'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'buy-link' },
                    React.createElement(
                        _button2.default,
                        { onClick: that.inviteLinkStatus.bind(that, true) },
                        '\u5E94\u7528\u8BA2\u8D2D\u94FE\u63A5'
                    ),
                    React.createElement(
                        'span',
                        { className: 'tips' },
                        React.createElement('i', { className: 'laba' }),
                        React.createElement(
                            'span',
                            null,
                            '\u5C0F\u63D0\u793A\uFF1A\u5E97\u94FA\u5B89\u88C5\u540E\u53F0\u5E94\u7528\u540E\u624D\u80FD\u624D\u80FD\u67E5\u770B\u5E97\u94FA\u7684\u8BA2\u5355\u6570\u636E\uFF0C\u8BF7\u5C3D\u5FEB\u9080\u8BF7\u5E97\u94FA\u8BA2\u8D2D\u3002'
                        )
                    )
                ),
                React.createElement(
                    _row2.default,
                    { className: 'content-list-wrapper', gutter: 20 },
                    shopList.length ? shopList.map(function (v) {
                        return React.createElement(
                            _col2.default,
                            {
                                key: v.id,
                                span: 8,
                                className: 'list-item',
                                onClick: that.goTo.bind(that, '/OrderInformation/' + v.id + '/' + v.shopName + '/' + v.wangwang) },
                            React.createElement(
                                'div',
                                null,
                                React.createElement(
                                    'div',
                                    { className: 'top' },
                                    React.createElement(
                                        'div',
                                        { className: 'shop' },
                                        React.createElement(
                                            'h3',
                                            null,
                                            v.shopName
                                        ),
                                        v.wangwang !== '' ? React.createElement(
                                            React.Fragment,
                                            null,
                                            React.createElement('i', null),
                                            React.createElement(
                                                'span',
                                                null,
                                                v.wangwang
                                            )
                                        ) : null
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'icon' },
                                        (0, _platform2.default)(v.platformCode, { width: 18, height: 18 }),

                                        // 店铺状态 0正常 1异常
                                        v.state == 1 ? React.createElement('i', { className: 'exception' }) : null,

                                        // 店铺订购状态 NOTAUTH未订购 AUTHED已订购
                                        v.isauthed === 'AUTHED' ? React.createElement('i', { className: 'buy' }) : React.createElement('i', { className: 'no-buy' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'bottom' },
                                    React.createElement(
                                        'span',
                                        { className: 'sales' },
                                        '\u8FD130\u5929\u9500\u552E\u989D',
                                        React.createElement(
                                            'i',
                                            null,
                                            '\uFFE5',
                                            v.money
                                        )
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'percent' },
                                        '\u73AF\u6BD4',
                                        v.ratio == 0 ? React.createElement(
                                            'span',
                                            { style: { marginLeft: 10 } },
                                            '--'
                                        ) : React.createElement(
                                            React.Fragment,
                                            null,
                                            React.createElement('i', { className: parseInt(v.ratio, 10) > 0 ? 'green' : 'red' }),
                                            React.createElement(
                                                'i',
                                                { className: parseInt(v.ratio, 10) > 0 ? 'green' : 'red' },
                                                v.ratio + '%'
                                            )
                                        )
                                    )
                                )
                            )
                        );
                    }) : React.createElement(
                        'div',
                        { style: { margin: '50px 0', textAlign: 'center' } },
                        '\u6682\u65E0\u6570\u636E'
                    )
                ),
                shopList.length ? React.createElement(_pagination2.default, {
                    style: { marginTop: 20, textAlign: 'right' },
                    showQuickJumper: true,
                    onChange: that.handlePageChange,
                    current: pagination.pageNo,
                    pageSize: pagination.pageSize,
                    total: pagination.totalElements
                }) : null
            ),
            React.createElement(InviteLink, { that: that })
        )
    );
});

var InviteLink = (0, _That2.default)(function (that) {
    var inviteLinkStatus = that.state.inviteLinkStatus;


    return React.createElement(
        _modal2.default,
        {
            title: '获取应用订购链接',
            visible: inviteLinkStatus,
            maskClosable: false,
            footer: [React.createElement(
                _button2.default,
                { key: 'back', onClick: function onClick() {
                        return that.inviteLinkStatus(false);
                    } },
                '\u53D6\u6D88'
            )],
            onCancel: function onCancel() {
                return that.inviteLinkStatus(false);
            }
        },
        React.createElement(
            'div',
            { className: 'inviteLinkbox' },
            React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    'span',
                    { className: 'title' },
                    '\u8BA2\u8D2D\u94FE\u63A5\uFF1A'
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement(_input2.default, { onChange: function onChange() {
                            return null;
                        }, value: 'https://tb.cn/5VFmCNw' })
                )
            ),
            React.createElement(
                'div',
                { className: 'item', style: { padding: '0 0 10px 100px', marginTop: '13px' } },
                React.createElement(
                    _reactCopyToClipboard.CopyToClipboard,
                    { text: 'https://tb.cn/5VFmCNw',
                        onCopy: function onCopy() {
                            return _message3.default.success('链接成功复制至粘贴板');
                        } },
                    React.createElement(
                        _button2.default,
                        null,
                        '\u590D\u5236\u8BA2\u8D2D\u94FE\u63A5'
                    )
                )
            ),
            React.createElement(
                'p',
                { style: { padding: '0 0 10px 100px' } },
                '\u590D\u5236\u8BA2\u8D2D\u94FE\u63A5\uFF0C\u53D1\u9001\u7ED9\u7ECF\u9500\u5546\u5E97\u94FA\u8BA2\u8D2D\u5E94\u7528'
            )
        )
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=89_b9904b662383f5b92904.js.map