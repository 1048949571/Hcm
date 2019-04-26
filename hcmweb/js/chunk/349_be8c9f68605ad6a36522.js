(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[349],{

/***/ "./app/widget/index/TaobaoComplaint/main.js":
/*!**************************************************!*\
  !*** ./app/widget/index/TaobaoComplaint/main.js ***!
  \**************************************************/
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/TaobaoComplaint/tpl.js");

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

var PLATFORM = {
  tb: 'taobao',
  tm: 'tmall',
  tmhk: 'tmallhk'
};
var COMPLAINT_LINK_TYPE = {
  goods: 'item',
  shops: 'shop'
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleRemoveFile = function (file) {
      var arr = _this.state.fileList.slice();
      var list = arr.filter(function (v) {
        return v.uid !== file.uid;
      });
      _this.setState({
        fileList: list
      });
    };

    _this.handleBeforeUpload = function (file, list) {
      var ALLOW_TYPE = ['jpg', 'png', 'bmp', 'pdf', 'zip', 'rar', 'doc', 'docx'];
      var type = file.name.substring(file.name.lastIndexOf('.') + 1);

      var isAllow = ALLOW_TYPE.includes(type);
      var isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        _message3.default.error('上传的文件必须小于 5MB!');
      }
      if (!isAllow) {
        _message3.default.error('请按正确格式上传文件！');
      }
      return isAllow && isLt5M;
    };

    _this.handleUploadChange = function (info) {
      // const { fileList, showFileList } = this.state
      // const list = fileList.slice()
      // console.log(info)
      var fileList = info.fileList;

      if (info.file.status === 'done') {
        // console.log(info)
        var _info$file$response = info.file.response,
            data = _info$file$response.data,
            status = _info$file$response.status,
            message = _info$file$response.message;

        if (status === '10000') {
          _message3.default.success(message);
          // list.push({link: data.url, uid: info.file.uid, url: data.url})
          // this.setState({
          //   fileList: list
          // })
        } else {
          _message3.default.error(message);
        }
      }
      if (_this.handleBeforeUpload(info.file)) {
        _this.setState({
          fileList: fileList
        });
      }
    };

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
            complatinAccountList: data
          });
        }
      }).catch(function (err) {
        // console.log(err)
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.verifyLink = function (callback) {
      var _this$state = _this.state,
          complaintPlatform = _this$state.complaintPlatform,
          complaintLinkType = _this$state.complaintLinkType,
          linkList = _this$state.linkList,
          complaintAccount = _this$state.complaintAccount;

      _this.props.form.validateFieldsAndScroll(['complaintAccount', 'knowledgeRightTypeDetail'], function (err, values) {
        if (!err) {
          var cId = values.knowledgeRightTypeDetail;
          if (!linkList.length) {
            _message3.default.warning('请至少添加一条链接！');
            return;
          }
          LoadingModal({ bl: true });
          _ajax2.default.post('/hcm/taobaoCheckLink', {
            id: complaintAccount,
            platform: complaintPlatform,
            cId: cId,
            urlType: complaintLinkType,
            linkers: linkList.map(function (v) {
              return typeof v === 'string' ? v : v.errorLink;
            }).join(',')
          }).then(function (res) {
            LoadingModal({ bl: false });
            // const data = this.handleResponse(res)
            var _res$data2 = res.data,
                data = _res$data2.data,
                status = _res$data2.status,
                message = _res$data2.message;

            if (status === '10000') {
              if (data.data) {
                // console.log(data)
                var _data$data = data.data,
                    success = _data$data.success,
                    error = _data$data.error;
                // if (success !== false) {

                _this.setState({
                  isVerifyLink: true,
                  linkList: error ? error.map(function (v) {
                    return Object.assign({}, { errorLink: v });
                  }).concat(success ? success : []) : success ? success : []
                }, function () {
                  callback && callback();
                });
                // } else {
                //   Msg.error(data.data.message)
                // }
              }
            } else {
              _message3.default.error(message);
            }
          }).catch(function (err) {
            LoadingModal({ bl: false });
            _this.catchError(err);
          });
        }
      });
    };

    _this.getComplaintReason = function (platform, typeId) {
      _this.getListFn('/hcm/getTaobaoIprReason', { platform: platform, type: typeId }, 'complaintReasonList');
    };

    _this.getKnowledgeRightTypeDetail = function (typeId) {
      _this.getListFn('/hcm/getTaobaoIpr', { type: typeId }, 'knowledgeRightTypeDetailList');
    };

    _this.getKnowledgeRightType = function (platform) {
      _this.getListFn('/hcm/getTaobaoiprType', { platform: platform }, 'knowledgeRightTypeList');
    };

    _this.getListFn = function (url, params, key) {
      var complaintAccount = _this.state.complaintAccount;

      _ajax2.default.post(url, _extends({ id: complaintAccount }, params)).then(function (res) {
        var data = _this.handleResponse(res);
        if (data) {
          _this.setState(_defineProperty({}, key, [].concat(_toConsumableArray(data))));
        }
      }).catch(_this.catchError);
    };

    _this.catchError = function (err) {
      _message3.default.error('系统繁忙，请稍后再试！');
    };

    _this.handleResponse = function (response) {
      // console.log('=-=-=-=', response)
      var _response$data = response.data,
          data = _response$data.data,
          status = _response$data.status,
          message = _response$data.message;

      if (status === '10000') {
        return data ? data.data : null;
      } else {
        _message3.default.error(message);
        // return null
      }
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.verifyLink(function () {
        var _this$state2 = _this.state,
            complaintPlatform = _this$state2.complaintPlatform,
            knowledgeRightTypeList = _this$state2.knowledgeRightTypeList,
            knowledgeRightTypeDetailList = _this$state2.knowledgeRightTypeDetailList,
            complaintReasonList = _this$state2.complaintReasonList,
            complaintLinkType = _this$state2.complaintLinkType,
            linkList = _this$state2.linkList,
            fileList = _this$state2.fileList;
        var validateFieldsAndScroll = _this.props.form.validateFieldsAndScroll;

        validateFieldsAndScroll(function (err, values) {
          if (!err) {
            if (values.reportComment.length > 1500) {
              _message3.default.warning('投诉理由超过1500字，请修改！');
              return;
            }
            var reasonText = '',
                iprName = '',
                cName = '',
                url = '';
            complaintReasonList.forEach(function (v) {
              v.items.forEach(function (val) {
                if (val.id === values.reason) {
                  reasonText = val.text;
                }
              });
            });
            iprName = knowledgeRightTypeList.filter(function (v) {
              return v.id == values.knowledgeRightType;
            })[0].text;
            cName = knowledgeRightTypeDetailList.filter(function (v) {
              return v.id == values.knowledgeRightTypeDetail;
            })[0].text;
            url = !!fileList.length ? fileList.map(function (v) {
              return v.response.data.url;
            }).join(',') : '';
            var data = {
              id: values.complaintAccount,
              platform: complaintPlatform,
              iprName: iprName,
              type: values.knowledgeRightType,
              cName: cName,
              cId: values.knowledgeRightTypeDetail,
              urlType: complaintLinkType,
              reasonText: complaintLinkType === COMPLAINT_LINK_TYPE.goods ? reasonText : '明显假冒',
              reason: complaintLinkType === COMPLAINT_LINK_TYPE.goods ? values.reason : 'frontReason.trademark.fake.mxjh',
              reportComment: values.reportComment,
              links: linkList.map(function (v) {
                return typeof v === 'string' ? v : v.errorLink;
              }).join(','),
              url: url
              // console.log(data)
              // return
            };LoadingModal({ bl: true });
            _ajax2.default.post('/hcm/taobaoComplaint', data).then(function (res) {
              LoadingModal({ bl: false });
              var _res$data3 = res.data,
                  data = _res$data3.data,
                  status = _res$data3.status,
                  message = _res$data3.message;

              if (status === '10000') {
                // if (data.success && data.success !== false) {
                // Msg.success((data.message && data.message) || message)
                _message3.default.success(message);
                _this.props.form.resetFields();
                _this.setState({
                  linkList: [],
                  isVerifyLink: false,
                  complaintReasonId: '',
                  fileList: []
                });
                // } else {
                //   Msg.error(data.message && data.message)
                // }
              } else {
                _message3.default.error(message);
              }
            }).catch(function (err) {
              LoadingModal({ bl: false });
              _this.catchError(err);
            });
          }
        });
      });
    };

    _this.handleRadioChange = function (key, e) {
      _this.setState(_defineProperty({}, key, e.target.value));
      if (key === 'complaintPlatform') {
        _this.props.form.validateFields(['complaintAccount'], function (err, values) {
          if (!err) {
            _this.getKnowledgeRightType(e.target.value);
          }
        });
      }
    };

    _this.handleSelect = function (key, value) {
      if (key === 'knowledgeRightType') {
        // 选择知识产权类型
        _this.props.form.resetFields(['knowledgeRightTypeDetail']);
        _this.getKnowledgeRightTypeDetail(value);
        _this.getComplaintReason(_this.state.complaintPlatform, value);
      } else if (key === 'complaintAccount') {
        _this.props.form.resetFields(['knowledgeRightType', 'knowledgeRightTypeDetail', 'reason']);
        _this.setState(_defineProperty({}, key, value), function () {
          _this.getKnowledgeRightType(_this.state.complaintPlatform);
        });
      } else {
        _this.setState(_defineProperty({}, key, value));
      }
    };

    _this.handleLinkItemBlur = function () {
      var list = _this.state.linkList.slice();
      _this.setState({
        current_link_item: -1,
        linkList: Array.from(new Set(list))
      });
    };

    _this.handleLinkItemChange = function (index, e) {
      var value = e.target.value;
      var list = _this.state.linkList.slice();
      list[index] = value;
      _this.setState({
        linkList: list,
        isVerifyLink: false
      });
    };

    _this.handleLinkItemEdit = function (index) {
      _this.setState({
        current_link_item: index
      });
    };

    _this.handleLinkItemDelete = function (index) {
      // console.log(index)
      var list = _this.state.linkList.slice();
      list.splice(index, 1);
      _this.setState({
        linkList: list,
        isVerifyLink: false
      });
    };

    _this.handleLinkChange = function (e) {
      var list = _this.state.linkList.slice();
      if (list.length < 300) {
        _this.setState({
          link_textarea_value: e.target.value
        });
      } else {
        _message3.default.warning('超出限制！');
      }
    };

    _this.handleLinkBlur = function (e) {
      // console.log(this._textarea)
      var values = e.target.value.split('\n');
      var list = _this.state.linkList.slice();
      var arr = list.concat(values);

      var value_set = new Set(arr.filter(function (v) {
        return v !== '';
      }));
      var list_value = Array.from(value_set);

      _this.setState({
        linkList: [].concat(_toConsumableArray(list_value)),
        link_textarea_value: ''
      });
    };

    _this.state = {
      // 投诉链接相关
      linkList: [],
      link_textarea_value: '',
      current_link_item: -1,

      complaintAccount: '',
      complatinAccountList: [],
      knowledgeRightTypeList: [],
      knowledgeRightTypeDetailList: [],
      complaintPlatform: PLATFORM.tb,

      complaintLinkType: COMPLAINT_LINK_TYPE.goods,
      complaintReasonList: [],

      complaintReasonId: '',

      fileList: [],
      showFileList: [],

      isVerifyLink: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getComplaintAccount();
      // this.getKnowledgeRightType(this.state.complaintPlatform)
    }
    // 移除文件

    // 上传文件之前

    // 上传文件改变

    // 获取投诉账号

    // 验证链接

    // 获取投诉理由

    // 获取知识产权类别详情

    // 获取知识产权类型

    // 修改链接结束

    // 修改链接

    // 选中要修改的链接

    // 删除选中的链接

    // 添加链接

    // 添加链接结束

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(_tpl2.default, { that: this });
    }
  }]);

  return App;
}(React.Component);

// export default App


exports.default = _form2.default.create()(App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=349_be8c9f68605ad6a36522.js.map