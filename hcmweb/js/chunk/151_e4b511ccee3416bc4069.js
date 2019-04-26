(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[151],{

/***/ "./app/widget/HOC/That.js":
/*!********************************!*\
  !*** ./app/widget/HOC/That.js ***!
  \********************************/
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

var ThatMain = function ThatMain(WrapperComponent) {
    return function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "render",
            value: function render() {

                return React.createElement(WrapperComponent, this.props.that);
            }
        }]);

        return _class;
    }(React.Component);
};
exports.default = ThatMain;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/user/registered/tpl.js":
/*!*******************************************!*\
  !*** ./app/widget/user/registered/tpl.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@3.10.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _progress = __webpack_require__(/*! antd/es/progress */ "./node_modules/_antd@3.10.1@antd/es/progress/index.js");

var _progress2 = _interopRequireDefault(_progress);

var _cascader = __webpack_require__(/*! antd/es/cascader */ "./node_modules/_antd@3.10.1@antd/es/cascader/index.js");

var _cascader2 = _interopRequireDefault(_cascader);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _steps = __webpack_require__(/*! antd/es/steps */ "./node_modules/_antd@3.10.1@antd/es/steps/index.js");

var _steps2 = _interopRequireDefault(_steps);

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@3.10.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/progress/style/css */ "./node_modules/_antd@3.10.1@antd/es/progress/style/css.js");

__webpack_require__(/*! antd/es/cascader/style/css */ "./node_modules/_antd@3.10.1@antd/es/cascader/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/steps/style/css */ "./node_modules/_antd@3.10.1@antd/es/steps/style/css.js");

var _That = __webpack_require__(/*! ../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Copyright = __webpack_require__(/*! ../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _chinaCode = __webpack_require__(/*! ../../../static/chinaCode.json */ "./app/static/chinaCode.json");

var _chinaCode2 = _interopRequireDefault(_chinaCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Step = _steps2.default.Step;
var FormItem = _form2.default.Item;

var steps = [{
    title: '完善信息',
    description: React.createElement(
        'div',
        { className: 'stepbox-description' },
        React.createElement(
            'p',
            null,
            '\u8BF7\u586B\u5199\u516C\u53F8\u4FE1\u606F'
        ),
        React.createElement(
            'p',
            null,
            '\u548C\u5BF9\u63A5\u4EBA\u4FE1\u606F'
        )
    )

}, {
    title: '账号注册',
    description: React.createElement(
        'div',
        { className: 'stepbox-description' },
        React.createElement(
            'p',
            null,
            '\u8BF7\u4F7F\u7528\u624B\u673A\u53F7\u6CE8\u518C'
        ),
        React.createElement(
            'p',
            null,
            '\u767B\u5F55\u8D26\u53F7'
        )
    )
}, {
    title: '注册成功',
    description: React.createElement(
        'div',
        { className: 'stepbox-description' },
        React.createElement(
            'p',
            null,
            '\u767B\u5F55\u8D26\u53F7'
        ),
        React.createElement(
            'p',
            null,
            '\u5DF2\u6210\u529F\u6CE8\u518C'
        )
    )
}];
var Tpl = (0, _That2.default)(function (that) {
    var regstatus = that.state.regstatus;


    return React.createElement(
        'div',
        { className: 'registered' },
        React.createElement(
            'header',
            null,
            React.createElement('img', { style: { verticalAlign: 'middle', height: '34px' }, src: '../../../img/logo.png' })
        ),
        regstatus ? React.createElement(RegHome, { that: that }) : React.createElement(Stepbox, { that: that }),
        React.createElement(_Copyright2.default, { clazzName: 'copyright' })
    );
});
var Stepbox = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        current = _that$state.current,
        yzm = _that$state.yzm,
        AqPercent = _that$state.AqPercent,
        AqPercentx = _that$state.AqPercentx,
        AqPercentSum = _that$state.AqPercentSum;
    var getFieldDecorator = that.props.form.getFieldDecorator;

    var shows = that.state.shows ? " none " : "block"; //验证码发送提示
    var style = {
        display: shows
    };
    var forgetx = that.state.forgetxs ? " block " : "none"; //用户名是否正确发送提示
    var forgetxs = {
        display: forgetx
    };
    var forgetmmClock = { color: that.state.forgetmmClock };
    var axc = [{
        content: React.createElement(
            'div',
            { className: 'regisBox' },
            React.createElement(
                'div',
                { className: 'FORMtit' },
                React.createElement(
                    'h4',
                    null,
                    '\u516C\u53F8\u4FE1\u606F'
                )
            ),
            React.createElement(
                'div',
                { className: 'FORMtit TJBOX' },
                ' ',
                React.createElement(
                    'div',
                    { className: 'FORMus fox' },
                    React.createElement(
                        'b',
                        { style: { color: "red" } },
                        '*'
                    ),
                    ' \u516C\u53F8\u7A0E\u53F7'
                ),
                React.createElement(
                    FormItem,
                    { className: 'tops' },
                    getFieldDecorator('paragraph')(React.createElement(_input2.default, { className: 'user-name',
                        placeholder: '\u8BF7\u8F93\u5165\u516C\u53F8\u7A0E\u53F7'

                    }))
                ),
                React.createElement(
                    _button2.default,
                    { className: 'TJXX', onClick: function onClick() {
                            return that.onBlurx();
                        } },
                    '\u67E5\u627E'
                )
            ),
            React.createElement(
                'div',
                { className: 'FORMtit' },
                ' ',
                React.createElement(
                    'div',
                    { className: 'FORMus' },
                    '\u516C\u53F8\u540D\u79F0'
                ),
                React.createElement(
                    FormItem,
                    { className: 'tops' },
                    getFieldDecorator('name', {
                        initialValue: that.state.paragraphName || ""
                    })(React.createElement(_input2.default, { className: 'user-name',
                        type: 'text',
                        maxLength: '50',
                        disabled: true,
                        placeholder: '\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0'
                    }))
                )
            ),
            React.createElement(
                'div',
                { className: 'FORMtit', id: 'GSDQ' },
                ' ',
                React.createElement(
                    'div',
                    { className: 'FORMus fox' },
                    React.createElement(
                        'b',
                        { style: { color: "red" } },
                        '*'
                    ),
                    ' \u516C\u53F8\u5730\u533A'
                ),
                React.createElement(
                    FormItem,
                    { className: 'topsx' },
                    getFieldDecorator('region')(React.createElement(_cascader2.default, {
                        getPopupContainer: function getPopupContainer() {
                            return document.getElementById('GSDQ');
                        },
                        fieldNames: { label: 'label', value: "label" }, placeholder: '\u7701/\u5E02/\u533A\uFF08\u53BF\uFF09', options: _chinaCode2.default }))
                )
            ),
            React.createElement(
                'div',
                { className: 'FORMtit' },
                ' ',
                React.createElement(
                    'div',
                    { className: 'FORMus' },
                    '\u8BE6\u60C5\u5730\u5740'
                ),
                React.createElement(
                    FormItem,
                    { className: 'tops' },
                    getFieldDecorator('Details')(React.createElement('textarea', { className: 'topsx', maxLength: '100', placeholder: '\u8BF7\u8F93\u5165\u8BE6\u60C5\u5730\u5740' }))
                )
            ),
            React.createElement(
                'div',
                { className: 'FORMtit' },
                React.createElement(
                    'h4',
                    null,
                    '\u516C\u53F8\u4FE1\u606F'
                )
            ),
            React.createElement(
                'div',
                { className: 'FORMtit' },
                ' ',
                React.createElement(
                    'div',
                    { className: 'FORMus fos' },
                    React.createElement(
                        'b',
                        { style: { color: "red" } },
                        '*'
                    ),
                    ' \u5BF9\u63A5\u4EBA\u59D3\u540D'
                ),
                React.createElement(
                    FormItem,
                    { className: 'tops' },
                    getFieldDecorator('TakeOve')(React.createElement(_input2.default, { className: 'user-name',
                        maxLength: '32',
                        setfieldsvalue: '\u8BF7\u8F93\u5165\u5BF9\u63A5\u4EBA\u59D3\u540D'
                    }))
                )
            ),
            React.createElement(
                'div',
                { className: 'FORMtit' },
                ' ',
                React.createElement(
                    'div',
                    { className: 'FORMus fob' },
                    React.createElement(
                        'b',
                        { style: { color: "red" } },
                        '*'
                    ),
                    ' \u8054\u7CFB\u65B9\u5F0F'
                ),
                React.createElement(
                    FormItem,
                    { className: 'tops' },
                    getFieldDecorator('ContactInformation')(React.createElement(_input2.default, { className: 'user-name',
                        maxLength: '14',
                        setfieldsvalue: '\u8BF7\u8F93\u5165\u8054\u7CFB\u65B9\u5F0F'
                    }))
                )
            ),
            React.createElement(
                'div',
                { className: 'FORMtit' },
                React.createElement(
                    FormItem,
                    null,
                    getFieldDecorator('SucceBTN', {
                        initialValue: "提交信息"
                    })(React.createElement(
                        _button2.default,
                        { className: 'TJBTN', type: 'primary', htmlType: 'submit' },
                        '\u63D0\u4EA4\u4FE1\u606F'
                    )),
                    React.createElement(
                        _button2.default,
                        { className: 'FHBTN', onClick: function onClick() {
                                return that.BACKs();
                            }, type: 'primary' },
                        '\u8FD4\u56DE'
                    )
                )
            )
        )
    }, {
        content: React.createElement(
            'div',
            { className: 'regisBox' },
            React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'userTS', style: forgetxs },
                    ' ',
                    React.createElement('img', { src: '../../../img/icon_Login_failure.png' }),
                    ' \u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\u3002'
                )
            ),
            React.createElement(
                'div',
                { className: 'FORMtit' },
                React.createElement(
                    'div',
                    { className: 'FORMus' },
                    '\u624B\u673A\u53F7'
                ),
                React.createElement(
                    FormItem,
                    { className: 'tops' },
                    getFieldDecorator('pones')(React.createElement(_input2.default, { className: 'user-name',
                        maxLength: '11',
                        placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7'
                    }))
                )
            ),
            React.createElement(
                'div',
                { className: 'FORMtit' },
                React.createElement(
                    'div',
                    { className: 'FORMus' },
                    '\u9A8C\u8BC1\u7801'
                ),
                React.createElement(
                    FormItem,
                    { className: 'topsxs' },
                    getFieldDecorator('yzms')(React.createElement(_input2.default, { className: 'user-yzm',
                        maxLength: '6',
                        placeholder: '\u8F93\u5165\u9A8C\u8BC1\u7801'
                    }))
                ),
                React.createElement(
                    _button2.default,
                    { className: 'get-code', onClick: function onClick() {
                            return that.getAuthCode();
                        } },
                    yzm
                )
            ),
            React.createElement(
                'div',
                { className: 'ForgetTS', style: style },
                React.createElement(
                    'span',
                    null,
                    React.createElement('img', { src: '../../../img/icon_Login_success.png' })
                ),
                React.createElement(
                    'span',
                    null,
                    '\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\u5230\u4F60\u7684\u624B\u673A\uFF0C5\u5206\u949F\u5185\u8F93\u5165\u6709\u6548\u9A8C\u8BC1\u7801\u7B49\u540C\u4E8E\u5BC6\u7801\uFF0C\u6253\u6B7B\u4E5F\u4E0D\u80FD\u544A\u8BC9\u522B\u4EBA!'
                )
            ),
            React.createElement(
                'div',
                { className: 'FORMtit topwd' },
                React.createElement(
                    'div',
                    { className: 'FORMus' },
                    '\u767B\u5F55\u5BC6\u7801'
                ),
                React.createElement(
                    FormItem,
                    { className: 'tops ' },
                    getFieldDecorator('pwd')(React.createElement(_input2.default, { className: 'user-name',
                        placeholder: '\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801',
                        type: 'password',
                        onBlur: function onBlur() {
                            return that.onBlur();
                        }
                    }))
                )
            ),
            React.createElement(
                'div',
                { className: 'FORMtit Gopwd' },
                React.createElement(
                    'div',
                    { className: 'FORMus' },
                    '\u786E\u8BA4\u767B\u5F55\u5BC6\u7801'
                ),
                React.createElement(
                    FormItem,
                    { className: 'tops' },
                    getFieldDecorator('pwds')(React.createElement(_input2.default, { className: 'user-name',
                        type: 'password',
                        placeholder: '\u8BF7\u786E\u8BA4\u767B\u5F55\u5BC6\u7801'
                    }))
                )
            ),
            React.createElement(
                'div',
                { className: 'forgetmm' },
                React.createElement(
                    'div',
                    { style: forgetmmClock },
                    '\u5F3A\u5EA6\uFF1A',
                    AqPercentx
                ),
                React.createElement(
                    _tooltip2.default,
                    null,
                    React.createElement(_progress2.default, { percent: AqPercentSum })
                ),
                React.createElement(
                    'div',
                    null,
                    '\u8BF7\u81F3\u5C11\u8F93\u5165 6 \u4E2A\u5B57\u7B26\u3002\u8BF7\u4E0D\u8981\u4F7F\u7528\u5BB9\u6613\u88AB\u731C\u5230\u7684\u5BC6\u7801\u3002'
                )
            ),
            React.createElement(
                'div',
                { className: 'FORMtit' },
                React.createElement(
                    FormItem,
                    null,
                    getFieldDecorator('SucceBTN', {
                        initialValue: "提交信息"
                    })(React.createElement(
                        _button2.default,
                        { className: 'TJBTN', type: 'primary', onClick: function onClick() {
                                return that.SUBDl();
                            }, htmlType: 'submit' },
                        '\u63D0\u4EA4\u4FE1\u606F'
                    )),
                    React.createElement(
                        _button2.default,
                        { className: 'FHBTN', type: 'primary', onClick: function onClick() {
                                return that.prev();
                            } },
                        '\u8FD4\u56DE'
                    )
                )
            )
        )
    }, {
        content: React.createElement(
            'div',
            { className: 'regisBox' },
            React.createElement(
                'div',
                { className: 'NOponetits' },
                React.createElement('img', { src: '../../../img/icon_Login_success.png' }),
                React.createElement(
                    'h4',
                    null,
                    '\u6CE8\u518C\u6210\u529F'
                ),
                React.createElement(
                    'div',
                    { className: 'NOponeti' },
                    React.createElement(
                        'h6',
                        null,
                        '\u767B\u5F55\u65B9\u5F0F'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '1\u3001\u4F7F\u7528\u7ED1\u5B9A\u624B\u673A\u53F7\u7684\u5FAE\u4FE1\u626B\u7801\u767B\u5F55'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '2 \u3001\u4F7F\u7528\u624B\u673A\u53F7\u548C\u5BC6\u7801\u767B\u5F55'
                    )
                )
            ),
            React.createElement(
                _button2.default,
                { className: 'TJBTN', onClick: function onClick() {
                        return that.Gdl();
                    }, type: 'primary', style: { marginLeft: 130 } },
                '\u7ACB\u5373\u767B\u5F55'
            )
        )
    }];

    return React.createElement(
        'div',
        { className: 'regbox' },
        React.createElement(
            'div',
            { className: 'stepbox' },
            React.createElement(
                _steps2.default,
                { current: that.state.currents },
                steps.map(function (item) {
                    return React.createElement(Step, { key: item.title, description: item.description, title: item.title });
                })
            ),
            React.createElement(
                _form2.default,
                { onSubmit: that.ForgetSubmit, className: 'forget-form' },
                React.createElement(
                    'div',
                    { className: 'steps-content' },
                    axc[that.state.currents].content
                )
            )
        )
    );
});
//邀请注册首页信息
var RegHome = (0, _That2.default)(function (that) {
    var company = that.state.company;

    return React.createElement(
        'div',
        { className: 'content' },
        React.createElement(
            'h3',
            { className: 'title' },
            '\u5165\u9A7B\u9080\u8BF7:'
        ),
        React.createElement(
            'div',
            { className: 'info' },
            React.createElement(
                'h4',
                { className: 'company' },
                company
            ),
            React.createElement(
                'p',
                { className: 'prompt' },
                '\u6B63\u5728\u4F7F\u7528BRM\u9E70\u667A\u6E20\u9053\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u9080\u8BF7\u4F60\u5165\u9A7B\uFF0C\u6210\u4E3A\u5176\u540D\u4E0B\u7ECF\u9500\u5546'
            ),
            React.createElement(
                'div',
                { className: 'href-box' },
                React.createElement(
                    'strong',
                    null,
                    '\u4F60\u662F\u5426\u62E5\u6709BRM\u8D26\u53F7\uFF1A'
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement(
                        'span',
                        null,
                        '\u6211\u8FD8\u672A\u62E5\u6709BRM\u8D26\u53F7'
                    ),
                    React.createElement(
                        'a',
                        { onClick: function onClick() {
                                return that.regStatus(false);
                            } },
                        '\u7ACB\u5373\u6CE8\u518C >'
                    )
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement(
                        'span',
                        null,
                        '\u6211\u5DF2\u62E5\u6709BRM\u8D26\u53F7'
                    ),
                    React.createElement(
                        'a',
                        { href: '/user.html#/loginc/' + that.props.match.params.id },
                        '\u7ACB\u5373\u767B\u9646 >'
                    )
                )
            )
        )
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=151_e4b511ccee3416bc4069.js.map