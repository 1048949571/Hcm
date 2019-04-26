(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[316],{

/***/ "./app/widget/index/MonitorDataAnalysis/main.js":
/*!******************************************************!*\
  !*** ./app/widget/index/MonitorDataAnalysis/main.js ***!
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/MonitorDataAnalysis/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.getMonitorDetail = function () {
      var _this$state = _this.state,
          id = _this$state.id,
          createtime = _this$state.createtime;

      _ajax2.default.post('/hcm/keyword_monitor/obj', {
        id: id,
        createtime: moment(parseInt(createtime, 10)).format('YYYY-MM-DD HH:mm:ss')
      }).then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          // console.log(data)
          _this.setState({
            detail: data
          });
          _this.getList('/hcm/keyword_monitor/low_sort', data.platform_code, 'lowPriceList', _this.state.low_pagination, 'low_pagination');
          _this.getList('/hcm/keyword_monitor/sale_sort', data.platform_code, 'salesRankList', _this.state.sale_pagination, 'sale_pagination');
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.getList = function (url, platform, key, pagination, pageKey) {
      var _this$state2 = _this.state,
          start_time = _this$state2.start_time,
          end_time = _this$state2.end_time,
          id = _this$state2.id;

      var data = {
        platform_code: platform,
        keyword_id: id,
        start_time: start_time.format('YYYY-MM-DD HH:mm:ss'),
        end_time: end_time.format('YYYY-MM-DD HH:mm:ss'),
        pageSize: pagination.pageSize,
        pageNo: pagination.pageNo
      };
      LoadingModal({ bl: true });
      _ajax2.default.post(url, data).then(function (res) {
        LoadingModal({ bl: false });
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;

        if (status === '10000') {
          var _this$setState;

          // console.log(data)
          _this.setState((_this$setState = {}, _defineProperty(_this$setState, key, data.content), _defineProperty(_this$setState, pageKey, Object.assign({}, _this.state[pageKey], {
            pageNo: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements
          })), _this$setState));
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.handleDateChange = function (dates, datestrings) {
      // console.log(dates, datestrings)
      if (!dates.length) {
        return;
      }
      _this.setState({
        start_time: dates[0],
        end_time: dates[1]
      }, function () {
        _this.getList('/hcm/keyword_monitor/low_sort', _this.state.detail.platform_code, 'lowPriceList', _this.state.low_pagination, 'low_pagination');
        _this.getList('/hcm/keyword_monitor/sale_sort', _this.state.detail.platform_code, 'salesRankList', _this.state.sale_pagination, 'sale_pagination');
      });
    };

    _this.pageChange = function (url, platform, key, pagination, pageKey, page) {
      _this.setState({
        pagination: Object.assign({}, _this.state.pagination, {
          pageNo: page
        })
      }, function () {
        _this.getList(url, platform, key, pagination, pageKey);
      });
    };

    _this.state = {
      id: props.match.params.productId,
      createtime: props.match.params.optionId,
      detail: {},
      start_time: moment().subtract(90, 'd'),
      end_time: moment(),
      low_pagination: {
        pageNo: 1,
        pageSize: 10
      },
      sale_pagination: {
        pageNo: 1,
        pageSize: 10
      },
      lowPriceList: [],
      salesRankList: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getMonitorDetail();
    }
    // 获取低价次数排行榜

  }, {
    key: 'render',

    // salesRankPageChange = page => {
    //   this.setState({
    //     pagination: Object.assign({}, this.state.pagination, {
    //       pageNo: page,
    //     })
    //   }, () => {
    //     this.getList('/hcm/keyword_monitor/sale_sort', this.state.detail.platform, 'salesRankList')
    //   })
    // }
    // lowPricePageChange = page => {
    //   this.setState({
    //     pagination: Object.assign({}, this.state.pagination, {
    //       pageNo: page,
    //     })
    //   }, () => {
    //     this.getList('/hcm/keyword_monitor/low_sort', this.state.detail.platform, 'lowPriceList')
    //   })
    // }
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
//# sourceMappingURL=316_e51d015c60385a206b1d.js.map