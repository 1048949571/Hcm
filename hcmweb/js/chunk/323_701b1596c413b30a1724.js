(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[323],{

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

/***/ "./app/widget/components/ImgModal/ImgModal.js":
/*!****************************************************!*\
  !*** ./app/widget/components/ImgModal/ImgModal.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, ReactDom) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImgModal = undefined;

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! ./ImgModal.less */ "./app/widget/components/ImgModal/ImgModal.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 图片弹层
// ImgModal({bl:true,urls:urls,index:index,close:true})
// bl:true||false  展示隐藏  默认false 
// urls:arr 图片集合
// index： 默认展示数组中的第几张图片 默认值0
// close: 是否展示关闭按钮


var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            index: _this.props.index,
            rotate: 0,
            size: 1
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'onSwitch',
        value: function onSwitch(bl) {
            var _state = this.state,
                index = _state.index,
                rotate = _state.rotate,
                size = _state.size;
            var urls = this.props.urls;

            if (bl) {
                if (index == urls.length - 1) {
                    index = 0;
                } else {
                    index++;
                }
            } else {
                if (index <= 0) {
                    index = urls.length - 1;
                } else {
                    index--;
                }
            }
            this.setState({
                index: index,
                rotate: 0,
                size: 1
            });
        }
    }, {
        key: 'onSize',
        value: function onSize(bl) {
            var size = this.state.size;

            if (bl) {
                size += 0.5;
            } else {
                size = size <= 0.5 ? 0.5 : size - 0.5;
            }
            this.setState({
                size: size
            });
        }
    }, {
        key: 'onRotate',
        value: function onRotate(bl) {
            var rotate = this.state.rotate;

            if (bl) {
                rotate += 90;
            } else {
                rotate -= 90;
            }
            this.setState({
                rotate: rotate
            });
        }
    }, {
        key: 'colse',
        value: function colse() {
            ReactDom.unmountComponentAtNode(document.getElementById('ImgModal'));
            document.getElementsByTagName("body")[0].removeChild(document.getElementById('ImgModal'));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                _props$urls = _props.urls,
                urls = _props$urls === undefined ? [] : _props$urls,
                _props$close = _props.close,
                close = _props$close === undefined ? false : _props$close;
            var _state2 = this.state,
                _state2$index = _state2.index,
                index = _state2$index === undefined ? 0 : _state2$index,
                rotate = _state2.rotate,
                size = _state2.size;

            var oImg = document.createElement('img');
            oImg.src = urls[index];
            var naturalWidth = oImg.naturalWidth ? oImg.naturalWidth : 400;
            var naturalHeight = oImg.naturalHeight ? oImg.naturalHeight : 400;
            console.log(naturalWidth);
            return React.createElement(
                'div',
                { className: 'flexbox' },
                React.createElement(
                    'div',
                    { className: 'imgbox' },
                    close ? React.createElement(_icon2.default, { className: 'close', onClick: function onClick() {
                            return _this2.colse();
                        }, type: 'close-circle' }) : null,
                    React.createElement(
                        'div',
                        { className: 'box' },
                        React.createElement('img', { style: { width: size * (naturalWidth > 500 ? naturalWidth * 0.7 : naturalWidth) + 'px', transform: 'rotate(' + rotate + 'deg)' },
                            src: urls[index]
                        })
                    ),
                    React.createElement(
                        'div',
                        { className: 'buts' },
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onSwitch(false);
                            }, type: 'left' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onSwitch(true);
                            }, type: 'right' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onSize(true);
                            }, type: 'plus' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onSize(false);
                            }, type: 'minus' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onRotate(false);
                            }, className: 'left', type: 'reload' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onRotate(true);
                            }, className: 'right', type: 'reload' })
                    ),
                    React.createElement(
                        'div',
                        { style: { textAlign: 'center', fontSize: '12px' } },
                        React.createElement(
                            'a',
                            { target: '_blank', href: urls[index] },
                            '\u67E5\u770B\u539F\u56FE'
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

var ImgModal = exports.ImgModal = function ImgModal(page) {
    var _page$bl = page.bl,
        bl = _page$bl === undefined ? false : _page$bl,
        urls = page.urls;

    var div = document.createElement('div');
    div.setAttribute("id", "ImgModal");
    if (bl) {
        document.body.appendChild(div);
        ReactDom.render(React.createElement(App, page), document.getElementById('ImgModal'));
    } else {
        ReactDom.unmountComponentAtNode(document.getElementById('ImgModal'));
        document.getElementsByTagName("body")[0].removeChild(document.getElementById('ImgModal'));
    }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! react-dom */ "./node_modules/_react-dom@16.5.2@react-dom/index.js")))

/***/ }),

/***/ "./app/widget/components/ImgModal/ImgModal.less":
/*!******************************************************!*\
  !*** ./app/widget/components/ImgModal/ImgModal.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Service/ActivityInspectDetail/main.js":
/*!****************************************************************!*\
  !*** ./app/widget/index/Service/ActivityInspectDetail/main.js ***!
  \****************************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Service/ActivityInspectDetail/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _ImgModal = __webpack_require__(/*! ../../../components/ImgModal/ImgModal */ "./app/widget/components/ImgModal/ImgModal.js");

var _lib = __webpack_require__(/*! ../../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { LoadingModal } from '../../../components/LoadingModal/LoadingModal'


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.getCounts = function (start_time) {
      var bmcid = _this.state.bmcid;

      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/InspectStaCount',
        data: {
          start_time: start_time,
          bmcid: bmcid
        }
      }).then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          _this.setState({
            counts: data
          });
        }
      }).catch();
    };

    _this.getInspectDetail = function (params) {
      var _this$state = _this.state,
          bmcid = _this$state.bmcid,
          pagination = _this$state.pagination;

      LoadingModal({ bl: true });
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/InspectDetail',
        data: {
          bmcid: bmcid,
          type: params.type,
          pageNum: pagination.pageNum,
          pageSize: pagination.pageSize,
          start_time: params.date
        }
      }).then(function (res) {
        LoadingModal({ bl: false });
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;

        if (status === '10000') {
          _this.setState({
            details: data.length !== 0 ? data.map(function (v) {
              v.screenshot_b = !!v.screenshot_b ? v.screenshot_b : "[]";
              v.screenshot_c = !!v.screenshot_c ? v.screenshot_c : "[]";
              v.screenshot_o = !!v.screenshot_o ? v.screenshot_o : "[]";
              return Object.assign({}, v, { _isShowInspectForm: false });
            }) : []
          });
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.handleImgShotClick = function (params) {
      (0, _ImgModal.ImgModal)(params);
    };

    _this.handleInputReview = function (_index, e) {
      _this.setState({
        sysInspectInfo: Object.assign({}, _this.state.sysInspectInfo, _defineProperty({}, _index, Object.assign({}, _this.state.sysInspectInfo[_index], {
          system_review_explain: e.target.value
        })))
      });
    };

    _this.handleUploadChange = function (key, index, _index, params) {
      var details = _this.state.details;

      var copyDetail = details.slice();
      var arr = JSON.parse(copyDetail[_index][key]);

      if (params.file.status === 'done') {
        var _params$file$response = params.file.response,
            data = _params$file$response.data,
            message = _params$file$response.message,
            status = _params$file$response.status;

        arr[index] = data.data;
        copyDetail[_index][key] = JSON.stringify(arr);
        if (status === '10000') {
          _message3.default.success(data.msg);
          _this.setState({
            details: copyDetail
          });
        }
      }
    };

    _this.inspectOptionResultClick = function (value, _index) {
      var inspectResultBtn = _this.state.inspectResultBtn;

      var list = inspectResultBtn.slice();
      list[_index] = value === '合格' ? 0 : 1;
      _this.setState({
        inspectResultBtn: list,
        sysInspectInfo: Object.assign({}, _this.state.sysInspectInfo, _defineProperty({}, _index, Object.assign({}, _this.state.sysInspectInfo[_index], {
          system_review: value
        })))
      });
    };

    _this.handleBeforeUpload = function (file, fileList) {
      // console.log(file)
      // const isImage = !!file.type ? file.type.split('/')[0] === 'image' : false
      var type = !!file.type ? file.type.split('/')[1] : '';
      var isJPGORPNG = type === 'jpg' || type === 'png' || type === 'jpeg';
      var isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        _message3.default.error('图片必须小于 10MB!');
      }
      if (!isJPGORPNG) {
        _message3.default.error('只能上传JPG或者PNG格式的图片！');
      }
      return isJPGORPNG && isLt10M;
    };

    _this.handleTimeChange = function (date, dateString) {
      // console.log(date, dateString)
      _this.setState({
        currentDate: (0, _moment2.default)(date).format("YYYY-MM-DD HH:mm:ss")
      });
      _this.getCounts((0, _moment2.default)(date).format("YYYY-MM-DD HH:mm:ss"));
      _this.getInspectDetail({
        type: _this.state.currentTabIndex,
        date: (0, _moment2.default)(date).format("YYYY-MM-DD HH:mm:ss")
      });
    };

    _this.handleTabChange = function (activeKey) {
      _this.setState({
        currentTabIndex: activeKey
      });
      _this.getInspectDetail({
        type: activeKey,
        date: _this.state.currentDate
      });
    };

    _this.handleConfirmBtnClick = function (params, _index) {
      var _this$state2 = _this.state,
          sysInspectInfo = _this$state2.sysInspectInfo,
          details = _this$state2.details,
          currentDate = _this$state2.currentDate;

      var list = details.slice();
      var _list$_index = list[_index],
          screenshot_b = _list$_index.screenshot_b,
          screenshot_c = _list$_index.screenshot_c,
          screenshot_o = _list$_index.screenshot_o;
      // 有效性验证

      if (JSON.parse(screenshot_b).length !== 1) {
        _message3.default.warning('请上传标价截图！');
        return;
      }
      if (JSON.parse(screenshot_c).length !== 1) {
        _message3.default.warning('请上传成交价截图！');
        return;
      }
      if (Object.keys(sysInspectInfo).length === 0 || !sysInspectInfo[_index] || Object.keys(sysInspectInfo[_index]).length === 0 || !sysInspectInfo[_index].system_review) {
        _message3.default.warning('请选择稽查结果！');
        return;
      }
      var _sysInspectInfo$_inde = sysInspectInfo[_index],
          _sysInspectInfo$_inde2 = _sysInspectInfo$_inde.system_review,
          system_review = _sysInspectInfo$_inde2 === undefined ? '' : _sysInspectInfo$_inde2,
          _sysInspectInfo$_inde3 = _sysInspectInfo$_inde.system_review_explain,
          system_review_explain = _sysInspectInfo$_inde3 === undefined ? '' : _sysInspectInfo$_inde3;

      console.log(system_review_explain, system_review_explain.length);
      if (system_review_explain && !_lib2.default.legnthCheck(system_review_explain, 'TEXTAREA')) {
        _message3.default.warning('\u8BF7\u9650\u5236\u7ED3\u679C\u8BF4\u660E\u5728' + _lib2.default.LENGTH.TEXTAREA + '\u5B57\u7B26\u5185\uFF01');
        return;
      }
      var data = _extends({}, params, sysInspectInfo[_index], {
        screenshot_b: screenshot_b,
        screenshot_c: screenshot_c,
        screenshot_o: screenshot_o,
        type: 'sys',
        createtime: currentDate
        // console.log(data)
        // return
      });LoadingModal({ bl: true });
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/InspectCamPro',
        data: data
      }).then(function (res) {
        LoadingModal({ bl: false });
        var _res$data3 = res.data,
            data = _res$data3.data,
            status = _res$data3.status,
            message = _res$data3.message;

        if (status === '10000') {
          _message3.default.success(message);
          _this.getCounts(_this.state.currentDate);
          _this.getInspectDetail({
            type: 1,
            date: _this.state.currentDate
          });
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.handleInspectBtnClick = function (flag, index) {
      var _this$state3 = _this.state,
          details = _this$state3.details,
          inspectResultBtn = _this$state3.inspectResultBtn,
          sysInspectInfo = _this$state3.sysInspectInfo;

      var list = details.slice();
      list[index]._isShowInspectForm = flag;
      if (!flag) {
        // 点击取消按钮，清除数据
        var copyInspectResultBtn = inspectResultBtn.slice();
        copyInspectResultBtn[index] = null;
        var copyObj = Object.assign({}, sysInspectInfo, _defineProperty({}, index, {}));
        var copyList = details.slice();
        copyList[index].screenshot_b = "[]";
        copyList[index].screenshot_c = "[]";
        copyList[index].screenshot_o = "[]";
        _this.setState({
          inspectResultBtn: copyInspectResultBtn,
          sysInspectInfo: copyObj,
          details: copyList
        });
      }
      _this.setState({
        details: list
      });
    };

    _this.state = {
      bmcid: props.match.params.id,
      pagination: {
        pageNum: 1,
        pageSize: 10
      },
      date: '',
      counts: {},
      details: [],
      sysInspectInfo: {},
      inspectResultBtn: [],
      currentTabIndex: 1,
      currentDate: (0, _moment2.default)().format('YYYY-MM-DD HH:mm:ss')
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var currentDate = this.state.currentDate;

      this.getCounts(currentDate);
      this.getInspectDetail({
        type: 1,
        date: currentDate
      });
    }
    // 获取数量

    // 获取详情

    // index:表示上传的需号
    // _index: 表示外层循环的序号

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
//# sourceMappingURL=323_701b1596c413b30a1724.js.map