(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[326],{

/***/ "./app/widget/index/Service/Home/main.js":
/*!***********************************************!*\
  !*** ./app/widget/index/Service/Home/main.js ***!
  \***********************************************/
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

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Service/Home/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PAGE = {
    pageNo: 1,
    pageSize: 10
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.handlePageChange = function (data, funName, pageNo) {
            // console.log(data, funName, pageNo)
            _this[funName]({
                pageNo: pageNo,
                pageSize: DEFAULT_PAGE.pageSize
            });
        };

        _this.getBrandProductLibData = function (params) {
            var url = '/hcm/Index/kefuIndexBrandKeyword';
            _this.getFn(url, 'brandProductLib', params);
        };

        _this.getCompetProductLibData = function (params) {
            var url = '/hcm/Index/kefuIndexJingpinKeyword';
            _this.getFn(url, 'competProductLib', params);
        };

        _this.getKeywordMonitorData = function (params) {
            var url = '/hcm/Index/kefuIndexKeywordMonitor';
            _this.getFn(url, 'keywordMonitor', params);
        };

        _this.getSalesTableMonitorData = function (params) {
            var url = '/hcm/Index/kefuIndexProductSetting';
            _this.getFn(url, 'salesTableMonitor', params);
        };

        _this.getLinkMarkData = function (params) {
            var url = '/hcm/Index/kefuIndexItemMark';
            _this.getFn(url, 'linkMark', params);
        };

        _this.getActivityUninspectionData = function (params) {
            var url = '/hcm/Index/kefuIndexInspectSetting';
            _this.getFn(url, 'activityUninspection', params);
        };

        _this.getFn = function (url, key, params) {
            _ajax2.default.get(url, { params: params }).then(function (res) {
                var _res$data = res.data,
                    data = _res$data.data,
                    status = _res$data.status,
                    message = _res$data.message;

                if (status === '10000') {
                    _this.setState(_defineProperty({}, key, {
                        list: data.content,
                        // total: data.obj,
                        pageNo: data.pageNumber,
                        pageSize: data.pageSize,
                        totalElements: data.totalElements
                    }));
                } else {
                    _message3.default.error(message);
                }
            }).catch(function (err) {
                _message3.default.error('系统繁忙，请稍后再试！');
            });
        };

        _this.state = {
            brandProductLib: {}, // 品牌商品库
            competProductLib: {}, // 竞品商品库
            keywordMonitor: {}, // 关键词监控
            salesTableMonitor: {}, // 销售数据报表
            linkMark: {}, // 链接打标
            activityUninspection: {} // 活动待稽查
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getBrandProductLibData(DEFAULT_PAGE);
            this.getCompetProductLibData(DEFAULT_PAGE);
            this.getKeywordMonitorData(DEFAULT_PAGE);
            this.getSalesTableMonitorData(DEFAULT_PAGE);
            this.getLinkMarkData(DEFAULT_PAGE);
            this.getActivityUninspectionData(DEFAULT_PAGE);
        }

        // 获取品牌商品库数据

        // 获取竞品商品库数据

        // 获取关键词监控数据

        // 获取销售报表数据

        // 获取链接打标数据

        // 获取活动稽查数据

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=326_ecc7e3166bf190c1191c.js.map