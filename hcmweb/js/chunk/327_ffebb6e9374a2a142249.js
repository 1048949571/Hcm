(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[327],{

/***/ "./app/widget/index/Service/LinkMarking/main.js":
/*!******************************************************!*\
  !*** ./app/widget/index/Service/LinkMarking/main.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Service/LinkMarking/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PAGE = {
  pageNo: 1,
  pageSize: 10
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.getShopList = function () {
      var _this$state = _this.state,
          shop_name = _this$state.shop_name,
          pagination = _this$state.pagination;

      var params = {
        shop_nick: shop_name,
        pageNo: pagination.pageNo,
        pageSize: pagination.pageSize
      };
      LoadingModal({ bl: true });
      _ajax2.default.get('/hcm/ItemMark/shopList', { params: params }).then(function (res) {
        LoadingModal({ bl: false });
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          // console.log('-----res', data)
          _this.setState({
            shopList: data.content,
            pagination: Object.assign({}, _this.state.pagination, {
              pageNo: data.pageNumber,
              pageSize: data.pageSize,
              totalElements: data.totalElements
            })
          });
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error(err.statusText);
      });
    };

    _this.handlePageChange = function (page) {
      _this.setState({
        pagination: Object.assign({}, _this.state.pagination, {
          pageNo: page
        })
      }, function () {
        _this.getShopList();
      });
    };

    _this.handleInputChange = function (e) {
      _this.setState({
        shop_name: e.target.value
      });
    };

    _this.handleSearchClick = function (e) {
      // console.log(e.target.value)
      // if (!e.target.value.length) {
      //   return
      // }
      _this.setState({
        // shop_name: e.target.value,
        pagination: _extends({}, DEFAULT_PAGE)
      }, function () {
        _this.getShopList();
      });
    };

    _this.goTo = function (path) {
      _this.props.history.push(path);
    };

    _this.state = {
      shopList: [],
      pagination: _extends({}, DEFAULT_PAGE),
      shop_name: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getShopList();
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

/***/ })

}]);
//# sourceMappingURL=327_ffebb6e9374a2a142249.js.map