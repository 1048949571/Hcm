(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

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

/***/ "./app/widget/index/Brand/OrderAnalysis/tpl.js":
/*!*****************************************************!*\
  !*** ./app/widget/index/Brand/OrderAnalysis/tpl.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _Add = __webpack_require__(/*! ./Add */ "./app/widget/index/Brand/OrderAnalysis/Add.js");

var _Add2 = _interopRequireDefault(_Add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var RangePicker = _datePicker2.default.RangePicker;

var TabPane = _tabs2.default.TabPane;

var MOCK = [{ name: '假的1', num: 1, per: 1 }, { name: '假的2', num: 2, per: 2 }, { name: '假的3', num: 3, per: 30 }, { name: '假的4', num: 4, per: 4 }, { name: '假的5', num: 5, per: 5 }, { name: '假的6', num: 6, per: 6 }, { name: '假的7', num: 7, per: 7 }, { name: '假的8', num: 8, per: 8 }, { name: '假的9', num: 9, per: 9 }, { name: '假的10', num: 10, per: 10 }];


var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        dataList = _that$state.dataList,
        dealerVerify = _that$state.dealerVerify,
        start_time = _that$state.start_time,
        end_time = _that$state.end_time,
        chartData = _that$state.chartData,
        hotProductSalesRank = _that$state.hotProductSalesRank;

    return React.createElement(
        _Layout2.default,
        {
            breadcrumbList: ['数据中心', '订单分析'],
            linkList: ['', ''],
            history: that.props.history
        },
        React.createElement(
            'div',
            { className: 'orderanalysis' },
            React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                    _card2.default,
                    {
                        className: 'warning-box',
                        bodyStyle: { padding: 16, flex: '1 0' },
                        hoverable: true,
                        title: '订单销售额趋势'
                    },
                    React.createElement(
                        'div',
                        { className: 'chart-info' },
                        React.createElement('div', { id: 'chart-bar' }),
                        React.createElement(
                            'div',
                            { className: 'chart-buts' },
                            React.createElement(
                                'div',
                                { className: 'title-icon' },
                                React.createElement(
                                    'p',
                                    null,
                                    React.createElement('span', { style: { background: '#3AA1FF' } }),
                                    '\u8BA2\u8D2D\u6570'
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    React.createElement('span', { style: { background: '#4ECB73' } }),
                                    '\u4EA4\u6613\u989D'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'yesterday-info' },
                                React.createElement(
                                    'div',
                                    { className: 'indent' },
                                    React.createElement(
                                        'div',
                                        null,
                                        React.createElement(
                                            'p',
                                            null,
                                            '\u6628\u65E5\u8BA2\u5355\u603B\u6570'
                                        ),
                                        React.createElement(
                                            'p',
                                            { className: 'num' },
                                            React.createElement(
                                                'span',
                                                null,
                                                chartData.yestodayordernum
                                            ),
                                            '\uFF08\u5355\uFF09'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        null,
                                        React.createElement(
                                            'p',
                                            null,
                                            '\u73AF\u6BD4'
                                        ),
                                        React.createElement(
                                            'p',
                                            { className: 'num' },
                                            chartData.orderHB ? +chartData.orderHB > 0 ? React.createElement(_icon2.default, { style: { color: '#F5222D' }, type: 'caret-up' }) : React.createElement(_icon2.default, { style: { color: '#52C41A' }, type: 'caret-down' }) : null,
                                            chartData.orderHB
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'amount' },
                                    React.createElement(
                                        'div',
                                        null,
                                        React.createElement(
                                            'p',
                                            null,
                                            '\u6628\u65E5\u4EA4\u6613\u603B\u989D'
                                        ),
                                        React.createElement(
                                            'p',
                                            { className: 'num' },
                                            React.createElement(
                                                'span',
                                                null,
                                                chartData.yestodaysales
                                            ),
                                            '\uFF08\u4E07\u5143\uFF09'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        null,
                                        React.createElement(
                                            'p',
                                            null,
                                            '\u73AF\u6BD4'
                                        ),
                                        React.createElement(
                                            'p',
                                            { className: 'num' },
                                            chartData.moneyHB ? +chartData.moneyHB > 0 ? React.createElement(_icon2.default, { style: { color: '#F5222D' }, type: 'caret-up' }) : React.createElement(_icon2.default, { style: { color: '#52C41A' }, type: 'caret-down' }) : null,
                                            chartData.moneyHB
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'indentinfo' },
                    React.createElement(
                        'div',
                        { className: 'indent-header' },
                        React.createElement(
                            'h2',
                            null,
                            '\u8BA2\u5355\u4FE1\u606F\u5206\u6790'
                        )
                    ),
                    React.createElement(
                        _tabs2.default,
                        {
                            tabBarExtraContent: React.createElement(
                                'div',
                                { className: 'timebox' },
                                React.createElement(
                                    'span',
                                    null,
                                    '\u6570\u636E\u65F6\u95F4'
                                ),
                                React.createElement(RangePicker, {
                                    defaultValue: [start_time, end_time],
                                    onChange: that.handleTimeChange
                                })
                            ),
                            className: 'indent-tabs',
                            defaultActiveKey: '1'
                        },
                        React.createElement(
                            TabPane,
                            { tab: '\u5E97\u94FA\u5206\u6790', key: '1' },
                            shopInfo(that)
                        ),
                        React.createElement(
                            TabPane,
                            { tab: '\u5355\u54C1\u5206\u6790', key: '2' },
                            itemInfo(that)
                        ),
                        React.createElement(
                            TabPane,
                            { tab: '\u4F1A\u5458\u5206\u6790', key: '3' },
                            vipInfo(that)
                        )
                    )
                )
            ),
            React.createElement(_Add2.default, { getShop: function getShop() {
                    return that.getShopImportantList();
                }, getItem: function getItem() {
                    return that.getImportantProductData();
                }, ref: that.AddModal })
        )
    );
});
var shopInfo = function shopInfo(that) {
    var _that$state2 = that.state,
        shopSalesRank = _that$state2.shopSalesRank,
        productSalesRank = _that$state2.productSalesRank,
        shopImportantList = _that$state2.shopImportantList,
        shopImportantDefaultKey = _that$state2.shopImportantDefaultKey;

    return React.createElement(
        'div',
        { className: 'shop-info' },
        React.createElement(_WrapperList2.default, {
            className: 'shop-rank-list',
            title: '\u5E97\u94FA\u9500\u552E\u989D\u6392\u540D',
            layout: [4, 12, 8],
            fields: ['排名', '店铺名称', '销售额'],
            showField: ['shop_name', 'money'],
            data: shopSalesRank.list,
            pageNo: shopSalesRank.pageNo
            // pageSize={10}
            , totalElements: shopSalesRank.totalElements,
            pageChange: that.handlePageChange.bind(that, 'getShopSalesRank')
        }),
        React.createElement(
            _card2.default,
            { className: 'hot-shop-rank-list', extra: React.createElement(
                    'a',
                    { onClick: function onClick() {
                            return that.AddModal.current.showModal('shopVisible', true);
                        } },
                    React.createElement(_icon2.default, { style: { color: '#108CEE', verticalAlign: 'middle', marginRight: '4px' }, type: 'plus-circle' }),
                    '\u6DFB\u52A0\u5E97\u94FA'
                ), title: '\u91CD\u70B9\u5173\u6CE8\u5E97\u94FA\u70ED\u9500\u5546\u54C1\u6392\u540D' },
            shopImportantList.length ? React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    _tabs2.default,
                    { defaultActiveKey: shopImportantDefaultKey, onChange: that.handleTabChange.bind(that, '1') },
                    shopImportantList.map(function (v) {
                        return React.createElement(TabPane, { tab: v.shop_name, key: v.id });
                    })
                ),
                React.createElement(
                    'div',
                    { style: { padding: 20 } },
                    React.createElement(_WrapperList2.default
                    // className="shop-rank-list"
                    // title="店铺销售额排名"
                    , { flag: true,
                        layout: [4, 2, 12, 2, 4],
                        fields: ['排名', '', '商品信息', '销量', '销售额'],
                        showField: ['itempic', 'itemtitle', 'bnum', 'money'],
                        data: productSalesRank.list,
                        pageNo: productSalesRank.pageNo
                        // pageSize={10}
                        , totalElements: productSalesRank.totalElements,
                        pageChange: that.handlePageChange.bind(that, 'getProductSalesRank')
                    })
                )
            ) : React.createElement(
                'p',
                { style: { textAlign: 'center', lineHeight: '100px', fontSize: 16 } },
                '\u8BF7\u5148\u6DFB\u52A0\u91CD\u70B9\u5173\u6CE8\u5E97\u94FA'
            )
        )
    );
};
var itemInfo = function itemInfo(that) {
    var _that$state3 = that.state,
        hotProductSalesRank = _that$state3.hotProductSalesRank,
        categorySalesRank = _that$state3.categorySalesRank,
        importantProductList = _that$state3.importantProductList,
        importantProductDefaultKey = _that$state3.importantProductDefaultKey,
        importantShopSalesRank = _that$state3.importantShopSalesRank,
        importantVipPercent = _that$state3.importantVipPercent;

    return React.createElement(
        'div',
        { className: 'item-info' },
        React.createElement(
            'div',
            { className: 'item-info-box' },
            React.createElement(_WrapperList2.default, {
                className: 'hot-item-list',
                title: '\u70ED\u9500\u5355\u54C1\u9500\u552E\u989D\u6392\u540D',
                layout: [4, 14, 6],
                fields: ['排名', '单品', '销售额'],
                showField: ['product_name', 'trade_money'],
                data: hotProductSalesRank.list,
                pageNo: hotProductSalesRank.pageNo
                // pageSize={10}
                , totalElements: hotProductSalesRank.totalElements,
                pageChange: that.handlePageChange.bind(that, 'getHotProductSalesRank')
            }),
            React.createElement(_WrapperList2.default, {
                className: 'item-sales-list',
                title: '\u5206\u7C7B\u9500\u552E\u989D\u6392\u540D',
                layout: [4, 14, 6],
                fields: ['排名', '分类', '销售额'],
                showField: ['product_classify_name', 'trade_money'],
                data: categorySalesRank.list,
                pageNo: categorySalesRank.pageNo
                // pageSize={10}
                , totalElements: categorySalesRank.totalElements,
                pageChange: that.handlePageChange.bind(that, 'getCategorySalesRank')
            })
        ),
        React.createElement(
            _card2.default,
            { className: 'important-item-list', extra: React.createElement(
                    'a',
                    { onClick: function onClick() {
                            return that.AddModal.current.showModal('itemVisible', true);
                        } },
                    React.createElement(_icon2.default, { style: { color: '#108CEE', verticalAlign: 'middle', marginRight: '4px' }, type: 'plus-circle' }),
                    '\u6DFB\u52A0\u5355\u54C1'
                ), title: '\u91CD\u70B9\u5173\u6CE8\u5355\u54C1' },
            importantProductList.length ? React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    _tabs2.default,
                    { defaultActiveKey: importantProductDefaultKey, onChange: that.handleTabChange.bind(that, '2') },
                    importantProductList.map(function (v) {
                        return React.createElement(TabPane, { tab: v.product_name, key: v.id });
                    })
                ),
                React.createElement(
                    'div',
                    { style: { display: 'flex', justifyContent: 'space-between', padding: '0 92px 20px 20px' } },
                    React.createElement(
                        'section',
                        { className: 'left-content', style: { flex: '36% 0 0' } },
                        React.createElement(_WrapperList2.default
                        // className="item-sales-list"
                        // title=""
                        , { layout: [4, 14, 6],
                            fields: ['排名', '店铺名称', '销售额'],
                            showField: ['shop_name', 'trade_money'],
                            data: importantShopSalesRank.list,
                            pageNo: importantShopSalesRank.pageNo
                            // pageSize={10}
                            , totalElements: importantShopSalesRank.totalElements,
                            pageChange: that.handlePageChange.bind(that, 'getImportantShopSalesRank')
                        })
                    ),
                    React.createElement(
                        'section',
                        { className: 'right-content', style: { flex: '36% 0 0' } },
                        React.createElement(_WrapperList2.default
                        // className="item-sales-list"
                        // title=""
                        , { layout: [4, 8, 8, 4],
                            fields: ['排名', '城市', '数量', '占比'],
                            showField: ['city', 'buyer_num', 'zhanbi'],
                            data: importantVipPercent.list,
                            pageNo: importantVipPercent.pageNo
                            // pageSize={10}
                            , totalElements: importantVipPercent.totalElements,
                            pageChange: that.handlePageChange.bind(that, 'getImportantVipPercent')
                        })
                    )
                )
            ) : React.createElement(
                'p',
                { style: { textAlign: 'center', lineHeight: '100px', fontSize: 16 } },
                '\u8BF7\u5148\u6DFB\u52A0\u91CD\u70B9\u5173\u6CE8\u5355\u54C1'
            )
        )
    );
};
var vipInfo = function vipInfo(that) {
    var _that$state4 = that.state,
        vipProvincePercent = _that$state4.vipProvincePercent,
        vipCityPercent = _that$state4.vipCityPercent;

    return React.createElement(
        'div',
        { className: 'vip-info' },
        React.createElement(_WrapperList2.default, {
            className: 'vip-province-list',
            title: '\u4F1A\u5458\u7701\u4EFD\u5206\u5E03\u6570\u91CF\u5360\u6BD4\u6392\u540D',
            layout: [4, 8, 8, 4],
            fields: ['排名', '地区', '商品数', '占比'],
            showField: ['strict', 'count', 'zhanbi'],
            data: vipProvincePercent.list,
            pageNo: vipProvincePercent.pageNo
            // pageSize={10}
            , totalElements: vipProvincePercent.totalElements,
            pageChange: that.handlePageChange.bind(that, 'getVipProvincePercent')
        }),
        React.createElement(_WrapperList2.default, {
            className: 'vip-city-list',
            title: '\u4F1A\u5458\u57CE\u5E02\u5206\u5E03\u6570\u91CF\u5360\u6BD4\u6392\u540D',
            layout: [4, 8, 8, 4],
            fields: ['排名', '地区', '商品数', '占比'],
            showField: ['city', 'count', 'zhanbi'],
            data: vipCityPercent.list,
            pageNo: vipCityPercent.pageNo
            // pageSize={10}
            , totalElements: vipCityPercent.totalElements,
            pageChange: that.handlePageChange.bind(that, 'getVipCityPercent')
        })
    );
};

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_Symbol.js":
/*!********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_Symbol.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/_lodash@4.17.11@lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_baseGetTag.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_baseGetTag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/_lodash@4.17.11@lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/_lodash@4.17.11@lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/_lodash@4.17.11@lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_freeGlobal.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_freeGlobal.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../_webpack@4.21.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.21.0@webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_getRawTag.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_getRawTag.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/_lodash@4.17.11@lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_objectToString.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_objectToString.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_root.js":
/*!******************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_root.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/_lodash@4.17.11@lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/isObject.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/isObject.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/isObjectLike.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/isObjectLike.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/isSymbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/isSymbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/_lodash@4.17.11@lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/_lodash@4.17.11@lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ })

}]);
//# sourceMappingURL=87_d2eca165c25f963dd582.js.map