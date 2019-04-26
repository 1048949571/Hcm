(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./app/widget/components/ActivityPublicCard/index.js":
/*!***********************************************************!*\
  !*** ./app/widget/components/ActivityPublicCard/index.js ***!
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

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@3.10.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(/*! ./index.less */ "./app/widget/components/ActivityPublicCard/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORMAT_TIME = 'YYYY-MM-DD HH:mm:ss';

var ActivityPublicCard = function ActivityPublicCard(props) {
  var _props$infos = props.infos,
      class_name = _props$infos.class_name,
      shop_name = _props$infos.shop_name,
      start_time = _props$infos.start_time,
      end_time = _props$infos.end_time,
      product_name = _props$infos.product_name,
      product_url = _props$infos.product_url,
      price_map = _props$infos.price_map,
      apply_price = _props$infos.apply_price,
      campaign_type = _props$infos.campaign_type,
      gift_situation = _props$infos.gift_situation,
      play_content = _props$infos.play_content,
      actual_price = _props$infos.actual_price,
      campaign_id = _props$infos.campaign_id,
      campaign_node = _props$infos.campaign_node,
      campaignExamine = _props$infos.campaignExamine,
      id = _props$infos.id,
      _index = _props$infos._index,
      _isExpandPrice = _props$infos._isExpandPrice;
  // const status = props.reviewStatus
  //   console.log(props.infos.exa_falg)

  var blueBtnStyle = {
    color: '#666',
    borderColor: '#d9d9d9'
  };
  var yellowBtnStyle = {
    color: '#666',
    borderColor: '#d9d9d9'
  };
  var commonData = {
    campaign_id: campaign_id,
    cam_pro_id: id // 需要提交的公共信息
  };var cardTitle = React.createElement(
    _row2.default,
    null,
    React.createElement(
      _col2.default,
      { span: 8, className: 'overflow-hidden' },
      '\u4EA7\u54C1\u4FE1\u606F\uFF1A',
      class_name,
      '/',
      product_name
    ),
    React.createElement(
      _col2.default,
      { span: 12, className: 'overflow-hidden' },
      '\u5546\u54C1\u94FE\u63A5\uFF1A',
      React.createElement(
        'a',
        { href: product_url, target: '_blank' },
        product_url
      )
    ),
    React.createElement(
      _col2.default,
      { span: 3, className: 'toggle-price', onClick: props.togglePrice.bind(undefined, _index) },
      _isExpandPrice ? '收起' : '展开',
      '\u53C2\u8003\u4EF7\u683C\xA0',
      React.createElement(_icon2.default, { type: _isExpandPrice ? 'up' : 'down' })
    )
  );
  return React.createElement(
    'div',
    { className: 'wrapper ' + props.className },
    props.isShowHead ? React.createElement(
      _row2.default,
      { className: 'head' },
      React.createElement(
        _col2.default,
        { span: 8, className: 'text-overflow-hidden' },
        '\u5E97\u94FA\u540D\u79F0\uFF1A',
        shop_name
      ),
      React.createElement(
        _col2.default,
        { span: 16 },
        '\u6D3B\u52A8\u65F6\u95F4\uFF1A',
        (0, _moment2.default)(start_time).format(FORMAT_TIME) + '~' + (0, _moment2.default)(end_time).format(FORMAT_TIME)
      )
    ) : null,
    React.createElement(
      _card2.default,
      { title: cardTitle },
      _isExpandPrice ? React.createElement(
        React.Fragment,
        null,
        React.createElement(
          _row2.default,
          { className: 'price-map' },
          Object.entries(price_map).map(function (value, index) {
            return React.createElement(
              _col2.default,
              { key: index, span: 8 },
              value[0] + '\uFF1A\xA5' + value[1]
            );
          })
        ),
        React.createElement(_divider2.default, { dashed: true })
      ) : null,
      props.isShowReview ? React.createElement(
        React.Fragment,
        null,
        React.createElement(
          _row2.default,
          { className: 'public-info' },
          React.createElement(
            _col2.default,
            { span: 8 },
            React.createElement(
              'p',
              null,
              '\u7533\u8BF7\u6807\u4EF7\uFF1A',
              '\xA5' + apply_price
            ),
            React.createElement(
              'p',
              null,
              '\u5B9E\u9645\u6210\u4EA4\u4EF7\uFF1A',
              '\xA5' + actual_price
            ),
            React.createElement(
              'p',
              { className: 'text-overflow-hidden' },
              '\u73A9\u6CD5\u8BF4\u660E\uFF1A',
              play_content
            )
          ),
          React.createElement(
            _col2.default,
            { span: 8 },
            React.createElement(
              'p',
              { className: 'text-overflow-hidden' },
              '\u6D3B\u52A8\u7C7B\u578B\uFF1A',
              campaign_type
            ),
            React.createElement(
              'p',
              { className: 'text-overflow-hidden' },
              '\u8D60\u54C1\u60C5\u51B5\uFF1A',
              gift_situation
            ),
            React.createElement('p', null)
          ),
          React.createElement(
            _col2.default,
            { span: 8 },
            campaign_node !== '待审核' ? React.createElement(
              'p',
              null,
              '\u5BA1\u6838\u4EBA\uFF1A',
              !!campaignExamine ? campaignExamine.examine_username : ''
            ) : null,
            campaign_node === '待审核' && props.activityStatus === '活动待审核' && props.infos.exa_falg == 'ok' ? React.createElement(
              React.Fragment,
              null,
              React.createElement(
                'p',
                null,
                '\u5BA1\u6838\u610F\u89C1\uFF1A',
                React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165', style: { width: '242px' }, onChange: props.inputChange.bind(undefined, _index) })
              ),
              React.createElement(
                'p',
                null,
                '\u5BA1\u6838\u7ED3\u679C\uFF1A',
                React.createElement(
                  _button2.default,
                  {
                    icon: 'check-circle-o'
                    // style={blueBtnStyle} 
                    , className: 'btn4-pass',
                    onClick: props.submit.bind(undefined, _extends({
                      examine_view: props.reviewText[_index],
                      examine_result: '审核通过'
                    }, commonData), _index)
                  },
                  '\u901A\u8FC7'
                ),
                '\xA0\xA0',
                React.createElement(
                  _button2.default,
                  {
                    icon: 'info-circle-o'
                    // style={yellowBtnStyle} 
                    , className: 'btn4-reject',
                    onClick: props.submit.bind(undefined, _extends({
                      examine_view: props.reviewText[_index],
                      examine_result: '审核驳回'
                    }, commonData), _index)
                  },
                  '\u9A73\u56DE'
                )
              )
            ) : React.createElement(
              React.Fragment,
              null,
              React.createElement(
                'p',
                { className: 'text-overflow-hidden' },
                '\u5BA1\u6838\u610F\u89C1\uFF1A',
                !!campaignExamine ? campaignExamine.examine_view : ''
              ),
              React.createElement(
                'p',
                null,
                '\u5BA1\u6838\u7ED3\u679C\uFF1A',
                !!campaignExamine ? campaignExamine.examine_result === '审核通过' ? React.createElement(
                  _button2.default,
                  { icon: 'check-circle-o', type: 'primary', style: { backgroundColor: '#52C41A', borderColor: '#52C41A' } },
                  '\u901A\u8FC7'
                ) : React.createElement(
                  _button2.default,
                  { icon: 'info-circle-o', type: 'primary', style: { backgroundColor: '#faad14', borderColor: '#faad14' } },
                  '\u9A73\u56DE'
                ) : null
              )
            )
          )
        )
      ) : React.createElement(
        _row2.default,
        { className: 'review-wrapper' },
        React.createElement(
          _col2.default,
          { span: 8 },
          '\u6D3B\u52A8\u6807\u4EF7\uFF1A',
          '\xA5' + apply_price
        ),
        React.createElement(
          _col2.default,
          { span: 8, className: 'text-overflow-hidden' },
          '\u6D3B\u52A8\u7C7B\u578B\uFF1A',
          campaign_type
        ),
        React.createElement(
          _col2.default,
          { span: 8, className: 'text-overflow-hidden' },
          '\u8D60\u54C1\u60C5\u51B5\uFF1A',
          gift_situation
        ),
        React.createElement(
          _col2.default,
          { span: 8 },
          '\u5B9E\u9645\u6210\u4EA4\u4EF7\uFF1A',
          '\xA5' + actual_price
        ),
        React.createElement(
          _col2.default,
          { span: 8, className: 'text-overflow-hidden' },
          '\u73A9\u6CD5\u8BF4\u660E\uFF1A',
          play_content
        )
      )
    )
  );
};

ActivityPublicCard.defaultProps = {
  isShowHead: true, // 是否显示标题
  isShowReview: true, // 是否显示审核信息
  submit: function submit() {},
  inputChange: function inputChange() {},
  reviewText: '',
  activityStatus: ''
};

exports.default = ActivityPublicCard;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/ActivityPublicCard/index.less":
/*!*************************************************************!*\
  !*** ./app/widget/components/ActivityPublicCard/index.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=44_708346a682c295d5c2c4.js.map