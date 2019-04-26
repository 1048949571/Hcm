(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[280],{

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
//# sourceMappingURL=280_87e40590cab980bd436b.js.map