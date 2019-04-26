(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./app/widget/components/ActivityListItem/index.js":
/*!*********************************************************!*\
  !*** ./app/widget/components/ActivityListItem/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _BrandIcon = __webpack_require__(/*! ../../components/BrandIcon */ "./app/widget/components/BrandIcon/index.js");

var _BrandIcon2 = _interopRequireDefault(_BrandIcon);

__webpack_require__(/*! ./index.less */ "./app/widget/components/ActivityListItem/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORMAT_TIME = 'YYYY-MM-DD HH:mm:ss';

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

var ActivityListItem = function ActivityListItem(props) {
  var _props$infos = props.infos,
      campaign_name = _props$infos.campaign_name,
      start_time = _props$infos.start_time,
      end_time = _props$infos.end_time,
      shop_name = _props$infos.shop_name,
      createtime = _props$infos.createtime,
      ping_name = _props$infos.ping_name,
      brand_name = _props$infos.brand_name,
      pro_count = _props$infos.pro_count,
      act_count = _props$infos.act_count,
      reject_count = _props$infos.reject_count,
      campaign_node = _props$infos.campaign_node,
      id = _props$infos.id,
      dealer_name = _props$infos.dealer_name,
      wait_my = _props$infos.wait_my;
  //   const {Identity} = props.Identity
  //   console.log(props.Identity)

  return React.createElement(
    'div',
    { className: 'activity-list-item', onClick: props.clicked.bind(undefined, '/ActivityDetails/' + id + '/' + campaign_node) },
    React.createElement(
      _row2.default,
      null,
      React.createElement(
        _col2.default,
        { span: 24, className: 'title' },
        campaign_name,
        ' ',
        props.Identity == 'HCMSUB' && wait_my == 'true' ? React.createElement(
          'span',
          { style: { background: '#e6f7ff', borderRadius: '4px', border: '1px solid #91d5ff', fontSize: '12px', padding: '2px 5px', marginLeft: '5px' } },
          '\u5F85\u6211\u5BA1\u6838'
        ) : null,
        ' '
      )
    ),
    React.createElement(
      _row2.default,
      { type: 'flex', justify: 'space-between' },
      React.createElement(
        _col2.default,
        { span: 10, className: 'activity-time' },
        '\u6D3B\u52A8\u65F6\u95F4\uFF1A',
        (0, _moment2.default)(start_time).format(FORMAT_TIME) + '~' + (0, _moment2.default)(end_time).format(FORMAT_TIME)
      ),
      React.createElement(
        _col2.default,
        { span: 4, className: 'activity-status' },
        icon(campaign_node),
        '\xA0\xA0',
        campaign_node
      )
    ),
    React.createElement(
      _row2.default,
      null,
      React.createElement(
        _col2.default,
        { span: 18, className: 'activity-master' },
        React.createElement(
          'span',
          null,
          shop_name
        ),
        React.createElement(
          'span',
          { style: { marginLeft: 0 } },
          React.createElement(_BrandIcon2.default, { pingName: ping_name })
        ),
        React.createElement(
          'span',
          null,
          dealer_name
        ),
        React.createElement(
          'span',
          null,
          (0, _moment2.default)(createtime).format(FORMAT_TIME)
        )
      ),
      React.createElement(
        _col2.default,
        { span: 6, className: 'counts' },
        React.createElement(
          'span',
          null,
          '\u5408\u8BA1\uFF1A',
          pro_count,
          '\u6761'
        ),
        '\xA0\xA0\xA0',
        React.createElement(
          'span',
          null,
          '|'
        ),
        '\xA0\xA0\xA0',
        React.createElement(
          'span',
          null,
          '\u901A\u8FC7\uFF1A',
          act_count,
          '\u6761'
        ),
        '\xA0\xA0\xA0',
        React.createElement(
          'span',
          null,
          '|'
        ),
        '\xA0\xA0\xA0',
        React.createElement(
          'span',
          null,
          '\u9A73\u56DE: ',
          reject_count,
          '\u6761'
        )
      )
    )
  );
};

exports.default = ActivityListItem;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/ActivityListItem/index.less":
/*!***********************************************************!*\
  !*** ./app/widget/components/ActivityListItem/index.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/ActivityReview/tpl.js":
/*!******************************************************!*\
  !*** ./app/widget/index/Brand/ActivityReview/tpl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@3.10.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@3.10.1@antd/es/tabs/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _ActivityListItem = __webpack_require__(/*! ../../../components/ActivityListItem */ "./app/widget/components/ActivityListItem/index.js");

var _ActivityListItem2 = _interopRequireDefault(_ActivityListItem);

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;
var RangePicker = _datePicker2.default.RangePicker;
var Option = _select2.default.Option;
var TabPane = _tabs2.default.TabPane;

var formItemStyle = {
  width: '242px'
};

var Tpl = (0, _That2.default)(function (that) {
  var _that$props$form = that.props.form,
      getFieldDecorator = _that$props$form.getFieldDecorator,
      getFieldValue = _that$props$form.getFieldValue;
  var _that$state = that.state,
      platformList = _that$state.platformList,
      cacheActivityList = _that$state.cacheActivityList,
      currentTabIndex = _that$state.currentTabIndex,
      statusNums = _that$state.statusNums,
      pagination = _that$state.pagination,
      Identity = _that$state.Identity;

  var activityList = cacheActivityList[currentTabIndex] || [];

  var clearIconStyle = {
    width: '14px',
    height: '14px',
    opacity: 0.25,
    cursor: 'pointer'
  };
  var clearIcon = function clearIcon(fieldName) {
    return React.createElement(_icon2.default, {
      onClick: that.handleClearIconClick.bind(that, fieldName),
      type: 'close-circle',
      style: clearIconStyle
    });
  };

  var searchBox = React.createElement(
    _form2.default,
    { onSubmit: that.handleFormSubmit },
    React.createElement(
      _row2.default,
      null,
      React.createElement(
        _col2.default,
        { span: 7 },
        React.createElement(
          FormItem,
          { label: '\u6D3B\u52A8\u4E3B\u9898', labelCol: { span: 4 }, className: 'inputAR' },
          getFieldDecorator('campaign_name', {
            initialValue: ''
          })(React.createElement(_input2.default, {
            placeholder: '\u8BF7\u8F93\u5165',
            style: formItemStyle,
            suffix: !!getFieldValue('campaign_name') ? clearIcon('campaign_name') : null
          }))
        )
      ),
      React.createElement(
        _col2.default,
        { span: 7 },
        React.createElement(
          FormItem,
          { label: '\u6240\u5C5E\u5BA2\u6237', labelCol: { span: 4 }, className: 'inputAR' },
          getFieldDecorator('dealer_name', {
            initialValue: ''
          })(React.createElement(_input2.default, {
            placeholder: '\u8BF7\u8F93\u5165',
            style: formItemStyle,
            suffix: !!getFieldValue('dealer_name') ? clearIcon('dealer_name') : null
          }))
        )
      ),
      React.createElement(
        _col2.default,
        { span: 10 },
        React.createElement(
          FormItem,
          { label: '\u63D0\u4EA4\u65F6\u95F4', labelCol: { span: 4 }, wrapperCol: { span: 19 } },
          getFieldDecorator('time', {
            initialValue: [(0, _moment2.default)().subtract(90, 'd'), (0, _moment2.default)()]
          })(React.createElement(RangePicker, {
            getCalendarContainer: function getCalendarContainer(trigger) {
              return trigger.parentNode;
            },
            format: 'YYYY-MM-DD HH:mm:ss',
            showTime: true,
            style: { width: '100%' } }))
        )
      )
    ),
    React.createElement(
      _row2.default,
      null,
      React.createElement(
        _col2.default,
        { span: 7 },
        React.createElement(
          FormItem,
          { label: '\u5E97\u94FA\u540D\u79F0', labelCol: { span: 4 }, className: 'inputAR' },
          getFieldDecorator('shop_name', {
            initialValue: ''
          })(React.createElement(_input2.default, {
            placeholder: '\u8BF7\u8F93\u5165',
            style: formItemStyle,
            suffix: !!getFieldValue('shop_name') ? clearIcon('shop_name') : null }))
        )
      ),
      React.createElement(
        _col2.default,
        { span: 7 },
        React.createElement(
          FormItem,
          { label: '\u5E73\u53F0', labelCol: { span: 4 }, className: 'inputAR' },
          getFieldDecorator('ping_id', {
            initialValue: 'all'
          })(React.createElement(
            _select2.default,
            { style: formItemStyle, getPopupContainer: function getPopupContainer(trigger) {
                return trigger.parentNode;
              } },
            React.createElement(
              Option,
              { value: 'all' },
              '\u5168\u90E8'
            ),
            platformList.map(function (value) {
              return React.createElement(
                Option,
                { value: value.id, key: value.id },
                value.dictName
              );
            })
          ))
        )
      ),
      React.createElement(
        _col2.default,
        { span: 10 },
        React.createElement(
          FormItem,
          { wrapperCol: { span: 23 }, style: { textAlign: 'right' } },
          React.createElement(
            _button2.default,
            { htmlType: 'submit', style: { color: '#1890ff', borderColor: '#1890ff' } },
            '\u67E5\u8BE2'
          )
        )
      )
    )
  );

  var TABS = [{
    text: '全部',
    key: "1",
    nums: 'all_count'
  }, {
    text: '活动待审核',
    key: '2',
    nums: 'w_count'
  }, {
    text: '待审核已过期',
    key: '3',
    nums: 'wt_count'
  }, {
    text: '活动已审核',
    key: '4',
    nums: 'ok_count'
  }, {
    text: '活动进行中',
    key: '5',
    nums: 'ing_count'
  }, {
    text: '活动已完成',
    key: '6',
    nums: 'ot_count'
  }];

  return React.createElement(
    _Layout2.default,
    {
      title: '\u6D3B\u52A8\u5BA1\u6838',
      breadcrumbList: ['活动信息', '活动审核'],
      linkList: ['', ''],
      className: 'activity-review-wrapper'
    },
    React.createElement(
      'div',
      { className: 'search-box' },
      searchBox
    ),
    React.createElement(
      'div',
      { className: 'search-result' },
      React.createElement(
        _tabs2.default,
        { activeKey: '' + currentTabIndex, className: 'tabs', onChange: that.handleTabChange },
        TABS.map(function (v) {
          return React.createElement(
            TabPane,
            { tab: v.text + '\uFF08' + (statusNums[v.nums] || 0) + '\uFF09', key: v.key },
            !!activityList.length ? activityList.map(function (value) {
              return React.createElement(_ActivityListItem2.default, { clicked: that.goToDetail, Identity: Identity, infos: value, key: value.id });
            }) : React.createElement(
              'div',
              { className: 'empty-style' },
              '\u6682\u65E0\u6570\u636E'
            )
          );
        })
      )
    ),
    React.createElement(
      'div',
      { className: 'pagination' },
      React.createElement(_pagination2.default, {
        total: pagination.totalElements,
        pageSize: pagination.pageSize,
        current: pagination.pageNo
        // showSizeChanger 
        , showQuickJumper: true,
        showTotal: function showTotal(total) {
          return '\u5171' + total + '\u6761';
        },
        onChange: that.handlePageChange
      })
    )
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=75_f751c6f40fd2f9655d43.js.map