(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[304],{

/***/ "./app/widget/index/JD/JDAppealDetails/main.js":
/*!*****************************************************!*\
  !*** ./app/widget/index/JD/JDAppealDetails/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/JD/JDAppealDetails/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JDAppealDetails = function (_React$Component) {
    _inherits(JDAppealDetails, _React$Component);

    function JDAppealDetails(props) {
        _classCallCheck(this, JDAppealDetails);

        var _this = _possibleConstructorReturn(this, (JDAppealDetails.__proto__ || Object.getPrototypeOf(JDAppealDetails)).call(this, props));

        var columns = [{
            title: '处理时间',
            dataIndex: '处理时间',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.处理时间
                );
            }
        }, {
            title: '处理信息',
            dataIndex: '处理信息',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.处理信息
                );
            }
        }, {
            title: '操作人',
            dataIndex: '操作人'
        }];
        _this.state = {
            getJDDetail: "",
            loading: false,
            ProductInformation_list: columns,
            data: []
        };

        return _this;
    }

    _createClass(JDAppealDetails, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _ajax2.default.post("/hcm/complaint/getJDDetail", {
                right_id: this.props.match.params.case_id,
                account_id: this.props.match.params.accountId
            }).then(function (res) {
                if (res.data.status == 10000) {
                    _this2.setState({
                        getJDDetail: res.data.data,
                        data: res.data.data.track_info_lis
                    });

                    console.log(_this2.state.getJDDetail);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return JDAppealDetails;
}(React.Component);

exports.default = _form2.default.create()(JDAppealDetails);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=304_3d6804ebe53ead2b5346.js.map