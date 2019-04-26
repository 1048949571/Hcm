(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[235],{

/***/ "./app/js/common/lib.js":
/*!******************************!*\
  !*** ./app/js/common/lib.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    onVisibilityChange: function onVisibilityChange(fn1, fn2) {
        var hiddenProperty = 'hidden' in document ? 'hidden' : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null;
        var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
        var onVisibilityChange = function onVisibilityChange() {
            if (!document[hiddenProperty]) {
                console.log('页面非激活' + new Date());
            }
            if (document[hiddenProperty]) {
                console.log('页面激活' + new Date());
            }
        };
        document.addEventListener(visibilityChangeEvent, onVisibilityChange);
    },

    //银行卡号格式化
    formatAccount: function formatAccount(number) {
        number = number.replace(/[\s]/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
        return number;
    },
    formatThousandMoney: function formatThousandMoney(money, currencyText) {
        if (isNaN(money)) return '';
        currencyText = currencyText || '';
        if ($.isNumeric(money) === false || money == 0) {
            return '0.00';
        } else {
            money = +money;
        }
        money = money.toFixed(2);
        if (money == 0) {
            return '0.00';
        } else {
            return currencyText + ' ' + (money + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
        }
    },
    encryption: function encryption() {
        var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var str = '' + s;
        return str.replace(/(\d{3})\d*([0-9a-zA-Z]{4})/, "$1****$2");
    },

    browser: {
        versions: function () {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            var isInApp = u.indexOf('Ourydc.Yuebaobao') > -1;
            var locAppVersion = '';
            if (isInApp) {
                var infoArr = u.match(/Ourydc.Yuebaobao.*/);
                if (infoArr.length > 0) {
                    var info = infoArr[0];
                    locAppVersion = info.substr(info.indexOf("/") + 1);
                }
            }

            return {
                trident: u.indexOf('Trident') > -1, //IE�ں�
                presto: u.indexOf('Presto') > -1, //opera�ں�
                webKit: u.indexOf('AppleWebKit') > -1, //ƻ�����ȸ��ں�
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //����ں�
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //�Ƿ�Ϊ�ƶ��ն�
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios�ն�
                android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android�ն�
                iPhone: u.indexOf('iPhone') > -1, //�Ƿ�ΪiPhone����QQHD�����
                iPad: u.indexOf('iPad') > -1, //�Ƿ�iPad
                webApp: u.indexOf('Safari') == -1, //�Ƿ�webӦ�ó���û��ͷ����ײ�
                weixin: u.indexOf('MicroMessenger') > -1, //�Ƿ�΢��
                weibo: u.match(/WeiBo/i) == "WeiBo" || u.match(/Weibo/i) == "Weibo" || u.match(/weibo/i) == "weibo",
                qq: u.match(/qq/i) == "qq" || u.match(/QQ/i) == "QQ", //�Ƿ�QQ
                qqBrower: u.indexOf("Mobile MQQBrowser") == -1 && u.indexOf("MQQBrowser") != -1,
                isInApp: u.indexOf('Ourydc.Yuebaobao') > -1,
                locAppVersion: locAppVersion

            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    },

    /**
     * 验证账号格式
     */
    checkAccount: function checkAccount(name) {
        var patt = /^[a-zA-Z](\w|\s+){5,15}$/;
        return patt.test(this.trim(name ? name : ''));
    },
    checkUrl: function checkUrl(name) {
        var patt = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
        return patt.test(this.trim(name ? name : ''));
    },


    /**
         * 对接人
         */
    Reg: function Reg() {
        var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var patt = /^[^\u4e00-\u9fa5]{5,31}$/;
        return patt.test(this.trim(str ? str : ''));
    },


    /**
     * 验证密码格式
     */
    checkPassword: function checkPassword() {
        var password = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var patt = /^.{6,16}$/;
        return patt.test(this.trim(password ? password : ''));
    },

    /**
     * 去除左右空格
     */
    trim: function trim(s) {
        s = '' + s;
        return s.replace(/(^\s*)|(\s*$)/g, "");
    },


    /**
      * 获取对应名称的cookie
      * @param name cookie的名称
      * @returns {null} 不存在时，返回null
      */
    getCookie: function getCookie(name) {
        var arr;
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) return unescape(arr[2]);else return null;
    },
    required: function required(s) {

        var str = this.trim(s ? s : '');
        if (str && str.length) {
            return true;
        } else {
            return false;
        }
    },
    legnthCheck: function legnthCheck() {
        var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'INPUT';

        var str = this.trim(s ? s : '');
        return str.length < this.LENGTH[type];
    },


    LENGTH: {
        URL: 500,
        TEXTAREA: 200,
        INPUT: 50
    },

    /**
     * 获取URL中的参数
     * @param name
     * @returns {string}
     */
    getQueryString: function getQueryString(name) {
        var reg = new RegExp("(^|&|[?])" + name + "=([^&]*)(&|$)");
        var r = window.location.href.substr(1).match(reg);
        var newName = r != null ? r[2] : "";
        return newName;
    },


    /**
     * 获取str中的参数
     * @param name
     * @returns {string}
     */
    getParamString: function getParamString(str, name) {
        var reg = new RegExp("(^|&|[?])" + name + "=([^&]*)(&|$)");
        var r = str.substr(1).match(reg);
        var newName = r != null ? r[2] : "";
        return newName;
    },
    Trim: function Trim(str) {
        //去除空格
        return str.replace(/(^\s*)|(\s*$)/g, "");
    },


    /**
     * 获取设备名称
     * @returns {string}
     */
    deviceCheck: function deviceCheck() {
        var device = "";
        if (browser.versions.mobile) {
            if (browser.versions.android) {
                device = "android";
            } else if (browser.versions.ios) {
                device = "ios";
            } else {
                device = "mobile";
            }
        } else {
            device = "web";
        }
        return device;
    }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.3.1@jquery/dist/jquery.js")))

/***/ }),

/***/ "./app/widget/index/Brand/ActivityInspect/main.js":
/*!********************************************************!*\
  !*** ./app/widget/index/Brand/ActivityInspect/main.js ***!
  \********************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/ActivityInspect/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _ImgModal = __webpack_require__(/*! ../../../components/ImgModal/ImgModal */ "./app/widget/components/ImgModal/ImgModal.js");

var _lib = __webpack_require__(/*! ../../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 品牌活动稽查

// import { LoadingModal } from '../../../components/LoadingModal/LoadingModal'


var FORMAT_TIME = 'YYYY-MM-DD HH:mm:ss';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.getActivityNums = function (date) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$shop_name = _ref.shop_name,
          shop_name = _ref$shop_name === undefined ? '' : _ref$shop_name,
          _ref$system_review = _ref.system_review,
          system_review = _ref$system_review === undefined ? '' : _ref$system_review;

      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/InspectStaCount',
        data: {
          start_time: date,
          shop_name: shop_name,
          system_review: system_review
        }
      }).then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          _this.setState({
            activityNums: data
          });
        }
      }).catch(function (err) {});
    };

    _this.getInspectDetail = function (params) {
      LoadingModal({ bl: true });
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/InspectDetail',
        data: params
      }).then(function (res) {
        LoadingModal({ bl: false });
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;

        if (status === '10000') {
          _this.setState({
            detailList: data.length !== 0 ? data.map(function (v) {
              return Object.assign({}, v, { _isShowInspectInput: false });
            }) : []
          });
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.handleSearchClick = function () {
      var _this$state = _this.state,
          shop_name = _this$state.shop_name,
          sys_result = _this$state.sys_result,
          time = _this$state.start_time,
          currentTab = _this$state.currentTab,
          pagination = _this$state.pagination;

      _this.getInspectDetail({
        shop_name: shop_name,
        sys_result: sys_result,
        start_time: time === '' ? (0, _moment2.default)().format(FORMAT_TIME) : time,
        type: '1',
        pageNum: pagination.pageNum,
        pageSize: pagination.pageSize
      });
      _this.getActivityNums(time === '' ? (0, _moment2.default)().format(FORMAT_TIME) : time, {
        shop_name: shop_name,
        system_review: sys_result
      });
      _this.setState({
        currentTab: '1'
      });
    };

    _this.handleComSubmitResult = function (params, _index) {
      var _this$state2 = _this.state,
          brandInspectInfo = _this$state2.brandInspectInfo,
          start_time = _this$state2.start_time;
      // 有效性验证

      if (Object.keys(brandInspectInfo).length === 0 || !brandInspectInfo[_index] || Object.keys(brandInspectInfo[_index]).length === 0 || !brandInspectInfo[_index].brand_review) {
        _message3.default.warning('请选择稽查结果！');
        return;
      }
      var _this$state$brandInsp = _this.state.brandInspectInfo[_index],
          _this$state$brandInsp2 = _this$state$brandInsp.brand_review,
          brand_review = _this$state$brandInsp2 === undefined ? '' : _this$state$brandInsp2,
          _this$state$brandInsp3 = _this$state$brandInsp.brand_review_view,
          brand_review_view = _this$state$brandInsp3 === undefined ? '' : _this$state$brandInsp3;

      if (brand_review_view && !_lib2.default.legnthCheck(brand_review_view, 'TEXTAREA')) {
        _message3.default.warning('\u8BF7\u9650\u5236\u7A3D\u67E5\u610F\u89C1\u5728' + _lib2.default.LENGTH.TEXTAREA + '\u5B57\u7B26\u5185\uFF01');
        return;
      }
      // console.log({
      //   brand_review,
      //   brand_review_view,
      //   ...params
      // })
      // return
      LoadingModal({ bl: true });
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/InspectCamPro',
        data: _extends({
          brand_review: brand_review,
          brand_review_view: brand_review_view,
          createtime: start_time
        }, params)
      }).then(function (res) {
        LoadingModal({ bl: false });
        var _res$data3 = res.data,
            data = _res$data3.data,
            status = _res$data3.status,
            message = _res$data3.message;

        if (status === '10000') {
          _message3.default.success(message);
          // this.getActivityNums(moment().format(FORMAT_TIME))
          _this.handleSearchClick();
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error('网络繁忙，请稍后再试！');
      });
    };

    _this.handleComInspectInfo = function (value, _index, ev) {
      var inspectResultBtn = _this.state.inspectResultBtn;

      var list = inspectResultBtn.slice();
      list[_index] = value === '合格' ? 0 : 1;
      if (value === 'input') {
        _this.setState({
          brandInspectInfo: Object.assign({}, _this.state.brandInspectInfo, _defineProperty({}, _index, Object.assign({}, _this.state.brandInspectInfo[_index], {
            brand_review_view: ev.target.value
          })))
        });
      } else {
        _this.setState({
          brandInspectInfo: Object.assign({}, _this.state.brandInspectInfo, _defineProperty({}, _index, Object.assign({}, _this.state.brandInspectInfo[_index], {
            brand_review: value
          }))),
          inspectResultBtn: list
        });
      }
    };

    _this.handleComToggleClick = function (flag, index) {
      var _this$state3 = _this.state,
          detailList = _this$state3.detailList,
          inspectResultBtn = _this$state3.inspectResultBtn,
          brandInspectInfo = _this$state3.brandInspectInfo;

      var list = [].concat(_toConsumableArray(detailList));
      list[index]._isShowInspectInput = flag;
      if (!flag) {
        // 点击取消，清除数据
        var copyInspectResultBtn = inspectResultBtn.slice();
        copyInspectResultBtn[index] = null;
        var copyObj = Object.assign({}, brandInspectInfo, _defineProperty({}, index, {}));
        _this.setState({
          inspectResultBtn: copyInspectResultBtn,
          brandInspectInfo: copyObj
        });
      }
      _this.setState({
        detailList: list
      });
    };

    _this.handleComImageClick = function (params) {
      (0, _ImgModal.ImgModal)(params);
    };

    _this.handleTabChange = function (activeKey) {
      var _this$state4 = _this.state,
          start_time = _this$state4.start_time,
          pagination = _this$state4.pagination,
          shop_name = _this$state4.shop_name,
          sys_result = _this$state4.sys_result;

      _this.setState({
        currentTab: activeKey
      });
      _this.getInspectDetail({
        type: activeKey,
        start_time: start_time === '' ? (0, _moment2.default)().format(FORMAT_TIME) : start_time,
        pageNum: pagination.pageNum,
        pageSize: pagination.pageSize,
        shop_name: shop_name,
        sys_result: sys_result
      });
    };

    _this.handleChange = function (key, value) {
      var val = key === 'start_time' ? !!value ? (0, _moment2.default)(value).format(FORMAT_TIME) : '' : value;
      _this.setState(_defineProperty({}, key, val));
    };

    _this.handleClearIconClick = function () {
      // console.log(123)
      _this.setState({
        shop_name: ''
      });
    };

    _this.handleInputChange = function (e) {
      _this.setState({
        shop_name: e.target.value
      });
    };

    _this.state = {
      shop_name: '',
      sys_result: '',
      start_time: (0, _moment2.default)().format(FORMAT_TIME),
      currentTab: '1',
      pagination: {
        pageNum: 1,
        pageSize: 10
      },
      activityNums: {},
      detailList: [],
      isShowInspectInput: false,
      brandInspectInfo: {},
      inspectResultBtn: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getActivityNums((0, _moment2.default)().format(FORMAT_TIME), {
        shop_name: this.state.shop_name,
        system_review: this.state.sys_result
      });
      this.getInspectDetail({
        type: 1,
        start_time: (0, _moment2.default)().format(FORMAT_TIME),
        pageNum: this.state.pagination.pageNum,
        pageSize: this.state.pagination.pageSize,
        shop_name: this.state.shop_name,
        sys_result: this.state.sys_result
      });
    }
    // 获取活动数量

    // 获取稽查详情

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
//# sourceMappingURL=235_d9d69b7d7f58e99cea20.js.map