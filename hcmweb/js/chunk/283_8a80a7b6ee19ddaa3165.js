(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[283],{

/***/ "./app/widget/index/Brand/UrlMonitor/main.js":
/*!***************************************************!*\
  !*** ./app/widget/index/Brand/UrlMonitor/main.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _dropdown = __webpack_require__(/*! antd/es/dropdown */ "./node_modules/_antd@3.10.1@antd/es/dropdown/index.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = __webpack_require__(/*! antd/es/menu */ "./node_modules/_antd@3.10.1@antd/es/menu/index.js");

var _menu2 = _interopRequireDefault(_menu);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@3.10.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _badge = __webpack_require__(/*! antd/es/badge */ "./node_modules/_antd@3.10.1@antd/es/badge/index.js");

var _badge2 = _interopRequireDefault(_badge);

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/dropdown/style/css */ "./node_modules/_antd@3.10.1@antd/es/dropdown/style/css.js");

__webpack_require__(/*! antd/es/menu/style/css */ "./node_modules/_antd@3.10.1@antd/es/menu/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/badge/style/css */ "./node_modules/_antd@3.10.1@antd/es/badge/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/UrlMonitor/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var confirm = _modal2.default.confirm;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.onEditItem = function (e) {
            var targetEdit = _this.state.targetEdit;

            if (isNaN(+e.target.value)) {
                return;
            }
            targetEdit.itemprice = e.target.value;
            _this.setState({
                targetEdit: targetEdit
            });
        };

        _this.onTableCheckChange = function (selectedRowKeys, selectedRows) {
            var setArr = new Set(selectedRowKeys);
            _this.setState({
                selectedRowKeys: [].concat(_toConsumableArray(setArr)),
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
            return [{
                title: '序号',
                dataIndex: 'index',
                key: 'index',
                render: function render(text, item, index) {
                    return React.createElement(
                        _badge2.default,
                        { count: item.islowprice ? '低' : null },
                        ' ',
                        index + 1
                    );
                }
            }, {
                title: '监控信息',
                dataIndex: 'itemtitle',
                key: 'itemtitle',
                render: function render(text, item, index) {
                    return React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(
                            'p',
                            { style: { maxWidth: '500px' } },
                            text
                        ),
                        React.createElement(
                            'p',
                            { style: { width: '500px' } },
                            React.createElement(
                                'a',
                                { target: '_blank', href: item.itemlink },
                                item.itemlink
                            )
                        )
                    );
                }
            }, {
                title: '店铺名称',
                dataIndex: 'shopname',
                key: 'shopname',
                render: function render(text, item, index) {
                    return React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(
                            'p',
                            { style: { padding: '10px 0px 0px' } },
                            text
                        ),
                        React.createElement(
                            'p',
                            { style: { padding: '5px 0px' } },
                            item.platform == '天猫' ? React.createElement('img', { style: { verticalAlign: 'bottom', paddingRight: '10px' }, src: '../../../img/icon/Tmall.png' }) : React.createElement('img', { style: { verticalAlign: 'bottom', paddingRight: '10px' }, src: '../../../img/icon/Taobao.png' }),
                            item.dealer_id && item.dealer_id > 0 ? React.createElement('img', { style: { verticalAlign: 'middle' }, width: '52', height: '15', src: '../../../../img/Authorized.png' }) : null
                        )
                    );
                }
            }, {
                title: '限价',
                dataIndex: 'itemprice',
                key: 'itemprice',
                render: function render(text, item, index) {
                    return text;
                }
            }, {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render: function render(text, item, index) {
                    return React.createElement(
                        'span',
                        null,
                        text,
                        text == '上架' ? React.createElement('img', { style: { verticalAlign: '-1px', paddingLeft: '4px' }, src: '../../../img/icon/Shelf.png' }) : React.createElement('img', { style: { verticalAlign: '-1px', paddingLeft: '4px' }, src: '../../../img/icon/Obtained.png' })
                    );
                }
            }, {
                title: '操作',
                dataIndex: 'id',
                key: 'id',
                align: 'right',
                render: function render(text, item, index) {
                    return React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'a',
                            { href: '/index.html#/InfoMonitor/' + item.id },
                            React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_Details.png' }),
                            '\u8BE6\u60C5'
                        ),
                        React.createElement(_divider2.default, { type: 'vertical' }),
                        React.createElement(
                            _dropdown2.default,
                            { overlay: React.createElement(
                                    _menu2.default,
                                    null,
                                    React.createElement(
                                        _menu2.default.Item,
                                        null,
                                        React.createElement(
                                            'a',
                                            { className: 'A-COLOR', onClick: function onClick(e) {
                                                    return _this.ChangeHis(item);
                                                } },
                                            React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_history.png' }),
                                            '\u53D8\u66F4\u5386\u53F2'
                                        )
                                    ),
                                    React.createElement(
                                        _menu2.default.Item,
                                        null,
                                        React.createElement(
                                            'a',
                                            { className: 'A-COLOR', onClick: function onClick(e) {
                                                    return _this.editItemStatus(true, item);
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
                                            { className: 'A-COLOR', onClick: function onClick(e) {
                                                    return _this.rmItem(item);
                                                } },
                                            React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_del.png' }),
                                            '\u5220\u9664'
                                        )
                                    )
                                ) },
                            React.createElement(
                                'a',
                                null,
                                '\xB7\xB7\xB7\xA0\u66F4\u591A'
                            )
                        )
                    );
                }
            }];
        };

        _this.editItemStatus = function (bl) {
            var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _this.setState({
                editItemStatus: bl,
                targetEdit: Object.assign({}, item)
            });
        };

        _this.ChangeHis = function (item) {
            window.location = "/index.html#/ChangeHistoryx/MonitorLink/" + item.shopname + "/" + item.itemid;
        };

        _this.editItemSubmit = function () {
            var targetEdit = _this.state.targetEdit;

            if (targetEdit.itemprice.length == 0) {
                _message3.default.error('限价不能为空');
                return;
            }
            _ajax2.default.post('/hcm/monitorLink/Edit', {
                id: targetEdit.id,
                itemprice: targetEdit.itemprice
            }).then(function (response) {
                if (response.data.status == '10000') {
                    _this.getList();
                    _this.editItemStatus(false);
                    _message3.default.success(response.data.message);
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
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

        _this.rmAll = function () {
            var _this$state = _this.state,
                selectedRowKeys = _this$state.selectedRowKeys,
                checkAll = _this$state.checkAll,
                totalNum = _this$state.totalNum;

            if (selectedRowKeys.length == 0) {
                _message3.default.error('至少选择一条');
                return;
            }
            var _this$state$oldSearch = _this.state.oldSearch,
                itemlink = _this$state$oldSearch.itemlink,
                shop_name = _this$state$oldSearch.shop_name;

            var that = _this;
            var data = {
                ids: checkAll ? 'checkAll' : selectedRowKeys.join(','),
                itemlink: checkAll ? itemlink : '',
                shop_name: checkAll ? shop_name : ''
            };
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
                        '\u4F60\u786E\u8BA4\u8981\u5220\u9664\u52FE\u9009\u7684 ',
                        checkAll ? totalNum : selectedRowKeys.length,
                        ' \u9879\u76D1\u63A7\u4FE1\u606F\u5417\uFF1F'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u5220\u9664\u540E',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            '\u76F8\u5173\u7684\u4F4E\u4EF7\u8BB0\u5F55\u5C06\u4F1A\u88AB\u5220\u9664'
                        )
                    )
                ),
                okText: '确定',
                cancelText: '取消',
                className: 'alert-item-confirm',
                okButtonProps: { className: 'btn2-main' },
                cancelButtonProps: { className: 'btn2-sub' },
                onOk: function onOk() {
                    _ajax2.default.post('/hcm/monitorLink/DeleteBatch', data).then(function (response) {
                        if (response.data.status == '10000') {
                            that.onSearch(true);
                            _message3.default.success(response.data.message);
                        }
                    }).catch(function (error) {
                        _message3.default.error(error.statusText);
                    });
                }
            });
        };

        _this.rmItem = function (item) {
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
                        '\u4F60\u786E\u8BA4\u8981\u5220\u9664\u8BE5\u76D1\u63A7\u4FE1\u606F\u5417\uFF1F'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u5220\u9664\u540E',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            '\u76F8\u5173\u7684\u4F4E\u4EF7\u8BB0\u5F55\u5C06\u4F1A\u88AB\u5220\u9664'
                        )
                    )
                ),
                okText: '确定',
                cancelText: '取消',
                className: 'alert-item-confirm',
                okButtonProps: { className: 'btn2-main' },
                cancelButtonProps: { className: 'btn2-sub' },
                onOk: function onOk() {
                    _ajax2.default.post('/hcm/monitorLink/Delete', {
                        id: item.id,
                        itemlink: item.itemlink,
                        shopname: item.shopname,
                        itemprice: item.itemprice
                    }).then(function (response) {
                        if (response.data.status == '10000') {
                            that.getList();
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

        _this.onSearch = function () {
            var bl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            _this.setState({
                pageNo: 1,
                itemlink: bl ? null : _this.state.itemlink,
                shop_name: bl ? null : _this.state.shop_name,
                oldSearch: {
                    itemlink: bl ? null : _this.state.itemlink,
                    shop_name: bl ? null : _this.state.shop_name
                }
            }, function () {
                _this.getList();
            });
        };

        _this.getList = function () {
            var _this$state2 = _this.state,
                pageNo = _this$state2.pageNo,
                pageSize = _this$state2.pageSize,
                itemlink = _this$state2.itemlink,
                shop_name = _this$state2.shop_name;

            _ajax2.default.get('/hcm/monitorLink/GetList', {
                params: {
                    pageNo: pageNo,
                    pageSize: pageSize,
                    itemlink: itemlink,
                    shop_name: shop_name
                }
            }).then(function (response) {
                var data = response.data.data;
                _this.setState({
                    pageNo: data.pageNumber,
                    pageSize: data.pageSize,
                    totalNum: data.totalElements,
                    dataList: data.content,
                    selectedRowKeys: []
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.chSearchIpt = function (e, type) {
            var state = _this.state;
            if (e && e.target && e.target.nodeName == "INPUT") {
                state[type] = e.target.value;
            } else {
                state[type] = e;
            }
            _this.setState(state);
        };

        _this.handleClearIconClick = function (type) {
            var state = _this.state;
            state[type] = null;
            _this.setState(state);
        };

        _this.state = {
            pageNo: 1,
            pageSize: 10,
            checkAll: false,
            totalNum: 0,
            itemlink: null,
            shop_name: null,
            oldSearch: {
                itemlink: null,
                shop_name: null
            },
            dataList: [],
            selectedRowKeys: [],

            targetEdit: {},
            editItemStatus: false
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

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/divider/index.js":
/*!************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/divider/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Divider; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);


var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


function Divider(_a) {
    var _classNames;

    var _a$prefixCls = _a.prefixCls,
        prefixCls = _a$prefixCls === undefined ? 'ant' : _a$prefixCls,
        _a$type = _a.type,
        type = _a$type === undefined ? 'horizontal' : _a$type,
        _a$orientation = _a.orientation,
        orientation = _a$orientation === undefined ? '' : _a$orientation,
        className = _a.className,
        children = _a.children,
        dashed = _a.dashed,
        restProps = __rest(_a, ["prefixCls", "type", "orientation", "className", "children", "dashed"]);

    var orientationPrefix = orientation.length > 0 ? '-' + orientation : orientation;
    var classString = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, prefixCls + '-divider', prefixCls + '-divider-' + type, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-divider-with-text' + orientationPrefix, children), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-divider-dashed', !!dashed), _classNames));
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: classString }, restProps),
        children && react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            'span',
            { className: prefixCls + '-divider-inner-text' },
            children
        )
    );
}

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js":
/*!****************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/divider/style/css.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/divider/style/index.css":
/*!*******************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/divider/style/index.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

}]);
//# sourceMappingURL=283_8a80a7b6ee19ddaa3165.js.map