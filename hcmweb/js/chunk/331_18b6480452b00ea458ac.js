(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[331],{

/***/ "./app/widget/index/Service/PriceMonitorSetting/main.js":
/*!**************************************************************!*\
  !*** ./app/widget/index/Service/PriceMonitorSetting/main.js ***!
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Service/PriceMonitorSetting/tpl.js");

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

        _this.getMore = function () {
            _this.setState({
                pageNum: _this.state.pageNum + 1
            }, function () {
                _this.getList();
            });
        };

        _this.getList = function (Num) {
            var _this$state = _this.state,
                pageSize = _this$state.pageSize,
                pageNum = _this$state.pageNum,
                companyname = _this$state.companyname;

            _ajax2.default.get('/hcm/monitorPrice/GetBmc', {
                params: {
                    pageSize: pageSize,
                    pageNum: Num ? Num : pageNum,
                    companyname: companyname
                }
            }).then(function (response) {
                if (response.data.status == '10000') {
                    _this.setState({
                        pageNum: Num ? Num : _this.state.pageNum,
                        dataList: response.data.data.list,
                        totalElements: response.data.data.count
                    });
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.onChangeInput = function (e) {
            _this.setState({
                companyname: e.target.value
            });
        };

        _this.handleClearIconClick = function (type) {
            var state = _this.state;
            state[type] = null;
            _this.setState(state);
        };

        _this.state = {
            pageSize: 12,
            pageNum: 1,
            totalElements: 0,
            companyname: null,
            dataList: []

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

/***/ })

}]);
//# sourceMappingURL=331_18b6480452b00ea458ac.js.map