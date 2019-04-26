(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[239],{

/***/ "./app/widget/index/Brand/CategorySelect/main.js":
/*!*******************************************************!*\
  !*** ./app/widget/index/Brand/CategorySelect/main.js ***!
  \*******************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/CategorySelect/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.getList = function () {
            _ajax2.default.get('/hcm/sys/GetList', {
                params: {
                    dictcode: 'category'
                }
            }).then(function (response) {
                _this.setState({
                    dataList: response.data.data
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.chSelect = function (value, option) {
            _this.setState({
                id: value
            });
        };

        _this.onSubmit = function () {
            _ajax2.default.post('/hcm/sys/SetCat', {
                id: _this.state.id
            }).then(function (response) {
                if (response.data.status == '10000') {
                    _message3.default.success('设置成功');
                    localStorage.catid = _this.state.id;
                    window.location.href = '/index.html#/';
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.state = {
            dataList: [],
            id: null
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

/***/ "./app/widget/index/Brand/CategorySelect/tpl.js":
/*!******************************************************!*\
  !*** ./app/widget/index/Brand/CategorySelect/tpl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var Tpl = (0, _That2.default)(function (that) {
    var dataList = that.state.dataList;

    return React.createElement(
        'div',
        { className: 'CategorySelect' },
        React.createElement(
            'div',
            { className: 'content' },
            React.createElement(
                'h2',
                null,
                '\u8BF7\u9009\u62E9\u516C\u53F8\u6240\u5C5E\u884C\u4E1A\u7C7B\u76EE'
            ),
            React.createElement(
                'p',
                null,
                '\u884C\u4E1A\u7C7B\u76EE'
            ),
            React.createElement(
                _select2.default,
                {
                    showSearch: true,
                    style: { width: 300 },
                    value: that.state.id,
                    onChange: function onChange(value, option) {
                        return that.chSelect(value, option);
                    },
                    placeholder: '\u8BF7\u9009\u62E9',
                    filterOption: function filterOption(input, option) {
                        return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                    }
                },
                dataList.map(function (item, index) {
                    return React.createElement(
                        Option,
                        { key: index, value: item.id },
                        item.dictName
                    );
                })
            ),
            React.createElement(
                'p',
                { className: 'button' },
                React.createElement(
                    _button2.default,
                    { onClick: function onClick() {
                            return that.onSubmit();
                        } },
                    '\u786E\u8BA4'
                )
            )
        )
    );
});
exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=239_64b9cb80a6ea9b1ed4fd.js.map