(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[279],{

/***/ "./app/widget/index/Brand/SuspectExceptionOrder/main.js":
/*!**************************************************************!*\
  !*** ./app/widget/index/Brand/SuspectExceptionOrder/main.js ***!
  \**************************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/SuspectExceptionOrder/tpl.js");

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

    _this.handlePageChange = function (page) {
      _this.setState({
        pagination: Object.assign({}, _this.state.pagination, {
          pageNo: page
        })
      }, function () {
        var data = _this.commonSearchCondition(_this.state.pagination);
        if (data) {
          _this.getSuspentOrderList(data);
        }
      });
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

    _this.handleOrder = function (orderId, flag) {
      // console.log(flag)
      LoadingModal({ bl: true });
      _ajax2.default.post('/hcm/hcmShopMonitor/updateOrderAbnormal', {
        orderId: orderId,
        orderState: flag
      }).then(function (res) {
        LoadingModal({ bl: false });
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          data == 1 && _message3.default.success(message);
          _this.getSuspentOrderList(_this.commonSearchCondition(DEFAULT_PAGE));
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.getSuspentOrderList = function (params) {
      // console.log(params)
      // return
      _ajax2.default.get('/hcm/hcmShopMonitor/findOrderAbnormalListByPage', { params: params }).then(function (res) {
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;

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

    _this.commonSearchCondition = function (pagination) {
      var _this$state = _this.state,
          orderId = _this$state.orderId,
          status = _this$state.status,
          startTime = _this$state.startTime,
          endTime = _this$state.endTime;

      if (startTime === '' || endTime === '') {
        _message3.default.warning('时间不能为空，请选择时间！');
        return undefined;
      }
      var data = {
        orderNo: orderId,
        // shopInfo,
        orderState: status,
        // result,
        firstDate: startTime.format('YYYY-MM-DD'),
        lastDate: endTime.format('YYYY-MM-DD'),
        pageNo: pagination.pageNo,
        pageSize: pagination.pageSize
      };
      return data;
    };

    _this.handleSearch = function () {
      var data = _this.commonSearchCondition(DEFAULT_PAGE);
      if (data) {
        _this.getSuspentOrderList(data);
      }
    };

    _this.handleExpand = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(expanded, record) {
        var dataList, index, copyDataList, copyObj, res, showTableList, expandedRowKeys;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
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
      orderId: '',
      // shopInfo: '',
      status: '',
      // result: '',
      startTime: moment().subtract(6, 'd'),
      endTime: moment(),
      expandedRowKeys: [],
      // expanded: false,

      dataList: [],
      pagination: _extends({}, DEFAULT_PAGE)
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getSuspentOrderList(this.commonSearchCondition(DEFAULT_PAGE));
    }
    // 处理订单

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

/***/ }),

/***/ "./app/widget/index/Brand/SuspectExceptionOrder/tpl.js":
/*!*************************************************************!*\
  !*** ./app/widget/index/Brand/SuspectExceptionOrder/tpl.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _popover = __webpack_require__(/*! antd/es/popover */ "./node_modules/_antd@3.10.1@antd/es/popover/index.js");

var _popover2 = _interopRequireDefault(_popover);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/popover/style/css */ "./node_modules/_antd@3.10.1@antd/es/popover/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _OrderMonitorExpandContent = __webpack_require__(/*! ../../../components/OrderMonitorExpandContent */ "./app/widget/components/OrderMonitorExpandContent/index.js");

var _OrderMonitorExpandContent2 = _interopRequireDefault(_OrderMonitorExpandContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var RangePicker = _datePicker2.default.RangePicker;

var clearIconStyle = {
  width: '14px',
  height: '14px',
  opacity: 0.25,
  cursor: 'pointer'
};
var ORDER_STATUS = {
  0: '已处理（正常）',
  1: '待处理',
  2: '已处理（异常）'
};

var Tpl = (0, _That2.default)(function (that) {
  var _that$state = that.state,
      startTime = _that$state.startTime,
      endTime = _that$state.endTime,
      orderId = _that$state.orderId,
      shopInfo = _that$state.shopInfo,
      status = _that$state.status,
      result = _that$state.result,
      expandedRowKeys = _that$state.expandedRowKeys,
      dataList = _that$state.dataList,
      pagination = _that$state.pagination;


  var columns = [{
    title: '序号',
    render: function render(text, record, index) {
      return index + 1;
    },
    key: 'xuhao',
    className: 'table-column-item'
  }, {
    title: '订单编号',
    dataIndex: 'tid',
    key: 'order_num',
    className: 'table-column-item'
  }, {
    title: '订单金额',
    dataIndex: 'tradeMoney',
    render: function render(text) {
      return '\uFFE5' + text;
    },
    key: 'order-money',
    className: 'table-column-item'
  }, {
    title: '店铺信息',
    dataIndex: 'shopName',
    render: function render(text, record) {
      return React.createElement(
        _popover2.default,
        {
          placement: 'topLeft',
          content: React.createElement(
            React.Fragment,
            null,
            React.createElement(
              'p',
              null,
              '\u5E73\u53F0\uFF1A',
              record.platformName
            ),
            React.createElement(
              'p',
              null,
              '\u94FE\u63A5\u5730\u5740\uFF1A',
              React.createElement(
                'a',
                { href: record.shopUrl, target: '_blank' },
                record.shopUrl
              )
            ),
            React.createElement(
              'p',
              null,
              '\u5E97\u94FA\u540D\u79F0\uFF1A',
              text
            ),
            React.createElement(
              'p',
              null,
              '\u65FA\u65FA\u540D\u79F0\uFF1A',
              record.wangwang
            ),
            React.createElement(
              'p',
              null,
              '\u6240\u5C5E\u7ECF\u9500\u5546\uFF1A',
              record.dealerName
            )
          )
        },
        React.createElement(
          'span',
          { style: { display: 'inline-block', width: '60%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
          text
        )
      );
    },
    key: 'shop_info',
    className: 'table-column-item'
  }, {
    title: '订单时间',
    dataIndex: 'paytime',
    render: function render(text) {
      return moment(text).format('YYYY-MM-DD HH:mm:ss');
    },
    key: 'order_time',
    className: 'table-column-item'
  }, {
    title: '状态',
    dataIndex: 'orderStatus',
    render: function render(text) {
      return '' + (ORDER_STATUS[text] || '');
    },
    key: 'status',
    className: 'table-column-item'
  },
  // {
  //   title: '处理结果',
  //   render: text => ``,
  //   key: 'result',
  //   className: 'table-column-item',
  // },
  {
    title: '操作',
    render: function render(text, record) {
      return React.createElement(
        'span',
        {
          style: { cursor: 'pointer', color: '#108CEE' },
          onClick: that.handleExpand.bind(that, null, record) },
        '' + (record.orderStatus == 1 ? '立即处理' : '订单详情')
      );
    },
    key: 'options',
    className: 'table-column-item'
  }];

  return React.createElement(
    _Layout2.default,
    {
      breadcrumbList: ['监控中心', '订单监控', '疑似异常订单处理'],
      linkList: ['', '1', ''],
      history: that.props.history
    },
    React.createElement(
      'div',
      { className: 'suspent-exception-order-wrapper' },
      React.createElement(
        'section',
        { className: 'search-container' },
        React.createElement(
          _row2.default,
          { className: 'row-content' },
          React.createElement(
            _col2.default,
            { span: 8, className: 'item' },
            React.createElement(
              'span',
              null,
              '\u8BA2\u5355\u7F16\u53F7'
            ),
            React.createElement(_input2.default, {
              suffix: orderId === "" ? null : React.createElement(_icon2.default, {
                type: 'close-circle',
                onClick: that.clearInputFn.bind(that, 'orderId'),
                style: clearIconStyle
              }),
              onChange: that.searchChange.bind(that, 'orderId', 'input'),
              value: orderId,
              placeholder: '\u8BF7\u8F93\u5165',
              style: { width: 242 } })
          ),
          React.createElement(
            _col2.default,
            { span: 8, className: 'item' },
            React.createElement(
              'span',
              null,
              '\u72B6\u6001'
            ),
            React.createElement(
              _select2.default,
              {
                onChange: that.searchChange.bind(that, 'status', 'select'),
                defaultValue: status,
                style: { width: 242 },
                getPopupContainer: function getPopupContainer(trigger) {
                  return trigger.parentNode;
                }
              },
              React.createElement(
                Option,
                { value: '' },
                '\u5168\u90E8'
              ),
              React.createElement(
                Option,
                { value: '0' },
                '\u5DF2\u5904\u7406\uFF08\u6B63\u5E38\uFF09'
              ),
              React.createElement(
                Option,
                { value: '2' },
                '\u5DF2\u5904\u7406\uFF08\u5F02\u5E38\uFF09'
              ),
              React.createElement(
                Option,
                { value: '1' },
                '\u5F85\u5904\u7406'
              )
            )
          ),
          React.createElement(
            _col2.default,
            { span: 8, className: 'item' },
            React.createElement(
              'span',
              null,
              '\u8BA2\u5355\u65F6\u95F4'
            ),
            React.createElement(RangePicker, {
              onChange: that.searchChange.bind(that, '', 'time'),
              style: { width: 242 },
              getCalendarContainer: function getCalendarContainer(trigger) {
                return trigger.parentNode;
              },
              defaultValue: startTime === '' ? [] : [startTime, endTime]
            }),
            React.createElement(
              _button2.default,
              { style: { marginLeft: 10 }, className: 'btn6', onClick: that.handleSearch },
              '\u67E5\u8BE2'
            )
          )
        )
      ),
      React.createElement(
        'section',
        { className: 'table-content-wrapper' },
        React.createElement(_table2.default, {
          className: 'table',
          rowKey: function rowKey(record) {
            return record.id;
          },
          dataSource: dataList,
          pagination: {
            showQuickJumper: true,
            current: pagination.pageNo,
            total: pagination.totalElements,
            onChange: that.handlePageChange
          },
          columns: columns,
          onExpand: that.handleExpand,
          expandedRowKeys: expandedRowKeys,
          expandedRowRender: function expandedRowRender(record, index, indent, expanded) {
            return React.createElement(_OrderMonitorExpandContent2.default, { handleOrder: that.handleOrder, orderId: record.id, data: record._detail || {} });
          }
        })
      )
    )
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=279_08069328acf047716e22.js.map