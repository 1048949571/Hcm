(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[234],{

/***/ "./app/widget/components/ActivityBaseInfoCard/index.js":
/*!*************************************************************!*\
  !*** ./app/widget/components/ActivityBaseInfoCard/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(/*! ./index.less */ "./app/widget/components/ActivityBaseInfoCard/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORMAT_TIME = 'YYYY-MM-DD HH:mm:ss';

var formatUrl = function formatUrl(searchStr) {
  var arr = searchStr.slice(1).split('&');
  var obj = {};
  arr.forEach(function (v) {
    var array = v.split('=');
    obj[array[0]] = decodeURIComponent(array[1]);
  });
  return obj;
};

var ActivityBaseInfoCard = function ActivityBaseInfoCard(props) {
  var _props$infos = props.infos,
      campaign_name = _props$infos.campaign_name,
      shop_name = _props$infos.shop_name,
      start_time = _props$infos.start_time,
      ent_time = _props$infos.ent_time,
      ping_name = _props$infos.ping_name,
      createtime = _props$infos.createtime,
      campaign_desc = _props$infos.campaign_desc,
      dealer_name = _props$infos.dealer_name;

  return React.createElement(
    'div',
    { className: 'activity-baseinfo-card' },
    React.createElement(
      _row2.default,
      null,
      React.createElement(
        _col2.default,
        { span: 24, className: 'title' },
        campaign_name
      )
    ),
    React.createElement(
      _row2.default,
      null,
      React.createElement(
        _col2.default,
        { span: 8 },
        React.createElement(
          'p',
          { className: 'item' },
          '\u5E97\u94FA\uFF1A',
          shop_name
        ),
        React.createElement(
          'p',
          { className: 'item' },
          '\u6240\u5C5E\u5BA2\u6237\uFF1A',
          dealer_name
        ),
        React.createElement(
          'p',
          { className: 'item' },
          '\u6D3B\u52A8\u65F6\u95F4\uFF1A',
          (0, _moment2.default)(start_time).format(FORMAT_TIME) + '~' + (0, _moment2.default)(ent_time).format(FORMAT_TIME)
        )
      ),
      React.createElement(
        _col2.default,
        { span: 8 },
        React.createElement(
          'p',
          { className: 'item' },
          '\u5E73\u53F0\uFF1A',
          ping_name
        ),
        React.createElement(
          'p',
          { className: 'item' },
          '\u7533\u8BF7\u65F6\u95F4\uFF1A',
          (0, _moment2.default)(createtime).format(FORMAT_TIME)
        ),
        React.createElement(
          'p',
          { className: 'item' },
          '\u6D3B\u52A8\u8BF4\u660E\uFF1A',
          campaign_desc
        )
      ),
      React.createElement(
        _col2.default,
        { span: 8 },
        React.createElement(
          'div',
          { className: 'status-wrapper' },
          React.createElement('p', { className: 'img-wrapper' }),
          React.createElement(
            'p',
            { className: 'status' },
            props.location.params.status
          )
        )
      )
    )
  );
};

exports.default = ActivityBaseInfoCard;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/ActivityBaseInfoCard/index.less":
/*!***************************************************************!*\
  !*** ./app/widget/components/ActivityBaseInfoCard/index.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/ActivityDetails/tpl.js":
/*!*******************************************************!*\
  !*** ./app/widget/index/Brand/ActivityDetails/tpl.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _ActivityBaseInfoCard = __webpack_require__(/*! ../../../components/ActivityBaseInfoCard */ "./app/widget/components/ActivityBaseInfoCard/index.js");

var _ActivityBaseInfoCard2 = _interopRequireDefault(_ActivityBaseInfoCard);

var _ActivityPublicCard = __webpack_require__(/*! ../../../components/ActivityPublicCard */ "./app/widget/components/ActivityPublicCard/index.js");

var _ActivityPublicCard2 = _interopRequireDefault(_ActivityPublicCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const STATUS = {
//   '审核通过': 0,
//   '审核驳回': 1,
//   '待审核': 2
// }

var Tpl = (0, _That2.default)(function (that) {
  var _that$state = that.state,
      detail = _that$state.detail,
      examine_view = _that$state.examine_view,
      isExpandPrice = _that$state.isExpandPrice,
      cplist = _that$state.cplist;
  var status = that.props.match.params.status;

  return React.createElement(
    _Layout2.default,
    {
      title: '\u6D3B\u52A8\u8BE6\u60C5',
      breadcrumbList: ['活动信息', '活动审核', '活动详情'],
      linkList: ['', '1', ''],
      history: that.props.history
    },
    React.createElement(
      'div',
      { className: 'content-inner' },
      React.createElement(
        'div',
        { className: 'baseinfo' },
        React.createElement(_ActivityBaseInfoCard2.default, { infos: detail, location: that.props.match })
      ),

      // cplist ? 
      cplist.map(function (value, index) {
        // const reviewStatus = STATUS[value.campaign_node]
        return React.createElement(_ActivityPublicCard2.default, {
          isShowHead: false,
          reviewText: examine_view,
          className: 'product-item-wrapper'
          // reviewStatus={reviewStatus} 
          , infos: _extends({}, value, { _index: index }),
          key: value.id,
          submit: that.submitReviewInfo,
          inputChange: that.handleInputChange,
          togglePrice: that.handleTogglePriceClick
          // isExpandPrice={isExpandPrice}
          , activityStatus: status
        });
      })
    )
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=234_ea62dd1aa7a624eca6f5.js.map