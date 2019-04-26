(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[267],{

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

/***/ "./app/widget/index/Brand/PriceNotice/main.js":
/*!****************************************************!*\
  !*** ./app/widget/index/Brand/PriceNotice/main.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/PriceNotice/tpl.js");

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

// import {LoadingModal} from '../../../components/LoadingModal/LoadingModal';
var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.editOnchange = function (e, type) {
            var classfiyUpdate = _this.state.classfiyUpdate;
            classfiyUpdate[type] = e;
            _this.setState({
                classfiyUpdate: classfiyUpdate
            });
        };

        _this.onChange = function (e, type) {
            var state = _this.state;
            state[type] = e.target.value;
            _this.setState(state);
        };

        _this.handleClearIconClick = function (type) {
            var state = _this.state;
            state[type] = null;
            _this.setState(state);
        };

        _this.addSubmit = function () {
            var _this$state = _this.state,
                addDroductClassifyName = _this$state.addDroductClassifyName,
                leaderIdArray = _this$state.leaderIdArray;

            addDroductClassifyName = addDroductClassifyName.replace(/(^\s*)|(\s*$)/g, "");
            console.log(addDroductClassifyName);
            console.log(leaderIdArray);
            if (!addDroductClassifyName || !addDroductClassifyName.length) {
                _message3.default.error('分类名不可为空');
                return;
            }
            if (!_lib2.default.legnthCheck(addDroductClassifyName, 'INPUT')) {
                _message3.default.error('分类名长度不允许超过50');
                return;
            }

            LoadingModal({ bl: true, text: '保存中,请稍后...' });
            _ajax2.default.get('/hcm/ProductClassify/save', {
                params: {
                    productClassifyName: addDroductClassifyName,
                    leaderId: leaderIdArray
                }
            }).then(function (response) {
                if (response.data.status == '10000') {
                    _this.setState({
                        addDroductClassifyName: null,
                        addStatus: false,
                        leaderIdArray: [],
                        leaderId: []
                    });
                    _this.getList();
                    _message3.default.success(response.data.message);
                } else {
                    _message3.default.warning(response.data.message);
                }

                LoadingModal({ bl: false });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
                LoadingModal({ bl: false });
            });
        };

        _this.getMore = function () {
            _this.setState({
                pageNo: _this.state.pageNo + 1
            }, function () {
                _this.getList();
            });
        };

        _this.onSearch = function () {
            _this.setState({
                pageNo: 1
            }, function () {
                _this.getList();
            });
        };

        _this.getList = function () {
            var _this$state2 = _this.state,
                pageNo = _this$state2.pageNo,
                pageSize = _this$state2.pageSize,
                productClassifyName = _this$state2.productClassifyName;

            _ajax2.default.get('/hcm/ProductClassify/seletProductClassify', {
                params: {
                    pageNum: pageNo,
                    pageSize: pageSize,
                    productClassifyName: productClassifyName
                }
            }).then(function (response) {
                var _response$data$data$d = response.data.data.data,
                    count = _response$data$data$d.count,
                    list = _response$data$data$d.list;


                _this.setState({
                    dataList: list,
                    totalElements: count
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.onRmItem = function (item) {
            var that = _this;
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
                        '\u4F60\u786E\u8BA4\u8981\u5220\u9664\u8BE5\u4EA7\u54C1\u5206\u7C7B\u5417\uFF1F'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u5220\u9664\u540E',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            '\u5F55\u5165\u7684\u516C\u793A\u4FE1\u606F\u5C06\u4F1A\u88AB\u5220\u9664'
                        )
                    )
                ),
                okText: '确定',
                cancelText: '取消',
                className: 'alert-item-confirm',
                okButtonProps: { className: 'btn2-main' },
                cancelButtonProps: { className: 'btn2-sub' },
                onOk: function onOk() {
                    _ajax2.default.get('/hcm/ProductClassify/deleteById', {
                        params: {
                            id: item.id
                        }
                    }).then(function (response) {
                        _message3.default.success(response.data.message);
                        that.getList();
                    }).catch(function (error) {
                        _message3.default.error(error.statusText);
                    });
                }
            });
        };

        _this.onMonitorStop = function (item) {
            var that = _this;
            confirm({
                title: '你确认要停止该产品分类监控吗？',
                okText: '确定',
                cancelText: '取消',
                okButtonProps: { className: 'btn2-main' },
                cancelButtonProps: { className: 'btn2-sub' },
                onOk: function onOk() {
                    _ajax2.default.get('/hcm/priceMonitor/MonitorStop', {
                        params: {
                            id: item.id,
                            productClassifyName: item.productClassifyName
                        }
                    }).then(function (response) {
                        _message3.default.success(response.data.message);
                        that.getList();
                    }).catch(function (error) {
                        _message3.default.error(error.statusText);
                    });
                }
            });
        };

        _this.onUpdateMonitoring = function () {
            var that = _this;
            var _this$state$classfiyU = _this.state.classfiyUpdate,
                MonitorDate = _this$state$classfiyU.MonitorDate,
                platform_code = _this$state$classfiyU.platform_code,
                frequency = _this$state$classfiyU.frequency,
                monitor_range = _this$state$classfiyU.monitor_range,
                id = _this$state$classfiyU.id,
                productClassifyName = _this$state$classfiyU.productClassifyName;


            _ajax2.default.post('/hcm/priceMonitor/ClassfiyUpdate', {
                MonitorDate: moment(MonitorDate).format('HH:mm'),
                // platform_code:platform_code,
                frequency: frequency,
                monitor_range: monitor_range,
                type: '1',
                id: id,
                productClassifyName: productClassifyName
            }).then(function (response) {

                that.onVisible(false);
                if (response.data.status == '10000') {
                    _message3.default.success(response.data.message);
                    that.getList();
                } else {
                    _message3.default.warning(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.productClassify = function (e) {
            //console.log(e.target.value)
            _this.setState({
                productClassifyNamex: e.target.value
            });
        };

        _this.onEditItem = function (item) {
            // console.log(item)
            _this.setState({
                visibleBJ: true,
                leaderIdArray: item.leaderId,
                leaderId: item.leaderName,
                productClassifyNamex: item.productClassifyName,
                productClassifyId: item.id
            }, function () {
                //  console.log(this.state.productClassifyNamex)
                // confirm({
                //     content: <div>
                //         <input style={{ width: '90%' }} id='edit-item-input' defaultValue={item.productClassifyName} /><br></br>
                //         <TreeSelect
                //             style={{width:"90%",marginTop:"10px"}}
                //             value={that.state.leaderId}
                //             dropdownStyle={{ maxHeight: 200, overflow: 'auto' }}
                //             treeData={that.state.brandList}
                //             placeholder="请选择负责人"
                //             treeDefaultExpandAll
                //             onChange={that.handleChangeleaderId}
                //         />
                //     </div>,
                //     okText: '确定',
                //     className: 'edit-item-confirm',
                //     okButtonProps: { className: 'btn2-main' },
                //     cancelButtonProps: { className: 'btn2-sub' },
                //     cancelText: '取消',
                //     onOk(close) {

                //         if (!lib.legnthCheck(document.getElementById('edit-item-input').value, 'INPUT')) {
                //             message.error('分类名长度不允许超过50');

                //         } else {
                //             ajax.get('/hcm/ProductClassify/save', {
                //                 params: {
                //                     productClassifyName: document.getElementById('edit-item-input').value,
                //                     id: item.id,
                //                     leaderId:that.state.leaderIdArray
                //                 }
                //             }).then((response) => {
                //                 if (response.data.status == '10000') {
                //                     message.success(response.data.message)
                //                     that.getList()
                //                     close()
                //                 } else {
                //                     message.warning(response.data.message)
                //                 }
                //             }).catch((error) => {
                //                 message.error(error.statusText);
                //             });
                //         }
                //     }
                // });
            });
        };

        _this.onVisible = function (bl, item) {
            var classfiyUpdate = _this.state.classfiyUpdate;
            if (item) {
                classfiyUpdate.id = item.id;
                classfiyUpdate.productClassifyName = item.productClassifyName;
            }
            _this.setState({
                visible: bl,
                classfiyUpdate: classfiyUpdate
            });
        };

        _this.createJson = function (prop, val, str) {
            if (typeof val === "undefined") {
                delete str[prop];
            } else {
                str[prop] = val;
            }
        };

        _this.lolo = function (v) {
            v.children.forEach(function (vs, i) {
                if (vs.type === "dept") {
                    _this.createJson("disabled", true, vs);
                    if (vs.children != null) {
                        _this.lolo(vs);
                    }
                } else if (vs.type === "user") {
                    _this.createJson("disabled", false, vs);
                }
            });
        };

        _this.brandList = function () {
            _ajax2.default.post('/hcm/userout/getAllUserTreeByDepartId', {}).then(function (response) {
                //console.log(response)
                if (response.data.status == '10000') {
                    response.data.data.forEach(function (v, i) {
                        //   console.log(v,i)
                        if (v.type === "dept") {
                            //  console.log(1)
                            _this.createJson("disabled", true, v);
                            ///  console.log(v)
                            if (v.children != null) {
                                _this.lolo(v);
                            }
                        } else if (v.type === "user") {
                            _this.createJson("disabled", false, v);
                        }
                        // console.log(v,"21")
                    });
                    _this.setState({
                        brandList: response.data.data
                    });
                } else {
                    _message3.default.warning(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.onAddStatus = function (bl) {
            _this.setState({
                addStatus: bl,
                addDroductClassifyName: null,
                leaderIdArray: [],
                leaderId: []
            });
        };

        _this.handleChangeleaderId = function (value, titlex) {
            //console.log(value, titlex)
            _this.setState({
                leaderIdArray: value,
                leaderId: titlex
            });
        };

        _this.handleOk = function (e) {
            var productClassifyNamex = _this.state.productClassifyNamex;

            productClassifyNamex = productClassifyNamex.replace(/(^\s*)|(\s*$)/g, "");
            if (!productClassifyNamex) {
                _message3.default.error('分类名不能为空');
                return;
            }
            if (!_lib2.default.legnthCheck(document.getElementById('edit-item-input').value, 'INPUT')) {
                _message3.default.error('分类名长度不允许超过50');
            } else {
                if (document.getElementById('edit-item-input').value != "" && document.getElementById('edit-item-input').value != undefined) {
                    _ajax2.default.get('/hcm/ProductClassify/save', {
                        params: {
                            // productClassifyName: document.getElementById('edit-item-input').value,
                            productClassifyName: productClassifyNamex,
                            id: _this.state.productClassifyId,
                            leaderId: _this.state.leaderIdArray
                        }
                    }).then(function (response) {
                        if (response.data.status == '10000') {
                            _message3.default.success(response.data.message);
                            _this.getList();
                            _this.setState({
                                visibleBJ: false,
                                leaderIdArray: [],
                                leaderId: [],
                                productClassifyNamex: null,
                                productClassifyId: ""
                            });
                            close();
                        } else {
                            _this.setState({
                                visibleBJ: false,
                                leaderIdArray: [],
                                leaderId: [],
                                productClassifyNamex: null,
                                productClassifyId: ""
                            });
                            _message3.default.warning(response.data.message);
                        }
                    }).catch(function (error) {
                        _message3.default.error(error.statusText);
                        _this.setState({
                            visibleBJ: false,
                            leaderIdArray: [],
                            leaderId: [],
                            productClassifyNamex: null,
                            productClassifyId: ""
                        });
                    });
                } else {
                    _message3.default.error("不能为空！");
                }
            }
        };

        _this.handleCancel = function (e) {
            //console.log(e);
            _this.setState({
                visibleBJ: false,
                leaderIdArray: [],
                leaderId: [],
                productClassifyNamex: "",
                productClassifyId: ""
            });
        };

        _this.state = {
            addStatus: false,
            visible: false,
            visibleBJ: false,

            productClassifyId: "",
            pageNo: 1,
            pageSize: 15,
            totalElements: 0,
            productClassifyName: null,
            addDroductClassifyName: null,
            productClassifyNamex: "",
            dataList: [],
            classfiyUpdate: {
                MonitorDate: moment(moment().hour() + ':00\'', 'HH:mm'),
                // platform_code:'TB',
                productClassifyName: null,
                frequency: '1次/24H',
                monitor_range: '授权店铺',
                id: null
            },
            leaderId: [],
            leaderIdArray: [],
            brandList: []
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
            this.brandList();
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=267_b01cd68a10613d30b85e.js.map