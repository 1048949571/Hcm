(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./app/widget/components/ImgModal/ImgModal.js":
/*!****************************************************!*\
  !*** ./app/widget/components/ImgModal/ImgModal.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, ReactDom) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImgModal = undefined;

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! ./ImgModal.less */ "./app/widget/components/ImgModal/ImgModal.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 图片弹层
// ImgModal({bl:true,urls:urls,index:index,close:true})
// bl:true||false  展示隐藏  默认false 
// urls:arr 图片集合
// index： 默认展示数组中的第几张图片 默认值0
// close: 是否展示关闭按钮


var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            index: _this.props.index,
            rotate: 0,
            size: 1
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'onSwitch',
        value: function onSwitch(bl) {
            var _state = this.state,
                index = _state.index,
                rotate = _state.rotate,
                size = _state.size;
            var urls = this.props.urls;

            if (bl) {
                if (index == urls.length - 1) {
                    index = 0;
                } else {
                    index++;
                }
            } else {
                if (index <= 0) {
                    index = urls.length - 1;
                } else {
                    index--;
                }
            }
            this.setState({
                index: index,
                rotate: 0,
                size: 1
            });
        }
    }, {
        key: 'onSize',
        value: function onSize(bl) {
            var size = this.state.size;

            if (bl) {
                size += 0.5;
            } else {
                size = size <= 0.5 ? 0.5 : size - 0.5;
            }
            this.setState({
                size: size
            });
        }
    }, {
        key: 'onRotate',
        value: function onRotate(bl) {
            var rotate = this.state.rotate;

            if (bl) {
                rotate += 90;
            } else {
                rotate -= 90;
            }
            this.setState({
                rotate: rotate
            });
        }
    }, {
        key: 'colse',
        value: function colse() {
            ReactDom.unmountComponentAtNode(document.getElementById('ImgModal'));
            document.getElementsByTagName("body")[0].removeChild(document.getElementById('ImgModal'));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                _props$urls = _props.urls,
                urls = _props$urls === undefined ? [] : _props$urls,
                _props$close = _props.close,
                close = _props$close === undefined ? false : _props$close;
            var _state2 = this.state,
                _state2$index = _state2.index,
                index = _state2$index === undefined ? 0 : _state2$index,
                rotate = _state2.rotate,
                size = _state2.size;

            var oImg = document.createElement('img');
            oImg.src = urls[index];
            var naturalWidth = oImg.naturalWidth ? oImg.naturalWidth : 400;
            var naturalHeight = oImg.naturalHeight ? oImg.naturalHeight : 400;
            console.log(naturalWidth);
            return React.createElement(
                'div',
                { className: 'flexbox' },
                React.createElement(
                    'div',
                    { className: 'imgbox' },
                    close ? React.createElement(_icon2.default, { className: 'close', onClick: function onClick() {
                            return _this2.colse();
                        }, type: 'close-circle' }) : null,
                    React.createElement(
                        'div',
                        { className: 'box' },
                        React.createElement('img', { style: { width: size * (naturalWidth > 500 ? naturalWidth * 0.7 : naturalWidth) + 'px', transform: 'rotate(' + rotate + 'deg)' },
                            src: urls[index]
                        })
                    ),
                    React.createElement(
                        'div',
                        { className: 'buts' },
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onSwitch(false);
                            }, type: 'left' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onSwitch(true);
                            }, type: 'right' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onSize(true);
                            }, type: 'plus' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onSize(false);
                            }, type: 'minus' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onRotate(false);
                            }, className: 'left', type: 'reload' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onRotate(true);
                            }, className: 'right', type: 'reload' })
                    ),
                    React.createElement(
                        'div',
                        { style: { textAlign: 'center', fontSize: '12px' } },
                        React.createElement(
                            'a',
                            { target: '_blank', href: urls[index] },
                            '\u67E5\u770B\u539F\u56FE'
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

var ImgModal = exports.ImgModal = function ImgModal(page) {
    var _page$bl = page.bl,
        bl = _page$bl === undefined ? false : _page$bl,
        urls = page.urls;

    var div = document.createElement('div');
    div.setAttribute("id", "ImgModal");
    if (bl) {
        document.body.appendChild(div);
        ReactDom.render(React.createElement(App, page), document.getElementById('ImgModal'));
    } else {
        ReactDom.unmountComponentAtNode(document.getElementById('ImgModal'));
        document.getElementsByTagName("body")[0].removeChild(document.getElementById('ImgModal'));
    }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! react-dom */ "./node_modules/_react-dom@16.5.2@react-dom/index.js")))

/***/ }),

/***/ "./app/widget/components/ImgModal/ImgModal.less":
/*!******************************************************!*\
  !*** ./app/widget/components/ImgModal/ImgModal.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/MonitorInfo/columns.js":
/*!*******************************************************!*\
  !*** ./app/widget/index/Brand/MonitorInfo/columns.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ImgModal = __webpack_require__(/*! ../../../components/ImgModal/ImgModal */ "./app/widget/components/ImgModal/ImgModal.js");

var render = function render(text, item, index) {
    return React.createElement(
        'p',
        null,
        React.createElement(
            'span',
            null,
            text
        ),
        item.accept_my != '' ? React.createElement('img', { style: { margin: '0 10px' }, src: '../../../../img/Authorized.png' }) : null,
        item.white_my != '' ? React.createElement(
            'span',
            { className: 'white_my' },
            '\u767D\u540D\u5355'
        ) : null
    );
};
exports.default = {
    TB: [{
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        render: function render(text, item, index) {
            return index + 1;
        },
        align: 'left',
        width: '7%'
    }, {
        title: '平台',
        dataIndex: 'dict_name',
        key: 'dict_name',
        width: '10%'
    }, {
        title: '商品名称',
        dataIndex: 'title',
        key: 'title',
        render: function render(text, item, index) {
            return React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center' } },
                React.createElement('img', { onClick: function onClick() {
                        return (0, _ImgModal.ImgModal)({ bl: true, urls: [item.pic_url], index: 0, close: true });
                    }, style: { width: '50px', height: '50px', marginRight: '10px' }, src: item.pic_url }),
                React.createElement(
                    'a',
                    { onClick: function onClick() {
                            window.open(item.item_url);
                        } },
                    item.title
                )
            );
        },
        align: 'left',
        width: '40%'
    }, {
        title: '店铺名称',
        dataIndex: 'shop_name',
        key: 'shop_name',
        render: render,
        align: 'right',
        width: '15%'
    }, {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        align: 'right',
        width: '10%'
    }, {
        title: '销量',
        dataIndex: 'salesvolume',
        key: 'salesvolume',
        align: 'right',
        width: '10%'
    }, {
        title: '发货地',
        dataIndex: 'state;',
        key: 'state;',
        render: function render(text, item, index) {
            return React.createElement(
                'div',
                { style: { width: '150px' } },
                item.state,
                ' ',
                item.area
            );
        },
        align: 'right',
        width: '15%'
    }],
    TM: [{
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        render: function render(text, item, index) {
            return index + 1;
        },
        align: 'left',
        width: '7%'
    }, {
        title: '平台',
        dataIndex: 'dict_name',
        key: 'dict_name',
        width: '10%'
    }, {
        title: '商品名称',
        dataIndex: 'title',
        key: 'title',
        render: function render(text, item, index) {
            return React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center' } },
                React.createElement('img', { onClick: function onClick() {
                        return (0, _ImgModal.ImgModal)({ bl: true, urls: [item.pic_url], index: 0, close: true });
                    }, style: { width: '50px', height: '50px', marginRight: '10px' }, src: item.pic_url }),
                React.createElement(
                    'a',
                    { onClick: function onClick() {
                            window.open(item.item_url);
                        } },
                    item.title
                )
            );
        },
        align: 'left',
        width: '40%'
    }, {
        title: '店铺',
        dataIndex: 'shop_name',
        key: 'shop_name',
        render: render,
        align: 'right',
        width: '15%'
    }, {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        align: 'right',
        width: '10%'
    }, {
        title: '销量',
        dataIndex: 'salesvolume',
        key: 'salesvolume',
        align: 'right',
        width: '10%'
    }, {
        title: '发货地',
        dataIndex: 'state;',
        key: 'state;',
        render: function render(text, item, index) {
            return React.createElement(
                'div',
                { style: { width: '150px' } },
                item.state,
                ' ',
                item.area
            );
        },
        align: 'right',
        width: '15%'
    }],
    1688: [{
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        render: function render(text, item, index) {
            return index + 1;
        },
        align: 'left',
        width: '7%'
    }, {
        title: '商品信息',
        dataIndex: 'title',
        key: 'title',
        render: function render(text, item, index) {
            return React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center' } },
                React.createElement('img', { onClick: function onClick() {
                        return (0, _ImgModal.ImgModal)({ bl: true, urls: [item.pic_url], index: 0, close: true });
                    }, style: { width: '50px', height: '50px', marginRight: '10px' }, src: item.pic_url }),
                React.createElement(
                    'a',
                    { onClick: function onClick() {
                            window.open(item.item_url);
                        } },
                    item.title
                )
            );
        },
        align: 'left',
        width: '40%'
    }, {
        title: '公司名称',
        dataIndex: 'nickname',
        key: 'nickname',
        render: render,
        align: 'right',
        width: '18%'
    }, {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        align: 'right',
        width: '15%'
    }, {
        title: '销量',
        dataIndex: 'salesvolume',
        key: 'salesvolume',
        align: 'right',
        width: '10%'
    }, {
        title: '发货地',
        dataIndex: 'itemarea',
        key: 'itemarea',
        align: 'right',
        width: '15%'
    }],
    PDD: [{
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        render: function render(text, item, index) {
            return index + 1;
        },
        align: 'left',
        width: '7%'
    }, {
        title: '商品信息',
        dataIndex: 'title',
        key: 'title',
        render: function render(text, item, index) {
            return React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center' } },
                React.createElement('img', { onClick: function onClick() {
                        return (0, _ImgModal.ImgModal)({ bl: true, urls: [item.pic_url], index: 0, close: true });
                    }, style: { width: '50px', height: '50px', marginRight: '10px' }, src: item.pic_url }),
                React.createElement(
                    'a',
                    { onClick: function onClick() {
                            window.open(item.item_url);
                        } },
                    item.title
                )
            );
        },
        align: 'left',
        width: '40%'
    }, {
        title: '店铺名称',
        dataIndex: 'nickname',
        key: 'nickname',
        render: render,
        align: 'right',
        width: '18%'
    }, {
        title: '拼单价',
        dataIndex: 'price',
        key: 'price',
        align: 'right',
        width: '15%'
    }, {
        title: '已拼件数',
        dataIndex: 'salesvolume',
        key: 'salesvolume',
        align: 'right',
        width: '10%'
    }, {
        title: '评价数',
        dataIndex: 'ratenum',
        key: 'ratenum',
        align: 'right',
        width: '15%'
    }],
    JD: [{
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        render: function render(text, item, index) {
            return index + 1;
        },
        align: 'left',
        width: '7%'
    }, {
        title: '商品信息',
        dataIndex: 'title',
        key: 'title',
        render: function render(text, item, index) {
            return React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center' } },
                React.createElement('img', { onClick: function onClick() {
                        return (0, _ImgModal.ImgModal)({ bl: true, urls: [item.pic_url], index: 0, close: true });
                    }, style: { width: '50px', height: '50px', marginRight: '10px' }, src: item.pic_url }),
                React.createElement(
                    'a',
                    { onClick: function onClick() {
                            window.open(item.item_url);
                        } },
                    item.title
                )
            );
        },
        align: 'left',
        width: '40%'
    }, {
        title: '店铺名称',
        dataIndex: 'nickname',
        key: 'nickname',
        render: render,
        align: 'right',
        width: '18%'
    }, {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        align: 'right',
        width: '15%'
    }, {
        title: '评价数',
        dataIndex: 'ratenum',
        key: 'ratenum',
        align: 'right',
        width: '15%'
    }],
    SN: [{
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        render: function render(text, item, index) {
            return index + 1;
        },
        align: 'left',
        width: '7%'
    }, {
        title: '商品信息',
        dataIndex: 'title',
        key: 'title',
        render: function render(text, item, index) {
            return React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center' } },
                React.createElement('img', { onClick: function onClick() {
                        return (0, _ImgModal.ImgModal)({ bl: true, urls: [item.pic_url], index: 0, close: true });
                    }, style: { width: '50px', height: '50px', marginRight: '10px' }, src: item.pic_url }),
                React.createElement(
                    'a',
                    { onClick: function onClick() {
                            window.open(item.item_url);
                        } },
                    item.title
                )
            );
        },
        align: 'left',
        width: '40%'
    }, {
        title: '店铺名称',
        dataIndex: 'nickname',
        render: render,
        key: 'nickname',
        align: 'right',
        width: '18%'
    }, {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        align: 'right',
        width: '15%'
    }, {
        title: '评价数',
        dataIndex: 'ratenum',
        key: 'ratenum',
        align: 'right',
        width: '15%'
    }],
    DD: [{
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        render: function render(text, item, index) {
            return index + 1;
        },
        align: 'left',
        width: '7%'
    }, {
        title: '商品信息',
        dataIndex: 'title',
        key: 'title',
        render: function render(text, item, index) {
            return React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center' } },
                React.createElement('img', { onClick: function onClick() {
                        return (0, _ImgModal.ImgModal)({ bl: true, urls: [item.pic_url], index: 0, close: true });
                    }, style: { width: '50px', height: '50px', marginRight: '10px' }, src: item.pic_url }),
                React.createElement(
                    'a',
                    { onClick: function onClick() {
                            window.open(item.item_url);
                        } },
                    item.title
                )
            );
        },
        align: 'left',
        width: '40%'
    }, {
        title: '店铺名称',
        dataIndex: 'nickname',
        key: 'nickname',
        render: render,
        align: 'right',
        width: '18%'
    }, {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        align: 'right',
        width: '15%'
    }, {
        title: '评价数',
        dataIndex: 'ratenum',
        key: 'ratenum',
        align: 'right',
        width: '15%'
    }],
    WPH: [{
        title: '序号',
        dataIndex: 'index',
        key: 'index',
        render: function render(text, item, index) {
            return index + 1;
        },
        align: 'left',
        width: '7%'
    }, {
        title: '商品信息',
        dataIndex: 'title',
        key: 'title',
        render: function render(text, item, index) {
            return React.createElement(
                'div',
                { style: { display: 'flex', alignItems: 'center' } },
                React.createElement('img', { onClick: function onClick() {
                        return (0, _ImgModal.ImgModal)({ bl: true, urls: [item.pic_url], index: 0, close: true });
                    }, style: { width: '50px', height: '50px', marginRight: '10px' }, src: item.pic_url }),
                React.createElement(
                    'a',
                    { onClick: function onClick() {
                            window.open(item.item_url);
                        } },
                    item.title
                )
            );
        },
        align: 'left',
        width: '40%'
    }, {
        title: '公司名称',
        dataIndex: 'nickname',
        key: 'nickname',
        render: render,
        align: 'right',
        width: '15%'
    }, {
        title: '价格',
        dataIndex: 'discount_price',
        key: 'discount_price',
        align: 'right',
        width: '10%'
    }, {
        title: '原价',
        dataIndex: 'price',
        key: 'price',
        align: 'right',
        width: '10%'
    }, {
        title: '折扣率',
        dataIndex: 'discount',
        key: 'discount',
        align: 'right',
        width: '15%'
    }]
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=48_2647aa59d857ab3cf445.js.map