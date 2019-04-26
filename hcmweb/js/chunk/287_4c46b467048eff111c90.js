(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[287],{

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

/***/ "./app/widget/index/Commits/main.js":
/*!******************************************!*\
  !*** ./app/widget/index/Commits/main.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Commits/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

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
            _ajax2.default.get('http://n1a6884762.iok.la/api/v4/projects/95/repository/commits', {
                params: {
                    private_token: 'iHARe64RLtMbPFQcnJEt',
                    per_page: '20',
                    page: _this.state.page
                }
            }).then(function (response) {
                _this.setState({
                    dataList: _this.state.dataList.concat(response.data),
                    loading: false,
                    show: response.data.length == 20 ? true : false
                });
            }).catch(function (error) {
                message.error(error.statusText);
                _this.setState({
                    loading: true
                });
            });
        };

        _this.loading = function () {
            _this.setState({
                loading: true,
                page: _this.state.page + 1
            }, _this.getList);
        };

        _this.state = {
            userList: [],
            dataList: [],
            page: 1,
            loading: false,
            show: true
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

/***/ "./app/widget/index/Commits/tpl.js":
/*!*****************************************!*\
  !*** ./app/widget/index/Commits/tpl.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _timeline = __webpack_require__(/*! antd/es/timeline */ "./node_modules/_antd@3.10.1@antd/es/timeline/index.js");

var _timeline2 = _interopRequireDefault(_timeline);

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@3.10.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _avatar = __webpack_require__(/*! antd/es/avatar */ "./node_modules/_antd@3.10.1@antd/es/avatar/index.js");

var _avatar2 = _interopRequireDefault(_avatar);

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/timeline/style/css */ "./node_modules/_antd@3.10.1@antd/es/timeline/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/avatar/style/css */ "./node_modules/_antd@3.10.1@antd/es/avatar/style/css.js");

var _That = __webpack_require__(/*! ../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Copyright = __webpack_require__(/*! ../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        dataList = _that$state.dataList,
        userList = _that$state.userList;

    var user = {
        bjw2264: '#55a0f8',
        lijing: '#72c77c',
        常德闯: '#66c8ca'
    };
    if (dataList.length) {
        return React.createElement(
            'div',
            { className: 'commits' },
            React.createElement(
                'div',
                { className: 'Breadcrumb' },
                React.createElement(
                    'h3',
                    null,
                    'GitLab ',
                    ' <HCM_WEB> ',
                    ' \u63D0\u4EA4\u8BB0\u5F55'
                )
            ),
            React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                    _timeline2.default,
                    null,
                    dataList.map(function (item, index) {
                        return React.createElement(
                            _timeline2.default.Item,
                            { dot: React.createElement(
                                    _avatar2.default,
                                    { style: { backgroundColor: user[item.author_name] }, size: 'large' },
                                    item.author_name
                                ), key: index },
                            React.createElement(
                                _card2.default,
                                {
                                    style: { margin: '0 0 40px 20px' },
                                    type: 'inner',
                                    title: React.createElement(
                                        'p',
                                        null,
                                        'No:',
                                        index + 1,
                                        React.createElement(
                                            'span',
                                            { style: { marginLeft: '20px' } },
                                            '\u6807\u9898\uFF1A',
                                            item.title
                                        )
                                    ),
                                    extra: moment(item.committed_date).format('YYYY年MM月DD日 HH:mm:ss')
                                },
                                React.createElement(
                                    _row2.default,
                                    null,
                                    React.createElement(
                                        _col2.default,
                                        { span: 24 },
                                        '\u63D0\u4EA4\u4EBA\uFF1A',
                                        item.author_name
                                    )
                                ),
                                React.createElement(
                                    _row2.default,
                                    null,
                                    React.createElement(
                                        _col2.default,
                                        { span: 12 },
                                        'short_id\uFF1A',
                                        React.createElement(
                                            'a',
                                            { target: '_blank', href: 'http://n1a6884762.iok.la/chang/HCM_WEB/commit/' + item.short_id },
                                            item.short_id
                                        )
                                    ),
                                    React.createElement(
                                        _col2.default,
                                        { span: 12 },
                                        '\u90AE\u7BB1\uFF1A',
                                        item.author_email
                                    )
                                ),
                                React.createElement(
                                    _row2.default,
                                    null,
                                    React.createElement(
                                        _col2.default,
                                        { span: 12 },
                                        'id\uFF1A',
                                        item.id
                                    ),
                                    React.createElement(
                                        _col2.default,
                                        { span: 12 },
                                        'parent_ids\uFF1A',
                                        item.parent_ids[0]
                                    )
                                )
                            )
                        );
                    })
                ),
                that.state.show ? React.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    React.createElement(
                        _button2.default,
                        { type: 'primary', loading: that.state.loading, onClick: that.loading },
                        '\u52A0\u8F7D\u66F4\u591A'
                    )
                ) : null
            ),
            React.createElement(_Copyright2.default, { clazzName: 'copyright' })
        );
    } else {
        return null;
    }
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=287_4c46b467048eff111c90.js.map