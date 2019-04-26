(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

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

/***/ "./app/widget/components/platform.js":
/*!*******************************************!*\
  !*** ./app/widget/components/platform.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (name) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { width: '20px', height: '20px' };

    var data = {
        "TB": React.createElement('img', { style: style, src: '../../../../img/platform/1_taobao.svg' }),
        "TM": React.createElement('img', { style: style, src: '../../../../img/platform/2_tall.svg' }),
        "JD": React.createElement('img', { style: style, src: '../../../../img/platform/3_jd.svg' }),
        "SN": React.createElement('img', { style: style, src: '../../../../img/platform/4_suning.svg' }),
        "GM": React.createElement('img', { style: style, src: '../../../../img/platform/5_gome.svg' }),
        "PDD": React.createElement('img', { style: style, src: '../../../../img/platform/6_pinduoduo.svg' }),
        "AMAZON": React.createElement('img', { style: style, src: '../../../../img/platform/7_a.svg' }),
        "WPH": React.createElement('img', { style: style, src: '../../../../img/platform/8_weipinhui.svg' }),
        "1688": React.createElement('img', { style: style, src: '../../../../img/platform/9_1688.svg' }),
        "SMT": React.createElement('img', { style: style, src: '../../../../img/platform/10_sumaitong.svg' }),
        "DD": React.createElement('img', { style: style, src: '../../../../img/platform/11_dangdang.svg' }),
        "ALST": React.createElement('img', { style: style, src: '../../../../img/platform/12_lingshoutong.svg' }),
        "1HD": React.createElement('img', { style: style, src: '../../../../img/platform/13_1haodian.svg' }),
        "YJWD": React.createElement('img', { style: style, src: '../../../../img/platform/14_yunji.svg' }),
        "YLW": React.createElement('img', { style: style, src: '../../../../img/platform/15_youle.svg' }),
        "XY": React.createElement('img', { style: style, src: '../../../../img/platform/16_xainyu.svg' }),
        "WECD": React.createElement('img', { style: style, src: '../../../../img/platform/17_weixin.svg' }),
        "MGJ": React.createElement('img', { style: style, src: '../../../../img/platform/18_mogujie.svg' }),
        "JMYP": React.createElement('img', { style: style, src: '../../../../img/platform/19_jumei.svg' }),
        "CCJ": React.createElement('img', { style: style, src: '../../../../img/platform/20_chuchujie.svg' }),
        "BBWG": React.createElement('img', { style: style, src: '../../../../img/platform/21_beibeiwang.svg' }),
        "platform_OTHER": React.createElement('img', { style: style, src: '../../../../img/platform/22_qita.svg' })
    };
    return data[name];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/index/Brand/ClientDetail/tpl.js":
/*!****************************************************!*\
  !*** ./app/widget/index/Brand/ClientDetail/tpl.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _drawer = __webpack_require__(/*! antd/es/drawer */ "./node_modules/_antd@3.10.1@antd/es/drawer/index.js");

var _drawer2 = _interopRequireDefault(_drawer);

var _timeline = __webpack_require__(/*! antd/es/timeline */ "./node_modules/_antd@3.10.1@antd/es/timeline/index.js");

var _timeline2 = _interopRequireDefault(_timeline);

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _alert = __webpack_require__(/*! antd/es/alert */ "./node_modules/_antd@3.10.1@antd/es/alert/index.js");

var _alert2 = _interopRequireDefault(_alert);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@3.10.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@3.10.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@3.10.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

__webpack_require__(/*! antd/es/drawer/style/css */ "./node_modules/_antd@3.10.1@antd/es/drawer/style/css.js");

__webpack_require__(/*! antd/es/timeline/style/css */ "./node_modules/_antd@3.10.1@antd/es/timeline/style/css.js");

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/alert/style/css */ "./node_modules/_antd@3.10.1@antd/es/alert/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@3.10.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@3.10.1@antd/es/tabs/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _lib = __webpack_require__(/*! ../../../../js/common/lib */ "./app/js/common/lib.js");

var _lib2 = _interopRequireDefault(_lib);

var _platform = __webpack_require__(/*! ../../../components/platform */ "./app/widget/components/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPane = _tabs2.default.TabPane;
var RangePicker = _datePicker2.default.RangePicker;

//暂未定购
var NoAuthed = function NoAuthed(that) {
    return React.createElement(
        'div',
        { className: 'no-authed' },
        React.createElement('img', { src: '../../../../img/no_data.jpg' }),
        React.createElement(
            'p',
            { style: { color: '#999' } },
            '\u62B1\u6B49\uFF0C\u672C\u5E97\u94FA\u8FD8\u672A\u8BA2\u8D2D\u5E94\u7528'
        ),
        React.createElement(
            'p',
            null,
            '\u5E97\u94FA\u8BA2\u8D2D\u5E94\u7528\u540E\uFF0C\u5219\u4F1A\u663E\u793A\u8BA2\u8D2D\u5E97\u94FA\u7684\u9500\u552E\u6570\u636E\uFF0C',
            React.createElement(
                'a',
                { onClick: function onClick() {
                        return that.props.appLinkStatusStatus();
                    } },
                '\u83B7\u53D6\u5E94\u7528\u8BA2\u8D2D\u94FE\u63A5'
            )
        )
    );
};
//抽屉头部DOM
var Title = function Title(baseInfo) {
    var dealername = baseInfo.dealername,
        contact = baseInfo.contact,
        dutynumber = baseInfo.dutynumber,
        take_people = baseInfo.take_people,
        address = baseInfo.address,
        creditscore = baseInfo.creditscore,
        status_info = baseInfo.status_info;

    return React.createElement(
        'div',
        { className: 'title' },
        React.createElement(
            'h3',
            null,
            dealername,
            status_info && JSON.stringify(status_info) != '{}' ? React.createElement(
                _tooltip2.default,
                { placement: 'bottom', title: status_info.info },
                React.createElement(
                    'span',
                    { style: { marginLeft: 10 }, className: status_info.info_type },
                    status_info.title
                )
            ) : null
        ),
        React.createElement(
            'div',
            { className: 'info' },
            React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        _tooltip2.default,
                        { title: take_people },
                        React.createElement('img', { src: '../../../../img/icon/user.png' }),
                        take_people
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        _tooltip2.default,
                        { title: contact },
                        React.createElement('img', { src: '../../../../img/icon/phone.png' }),
                        contact
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        _tooltip2.default,
                        { title: dutynumber },
                        React.createElement('img', { src: '../../../../img/icon/duty.png' }),
                        dutynumber
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        _tooltip2.default,
                        { title: address },
                        React.createElement('img', { src: '../../../../img/icon/city.png' }),
                        address
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    'div',
                    null,
                    '\u4FE1\u7528\u5206\uFF1A',
                    React.createElement(
                        'span',
                        { className: 'strong' },
                        creditscore
                    )
                )
            )
        )
    );
};
//经销商档案 
var DealersInfo = function DealersInfo(baseInfo, diyList) {
    var memo_dealername = baseInfo.memo_dealername,
        zssj = baseInfo.zssj,
        authorize_num = baseInfo.authorize_num,
        authorize_start = baseInfo.authorize_start,
        authorize_end = baseInfo.authorize_end,
        add_field = baseInfo.add_field;

    return React.createElement(
        'div',
        { className: 'baseInfo' },
        React.createElement(
            'ul',
            { className: 'items' },
            React.createElement(
                'li',
                null,
                React.createElement(
                    'span',
                    null,
                    '\u5907\u6CE8\u540D\u79F0\uFF1A'
                ),
                memo_dealername
            ),
            React.createElement(
                'li',
                null,
                React.createElement(
                    'span',
                    null,
                    '\u76F4\u5C5E\u4E0A\u7EA7\uFF1A'
                ),
                zssj
            ),
            React.createElement(
                'li',
                null,
                React.createElement(
                    'span',
                    null,
                    '\u6388\u6743\u7F16\u7801\uFF1A'
                ),
                authorize_num
            ),
            React.createElement(
                'li',
                null,
                React.createElement(
                    'span',
                    null,
                    '\u6388\u6743\u671F\u9650\uFF1A'
                ),
                authorize_start && authorize_end ? moment(authorize_start).format('YYYY-MM-DD') + '  ~  ' + moment(authorize_end).format('YYYY-MM-DD') : null
            ),
            add_field && diyList.length ? React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    _divider2.default,
                    { style: { fontSize: 14 }, orientation: 'left', dashed: true },
                    '\u81EA\u5B9A\u4E49\u5B57\u6BB5'
                ),
                diyList.map(function (item, index) {
                    return React.createElement(
                        'li',
                        { key: index },
                        React.createElement(
                            'span',
                            null,
                            item.fieldname,
                            '\uFF1A'
                        ),
                        JSON.parse(add_field)[item.fieldvalue]
                    );
                })
            ) : null
        )
    );
};
//授权店铺
var AuthorizedShops = function AuthorizedShops(authorizedShops, that) {
    return React.createElement(
        'div',
        { className: 'authorized-shops' },
        React.createElement(
            'ul',
            { className: 'items' },
            authorizedShops.list.length ? authorizedShops.list.map(function (item, index) {
                return React.createElement(
                    'li',
                    { key: index, className: 'item' },
                    React.createElement(
                        'h4',
                        { className: 'shop-name' },
                        item.shop_name,
                        React.createElement(
                            'span',
                            null,
                            item.wangwang
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'img-box' },
                        (0, _platform2.default)(item.platform_code)
                    ),
                    React.createElement(
                        'div',
                        { className: 'shop-url' },
                        React.createElement(
                            'span',
                            null,
                            '\u5E97\u94FA\u9996\u9875\u5730\u5740\uFF1A'
                        ),
                        React.createElement(
                            'a',
                            { target: '_blank', href: item.shop_url },
                            item.shop_url
                        )
                    )
                );
            }) : React.createElement(
                'li',
                null,
                React.createElement(_alert2.default, { message: '\u6682\u65E0\u6570\u636E', type: 'warning' })
            )
        ),
        React.createElement(
            'div',
            { className: 'get-data-box' },
            authorizedShops.show == '1' ? React.createElement(
                _button2.default,
                { onClick: that.getAuthorizedShops },
                '\u52A0\u8F7D\u66F4\u591A...'
            ) : null
        )
    );
};
//销售数据
var SalesData = function SalesData(salesData, that) {
    var totalNum = salesData.totalNum,
        pageNo = salesData.pageNo,
        pageSize = salesData.pageSize,
        list = salesData.list;

    var columns = [{
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        render: function render(text, item, index) {
            return index + 1;
        }
    }, {
        title: '月份',
        dataIndex: 'daydate',
        key: 'daydate'
    }, {
        title: '销售额',
        dataIndex: 'daymoney',
        key: 'daymoney',
        render: function render(text) {
            return '\xA5 ' + _lib2.default.formatThousandMoney(text);
        }
    }, {
        title: '环比',
        dataIndex: 'HB',
        key: 'HB',
        render: function render(text) {
            return React.createElement(
                'div',
                null,
                text ? +text > 0 ? React.createElement(_icon2.default, { style: { color: '#F5222D' }, type: 'caret-up' }) : React.createElement(_icon2.default, { style: { color: '#52C41A' }, type: 'caret-down' }) : null,
                Math.abs(text) || '--'
            );
        }
    }];
    return React.createElement(
        'div',
        { className: 'sales-data' },
        React.createElement(
            'div',
            { className: 'table-box' },
            React.createElement(_table2.default, { rowKey: 'createtime', pagination: false, columns: columns, dataSource: list })
        ),
        React.createElement(
            'div',
            { className: 'footer' },
            React.createElement(
                'div',
                { className: 'info' },
                '\u5171 ' + totalNum + ' \u6761\u8BB0\u5F55 '
            ),
            React.createElement(_pagination2.default, { size: 'small', pageSize: pageSize, current: pageNo, total: totalNum, onChange: that.onSalesDataPagination, onShowSizeChange: that.onSalesDataPaginationSize, showSizeChanger: true, showQuickJumper: true })
        )
    );
};
//活动情况
var Activity = function Activity(activity, that) {
    var date = activity.date,
        list = activity.list,
        show = activity.show;

    var dot = React.createElement('span', { className: 'dot' });
    return React.createElement(
        'div',
        { className: 'activity' },
        React.createElement(
            'div',
            { className: 'activity-title' },
            React.createElement(
                'span',
                null,
                '\u7533\u8BF7\u65F6\u95F4\uFF1A'
            ),
            React.createElement(RangePicker, { disabledDate: function disabledDate(current) {
                    return current && current > moment();
                }, value: date, onChange: function onChange(e) {
                    return that.activityRangePicker(e);
                } })
        ),
        React.createElement(
            'div',
            { className: 'time-line-box' },
            React.createElement(
                _timeline2.default,
                null,
                list.length ? list.map(function (item, index) {
                    return React.createElement(
                        _timeline2.default.Item,
                        { key: index, dot: dot },
                        React.createElement(
                            'dl',
                            null,
                            React.createElement(
                                'dt',
                                null,
                                moment(item.createtime).format('YYYY年MM月DD日 HH:mm:ss')
                            ),
                            React.createElement(
                                'dd',
                                { className: 'shop-name' },
                                '\u5E97\u94FA\u540D\u79F0\uFF1A',
                                item.shop_name
                            ),
                            React.createElement(
                                'dd',
                                null,
                                '\u6D3B\u52A8\u4E3B\u9898\uFF1A',
                                item.campaign_name
                            ),
                            React.createElement(
                                'dd',
                                null,
                                '\u6D3B\u52A8\u65F6\u95F4\uFF1A',
                                moment(item.start_time).format('YYYY年MM月DD日 HH:mm:ss'),
                                ' ~ ',
                                moment(item.end_time).format('YYYY年MM月DD日 HH:mm:ss')
                            ),
                            React.createElement(
                                'dd',
                                null,
                                '\u6D3B\u52A8\u4EA7\u54C1\u6570\uFF1A',
                                item.act_count
                            )
                        )
                    );
                }) : React.createElement(
                    _timeline2.default.Item,
                    { dot: dot },
                    '\u6682\u65E0\u6570\u636E'
                )
            ),
            React.createElement(
                'div',
                { className: 'get-data-box' },
                show == '1' ? React.createElement(
                    _button2.default,
                    { onClick: function onClick() {
                            return that.getActivityList();
                        } },
                    '\u52A0\u8F7D\u66F4\u591A...'
                ) : null
            )
        )
    );
};
//订单异常情况
var AbnormalOrders = function AbnormalOrders(abnormalOrders, that) {
    var date = abnormalOrders.date,
        list = abnormalOrders.list,
        show = abnormalOrders.show;

    var dot = React.createElement('span', { className: 'dot' });
    return React.createElement(
        'div',
        { className: 'abnormal-orders' },
        React.createElement(
            'div',
            { className: 'abnormal-orders-title' },
            React.createElement(
                'span',
                null,
                '\u7533\u8BF7\u65F6\u95F4\uFF1A'
            ),
            React.createElement(RangePicker, { disabledDate: function disabledDate(current) {
                    return current && current > moment();
                }, value: date, onChange: function onChange(e) {
                    return that.abnormalOrdersRangePicker(e);
                } })
        ),
        React.createElement(
            'div',
            { className: 'time-line-box' },
            React.createElement(
                _timeline2.default,
                null,
                list.length ? list.map(function (item, index) {
                    return React.createElement(
                        _timeline2.default.Item,
                        { key: index, dot: dot },
                        React.createElement(
                            'h6',
                            null,
                            moment(item.createtime).format('YYYY年MM月DD日 HH:mm:ss')
                        ),
                        React.createElement(
                            'div',
                            { className: 'item' },
                            React.createElement(
                                'p',
                                { className: 'item-title' },
                                '\u5356\u5BB6\u65FA\u65FA\uFF1A',
                                item.wangwang
                            ),
                            React.createElement(
                                'div',
                                { className: 'item-num-sum' },
                                React.createElement(
                                    'span',
                                    null,
                                    '\u8BA2\u5355\u7F16\u53F7\uFF1A',
                                    item.tid
                                ),
                                React.createElement(
                                    'span',
                                    null,
                                    '\u8BA2\u5355\u91D1\u989D\uFF1A\xA5',
                                    _lib2.default.formatThousandMoney(item.itemprice)
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'item-info' },
                                React.createElement('img', { src: item.itempic }),
                                React.createElement(
                                    'div',
                                    { className: 'product-info' },
                                    React.createElement(
                                        'p',
                                        { style: { display: 'flex', color: '#9E7E6B' } },
                                        React.createElement(
                                            'span',
                                            { style: { whiteSpace: 'nowrap' } },
                                            '\u5546\u54C1\u540D\u79F0\uFF1A'
                                        ),
                                        React.createElement(
                                            'span',
                                            null,
                                            item.itemtitle
                                        )
                                    ),
                                    React.createElement(
                                        'p',
                                        { style: { display: 'flex', color: '#9E7E6B' } },
                                        React.createElement(
                                            'span',
                                            { style: { whiteSpace: 'nowrap' } },
                                            'SKU\u4FE1\u606F\uFF1A'
                                        ),
                                        React.createElement(
                                            'span',
                                            null,
                                            item.itemskuprop
                                        )
                                    ),
                                    React.createElement(
                                        'p',
                                        { style: { display: 'flex' } },
                                        React.createElement(
                                            'span',
                                            { style: { whiteSpace: 'nowrap' } },
                                            '\u6240\u5C5E\u4EA7\u54C1\uFF1A'
                                        ),
                                        React.createElement(
                                            'span',
                                            null,
                                            item.productMessage
                                        )
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        '\u6700\u4F4E\u6210\u4EA4\u4EF7\uFF1A\xA5',
                                        _lib2.default.formatThousandMoney(item.floorTransactionPrice)
                                    ),
                                    item.lowpricemessage ? React.createElement(_alert2.default, { message: item.lowpricemessage, type: 'error', showIcon: true }) : null
                                )
                            )
                        )
                    );
                }) : React.createElement(
                    _timeline2.default.Item,
                    { dot: dot },
                    '\u6682\u65E0\u6570\u636E'
                )
            ),
            React.createElement(
                'div',
                { className: 'get-data-box' },
                show == '1' ? React.createElement(
                    _button2.default,
                    { onClick: function onClick(e) {
                            that.getAbnormalOrdersList();
                        } },
                    '\u52A0\u8F7D\u66F4\u591A...'
                ) : null
            )
        )
    );
};
var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        id = _that$state.id,
        visible = _that$state.visible,
        baseInfo = _that$state.baseInfo,
        diyList = _that$state.diyList,
        activeKey = _that$state.activeKey,
        authorizedShops = _that$state.authorizedShops,
        salesData = _that$state.salesData,
        activity = _that$state.activity,
        abnormalOrders = _that$state.abnormalOrders;

    return React.createElement(
        _drawer2.default,
        {
            className: 'client-detail',
            title: Title(baseInfo),
            placement: 'right',
            width: 715
            // maskClosable={false}
            , onClose: that.onClose,
            visible: visible
        },
        React.createElement(
            _tabs2.default,
            { activeKey: activeKey, onChange: function onChange(activeKey) {
                    return that.onTabsChange(activeKey);
                } },
            React.createElement(
                TabPane,
                { tab: '经销商档案', key: '1' },
                DealersInfo(baseInfo, diyList)
            ),
            React.createElement(
                TabPane,
                { tab: '授权店铺', key: '2' },
                AuthorizedShops(authorizedShops, that)
            ),
            React.createElement(
                TabPane,
                { tab: '销售数据', key: '3' },
                SalesData(salesData, that)
            ),
            React.createElement(
                TabPane,
                { tab: '活动情况', key: '4' },
                Activity(activity, that)
            ),
            React.createElement(
                TabPane,
                { tab: '订单异常情况', key: '5' },
                AbnormalOrders(abnormalOrders, that)
            )
        )
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=41_2059ec8dd01b6d472e36.js.map