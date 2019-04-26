(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[301],{

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

/***/ "./app/widget/index/Feedback/AddFeedback.js":
/*!**************************************************!*\
  !*** ./app/widget/index/Feedback/AddFeedback.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _upload = __webpack_require__(/*! antd/es/upload */ "./node_modules/_antd@3.10.1@antd/es/upload/index.js");

var _upload2 = _interopRequireDefault(_upload);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/upload/style/css */ "./node_modules/_antd@3.10.1@antd/es/upload/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _Copyright = __webpack_require__(/*! ../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = _input2.default.TextArea;
// import {LoadingModal} from '../../components/LoadingModal/LoadingModal';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            workTitle: null,
            details: '',
            screenshotUrls: []
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'onChanges',
        value: function onChanges(e, type) {
            var state = this.state;
            state[type] = e.target.value;
            this.setState(state);
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit() {
            var _state = this.state,
                workTitle = _state.workTitle,
                details = _state.details,
                screenshotUrls = _state.screenshotUrls;

            if (!workTitle || workTitle.length <= 0) {
                _message3.default.error('请输入标题');
                return;
            } else if (workTitle && workTitle.length > 30) {
                _message3.default.error('\u6807\u9898\u957F\u5EA6\u4E0D\u5141\u8BB8\u8D85\u8FC730\u5B57\u7B26\uFF0C\u5F53\u524D\u5B57\u7B26\u957F\u5EA6' + workTitle.length);
                return;
            } else if (!details || details.length <= 0) {
                _message3.default.error('请输入详情');
                return;
            } else if (details && details.length > 500) {
                _message3.default.error('\u8BE6\u60C5\u957F\u5EA6\u4E0D\u5141\u8BB8\u8D85\u8FC7500\u5B57\u7B26\uFF0C\u5F53\u524D\u5B57\u7B26\u957F\u5EA6' + details.length);
                return;
            }
            LoadingModal({ bl: true, text: '提交中,请稍后...' });
            _ajax2.default.get('/hcm/hcmWorkOrder/saveWorkOrder', {
                params: {
                    sysType: localStorage.logintype,
                    workTitle: workTitle,
                    details: details,
                    screenshotUrls: screenshotUrls.length ? screenshotUrls.map(function (item, index) {
                        return item.response.data.data;
                    }).join(',') : null,
                    status: 1
                }
            }).then(function (response) {
                LoadingModal({ bl: false });
                if (response.data.status == '10000') {
                    _message3.default.success(response.data.message);
                    window.location.href = '/index.html#/Feedback';
                }
            }).catch(function (error) {
                LoadingModal({ bl: false });
                _message3.default.error(error.statusText);
            });
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
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state2 = this.state,
                workTitle = _state2.workTitle,
                details = _state2.details,
                screenshotUrls = _state2.screenshotUrls;

            return React.createElement(
                'div',
                { className: 'addfeedback' },
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
                                { href: '/index.html#/Feedback' },
                                '\u5DE5\u5355\u4FE1\u606F'
                            )
                        ),
                        React.createElement(
                            _breadcrumb2.default.Item,
                            null,
                            '\u65B0\u589E\u5DE5\u5355'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'content' },
                    React.createElement(
                        'div',
                        { className: 'tit item' },
                        React.createElement(
                            'span',
                            { className: 'red-ck text' },
                            '\u5DE5\u5355\u6807\u9898\uFF1A'
                        ),
                        React.createElement(_input2.default, { value: workTitle, onChange: function onChange(e) {
                                return _this2.onChanges(e, 'workTitle');
                            }, placeholder: '\u8BF7\u8F93\u5165\uFF0C30\u5B57\u4EE5\u5185', className: 'input' })
                    ),
                    React.createElement(
                        'div',
                        { style: { position: 'relative' }, className: 'info item' },
                        React.createElement(
                            'span',
                            { className: 'red-ck text' },
                            '\u5DE5\u5355\u8BE6\u60C5\uFF1A'
                        ),
                        React.createElement(TextArea, { value: details, onChange: function onChange(e) {
                                return _this2.onChanges(e, 'details');
                            }, placeholder: '\u8BF7\u8F93\u5165\uFF0C500\u5B57\u4EE5\u5185', className: 'textArea' }),
                        React.createElement(
                            'p',
                            { style: details.length > 500 ? { color: 'red' } : { color: '#999' }, className: 'length-alert' },
                            details.length + '/500'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'upload item' },
                        React.createElement(
                            'span',
                            { className: 'text' },
                            '\u4E0A\u4F20\u622A\u56FE\uFF1A'
                        ),
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
                                        return _this2.changeUpload(info);
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
                                        'Upload'
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
                            { className: 'gdsubm', onClick: function onClick() {
                                    return _this2.onSubmit();
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
                ),
                React.createElement(_Copyright2.default, { clazzName: 'copyright' })
            );
        }
    }]);

    return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

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
//# sourceMappingURL=301_7c7072aad0ae09522890.js.map