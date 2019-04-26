(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[284],{

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

/***/ "./app/widget/index/Brand/WhiteList/main.js":
/*!**************************************************!*\
  !*** ./app/widget/index/Brand/WhiteList/main.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/WhiteList/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _lib = __webpack_require__(/*! ../../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var confirm = _modal2.default.confirm;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.onAddBoxFrom = function (bl) {
            if (bl) {
                _this.setState({
                    actionVisible: bl
                });
            } else {
                _this.setState({
                    actionVisible: bl
                });
            }
        };

        _this.changeTabs = function (activeKey) {
            console.log(activeKey);
            _this.setState({
                platform: activeKey,
                pageNo: 1,
                pageSize: 10,
                dataList: [],
                selectedRowKeys: [],
                title: null
            }, function () {
                _this.getList();
            });
        };

        _this.onSearch = function () {
            _this.setState({
                pageNo: 1,
                pageSize: 10,
                selectedRowKeys: []
            }, function () {
                _this.getList();
            });
        };

        _this.searchChange = function (e) {
            _this.setState({
                title: e.target.value
            });
        };

        _this.onSubmit = function (values, resetFields) {
            values.whitetype = _this.state.platform;
            values.whitename = values.title.join(',');
            delete values.title;
            _ajax2.default.post('/hcm/iprWhitelist/save', values).then(function (response) {
                if (response.data.status == '10000') {
                    _this.getList();
                    _this.onAddBoxFrom(false);
                    resetFields();
                    _message3.default.success(response.data.data);
                } else {
                    _message3.default.error(response.data.message);
                }
            });
        };

        _this.getList = function () {
            var _this$state = _this.state,
                pageNo = _this$state.pageNo,
                pageSize = _this$state.pageSize,
                platform = _this$state.platform,
                title = _this$state.title;

            _ajax2.default.get('/hcm/iprWhitelist/getPageBybmcid', {
                params: {
                    whitename: title,
                    whitetype: platform,
                    pageNo: pageNo,
                    pageSize: pageSize
                }
            }).then(function (response) {
                _this.setState({
                    dataList: response.data.data.content,
                    pageNo: response.data.data.pageNumber,
                    pageSize: response.data.data.pageSize,
                    totalNum: response.data.data.totalElements,
                    checkAll: false,
                    oldTitle: title,
                    selectedRowKeys: []
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.onTableCheckChange = function (selectedRowKeys) {
            _this.setState({
                selectedRowKeys: selectedRowKeys,
                checkAll: false
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

        _this.formatColumn = function () {

            var column = [{
                title: 'No',
                dataIndex: 'index',
                width: '80px',
                key: 'index',
                render: function render(text, record, index) {
                    return React.createElement(
                        'div',
                        { style: { width: '40px' } },
                        index + 1
                    );
                }
            }, {
                title: '店铺名称',
                dataIndex: 'whitename',
                key: 'whitename',
                render: function render(text, record, index) {
                    if (record.show) {
                        return React.createElement(_input2.default, { maxLength: 32, onChange: function onChange(e) {
                                return _this.changName(e, record, index);
                            }, value: record.oldData.whitename });
                    } else {
                        return text;
                    }
                }
            }, {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                align: 'right',
                render: function render(text, item, index) {
                    if (item.show) {
                        return React.createElement(
                            React.Fragment,
                            null,
                            React.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return _this.saveItem(item, index);
                                    }, style: { marginRight: '20px' } },
                                '\u4FDD\u5B58'
                            ),
                            React.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return _this.cancelItem(item, index);
                                    } },
                                '\u53D6\u6D88'
                            )
                        );
                    } else {
                        return React.createElement(
                            React.Fragment,
                            null,
                            React.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return _this.editItem(item, index);
                                    }, style: { marginRight: '20px' } },
                                '\u7F16\u8F91'
                            ),
                            React.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return _this.rmItem(item);
                                    } },
                                '\u5220\u9664'
                            )
                        );
                    }
                }
            }];
            if (_this.state.platform == 'TB' || _this.state.platform == '1688' || _this.state.platform == 'XY') {
                column[1].title = '旺旺名称';
            }
            return column;
        };

        _this.saveItem = function (item, index) {
            var platform = _this.state.platform;

            _ajax2.default.post('/hcm/iprWhitelist/update', {
                whitename: item.oldData.whitename,
                whitetype: item.oldData.whitetype,
                id: item.oldData.id
            }).then(function (response) {
                if (response.data.status == '10000') {
                    _this.changeTabs(platform);
                    _message3.default.success(response.data.message);
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.editItem = function (item, index) {
            var dataList = _this.state.dataList;
            dataList[index].oldData = Object.assign({}, item);
            dataList[index].show = true;
            _this.setState({
                dataList: dataList
            });
        };

        _this.cancelItem = function (item, index) {
            var dataList = _this.state.dataList;
            delete dataList[index].oldData;
            delete dataList[index].show;
            _this.setState({
                dataList: dataList
            });
        };

        _this.changName = function (e, item, index) {
            var dataList = _this.state.dataList;
            dataList[index].oldData.whitename = e.target.value;
            _this.setState({
                dataList: dataList
            });
        };

        _this.rmItem = function (item) {
            var that = _this;
            var platform = _this.state.platform;

            confirm({
                title: null,
                content: React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { className: 'tips' },
                        '\u63D0\u793A'
                    ),
                    React.createElement('div', { className: 'pline' }),
                    React.createElement(
                        'p',
                        { className: 'Dtitle' },
                        '\u4F60\u786E\u8BA4\u8981\u5220\u9664\u8FD9\u4E00\u9879\u5417?'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u5220\u9664\u540E',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            '\u5C06\u65E0\u6CD5\u6062\u590D!'
                        )
                    )
                ),
                okText: '确定',
                cancelText: '取消',
                className: 'alert-item-confirm',
                okButtonProps: { className: 'btn2-main' },
                cancelButtonProps: { className: 'btn2-sub' },
                onOk: function onOk() {
                    _ajax2.default.post('/hcm/iprWhitelist/delete', {
                        iprWhitelistIds: item.id,
                        whitetype: platform
                    }).then(function (response) {
                        if (response.data.status == '10000') {
                            that.changeTabs(platform);
                            _message3.default.success(response.data.message);
                        } else {
                            _message3.default.error(response.data.message);
                        }
                    }).catch(function (error) {
                        _message3.default.error(error.statusText);
                    });
                }
            });
        };

        _this.allStopStart = function () {
            var _this$state2 = _this.state,
                selectedRowKeys = _this$state2.selectedRowKeys,
                totalNum = _this$state2.totalNum,
                checkAll = _this$state2.checkAll,
                oldTitle = _this$state2.oldTitle,
                platform = _this$state2.platform;


            var that = _this;
            if (selectedRowKeys.length == 0) {
                _message3.default.warning('至少选择一项');
                return;
            }
            confirm({
                title: null,
                content: React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { className: 'tips' },
                        '\u63D0\u793A'
                    ),
                    React.createElement('div', { className: 'pline' }),
                    React.createElement(
                        'p',
                        { className: 'Dtitle' },
                        '\u4F60\u786E\u8BA4\u8981\u5220\u9664',
                        checkAll ? totalNum : selectedRowKeys.length,
                        '\u9879\u5417?'
                    )
                ),
                okText: '确定',
                cancelText: '取消',
                className: 'alert-item-confirm',
                okButtonProps: { className: 'btn2-main' },
                cancelButtonProps: { className: 'btn2-sub' },
                onOk: function onOk() {
                    _ajax2.default.post('/hcm/iprWhitelist/delete', {
                        iprWhitelistIds: checkAll ? 'checkAll' : selectedRowKeys.join(','),
                        whitename: oldTitle,
                        whitetype: platform
                    }).then(function (response) {
                        if (response.data.status == '10000') {
                            that.changeTabs(platform);
                            _message3.default.success(response.data.message);
                        } else {
                            _message3.default.error(response.data.message);
                        }
                    }).catch(function (error) {
                        _message3.default.error(error.statusText);
                    });
                }
            });
        };

        _this.checkAll = function (bl) {
            var selectedRowKeys = _this.state.selectedRowKeys;
            if (bl) {
                _this.state.dataList.forEach(function (item, index) {
                    selectedRowKeys.push(item.id);
                });
            } else {
                selectedRowKeys = [];
            }
            _this.setState({
                checkAll: bl,
                selectedRowKeys: selectedRowKeys
            });
        };

        _this.state = {
            platform: 'TB',
            title: null,
            dataList: [],
            pageNo: 1,
            pageSize: 10,
            totalNum: 0,
            checkAll: false,
            selectedRowKeys: [],
            actionVisible: false
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
        }
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
//# sourceMappingURL=284_49baed3fd92ece615ba5.js.map