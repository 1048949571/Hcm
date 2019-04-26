(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[143],{

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

/***/ "./app/widget/index/Shop/Home/home.less":
/*!**********************************************!*\
  !*** ./app/widget/index/Shop/Home/home.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Shop/Home/tpl.js":
/*!*******************************************!*\
  !*** ./app/widget/index/Shop/Home/tpl.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _popover = __webpack_require__(/*! antd/es/popover */ "./node_modules/_antd@3.10.1@antd/es/popover/index.js");

var _popover2 = _interopRequireDefault(_popover);

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/popover/style/css */ "./node_modules/_antd@3.10.1@antd/es/popover/style/css.js");

__webpack_require__(/*! ./home.less */ "./app/widget/index/Shop/Home/home.less");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import moment = require('moment');
var Tpl = (0, _That2.default)(function (that) {

    return React.createElement(
        'div',
        { className: 'shop_home' },
        React.createElement(
            'div',
            { className: 'ShopContent', style: { padding: '0 24px' } },
            React.createElement(Summary, { that: that }),
            React.createElement(RecentActivity, { that: that }),
            React.createElement(Dailydata, { that: that })
        ),
        React.createElement(
            'div',
            { className: 'copyright' },
            React.createElement(_Copyright2.default, null)
        )
    );
});

var Summary = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        noticeNotReadCount = _that$state.noticeNotReadCount,
        productNotReadCount = _that$state.productNotReadCount,
        huanbi = _that$state.huanbi,
        lastMonthCount = _that$state.lastMonthCount,
        huanbiState = _that$state.huanbiState;

    var notice = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            '\u672A\u9605\u8BFB\u7684\u901A\u77E5\u516C\u544A'
        )
    );
    var price = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            '\u672A\u9605\u8BFB\u7684\u552E\u4EF7\u53D8\u66F4\u4FE1\u606F'
        )
    );
    var totalsales = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            '\u6240\u5C5E\u672C\u54C1\u724C\u65B9\u5546\u54C1\u7684\u6210\u4EA4\u989D'
        )
    );
    return React.createElement(
        'div',
        { className: 'Summary' },
        React.createElement(
            'ul',
            { className: 'SummaryUl' },
            React.createElement(
                'li',
                { className: 'SummaryUlLi1' },
                React.createElement(
                    'p',
                    null,
                    React.createElement(
                        'span',
                        { onClick: that.activityDeclaration },
                        '+\u7533\u62A5\u6D3B\u52A8'
                    )
                ),
                React.createElement(
                    'p',
                    null,
                    '\u5FEB\u6377\u7533\u62A5\u6D3B\u52A8'
                )
            ),
            React.createElement(
                'li',
                { className: 'SummaryUlLi2' },
                React.createElement(
                    'div',
                    null,
                    React.createElement('img', { src: '../../../../img/icon1.1/notice.png', alt: '' })
                ),
                React.createElement(
                    'div',
                    { className: 'SummaryUlLi2_D' },
                    React.createElement(
                        'p',
                        null,
                        noticeNotReadCount
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u6700\u65B0\u901A\u77E5\u516C\u544A',
                        React.createElement(
                            _popover2.default,
                            { content: notice, placement: 'bottom', trigger: 'hover' },
                            React.createElement('img', { src: '../../../../img/icon1.1/i.png', alt: '' })
                        )
                    )
                )
            ),
            React.createElement(
                'li',
                { className: 'SummaryUlLi2' },
                React.createElement(
                    'div',
                    null,
                    React.createElement('img', { src: '../../../../img/icon1.1/price.png', alt: '' })
                ),
                React.createElement(
                    'div',
                    { className: 'SummaryUlLi2_D' },
                    React.createElement(
                        'p',
                        null,
                        productNotReadCount
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u6700\u65B0\u552E\u4EF7\u53D8\u66F4',
                        React.createElement(
                            _popover2.default,
                            { content: price, placement: 'bottom', trigger: 'hover' },
                            React.createElement('img', { src: '../../../../img/icon1.1/i.png', alt: '' })
                        )
                    )
                )
            ),
            React.createElement(
                'li',
                { className: 'SummaryUlLi3' },
                React.createElement(
                    'div',
                    null,
                    React.createElement('img', { src: '../../../../img/icon1.1/money.png', alt: '' })
                ),
                React.createElement(
                    'div',
                    { className: 'SummaryUlLi2_D' },
                    React.createElement(
                        'p',
                        null,
                        lastMonthCount,
                        '\uFF08\u4E07\u5143\uFF09'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u4E0A\u6708\u603B\u9500\u552E\u91D1\u989D',
                        React.createElement(
                            _popover2.default,
                            { content: totalsales, placement: 'bottom', trigger: 'hover' },
                            React.createElement('img', { src: '../../../../img/icon1.1/i.png', alt: '' })
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'SummaryUlLi3_DHB' },
                    React.createElement(
                        'p',
                        null,
                        huanbiState ? React.createElement('img', { src: '../../../../img/icon1.1/upper.png', alt: '' }) : React.createElement('img', { src: '../../../../img/icon1.1/lower.png', alt: '' }),
                        '\xA0\xA0',
                        huanbi
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u73AF\u6BD4'
                    )
                )
            )
        )
    );
});

var RecentActivity = (0, _That2.default)(function (that) {
    var _that$state2 = that.state,
        tabsData = _that$state2.tabsData,
        days = _that$state2.days,
        shops = _that$state2.shops,
        hotCommodity = _that$state2.hotCommodity;


    var tabs = tabsData.map(function (e, i) {
        return React.createElement(
            'div',
            {
                className: i == '0' ? 'item active' : 'item',
                key: i,
                onClick: function onClick() {
                    that.sevendaysTab(i, e.my_date);
                }
            },
            React.createElement(
                'div',
                { className: 'date' },
                React.createElement(
                    'span',
                    null,
                    days[moment(e.my_date).day()]
                ),
                i == '0' ? React.createElement(
                    'div',
                    { className: 'today' },
                    '\u4ECA\u65E5'
                ) : null,
                React.createElement(
                    'span',
                    null,
                    moment(e.my_date).format('DD')
                )
            ),
            React.createElement(
                'p',
                { className: 'text' },
                i == '0' ? '进行中' : '已审核',
                '\u6D3B\u52A8\uFF08',
                e.all_count,
                '\uFF09'
            )
        );
    });
    var Shops = shops.map(function (e, i) {
        return React.createElement(
            'li',
            { key: i },
            React.createElement(
                'p',
                null,
                e.shop_name
            ),
            React.createElement(
                'p',
                null,
                '\u6D3B\u52A8\u6570\uFF1A',
                e.act_count
            )
        );
    });
    //活动产品的信息的key和value值
    var productvalue = [];
    var productkey = [];
    var HotCommodity = hotCommodity.map(function (e, i) {
        productvalue = [];
        productkey = [];
        for (var key in e.product_map) {
            if (key != 'product_name' && key != 'floor_transaction_price' && key != 'floor_price' && key != 'brand_name') {
                productvalue.push(e.product_map[key]);
                productkey.push(key);
            }
        }
        // console.log(productvalue,productkey)
        return React.createElement(
            'ul',
            { key: i },
            React.createElement(
                'li',
                null,
                React.createElement(
                    'div',
                    { className: 'Shop_left' },
                    React.createElement(
                        'p',
                        null,
                        e.product_map.product_name
                    ),
                    React.createElement(
                        'p',
                        null,
                        React.createElement(
                            'span',
                            null,
                            '\u4EA7\u54C1\u5206\u7C7B\uFF1A',
                            e.class_name
                        ),
                        React.createElement(
                            'span',
                            null,
                            '\u54C1\u724C:',
                            e.product_map.brand_name
                        ),
                        productvalue.length ? productvalue.map(function (ee, ii) {
                            return React.createElement(
                                'span',
                                { key: ii },
                                productkey[ii],
                                '\uFF1A',
                                ee
                            );
                        }) : null
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'Shop_right' },
                    '\u6D3B\u52A8\u5546\u54C1\u6570\uFF1A',
                    React.createElement(
                        'span',
                        null,
                        e.ins_count
                    )
                )
            )
        );
    });
    return React.createElement(
        'div',
        { className: 'RecentActivity' },
        React.createElement(
            'div',
            { className: 'recentlyTitle' },
            '\u8FD1\u65E5\u6D3B\u52A8\u6982\u89C8'
        ),
        React.createElement(
            'div',
            { className: 'RecentActivityTabs' },
            React.createElement(
                'section',
                { className: 'items' },
                tabs
            ),
            React.createElement(
                'div',
                { className: 'RecentActivityTabs_shop' },
                React.createElement(
                    'div',
                    { className: 'ActivityShop' },
                    React.createElement(
                        'div',
                        { className: 'ActivityShop_title' },
                        '\u6D3B\u52A8\u5E97\u94FA'
                    ),
                    React.createElement(
                        'div',
                        { className: 'ActivityShop_zhankai', onClick: that.openRetract },
                        '\xB7\xB7\xB7'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'ActivityShop_content' },
                    React.createElement(
                        'ul',
                        { className: shops.length ? null : 'act' },
                        Shops.length ? Shops : React.createElement(
                            'p',
                            { style: { textAlign: "center" } },
                            '\u6682\u65E0\u6570\u636E'
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'RecentActivityTabs_commodity' },
                React.createElement(
                    'div',
                    { className: 'ActivityShop' },
                    React.createElement(
                        'div',
                        { className: 'ActivityShop_title' },
                        '\u70ED\u95E8\u6D3B\u52A8\u5546\u54C1'
                    )
                ),
                React.createElement(
                    'div',
                    { className: hotCommodity.length ? 'sellwellcommodity' : 'sellwellcommodity sellwellactive' },
                    HotCommodity.length ? HotCommodity : '暂无数据'
                )
            )
        )
    );
});

var Dailydata = (0, _That2.default)(function (that) {
    var reportforms = that.state.reportforms;

    var Newreportforms = reportforms.map(function (e, i) {
        return React.createElement(
            'li',
            { key: i },
            React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    moment(e.submit_time).format('YYYY-MM-DD')
                ),
                React.createElement(
                    'p',
                    null,
                    '\u72B6\u6001\uFF1A',
                    e.submit_status ? '已提报' : '未提报'
                )
            ),
            React.createElement(
                'div',
                null,
                e.submit_status ? null : React.createElement(
                    _button2.default,
                    { onClick: function onClick() {
                            that.ljtb(moment(e.submit_time).format('YYYY-MM-DD'));
                        } },
                    '\u7ACB\u5373\u63D0\u62A5'
                )
            )
        );
    });
    return React.createElement(
        'div',
        { className: 'DailyData' },
        React.createElement(
            'div',
            { className: 'DailyTitle' },
            '\u6BCF\u65E5\u9500\u552E\u6570\u636E\u63D0\u62A5'
        ),
        React.createElement(
            'div',
            { className: 'DailyFour' },
            React.createElement(
                'ul',
                null,
                Newreportforms.length ? Newreportforms : '暂无数据'
            )
        )
    );
});
exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=143_8bd72439fb14b5cc01f8.js.map