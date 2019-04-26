(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./app/widget/index/Brand/ShopDetail/main.js":
/*!***************************************************!*\
  !*** ./app/widget/index/Brand/ShopDetail/main.js ***!
  \***************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/ShopDetail/tpl.js");

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

        _this.reset = function () {
            _this.setState({
                id: null,
                dealerid: null,
                activeKey: '1',
                baseInfo: {},
                titleList: {},
                activity: {
                    date: [moment().subtract(1, 'months'), moment()],
                    show: 3, //1 正常点击 2 数据完了 3 没有数据
                    list: []
                }, //活动情况数据
                salesData: {
                    list: [],
                    pageNo: 1,
                    pageSize: 10,
                    totalNum: 0
                }, //销售数据
                abnormalOrders: {
                    date: [moment().subtract(1, 'months'), moment()],
                    show: 1, //1 正常点击 2 数据完了 3 没有数据
                    list: []
                } //订单异常情况数据
            });
        };

        _this.getAbnormalOrdersList = function () {
            var _this$state = _this.state,
                id = _this$state.id,
                dealerid = _this$state.dealerid,
                abnormalOrders = _this$state.abnormalOrders;

            _ajax2.default.get('/hcm/hcmShopMonitor/getMonitorByShopid', {
                params: {
                    shopid: id,
                    dealerid: dealerid,
                    pageNo: 1,
                    pageSize: abnormalOrders.list.length + 10,
                    start_time: abnormalOrders.date[0].format('YYYY-MM-DD'),
                    end_time: abnormalOrders.date[1].format('YYYY-MM-DD')
                }
            }).then(function (res) {
                var _res$data = res.data,
                    data = _res$data.data,
                    status = _res$data.status,
                    message = _res$data.message;

                if (abnormalOrders.list.length == data.length || data.length < 10) {
                    abnormalOrders.show = 2;
                } else {
                    abnormalOrders.show = 1;
                }
                if (data.length == 0) {
                    abnormalOrders.show = 3;
                }
                abnormalOrders.list = data;
                if (status === '10000') {
                    _this.setState({
                        abnormalOrders: abnormalOrders
                    });
                }
            }).catch(function (err) {
                _message3.default.error('系统繁忙，请稍后再试！');
            });
        };

        _this.getDay = function () {
            var _this$state2 = _this.state,
                id = _this$state2.id,
                dealerid = _this$state2.dealerid;
            var _this$state$salesData = _this.state.salesData,
                list = _this$state$salesData.list,
                pageNo = _this$state$salesData.pageNo,
                pageSize = _this$state$salesData.pageSize;

            _ajax2.default.get('/hcm/dayReport/findMonitorDinDanDayReportPageListDay', {
                params: {
                    shop_id: id,
                    dealer_id: dealerid,
                    pageNo: pageNo,
                    pageSize: pageSize
                }
            }).then(function (res) {
                var _res$data2 = res.data,
                    data = _res$data2.data,
                    status = _res$data2.status,
                    message = _res$data2.message;

                var salesData = _this.state.salesData;
                salesData.list = data.content;
                salesData.pageNo = data.pageNumber;
                salesData.pageSize = data.pageSize;
                salesData.totalNum = data.totalElements;
                if (status === '10000') {
                    _this.setState({
                        salesData: salesData
                    });
                }
            }).catch(function (err) {
                _message3.default.error('系统繁忙，请稍后再试！');
            });
        };

        _this.getShopInfo = function () {
            var _this$state3 = _this.state,
                id = _this$state3.id,
                dealerid = _this$state3.dealerid;

            LoadingModal({ bl: true });
            _ajax2.default.get('/hcm/hcmCustomModel/getBybmcidAndModule', {
                params: {
                    module: 'SHOP'
                }
            }).then(function (res) {
                var _res$data3 = res.data,
                    data = _res$data3.data,
                    status = _res$data3.status,
                    message = _res$data3.message;

                if (status === '10000') {
                    _this.setState({
                        activeKey: '1',
                        titleList: data
                    }, function () {
                        _ajax2.default.get('/hcm/hcmShop/getById', {
                            params: {
                                shopId: id,
                                dealerid: dealerid,
                                getType: 'SEARCH'
                            }
                        }).then(function (res) {
                            LoadingModal({ bl: false });
                            var _res$data4 = res.data,
                                data = _res$data4.data,
                                status = _res$data4.status,
                                message = _res$data4.message;

                            if (status === '10000') {
                                _this.setState({
                                    baseInfo: data
                                }, function () {

                                    _this.getActivityList();
                                    if (data.isauthed != 'NOTAUTH') {
                                        _this.getDay();
                                        _this.getAbnormalOrdersList();
                                    }
                                });
                            }
                        }).catch(function (err) {
                            LoadingModal({ bl: false });
                            _message3.default.error('系统繁忙，请稍后再试！');
                        });
                    });
                }
            }).catch(function (err) {
                LoadingModal({ bl: false });
                _message3.default.error('系统繁忙，请稍后再试！');
            });
        };

        _this.getActivityList = function () {
            var _this$state4 = _this.state,
                id = _this$state4.id,
                dealerid = _this$state4.dealerid,
                activity = _this$state4.activity;

            _ajax2.default.get('/hcm/hcmShop/CampaignList', {
                params: {
                    shopid: id,
                    dealerid: dealerid,
                    pageNo: 1,
                    pageSize: activity.list.length + 10,
                    start_time: activity.date[0].format('YYYY-MM-DD'),
                    end_time: activity.date[1].format('YYYY-MM-DD')
                }
            }).then(function (res) {
                var _res$data5 = res.data,
                    data = _res$data5.data,
                    status = _res$data5.status,
                    message = _res$data5.message;

                if (activity.list.length == data.length || data.length < 10) {
                    activity.show = 2;
                } else {
                    activity.show = 1;
                }
                if (data.length == 0) {
                    activity.show = 3;
                }
                activity.list = data;
                if (status === '10000') {
                    _this.setState({
                        activity: activity
                    });
                }
            }).catch(function (err) {
                _message3.default.error('系统繁忙，请稍后再试！');
            });
        };

        _this.onShow = function (id, dealerid) {
            _this.setState({
                visible: true,
                id: id,
                dealerid: dealerid
            }, function () {
                _this.getShopInfo();
            });
        };

        _this.onClose = function () {
            _this.setState({
                visible: false
            }, function () {
                _this.reset();
            });
        };

        _this.onTabsChange = function (activeKey) {
            _this.setState({
                activeKey: activeKey
            });
        };

        _this.onSalesDataPagination = function (page, pageSize) {
            var salesData = _this.state.salesData;
            salesData.pageNo = page;
            salesData.pageSize = pageSize;
            _this.setState({
                salesData: salesData
            }, function () {
                _this.getDay();
            });
        };

        _this.onSalesDataPaginationSize = function (current, size) {
            var salesData = _this.state.salesData;
            salesData.pageNo = 1;
            salesData.pageSize = size;
            _this.setState({
                salesData: salesData
            }, function () {
                _this.getDay();
            });
        };

        _this.activityRangePicker = function (e) {
            var activity = _this.state.activity;
            activity.date = e;
            _this.setState({
                activity: activity
            }, function () {
                _this.getActivityList();
            });
        };

        _this.abnormalOrdersRangePicker = function (e) {
            var abnormalOrders = _this.state.abnormalOrders;
            abnormalOrders.date = e;
            _this.setState({
                abnormalOrders: abnormalOrders
            }, function () {
                _this.getAbnormalOrdersList();
            });
        };

        _this.state = {
            id: null,
            dealerid: null,
            activeKey: '1',
            baseInfo: {},
            titleList: {},
            activity: {
                date: [moment().subtract(1, 'months'), moment()],
                show: 3, //1 正常点击 2 数据完了 3 没有数据
                list: []
            }, //活动情况数据
            salesData: {
                list: [],
                pageNo: 1,
                pageSize: 10,
                totalNum: 0
            }, //销售数据
            abnormalOrders: {
                date: [moment().subtract(1, 'months'), moment()],
                show: 1, //1 正常点击 2 数据完了 3 没有数据
                list: []
            } //订单异常情况数据
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
        // 获取销售数据

        // 获取店铺档案信息

        // 获取活动列表

        //打开抽屉

        //关闭抽屉


        //切换TAB


        //销售数据分页事件

        //销售数据分页事件

        //活动情况时间框事件

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
//# sourceMappingURL=56_f44e9e533412808dd4bd.js.map