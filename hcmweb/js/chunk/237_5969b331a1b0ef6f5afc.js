(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[237],{

/***/ "./app/widget/index/Brand/ActivityReview/main.js":
/*!*******************************************************!*\
  !*** ./app/widget/index/Brand/ActivityReview/main.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/ActivityReview/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 品牌活动审查


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.getinfo = function () {
      var Identity = _this.state.Identity;

      Identity = localStorage.getItem("logintype");
      _this.setState({ Identity: Identity });
    };

    _this.handleClearIconClick = function (fieldName) {
      // console.log(fieldName, this.props)
      _this.props.form.resetFields([fieldName]);
    };

    _this.handleTabChange = function (activeKey) {
      _this.getActivityList({
        url: '/hcm/campgign/List',
        data: _extends({
          type: activeKey,
          pageNo: 1,
          pageSize: _this.state.pagination.pageSize
        }, _this.state.searchCondition, {
          ping_id: _this.state.searchCondition.ping_id === 'all' ? '' : _this.state.searchCondition.ping_id
        })
      });
      _this.setState({
        currentTabIndex: activeKey
      });
    };

    _this.getActivityNums = function () {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _ajax2.default.post('/hcm/campgign/ListCount', _extends({}, params)).then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        _this.setState({
          statusNums: data
        });
      }).catch(function (err) {});
    };

    _this.getActivityList = function (params) {
      _this.postFn(params).then(function (res) {
        _this.setState({
          cacheActivityList: Object.assign({}, _this.state.cacheActivityList, _defineProperty({}, _this.state.currentTabIndex, res.content)),
          pagination: Object.assign({}, _this.state.pagination, {
            pageNo: res.pageNumber,
            pageSize: res.pageSize,
            totalElements: res.totalElements
            // totalPages: res.totalPages
          })
        });
      }).catch();
    };

    _this.postFn = function (params) {
      return new Promise(function (resolve, reject) {
        (0, _ajax2.default)({
          method: 'post',
          url: params.url,
          data: params.data || {}
        }).then(function (res) {
          console.log(res);
          var _res$data2 = res.data,
              data = _res$data2.data,
              status = _res$data2.status,
              message = _res$data2.message;

          if (status === '10000') {
            resolve(data);
          } else {
            reject({ message: message });
          }
        }).catch(function (err) {
          reject(err);
        });
      });
    };

    _this.getPlatformList = function (dictType) {
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/sys/GetList',
        data: {
          dictcode: dictType
        }
      }).then(function (res) {
        var _res$data3 = res.data,
            data = _res$data3.data,
            status = _res$data3.status,
            message = _res$data3.message;

        _this.setState({
          platformList: data
        });
      }).catch(function (err) {});
    };

    _this.goToDetail = function (path) {
      _this.props.history.push({
        pathname: path
      });
    };

    _this.handleFormSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFields(function (err, values) {
        // console.log(values)
        var campaign_name = values.campaign_name,
            dealer_name = values.dealer_name,
            ping_id = values.ping_id,
            shop_name = values.shop_name,
            time = values.time;
        // console.log(time)

        var start_time = time.length === 0 ? '' : time[0].format('YYYY-MM-DD HH:mm:ss');
        var end_time = time.length === 0 ? '' : time[1].format('YYYY-MM-DD HH:mm:ss');
        _this.getActivityList({
          url: '/hcm/campgign/List',
          data: {
            type: "1",
            pageNo: 1,
            pageSize: _this.state.pagination.pageSize,
            campaign_name: campaign_name,
            dealer_name: dealer_name,
            ping_id: ping_id === 'all' ? '' : ping_id,
            shop_name: shop_name,
            start_time: start_time,
            end_time: end_time
          }
        });
        _this.getActivityNums({
          campaign_name: campaign_name,
          shop_name: shop_name,
          dealer_name: dealer_name,
          ping_id: ping_id === 'all' ? '' : ping_id,
          start_time: start_time,
          end_time: end_time
        });
        _this.setState({
          searchCondition: Object.assign({}, _this.state.searchCondition, {
            campaign_name: campaign_name,
            dealer_name: dealer_name,
            ping_id: ping_id,
            shop_name: shop_name,
            start_time: start_time,
            end_time: end_time
          }),
          currentTabIndex: '1'
        });
      });
    };

    _this.handlePageChange = function (page, pageSize) {
      var searchCondition = _this.state.searchCondition;

      _this.getActivityList({
        url: '/hcm/campgign/List',
        data: _extends({
          type: _this.state.currentTabIndex,
          pageNo: page,
          pageSize: pageSize
        }, searchCondition, {
          ping_id: searchCondition.ping_id === 'all' ? '' : searchCondition.ping_id
        })
      });
    };

    _this.state = {
      platformList: [],
      cacheActivityList: {},
      currentTabIndex: "1",
      pagination: {
        pageNo: 1,
        pageSize: 10
      },
      statusNums: {},
      searchCondition: {},
      Identity: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getinfo();
    }
    //获取用户身份信息

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getPlatformList('platform');
      this.getActivityNums();
      this.getActivityList({
        url: '/hcm/campgign/List',
        data: _extends({
          type: this.state.currentTabIndex
        }, this.state.pagination)
      });
    }
    // tab导航切换

    // 查询每个状态对应的数量

    // 获取活动列表

    // post请求

    // 查询平台字典

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(_tpl2.default, { that: this });
    }
  }]);

  return App;
}(React.Component);

exports.default = _form2.default.create()(App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=237_5969b331a1b0ef6f5afc.js.map