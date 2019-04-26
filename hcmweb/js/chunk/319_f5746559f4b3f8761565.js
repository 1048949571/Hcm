(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[319],{

/***/ "./app/widget/index/Olonger/main.js":
/*!******************************************!*\
  !*** ./app/widget/index/Olonger/main.js ***!
  \******************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Olonger/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Olonger = function (_React$Component) {
    _inherits(Olonger, _React$Component);

    function Olonger(props) {
        _classCallCheck(this, Olonger);

        var _this = _possibleConstructorReturn(this, (Olonger.__proto__ || Object.getPrototypeOf(Olonger)).call(this, props));

        _this.getCookie = function (name) {
            var arr;
            var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg)) return unescape(arr[2]);else return null;
        };

        _this.checkCookie = function () {

            if (document.cookie.length > 0) {

                if (_this.getCookie("version") != null && _this.getCookie("version") != "" && _this.getCookie("version") != undefined) {
                    _this.setState({
                        version: _this.getCookie("version")
                    }, function () {
                        //  console.log(this.state.version)
                    });
                }
            }
        };

        _this.handleOk = function () {
            if (_this.state.brandPone != "" && _this.state.brandPone != undefined && _this.state.brandPone.length == 11) {
                _ajax2.default.post("/hcm/HcmUpgradedVersion/save", {
                    phonenum: _this.state.brandPone,
                    upgradeVersion: _this.state.visibleValue
                }).then(function (res) {
                    if (res.data.status == "10000") {
                        _message3.default.success(res.data.message);
                        _this.setState({
                            visible: false
                        });
                    }
                    //console.log(res)
                });
            } else {
                _message3.default.error("请输入手机号,并且长度11位！");
            }
        };

        _this.handleInputChange = function (e) {
            _this.setState({
                brandPone: e.target.value
            }, function () {
                //  console.log(this.state.brandPone)
            });
        };

        _this.handleCancel = function () {

            _this.setState({
                visible: false
            });
        };

        _this.onChange = function (a, b, c) {
            console.log(a, b, c);
        };

        _this.onClickbtnLJ = function (e) {
            //console.log(e.target.value)
            _this.setState({
                visible: true,
                visibleValue: e.target.value
            });
        };

        _this.imgclick = function () {
            var FormatUpgradeCar = document.getElementById("FormatUpgrade");

            document.getElementById('FormatUpgradeCar').scrollIntoView();
        };

        _this.state = {
            propsMatch: "",
            visible: false,
            visibleValue: "",
            brandPone: null,
            math: "",
            version: ""
        };
        return _this;
    }

    _createClass(Olonger, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // console.log(this.props)
            // this.setState({
            //     propsMatch:this.props.match.path
            // })
            this.checkCookie();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return Olonger;
}(React.Component);

exports.default = Olonger;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=319_f5746559f4b3f8761565.js.map