(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[208],{

/***/ "./app/widget/index/AddKeywordMonitor/main.js":
/*!****************************************************!*\
  !*** ./app/widget/index/AddKeywordMonitor/main.js ***!
  \****************************************************/
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/AddKeywordMonitor/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { LoadingModal } from '../../components/LoadingModal/LoadingModal'


var PLATFORM_MAP = {
  'taobao': '淘宝天猫'
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleSelectFocus = function (e) {
      var _this$props$form = _this.props.form,
          getFieldValue = _this$props$form.getFieldValue,
          validateFields = _this$props$form.validateFields;
      var monitorTime = _this.state.monitorTime;

      validateFields(['monitorRate'], function (err, values) {
        if (!err) {
          var num = parseInt(values.monitorRate, 10);
          // console.log(monitorTime.length >= num)
          if (monitorTime.length > num || monitorTime.length == num) {
            // Msg.warning(`只能选择${num}个时间!`)
            _this.setState({
              isDisabledMonitorTime: true
            });
          } else {
            _this.setState({
              isDisabledMonitorTime: false
            });
          }
        } else {
          _this.setState({
            isDisabledMonitorTime: true
          });
        }
      });
    };

    _this.handleSelectTimeChange = function (value) {
      var _this$props$form2 = _this.props.form,
          getFieldValue = _this$props$form2.getFieldValue,
          validateFields = _this$props$form2.validateFields;

      validateFields(['monitorRate'], function (err, values) {
        if (!err) {
          var num = parseInt(values.monitorRate, 10);
          if (value.length >= num) {
            _this.setState({
              isDisabledMonitorTime: true
            });
          } else {
            _this.setState({
              isDisabledMonitorTime: false
            });
          }
          _this.setState({
            monitorTime: [].concat(_toConsumableArray(value))
          });
        }
      });
    };

    _this.handleInputChange = function (key, index, e) {
      var list = JSON.parse(JSON.stringify(_this.state.keywordList));
      if (key === 'name') {
        if (e.target.value.length > 50) {
          _message3.default.warning('超出50个字符限制！');
          return;
        }
      }
      if (key === 'value') {
        if (isNaN(Number(e))) {
          _message3.default.warning('请输入数字！');
          return;
        }
      }
      list[index][key] = key === 'value' ? e : e.target.value;
      _this.setState({
        keywordList: list
      });
    };

    _this.handleDeleteKeyword = function (index) {
      var list = JSON.parse(JSON.stringify(_this.state.keywordList));
      if (list.length === 1) {
        _message3.default.warning('请至少保留一个关键字！');
        return;
      }
      list.splice(index, 1);
      _this.setState({
        keywordList: list
      });
    };

    _this.handleAddKeyword = function () {
      var list = JSON.parse(JSON.stringify(_this.state.keywordList));
      list.push({ _id: list[list.length - 1]._id + 1 });
      _this.setState({
        keywordList: list
      });
    };

    _this.checkKeyword = function () {
      return _this.state.keywordList.every(function (v) {
        return !!v.name && !!v.value;
      });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFields(function (err, values) {

        if (!err) {
          if (!_this.checkKeyword()) {
            _message3.default.warning('请完善关键字信息！');
            return;
          }
          // console.log(values, this.state.keywordList)
          var keywords = _this.state.keywordList;
          if (values.monitorTime.length !== parseInt(values.monitorRate, 10)) {
            _message3.default.warning('\u5FC5\u987B\u9009\u62E9' + values.monitorRate + '\u4E2A\u65F6\u95F4!');
            return;
          }
          // let platform_name = ''
          // try {
          //   platform_name = can.platform.find(v => v.dictCode === values.platform).dictName
          // } catch (error) {
          //   Msg.error('获取平台名称出错！')
          // }
          var data = {
            platform: can.platform.find(function (v) {
              return v.dictCode === values.platform;
            }).dictName,
            platform_code: values.platform,
            key_range: values.monitorRange,
            frequency: values.monitorRate,
            key_times: values.monitorTime.join(','),
            keywordModelList: keywords.map(function (v) {
              return Object.assign({}, { fielda: v.name, fieldb: v.value });
            })
            // console.log('uu',data)
            // return
          };LoadingModal({ bl: true });
          (0, _ajax2.default)({
            method: 'post',
            url: '/hcm/keyword/add',
            transformRequest: [function (data, headers) {
              return data;
            }],
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            data: JSON.stringify(data)
          }).then(function (res) {
            LoadingModal({ bl: false });
            // console.log(res)
            var _res$data = res.data,
                data = _res$data.data,
                status = _res$data.status,
                message = _res$data.message;

            if (status === '10000') {
              _message3.default.success(message);
              _this.props.form.resetFields();
              _this.setState({
                keywordList: [{ _id: 0 }],
                isDisabledMonitorTime: false,
                monitorTime: []
              });
            } else {
              _message3.default.error(message);
            }
          }).catch(function (err) {
            LoadingModal({ bl: false });
            _message3.default.error('系统繁忙，请稍后再试！');
          });
        }
      });
    };

    _this.handleReset = function () {
      // this.props.form.resetFields()
      _this.props.history.push('/keywordMonitor');
    };

    _this.state = {
      keywordList: [{ _id: 0 }],
      monitorTime: [],
      isDisabledMonitorTime: false
    };
    return _this;
  }

  _createClass(App, [{
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
//# sourceMappingURL=208_17a5e9320fa99d90582a.js.map