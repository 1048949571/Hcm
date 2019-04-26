(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[336],{

/***/ "./app/widget/index/Shop/ActivityDetail/main.js":
/*!******************************************************!*\
  !*** ./app/widget/index/Shop/ActivityDetail/main.js ***!
  \******************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Shop/ActivityDetail/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PAGE = {
  pageNum: 1,
  pageSize: 10
};

var COMMON = {
  publicity: '活动公示',
  myActivity: '我的活动',

  shop: 'shop',
  product: 'product',
  review: 'review'

  // detailTYpe    shop:店铺活动详情 product:产品活动详情 review:我的活动详情

};
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleMoreClick = function (pageNum) {
      if (_this.state.detailType === 'shop') {
        var pagination = Object.assign({}, DEFAULT_PAGE, { pageNum: pageNum });
        _this.getCamDetailShop(pagination);
      }
      if (_this.state.detailType === 'product') {
        var _pagination = Object.assign({}, DEFAULT_PAGE, { pageNum: pageNum });
        _this.getCamDetailPro(_pagination);
      }
    };

    _this.getCamDetailShop = function (pagination) {
      var params = _extends({
        ser_day: moment(_this.props.location.state.ser_day).format('YYYY-MM-DD'),
        type: moment(_this.props.location.state.ser_day).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? 1 : 2,
        shop_id: '\'' + _this.state.id + '\'',
        campaign_node: '已审核'
      }, pagination);
      _ajax2.default.get('/hcm/campgign/ScheduleBMC', { params: params }).then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          _this.setState({
            shopDetail: Object.assign({}, data, pagination)
          });
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.getCamDetailPro = function (pagination) {
      var params = _extends({
        ser_day: moment(_this.props.location.state.ser_day).format('YYYY-MM-DD'),
        product_id: _this.state.id
      }, pagination);
      _ajax2.default.get('/hcm/campgign/findCamDetailPro', { params: params }).then(function (res) {
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;

        if (status === '10000') {
          _this.setState({
            proDetail: Object.assign({}, data, pagination)
          });
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.getMyActivityDetailInfo = function () {
      var params = {
        id: _this.state.id
      };
      _ajax2.default.get('/hcm/campgign/Detail', { params: params }).then(function (res) {
        var _res$data3 = res.data,
            data = _res$data3.data,
            status = _res$data3.status,
            message = _res$data3.message;

        if (status === '10000') {
          _this.setState({
            myActivityDetail: Object.assign({}, data)
          });
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.state = {
      breadcrumbName: COMMON[props.match.params.breadcrumbName],
      detailType: props.match.params.type,
      id: props.match.params.id,
      status: props.match.params.status,

      myActivityDetail: {},
      proDetail: {},
      shopDetail: {}
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.state.detailType === COMMON.review) {
        // 我的活动详情页面
        this.getMyActivityDetailInfo();
      }
      if (this.state.detailType === COMMON.product) {
        if (!this.props.location.state) {
          _message3.default.warning('当前页面数据失效，准备跳往活动公示页面！', 1.5, function () {
            _this2.props.history.push('/ActivityPublicity');
          });
        } else {
          this.getCamDetailPro(DEFAULT_PAGE);
        }
      }
      if (this.state.detailType === COMMON.shop) {
        if (!this.props.location.state) {
          _message3.default.warning('当前页面数据失效，准备跳往活动公示页面！', 1.5, function () {
            _this2.props.history.push('/ActivityPublicity');
          });
        } else {
          this.getCamDetailShop(DEFAULT_PAGE);
        }
      }
    }
    // 获取活动公示店铺详情

    // 获取活动公示产品详情

    // 获取我的活动详情信息

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
//# sourceMappingURL=336_330c4f9d9ed2db4352eb.js.map