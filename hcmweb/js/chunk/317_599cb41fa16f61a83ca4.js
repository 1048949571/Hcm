(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[317],{

/***/ "./app/widget/index/MonitorLowPriceScreenshot/main.js":
/*!************************************************************!*\
  !*** ./app/widget/index/MonitorLowPriceScreenshot/main.js ***!
  \************************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/MonitorLowPriceScreenshot/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

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

    _this.dateChange = function (dates) {
      if (!dates.length) {
        return;
      }
      _this.setState({
        start_time: dates[0],
        end_time: dates[1],
        pagination: {
          pageNum: 1,
          pageSize: 10
        }
      }, function () {
        _this.getScreenShot();
      });
    };

    _this.MoreClick = function () {
      _this.setState({
        pagination: Object.assign({}, _this.state.pagination, {
          pageNum: parseInt(_this.state.pagination.pageNum, 10) + 1
        })
      }, function () {
        _this.getScreenShot();
      });
    };

    _this.getScreenShot = function (itemid) {
      var _this$state = _this.state,
          platform = _this$state.platform,
          pagination = _this$state.pagination,
          start_time = _this$state.start_time,
          end_time = _this$state.end_time,
          detail = _this$state.detail;

      var data = {
        platform_code: platform,
        start_time: start_time.format('YYYY-MM-DD HH:mm:ss'),
        end_time: end_time.format('YYYY-MM-DD HH:mm:ss'),
        itemid: detail.itemid,
        pageSize: pagination.pageSize,
        pageNum: pagination.pageNum
      };
      LoadingModal({ bl: true });
      _ajax2.default.post('/hcm/keyword_monitor/PhotoHis', data).then(function (res) {
        LoadingModal({ bl: false });
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          // console.log(data)
          _this.setState({
            screenshotList: data.list,
            pagination: Object.assign({}, _this.state.pagination, {
              count: data.count
            })
          });
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.getDetailData = function () {
      var _this$state2 = _this.state,
          id = _this$state2.id,
          platform = _this$state2.platform;

      _ajax2.default.post('/hcm/keyword_monitor/getObj', {
        platform_code: platform,
        id: id
      }).then(function (res) {
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;

        if (status === '10000') {
          // console.log(data)
          _this.setState({
            detail: data
          }, function () {
            _this.getScreenShot();
          });
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.state = {
      id: props.match.params.productId,
      platform: props.match.params.optionId,
      detail: {},
      pagination: {
        pageNum: 1,
        pageSize: 10
      },
      start_time: moment().subtract(90, 'd'),
      end_time: moment(),
      screenshotList: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getDetailData();
    }
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
//# sourceMappingURL=317_599cb41fa16f61a83ca4.js.map