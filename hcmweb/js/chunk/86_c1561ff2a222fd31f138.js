(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./app/widget/components/Copyright.js":
/*!********************************************!*\
  !*** ./app/widget/components/Copyright.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Copyright = function (_React$Component) {
    _inherits(Copyright, _React$Component);

    function Copyright(props) {
        _classCallCheck(this, Copyright);

        return _possibleConstructorReturn(this, (Copyright.__proto__ || Object.getPrototypeOf(Copyright)).call(this, props));
    }

    _createClass(Copyright, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: this.props.clazzName ? this.props.clazzName : 'Copyright' },
                'Copyright \xA9 \u676D\u5DDE\u4E45\u70B9\u7F51\u7EDC\u6280\u672F\u6709\u9650\u516C\u53F8'
            );
        }
    }]);

    return Copyright;
}(React.Component);

exports.default = Copyright;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/Layout/index.js":
/*!***********************************************!*\
  !*** ./app/widget/components/Layout/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

var _Copyright = __webpack_require__(/*! ../Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

__webpack_require__(/*! ./index.less */ "./app/widget/components/Layout/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightBox = function RightBox(props) {
  return React.createElement(
    'div',
    { className: 'layout-wrapper ' + (props.className || '') },
    React.createElement(
      'div',
      { className: 'header-wrapper' },
      React.createElement(
        _breadcrumb2.default,
        { className: 'breadcrumb' },
        props.breadcrumbList.map(function (v, i) {
          if (props.linkList[i] === '') {
            return React.createElement(
              _breadcrumb2.default.Item,
              { key: v },
              v
            );
          }
          return React.createElement(
            _breadcrumb2.default.Item,
            {
              href: 'javascript:;',
              key: v },
            React.createElement(
              'span',
              { onClick: function onClick() {
                  props.history.go(-props.linkList[i]);
                } },
              v
            )
          );
        })
      )
    ),
    React.createElement(
      'div',
      { className: 'layout-content' },
      props.children
    ),
    React.createElement(
      'div',
      { className: 'copyright' },
      React.createElement(_Copyright2.default, null)
    )
  );
};

RightBox.defaultProps = {
  title: '标题',
  breadcrumbList: [],
  linkList: []
};

exports.default = RightBox;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/Layout/index.less":
/*!*************************************************!*\
  !*** ./app/widget/components/Layout/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/MonitorInfo/tpl.js":
/*!***************************************************!*\
  !*** ./app/widget/index/Brand/MonitorInfo/tpl.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _columns = __webpack_require__(/*! ./columns */ "./app/widget/index/Brand/MonitorInfo/columns.js");

var _columns2 = _interopRequireDefault(_columns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;

var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        date = _that$state.date,
        totalNum = _that$state.totalNum,
        pageSize = _that$state.pageSize,
        pageNo = _that$state.pageNo,
        classInfo = _that$state.classInfo,
        priceList = _that$state.priceList,
        dataList = _that$state.dataList,
        targetItem = _that$state.targetItem;

    return React.createElement(
        _Layout2.default,
        {
            breadcrumbList: ['售价监控', '监控详情'],
            linkList: ['1', ''],
            history: that.props.history
        },
        React.createElement(
            'div',
            { className: 'monitorinfo' },
            React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                    'div',
                    { className: 'class-info' },
                    React.createElement(
                        'h3',
                        null,
                        classInfo.productClassifyName
                    ),
                    React.createElement(
                        'ul',
                        { className: 'info' },
                        React.createElement(
                            'li',
                            null,
                            '\u76D1\u63A7\u65F6\u95F4\uFF1A',
                            React.createElement(
                                'span',
                                null,
                                classInfo.monitorDate
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            '\u9891\u6B21\uFF1A',
                            React.createElement(
                                'span',
                                null,
                                classInfo.frequency
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'price-list-box' },
                    React.createElement(_icon2.default, { onClick: function onClick() {
                            return that.onScrollLeft(false);
                        }, type: 'left' }),
                    React.createElement(
                        'ul',
                        { className: 'price-list' },
                        React.createElement('li', { className: 'space' }),
                        priceList.map(function (item, index) {
                            return React.createElement(
                                'li',
                                { onClick: function onClick() {
                                        return that.onSelectItem(item);
                                    }, className: item.plat_name === targetItem.plat_name ? 'price-item active' : 'price-item', key: index },
                                React.createElement(
                                    'strong',
                                    null,
                                    item.plat_name
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    React.createElement(
                                        'span',
                                        null,
                                        '\u4F4E\u4EF7\u5546\u54C1\u6570\u91CF'
                                    ),
                                    React.createElement(
                                        'span',
                                        { style: { fontSize: '24px', color: '#000' } },
                                        item.my_count
                                    )
                                )
                            );
                        }),
                        React.createElement('li', { className: 'space' })
                    ),
                    React.createElement(_icon2.default, { onClick: function onClick() {
                            return that.onScrollLeft(true);
                        }, type: 'right' })
                ),
                React.createElement(
                    'div',
                    { className: 'data-list-box' },
                    React.createElement(
                        'div',
                        { className: 'buts' },
                        React.createElement(
                            _button2.default,
                            { href: '/hcm/monitorPrice/downLoad?price_type=' + targetItem.plat_code + '&id=' + that.props.match.params.id + '&my_date=' + moment(date).format('YYYY-MM-DD') },
                            '\u4E0B\u8F7D\u6570\u636E'
                        ),
                        React.createElement(_datePicker2.default, { allowClear: false, onChange: function onChange(e) {
                                return that.editDate(e);
                            }, value: date })
                    ),
                    React.createElement(_table2.default, {
                        columns: _columns2.default[targetItem.plat_code],
                        pagination: false,
                        rowKey: 'num_iid',
                        expandRowByClick: true,
                        onExpand: function onExpand(expanded, record) {
                            return that.onExpand(expanded, record);
                        },
                        expandedRowRender: function expandedRowRender(record, index, indent, expanded) {
                            return that.rowRender(record, index, indent, expanded);
                        },
                        dataSource: dataList
                    }),
                    React.createElement(
                        'div',
                        { className: 'footer' },
                        React.createElement(
                            'div',
                            { className: 'info' },
                            '\u5171 ' + totalNum + ' \u6761\u8BB0\u5F55 ',
                            '\xA0\xA0',
                            '\u7B2C  ' + pageNo + '  / ' + Math.ceil(totalNum / pageSize) + ' \u9875'
                        ),
                        React.createElement(_pagination2.default, { pageSize: pageSize, current: pageNo, total: totalNum, onChange: that.changePagination, onShowSizeChange: that.onPaginationSize, showSizeChanger: true, showQuickJumper: true })
                    )
                )
            ),
            localStorage.logintype == 'HCM' ? React.createElement(
                'div',
                { className: 'feedback' },
                React.createElement(
                    'a',
                    { className: 'AddFeedback', href: './index.html#/AddFeedback' },
                    React.createElement(_icon2.default, { style: { color: '#BDA571', fontSize: 20, paddingRight: 10 }, type: 'message' }),
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'p',
                            null,
                            '\u76D1\u63A7\u6570\u636E\u4E0D\u7CBE\u51C6,'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\u70B9\u6211\u53CD\u9988\uFF01'
                        )
                    )
                )
            ) : null
        )
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=86_c1561ff2a222fd31f138.js.map