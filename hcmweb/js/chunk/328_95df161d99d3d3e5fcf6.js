(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[328],{

/***/ "./app/widget/index/Service/LinkMarkingDetail/main.js":
/*!************************************************************!*\
  !*** ./app/widget/index/Service/LinkMarkingDetail/main.js ***!
  \************************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Service/LinkMarkingDetail/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PAGE = {
  pageNo: 1,
  pageSize: 10
};
var TYPE_MAP = {
  all: '0',
  marked: '1',
  nobrand: '2',
  unmarked: '3'
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.getNum = function () {
      var params = {
        shop_nick: _this.state.shopName
      };
      _ajax2.default.get('/hcm/ItemMark/tyepCount', { params: params }).then(function (res) {
        var result = _this.handleResponseSucc(res);
        if (!result) {
          return;
        }
        _this.setState({
          dataCounts: Object.assign({}, _extends({}, result))
        });
      }).catch(_this.handleResponseErr);
    };

    _this.handlePageChange = function (page, pageSize) {
      _this.setState({
        pagination: _extends({}, _this.state.pagination, { pageNo: page })
      }, function () {
        _this.getDataList();
      });
    };

    _this.submitMark = function (index) {
      var _this$state = _this.state,
          dataList = _this$state.dataList,
          shopName = _this$state.shopName;
      var _dataList$index = dataList[index],
          item_id = _dataList$index.item_id,
          item_link = _dataList$index.item_link,
          item_title = _dataList$index.item_title,
          _isCheckboxStatus = _dataList$index._isCheckboxStatus,
          _selected = _dataList$index._selected,
          product_class_id = _dataList$index.product_class_id,
          product_class_name = _dataList$index.product_class_name,
          product_id = _dataList$index.product_id,
          product_name = _dataList$index.product_name,
          type = _dataList$index.type,
          shopmainid = _dataList$index.shopmainid;

      var data = {
        item_id: item_id,
        item_link: item_link,
        item_title: item_title,
        shopmainid: shopmainid,
        shop_nick: shopName
      };
      if (_isCheckboxStatus) {
        // 非本品牌商品
        data.type = parseInt(TYPE_MAP.nobrand, 10);
        data.product_class_id = null;
        data.product_class_name = null;
        data.product_id = null;
        data.product_name = null;
      } else {
        if (!!_selected.length && _selected.every(function (v) {
          return v !== null && v.id !== undefined;
        })) {
          // 本品牌商品
          data.type = parseInt(TYPE_MAP.marked, 10);
          data.product_class_id = _selected[0].id;
          data.product_class_name = _selected[0].productClassifyName;
          data.product_id = _selected[1].id;
          data.product_name = _selected[1].productName;
        } else if (!!_selected.length && _selected.every(function (v) {
          return v === null;
        })) {
          data.type = null;
        } else {
          data.type = !!_selected.length ? type : null;
          data.product_class_id = !!_selected.length ? product_class_id : null;
          data.product_class_name = !!_selected.length ? product_class_name : null;
          data.product_id = !!_selected.length ? product_id : null;
          data.product_name = !!_selected.length ? product_name : null;
        }
      }
      // console.log('---submit',data)
      // return
      LoadingModal({ bl: true });
      _ajax2.default.post('/hcm/ItemMark/save', data).then(function (res) {
        LoadingModal({ bl: false });
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          _message3.default.success(message);
          _this.getNum();
          _this.getDataList();
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _this.handleResponseErr(err);
      });
    };

    _this.handleCheckboxChange = function (index, e) {
      var copyList = [].concat(_toConsumableArray(_this.state.dataList));
      var targetObj = _extends({}, copyList[index]);
      targetObj._isCheckboxStatus = e.target.checked;
      targetObj._selected = [null, null];
      copyList[index] = targetObj;
      _this.setState({
        dataList: copyList
      });
    };

    _this.getDataList = function () {
      var _this$state2 = _this.state,
          shopName = _this$state2.shopName,
          type = _this$state2.type,
          pagination = _this$state2.pagination;

      var params = {
        type: type,
        shop_nick: shopName,
        pageNo: pagination.pageNo,
        pageSize: pagination.pageSize
      };
      LoadingModal({ bl: true });
      _ajax2.default.get('/hcm/ItemMark/List', { params: params }).then(function (res) {
        LoadingModal({ bl: false });
        var result = _this.handleResponseSucc(res);
        if (!result) {
          return;
        }
        _this.setState({
          dataList: result.content.map(function (v) {
            return Object.assign({}, v, {
              _isCheckboxStatus: v.type == TYPE_MAP.nobrand,
              _selected: [v.product_class_id, v.product_id]
            });
          }),
          pagination: Object.assign({}, _this.state.pagination, {
            pageNo: result.pageNumber,
            pageSize: result.pageSize,
            totalElements: result.totalElements
          })
        });
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _this.handleResponseErr(err);
      });
    };

    _this.getClassifyList = function () {
      _ajax2.default.get('/hcm/ProductClassify/list').then(function (res) {
        var result = _this.handleResponseSucc(res);
        if (!result) {
          return;
        }
        _this.setState({
          classifyList: result.map(function (v) {
            return Object.assign({}, v, { value: v.id, label: v.productClassifyName, isLeaf: false });
          })
        });
      }).catch(_this.handleResponseErr);
    };

    _this.handleLoadData = function (selectedOptions) {
      var targetOption = selectedOptions[selectedOptions.length - 1];
      targetOption.loading = true;
      var params = {
        product_classify_id: targetOption.id
      };
      _ajax2.default.get('/hcm/hcmProduct/listByClass', { params: params }).then(function (res) {
        targetOption.loading = false;
        var result = _this.handleResponseSucc(res);
        if (!result) {
          return;
        }
        if (result.length) {
          targetOption.children = result.map(function (v) {
            return Object.assign({}, v, { value: v.id, label: v.productName });
          });
        } else {
          targetOption.disabled = true;
          targetOption.isLeaf = true;
        }
        _this.setState({
          classifyList: [].concat(_toConsumableArray(_this.state.classifyList))
        });
      }).catch(function (err) {
        targetOption.loading = false;
        _this.handleResponseErr(err);
      });
    };

    _this.handleTabChange = function (activekey) {
      // console.log(activekey)
      // const { dataList } = this.state
      // let isGetData = false
      // activekey === '' && !dataList.length ? isGetData = true : null
      // activekey !== '' && !this.state[COMMON_MAP[activekey]].length ? isGetData = true : null
      // if (!isGetData) {
      //   return
      // }
      _this.setState({
        type: activekey,
        pagination: _extends({}, DEFAULT_PAGE)
      }, function () {
        _this.getDataList();
      });
    };

    _this.handleCascaderChange = function (index, value, selectedOptions) {
      // console.log(value, selectedOptions)
      var copyList = [].concat(_toConsumableArray(_this.state.dataList));
      var targetObj = copyList[index];
      targetObj._selected = selectedOptions;
      copyList[index] = targetObj;
      _this.setState({
        dataList: copyList
      });
    };

    _this.toggleFn = function (index, flag) {
      if (flag && _this.state.dataList.some(function (v) {
        return v._isShowEdit;
      })) {
        _message3.default.warning('请先取消或保存编辑状态的条目！');
        return;
      }
      var copyList = [].concat(_toConsumableArray(_this.state.dataList));
      var targetObj = _extends({}, copyList[index]);
      targetObj._isShowEdit = flag;
      if (!flag) {
        // 取消操作
        targetObj._isCheckboxStatus = targetObj.type == TYPE_MAP.nobrand;
        targetObj._selected = [targetObj.product_class_id, targetObj.product_id];
      }
      copyList[index] = targetObj;
      _this.setState({
        dataList: copyList
      });
    };

    _this.handleResponseSucc = function (res) {
      var _res$data2 = res.data,
          data = _res$data2.data,
          status = _res$data2.status,
          message = _res$data2.message;

      if (status !== '10000') {
        _message3.default.error(message);
        return undefined;
      }
      return data;
    };

    _this.handleResponseErr = function (err) {
      _message3.default.error(err.statusText);
    };

    _this.state = {
      shopName: props.match.params.shopName,
      pagination: _extends({}, DEFAULT_PAGE),
      type: TYPE_MAP.all,
      dataList: [],
      dataCounts: null,
      classifyList: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getDataList();
      this.getNum();
      this.getClassifyList();
    }
    // 获取数量

    // 

    // 

    // 

    // 获取列表数据

    // 获取下拉数据

    // 点击加载下拉数据

    // 切换面板回调

    // 选择下拉选项

    // 

    // 处理响应

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
//# sourceMappingURL=328_95df161d99d3d3e5fcf6.js.map