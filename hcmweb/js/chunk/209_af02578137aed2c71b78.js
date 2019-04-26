(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[209],{

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

/***/ "./app/widget/index/Administrator/BrandList/main.js":
/*!**********************************************************!*\
  !*** ./app/widget/index/Administrator/BrandList/main.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _switch = __webpack_require__(/*! antd/es/switch */ "./node_modules/_antd@3.10.1@antd/es/switch/index.js");

var _switch2 = _interopRequireDefault(_switch);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = __webpack_require__(/*! antd/es/checkbox */ "./node_modules/_antd@3.10.1@antd/es/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/switch/style/css */ "./node_modules/_antd@3.10.1@antd/es/switch/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/checkbox/style/css */ "./node_modules/_antd@3.10.1@antd/es/checkbox/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Administrator/BrandList/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _crypto = __webpack_require__(/*! ../../../../js/common/crypto */ "./app/js/common/crypto.js");

var _crypto2 = _interopRequireDefault(_crypto);

var _lib = __webpack_require__(/*! ../../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { LoadingModal } from '../../../components/LoadingModal/LoadingModal';
var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.actionVisible = function (bl) {
            var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _this.setState({
                actionVisible: bl,
                targetData: item
            }, function () {
                // this.getComplaintsAccountListJd()
                if (bl && item.alid) {
                    _this.getOldaliList(item.alid);
                }
                if (bl && item.jdid) {
                    _this.getOldjdList(item.jdid);
                }
                _this.setState({
                    jdList: [],
                    aliList: [],
                    oldaliList: [],
                    oldjdList: []
                });
            });
        };

        _this.getVersionList = function () {
            _ajax2.default.get('/hcm/sys/GetList', {
                params: {
                    dictcode: 'version'
                }
            }).then(function (res) {
                _this.setState({
                    versionList: res.data.data
                });
            });
        };

        _this.onBindSubmit = function (values, resetFields) {
            values.bmcid = _this.state.targetData.bmcid;
            values.ALcomplaiontId = values.ALcomplaiontId.join(',');
            values.JDcomplaiontId = values.JDcomplaiontId.join(',');
            values.oldALcomplaiontId = _this.state.targetData.alid;
            values.oldJDcomplaiontId = _this.state.targetData.jdid;
            _this.actionVisible(false);
            _this.setState({
                login: true
            }, function () {
                _ajax2.default.post('/hcm/complaiont/saveBmcid', values).then(function (response) {
                    if (response.data.status == '10000') {
                        _this.getList();

                        resetFields();
                        _message3.default.success(response.data.message);
                        _this.setState({
                            login: false
                        });
                    } else {
                        _this.setState({
                            login: false
                        });
                        _message3.default.error(response.data.message);
                    }
                }).catch(function (error) {
                    _this.setState({
                        login: false
                    });
                    _message3.default.error(error.statusText);
                });
            });
        };

        _this.getComplaintsAccountListAli = function (value) {
            if (value == '') {
                _this.setState({
                    aliList: []
                });
                return;
            }
            _ajax2.default.get('/hcm/complaiont/getList', {
                params: {
                    platform: 'ALIBABA',
                    checkedids: _this.state.oldaliList.map(function (item, index) {
                        return item.id;
                    }).join(','),
                    keyword: value
                }
            }).then(function (response) {
                _this.setState({
                    aliList: response.data.data
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.getComplaintsAccountListJd = function (value) {
            if (value == '') {
                _this.setState({
                    jdList: []
                });
                return;
            }
            _ajax2.default.get('/hcm/complaiont/getList', {
                params: {
                    platform: 'JINGDONG',
                    checkedids: _this.state.oldjdList.map(function (item, index) {
                        return item.id;
                    }).join(','),
                    keyword: value
                }
            }).then(function (response) {
                _this.setState({
                    jdList: response.data.data
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.fetchUser = function (value, type) {
            if (type == 'aliList') {
                _this.getComplaintsAccountListAli(value);
            } else {
                _this.getComplaintsAccountListJd(value);
            }
        };

        _this.onSelectBlur = function (value, type) {
            _this.setState(_defineProperty({}, type, []));
        };

        _this.getOldaliList = function (checkedids) {
            _ajax2.default.get('/hcm/complaiont/getMapByCheckids', {
                params: {
                    platform: 'ALIBABA',
                    checkedids: checkedids
                }
            }).then(function (response) {
                _this.setState({
                    oldaliList: response.data.data || []
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.getOldjdList = function (checkedids) {
            _ajax2.default.get('/hcm/complaiont/getMapByCheckids', {
                params: {
                    platform: 'JINGDONG',
                    checkedids: checkedids
                }
            }).then(function (response) {
                _this.setState({
                    oldjdList: response.data.data || []
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.onSelect = function (e, option, type, oldtype) {
            var _this$setState2;

            var list = _this.state[type];
            var target = list.filter(function (item, index) {
                return item.id == e;
            });
            var oldList = _this.state[oldtype];
            oldList.push(target[0]);
            _this.setState((_this$setState2 = {}, _defineProperty(_this$setState2, oldtype, oldList), _defineProperty(_this$setState2, type, list.filter(function (item, index) {
                return item.id != e;
            })), _this$setState2));
        };

        _this.onDeselect = function (e, option, type, oldtype) {
            var _this$setState3;

            var oldList = _this.state[oldtype];
            var target = oldList.filter(function (item, index) {
                return item.id == e;
            });
            var list = _this.state[type];
            list.push(target[0]);
            _this.setState((_this$setState3 = {}, _defineProperty(_this$setState3, oldtype, oldList.filter(function (item, index) {
                return item.id != e;
            })), _defineProperty(_this$setState3, type, list), _this$setState3));
        };

        _this.getUserCustomer = function () {
            // /hcm/userin/getUserCustomer
            _ajax2.default.get('/hcm/userin/getUserCustomer', {
                params: {
                    status: 1
                }
            }).then(function (response) {
                console.log(response);
                _this.setState({
                    customerList: response.data.data
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.getRolePage = function () {

            _ajax2.default.get('/hcm/role/getRolePage', {
                params: {
                    pageNo: 1, pageSize: 999
                }
            }).then(function (res) {
                _this.setState({
                    rolePage: res.data.data.content
                });
            });
        };

        _this.chSearchIpt = function (e, type) {
            var state = _this.state;
            state[type] = e.target.value;
            _this.setState(state);
        };

        _this.handleClearIconClick = function (type) {
            var state = _this.state;
            state[type] = null;
            _this.setState(state);
        };

        _this.seSearchIpt = function (e, type) {
            var state = _this.state;
            state[type] = e;
            _this.setState(state);
        };

        _this.onSearch = function () {
            var bl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            _this.setState({
                pageNo: 1,
                version: bl ? null : _this.state.version,
                companyname: bl ? null : _this.state.companyname,
                username: bl ? null : _this.state.username,
                status: bl ? null : _this.state.status,
                kefu: bl ? null : _this.state.kefu,
                companyMemoname: bl ? null : _this.state.companyMemoname,
                oldSearch: {
                    version: bl ? null : _this.state.version,
                    companyname: bl ? null : _this.state.companyname,
                    username: bl ? null : _this.state.username,
                    status: bl ? null : _this.state.status,
                    kefu: bl ? null : _this.state.kefu,
                    companyMemoname: bl ? null : _this.state.companyMemoname
                }
            }, function () {
                _this.getList();
            });
        };

        _this.getList = function () {
            var _this$state = _this.state,
                version = _this$state.version,
                companyname = _this$state.companyname,
                username = _this$state.username,
                status = _this$state.status,
                companyMemoname = _this$state.companyMemoname,
                kefu = _this$state.kefu,
                pageNo = _this$state.pageNo,
                pageSize = _this$state.pageSize;

            _ajax2.default.get('/hcm/userout/getUserPage', {
                params: {
                    version: version,
                    companyname: companyname,
                    status: status,
                    kefu: kefu,
                    username: username,
                    companyMemoname: companyMemoname,
                    pageNo: pageNo,
                    pageSize: pageSize
                }

            }).then(function (response) {
                _this.setState({
                    dataList: response.data.data.content,
                    pageNo: response.data.data.pageNumber,
                    pageSize: response.data.data.pageSize,
                    totalNum: response.data.data.totalElements
                }, function () {
                    _this.allClick(true);
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.allClick = function (bl) {
            var columns = _this.state.columns;
            if (bl == true) {
                if (columns[0].key == 'checkStatue') {
                    columns.splice(0, 1);
                }
                _this.setState({
                    columns: columns
                });
                return;
            }
            if (columns[0].key == 'checkStatue') {
                columns.splice(0, 1);
            } else {
                columns.unshift({
                    title: '',
                    dataIndex: 'checkStatue',
                    key: 'checkStatue',
                    width: '4%',
                    render: function render(text, record, index) {
                        return React.createElement(_checkbox2.default, { checked: record.checkStatue, onChange: function onChange(e) {
                                return _this.onCheckbox(e, text, record, index);
                            } });
                    }
                });
            }
            _this.setState({
                columns: columns
            });
        };

        _this.checkAll = function (bl) {
            var dataList = _this.state.dataList;
            dataList.forEach(function (item, index) {
                item.checkStatue = bl;
            });
            _this.setState({
                dataList: dataList,
                checkAll: bl
            });
        };

        _this.changePagination = function (page, pageSize) {

            _this.setState({
                pageNo: page,
                pageSize: pageSize
            }, function () {
                _this.getList();
            });
        };

        _this.onPaginationSize = function (current, size) {
            _this.setState({
                pageNo: 1,
                pageSize: size
            }, function () {
                _this.getList();
            });
        };

        _this.fullSpinVisible = function (bl) {
            _this.setState({
                fullSpinVisible: bl
            });
        };

        _this.allStart = function () {
            var arr = [];
            var _this$state$oldSearch = _this.state.oldSearch,
                companyname = _this$state$oldSearch.companyname,
                username = _this$state$oldSearch.username,
                companyMemoname = _this$state$oldSearch.companyMemoname,
                status = _this$state$oldSearch.status,
                kefu = _this$state$oldSearch.kefu,
                version = _this$state$oldSearch.version;

            var dataList = _this.state.dataList.filter(function (item, index) {
                return item.checkStatue;
            });
            dataList.forEach(function (item, index) {
                arr.push(item.userid);
            });
            if (arr.length == 0) {
                _message3.default.error('至少选择一条');
                return;
            }
            _this.fullSpinVisible(true);
            _ajax2.default.post('/hcm/user/StartOrStop', {
                userIds: _this.state.checkAll ? 'checkAllBmc' : arr.join(','),
                status: 1,
                usertype: 'c',
                companyname: _this.state.checkAll ? companyname : '',
                username: _this.state.checkAll ? username : '',
                companyMemoname: _this.state.checkAll ? companyMemoname : '',
                status1: _this.state.checkAll ? status : '',
                kefu: _this.state.checkAll ? kefu : '',
                version: _this.state.checkAll ? version : ''

            }).then(function (response) {
                _this.fullSpinVisible(false);

                if (response.data.status == '10000') {
                    _this.onSearch(true);
                    _message3.default.success(response.data.message);
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _this.fullSpinVisible(false);
                _message3.default.error(error.statusText);
            });
        };

        _this.allStop = function () {
            var arr = [];
            var _this$state$oldSearch2 = _this.state.oldSearch,
                companyname = _this$state$oldSearch2.companyname,
                username = _this$state$oldSearch2.username,
                companyMemoname = _this$state$oldSearch2.companyMemoname,
                status = _this$state$oldSearch2.status,
                kefu = _this$state$oldSearch2.kefu,
                version = _this$state$oldSearch2.version;

            var dataList = _this.state.dataList.filter(function (item, index) {
                return item.checkStatue;
            });
            dataList.forEach(function (item, index) {
                arr.push(item.userid);
            });
            if (arr.length == 0) {
                _message3.default.error('至少选择一条');
                return;
            }
            _this.fullSpinVisible(true);
            _ajax2.default.post('/hcm/user/StartOrStop', {
                userIds: _this.state.checkAll ? 'checkAllBmc' : arr.join(','),
                status: 0,
                usertype: 'c',
                companyname: _this.state.checkAll ? companyname : '',
                username: _this.state.checkAll ? username : '',
                companyMemoname: _this.state.checkAll ? companyMemoname : '',
                status1: _this.state.checkAll ? status : '',
                kefu: _this.state.checkAll ? kefu : '',
                version: _this.state.checkAll ? version : ''
            }).then(function (response) {
                _this.fullSpinVisible(false);
                if (response.data.status == '10000') {
                    _this.onSearch(true);
                    _message3.default.success(response.data.message);
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _this.fullSpinVisible(false);
                _message3.default.error(error.statusText);
            });
        };

        _this.aAction = function (url, id, status) {
            _ajax2.default.post(url, {
                userIds: id,
                status: status,
                usertype: 'c'
            }).then(function (response) {
                _message3.default.success(response.data.message);
                if (response.data.status == '10000') {
                    _this.getList();
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();
            var add_edit = function add_edit(url, params) {

                _ajax2.default.post(url, params).then(function (response) {
                    LoadingModal({ bl: false });
                    _message3.default.success(response.data.message);
                    if (response.data.status == '10000') {
                        _this.stateModal(false, '', false);
                        _this.getList();
                    }
                }).catch(function (error) {
                    LoadingModal({ bl: false });
                    _message3.default.error(error.statusText);
                });
            };
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    var _this$state2 = _this.state,
                        targetModal = _this$state2.targetModal,
                        type = _this$state2.type;


                    targetModal.userid ? values.userId = targetModal.userid : values.userId = null;
                    targetModal.bid ? values.bid = targetModal.bid : values.bid = null;

                    values.validtime = moment(values.validtime).format('YYYY-MM-DD');

                    if (!_lib2.default.required(values.companyname)) {
                        _message3.default.error('请输入公司名称');
                        return;
                    }
                    if (!_lib2.default.legnthCheck(values.companyname, 'INPUT')) {
                        _message3.default.error('公司名称长度不允许超过50');
                        return;
                    }

                    if (type == '新增') {
                        if (!_lib2.default.checkAccount(values.username)) {
                            _message3.default.error('请按照要求用户名');
                            return;
                        }
                    }

                    if (!_lib2.default.checkPassword(values.password)) {
                        _message3.default.error('密码长度不符');
                        return;
                    }
                    if (!_lib2.default.required(values.kefuid) || values.kefuid && values.kefuid.length == 0) {
                        _message3.default.error('请选择服务客服');
                        return;
                    }
                    if (!_lib2.default.legnthCheck(values.memo, 'URL')) {
                        _message3.default.error('备注说明长度不允许超过500');
                        return;
                    }

                    LoadingModal({ bl: true, text: '保存中,请稍后...' });
                    values.companyname = _lib2.default.trim(values.companyname);
                    values.username = _lib2.default.trim(values.username);
                    values.password = _crypto2.default.Encrypt(_lib2.default.trim(values.password));
                    values.kefuid = values.kefuid.join(',');
                    if (type == '新增') {
                        values.userId = '';
                        values.bid = '';
                        add_edit('/hcm/userout/saveUserOut', values);
                    } else if (type == '编辑') {
                        add_edit('/hcm/userout/saveUserOut', values);
                    }
                }
            });
        };

        _this.stateModal = function (visible, type, data) {

            if (data === false) {
                data = {
                    username: null,
                    companyname: null,
                    roleIds: null,
                    versionid: null,
                    kefu: null,
                    Date: null,
                    password: '******',
                    memo: null
                };
            }
            data.password = '******';
            data.roleIds = data.roleid;
            _this.setState({
                visible: visible,
                type: type,
                targetModal: data
            });
        };

        _this.unBindphone = function (record) {
            _ajax2.default.get('/hcm/user/UnbindPhone', {
                params: {
                    mobiles: record.userid,
                    usertype: 'c'
                }
            }).then(function (response) {
                _message3.default.success(response.data.message);
                if (response.data.status == '10000') {
                    _this.getList();
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.allEditService = function () {
            var userIds = [];
            var bid = [];
            if (!_lib2.default.required(_this.state.oService) || _this.state.oService && _this.state.oService.length == 0) {
                _message3.default.error('请选择服务客服');
                return;
            }
            var _this$state$oldSearch3 = _this.state.oldSearch,
                companyname = _this$state$oldSearch3.companyname,
                username = _this$state$oldSearch3.username,
                companyMemoname = _this$state$oldSearch3.companyMemoname,
                status = _this$state$oldSearch3.status,
                kefu = _this$state$oldSearch3.kefu,
                version = _this$state$oldSearch3.version;

            var dataList = _this.state.dataList.filter(function (item, index) {
                return item.checkStatue;
            });
            dataList.forEach(function (item, index) {
                userIds.push(item.userid);
                bid.push(item.bid);
            });

            _ajax2.default.post('/hcm/cus/multil_update_kefu', {

                bmcids: _this.state.checkAll ? null : bid.join(','),
                userIds: _this.state.checkAll ? null : userIds.join(','),
                kefu: _this.state.oService.join(','),
                checkAll: _this.state.checkAll ? true : null,
                companyname: _this.state.checkAll ? companyname : '',
                username: _this.state.checkAll ? username : '',
                companyMemoname: _this.state.checkAll ? companyMemoname : '',
                status: _this.state.checkAll ? status : '',
                kefu1: _this.state.checkAll ? kefu : '',
                version: _this.state.checkAll ? version : ''

            }).then(function (response) {

                if (response.data.status == '10000') {
                    _message3.default.success(response.data.message);
                    _this.setState({
                        editService: false,
                        oService: []
                    }, function () {
                        _this.getList();
                    });
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.selectService = function (e) {
            _this.setState({
                oService: e
            });
        };

        _this.stateEditService = function (bl) {
            if (_this.state.dataList.filter(function (item, index) {
                return item.checkStatue;
            }).length == 0) {
                _message3.default.error('至少选择一条');
                return;
            }
            _this.setState({
                editService: bl,
                oService: []
            });
        };

        _this.state = {
            fetching: false,
            versionList: [],
            version: null,
            actionVisible: false,
            jdList: [],
            aliList: [],
            oldaliList: [],
            oldjdList: [],
            targetData: {},
            rolePage: [],
            login: false,
            fullSpinVisible: false,
            type: null,
            oService: [],
            dataList: [],
            editService: false,
            oldSearch: {
                companyname: null,
                username: null,
                companyMemoname: null,
                status: null,
                kefu: null
            },
            targetModal: {
                bid: null,
                username: null,
                roleIds: null,
                versionid: null,
                companyname: null,
                kefu: null,
                validtime: null,
                password: '******',
                memo: null,
                companyMemoname: null
            },
            customerList: [],
            companyname: null,
            status: null,
            username: null,
            companyMemoname: null,
            kefu: null,
            pageNo: 1,
            pageSize: 10,
            checkAll: false,
            totalNum: null,
            columns: [{
                title: '序号',
                dataIndex: 'index',
                key: 'index',
                width: '5%',
                render: function render(text, record, index) {
                    return index + 1;
                }
            }, {
                title: '客户名称',
                dataIndex: 'companyname',
                key: 'companyname',
                width: '10%',
                render: function render(text, record, index) {
                    return React.createElement(
                        'a',
                        { href: "./index.html#/DepartmentManagements/" + record.bmcid + "/" + record.companyname },
                        record.companyname
                    );
                }

            }, {
                title: '用户名',
                dataIndex: 'username',
                key: 'username',
                width: '10%'
            }, {
                title: '绑定手机',
                dataIndex: 'mobile',
                key: 'mobile',
                width: '10%',
                render: function render(text, item) {
                    return React.createElement(
                        'div',
                        null,
                        text && text.length ? text : '--',
                        text && text.length ? React.createElement(
                            'span',
                            { onClick: function onClick() {
                                    return _this.unBindphone(item);
                                }, className: 'unphone' },
                            React.createElement(_icon2.default, { type: 'link' }),
                            '\u89E3\u7ED1\u624B\u673A'
                        ) : null
                    );
                }
            }, {
                title: '服务客服',
                dataIndex: 'kefuname',
                key: 'kefuname',
                width: '10%'
            }, {
                title: '备注说明',
                dataIndex: 'memo',
                key: 'memo',
                width: '10%'
            }, {
                title: '备注名',
                dataIndex: 'companyMemoname',
                key: 'companyMemoname',
                width: '10%'
            }, {
                title: '账号有效期',
                dataIndex: 'validtime',
                key: 'validtime',
                width: '10%',
                render: function render(text) {
                    return text ? moment(text).format('YYYY-MM-DD') : null;
                }
            }, {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                width: '4%',
                render: function render(text, record, index) {

                    return React.createElement(_switch2.default, { checked: text == '1' ? true : false, onChange: function onChange() {
                            return _this.aAction('/hcm/user/StartOrStop', record.userid, text == '1' ? 0 : 1);
                        }, checkedChildren: '\u5F00', unCheckedChildren: '\u5173', defaultChecked: true });
                }
            }, {
                title: '操作',
                key: 'action',
                align: 'right',
                width: '10%',
                render: function render(text, record, index) {
                    return React.createElement(
                        'span',
                        { key: 'index' },
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this.stateModal(true, '编辑', record);
                                } },
                            React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_edit.png' }),
                            '\u7F16\u8F91'
                        ),
                        React.createElement(
                            'a',
                            { style: { marginLeft: 10 }, onClick: function onClick() {
                                    return _this.actionVisible(true, record);
                                } },
                            '\u7ED1\u5B9A'
                        )
                    );
                }
            }]
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
            this.getUserCustomer();
            this.getRolePage();
            this.getVersionList();
        }
    }, {
        key: 'onCheckbox',
        value: function onCheckbox(e, text, record, index) {
            // console.log(e,text, record, index);
            var dataList = this.state.dataList;
            if (dataList[index].checkStatue) {
                dataList[index].checkStatue = false;
            } else {
                dataList[index].checkStatue = true;
            }
            this.setState({
                dataList: dataList,
                checkAll: false
            });
        }
        //---------

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return App;
}(React.Component);

exports.default = _form2.default.create()(App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/switch/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/switch/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-switch */ "./node_modules/_rc-switch@1.8.0@rc-switch/es/index.js");
/* harmony import */ var rc_switch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rc_switch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! omit.js */ "./node_modules/_omit.js@1.0.0@omit.js/es/index.js");
/* harmony import */ var _util_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_util/wave */ "./node_modules/_antd@3.10.1@antd/es/_util/wave.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");














var Switch = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Switch, _React$Component);

    function Switch() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Switch);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));

        _this.saveSwitch = function (node) {
            _this.rcSwitch = node;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Switch, [{
        key: 'focus',
        value: function focus() {
            this.rcSwitch.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcSwitch.blur();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                loading = _props.loading,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className;

            var classes = classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-small', size === 'small'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-loading', loading), _classNames));
            var loadingIcon = loading ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_12__["default"], { type: 'loading', className: prefixCls + '-loading-icon' }) : null;
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _util_wave__WEBPACK_IMPORTED_MODULE_11__["default"],
                { insertExtraNode: true },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_switch__WEBPACK_IMPORTED_MODULE_8___default.a, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(omit_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this.props, ['loading']), { className: classes, ref: this.saveSwitch, loadingIcon: loadingIcon }))
            );
        }
    }]);

    return Switch;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Switch);

Switch.defaultProps = {
    prefixCls: 'ant-switch'
};
Switch.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
    // HACK: https://github.com/ant-design/ant-design/issues/5368
    // size=default and size=large are the same
    size: prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"](['small', 'default', 'large']),
    className: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]
};

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/switch/style/css.js":
/*!***************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/switch/style/css.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/switch/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/switch/style/index.css":
/*!******************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/switch/style/index.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/_rc-switch@1.8.0@rc-switch/es/Switch.js":
/*!**************************************************************!*\
  !*** ./node_modules/_rc-switch@1.8.0@rc-switch/es/Switch.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);









var classNames = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");

function noop() {}

var Switch = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Switch, _Component);

  function Switch(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Switch);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _initialiseProps.call(_this);

    var checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    _this.state = { checked: checked };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Switch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          autoFocus = _props.autoFocus,
          disabled = _props.disabled;

      if (autoFocus && !disabled) {
        this.focus();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: !!nextProps.checked
        });
      }
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      if (this.props.disabled) {
        return;
      }
      if (!('checked' in this.props)) {
        this.setState({
          checked: checked
        });
      }
      this.props.onChange(checked);
    }

    // Handle auto focus when click switch in Chrome

  }, {
    key: 'focus',
    value: function focus() {
      this.node.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.node.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          className = _props2.className,
          prefixCls = _props2.prefixCls,
          disabled = _props2.disabled,
          loadingIcon = _props2.loadingIcon,
          checkedChildren = _props2.checkedChildren,
          unCheckedChildren = _props2.unCheckedChildren,
          restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_props2, ['className', 'prefixCls', 'disabled', 'loadingIcon', 'checkedChildren', 'unCheckedChildren']);

      var checked = this.state.checked;
      var switchClassName = classNames((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, className, !!className), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-checked', checked), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-disabled', disabled), _classNames));
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'button',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, {
          type: 'button',
          role: 'switch',
          'aria-checked': checked,
          disabled: disabled,
          className: switchClassName,
          ref: this.saveNode,
          onKeyDown: this.handleKeyDown,
          onClick: this.toggle,
          onMouseUp: this.handleMouseUp
        }),
        loadingIcon,
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'span',
          { className: prefixCls + '-inner' },
          checked ? checkedChildren : unCheckedChildren
        )
      );
    }
  }]);

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.toggle = function () {
    var onClick = _this2.props.onClick;

    var checked = !_this2.state.checked;
    _this2.setChecked(checked);
    onClick(checked);
  };

  this.handleKeyDown = function (e) {
    if (e.keyCode === 37) {
      // Left
      _this2.setChecked(false);
    } else if (e.keyCode === 39) {
      // Right
      _this2.setChecked(true);
    }
  };

  this.handleMouseUp = function (e) {
    if (_this2.node) {
      _this2.node.blur();
    }
    if (_this2.props.onMouseUp) {
      _this2.props.onMouseUp(e);
    }
  };

  this.saveNode = function (node) {
    _this2.node = node;
  };
};

Switch.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  checkedChildren: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  unCheckedChildren: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onMouseUp: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  defaultChecked: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  loadingIcon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node
};

Switch.defaultProps = {
  prefixCls: 'rc-switch',
  checkedChildren: null,
  unCheckedChildren: null,
  className: '',
  defaultChecked: false,
  onChange: noop,
  onClick: noop
};

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./node_modules/_rc-switch@1.8.0@rc-switch/es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/_rc-switch@1.8.0@rc-switch/es/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./Switch */ "./node_modules/_rc-switch@1.8.0@rc-switch/es/Switch.js");

/***/ })

}]);
//# sourceMappingURL=209_af02578137aed2c71b78.js.map