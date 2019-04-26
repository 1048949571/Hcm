(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

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

/***/ "./app/widget/components/Layout/index.js":
/*!***********************************************!*\
  !*** ./app/widget/components/Layout/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

var _Copyright = __webpack_require__(/*! ../Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

__webpack_require__(/*! ./index.less */ "./app/widget/components/Layout/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightBox = function RightBox(props) {
  return React.createElement(
    'div',
    { className: 'layout-wrapper ' + (props.className || '') },
    React.createElement(
      'div',
      { className: 'header-wrapper' },
      React.createElement(
        _breadcrumb2.default,
        { className: 'breadcrumb' },
        props.breadcrumbList.map(function (v, i) {
          if (props.linkList[i] === '') {
            return React.createElement(
              _breadcrumb2.default.Item,
              { key: v },
              v
            );
          }
          return React.createElement(
            _breadcrumb2.default.Item,
            {
              href: 'javascript:;',
              key: v },
            React.createElement(
              'span',
              { onClick: function onClick() {
                  props.history.go(-props.linkList[i]);
                } },
              v
            )
          );
        })
      )
    ),
    React.createElement(
      'div',
      { className: 'layout-content' },
      props.children
    ),
    React.createElement(
      'div',
      { className: 'copyright' },
      React.createElement(_Copyright2.default, null)
    )
  );
};

RightBox.defaultProps = {
  title: '标题',
  breadcrumbList: [],
  linkList: []
};

exports.default = RightBox;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/Layout/index.less":
/*!*************************************************!*\
  !*** ./app/widget/components/Layout/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/PendingClient/tpl.js":
/*!*****************************************************!*\
  !*** ./app/widget/index/Brand/PendingClient/tpl.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alert = __webpack_require__(/*! antd/es/alert */ "./node_modules/_antd@3.10.1@antd/es/alert/index.js");

var _alert2 = _interopRequireDefault(_alert);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! antd/es/alert/style/css */ "./node_modules/_antd@3.10.1@antd/es/alert/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        dataList = _that$state.dataList,
        dealerVerify = _that$state.dealerVerify;

    return React.createElement(
        _Layout2.default,
        {
            breadcrumbList: ['客户盘点', '客户信息', '待审批客户'],
            linkList: ['', '1', ''],
            history: that.props.history
        },
        React.createElement(
            'div',
            { className: 'pendingclient' },
            React.createElement(
                'ul',
                { className: 'content' },
                dataList.length ? dataList.map(function (item, index) {
                    var match_info = item.match_info,
                        dealername = item.dealername,
                        _item$match_id = item.match_id,
                        match_id = _item$match_id === undefined ? '' : _item$match_id,
                        dutynumber = item.dutynumber,
                        take_people = item.take_people,
                        apply_date = item.apply_date,
                        _item$province = item.province,
                        province = _item$province === undefined ? '' : _item$province,
                        _item$city = item.city,
                        city = _item$city === undefined ? '' : _item$city,
                        _item$strict = item.strict,
                        strict = _item$strict === undefined ? '' : _item$strict,
                        _item$address = item.address,
                        address = _item$address === undefined ? '' : _item$address,
                        contact = item.contact;

                    return React.createElement(
                        'li',
                        { key: index, className: 'item' },
                        React.createElement(
                            'h6',
                            null,
                            '\u5BA2\u6237\u540D\u79F0:',
                            React.createElement(
                                'span',
                                null,
                                dealername
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'info' },
                            React.createElement(
                                'div',
                                { className: 'left' },
                                React.createElement(
                                    'p',
                                    null,
                                    '\u516C\u53F8\u7A0E\u53F7\uFF1A',
                                    dutynumber
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    '\u5BF9\u63A5\u4EBA\u59D3\u540D\uFF1A',
                                    take_people
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    '\u7533\u8BF7\u65F6\u95F4\uFF1A',
                                    moment(apply_date).format('YYYY年MM月DD日 HH:mm:ss')
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'right' },
                                React.createElement(
                                    'p',
                                    null,
                                    '\u516C\u53F8\u5730\u5740\uFF1A',
                                    province + ' ' + city + ' ' + strict + ' ' + address
                                ),
                                React.createElement(
                                    'p',
                                    null,
                                    '\u8054\u7CFB\u65B9\u5F0F\uFF1A',
                                    contact
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'footer' },
                            React.createElement(
                                'div',
                                { style: { position: 'relative' }, id: 'check-client' + index, className: 'footer-info' },
                                item.webStatus == true ? React.createElement(
                                    React.Fragment,
                                    null,
                                    '\u5339\u914D\u5BA2\u6237\uFF1A',
                                    React.createElement(
                                        _select2.default,
                                        {
                                            showSearch: true,
                                            placeholder: '\u8BF7\u9009\u62E9',
                                            getPopupContainer: function getPopupContainer() {
                                                return document.getElementById('check-client' + index);
                                            },
                                            value: match_id,
                                            style: { width: 200 },
                                            onChange: function onChange(value) {
                                                return that.aChangeClient(value, index);
                                            },
                                            filterOption: function filterOption(input, option) {
                                                return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                                            }
                                        },
                                        dealerVerify.length ? React.createElement(
                                            Option,
                                            { key: '99999', value: '' },
                                            '\u65E0'
                                        ) : null,
                                        dealerVerify.length ? dealerVerify.map(function (item2, index2) {
                                            return React.createElement(
                                                Option,
                                                { key: index2, value: item2.id },
                                                item2.dealername
                                            );
                                        }) : React.createElement(
                                            Option,
                                            { disabled: true, key: null, value: null },
                                            '\u6682\u65E0\u53EF\u9009\u5BA2\u6237'
                                        )
                                    ),
                                    React.createElement(
                                        'a',
                                        { onClick: function onClick() {
                                                return that.editClient(item, index, false);
                                            } },
                                        '\u8FD4\u56DE'
                                    )
                                ) : React.createElement(
                                    React.Fragment,
                                    null,
                                    '\u81EA\u52A8\u4E3A\u4F60\u5339\u914D\u5230\u7684\u5BA2\u6237\u540D\u5355\uFF1A',
                                    React.createElement(
                                        'span',
                                        null,
                                        match_info.dealername
                                    ),
                                    React.createElement(
                                        'a',
                                        { onClick: function onClick() {
                                                return that.editClient(item, index, true);
                                            } },
                                        '\u624B\u52A8\u9009\u62E9'
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'but-box' },
                                React.createElement(
                                    _button2.default,
                                    { className: 'btn4-pass', onClick: function onClick() {
                                            return that.onSubkit(item, 'APPROVED');
                                        } },
                                    React.createElement(_icon2.default, { type: 'check-circle', theme: 'outlined' }),
                                    '\u901A\u8FC7'
                                ),
                                React.createElement(
                                    _button2.default,
                                    { className: 'btn4-reject', onClick: function onClick() {
                                            return that.onSubkit(item, 'DISAGREE');
                                        } },
                                    React.createElement(_icon2.default, { type: 'rollback', theme: 'outlined' }),
                                    '\u9A73\u56DE'
                                )
                            )
                        )
                    );
                }) : React.createElement(
                    'li',
                    { style: { width: '100%' } },
                    React.createElement(_alert2.default, { style: { textAlign: 'center' }, message: '\u6682\u65E0\u6570\u636E', type: 'error' })
                )
            )
        )
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=90_5b24f0123c22cc6d19c7.js.map