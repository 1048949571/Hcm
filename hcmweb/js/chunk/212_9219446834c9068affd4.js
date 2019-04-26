(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[212],{

/***/ "./app/widget/index/Administrator/ClientInfo/main.js":
/*!***********************************************************!*\
  !*** ./app/widget/index/Administrator/ClientInfo/main.js ***!
  \***********************************************************/
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

var _dec, _class;

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Administrator/ClientInfo/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@5.0.7@react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/_redux@4.0.1@redux/es/redux.js");

var _index = __webpack_require__(/*! ../../../../js/actions/index */ "./app/js/actions/index.js");

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        stateClient: state.stateClient
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return (0, _redux.bindActionCreators)({ goClientInfo: _index.goClientInfo }, dispatch);
};
var App = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.searchSubmit = function () {
            _this.getList(1);
        };

        _this.searchShow = function (e, bmcid) {
            _this.setState({
                targetId: bmcid
            });
            _this.props.goClientInfo(true);
        };

        _this.searchHide = function (e) {
            _this.setState({
                targetId: null
            }, function () {
                _this.getList();
            });
            _this.props.goClientInfo(false);
        };

        _this.changeInput = function (e, from) {
            var state = _this.state;
            state[from] = e.target.value;
            _this.setState(state);
        };

        _this.handleClearIconClick = function (type) {
            var state = _this.state;
            state[type] = null;
            _this.setState(state);
        };

        _this.onLoading = function () {
            var _this$state = _this.state,
                cus_name = _this$state.cus_name,
                des = _this$state.des,
                page_info = _this$state.page_info;

            _this.setState({
                spinning: true
            }, function () {
                _ajax2.default.get('/hcm/cus/cus_customerlist', {
                    params: {
                        "cus_name": cus_name,
                        "cus_memo_name": des,
                        "pageNo": page_info.pageNo + 1,
                        "pageSize": page_info.pageSize
                    }
                }).then(function (response) {
                    var bmaincustomer_list = _this.state.bmaincustomer_list;
                    bmaincustomer_list.push.apply(bmaincustomer_list, _toConsumableArray(response.data.data.bmaincustomer_list));
                    _this.setState({
                        bmaincustomer_list: bmaincustomer_list,
                        page_info: response.data.data.page_info,
                        spinning: false
                    });
                }).catch(function (error) {
                    _message3.default.error(error.message);
                    _this.setState({
                        spinning: false
                    });
                });
            });
        };

        _this.state = {
            cus_name: '',
            des: '',
            spinning: false,
            params: _this.props.match.params,
            bmaincustomer_list: [],
            page_info: {
                pageNo: 1,
                pageSize: 12,
                totalNum: 0
            },
            targetId: null,
            ClientInfos: "",
            type: ""
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            console.log(this.props.match.path);
            this.setState({
                ClientInfos: this.props.match.path
            }, function () {
                if (_this2.state.ClientInfos == "/ClientInfos") {
                    _this2.setState({
                        type: "jingpin"
                    }, function () {
                        _this2.getList();
                        _this2.props.goClientInfo(true);
                    });
                } else {
                    _this2.setState({
                        type: ""
                    }, function () {
                        _this2.getList();
                        _this2.props.goClientInfo(true);
                    });
                }
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.goClientInfo(false);
        }
    }, {
        key: 'getList',
        value: function getList(pageNo) {
            var _this3 = this;

            var _state = this.state,
                cus_name = _state.cus_name,
                des = _state.des,
                page_info = _state.page_info;

            this.setState({
                spinning: true
            }, function () {

                _ajax2.default.get('/hcm/cus/cus_customerlist', {
                    params: {
                        "cus_name": cus_name,
                        "cus_memo_name": des,
                        "pageNo": pageNo ? pageNo : page_info.pageNo,
                        "pageSize": page_info.pageSize
                    }
                }).then(function (response) {

                    console.log(response);
                    if (response.data.status == 10000) {
                        _this3.setState({
                            bmaincustomer_list: response.data.data.bmaincustomer_list,
                            page_info: response.data.data.page_info,
                            spinning: false
                        });
                    } else {
                        _message3.default.error(response.data.message);
                    }
                }).catch(function (error) {
                    _message3.default.error(error.message);
                    _this3.setState({
                        spinning: false
                    });
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return App;
}(React.Component)) || _class);
exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=212_9219446834c9068affd4.js.map