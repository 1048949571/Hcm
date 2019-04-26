(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[325],{

/***/ "./app/widget/index/Service/DownloadProgress/main.js":
/*!***********************************************************!*\
  !*** ./app/widget/index/Service/DownloadProgress/main.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _progress = __webpack_require__(/*! antd/es/progress */ "./node_modules/_antd@3.10.1@antd/es/progress/index.js");

var _progress2 = _interopRequireDefault(_progress);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/progress/style/css */ "./node_modules/_antd@3.10.1@antd/es/progress/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Service/DownloadProgress/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DownloadProgress = function (_React$Component) {
    _inherits(DownloadProgress, _React$Component);

    function DownloadProgress(props) {
        _classCallCheck(this, DownloadProgress);

        var _this = _possibleConstructorReturn(this, (DownloadProgress.__proto__ || Object.getPrototypeOf(DownloadProgress)).call(this, props));

        _this.downLoads = function () {
            _this.setState({
                pageSize: 10,
                pageNo: 1,
                totalNum: 0,
                data: []
            }, function () {
                _this.DownloadProgress(_this.state.pageNo, _this.state.pageSize);
            });
        };

        _this.DownloadProgress = function (pageNum, pageSize) {
            LoadingModal({ bl: true });
            _ajax2.default.post("/hcm/search/downLoadRecord_list", {
                pageNo: pageNum,
                pageSize: pageSize
            }).then(function (res) {
                if (res.data.status == 10000) {
                    if (res.data.data.content != "" && res.data.data.content != null) {

                        _this.setState({
                            data: res.data.data.content,
                            totalNum: res.data.data.totalElements,
                            pageSize: res.data.data.pageSize,
                            pageNo: res.data.data.pageNumber,
                            loading: false
                        });
                        LoadingModal({ bl: false });
                    } else {
                        _this.setState({
                            loading: false,
                            data: []
                        });
                        LoadingModal({ bl: false });
                    }
                } else {
                    _this.setState({
                        loading: false
                    });
                    LoadingModal({ bl: false });
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
                _this.setState({
                    loading: false,
                    data: []
                });
                LoadingModal({ bl: false });
            });
        };

        _this.changePagination = function (a, b) {

            _this.setState({
                loading: true,
                pageSize: b,
                pageNo: a,
                titButton: ""
            }, function () {
                _this.DownloadProgress(_this.state.pageNo, _this.state.pageSize);
            });
        };

        _this.onPaginationSize = function (a, b) {
            _this.setState({
                loading: true,
                pageSize: b,
                pageNo: a,
                titButton: ""
            }, function () {
                _this.DownloadProgress(_this.state.pageNo, _this.state.pageSize);
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
            title: '旺旺名称',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    record.shop_nick
                );
            }
        }, {
            title: '进度',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index, style: { display: "inline-block", width: "100%" } },
                    record.status == "已完成" ? React.createElement(
                        'span',
                        { style: { display: "inline-block", width: "100%" } },
                        React.createElement(
                            'b',
                            null,
                            record.status
                        ),
                        React.createElement(
                            'b',
                            { style: { float: "right" } },
                            React.createElement(
                                'a',
                                { href: '/hcm/search/redownLoad_search?filePath=' + record.down_url },
                                '\u7ACB\u5373\u4E0B\u8F7D'
                            )
                        )
                    ) : record.status == "进行中" || record.status == "开始下载" ? React.createElement(_progress2.default, { percent: parseInt(record.current_page / record.total_page * 100), size: 'small' }) : record.status == "失败" ? React.createElement(_progress2.default, { percent: record.current_page / record.total_page * 100, size: 'small', status: 'exception' }) : null
                );
            }
        }, {
            title: '下载时间',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    moment(record.start_time).format('YYYY-MM-DD HH:mm:ss')
                );
            }
        }, {
            title: '下载预计完成时间',
            render: function render(content, record, index) {
                return React.createElement(
                    'span',
                    { key: index },
                    moment(record.end_time).format('YYYY-MM-DD HH:mm:ss')
                );
            }
        }];
        _this.state = {
            pageSize: 10,
            pageNo: 1,
            totalNum: 0,
            loading: false,
            data: [],
            ProductInformation_list: columns,
            storeName: "",
            titButton: ""
        };

        return _this;
    }

    _createClass(DownloadProgress, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.DownloadProgress(this.state.pageNo, this.state.pageSize);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return DownloadProgress;
}(React.Component);

exports.default = _form2.default.create()(DownloadProgress);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=325_b10f4e1d71cb6ff22df9.js.map