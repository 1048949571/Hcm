(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[309],{

/***/ "./app/widget/index/Message/MessageCenter/main.js":
/*!********************************************************!*\
  !*** ./app/widget/index/Message/MessageCenter/main.js ***!
  \********************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Message/MessageCenter/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageCenter = function (_React$Component) {
    _inherits(MessageCenter, _React$Component);

    function MessageCenter(props) {
        _classCallCheck(this, MessageCenter);

        var _this = _possibleConstructorReturn(this, (MessageCenter.__proto__ || Object.getPrototypeOf(MessageCenter)).call(this, props));
        // document.title = '消息中心';


        _this.start = function () {
            //已读
            if (_this.state.AppayIDs.join(",") != "" && _this.state.AppayIDs.join(",") != undefined) {
                _this.setState({ loading: true });
                //console.log(this.state.AppayIDs.join(","))
                setTimeout(function () {

                    _ajax2.default.post('/hcm/hcmMessageCenter/Read', {
                        message_id: _this.state.AppayIDs.join(",")
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            //console.log(res)
                            _this.setState({
                                selectedRowKeys: [],
                                loading: false,
                                AppayIDs: []
                            });
                            _this.DidMountText();
                        }
                    });
                }, 1000);
            } else {
                _message3.default.error("请选择要已读的内容");
            }
        };

        _this.startError = function () {
            if (_this.state.AppayIDs.join(",") != "" && _this.state.AppayIDs.join(",") != undefined) {
                _this.setState({ loadings: true });
                setTimeout(function () {

                    _ajax2.default.post('/hcm/hcmMessageCenter/Delete', {
                        message_id: _this.state.AppayIDs.join(",")
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            _this.setState({
                                selectedRowKeys: [],
                                loadings: false,
                                AppayIDs: []
                            });
                            _this.DidMountText();
                        }
                    });
                }, 1000);
            } else {
                _message3.default.error("请选择要删除的内容");
            }
        };

        _this.onSelectChange = function (selectedRowKeys, appay) {
            //全选

            var AppayID = [];
            appay.forEach(function (v, l) {
                //console.log(v,l)
                AppayID.push(v.id);
            });
            _this.setState({
                selectedRowKeys: selectedRowKeys,
                AppayIDs: AppayID
            });
        };

        _this.changePagination = function (current, pageSize) {
            _ajax2.default.post('/hcm/hcmMessageCenter/Getlist', {
                pageNo: current,
                pageSize: pageSize
            }).then(function (res) {
                if (res.data.status == 10000) {
                    // console.log(res)
                    _this.setState({
                        data: res.data.data.content,
                        totalNum: res.data.data.totalElements,
                        pageNo: current
                    });
                    //console.log(JSON.parse(this.state.data[0].content))
                    //  console.log(this.state.data)
                }
            });
        };

        _this.onPaginationSize = function (current, size) {

            _ajax2.default.post('/hcm/hcmMessageCenter/Getlist', {
                pageNo: current,
                pageSize: size
            }).then(function (res) {
                if (res.data.status == 10000) {
                    console.log(res);
                    _this.setState({
                        data: res.data.data.content,
                        pageNo: current,
                        pageSize: size
                    });
                    // console.log(this.state.data)
                }
            });
        };

        _this.HistoryGo = function () {
            window.history.go(-1);
        };

        _this.MessageCenters = function (index, record, value) {
            window.location = "/index.html#/MessageDetails/" + record.id + "/" + record.sys_type + "/" + record.messagetype;
            //console.log(index, record, value)
        };

        _this.DidMountText = function () {

            _ajax2.default.post('/hcm/hcmMessageCenter/Getlist', {
                pageNo: _this.state.pageNo,
                pageSize: _this.state.pageSize
            }).then(function (res) {
                if (res.data.status == 10000) {
                    console.log(res);
                    _this.setState({
                        data: res.data.data.content,
                        totalNum: res.data.data.totalElements
                    });
                    // console.log(JSON.parse(this.state.data[4].content).obj[0].classify)
                    // console.log(this.state.data)
                }
            });
        };

        var columns = [{
            title: '序号',
            dataIndex: 'index',
            width: "10%",
            render: function render(text, item, index) {
                return index + 1;
            }
        }, {
            title: '标题',
            dataIndex: 'topic',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.isread == 0 ? React.createElement(
                        'a',
                        { className: 'WEIDU', onClick: _this.MessageCenters.bind(_this, content, record, index) },
                        record.topic
                    ) : React.createElement(
                        'span',
                        { className: 'YIDU', onClick: _this.MessageCenters.bind(_this, content, record, index) },
                        record.topic
                    )
                );
            }
        }, {
            title: '内容',
            width: "30%",
            height: "50px",
            overflow: "hidden",
            dataIndex: 'content',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.messagetype == "JGGSXXBG" ? React.createElement(
                        'span',
                        null,
                        '\u6240\u5C5E\u5BA2\u6237\uFF1A',
                        JSON.parse(record.content).change_people,
                        ', \u6240\u5C5E\u5206\u7C7B\uFF1A',
                        JSON.parse(record.content).obj.map(function (item, i) {
                            return React.createElement(
                                'span',
                                { key: i },
                                item.classify
                            );
                        })
                    ) : record.messagetype == "HDSQYSH" ? React.createElement(
                        'span',
                        null,
                        '\u6D3B\u52A8\u4E3B\u9898\uFF1A',
                        JSON.parse(record.content).campaign_name,
                        ',\u5E97\u94FA\u540D\u79F0\uFF1A',
                        JSON.parse(record.content).shop_name
                    ) : record.messagetype == "HDJCBHG" ? React.createElement(
                        'span',
                        null,
                        '\u6D3B\u52A8\u4E3B\u9898\uFF1A',
                        JSON.parse(record.content).campaign_name,
                        ',\u5E97\u94FA\u540D\u79F0\uFF1A',
                        JSON.parse(record.content).shop_name
                    ) : record.messagetype == "TZGG" ? React.createElement(
                        'span',
                        null,
                        '\u516C\u544A\u4E3B\u9898\uFF1A',
                        JSON.parse(record.content).notice_title
                    ) : record.messagetype == "SJGSXXBG" ? React.createElement(
                        'span',
                        null,
                        '\u6240\u5C5E\u5BA2\u6237\uFF1A',
                        JSON.parse(record.content).change_people,
                        ', \u6240\u5C5E\u5206\u7C7B\uFF1A',
                        JSON.parse(record.content).obj.map(function (item, i) {
                            return React.createElement(
                                'span',
                                { key: i },
                                item.classify
                            );
                        })
                    ) : record.messagetype == "HDDSH" ? React.createElement(
                        'span',
                        null,
                        '\u6D3B\u52A8\u4E3B\u9898\uFF1A',
                        JSON.parse(record.content).campaign_name,
                        ',\u5E97\u94FA\u540D\u79F0\uFF1A',
                        JSON.parse(record.content).shop_name
                    ) : record.messagetype == "KHXXBG" ? React.createElement(
                        'span',
                        null,
                        '\u5BA2\u6237\u540D\u79F0\uFF1A',
                        JSON.parse(record.content).dealername,
                        ',\u53D8\u66F4\u4EBA\uFF1A',
                        JSON.parse(record.content).change_user
                    ) : record.messagetype == "KHXXDSH" ? React.createElement(
                        'span',
                        null,
                        '\u5BA2\u6237\u540D\u79F0\uFF1A',
                        JSON.parse(record.content).dealername,
                        ',\u516C\u53F8\u7A0E\u53F7\uFF1A',
                        JSON.parse(record.content).dutynumber
                    ) : record.messagetype == "SPKPCDSZ" ? React.createElement(
                        'span',
                        null,
                        '\u65B0\u5BA2\u6237\uFF1A',
                        JSON.parse(record.content).companynames
                    ) : record.messagetype == "SJJKDSZ" ? React.createElement(
                        'span',
                        null,
                        '\u6240\u5C5E\u5BA2\u6237\uFF1A',
                        JSON.parse(record.content).change_people,
                        ', \u6240\u5C5E\u5206\u7C7B\uFF1A',
                        JSON.parse(record.content).obj.map(function (item, i) {
                            return React.createElement(
                                'span',
                                { key: i },
                                item.classify
                            );
                        })
                    ) : record.messagetype == "DPXZ" || record.messagetype == "DPSC" ? React.createElement(
                        'span',
                        null,
                        '\u5E97\u94FA\u540D\u79F0\uFF1A',
                        JSON.parse(record.content).shop_name,
                        ', \u65FA\u65FA\uFF1A',
                        JSON.parse(record.content).wangwang
                    ) : null
                );
            }
        }, {
            title: '时间',
            dataIndex: 'createtime',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    moment(record.createtime).format('YYYY-MM-DD HH:mm:ss')
                );
            }
        }];
        _this.state = {
            MessageCenter_list: columns,
            selectedRowKeys: [],
            loading: false,
            loadings: false,
            data: [],
            totalNum: 10, //数量
            pageNo: 1, //页数
            pageSize: 10,
            AppayIDs: []

        };

        return _this;
    }

    _createClass(MessageCenter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.DidMountText();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return MessageCenter;
}(React.Component);

exports.default = _form2.default.create()(MessageCenter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=309_b2532085a7f673d0fe63.js.map