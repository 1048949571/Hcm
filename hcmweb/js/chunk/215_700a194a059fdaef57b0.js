(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[215],{

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

/***/ "./app/widget/index/Administrator/DealerDetail/main.js":
/*!*************************************************************!*\
  !*** ./app/widget/index/Administrator/DealerDetail/main.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Administrator/DealerDetail/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.getData = function (flag, statusKey, url) {
      var id = _this.state.id;

      (0, _ajax2.default)({
        method: 'post',
        url: url,
        data: _defineProperty({}, flag, id)
      }).then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000' && data) {
          _this.setState(_defineProperty({}, statusKey, data));
        } else if (status !== '10000') {
          _message3.default.error(message);
        }
      }).catch();
    };

    _this.state = {
      id: props.match.params.id,
      dealer: {
        dealername: null,
        dutynumber: null,
        take_people: null,
        address: null,
        contact: null,
        province: null,
        city: null,
        companyname_list: []
      },
      shopList: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getData('id', 'dealer', '/hcm/dealer/searchDealerInfoOfAdmin');
      this.getData('dealer_id', 'shopList', '/hcm/dealer/DealerDetail_AuthshopOfAdmin');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(_tpl2.default, { that: this });
    }
  }]);

  return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/index/Administrator/DealerDetail/tpl.js":
/*!************************************************************!*\
  !*** ./app/widget/index/Administrator/DealerDetail/tpl.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tag = __webpack_require__(/*! antd/es/tag */ "./node_modules/_antd@3.10.1@antd/es/tag/index.js");

var _tag2 = _interopRequireDefault(_tag);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

__webpack_require__(/*! antd/es/tag/style/css */ "./node_modules/_antd@3.10.1@antd/es/tag/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tpl = (0, _That2.default)(function (that) {
  var _that$state = that.state,
      dealer = _that$state.dealer,
      _that$state$shopList = _that$state.shopList,
      shopList = _that$state$shopList === undefined ? [] : _that$state$shopList;
  var dealername = dealer.dealername,
      dutynumber = dealer.dutynumber,
      take_people = dealer.take_people,
      _dealer$address = dealer.address,
      address = _dealer$address === undefined ? '' : _dealer$address,
      contact = dealer.contact,
      _dealer$province = dealer.province,
      province = _dealer$province === undefined ? '' : _dealer$province,
      _dealer$city = dealer.city,
      city = _dealer$city === undefined ? '' : _dealer$city,
      _dealer$companyname_l = dealer.companyname_list,
      companyname_list = _dealer$companyname_l === undefined ? [] : _dealer$companyname_l;

  return React.createElement(
    _Layout2.default,
    {
      title: '\u7ECF\u9500\u5546\u8BE6\u60C5',
      breadcrumbList: ['用户管理', '经销商账号', '经销商详情'],
      linkList: ['', '1', ''],
      history: that.props.history
    },
    React.createElement(
      'section',
      { className: 'dealer-detail-wrapper' },
      React.createElement(
        'h2',
        { className: 'title' },
        dealername
      ),
      React.createElement(
        _row2.default,
        { className: 'row' },
        React.createElement(
          _col2.default,
          { span: 8 },
          '\u516C\u53F8\u7A0E\u53F7\uFF1A',
          dutynumber
        ),
        React.createElement(
          _col2.default,
          { span: 16 },
          '\u516C\u53F8\u5730\u5740\uFF1A',
          '' + province + city + address
        ),
        React.createElement(
          _col2.default,
          { span: 8 },
          '\u5BF9\u63A5\u4EBA\uFF1A',
          take_people
        ),
        React.createElement(
          _col2.default,
          { span: 16 },
          '\u8054\u7CFB\u65B9\u5F0F\uFF1A',
          contact
        )
      ),
      React.createElement(
        'div',
        { className: 'brands' },
        '\u5408\u7EA6\u54C1\u724C\u65B9\uFF1A',
        !!companyname_list.length ? companyname_list.map(function (v, i) {
          return React.createElement(
            _tag2.default,
            { key: i, color: '#f2f2f2', style: { color: '#333' } },
            v.companyname
          );
        }) : null
      )
    ),
    React.createElement(
      'section',
      { className: 'shop-list-wrapper' },
      !!shopList.length ? shopList.map(function (value, index) {
        var shop_name = value.shop_name,
            shop_url = value.shop_url,
            shop_type = value.shop_type,
            _value$bmcShopList = value.bmcShopList,
            bmcShopList = _value$bmcShopList === undefined ? [] : _value$bmcShopList,
            id = value.id;

        return React.createElement(
          'div',
          { className: 'shop-item', key: id },
          React.createElement(
            'h3',
            { className: 'title' },
            shop_name
          ),
          React.createElement(
            _row2.default,
            null,
            React.createElement(
              _col2.default,
              { span: 9, className: 'overflow-hidden' },
              '\u5E97\u94FA\u9996\u9875\u5730\u5740\uFF1A',
              React.createElement(
                'a',
                { href: shop_url, target: '_blank' },
                shop_url
              )
            ),
            React.createElement(
              _col2.default,
              { span: 15 },
              '\u5E97\u94FA\u7C7B\u578B\uFF1A',
              shop_type
            )
          ),
          React.createElement(
            'div',
            { className: 'brand' },
            '\u6388\u6743\u54C1\u724C\u65B9\uFF1A',
            !!bmcShopList.length ? bmcShopList.map(function (v, i) {
              return React.createElement(
                _tag2.default,
                { key: i, color: '#fff', style: { color: '#333' } },
                v.bmcname
              );
            }) : null
          )
        );
      }) : null
    )
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=215_700a194a059fdaef57b0.js.map