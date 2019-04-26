(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[227],{

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

/***/ "./app/widget/index/Announcements/AddAnnouncement.js":
/*!***********************************************************!*\
  !*** ./app/widget/index/Announcements/AddAnnouncement.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _upload = __webpack_require__(/*! antd/es/upload */ "./node_modules/_antd@3.10.1@antd/es/upload/index.js");

var _upload2 = _interopRequireDefault(_upload);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _radio = __webpack_require__(/*! antd/es/radio */ "./node_modules/_antd@3.10.1@antd/es/radio/index.js");

var _radio2 = _interopRequireDefault(_radio);

var _treeSelect = __webpack_require__(/*! antd/es/tree-select */ "./node_modules/_antd@3.10.1@antd/es/tree-select/index.js");

var _treeSelect2 = _interopRequireDefault(_treeSelect);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/upload/style/css */ "./node_modules/_antd@3.10.1@antd/es/upload/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/radio/style/css */ "./node_modules/_antd@3.10.1@antd/es/radio/style/css.js");

__webpack_require__(/*! antd/es/tree-select/style/css */ "./node_modules/_antd@3.10.1@antd/es/tree-select/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _lib = __webpack_require__(/*! ../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

var _Copyright = __webpack_require__(/*! ../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _braftEditor = __webpack_require__(/*! braft-editor */ "./node_modules/_braft-editor@1.9.8@braft-editor/dist/braft.js");

var _braftEditor2 = _interopRequireDefault(_braftEditor);

__webpack_require__(/*! braft-editor/dist/braft.css */ "./node_modules/_braft-editor@1.9.8@braft-editor/dist/braft.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {LoadingModal} from '../../components/LoadingModal/LoadingModal';
var Option = _select2.default.Option;
var SHOW_ALL = _treeSelect2.default.SHOW_ALL;
var RadioGroup = _radio2.default.Group;
// 引入编辑器以及编辑器样式

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.handleChange = function (content) {
            _this.setState({
                notice_content: content
            });
        };

        _this.getCategoryList = function () {
            var categoryList = _this.state.categoryList;

            _ajax2.default.get('/hcm/ProductClassify/list').then(function (res) {
                console.log(res);
                if (res.data.status == '10000' && res.data.data) {
                    var data = res.data.data;
                    _this.setState({
                        categoryList: data
                    });
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.categoryListChange = function (value) {
            console.log('selected ' + value);
            _this.setState({ categoryListID: value });
        };

        _this.getDepartmentList = function () {
            _ajax2.default.get('/hcm/department/fuByIds', {
                params: {
                    id: 0
                }
            }).then(function (response) {
                // console.log(response)
                if (response.data.status == '10000' && response.data.data) {
                    var _format = function _format(data) {
                        return data.map(function (item, index) {
                            if (item.subSysDepartment != null) {
                                return {
                                    title: item.departName,
                                    value: '' + item.id,
                                    key: '' + item.id,
                                    children: _format(item.subSysDepartment)
                                };
                            } else {
                                return {
                                    title: item.departName,
                                    value: '' + item.id,
                                    key: '' + item.id
                                };
                            }
                        });
                    };

                    var data = response.data.data;
                    var departmentList = _this.state.departmentList;

                    departmentList = [{
                        title: '全部',
                        value: 'all',
                        key: 'all',
                        children: _format(data)
                    }];

                    _this.setState({
                        departmentList: departmentList
                    });
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.chTreeSelect = function (value, label, extra, type) {
            var state = _this.state;
            if (type == 'receive_departids') {
                if (extra.triggerValue === 'all') {
                    state[type] = extra.checked ? _this.checkAll() : [];
                } else {

                    var checkAll = value.filter(function (item, index) {
                        return item.value == 'all';
                    });
                    if (value.length == _this.checkAll().length - 1 && checkAll.length == 0) {
                        state[type] = _this.checkAll();
                    } else {
                        if (checkAll.length) {
                            value.splice(0, 1);
                        }
                        state[type] = value;
                    }
                }
            } else {
                state[type] = value;
            }
            _this.setState(state);
        };

        _this.onSubmit = function () {
            var _this$state = _this.state,
                releasetypevalue = _this$state.releasetypevalue,
                categoryListID = _this$state.categoryListID,
                notice_title = _this$state.notice_title,
                receive_departids = _this$state.receive_departids,
                notice_type = _this$state.notice_type,
                notice_content = _this$state.notice_content,
                fileList = _this$state.fileList;

            console.log(categoryListID);
            console.log(categoryListID);
            if (!notice_title || notice_title.length == 0) {
                _message3.default.error('请输入公告主题');
                return;
            }
            if (!_lib2.default.legnthCheck(notice_title.trim(), 'INPUT')) {
                _message3.default.error('公告主题字符长度不能超过50');
                return;
            }
            if (!notice_type) {
                _message3.default.error('请选择类型');
                return;
            }
            if (categoryListID.length == 0 && receive_departids.length == 0) {
                _message3.default.error('请选择接收部门或品类');
                return;
            }
            var oDiv = document.createElement('div');
            oDiv.innerHTML = notice_content;
            if (notice_content == null || oDiv.innerText.length == 0) {
                _message3.default.error('请输入内容');
                return;
            }
            LoadingModal({ bl: true, text: '提交中,请稍后...' });
            if (receive_departids.findIndex(function (item) {
                return item.value == 'all';
            }) !== -1) {
                receive_departids.splice(receive_departids.findIndex(function (item) {
                    return item.value == 'all';
                }), 1);
            }
            _ajax2.default.post('/hcm/notice/Create', {
                notice_title: notice_title,
                receive_departids: releasetypevalue ? null : receive_departids.map(function (item, index) {
                    return item.value;
                }).join(','),
                notice_type: notice_type,
                notice_content: notice_content,
                attach_urls: JSON.stringify(fileList),
                notice_send_type: releasetypevalue,
                receive_classifyids: releasetypevalue ? categoryListID.join(',') : null
            }).then(function (response) {
                LoadingModal({ bl: false });
                if (response.data.status == '10000') {
                    _message3.default.success('成功');
                    _this.setState({
                        fileList: [],
                        receive_departids: [],
                        notice_title: null,
                        notice_type: null,
                        notice_content: null,
                        categoryListID: []
                    }, function () {
                        // this.editorInstance.setContent(null, 'html')
                        window.location.href = '/index.html#/Announcements';
                    });
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
                LoadingModal({ bl: false });
            });
        };

        _this.upChange = function (info) {
            var fileList = info.fileList;
            if (_this.beforeUpload(info.file, false)) {
                _this.setState({ fileList: fileList });
            }
        };

        _this.beforeUpload = function (file) {
            var bl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var type = '.rar .zip .doc .docx .xls .xlsx .ppt .pptx .pdf .jpg .png';
            var filename = file.name;
            var index = filename.lastIndexOf(".");
            var ext = filename.substr(index + 1);
            if (type.indexOf(ext) === -1) {
                if (bl) {
                    _message3.default.error('\u6682\u4E0D\u652F\u6301' + filename + '\u6587\u4EF6\u683C\u5F0F');
                }
                return false;
            }
            return true;
        };

        _this.releasetype = function (ev) {
            _this.setState({
                releasetypevalue: ev.target.value,
                receive_departids: [],
                categoryListID: []
            });
        };

        _this.state = {
            dataList: [],
            noticeTypeList: [],
            departmentList: [],
            fileList: [],
            receive_departids: [],
            notice_title: null,
            notice_type: null,
            notice_content: null,
            releasetypevalue: 0, //发布公告类型value
            categoryList: [], //品类列表
            categoryListID: [] //通知公告新增品类ID
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getNoticeTypeList();
            this.getDepartmentList();
            this.getCategoryList();
        }
    }, {
        key: 'getNoticeTypeList',
        value: function getNoticeTypeList() {
            var _this2 = this;

            _ajax2.default.get('/hcm/sys/GetList', {
                params: {
                    dictcode: 'notice_type'
                }
            }).then(function (response) {
                _this2.setState({
                    noticeTypeList: response.data.data
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        }
    }, {
        key: 'checkAll',
        value: function checkAll() {
            var departmentList = this.state.departmentList;

            var arr = [];

            var recursive = function recursive(data) {
                data.forEach(function (item, index) {
                    var title = item.title,
                        value = item.value;

                    arr.push({
                        label: title, value: value
                    });
                    if (item.children) {
                        recursive(item.children);
                    }
                });
            };
            recursive(departmentList);
            console.log(arr);
            return arr;
        }
        //格力新增部分---

    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                categoryList = _state.categoryList,
                noticeTypeList = _state.noticeTypeList,
                departmentList = _state.departmentList,
                notice_title = _state.notice_title,
                receive_departids = _state.receive_departids,
                notice_type = _state.notice_type,
                notice_content = _state.notice_content,
                fileList = _state.fileList,
                releasetypevalue = _state.releasetypevalue;
            // 品类选择框

            var newcategoryList = categoryList.map(function (e, i) {
                return React.createElement(
                    Option,
                    { key: e.id },
                    e.productClassifyName
                );
            });
            var editorProps = {
                contentFormat: 'html',
                media: {
                    allowPasteImage: false, // 是否允许直接粘贴剪贴板图片（例如QQ截图等）到编辑器
                    image: false, // 开启图片插入功能
                    video: false, // 开启视频插入功能
                    audio: false // 开启音频插入功能
                },
                placeholder: '请输入公告内容',
                onChange: this.handleChange,
                initialContent: notice_content,
                controls: ['undo', 'redo', 'split', 'font-size', 'font-family', 'line-height', 'letter-spacing', 'indent', 'text-color', 'bold', 'italic', 'underline', 'strike-through', 'superscript', 'subscript', 'remove-styles', 'emoji', 'text-align', 'split', 'list_ul', 'list_ol', 'blockquote', 'code', 'split', 'link', 'split', 'clear']
            };
            var props = {
                action: '/hcm/hcmWorkOrder/headUpload',
                onChange: this.upChange,
                beforeUpload: this.beforeUpload,
                multiple: true
            };
            return React.createElement(
                'div',
                { className: 'add-announcements' },
                React.createElement(
                    'div',
                    { className: 'Breadcrumb' },
                    React.createElement(
                        _breadcrumb2.default,
                        null,
                        React.createElement(
                            _breadcrumb2.default.Item,
                            null,
                            React.createElement(
                                'a',
                                { href: '/index.html#/Announcements' },
                                '\u901A\u77E5\u516C\u544A'
                            )
                        ),
                        React.createElement(
                            _breadcrumb2.default.Item,
                            null,
                            '\u65B0\u589E\u516C\u544A'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'content' },
                    React.createElement(
                        'ul',
                        { className: 'items' },
                        React.createElement(
                            'li',
                            { className: 'item' },
                            React.createElement(
                                'span',
                                { className: 'title red-ck' },
                                '\u516C\u544A\u4E3B\u9898'
                            ),
                            React.createElement(
                                'div',
                                { className: 'ipt-box' },
                                React.createElement(_input2.default, { onChange: function onChange(e) {
                                        _this3.setState({ notice_title: e.target.value });
                                    }, value: notice_title, placeholder: '\u8BF7\u8F93\u5165' })
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'item' },
                            React.createElement(
                                'span',
                                { className: 'title red-ck' },
                                '\u516C\u544A\u7C7B\u578B'
                            ),
                            React.createElement(
                                'div',
                                { style: { position: 'relative' }, id: 'alert-type', className: 'ipt-box' },
                                React.createElement(
                                    _select2.default,
                                    {
                                        style: { width: '100%' },
                                        showSearch: true,
                                        placeholder: '\u8BF7\u9009\u62E9',
                                        getPopupContainer: function getPopupContainer() {
                                            return document.getElementById('alert-type');
                                        },
                                        value: notice_type ? notice_type : undefined,
                                        onChange: function onChange(value, label, extra) {
                                            return _this3.chTreeSelect(value, label, extra, 'notice_type');
                                        },

                                        filterOption: function filterOption(input, option) {
                                            return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                                        }
                                    },
                                    noticeTypeList.map(function (item, index) {
                                        return React.createElement(
                                            Option,
                                            { key: index, value: item.id },
                                            item.dictName
                                        );
                                    })
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'item' },
                            React.createElement(
                                'span',
                                { className: 'title red-ck' },
                                '\u53D1\u5E03\u65B9\u5F0F'
                            ),
                            React.createElement(
                                'div',
                                { style: { position: 'relative' }, id: 'department', className: 'ipt-box' },
                                React.createElement(
                                    RadioGroup,
                                    { onChange: this.releasetype, value: releasetypevalue },
                                    React.createElement(
                                        _radio2.default,
                                        { value: 0 },
                                        '\u6309\u90E8\u95E8\u53D1\u5E03'
                                    ),
                                    React.createElement(
                                        _radio2.default,
                                        { value: 1 },
                                        '\u6309\u54C1\u7C7B\u53D1\u5E03'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'item' },
                            React.createElement(
                                'span',
                                { className: 'title red-ck' },
                                releasetypevalue ? '接收品类' : '接收部门'
                            ),
                            React.createElement(
                                'div',
                                { style: { position: 'relative' }, id: 'department', className: 'ipt-box' },
                                !releasetypevalue ? React.createElement(_treeSelect2.default, {
                                    allowClear: true,
                                    multiple: true,
                                    showSearch: true,
                                    getPopupContainer: function getPopupContainer() {
                                        return document.getElementById('department');
                                    },
                                    treeCheckStrictly: true,
                                    placeholder: '\u8BF7\u9009\u62E9',
                                    treeCheckable: true,
                                    showCheckedStrategy: SHOW_ALL,
                                    treeDefaultExpandedKeys: ['all'],
                                    style: { width: '100%' },
                                    dropdownStyle: { maxHeight: 300, overflow: 'auto' },
                                    value: receive_departids,
                                    treeData: departmentList,
                                    onChange: function onChange(value, label, extra) {
                                        return _this3.chTreeSelect(value, label, extra, 'receive_departids');
                                    }
                                }) : React.createElement(
                                    _select2.default,
                                    {
                                        mode: 'multiple',
                                        style: { width: '100%' },
                                        placeholder: '\u8BF7\u9009\u62E9',
                                        onChange: this.categoryListChange
                                    },
                                    newcategoryList
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            { style: { width: '100%', alignItems: 'end' }, className: 'item' },
                            React.createElement(
                                'span',
                                { className: 'title red-ck' },
                                '\u516C\u544A\u5185\u5BB9'
                            ),
                            React.createElement(
                                'div',
                                { style: { width: '80%', border: '1px solid #e5e5e5', borderRadius: '2px' }, className: 'ipt-box' },
                                React.createElement(_braftEditor2.default, _extends({ ref: function ref(instance) {
                                        return _this3.editorInstance = instance;
                                    } }, editorProps))
                            )
                        ),
                        React.createElement(
                            'li',
                            { style: { width: '100%', alignItems: 'end' }, className: 'item' },
                            React.createElement(
                                'span',
                                { style: { paddingTop: '8px' }, className: 'title' },
                                '\u4E0A\u4F20\u9644\u4EF6'
                            ),
                            React.createElement(
                                'div',
                                { className: 'ipt-box' },
                                React.createElement(
                                    _upload2.default,
                                    _extends({}, props, { fileList: fileList }),
                                    React.createElement(
                                        _button2.default,
                                        null,
                                        React.createElement(_icon2.default, { type: 'upload' }),
                                        ' \u9009\u62E9\u6587\u4EF6'
                                    ),
                                    React.createElement(
                                        'span',
                                        null,
                                        '\u652F\u6301\u6269\u5C55\u540D\uFF1A.rar .zip .doc .docx .xls .xlsx .ppt .pptx .pdf .jpg .png'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'item' },
                            React.createElement('span', { className: 'title' }),
                            React.createElement(
                                'div',
                                { className: 'ipt-box' },
                                React.createElement(
                                    _button2.default,
                                    { className: 'upsure', onClick: function onClick() {
                                            return _this3.onSubmit();
                                        } },
                                    '\u63D0\u4EA4'
                                ),
                                React.createElement(
                                    'a',
                                    { href: '/index.html#/Announcements' },
                                    React.createElement(
                                        _button2.default,
                                        null,
                                        '\u53D6\u6D88'
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(_Copyright2.default, { clazzName: 'copyright' })
            );
        }
    }]);

    return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/checkbox/style/css.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/checkbox/style/css.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/checkbox/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/checkbox/style/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/checkbox/style/index.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/_fbjs@0.8.17@fbjs/lib/warning.js":
/*!*******************************************************!*\
  !*** ./node_modules/_fbjs@0.8.17@fbjs/lib/warning.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/_fbjs@0.8.17@fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_hasPath.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_hasPath.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/_lodash@4.17.11@lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/_lodash@4.17.11@lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/_lodash@4.17.11@lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/_lodash@4.17.11@lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/_lodash@4.17.11@lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/_lodash@4.17.11@lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ })

}]);
//# sourceMappingURL=227_63fc5ceb1948d4af2552.js.map