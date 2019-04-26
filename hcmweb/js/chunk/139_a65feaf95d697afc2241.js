(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[139],{

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

/***/ "./app/widget/components/WrapperList/index.js":
/*!****************************************************!*\
  !*** ./app/widget/components/WrapperList/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@3.10.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _list = __webpack_require__(/*! antd/es/list */ "./node_modules/_antd@3.10.1@antd/es/list/index.js");

var _list2 = _interopRequireDefault(_list);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/list/style/css */ "./node_modules/_antd@3.10.1@antd/es/list/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! ./index.less */ "./app/widget/components/WrapperList/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// props: {
//   layout: [1,2,3]
//   title: '',
//   data: [{},{}],
//   showField: ['',''],
//   fields: ['','']
// }

var WrapperList = function WrapperList(props) {
  var _props$className = props.className,
      className = _props$className === undefined ? "" : _props$className,
      _props$title = props.title,
      title = _props$title === undefined ? "" : _props$title,
      _props$flag = props.flag,
      flag = _props$flag === undefined ? false : _props$flag,
      layout = props.layout,
      fields = props.fields,
      data = props.data,
      showField = props.showField,
      pageNo = props.pageNo,
      _props$pageSize = props.pageSize,
      pageSize = _props$pageSize === undefined ? 10 : _props$pageSize,
      totalElements = props.totalElements,
      pageChange = props.pageChange;

  var itemLayout = function itemLayout() {
    for (var _len = arguments.length, param = Array(_len), _key = 0; _key < _len; _key++) {
      param[_key] = arguments[_key];
    }

    return layout.map(function (v, i) {
      if (i == 1 && flag) {
        return React.createElement(
          _col2.default,
          { span: v, key: i },
          React.createElement('img', { src: param[i], width: '50', height: '50' })
        );
      }
      return React.createElement(
        _col2.default,
        { span: v, key: i },
        React.createElement(
          'span',
          { className: param[0] < 4 ? 'icon' : '' },
          param[i]
        )
      );
    });
  };
  return React.createElement(
    _card2.default,
    {
      bordered: false,
      className: 'wrapper-list-component ' + className,
      title: title
    },
    React.createElement(_list2.default, {
      className: 'wrapper-list',
      bordered: false,
      dataSource: data,
      header: React.createElement(
        _row2.default,
        null,
        itemLayout.apply(undefined, _toConsumableArray(fields))
      ),
      renderItem: function renderItem(item, index) {
        var arr = [];
        showField.forEach(function (v) {
          arr.push(item[v]);
        });
        return React.createElement(
          _row2.default,
          { className: 'item-container' },
          itemLayout.apply(undefined, [pageSize * (pageNo - 1) + index + 1].concat(arr))
        );
      },
      pagination: {
        simple: true,
        current: pageNo,
        // pageSize: 2,
        total: totalElements,
        onChange: pageChange
      }
    })
  );
};

exports.default = WrapperList;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/WrapperList/index.less":
/*!******************************************************!*\
  !*** ./app/widget/components/WrapperList/index.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Shop/DataAnalysis/tpl.js":
/*!***************************************************!*\
  !*** ./app/widget/index/Shop/DataAnalysis/tpl.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _progress = __webpack_require__(/*! antd/es/progress */ "./node_modules/_antd@3.10.1@antd/es/progress/index.js");

var _progress2 = _interopRequireDefault(_progress);

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@3.10.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@3.10.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/progress/style/css */ "./node_modules/_antd@3.10.1@antd/es/progress/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@3.10.1@antd/es/tabs/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _WrapperList = __webpack_require__(/*! ../../../components/WrapperList */ "./app/widget/components/WrapperList/index.js");

var _WrapperList2 = _interopRequireDefault(_WrapperList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var RangePicker = _datePicker2.default.RangePicker;

var TabPane = _tabs2.default.TabPane;

var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        activityDate = _that$state.activityDate,
        activityData = _that$state.activityData,
        hotDate = _that$state.hotDate,
        hotData = _that$state.hotData,
        hotShopDate = _that$state.hotShopDate,
        hotShopData = _that$state.hotShopData;

    return React.createElement(
        _Layout2.default,
        {
            breadcrumbList: ['数据中心', '数据分析'],
            linkList: ['', ''],
            history: that.props.history
        },
        React.createElement(
            'div',
            { className: 'dataanalysis' },
            React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                    'div',
                    { className: 'chart-box' },
                    React.createElement(
                        _card2.default,
                        {
                            style: { width: '70%', display: 'flex', flexDirection: 'column' },
                            bodyStyle: { padding: '0px 16px 16px', flex: '1 0' },
                            hoverable: true,
                            extra: React.createElement(
                                'a',
                                { href: './index.html#/DataAnalysisInfo/order' },
                                React.createElement(_icon2.default, { type: 'ellipsis' })
                            ),
                            title: '订单销售额趋势'
                        },
                        React.createElement(
                            'div',
                            { className: 'chart-info' },
                            React.createElement('div', { id: 'chart-bar' })
                        )
                    ),
                    React.createElement(
                        _card2.default,
                        {
                            style: { width: '30%', marginLeft: 10, display: 'flex', flexDirection: 'column' },
                            bodyStyle: { padding: 16, flex: '1 0' },
                            hoverable: true,
                            extra: React.createElement(
                                'a',
                                { href: './index.html#/DataAnalysisInfo/activities' },
                                React.createElement(_icon2.default, { type: 'ellipsis' })
                            ),
                            title: '活动商品数占比'
                        },
                        React.createElement(
                            'div',
                            { className: 'Activities-box' },
                            React.createElement(RangePicker, {
                                mode: ['month', 'month'],
                                format: "YYYY-MM",
                                onPanelChange: function onPanelChange(e) {
                                    return that.handlePanelChange(e, 'activityDate');
                                },
                                onOpenChange: function onOpenChange(status) {
                                    !status && that.getfindCamItemZB();
                                },
                                value: activityDate
                            }),
                            React.createElement(
                                'div',
                                { className: 'Activities-Progress' },
                                React.createElement(_progress2.default, { strokeLinecap: 'square', width: 150, strokeWidth: 10, status: 'active', type: 'circle', percent: Math.round(activityData.my_count / activityData.all_count * 100) }),
                                React.createElement(
                                    'p',
                                    null,
                                    '\u6D3B\u52A8\u5546\u54C1\u5360\u6BD4'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'Activities-info' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'span',
                                        null,
                                        activityData.all_count
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        '\u5171\u6D3B\u52A8\u5546\u54C1\u6570'
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'span',
                                        null,
                                        activityData.my_count
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        '\u6211\u6D3B\u52A8\u5546\u54C1\u6570'
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { style: { display: 'flex', minHeight: 300, flex: '0 0' } },
                    React.createElement(
                        _card2.default,
                        {
                            style: { width: '70%' },
                            bodyStyle: { padding: 16, flex: '1 0', display: 'flex', flexDirection: 'column', background: 'white' },
                            hoverable: true,
                            extra: React.createElement(
                                'a',
                                { href: './index.html#/DataAnalysisInfo/hotGoods' },
                                React.createElement(_icon2.default, { type: 'ellipsis' })
                            ),
                            title: '热销商品排名'
                        },
                        React.createElement(
                            'div',
                            { style: { textAlign: 'right' } },
                            React.createElement(RangePicker, {
                                mode: ['month', 'month'],
                                format: "YYYY-MM",
                                onPanelChange: function onPanelChange(e) {
                                    return that.handlePanelChange(e, 'hotDate');
                                },
                                onOpenChange: function onOpenChange(status) {
                                    !status && that.getHotTop();
                                },
                                value: hotDate
                            })
                        ),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(_table2.default, {
                                className: 'hot-goods-table',
                                rowKey: 'num_iid',
                                pagination: {
                                    simple: true,
                                    pageSize: hotData.pageSize,
                                    total: hotData.totalElements,
                                    current: hotData.pageNumber,
                                    onChange: function onChange(page, pageSize) {
                                        return that.changePagination(page, pageSize, 'hotData', that.getHotTop);
                                    }
                                },
                                columns: that.columns(),
                                dataSource: hotData.content
                            })
                        )
                    ),
                    React.createElement(
                        _card2.default,
                        {
                            style: { width: '30%', marginLeft: 10 },
                            bodyStyle: { padding: 16, flex: '1 0', display: 'flex', flexDirection: 'column', background: 'white' },
                            hoverable: true,
                            extra: React.createElement(
                                'a',
                                { href: './index.html#/DataAnalysisInfo/hotShops' },
                                React.createElement(_icon2.default, { type: 'ellipsis' })
                            ),
                            title: '热卖店铺排名'
                        },
                        React.createElement(RangePicker, {
                            mode: ['month', 'month'],
                            format: "YYYY-MM",
                            onPanelChange: function onPanelChange(e) {
                                return that.handlePanelChange(e, 'hotShopDate');
                            },
                            onOpenChange: function onOpenChange(status) {
                                !status && that.getHotShopTop();
                            },
                            value: hotShopDate
                        }),
                        React.createElement(_table2.default, {
                            className: 'hot-shop-table',
                            rowKey: 'shop_id',
                            pagination: {
                                simple: true,
                                pageSize: hotShopData.pageSize,
                                total: hotShopData.totalElements,
                                current: hotShopData.pageNumber,
                                onChange: function onChange(page, pageSize) {
                                    return that.changePagination(page, pageSize, 'hotShopData', that.getHotShopTop);
                                }
                            },
                            columns: that.shopColumns(),
                            dataSource: hotShopData.content
                        })
                    )
                )
            )
        )
    );
});
exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=139_a65feaf95d697afc2241.js.map