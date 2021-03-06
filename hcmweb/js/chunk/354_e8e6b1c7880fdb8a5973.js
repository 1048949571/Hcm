(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[354],{

/***/ "./app/js/common/ajax.js":
/*!*******************************!*\
  !*** ./app/js/common/ajax.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(/*! axios */ "./node_modules/_axios@0.18.0@axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _qs = __webpack_require__(/*! qs */ "./node_modules/_qs@6.5.2@qs/lib/index.js");

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//https://blog.csdn.net/frank_come/article/details/80010611
_axios2.default.defaults.timeout = 600000;
// 自定义判断元素类型JS
function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
// 参数过滤函数
function filterNull(o) {
    for (var key in o) {

        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim();
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key]);
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key]);
        }
    }
    return o;
}

//整理数据
_axios2.default.defaults.transformRequest = function (data) {
    if (data) {
        data = filterNull(data);
    }
    if (data instanceof FormData) {
        return data;
    } else {
        data = _qs2.default.stringify(data);
        return data;
    }
};

// 路由请求拦截
// http request 拦截器
_axios2.default.interceptors.request.use(function (config) {
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    if (config.method == 'get') {
        config.params = filterNull(config.params);
    }
    return config;
}, function (error) {
    return Promise.reject(error.response);
});

// 路由响应拦截
// http response 拦截器
_axios2.default.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status == "503") {

        if (localStorage.logintype == 'ADMIN' || localStorage.logintype == 'KEFU') {
            window.location = "/user.html#/loginu";
            window.localStorage.clear();
            return;
        } else {
            window.location = "/user.html#/loginc";
            window.localStorage.clear();
            return;
        }
    } else {
        return Promise.reject(error.response); // 返回接口返回的错误信息
    }
});
exports.default = _axios2.default;

/***/ }),

/***/ "./app/js/common/crypto.js":
/*!*********************************!*\
  !*** ./app/js/common/crypto.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CryptoJS = __webpack_require__(/*! crypto-js */ "./node_modules/_crypto-js@3.1.9-1@crypto-js/index.js");
exports.default = {
    Encrypt: function Encrypt(word) {
        var key = CryptoJS.enc.Utf8.parse("hcmabcdefghijklm");
        var srcs = CryptoJS.enc.Utf8.parse(word);
        var encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        return encrypted.toString();
    },
    Decrypt: function Decrypt(word) {
        var key = CryptoJS.enc.Utf8.parse("hcmabcdefghijklm");
        var decrypt = CryptoJS.AES.decrypt(word, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }
};

/***/ }),

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

/***/ "./app/widget/user/registered/main.js":
/*!********************************************!*\
  !*** ./app/widget/user/registered/main.js ***!
  \********************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/user/registered/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _crypto = __webpack_require__(/*! ../../../js/common/crypto */ "./app/js/common/crypto.js");

var _crypto2 = _interopRequireDefault(_crypto);

var _lib = __webpack_require__(/*! ../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
        // document.title = '注册信息阅读';


        _this.BACKs = function () {
            // console.log(this.props.match.params.id)
            _this.setState({
                regstatus: true,
                paragraphName: ""
            });
            var _this$props$form = _this.props.form,
                resetFields = _this$props$form.resetFields,
                getFieldsValue = _this$props$form.getFieldsValue;
            //console.log(this.props)

            resetFields();
            // window.location="/user.html#/Registered/"+this.props.match.params.id
        };

        _this.onBlurx = function () {
            _this.props.form.validateFields(function (err, values) {
                //console.log(values)

                if (values.paragraph.length >= 15) {
                    _ajax2.default.post('/hcm/login/registerTaxNum', {
                        "taxNum": values.paragraph
                    }).then(function (res) {
                        if (res.data.status == 10150) {

                            _message3.default.error(res.data.message);
                        } else {
                            if (res.data.data != "查询无结果") {
                                _this.setState({
                                    paragraphName: res.data.data
                                });
                            } else {
                                _this.setState({
                                    paragraphName: ""
                                });
                                _message3.default.error(res.data.data);
                            }
                        }
                    });
                } else {
                    _message3.default.error('请输入正确税号');
                }
            });
        };

        _this.regStatus = function (bl) {
            _this.setState({
                regstatus: bl
            });
        };

        _this.SUBDl = function () {
            _this.props.form.validateFields(function (err, values) {
                console.log(values);
                if (values.pwd == undefined && values.pwds == undefined && values.yzms == undefined && values.pones == undefined) {
                    if (values.pwd != values.pwds) {
                        _message3.default.error('两次密码不一致');
                    }
                    _message3.default.error('请输入密码/验证码');
                }
            });
        };

        _this.trim = function (s) {
            s = '' + s;
            return s.replace(/(^\s*)|(\s*$)/g, "");
        };

        _this.Reg = function () {
            var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var patt = /^[^\u4e00-\u9fa5]{5,31}$/;
            return patt.test(_this.trim(str ? str : ''));
        };

        _this.ForgetSubmit = function (e) {
            //提交用户名
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {

                console.log(values);
                if (!err) {
                    console.log(values);
                    if (values.SucceBTN == "提交信息") {
                        if (_this.state.currents == 0) {
                            if (values.name == "" || values.name == undefined) {
                                _message3.default.error("请输入公司名称");
                            } else {
                                if (values.paragraph == undefined || values.paragraph == "") {
                                    _message3.default.error("请获取正确的公司税号");
                                } else {
                                    if (values.region == undefined || values.region == "") {
                                        _message3.default.error("请选择地区");
                                        // if (values.TakeOve == undefined || values.TakeOve == "") {
                                        //     message.error("请输入对接人")

                                        // } else {
                                        //     if (values.ContactInformation == undefined || values.ContactInformation == "") {

                                        //         message.error("请输入联系方式")
                                        //     } else {
                                        //         if (this.Reg(values.ContactInformation) == true) {
                                        //                 ajax.post('/hcm/login/dealerRegister', {
                                        //                     invitecode: this.state.invitecode,//邀请码
                                        //                     dealername: values.name,//公司名称
                                        //                     dutynumber: values.paragraph,//公司税号
                                        //                     province: [],//省份
                                        //                     city: [],//城市
                                        //                     strict: [],//区
                                        //                     address: values.Details,//详细地址
                                        //                     contact: values.ContactInformation,//联系方式
                                        //                     takePeople: values.TakeOve,//对接人
                                        //                 })
                                        //                     .then((res) => {
                                        //                         // console.log(res, "olo")
                                        //                         if (res.data.status == 10000) {
                                        //                             const currents = this.state.currents + 1;
                                        //                             this.setState({
                                        //                                 currents,
                                        //                                 bmcid: res.data.data.bmcid,//品牌商id，
                                        //                                 dealerid: res.data.data.dealerid//经销商id
                                        //                             })
                                        //                         } else {
                                        //                             message.error(res.data.message)
                                        //                         }

                                        //                     })

                                        //         } else {
                                        //             message.error("请输入正确联系方式")
                                        //         }

                                        //     }
                                        // }
                                    } else {
                                        // if (values.Details == undefined || values.Details == "") {
                                        //   message.error("请输入详情地址")

                                        // } else {
                                        if (values.TakeOve == undefined || values.TakeOve == "") {
                                            _message3.default.error("请输入对接人");
                                        } else {
                                            if (values.ContactInformation == undefined || values.ContactInformation == "") {

                                                _message3.default.error("请输入联系方式");
                                            } else {
                                                if (_this.Reg(values.ContactInformation) == true) {
                                                    console.log(_this.Reg(values.ContactInformation));
                                                    if (values.region[2] != undefined && values.region[2] != "") {
                                                        _ajax2.default.post('/hcm/login/dealerRegister', {
                                                            invitecode: _this.state.invitecode, //邀请码
                                                            dealername: values.name, //公司名称
                                                            dutynumber: values.paragraph, //公司税号
                                                            province: values.region[0], //省份
                                                            city: values.region[1], //城市
                                                            strict: values.region[2], //区
                                                            address: values.Details, //详细地址
                                                            contact: values.ContactInformation, //联系方式
                                                            takePeople: values.TakeOve //对接人
                                                        }).then(function (res) {
                                                            // console.log(res, "olo")
                                                            if (res.data.status == 10000) {
                                                                var currents = _this.state.currents + 1;
                                                                _this.setState({
                                                                    currents: currents,
                                                                    bmcid: res.data.data.bmcid, //品牌商id，
                                                                    dealerid: res.data.data.dealerid //经销商id
                                                                });
                                                            } else {
                                                                _message3.default.error(res.data.message);
                                                            }
                                                        });
                                                    } else {
                                                        _ajax2.default.post('/hcm/login/dealerRegister', {
                                                            invitecode: _this.state.invitecode, //邀请码
                                                            dealername: values.name, //公司名称
                                                            dutynumber: values.paragraph, //公司税号
                                                            province: values.region[0], //省份
                                                            city: values.region[1], //城市
                                                            strict: "", //区
                                                            address: values.Details, //详细地址
                                                            contact: values.ContactInformation, //联系方式
                                                            takePeople: values.TakeOve //对接人
                                                        }).then(function (res) {
                                                            // console.log(res, "olo")
                                                            if (res.data.status == 10000) {
                                                                var currents = _this.state.currents + 1;
                                                                _this.setState({
                                                                    currents: currents,
                                                                    bmcid: res.data.data.bmcid, //品牌商id，
                                                                    dealerid: res.data.data.dealerid //经销商id
                                                                });
                                                            } else {
                                                                _message3.default.error(res.data.message);
                                                            }
                                                        });
                                                    }
                                                } else {
                                                    _message3.default.error("请输入正确联系方式");
                                                }
                                            }
                                        }
                                        //  }
                                    }
                                }
                            }
                        } else if (_this.state.currents == 1) {
                            if (values.pones != undefined) {
                                if (values.pwd != undefined && values.pwd != "" && values.yzms != undefined && values.yzms != "") {
                                    _this.setState({
                                        forgetxs: false
                                    });
                                    // console.log(this.state.bmcid,this.state.dealerid)
                                    if (values.pwd == values.pwds) {
                                        if (_this.Trim(values.pwd).length >= 6) {
                                            if (_this.Trim(values.pwd).length <= 16) {

                                                _ajax2.default.post('/hcm/login/validateSMS', {
                                                    mobile: values.pones, //手机号
                                                    code: values.yzms //验证码
                                                }).then(function (res) {
                                                    console.log(res, "olo");
                                                    if (res.data == true && res.status == 200) {
                                                        _ajax2.default.post('/hcm/login/registerUserout', {
                                                            mobile: values.pones, //手机号
                                                            //smscode: values.yzms,//验证码
                                                            password: _crypto2.default.Encrypt(values.pwd), // 密码
                                                            dealerid: _this.state.dealerid, //经销商id
                                                            bmcid: _this.state.bmcid
                                                        }).then(function (res) {
                                                            console.log(res, "olo");
                                                            if (res.data.status == 10000) {
                                                                var currents = _this.state.currents + 1;
                                                                _this.setState({
                                                                    currents: currents,
                                                                    forgetxs: false
                                                                });
                                                            } else {
                                                                _message3.default.error(res.data.message);
                                                            }
                                                        });
                                                    } else {
                                                        _message3.default.error(res.data.message);
                                                    }
                                                });
                                            } else {
                                                _message3.default.error("密码最多只能16位！");
                                            }
                                        } else {
                                            _message3.default.error("密码最少需要6位！");
                                        }
                                    } else {
                                        _message3.default.error("两次密码不一致！");
                                    }
                                } else {
                                    _message3.default.error("请输入密码/验证码");
                                }
                            }
                        }
                    }
                }
            });
        };

        _this.Trim = function (str) {

            return str.replace(/(^\s*)|(\s*$)/g, "");
        };

        _this.getAuthCode = function () {
            _this.setState({
                forgetxs: false
            });
            console.log(_this.state.forgetxs);
            var _this$state = _this.state,
                value = _this$state.value,
                lock = _this$state.lock,
                yzm = _this$state.yzm,
                yzmpwd = _this$state.yzmpwd;


            _this.props.form.validateFields(function (err, values) {
                if (!lock == true && yzmpwd == "") {
                    // this.setState({
                    //     forgetxs:false
                    // })
                    if (values.pones != undefined) {

                        if (yzm == "获取验证码") {

                            if (_this.state.seconds == 59) {

                                _ajax2.default.post('/hcm/login/sendSMS', {
                                    "mobile": values.pones,
                                    "codeType": "HCM_BIND",
                                    "usertype": "c"
                                }).then(function (res) {
                                    //console.log(res)
                                    if (res.data.status == 10000) {
                                        var siv = setInterval(function () {
                                            _this.setState(_defineProperty({
                                                yzm: _this.state.seconds-- + 's\u540E\u91CD\u65B0\u53D1\u9001',
                                                shows: false,
                                                forgetxs: false
                                            }, 'shows', false), function () {
                                                if (_this.state.seconds == 1) {
                                                    clearInterval(siv);
                                                    _this.setState({
                                                        yzm: "获取验证码",
                                                        shows: true,
                                                        seconds: 59
                                                    });
                                                }
                                            });
                                        }, 1000);
                                    } else if (res.data.status == 400) {
                                        _message3.default.error(res.data.message);
                                    }
                                });
                            } else {
                                _ajax2.default.post('/hcm/login/sendSMS', {
                                    "mobile": values.pones,
                                    "codeType": "HCM_BIND",
                                    "usertype": "c"
                                }).then(function (res) {
                                    console.log(res);
                                    if (res.data.status == 10000) {
                                        var siv = setInterval(function () {
                                            _this.setState(_defineProperty({
                                                yzm: _this.state.seconds-- + 's\u540E\u91CD\u65B0\u53D1\u9001',
                                                shows: false,
                                                forgetxs: false
                                            }, 'shows', false), function () {
                                                if (_this.state.seconds == 1) {
                                                    clearInterval(siv);
                                                    _this.setState({
                                                        yzm: "获取验证码",
                                                        shows: true,
                                                        seconds: 59
                                                    });
                                                }
                                            });
                                        }, 1000);
                                    } else if (res.data.status == 400) {
                                        _message3.default.error(res.data.message);
                                    }
                                });
                            }
                        }
                    } else {
                        _message3.default.error("请输入手机号");
                    }
                }
            });
        };

        _this.onBlur = function () {
            _this.props.form.validateFields(function (err, values) {
                // console.log(values)
                var number = new RegExp("^[0-9]*$");
                var regEn = new RegExp("^[~!@#$%^&*()_+<>?:{},.\/;'[\]]*$");
                if (values.pwd != undefined && values.pwd.length >= 6) {
                    console.log(1);
                    if (number.test(values.pwd) || new RegExp("^\w*$").test(values.pwd) || regEn.test(values.pwd)) {
                        _this.setState({
                            AqPercentSum: 30,
                            forgetmmClock: "red",
                            AqPercentx: "弱"
                        });
                    } else if (number.test(values.pwd) && regEn.test(values.pwd)) {
                        _this.setState({
                            AqPercentSum: 60,
                            forgetmmClock: "yellow",
                            AqPercentx: "中"
                        });
                    } else {
                        _this.setState({
                            AqPercentSum: 100,
                            forgetmmClock: "green",
                            AqPercentx: "强"
                        });
                    }
                } else {}
            });
        };

        _this.next = function () {
            var current = _this.state.currents + 1;
            _this.setState({ currents: current });
        };

        _this.prev = function () {
            var _this$props$form2 = _this.props.form,
                resetFields = _this$props$form2.resetFields,
                getFieldsValue = _this$props$form2.getFieldsValue;
            //console.log(this.props)

            resetFields();

            var current = _this.state.currents - 1;
            _this.setState({ currents: current, paragraphName: "" });
            console.log(current);
        };

        _this.Gdl = function () {
            window.location = "/user.html#/loginc";
        };

        _this.state = {
            company: '',
            regstatus: true,
            currents: 0,
            yzm: "获取验证码",
            yzmpwd: "",
            forgetxs: false, //输入错误提示
            shows: true,
            AqPercent: false, //密码强度,
            AqPercentx: "弱",
            AqPercentSum: 0,
            forgetmmClock: "red",
            paragraphName: "",
            seconds: 59, //倒计时,
            invitecode: "", //邀请码
            bmcid: "", //品牌商id，
            dealerid: "" //经销商id
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            //console.log(this.props.match.params.id)
            _ajax2.default.post('/hcm/login/getBmainCustomerByInvitecode', {
                invitecode: this.props.match.params.id
            }).then(function (res) {
                //console.log(res)
                if (res.data.status == 10000) {
                    if (res.data.data != null) {
                        _this2.setState({
                            company: res.data.data.companyname,
                            invitecode: _this2.props.match.params.id
                        });
                    } else {
                        _message3.default.error('邀请码无效');
                    }
                } else {
                    _message3.default.error('请求失败');
                }
            });
        }
    }, {
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
//# sourceMappingURL=354_e8e6b1c7880fdb8a5973.js.map