(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[302],{

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

/***/ "./app/widget/index/Feedback/InfoFeedback.js":
/*!***************************************************!*\
  !*** ./app/widget/index/Feedback/InfoFeedback.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _upload = __webpack_require__(/*! antd/es/upload */ "./node_modules/_antd@3.10.1@antd/es/upload/index.js");

var _upload2 = _interopRequireDefault(_upload);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/upload/style/css */ "./node_modules/_antd@3.10.1@antd/es/upload/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _Copyright = __webpack_require__(/*! ../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

var _Layout = __webpack_require__(/*! ../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _ImgModal = __webpack_require__(/*! ../../components/ImgModal/ImgModal */ "./app/widget/components/ImgModal/ImgModal.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {LoadingModal} from '../../components/LoadingModal/LoadingModal';
var TextArea = _input2.default.TextArea;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            dataList: [],
            details: '',
            screenshotUrls: [],
            id: _this.props.match.params.id
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getDetail();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if (this.props.match.params.id !== nextProps.match.params.id) {
                this.setState({
                    id: nextProps.match.params.id
                }, function () {
                    _this2.getDetail();
                });
            }
        }
    }, {
        key: 'lookImg',
        value: function lookImg(urls, index) {
            (0, _ImgModal.ImgModal)({ bl: true, urls: urls, index: index, close: true });
        }
    }, {
        key: 'getDetail',
        value: function getDetail() {
            var _this3 = this;

            _ajax2.default.get('/hcm/hcmWorkOrder/selectdetail', {
                params: {
                    id: this.state.id,
                    replyId: this.state.id
                }
            }).then(function (response) {
                _this3.setState({
                    details: null,
                    screenshotUrls: [],
                    dataList: response.data.data
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        }
    }, {
        key: 'onChanges',
        value: function onChanges(e, type) {
            var state = this.state;
            state[type] = e.target.value;
            this.setState(state);
        }
    }, {
        key: 'changeUpload',
        value: function changeUpload(info) {
            var type = 'image/jpeg image/jpg image/png';
            var iStype = info.file.type.length ? type.indexOf(info.file.type) == -1 ? false : true : false;
            if (info.file.size / 1024 / 1024 < 10 && iStype) {
                this.setState({
                    screenshotUrls: info.fileList
                });
            }
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit() {
            var _this4 = this;

            var _state = this.state,
                details = _state.details,
                screenshotUrls = _state.screenshotUrls;

            if (!details || details.length <= 0) {
                _message3.default.error('请输入详情');
                return;
            }
            if (details && details.length > 500) {
                _message3.default.error('\u8BE6\u60C5\u957F\u5EA6\u4E0D\u5141\u8BB8\u8D85\u8FC7500\u5B57\u7B26\uFF0C\u5F53\u524D\u5B57\u7B26\u957F\u5EA6' + details.length);
                return;
            }
            LoadingModal({ bl: true, text: '提交中,请稍后...' });
            _ajax2.default.get('/hcm/hcmWorkOrder/saveWorkOrder', {
                params: {
                    workTitle: '',
                    sysType: localStorage.logintype,
                    details: details,
                    screenshotUrls: screenshotUrls.map(function (item, index) {
                        return item.response.data.data;
                    }).join(','),
                    status: 1,
                    replyId: this.props.match.params.id
                }
            }).then(function (response) {
                LoadingModal({ bl: false });
                if (response.data.status == '10000') {
                    _message3.default.success(response.data.message);
                    _this4.getDetail();
                }
            }).catch(function (error) {
                LoadingModal({ bl: false });
                _message3.default.error(error.statusText);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _state2 = this.state,
                dataList = _state2.dataList,
                _state2$details = _state2.details,
                details = _state2$details === undefined ? '' : _state2$details,
                screenshotUrls = _state2.screenshotUrls;

            return React.createElement(
                _Layout2.default,
                {
                    breadcrumbList: ['工单信息', '工单详情'],
                    linkList: ['1', ''],
                    history: this.props.history
                },
                React.createElement(
                    'div',
                    { className: 'infofeedback' },
                    dataList.length ? React.createElement(
                        'div',
                        { className: 'content' },
                        React.createElement(
                            'h2',
                            null,
                            dataList[0].workTitle
                        ),
                        React.createElement(
                            'ul',
                            { className: 'infolist' },
                            dataList.map(function (item, index) {
                                var realname = item.realname,
                                    details = item.details,
                                    screenshotUrls = item.screenshotUrls,
                                    _item$createtime = item.createtime,
                                    createtime = _item$createtime === undefined ? 0 : _item$createtime;

                                var urls = screenshotUrls == null || screenshotUrls == '' ? [] : screenshotUrls.split(',');
                                return React.createElement(
                                    'li',
                                    { className: 'infolist-item', key: index },
                                    React.createElement(
                                        'h6',
                                        null,
                                        realname
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        moment(createtime).format('YYYY-MM-DD HH:mm:ss')
                                    ),
                                    React.createElement(
                                        'pre',
                                        { style: { whiteSpace: 'inherit' } },
                                        details
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'imgBox' },
                                        urls.length ? urls.map(function (url, index2) {
                                            return React.createElement('img', { onClick: function onClick() {
                                                    return _this5.lookImg(urls, index2);
                                                }, key: index2, src: url });
                                        }) : null
                                    )
                                );
                            })
                        ),
                        React.createElement(
                            'h3',
                            null,
                            '\u56DE\u590D'
                        ),
                        React.createElement(
                            'div',
                            { style: { position: 'relative' }, className: 'info item' },
                            React.createElement(TextArea, { value: details, onChange: function onChange(e) {
                                    return _this5.onChanges(e, 'details');
                                }, placeholder: '\u56DE\u590D\u5185\u5BB9', className: 'textArea' }),
                            React.createElement(
                                'p',
                                { style: details && details.length > 500 ? { color: 'red' } : { color: '#999' }, className: 'length-alert' },
                                (details ? details.length : 0) + '/500'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'upload item' },
                            React.createElement(
                                'div',
                                { style: { width: '100%' } },
                                React.createElement(
                                    _upload2.default,
                                    {
                                        action: '/hcm/hcmWorkOrder/headImgUpload',
                                        listType: 'picture-card',
                                        accept: 'image/*',
                                        onChange: function onChange(info) {
                                            return _this5.changeUpload(info);
                                        },
                                        beforeUpload: function beforeUpload(file) {
                                            var isLt10M = file.size / 1024 / 1024 < 10;
                                            var type = 'image/jpeg image/jpg image/png';
                                            var iStype = file.type.length ? type.indexOf(file.type) == -1 ? false : true : false;
                                            if (!isLt10M) {
                                                _message3.default.error('图片不能大于10MB!');
                                            }
                                            if (!iStype) {
                                                _message3.default.error('支持图片格式jpeg，jpg，png。请重新选择');
                                            }
                                            return isLt10M && iStype;
                                        },
                                        fileList: screenshotUrls
                                    },
                                    React.createElement(
                                        'div',
                                        null,
                                        React.createElement(_icon2.default, { type: 'plus' }),
                                        React.createElement(
                                            'div',
                                            { className: 'ant-upload-text' },
                                            '\u4E0A\u4F20\u622A\u56FE'
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'buts' },
                            React.createElement(
                                _button2.default,
                                { className: 'btn2-main', onClick: function onClick() {
                                        return _this5.onSubmit();
                                    } },
                                '\u63D0\u4EA4'
                            ),
                            React.createElement(
                                'a',
                                { href: '/index.html#/Feedback' },
                                React.createElement(
                                    _button2.default,
                                    null,
                                    '\u53D6\u6D88'
                                )
                            )
                        )
                    ) : null
                )
            );
        }
    }]);

    return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_hasPath.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_hasPath.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/_lodash@4.17.11@lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/_lodash@4.17.11@lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/_lodash@4.17.11@lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/_lodash@4.17.11@lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/_lodash@4.17.11@lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/_lodash@4.17.11@lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ })

}]);
//# sourceMappingURL=302_11eb49e4e462db6faa51.js.map