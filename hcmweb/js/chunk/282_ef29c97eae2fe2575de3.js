(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[282],{

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

/***/ "./app/widget/index/Brand/UrlMonitor/InfoMonitor.js":
/*!**********************************************************!*\
  !*** ./app/widget/index/Brand/UrlMonitor/InfoMonitor.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _popover = __webpack_require__(/*! antd/es/popover */ "./node_modules/_antd@3.10.1@antd/es/popover/index.js");

var _popover2 = _interopRequireDefault(_popover);

var _badge = __webpack_require__(/*! antd/es/badge */ "./node_modules/_antd@3.10.1@antd/es/badge/index.js");

var _badge2 = _interopRequireDefault(_badge);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

__webpack_require__(/*! antd/es/popover/style/css */ "./node_modules/_antd@3.10.1@antd/es/popover/style/css.js");

__webpack_require__(/*! antd/es/badge/style/css */ "./node_modules/_antd@3.10.1@antd/es/badge/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _ImgModal = __webpack_require__(/*! ../../../components/ImgModal/ImgModal */ "./app/widget/components/ImgModal/ImgModal.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangePicker = _datePicker2.default.RangePicker;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.getInfo = function () {
            _ajax2.default.get('/hcm/monitorLink/GetObj', {
                params: {
                    id: _this.props.match.params.id
                }
            }).then(function (response) {
                var data = response.data.data;
                _this.setState({
                    itemInfo: data
                }, function () {
                    _this.getList();
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.getList = function () {
            var _this$state = _this.state,
                itemInfo = _this$state.itemInfo,
                pageNo = _this$state.pageNo,
                pageSize = _this$state.pageSize,
                start_date = _this$state.start_date,
                end_date = _this$state.end_date;

            _ajax2.default.get('/hcm/monitorLink/GetDetailList', {
                params: {

                    pageNo: pageNo,
                    pageSize: pageSize,
                    start_date: moment(start_date).format('YYYY-MM-DD'),
                    end_date: moment(end_date).format('YYYY-MM-DD'),
                    id: itemInfo.id,
                    itemlink: itemInfo.itemlink
                }
            }).then(function (response) {
                var data = response.data.data;
                _this.setState({
                    dataList: data.content,
                    pageNo: data.pageNumber,
                    pageSize: data.pageSize,
                    totalNum: data.totalElements
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.onRangePicker = function (dates) {
            _this.setState({
                pageNo: 1,
                start_date: dates[0],
                end_date: dates[1]
            }, function () {
                _this.getList();
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
                width: '7%',
                render: function render(text, item, index) {
                    return index + 1;
                }
            }, {
                title: '更新时间',
                dataIndex: 'monitor_time',
                key: 'monitor_time',
                width: '20%',

                render: function render(text, item, index) {
                    return React.createElement(
                        'div',
                        { style: { whiteSpace: 'nowrap' } },
                        moment(text).format('YYYY年MM月DD日 HH:mm:ss'),
                        React.createElement(_badge2.default, { count: item.islowprice ? '低' : null })
                    );
                }

            }, {
                title: '监控信息',
                dataIndex: 'itemtitle',
                key: 'itemtitle',
                width: '35%',
                render: function render(text, item, index) {
                    return React.createElement(
                        'div',
                        { style: { display: 'flex' } },
                        React.createElement(
                            _popover2.default,
                            { content: React.createElement('img', { style: { width: '200px' }, src: item.logopicurl }), trigger: 'hover' },
                            React.createElement('img', { style: { width: '50px', height: '50px' }, src: item.logopicurl })
                        ),
                        React.createElement(
                            'p',
                            { style: { paddingLeft: '10px' } },
                            text
                        )
                    );
                }
            }, {
                title: '价格',
                align: 'right',
                dataIndex: 'itemprice',
                key: 'itemprice'
            }, {
                title: '销量',
                align: 'right',
                dataIndex: 'salevolume',
                key: 'salevolume'
            }, {
                title: '状态',
                align: 'right',
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
                title: '低价快照',
                align: 'right',
                dataIndex: 'lowprice_screenshot',
                key: 'lowprice_screenshot',
                render: function render(text, item, index) {
                    return React.createElement(
                        'a',
                        { disabled: !item.islowprice, onClick: function onClick() {
                                return (0, _ImgModal.ImgModal)({ bl: true, urls: [text], index: 0, close: true });
                            } },
                        '\u67E5\u770B\u5FEB\u7167'
                    );
                }
            }];
        };

        _this.state = {
            pageNo: 1,
            pageSize: 10,
            totalNum: 0,
            start_date: moment().subtract(7, 'days'),
            end_date: moment(),
            itemInfo: {},
            dataList: []
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.getInfo();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                itemInfo = _state.itemInfo,
                start_date = _state.start_date,
                end_date = _state.end_date,
                dataList = _state.dataList,
                pageNo = _state.pageNo,
                pageSize = _state.pageSize,
                totalNum = _state.totalNum;

            return React.createElement(
                'div',
                { className: 'infomonitor' },
                React.createElement(
                    'div',
                    { className: 'Breadcrumb' },
                    React.createElement(
                        _breadcrumb2.default,
                        null,
                        React.createElement(
                            _breadcrumb2.default.Item,
                            null,
                            React.createElement(
                                'a',
                                { href: '/index.html#/UrlMonitor' },
                                '\u5355\u94FE\u63A5\u76D1\u63A7'
                            )
                        ),
                        React.createElement(
                            _breadcrumb2.default.Item,
                            null,
                            '\u76D1\u63A7\u8BE6\u60C5'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'item-info' },
                    React.createElement(
                        'h5',
                        null,
                        '\u8BA1\u5212\u4FE1\u606F'
                    ),
                    React.createElement(
                        'div',
                        { className: 'item' },
                        React.createElement(
                            'div',
                            { style: { paddingRight: '50px' } },
                            React.createElement(
                                'span',
                                null,
                                '\u5546\u54C1\u540D\u79F0\uFF1A'
                            ),
                            React.createElement(
                                'a',
                                { target: '_blank', href: itemInfo.itemlink },
                                itemInfo.itemtitle
                            )
                        ),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'span',
                                null,
                                '\u9650\u4EF7\uFF1A'
                            ),
                            itemInfo.itemprice
                        )
                    ),
                    React.createElement(
                        'div',
                        { style: { fontSize: '14px', color: '#666' } },
                        React.createElement(
                            'span',
                            { style: { color: '#333' } },
                            '\u5E97\u94FA\uFF1A'
                        ),
                        React.createElement(
                            'span',
                            null,
                            itemInfo.shopname,
                            ' '
                        ),
                        React.createElement(
                            'span',
                            { style: { padding: '0px 10px' } },
                            itemInfo.dealer_id && itemInfo.dealer_id > 0 ? '已授权' : null
                        ),
                        itemInfo.platform == '天猫' ? React.createElement('img', { style: { verticalAlign: 'bottom', paddingRight: '10px' }, src: '../../../img/icon/Tmall.png' }) : React.createElement('img', { style: { verticalAlign: 'bottom', paddingRight: '10px' }, src: '../../../img/icon/Taobao.png' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'content' },
                    React.createElement(
                        'div',
                        { className: 'buts' },
                        React.createElement(
                            _button2.default,
                            { href: '/hcm/monitorLink/downLoad?start_date=' + moment(start_date).format('YYYY-MM-DD') + '&end_date=' + moment(end_date).format('YYYY-MM-DD') + '&id=' + itemInfo.id + '&itemlink=' + itemInfo.itemlink },
                            '\u4E0B\u8F7D\u6570\u636E'
                        ),
                        React.createElement(RangePicker, { allowClear: false, onChange: function onChange(dates) {
                                return _this2.onRangePicker(dates);
                            }, value: [start_date, end_date] })
                    ),
                    React.createElement(
                        'div',
                        { className: 'content-tab' },
                        React.createElement(_table2.default, { rowKey: 'id', pagination: false, columns: this.formatColumn(), dataSource: dataList }),
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
                            React.createElement(_pagination2.default, { pageSize: pageSize, current: pageNo, total: totalNum, onChange: this.changePagination, onShowSizeChange: this.onPaginationSize, showSizeChanger: true, showQuickJumper: true })
                        )
                    )
                ),
                React.createElement(_Copyright2.default, { clazzName: 'copyright' })
            );
        }
    }]);

    return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=282_ef29c97eae2fe2575de3.js.map