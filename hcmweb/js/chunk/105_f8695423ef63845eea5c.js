(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

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

/***/ "./app/widget/index/Dealers/BrandActivityPublicity/tpl.js":
/*!****************************************************************!*\
  !*** ./app/widget/index/Dealers/BrandActivityPublicity/tpl.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@3.10.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = _breadcrumb2.default.Item;

var WEEKS = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var ACTIVITY_DATE_TYPE = {
    currentDay: 1,
    nextDay: 2
};

var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        selectedIndex = _that$state.selectedIndex,
        moreButton = _that$state.moreButton,
        togglePriceIndex = _that$state.togglePriceIndex,
        activityList = _that$state.activityList,
        currentShopBtn = _that$state.currentShopBtn,
        shopBtnList = _that$state.shopBtnList,
        activityInfoList = _that$state.activityInfoList,
        pagination = _that$state.pagination;
    var _pagination$count = pagination.count,
        count = _pagination$count === undefined ? 0 : _pagination$count,
        _pagination$pageNum = pagination.pageNum,
        pageNum = _pagination$pageNum === undefined ? 1 : _pagination$pageNum,
        _pagination$pageSize = pagination.pageSize,
        pageSize = _pagination$pageSize === undefined ? 10 : _pagination$pageSize;
    // const activeShops = sevenActivity[currentDate]
    // const activeProducts = sevenProductInfo[currentDate]
    // const all_count = activeShops && activeShops.reduce((a, b) => a + b.act_count, 0)

    var activityTotal = !!shopBtnList.length ? shopBtnList.reduce(function (a, b) {
        return a + b.act_count;
    }, 0) : 0;
    var cardItem = function cardItem(config) {
        return React.createElement(
            'div',
            { className: 'card-title' },
            React.createElement(
                'p',
                { className: 'overflow-hidden-only' },
                React.createElement(
                    'span',
                    null,
                    '\u4EA7\u54C1\u4FE1\u606F\uFF1A'
                ),
                React.createElement(
                    'span',
                    null,
                    config.productName
                )
            ),
            React.createElement(
                'p',
                { className: 'overflow-hidden-only pro-link' },
                React.createElement(
                    'span',
                    null,
                    '\u5546\u54C1\u94FE\u63A5\uFF1A'
                ),
                React.createElement(
                    'span',
                    null,
                    React.createElement(
                        'a',
                        { href: config.productUrl, target: '_blank' },
                        config.productUrl
                    )
                )
            ),
            React.createElement(
                'p',
                { onClick: function onClick() {
                        return that.togglePrice(config.index);
                    } },
                togglePriceIndex === config.index ? '隐藏' : '展开',
                '\u53C2\u8003\u4EF7\u683C',
                React.createElement(_icon2.default, { type: togglePriceIndex === config.index ? 'up' : 'down' })
            )
        );
    };
    return React.createElement(
        _Layout2.default,
        {
            breadcrumbList: ['活动信息', '品牌活动公示'],
            linkList: ['', '']
        },
        React.createElement(
            'div',
            { className: 'brand-activity-publicity' },
            React.createElement(
                'section',
                { className: 'content' },
                React.createElement(
                    'div',
                    { className: 'activity-date' },
                    React.createElement(
                        'section',
                        { className: 'date-card' },
                        activityList.map(function (val, idx) {
                            var dateObj = new Date(val.my_date);
                            var week = WEEKS[dateObj.getDay()];
                            var day = dateObj.getDate() + '';
                            var dateString = dateObj.getFullYear() + '-' + String(dateObj.getMonth() + 1).padStart(2, '0') + '-' + day.padStart(2, '0');
                            return React.createElement(
                                'div',
                                {
                                    className: 'card ' + (selectedIndex === idx ? 'activite' : ''),
                                    onClick: function onClick() {
                                        return that.switchActivity(dateString, idx, idx === 0 ? ACTIVITY_DATE_TYPE.currentDay : ACTIVITY_DATE_TYPE.nextDay);
                                    },
                                    key: val.my_date
                                },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'span',
                                        null,
                                        week,
                                        '\xA0\xA0',
                                        selectedIndex === 0 && idx === 0 ? React.createElement(
                                            'p',
                                            { className: 'today' },
                                            '\u4ECA\u65E5'
                                        ) : null
                                    ),
                                    React.createElement(
                                        'span',
                                        null,
                                        day.padStart(2, '0')
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'p',
                                        null,
                                        (idx === 0 ? '进行中' : '已审核') + '\u6D3B\u52A8\uFF08' + val.all_count + '\uFF09'
                                    )
                                )
                            );
                        })
                    ),
                    React.createElement(
                        'section',
                        { className: 'date-info' },
                        React.createElement(
                            'div',
                            { className: 'activity-shops' },
                            React.createElement(
                                _row2.default,
                                { type: "flex", justify: "space-between", className: 'row' },
                                React.createElement(
                                    _col2.default,
                                    { span: 4, className: 'title' },
                                    '\u6D3B\u52A8\u5E97\u94FA\uFF08',
                                    shopBtnList.length || 0,
                                    '\uFF09'
                                ),
                                React.createElement(
                                    _col2.default,
                                    { span: 2, className: 'more', onClick: that.moreButton },
                                    React.createElement(
                                        'span',
                                        null,
                                        moreButton ? '收起' : '展开',
                                        '\u66F4\u591A\xA0',
                                        React.createElement(_icon2.default, { type: moreButton ? 'up' : 'down' })
                                    )
                                )
                            ),
                            moreButton ? React.createElement(
                                _row2.default,
                                { className: 'row' },
                                React.createElement(
                                    _button2.default,
                                    {
                                        className: 'btn-item',
                                        type: currentShopBtn === 'all' ? 'primary' : '',
                                        onClick: function onClick() {
                                            that.switchShopBtn('all', activityInfoList);
                                        }
                                    },
                                    '\u5168\u90E8\uFF08',
                                    activityTotal,
                                    '\uFF09'
                                ),
                                !!shopBtnList.length ? shopBtnList.map(function (v, i) {
                                    return React.createElement(
                                        _button2.default,
                                        {
                                            key: v.shop_id,
                                            type: currentShopBtn === v.shop_id ? 'primary' : '',
                                            onClick: function onClick() {
                                                that.switchShopBtn(v.shop_id, activityInfoList);
                                            },
                                            className: 'btn-item'
                                        },
                                        v.shop_name + '\uFF08' + v.act_count + '\uFF09'
                                    );
                                }) : null
                            ) : null
                        )
                    )
                ),
                !!activityInfoList.length ? activityInfoList.map(function (val, idx) {
                    return React.createElement(
                        'div',
                        { className: 'activity-card', key: val.id },
                        React.createElement(
                            _row2.default,
                            { className: 'header-title' },
                            React.createElement(
                                _col2.default,
                                { span: 12 },
                                React.createElement(
                                    'p',
                                    { className: 'overflow-hidden-only' },
                                    React.createElement(
                                        'span',
                                        null,
                                        '\u5E97\u94FA\u540D\u79F0\uFF1A'
                                    ),
                                    React.createElement(
                                        'span',
                                        null,
                                        val.shop_name
                                    )
                                )
                            ),
                            React.createElement(
                                _col2.default,
                                { span: 12 },
                                React.createElement(
                                    'p',
                                    null,
                                    React.createElement(
                                        'span',
                                        null,
                                        '\u6D3B\u52A8\u65F6\u95F4\uFF1A'
                                    ),
                                    React.createElement(
                                        'span',
                                        null,
                                        that.formatTime(val.start_time, true),
                                        '~',
                                        that.formatTime(val.end_time, true)
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            _card2.default,
                            {
                                title: cardItem({
                                    // shopName: val.shop_name,
                                    productName: val.product_name,
                                    productUrl: val.product_url,
                                    index: idx
                                    // startTime: val.start_time,
                                    // endTime: val.end_time
                                })
                                // bordered={false}
                            },
                            togglePriceIndex === idx ? React.createElement(
                                _row2.default,
                                { className: 'card-content' },
                                !!Object.entries(val.price_map).length ? Object.entries(val.price_map).map(function (value, index) {
                                    return React.createElement(
                                        _col2.default,
                                        { span: 8, key: index },
                                        value[0],
                                        '\uFF1A',
                                        value[1]
                                    );
                                }) : null
                            ) : null,
                            React.createElement(
                                _row2.default,
                                null,
                                React.createElement(
                                    _col2.default,
                                    { span: 8 },
                                    '\u6D3B\u52A8\u6807\u4EF7\uFF1A\xA5',
                                    val.apply_price
                                ),
                                React.createElement(
                                    _col2.default,
                                    { span: 8 },
                                    '\u6D3B\u52A8\u7C7B\u578B\uFF1A',
                                    val.campaign_type
                                ),
                                React.createElement(
                                    _col2.default,
                                    { span: 8 },
                                    '\u8D60\u54C1\u60C5\u51B5\uFF1A',
                                    val.gift_situation
                                ),
                                React.createElement(
                                    _col2.default,
                                    { span: 8 },
                                    '\u5B9E\u9645\u6210\u4EA4\u4EF7\uFF1A\xA5',
                                    val.actual_price
                                ),
                                React.createElement(
                                    _col2.default,
                                    { span: 8 },
                                    '\u73A9\u6CD5\u8BF4\u660E\uFF1A',
                                    val.play_content
                                )
                            )
                        )
                    );
                }) : null,
                pageNum * pageSize < count ? React.createElement(
                    'div',
                    { className: 'loadMore' },
                    React.createElement(
                        _button2.default,
                        { onClick: that.handleLoadMore },
                        '\u52A0\u8F7D\u66F4\u591A\xB7\xB7\xB7'
                    )
                ) : null
            )
        )
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=105_f8695423ef63845eea5c.js.map