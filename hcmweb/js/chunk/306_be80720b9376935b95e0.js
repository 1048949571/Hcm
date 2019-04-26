(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[306],{

/***/ "./app/widget/index/KeywordMonitor/main.js":
/*!*************************************************!*\
  !*** ./app/widget/index/KeywordMonitor/main.js ***!
  \*************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/KeywordMonitor/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { LoadingModal } from '../../components/LoadingModal/LoadingModal'

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleKeywordChange = function (e) {
      _this.setState({
        key_name: e.target.value
      });
    };

    _this.handlePlatformSelect = function (value) {
      _this.setState({
        platform_code: value
      });
    };

    _this.inputChange = function (record, key, e) {
      if (e.target.value.length > 20) {
        _message3.default.warning('关键词超过20个字符限制！');
      }
      record[key] = e.target.value.trim();
    };

    _this.selectChange = function (record, key, value) {
      record[key] = value;
    };

    _this.handleSaveKeywordSet = function (record) {
      // console.log(record)
      _this.setState({
        loading: true
      }, function () {
        var data = {
          id: record.id,
          key1: record.key1,
          key2: record.key2,
          key3: record.key3,
          logic1: record.logic1,
          logic2: record.logic2,
          key_name: record.key_name,
          key_price: record.key_price,
          key_range: record.key_range,
          key_times: record.key_times,
          platform: record.platform,
          platform_code: record.platform_code
        };
        if (!data.key1) {
          _this.setState({
            loading: false
          });
          _message3.default.warning('请输入关键词1！');
          return;
        }
        if (!!data.key2 && !data.logic1) {
          _this.setState({
            loading: false
          });
          _message3.default.warning('请选择关键词2筛选条件！');
          return;
        }
        if (!!data.logic1 && !data.key2) {
          _this.setState({
            loading: false
          });
          _message3.default.warning('请输入关键词2！');
          return;
        }
        if (!!data.key3 && !data.logic2) {
          _this.setState({
            loading: false
          });
          _message3.default.warning('请选择关键词3筛选条件！');
          return;
        }
        if (!!data.logic2 && !data.key3) {
          _this.setState({
            loading: false
          });
          _message3.default.warning('请输入关键词3！');
          return;
        }
        if (data.key1 && data.key1.length > 20 || data.key2 && data.key2.length > 20 || data.key3 && data.key3.length > 20) {
          _this.setState({
            loading: false
          });
          _message3.default.warning('关键词超过20个字符限制！');
          return;
        }
        _ajax2.default.post('/hcm/keyword/addkeys', data).then(function (res) {
          var _res$data = res.data,
              data = _res$data.data,
              status = _res$data.status,
              message = _res$data.message;

          if (status === '10000') {
            _message3.default.success(message);
            _this.setState({
              loading: false
            });
            _this.getDataList();
          } else {
            _this.setState({
              loading: false
            });
            _message3.default.error(message);
          }
        }).catch(function (err) {
          _this.setState({
            loading: false
          });
          _message3.default.error('系统繁忙，请稍后再试！');
        });
      });
    };

    _this.handleClearIconClick = function () {
      _this.setState({
        key_name: ""
      });
    };

    _this.handleDeleteAll = function () {
      var _this$state = _this.state,
          selectedTableData = _this$state.selectedTableData,
          key_name = _this$state.key_name,
          platform_code = _this$state.platform_code,
          allLength = _this$state.allLength;

      if (!selectedTableData.length) {
        _message3.default.warning("请至少勾选一个！");
        return;
      }
      // let platform_name = ''
      // try {
      //   platform_name = platform_code===''?'':can.platform.find(v => v.dictCode === platform_code).dictName
      // } catch (error) {
      //   Msg.error('查找平台名称出错！')
      // }
      var data = {
        ids: allLength === '' ? selectedTableData.join(',') : "checkAll",
        key_name: key_name,
        platform_code: platform_code,
        platform: platform_code === '' ? '' : can.platform.find(function (v) {
          return v.dictCode === platform_code;
        }).dictName
      };
      _this.deleteFn(data);
    };

    _this.handleDeleteOne = function (record) {
      var data = {
        ids: record.id,
        key_name: record.key_name,
        platform_code: record.platform_code,
        platform: record.platform
      };
      _this.deleteFn(data);
    };

    _this.deleteFn = function (param) {
      // console.log(data)
      _ajax2.default.post('/hcm/keyword/delete', param).then(function (res) {
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;

        if (status === '10000') {
          // console.log(data)
          _message3.default.success(message);
          _this.getDataList();
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.selectedTableChange = function (selectedRowKeys, selectedRows) {
      // console.log(selectedRowKeys, selectedRows)
      _this.setState({
        selectedTableData: selectedRowKeys
      });
    };

    _this.selectedAll = function (flag) {
      _this.setState({
        selectedTableData: flag ? _this.state.dataList.map(function (v) {
          return v.id;
        }) : [],
        allLength: flag ? _this.state.pagination.totalElements : ''
      });
    };

    _this.handleShowKeywordInput = function (flag, index) {
      if (flag && _this.state.dataList.some(function (v) {
        return v._isShowInput;
      })) {
        _message3.default.warning('请先保存或取消编辑状态的条目！');
        return;
      }
      var copyDatalist = [].concat(_toConsumableArray(_this.state.dataList));
      if (flag) {
        copyDatalist[index].temptRecord = Object.assign({}, copyDatalist[index]);
      } else {
        copyDatalist[index] = copyDatalist[index].temptRecord;
      }
      copyDatalist[index]._isShowInput = flag;
      _this.setState({
        dataList: copyDatalist
      });
    };

    _this.getDataList = function () {
      var _this$state2 = _this.state,
          pagination = _this$state2.pagination,
          key_name = _this$state2.key_name,
          platform_code = _this$state2.platform_code;

      LoadingModal({ bl: true });
      _ajax2.default.post('/hcm/keyword/list', {
        key_name: key_name,
        platform_code: platform_code,
        pageNo: pagination.pageNo,
        pageSize: pagination.pageSize
      }).then(function (res) {
        // console.log(res)
        var _res$data3 = res.data,
            data = _res$data3.data,
            status = _res$data3.status,
            message = _res$data3.message;

        LoadingModal({ bl: false });
        if (status === '10000') {
          _this.setState({
            pagination: Object.assign({}, _this.state.pagination, {
              pageNo: data.pageNumber,
              totalElements: data.totalElements,
              pageSize: data.pageSize,
              totalPages: data.totalPages
            }),
            dataList: !!data.content.length ? data.content.map(function (v) {
              return Object.assign({}, v, { _isShowInput: false });
            }) : [],
            selectedTableData: []
          });
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.handlePageChange = function (page) {
      _this.setState({
        pagination: Object.assign({}, _this.state.pagination, { pageNo: page })
      }, function () {
        _this.getDataList();
      });
    };

    _this.handleModalOk = function () {
      var _this$state3 = _this.state,
          editKeyword = _this$state3.editKeyword,
          modalData = _this$state3.modalData;

      if (!Object.keys(editKeyword).length) {
        _this.setState({
          isShowModal: false
        });
        return;
      }
      var isShowInfo = editKeyword.frequency ? editKeyword.key_times ? editKeyword.key_times.split(',').length != editKeyword.frequency : modalData.key_times.split(',').length != editKeyword.frequency : editKeyword.key_times ? editKeyword.key_times.split(',').length != modalData.frequency : false;
      if (isShowInfo) {
        _message3.default.warning('\u53EA\u80FD\u9009\u62E9' + (editKeyword.frequency || modalData.frequency) + '\u4E2A\u65F6\u95F4\uFF01');
        return;
      }
      var arr = Object.values(editKeyword);
      if (!arr.length || arr.includes('')) {
        _message3.default.warning('请完善表单！');
        return;
      }
      // if (editKeyword.frequency && (editKeyword.key_times && editKeyword.key_times.split(',').length != editKeyword.frequency) || )
      var data = _extends({}, modalData, editKeyword);
      if (data.updatetime && data.createtime) {
        delete data.updatetime;
        delete data.createtime;
      }
      // console.log(data)
      // return
      _ajax2.default.post('/hcm/keyword/update', data).then(function (res) {
        var _res$data4 = res.data,
            data = _res$data4.data,
            status = _res$data4.status,
            message = _res$data4.message;

        if (status === '10000') {
          _message3.default.success(message);
          _this.setState({
            isShowModal: false,
            editKeyword: {}
          });
          _this.getDataList();
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.handleFocusSelect = function (record) {
      var _this$state4 = _this.state,
          modalData = _this$state4.modalData,
          editKeyword = _this$state4.editKeyword;

      var num = parseInt(editKeyword.frequency ? editKeyword.frequency : modalData.frequency, 10);
      var length = editKeyword.key_times !== undefined ? editKeyword.key_times === '' ? 0 : editKeyword.key_times.split(',').length : modalData.key_times.split(',').length;
      // console.log(num, length)
      if (length > num || length == num) {
        _this.setState({
          isDisabledSelectTime: true
        });
      } else {
        _this.setState({
          isDisabledSelectTime: false
        });
      }
    };

    _this.formChange = function (type, key, val) {
      if (key === 'key_price') {
        if (isNaN(Number(val))) {
          _message3.default.warning('请输入数字！');
          return;
        }
      }
      if (type === 'input') {
        _this.setState({
          editKeyword: Object.assign({}, _this.state.editKeyword, _defineProperty({}, key, val))
        });
      }
      if (type === 'select') {
        _this.setState({
          editKeyword: Object.assign({}, _this.state.editKeyword, _defineProperty({}, key, typeof val === 'string' ? val : val.join(',')))
        });
      }

      if (key === 'key_times') {
        var _this$state5 = _this.state,
            modalData = _this$state5.modalData,
            editKeyword = _this$state5.editKeyword;

        var num = parseInt(editKeyword.frequency ? editKeyword.frequency : modalData.frequency, 10);
        if (val.length >= num) {
          _this.setState({
            isDisabledSelectTime: true
          });
        } else {
          _this.setState({
            isDisabledSelectTime: false
          });
        }
      }
    };

    _this.modalClick = function (flag) {
      var record = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (flag) {
        _this.setState({
          isShowModal: flag,
          modalData: record
        });
      } else {
        _this.setState({
          isShowModal: flag,
          editKeyword: {}
        });
      }
    };

    _this.goTo = function (path) {
      _this.props.history.push(path);
    };

    _this.state = {
      isShowModal: false,
      modalData: null,
      loading: false,
      key_name: '',
      platform_code: '',

      pagination: {
        pageNo: 1,
        pageSize: 10
      },
      dataList: [],
      allLength: '', // 是否勾选全部

      selectedTableData: [],

      editKeyword: {},

      isDisabledSelectTime: false,
      temptRecord: {} //临时保存一条记录
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getDataList();
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
//# sourceMappingURL=306_be80720b9376935b95e0.js.map