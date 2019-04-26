(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[206],{

/***/ "./app/widget/index/1688/1688Inquiries/main.js":
/*!*****************************************************!*\
  !*** ./app/widget/index/1688/1688Inquiries/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/1688/1688Inquiries/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OneSIXInquiries = function (_React$Component) {
    _inherits(OneSIXInquiries, _React$Component);

    function OneSIXInquiries(props) {
        var _this$state;

        _classCallCheck(this, OneSIXInquiries);

        var _this = _possibleConstructorReturn(this, (OneSIXInquiries.__proto__ || Object.getPrototypeOf(OneSIXInquiries)).call(this, props));

        _this.getNowFormatDate = function () {
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            return currentdate;
        };

        _this.GetDateStr = function (AddDayCount) {
            var dd = new Date();dd.setDate(dd.getDate() + AddDayCount);
            var y = dd.getFullYear();var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
            var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
            return y + "-" + m + "-" + d;
        };

        _this.get1688List = function (account_id, ipr_num, complaint_num, company_name, start_time, end_time, site, state, pageNo, pageSize) {
            LoadingModal({ bl: true });
            _ajax2.default.post('/hcm/complaint/get1688List', {
                account_id: account_id,
                ipr_num: ipr_num, // -> 知识产权编号
                complaint_num: complaint_num, //              ->投诉单号          
                company_name: company_name, //  ->公司/商铺名称
                start_time: start_time, //        开始时间
                end_time: end_time, //  结束时间
                site: site, //
                state: state, //
                pageNo: pageNo, // 第几页
                pageSize: pageSize
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    _this.setState({
                        pageNumber: res.data.data.pageNumber,
                        totalNum: res.data.data.totalElements,
                        pageSize: res.data.data.pageSize,
                        get1688List: res.data.data.content,
                        loading: false,
                        selectedRowKeys: []

                    });
                    LoadingModal({ bl: false });
                    _message3.default.success(res.data.message);
                } else if (res.data.status == 10001) {
                    _this.setState({
                        pageNumber: res.data.data.pageNumber,
                        totalNum: res.data.data.totalElements,
                        pageSize: res.data.data.pageSize,
                        get1688List: res.data.data.content,
                        loading: false,
                        selectedRowKeys: []

                    });
                    LoadingModal({ bl: false });
                    _message3.default.error(res.data.message);
                } else {
                    _this.setState({
                        loading: false,
                        selectedRowKeys: []
                    });
                    LoadingModal({ bl: false });
                    _message3.default.error(res.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
                _this.setState({
                    loading: false,
                    selectedRowKeys: []
                });
                LoadingModal({ bl: false });
            });
        };

        _this.handleCancels = function () {
            _this.setState({
                visible: false,
                AppayIDs: [],
                selectedRowKeys: []
            });
        };

        _this.handleOk = function () {

            if (_this.state.successBTN == "1") {
                _ajax2.default.post('/hcm/complaint/cheShu1688', {
                    caseIds: _this.state.AppayIDs.join(","),
                    account_id: _this.state.account_id,
                    tbToken: _this.state.token,
                    loading: true
                }).then(function (res) {
                    if (res.data.status == 10000) {
                        console.log(res);
                        _this.get1688List(_this.state.account_id, _this.state.ipr_num, _this.state.complaint_num, _this.state.company_name, _this.state.start_time, _this.state.end_time, _this.state.site, _this.state.state, _this.state.pageNo, _this.state.pageSize);
                        _this.setState({
                            visible: false,
                            selectedRowKeys: []
                        });
                        _message3.default.success(res.data.message);
                    } else {
                        _this.setState({
                            selectedRowKeys: []
                        });
                    }
                });
            } else {
                //console.log(this.state.AppayIDs)
                _ajax2.default.post('/hcm/complaint/cheShu1688', {
                    caseIds: _this.state.AppayIDs,
                    account_id: _this.state.account_id,
                    tbToken: _this.state.token,
                    loading: true
                }).then(function (res) {
                    if (res.data.status == 10000) {
                        console.log(res);
                        _this.get1688List(_this.state.account_id, _this.state.ipr_num, _this.state.complaint_num, _this.state.company_name, _this.state.start_time, _this.state.end_time, _this.state.site, _this.state.state, _this.state.pageNo, _this.state.pageSize);
                        _this.setState({
                            visible: false,
                            selectedRowKeys: []
                        });
                        _message3.default.success(res.data.message);
                    } else {
                        _this.setState({
                            selectedRowKeys: []
                        });
                    }
                });
            }
        };

        _this.PLCS = function () {
            //批量撤诉

            if (_this.state.AppayIDs != "") {
                _this.setState({
                    visible: true,
                    successBTN: "1",
                    TITBoy: "您确认需要此操作嘛?"
                });
            } else {
                _message3.default.error("请勾选需要批量操作的目标！");
            }
        };

        _this.CSBtn = function (record) {
            _this.setState({
                visible: true,
                successBTN: "2",
                TITBoy: "您确认需要此操作嘛?",
                AppayIDs: record.case_id,
                tbToken: record.token
            });
        };

        _this.ForgetSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                console.log(values);
                if (!err) {

                    _this.setState({
                        ipr_num: values.productName,
                        complaint_num: values.brandName,
                        company_name: values.DesName,
                        pageNo: 1,
                        loading: true
                    }, function () {
                        _this.get1688List(_this.state.account_id, values.productName, values.brandName, values.DesName, _this.state.start_time, _this.state.end_time, _this.state.site, _this.state.state, _this.state.pageNo, _this.state.pageSize);
                    });
                }
            });
        };

        _this.onChange = function (date, dateString) {
            //时间
            console.log(dateString);
            _this.setState({
                start_time: dateString[0],
                end_time: dateString[1]
            });
            console.log(_this.state.start_time);
        };

        _this.handleChange = function (value) {
            //投诉账号
            _this.setState({
                account_id: value,
                pageNo: 1,
                pageSize: 10,
                loading: true,
                selectedRowKeys: []
            }, function () {
                _this.get1688List(_this.state.account_id, _this.state.ipr_num, _this.state.complaint_num, _this.state.company_name, _this.state.start_time, _this.state.end_time, _this.state.site, _this.state.state, _this.state.pageNo, _this.state.pageSize);
            });
        };

        _this.handleChanges = function (value) {
            //站点
            _this.setState({
                site: value
            });
        };

        _this.handleChangex = function (value) {
            //状态
            _this.setState({
                state: value
            });
        };

        _this.onSelectChange = function (selectedRowKeys, appay) {
            //全选
            console.log(selectedRowKeys, appay);
            var AppayID = [];
            appay.forEach(function (v, l) {
                //console.log(v,l)
                AppayID.push(v.case_id);
            });
            console.log(appay);
            if (appay != "") {
                _this.setState({
                    selectedRowKeys: selectedRowKeys,
                    AppayIDs: AppayID,
                    token: appay[0].token
                });
            } else {
                _this.setState({
                    selectedRowKeys: selectedRowKeys,
                    AppayIDs: AppayID,
                    token: ""
                });
            }
        };

        _this.changePagination = function (current, pageSize) {
            _this.setState({
                pageNo: current,
                pageSize: pageSize,
                selectedRowKeys: [],
                loading: true
            }, function () {
                _this.get1688List(_this.state.account_id, _this.state.ipr_num, _this.state.complaint_num, _this.state.company_name, _this.state.start_time, _this.state.end_time, _this.state.site, _this.state.state, _this.state.pageNo, _this.state.pageSize);
            });
        };

        _this.onPaginationSize = function (current, pageSize) {
            _this.setState({
                pageNo: current,
                pageSize: pageSize,
                selectedRowKeys: [],
                loading: true
            }, function () {
                _this.get1688List(_this.state.account_id, _this.state.ipr_num, _this.state.complaint_num, _this.state.company_name, _this.state.start_time, _this.state.end_time, _this.state.site, _this.state.state, _this.state.pageNo, _this.state.pageSize);
            });
        };

        _this.handleTableChange = function (current, pageSize) {
            //console.log()
        };

        _this.handleClearIconClick = function (productName) {
            var _this$props$form = _this.props.form,
                resetFields = _this$props$form.resetFields,
                getFieldsValue = _this$props$form.getFieldsValue;

            resetFields(productName);
        };

        var columns = [{
            title: '投诉时间',
            dataIndex: 'complaint_time',
            render: function render(content, record, index) {
                return React.createElement(
                    'div',
                    null,
                    moment(record.complaint_time).format('YYYY-MM-DD')
                );
            }
        }, {
            title: '投诉单号',
            width: "150px",
            dataIndex: 'complaint_num'
        }, {
            title: '知识产权编号',
            dataIndex: 'ipr_num'
        }, {
            title: '被投诉方名称',
            width: "150px",
            dataIndex: 'company_name'
        }, {
            title: '侵权链接',
            width: "150px",
            dataIndex: 'tort_link'
        },, {
            title: '所属站点',
            dataIndex: 'site'
        }, {
            title: '状态',
            dataIndex: 'state',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    null,
                    React.createElement(
                        'h4',
                        null,
                        record.state
                    ),
                    record.state == "投诉方撤诉" ? React.createElement(
                        'span',
                        null,
                        '\u64A4\u8BC9\u4EBA:',
                        record.chesu_user
                    ) : null
                );
            }
        }, {
            title: '操作',
            dataIndex: 'addressb',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.state == "案件处理中" ? React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'a',
                            { href: '/index.html?#/OneSIXAppealDetails/' + record.case_id + '/' + _this.state.account_id, target: '_blank', style: { marginRight: "10px" } },
                            React.createElement('img', { src: '../../../../img/icon/icon_operating_Details.png', style: { marginTop: "4px", float: "left" }, alt: '' }),
                            React.createElement(
                                'b',
                                null,
                                '\u6848\u4EF6\u8BE6\u60C5'
                            )
                        ),
                        React.createElement(
                            'a',
                            { style: { marginRight: "10px" }, onClick: function onClick() {
                                    return _this.CSBtn(record);
                                } },
                            '\u64A4\u8BC9'
                        )
                    ) : record.state == "投诉方已接收反通知" || record.state == "投诉内容保留" || record.state == "投诉方撤诉" ? React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'a',
                            { href: '/index.html?#/OneSIXAppealDetails/' + record.case_id + '/' + _this.state.account_id, target: '_blank', style: { marginRight: "10px" } },
                            React.createElement('img', { src: '../../../../img/icon/icon_operating_Details.png', style: { marginTop: "4px", float: "left" }, alt: '' }),
                            React.createElement(
                                'b',
                                null,
                                '\u6848\u4EF6\u8BE6\u60C5'
                            )
                        ),
                        React.createElement(
                            'a',
                            { href: '/index.html?#/OneSIXcomplaints/' + record.case_id + '/' + _this.state.account_id + '/' + record.ipr_num, target: '_blank', style: { marginRight: "10px" } },
                            '\u53CD\u901A\u77E5\u8BE6\u60C5'
                        )
                    ) : record.state == "投诉侵权内容处理" ? React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'a',
                            { href: '/index.html?#/OneSIXAppealDetails/' + record.case_id + '/' + _this.state.account_id, target: '_blank', style: { marginRight: "10px" } },
                            React.createElement('img', { src: '../../../../img/icon/icon_operating_Details.png', style: { marginTop: "4px", float: "left" }, alt: '' }),
                            React.createElement(
                                'b',
                                null,
                                '\u6848\u4EF6\u8BE6\u60C5'
                            )
                        ),
                        React.createElement(
                            'a',
                            { style: { marginRight: "10px" }, onClick: function onClick() {
                                    return _this.CSBtn(record);
                                } },
                            '\u64A4\u8BC9'
                        )
                    ) : record.state == "投诉未受理" ? React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'a',
                            { href: '/index.html?#/OneSIXAppealDetails/' + record.case_id + '/' + _this.state.account_id, target: '_blank', style: { marginRight: "10px" } },
                            React.createElement('img', { src: '../../../../img/icon/icon_operating_Details.png', style: { marginTop: "4px", float: "left" }, alt: '' }),
                            React.createElement(
                                'b',
                                null,
                                '\u6848\u4EF6\u8BE6\u60C5'
                            )
                        )
                    ) : null
                );
            }
        }];
        _this.state = (_this$state = {
            pageSize: 10,
            pageNo: 1,
            totalNum: 0,
            ProductInformation_list: columns,
            get1688List: [],
            loading: false,
            AppayIDs: [],
            selectedRowKeys: [],
            account_id: "",
            ipr_num: "", // -> 知识产权编号
            complaint_num: "", //              ->投诉单号          
            company_name: "", //  ->公司/商铺名称
            start_time: "", //        开始时间
            end_time: "", //  结束时间
            site: "", //
            state: "", //
            currentData: [],
            token: ""
        }, _defineProperty(_this$state, 'pageNo', 1), _defineProperty(_this$state, 'successBTN', ""), _defineProperty(_this$state, 'TITBoy', ""), _defineProperty(_this$state, 'visible', false), _this$state);

        return _this;
    }

    _createClass(OneSIXInquiries, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _ajax2.default.post("/hcm/complaiont/getListByBmcid", {
                platform: "ALIBABA"
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    // const currentData = res.data.data.filter(x => {

                    //     return x.cookie1688 != null;
                    // });
                    if (res.data.data.length > 0) {
                        _this2.setState({
                            account_id: res.data.data[0].username,
                            currentData: res.data.data,
                            loading: true
                            // start_time: this.GetDateStr(-90),
                            // end_time: this.GetDateStr(0)
                        }, function () {
                            _this2.get1688List(_this2.state.account_id, _this2.state.ipr_num, _this2.state.complaint_num, _this2.state.company_name, _this2.state.start_time, _this2.state.end_time, _this2.state.site, _this2.state.state, _this2.state.pageNo, _this2.state.pageSize);
                        });
                    }
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return OneSIXInquiries;
}(React.Component);

exports.default = _form2.default.create()(OneSIXInquiries);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=206_2588993f1d804842d10f.js.map