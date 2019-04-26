(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[308],{

/***/ "./app/widget/index/MenuEdit/main.js":
/*!*******************************************!*\
  !*** ./app/widget/index/MenuEdit/main.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/MenuEdit/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

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

        _this.menuType = function (value, option) {

            _this.setState({
                menu_type: value
            });
        };

        _this.modalVisible = function (bl, data, type) {

            _this.setState({
                visible: bl,
                tergetData: data,
                type: type
            });
        };

        _this.getList = function () {
            _ajax2.default.get('/hcm/menu/getList', {
                params: {
                    type: _this.state.menu_type
                }
            }).then(function (res) {
                _this.setState({
                    list: res.data.data,
                    visible: false,
                    tergetData: {},
                    type: null
                });
            });
        };

        _this.rmMenu = function (record) {
            var that = _this;
            if (record.children && record.children.length) {
                _message3.default.warning('请先删除子级菜单');
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
                        '\u4F60\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6761\u4FE1\u606F\u5417?'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u5220\u9664\u540E',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            '\u5C06\u65E0\u6CD5\u7EE7\u7EED\u5C55\u793A\u76F8\u5173\u5185\u5BB9'
                        )
                    )
                ),
                okText: '删除',
                cancelText: '取消',
                className: 'alert-item-confirm',
                onOk: function onOk() {
                    _ajax2.default.post('/hcm/menu/delete', {
                        menuId: record.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            _message3.default.success(res.data.message);
                            that.getList();
                        }
                    });
                }
            });
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                if (!err) {

                    values.menuName = values.menuName;
                    values.menuState = values.menuState || values.menuState == '1' ? '1' : '0';
                    values.menuType = 'ALL';
                    if (_this.state.type == '编辑') {
                        values.id = _this.state.tergetData.id;

                        _ajax2.default.post('/hcm/menu/Update', values).then(function (res) {
                            if (res.data.status == 10000) {
                                _message3.default.success(res.data.message);
                                _this.getList();
                            }
                        }, function (rej) {
                            console.log(rej);
                        });
                    } else {
                        _ajax2.default.post('/hcm/menu/Create', values).then(function (res) {
                            if (res.data.status == 10000) {
                                _message3.default.success(res.data.message);
                                // this.getList()
                            }
                        }).catch(function (error) {
                            console.log(error);
                        });
                    }
                }
            });
        };

        _this.state = {
            list: [],
            visible: false,
            type: null,
            menu_type: "ALL",
            tergetData: {}
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

exports.default = _form2.default.create()(App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=308_07ee03ec215967a87589.js.map