(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[320],{

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

/***/ "./app/widget/index/Role/main.js":
/*!***************************************!*\
  !*** ./app/widget/index/Role/main.js ***!
  \***************************************/
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

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Role/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _lib = __webpack_require__(/*! ../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var confirm = _modal2.default.confirm;
var App = (_temp = _class = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
            columnsList: [],
            version: null,

            list: [],
            visible: false,
            id: null,
            roleName: null,
            sortNumber: null,
            roleDescription: null,

            rolename: null,
            pageNo: 1,
            pageSize: 10,
            totalNum: 0,

            menuList: [],
            checkedKeys: [],
            AuthorizationVisible: false,
            targetId: null
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.getList();
            this.getMenuList();
            this.getColumnsList();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return App;
}(React.Component), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.AuthorizationVisible = function (bl, id, version, arr) {
        _this2.setState({
            version: version,
            AuthorizationVisible: bl,
            targetId: id,
            checkedKeys: arr
        });
    };

    this.SubmitAuthorization = function () {
        var _state = _this2.state,
            targetId = _state.targetId,
            version = _state.version,
            checkedKeys = _state.checkedKeys;

        _ajax2.default.post('/hcm/saveMenuqx', {
            roleId: targetId,
            version: version,
            menuIds: checkedKeys.join(',')
        }).then(function (res) {
            _this2.AuthorizationVisible(false, null, null, []);
            _this2.getList();
            _message3.default.success(res.data.message);
        });
    };

    this.onVisible = function (bl) {
        if (bl) {
            _this2.setState({
                visible: bl
            });
        } else {
            _this2.setState({
                visible: bl,
                id: null,
                roleName: null,
                sortNumber: null,
                roleDescription: null
            });
        }
    };

    this.onCheckBox = function (checkedKeys, e) {
        var props = e.node.props;
        var mySet = new Set(_this2.state.checkedKeys);
        console.log(props);
        if (props.children) {
            if (props.checked) {
                mySet.delete(props.eventKey);
                props.children.forEach(function (item, index) {
                    mySet.delete(item.key);
                });
            } else {
                mySet.add(props.eventKey);
                props.children.forEach(function (item, index) {
                    mySet.add(item.key);
                });
            }
        } else {
            if (props.checked) {
                mySet.delete(props.eventKey);
            } else {
                mySet.add(props.eventKey);
            }
        }
        _this2.setState({
            checkedKeys: [].concat(_toConsumableArray(mySet))
        });
        // let checkedKeys = this.state.checkedKeys;
        // checkedKeys.add(checkedKeys);
        // console.log(checkedKeys)
    };

    this.getMenuList = function () {
        _ajax2.default.get('/hcm/menu/getList', {
            params: {
                type: 'ALL'
            }
        }).then(function (res) {
            _this2.setState({
                menuList: res.data.data
            });
        });
    };

    this.handleOk = function () {
        var _state2 = _this2.state,
            roleName = _state2.roleName,
            sortNumber = _state2.sortNumber,
            roleDescription = _state2.roleDescription,
            id = _state2.id;

        if (!_lib2.default.required(roleName)) {
            _message3.default.warning('请输入角色名称');
            return;
        }
        if (!_lib2.default.required(sortNumber)) {
            _message3.default.warning('请输入排序号码');
            return;
        }
        if (!_lib2.default.legnthCheck(roleName, 'INPUT')) {
            _message3.default.warning('角色名称字符不允许超过50');
            return;
        }
        if (!_lib2.default.legnthCheck(sortNumber, 'INPUT')) {
            _message3.default.warning('排序号码字符不允许超过50');
            return;
        }
        if (!_lib2.default.legnthCheck(roleDescription, 'URL')) {
            _message3.default.warning('备注字符不允许超过500');
            return;
        }
        _ajax2.default.post('/hcm/role/save', {
            roleName: roleName, sortNumber: sortNumber, roleDescription: roleDescription, id: id
        }).then(function (res) {
            _this2.getList();
        });
    };

    this.onChange = function (value, type) {
        _this2.setState(_defineProperty({}, type, (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.target.value : value));
    };

    this.getList = function () {
        var _state3 = _this2.state,
            pageNo = _state3.pageNo,
            pageSize = _state3.pageSize,
            rolename = _state3.rolename;

        _ajax2.default.get('/hcm/role/getRolePage', {
            params: {
                pageNo: pageNo, pageSize: pageSize, rolename: rolename
            }
        }).then(function (res) {
            _this2.setState({
                list: res.data.data.content,
                pageNo: res.data.data.pageNumber,
                pageSize: res.data.data.pageSize,
                totalNum: res.data.data.totalElements
            });
            _this2.onVisible(false);
        });
    };

    this.columns = function () {
        var arr = [{
            title: '排序',
            dataIndex: 'sort_number',
            key: 'sort_number'
        }, {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        }, {
            title: '角色名称',
            dataIndex: 'role_name',
            key: 'role_name'
        }, {
            title: '备注',
            dataIndex: 'role_description',
            key: 'role_description'
        }];
        _this2.state.columnsList.forEach(function (item, index) {
            arr.push({
                title: item.dictName,
                dataIndex: item.id,
                key: item.id,
                render: function render(text, item2, index2) {
                    return React.createElement(
                        'a',
                        { onClick: function onClick() {
                                return _this2.AuthorizationVisible(true, item2.id, item.id, item2['' + item.id] ? item2['' + item.id].split(',') : []);
                            } },
                        '\u6388\u6743'
                    );
                }
            });
        });
        arr.push({
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            align: 'right',
            render: function render(text, item, index) {
                return React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                        'a',
                        { onClick: function onClick() {
                                return _this2.itemEdit(item);
                            }, style: { marginLeft: 20 } },
                        '\u7F16\u8F91'
                    ),
                    +item.id < 50 ? null : React.createElement(
                        'a',
                        { onClick: function onClick() {
                                return _this2.rmEdit(item);
                            }, style: { marginLeft: 20 } },
                        '\u5220\u9664'
                    )
                );
            }

        });
        return arr;
    };

    this.getColumnsList = function () {
        _ajax2.default.get('/hcm/sys/GetList', {
            params: {
                dictcode: 'version'
            }
        }).then(function (res) {
            _this2.setState({
                columnsList: res.data.data
            });
        });
    };

    this.rmEdit = function (item) {
        var that = _this2;
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
                    '\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u89D2\u8272\u5417?'
                ),
                React.createElement(
                    'p',
                    null,
                    '\u5220\u9664\u540E',
                    React.createElement(
                        'span',
                        { className: 'red' },
                        '\u65E0\u6CD5\u6062\u590D\uFF01'
                    )
                )
            ),
            okText: '删除',
            cancelText: '取消',
            className: 'alert-item-confirm',
            onOk: function onOk() {
                _ajax2.default.post('/hcm/role/delete', {
                    roleId: item.id
                }).then(function (res) {
                    that.getList();
                    if (res.data.status === '10000') {
                        _message3.default.success(res.data.message);
                    } else {
                        _message3.default.error(res.data.message);
                    }
                });
            }
        });
    };

    this.itemEdit = function (item) {
        _this2.setState({
            id: item.id,
            roleName: item.role_name,
            sortNumber: item.sort_number,
            roleDescription: item.role_description
        }, _this2.onVisible(true));
    };

    this.changePagination = function (page, pageSize) {
        _this2.setState({
            pageNo: page,
            pageSize: pageSize
        }, function () {
            _this2.getList();
        });
    };

    this.onPaginationSize = function (current, size) {
        _this2.setState({
            pageNo: 1,
            pageSize: size
        }, function () {
            _this2.getList();
        });
    };
}, _temp);
exports.default = _form2.default.create()(App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=320_65a2f4663525c0ea7d45.js.map