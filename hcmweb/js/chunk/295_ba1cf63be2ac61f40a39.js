(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[295],{

/***/ "./app/widget/index/Dealers/BrandActivityPublicity/main.js":
/*!*****************************************************************!*\
  !*** ./app/widget/index/Dealers/BrandActivityPublicity/main.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@5.0.7@react-redux/es/index.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Dealers/BrandActivityPublicity/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PARAMS_CONST = {
    product: 'product',
    shop: 'shop'
};

var BrandActivityPublicity = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        currentBrand: state.dealer.currentBrand
    };
}), _dec(_class = function (_React$Component) {
    _inherits(BrandActivityPublicity, _React$Component);

    function BrandActivityPublicity(props) {
        _classCallCheck(this, BrandActivityPublicity);

        var _this = _possibleConstructorReturn(this, (BrandActivityPublicity.__proto__ || Object.getPrototypeOf(BrandActivityPublicity)).call(this, props));

        _this.getShopBtnList = function (params) {
            (0, _ajax2.default)({
                method: 'post',
                url: '/hcm/campgign/PublicShops',
                data: {
                    campaign_node: '已审核',
                    type: params.type,
                    ser_day: params.date
                }
            }).then(function (res) {
                var _res$data = res.data,
                    data = _res$data.data,
                    status = _res$data.status,
                    message = _res$data.message;

                if (status === '10000') {
                    _this.setState({
                        shopBtnList: data
                        // currentDate: params.date
                    });
                }
            }).catch();
        };

        _this.getActivityList = function (params) {
            var data = {
                campaign_node: '已审核',
                type: params.type,
                ser_day: params.date,
                pageNum: params.pageNum,
                pageSize: params.pageSize
            };
            if (params.shop_id !== undefined && params.shop_id !== 'all') {
                // shop_id入参格式 'id','id','id'...
                data.shop_id = '\'' + params.shop_id + '\'';
            }
            (0, _ajax2.default)({
                method: 'post',
                url: '/hcm/campgign/ScheduleBMC',
                data: data
            }).then(function (res) {
                var _res$data2 = res.data,
                    data = _res$data2.data,
                    status = _res$data2.status,
                    message = _res$data2.message;

                if (status === '10000') {
                    _this.setState({
                        activityInfoList: data.list,
                        pagination: Object.assign({}, _this.state.pagination, { count: data.count })
                    });
                }
            }).catch();
        };

        _this.formatTime = function (timestamp) {
            var showTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var date = new Date(timestamp);
            var str = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
            if (showTime) {
                str += ' ' + String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');
            }
            return str;
        };

        _this.getBrandSevenActivity = function () {
            (0, _ajax2.default)({
                method: 'post',
                url: '/hcm/campgign/ScheduleBMCSeven'
            }).then(function (res) {
                _this.setState({
                    activityList: res.data.data
                });
            }).catch(function (err) {
                console.log('-----brandseven', err);
            });
        };

        _this.togglePrice = function (index) {
            _this.setState({
                togglePriceIndex: _this.state.togglePriceIndex === index ? -1 : index
            });
        };

        _this.moreButton = function () {
            _this.setState({
                moreButton: !_this.state.moreButton
            });
        };

        _this.switchShopBtn = function (shopId, list) {
            // const array = shopId === 'all' ? list : list.filter(v => v.shop_id == shopId)
            _this.setState({
                currentShopBtn: shopId
                //     activityInfoList: []
            });
            var _this$state = _this.state,
                currentDate = _this$state.currentDate,
                pagination = _this$state.pagination;

            _this.getActivityList(_extends({
                type: (0, _moment2.default)().format('YYYY-MM-DD') === currentDate ? 1 : 2,
                date: currentDate,
                shop_id: shopId
            }, pagination));
        };

        _this.switchActivity = function (date, index, type) {
            var _this$state2 = _this.state,
                sevenActivity = _this$state2.sevenActivity,
                sevenProductInfo = _this$state2.sevenProductInfo;

            _this.setState({
                selectedIndex: index,
                currentDate: date,
                currentShopBtn: 'all',
                togglePriceIndex: -1
                // productInfoList: sevenProductInfo[date] ? [...sevenProductInfo[date]] : []
            });
            _this.getShopBtnList({
                type: type,
                date: date
            });
            _this.getActivityList(_extends({
                type: type,
                date: date
            }, _this.state.pagination));
            // !sevenActivity[date] && this.getCurrentDateInfo({
            //     type,
            //     date,
            //     url: '/hcm/campgign/PublicShops',
            //     flag: PARAMS_CONST.shop,
            //     shop_id: null
            // })
            // !sevenProductInfo[date] && this.getCurrentDateInfo({
            //     type,
            //     date,
            //     url: '/hcm/campgign/ScheduleBMC',
            //     flag: PARAMS_CONST.product
            // })
        };

        _this.handleLoadMore = function () {
            // console.log(123)
            _this.setState({
                pagination: Object.assign({}, _this.state.pagination, {
                    pageNum: _this.state.pagination.pageNum + 1
                })
            }, function () {
                var _this$state3 = _this.state,
                    currentDate = _this$state3.currentDate,
                    currentShopBtn = _this$state3.currentShopBtn,
                    pagination = _this$state3.pagination;

                var data = _extends({
                    type: (0, _moment2.default)().format('YYYY-MM-DD') === currentDate ? 1 : 2,
                    date: currentDate
                }, pagination);
                if (currentShopBtn !== 'all') {
                    data.shop_id = currentShopBtn;
                }
                _this.getActivityList(data);
            });
        };

        _this.state = {
            selectedIndex: 0, // 选中的日期下标
            moreButton: false, // 更多店铺按钮状态
            togglePriceIndex: -1, // 价格区域显隐状态
            activityList: [], // 活动日期列表（一周）
            // sevenActivity: {},  // 缓存每日活动店铺对象信息
            // sevenProductInfo: {}, // 缓存每日活动产品对象信息
            // productInfoList: [],    // 当前产品信息对象列表
            currentDate: (0, _moment2.default)().format('YYYY-MM-DD'), // 当前选中日期
            currentShopBtn: 'all', // 当前选中按钮
            shopBtnList: [],
            pagination: {
                pageNum: 1,
                pageSize: 10
            },
            activityInfoList: []
        };
        return _this;
    }

    _createClass(BrandActivityPublicity, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.getBrandSevenActivity();
            this.getShopBtnList({
                type: 1,
                date: (0, _moment2.default)().format('YYYY-MM-DD')
            });
            this.getActivityList(_extends({
                type: 1,
                date: (0, _moment2.default)().format('YYYY-MM-DD')
            }, this.state.pagination));
            // this.switchActivity(this.formatTime(Date.now()), 0, 1)
        }
        // 获取店铺列表

        // 获取活动列表

        // 获取当天活动信息
        // params: {type(区分当日(1)和当日以后(2)), url, bmcId, date(日期), flag(区分店铺(shop)和产品(product))}
        // getCurrentDateInfo = params => {
        //     let data = {
        //         bmcid: params.bmcId,
        //         campaign_node: '已审核',
        //         type: params.type,
        //         ser_day: params.date,
        //         pageNum: 1,
        //         pageSize: 1
        //     }
        //     if (params.flag === PARAMS_CONST.shop) {
        //         data.shop_id = params.shop_id
        //     }
        //     axios({
        //         method: 'post',
        //         url: params.url,
        //         data: data
        //     }).then(res => {
        //         const { sevenActivity, sevenProductInfo } = this.state
        //         if (params.flag === PARAMS_CONST.product) {
        //             this.setState({
        //                 sevenProductInfo: Object.assign({}, sevenProductInfo, {
        //                     [params.date]: res.data.data
        //                 }),
        //                 productInfoList: res.data.data
        //             })
        //         } else if (params.flag === PARAMS_CONST.shop) {
        //             this.setState({
        //                 sevenActivity: Object.assign({}, sevenActivity, {
        //                     [params.date]: res.data.data
        //                 })
        //             })
        //         }
        //     }).catch(err => {
        //         console.log('----publicshop', err)
        //     })
        // }
        // 获取7日活动信息

        // 切换店铺按钮

        // 切换日期对应的数据

        // 加载更多按钮

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return BrandActivityPublicity;
}(React.Component)) || _class);
exports.default = BrandActivityPublicity;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=295_ba1cf63be2ac61f40a39.js.map