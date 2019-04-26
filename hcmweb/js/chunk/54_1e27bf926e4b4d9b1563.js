(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./app/widget/index/Brand/OrderAnalysis/Add.js":
/*!*****************************************************!*\
  !*** ./app/widget/index/Brand/OrderAnalysis/Add.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cascader = __webpack_require__(/*! antd/es/cascader */ "./node_modules/_antd@3.10.1@antd/es/cascader/index.js");

var _cascader2 = _interopRequireDefault(_cascader);

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/cascader/style/css */ "./node_modules/_antd@3.10.1@antd/es/cascader/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var Add = function (_React$Component) {
    _inherits(Add, _React$Component);

    function Add(props) {
        _classCallCheck(this, Add);

        var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

        _this.showModal = function (type, bl) {
            _this.setState(_defineProperty({}, type, bl), function () {
                if (_this.state.shopVisible) {
                    _this.getShopList();
                } else if (_this.state.itemVisible) {
                    _this.getSingletProList();
                    _this.getProductClassify();
                }
            });
        };

        _this.addShop = function () {
            var shopData = _this.state.shopData;
            shopData.selectData.push({
                id: "",
                shop_name: "123"
            });
            _this.setState({
                shopData: shopData
            });
        };

        _this.rmShop = function (index) {
            var shopData = _this.state.shopData;
            if (shopData.selectData.length == 1) {
                _message3.default.warning('最少保留一条');
                return;
            }
            shopData.selectData.splice(index, 1);
            _this.setState({
                shopData: shopData
            });
        };

        _this.onShopSelect = function (e, index) {
            var shopData = _this.state.shopData;

            shopData.selectData[index] = shopData.listData.filter(function (item) {
                return item.id == e;
            })[0];
            _this.setState({
                shopData: shopData
            });
        };

        _this.getShopList = function () {
            _ajax2.default.get('/hcm/hcmShop/getShopListByBmcid').then(function (response) {
                if (response.data.status == '10000') {

                    var shopData = _this.state.shopData;
                    var data = response.data.data;
                    shopData.selectData = data.filter(function (item, index) {
                        return item.focus;
                    });
                    shopData.listData = data;
                    _this.setState({
                        shopData: shopData
                    });
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.handleshopOk = function () {
            var shopData = _this.state.shopData;
            var arr = shopData.selectData.map(function (item) {
                return item.id;
            });
            if (shopData.selectData.length == 0) {
                _message3.default.warning('最少添加一个重点关注店铺');
                return;
            }
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == '') {
                    _message3.default.warning('\u7B2C' + (i + 1) + '\u6761\u6570\u636E\u672A\u9009\u62E9\u5E97\u94FA\uFF0C\u8BF7\u9009\u62E9\u540E\u63D0\u4EA4\uFF01');
                    return;
                }
            }
            _ajax2.default.post('/hcm/hcmShop/setFocusShop', {
                shopids: arr.join(',')
            }).then(function (response) {
                if (response.data.status == '10000') {
                    _this.showModal('shopVisible', false);
                    _message3.default.success(response.data.message);
                    _this.props.getShop();
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.handleItemOk = function () {
            var itemData = _this.state.itemData;
            var arr = itemData.selectData.map(function (item) {
                return item.id;
            });
            if (itemData.selectData.length == 0) {
                _message3.default.warning('最少添加一个重点关注单品');
                return;
            }
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == '') {
                    _message3.default.warning('\u7B2C' + (i + 1) + '\u6761\u6570\u636E\u672A\u9009\u62E9\u5355\u54C1\uFF0C\u8BF7\u9009\u62E9\u540E\u63D0\u4EA4\uFF01');
                    return;
                }
            }
            _ajax2.default.post('/hcm/hcmProduct/updateSingletPro', {
                product_id: arr.join(',')
            }).then(function (response) {
                if (response.data.status == '10000') {
                    _this.showModal('itemVisible', false);
                    _this.props.getItem();
                    _message3.default.success(response.data.message);
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.getSingletProList = function () {
            _ajax2.default.get('/hcm/hcmProduct/findSingletProList').then(function (response) {
                if (response.data.status == '10000') {
                    var itemData = _this.state.itemData;
                    var data = response.data.data;
                    itemData.selectData = data;
                    _this.setState({
                        itemData: itemData
                    });
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.getProductClassify = function () {
            _ajax2.default.get('/hcm/ProductClassify/list').then(function (response) {
                if (response.data.status == '10000') {
                    var itemData = _this.state.itemData;
                    var data = response.data.data;
                    itemData.listData = data.map(function (v) {
                        return Object.assign({}, v, { isLeaf: false, label: v.productClassifyName, value: v.id });
                    });
                    _this.setState({
                        itemData: itemData
                    });
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.getlistByClass = function (product_classify_id, callback) {
            _ajax2.default.get('/hcm/hcmProduct/listByClass', {
                params: {
                    product_classify_id: product_classify_id
                }
            }).then(function (response) {
                if (response.data.status == '10000') {
                    callback(response.data.data);
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.onChangeCascaders = function (value, selectedOptions, index) {
            console.log(value, selectedOptions);
            if (value.length == 2) {
                var itemData = _this.state.itemData;
                itemData.selectData[index] = {
                    brand_name: selectedOptions[1].brandName,
                    id: value[1],
                    product_classify_id: value[0],
                    product_classify_name: selectedOptions[0].productClassifyName,
                    product_name: selectedOptions[0].productClassifyName + '/' + selectedOptions[1].productName
                };
                _this.setState({
                    itemData: itemData
                });
            }
        };

        _this.loadData = function (selectedOptions) {
            var targetOption = selectedOptions[selectedOptions.length - 1];
            targetOption.loading = true;

            _this.getlistByClass(targetOption.id, function (data) {
                var itemData = _this.state.itemData;
                targetOption.loading = false;
                var list = data.map(function (v) {
                    return Object.assign({}, v, { label: v.productName, value: v.id });
                });
                if (list.length) {
                    targetOption.children = list;
                } else {
                    targetOption.disabled = true;
                    targetOption.isLeaf = true;
                }

                itemData.listData = [].concat(_toConsumableArray(_this.state.itemData.listData));
                _this.setState({
                    itemData: itemData
                });
            });
        };

        _this.addItem = function () {
            var itemData = _this.state.itemData;
            itemData.selectData.push({
                brand_name: '',
                id: '',
                product_classify_id: '',
                product_classify_name: '',
                product_name: ''
            });
            _this.setState({
                itemData: itemData
            });
        };

        _this.rmItem = function (index) {
            var itemData = _this.state.itemData;
            if (itemData.selectData.length == 1) {
                _message3.default.warning('最少保留一条');
                return;
            }
            itemData.selectData.splice(index, 1);
            _this.setState({
                itemData: itemData
            });
        };

        _this.state = {
            id: null,
            itemVisible: false,
            shopVisible: false,
            shopData: {
                selectData: [],
                listData: []
            },
            itemData: {
                selectData: [],
                listData: []
            }

        };
        return _this;
    }

    _createClass(Add, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                itemVisible = _state.itemVisible,
                shopVisible = _state.shopVisible,
                shopData = _state.shopData,
                itemData = _state.itemData;


            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    _modal2.default,
                    {
                        title: '\u91CD\u70B9\u5173\u6CE8\u5E97\u94FA\u7BA1\u7406',
                        okButtonProps: { className: 'btn2-main' },
                        cancelButtonProps: { className: 'btn2-sub' },
                        className: 'add-shop-modal',
                        visible: shopVisible,
                        onCancel: function onCancel() {
                            return _this2.showModal('shopVisible', false);
                        },
                        onOk: this.handleshopOk
                    },
                    React.createElement(
                        _row2.default,
                        null,
                        React.createElement(
                            _col2.default,
                            { className: 'text-right', span: 5 },
                            React.createElement(
                                'span',
                                { style: { paddingRight: 10, verticalAlign: '-4px' } },
                                '\u5E97\u94FA\u540D\u79F0:'
                            )
                        ),
                        React.createElement(
                            _col2.default,
                            { span: 17, offse: 1 },
                            shopData.selectData && shopData.selectData.map(function (item, index) {
                                return React.createElement(
                                    'div',
                                    { key: index, style: { marginBottom: '10px', display: 'flex', alignItems: 'center' } },
                                    React.createElement(
                                        _select2.default,
                                        {
                                            showSearch: true,
                                            value: item.id,
                                            style: { width: '100%' },
                                            onChange: function onChange(e) {
                                                _this2.onShopSelect(e, index);
                                            },
                                            filterOption: function filterOption(input, option) {
                                                return option.props.children[0].toLowerCase().indexOf(input.toLowerCase()) >= 0;
                                            }
                                        },
                                        shopData.listData.map(function (item2, index2) {
                                            return React.createElement(
                                                Option,
                                                {
                                                    key: index2,
                                                    disabled: item2.isauthed == 'NOTAUTH' || shopData.selectData.filter(function (item3) {
                                                        return item3.id == item2.id;
                                                    }).length ? true : false,
                                                    value: item2.id
                                                },
                                                item2.shop_name,
                                                ' ',
                                                item2.isauthed == 'NOTAUTH' ? ' (未订购) ' : null
                                            );
                                        })
                                    ),
                                    React.createElement(_icon2.default, { onClick: function onClick(e) {
                                            return _this2.rmShop(index);
                                        }, type: 'minus-circle' })
                                );
                            }),
                            React.createElement(
                                'div',
                                { className: 'addshop' },
                                React.createElement(
                                    _button2.default,
                                    { style: { width: '100%' }, disabled: shopData.selectData.length >= 5, onClick: this.addShop, type: 'dashed' },
                                    '\u6DFB\u52A0'
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    _modal2.default,
                    {
                        title: '\u91CD\u70B9\u5173\u6CE8\u5355\u54C1\u7BA1\u7406',
                        className: 'add-shop-modal',
                        okButtonProps: { className: 'btn2-main' },
                        cancelButtonProps: { className: 'btn2-sub' },
                        visible: itemVisible,
                        onOk: this.handleItemOk,
                        onCancel: function onCancel() {
                            return _this2.showModal('itemVisible', false);
                        }
                    },
                    React.createElement(
                        _row2.default,
                        null,
                        React.createElement(
                            _col2.default,
                            { className: 'text-right', span: 5 },
                            React.createElement(
                                'span',
                                { style: { paddingRight: 10, verticalAlign: '-4px' } },
                                '\u5546\u54C1\u540D\u79F0:'
                            )
                        ),
                        React.createElement(
                            _col2.default,
                            { span: 17, offse: 1 },
                            itemData.selectData.map(function (item, index) {
                                return React.createElement(
                                    'div',
                                    { key: index, style: { marginBottom: '10px', display: 'flex', alignItems: 'center' } },
                                    React.createElement(_cascader2.default, {
                                        style: { width: '100%' },
                                        value: [item.product_classify_id, item.id],
                                        options: itemData.listData,
                                        onChange: function onChange(value, selectedOptions) {
                                            return _this2.onChangeCascaders(value, selectedOptions, index);
                                        },
                                        loadData: _this2.loadData,
                                        changeOnSelect: true
                                    }),
                                    React.createElement(_icon2.default, { onClick: function onClick(e) {
                                            return _this2.rmItem(index);
                                        }, type: 'minus-circle' })
                                );
                            }),
                            React.createElement(
                                'div',
                                { className: 'addshop' },
                                React.createElement(
                                    _button2.default,
                                    { style: { width: '100%' }, disabled: itemData.selectData.length >= 5, onClick: this.addItem, type: 'dashed' },
                                    '\u6DFB\u52A0'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Add;
}(React.Component);

exports.default = Add;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=54_1e27bf926e4b4d9b1563.js.map