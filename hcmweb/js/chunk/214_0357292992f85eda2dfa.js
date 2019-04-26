(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[214],{

/***/ "./app/widget/index/Administrator/DataSearch/main.js":
/*!***********************************************************!*\
  !*** ./app/widget/index/Administrator/DataSearch/main.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Administrator/DataSearch/tpl.js");

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

        _this.changeSearch = function (e) {
            _this.setState({
                keyWord: e.target.value
            });
        };

        _this.handleClearIconClick = function (type) {
            var state = _this.state;
            state[type] = null;
            _this.setState(state);
        };

        _this.getData = function (bl) {
            var pagination = _this.state.pagination;
            _ajax2.default.get('/hcm/cus/getPageByKeyWord', {
                params: {
                    "pageNo": bl ? 1 : pagination.page,
                    "pageSize": pagination.pageSize,
                    "bmcId": 5,
                    "keyWord": _this.state.keyWord
                }
            }).then(function (res) {
                var data = res.data.data;
                pagination.page = data.pageNumber;
                pagination.pageSize = data.pageSize;
                pagination.total = data.totalElements;
                _this.setState({
                    list: data.content,
                    pagination: pagination
                });
            });
        };

        _this.changePagination = function (page, pageSize) {
            var pagination = _this.state.pagination;
            pagination.page = page;
            pagination.pageSize = pageSize;
            _this.setState({
                pagination: pagination
            }, function () {
                _this.getData();
            });
        };

        _this.onPaginationSize = function (current, size) {
            var pagination = _this.state.pagination;
            pagination.page = current;
            pagination.pageSize = size;
            _this.setState({
                pagination: pagination
            }, function () {
                _this.getData();
            });
        };

        _this.state = {
            list: [],
            keyWord: null,
            pagination: {
                page: 1,
                pageSize: 10,
                total: 100
            }
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getData();
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

/***/ })

}]);
//# sourceMappingURL=214_0357292992f85eda2dfa.js.map