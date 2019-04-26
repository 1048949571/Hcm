(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[294],{

/***/ "./app/widget/index/Dealers/ApprovalQuery/main.js":
/*!********************************************************!*\
  !*** ./app/widget/index/Dealers/ApprovalQuery/main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Dealers/ApprovalQuery/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var APPROVAL_STATUS = {
  all: 1, // 全部状态
  wait_approval: 2, // 待审核状态
  expired_approval: 3, // 审核已过期状态
  already_approval: 4, // 已审核状态
  activiting: 5, // 活动进行中
  activited: 6 // 活动已完成
};

var ApprovalQuery = function (_React$Component) {
  _inherits(ApprovalQuery, _React$Component);

  function ApprovalQuery(props) {
    _classCallCheck(this, ApprovalQuery);

    var _this = _possibleConstructorReturn(this, (ApprovalQuery.__proto__ || Object.getPrototypeOf(ApprovalQuery)).call(this, props));

    _this.handlePageChange = function (page) {
      _this.setState({
        pagination: Object.assign({}, _this.state.pagination, {
          pageNo: page
        })
      }, function () {
        _this.getActivityList({
          status: _this.state.currentStatus
        });
      });
    };

    _this.handleClearIconClick = function (fieldName) {
      _this.props.form.resetFields([fieldName]);
    };

    _this.handleSearchSubmit = function (e) {
      e.preventDefault();
      // const { currentStatus } = this.state
      _this.props.form.validateFields(function (err, values) {
        _this.getActivityList({
          status: "1",
          search: _extends({}, values)
        });
        _this.getApprovalStatusNum(_extends({}, values, {
          start_time: values.time.length !== 0 ? values.time[0].format('YYYY-MM-DD HH:mm:ss') : '',
          end_time: values.time.length !== 0 ? values.time[1].format('YYYY-MM-DD HH:mm:ss') : ''
        }));
        _this.setState({
          searchCondition: Object.assign({}, values),
          currentStatus: "1"
        });
      });
    };

    _this.handleTabChange = function (activeKey) {
      _this.setState({
        pagination: Object.assign({}, _this.state.pagination, {
          pageNo: 1,
          pageSize: 10
        }),
        currentStatus: activeKey
      }, function () {
        var searchCondition = _this.state.searchCondition;

        var data = {
          status: activeKey
        };
        if (Object.keys(searchCondition).length !== 0) {
          data.search = Object.assign({}, searchCondition);
        }
        _this.getActivityList(data);
      });
    };

    _this.goTo = function (path) {
      _this.props.history.push({
        pathname: path
      });
    };

    _this.formatTime = function (timestamp) {
      var showTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var date = new Date(timestamp);
      var str = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
      if (showTime) {
        str += ' ' + String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');
      }
      return str;
    };

    _this.getActivityList = function (params) {
      var FORMAT_TIME = 'YYYY-MM-DD HH:mm:ss';
      var pagination = _this.state.pagination;

      var data = {
        type: params.status,
        pageNo: pagination.pageNo,
        pageSize: pagination.pageSize
      };
      if (params.search) {
        var _params$search = params.search,
            shop_name = _params$search.shop_name,
            campaign_name = _params$search.campaign_name,
            _params$search$time = _slicedToArray(_params$search.time, 2),
            start_time = _params$search$time[0],
            end_time = _params$search$time[1];

        data.shop_name = shop_name;
        data.campaign_name = campaign_name;
        data.start_time = !!start_time ? start_time.format(FORMAT_TIME) : '';
        data.end_time = !!end_time ? end_time.format(FORMAT_TIME) : '';
      }
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/List',
        data: data
      }).then(function (res) {
        var _this$state = _this.state,
            cacheListObj = _this$state.cacheListObj,
            pagination = _this$state.pagination;
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          _this.setState({
            cacheListObj: Object.assign({}, cacheListObj, _defineProperty({}, params.status, data.content)),
            currentStatus: params.status,
            pagination: Object.assign({}, pagination, {
              pageNo: data.pageNumber,
              pageSize: data.pageSize,
              totalElements: data.totalElements,
              totalPages: data.totalPages
            })
          });
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，稍后再试！');
      });
    };

    _this.getApprovalStatusNum = function () {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/ListCount',
        data: _extends({}, params)
      }).then(function (res) {
        _this.setState({
          statusNum: res.data.data
        });
      }).catch(function (err) {
        _message3.default.error('网络繁忙，稍后再试！');
      });
    };

    _this.state = {
      statusNum: {}, // 各个状态的数量
      cacheListObj: {}, // 缓存列表对象，包含每个状态对应的列表
      currentStatus: "1",
      pagination: {
        pageNo: 1,
        pageSize: 10
      },
      searchCondition: {}
    };
    return _this;
  }

  _createClass(ApprovalQuery, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getApprovalStatusNum();
      this.getActivityList({
        status: APPROVAL_STATUS.all
      });
    }

    // 获取活动列表


    // 获取每个状态的数量

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(_tpl2.default, { that: this });
    }
  }]);

  return ApprovalQuery;
}(React.Component);

exports.default = _form2.default.create()(ApprovalQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=294_25065234997a9dd0c809.js.map