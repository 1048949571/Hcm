(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

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

/***/ "./app/widget/index/Brand/PriceMonitor/tpl.js":
/*!****************************************************!*\
  !*** ./app/widget/index/Brand/PriceMonitor/tpl.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _timePicker = __webpack_require__(/*! antd/es/time-picker */ "./node_modules/_antd@3.10.1@antd/es/time-picker/index.js");

var _timePicker2 = _interopRequireDefault(_timePicker);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _alert = __webpack_require__(/*! antd/es/alert */ "./node_modules/_antd@3.10.1@antd/es/alert/index.js");

var _alert2 = _interopRequireDefault(_alert);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@3.10.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _avatar = __webpack_require__(/*! antd/es/avatar */ "./node_modules/_antd@3.10.1@antd/es/avatar/index.js");

var _avatar2 = _interopRequireDefault(_avatar);

var _dropdown = __webpack_require__(/*! antd/es/dropdown */ "./node_modules/_antd@3.10.1@antd/es/dropdown/index.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _menu = __webpack_require__(/*! antd/es/menu */ "./node_modules/_antd@3.10.1@antd/es/menu/index.js");

var _menu2 = _interopRequireDefault(_menu);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/time-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/time-picker/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/alert/style/css */ "./node_modules/_antd@3.10.1@antd/es/alert/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/avatar/style/css */ "./node_modules/_antd@3.10.1@antd/es/avatar/style/css.js");

__webpack_require__(/*! antd/es/dropdown/style/css */ "./node_modules/_antd@3.10.1@antd/es/dropdown/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/menu/style/css */ "./node_modules/_antd@3.10.1@antd/es/menu/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        _that$state$dataList = _that$state.dataList,
        dataList = _that$state$dataList === undefined ? [] : _that$state$dataList,
        totalElements = _that$state.totalElements,
        pageSize = _that$state.pageSize,
        pageNum = _that$state.pageNum;

    return React.createElement(
        _Layout2.default,
        {
            breadcrumbList: ['数据中心', '售价监控'],
            linkList: ['', '']
        },
        React.createElement(
            'div',
            { className: 'price-monitor' },
            React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                    'ul',
                    { className: 'items' },
                    dataList.length ? dataList.map(function (item, index) {
                        var id = item.id,
                            productClassifyName = item.productClassifyName,
                            platform_name = item.platform_name,
                            frequency = item.frequency,
                            monitorDate = item.monitorDate;

                        return React.createElement(
                            'li',
                            { onClick: function onClick(e) {
                                    if (e.target.tagName.toLocaleLowerCase() !== 'a') {
                                        window.location.href = '/index.html#/MonitorInfo/' + id;
                                    }
                                }, className: 'item', key: index },
                            React.createElement(
                                'div',
                                { className: 'action' },
                                React.createElement(
                                    _dropdown2.default,
                                    { placement: 'bottomRight', overlay: React.createElement(
                                            _menu2.default,
                                            null,
                                            React.createElement(
                                                _menu2.default.Item,
                                                null,
                                                React.createElement(
                                                    'a',
                                                    { className: 'A-COLOR', onClick: function onClick() {
                                                            return that.editVisible(true, item);
                                                        } },
                                                    React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_edit.png' }),
                                                    '\u7F16\u8F91'
                                                )
                                            ),
                                            React.createElement(
                                                _menu2.default.Item,
                                                null,
                                                React.createElement(
                                                    'a',
                                                    { className: 'A-COLOR', onClick: function onClick() {
                                                            return that.chAngeHis(item);
                                                        } },
                                                    React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_history.png' }),
                                                    '\u53D8\u66F4\u5386\u53F2'
                                                )
                                            )
                                        ) },
                                    React.createElement(_icon2.default, { onClick: function onClick(e) {
                                            e.stopPropagation();
                                        }, type: 'ellipsis' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { style: { paddingBottom: '20px' } },
                                React.createElement(
                                    _avatar2.default,
                                    { style: { backgroundColor: '#108CEE', margin: '0px 20px' }, size: 40 },
                                    productClassifyName.substr(0, 1)
                                ),
                                React.createElement(
                                    'span',
                                    null,
                                    productClassifyName
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'footer-buts' },
                                React.createElement(
                                    'span',
                                    null,
                                    frequency
                                ),
                                React.createElement(_divider2.default, { type: 'vertical' }),
                                React.createElement(
                                    'span',
                                    null,
                                    monitorDate
                                )
                            )
                        );
                    }) : React.createElement(
                        'li',
                        { style: { width: '100%' } },
                        React.createElement(_alert2.default, { style: { textAlign: 'center' }, message: '\u6682\u65E0\u6570\u636E', type: 'error' })
                    )
                ),
                React.createElement(
                    'div',
                    { style: { textAlign: 'center' }, className: 'addbut' },
                    !dataList.length || pageNum * pageSize >= totalElements ? null : React.createElement(
                        _button2.default,
                        { onClick: function onClick() {
                                return that.getMore();
                            } },
                        '\u52A0\u8F7D\u66F4\u591A...'
                    )
                )
            ),
            React.createElement(TimeModal, { that: that })
        )
    );
});

exports.default = Tpl;


var TimeModal = (0, _That2.default)(function (that) {
    var _that$state2 = that.state,
        visible = _that$state2.visible,
        classfiyUpdate = _that$state2.classfiyUpdate;

    var format = 'HH:mm';
    return React.createElement(
        _modal2.default,
        {
            title: '\u7F16\u8F91',
            visible: visible,
            maskClosable: false,
            onOk: function onOk() {
                return that.editSubmit();
            },
            onCancel: function onCancel() {
                return that.editVisible(false);
            }
            // className='YellowWhite'
            , okButtonProps: { className: 'btn2-main' },
            cancelButtonProps: { className: 'btn2-sub' },
            filterOption: function filterOption(input, option) {
                return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
            }
        },
        React.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center', paddingBottom: '20px' } },
            React.createElement(
                'span',
                { style: { flexShrink: 0, minWidth: '100px', textAlign: 'right' } },
                '\u9891\u6B21\uFF1A'
            ),
            React.createElement(
                _select2.default,
                { onChange: function onChange(e) {
                        return that.editOnchange(e, 'frequency');
                    }, style: { width: '100%' }, value: classfiyUpdate.frequency },
                React.createElement(
                    Option,
                    { value: '1次/24H' },
                    '1\u6B21/24H'
                )
            )
        ),
        React.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center', paddingBottom: '20px' } },
            React.createElement(
                'span',
                { style: { flexShrink: 0, minWidth: '100px', textAlign: 'right' } },
                '\u76D1\u63A7\u65F6\u95F4\uFF1A'
            ),
            React.createElement(_timePicker2.default, { style: { width: '100%' }, value: classfiyUpdate.monitorDate, onChange: function onChange(e) {
                    return that.editOnchange(e, 'monitorDate');
                }, format: format, minuteStep: 60 })
        )
    );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=91_e47a7162a3e780e377d6.js.map