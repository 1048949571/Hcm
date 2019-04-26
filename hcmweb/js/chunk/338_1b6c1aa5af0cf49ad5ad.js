(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[338],{

/***/ "./app/widget/index/Shop/DataAnalysis/CONFIG.js":
/*!******************************************************!*\
  !*** ./app/widget/index/Shop/DataAnalysis/CONFIG.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    activities: {
        name: '活动商品数占比',
        rowKey: 'my_month',
        url: '/hcm/campgign/findCamItemZBList',
        downloadUrl: '/hcm/campgign/downCamItemZBList',
        columns: [{
            title: 'No',
            dataIndex: 'index',
            key: 'index',
            render: function render(text, item, index) {
                return index + 1;
            }
        }, {
            title: '月份',
            dataIndex: 'my_month',
            key: 'my_month'
        }, {
            title: '共活动商品数',
            dataIndex: 'all_count',
            key: 'all_count'
        }, {
            title: '我活动商品数',
            dataIndex: 'my_count',
            key: 'my_count'
        }, {
            title: '活动商品占比',
            dataIndex: 'zhanbi',
            key: 'zhanbi'
        }]
    },
    order: {
        name: '销售金额趋势',
        rowKey: 'my_month',
        url: '/hcm/hcmShopMonitor/findSaleSalaryQS',
        downloadUrl: '/hcm/campgign/downSaleSalaryQS',
        columns: [{
            title: 'No',
            dataIndex: 'index',
            key: 'index',
            render: function render(text, item, index) {
                return index + 1;
            }
        }, {
            title: '月份',
            dataIndex: 'my_month',
            key: 'my_month'
        }, {
            title: '销售金额（万元）',
            dataIndex: 'trade_money',
            key: 'trade_money',
            width: '40%'
        }, {
            title: '环比',
            dataIndex: 'huanbi',
            key: 'huanbi',
            width: '10%',
            render: function render() {
                var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                var item = arguments[1];
                var index = arguments[2];
                return React.createElement(
                    'div',
                    null,
                    text.indexOf('-') == -1 ? React.createElement(_icon2.default, { style: { color: '#F5222D' }, type: 'caret-up' }) : React.createElement(_icon2.default, { style: { color: '#52C41A' }, type: 'caret-down' }),
                    text
                );
            }
        }]
    },
    hotGoods: {
        name: '热销商品排名',
        rowKey: 'num_iid',
        url: '/hcm/hcmShopMonitor/getGoodsSalesRankingByBmcid',
        downloadUrl: '/hcm/hcmShopMonitor/downloadGoodsSalesRankingByBmcid',
        columns: [{
            title: 'No',
            dataIndex: 'index',
            key: 'index',
            render: function render(text, item, index) {
                return index + 1;
            }
        }, {
            title: '商品信息',
            dataIndex: 'itempic',
            key: 'itempic',
            width: '50%',
            render: function render(text, item, index) {
                return React.createElement(
                    'div',
                    { style: { display: 'flex', alignItems: 'center' } },
                    React.createElement('img', { style: { flex: '0 0 50px', width: '50px', height: '50px', marginRight: 10 }, src: text }),
                    React.createElement(
                        'span',
                        null,
                        item.itemtitle
                    )
                );
            }
        }, {
            title: '店铺名称',
            dataIndex: 'shop_name',
            key: 'shop_name'
        }, {
            title: '销量指数',
            dataIndex: 'buynum',
            key: 'buynum'
        }, {
            title: '销售额指数',
            dataIndex: 'money',
            key: 'money'
        }]
    },
    hotShops: {
        name: '热卖店铺排名',
        rowKey: 'shop_id',
        url: '/hcm/hcmShopMonitor/getShopMoneyTop',
        downloadUrl: '/hcm/hcmShopMonitor/downloadShopMoneyTop',
        columns: [{
            title: '排名',
            dataIndex: 'index',
            key: 'index',
            width: '100px',
            align: 'center',
            render: function render(text, item, index) {
                return index < 3 ? React.createElement(
                    'span',
                    { className: 'top-span' },
                    index + 1
                ) : index + 1;
            }
        }, {
            title: '店铺名称',
            dataIndex: 'shop_name',
            key: 'shop_name'
        }, {
            title: '销售额指数',
            align: 'right',
            dataIndex: 'money',
            key: 'money'
        }]
    }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=338_1b6c1aa5af0cf49ad5ad.js.map