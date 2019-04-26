(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

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

/***/ "./app/widget/index/Brand/ClientActivityDetail/tpl.js":
/*!************************************************************!*\
  !*** ./app/widget/index/Brand/ClientActivityDetail/tpl.js ***!
  \************************************************************/
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

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@3.10.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MOCK = {
  activity_name: '关于双十一泸州老窖的活动申请',
  shop_name: '泸州老窖官方旗舰店',
  dealer_name: '泸州老窖贸易有限公司',
  apply_time: 1534230382429,
  start_time: 1534230382429,
  end_time: 1534230382429,
  activity_desc: '说明',
  cplist: [{
    product_name: '泸州老窖/泸州老窖52度醇香型/GJ1573CX/6瓶箱装',
    product_url: 'https://www.google.com',
    apply_price: 123,
    activity_type: '天猫商城聚划算',
    gify_satiuation: '精品礼盒一个',
    actural_price: 32,
    play_content: '满500减200',
    reject_day: 2,
    activity_pro_id: 'kafjk123k'
  }, {
    product_name: '泸州老窖/泸州老窖52度醇香型/GJ1573CX/6瓶箱装',
    product_url: 'https://www.google.com',
    apply_price: 123,
    activity_type: '天猫商城聚划算',
    gify_satiuation: '精品礼盒一个',
    actural_price: 32,
    play_content: '满500减200',
    reject_day: 2,
    activity_pro_id: 'kafjk123k'
  }, {
    product_name: '泸州老窖/泸州老窖52度醇香型/GJ1573CX/6瓶箱装',
    product_url: 'https://www.google.com',
    apply_price: 123,
    activity_type: '天猫商城聚划算',
    gify_satiuation: '精品礼盒一个',
    actural_price: 32,
    play_content: '满500减200',
    reject_day: 2,
    activity_pro_id: 'kafjk123k'
  }]
};
var FORMAT_TIME = 'YYYY-MM-DD HH:mm:ss';

var Tpl = (0, _That2.default)(function (that) {
  var _that$state$detail = that.state.detail,
      campaign_name = _that$state$detail.campaign_name,
      shop_name = _that$state$detail.shop_name,
      dealer_name = _that$state$detail.dealer_name,
      createtime = _that$state$detail.createtime,
      start_time = _that$state$detail.start_time,
      end_time = _that$state$detail.end_time,
      campaign_desc = _that$state$detail.campaign_desc,
      cplist = _that$state$detail.cplist;

  var proList = !!cplist ? cplist : [];
  var cardTitle = function cardTitle() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        product_name = _ref.product_name,
        product_url = _ref.product_url;

    return React.createElement(
      _row2.default,
      null,
      React.createElement(
        _col2.default,
        { span: 12 },
        '\u4EA7\u54C1\u4FE1\u606F\uFF1A',
        product_name
      ),
      React.createElement(
        _col2.default,
        { span: 12 },
        '\u4EA7\u54C1\u94FE\u63A5\uFF1A',
        React.createElement(
          'a',
          { href: product_url, target: '_blank' },
          product_url
        )
      )
    );
  };
  return React.createElement(
    _Layout2.default,
    {
      title: '\u6D3B\u52A8\u8BE6\u60C5',
      breadcrumbList: ['客户盘点', '客户信息', '客户详情', '活动详情'],
      linkList: ['', '2', '1', ''],
      history: that.props.history
    },
    React.createElement(
      'div',
      { className: 'client-activity-detail' },
      React.createElement(
        'section',
        { className: 'baseinfo' },
        React.createElement(
          _row2.default,
          null,
          React.createElement(
            _col2.default,
            { span: 24 },
            campaign_name
          )
        ),
        React.createElement(
          _row2.default,
          null,
          React.createElement(
            _col2.default,
            { span: 10 },
            '\u5E97\u94FA\uFF1A',
            shop_name
          ),
          React.createElement(
            _col2.default,
            { span: 10 },
            '\u6240\u5C5E\u5BA2\u6237\uFF1A',
            dealer_name
          ),
          React.createElement(
            _col2.default,
            { span: 10 },
            '\u7533\u8BF7\u65F6\u95F4\uFF1A',
            (0, _moment2.default)(createtime).format(FORMAT_TIME)
          ),
          React.createElement(
            _col2.default,
            { span: 10 },
            '\u6D3B\u52A8\u65F6\u95F4\uFF1A',
            (0, _moment2.default)(start_time).format(FORMAT_TIME) + ' ~ ' + (0, _moment2.default)(end_time).format(FORMAT_TIME)
          ),
          React.createElement(
            _col2.default,
            { span: 10 },
            '\u6D3B\u52A8\u8BF4\u660E\uFF1A',
            campaign_desc
          )
        )
      ),
      !!proList.length && proList.map(function (value, index) {
        var product_name = value.product_name,
            product_url = value.product_url,
            apply_price = value.apply_price,
            campaign_type = value.campaign_type,
            gift_situation = value.gift_situation,
            actual_price = value.actual_price,
            play_content = value.play_content,
            reject_day = value.reject_day,
            ins_count = value.ins_count,
            id = value.id;

        return React.createElement(
          _card2.default,
          { key: index, className: 'pro-item', title: cardTitle({ product_name: product_name, product_url: product_url }) },
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
          ),
          React.createElement(_divider2.default, { dashed: true }),
          React.createElement(
            _row2.default,
            null,
            React.createElement(
              _col2.default,
              { span: 24 },
              React.createElement(
                'span',
                null,
                '\u5B58\u5728\xA0',
                React.createElement(
                  'i',
                  { className: 'weight' },
                  ins_count || 0
                ),
                '\xA0\u5929\u7A3D\u67E5\u4E0D\u5408\u683C\u60C5\u51B5'
              ),
              React.createElement(
                _button2.default,
                { onClick: that.handleBtnClick.bind(that, id) },
                '\u7A3D\u67E5\u7ED3\u679C\u8BE6\u60C5'
              )
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
//# sourceMappingURL=77_adaa7f93bd4727053d81.js.map