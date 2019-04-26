(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ "./app/widget/components/Component.js":
/*!********************************************!*\
  !*** ./app/widget/components/Component.js ***!
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

/**
 *
 *
 * @export
 * @description style:object,className:str
 * @class AddIcon 
 * @extends {React.Component}
 */
var AddIcon = exports.AddIcon = function (_React$Component) {
    _inherits(AddIcon, _React$Component);

    function AddIcon(props) {
        _classCallCheck(this, AddIcon);

        return _possibleConstructorReturn(this, (AddIcon.__proto__ || Object.getPrototypeOf(AddIcon)).call(this, props));
    }

    _createClass(AddIcon, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                style = _props.style,
                className = _props.className;

            return React.createElement("img", { className: className, style: style, src: "../../../../img/icon/add2.png" });
        }
    }]);

    return AddIcon;
}(React.Component);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

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

/***/ "./app/widget/index/Brand/ShopFile/tpl.js":
/*!************************************************!*\
  !*** ./app/widget/index/Brand/ShopFile/tpl.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _progress = __webpack_require__(/*! antd/es/progress */ "./node_modules/_antd@3.10.1@antd/es/progress/index.js");

var _progress2 = _interopRequireDefault(_progress);

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

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

var _upload = __webpack_require__(/*! antd/es/upload */ "./node_modules/_antd@3.10.1@antd/es/upload/index.js");

var _upload2 = _interopRequireDefault(_upload);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import Copyright from "../../../components/Copyright";


__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/progress/style/css */ "./node_modules/_antd@3.10.1@antd/es/progress/style/css.js");

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/alert/style/css */ "./node_modules/_antd@3.10.1@antd/es/alert/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@3.10.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/upload/style/css */ "./node_modules/_antd@3.10.1@antd/es/upload/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _SetTable = __webpack_require__(/*! ./SetTable */ "./app/widget/index/Brand/ShopFile/SetTable.js");

var _SetTable2 = _interopRequireDefault(_SetTable);

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/_react-copy-to-clipboard@5.0.1@react-copy-to-clipboard/lib/index.js");

var _platform = __webpack_require__(/*! ../../../components/platform */ "./app/widget/components/platform.js");

var _platform2 = _interopRequireDefault(_platform);

var _main = __webpack_require__(/*! ../ShopDetail/main */ "./app/widget/index/Brand/ShopDetail/main.js");

var _main2 = _interopRequireDefault(_main);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _Component = __webpack_require__(/*! ../../../components/Component */ "./app/widget/components/Component.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var Dragger = _upload2.default.Dragger;

var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        dataList = _that$state.dataList,
        platForm = _that$state.platForm,
        formatColumn = _that$state.formatColumn,
        checkAll = _that$state.checkAll,
        selectedRowKeys = _that$state.selectedRowKeys,
        setTableVisible = _that$state.setTableVisible,
        dealername = _that$state.dealername,
        isauthed = _that$state.isauthed,
        platform_code = _that$state.platform_code,
        shopname = _that$state.shopname,
        pageNo = _that$state.pageNo,
        pageSize = _that$state.pageSize,
        totalElements = _that$state.totalElements;

    var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: function onChange(selectedRowKeys) {
            return that.onTableCheckChange(selectedRowKeys);
        }
    };
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
            breadcrumbList: ['店铺档案'],
            linkList: [''],
            history: that.props.history
        },
        React.createElement(
            'div',
            { className: 'ShopFile' },
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
                            '\u5E97\u94FA\u540D\u79F0:'
                        ),
                        React.createElement(_input2.default, {
                            placeholder: '\u8BF7\u8F93\u5165',
                            onChange: function onChange(e) {
                                return that.onChange(e, 'shopname');
                            },
                            value: shopname,
                            suffix: clearIcon('shopname'),
                            className: 'ipt' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'item' },
                        React.createElement(
                            'span',
                            { className: 'lab' },
                            '\u7ECF\u9500\u5546\u540D\u79F0:'
                        ),
                        React.createElement(_input2.default, {
                            placeholder: '\u8BF7\u8F93\u5165',
                            onChange: function onChange(e) {
                                return that.onChange(e, 'dealername');
                            },
                            value: dealername,
                            suffix: clearIcon('dealername'),
                            className: 'ipt' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'item' },
                        React.createElement(
                            'span',
                            { className: 'lab' },
                            '\u5E73\u53F0:'
                        ),
                        React.createElement(
                            _select2.default,
                            { value: platform_code, style: { width: 350 }, onChange: function onChange(e) {
                                    return that.onsChange(e, 'platform_code');
                                } },
                            React.createElement(
                                Option,
                                { value: null },
                                '\u5168\u90E8'
                            ),
                            platForm.map(function (item, index) {
                                return React.createElement(
                                    Option,
                                    { key: index, value: item.dictCode },
                                    item.dictName
                                );
                            })
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'input-box' },
                    React.createElement(
                        'div',
                        { className: 'item' },
                        React.createElement(
                            'span',
                            { className: 'lab' },
                            '\u5E94\u7528\u8BA2\u8D2D:'
                        ),
                        React.createElement(
                            _select2.default,
                            { value: isauthed, style: { width: 350 }, onChange: function onChange(e) {
                                    return that.onsChange(e, 'isauthed');
                                } },
                            React.createElement(
                                Option,
                                { value: null },
                                '\u5168\u90E8'
                            ),
                            React.createElement(
                                Option,
                                { value: 'NOTAUTH' },
                                '\u672A\u8BA2\u8D2D'
                            ),
                            React.createElement(
                                Option,
                                { value: 'AUTHED' },
                                '\u5DF2\u8BA2\u8D2D'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { style: { justifyContent: 'flex-end' }, className: 'item' },
                        React.createElement(
                            _button2.default,
                            { className: 'btn6 seh', onClick: function onClick(e) {
                                    return that.onSearch();
                                } },
                            '\u67E5\u8BE2'
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                    'div',
                    { className: 'button-box' },
                    React.createElement(
                        'div',
                        { className: 'action' },
                        React.createElement(
                            'a',
                            { href: 'index.html#/ActionShopFile/add' },
                            React.createElement(
                                _button2.default,
                                { className: 'btn1-main', type: 'primary' },
                                React.createElement(_Component.AddIcon, { style: { paddingRight: '8px' } }),
                                '\u65B0\u589E'
                            )
                        ),
                        React.createElement(
                            _button2.default,
                            { className: 'btn1-sub', onClick: function onClick() {
                                    return that.rmAll();
                                } },
                            '\u6279\u91CF\u5220\u9664'
                        ),
                        React.createElement(
                            _button2.default,
                            { style: { marginRight: 10 }, href: '/hcm/hcmShop/exportExcelShops?dealername=' + (dealername || '') + '&isauthed=' + (isauthed || '') + '&platform_code=' + (platform_code || '') + '&shopname=' + (shopname || ''), className: 'btn1-sub' },
                            '\u4E0B\u8F7D\u6570\u636E'
                        ),
                        React.createElement(
                            _button2.default,
                            { className: 'btn1-sub', onClick: function onClick() {
                                    return that.onuploadVisible(true);
                                } },
                            '\u6279\u91CF\u5BFC\u5165'
                        ),
                        React.createElement(
                            _button2.default,
                            { href: '/hcm/hcmShop/exportExcel', className: 'btn1-sub', icon: 'download' },
                            '\u5BFC\u5165\u6A21\u7248\u4E0B\u8F7D'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'info' },
                        React.createElement(
                            _tooltip2.default,
                            { placement: 'top', title: '店铺安装后台应用后才能才能查看店铺的订单数据，请尽快邀请店铺订购' },
                            React.createElement(
                                _button2.default,
                                { onClick: function onClick() {
                                        return that.inviteLinkStatus(true);
                                    } },
                                '\u5E94\u7528\u8BA2\u8D2D\u94FE\u63A5'
                            )
                        ),
                        React.createElement(
                            'a',
                            { style: { margin: '0' }, onClick: that.ProduHistory },
                            React.createElement(
                                _button2.default,
                                { className: 'btn1-sub' },
                                '\u53D8\u66F4\u5386\u53F2'
                            )
                        ),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return that.onShowSetTable(true);
                            }, type: 'setting' })
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(_alert2.default, { message: React.createElement(
                            'div',
                            null,
                            '\u5171 ',
                            React.createElement(
                                'a',
                                null,
                                totalElements
                            ),
                            ' \u9879\uFF0C\u5DF2\u9009\u62E9 ',
                            React.createElement(
                                'a',
                                null,
                                checkAll ? totalElements : selectedRowKeys.length
                            ),
                            ' \u9879 ',
                            React.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return that.checkAll(true);
                                    } },
                                '\u52FE\u9009\u5168\u90E8'
                            ),
                            '/',
                            React.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return that.checkAll(false);
                                    } },
                                '\u53D6\u6D88\u52FE\u9009'
                            )
                        ), type: 'info', showIcon: true })
                ),
                formatColumn.length ? React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(_table2.default, { rowKey: 'shopdealerid', pagination: false, scroll: { x: (formatColumn.length - 1) * 230 }, rowSelection: rowSelection, columns: formatColumn.sort(function (a, b) {
                            return a.sort - b.sort;
                        }), dataSource: dataList }),
                    React.createElement(
                        'div',
                        { className: 'footer' },
                        React.createElement(
                            'div',
                            { className: 'info' },
                            '\u5171 ' + totalElements + ' \u6761\u8BB0\u5F55 ',
                            '\xA0\xA0',
                            '\u7B2C  ' + pageNo + '  / ' + Math.ceil(totalElements / pageSize) + ' \u9875'
                        ),
                        React.createElement(_pagination2.default, { pageSize: pageSize, current: pageNo, total: totalElements, onChange: that.changePagination, onShowSizeChange: that.onPaginationSize, showSizeChanger: true, showQuickJumper: true })
                    )
                ) : null
            ),
            React.createElement(_SetTable2.default, { ref: that.ShopFile_SetTable, onShow: function onShow(bl, type) {
                    return that.onShowSetTable(bl, type);
                }, visible: setTableVisible, params: that.props.match.params }),
            React.createElement(UploadModal, { that: that }),
            React.createElement(InviteLink, { that: that }),
            React.createElement(ErrorList, { that: that }),
            React.createElement(_main2.default, { inviteLinkStatus: function inviteLinkStatus() {
                    return that.inviteLinkStatus(true);
                }, ref: that.shopDetail })
        )
    );
});

exports.default = Tpl;


var UploadModal = (0, _That2.default)(function (that) {
    var _that$state2 = that.state,
        uploading = _that$state2.uploading,
        uploadVisible = _that$state2.uploadVisible,
        fileList = _that$state2.fileList,
        percent = _that$state2.percent;

    return React.createElement(
        _modal2.default,
        {
            title: '\u6279\u91CF\u5BFC\u5165',
            visible: uploadVisible,
            maskClosable: false,
            onCancel: function onCancel() {
                return that.onuploadVisible(false);
            },
            footer: [React.createElement(
                _button2.default,
                { key: 'back2', className: 'btn2-main upload-demo-start', type: 'primary', onClick: function onClick() {
                        return that.handleUpload();
                    }, disabled: fileList.length === 0, loading: uploading },
                uploading ? '上传中' : '上传'
            ), React.createElement(
                _button2.default,
                { className: 'btn2-sub noneFloat', key: 'back', onClick: function onClick() {
                        return that.onuploadVisible(false);
                    } },
                '\u53D6\u6D88'
            )]
        },
        React.createElement(
            Dragger,
            _extends({ multiple: false }, that.propsUpload()),
            React.createElement(
                'p',
                { className: 'ant-upload-drag-icon' },
                React.createElement('img', { style: { paddingTop: 20 }, src: '../../../img/upload_files.png' })
            ),
            React.createElement(
                'p',
                { className: 'ant-upload-text' },
                '\u70B9\u51FB\u8FD9\u91CC\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20'
            ),
            React.createElement(
                'p',
                { className: 'ant-upload-hint' },
                '\u652F\u6301\u6269\u5C55\u540D\uFF1A.xls .xlsx'
            )
        ),
        percent ? React.createElement(_progress2.default, { percent: percent }) : null
    );
});

var InviteLink = (0, _That2.default)(function (that) {
    var inviteLinkStatus = that.state.inviteLinkStatus;


    return React.createElement(
        _modal2.default,
        {
            title: '获取应用订购链接',
            visible: inviteLinkStatus,
            maskClosable: false,
            footer: [React.createElement(
                _button2.default,
                { key: 'back', onClick: function onClick() {
                        return that.inviteLinkStatus(false);
                    } },
                '\u53D6\u6D88'
            )],
            onCancel: function onCancel() {
                return that.inviteLinkStatus(false);
            }
        },
        React.createElement(
            'div',
            { className: 'inviteLinkbox' },
            React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    'span',
                    { className: 'title' },
                    '\u8BA2\u8D2D\u94FE\u63A5\uFF1A'
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement(_input2.default, { onChange: function onChange() {
                            return null;
                        }, value: 'https://tb.cn/5VFmCNw' })
                )
            ),
            React.createElement(
                'div',
                { className: 'item', style: { padding: '0 0 10px 100px', marginTop: '13px' } },
                React.createElement(
                    _reactCopyToClipboard.CopyToClipboard,
                    { text: 'https://tb.cn/5VFmCNw',
                        onCopy: function onCopy() {
                            return _message3.default.success('链接成功复制至粘贴板');
                        } },
                    React.createElement(
                        _button2.default,
                        null,
                        '\u590D\u5236\u8BA2\u8D2D\u94FE\u63A5'
                    )
                )
            ),
            React.createElement(
                'p',
                { style: { padding: '0 0 10px 100px' } },
                '\u590D\u5236\u8BA2\u8D2D\u94FE\u63A5\uFF0C\u53D1\u9001\u7ED9\u7ECF\u9500\u5546\u5E97\u94FA\u8BA2\u8D2D\u5E94\u7528'
            )
        )
    );
});

var ErrorList = (0, _That2.default)(function (that) {
    var _that$state3 = that.state,
        errorListStatus = _that$state3.errorListStatus,
        _that$state3$errorLis = _that$state3.errorList,
        errorList = _that$state3$errorLis === undefined ? { data: [], message: '' } : _that$state3$errorLis;

    var columns = [{
        title: '平台',
        dataIndex: 'platformCode',
        key: 'platformCode',
        width: '10%',
        render: function render(text, item, index) {
            return (0, _platform2.default)(text);
        }
    }, {
        title: '店铺名称',
        dataIndex: 'shopName',
        width: '10%',
        key: 'shopName'
    }, {
        title: '经销商名称',
        dataIndex: 'dealer_name',
        key: 'dealer_name',
        width: '26%'
    }, {
        title: '店铺首页地址',
        dataIndex: 'shopUrl',
        key: 'shopUrl',
        width: '40%'
    }, {
        title: '错误说明',
        dataIndex: 'err_info',
        key: 'err_info',
        className: 'err',
        width: '14%'
    }];
    return React.createElement(
        _modal2.default,
        {
            title: '导入结果说明',
            visible: errorListStatus,
            maskClosable: false,
            footer: [React.createElement(
                _button2.default,
                { key: 'back', onClick: function onClick() {
                        return that.errorListStatus(false);
                    } },
                '\u5173\u95ED'
            )],
            className: 'errorListbox',
            onCancel: function onCancel() {
                return that.errorListStatus(false);
            }
        },
        React.createElement(
            'div',
            { className: 'errorList' },
            React.createElement(_alert2.default, { message: errorList.message, type: 'error' }),
            React.createElement(_table2.default, { rowKey: function rowKey(record) {
                    return record.shopUrl + record.dealerid + record.shopName;
                }, pagination: false, columns: columns, dataSource: errorList.data })
        )
    );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=96_7028afe402cda4eec2ee.js.map