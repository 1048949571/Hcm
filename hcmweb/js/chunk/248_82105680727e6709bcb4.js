(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[248],{

/***/ "./app/widget/index/Brand/CustomerEditor/main.js":
/*!*******************************************************!*\
  !*** ./app/widget/index/Brand/CustomerEditor/main.js ***!
  \*******************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/CustomerEditor/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomerEditor = function (_React$Component) {
    _inherits(CustomerEditor, _React$Component);

    function CustomerEditor(props) {
        _classCallCheck(this, CustomerEditor);

        var _this = _possibleConstructorReturn(this, (CustomerEditor.__proto__ || Object.getPrototypeOf(CustomerEditor)).call(this, props));
        // document.title = '编辑';


        _this.createJson = function (prop, val, str) {
            if (typeof val === "undefined") {
                delete str[prop];
            } else {
                str[prop] = val;
            }
        };

        _this.lolo = function (v) {
            v.children.forEach(function (vs, i) {
                if (vs.type === "dept") {
                    _this.createJson("disabled", true, vs);
                    if (vs.children != null) {
                        _this.lolo(vs);
                    }
                } else if (vs.type === "user") {
                    _this.createJson("disabled", false, vs);
                }
            });
        };

        _this.Subordinate = function () {
            _ajax2.default.post('/hcm/userout/getUserTreeByDepartId').then(function (res) {
                //  console.log(res.data.data, "12")
                if (res.data.status == 10000) {
                    res.data.data.forEach(function (v, i) {
                        //   console.log(v,i)
                        if (v.type === "dept") {
                            //  console.log(1)
                            _this.createJson("disabled", true, v);
                            ///  console.log(v)
                            if (v.children != null) {
                                _this.lolo(v);
                            }
                        } else if (v.type === "user") {
                            _this.createJson("disabled", false, v);
                        }
                        // console.log(v,"21")
                    });

                    console.log(res.data.data, "21");
                    _this.setState({
                        treeData: res.data.data,
                        treetitle: res.data.data.length ? res.data.data[0].title : null
                    });
                }
            });
        };

        _this.onChangeSubor = function (value) {
            // console.log(value)
            _this.setState({
                value: value
            });
        };

        _this.component = function () {
            //  console.log(this.props.match.params.id)
            _ajax2.default.post('/hcm/dealer/update_page', {
                id: _this.props.match.params.id
            }).then(function (res) {
                console.log(res, "123");
                if (res.data.data != null || res.data.data != undefined) {
                    var _res$data$data = res.data.data,
                        brand_take_people = _res$data$data.brand_take_people,
                        contact = _res$data$data.contact,
                        dealer_id = _res$data$data.dealer_id,
                        dealername = _res$data$data.dealername,
                        dutynumber = _res$data$data.dutynumber,
                        id = _res$data$data.id,
                        status = _res$data$data.status,
                        status_info = _res$data$data.status_info,
                        take_people = _res$data$data.take_people,
                        bmcid = _res$data$data.bmcid,
                        adx = _objectWithoutProperties(_res$data$data, ['brand_take_people', 'contact', 'dealer_id', 'dealername', 'dutynumber', 'id', 'status', 'status_info', 'take_people', 'bmcid']);

                    var abc = [];
                    _this.setState({
                        // memoDealername: values.authorize_num,
                        //authorize_num  
                        subordinate: res.data.data.brand_take_people,
                        dealername: res.data.data.dealername,
                        dutynumber: res.data.data.memo_dealername,
                        approve_start: res.data.data.authorize_start,
                        approve_end: res.data.data.authorize_end,
                        approve_date: res.data.data.approve_date,
                        authorize_num: res.data.data.authorize_num,
                        Brrby: adx
                    });

                    // console.log(abc.push(this.state.Brrby), JSON.parse(abc[0].add_field))
                    if (res.data.data.apply_status == "APPLYING" || res.data.data.apply_status == "DISAGREE") {
                        _this.setState({
                            IMGS: "../../../img/userTB.jpg",
                            IMGStxt: "客户暂未入驻",
                            USERS: "usersTS", //usersBS成功注入
                            apply_statuS: "APPLYING"
                        });
                    } else if (res.data.data.status_info.info_type == "CON_EXPIRE") {
                        //合约即将到期
                        _this.setState({
                            IMGS: "../../../img/userTB.jpg",
                            IMGStxt: res.data.data.status_info.title,
                            USERS: "usersBS", //usersBS成功注入
                            apply_statuS: "APPLYING"
                        });
                    } else if (res.data.data.status_info.info_type == "WAIT_APPROVE") {
                        //等待审核
                        _this.setState({
                            IMGS: "../../../img/userTB.jpg",
                            IMGStxt: res.data.data.status_info.info,
                            USERS: "usersBS", //usersBS成功注入
                            apply_statuS: "APPLYING"
                        });
                    } else if (res.data.data.status_info.info_type == "UN_INVITED") {
                        //暂未入驻
                        _this.setState({
                            IMGS: "../../../img/icon_Login_prompt_failure.png",
                            IMGStxt: res.data.data.status_info.info,
                            USERS: "usersBS", //usersBS成功注入
                            apply_statuS: "APPLYING"
                        });
                    } else if (res.data.data.status_info.info_type == "WRONG_NAME") {
                        //名称有误
                        _this.setState({
                            IMGS: "../../../img/icon_Login_prompt_failure.png",
                            IMGStxt: res.data.data.status_info.info,
                            USERS: "usersBS", //usersBS成功注入
                            apply_statuS: "WRONG_NAME",
                            WRONG_NAME: false
                        });
                    } else {
                        _this.setState({
                            IMGS: "../../../img/userBS.jpg",
                            IMGStxt: "客户成功入驻",
                            USERS: "usersBS", //usersBS成功注入
                            apply_statuS: "APPLYING"
                        });
                    }
                }
            });
        };

        _this.component_list = function () {

            _ajax2.default.post('/hcm/hcmCustomModel/getBybmcidAndModule', {
                module: "DEALER",
                fieldSource: 2
            }).then(function (res) {
                console.log(res, "12");
                var str = "";
                _this.setState({
                    Array: res.data.data.add.data
                });
            });
        };

        _this.handle = function (value) {
            //  console.log(value)
        };

        _this.iptChange = function (e, type) {
            var _this$state$Array = _this.state.Array,
                CustomerName = _this$state$Array.CustomerName,
                NameOfNote = _this$state$Array.NameOfNote,
                approve_start = _this$state$Array.approve_start,
                approve_date = _this$state$Array.approve_date,
                AuthorizedContent = _this$state$Array.AuthorizedContent,
                Applicant = _this$state$Array.Applicant,
                adds = _objectWithoutProperties(_this$state$Array, ['CustomerName', 'NameOfNote', 'approve_start', 'approve_date', 'AuthorizedContent', 'Applicant']);

            _this.setState({
                addField: adds
            });
            var addField = _this.state.addField;
            addField[type] = e.target.value;
            _this.setState({
                addField: addField
            });
            // console.log(addField.toString())
        };

        _this.add0 = function (m) {
            return m < 10 ? '0' + m : m;
        };

        _this.format = function (shijianchuo) {
            //shijianchuo是整数，否则要parseInt转换
            var time = new Date(shijianchuo);
            var y = time.getFullYear();
            var m = time.getMonth() + 1;
            var d = time.getDate() + 1;
            var h = time.getHours() + 1;
            var mm = time.getMinutes() + 1;
            var s = time.getSeconds() + 1;
            return y + '-' + _this.add0(m) + '-' + _this.add0(d) + ' ' + _this.add0(h) + ':' + _this.add0(mm) + ':' + _this.add0(s);
        };

        _this.ForgetSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                var CustomerName = values.CustomerName,
                    NameOfNote = values.NameOfNote,
                    approve_start = values.approve_start,
                    approve_date = values.approve_date,
                    AuthorizedContent = values.AuthorizedContent,
                    authorize_num = values.authorize_num,
                    Subordinate = values.Subordinate,
                    Applicant = values.Applicant,
                    adds = _objectWithoutProperties(values, ['CustomerName', 'NameOfNote', 'approve_start', 'approve_date', 'AuthorizedContent', 'authorize_num', 'Subordinate', 'Applicant']);

                if (!err) {
                    console.log(values);

                    if (_this.state.approve_start != undefined && _this.state.approve_start != "") {

                        if (values.approve_start != null && values.approve_start != "" && values.approve_start != undefined) {

                            if (_this.state.approve_date != undefined && _this.state.approve_date != "") {

                                console.log(adds);
                                _ajax2.default.post('/hcm/dealer/update', {
                                    module: "DEALER",
                                    fieldSource: 2,
                                    dealername: values.CustomerName,
                                    id: _this.props.match.params.id,
                                    memoDealername: values.NameOfNote,
                                    authorizeStart: moment(_this.state.approve_start).format('YYYY-MM-DD'),
                                    authorizeEnd: moment(_this.state.approve_end).format('YYYY-MM-DD'),
                                    authorizeNum: values.authorize_num,
                                    brandTakePeople: values.Subordinate,
                                    approveDate: moment(_this.state.approve_date).format('YYYY-MM-DD HH:mm:ss'),
                                    addField: JSON.stringify(adds)
                                }).then(function (res) {
                                    //          console.log(res)
                                    if (res.data.status == 10000) {
                                        window.location = "/index.html#/ClientCheck";
                                    } else if (res.data.status == 310001) {
                                        _message3.default.error(res.data.message);
                                    } else {
                                        _message3.default.error(res.data.message);
                                    }
                                });
                            } else {

                                console.log(_this.state.approve_date, "3");
                                _ajax2.default.post('/hcm/dealer/update', {
                                    module: "DEALER",
                                    fieldSource: 2,
                                    dealername: values.CustomerName,
                                    id: _this.props.match.params.id,
                                    memoDealername: values.NameOfNote,
                                    authorizeStart: moment(_this.state.approve_start).format('YYYY-MM-DD'),
                                    authorizeEnd: moment(_this.state.approve_end).format('YYYY-MM-DD'),
                                    authorizeNum: values.authorize_num,
                                    brandTakePeople: values.Subordinate,
                                    approveDate: moment(Date.now()._i).format('YYYY-MM-DD HH:mm:ss'),
                                    addField: JSON.stringify(adds)
                                }).then(function (res) {
                                    //          console.log(res)
                                    if (res.data.status == 10000) {
                                        window.location = "/index.html#/ClientCheck";
                                    } else if (res.data.status == 310001) {
                                        _message3.default.error(res.data.message);
                                    } else {
                                        _message3.default.error(res.data.message);
                                    }
                                });
                            }
                        } else {
                            _message3.default.error("请选择授权期限！");
                        }
                    } else {
                        if (values.approve_start != null && values.approve_start != "" && values.approve_start != undefined) {

                            if (_this.state.approve_date != undefined && _this.state.approve_date != "") {
                                console.log(_this.state.approve_date, "1");
                                _ajax2.default.post('/hcm/dealer/update', {
                                    module: "DEALER",
                                    fieldSource: 2,
                                    dealername: values.CustomerName,
                                    id: _this.props.match.params.id,
                                    memoDealername: values.NameOfNote,
                                    authorizeStart: moment(Date.now()._i).format('YYYY-MM-DD'),
                                    authorizeEnd: moment(Date.now()._i).format('YYYY-MM-DD'),
                                    authorizeNum: values.authorize_num,
                                    brandTakePeople: values.Subordinate,
                                    approveDate: moment(_this.state.approve_date).format('YYYY-MM-DD HH:mm:ss'),
                                    addField: JSON.stringify(adds)
                                }).then(function (res) {
                                    //         console.log(res)
                                    if (res.data.status == 10000) {
                                        window.location = "/index.html#/ClientCheck";
                                    } else {
                                        _message3.default.error(res.data.message);
                                    }
                                });
                            } else {
                                console.log(_this.state.approve_date, "2");
                                _ajax2.default.post('/hcm/dealer/update', {
                                    module: "DEALER",
                                    fieldSource: 2,
                                    dealername: values.CustomerName,
                                    id: _this.props.match.params.id,
                                    memoDealername: values.NameOfNote,
                                    authorizeStart: moment(Date.now()._i).format('YYYY-MM-DD'),
                                    authorizeEnd: moment(Date.now()._i).format('YYYY-MM-DD'),
                                    authorizeNum: values.authorize_num,
                                    brandTakePeople: values.Subordinate,
                                    approveDate: moment(Date.now()._i).format('YYYY-MM-DD HH:mm:ss'),
                                    addField: JSON.stringify(adds)
                                }).then(function (res) {
                                    //         console.log(res)
                                    if (res.data.status == 10000) {
                                        window.location = "/index.html#/ClientCheck";
                                    } else {
                                        _message3.default.error(res.data.message);
                                    }
                                });
                            }
                        } else {
                            _message3.default.error("请选择授权期限！");
                        }
                    }
                }
            });
        };

        _this.SuccessBTN = function () {};

        _this.ErrorBTN = function () {
            window.location = "/index.html#/ClientCheck";
        };

        _this.handleChange = function (value) {
            //console.log(value)
        };

        _this.onChange = function (date, dateString) {
            // console.log(dateString);
            _this.setState({
                approve_end: dateString[1],
                approve_start: dateString[0]
            });
        };

        _this.onChangeX = function (date, dateString) {
            console.log(date._i, dateString);
            _this.setState({
                approve_date: dateString + " 00:00:00"
            });
            console.log(_this.state.approve_date);
        };

        var treeData = [{
            title: 'Node1',
            value: '1',
            key: '1',
            children: [{
                title: 'Child Node1',
                value: '0-0-1',
                key: '0-0-1'
            }, {
                title: 'Child Node2',
                value: '0-0-2',
                key: '0-0-2'
            }]
        }, {
            title: 'Node2',
            value: '0-1',
            key: '0-1'
        }];
        _this.state = {
            TShow: false,
            IMGS: "",
            IMGStxt: "",
            USERS: "",
            dealername: "",
            dutynumber: "",
            approve_start: "",
            approve_end: "",
            approve_date: "",
            apply_person: "",
            apply_content: "",
            subordinate: "",
            Array: "",
            Brrby: [],
            addField: {},
            authorize_num: "",
            value: undefined,
            treeData: "",
            apply_statuS: "",
            treetitle: "",
            treeid: "",
            showX: false,
            WRONG_NAME: true
        };
        return _this;
    }

    _createClass(CustomerEditor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.component_list();
            this.component();
            this.Subordinate();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return CustomerEditor;
}(React.Component);

exports.default = _form2.default.create()(CustomerEditor);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=248_82105680727e6709bcb4.js.map