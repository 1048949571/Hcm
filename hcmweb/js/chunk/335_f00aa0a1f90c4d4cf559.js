(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[335],{

/***/ "./app/widget/index/SetComplaintReport/main.js":
/*!*****************************************************!*\
  !*** ./app/widget/index/SetComplaintReport/main.js ***!
  \*****************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/SetComplaintReport/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    _this.getComplaintAccount = function () {
      _ajax2.default.post('/hcm/complaiont/getListByBmcid', {
        platform: 'ALIBABA'
      }).then(function (res) {
        // console.log(res)
        var _res$data = res.data,
            data = _res$data.data,
            message = _res$data.message,
            status = _res$data.status;

        if (status === '10000') {
          _this.setState({
            complatinAccountList: data.map(function (v) {
              return Object.assign({}, v, { isLeaf: false, label: v.username, value: v.username });
            })
          });
        }
      }).catch(function (err) {
        // console.log(err)
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.getIprType = function (account_id, callback) {
      var platform = _this.state.platform;
      var url = '',
          param = {};
      // if (platform === 'taobao') {
      //   url = '/hcm/getTaobaoiprType'
      //   param.id = account_id
      //   param.platform = platform
      // }
      // if (platform === '1688') {
      url = '/hcm/complaint/get1688iprType';
      param.account_id = account_id;
      // }
      _ajax2.default.post(url, param).then(function (res) {
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;

        if (status === '10000' && !!data) {
          callback(data.data);
        } else {
          callback();
          _message3.default.error(message);
        }
      }).catch(function (err) {
        callback();
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.handleLoadData = function (selectOptions) {
      var platform = _this.state.platform;
      var targetOption = selectOptions[selectOptions.length - 1];
      targetOption.loading = true;
      // console.log('---t',targetOption)
      // if (platform === 'taobao') {
      //   this.getIprType(targetOption.id, data => {
      //     targetOption.loading = false
      //     const list = data.map(v => Object.assign({}, v, {label:v.text,value:v.id}))
      //     targetOption.children = list
      //     // console.log('-00-',this.state.complatinAccountList)
      //     this.setState({
      //       complatinAccountList: [...this.state.complatinAccountList]
      //     })
      //   })
      // }
      // if (platform === '1688') {
      _this.getIprType(targetOption.username, function (data) {
        targetOption.loading = false;
        if (data) {
          // console.log('--data',data)
          var list = data.map(function (v) {
            return Object.assign({}, v, { label: v.name, value: v.number });
          });

          targetOption.children = list;
          // console.log('-00-',this.state.complatinAccountList)
        } else {
          targetOption.isLeaf = true;
        }
        _this.setState({
          complatinAccountList: [].concat(_toConsumableArray(_this.state.complatinAccountList))
        });
      });
      // }
    };

    _this.handleDeleteAlreadyKnowledge = function (outIndex, index) {
      var copyReportList = JSON.parse(JSON.stringify(_this.state.alreadyReportList));
      var copyList = copyReportList[outIndex].complaintModelList;
      if (copyList.length === 1) {
        _message3.default.warning('至少保留一条数据！');
        return;
      }
      copyList.splice(index, 1);
      copyReportList[outIndex].complaintModelList = copyList;
      _this.setState({
        alreadyReportList: copyReportList
      });
    };

    _this.handleEdit = function (index, flag) {
      var copyList = JSON.parse(JSON.stringify(_this.state.alreadyReportList));
      copyList[index]._isEdit = flag;
      _this.setState({
        alreadyReportList: copyList
      });
    };

    _this.handleEditInputChange = function (index, e) {
      var list = _this.state.alreadyReportList.slice();
      if (e.target.value.length > 30) {
        _message3.default.warning('请输入30个字符以内！');
        return;
      }
      list[index] = Object.assign({}, list[index], { report_name: e.target.value });
      _this.setState({
        alreadyReportList: list
      });
    };

    _this.getAlreadyReportList = function () {
      LoadingModal({ bl: true });
      _ajax2.default.post('/hcm/complaint/report_list', { type: _this.state.platform }).then(function (res) {
        LoadingModal({ bl: false });
        var _res$data3 = res.data,
            data = _res$data3.data,
            status = _res$data3.status,
            message = _res$data3.message;

        if (status === '10000') {
          // console.log(data)
          _this.setState({
            alreadyReportList: data.map(function (v) {
              return Object.assign({}, v, { _isEdit: false });
            })
          });
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.handleDeleteAlreadyComplaintReport = function (id) {
      LoadingModal({ bl: true });
      _ajax2.default.post('/hcm/complaint/report_del', { report_id: id }).then(function (res) {
        LoadingModal({ bl: false });
        var _res$data4 = res.data,
            data = _res$data4.data,
            status = _res$data4.status,
            message = _res$data4.message;

        if (status === '10000') {
          _message3.default.success(message);
          _this.getAlreadyReportList();
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.handleSaveReport = function (values, index) {
      var _this$state = _this.state,
          platform = _this$state.platform,
          alreadyReportList = _this$state.alreadyReportList;

      if (values.name === '' || values.report_name === '') {
        _message3.default.warning('请填写报表名称！');
        return;
      }

      if (values.report_id) {
        // 更新操作
        // 去重报表名称开始
        var arr = !!alreadyReportList.length ? alreadyReportList.filter(function (v) {
          return values.report_name === v.report_name;
        }) : [];
        if (arr.length !== 1) {
          _message3.default.warning('报表名称重复请修改！');
          return;
        }
        // 结束
        LoadingModal({ bl: true });
        (0, _ajax2.default)({
          method: 'post',
          url: '/hcm/complaint/report_update',
          transformRequest: [function (data, headers) {
            return data;
          }],
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          data: JSON.stringify({
            complaintModelList: values.complaintModelList,
            type: values.type,
            report_name: values.report_name,
            report_id: values.report_id
          })
        }).then(function (res) {
          LoadingModal({ bl: false });
          var _res$data5 = res.data,
              status = _res$data5.status,
              data = _res$data5.data,
              message = _res$data5.message;

          if (status === '10000') {
            _message3.default.success(message);
            _this.getAlreadyReportList();
          } else {
            _message3.default.error(message);
          }
        }).catch(function (err) {
          LoadingModal({ bl: false });
          _message3.default.error('系统繁忙，请稍后再试！');
        });
      } else {
        // 新增操作
        if (values.info.length === 0) {
          _message3.default.warning('请至少添加一个知识产权！');
          return;
        }
        var list = values.info.map(function (v) {
          return {
            account_id: v[0].label,
            ipr_name: v[1].label,
            ipr_id: v[1].value
          };
        });
        LoadingModal({ bl: true });
        (0, _ajax2.default)({
          method: 'post',
          url: '/hcm/complaint/report_save',
          transformRequest: [function (data, headers) {
            return data;
          }],
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          data: JSON.stringify({
            complaintModelList: list,
            type: platform,
            report_name: values.name
          })
        }).then(function (res) {
          // console.log(res)
          LoadingModal({ bl: false });
          var _res$data6 = res.data,
              data = _res$data6.data,
              status = _res$data6.status,
              message = _res$data6.message;

          if (status === '10000') {
            _message3.default.success(message);
            _this.getAlreadyReportList();
            if (_this.state.reportList.length === 1) {
              _this.setState({
                reportList: [{ id: 0, name: '', list: [''], info: [] }]
              });
            } else {
              _this.handleDeleteReport(index);
            }
          } else {
            _message3.default.error(message);
          }
        }).catch(function (err) {
          LoadingModal({ bl: false });
          _message3.default.error('系统繁忙，请稍后再试！');
        });
      }
    };

    _this.handleInputChange = function (index, e) {
      var list = _this.state.reportList.slice();
      if (e.target.value.length > 30) {
        _message3.default.warning('请输入30个字符以内！');
        return;
      }
      list[index] = Object.assign({}, list[index], { name: e.target.value });
      _this.setState({
        reportList: list
      });
    };

    _this.handleAddReport = function () {
      var copyReportList = JSON.parse(JSON.stringify(_this.state.reportList));
      if (copyReportList.length) {
        copyReportList.push({ id: copyReportList[copyReportList.length - 1].id + 1, name: '', list: [''], info: [] });
      } else {
        copyReportList.push({ id: 0, name: '', list: [''], info: [] });
      }
      _this.setState({
        reportList: copyReportList
      });
    };

    _this.handleDeleteReport = function (index) {
      var copyReportList = JSON.parse(JSON.stringify(_this.state.reportList));
      // if (copyReportList.length === 1) {
      //   Msg.warning('至少保留一条数据！')
      //   return
      // }
      copyReportList.splice(index, 1);
      _this.setState({
        reportList: copyReportList
      });
    };

    _this.handleDeleteKnowledgeRight = function (outIndex, index) {
      var copyReportList = JSON.parse(JSON.stringify(_this.state.reportList));
      var copyList = copyReportList[outIndex].list;
      if (copyList.length === 1) {
        _message3.default.warning('至少保留一条数据！');
        return;
      }
      copyList.splice(index, 1);
      copyReportList[outIndex].list = copyList;
      _this.setState({
        reportList: copyReportList
      });
    };

    _this.handleCascaderChange = function (outIndex, index, status, value, selectOptions) {
      // console.log(status)
      if (status === 'add') {
        var copyReportList = JSON.parse(JSON.stringify(_this.state.reportList));
        // list 保存要回显的数据
        copyReportList[outIndex].list[index] = value;
        // info保存要提交给后台的数据
        copyReportList[outIndex].info.push(selectOptions);
        _this.setState({
          reportList: copyReportList
        });
      }
      if (status === 'edit') {
        var copyAlreadyReport = JSON.parse(JSON.stringify(_this.state.alreadyReportList));
        // console.log(outIndex,copyAlreadyReport[outIndex], value, selectOptions)
        // copyAlreadyReport[outIndex].complaintModelList[index].account_num = selectOptions[0].value
        copyAlreadyReport[outIndex].complaintModelList[index].account_id = selectOptions[0].label;
        copyAlreadyReport[outIndex].complaintModelList[index].ipr_id = selectOptions[1].value;
        copyAlreadyReport[outIndex].complaintModelList[index].ipr_name = selectOptions[1].label;
        _this.setState({
          alreadyReportList: copyAlreadyReport
        });
      }
    };

    _this.handleAddKnowledgeRight = function (outIndex) {
      var copyReportList = JSON.parse(JSON.stringify(_this.state.reportList));
      copyReportList[outIndex].list.push('');
      _this.setState({
        reportList: copyReportList
      });
    };

    _this.state = {
      platform: props.match.params.platform,
      // reportList: [{id: 0, name:'', list: [''], info: []}],
      reportList: [],
      alreadyReportList: [],

      complatinAccountList: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getAlreadyReportList();
      this.getComplaintAccount();
    }
    // 获取投诉账号

    // 获取知识产权类型

    // 编辑删除知识产权

    // 重新编辑

    // 获取已有的报表列表

    // 删除已添加的报表

    // 保存报表

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
//# sourceMappingURL=335_f00aa0a1f90c4d4cf559.js.map