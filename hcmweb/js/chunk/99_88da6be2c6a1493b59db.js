(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "./app/widget/HOC/DateWrapper.js":
/*!***************************************!*\
  !*** ./app/widget/HOC/DateWrapper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DateWrapper(WrappedComponent) {
  return function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var btnList = [{
          text: '最近7天',
          num: 7
        }, {
          text: '最近30天',
          num: 30
        }, {
          text: '最近90天',
          num: 90
        }, {
          text: '最近365天',
          num: 365
        }];
        var newProps = {};
        if (this.props.showAllFooterButton) {
          newProps.renderExtraFooter = function () {
            return React.createElement(
              React.Fragment,
              null,
              btnList.map(function (v) {
                return React.createElement(
                  'span',
                  {
                    key: v.num,
                    style: { color: '#1890ff', cursor: 'pointer', marginRight: '10px' },
                    onClick: function onClick() {
                      _this2.props.onChange([moment().subtract(v.num, 'd'), moment()]);
                      _this2.refs._picker.picker.setState({
                        open: false
                      });
                    }
                  },
                  v.text
                );
              })
            );
          };
        }
        return React.createElement(WrappedComponent, _extends({ ref: '_picker' }, this.props, newProps));
      }
    }]);

    return _class;
  }(React.Component);
}

exports.default = DateWrapper;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ }),

/***/ "./app/widget/components/ComplaintInfoTable/index.js":
/*!***********************************************************!*\
  !*** ./app/widget/components/ComplaintInfoTable/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@3.10.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! ./index.less */ "./app/widget/components/ComplaintInfoTable/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPLAINT_STATUS_TAOBAO = {
  'submitted': 'submitted', //'已提交',
  'auditNoPass': 'auditNoPass', //'审核不通过',
  'auditPass': 'auditPass', // '投诉审核通过-卖家待申诉',
  'appeal': 'appeal', //'卖家已申诉-待投诉方响应',
  'involved': 'involved', //'小二介入',
  'withdrawal': 'withdrawal', //'投诉方已撤诉',
  'appealPass': 'appealPass', //,'卖家申诉成立',
  'appealNoPass': 'appealNoPass', //'卖家申诉不成立',
  'invalid': 'invalid' //'链接已删除',
}; // 投诉信息详情

var COMPLAINT_STATUS_1688 = {
  'audit_rejected': '投诉未受理',
  'compromised': '投诉方已接受通知',
  'success': '投诉侵权内容处理',
  'failed': '投诉内容保留',
  'cancelled': '投诉方撤诉'
};

var ComplaintInfo = function ComplaintInfo(props) {
  var list = props.data;
  var platform = props.platform;
  var pagination = props.pagination;
  var pageChange = props.pageChange;

  var columns_1688 = [{
    title: '序号',
    render: function render(text, record, index) {
      return index + 1;
    },
    key: 'xuhao'
  }, {
    title: '商品信息',
    render: function render(text, record) {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'p',
          { style: { color: '#333' } },
          record.company_name
        ),
        React.createElement(
          'p',
          null,
          record.item_title || ''
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            'a',
            { href: record.tort_link, target: '_blank' },
            record.tort_link
          )
        ),
        React.createElement(
          'p',
          { style: { color: '#999' } },
          React.createElement(
            'span',
            null,
            record.sale_price ? '\u4EF7\u683C:\uFFE5' + record.sale_price : ''
          ),
          '\xA0\xA0',
          React.createElement(
            'span',
            null,
            record.total_sold_quantity ? '30\u5929\u9500\u91CF:' + record.total_sold_quantity : ''
          ),
          '\xA0\xA0',
          React.createElement(
            'span',
            null,
            record.item_local ? '\u53D1\u8D27\u5730:' + record.item_local : ''
          )
        )
      );
    },
    key: 'goods-info',
    width: 500
  }, {
    title: '投诉信息',
    key: 'complaint-info',
    render: function render(text, record) {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'p',
          null,
          '\u6295\u8BC9\u8D26\u53F7\uFF1A',
          record.account_id
        ),
        React.createElement(
          'p',
          null,
          '\u77E5\u8BC6\u4EA7\u6743\u540D\u79F0\uFF1A',
          record.ipr_name ? record.ipr_name : ''
        ),
        React.createElement(
          'p',
          null,
          '\u6295\u8BC9\u5355\u53F7\uFF1A',
          record.complaint_num
        ),
        React.createElement(
          'p',
          null,
          '\u6295\u8BC9\u65F6\u95F4\uFF1A',
          moment(record.complaint_time).format('YYYY-MM-DD')
        )
      );
    }
  }, {
    title: '所属站点',
    key: 'website',
    dataIndex: 'site'
  }, {
    title: '状态',
    key: 'status',
    dataIndex: 'state'
  }];

  var columns_taobao = [{
    key: 'xuhao',
    title: '序号',
    render: function render(text, record, index) {
      return index + 1;
    }
  }, {
    key: 'goods-info',
    title: '商品信息',
    render: function render(text, record) {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'p',
          { style: { color: '#333' } },
          record.shop_name || '',
          record.wangwang ? '\uFF08' + record.wangwang + '\uFF09' : ''
        ),
        React.createElement(
          'p',
          null,
          record.item_title || ''
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            'a',
            { href: record.entity_content, target: '_blank' },
            record.entity_content
          )
        ),
        React.createElement(
          'p',
          { style: { color: '#999' } },
          React.createElement(
            'span',
            null,
            record.sale_price ? '\u4EF7\u683C:\uFFE5' + record.sale_price : ''
          ),
          '\xA0\xA0',
          React.createElement(
            'span',
            null,
            record.total_sold_quantity ? '\u9500\u91CF:' + record.total_sold_quantity : ''
          ),
          '\xA0\xA0',
          React.createElement(
            'span',
            null,
            record.item_local ? '\u53D1\u8D27\u5730:' + record.item_local : ''
          )
        )
      );
    },
    width: 500
  }, {
    title: '投诉信息',
    key: 'tousu',
    render: function render(text, record) {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'p',
          null,
          '\u6295\u8BC9\u8D26\u53F7\uFF1A',
          record.account_id
        ),
        React.createElement(
          'p',
          null,
          '\u77E5\u8BC6\u4EA7\u6743\uFF1A',
          record.ipr_name
        ),
        React.createElement(
          'p',
          null,
          '\u6295\u8BC9\u5355\u53F7\uFF1A',
          record.batch_id
        ),
        React.createElement(
          'p',
          null,
          '\u6295\u8BC9\u65F6\u95F4\uFF1A',
          moment(record.gmt_create).format('YYYY-MM-DD HH:mm')
        )
      );
    }
  }, {
    title: '状态/申诉信息',
    key: 'status',
    width: 300,
    render: function render(text, record) {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'p',
          null,
          '\u72B6\u6001\uFF1A',
          record.status_str
        ),
        record.status !== COMPLAINT_STATUS_TAOBAO.withdrawal ? React.createElement(
          React.Fragment,
          null,
          React.createElement(
            'p',
            null,
            '\u7533\u8BC9\u65F6\u95F4\uFF1A',
            record.appeal_date
          ),
          React.createElement(
            'p',
            null,
            '\u7533\u8BC9\u7406\u7531\uFF1A',
            record.appeal_comment
          )
        ) : null
      );
    }
  }];

  return React.createElement(
    _card2.default,
    { bordered: false, title: React.createElement(
        'h5',
        { className: 'card-title' },
        '\u6295\u8BC9\u4FE1\u606F\u8BE6\u60C5'
      ) },
    React.createElement(_table2.default, {
      pagination: {
        showQuickJumper: true,
        showTotal: function showTotal(total) {
          return '\u5171 ' + total + ' \u6761\u6570\u636E';
        },
        total: pagination.totalElements,
        onChange: pageChange,
        current: pagination.pageNo
      },
      rowKey: function rowKey(record) {
        if (platform === 'taobao') {
          return record.id;
        }
        if (platform === '1688') {
          return record.case_id;
        }
      },
      columns: platform === 'taobao' ? columns_taobao : columns_1688,
      dataSource: list })
  );
};

exports.default = ComplaintInfo;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ }),

/***/ "./app/widget/components/ComplaintInfoTable/index.less":
/*!*************************************************************!*\
  !*** ./app/widget/components/ComplaintInfoTable/index.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

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

/***/ "./app/widget/components/ShopComplaintRank/index.js":
/*!**********************************************************!*\
  !*** ./app/widget/components/ShopComplaintRank/index.js ***!
  \**********************************************************/
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

var _popover = __webpack_require__(/*! antd/es/popover */ "./node_modules/_antd@3.10.1@antd/es/popover/index.js");

var _popover2 = _interopRequireDefault(_popover);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/list/style/css */ "./node_modules/_antd@3.10.1@antd/es/list/style/css.js");

__webpack_require__(/*! antd/es/popover/style/css */ "./node_modules/_antd@3.10.1@antd/es/popover/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! ./index.less */ "./app/widget/components/ShopComplaintRank/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShopComplaintRank = function ShopComplaintRank(props) {

  var list = props.data;
  var platform = props.platform;
  var pageChange = props.pageChange;
  var pagination = props.pagination;
  var pageNo = pagination.pageNo,
      pageSize = pagination.pageSize;


  var cardTitle = React.createElement(
    'h5',
    { className: 'card-title' },
    '\u5E97\u94FA\u88AB\u6295\u6B21\u6570\u6392\u884C'
  );

  var listhead = function listhead() {
    return React.createElement(
      _row2.default,
      { className: 'row', type: 'flex', justify: 'space-between' },
      React.createElement(
        _col2.default,
        { span: 2 },
        React.createElement(
          'span',
          null,
          '\u6392\u540D'
        )
      ),
      React.createElement(
        _col2.default,
        { span: 6 },
        React.createElement(
          'span',
          { className: 'ellipsis' },
          '\u65FA\u65FA\u540D\u79F0'
        )
      ),
      React.createElement(
        _col2.default,
        { span: 6 },
        React.createElement(
          'span',
          null,
          '\u88AB\u6295\u8BC9\u6B21\u6570'
        )
      ),
      React.createElement(
        _col2.default,
        { span: 6 },
        React.createElement(
          'span',
          null,
          '\u64A4\u8BC9\u6B21\u6570'
        )
      )
    );
  };

  var listItem = function listItem(_ref, index) {
    var wangwang = _ref.wangwang,
        complaintCount = _ref.complaintCount,
        withdrawCount = _ref.withdrawCount;
    var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'body';
    return React.createElement(
      _row2.default,
      { className: 'row ' + (flag === 'body' ? 'body-row' : ''), type: 'flex', justify: 'space-between' },
      React.createElement(
        _col2.default,
        { span: 2 },
        React.createElement(
          'span',
          { className: '' + (flag === 'body' && pageSize * (pageNo - 1) + index + 1 < 4 ? 'circle' : '') },
          pageSize * (pageNo - 1) + index + 1
        )
      ),
      React.createElement(
        _col2.default,
        { span: 6 },
        React.createElement(
          _popover2.default,
          { trigger: 'hover', content: wangwang },
          React.createElement(
            'span',
            { className: 'ellipsis' },
            wangwang
          )
        )
      ),
      React.createElement(
        _col2.default,
        { span: 6 },
        React.createElement(
          'span',
          null,
          complaintCount
        )
      ),
      React.createElement(
        _col2.default,
        { span: 6 },
        React.createElement(
          'span',
          null,
          withdrawCount
        )
      )
    );
  };

  return React.createElement(
    _card2.default,
    { className: 'card-wrapper', title: cardTitle, bordered: false },
    React.createElement(_list2.default, {
      size: 'small',
      split: false,
      dataSource: list,
      pagination: {
        simple: true,
        onChange: pageChange,
        current: pagination.pageNo,
        total: pagination.totalElements
      },
      header: listhead(),
      renderItem: function renderItem(item, index) {
        var data = {};
        if (platform === 'taobao') {
          data.wangwang = item.entity_owner_name;
          data.complaintCount = item.all_count;
          data.withdrawCount = item.c_count;
        }
        if (platform === '1688') {
          data.wangwang = item.company_name;
          data.complaintCount = item.tscs;
          data.withdrawCount = item.cscs;
        }
        return listItem(data, index);
      }
    })
  );
}; // 店铺投诉排行

exports.default = ShopComplaintRank;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/ShopComplaintRank/index.less":
/*!************************************************************!*\
  !*** ./app/widget/components/ShopComplaintRank/index.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/ComplaintReport/tpl.js":
/*!*************************************************!*\
  !*** ./app/widget/index/ComplaintReport/tpl.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@3.10.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@3.10.1@antd/es/tabs/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

var _That = __webpack_require__(/*! ../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _ShopComplaintRank = __webpack_require__(/*! ../../components/ShopComplaintRank */ "./app/widget/components/ShopComplaintRank/index.js");

var _ShopComplaintRank2 = _interopRequireDefault(_ShopComplaintRank);

var _ComplaintInfoTable = __webpack_require__(/*! ../../components/ComplaintInfoTable */ "./app/widget/components/ComplaintInfoTable/index.js");

var _ComplaintInfoTable2 = _interopRequireDefault(_ComplaintInfoTable);

var _DateWrapper = __webpack_require__(/*! ../../HOC/DateWrapper */ "./app/widget/HOC/DateWrapper.js");

var _DateWrapper2 = _interopRequireDefault(_DateWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangePicker = _datePicker2.default.RangePicker;
var TabPane = _tabs2.default.TabPane;
var NewRangPicker = (0, _DateWrapper2.default)(RangePicker);

var Tpl = (0, _That2.default)(function (that) {
  var _that$state = that.state,
      platform = _that$state.platform,
      inner_platform = _that$state.inner_platform,
      start_time = _that$state.start_time,
      end_time = _that$state.end_time,
      shopComplaintRank = _that$state.shopComplaintRank,
      complaintListDetail = _that$state.complaintListDetail,
      alreadyComplaintList = _that$state.alreadyComplaintList,
      currentTab = _that$state.currentTab,
      pagination = _that$state.pagination,
      tablePage = _that$state.tablePage,
      currentIpr = _that$state.currentIpr;

  // const iprList = alreadyComplaintList.map(v => v.complaintModelList).reduce((a, b) => a.concat(b), [])
  // const iprList = currentTab === '' ? 
  // const ipr_names = currentTab === '' ? '' : alreadyComplaintList.filter(v => v.report_id===currentTab)[0].complaintModelList.map(v => v.ipr_name).join(',')
  // const ipr_nums = currentTab === '' ? '' : alreadyComplaintList.filter(v => v.report_id===currentTab)[0].complaintListDetail.map(v => v.ipr_id).join(',')

  var startTime = start_time.format('YYYY-MM-DD');
  var endTime = end_time.format('YYYY-MM-DD');
  var download_url = '';
  if (platform === 'taobao') {
    download_url = '/hcm/complaint/downReport_taobao?iprName=' + currentIpr + '&start_time=' + startTime + '&end_time=' + endTime;
  }
  if (platform === '1688') {
    download_url = '/hcm/complaint/downLoadReport_1688?ipr_num=' + currentIpr + '&start_time=' + startTime + '&end_time=' + endTime;
  }

  var showIprList = function showIprList(list) {
    return list.map(function (val, idx) {
      return React.createElement(
        'span',
        { key: idx },
        val.ipr_name + '\uFF08' + val.account_id + '\uFF09' + (idx === list.length - 1 ? '' : '、')
      );
    });
  };
  var setComplaintReportPath = platform === 'taobao' ? '/taobaoSetComplaintReport/taobao' : '/aliSetComplaintReport/1688';

  return React.createElement(
    _Layout2.default,
    {
      breadcrumbList: ['投诉报表', (platform === 'taobao' ? '淘宝' : '1688') + '\u6295\u8BC9\u62A5\u8868'],
      linkList: ['', '']
    },
    React.createElement(
      'div',
      { className: 'top-wrapper' },
      React.createElement(
        _row2.default,
        { className: 'top-row' },
        React.createElement(
          _col2.default,
          { span: localStorage.getItem('logintype') === 'KEFU' ? 22 : 24 },
          React.createElement(
            _tabs2.default,
            { type: 'card', onChange: that.handleTabChange, defaultValue: currentTab },
            React.createElement(TabPane, { tab: '\u5168\u90E8\u77E5\u8BC6\u4EA7\u6743', key: '' }),
            alreadyComplaintList.map(function (v) {
              return React.createElement(
                TabPane,
                { tab: v.report_name, key: v.report_id },
                React.createElement(
                  'p',
                  null,
                  '\u77E5\u8BC6\u4EA7\u6743\uFF1A',
                  showIprList(v.complaintModelList)
                )
              );
            })
          )
        ),
        localStorage.getItem('logintype') === 'KEFU' ? React.createElement(
          _col2.default,
          {
            onClick: that.goTo.bind(that, setComplaintReportPath),
            span: 2 },
          React.createElement(_icon2.default, { type: 'setting', theme: 'outlined' }),
          '\xA0\xA0\xA0\u8BBE\u7F6E\u62A5\u8868'
        ) : null
      ),
      React.createElement(
        'div',
        { className: 'condition' },
        React.createElement(
          'span',
          null,
          '\u6570\u636E\u65F6\u95F4\uFF1A',
          React.createElement(RangePicker, {
            ranges: {
              '最近7天': [moment().subtract(6, 'd'), moment()],
              '最近30天': [moment().subtract(29, 'd'), moment()],
              '最近90天': [moment().subtract(89, 'd'), moment()],
              '最近365天': [moment().subtract(364, 'd'), moment()]
            },
            onChange: that.dateChange,
            defaultValue: [start_time, end_time],
            disabledDate: that.handleDisabledDate,
            getCalendarContainer: function getCalendarContainer(trigger) {
              return trigger.parentNode;
            } })
        ),
        React.createElement(
          'a',
          { href: download_url },
          React.createElement(
            _button2.default,
            { type: 'primary' },
            '\u4E0B\u8F7D\u62A5\u8868'
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'middle-wrapper' },
      React.createElement('div', { id: 'echarts', className: 'complaint-link-overview' }),
      React.createElement(
        'div',
        { className: 'shop-complaint-rank-wrapper' },
        React.createElement(_ShopComplaintRank2.default, { pageChange: that.rankPageChange, pagination: pagination, data: shopComplaintRank, platform: platform })
      )
    ),
    React.createElement(
      'div',
      { className: 'bottom-wrapper' },
      React.createElement(_ComplaintInfoTable2.default, { pageChange: that.tablePageChange, pagination: tablePage, data: complaintListDetail, platform: platform })
    )
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=99_88da6be2c6a1493b59db.js.map