(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./app/widget/components/TagInput/main.js":
/*!************************************************!*\
  !*** ./app/widget/components/TagInput/main.js ***!
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/components/TagInput/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.targetValue = function (e) {
            var targetItem = _this.state.targetItem;
            targetItem.value = e.target.value;
            _this.setState({
                targetItem: targetItem
            });
        };

        _this.editItem = function (item, index) {
            var targetItem = {
                value: item,
                index: index
            };
            _this.setState({
                targetItem: targetItem
            });
        };

        _this.onFocusInput = function (e) {
            if (e.target.nodeName != 'INPUT' && e.target.nodeName != 'SVG') {
                _this.tag_input_textarea.current.focus();
            }
            e.stopPropagation();
        };

        _this.subItem = function () {
            var targetItem = _this.state.targetItem;
            var values = _this.state.values;
            values[targetItem.index] = targetItem.value;

            if (targetItem.value.length > _this.props.maxText) {
                _message3.default.error(React.createElement(
                    'span',
                    null,
                    '\u5B57\u7B26\u957F\u5EA6\u6700\u5927\u957F\u5EA6',
                    React.createElement(
                        'span',
                        { className: 'red' },
                        _this.props.maxText
                    ),
                    ', \u672C\u6761\u957F\u5EA6\u4E3A',
                    React.createElement(
                        'span',
                        { className: 'red' },
                        targetItem.value.length
                    ),
                    ', \u8BF7\u91CD\u65B0\u7F16\u8F91\uFF01'
                ));
                return;
            }

            var newSet = new Set(values);
            _this.setState({
                values: [].concat(_toConsumableArray(newSet)),
                targetItem: {
                    index: null,
                    value: null
                }
            }, function () {
                _this.props.onChange(_this.state.values);
            });
        };

        _this.rmItem = function (index) {
            var values = _this.state.values;
            values.splice(index, 1);
            _this.setState({
                values: values
            }, function () {
                _this.props.onChange(_this.state.values);
            });
        };

        _this.changeValue = function (e) {
            if (e.target.value != '\n') {
                _this.setState({
                    inputValue: e.target.value
                });
            }
        };

        _this.keyDownValue = function (e) {
            if (e.keyCode == 13 && _this.state.inputValue != '\n') {
                var arr = new Set(_this.state.values.concat(_this.state.inputValue.split('\n')));
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        if (item.length > _this.props.maxText) {
                            _message3.default.error(React.createElement(
                                'span',
                                null,
                                '\u5B57\u7B26\u957F\u5EA6\u6700\u5927\u957F\u5EA6',
                                React.createElement(
                                    'span',
                                    { className: 'red' },
                                    _this.props.maxText
                                ),
                                ',',
                                item,
                                '\u957F\u5EA6\u4E3A',
                                React.createElement(
                                    'span',
                                    { className: 'red' },
                                    item.length
                                ),
                                ', \u5DF2\u7ECF\u4E3A\u60A8\u81EA\u52A8\u5220\u9664\uFF01'
                            ));
                            arr.delete(item);
                        }
                        if (item.length && item.trim() == '') {
                            _message3.default.error(React.createElement(
                                'span',
                                null,
                                '\u7A7A\u5B57\u7B26\u6761\u76EE\u5DF2\u81EA\u52A8\u5220\u9664'
                            ));
                            arr.delete(item);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                arr.delete('');

                _this.setState({
                    inputValue: '',
                    values: [].concat(_toConsumableArray(arr))
                }, function () {
                    _this.props.onChange(_this.state.values);
                });
            }
        };

        _this.onBlurValue = function (e) {
            if (_this.state.inputValue != '\n' && _this.state.inputValue != '') {
                var arr = new Set(_this.state.values.concat(_this.state.inputValue.split('\n')));
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var item = _step2.value;

                        if (item.length > _this.props.maxText) {
                            _message3.default.error(React.createElement(
                                'span',
                                null,
                                '\u5B57\u7B26\u957F\u5EA6\u6700\u5927\u957F\u5EA6',
                                React.createElement(
                                    'span',
                                    { className: 'red' },
                                    _this.props.maxText
                                ),
                                ',',
                                item,
                                '\u957F\u5EA6\u4E3A',
                                React.createElement(
                                    'span',
                                    { className: 'red' },
                                    item.length
                                ),
                                ', \u5DF2\u7ECF\u4E3A\u60A8\u81EA\u52A8\u5220\u9664\uFF01'
                            ));
                            arr.delete(item);
                        }
                        if (item.trim() == '') {
                            _message3.default.error(React.createElement(
                                'span',
                                null,
                                '\u7A7A\u5B57\u7B26\u6761\u76EE\u5DF2\u81EA\u52A8\u5220\u9664'
                            ));
                            arr.delete(item);
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                arr.delete('');

                _this.setState({
                    inputValue: '',
                    values: [].concat(_toConsumableArray(arr))
                }, function () {
                    _this.props.onChange(_this.state.values);
                });
            }
        };

        _this.tag_input_textarea = React.createRef();
        _this.state = {
            inputValue: '',
            values: _this.props.value || [],
            targetItem: {
                index: null,
                value: null
            }
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                values: nextProps.value || []
            });
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

/***/ "./app/widget/components/TagInput/taginput.less":
/*!******************************************************!*\
  !*** ./app/widget/components/TagInput/taginput.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/components/TagInput/tpl.js":
/*!***********************************************!*\
  !*** ./app/widget/components/TagInput/tpl.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _popover = __webpack_require__(/*! antd/es/popover */ "./node_modules/_antd@3.10.1@antd/es/popover/index.js");

var _popover2 = _interopRequireDefault(_popover);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

__webpack_require__(/*! antd/es/popover/style/css */ "./node_modules/_antd@3.10.1@antd/es/popover/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! ./taginput.less */ "./app/widget/components/TagInput/taginput.less");

var _That = __webpack_require__(/*! ../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tpl = (0, _That2.default)(function (that) {
    // console.log(that.props)
    var _that$props = that.props,
        style = _that$props.style,
        className = _that$props.className,
        placeholder = _that$props.placeholder,
        _that$props$autoFocus = _that$props.autoFocus,
        autoFocus = _that$props$autoFocus === undefined ? true : _that$props$autoFocus,
        maxText = _that$props.maxText;
    var _that$state = that.state,
        inputValue = _that$state.inputValue,
        values = _that$state.values,
        targetItem = _that$state.targetItem;

    return React.createElement(
        'div',
        { onClick: function onClick(e) {
                return that.onFocusInput(e);
            }, style: style, className: 'tag-input ' + className },
        React.createElement(
            'ul',
            { className: 'tag-list-box' },
            values.map(function (item, index) {
                return React.createElement(
                    _popover2.default,
                    { content: item, key: index, trigger: 'hover' },
                    React.createElement(
                        'li',
                        { className: 'item' },
                        index == targetItem.index ? React.createElement(_input2.default, {
                            autoFocus: true,
                            size: 'small',
                            suffix: React.createElement(_icon2.default, {
                                type: 'check',
                                onClick: function onClick(e) {
                                    return that.subItem();
                                }
                            }),
                            maxLength: maxText,
                            onKeyDown: function onKeyDown(e) {
                                if (e.keyCode == 13) {
                                    that.subItem();
                                }
                            },
                            value: targetItem.value.trim(),
                            onChange: function onChange(e) {
                                return that.targetValue(e);
                            },
                            onBlur: function onBlur(e) {
                                return that.subItem();
                            },
                            placeholder: '\u8BF7\u8F93\u5165'
                        }) : React.createElement(
                            React.Fragment,
                            null,
                            React.createElement(
                                'p',
                                { className: 'text' },
                                item
                            ),
                            React.createElement(
                                'span',
                                { className: 'action' },
                                React.createElement(_icon2.default, { className: 'link-icon edit', type: 'edit', onClick: function onClick() {
                                        return that.editItem(item, index);
                                    } }),
                                React.createElement(_icon2.default, { className: 'link-icon close', type: 'close', onClick: function onClick() {
                                        return that.rmItem(index);
                                    } })
                            )
                        )
                    )
                );
            })
        ),
        React.createElement('textarea', {
            autoFocus: autoFocus,
            ref: that.tag_input_textarea,
            style: { height: inputValue.split('\n').length * 30 },
            value: inputValue,
            placeholder: placeholder,
            onChange: function onChange(e) {
                return that.changeValue(e);
            },
            onKeyDown: function onKeyDown(e) {
                return that.keyDownValue(e);
            },
            onBlur: function onBlur(e) {
                return that.onBlurValue(e);
            },
            className: 'input'
        })
    );
});
exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=33_0b2125260ab6303e110b.js.map