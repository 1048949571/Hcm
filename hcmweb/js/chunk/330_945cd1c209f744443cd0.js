(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[330],{

/***/ "./app/widget/index/Service/PluginSummary/main.js":
/*!********************************************************!*\
  !*** ./app/widget/index/Service/PluginSummary/main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Service/PluginSummary/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { LoadingModal } from '../../../components/LoadingModal/LoadingModal'

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleRowSelection = function (selectedRowKeys, selectedRows) {
      // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      _this.setState({
        selectedTableRows: selectedRows.length ? selectedRows.map(function (v) {
          return v.id;
        }) : [],
        isCheckedAll: false
      });
    };

    _this.handleClearInput = function (key) {
      _this.setState(_defineProperty({}, key, ''));
    };

    _this.getDataList = function () {
      var _this$state = _this.state,
          platform = _this$state.platform,
          start_time = _this$state.start_time,
          end_time = _this$state.end_time,
          pagination = _this$state.pagination,
          wangwang = _this$state.wangwang,
          itemid = _this$state.itemid;

      LoadingModal({ bl: true });
      _ajax2.default.post('/hcm/plugin/getPluginList', {
        platform: platform,
        start_time: start_time.format('YYYY-MM-DD HH:mm:ss'),
        end_time: end_time.format('YYYY-MM-DD HH:mm:ss'),
        wangwang: wangwang,
        itemid: itemid,
        // ...pagination,
        pageNo: pagination.pageNo,
        pageSize: pagination.pageSize
      }).then(function (res) {
        LoadingModal({ bl: false });
        var result = _this.handleResponse(res);
        _this.setState({
          dataList: result.content,
          pagination: Object.assign({}, _this.state.pagination, {
            pageNo: result.pageNumber,
            pageSize: result.pageSize,
            totalElements: result.totalElements,
            totalPages: result.totalPages
          })
        });
      }).catch(_this.handleResponseError);
    };

    _this.selectAll = function () {
      _this.setState({
        isCheckedAll: true,
        selectedTableRows: [].concat(_toConsumableArray(_this.state.dataList.map(function (v) {
          return v.id;
        })))
      });
    };

    _this.cancelAll = function () {
      _this.setState({
        isCheckedAll: false,
        selectedTableRows: []
      });
    };

    _this.pageChange = function (page) {
      // console.log(page)
      _this.setState({
        pagination: Object.assign({}, _this.state.pagination, {
          pageNo: page
        })
      }, function () {
        _this.getDataList();
      });
    };

    _this.handleDelete = function () {
      var _this$state2 = _this.state,
          isCheckedAll = _this$state2.isCheckedAll,
          selectedTableRows = _this$state2.selectedTableRows,
          platform = _this$state2.platform,
          start_time = _this$state2.start_time,
          end_time = _this$state2.end_time,
          wangwang = _this$state2.wangwang,
          itemid = _this$state2.itemid;


      if (!selectedTableRows.length) {
        _message3.default.warning('请至少选择一条记录！');
        return;
      }

      var data = {
        platform: platform,
        start_time: start_time.format('YYYY-MM-DD HH:mm:ss'),
        end_time: end_time.format('YYYY-MM-DD HH:mm:ss'),
        wangwang: wangwang,
        itemid: itemid
      };
      if (isCheckedAll) {
        data.ids = 'checkAll';
      } else {
        data.ids = selectedTableRows.join(',');
      }
      // console.log(data)
      LoadingModal({ bl: true });
      _ajax2.default.post('/hcm/plugin/deletePluginList', data).then(function (res) {
        LoadingModal({ bl: false });
        var result = _this.handleResponse(res);
        if (result) {
          _message3.default.success(res.data.message);
          _this.getDataList();
          _this.setState({
            selectedTableRows: []
          });
        }
      }).catch(_this.handleResponseError);
    };

    _this.handleSearchSubmit = function (getFieldsValue, e) {
      e.preventDefault();
      var values = getFieldsValue();
      if (!values.times.length) {
        _message3.default.warning('请选择时间！');
        return;
      }
      _this.setState({
        platform: values.platform,
        start_time: values.times[0],
        end_time: values.times[1],
        wangwang: values.wangwang ? values.wangwang : '',
        itemid: values.itemid ? values.itemid : '',
        pagination: Object.assign({}, _this.state.pagination, {
          pageNo: 1
        })
      }, function () {
        _this.getDataList();
      });
    };

    _this.getPlatformDict = function () {
      // axios.get('/hcm/sys/GetList', {
      //   params: {
      //     dictcode: 'platform',
      //   }
      // }).then(res => {
      //   const result = this.handleResponse(res)
      //   if (result) {
      _this.setState({
        platformList: can.platform || []
      });
      //   }
      // }).catch(this.handleResponseError)
    };

    _this.handleResponse = function (res) {
      var _res$data = res.data,
          data = _res$data.data,
          status = _res$data.status,
          message = _res$data.message;

      if (status === '10000') {
        return data;
      } else {
        _message3.default.error(message);
        return undefined;
      }
    };

    _this.handleResponseError = function (err) {
      LoadingModal({ bl: false });
      _message3.default.error(err.statusText);
    };

    _this.state = {
      platformList: [],
      platform: '',
      start_time: moment(moment().subtract(6, 'd').format('YYYY-MM-DD'), 'YYYY-MM-DD HH:mm:ss'),
      end_time: moment(moment().format('YYYY-MM-DD') + 'T23:59:59', 'YYYY-MM-DD HH:mm:ss'),
      wangwang: '',
      itemid: '',
      pagination: {
        pageNo: 1,
        pageSize: 10
      },
      dataList: [],
      selectedTableRows: [],
      isCheckedAll: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getPlatformDict();
      this.getDataList();
    }
    // 选择表格数据

    // 清除搜索数据

    // 获取表格数据

    // 选择时间
    // dateChange = (dates) => {
    //   if (dates.length) {
    //     this.setState({
    //       start_time: dates[0],
    //       end_time: dates[1],
    //     })
    //   }
    // }
    // 选择全部

    // 取消选择

    // 分页查询

    // 批量删除

    // 提交搜索数据

    // 获取平台字典值

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(_tpl2.default, { that: this });
    }
  }]);

  return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=330_945cd1c209f744443cd0.js.map