(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[311],{

/***/ "./app/widget/index/Message/MessageDetails/main.js":
/*!*********************************************************!*\
  !*** ./app/widget/index/Message/MessageDetails/main.js ***!
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

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Message/MessageDetails/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageDetails = function (_React$Component) {
    _inherits(MessageDetails, _React$Component);

    function MessageDetails(props) {
        _classCallCheck(this, MessageDetails);

        var _this = _possibleConstructorReturn(this, (MessageDetails.__proto__ || Object.getPrototypeOf(MessageDetails)).call(this, props));
        // document.title = '消息详情';


        _this.DidMountText = function () {

            if (_this.props.match.params.type == "HCM") {
                if (_this.props.match.params.messagetype == "SJGSXXBG") {
                    _this.setState({
                        type: 1
                    });
                    _ajax2.default.post('/hcm/hcmMessageCenter/Detail', {
                        message_id: _this.props.match.params.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            console.log(JSON.parse(res.data.data.content));
                            _this.setState({
                                messagetypes: _this.props.match.params.messagetype,
                                types: _this.props.match.params.type,
                                SJGSXXBG: {
                                    topic: res.data.data.topic,
                                    time: moment(res.data.data.createtime).format('YYYY-MM-DD HH:mm:ss'),
                                    TS: "提交了入驻申请，待你审核",
                                    BUTTONtit: "查看详情",
                                    content: {
                                        change_people: JSON.parse(res.data.data.content).change_people,
                                        change_time: moment(JSON.parse(res.data.data.content).change_time).format('YYYY-MM-DD HH:mm:ss'),
                                        obj: JSON.parse(res.data.data.content).obj
                                    }
                                }
                            });
                            //console.log(this.state.SJGSXXBG.content)
                        }
                    });
                } else if (_this.props.match.params.messagetype == "KHXXDSH") {
                    // 品牌方 -客户信息待审核提醒
                    _this.setState({
                        type: 2
                    });
                    _ajax2.default.post('/hcm/hcmMessageCenter/Detail', {
                        message_id: _this.props.match.params.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            // console.log(res)
                            // console.log(JSON.parse(res.data.data.content))
                            _this.setState({
                                messagetypes: _this.props.match.params.messagetype,
                                types: _this.props.match.params.type,
                                KHXXDSH: {
                                    topic: res.data.data.topic,
                                    time: moment(res.data.data.createtime).format('YYYY-MM-DD HH:mm:ss'),
                                    TS: "提交了入驻申请，待你审核",
                                    BUTTONtit: "立即审批",
                                    content: {
                                        dealername: "客户名称：" + JSON.parse(res.data.data.content).dealername,
                                        apply_date: "申请时间：" + moment(JSON.parse(res.data.data.content).apply_date).format('YYYY-MM-DD HH:mm:ss'),
                                        address: "公司地址：" + JSON.parse(res.data.data.content).address,
                                        dutynumber: "公司税号：" + JSON.parse(res.data.data.content).dutynumber,
                                        contact: "联系方式：" + JSON.parse(res.data.data.content).contact,
                                        take_people: "对接人姓名：" + JSON.parse(res.data.data.content).take_people
                                    }
                                }
                            });
                            //console.log(this.state.KHXXDSH.topic)
                        }
                    });
                } else if (_this.props.match.params.messagetype == "KHXXBG") {
                    _this.setState({
                        type: 3
                    });
                    _ajax2.default.post('/hcm/hcmMessageCenter/Detail', {
                        message_id: _this.props.match.params.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            // console.log(res)
                            //console.log(JSON.parse(res.data.data.content))
                            _this.setState({
                                messagetypes: _this.props.match.params.messagetype,
                                types: _this.props.match.params.type,
                                KHXXBG: {
                                    topic: res.data.data.topic,
                                    time: moment(res.data.data.createtime).format('YYYY-MM-DD HH:mm:ss'),
                                    TS: "提交了入驻申请，待你审核",
                                    BUTTONtit: "查看详情",
                                    content: {
                                        dealername: "客户名称：" + JSON.parse(res.data.data.content).dealername,
                                        change_time: "变更时间：" + JSON.parse(res.data.data.content).change_time,
                                        change_user: "变更人：" + JSON.parse(res.data.data.content).change_user

                                    }
                                }
                            });
                            // console.log(this.state.KHXXDSH.topic)
                        }
                    });
                } else if (_this.props.match.params.messagetype == "HDDSH") {
                    _this.setState({
                        type: 4
                    });
                    _ajax2.default.post('/hcm/hcmMessageCenter/Detail', {
                        message_id: _this.props.match.params.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            console.log(res);
                            // console.log(JSON.parse(res.data.data.content))
                            _this.setState({
                                messagetypes: _this.props.match.params.messagetype,
                                types: _this.props.match.params.type,
                                HDDSH: {
                                    topic: res.data.data.topic,
                                    time: moment(res.data.data.createtime).format('YYYY-MM-DD HH:mm:ss'),
                                    TS: "提交了活动申请，待你审核。",
                                    BUTTONtit: "立即审核",
                                    content: {
                                        campaign_name: "活动主题：" + JSON.parse(res.data.data.content).campaign_name,
                                        createtime: "申请时间：" + JSON.parse(res.data.data.content).createtime,
                                        dealer_name: "所属客户：" + JSON.parse(res.data.data.content).dealer_name,
                                        now_date: "活动时间：" + JSON.parse(res.data.data.content).now_date,
                                        ping_name: "平台：" + JSON.parse(res.data.data.content).ping_name,
                                        shop_name: "店铺名称:" + JSON.parse(res.data.data.content).shop_name
                                    }
                                }
                            });
                            // console.log(this.state.KHXXDSH.topic)
                        }
                    });
                } else if (_this.props.match.params.messagetype == "TZGG") {
                    _this.setState({
                        type: 5
                    });
                    _ajax2.default.post('/hcm/hcmMessageCenter/Detail', {
                        message_id: _this.props.match.params.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            console.log(res);
                            console.log(JSON.parse(res.data.data.content));
                            _this.setState({
                                messagetypes: _this.props.match.params.messagetype,
                                types: _this.props.match.params.type,
                                TZGG: {
                                    topic: res.data.data.topic,
                                    time: moment(res.data.data.createtime).format('YYYY-MM-DD HH:mm:ss'),
                                    TS: "",
                                    BUTTONtit: "查看详情",
                                    content: {
                                        notice_title: "活动主题：" + JSON.parse(res.data.data.content).notice_title,
                                        createtime: "发布时间：" + JSON.parse(res.data.data.content).createtime,
                                        departnames: "接收部门：" + JSON.parse(res.data.data.content).departnames,
                                        user_name: "发布人：" + JSON.parse(res.data.data.content).user_name,
                                        notice_id: JSON.parse(res.data.data.content).notice_id
                                    }
                                }
                            });
                            console.log(_this.state.KHXXDSH.topic);
                        }
                    });
                }
            } else if (_this.props.match.params.type == "DEALER") {
                if (_this.props.match.params.messagetype == "HDSQYSH") {
                    // console.log(2)
                    _this.setState({
                        type: 4
                    });
                    _ajax2.default.post('/hcm/hcmMessageCenter/Detail', {
                        message_id: _this.props.match.params.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            //console.log(res)
                            // console.log(JSON.parse(res.data.data.content))
                            _this.setState({
                                messagetypes: _this.props.match.params.messagetype,
                                types: _this.props.match.params.type,
                                HDDSH: {
                                    topic: res.data.data.topic,
                                    time: moment(res.data.data.createtime).format('YYYY-MM-DD HH:mm:ss'),
                                    TS: "你提交的活动申请：",
                                    BUTTONtit: "查看详情",
                                    content: {
                                        campaign_name: "活动主题：" + JSON.parse(res.data.data.content).campaign_name,
                                        createtime: "申请时间：" + JSON.parse(res.data.data.content).createtime,
                                        now_date: "活动时间：" + JSON.parse(res.data.data.content).now_date,
                                        ping_name: "平台：" + JSON.parse(res.data.data.content).ping_name,
                                        shop_name: "店铺名称:" + JSON.parse(res.data.data.content).shop_name,
                                        campaign_id: JSON.parse(res.data.data.content).campaign_id
                                    }
                                }
                            });
                            //console.log(this.state.HDDSH.topic)
                        }
                    });
                } else if (_this.props.match.params.messagetype == "JGGSXXBG") {
                    //console.log(1)
                    _this.setState({
                        type: 1
                    });
                    _ajax2.default.post('/hcm/hcmMessageCenter/Detail', {
                        message_id: _this.props.match.params.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            console.log(JSON.parse(res.data.data.content));
                            _this.setState({
                                messagetypes: _this.props.match.params.messagetype,
                                types: _this.props.match.params.type,
                                SJGSXXBG: {
                                    topic: res.data.data.topic,
                                    time: moment(res.data.data.createtime).format('YYYY-MM-DD HH:mm:ss'),
                                    TS: "提交了入驻申请，待你审核",
                                    BUTTONtit: "查看详情",
                                    content: {
                                        change_people: JSON.parse(res.data.data.content).change_people,
                                        change_time: moment(JSON.parse(res.data.data.content).change_time).format('YYYY-MM-DD HH:mm:ss'),
                                        obj: JSON.parse(res.data.data.content).obj
                                    }
                                }
                            });
                            //console.log(this.state.SJGSXXBG.content)
                        }
                    });
                } else if (_this.props.match.params.messagetype == "HDJCBHG") {
                    _this.setState({
                        type: 4
                    });
                    _ajax2.default.post('/hcm/hcmMessageCenter/Detail', {
                        message_id: _this.props.match.params.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            console.log(res);
                            // console.log(JSON.parse(res.data.data.content))
                            _this.setState({
                                messagetypes: _this.props.match.params.messagetype,
                                types: _this.props.match.params.type,
                                HDDSH: {
                                    topic: res.data.data.topic,
                                    time: moment(res.data.data.createtime).format('YYYY-MM-DD HH:mm:ss'),
                                    TS: "经品牌相关方人员稽查，以下商品未按活动报备的方式进行",
                                    BUTTONtit: "查看详情",
                                    content: {
                                        campaign_name: "活动主题：" + JSON.parse(res.data.data.content).campaign_name,
                                        createtime: "申请时间：" + JSON.parse(res.data.data.content).createtime,
                                        dealer_name: "链接地址：" + JSON.parse(res.data.data.content).pro_url,
                                        now_date: "活动时间：" + JSON.parse(res.data.data.content).now_date,
                                        ping_name: "平台：" + JSON.parse(res.data.data.content).ping_name,
                                        shop_name: "店铺名称:" + JSON.parse(res.data.data.content).shop_name
                                    }
                                }
                            });
                            //console.log(this.state.HDDSH.topic)
                        }
                    });
                } else if (_this.props.match.params.messagetype == "TZGG") {
                    _this.setState({
                        type: 5
                    });
                    _ajax2.default.post('/hcm/hcmMessageCenter/Detail', {
                        message_id: _this.props.match.params.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            console.log(res);
                            console.log(JSON.parse(res.data.data.content));
                            _this.setState({
                                messagetypes: _this.props.match.params.messagetype,
                                types: _this.props.match.params.type,
                                TZGG: {
                                    topic: res.data.data.topic,
                                    time: moment(res.data.data.createtime).format('YYYY-MM-DD HH:mm:ss'),
                                    TS: "品牌方相关人员发布了新通知公告",
                                    BUTTONtit: "查看详情",
                                    content: {
                                        notice_title: "公告主题：" + JSON.parse(res.data.data.content).notice_title,
                                        createtime: "发布时间：" + JSON.parse(res.data.data.content).createtime,
                                        notice_id: JSON.parse(res.data.data.content).notice_id

                                    }
                                }
                            });
                        }
                    });
                } else if (_this.props.match.params.messagetype == "DPXZ" || _this.props.match.params.messagetype == "DPSC") {
                    _this.setState({
                        type: 4
                    });
                    _ajax2.default.post('/hcm/hcmMessageCenter/Detail', {
                        message_id: _this.props.match.params.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            console.log(res);
                            console.log(JSON.parse(res.data.data.content));
                            _this.setState({
                                messagetypes: _this.props.match.params.messagetype,
                                types: _this.props.match.params.type,
                                HDDSH: {
                                    topic: res.data.data.topic,
                                    time: moment(res.data.data.createtime).format('YYYY-MM-DD HH:mm:ss'),
                                    TS: _this.props.match.params.messagetype == "DPXZ" ? "品牌方相关人员在您名下新增了店铺信息" : "品牌方相关人员在您名下删除了店铺信息",
                                    BUTTONtit: "查看详情",
                                    content: {
                                        notice_title: "平台：" + JSON.parse(res.data.data.content).platform,
                                        shop_name: "店铺名称：" + JSON.parse(res.data.data.content).shop_name,
                                        notice_id: "旺旺：" + JSON.parse(res.data.data.content).wangwang,
                                        createtime: "店铺首页地址：" + JSON.parse(res.data.data.content).shop_url
                                    }
                                }
                            });
                        }
                    });
                }
            } else if (_this.props.match.params.type == "KEFU") {
                if (_this.props.match.params.messagetype == "SPKPCDSZ") {
                    _this.setState({
                        type: 4
                    });
                    _ajax2.default.post('/hcm/hcmMessageCenter/Detail', {
                        message_id: _this.props.match.params.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            console.log(res);
                            _this.setState({
                                messagetypes: _this.props.match.params.messagetype,
                                types: _this.props.match.params.type,
                                HHtwo: "你服务的新客户：",
                                HDDSH: {
                                    topic: res.data.data.topic,
                                    time: moment(res.data.data.createtime).format('YYYY-MM-DD HH:mm:ss'),
                                    TS: "超级管理员给你分配了新的服务客户",
                                    BUTTONtit: "立即设置",
                                    content: {
                                        campaign_name: JSON.parse(res.data.data.content).companynames
                                    }
                                }
                            });
                            // console.log(this.state.KHXXDSH.topic)
                        }
                    });
                } else if (_this.props.match.params.messagetype == "SJJKDSZ") {
                    _this.setState({
                        type: 1
                    });
                    _ajax2.default.post('/hcm/hcmMessageCenter/Detail', {
                        message_id: _this.props.match.params.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            console.log(JSON.parse(res.data.data.content));
                            _this.setState({
                                messagetypes: _this.props.match.params.messagetype,
                                types: _this.props.match.params.type,
                                SJGSXXBG: {
                                    topic: res.data.data.topic,
                                    time: moment(res.data.data.createtime).format('YYYY-MM-DD HH:mm:ss'),
                                    TS: "提交了入驻申请，待你审核",
                                    BUTTONtit: "查看详情",
                                    content: {
                                        change_people: JSON.parse(res.data.data.content).change_people,
                                        change_time: moment(JSON.parse(res.data.data.content).change_time).format('YYYY-MM-DD HH:mm:ss'),
                                        obj: JSON.parse(res.data.data.content).obj
                                    }
                                }
                            });
                            //console.log(this.state.SJGSXXBG.content)
                        }
                    });
                }
            } else if (_this.props.match.params.type == "SHOP") {
                if (_this.props.match.params.messagetype == "HDSQYSH") {
                    // console.log(2)
                    _this.setState({
                        type: 4
                    });
                    _ajax2.default.post('/hcm/hcmMessageCenter/Detail', {
                        message_id: _this.props.match.params.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            //console.log(res)
                            // console.log(JSON.parse(res.data.data.content))
                            _this.setState({
                                messagetypes: _this.props.match.params.messagetype,
                                types: _this.props.match.params.type,
                                HDDSH: {
                                    topic: res.data.data.topic,
                                    time: moment(res.data.data.createtime).format('YYYY-MM-DD HH:mm:ss'),
                                    TS: "你提交的活动申请：",
                                    BUTTONtit: "查看详情",
                                    content: {
                                        campaign_name: "活动主题：" + JSON.parse(res.data.data.content).campaign_name,
                                        createtime: "申请时间：" + JSON.parse(res.data.data.content).createtime,
                                        now_date: "活动时间：" + JSON.parse(res.data.data.content).now_date,
                                        ping_name: "平台：" + JSON.parse(res.data.data.content).ping_name,
                                        shop_name: "店铺名称:" + JSON.parse(res.data.data.content).shop_name,
                                        campaign_id: JSON.parse(res.data.data.content).campaign_id
                                    }
                                }
                            });
                            //console.log(this.state.HDDSH.topic)
                        }
                    });
                } else if (_this.props.match.params.messagetype == "JGGSXXBG") {
                    //console.log(1)
                    _this.setState({
                        type: 1
                    });
                    _ajax2.default.post('/hcm/hcmMessageCenter/Detail', {
                        message_id: _this.props.match.params.id
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            console.log(JSON.parse(res.data.data.content));
                            _this.setState({
                                messagetypes: _this.props.match.params.messagetype,
                                types: _this.props.match.params.type,
                                SJGSXXBG: {
                                    topic: res.data.data.topic,
                                    time: moment(res.data.data.createtime).format('YYYY-MM-DD HH:mm:ss'),
                                    TS: "提交了入驻申请，待你审核",
                                    BUTTONtit: "查看详情",
                                    content: {
                                        change_people: JSON.parse(res.data.data.content).change_people,
                                        change_time: moment(JSON.parse(res.data.data.content).change_time).format('YYYY-MM-DD HH:mm:ss'),
                                        obj: JSON.parse(res.data.data.content).obj
                                    }
                                }
                            });
                            //console.log(this.state.SJGSXXBG.content)
                        }
                    });
                }
            }
        };

        _this.SJGSXXBG_XQ = function () {
            //品牌方 售价公式 查看详情
            window.location = "/index.html#/PriceNotice";
        };

        _this.KHXXDSH_SH = function () {
            //品牌方 客户信息待审核提醒 立即审核
            window.location = "/index.html#/PendingClient";
        };

        _this.KHXXBG_XQ = function () {
            // 品牌方 客户信息变更历史 查看详情
            window.location = "/index.html#/ClientCheck";
        };

        _this.HDDSH_SH = function () {
            //品牌方  活动待审核 立即审核
            window.location = "/index.html#/ActivityReview";
        };

        _this.TZGG_SH = function (e) {
            //品牌方  通知公告 立即审核
            window.location = "/index.html#/InfoAnnouncement/" + e.target.getAttribute("notice_id");
        };

        _this.JGGSXXBG_XQ = function (e) {
            window.location = "/index.html#/PricePublicity";
        };

        _this.JGGSXXBG_XQs = function (e) {
            window.location = "/index.html#/PricePublicity";
        };

        _this.HDSQYSH_XQ = function (e) {
            //活动已审核
            window.location = "/index.html#/ActivityDetails/" + e.target.getAttribute("campaign_id") + "/已审核";
        };

        _this.HDSQYSH_XQs = function (e) {
            //活动已审核
            window.location = "/index.html#/ApprovalQuery";
        };

        _this.HDJCBHG_XQ = function (e) {
            //活动稽查不合格
            window.location = "/index.html#/ActivityDetails/" + e.target.getAttribute("campaign_id") + "/已审核";
        };

        _this.TZGG_XQ = function (e) {
            //通知公告
            window.location = "/index.html#/InfoAnnouncement/" + e.target.getAttribute("notice_id");
        };

        _this.DPXZSC_SX = function () {
            //店铺新增/删除提醒
            window.location = "/index.html#/StoreManagement/";
        };

        _this.SJJKDSZ_XQ = function () {
            //客服  售价监控待设置提醒
            window.location = "/index.html#/ProductClass";
        };

        _this.SPKPCDSZ_SH = function () {
            //客服  售价监控待设置提醒
            if (window.localStorage.roleid != "3") {
                window.location.href = "/index.html#/ClientInfo";
            } else {
                _message3.default.error("普通客服");
            }
        };

        _this.HistoryGo = function () {
            window.history.go(-1);
        };

        _this.state = {
            type: "",
            messagetypes: "",
            types: "",
            SJGSXXBG: {
                topic: "",
                time: "",
                TS: "",
                BUTTONtit: "",
                content: {
                    change_people: "",
                    change_time: "",
                    obj: ""
                }
            },
            KHXXDSH: { // 品牌方-客户信息待审核提醒
                topic: "",
                time: "",
                TS: "",
                BUTTONtit: "",
                content: {
                    dealername: "",
                    apply_date: "",
                    address: "",
                    dutynumber: "",
                    contact: "",
                    take_people: ""
                }
            },
            KHXXBG: { // 品牌方-变更
                topic: "",
                time: "",
                TS: "",
                BUTTONtit: "",
                content: {
                    dealername: "",
                    change_time: "",
                    change_user: ""
                }
            },
            HDDSH: { // 品牌方-活动
                topic: "",
                time: "",
                TS: "",
                BUTTONtit: "",
                content: {
                    campaign_name: "",
                    createtime: "",
                    dealer_name: "",
                    now_date: "",
                    ping_name: "",
                    shop_name: "",
                    campaign_id: "",
                    notice_title: "",
                    notice_id: ""
                }

            },
            TZGG: { //通知公告
                topic: "",
                time: "",
                TS: "",
                BUTTONtit: "",
                content: {
                    notice_title: "",
                    createtime: "",
                    departnames: "",
                    user_name: "",
                    notice_id: "",
                    message_id: _this.props.match.params.id
                }

            }
        };
        return _this;
    }

    _createClass(MessageDetails, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(Props) {
            var _this2 = this;

            if (this.props.match.params.id != Props.match.params.id) {
                this.setState({
                    message_id: Props.match.params.id
                }, function () {
                    _this2.DidMountText();
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.DidMountText();
            //
        }
        //品牌方


        //经销商

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return MessageDetails;
}(React.Component);

exports.default = _form2.default.create()(MessageDetails);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_assignValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_assignValue.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/_lodash@4.17.11@lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/_lodash@4.17.11@lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_baseAssignValue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_baseAssignValue.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/_lodash@4.17.11@lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_defineProperty.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/_lodash@4.17.11@lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ })

}]);
//# sourceMappingURL=311_adf37b1bdd1d293a1dbd.js.map