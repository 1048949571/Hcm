(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

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

/***/ "./app/widget/index/Dealers/ActivityInspectionPublicity/tpl.js":
/*!*********************************************************************!*\
  !*** ./app/widget/index/Dealers/ActivityInspectionPublicity/tpl.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@3.10.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _tag = __webpack_require__(/*! antd/es/tag */ "./node_modules/_antd@3.10.1@antd/es/tag/index.js");

var _tag2 = _interopRequireDefault(_tag);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@3.10.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/tag/style/css */ "./node_modules/_antd@3.10.1@antd/es/tag/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

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

var ActivityDate = (0, _That2.default)(function (that) {
  var _that$state = that.state,
      selectedIndex = _that$state.selectedIndex,
      moreButton = _that$state.moreButton,
      sevenData = _that$state.sevenData,
      currentShopBtn = _that$state.currentShopBtn,
      shopBtnList = _that$state.shopBtnList;

  return React.createElement(
    'div',
    { className: 'activity-date' },
    React.createElement(
      'section',
      { className: 'date-card' },
      sevenData.map(function (val, idx) {
        var dateObj = new Date(val.my_date);
        var week = WEEKS[dateObj.getDay()];
        var day = dateObj.getDate() + '';
        var dateString = dateObj.getFullYear() + '-' + String(dateObj.getMonth() + 1).padStart(2, '0') + '-' + day.padStart(2, '0');
        return React.createElement(
          'div',
          {
            className: 'card ' + (selectedIndex === idx ? 'activite' : ''),
            onClick: function onClick() {
              return that.switchActivity(dateString, idx);
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
              selectedIndex === 6 && idx === 6 ? React.createElement(
                'p',
                { className: 'today' },
                '\u6628\u65E5'
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
              '\u4E0D\u5408\u683C\u6D3B\u52A8\uFF08' + val.all_count + '\uFF09'
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
            moreButton ? React.createElement(
              'span',
              null,
              '\u6536\u8D77\u66F4\u591A\xA0',
              React.createElement(_icon2.default, { type: 'up' })
            ) : React.createElement(
              'span',
              null,
              '\u5C55\u5F00\u66F4\u591A\xA0',
              React.createElement(_icon2.default, { type: 'down' })
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
                that.switchShopBtn('all');
              }
            },
            '\u5168\u90E8\uFF08',
            shopBtnList.length || 0,
            '\uFF09'
          ),
          !!shopBtnList.length ? shopBtnList.map(function (v, i) {
            // console.log(v.shop_id)
            return React.createElement(
              _button2.default,
              {
                key: v.shop_id,
                type: currentShopBtn === v.shop_id ? 'primary' : '',
                onClick: function onClick() {
                  that.switchShopBtn(v.shop_id);
                },
                className: 'show btn-item'
              },
              v.shop_name + '\uFF08' + v.act_count + '\uFF09'
            );
          }) : null
        ) : null
      )
    )
  );
});

var Tpl = (0, _That2.default)(function (that) {
  var _that$state2 = that.state,
      inspectInfoList = _that$state2.inspectInfoList,
      _that$state2$paginati = _that$state2.pagination,
      count = _that$state2$paginati.count,
      pageSize = _that$state2$paginati.pageSize,
      pageNum = _that$state2$paginati.pageNum;

  var cardTitle = function cardTitle(config) {
    return React.createElement(
      'div',
      { className: 'card-title' },
      React.createElement(
        'div',
        { className: 'top' },
        React.createElement(
          _row2.default,
          { className: 'row' },
          React.createElement(
            _col2.default,
            { span: 24 },
            '\u6240\u5C5E\u5BA2\u6237\uFF1A',
            config.dealername
          )
        ),
        React.createElement(
          _row2.default,
          { className: 'row' },
          React.createElement(
            _col2.default,
            { span: 12 },
            '\u5E97\u94FA\u540D\u79F0\uFF1A',
            config.shop_name
          ),
          React.createElement(
            _col2.default,
            { span: 12 },
            '\u6D3B\u52A8\u65F6\u95F4\uFF1A',
            that.formatTime(config.start_time, true),
            ' ~ ',
            that.formatTime(config.end_time, true)
          )
        ),
        React.createElement(
          _row2.default,
          { className: 'row' },
          React.createElement(
            _col2.default,
            { span: 12, className: 'overflow-hidden' },
            '\u4EA7\u54C1\u4FE1\u606F\uFF1A',
            config.product_name
          ),
          React.createElement(
            _col2.default,
            { span: 12 },
            '\u5546\u54C1\u94FE\u63A5\uFF1A',
            React.createElement(
              'a',
              { href: config.product_url, target: '_blank' },
              config.product_url
            )
          )
        )
      ),
      React.createElement(_divider2.default, { dashed: true }),
      React.createElement(
        'div',
        { className: 'bottom' },
        React.createElement(
          _row2.default,
          { className: 'row' },
          React.createElement(
            _col2.default,
            { span: 8 },
            '\u6D3B\u52A8\u6807\u4EF7\uFF1A\xA5',
            config.apply_price
          ),
          React.createElement(
            _col2.default,
            { span: 8 },
            '\u6D3B\u52A8\u7C7B\u578B\uFF1A',
            config.campaign_type
          ),
          React.createElement(
            _col2.default,
            { span: 8 },
            '\u8D60\u54C1\u60C5\u51B5\uFF1A',
            config.gift_situation
          )
        ),
        React.createElement(
          _row2.default,
          { className: 'row' },
          React.createElement(
            _col2.default,
            { span: 8 },
            '\u5B9E\u9645\u6210\u4EA4\u4EF7\uFF1A\xA5',
            config.actual_price
          ),
          React.createElement(
            _col2.default,
            { span: 8 },
            '\u73A9\u6CD5\u8BF4\u660E\uFF1A',
            config.play_content
          )
        )
      )
    );
  };

  var imgWrapper = function imgWrapper(list) {
    return React.createElement(
      'div',
      { className: 'img-wrapper' },
      !!list.length ? list.map(function (url, idx) {
        return React.createElement('img', {
          src: url,
          key: url,
          onClick: function onClick() {
            that.handleImgClick({ bl: true, close: true, urls: list, index: idx });
          },
          style: { width: '72px', height: '72px', borderRadius: '3px' }
        });
      }) : null
    );
  };

  return React.createElement(
    _Layout2.default,
    {
      breadcrumbList: ['活动信息', '活动稽查公示'],
      linkList: ['', '']
    },
    React.createElement(
      'div',
      { className: 'activity-inspection-publicity-wrapper' },
      React.createElement(
        'section',
        { className: 'content' },
        React.createElement(ActivityDate, { that: that }),
        !!inspectInfoList.length ? inspectInfoList.map(function (value, index) {
          var screenshot_b = value.screenshot_b,
              screenshot_c = value.screenshot_c,
              screenshot_o = value.screenshot_o,
              system_review = value.system_review,
              system_review_explain = value.system_review_explain,
              brand_review = value.brand_review,
              brand_review_username = value.brand_review_username,
              brand_review_view = value.brand_review_view,
              campaign_id = value.campaign_id;

          var sshot_b = !!screenshot_b && JSON.parse(screenshot_b);
          var sshot_c = !!screenshot_c && JSON.parse(screenshot_c);
          var sshot_o = !!screenshot_o && JSON.parse(screenshot_o);
          // console.log(value.campaign_id)
          return React.createElement(
            _card2.default,
            { title: cardTitle(value), className: 'inspect-detail', key: index },
            React.createElement(
              'div',
              { className: 'body-top' },
              React.createElement(
                _row2.default,
                { className: 'row' },
                React.createElement(
                  _col2.default,
                  { span: 8, className: 'img' },
                  '\u6807\u4EF7\u622A\u56FE\uFF1A',
                  imgWrapper(!!sshot_b ? sshot_b : [])
                ),
                React.createElement(
                  _col2.default,
                  { span: 8, className: 'img' },
                  '\u6210\u4EA4\u4EF7\u622A\u56FE\uFF1A',
                  imgWrapper(!!sshot_c ? sshot_c : [])
                ),
                React.createElement(
                  _col2.default,
                  { span: 8, className: 'img' },
                  '\u5176\u4ED6\u622A\u56FE\uFF1A',
                  imgWrapper(!!sshot_o ? sshot_o : [])
                )
              ),
              React.createElement(
                _row2.default,
                { className: 'row' },
                React.createElement(
                  _col2.default,
                  { span: 8 },
                  '\u7CFB\u7EDF\u7A3D\u67E5\u7ED3\u679C\uFF1A',
                  !!system_review ? system_review === '合格' ? React.createElement(
                    _tag2.default,
                    { color: 'green' },
                    '\u5408\u683C'
                  ) : React.createElement(
                    _tag2.default,
                    { color: 'red' },
                    '\u4E0D\u5408\u683C'
                  ) : null
                ),
                React.createElement(
                  _col2.default,
                  { span: 8 },
                  '\u7ED3\u679C\u8BF4\u660E\uFF1A',
                  React.createElement(
                    'span',
                    null,
                    system_review_explain
                  )
                )
              )
            ),
            React.createElement(_divider2.default, null),
            React.createElement(
              'div',
              { className: 'body-bottom' },
              React.createElement(
                _row2.default,
                null,
                React.createElement(
                  _col2.default,
                  { span: 8 },
                  '\u7A3D\u67E5\u7ED3\u679C\uFF1A',
                  !!brand_review ? brand_review === '合格' ? React.createElement(
                    _tag2.default,
                    { color: 'green' },
                    '\u5408\u683C'
                  ) : React.createElement(
                    _tag2.default,
                    { color: 'red' },
                    '\u4E0D\u5408\u683C'
                  ) : null
                ),
                React.createElement(
                  _col2.default,
                  { span: 8 },
                  '\u7A3D\u67E5\u4EBA\uFF1A',
                  brand_review_username
                ),
                React.createElement(
                  _col2.default,
                  { span: 8 },
                  '\u7A3D\u67E5\u610F\u89C1\uFF1A',
                  brand_review_view
                )
              )
            )
          );
        }) : null,
        pageNum * pageSize > count ? null : React.createElement(
          'div',
          { className: 'loadMore' },
          React.createElement(
            _button2.default,
            { onClick: that.handleLoadMoreClick },
            '\u52A0\u8F7D\u66F4\u591A\xB7\xB7\xB7'
          )
        )
      )
    )
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=103_10b067c24a212e126707.js.map