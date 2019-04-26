(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[348],{

/***/ "./app/widget/index/Taobao/TaobaoInquiries/main.js":
/*!*********************************************************!*\
  !*** ./app/widget/index/Taobao/TaobaoInquiries/main.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Taobao/TaobaoInquiries/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaobaoInquiries = function (_React$Component) {
    _inherits(TaobaoInquiries, _React$Component);

    function TaobaoInquiries(props) {
        _classCallCheck(this, TaobaoInquiries);

        var _this = _possibleConstructorReturn(this, (TaobaoInquiries.__proto__ || Object.getPrototypeOf(TaobaoInquiries)).call(this, props));

        _this.GetDateStr = function (AddDayCount) {
            var dd = new Date();dd.setDate(dd.getDate() + AddDayCount);
            var y = dd.getFullYear();var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
            var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
            return y + "-" + m + "-" + d;
        };

        _this.function = function (ar) {
            var arr = ar;
            var s = 0;
            arr.forEach(function (val, idx, arr) {
                s += val;
            }, 0);

            return s;
        };

        _this.linknum_taobao = function () {
            _this.setState({
                linknum_taobao: []
            }, function () {
                _ajax2.default.post('/hcm/complaint/linknum_taobao', {
                    accountId: _this.state.accountId,
                    platform: _this.state.platform,
                    platformCode: _this.state.platformCode,
                    entityType: _this.state.entityType,
                    start_time: _this.state.start_time,
                    end_time: _this.state.end_time,
                    iprName: _this.state.iprName, //知识产权名称
                    entityOwnerName: _this.state.entityOwnerName, //被投诉方
                    batchId: _this.state.batchId //投诉单号
                }).then(function (res) {

                    if (res.data.status == 10000) {
                        if (res.data.data != null) {
                            var DataList = {};
                            var num = [];
                            res.data.data.forEach(function (v, l) {
                                DataList[v.sta_value] = v.sta_count;
                                num.push(v.sta_count);
                            });
                            _this.setState({
                                linknum_taobao: DataList,
                                num: _this.function(num)
                            });
                        } else {
                            _message3.default.error(res.data.message);
                        }
                    } else {
                        _message3.default.error(res.data.message);
                    }
                });
            });
        };

        _this.PLCSBtn = function (record) {
            var arr = [];
            _this.setState({
                visible: true,
                successBTN: "2",
                TITBoy: "您确认需要撤诉嘛?",
                AppayIDb: record.id + "#" + record.batch_id
            }, function () {});
        };

        _this.XEBtn = function (record) {
            var arr = [];
            _this.setState({
                visible: true,
                successBTN: "4",
                TITBoy: "您确认需要小二介入嘛?",
                AppayIDb: record.id + "#" + record.batch_id
            });
        };

        _this.handleCancels = function () {
            _this.setState({
                visible: false,
                selectedRowKeys: []
            });
        };

        _this.handleOk = function () {
            if (_this.state.successBTN == "1") {
                //批量撤诉 
                var data = {
                    idAndBatchId: _this.state.AppayIDs,
                    pageNo: _this.state.pageNo,
                    pageSize: _this.state.pageSize,
                    accountId: _this.state.accountId,
                    platform: _this.state.platform,
                    platformCode: _this.state.platformCode,
                    entityType: _this.state.entityType,
                    status: _this.state.status,
                    start_time: _this.state.start_time,
                    end_time: _this.state.end_time,
                    iprName: _this.state.iprName, //知识产权名称
                    entityOwnerName: _this.state.entityOwnerName, //被投诉方
                    batchId: _this.state.batchId //投诉单号
                };
                (0, _ajax2.default)({
                    method: 'post',
                    url: '/hcm/complaint/withdraw_taobao',
                    transformRequest: [function (data, headers) {
                        return data;
                    }],
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    data: JSON.stringify(data)
                }).then(function (res) {
                    if (res.data.status == 10000) {
                        _message3.default.success(res.data.data);
                        _this.setState({
                            visible: false,
                            AppayIDs: [],
                            AppayIDb: [],
                            selectedRowKeys: [],
                            loading: true
                        }, function () {

                            _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                        });
                    } else {
                        _this.setState({
                            selectedRowKeys: []
                        }, function () {
                            _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                        });
                    }
                });
            } else if (_this.state.successBTN == "2") {
                ////单个撤诉
                var _data = {
                    idAndBatchId: _this.state.AppayIDb,
                    pageNo: _this.state.pageNo,
                    pageSize: _this.state.pageSize,
                    accountId: _this.state.accountId,
                    platform: _this.state.platform,
                    platformCode: _this.state.platformCode,
                    entityType: _this.state.entityType,
                    status: _this.state.status,
                    start_time: _this.state.start_time,
                    end_time: _this.state.end_time,
                    iprName: _this.state.iprName, //知识产权名称
                    entityOwnerName: _this.state.entityOwnerName, //被投诉方
                    batchId: _this.state.batchId //投诉单号
                };
                (0, _ajax2.default)({
                    method: 'post',
                    url: '/hcm/complaint/withdraw_taobao',
                    transformRequest: [function (data, headers) {
                        return data;
                    }],
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    data: JSON.stringify(_data)
                }).then(function (res) {
                    if (res.data.status == 10000) {
                        _message3.default.success(res.data.data);
                        _this.setState({
                            visible: false,
                            AppayIDs: [],
                            AppayIDb: [],
                            selectedRowKeys: []
                        }, function () {
                            _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                        });
                    } else {
                        _this.setState({
                            selectedRowKeys: []
                        }, function () {
                            _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                        });
                    }
                });
            } else if (_this.state.successBTN == "3") {
                //批量小二  
                var _data2 = {
                    idAndBatchId: _this.state.AppayIDs,
                    pageNo: _this.state.pageNo,
                    pageSize: _this.state.pageSize,
                    accountId: _this.state.accountId,
                    platform: _this.state.platform,
                    platformCode: _this.state.platformCode,
                    entityType: _this.state.entityType,
                    status: _this.state.status,
                    start_time: _this.state.start_time,
                    end_time: _this.state.end_time,
                    iprName: _this.state.iprName, //知识产权名称
                    entityOwnerName: _this.state.entityOwnerName, //被投诉方
                    batchId: _this.state.batchId //投诉单号
                };
                (0, _ajax2.default)({
                    method: 'post',
                    url: '/hcm/complaint/xiaoer_taobao',
                    transformRequest: [function (data, headers) {
                        return data;
                    }],
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    data: JSON.stringify(_data2)
                }).then(function (res) {
                    if (res.data.status == 10000) {
                        _message3.default.success(res.data.data);
                        _this.setState({
                            visible: false,
                            AppayIDs: [],
                            AppayIDb: [],
                            selectedRowKeys: []
                        }, function () {
                            _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                        });
                    } else {
                        _this.setState({
                            selectedRowKeys: []
                        }, function () {
                            _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                        });
                    }
                });
            } else if (_this.state.successBTN == "4") {
                //  单个小二
                var _data3 = {
                    idAndBatchId: _this.state.AppayIDb,
                    pageNo: _this.state.pageNo,
                    pageSize: _this.state.pageSize,
                    accountId: _this.state.accountId,
                    platform: _this.state.platform,
                    platformCode: _this.state.platformCode,
                    entityType: _this.state.entityType,
                    status: _this.state.status,
                    start_time: _this.state.start_time,
                    end_time: _this.state.end_time,
                    iprName: _this.state.iprName, //知识产权名称
                    entityOwnerName: _this.state.entityOwnerName, //被投诉方
                    batchId: _this.state.batchId //投诉单号
                };
                (0, _ajax2.default)({
                    method: 'post',
                    url: '/hcm/complaint/xiaoer_taobao',
                    transformRequest: [function (data, headers) {
                        return data;
                    }],
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    data: JSON.stringify(_data3)
                }).then(function (res) {
                    if (res.data.status == 10000) {
                        _message3.default.success(res.data.data);
                        _this.setState({
                            visible: false,
                            AppayIDs: [],
                            AppayIDb: []
                        }, function () {
                            _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                        });
                    } else {
                        _this.setState({
                            visible: false,
                            AppayIDs: [],
                            AppayIDb: []
                        }, function () {
                            _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
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
                    TITBoy: "您共需要批量操作" + _this.state.AppayIDs.length + "条"
                });
            } else {
                _message3.default.error("请勾选需要批量操作的目标！");
            }
        };

        _this.XIAOtwo = function () {
            //批量小二
            if (_this.state.AppayIDs != "") {
                _this.setState({
                    visible: true,
                    successBTN: "3",
                    TITBoy: "您共需要批量操作" + _this.state.AppayIDs.length + "条"
                });
            } else {
                _message3.default.error("请勾选需要批量操作的目标！");
            }
        };

        _this.link_taobao = function (pageNo, pageSize, accountId, platform, platformCode, entityType, status, start_time, end_time, iprName, entityOwnerName, batchId) {
            var _this$setState;

            LoadingModal({ bl: true });
            _this.setState((_this$setState = {
                num: "",
                totalNum: 0,
                link_taobao: []
            }, _defineProperty(_this$setState, 'totalNum', 0), _defineProperty(_this$setState, 'selectedRowKeys', []), _this$setState), function () {
                _ajax2.default.post('/hcm/complaint/link_taobao', {
                    pageNo: pageNo,
                    pageSize: pageSize,
                    accountId: accountId,
                    platform: platform,
                    platformCode: platformCode,
                    entityType: entityType,
                    status: status,
                    start_time: start_time,
                    end_time: end_time,
                    iprName: iprName, //知识产权名称
                    entityOwnerName: entityOwnerName, //被投诉方
                    batchId: batchId //投诉单号
                }).then(function (res) {
                    console.log(res);
                    if (res.data.status == 10000) {
                        if (res.data.data != null || res.data.data.content != null) {
                            _this.setState({
                                link_taobao: res.data.data.content,
                                totalNum: res.data.data.totalElements,
                                loading: false,
                                selectedRowKeys: []
                            });
                            LoadingModal({ bl: false });
                            _this.linknum_taobao();
                        } else {
                            _this.setState({
                                link_taobao: [],
                                totalNum: 0,
                                pageSize: 10,
                                pageNo: 1,
                                loading: false,
                                selectedRowKeys: []
                            });
                            LoadingModal({ bl: false });
                            _message3.default.error(res.data.message);
                        }
                    } else if (res.data.status == 10001) {
                        _this.setState({
                            link_taobao: res.data.data.content,
                            totalNum: res.data.data.totalElements,
                            loading: false,
                            selectedRowKeys: []
                        });
                        LoadingModal({ bl: false });
                        _this.linknum_taobao();
                        _message3.default.success(res.data.message);
                    } else {
                        _this.setState({
                            link_taobao: [],
                            pageSize: 10,
                            pageNo: 1,
                            totalNum: 0,
                            loading: false,
                            selectedRowKeys: []
                        });
                        LoadingModal({ bl: false });
                        _message3.default.error(res.data.message);
                    }
                }).catch(function (error) {
                    _message3.default.error(error.statusText);
                    _this.setState({
                        link_taobao: [],
                        pageSize: 10,
                        pageNo: 1,
                        totalNum: 0,
                        loading: false,
                        selectedRowKeys: []
                    });
                    LoadingModal({ bl: false });
                });
            });
        };

        _this.onChange = function (date, dateString) {
            //投诉时间
            console.log(date, dateString);
            if (date != "" && date != [] && date != undefined) {
                _this.setState({
                    start_time: dateString[0] + " 00:00:00",
                    end_time: dateString[1] + " 23:59:59",
                    selectedRowKeys: [],
                    loading: true
                }, function () {
                    _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                });
            } else {
                _this.setState({
                    start_time: _this.GetDateStr(-90),
                    end_time: _this.GetDateStr(0),
                    selectedRowKeys: [],
                    loading: true
                }, function () {
                    _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                });
            }
        };

        _this.ForgetSubmit = function (e) {

            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                console.log(values);
                if (!err) {
                    _this.setState({
                        pageNo: 1,
                        pageSize: 10,
                        totalNum: 0,
                        linknum_taobao: [],
                        batchId: values.productbrandName,
                        iprName: values.productName, //知识产权名称
                        entityOwnerName: values.brandName, //被投诉方,
                        loading: true
                    }, function () {
                        _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                    });
                }
            });
        };

        _this.handleButton = function (e) {
            //状态
            //console.log(e)
            _this.setState({
                status: e.target.getAttribute("value"),
                pageNo: 1,
                pageSize: 10,
                totalNum: 0,
                selectedRowKeys: [],
                loading: true
            }, function () {
                if (_this.state.status == "") {
                    var a = _this.state.num ? _this.state.num : "0";
                    _this.setState({
                        totalNum: a,
                        typeDA: ""
                    }, function () {
                        _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                    });
                } else if (_this.state.status == "submitted") {
                    var _a = _this.state.linknum_taobao.submitted ? _this.state.linknum_taobao.submitted : "0";
                    _this.setState({

                        totalNum: _a,
                        typeDA: "submitted"
                    }, function () {
                        _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                    });
                } else if (_this.state.status == "auditNoPass") {
                    var _a2 = _this.state.linknum_taobao.auditNoPass ? _this.state.linknum_taobao.auditNoPass : "0";
                    _this.setState({

                        totalNum: _a2,
                        typeDA: "auditNoPass"
                    }, function () {
                        _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                    });
                } else if (_this.state.status == "auditPass") {
                    var _a3 = _this.state.linknum_taobao.auditPass ? _this.state.linknum_taobao.auditPass : "0";
                    _this.setState({

                        totalNum: _a3,
                        typeDA: "auditPass"
                    }, function () {
                        _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                    });
                } else if (_this.state.status == "appeal") {
                    var _a4 = _this.state.linknum_taobao.appeal ? _this.state.linknum_taobao.appeal : "0";
                    _this.setState({

                        totalNum: _a4,
                        typeDA: "appeal"
                    }, function () {
                        _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                    });
                } else if (_this.state.status == "involved") {
                    var _a5 = _this.state.linknum_taobao.involved ? _this.state.linknum_taobao.involved : "0";
                    _this.setState({

                        totalNum: _a5,
                        typeDA: "involved"
                    }, function () {
                        _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                    });
                } else if (_this.state.status == "withdrawal") {
                    var _a6 = _this.state.linknum_taobao.withdrawal ? _this.state.linknum_taobao.withdrawal : "0";
                    _this.setState({

                        totalNum: _a6,
                        typeDA: "withdrawal"
                    }, function () {
                        _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                    });
                } else if (_this.state.status == "appealPass") {
                    var _a7 = _this.state.linknum_taobao.appealPass ? _this.state.linknum_taobao.appealPass : "0";
                    _this.setState({

                        totalNum: _a7,
                        typeDA: "appealPass"
                    }, function () {
                        _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                    });
                } else if (_this.state.status == "appealNoPass") {
                    var _a8 = _this.state.linknum_taobao.appealNoPass ? _this.state.linknum_taobao.appealNoPass : "0";
                    _this.setState({

                        totalNum: _a8,
                        typeDA: "appealNoPass"
                    }, function () {
                        _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                    });
                } else if (_this.state.status == "invalid") {
                    var _a9 = _this.state.linknum_taobao.invalid ? _this.state.linknum_taobao.invalid : "0";
                    _this.setState({

                        totalNum: _a9,
                        typeDA: "invalid"
                    }, function () {
                        _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                    });
                }
            });
        };

        _this.handleChangex = function (value) {
            //投诉账号
            _this.setState({
                accountId: value,
                pageNo: 1,
                pageSize: 10,
                totalNum: 0,
                num: 0,
                loading: true,
                selectedRowKeys: [],
                status: "",
                typeDA: ""
            }, function () {
                _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
            });
        };

        _this.handleChange = function (value) {
            //平台
            _this.setState({
                platformCode: value,
                pageSize: 10,
                pageNo: 1,
                totalNum: 0,
                num: "",
                selectedRowKeys: [],
                loading: true
            });
            if (value == "taobao") {
                _this.setState({
                    platform: "淘宝"
                }, function () {
                    _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                });
            } else if (value == "tmall") {
                _this.setState({
                    platform: "天猫"
                }, function () {
                    _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                });
            } else if (value == "tmallhk") {
                _this.setState({
                    platform: "天猫国际"
                }, function () {
                    _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
                });
            }
        };

        _this.handleChanges = function (value) {
            //投诉链接类型
            _this.setState({
                entityType: value,
                selectedRowKeys: [],
                num: "",
                loading: true
            }, function () {
                _this.link_taobao(_this.state.pageNo, _this.state.pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, value, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
            });
        };

        _this.onSelectChange = function (selectedRowKeys, appay) {
            //全选

            var AppayID = [];
            // AppayID=appay.filter((key, index) => {
            //     if (index % 2 !== 0) {
            //       return false;
            //     }
            //     return true;
            //   });
            //   console.log(AppayID)
            //this.setState({ selectedRowKeys: newSelectedRowKeys });
            appay.forEach(function (v, l) {
                console.log(v, l);
                AppayID.push(v.id + "#" + v.batch_id);
            });
            _this.setState({
                selectedRowKeys: selectedRowKeys,
                AppayIDs: AppayID
            }, function () {
                console.log(_this.state.AppayIDs);
            });
        };

        _this.changePagination = function (current, pageSize) {

            console.log(current, pageSize);
            _this.setState({
                pageNo: current,
                selectedRowKeys: [],
                loading: true
            }, function () {
                _this.link_taobao(current, pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
            });
        };

        _this.onPaginationSize = function (current, pageSize) {
            console.log(current, pageSize);
            _this.setState({
                pageSize: pageSize,
                selectedRowKeys: [],
                loading: true
            }, function () {
                _this.link_taobao(current, pageSize, _this.state.accountId, _this.state.platform, _this.state.platformCode, _this.state.entityType, _this.state.status, _this.state.start_time, _this.state.end_time, _this.state.iprName, _this.state.entityOwnerName, _this.state.batchId);
            });
        };

        _this.handleTableChange = function (current, pageSize) {
            console.log(current, pageSize);
        };

        _this.handleClearIconClick = function (resetField) {
            var _this$props$form = _this.props.form,
                resetFields = _this$props$form.resetFields,
                getFieldsValue = _this$props$form.getFieldsValue;

            resetFields(resetField);
            if (resetField == "productName") {
                _this.setState({
                    iprName: " " //知识产权名称
                });
                // console.log("1")
            } else if (resetField == "brandName") {
                _this.setState({
                    entityOwnerName: " " //被投诉方
                });
                // console.log("2")
            } else {
                _this.setState({
                    batchId: " " //投诉单号
                });
                // console.log("3")
            }
        };

        var columns = [{
            title: '投诉信息',
            dataIndex: 'entity_owner_name',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    React.createElement(
                        'h5',
                        { style: { color: "#333" } },
                        record.entity_owner_name
                    ),
                    React.createElement(
                        'h5',
                        { style: { color: "#666" } },
                        '\u6295\u8BC9\u5355\u53F7\uFF1A',
                        record.batch_id
                    ),
                    React.createElement(
                        'h5',
                        { style: { color: "#666" } },
                        '\u53D1\u8D77\u6295\u8BC9\u65F6\u95F4\uFF1A',
                        moment(parseInt(record.gmt_create)).format('YYYY-MM-DD HH:mm:ss')
                    ),
                    React.createElement(
                        'h5',
                        { style: { color: "#666" } },
                        record.entity_content
                    )
                );
            }
        }, {
            title: '平台',
            dataIndex: 'platform_code',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.platform_code == "taobao" ? React.createElement(
                        'span',
                        null,
                        React.createElement('img', { src: '../../../../img/icon/tao.png', style: { marginTop: "10px" }, alt: '' })
                    ) : React.createElement(
                        'span',
                        null,
                        React.createElement('img', { src: '../../../../img/icon/Tmall.png', style: { marginTop: "10px" }, alt: '' })
                    )
                );
            }
        }, {
            title: '知识产权',
            dataIndex: 'ipr_name'
        }, {
            title: '处理状态/备注',
            width: "200px",
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.status == "auditNoPass" ? React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'h4',
                            null,
                            record.status_str
                        ),
                        record.complaint_remark ? React.createElement(
                            _popover2.default,
                            { placement: 'bottom', key: index, content: React.createElement(
                                    'div',
                                    { style: { width: "200px", overflow: "hidden" } },
                                    record.complaint_remark
                                ), trigger: 'hover' },
                            '\u6295\u8BC9\u7406\u7531\uFF1A ',
                            React.createElement(
                                'p',
                                { className: 'pp', style: { height: "20px", display: "inline-block", overflow: "hidden" } },
                                record.complaint_remark,
                                '...'
                            )
                        ) : null
                    ) : record.status == "appealPass" || record.status == "involved" || record.status == "appealNoPass" ? React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'h4',
                            null,
                            record.status_str
                        ),
                        React.createElement(
                            'h5',
                            null,
                            '\u7533\u8BC9\u65F6\u95F4\uFF1A',
                            record.appeal_date,
                            '  '
                        ),
                        record.appeal_comment ? React.createElement(
                            _popover2.default,
                            { placement: 'bottom', key: index, content: React.createElement(
                                    'div',
                                    { style: { width: "200px", overflow: "hidden" } },
                                    record.appeal_comment
                                ), trigger: 'hover' },
                            '\u7533\u8BF7\u7406\u7531\uFF1A ',
                            React.createElement(
                                'p',
                                { className: 'pp', style: { height: "20px", display: "inline-block", overflow: "hidden" } },
                                record.appeal_comment,
                                '...'
                            )
                        ) : null,
                        record.status == "appealPass" ? React.createElement(
                            'a',
                            { href: '/index.html?#/TaoBaocomplaints/' + record.batch_id + '/' + record.id + '/' + _this.state.accountId + '/' + record.id, target: '_blank' },
                            '\u67E5\u770B\u66F4\u591A'
                        ) : null
                    ) : record.status == "withdrawal" ? React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'h4',
                            null,
                            record.status_str
                        ),
                        React.createElement(
                            'span',
                            null,
                            '\u64A4\u8BC9\u4EBA\uFF1A',
                            record.chesu_user
                        )
                    ) : React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'h4',
                            null,
                            record.status_str
                        ),
                        record.status == "appealPass" ? React.createElement(
                            'a',
                            { href: '/index.html?#/TaoBaocomplaints/' + record.batch_id + '/' + record.id + '/' + _this.state.accountId + '/' + record.id, target: '_blank' },
                            '\u67E5\u770B\u66F4\u591A'
                        ) : null
                    )
                );
            }
        }, {
            title: '操作',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.status == "submitted" || record.status == "auditPass" || record.status == "involved" ? React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'h4',
                            null,
                            React.createElement(
                                'a',
                                { href: '/index.html?#/TaoBaoAppealDetails/' + record.batch_id + '/' + record.id + '/' + _this.state.accountId, target: '_blank' },
                                React.createElement('img', { src: '../../../../img/icon/icon_operating_Details.png', style: { marginTop: "4px", float: "left" }, alt: '' }),
                                React.createElement(
                                    'b',
                                    null,
                                    '\u67E5\u770B\u6295\u8BC9\u8BE6\u60C5'
                                )
                            )
                        ),
                        React.createElement(
                            'h4',
                            null,
                            React.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return _this.PLCSBtn(record);
                                    } },
                                React.createElement('img', { src: '../../../../img/icon/fh.png', style: { marginTop: "4px", float: "left" }, alt: '' }),
                                React.createElement(
                                    'b',
                                    null,
                                    '\u64A4\u8BC9'
                                )
                            )
                        )
                    ) : record.status == "appeal" ? React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'h4',
                            null,
                            React.createElement(
                                'a',
                                { href: '/index.html?#/TaoBaoAppealDetails/' + record.batch_id + '/' + record.id + '/' + _this.state.accountId, target: '_blank' },
                                React.createElement('img', { src: '../../../../img/icon/icon_operating_Details.png', style: { marginTop: "4px", float: "left" }, alt: '' }),
                                React.createElement(
                                    'b',
                                    null,
                                    '\u67E5\u770B\u6295\u8BC9\u8BE6\u60C5'
                                )
                            )
                        ),
                        React.createElement(
                            'h4',
                            null,
                            React.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return _this.XEBtn(record);
                                    } },
                                React.createElement('img', { src: '../../../../img/icon/xe.png', style: { marginTop: "4px", float: "left" }, alt: '' }),
                                React.createElement(
                                    'b',
                                    null,
                                    '\u7533\u8BF7\u5C0F\u4E8C\u4ECB\u5165'
                                )
                            )
                        ),
                        React.createElement(
                            'h4',
                            null,
                            React.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return _this.PLCSBtn(record);
                                    } },
                                React.createElement('img', { src: '../../../../img/icon/fh.png', style: { marginTop: "4px", float: "left" }, alt: '' }),
                                React.createElement(
                                    'b',
                                    null,
                                    '\u64A4\u8BC9'
                                )
                            )
                        )
                    ) : React.createElement(
                        'h4',
                        null,
                        React.createElement(
                            'a',
                            { href: '/index.html?#/TaoBaoAppealDetails/' + record.batch_id + '/' + record.id + '/' + _this.state.accountId, target: '_blank' },
                            React.createElement('img', { src: '../../../../img/icon/icon_operating_Details.png', style: { marginTop: "4px", float: "left" }, alt: '' }),
                            React.createElement(
                                'b',
                                null,
                                '\u67E5\u770B\u6295\u8BC9\u8BE6\u60C5'
                            )
                        )
                    )
                );
            }
        }];
        _this.state = {
            pageSize: 10,
            pageNo: 1,
            totalNum: 0,
            ProductInformation_list: columns,
            loading: false,
            linknum_taobao: "",
            link_taobao: [],
            AppayIDs: [],
            selectedRowKeys: [],
            accountId: "",
            platform: "淘宝",
            platformCode: "taobao",
            entityType: "item",
            visible: false,
            typeDA: "",
            status: "",
            start_time: "",
            end_time: "",
            iprName: "", //知识产权名称
            entityOwnerName: "", //被投诉方
            batchId: "", //投诉单号
            currentData: [],
            successBTN: "",
            TITBoy: "",
            AppayIDb: [],
            a: "",
            num: ""
        };

        return _this;
    }

    _createClass(TaobaoInquiries, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _ajax2.default.post("/hcm/complaiont/getListByBmcid", {
                platform: "ALIBABA"
            }).then(function (res) {
                if (res.data.status == 10000) {

                    if (res.data.data.length) {
                        _this2.setState({
                            accountId: res.data.data[0].username,
                            currentData: res.data.data,
                            start_time: _this2.GetDateStr(-90),
                            end_time: _this2.GetDateStr(0),
                            loading: true
                        }, function () {
                            _this2.link_taobao(_this2.state.pageNo, _this2.state.pageSize, _this2.state.accountId, _this2.state.platform, _this2.state.platformCode, _this2.state.entityType, _this2.state.status, _this2.state.start_time, _this2.state.end_time, _this2.state.iprName, _this2.state.entityOwnerName, _this2.state.batchId);
                        });
                    }
                } else {

                    _message3.default.error(res.data.message);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return TaobaoInquiries;
}(React.Component);

exports.default = _form2.default.create()(TaobaoInquiries);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=348_0b4516347cebeaffca56.js.map