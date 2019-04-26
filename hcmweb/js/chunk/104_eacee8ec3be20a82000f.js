(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ "./app/widget/index/Dealers/ApprovalQuery/tpl.js":
/*!*******************************************************!*\
  !*** ./app/widget/index/Dealers/ApprovalQuery/tpl.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

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

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@3.10.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@3.10.1@antd/es/tabs/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _BrandIcon = __webpack_require__(/*! ../../../components/BrandIcon */ "./app/widget/components/BrandIcon/index.js");

var _BrandIcon2 = _interopRequireDefault(_BrandIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = _breadcrumb2.default.Item;
var RangePicker = _datePicker2.default.RangePicker;
var FormItem = _form2.default.Item;
var TabPane = _tabs2.default.TabPane;

var clearIconStyle = {
  width: '14px',
  height: '14px',
  opacity: 0.25,
  cursor: 'pointer'
};

var SearchBox = (0, _That2.default)(function (that) {
  var _that$props$form = that.props.form,
      getFieldDecorator = _that$props$form.getFieldDecorator,
      getFieldValue = _that$props$form.getFieldValue;

  var clearIcon = function clearIcon(fieldName) {
    return React.createElement(_icon2.default, {
      onClick: that.handleClearIconClick.bind(that, fieldName),
      type: 'close-circle',
      style: clearIconStyle
    });
  };
  return React.createElement(
    _form2.default,
    { onSubmit: that.handleSearchSubmit },
    React.createElement(
      _row2.default,
      null,
      React.createElement(
        _col2.default,
        { span: 6, className: 'col' },
        React.createElement(
          FormItem,
          {
            label: '\u6D3B\u52A8\u4E3B\u9898',
            colon: true,
            className: 'form-item'
          },
          getFieldDecorator('campaign_name', {
            initialValue: ''
          })(React.createElement(_input2.default, {
            placeholder: '\u8BF7\u8F93\u5165',
            suffix: !!getFieldValue('campaign_name') ? clearIcon('campaign_name') : null
          }))
        )
      ),
      localStorage.getItem('logintype') === 'SHOP' ? null : React.createElement(
        _col2.default,
        { span: 6, className: 'col' },
        React.createElement(
          FormItem,
          {
            label: '\u5E97\u94FA\u540D\u79F0',
            colon: true,
            className: 'form-item'
          },
          getFieldDecorator('shop_name', {
            initialValue: ''
          })(React.createElement(_input2.default, {
            placeholder: '\u8BF7\u8F93\u5165',
            suffix: !!getFieldValue('shop_name') ? clearIcon('shop_name') : null
          }))
        )
      ),
      React.createElement(
        _col2.default,
        { span: 12, className: 'col' },
        React.createElement(
          FormItem,
          {
            label: '\u63D0\u4EA4\u65F6\u95F4',
            colon: true,
            className: 'form-item'
          },
          getFieldDecorator('time', {
            initialValue: [(0, _moment2.default)().subtract(90, 'd'), (0, _moment2.default)()]
          })(React.createElement(RangePicker, { getCalendarContainer: function getCalendarContainer(trigger) {
              return trigger.parentNode;
            }, format: 'YYYY-MM-DD', showTime: true }))
        )
      ),
      localStorage.getItem('logintype') === 'SHOP' ? React.createElement(
        _button2.default,
        { htmlType: 'submit', style: { color: '#1890ff', borderColor: '#1890ff' } },
        '\u67E5\u8BE2'
      ) : null
    ),
    localStorage.getItem('logintype') === 'SHOP' ? null : React.createElement(
      _row2.default,
      { justify: 'end', type: 'flex' },
      React.createElement(
        _button2.default,
        { htmlType: 'submit', style: { color: '#1890ff', borderColor: '#1890ff' } },
        '\u67E5\u8BE2'
      )
    )
  );
});

var SearchResult = (0, _That2.default)(function (that) {
  var _that$state$statusNum = that.state.statusNum,
      all_count = _that$state$statusNum.all_count,
      w_count = _that$state$statusNum.w_count,
      wt_count = _that$state$statusNum.wt_count,
      ok_count = _that$state$statusNum.ok_count,
      ing_count = _that$state$statusNum.ing_count,
      ot_count = _that$state$statusNum.ot_count;
  var _that$state = that.state,
      cacheListObj = _that$state.cacheListObj,
      currentStatus = _that$state.currentStatus;

  var currentList = cacheListObj[currentStatus] || [];
  var icon = function icon(node) {
    switch (node) {
      case '活动待审核':
        return React.createElement(_icon2.default, { type: 'clock-circle', style: { color: '#FAAD14' } });
        break;
      case '待审核已过期':
        return React.createElement(_icon2.default, { type: 'minus-circle', style: { color: '#FAAD14' } });
        break;
      case '活动已审核':
        return React.createElement(_icon2.default, { type: 'check-circle', style: { color: '#1890ff' } });
        break;
      case '活动进行中':
        return React.createElement(_icon2.default, { type: 'clock-circle', style: { color: '#1890ff' } });
        break;
      default:
        return React.createElement(_icon2.default, { type: 'check-circle', style: { color: '#52C41A' } });
        break;
    }
  };
  var list = [{
    tabName: '\u5168\u90E8\uFF08' + (all_count || 0) + '\uFF09',
    status: '1'
  }, {
    tabName: '\u6D3B\u52A8\u5F85\u5BA1\u6838\uFF08' + (w_count || 0) + '\uFF09',
    status: '2'
  }, {
    tabName: '\u5F85\u5BA1\u6838\u5DF2\u8FC7\u671F\uFF08' + (wt_count || 0) + '\uFF09',
    status: '3'
  }, {
    tabName: '\u6D3B\u52A8\u5DF2\u5BA1\u6838\uFF08' + (ok_count || 0) + '\uFF09',
    status: '4'
  }, {
    tabName: '\u6D3B\u52A8\u8FDB\u884C\u4E2D\uFF08' + (ing_count || 0) + '\uFF09',
    status: '5'
  }, {
    tabName: '\u6D3B\u52A8\u5DF2\u5B8C\u6210\uFF08' + (ot_count || 0) + '\uFF09',
    status: '6'
  }];
  var item = function item(config) {
    return React.createElement(
      'div',
      {
        className: 'result-item',
        onClick: function onClick() {
          var path = localStorage.getItem('logintype') === 'SHOP' ? '/MyActivityDetail/myActivity/review/' + config.id + '/' + config.campaign_node : '/ActivityDetails/' + config.id + '/' + config.campaign_node;
          that.goTo(path);
        },
        key: config.id },
      React.createElement(
        _row2.default,
        { className: 'row' },
        React.createElement(
          _col2.default,
          { span: 24 },
          React.createElement(
            'span',
            null,
            config.campaign_name
          )
        )
      ),
      React.createElement(
        _row2.default,
        { className: 'row' },
        React.createElement(
          _col2.default,
          { span: 12 },
          '\u6D3B\u52A8\u65F6\u95F4\uFF1A',
          that.formatTime(config.start_time, true),
          '~',
          that.formatTime(config.end_time, true)
        ),
        React.createElement(
          _col2.default,
          { span: 12, className: 'status' },
          icon(config.campaign_node),
          '\xA0\xA0',
          config.campaign_node
        )
      ),
      React.createElement(
        _row2.default,
        { className: 'row' },
        localStorage.getItem('logintype') === 'SHOP' ? null : React.createElement(
          _col2.default,
          { span: 4 },
          config.shop_name,
          React.createElement(_BrandIcon2.default, { pingName: config.ping_name })
        ),
        React.createElement(
          _col2.default,
          { span: 4 },
          that.formatTime(config.createtime, true)
        ),
        React.createElement(
          _col2.default,
          { span: 2, offset: localStorage.getItem('logintype') === 'SHOP' ? 14 : 10 },
          '\u5408\u8BA1\uFF1A',
          config.pro_count,
          '\u6761'
        ),
        React.createElement(
          _col2.default,
          { span: 2 },
          '\u901A\u8FC7\uFF1A',
          config.act_count,
          '\u6761'
        ),
        React.createElement(
          _col2.default,
          { span: 2 },
          '\u9A73\u56DE\uFF1A',
          config.reject_count,
          '\u6761'
        )
      )
    );
  };
  return React.createElement(
    _tabs2.default,
    { activeKey: '' + currentStatus, onChange: that.handleTabChange, className: 'result-list' },
    list.map(function (v) {
      return React.createElement(
        TabPane,
        { tab: v.tabName, key: v.status },
        !!currentList.length ? currentList.map(function (val) {
          return item(_extends({}, val));
        }) : React.createElement(
          'div',
          { className: 'empty-style' },
          '\u6682\u65E0\u6570\u636E'
        )
      );
    })
  );
});

var Tpl = (0, _That2.default)(function (that) {
  var _that$state2 = that.state,
      cacheListObj = _that$state2.cacheListObj,
      currentStatus = _that$state2.currentStatus;
  var _that$state$paginatio = that.state.pagination,
      totalElements = _that$state$paginatio.totalElements,
      pageSize = _that$state$paginatio.pageSize,
      pageNo = _that$state$paginatio.pageNo;

  return React.createElement(
    _Layout2.default,
    {
      breadcrumbList: ['活动信息', localStorage.getItem('logintype') === 'SHOP' ? '我的活动' : '审批查询'],
      linkList: ['', '']
    },
    React.createElement(
      'div',
      { className: 'approval-query-wrapper' },
      React.createElement(
        'section',
        { className: 'content' },
        React.createElement(
          'div',
          { className: 'condition-search' },
          React.createElement(SearchBox, { that: that })
        ),
        React.createElement(
          'div',
          { className: 'search-result' },
          React.createElement(SearchResult, { that: that }),
          React.createElement(_pagination2.default, {
            className: 'pagination',
            total: totalElements,
            defaultPageSize: pageSize,
            current: pageNo,
            showQuickJumper: true,
            onChange: that.handlePageChange,
            showTotal: function showTotal(total, range) {
              return '\u5171 ' + total + ' \u6761\u8BB0\u5F55';
            }
          })
        )
      )
    )
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=104_eacee8ec3be20a82000f.js.map