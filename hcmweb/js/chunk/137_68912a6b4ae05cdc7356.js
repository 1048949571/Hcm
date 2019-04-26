(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[137],{

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

/***/ "./app/widget/index/Shop/ActivityDetail/tpl.js":
/*!*****************************************************!*\
  !*** ./app/widget/index/Shop/ActivityDetail/tpl.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@3.10.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _popover = __webpack_require__(/*! antd/es/popover */ "./node_modules/_antd@3.10.1@antd/es/popover/index.js");

var _popover2 = _interopRequireDefault(_popover);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/popover/style/css */ "./node_modules/_antd@3.10.1@antd/es/popover/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _platform = __webpack_require__(/*! ../../../components/platform */ "./app/widget/components/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tpl = (0, _That2.default)(function (that) {
  var _that$state = that.state,
      detailType = _that$state.detailType,
      status = _that$state.status,
      breadcrumbName = _that$state.breadcrumbName,
      myActivityDetail = _that$state.myActivityDetail,
      proDetail = _that$state.proDetail,
      shopDetail = _that$state.shopDetail;


  var ActivityBaseInfo = function ActivityBaseInfo(props) {
    var apply_price = props.apply_price,
        _props$price_map = props.price_map,
        price_map = _props$price_map === undefined ? {} : _props$price_map,
        actual_price = props.actual_price,
        gift_situation = props.gift_situation,
        campaign_type = props.campaign_type,
        play_content = props.play_content,
        campaignExamine = props.campaignExamine,
        isShowMorePrice = props.isShowMorePrice;

    return React.createElement(
      _row2.default,
      { className: 'activity-baseinfo-wrapper' },
      React.createElement(
        _col2.default,
        { span: 8, className: 'item' },
        React.createElement(
          'span',
          null,
          '\u7533\u8BF7\u6807\u4EF7\uFF1A'
        ),
        React.createElement(
          'span',
          null,
          apply_price
        ),
        Object.keys(price_map).length && isShowMorePrice ? React.createElement(
          _popover2.default,
          {
            content: React.createElement(
              React.Fragment,
              null,
              Object.entries(price_map).map(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    val = _ref2[1];

                return React.createElement(
                  'p',
                  { key: key },
                  key + '\uFF1A' + val
                );
              })
            )
          },
          React.createElement(_icon2.default, { className: 'icon', type: 'question-circle' })
        ) : null
      ),
      React.createElement(
        _col2.default,
        { span: 8, className: 'item' },
        React.createElement(
          'span',
          null,
          '\u5B9E\u9645\u6210\u4EA4\u4EF7\uFF1A'
        ),
        React.createElement(
          'span',
          null,
          actual_price
        )
      ),
      React.createElement(
        _col2.default,
        { span: 8, className: 'item' },
        React.createElement(
          'span',
          null,
          '\u8D60\u54C1\u60C5\u51B5\uFF1A'
        ),
        React.createElement(
          'span',
          null,
          gift_situation
        )
      ),
      React.createElement(
        _col2.default,
        { span: 8, className: 'item' },
        React.createElement(
          'span',
          null,
          '\u6D3B\u52A8\u7C7B\u578B\uFF1A'
        ),
        React.createElement(
          'span',
          null,
          campaign_type
        )
      ),
      React.createElement(
        _col2.default,
        { span: 8, className: 'item' },
        React.createElement(
          'span',
          null,
          '\u73A9\u6CD5\u8BF4\u660E\uFF1A'
        ),
        React.createElement(
          'span',
          null,
          play_content
        )
      ),
      campaignExamine ? React.createElement(
        _col2.default,
        { className: 'review-info', span: 24 },
        React.createElement(
          _row2.default,
          { className: 'content' },
          React.createElement(
            _col2.default,
            { span: 8 },
            React.createElement(
              'span',
              null,
              '\u5BA1\u6838\u7ED3\u679C\uFF1A'
            ),
            campaignExamine.examine_result === '审核通过' ? React.createElement(
              _button2.default,
              { type: 'primary', style: { backgroundColor: '#52C41A', borderColor: '#52C41A' } },
              React.createElement(_icon2.default, { type: 'check-circle' }),
              '\u901A\u8FC7'
            ) : React.createElement(
              _button2.default,
              { type: 'primary', style: { backgroundColor: '#FAAD14', borderColor: '#FAAD14' } },
              React.createElement(_icon2.default, { type: 'rollback' }),
              '\u9A73\u56DE'
            )
          ),
          React.createElement(
            _col2.default,
            { span: 8 },
            React.createElement(
              'span',
              null,
              '\u5BA1\u6838\u610F\u89C1\uFF1A',
              campaignExamine.examine_view
            ),
            React.createElement('span', null)
          ),
          React.createElement(
            _col2.default,
            { span: 8 },
            React.createElement(
              'span',
              null,
              '\u5BA1\u6838\u4EBA\uFF1A',
              campaignExamine.examine_username
            ),
            React.createElement('span', null)
          )
        )
      ) : null
    );
  };

  var ProductBaseInfo = function ProductBaseInfo(props) {
    var _props$data = props.data,
        product_name = _props$data.product_name,
        brand_name = _props$data.brand_name;

    var FILTER_FIELD = ['product_name', 'brand_name', 'floor_transaction_price', 'floor_price'];
    return React.createElement(
      _row2.default,
      { className: 'activity-product-baseinfo-wrapper' },
      React.createElement(
        _col2.default,
        { span: 24, className: 'title' },
        product_name
      ),
      React.createElement(
        _col2.default,
        { span: 8, className: 'item' },
        React.createElement(
          'span',
          null,
          '\u54C1\u724C\uFF1A'
        ),
        React.createElement(
          'span',
          null,
          brand_name
        )
      ),
      Object.entries(props.data).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            val = _ref4[1];

        if (!FILTER_FIELD.includes(key)) {
          return React.createElement(
            _col2.default,
            { key: key, span: 8, className: 'item' },
            React.createElement(
              'span',
              null,
              key,
              '\uFF1A'
            ),
            React.createElement(
              'span',
              null,
              val
            )
          );
        }
      })
    );
  };

  var ShopBaseInfo = function ShopBaseInfo(props) {
    return React.createElement(
      'div',
      { className: 'shop-baseinfo-wrapper' },
      React.createElement(
        'h5',
        { className: 'title' },
        props.shop_name
      ),
      React.createElement(
        'div',
        { className: 'info' },
        '\u5171\u6709',
        React.createElement(
          'span',
          null,
          props.act_count
        ),
        '\u5546\u54C1\u6B63\u5728\u6D3B\u52A8'
      )
    );
  };

  var ReviewStatus = function ReviewStatus(props) {
    var campaign_name = props.campaign_name,
        start_time = props.start_time,
        end_time = props.end_time,
        campaign_desc = props.campaign_desc,
        createtime = props.createtime;

    return React.createElement(
      _row2.default,
      { className: 'review-status-wrapper' },
      React.createElement(
        _col2.default,
        { span: 24, className: 'title' },
        campaign_name
      ),
      React.createElement(
        _col2.default,
        { span: 8, className: 'item' },
        '\u6D3B\u52A8\u65F6\u95F4\uFF1A',
        moment(start_time).format('YYYY-MM-DD HH:mm') + ' ~ ' + moment(end_time).format('YYYY-MM-DD HH:mm')
      ),
      React.createElement(
        _col2.default,
        { span: 16, className: 'item' },
        '\u7533\u8BF7\u65F6\u95F4\uFF1A',
        moment(createtime).format('YYYY-MM-DD HH:mm:ss')
      ),
      React.createElement(
        _col2.default,
        { span: 8, className: 'item' },
        '\u6D3B\u52A8\u8BF4\u660E\uFF1A',
        campaign_desc
      ),
      React.createElement(
        'div',
        { className: 'status-icon' },
        React.createElement('span', { className: 'icon ' + (status === '活动待审核' || status === '待审核已过期' ? 'inspecting' : 'inspected') }),
        React.createElement(
          'span',
          { className: 'text' },
          status
        )
      )
    );
  };

  var ProductItem = function ProductItem(props) {
    var _props$isShowTitle = props.isShowTitle,
        isShowTitle = _props$isShowTitle === undefined ? true : _props$isShowTitle,
        product_name = props.product_name,
        product_url = props.product_url,
        shop_name = props.shop_name,
        start_time = props.start_time,
        end_time = props.end_time,
        ping_name = props.ping_name,
        _props$isShowMorePric = props.isShowMorePrice,
        isShowMorePrice = _props$isShowMorePric === undefined ? false : _props$isShowMorePric;

    return React.createElement(
      'div',
      { className: 'product-item-wrapper' },
      isShowTitle ? React.createElement(
        'h5',
        { className: 'title' },
        '\u5E97\u94FA\u540D\u79F0\uFF1A',
        shop_name,
        !!ping_name && window.can.platform.filter(function (v) {
          return v.dictName === ping_name;
        }).length ? (0, _platform2.default)(window.can.platform.filter(function (v) {
          return v.dictName === ping_name;
        })[0].dictCode) : ''
      ) : null,
      React.createElement(
        _card2.default,
        {
          className: 'content',
          title: detailType === 'review' ? React.createElement(
            _row2.default,
            { className: 'card-title' },
            React.createElement(
              _col2.default,
              { span: 10, className: 'item' },
              '\u4EA7\u54C1\u4FE1\u606F\uFF1A',
              product_name
            ),
            React.createElement(
              _col2.default,
              { span: 10, className: 'item over-ellipsis' },
              '\u5546\u54C1\u94FE\u63A5\uFF1A',
              React.createElement(
                'a',
                { href: product_url, target: '_blank' },
                product_url
              )
            ),
            React.createElement(
              _col2.default,
              { span: 4, style: { fontSize: '14px', color: '#333' } },
              status === '活动待审核' ? React.createElement(
                React.Fragment,
                null,
                React.createElement(_icon2.default, { style: { color: '#FAAD14', marginRight: '10px', fontSize: '16px' }, type: 'clock-circle', theme: 'filled' }),
                status
              ) : status === '待审核已过期' ? React.createElement(
                React.Fragment,
                null,
                React.createElement(_icon2.default, { style: { color: '#FAAD14', marginRight: '10px', fontSize: '16px' }, type: 'minus-circle', theme: 'filled' }),
                status
              ) : null
            )
          ) : React.createElement(
            _row2.default,
            { className: 'card-title' },
            React.createElement(
              _col2.default,
              { span: 12, className: 'item' },
              '\u6D3B\u52A8\u65F6\u95F4\uFF1A',
              moment(start_time).format('YYYY-MM-DD HH:mm') + ' ~ ' + moment(end_time).format('YYYY-MM-DD HH:mm')
            ),
            React.createElement(
              _col2.default,
              { span: 12, className: 'item' },
              '\u94FE\u63A5\u5730\u5740\uFF1A',
              React.createElement(
                'a',
                { href: product_url, target: '_blank' },
                product_url
              )
            )
          )
        },
        React.createElement(ActivityBaseInfo, _extends({ isShowMorePrice: isShowMorePrice }, props))
      )
    );
  };

  return React.createElement(
    _Layout2.default,
    {
      breadcrumbList: ['活动信息', breadcrumbName, '活动详情'],
      linkList: ['', '1', ''],
      history: that.props.history
    },
    React.createElement(
      'div',
      { className: 'activity-detail-wrapper' },
      detailType === 'review' ? React.createElement(
        'section',
        { className: 'detail-type-review-wrapper' },
        React.createElement(ReviewStatus, myActivityDetail),
        myActivityDetail.cplist && myActivityDetail.cplist.length ? myActivityDetail.cplist.map(function (v) {
          return React.createElement(ProductItem, _extends({ key: v.campaign_id, isShowTitle: false }, v));
        }) : null
      ) : null,
      detailType === 'shop' ? React.createElement(
        'section',
        { className: 'detail-type-shop-wrapper' },
        that.props.location.state ? React.createElement(ShopBaseInfo, that.props.location.state) : null,
        shopDetail && shopDetail.list && shopDetail.list.length ? shopDetail.list.map(function (v, i) {
          return React.createElement(
            'div',
            { className: 'detail-type-shop-item', key: i },
            React.createElement(ProductItem, _extends({ isShowMorePrice: true }, v))
          );
        }) : null
      ) : null,
      detailType === 'product' ? React.createElement(
        'section',
        { className: 'detail-type-product-wrapper' },
        proDetail && proDetail.pro_list ? React.createElement(ProductBaseInfo, { data: proDetail.pro_list }) : null,
        proDetail && proDetail.list && proDetail.list.length ? proDetail.list.map(function (v, i) {
          return React.createElement(
            'div',
            { className: 'detail-type-product-item', key: i },
            React.createElement(ProductItem, v)
          );
        }) : null
      ) : null,
      detailType === 'shop' && shopDetail.count > shopDetail.pageNum * shopDetail.pageSize || detailType === 'product' && proDetail.count > proDetail.pageNum * proDetail.pageSize ? React.createElement(
        'div',
        { className: 'more-btn' },
        React.createElement(
          _button2.default,
          {
            onClick: that.handleMoreClick.bind(that, detailType === 'shop' ? shopDetail.pageNum + 1 : proDetail.pageNum + 1) },
          '\u52A0\u8F7D\u66F4\u591A'
        )
      ) : null
    )
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=137_68912a6b4ae05cdc7356.js.map