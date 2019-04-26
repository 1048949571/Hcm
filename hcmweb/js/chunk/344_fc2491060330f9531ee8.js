(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[344],{

/***/ "./app/widget/index/Shop/Home/main.js":
/*!********************************************!*\
  !*** ./app/widget/index/Shop/Home/main.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Shop/Home/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        var _this2 = this;

        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.activityDeclaration = function () {
            window.location.hash = '/ActivityDeclaration';
        };

        _this.shopindex = function () {
            var _this$state = _this.state,
                noticeNotReadCount = _this$state.noticeNotReadCount,
                productNotReadCount = _this$state.productNotReadCount,
                huanbi = _this$state.huanbi,
                lastMonthCount = _this$state.lastMonthCount,
                reportforms = _this$state.reportforms,
                huanbiState = _this$state.huanbiState;
            // LoadingModal({bl:true})

            _ajax2.default.get('/hcm/Index/shopIndex').then(function (res) {
                // console.log(res)
                // LoadingModal({bl:false})
                if (res.data.status == 10000) {
                    noticeNotReadCount = res.data.data.noticeNotReadCount;
                    productNotReadCount = res.data.data.productNotReadCount;
                    huanbi = res.data.data.huanbi;
                    lastMonthCount = res.data.data.lastMonthCount;
                    reportforms = res.data.data.list;
                    huanbiState = res.data.data.huanbiState;
                    _this.setState({ noticeNotReadCount: noticeNotReadCount, productNotReadCount: productNotReadCount, huanbi: huanbi, lastMonthCount: lastMonthCount, reportforms: reportforms, huanbiState: huanbiState });
                }
            }).catch(function () {
                // LoadingModal({bl:false})
                _message3.default.error('获取信息失败');
            });
        };

        _this.tabs = function () {
            var tabsData = _this.state.tabsData;

            LoadingModal({ bl: true });
            _ajax2.default.get('/hcm/campgign/ScheduleBMCSeven').then(function (res) {
                // console.log(res)
                LoadingModal({ bl: false });
                if (res.data.status == 10000) {
                    tabsData = res.data.data;
                    _this.setState({ tabsData: tabsData }, function () {
                        _this.sevendaysTab(0, tabsData[0].my_date);
                    });
                }
            }).catch(function () {
                LoadingModal({ bl: false });
                _message3.default.error('获取信息失败');
            });
        };

        _this.sevendaysTab = function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(i, time) {
                var _this$state2, shops, hotCommodity, items;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this$state2 = _this.state, shops = _this$state2.shops, hotCommodity = _this$state2.hotCommodity;
                                items = document.querySelectorAll('.item');
                                // console.log(items)

                                items.forEach(function (ee, ii) {
                                    items[ii].className = 'item';
                                });
                                items[i].className = 'item active';
                                time = moment(time).format('YYYY-MM-DD');
                                LoadingModal({ bl: true });
                                _context.next = 8;
                                return _ajax2.default.get('/hcm/campgign/findCampaignShopsPageList', {
                                    params: {
                                        campaign_node: '已审核',
                                        ser_day: time,
                                        pageNum: 1,
                                        pageSize: 6
                                    }
                                }).then(function (res) {
                                    // console.log(res)
                                    // LoadingModal({bl:false})
                                    if (res.data.status == 10000) {
                                        shops = res.data.data.list;
                                        _this.setState({ shops: shops });
                                    }
                                }).catch(function () {
                                    LoadingModal({ bl: false });
                                    _message3.default.error('获取信息失败');
                                });

                            case 8:
                                _context.next = 10;
                                return _ajax2.default.get('/hcm/campgign/findProductPublicListShop', {
                                    params: {
                                        ser_day: time,
                                        pageNum: 1,
                                        pageSize: 3
                                    }
                                }).then(function (res) {
                                    // console.log(res)
                                    LoadingModal({ bl: false });
                                    if (res.data.status == 10000) {
                                        hotCommodity = res.data.data.list;
                                        _this.setState({ hotCommodity: hotCommodity });
                                    }
                                }).catch(function () {
                                    LoadingModal({ bl: false });
                                    _message3.default.error('获取信息失败');
                                });

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }();

        _this.openRetract = function () {
            window.location.hash = '/ActivityPublicity';
        };

        _this.ljtb = function (time) {
            // window.location.hash = '/DataPresentation'
            window.location.hash = '/DataDetails/' + time;
        };

        _this.state = {
            tabsData: [], //选项卡表头数据
            days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            noticeNotReadCount: 0, //未读的通知公告数
            productNotReadCount: 0, //未读的售价变更数
            huanbi: "0%", //环比
            huanbiState: true, //环比上升或者下降
            lastMonthCount: 0, //上月销售总额
            reportforms: [], //销售数据提报
            shops: [], //参与活动的店铺
            hotCommodity: [] //热销活动商品
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.tabs();
            this.shopindex();
        }
        //跳转到活动申报页面

        ///首页数据统计

        //获取选项卡信息

        //选项卡七天切换

        //活动店铺跳转

        //立即提报跳转

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

/***/ })

}]);
//# sourceMappingURL=344_fc2491060330f9531ee8.js.map