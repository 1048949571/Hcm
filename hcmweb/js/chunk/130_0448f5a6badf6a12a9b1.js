(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

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

/***/ "./app/widget/index/Service/LinkMarkingDetail/tpl.js":
/*!***********************************************************!*\
  !*** ./app/widget/index/Service/LinkMarkingDetail/tpl.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _list = __webpack_require__(/*! antd/es/list */ "./node_modules/_antd@3.10.1@antd/es/list/index.js");

var _list2 = _interopRequireDefault(_list);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _cascader = __webpack_require__(/*! antd/es/cascader */ "./node_modules/_antd@3.10.1@antd/es/cascader/index.js");

var _cascader2 = _interopRequireDefault(_cascader);

var _checkbox = __webpack_require__(/*! antd/es/checkbox */ "./node_modules/_antd@3.10.1@antd/es/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@3.10.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

__webpack_require__(/*! antd/es/list/style/css */ "./node_modules/_antd@3.10.1@antd/es/list/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/cascader/style/css */ "./node_modules/_antd@3.10.1@antd/es/cascader/style/css.js");

__webpack_require__(/*! antd/es/checkbox/style/css */ "./node_modules/_antd@3.10.1@antd/es/checkbox/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@3.10.1@antd/es/tabs/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPane = _tabs2.default.TabPane;
var TYPE_MAP = {
  all: '0',
  marked: '1',
  nobrand: '2',
  unmarked: '3'
};

var Tpl = (0, _That2.default)(function (that) {
  var _that$state = that.state,
      type = _that$state.type,
      pagination = _that$state.pagination,
      dataList = _that$state.dataList,
      classifyList = _that$state.classifyList,
      dataCounts = _that$state.dataCounts;

  var ListCom = function ListCom(data) {
    return React.createElement(_list2.default, {
      header: React.createElement(
        _row2.default,
        null,
        React.createElement(
          _col2.default,
          { span: 3 },
          '\u5E8F\u53F7'
        ),
        React.createElement(
          _col2.default,
          { span: 6 },
          '\u5546\u54C1ID'
        ),
        React.createElement(
          _col2.default,
          { span: 12 },
          '\u5546\u54C1\u6807\u9898'
        ),
        React.createElement(
          _col2.default,
          { span: 3 },
          '\u64CD\u4F5C'
        )
      ),
      bordered: true,
      pagination: {
        showQuickJumper: true,
        current: pagination.pageNo,
        pageSize: pagination.pageSize,
        total: pagination.totalElements,
        showTotal: function showTotal(total) {
          return '\u5171 ' + total + ' \u6761\u8BB0\u5F55';
        },
        onChange: that.handlePageChange
      },
      dataSource: data,
      renderItem: function renderItem(item, index) {
        return React.createElement(
          _row2.default,
          { className: 'list-item' },
          React.createElement(
            _col2.default,
            { span: 3 },
            pagination.pageSize * (pagination.pageNo - 1) + index + 1
          ),
          React.createElement(
            _col2.default,
            { span: 6 },
            item.item_id
          ),
          React.createElement(
            _col2.default,
            { span: 12 },
            React.createElement(
              'div',
              { className: 'overflow-ellipsis' },
              React.createElement(
                'a',
                { href: item.item_link, target: '_blank' },
                item.item_title
              )
            )
          ),
          React.createElement(
            _col2.default,
            { span: 3 },
            React.createElement(
              'span',
              {
                onClick: that.toggleFn.bind(that, index, true),
                className: 'mark-btn ' + (item.type == TYPE_MAP.marked || item.type == TYPE_MAP.nobrand ? 'active' : '')
              },
              React.createElement('i', null),
              '\u6807\u8BB0'
            )
          ),
          React.createElement(
            _col2.default,
            { span: 15, offset: 9 },
            item.type == TYPE_MAP.marked && !item._isShowEdit ? React.createElement(
              'div',
              { style: { marginTop: 5 } },
              item.product_class_name + ' / ' + item.product_name
            ) : null,
            item.type == TYPE_MAP.nobrand && !item._isShowEdit ? React.createElement(
              'div',
              { style: { marginTop: 5 } },
              React.createElement(
                _checkbox2.default,
                { checked: true },
                '\u975E\u672C\u54C1\u724C\u5546\u54C1'
              )
            ) : null,
            item._isShowEdit ? React.createElement(
              'div',
              null,
              React.createElement(
                _checkbox2.default,
                {
                  checked: item._isCheckboxStatus,
                  onChange: that.handleCheckboxChange.bind(that, index)
                },
                '\u975E\u672C\u54C1\u724C\u5546\u54C1'
              ),
              React.createElement(_cascader2.default, {
                value: [item._selected[0] && item._selected[0].id ? item._selected[0].id : item._selected[0], item._selected[1] && item._selected[1].id ? item._selected[1].id : item._selected[1]],
                className: 'cascader-wrapper',
                disabled: item._isCheckboxStatus ? item._isCheckboxStatus : false,
                getPopupContainer: function getPopupContainer(trigger) {
                  return trigger.parentNode;
                },
                options: classifyList,
                loadData: that.handleLoadData,
                onChange: that.handleCascaderChange.bind(that, index),
                showSearch: true
              }),
              React.createElement(
                'span',
                { className: 'options-btn' },
                React.createElement(_icon2.default, { type: 'close', onClick: that.toggleFn.bind(that, index, false) }),
                React.createElement(_icon2.default, { type: 'check', onClick: that.submitMark.bind(that, index) })
              )
            ) : null
          )
        );
      }
    });
  };
  return React.createElement(
    _Layout2.default,
    {
      breadcrumbList: ['系统设置', '商品链接标记', '店铺链接标记'],
      linkList: ['', '1', ''],
      history: that.props.history
    },
    React.createElement(
      'div',
      { className: 'link-marking-detail-wrapper' },
      React.createElement(
        _tabs2.default,
        { defaultActiveKey: type, className: 'main-tab', onChange: that.handleTabChange },
        React.createElement(
          TabPane,
          { tab: '\u5168\u90E8(' + (!!dataCounts && dataCounts.link_num || 0) + ')', key: TYPE_MAP.all, className: 'tab-item' },
          ListCom(dataList)
        ),
        React.createElement(
          TabPane,
          { tab: '\u5F85\u6807\u8BB0(' + (!!dataCounts && dataCounts.unmark_num || 0) + ')', key: TYPE_MAP.unmarked, className: 'tab-item' },
          ListCom(dataList)
        ),
        React.createElement(
          TabPane,
          { tab: '\u5DF2\u6807\u8BB0(' + (!!dataCounts && dataCounts.mark_num || 0) + ')', key: TYPE_MAP.marked, className: 'tab-item' },
          ListCom(dataList)
        ),
        React.createElement(
          TabPane,
          { tab: '\u975E\u672C\u54C1\u724C\u5546\u54C1(' + (!!dataCounts && dataCounts.mark_no_num || 0) + ')', key: TYPE_MAP.nobrand, className: 'tab-item' },
          ListCom(dataList)
        )
      )
    )
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=130_0448f5a6badf6a12a9b1.js.map