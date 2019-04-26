(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./app/widget/components/SevenDayCard/index.js":
/*!*****************************************************!*\
  !*** ./app/widget/components/SevenDayCard/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@3.10.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(/*! ./index.less */ "./app/widget/components/SevenDayCard/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WEEKS_TEXT = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

var SevenDayCard = function (_React$Component) {
  _inherits(SevenDayCard, _React$Component);

  function SevenDayCard(props) {
    _classCallCheck(this, SevenDayCard);

    var _this = _possibleConstructorReturn(this, (SevenDayCard.__proto__ || Object.getPrototypeOf(SevenDayCard)).call(this, props));

    _this.handleShowMoreClick = function () {
      _this.setState({
        isShowMoreBtns: !_this.state.isShowMoreBtns
      });
    };

    _this.state = {
      isShowMoreBtns: false
    };
    return _this;
  }

  _createClass(SevenDayCard, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isShowMoreBtns = this.state.isShowMoreBtns;
      var _props$infos = this.props.infos,
          _props$infos$sevenDay = _props$infos.sevenDayNums,
          sevenDayNums = _props$infos$sevenDay === undefined ? [] : _props$infos$sevenDay,
          currentDate = _props$infos.currentDate,
          currentDateIndex = _props$infos.currentDateIndex,
          _props$infos$shopBtnL = _props$infos.shopBtnList,
          shopBtnList = _props$infos$shopBtnL === undefined ? [] : _props$infos$shopBtnL,
          currentShopBtnIndex = _props$infos.currentShopBtnIndex;

      var shopCount = shopBtnList.reduce(function (a, b) {
        return a + b.act_count;
      }, 0);
      return React.createElement(
        'div',
        { className: 'sevenday-card-wrapper' },
        React.createElement(
          'section',
          { className: 'items' },
          sevenDayNums.length === 0 ? null : sevenDayNums.map(function (value, index) {
            var dateObj = (0, _moment2.default)(value.my_date);
            return React.createElement(
              'div',
              {
                className: 'item ' + (currentDateIndex === index ? 'active' : ''),
                onClick: function onClick() {
                  _this2.props.dateClick({ index: index, date: dateObj.format('YYYY-MM-DD') });
                },
                key: value.my_date
              },
              React.createElement(
                'div',
                { className: 'date' },
                React.createElement(
                  'span',
                  null,
                  WEEKS_TEXT[dateObj.day()],
                  '\xA0\xA0',
                  currentDate === (0, _moment2.default)().format('YYYY-MM-DD') && index === 0 ? React.createElement(
                    'p',
                    { className: 'today' },
                    '\u4ECA\u65E5'
                  ) : null
                ),
                React.createElement(
                  'span',
                  null,
                  dateObj.format('DD')
                )
              ),
              React.createElement(
                'p',
                { className: 'text' },
                index === 0 ? '进行中' : '已审核',
                '\u6D3B\u52A8\uFF08',
                value.all_count || 0,
                '\uFF09'
              )
            );
          })
        ),
        React.createElement(
          'div',
          { className: 'shop-btns' },
          React.createElement(
            'div',
            { className: 'head' },
            React.createElement(
              'h3',
              { style: { fontSize: '16px', color: '#333' } },
              '\u6D3B\u52A8\u5E97\u94FA\uFF08',
              shopBtnList.length || 0,
              '\uFF09'
            ),
            React.createElement(
              'span',
              { onClick: this.handleShowMoreClick },
              isShowMoreBtns ? '收起' : '展开',
              '\u66F4\u591A',
              React.createElement(_icon2.default, { type: isShowMoreBtns ? 'up' : 'down' })
            )
          ),
          React.createElement(_divider2.default, { style: { margin: '10px 0' } }),
          isShowMoreBtns ? React.createElement(
            'section',
            { className: 'btns' },
            React.createElement(
              _button2.default,
              {
                type: currentShopBtnIndex === 0 ? 'primary' : '',
                onClick: function onClick() {
                  _this2.props.shopBtnClick({ index: 0 });
                }
              },
              '\u5168\u90E8\uFF08',
              shopCount,
              '\uFF09'
            ),
            shopBtnList.length === 0 ? null : shopBtnList.map(function (value, index) {
              return React.createElement(
                _button2.default,
                {
                  type: currentShopBtnIndex === index + 1 ? 'primary' : '',
                  onClick: function onClick() {
                    _this2.props.shopBtnClick({ index: index + 1, shop_id: value.shop_id });
                  },
                  className: 'btn',
                  key: value.shop_name
                },
                value.shop_name + '\uFF08' + value.act_count + '\uFF09'
              );
            })
          ) : null
        )
      );
    }
  }]);

  return SevenDayCard;
}(React.Component);

exports.default = SevenDayCard;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/SevenDayCard/index.less":
/*!*******************************************************!*\
  !*** ./app/widget/components/SevenDayCard/index.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/ActivityPublic/tpl.js":
/*!******************************************************!*\
  !*** ./app/widget/index/Brand/ActivityPublic/tpl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _SevenDayCard = __webpack_require__(/*! ../../../components/SevenDayCard */ "./app/widget/components/SevenDayCard/index.js");

var _SevenDayCard2 = _interopRequireDefault(_SevenDayCard);

var _ActivityPublicCard = __webpack_require__(/*! ../../../components/ActivityPublicCard */ "./app/widget/components/ActivityPublicCard/index.js");

var _ActivityPublicCard2 = _interopRequireDefault(_ActivityPublicCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tpl = (0, _That2.default)(function (that) {
  var _that$state = that.state,
      sevenDayNums = _that$state.sevenDayNums,
      currentDateIndex = _that$state.currentDateIndex,
      currentDate = _that$state.currentDate,
      shopBtnList = _that$state.shopBtnList,
      currentShopBtnIndex = _that$state.currentShopBtnIndex,
      activityList = _that$state.activityList,
      _that$state$paginatio = _that$state.pagination,
      count = _that$state$paginatio.count,
      pageNum = _that$state$paginatio.pageNum,
      pageSize = _that$state$paginatio.pageSize;

  console.log(count, pageNum, pageSize);
  return React.createElement(
    _Layout2.default,
    {
      title: '\u6D3B\u52A8\u516C\u793A',
      breadcrumbList: ['活动信息', '活动公示'],
      linkList: ['', '']
    },
    React.createElement(_SevenDayCard2.default, {
      infos: {
        sevenDayNums: sevenDayNums,
        currentDate: currentDate,
        currentDateIndex: currentDateIndex,
        shopBtnList: shopBtnList,
        currentShopBtnIndex: currentShopBtnIndex
      },
      dateClick: that.handleDateChange,
      shopBtnClick: that.handleShopBtnChange
    }),
    activityList.length === 0 ? null : activityList.map(function (value, index) {
      return React.createElement(
        'div',
        { className: 'activity-item', key: value.id },
        React.createElement(_ActivityPublicCard2.default, {
          infos: _extends({}, value, { _index: index }),
          isShowReview: false
          // isExpandPrice={isExpandPrice}
          , togglePrice: that.handleTogglePriceClick })
      );
    }),
    pageNum * pageSize >= count ? null : React.createElement(
      'div',
      { className: 'load-more' },
      React.createElement(
        _button2.default,
        { onClick: that.handleLoadMoreBtnClick },
        '\u52A0\u8F7D\u66F4\u591A\xB7\xB7\xB7'
      )
    )
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=74_6484c8bc4927b1dbc45b.js.map