(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[290],{

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

/***/ "./app/widget/index/Dealers/ActivityDeclaration/main.js":
/*!**************************************************************!*\
  !*** ./app/widget/index/Dealers/ActivityDeclaration/main.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;
// import { LoadingModal } from '../../../components/LoadingModal/LoadingModal'


__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@5.0.7@react-redux/es/index.js");

var _dealer = __webpack_require__(/*! ../../../../js/actions/dealer */ "./app/js/actions/dealer.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Dealers/ActivityDeclaration/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _lib = __webpack_require__(/*! ../../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActivityDeclaration = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    shopList: state.dealer.shopList,
    productList: state.dealer.productList
  };
}), _dec(_class = function (_React$Component) {
  _inherits(ActivityDeclaration, _React$Component);

  function ActivityDeclaration(props) {
    _classCallCheck(this, ActivityDeclaration);

    var _this = _possibleConstructorReturn(this, (ActivityDeclaration.__proto__ || Object.getPrototypeOf(ActivityDeclaration)).call(this, props));

    _this.checkInputLength = function (list) {
      var LIST = {
        'product_url': {
          label: '商品链接',
          type: 'URL'
        },
        // 'apply_price': {
        //   label: '申请标价',
        //   type: 'INPUT'
        // },
        // 'actual_price': {
        //   label: '实际成交价',
        //   type: 'INPUT'
        // },
        'campaign_type': {
          label: '活动类型',
          type: 'INPUT'
        },
        'gift_situation': {
          label: '赠品情况',
          type: 'TEXTAREA'
        },
        'play_content': {
          label: '玩法说明',
          type: 'TEXTAREA'
        }
      };
      if (list.length) {
        var arr = list.map(function (v, i) {
          return Object.keys(v).map(function (key) {
            if (LIST[key] && !_lib2.default.legnthCheck(v[key], LIST[key].type)) {
              return '\u8BF7\u628A' + (i + 1) + '\u53F7\u4EA7\u54C1\u7684' + LIST[key].label + '\u9650\u5236\u5728' + _lib2.default.LENGTH[LIST[key].type] + '\u5B57\u7B26\u5185\uFF01';
            }
          });
        });
        var temList = arr.reduce(function (a, b) {
          return a.concat(b);
        }, []).filter(function (v) {
          return v !== undefined;
        });
        // console.log('---------------arr', temList)
        if (temList.length) {
          temList.forEach(function (msg) {
            return _message3.default.warning(msg);
          });
          return false;
        } else {
          return true;
        }
      } else {
        _message3.default.warning('请至少添加一个活动产品！');
        return false;
      }
    };

    _this.handleSubmit = function (e) {
      var _this$state = _this.state,
          shop_id = _this$state.shop_id,
          campaign_name = _this$state.campaign_name,
          start_time = _this$state.start_time,
          end_time = _this$state.end_time,
          campaign_desc = _this$state.campaign_desc,
          addActivityProductList = _this$state.addActivityProductList;

      if (localStorage.getItem('logintype') !== 'SHOP' && shop_id === '') {
        _message3.default.warning('请选择店铺！');
        return;
      }
      if (campaign_name === '') {
        _message3.default.warning('请输入活动主题！');
        return;
      }
      if (start_time === end_time) {
        _message3.default.warning('请选择活动时间！');
        return;
      }
      if (!_this.checkInputValue(addActivityProductList)) {
        _message3.default.warning('请完善活动产品信息！');
        return;
      }
      if (!_lib2.default.legnthCheck(campaign_name, 'INPUT')) {
        _message3.default.warning('\u8BF7\u628A\u6D3B\u52A8\u4E3B\u9898\u9650\u5236\u5728' + _lib2.default.LENGTH.INPUT + '\u5B57\u7B26\u5185\uFF01');
        return;
      }
      if (campaign_desc && !_lib2.default.legnthCheck(campaign_desc, 'TEXTAREA')) {
        _message3.default.warning('\u8BF7\u628A\u6D3B\u52A8\u8BF4\u660E\u9650\u5236\u5728' + _lib2.default.LENGTH.TEXTAREA + '\u5B57\u7B26\u5185\uFF01');
        return;
      }
      if (!_this.checkInputLength(addActivityProductList)) return;
      var shop_name = _this.props.shopList.length ? _this.props.shopList.filter(function (v) {
        return v.id === shop_id;
      })[0].shop_name : '';
      var list = addActivityProductList.slice();
      var data = {
        // shop_id,
        // shop_name,
        campaign_name: campaign_name,
        start_time: start_time,
        end_time: end_time,
        campaign_desc: campaign_desc,
        cplist: list.map(function (v) {
          var product_id = v.product_id[1];
          // const product_url = v.selectHttp + v.product_url
          return Object.assign({}, v, { product_id: product_id });
        })
      };
      if (localStorage.getItem('logintype') !== 'SHOP') {
        data.shop_id = shop_id;
        data.shop_name = shop_name;
      }
      // console.log(data)
      // return
      LoadingModal({ bl: true });
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/Apply',
        transformRequest: [function (data, headers) {
          return data;
        }],
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        data: JSON.stringify(data)
      }).then(function (res) {
        LoadingModal({ bl: false });
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          _message3.default.success(message);
          _this.handleClearForm();
        } else {
          _message3.default.error(message);
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error('网络繁忙，请稍后再试！');
      });
    };

    _this.handleSelectBeforeChange = function (index, value) {
      var addActivityProductList = _this.state.addActivityProductList;

      var list = addActivityProductList.slice();
      // list[index].selectHttp = value
      _this.setState({
        addActivityProductList: list
      });
    };

    _this.handleClearForm = function () {
      _this.setState({
        shop_id: '', // 店铺编号
        campaign_name: '', // 活动主题
        start_time: Date.now(), // 开始时间
        end_time: Date.now(), // 结束时间
        campaign_desc: '',
        addActivityProductList: [{
          product_id: '',
          product_url: '',
          apply_price: '',
          actual_price: '',
          campaign_type: '',
          gift_situation: '',
          play_content: '',
          prices_map: ''
        }]
      });
    };

    _this.handleDeleteProduct = function (index) {
      console.log(index);
      var addActivityProductList = _this.state.addActivityProductList;

      var list = [].concat(_toConsumableArray(addActivityProductList));
      list.splice(index, 1);
      _this.setState({
        addActivityProductList: list
      });
    };

    _this.handleSwitchDateChange = function (dates) {
      console.log(dates);
      _this.setState({
        start_time: dates.length === 0 ? Date.now() : dates[0].valueOf(),
        end_time: dates.length === 0 ? Date.now() : dates[1].valueOf()
      });
    };

    _this.handleSwitchShopChange = function (value) {
      console.log(value);
      var dispatch = _this.props.dispatch;

      dispatch((0, _dealer.getProductList)(value));
      _this.setState({
        shop_id: value
      });
    };

    _this.handleSwitchProductChange = function (index, value, selectOption) {
      // console.log(value)
      var addActivityProductList = _this.state.addActivityProductList;

      var list = addActivityProductList.slice();
      list[index].product_id = value;
      _this.setState({
        addActivityProductList: list
      });
      value.length === 2 && _this.getProductPrices(value[1], index);
    };

    _this.handleInputChange = function (params) {
      var flag = params.flag,
          key = params.key,
          event = params.event,
          _params$index = params.index,
          index = _params$index === undefined ? 0 : _params$index;

      if (!flag) {
        // 修改产品信息
        var list = [].concat(_toConsumableArray(_this.state.addActivityProductList));
        var obj = _extends({}, list[index]);
        obj[key] = (typeof event === 'undefined' ? 'undefined' : _typeof(event)) === 'object' ? event.target.value : event;
        list[index] = obj;
        _this.setState({
          addActivityProductList: list
        });
      } else {
        // 修改活动信息
        _this.setState(_defineProperty({}, key, event.target.value));
      }
    };

    _this.getProductPrices = function (id, index) {
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/productPrice',
        data: {
          product_id: id
        }
      }).then(function (res) {
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;
        var addActivityProductList = _this.state.addActivityProductList;

        var list = addActivityProductList.slice();
        list[index].prices_map = data;
        if (status === '10000') {
          _this.setState({
            addActivityProductList: list
          });
        }
      }).catch();
    };

    _this.checkInputValue = function (list) {
      var arr = list.map(function (v) {
        return Object.keys(v).every(function (val) {
          return v[val] !== '' && !!v.apply_price && !!v.actual_price;
        });
      });
      return arr.every(function (v) {
        return v === true;
      });
    };

    _this.handleAddClick = function (index) {
      var _this$state2 = _this.state,
          addActivityProductList = _this$state2.addActivityProductList,
          shop_id = _this$state2.shop_id,
          campaign_name = _this$state2.campaign_name,
          start_time = _this$state2.start_time,
          end_time = _this$state2.end_time;

      addActivityProductList.push({
        product_id: '',
        product_url: '',
        apply_price: '',
        actual_price: '',
        campaign_type: '',
        gift_situation: '',
        play_content: '',
        prices_map: ''
        // selectHttp: 'Http://'
      });
      _this.setState({
        addActivityProductList: addActivityProductList
      });
    };

    _this.state = {
      addActivityProductList: [{
        product_id: '',
        product_url: '',
        apply_price: '',
        actual_price: '',
        campaign_type: '',
        gift_situation: '',
        play_content: '',
        prices_map: ''
      }], // 添加活动产品列表
      shop_id: '', // 店铺编号
      campaign_name: '', // 活动主题
      start_time: Date.now(), // 开始时间
      end_time: Date.now(), // 结束时间
      campaign_desc: '' // 活动描述
      // prices_map: {} // 价格map
      // selectHttp: 'Http://'
    };
    return _this;
  }

  _createClass(ActivityDeclaration, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var shop_id = this.state.shop_id;
      var dispatch = this.props.dispatch;

      dispatch((0, _dealer.getShopList)());
      dispatch((0, _dealer.getProductList)());
    }
    // 提交表单

    // 清空表单

    // 删除产品

    // 选择活动日期

    // 选择店铺

    // 选择产品

    // inputchange事件回调（params: {flag: false(产品信息)true(活动信息)，key: 更改的字段, event: 事件对象)}）

    // 获取产品价格

    // 验证产品信息是否完整

    // 添加产品

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(_tpl2.default, { that: this });
    }
  }]);

  return ActivityDeclaration;
}(React.Component)) || _class);
exports.default = ActivityDeclaration;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=290_49c78a7567f85c7fc3d7.js.map