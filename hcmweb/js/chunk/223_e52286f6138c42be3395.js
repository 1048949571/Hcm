(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[223],{

/***/ "./app/widget/index/Administrator/SetDictionary/main.js":
/*!**************************************************************!*\
  !*** ./app/widget/index/Administrator/SetDictionary/main.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@3.10.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Administrator/SetDictionary/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {LoadingModal} from '../../../components/LoadingModal/LoadingModal';
var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.columns = function () {
            return [{
                title: '名称',
                dataIndex: 'dictName',
                key: 'dictName'
            }, {
                title: 'Code',
                dataIndex: 'dictCode',
                key: 'dictCode',
                width: '12%'
            }, {
                title: '排序',
                dataIndex: 'sortNumber',
                key: 'sortNumber'
            }, {
                title: '备注',
                dataIndex: 'pricename',
                key: 'pricename'
            }, {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                align: 'right',
                render: function render(text, item, index) {
                    return React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this.addChild(item, 'add');
                                } },
                            '\u65B0\u589E\u4E0B\u7EA7'
                        ),
                        React.createElement(_divider2.default, { type: 'vertical' }),
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this.addChild(item, 'edit');
                                } },
                            '\u7F16\u8F91'
                        ),
                        React.createElement(_divider2.default, { type: 'vertical' }),
                        React.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this.rmItem(item);
                                } },
                            '\u5220\u9664'
                        )
                    );
                }

            }];
        };

        _this.addChild = function (item, type) {
            item.type = type;
            _this.setState({
                targetData: item
            }, function () {
                _this.actionVisible(true);
            });
        };

        _this.actionVisible = function (bl, fn) {
            _this.setState({
                actionVisible: bl,
                targetData: bl ? _this.state.targetData : {}
            }, function () {
                fn ? fn() : null;
            });
        };

        _this.subAdd = function (values, fn, type) {
            var patt1 = /[\u4e00-\u9fa5]/;
            if (patt1.test(values.dictCode)) {
                _message3.default.warning('Code不允许出现汉字');
                return;
            }

            _ajax2.default.post(type == 'edit' ? '/hcm/sys/Update' : '/hcm/sys/Create', values).then(function (response) {
                if (response.data.status == '10000') {
                    _message3.default.success(response.data.message);
                    _this.actionVisible(false, fn);
                    _this.getList();
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.rmItem = function (item) {
            _ajax2.default.post('/hcm/sys/delete', {
                id: item.id
            }).then(function (response) {
                if (response.data.status == '10000') {
                    _message3.default.success(response.data.message);
                    _this.getList();
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.state = {
            data: [],
            actionVisible: false,
            targetData: {}
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getList();
        }
    }, {
        key: 'getList',
        value: function getList() {
            var _this2 = this;

            _ajax2.default.get('/hcm/sys/getTree').then(function (response) {
                if (response.data.status == '10000') {
                    _this2.setState({
                        data: response.data.data
                    });
                } else {
                    _message3.default.error(response.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
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
//# sourceMappingURL=223_e52286f6138c42be3395.js.map