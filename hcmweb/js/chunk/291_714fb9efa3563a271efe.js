(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[291],{

/***/ "./app/widget/index/Dealers/ActivityDetails/main.js":
/*!**********************************************************!*\
  !*** ./app/widget/index/Dealers/ActivityDetails/main.js ***!
  \**********************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Dealers/ActivityDetails/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { LoadingModal } from '../../../components/LoadingModal/LoadingModal'

var ActivityDetails = function (_React$Component) {
  _inherits(ActivityDetails, _React$Component);

  function ActivityDetails(props) {
    _classCallCheck(this, ActivityDetails);

    var _this = _possibleConstructorReturn(this, (ActivityDetails.__proto__ || Object.getPrototypeOf(ActivityDetails)).call(this, props));

    _this.getActiveDetail = function () {
      var id = _this.state.id;

      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/Detail',
        data: {
          id: id
        }
      }).then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status;

        _this.setState({
          detail: data,
          cplist: data.cplist.map(function (v) {
            return Object.assign({}, v, { _isShowReeditForm: false, _isExpandPrice: false });
          })
        });
      }).catch(function (err) {});
    };

    _this.handleEditSubmit = function (id, index, campaign_id, e) {
      e.preventDefault();
      // console.log(this)
      // return
      _this._forms[index].validateFields(function (err, values) {
        if (!err) {
          // console.log(id, values, index, this)
          // return
          LoadingModal({ bl: true });
          (0, _ajax2.default)({
            method: 'post',
            url: '/hcm/campgign/Reapply',
            data: _extends({
              id: id,
              campaign_id: campaign_id
            }, values)
          }).then(function (res) {
            LoadingModal({ bl: false });
            var _res$data2 = res.data,
                data = _res$data2.data,
                status = _res$data2.status,
                message = _res$data2.message;

            if (status === '10000') {
              _message3.default.success(message);
              _this.getActiveDetail();
            }
          }).catch(function (err) {
            LoadingModal({ bl: false });
            _message3.default.error('系统繁忙，请稍后再试！');
          });
        }
      });
    };

    _this.handleCancelEdit = function () {
      _this.setState({
        selectIndex: -1
      });
    };

    _this.handleReeditClick = function (index, flag) {
      var cplist = _this.state.cplist;

      var list = cplist.slice();
      list[index]._isShowReeditForm = flag;
      _this.setState({
        // selectIndex: index
        cplist: list
      });
    };

    _this.handleExpandPrice = function (index) {
      var _this$state = _this.state,
          expandPriceIndex = _this$state.expandPriceIndex,
          cplist = _this$state.cplist;

      var list = cplist.slice();
      list[index]._isExpandPrice = !list[index]._isExpandPrice;
      _this.setState({
        // expandPriceIndex: index === expandPriceIndex ? -1 : index
        cplist: list
      });
    };

    _this.state = {
      expandPriceIndex: -1,
      id: props.match.params.id,
      status: props.match.params.status,
      detail: {},
      cplist: [],
      selectIndex: -1
    };
    _this._forms = [];
    return _this;
  }

  _createClass(ActivityDetails, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getActiveDetail();
    }
    // componentDidMount() {
    //   const { search } = this.props.location
    //   const str = decodeURIComponent(search.slice(1).split('=')[1])
    //   this.setState({
    //     status: str
    //   })
    // }

    // 获取活动详情

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(_tpl2.default, { that: this });
    }
  }]);

  return ActivityDetails;
}(React.Component);

exports.default = _form2.default.create()(ActivityDetails);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=291_714fb9efa3563a271efe.js.map