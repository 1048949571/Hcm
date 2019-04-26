(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[270],{

/***/ "./app/widget/index/Brand/ProductInfo/main.js":
/*!****************************************************!*\
  !*** ./app/widget/index/Brand/ProductInfo/main.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dropdown = __webpack_require__(/*! antd/es/dropdown */ "./node_modules/_antd@3.10.1@antd/es/dropdown/index.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = __webpack_require__(/*! antd/es/menu */ "./node_modules/_antd@3.10.1@antd/es/menu/index.js");

var _menu2 = _interopRequireDefault(_menu);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@3.10.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

__webpack_require__(/*! antd/es/dropdown/style/css */ "./node_modules/_antd@3.10.1@antd/es/dropdown/style/css.js");

__webpack_require__(/*! antd/es/menu/style/css */ "./node_modules/_antd@3.10.1@antd/es/menu/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/ProductInfo/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

        var _this$props$match$par = _this.props.match.params,
            id = _this$props$match$par.id,
            name = _this$props$match$par.name;

        _this.state = {
            id: id,
            name: name,
            fileList: [],
            percent: null,
            uploading: false,
            uploadVisible: false,
            formatColumn: [],
            selectedRowKeys: [],

            addStatus: false,
            visible: false,
            dataList: [],

            setTableVisible: false,

            brandName: null,
            productName: null,
            oldSearch: {
                brandName: null,
                productName: null

            },

            pageNo: 1,
            pageSize: 10,
            checkAll: false,
            totalElements: null
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
            this.getByProduct();
            var id = this.state.id;
            //已读

            _ajax2.default.get('/hcm/productread/create', {
                params: {
                    classifyId: id
                }
            });
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

    this.onSearch = function () {
        var bl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _this2.setState({
            pageNo: 1,
            brandName: bl ? null : _this2.state.brandName,
            productName: bl ? null : _this2.state.productName,
            oldSearch: {
                brandName: bl ? null : _this2.state.brandName,
                productName: bl ? null : _this2.state.productName
            }
        }, function () {
            _this2.getList();
        });
    };

    this.onTableCheckChange = function (selectedRowKeys) {
        // console.log(selectedRowKeys)
        _this2.setState({
            selectedRowKeys: selectedRowKeys,
            checkAll: false
        });
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

    this.onChange = function (e, type) {
        var state = _this2.state;
        state[type] = e.target.value;
        _this2.setState(state);
    };

    this.handleClearIconClick = function (type) {
        var state = _this2.state;
        state[type] = null;
        _this2.setState(state);
    };

    this.getList = function () {
        var _state = _this2.state,
            pageNo = _state.pageNo,
            pageSize = _state.pageSize,
            brandName = _state.brandName,
            productName = _state.productName,
            totalNum = _state.totalNum,
            id = _state.id;

        _ajax2.default.get('/hcm/hcmProduct/getPageBybmcid', {
            params: {
                brandName: brandName,
                productName: productName,
                classifyid: id,
                pageNo: pageNo,
                pageSize: pageSize
            }
        }).then(function (response) {
            var _response$data$data = response.data.data,
                content = _response$data$data.content,
                pageNumber = _response$data$data.pageNumber,
                pageSize = _response$data$data.pageSize,
                totalElements = _response$data$data.totalElements,
                obj = _response$data$data.obj;

            _this2.setState({
                selectedRowKeys: [],
                setTableVisible: obj == 1 ? false : true,
                dataList: content,
                pageNumber: pageNumber,
                pageSize: pageSize,
                totalElements: totalElements
            });
        }).catch(function (error) {
            _message3.default.error(error.statusText);
        });
    };

    this.rmAll = function () {
        var that = _this2;
        var _state2 = _this2.state,
            checkAll = _state2.checkAll,
            selectedRowKeys = _state2.selectedRowKeys,
            id = _state2.id,
            totalElements = _state2.totalElements;
        var _state$oldSearch = _this2.state.oldSearch,
            brandName = _state$oldSearch.brandName,
            productName = _state$oldSearch.productName;

        if (selectedRowKeys.length == 0) {
            _message3.default.error('至少选择一条');
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
                    '\u4F60\u786E\u8BA4\u8981\u5220\u9664\u52FE\u9009\u7684',
                    checkAll ? totalElements : selectedRowKeys.length,
                    '\u9879\u516C\u793A\u4FE1\u606F\u5417\uFF1F'
                ),
                React.createElement(
                    'p',
                    null,
                    '\u5220\u9664\u540E',
                    React.createElement(
                        'span',
                        { className: 'red' },
                        '\u76F8\u5173\u516C\u793A\u4FE1\u606F\u5C06\u65E0\u6CD5\u627E\u56DE'
                    )
                )
            ),
            okText: '确定',
            cancelText: '取消',
            okButtonProps: { className: 'btn2-main' },
            cancelButtonProps: { className: 'btn2-sub' },
            className: 'alert-item-confirm',
            onOk: function onOk() {
                _ajax2.default.get('/hcm/hcmProduct/delete', {
                    params: {
                        classifyId: id,
                        hcmProductIds: checkAll ? 'checkAll' : selectedRowKeys.join(','),
                        brandName: checkAll ? brandName : '',
                        productName: checkAll ? productName : ''
                    }
                }).then(function (response) {
                    _message3.default.success(response.data.message);
                    that.onSearch(true);
                }).catch(function (error) {
                    _message3.default.error(error.statusText);
                });
            }
        });
    };

    this.rmItem = function (item) {
        var id = _this2.state.id;

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
                    '\u4F60\u786E\u8BA4\u8981\u5220\u9664\u8BE5\u516C\u793A\u4FE1\u606F\u5417\uFF1F'
                ),
                React.createElement(
                    'p',
                    null,
                    '\u5220\u9664\u540E',
                    React.createElement(
                        'span',
                        { className: 'red' },
                        '\u76F8\u5173\u516C\u793A\u4FE1\u606F\u5C06\u65E0\u6CD5\u627E\u56DE'
                    )
                )
            ),
            okText: '确定',
            cancelText: '取消',
            okButtonProps: { className: 'btn2-main' },
            cancelButtonProps: { className: 'btn2-sub' },
            className: 'alert-item-confirm',
            onOk: function onOk() {
                _ajax2.default.get('/hcm/hcmProduct/delete', {
                    params: {
                        classifyId: id,
                        hcmProductIds: item.id
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

    this.getByProduct = function () {
        _ajax2.default.get('/hcm/hcmCustomModel/getByProduct', {
            params: {
                productClassifyid: _this2.state.id
            }
        }).then(function (response) {
            var productList = response.data.data;
            _this2.setState({
                formatColumn: _this2.formAtDom(productList)
            });
        }).catch(function (error) {
            _message3.default.error(error.statusText);
        });
    };

    this.formAtDom = function (data) {
        var _state3 = _this2.state,
            name = _state3.name,
            id = _state3.id,
            setTableVisible = _state3.setTableVisible;

        var arr = [{
            title: '序号',
            dataIndex: 'index',
            fixed: 'left',
            sort: 0,
            width: 80,
            key: 'index',
            render: function render(text, item, index) {
                return index + 1;
            }
        }];

        var _loop = function _loop(key) {
            data[key].data.forEach(function (item, index) {
                if (item.isChecked) {
                    item.target = [key, index, item];
                    return arr.push({
                        title: item.fieldname,
                        dataIndex: item.fieldvalue,
                        key: item.id,
                        sort: item.sort,
                        className: 'item-column',
                        render: function render(text, item, index) {
                            return text ? text : '--';
                        }
                    });
                }
            });
        };

        for (var key in data) {
            _loop(key);
        }
        arr.push({
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            sort: 999999,
            width: 180,
            align: 'center',
            fixed: 'right',
            render: function render(text, item, index) {
                return React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'a',
                        { href: 'index.html#/ActionPriceInfo/' + id + '/' + setTableVisible + '/' + name + '/' + 'edit' + '/' + item.id },
                        React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '6px' }, src: '../../../img/icon/icon_operating_edit.png' }),
                        '\u7F16\u8F91'
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
                                        { className: 'A-COLOR', onClick: function onClick() {
                                                return _this2.rmItem(item);
                                            } },
                                        React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '6px' }, src: '../../../img/icon/icon_operating_del.png' }),
                                        '\u5220\u9664'
                                    )
                                ),
                                React.createElement(
                                    _menu2.default.Item,
                                    null,
                                    React.createElement(
                                        'a',
                                        { className: 'A-COLOR', onClick: function onClick() {
                                                return _this2.ChangeHis(item);
                                            } },
                                        React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_history.png' }),
                                        '\u53D8\u66F4\u5386\u53F2'
                                    )
                                )
                            ) },
                        React.createElement(
                            'a',
                            null,
                            '\xB7\xB7\xB7 \xA0\u66F4\u591A'
                        )
                    )
                );
            }
        });
        return arr;
    };

    this.ChangeHis = function (item) {
        window.location = "/index.html#/ChangeHistorys/Product/" + item.brand_name + "/" + item.id;
    };

    this.ProduHistory = function () {
        window.location = "/index.html#/ChangeHistory/HcmCustomModel/" + _this2.props.match.params.id + "/TYpe";
    };

    this.checkAll = function (bl) {
        var selectedRowKeys = _this2.state.selectedRowKeys;
        if (bl) {
            _this2.state.dataList.forEach(function (item, index) {
                selectedRowKeys.push(item.id);
            });
        } else {
            selectedRowKeys = [];
        }
        _this2.setState({
            checkAll: bl,
            selectedRowKeys: selectedRowKeys
        });
    };

    this.handleUpload = function () {
        var _state4 = _this2.state,
            fileList = _state4.fileList,
            id = _state4.id;

        var formData = new FormData();
        fileList.forEach(function (file) {
            formData.append('file', file);
            formData.append('classifyId', id);
        });

        _this2.setState({
            uploading: true
        });
        (0, _ajax2.default)({
            method: 'post',
            url: '/hcm/hcmProduct/readExcelFile',
            headers: { 'Content-Type': 'multipart/form-data' },
            data: formData,
            onUploadProgress: function onUploadProgress(progressEvent) {
                var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);

                _this2.setState({
                    percent: percentCompleted
                });
            }
        }).then(function (rep) {
            _this2.setState({
                fileList: [],
                uploading: false,
                uploadVisible: false
            });
            _this2.getList();
            if (rep.data.status == '10000') {
                _message3.default.success(rep.data.message);
            } else {
                _message3.default.warning(rep.data.message);
            }
        }).catch(function () {
            _this2.setState({
                uploading: false
            });
            _message3.default.error('upload failed.');
        });
    };

    this.propsUpload = function () {
        return {
            action: '/hcm/hcmProduct/readExcelFile',
            accept: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            onRemove: function onRemove(file) {
                _this2.setState(function (_ref) {
                    var fileList = _ref.fileList;

                    var index = fileList.indexOf(file);
                    var newFileList = fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList
                    };
                });
            },
            beforeUpload: function beforeUpload(file) {
                _this2.setState(function () {
                    return {
                        fileList: [file]
                    };
                });
                return false;
            },
            fileList: _this2.state.fileList
        };
    };

    this.onuploadVisible = function (bl) {
        _this2.setState({
            uploadVisible: bl,
            fileList: [],
            uploading: false,
            percent: null
        });
    };

    this.onShowSetTable = function (bl, type) {
        if (type == 'getlist') {
            _this2.getByProduct();
            _this2.onSearch();
        }
        _this2.setState({
            setTableVisible: bl
        });
    };
}, _temp);
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
//# sourceMappingURL=270_f57e97bcd95a7a58085c.js.map