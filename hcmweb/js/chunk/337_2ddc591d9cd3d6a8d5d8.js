(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[337],{

/***/ "./app/widget/index/Shop/ActivityPublicity/main.js":
/*!*********************************************************!*\
  !*** ./app/widget/index/Shop/ActivityPublicity/main.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Shop/ActivityPublicity/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CATEGORY = {
  shop: 'shop',
  pro: 'pro'
};

var DEFAULT_PAGE = {
  pageNum: 1,
  pageSize: 10
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.goTo = function (path, data) {
      var pathObj = {
        pathname: path
      };
      if (_this.state.currentCat === CATEGORY.shop) {
        pathObj.state = {
          shop_name: data.shop_name,
          act_count: data.act_count,
          ser_day: data._date
        };
      }
      if (_this.state.currentCat === CATEGORY.pro) {
        pathObj.state = {
          ser_day: data._date
        };
      }
      _this.props.history.push(pathObj);
    };

    _this.handleMoreClick = function (pageNum) {
      if (_this.state.currentCat === CATEGORY.pro) {
        var pagination = Object.assign({}, DEFAULT_PAGE, { pageNum: pageNum });
        _this.getProductPublicListShop(pagination);
      }
      if (_this.state.currentCat === CATEGORY.shop) {
        var _pagination = Object.assign({}, DEFAULT_PAGE, { pageNum: pageNum });
        _this.getCampaignShopsPageList(_pagination);
      }
    };

    _this.handleBtnClick = function (flag) {
      _this.setState({
        currentCat: flag
      });
    };

    _this.handleSearch = function (value, event) {
      // console.log(value, event)
      _this.setState({
        inputValue: value
      }, function () {
        if (_this.state.currentCat === CATEGORY.pro) {
          _this.getProductPublicListShop(DEFAULT_PAGE);
        }
        if (_this.state.currentCat === CATEGORY.shop) {
          _this.getCampaignShopsPageList(DEFAULT_PAGE);
        }
      });
    };

    _this.handleChangeDay = function (timestamp) {
      _this.setState({
        currentDay: timestamp
      }, function () {
        _this.getCampaignShopsPageList(DEFAULT_PAGE);
        _this.getProductPublicListShop(DEFAULT_PAGE);
      });
    };

    _this.getCampaignShopsPageList = function (pagination) {
      var params = _extends({
        ser_day: moment(_this.state.currentDay).format('YYYY-MM-DD'),
        shop_name: _this.state.inputValue,
        // ...DEFAULT_PAGE,
        campaign_node: '已审核'
      }, pagination);
      _ajax2.default.get('/hcm/campgign/findCampaignShopsPageList', { params: params }).then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          _this.setState({
            shops: Object.assign({}, data, pagination)
          });
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.getProductPublicListShop = function (pagination) {
      var params = _extends({
        ser_day: moment(_this.state.currentDay).format('YYYY-MM-DD'),
        product_name: _this.state.inputValue
      }, pagination);
      _ajax2.default.get('/hcm/campgign/findProductPublicListShop', { params: params }).then(function (res) {
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;

        if (status === '10000') {
          _this.setState({
            products: Object.assign({}, data, pagination)
          });
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.getSevenDayCardsData = function () {
      _ajax2.default.get('/hcm/campgign/ScheduleBMCSeven').then(function (res) {
        var _res$data3 = res.data,
            data = _res$data3.data,
            status = _res$data3.status,
            message = _res$data3.message;

        if (status === '10000') {
          _this.setState({
            sevenDayCards: data
          });
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.state = {
      sevenDayCards: [],
      currentDay: Date.now(),
      currentCat: CATEGORY.pro,
      inputValue: '',

      products: {},
      shops: {}
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getSevenDayCardsData();
      this.getProductPublicListShop(DEFAULT_PAGE);
      this.getCampaignShopsPageList(DEFAULT_PAGE);
    }
    // 切换日期

    // 获取店铺分类活动

    // 获取产品分类活动

    // 获取7日卡片数据

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(_tpl2.default, { that: this });
    }
  }]);

  return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=337_2ddc591d9cd3d6a8d5d8.js.map