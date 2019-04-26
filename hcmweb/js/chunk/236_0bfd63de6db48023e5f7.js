(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[236],{

/***/ "./app/widget/index/Brand/ActivityPublic/main.js":
/*!*******************************************************!*\
  !*** ./app/widget/index/Brand/ActivityPublic/main.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/ActivityPublic/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleDateChange = function (params) {
      _this.setState({
        currentDateIndex: params.index,
        currentDate: params.date,
        currentShopBtnIndex: 0
      }, function () {
        // console.log(params.date, this.state.currentDate)
        _this.getReviewedShop({
          type: params.date === (0, _moment2.default)().format('YYYY-MM-DD') ? 1 : 2,
          date: params.date
        });
        _this.getActivityList(_extends({
          type: params.date === (0, _moment2.default)().format('YYYY-MM-DD') ? 1 : 2,
          date: params.date
        }, _this.state.pagination));
      });
    };

    _this.handleTogglePriceClick = function (_index) {
      // console.log(123)
      var activityList = _this.state.activityList;

      var list = activityList.slice();
      list[_index]._isExpandPrice = !list[_index]._isExpandPrice;
      _this.setState({
        // isExpandPrice: !this.state.isExpandPrice
        activityList: list
      });
    };

    _this.handleLoadMoreBtnClick = function () {
      console.log();
      var _this$state = _this.state,
          campaign_node = _this$state.campaign_node,
          type = _this$state.type,
          ser_day = _this$state.ser_day,
          pageSize = _this$state.pageSize,
          pageNum = _this$state.pageNum,
          activityList = _this$state.activityList,
          pagination = _this$state.pagination,
          shopid = _this$state.shopid;

      pageNum++;
      LoadingModal({ bl: true });
      _ajax2.default.post('/hcm/campgign/ScheduleBMC', {
        campaign_node: campaign_node,
        type: type,
        ser_day: ser_day,
        pageSize: pageSize,
        pageNum: pageNum,
        shop_id: shopid ? shopid : null
      }).then(function (res) {
        console.log(res);
        LoadingModal({ bl: false });
        if (res.data.status == '10000') {
          console.log(pageNum);
          pagination.pageNum = pageNum;
          _this.setState({ activityList: res.data.data.list, pageNum: pageNum, pagination: pagination });
        }
      }).catch(function () {
        LoadingModal({ bl: false });
        message.error('获取信息失败');
      });
    };

    _this.handleShopBtnChange = function (params) {
      _this.setState({
        currentShopBtnIndex: params.index
      });
      // shop_id需要格式'id','id'...
      _this.getActivityList(_extends({
        type: (0, _moment2.default)().format('YYYY-MM-DD') === _this.state.currentDate ? 1 : 2,
        date: _this.state.currentDate,
        shop_id: params.shop_id === undefined ? '' : '\'' + params.shop_id + '\''
      }, _this.state.pagination));
    };

    _this.getActivityList = function (params) {
      console.log(params);
      var data = {
        campaign_node: '已审核',
        type: params.type,
        ser_day: params.date,
        pageSize: params.pageSize,
        pageNum: params.pageNum
      };
      var pagination = _this.state.pagination;

      if (params.shop_id !== undefined && params.shop_id !== '') {
        data.shop_id = params.shop_id;
      }
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/ScheduleBMC',
        data: data
      }).then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          // pagination.pageNum = 1
          var shopid = _this.state.shopid;

          if (params.shop_id !== undefined && params.shop_id !== '') {
            shopid = params.shop_id;
          } else {
            shopid = '';
          }
          _this.setState({
            activityList: !!data.list.length ? data.list.map(function (v) {
              return Object.assign({}, v, { _isExpandPrice: false });
            }) : [],
            pagination: Object.assign({}, _this.state.pagination, { count: data.count, pageNum: 1 }),
            type: params.type,
            ser_day: params.date,
            pageSize: params.pageSize,
            pageNum: 1,
            shopid: shopid
          });
        }
      }).catch();
    };

    _this.getReviewedShop = function (params) {
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/PublicShops',
        data: {
          campaign_node: "已审核",
          type: params.type,
          ser_day: params.date
        }
      }).then(function (res) {
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;

        if (status === '10000') {
          _this.setState({
            shopBtnList: data
          });
        }
      }).catch();
    };

    _this.getSevenDayActivity = function () {
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/ScheduleBMCSeven'
      }).then(function (res) {
        var _res$data3 = res.data,
            data = _res$data3.data,
            status = _res$data3.status,
            message = _res$data3.message;

        if (status === '10000') {
          _this.setState({
            sevenDayNums: data
          });
        }
      }).catch();
    };

    _this.state = {
      sevenDayNums: [],
      shopBtnList: [],
      currentDateIndex: 0,
      currentDate: (0, _moment2.default)().format('YYYY-MM-DD'),
      currentShopBtnIndex: 0,
      activityList: [],
      pagination: {
        pageNum: 1,
        pageSize: 10,
        count: 0
      },
      type: null,
      ser_day: null,
      pageSize: null,
      pageNum: null,
      campaign_node: '已审核',
      shopid: ''
      // isExpandPrice: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getSevenDayActivity();
      this.getReviewedShop({
        type: 1,
        date: this.state.currentDate
      });
      this.getActivityList({
        type: 1,
        date: this.state.currentDate,
        pageNum: this.state.pagination.pageNum,
        pageSize: this.state.pagination.pageSize
      });
    }
    //   组件的事件-----备注为了好看

    // 获取活动列表

    // 获取已审核店铺

    // 获取七日活动信息

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(_tpl2.default, { that: this });
    }
  }]);

  return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=236_0bfd63de6db48023e5f7.js.map