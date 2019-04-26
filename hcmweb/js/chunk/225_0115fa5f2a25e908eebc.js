(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[225],{

/***/ "./app/widget/components/Copyright.js":
/*!********************************************!*\
  !*** ./app/widget/components/Copyright.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Copyright = function (_React$Component) {
    _inherits(Copyright, _React$Component);

    function Copyright(props) {
        _classCallCheck(this, Copyright);

        return _possibleConstructorReturn(this, (Copyright.__proto__ || Object.getPrototypeOf(Copyright)).call(this, props));
    }

    _createClass(Copyright, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: this.props.clazzName ? this.props.clazzName : 'Copyright' },
                'Copyright \xA9 \u676D\u5DDE\u4E45\u70B9\u7F51\u7EDC\u6280\u672F\u6709\u9650\u516C\u53F8'
            );
        }
    }]);

    return Copyright;
}(React.Component);

exports.default = Copyright;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/Layout/index.js":
/*!***********************************************!*\
  !*** ./app/widget/components/Layout/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

var _Copyright = __webpack_require__(/*! ../Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

__webpack_require__(/*! ./index.less */ "./app/widget/components/Layout/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightBox = function RightBox(props) {
  return React.createElement(
    'div',
    { className: 'layout-wrapper ' + (props.className || '') },
    React.createElement(
      'div',
      { className: 'header-wrapper' },
      React.createElement(
        _breadcrumb2.default,
        { className: 'breadcrumb' },
        props.breadcrumbList.map(function (v, i) {
          if (props.linkList[i] === '') {
            return React.createElement(
              _breadcrumb2.default.Item,
              { key: v },
              v
            );
          }
          return React.createElement(
            _breadcrumb2.default.Item,
            {
              href: 'javascript:;',
              key: v },
            React.createElement(
              'span',
              { onClick: function onClick() {
                  props.history.go(-props.linkList[i]);
                } },
              v
            )
          );
        })
      )
    ),
    React.createElement(
      'div',
      { className: 'layout-content' },
      props.children
    ),
    React.createElement(
      'div',
      { className: 'copyright' },
      React.createElement(_Copyright2.default, null)
    )
  );
};

RightBox.defaultProps = {
  title: '标题',
  breadcrumbList: [],
  linkList: []
};

exports.default = RightBox;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/Layout/index.less":
/*!*************************************************!*\
  !*** ./app/widget/components/Layout/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Administrator/UpgradeVersion/UpgradeVersion.less":
/*!***************************************************************************!*\
  !*** ./app/widget/index/Administrator/UpgradeVersion/UpgradeVersion.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Administrator/UpgradeVersion/main.js":
/*!***************************************************************!*\
  !*** ./app/widget/index/Administrator/UpgradeVersion/main.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Administrator/UpgradeVersion/tpl.js");

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

        _this.GetDateStr = function (AddDayCount) {
            var dd = new Date();dd.setDate(dd.getDate() + AddDayCount);
            var y = dd.getFullYear();var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
            var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
            return y + "-" + m + "-" + d;
        };

        _this.getListByBmcid = function (begintime, endtime, pageSize, pageNo) {
            _ajax2.default.get("/hcm/HcmUpgradedVersion/getList", {
                params: {
                    begintime: begintime,
                    endtime: endtime,
                    pageSize: pageSize,
                    pageNo: pageNo
                }
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {

                    if (res.data.data.content.length > 0) {
                        _this.setState({
                            link_taobao: res.data.data.content,
                            totalNum: res.data.data.totalElements
                        });
                    }
                } else {

                    message.error(res.data.message);
                }
            });
        };

        _this.onChange = function (date, dateString) {
            //投诉时间
            console.log(date, dateString);
            if (date != "" && date != [] && date != undefined) {
                _this.setState({
                    start_time: dateString[0] + " 00:00:00",
                    end_time: dateString[1] + " 23:59:59",
                    link_taobao: [],
                    pageSize: 10,
                    totalNum: 0,
                    pageNo: 1
                }, function () {
                    _this.getListByBmcid(_this.state.start_time, _this.state.end_time, _this.state.pageSize, _this.state.pageNo);
                });
            } else {
                _this.setState({
                    start_time: _this.GetDateStr(-90),
                    end_time: _this.GetDateStr(0),
                    link_taobao: [],
                    pageSize: 10,
                    totalNum: 0,
                    pageNo: 1
                }, function () {
                    _this.getListByBmcid(_this.state.start_time, _this.state.end_time, _this.state.pageSize, _this.state.pageNo);
                });
            }
        };

        _this.changePagination = function (current, b) {
            _this.setState({
                pageNo: current,
                link_taobao: []
            }, function () {
                _this.getListByBmcid(_this.state.start_time, _this.state.end_time, _this.state.pageSize, _this.state.pageNo);
            });
        };

        _this.onPaginationSize = function (a, pageSize) {
            _this.setState({
                pageSize: pageSize,
                link_taobao: []
            }, function () {
                _this.getListByBmcid(_this.state.start_time, _this.state.end_time, _this.state.pageSize, _this.state.pageNo);
            });
        };

        var columns = [{
            title: '序号',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    index + 1
                );
            }
        }, {
            title: '公司名称',
            dataIndex: 'companyname'
        }, {
            title: '用户名',
            dataIndex: 'username'
        }, {
            title: '联系方式',
            width: "200px",
            dataIndex: "phonenum"

        }, {
            title: '当前使用版本',
            dataIndex: "current_version"
        }, {
            title: '提交时间',
            dataIndex: "createtime",
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    null,
                    moment(record.createtime).format('YYYY-MM-DD HH:mm:ss')
                );
            }

        }, {
            title: '需要升级版本',
            dataIndex: "upgrade_version"
        }];
        _this.state = {
            ProductInformation_list: columns,
            link_taobao: [],
            pageSize: 10,
            totalNum: 0,
            pageNo: 1

        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                begintime: this.GetDateStr(-30) + " 00:00:00",
                endtime: this.GetDateStr(0) + " 23:59:59"
            });
            this.getListByBmcid(this.GetDateStr(-30) + " 00:00:00", this.GetDateStr(0) + " 23:59:59", this.state.pageSize, this.state.pageNo);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ }),

/***/ "./app/widget/index/Administrator/UpgradeVersion/tpl.js":
/*!**************************************************************!*\
  !*** ./app/widget/index/Administrator/UpgradeVersion/tpl.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

__webpack_require__(/*! ./UpgradeVersion.less */ "./app/widget/index/Administrator/UpgradeVersion/UpgradeVersion.less");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Copyright from "../../../components/Copyright";

var Tpl = (0, _That2.default)(function (that) {
    var RangePicker = _datePicker2.default.RangePicker;

    var dateFormat = 'YYYY-MM-DD';
    return React.createElement(
        'div',
        { className: 'UpgradeVersion' },
        React.createElement(
            'div',
            { className: 'Breadcrumb' },
            React.createElement(
                _breadcrumb2.default,
                null,
                React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u7CFB\u7EDF\u8BBE\u7F6E'
                ),
                React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u5347\u7EA7\u7248\u672C\u5BA2\u6237'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'content' },
            React.createElement(
                'div',
                { style: { marginBottom: "20px" } },
                React.createElement(
                    'a',
                    { href: '/hcm/HcmUpgradedVersion/downUpgradedVersionlist?begintime=' + that.state.begintime + '&endtime=' + that.state.endtime + '&pageSize=' + that.state.pageSize + '&pageNo=' + that.state.pageNo },
                    React.createElement(
                        _button2.default,
                        { className: 'btn6' },
                        '\u4E0B\u8F7D\u6570\u636E'
                    )
                ),
                React.createElement(
                    'span',
                    { style: { float: "right" } },
                    '\u63D0\u4EA4\u65F6\u95F4\uFF1A',
                    React.createElement(RangePicker, {
                        style: { width: "300px" },
                        defaultValue: [moment(Date.now() - 720 * 60 * 60 * 1000), moment(Date.now())],
                        onChange: that.onChange,
                        format: dateFormat
                    })
                )
            ),
            React.createElement(_table2.default, {
                pagination: false,
                rowKey: 'id',
                scroll: { x: (that.state.ProductInformation_list.length - 1) * 200 },
                columns: that.state.ProductInformation_list,
                dataSource: that.state.link_taobao
            }),
            React.createElement(
                'div',
                { className: 'ProductInformationFooter' },
                React.createElement(
                    'div',
                    { className: 'footer' },
                    React.createElement(
                        'div',
                        { className: 'info' },
                        '\u5171 ' + that.state.totalNum + ' \u6761\u8BB0\u5F55 ',
                        '\xA0\xA0',
                        '\u7B2C  ' + that.state.pageNo + '  / ' + Math.ceil(that.state.totalNum / that.state.pageSize) + ' \u9875'
                    ),
                    React.createElement(_pagination2.default, { pageSize: that.state.pageSize, current: that.state.pageNo, total: that.state.totalNum, onChange: that.changePagination, onShowSizeChange: that.onPaginationSize, showSizeChanger: true, showQuickJumper: true })
                )
            )
        )
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=225_0115fa5f2a25e908eebc.js.map