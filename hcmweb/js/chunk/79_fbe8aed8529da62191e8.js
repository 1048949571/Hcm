(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

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

/***/ "./app/widget/index/Brand/ClientInspectDetail/tpl.js":
/*!***********************************************************!*\
  !*** ./app/widget/index/Brand/ClientInspectDetail/tpl.js ***!
  \***********************************************************/
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

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@3.10.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/tag/style/css */ "./node_modules/_antd@3.10.1@antd/es/tag/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imgWrapperStyle = {
  width: '72px',
  height: '72px',
  borderRadius: '3px',
  marginLeft: '11px',
  cursor: 'pointer'
};

var FORMAT_TIME = 'YYYY-MM-DD HH:mm:ss';

var Tpl = (0, _That2.default)(function (that) {
  var _that$state$inspectDe = that.state.inspectDetail,
      start_time = _that$state$inspectDe.start_time,
      end_time = _that$state$inspectDe.end_time,
      product_name = _that$state$inspectDe.product_name,
      product_url = _that$state$inspectDe.product_url,
      apply_price = _that$state$inspectDe.apply_price,
      campaign_type = _that$state$inspectDe.campaign_type,
      gift_situation = _that$state$inspectDe.gift_situation,
      actual_price = _that$state$inspectDe.actual_price,
      play_content = _that$state$inspectDe.play_content,
      _that$state$inspectDe2 = _that$state$inspectDe.campaignInspectList,
      campaignInspectList = _that$state$inspectDe2 === undefined ? [] : _that$state$inspectDe2;

  return React.createElement(
    _Layout2.default,
    {
      title: '\u7A3D\u67E5\u7ED3\u679C\u8BE6\u60C5',
      breadcrumbList: ['客户盘点', '客户信息', '客户详情', '活动详情', '稽查结果详情'],
      linkList: ['', '3', '2', '1', ''],
      history: that.props.history
    },
    React.createElement(
      'div',
      { className: 'client-inspect-detail' },
      React.createElement(
        'section',
        { className: 'baseinfo' },
        React.createElement(
          'p',
          null,
          '\u6D3B\u52A8\u65F6\u95F4\uFF1A',
          (0, _moment2.default)(start_time).format(FORMAT_TIME) + ' ~ ' + (0, _moment2.default)(end_time).format(FORMAT_TIME)
        ),
        React.createElement(
          'p',
          { className: 'overflow-hidden' },
          '\u4EA7\u54C1\u4FE1\u606F\uFF1A',
          product_name
        ),
        React.createElement(
          'p',
          { className: 'overflow-hidden' },
          '\u5546\u54C1\u94FE\u63A5\uFF1A',
          React.createElement(
            'a',
            { href: product_url, target: '_blank' },
            product_url
          )
        ),
        React.createElement(_divider2.default, null),
        React.createElement(
          _row2.default,
          null,
          React.createElement(
            _col2.default,
            { span: 8 },
            '\u6D3B\u52A8\u6807\u4EF7\uFF1A',
            '\uFFE5' + apply_price
          ),
          React.createElement(
            _col2.default,
            { span: 8 },
            '\u6D3B\u52A8\u7C7B\u578B\uFF1A',
            campaign_type
          ),
          React.createElement(
            _col2.default,
            { span: 8 },
            '\u8D60\u54C1\u60C5\u51B5\uFF1A',
            gift_situation
          ),
          React.createElement(
            _col2.default,
            { span: 8 },
            '\u5B9E\u9645\u6210\u4EA4\u4EF7\uFF1A',
            '\uFFE5' + actual_price
          ),
          React.createElement(
            _col2.default,
            { span: 8 },
            '\u73A9\u6CD5\u8BF4\u660E\uFF1A',
            play_content
          )
        )
      ),
      !!campaignInspectList.length && campaignInspectList.map(function (value, index) {
        var createtime = value.createtime,
            screenshot_b = value.screenshot_b,
            screenshot_c = value.screenshot_c,
            screenshot_o = value.screenshot_o,
            system_review_explain = value.system_review_explain,
            system_review = value.system_review,
            brand_review = value.brand_review,
            brand_review_username = value.brand_review_username,
            brand_review_view = value.brand_review_view;

        var sshot_b = !!screenshot_b ? JSON.parse(screenshot_b) : [];
        var sshot_c = !!screenshot_c ? JSON.parse(screenshot_c) : [];
        var sshot_o = !!screenshot_o ? JSON.parse(screenshot_o) : [];
        return React.createElement(
          _card2.default,
          { key: index, className: 'inspect-item', title: (0, _moment2.default)(createtime).format('YYYY-MM-DD') + '  \u7A3D\u67E5\u7ED3\u679C' },
          React.createElement(
            _row2.default,
            { type: 'flex' },
            React.createElement(
              _col2.default,
              { span: 8 },
              '\u6807\u4EF7\u622A\u56FE\uFF1A',
              !!sshot_b.length ? sshot_b.map(function (v, i) {
                return React.createElement('img', {
                  onClick: that.handleImgClick.bind(that, { bl: true, urls: sshot_b, close: true, index: i }),
                  key: i, src: v,
                  style: imgWrapperStyle });
              }) : null
            ),
            React.createElement(
              _col2.default,
              { span: 8 },
              '\u6210\u4EA4\u4EF7\u622A\u56FE\uFF1A',
              !!sshot_c.length ? sshot_c.map(function (v, i) {
                return React.createElement('img', {
                  onClick: that.handleImgClick.bind(that, { bl: true, urls: sshot_c, close: true, index: i }),
                  key: i, src: v,
                  style: imgWrapperStyle });
              }) : null
            ),
            React.createElement(
              _col2.default,
              { span: 8 },
              '\u5176\u4ED6\u622A\u56FE\uFF1A',
              !!sshot_o.length ? sshot_o.map(function (v, i) {
                return React.createElement('img', {
                  onClick: that.handleImgClick.bind(that, { bl: true, urls: sshot_o, close: true, index: i }),
                  key: i, src: v,
                  style: imgWrapperStyle });
              }) : null
            ),
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
              system_review_explain
            )
          ),
          React.createElement(_divider2.default, { dashed: true }),
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
        );
      })
    )
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=79_fbe8aed8529da62191e8.js.map