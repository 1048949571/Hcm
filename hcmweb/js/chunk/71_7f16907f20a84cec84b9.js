(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

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

/***/ "./app/widget/index/Announcements/tpl.js":
/*!***********************************************!*\
  !*** ./app/widget/index/Announcements/tpl.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _alert = __webpack_require__(/*! antd/es/alert */ "./node_modules/_antd@3.10.1@antd/es/alert/index.js");

var _alert2 = _interopRequireDefault(_alert);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@3.10.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/alert/style/css */ "./node_modules/_antd@3.10.1@antd/es/alert/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@3.10.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

var _That = __webpack_require__(/*! ../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _Copyright = __webpack_require__(/*! ../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangePicker = _datePicker2.default.RangePicker;

var Option = _select2.default.Option;
var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        dataList = _that$state.dataList,
        notice_title = _that$state.notice_title,
        user_name = _that$state.user_name,
        noticeTypeList = _that$state.noticeTypeList,
        notice_type = _that$state.notice_type,
        start_time = _that$state.start_time,
        end_time = _that$state.end_time,
        pageNo = _that$state.pageNo,
        pageSize = _that$state.pageSize,
        totalNum = _that$state.totalNum;

    var clearIconStyle = {
        width: '14px',
        height: '14px',
        opacity: 0.25,
        cursor: 'pointer'
    };
    var clearIcon = function clearIcon(fieldName) {
        return that.state[fieldName] && that.state[fieldName].length ? React.createElement(_icon2.default, {
            type: 'close-circle',
            onClick: function onClick() {
                return that.handleClearIconClick(fieldName);
            },
            style: clearIconStyle
        }) : null;
    };
    return React.createElement(
        _Layout2.default,
        {
            breadcrumbList: ['通知公告'],
            linkList: ['']
        },
        React.createElement(
            'div',
            { className: 'Announcements' },
            React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                    'div',
                    { className: 'search-box' },
                    React.createElement(
                        'div',
                        { className: 'input-box' },
                        React.createElement(
                            'div',
                            { className: 'item' },
                            React.createElement(
                                'span',
                                { className: 'lab' },
                                '\u516C\u544A\u4E3B\u9898:'
                            ),
                            React.createElement(_input2.default, { onChange: function onChange(e) {
                                    return that.chSearchIpt(e, 'notice_title');
                                }, value: notice_title, suffix: clearIcon('notice_title'), className: 'ipt' })
                        ),
                        React.createElement(
                            'div',
                            { style: { position: 'relative' }, id: 'alert-type', className: 'item' },
                            React.createElement(
                                'span',
                                { className: 'lab' },
                                '\u516C\u544A\u7C7B\u578B:'
                            ),
                            React.createElement(
                                _select2.default,
                                {
                                    style: { width: '100%' },
                                    showSearch: true,
                                    placeholder: '\u8BF7\u9009\u62E9',
                                    getPopupContainer: function getPopupContainer() {
                                        return document.getElementById('alert-type');
                                    },
                                    value: notice_type,
                                    onChange: function onChange(value, label, extra) {
                                        return that.chTreeSelect(value, label, extra, 'notice_type');
                                    },

                                    filterOption: function filterOption(input, option) {
                                        return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                                    }
                                },
                                React.createElement(
                                    Option,
                                    { value: null },
                                    '全部'
                                ),
                                noticeTypeList.map(function (item, index) {
                                    return React.createElement(
                                        Option,
                                        { key: index, value: item.id },
                                        item.dictName
                                    );
                                })
                            )
                        ),
                        React.createElement(
                            'div',
                            { style: { width: '35%', justifyContent: 'flex-end' }, className: 'item' },
                            React.createElement(
                                'span',
                                { className: 'lab' },
                                '\u63D0\u4EA4\u65F6\u95F4:'
                            ),
                            React.createElement(RangePicker, {
                                onChange: function onChange(e) {
                                    return that.onRangePicker(e);
                                },
                                value: [start_time, end_time],
                                format: 'YYYY-MM-DD'
                            })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'input-box' },
                        React.createElement(
                            'div',
                            { className: 'item' },
                            localStorage.logintype == "HCM" ? React.createElement(
                                React.Fragment,
                                null,
                                React.createElement(
                                    'span',
                                    { className: 'lab' },
                                    '\u53D1\u5E03\u4EBA:'
                                ),
                                React.createElement(_input2.default, { onChange: function onChange(e) {
                                        return that.chSearchIpt(e, 'user_name');
                                    }, value: user_name, suffix: clearIcon('user_name'), className: 'ipt' })
                            ) : null
                        ),
                        React.createElement(
                            'div',
                            { style: { justifyContent: 'flex-end' }, className: 'item' },
                            React.createElement(
                                _button2.default,
                                { className: 'btn6', onClick: function onClick(e) {
                                        return that.onSearch();
                                    } },
                                '\u67E5\u8BE2'
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'infolist' },
                    localStorage.logintype == "HCM" || localStorage.logintype == "HCMSUB" ? React.createElement(
                        'a',
                        { className: 'addbut', href: '/index.html#/AddAnnouncement' },
                        React.createElement(
                            _button2.default,
                            { style: { width: '100%' }, type: 'dashed' },
                            '\u65B0\u589E '
                        )
                    ) : null,
                    React.createElement(
                        'ul',
                        { className: 'items' },
                        dataList.length ? dataList.map(function (item, index) {
                            var notice_send_type = item.notice_send_type,
                                isread = item.isread,
                                notice_title = item.notice_title,
                                notice_content = item.notice_content,
                                notice_typename = item.notice_typename,
                                user_name = item.user_name,
                                _item$noticeDepartsLi = item.noticeDepartsList,
                                noticeDepartsList = _item$noticeDepartsLi === undefined ? [] : _item$noticeDepartsLi,
                                createtime = item.createtime,
                                noticeClassifysList = item.noticeClassifysList;

                            var div = document.createElement('div');
                            div.innerHTML = notice_content;
                            var newnoticeDepartsList = noticeDepartsList ? noticeDepartsList.map(function (item, index) {
                                return noticeDepartsList.length > 1 && noticeDepartsList.length - 1 != index ? item.depart_name + ' 、' : item.depart_name;
                            }) : null;
                            var newnoticeClassifysList = noticeClassifysList ? noticeClassifysList.map(function (item, index) {
                                return noticeClassifysList.length > 1 && noticeClassifysList.length - 1 != index ? item.product_classify_name + ' 、' : item.product_classify_name;
                            }) : null;
                            var innerText = div.innerText;
                            return React.createElement(
                                'li',
                                { key: index, className: 'item' },
                                React.createElement(
                                    'h5',
                                    { className: isread ? 'title ' : 'title state' },
                                    React.createElement(
                                        'a',
                                        { href: '/index.html#/InfoAnnouncement/' + item.id },
                                        notice_title
                                    )
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'text-info' },
                                    innerText.length > 300 ? innerText.substring(0, 300) + '...' : innerText
                                ),
                                React.createElement(
                                    'footer',
                                    null,
                                    React.createElement(
                                        'div',
                                        { style: { display: 'flex', width: '100%' } },
                                        React.createElement(
                                            'span',
                                            null,
                                            notice_typename,
                                            React.createElement('i', { style: { borderRight: "1px solid #D9D9D9", marginLeft: '16px' } })
                                        ),
                                        React.createElement(
                                            'span',
                                            null,
                                            moment(createtime).format('YYYY-MM-DD HH:mm:ss'),
                                            React.createElement('i', { style: { borderRight: "1px solid #D9D9D9", marginLeft: '16px' } })
                                        ),
                                        localStorage.logintype == "HCM" || localStorage.logintype == "HCMSUB" ? React.createElement(
                                            React.Fragment,
                                            null,
                                            React.createElement(
                                                'span',
                                                null,
                                                'From\uFF1A',
                                                user_name,
                                                React.createElement('i', { style: { borderRight: "1px solid #D9D9D9", marginLeft: '16px' } })
                                            ),
                                            React.createElement(
                                                _tooltip2.default,
                                                { overlayStyle: { maxWidth: 'inherit' }, placement: 'bottom', title: 'To' + (notice_send_type ? '品类' : '部门') + '\uFF1A' + (notice_send_type ? newnoticeClassifysList.join('') : newnoticeDepartsList.join('')) },
                                                React.createElement(
                                                    'span',
                                                    { className: 'departs' },
                                                    'To',
                                                    notice_send_type ? '品类' : '部门',
                                                    '\uFF1A',
                                                    notice_send_type ? newnoticeClassifysList : newnoticeDepartsList
                                                )
                                            )
                                        ) : null
                                    ),
                                    localStorage.logintype == "HCM" || localStorage.logintype == "HCMSUB" ? React.createElement(
                                        'span',
                                        { onClick: function onClick() {
                                                return that.rmDepart(item);
                                            }, className: 'AnnDEL' },
                                        React.createElement('i', null)
                                    ) : null
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
                        { className: 'footer' },
                        React.createElement(
                            'div',
                            { className: 'info' },
                            '\u5171 ' + totalNum + ' \u6761\u8BB0\u5F55 ',
                            '\xA0\xA0',
                            '\u7B2C  ' + pageNo + '  / ' + Math.ceil(totalNum / pageSize) + ' \u9875'
                        ),
                        React.createElement(_pagination2.default, { pageSize: pageSize, current: pageNo, total: totalNum, onChange: that.changePagination, onShowSizeChange: that.onPaginationSize, showSizeChanger: true, showQuickJumper: true })
                    )
                )
            )
        )
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=71_7f16907f20a84cec84b9.js.map