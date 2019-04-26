(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ "./app/widget/components/Copyright.js":
/*!********************************************!*\
  !*** ./app/widget/components/Copyright.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Copyright = function (_React$Component) {
    _inherits(Copyright, _React$Component);

    function Copyright(props) {
        _classCallCheck(this, Copyright);

        return _possibleConstructorReturn(this, (Copyright.__proto__ || Object.getPrototypeOf(Copyright)).call(this, props));
    }

    _createClass(Copyright, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: this.props.clazzName ? this.props.clazzName : 'Copyright' },
                'Copyright \xA9 \u676D\u5DDE\u4E45\u70B9\u7F51\u7EDC\u6280\u672F\u6709\u9650\u516C\u53F8'
            );
        }
    }]);

    return Copyright;
}(React.Component);

exports.default = Copyright;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/WechatBind/index.js":
/*!***************************************************!*\
  !*** ./app/widget/components/WechatBind/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

__webpack_require__(/*! ./wechatbind.less */ "./app/widget/components/WechatBind/wechatbind.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WechatBind = function (_React$Component) {
  _inherits(WechatBind, _React$Component);

  function WechatBind(props) {
    _classCallCheck(this, WechatBind);

    var _this = _possibleConstructorReturn(this, (WechatBind.__proto__ || Object.getPrototypeOf(WechatBind)).call(this, props));

    _this.getData = function () {
      var logintype = window.localStorage.getItem('logintype');
      var apiUrl = '';
      if (logintype === 'DEALER') {
        // 经销商
        apiUrl = '/hcm/Index/dealerIndex';
      } else {
        // 品牌方
        apiUrl = '/hcm/Index/bmaincustomerIndex';
      }
      _ajax2.default.get(apiUrl).then(function (res) {
        if (res.data.status === '10000') {
          _this.setState({
            isBinding: res.data.data.binding
          });
          if (!!res.data.data.binding) {
            clearInterval(_this.timer);
          }
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.getQrcode = function () {
      _ajax2.default.post('/hcm/wechat/getQRcode', {
        userid: _this.props.userId,
        usertype: 'c'
      }).then(function (response) {
        var _response$data = response.data,
            data = _response$data.data,
            message = _response$data.message,
            status = _response$data.status;

        if (status === '10000') {
          // console.log(data)
          _this.setState({
            qrCodeUrl: 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + data
          });
        } else {
          _message3.default.error(message);
        }
      }).catch(function (error) {
        _message3.default.error('网络繁忙，请稍后再试！');
      });
    };

    _this.handleClickFn = function () {
      window.sessionStorage.setItem('wechatModalStatus', '123');
      _this.setState({
        show: false
      });
      clearInterval(_this.timer);
    };

    _this.state = {
      show: true,
      isBinding: props.binding,
      qrCodeUrl: ''
    };
    return _this;
  }

  _createClass(WechatBind, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!window.sessionStorage.getItem('wechatModalStatus') && !this.state.isBinding) {
        this.getQrcode();
        this.timer = setInterval(this.getData, 5000);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isBinding = _state.isBinding,
          show = _state.show,
          qrCodeUrl = _state.qrCodeUrl;

      if (!isBinding && show && !window.sessionStorage.getItem('wechatModalStatus')) {
        return React.createElement(
          'div',
          { className: 'out-wrapper' },
          React.createElement('div', { className: 'mask' }),
          React.createElement(
            'div',
            { className: 'wechat-bind-wrapper' },
            React.createElement(
              'div',
              { className: 'qrcode' },
              React.createElement('img', { src: qrCodeUrl, alt: '\u4E8C\u7EF4\u7801' })
            ),
            React.createElement(
              'h6',
              null,
              '\u5173\u6CE8\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u7ED1\u5B9A\u5FAE\u4FE1'
            ),
            React.createElement(
              'p',
              { className: 'text' },
              '\u5173\u6CE8\u540E\uFF1A'
            ),
            React.createElement(
              'p',
              { className: 'text' },
              '1\u3001\u4F60\u53EF\u4EE5\u4FBF\u6377\u63A5\u6536\u4E1A\u52A1\u63D0\u9192\uFF0C\u67E5\u770B\u4E1A\u52A1\u6D88\u606F\u3002'
            ),
            React.createElement(
              'p',
              { className: 'text' },
              '2\u3001\u4F60\u53EF\u4EE5\u5728\u767B\u5F55\u65F6\u4F7F\u7528\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u3002'
            ),
            React.createElement(
              _button2.default,
              { className: 'btn', onClick: this.handleClickFn },
              '\u7A0D\u540E\u7ED1\u5B9A'
            )
          )
        );
      } else {
        return null;
      }
    }
  }]);

  return WechatBind;
}(React.Component);

exports.default = WechatBind;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/WechatBind/wechatbind.less":
/*!**********************************************************!*\
  !*** ./app/widget/components/WechatBind/wechatbind.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Dealers/Home/tpl.js":
/*!**********************************************!*\
  !*** ./app/widget/index/Dealers/Home/tpl.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@3.10.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _WechatBind = __webpack_require__(/*! ../../../components/WechatBind */ "./app/widget/components/WechatBind/index.js");

var _WechatBind2 = _interopRequireDefault(_WechatBind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WEEKS = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var STOP_STATUS = {
    normal: 1, // 正常状态
    stop: 2 // 停约状态
};
var APPLY_STATUS = {
    APPLYING: 1, // 品牌申请中
    APPROVED: 0, // 品牌申请通过
    DISAGREE: 2, // 品牌入驻已拒绝
    CUSTOM: 3 // 未拥有授权品牌方
};
var BRAND_END_DATE = {
    normal: 1, // 正常
    stop: 0 // 品牌到期
};

var Tpl = (0, _That2.default)(function (that) {
    var _that$props$currentBr = that.props.currentBrand,
        _that$props$currentBr2 = _that$props$currentBr.apply_status,
        apply_status = _that$props$currentBr2 === undefined ? 'APPROVED' : _that$props$currentBr2,
        _that$props$currentBr3 = _that$props$currentBr.status,
        status = _that$props$currentBr3 === undefined ? 1 : _that$props$currentBr3,
        Bmcstatus = _that$props$currentBr.Bmcstatus;
    var _that$state = that.state,
        selectDateIndex = _that$state.selectDateIndex,
        isExpandShop = _that$state.isExpandShop,
        sevenActivity = _that$state.sevenActivity,
        shopBtnList = _that$state.shopBtnList,
        noticeList = _that$state.noticeList,
        productList = _that$state.productList,
        binding = _that$state.binding,
        userId = _that$state.userId;

    var commonPanel = function commonPanel(config) {
        var title = config.title,
            flag = config.flag,
            list = config.list;

        var cardTitle = title + '\uFF08' + (list.length || 0) + '\uFF09';
        if (flag === 'change') {
            cardTitle = React.createElement(
                'div',
                {
                    onClick: that.goTo.bind(that, '/PricePublicity/ChangeHistory/Product'),
                    style: { cursor: 'pointer' }
                },
                title,
                '\uFF08',
                list.length || 0,
                '\uFF09'
            );
        }
        return React.createElement(
            _card2.default,
            { title: cardTitle, className: 'bulletin' },
            list.map(function (value, index) {
                var title = '',
                    name = '',
                    time = 0,
                    id = '',
                    url = '';
                if (flag === 'notice') {
                    title = value.notice_title;
                    name = value.notice_typename;
                    time = value.createtime;
                    id = value.id;
                    url = '/InfoAnnouncement/' + id;
                }
                if (flag === 'change') {
                    title = value.content_after;
                    name = value.product_classify_name;
                    time = value.changetime;
                    id = value.objectid;
                    url = '/PricePublicity/ChangeHistory/HcmProductClassify/' + name + '/' + id;
                }
                return React.createElement(
                    'div',
                    {
                        className: 'common-panel-item',
                        key: index,
                        onClick: that.goTo.bind(that, url) },
                    React.createElement(
                        'h3',
                        null,
                        title
                    ),
                    React.createElement(
                        'p',
                        null,
                        React.createElement(
                            'span',
                            null,
                            name
                        ),
                        React.createElement(
                            'span',
                            null,
                            (0, _moment2.default)(time).format('YYYY-MM-DD HH:mm:ss')
                        )
                    )
                );
            })
        );
    };
    var timeCard = function timeCard(config) {
        return React.createElement(
            'div',
            { className: 'date-card-wrapper' },
            config.map(function (value, index) {
                return React.createElement(
                    'div',
                    {
                        className: selectDateIndex === index ? "date-item active" : "date-item",
                        key: index,
                        onClick: that.handleDateClick.bind(that, index, (0, _moment2.default)(value.my_date).format('YYYY-MM-DD'))
                    },
                    React.createElement(
                        'p',
                        null,
                        React.createElement(
                            'span',
                            null,
                            WEEKS[(0, _moment2.default)(value.my_date).day()],
                            selectDateIndex === 0 && index === 0 ? React.createElement(
                                'span',
                                { className: 'today' },
                                '\u4ECA\u65E5'
                            ) : null
                        ),
                        React.createElement(
                            'span',
                            { className: 'day' },
                            (0, _moment2.default)(value.my_date).format('DD')
                        )
                    ),
                    React.createElement(
                        'p',
                        null,
                        index === 0 ? '进行中' : '已审核',
                        '\u6D3B\u52A8\uFF08',
                        value.all_count,
                        '\uFF09'
                    )
                );
            })
        );
    };
    var approved = React.createElement(
        'div',
        { className: 'content' },
        !!userId ? React.createElement(_WechatBind2.default, { userId: userId, binding: binding }) : null,
        React.createElement(
            'section',
            { className: 'apply-activity', onClick: that.goTo.bind(that, '/ActivityDeclaration') },
            React.createElement(
                'span',
                null,
                React.createElement(_icon2.default, { type: 'plus' }),
                '\xA0\u7533\u62A5\u6D3B\u52A8'
            )
        ),
        React.createElement(
            'section',
            { className: 'publicity' },
            React.createElement(
                'h3',
                null,
                '\u54C1\u724C\u6D3B\u52A8\u516C\u793A'
            ),
            timeCard(sevenActivity),
            React.createElement(
                'div',
                { className: 'shop-btn-wrapper' },
                React.createElement(
                    'h3',
                    null,
                    React.createElement(
                        'span',
                        null,
                        '\u6D3B\u52A8\u5E97\u94FA\uFF08',
                        shopBtnList.length || 0,
                        '\uFF09'
                    ),
                    React.createElement(
                        'span',
                        { onClick: that.handleToggleClick },
                        isExpandShop ? '收起' : '展开',
                        '\u66F4\u591A\xA0',
                        isExpandShop ? React.createElement(_icon2.default, { type: 'up' }) : React.createElement(_icon2.default, { type: 'down' })
                    )
                ),
                isExpandShop ? React.createElement(
                    'div',
                    { className: 'btns-wrapper' },
                    shopBtnList.map(function (value, index) {
                        return React.createElement(
                            _button2.default,
                            {
                                className: 'btn',
                                key: index
                            },
                            value.shop_name,
                            '\uFF08',
                            value.act_count,
                            '\uFF09'
                        );
                    })
                ) : null
            )
        ),
        React.createElement(
            'section',
            { className: 'bulletin-wrapper' },
            commonPanel({ title: '价格公示变更', flag: 'change', list: productList }),
            commonPanel({ title: '新通知公告', flag: 'notice', list: noticeList })
        )
    );
    var unapproved = function unapproved(status) {
        return React.createElement(
            'div',
            { className: 'content' },
            React.createElement(
                'section',
                { className: 'unapproved-wrapper' },
                React.createElement(
                    'div',
                    { className: 'main' },
                    status === 1 ? React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(
                            'p',
                            { className: 'icon' },
                            React.createElement(_icon2.default, { type: 'exclamation-circle' })
                        ),
                        React.createElement(
                            'p',
                            { className: 'status' },
                            '\u5165\u9A7B\u7533\u8BF7\uFF0C\u6B63\u5728\u5BA1\u6838\u4E2D...'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\u4F60\u901A\u8FC7\u5176\u4ED6\u65B9\u5F0F\u8054\u7CFB\u54C1\u724C\u65B9\u5BA1\u6838\u4EBA\uFF0C\u5C3D\u5FEB\u540C\u610F\u5165\u9A7B\u7533\u8BF7\u3002'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\u5BA1\u6838\u901A\u8FC7\u540E\uFF0C\u6211\u4EEC\u4F1A\u4EE5\u77ED\u4FE1\u5F62\u5F0F\u901A\u77E5\u5230\u4F60\u7684\u6CE8\u518C\u624B\u673A\u3002'
                        )
                    ) : status === 2 ? React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(
                            'p',
                            { className: 'fail-icon' },
                            React.createElement(_icon2.default, { type: 'close-circle' })
                        ),
                        React.createElement(
                            'p',
                            { className: 'fail-status' },
                            '\u54C1\u724C\u65B9\u62D2\u7EDD\u4E86\u4F60\u7684\u5165\u9A7B\u7533\u8BF7'
                        ),
                        React.createElement(
                            'div',
                            { className: 'reason' },
                            React.createElement(
                                'h5',
                                null,
                                '\u5BA1\u6838\u672A\u901A\u8FC7\u539F\u56E0\u53EF\u80FD\u662F\uFF1A'
                            ),
                            React.createElement(
                                'ol',
                                null,
                                React.createElement(
                                    'li',
                                    null,
                                    '1\u3001\u5B8C\u5584\u7684\u4FE1\u606F\u4E0D\u5B8C\u6574\u6216\u4E0D\u6B63\u786E\uFF0C\u54C1\u724C\u65B9\u672A\u80FD\u4F7F\u505A\u51FA\u6B63\u786E\u8BC6\u522B\u3002'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    '2\u3001\u4E0D\u662F\u54C1\u724C\u65B9\u767B\u8BB0\u5728\u518C\u7684\u6388\u6743\u7ECF\u9500\u5546\u3002\u54C1\u724C\u65B9\u62D2\u7EDD\u4E86\u4F60\u7684\u5165\u9A7B\u7533\u8BF7'
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'resolution' },
                            React.createElement(
                                'h5',
                                null,
                                '\u89E3\u51B3\u65B9\u6CD5'
                            ),
                            React.createElement(
                                'ol',
                                null,
                                React.createElement(
                                    'li',
                                    null,
                                    '1\u3001\u53EF\u4EE5\u901A\u8FC7\u5176\u6709\u6548\u9014\u5F84\u8054\u7CFB\u54C1\u724C\u65B9\u5BA1\u6838\u4EBA\u3002'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    '2\u3001\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u4E2A\u4EBA\u4E2D\u5FC3\u8D44\u6599\uFF0C\u518D\u6B21\u63D0\u4EA4\u7533\u8BF7\u3002'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'btns', style: { display: 'flex', justifyContent: 'space-around', marginTop: '20px' } },
                                React.createElement(
                                    _button2.default,
                                    { onClick: function onClick() {
                                            that.props.history.push('/DataInformation');
                                        } },
                                    '\u4FEE\u6539\u8D44\u6599\u4FE1\u606F'
                                ),
                                React.createElement(
                                    _button2.default,
                                    { type: 'primary', onClick: that.reSubmitApply },
                                    '\u91CD\u65B0\u63D0\u4EA4\u7533\u8BF7'
                                )
                            )
                        )
                    ) : status === 3 ? React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(
                            'p',
                            { className: 'icon' },
                            React.createElement(_icon2.default, { type: 'exclamation-circle' })
                        ),
                        React.createElement(
                            'p',
                            { className: 'status' },
                            '\u4F60\u672A\u62E5\u6709\u6388\u6743\u54C1\u724C\u65B9'
                        ),
                        React.createElement(
                            'p',
                            { className: 'no-brand-title' },
                            '\u8BF4\u660E\uFF1A'
                        ),
                        React.createElement(
                            'p',
                            { className: 'no-brand' },
                            '\u4F60\u8FD8\u672A\u62E5\u6709\u6388\u6743\u54C1\u724C\u65B9\uFF0C\u6216\u4E4B\u524D\u5408\u4F5C\u7684\u54C1\u724C\u65B9\u4E0E\u4F60\u89E3\u9664\u4E86\u5408\u4F5C\u5173\u7CFB'
                        ),
                        React.createElement(
                            'p',
                            { className: 'no-brand-title' },
                            '\u89E3\u51B3\u65B9\u6848\uFF1A'
                        ),
                        React.createElement(
                            'p',
                            { className: 'no-brand' },
                            '\u4F60\u53EF\u4EE5\u901A\u8FC7\u8054\u7CFB\u54C1\u724C\u65B9\u76F8\u5173\u4EBA\u5458\u91CD\u65B0\u5165\u9A7B'
                        )
                    ) : React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(
                            'p',
                            { className: 'icon' },
                            React.createElement(_icon2.default, { type: 'exclamation-circle' })
                        ),
                        React.createElement(
                            'p',
                            { className: 'status' },
                            '\u54C1\u724C\u65B9\u8D26\u53F7\u6682\u65F6\u505C\u7528'
                        ),
                        React.createElement(
                            'p',
                            { className: 'brand-stop' },
                            '\u8BF4\u660E\uFF1A\u54C1\u724C\u65B9\u8D26\u53F7\u56E0\u8FC7\u6709\u6548\u4F7F\u7528\u671F\u88AB\u505C\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7EED\u671F\u518D\u6B21\u542F\u7528\u3002'
                        )
                    )
                )
            )
        );
    };
    var stopStatus = React.createElement(
        'div',
        { className: 'content' },
        React.createElement(
            'section',
            { className: 'stop-status-wrapper' },
            React.createElement(
                'div',
                { className: 'stop-main' },
                React.createElement(
                    'p',
                    null,
                    React.createElement(_icon2.default, { type: 'exclamation-circle', className: 'icon' }),
                    React.createElement(
                        'span',
                        null,
                        '\u54C1\u724C\u65B9\u6388\u6743\u5408\u4F5C\u5408\u540C\u5230\u671F'
                    )
                ),
                React.createElement(
                    'p',
                    null,
                    '\u8BF4\u660E\uFF1A\u4F60\u4E0E\u54C1\u724C\u65B9\u6388\u6743\u5408\u4F5C\u5408\u540C\u5DF2\u5230\u671F\uFF0C\u8BF7\u8054\u7CFB\u54C1\u724C\u65B9\u4EBA\u5458\u7EED\u671F\u3002'
                )
            )
        )
    );
    return React.createElement(
        'div',
        { className: 'home' },
        Bmcstatus === BRAND_END_DATE.stop ? unapproved('brand') : APPLY_STATUS[apply_status] === 0 ? status === STOP_STATUS.normal ? approved : stopStatus : unapproved(APPLY_STATUS[apply_status]),
        React.createElement(_Copyright2.default, { clazzName: 'copyright' })
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_Symbol.js":
/*!********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_Symbol.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/_lodash@4.17.11@lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_baseGetTag.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_baseGetTag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/_lodash@4.17.11@lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/_lodash@4.17.11@lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/_lodash@4.17.11@lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_freeGlobal.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_freeGlobal.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../_webpack@4.21.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.21.0@webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_getRawTag.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_getRawTag.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/_lodash@4.17.11@lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_objectToString.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_objectToString.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_root.js":
/*!******************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_root.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/_lodash@4.17.11@lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/isObject.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/isObject.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/isObjectLike.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/isObjectLike.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/isSymbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/isSymbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/_lodash@4.17.11@lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/_lodash@4.17.11@lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ })

}]);
//# sourceMappingURL=107_31d63590476c0cdeef6c.js.map