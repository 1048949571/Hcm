(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[278],{

/***/ "./app/widget/index/Brand/ShopFile/main.js":
/*!*************************************************!*\
  !*** ./app/widget/index/Brand/ShopFile/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@3.10.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

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

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@3.10.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/dropdown/style/css */ "./node_modules/_antd@3.10.1@antd/es/dropdown/style/css.js");

__webpack_require__(/*! antd/es/menu/style/css */ "./node_modules/_antd@3.10.1@antd/es/menu/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/ShopFile/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _platform = __webpack_require__(/*! ../../../components/platform */ "./app/widget/components/platform.js");

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var confirm = _modal2.default.confirm;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.inviteLinkStatus = function (bl) {
            _this.setState({
                inviteLinkStatus: bl
            });
        };

        _this.errorListStatus = function (bl) {
            _this.setState({
                errorListStatus: bl
            });
        };

        _this.getPlatform = function () {
            // ajax.get('/hcm/sys/GetList', {
            //     params: {
            //         dictcode: 'platform'
            //     }
            // }).then((response) => {
            //     if (response.data.status == '10000') {
            _this.setState({
                platForm: can.platform || []
            });
            //     }

            // }).catch((error) => {
            //     message.error(error.statusText);
            // });
        };

        _this.onSearch = function () {
            var bl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            _this.setState({
                pageNo: 1,
                dealername: bl ? null : _this.state.dealername,
                isauthed: bl ? null : _this.state.isauthed,
                platform_code: bl ? null : _this.state.platform_code,
                shopname: bl ? null : _this.state.shopname,

                oldSearch: {
                    dealername: bl ? null : _this.state.dealername,
                    isauthed: bl ? null : _this.state.isauthed,
                    platform_code: bl ? null : _this.state.platform_code,
                    shopname: bl ? null : _this.state.shopname
                }
            }, function () {
                _this.getList();
            });
        };

        _this.onTableCheckChange = function (selectedRowKeys) {
            // console.log(selectedRowKeys)
            _this.setState({
                selectedRowKeys: selectedRowKeys,
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

        _this.onChange = function (e, type) {
            var state = _this.state;
            state[type] = e.target.value;
            _this.setState(state);
        };

        _this.onsChange = function (e, type) {
            var state = _this.state;
            state[type] = e;
            _this.setState(state);
        };

        _this.handleClearIconClick = function (type) {
            var state = _this.state;
            state[type] = null;
            _this.setState(state);
        };

        _this.getList = function () {
            var _this$state = _this.state,
                pageNo = _this$state.pageNo,
                pageSize = _this$state.pageSize,
                dealername = _this$state.dealername,
                isauthed = _this$state.isauthed,
                platform_code = _this$state.platform_code,
                shopname = _this$state.shopname,
                totalNum = _this$state.totalNum,
                id = _this$state.id;

            _ajax2.default.get('/hcm/hcmShop/getPageByBmc', {
                params: {
                    dealername: dealername, isauthed: isauthed, platform_code: platform_code, shopname: shopname,
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

                _this.setState({
                    selectedRowKeys: [],
                    checkAll: false,
                    dataList: content,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    totalElements: totalElements
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.rmAll = function () {
            var that = _this;
            var _this$state2 = _this.state,
                checkAll = _this$state2.checkAll,
                selectedRowKeys = _this$state2.selectedRowKeys,
                totalElements = _this$state2.totalElements;
            var _this$state$oldSearch = _this.state.oldSearch,
                dealername = _this$state$oldSearch.dealername,
                isauthed = _this$state$oldSearch.isauthed,
                platform_code = _this$state$oldSearch.platform_code,
                shopname = _this$state$oldSearch.shopname;

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
                        '\u4E2A\u5E97\u94FA\u5417\uFF1F'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u5220\u9664\u540E',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            '\u76F8\u5173\u5E97\u94FA\u5C06\u65E0\u6CD5\u627E\u56DE'
                        )
                    )
                ),
                okText: '确定',
                cancelText: '取消',
                okButtonProps: { className: 'btn2-main' },
                cancelButtonProps: { className: 'btn2-sub' },
                className: 'alert-item-confirm',
                onOk: function onOk() {
                    _ajax2.default.post('/hcm/hcmShop/Delete', {
                        ids: checkAll ? 'checkAll' : selectedRowKeys.join(','),
                        dealername: checkAll ? dealername : '',
                        isauthed: checkAll ? isauthed : '',
                        platform_code: checkAll ? platform_code : '',
                        shopname: checkAll ? shopname : ''

                    }).then(function (response) {
                        _message3.default.success(response.data.message);
                        that.onSearch(true);
                    }).catch(function (error) {
                        _message3.default.error(error.statusText);
                    });
                }
            });
        };

        _this.rmItem = function (item) {
            var id = _this.state.id;

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
                        '\u4F60\u786E\u8BA4\u8981\u5220\u9664\u8BE5\u5E97\u94FA\u5417\uFF1F'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u5220\u9664\u540E',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            '\u8BE5\u5E97\u94FA\u5C06\u65E0\u6CD5\u627E\u56DE'
                        )
                    )
                ),
                okText: '确定',
                cancelText: '取消',
                okButtonProps: { className: 'btn2-main' },
                cancelButtonProps: { className: 'btn2-sub' },
                className: 'alert-item-confirm',
                onOk: function onOk() {
                    _ajax2.default.post('/hcm/hcmShop/Delete', {
                        ids: item.shopdealerid
                    }).then(function (response) {
                        _message3.default.success(response.data.message);
                        that.getList();
                    }).catch(function (error) {
                        _message3.default.error(error.statusText);
                    });
                }
            });
        };

        _this.getByProduct = function () {
            _ajax2.default.get('/hcm/hcmCustomModel/getBybmcidAndModule', {
                params: {
                    module: 'SHOP'
                }
            }).then(function (response) {
                var productList = response.data.data;
                _this.setState({
                    formatColumn: _this.formAtDom(productList)
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.formAtDom = function (data) {
            var _this$state3 = _this.state,
                name = _this$state3.name,
                id = _this$state3.id,
                setTableVisible = _this$state3.setTableVisible;

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
                    if (item.isChecked && item.fieldvalue != 'platformname') {
                        item.target = [key, index, item];
                        return arr.push({
                            title: item.fieldname,
                            dataIndex: item.fieldvalue,
                            key: item.id,
                            sort: item.sort,
                            className: 'item-column',
                            render: function render(text, record, index) {

                                return item.fieldvalue === 'dealername' ? JSON.stringify(record.status) == '{}' ? React.createElement(
                                    'span',
                                    null,
                                    text
                                ) : React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'span',
                                        { style: { paddingRight: 10 } },
                                        text
                                    ),
                                    React.createElement(
                                        _tooltip2.default,
                                        { placement: 'bottom', title: record.status.info },
                                        React.createElement(
                                            'span',
                                            { className: record.status.info_type },
                                            record.status.title
                                        )
                                    )
                                ) : item.fieldvalue === 'shopName' ? React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'a',
                                        { onClick: function onClick() {
                                                return _this.shopDetail.current.onShow(record.id, record.dealerid);
                                            }, style: { paddingRight: 10 } },
                                        text
                                    ),
                                    record.isauthed == 'AUTHED' ? React.createElement('img', { style: { verticalAlign: 'bottom', paddingRight: 10 }, src: '../../../../img/dinggou.jpg' }) : null,
                                    (0, _platform2.default)(record.platform_code, { verticalAlign: 'bottom', width: '20px', height: '20px' })
                                ) : item.fieldvalue === 'shopUrl' ? React.createElement(
                                    'a',
                                    { className: 'urlHide', target: '_blank', href: record.shopUrl },
                                    record.shopUrl
                                ) : item.fieldvalue === 'productclassifyid' ? React.createElement(
                                    'div',
                                    { className: 'table-tb-box' },
                                    React.createElement(
                                        _tooltip2.default,
                                        { placement: 'bottom', title: record.productClassifyName ? record.productClassifyName.join(',') : null },
                                        record.productClassifyName ? record.productClassifyName.join(',') : null
                                    )
                                ) : React.createElement(
                                    'div',
                                    { className: 'table-tb-box' },
                                    React.createElement(
                                        _tooltip2.default,
                                        { placement: 'bottom', title: text },
                                        text
                                    )
                                );
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
                            { href: 'index.html#/ActionShopFile/edit/' + item.dealerid + '/' + item.id },
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
                                                    return _this.rmItem(item);
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
                                                    return _this.ChangeHis(item);
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

        _this.ChangeHis = function (item) {
            window.location = "/index.html#/ChangeHistorys/HcmShopBmcDealer/" + item.shopName + "/" + item.shopdealerid;
        };

        _this.ProduHistory = function () {
            window.location = "/index.html#/ChangeHistoryx/HcmShopBmcDealer/";
        };

        _this.checkAll = function (bl) {
            var selectedRowKeys = _this.state.selectedRowKeys;
            if (bl) {
                _this.state.dataList.forEach(function (item, index) {
                    selectedRowKeys.push(item.shopdealerid);
                });
            } else {
                selectedRowKeys = [];
            }
            _this.setState({
                checkAll: bl,
                selectedRowKeys: selectedRowKeys
            });
        };

        _this.handleUpload = function () {
            var fileList = _this.state.fileList;

            var formData = new FormData();
            fileList.forEach(function (file) {
                formData.append('file', file);
            });

            _this.setState({
                uploading: true
            });
            (0, _ajax2.default)({
                method: 'post',
                url: '/hcm/hcmShop/readExcelFile',
                headers: { 'Content-Type': 'multipart/form-data' },
                data: formData,
                onUploadProgress: function onUploadProgress(progressEvent) {
                    var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);

                    _this.setState({
                        percent: percentCompleted
                    });
                }
            }).then(function (rep) {
                _this.setState({
                    fileList: [],
                    uploading: false,
                    uploadVisible: false
                });
                _this.getList();
                if (rep.data.status == '10000') {

                    if (rep.data.data && rep.data.data.length) {
                        _message3.default.warning(rep.data.message);
                        _this.errorListStatus(true);
                        _this.setState({
                            errorList: rep.data
                        });
                    } else {
                        _message3.default.success(rep.data.message);
                    }
                } else {
                    _message3.default.warning(rep.data.message);
                }
            }).catch(function () {
                _this.setState({
                    uploading: false
                });
                _message3.default.error('upload failed.');
            });
        };

        _this.propsUpload = function () {
            return {
                action: '/hcm/hcmShop/readExcelFile',
                accept: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                onRemove: function onRemove(file) {
                    _this.setState(function (_ref) {
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
                    _this.setState(function () {
                        return {
                            fileList: [file]
                        };
                    });
                    return false;
                },
                fileList: _this.state.fileList
            };
        };

        _this.onuploadVisible = function (bl) {
            _this.setState({
                uploadVisible: bl,
                fileList: [],
                uploading: false,
                percent: null
            });
        };

        _this.onShowSetTable = function (bl, type) {
            if (type == 'getlist') {
                _this.getByProduct();
                _this.onSearch();
            }
            _this.setState({
                setTableVisible: bl
            }, function () {
                bl ? _this.ShopFile_SetTable.current.getByProduct() : null;
            });
        };

        _this.ShopFile_SetTable = React.createRef();
        _this.shopDetail = React.createRef();
        _this.state = {
            inviteLinkStatus: false,
            errorListStatus: false,
            errorList: {},
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

            dealername: null,
            isauthed: null,
            platform_code: null,
            shopname: null,
            oldSearch: {
                dealername: null,
                isauthed: null,
                platform_code: null,
                shopname: null
            },
            platForm: [],
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
            this.getPlatform();
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

/***/ })

}]);
//# sourceMappingURL=278_68a435c26ae688443796.js.map