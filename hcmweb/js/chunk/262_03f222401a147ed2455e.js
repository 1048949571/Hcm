(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[262],{

/***/ "./app/widget/index/Brand/OrderInformation/main.js":
/*!*********************************************************!*\
  !*** ./app/widget/index/Brand/OrderInformation/main.js ***!
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/OrderInformation/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PAGE = {
  pageNo: 1,
  pageSize: 10
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this2 = this;

    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.clearInputFn = function (key) {
      _this.setState(_defineProperty({}, key, ''));
    };

    _this.searchChange = function (key, type, param) {
      switch (type) {
        case 'input':
          // console.log(param.target.value)
          _this.setState(_defineProperty({}, key, param.target.value));
          break;
        case 'select':
          // console.log(param)
          _this.setState(_defineProperty({}, key, param));
          break;
        case 'time':
          // console.log(param)
          if (param.length === 0) {
            _this.setState({
              startTime: '',
              endTime: ''
            });
          } else {
            _this.setState({
              startTime: param[0],
              endTime: param[1]
            });
          }
        default:
          null;
      }
    };

    _this.getDataList = function (params) {
      // console.log(params)
      // return
      _ajax2.default.get('/hcm/hcmShopMonitor/findOrderShopListByPage', { params: params }).then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          _this.setState({
            dataList: data.content.length === 0 ? [] : data.content.map(function (v) {
              return Object.assign({}, v, { _isExpand: false });
            }),
            pagination: Object.assign({}, _this.state.pagination, {
              pageNo: data.pageNumber,
              pageSize: data.pageSize,
              totalElements: data.totalElements
            }),
            expandedRowKeys: []
          });
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.handleOrder = function (orderId, flag) {
      // console.log(flag)
      LoadingModal({ bl: true });
      _ajax2.default.post('/hcm/hcmShopMonitor/updateOrderAbnormal', {
        orderId: orderId,
        orderState: flag
      }).then(function (res) {
        LoadingModal({ bl: false });
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;

        if (status === '10000') {
          data == 1 && _message3.default.success(message);
          _this.getDataList(_this.commonSearchData(DEFAULT_PAGE));
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.commonSearchData = function (pagination) {
      var _this$state = _this.state,
          shopId = _this$state.shopId,
          orderId = _this$state.orderId,
          status = _this$state.status,
          startTime = _this$state.startTime,
          endTime = _this$state.endTime,
          highPrice = _this$state.highPrice,
          lowPrice = _this$state.lowPrice;

      if (startTime === '' || endTime === '') {
        _message3.default.warning('时间不能为空，请选择时间！');
        return undefined;
      }
      // if (lowPrice !== '' || highPrice !== '') {
      if (lowPrice !== '' && isNaN(parseInt(lowPrice, 10)) || highPrice !== '' && isNaN(parseInt(highPrice, 10))) {
        _message3.default.warning('请输入数字价格！');
        return undefined;
      }
      if (lowPrice !== '' && highPrice !== '' && parseInt(lowPrice, 10) > parseInt(highPrice, 10)) {
        _message3.default.warning('最低价不能超过最高价！');
        return undefined;
      }
      // }
      var data = {
        shopId: shopId,
        // nick: buyerName,
        orderNo: orderId,
        orderState: status,
        fmoney: lowPrice,
        lmoney: highPrice,
        firstDate: startTime.format('YYYY-MM-DD'),
        lastDate: endTime.format('YYYY-MM-DD'),
        pageNo: pagination.pageNo,
        pageSize: pagination.pageSize
      };
      return data;
    };

    _this.handleSearch = function () {
      var data = _this.commonSearchData(DEFAULT_PAGE);
      if (data) {
        _this.getDataList(data);
      }
    };

    _this.handlePageChange = function (page) {
      _this.setState({
        pagination: Object.assign({}, _this.state.pagination, {
          pageNo: page
        })
      }, function () {
        var data = _this.commonSearchData(_this.state.pagination);
        if (data) {
          _this.getDataList(data);
        }
      });
    };

    _this.handleExpand = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(expanded, record) {
        var dataList, index, copyDataList, copyObj, res, showTableList, expandedRowKeys;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log(expanded)
                dataList = _this.state.dataList;
                index = dataList.findIndex(function (v) {
                  return v.id == record.id;
                });

                if (!(index < 0)) {
                  _context.next = 5;
                  break;
                }

                _message3.default.error('系统异常，请稍后再试！');
                return _context.abrupt('return');

              case 5:
                copyDataList = [].concat(_toConsumableArray(dataList));
                copyObj = Object.assign({}, copyDataList[index]);

                copyObj._isExpand = !record._isExpand;

                if (!(!record._isExpand && record._detail === undefined)) {
                  _context.next = 26;
                  break;
                }

                _context.prev = 9;

                LoadingModal({ bl: true });
                _context.next = 13;
                return _ajax2.default.get('/hcm/hcmShopMonitor/getOrderDetailById', { params: { orderId: record.id } });

              case 13:
                res = _context.sent;

                LoadingModal({ bl: false });

                if (!(res.data.status !== '10000')) {
                  _context.next = 18;
                  break;
                }

                _message3.default.error(res.data.message);
                return _context.abrupt('return');

              case 18:
                copyObj._detail = _extends({}, res.data.data);
                _context.next = 26;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context['catch'](9);

                LoadingModal({ bl: false });
                _message3.default.error(_context.t0.statusText);
                return _context.abrupt('return');

              case 26:
                copyDataList[index] = copyObj;
                showTableList = copyDataList.filter(function (v) {
                  return v._isExpand;
                });
                expandedRowKeys = showTableList.length ? showTableList.map(function (v) {
                  return v.id;
                }) : [];

                _this.setState({
                  expandedRowKeys: expandedRowKeys,
                  dataList: copyDataList
                });

              case 30:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[9, 21]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      shopId: props.match.params.shopId,
      shopName: props.match.params.shopName,
      wangwang: props.match.params.wangwang,
      orderId: '',
      // buyerName: '',
      // shopInfo: '',
      status: '',
      // result: '',
      highPrice: '',
      lowPrice: '',
      startTime: moment().subtract(6, 'd'),
      endTime: moment(),
      expandedRowKeys: [],
      expanded: false,

      dataList: [],
      pagination: _extends({}, DEFAULT_PAGE)
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getDataList(this.commonSearchData(DEFAULT_PAGE));
    }
    // 获取数据列表

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
//# sourceMappingURL=262_03f222401a147ed2455e.js.map