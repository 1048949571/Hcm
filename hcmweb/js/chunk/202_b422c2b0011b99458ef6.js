(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[202],{

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

/***/ "./app/widget/index/Brand/Home/tpl.js":
/*!********************************************!*\
  !*** ./app/widget/index/Brand/Home/tpl.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _carousel = __webpack_require__(/*! antd/es/carousel */ "./node_modules/_antd@3.10.1@antd/es/carousel/index.js");

var _carousel2 = _interopRequireDefault(_carousel);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@3.10.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/carousel/style/css */ "./node_modules/_antd@3.10.1@antd/es/carousel/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _WechatBind = __webpack_require__(/*! ../../../components/WechatBind */ "./app/widget/components/WechatBind/index.js");

var _WechatBind2 = _interopRequireDefault(_WechatBind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardTitle = function CardTitle(text) {
    return React.createElement(
        'div',
        null,
        text
    );
};
var Tpl = (0, _That2.default)(function (that) {
    var _that$state$dataList = that.state.dataList,
        binding = _that$state$dataList.binding,
        userid = _that$state$dataList.userid,
        _that$state$dataList$ = _that$state$dataList.campaign_examine_apply,
        campaign_examine_apply = _that$state$dataList$ === undefined ? '-' : _that$state$dataList$,
        _that$state$dataList$2 = _that$state$dataList.campaign_inspect_num,
        campaign_inspect_num = _that$state$dataList$2 === undefined ? '-' : _that$state$dataList$2,
        _that$state$dataList$3 = _that$state$dataList.dealer_applying_num,
        dealer_applying_num = _that$state$dataList$3 === undefined ? '-' : _that$state$dataList$3,
        _that$state$dataList$4 = _that$state$dataList.danlian_yc_num,
        danlian_yc_num = _that$state$dataList$4 === undefined ? '-' : _that$state$dataList$4,
        _that$state$dataList$5 = _that$state$dataList.guanjianci_yc_num,
        guanjianci_yc_num = _that$state$dataList$5 === undefined ? '-' : _that$state$dataList$5,
        _that$state$dataList$6 = _that$state$dataList.dingdan_yc_num,
        dingdan_yc_num = _that$state$dataList$6 === undefined ? '-' : _that$state$dataList$6,
        _that$state$dataList$7 = _that$state$dataList.huodong_yc_num,
        huodong_yc_num = _that$state$dataList$7 === undefined ? '-' : _that$state$dataList$7,
        _that$state$dataList$8 = _that$state$dataList.shoujia_yc_num,
        shoujia_yc_num = _that$state$dataList$8 === undefined ? '-' : _that$state$dataList$8;

    var goTo = function goTo(url) {
        window.location.href = url;
    };
    return React.createElement(
        'div',
        { className: 'brand-home' },
        !!userid ? React.createElement(_WechatBind2.default, { userId: userid, binding: binding }) : null,
        React.createElement(
            'div',
            { className: 'content' },
            React.createElement(
                'div',
                { className: 'flex-row' },
                React.createElement(
                    _card2.default,
                    {
                        className: 'warning-box',
                        bodyStyle: { padding: 16, flex: '1 0' },
                        hoverable: true,
                        title: CardTitle("异常提醒")
                    },
                    React.createElement(
                        _card2.default.Grid,
                        { onClick: function onClick() {
                                return goTo('/index.html#/PriceMonitor');
                            }, className: 'item' },
                        React.createElement(
                            'span',
                            null,
                            shoujia_yc_num
                        ),
                        React.createElement('img', { src: '../../../../img/icon1.1/home_Price.png' }),
                        React.createElement(
                            'p',
                            null,
                            '\u552E\u4EF7\u8868\u76D1\u63A7\u5F02\u5E38'
                        )
                    ),
                    React.createElement(
                        _card2.default.Grid,
                        { onClick: function onClick() {
                                return goTo('/index.html#/keywordMonitor');
                            }, className: 'item' },
                        React.createElement(
                            'span',
                            null,
                            guanjianci_yc_num
                        ),
                        React.createElement('img', { src: '../../../../img/icon1.1/home_Keywords.png' }),
                        React.createElement(
                            'p',
                            null,
                            '\u5173\u952E\u8BCD\u76D1\u63A7\u5F02\u5E38'
                        )
                    ),
                    React.createElement(
                        _card2.default.Grid,
                        { onClick: function onClick() {
                                return goTo('/index.html#/UrlMonitor');
                            }, className: 'item' },
                        React.createElement(
                            'span',
                            null,
                            danlian_yc_num
                        ),
                        React.createElement('img', { src: '../../../../img/icon1.1/home_Singlelink.png' }),
                        React.createElement(
                            'p',
                            null,
                            '\u5355\u94FE\u63A5\u76D1\u63A7\u5F02\u5E38'
                        )
                    ),
                    React.createElement(
                        _card2.default.Grid,
                        { onClick: function onClick() {
                                return goTo('/index.html#/OrderMonitor');
                            }, className: 'item' },
                        React.createElement(
                            'span',
                            null,
                            dingdan_yc_num
                        ),
                        React.createElement('img', { src: '../../../../img/icon1.1/home_Order.png' }),
                        React.createElement(
                            'p',
                            null,
                            '\u8BA2\u5355\u76D1\u63A7\u5F02\u5E38'
                        )
                    ),
                    React.createElement(
                        _card2.default.Grid,
                        { onClick: function onClick() {
                                return goTo('/index.html#/ActivityInspect');
                            }, className: 'item' },
                        React.createElement(
                            'span',
                            null,
                            huodong_yc_num
                        ),
                        React.createElement('img', { src: '../../../../img/icon1.1/home_Inspection.png' }),
                        React.createElement(
                            'p',
                            null,
                            '\u6D3B\u52A8\u7A3D\u67E5\u7ED3\u679C\u5F02\u5E38'
                        )
                    )
                ),
                React.createElement(
                    _card2.default,
                    {
                        className: 'todo-list',
                        hoverable: true,
                        title: CardTitle("代办事宜")
                    },
                    React.createElement(
                        _card2.default.Grid,
                        { onClick: function onClick() {
                                return goTo('/index.html#/PendingClient');
                            }, className: 'item' },
                        React.createElement(
                            'div',
                            null,
                            React.createElement('img', { src: '../../../../img/icon1.1/home_Dealer.png' }),
                            React.createElement(
                                'p',
                                null,
                                '\u7ECF\u9500\u5546\u5165\u9A7B\u5F85\u5BA1\u6279'
                            )
                        ),
                        React.createElement(
                            'span',
                            null,
                            dealer_applying_num
                        )
                    ),
                    React.createElement(
                        _card2.default.Grid,
                        { onClick: function onClick() {
                                return goTo('/index.html#/ActivityReview');
                            }, className: 'item' },
                        React.createElement(
                            'div',
                            null,
                            React.createElement('img', { src: '../../../../img/icon1.1/home_Pending.png' }),
                            React.createElement(
                                'p',
                                null,
                                '\u6D3B\u52A8\u7533\u8BF7\u5F85\u5BA1\u6279'
                            )
                        ),
                        React.createElement(
                            'span',
                            null,
                            campaign_examine_apply
                        )
                    ),
                    React.createElement(
                        _card2.default.Grid,
                        { onClick: function onClick() {
                                return goTo('/index.html#/ActivityInspect');
                            }, className: 'item' },
                        React.createElement(
                            'div',
                            null,
                            React.createElement('img', { src: '../../../../img/icon1.1/Pending_intervention.png' }),
                            React.createElement(
                                'p',
                                null,
                                '\u6D3B\u52A8\u7A3D\u67E5\u5F85\u7A3D\u67E5'
                            )
                        ),
                        React.createElement(
                            'span',
                            null,
                            campaign_inspect_num
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { style: { marginTop: 10 }, className: 'flex-row' },
                React.createElement(
                    _card2.default,
                    {
                        className: 'brand-box',
                        hoverable: true,
                        title: CardTitle("品牌商品库信息概览")
                    },
                    React.createElement(
                        _row2.default,
                        { type: 'flex', justify: 'space-between', align: 'middle' },
                        React.createElement(
                            _col2.default,
                            { onClick: function onClick() {
                                    return that.CarouselHome.current.prev();
                                }, className: 'but', span: 1 },
                            React.createElement(_icon2.default, { type: 'left' })
                        ),
                        React.createElement(
                            _col2.default,
                            { span: 22 },
                            React.createElement(
                                _carousel2.default,
                                { ref: that.CarouselHome, dots: false, effect: 'fade' },
                                that.carouselItem()
                            )
                        ),
                        React.createElement(
                            _col2.default,
                            { onClick: function onClick() {
                                    return that.CarouselHome.current.next();
                                }, className: 'but', span: 1 },
                            React.createElement(_icon2.default, { type: 'right' })
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { style: { marginTop: 10 }, className: 'flex-row' },
                React.createElement(
                    _card2.default,
                    {
                        className: 'dealer-box',
                        hoverable: true,
                        title: CardTitle("经销商所在大区分布概览")
                    },
                    React.createElement('div', { id: 'chart-dealers' })
                ),
                React.createElement(
                    _card2.default,
                    {
                        className: 'shop-box',
                        hoverable: true,
                        title: CardTitle("店铺所属平台占比")
                    },
                    React.createElement('div', { id: 'chart-shops' })
                )
            )
        )
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=202_b422c2b0011b99458ef6.js.map