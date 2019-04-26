(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[271],{

/***/ "./app/widget/index/Brand/SalesDataDetail/main.js":
/*!********************************************************!*\
  !*** ./app/widget/index/Brand/SalesDataDetail/main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/SalesDataDetail/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.getDealerShopList = function () {
      var dealer_id = _this.state.dealer_id;

      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/dealer/DealerDetail_Authshop',
        data: {
          dealer_id: dealer_id
        }
      }).then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          _this.setState({
            dealerShopList: data
          });
        }
      }).catch();
    };

    _this.getSaleData = function () {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$state = _this.state,
          dealer_id = _this$state.dealer_id,
          shop_id = _this$state.shop_id,
          month = _this$state.month,
          _this$state$paginatio = _this$state.pagination,
          pageNo = _this$state$paginatio.pageNo,
          pageSize = _this$state$paginatio.pageSize;

      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/dayReport/day',
        data: _extends({
          dealer_id: dealer_id,
          shop_id: shop_id,
          ser_month: month,
          pageNo: pageNo,
          pageSize: pageSize
        }, params)
      }).then(function (res) {
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;

        if (status === '10000') {
          _this.setState({
            saleDataList: data.content,
            pagination: Object.assign({}, _this.state.pagination, {
              pageNo: data.pageNumber,
              pageSize: data.pageSize,
              totalElements: data.totalElements
            })
          });
        }
      }).catch();
    };

    _this.handleDateChange = function (value, values) {
      // console.log(value, values)
      _this.setState({
        month: values === '' ? _this.props.match.params.month : values
      }, function () {
        _this.getSaleData();
      });
    };

    _this.handleSelectChange = function (value) {
      // console.log(value)
      _this.setState({
        shop_id: value === '' ? _this.props.match.params.shop_id : value
      }, function () {
        _this.getSaleData();
      });
    };

    _this.handlePageChange = function (page) {
      // console.log(page)
      _this.setState({
        pagination: Object.assign({}, _this.state.pagination, {
          pageNo: page
        })
      }, function () {
        _this.getSaleData();
      });
    };

    _this.state = {
      dealer_id: props.match.params.dealer_id,
      shop_id: props.match.params.shop_id,
      month: props.match.params.month,
      pagination: {
        pageNo: 1,
        pageSize: 10
      },
      saleDataList: [],
      dealerShopList: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getSaleData();
      this.getDealerShopList();
    }
    // 获取客户店铺列表

    // 获取每天的销售数据

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
//# sourceMappingURL=271_09a2bff601858131242d.js.map