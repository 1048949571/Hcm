(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[233],{

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

/***/ "./app/widget/components/ActivityBaseInfoCard/index.js":
/*!*************************************************************!*\
  !*** ./app/widget/components/ActivityBaseInfoCard/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(/*! ./index.less */ "./app/widget/components/ActivityBaseInfoCard/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORMAT_TIME = 'YYYY-MM-DD HH:mm:ss';

var formatUrl = function formatUrl(searchStr) {
  var arr = searchStr.slice(1).split('&');
  var obj = {};
  arr.forEach(function (v) {
    var array = v.split('=');
    obj[array[0]] = decodeURIComponent(array[1]);
  });
  return obj;
};

var ActivityBaseInfoCard = function ActivityBaseInfoCard(props) {
  var _props$infos = props.infos,
      campaign_name = _props$infos.campaign_name,
      shop_name = _props$infos.shop_name,
      start_time = _props$infos.start_time,
      ent_time = _props$infos.ent_time,
      ping_name = _props$infos.ping_name,
      createtime = _props$infos.createtime,
      campaign_desc = _props$infos.campaign_desc,
      dealer_name = _props$infos.dealer_name;

  return React.createElement(
    'div',
    { className: 'activity-baseinfo-card' },
    React.createElement(
      _row2.default,
      null,
      React.createElement(
        _col2.default,
        { span: 24, className: 'title' },
        campaign_name
      )
    ),
    React.createElement(
      _row2.default,
      null,
      React.createElement(
        _col2.default,
        { span: 8 },
        React.createElement(
          'p',
          { className: 'item' },
          '\u5E97\u94FA\uFF1A',
          shop_name
        ),
        React.createElement(
          'p',
          { className: 'item' },
          '\u6240\u5C5E\u5BA2\u6237\uFF1A',
          dealer_name
        ),
        React.createElement(
          'p',
          { className: 'item' },
          '\u6D3B\u52A8\u65F6\u95F4\uFF1A',
          (0, _moment2.default)(start_time).format(FORMAT_TIME) + '~' + (0, _moment2.default)(ent_time).format(FORMAT_TIME)
        )
      ),
      React.createElement(
        _col2.default,
        { span: 8 },
        React.createElement(
          'p',
          { className: 'item' },
          '\u5E73\u53F0\uFF1A',
          ping_name
        ),
        React.createElement(
          'p',
          { className: 'item' },
          '\u7533\u8BF7\u65F6\u95F4\uFF1A',
          (0, _moment2.default)(createtime).format(FORMAT_TIME)
        ),
        React.createElement(
          'p',
          { className: 'item' },
          '\u6D3B\u52A8\u8BF4\u660E\uFF1A',
          campaign_desc
        )
      ),
      React.createElement(
        _col2.default,
        { span: 8 },
        React.createElement(
          'div',
          { className: 'status-wrapper' },
          React.createElement('p', { className: 'img-wrapper' }),
          React.createElement(
            'p',
            { className: 'status' },
            props.location.params.status
          )
        )
      )
    )
  );
};

exports.default = ActivityBaseInfoCard;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/ActivityBaseInfoCard/index.less":
/*!***************************************************************!*\
  !*** ./app/widget/components/ActivityBaseInfoCard/index.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/ActivityDetails/main.js":
/*!********************************************************!*\
  !*** ./app/widget/index/Brand/ActivityDetails/main.js ***!
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/ActivityDetails/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _lib = __webpack_require__(/*! ../../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { LoadingModal } from '../../../components/LoadingModal/LoadingModal'


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleTogglePriceClick = function (_index) {
      var cplist = _this.state.cplist;

      var list = cplist.slice();
      list[_index]._isExpandPrice = !list[_index]._isExpandPrice;
      _this.setState({
        cplist: list
      });
    };

    _this.handleInputChange = function (_index, e) {
      // console.log(_index)
      var examine_view = _this.state.examine_view;

      var list = examine_view.slice();
      list[_index] = e.target.value;
      _this.setState({
        examine_view: list
      });
    };

    _this.submitReviewInfo = function (params, _index) {
      // console.log(params,_index)
      // 验证有效性
      var examine_view = params.examine_view;

      if (examine_view && !_lib2.default.legnthCheck(examine_view, 'INPUT')) {
        _message3.default.warning('\u8BF7\u9650\u5236\u5BA1\u6838\u610F\u89C1\u5728' + _lib2.default.LENGTH.INPUT + '\u5B57\u7B26\u5185\uFF01');
        return;
      }
      LoadingModal({ bl: true });
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/Verify',
        data: _extends({}, params)
      }).then(function (res) {
        LoadingModal({ bl: false });
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          _message3.default.success(message);
          // window.location.reload()
        } else {
          _message3.default.error(message);
        }
        _this.getActivityDetail();
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error('网络繁忙，稍后再试！');
      });
    };

    _this.getActivityDetail = function () {
      var id = _this.props.match.params.id;

      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/Detail',
        data: { id: id }
      }).then(function (res) {
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;

        if (status === '10000') {
          _this.setState({
            detail: data,
            cplist: data.cplist.map(function (v) {
              return Object.assign({}, v, { _isExpandPrice: false });
            })
          });
        }
      }).catch();
    };

    _this.state = {
      detail: {},
      cplist: [],
      examine_view: [],
      isExpandPrice: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getActivityDetail();
    }
    // 获取活动详情

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

/***/ }),

/***/ "./app/widget/index/Brand/ActivityDetails/tpl.js":
/*!*******************************************************!*\
  !*** ./app/widget/index/Brand/ActivityDetails/tpl.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _ActivityBaseInfoCard = __webpack_require__(/*! ../../../components/ActivityBaseInfoCard */ "./app/widget/components/ActivityBaseInfoCard/index.js");

var _ActivityBaseInfoCard2 = _interopRequireDefault(_ActivityBaseInfoCard);

var _ActivityPublicCard = __webpack_require__(/*! ../../../components/ActivityPublicCard */ "./app/widget/components/ActivityPublicCard/index.js");

var _ActivityPublicCard2 = _interopRequireDefault(_ActivityPublicCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const STATUS = {
//   '审核通过': 0,
//   '审核驳回': 1,
//   '待审核': 2
// }

var Tpl = (0, _That2.default)(function (that) {
  var _that$state = that.state,
      detail = _that$state.detail,
      examine_view = _that$state.examine_view,
      isExpandPrice = _that$state.isExpandPrice,
      cplist = _that$state.cplist;
  var status = that.props.match.params.status;

  return React.createElement(
    _Layout2.default,
    {
      title: '\u6D3B\u52A8\u8BE6\u60C5',
      breadcrumbList: ['活动信息', '活动审核', '活动详情'],
      linkList: ['', '1', ''],
      history: that.props.history
    },
    React.createElement(
      'div',
      { className: 'content-inner' },
      React.createElement(
        'div',
        { className: 'baseinfo' },
        React.createElement(_ActivityBaseInfoCard2.default, { infos: detail, location: that.props.match })
      ),

      // cplist ? 
      cplist.map(function (value, index) {
        // const reviewStatus = STATUS[value.campaign_node]
        return React.createElement(_ActivityPublicCard2.default, {
          isShowHead: false,
          reviewText: examine_view,
          className: 'product-item-wrapper'
          // reviewStatus={reviewStatus} 
          , infos: _extends({}, value, { _index: index }),
          key: value.id,
          submit: that.submitReviewInfo,
          inputChange: that.handleInputChange,
          togglePrice: that.handleTogglePriceClick
          // isExpandPrice={isExpandPrice}
          , activityStatus: status
        });
      })
    )
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=233_4bc315ed3c5fe50d753d.js.map