(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./app/widget/index/Brand/OrderInformation/tpl.js":
/*!********************************************************!*\
  !*** ./app/widget/index/Brand/OrderInformation/tpl.js ***!
  \********************************************************/
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

var Tpl = (0, _That2.default)(function (that) {
  var _that$state = that.state,
      shopId = _that$state.shopId,
      shopName = _that$state.shopName,
      wangwang = _that$state.wangwang,
      startTime = _that$state.startTime,
      endTime = _that$state.endTime,
      orderId = _that$state.orderId,
      status = _that$state.status,
      expandedRowKeys = _that$state.expandedRowKeys,
      dataList = _that$state.dataList,
      highPrice = _that$state.highPrice,
      lowPrice = _that$state.lowPrice,
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
    render: function render(text, record) {
      return React.createElement(
        React.Fragment,
        null,

        // 异常待处理显示异常图标 0已处理正常 1待处理 2已处理异常
        record.lowpriceStatus == 1 ? React.createElement('i', { className: 'exception-icon' }) : null,
        React.createElement(
          'span',
          { style: { marginLeft: 10 } },
          text
        )
      );
    },
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
    title: '付款时间',
    dataIndex: 'paytime',
    render: function render(text) {
      return text ? moment(text).format('YYYY-MM-DD HH:mm:ss') : '--';
    },
    key: 'pay_time',
    className: 'table-column-item'
  },
  // {
  //   title: '买家昵称',
  //   dataIndex: 'nick',
  //   key: 'buy_name',
  //   className: 'table-column-item',
  // },
  {
    title: '地区',
    dataIndex: 'strict',
    key: 'address',
    className: 'table-column-item'
  }, {
    title: '订单时间',
    dataIndex: 'tradecreated',
    render: function render(text) {
      return moment(text).format('YYYY-MM-DD HH:mm:ss');
    },
    key: 'order_time',
    className: 'table-column-item'
  }, {
    title: '订单状态',
    dataIndex: 'status',
    key: 'status',
    className: 'table-column-item'
  }];

  return React.createElement(
    _Layout2.default,
    {
      breadcrumbList: ['监控中心', '订单监控', '监控详情'],
      linkList: ['', '1', ''],
      history: that.props.history
    },
    React.createElement(
      'div',
      { className: 'order-information-wrapper' },
      React.createElement(
        'section',
        { className: 'search-container' },
        React.createElement(
          'div',
          { className: 'shopname-title' },
          React.createElement(
            'span',
            { className: 'shopname' },
            shopName
          ),
          React.createElement('i', null),
          React.createElement(
            'span',
            { className: 'wangwang' },
            wangwang
          )
        ),
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
              '\u8BA2\u5355\u72B6\u6001'
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
                { value: '\u4EA4\u6613\u6210\u529F' },
                '\u4EA4\u6613\u6210\u529F'
              ),
              React.createElement(
                Option,
                { value: '\u4EA4\u6613\u5173\u95ED' },
                '\u4EA4\u6613\u5173\u95ED'
              ),
              React.createElement(
                Option,
                { value: '\u521B\u5EFA\u5173\u95ED' },
                '\u521B\u5EFA\u5173\u95ED'
              ),
              React.createElement(
                Option,
                { value: '\u5356\u5BB6\u5DF2\u53D1\u8D27' },
                '\u5356\u5BB6\u5DF2\u53D1\u8D27'
              ),
              React.createElement(
                Option,
                { value: '\u7B49\u5F85\u4E70\u5BB6\u4ED8\u6B3E' },
                '\u7B49\u5F85\u4E70\u5BB6\u4ED8\u6B3E'
              ),
              React.createElement(
                Option,
                { value: '\u4E70\u5BB6\u5DF2\u4ED8\u6B3E' },
                '\u4E70\u5BB6\u5DF2\u4ED8\u6B3E'
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
            })
          ),
          React.createElement(
            _col2.default,
            { span: 8, className: 'item', style: { display: 'flex', alignItems: 'center' } },
            React.createElement(
              'span',
              null,
              '\u8BA2\u5355\u91D1\u989D'
            ),
            React.createElement(
              _input2.default.Group,
              { style: { width: 242 } },
              React.createElement(
                _col2.default,
                { span: 12 },
                React.createElement(_input2.default, {
                  suffix: lowPrice === "" ? null : React.createElement(_icon2.default, {
                    type: 'close-circle',
                    onClick: that.clearInputFn.bind(that, 'lowPrice'),
                    style: clearIconStyle
                  }),
                  value: lowPrice,
                  onChange: that.searchChange.bind(that, 'lowPrice', 'input'),
                  placeholder: '\u8BF7\u8F93\u5165' })
              ),
              React.createElement(
                _col2.default,
                { span: 12 },
                React.createElement(_input2.default, {
                  suffix: highPrice === "" ? null : React.createElement(_icon2.default, {
                    type: 'close-circle',
                    onClick: that.clearInputFn.bind(that, 'highPrice'),
                    style: clearIconStyle
                  }),
                  value: highPrice,
                  onChange: that.searchChange.bind(that, 'highPrice', 'input'),
                  placeholder: '\u8BF7\u8F93\u5165' })
              )
            )
          ),
          React.createElement(_col2.default, { span: 8, className: 'item' }),
          React.createElement(
            _col2.default,
            { span: 8, className: 'item' },
            React.createElement(
              _button2.default,
              { className: 'btn6', onClick: that.handleSearch },
              '\u67E5\u8BE2'
            )
          )
        )
      ),
      React.createElement(
        'section',
        { className: 'table-content-wrapper' },
        React.createElement(
          'a',
          {
            href: '/hcm/hcmShopMonitor/getOrderShopListDownload?shopId=' + shopId + '&orderNo=' + orderId + '&orderState=' + status + '&firstDate=' + startTime.format('YYYY-MM-DD') + '&lastDate=' + endTime.format('YYYY-MM-DD') + '&fmoney=' + lowPrice + '&lmoney=' + highPrice },
          React.createElement(
            _button2.default,
            null,
            '\u4E0B\u8F7D\u6570\u636E'
          )
        ),
        React.createElement(_table2.default, {
          className: 'table',
          rowKey: function rowKey(record) {
            return record.id;
          },
          pagination: {
            showQuickJumper: true,
            current: pagination.pageNo,
            total: pagination.totalElements,
            pageSize: pagination.pageSize,
            onChange: that.handlePageChange
          },
          dataSource: dataList,
          columns: columns,
          onExpand: that.handleExpand,
          expandedRowKeys: expandedRowKeys,
          expandedRowRender: function expandedRowRender(record, index, indent, expanded) {
            return React.createElement(_OrderMonitorExpandContent2.default, { handleOrder: that.handleOrder, data: record._detail || {}, orderId: record.id });
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
//# sourceMappingURL=88_6586df46abb3b78a1dff.js.map