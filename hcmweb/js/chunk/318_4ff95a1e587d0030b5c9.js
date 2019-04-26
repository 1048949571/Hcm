(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[318],{

/***/ "./app/widget/index/MonitoringDetails/MonitoringDetails/main.js":
/*!**********************************************************************!*\
  !*** ./app/widget/index/MonitoringDetails/MonitoringDetails/main.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _popover = __webpack_require__(/*! antd/es/popover */ "./node_modules/_antd@3.10.1@antd/es/popover/index.js");

var _popover2 = _interopRequireDefault(_popover);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/popover/style/css */ "./node_modules/_antd@3.10.1@antd/es/popover/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/MonitoringDetails/MonitoringDetails/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonitoringDetails = function (_React$Component) {
    _inherits(MonitoringDetails, _React$Component);

    function MonitoringDetails(props) {
        _classCallCheck(this, MonitoringDetails);

        // 投诉详情,288
        // BRM-客服-维权服务-投诉查询-京东投诉查询-单号详情
        // /JDAppealDetails/:case_id/:accountId
        // /JDAppealDetails/:case_id/:accountId
        // ./JD/JDAppealDetails/main
        // null
        // 264
        // 9005
        // JDAppealDetails
        var _this = _possibleConstructorReturn(this, (MonitoringDetails.__proto__ || Object.getPrototypeOf(MonitoringDetails)).call(this, props));

        _this.chesu = function (record) {
            _this.setState({
                visible: true,
                AppayIDs: record.case_id,
                TITBoy: "您确认撤诉此项嘛?"
            });
        };

        _this.handleChangex = function (value) {
            _this.setState({
                state: value
            }, function () {
                _this.getJDList(_this.state.pageNo, _this.state.accountId, _this.state.state);
            });
        };

        _this.handleCancels = function () {
            _this.setState({
                visible: false,
                AppayIDs: ""
            });
        };

        _this.handleOk = function () {
            _ajax2.default.post("/hcm/complaint/cheShuJD", {
                right_id: _this.state.AppayIDs,
                account_id: _this.state.accountId
            }).then(function (res) {
                if (res.data.status == 10000) {
                    _this.setState({
                        visible: false,
                        AppayIDs: ""
                    });
                    _message3.default.success("撤诉成功");
                } else {
                    _message3.default.error(res.data.data);
                }
            });
        };

        _this.getJDList = function (pageNo, account_id, state) {
            _ajax2.default.post("/hcm/complaint/getJDList", {
                pageNo: pageNo,
                account_id: account_id,
                state: state
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    if (res.data.data.status != 400) {
                        _this.setState({
                            data: res.data.data.data.content,
                            totalNum: res.data.data.data.totalElements
                        });
                        console.log(res.data.data.data.content[0].tort_link.split("↵"));
                    } else {
                        _message3.default.error(res.data.data.message);
                    }
                }
            });
        };

        _this.changePagination = function (current, pageSize) {
            _this.setState({
                pageNo: current
            }, function () {
                _this.getJDList(_this.state.pageNo, _this.state.accountId, _this.state.state);
            });
        };

        _this.onPaginationSize = function (current, pageSize) {
            console.log(current, pageSize);
        };

        _this.handleTableChange = function (current, pageSize) {
            console.log(current, pageSize);
        };

        _this.handleClearIconClick = function () {
            var _this$props$form = _this.props.form,
                resetFields = _this$props$form.resetFields,
                getFieldsValue = _this$props$form.getFieldsValue;

            resetFields("productName");
        };

        _this.handleClearIconClicks = function () {
            var _this$props$form2 = _this.props.form,
                resetFields = _this$props$form2.resetFields,
                getFieldsValue = _this$props$form2.getFieldsValue;

            resetFields("brandName");
        };

        _this.handleClearIconClickx = function () {
            var _this$props$form3 = _this.props.form,
                resetFields = _this$props$form3.resetFields,
                getFieldsValue = _this$props$form3.getFieldsValue;

            resetFields("productbrandName");
        };

        var columns = [{
            title: '投诉编号',
            dataIndex: 'complaint_num',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    React.createElement(
                        'a',
                        { href: '/index.html?#/JDAppealDetails/' + record.case_id + '/' + _this.state.accountId, target: '_blank', style: { marginRight: "10px" } },
                        record.complaint_num
                    )
                );
            }
        }, {
            title: '产权类型',
            dataIndex: 'ipr_type'
        }, {
            title: '投诉链接',
            width: "30%",
            height: "50px",
            overflow: "hidden",
            dataIndex: 'tort_link',
            render: function render(content, record, index) {
                return React.createElement(
                    _popover2.default,
                    { placement: 'bottom', key: index, content: React.createElement(
                            'div',
                            { style: { width: "200px", overflow: "hidden" } },
                            record.tort_link
                        ), trigger: 'click' },
                    React.createElement(
                        'a',
                        { style: { height: "20px", display: "inline-block", overflow: "hidden" } },
                        record.tort_link
                    )
                );
            }
        }, {
            title: '处理状态',
            dataIndex: 'state',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.state
                );
            }
        }, {
            title: '投诉时间',
            dataIndex: 'complaint_time'
        }, {
            title: '操作',
            fixed: "right",
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    React.createElement(
                        'a',
                        { onClick: function onClick() {
                                return _this.chesu(record);
                            } },
                        '\u64A4\u8BC9'
                    )
                );
            }
        }];
        _this.state = {
            pageSize: 10,
            pageNo: 1,
            totalNum: 0,
            ProductInformation_list: columns,
            data: [],
            loading: false,
            accountId: "",
            currentData: "",
            state: "",
            TITBoy: "",
            visible: false,
            AppayIDs: ""
        };

        return _this;
    }

    _createClass(MonitoringDetails, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _ajax2.default.post("/hcm/complaiont/getListByBmcid", {
                platform: "JINGDONG"
            }).then(function (res) {
                if (res.data.status == 10000 && res.data.data.legth) {

                    _this2.setState({
                        accountId: res.data.data[0].username,
                        currentData: res.data.data
                    }, function () {
                        _this2.getJDList(_this2.state.pageNo, _this2.state.accountId);
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return MonitoringDetails;
}(React.Component);

exports.default = _form2.default.create()(MonitoringDetails);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=318_4ff95a1e587d0030b5c9.js.map