(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[252],{

/***/ "./app/widget/index/Brand/CustomerOverview/main.js":
/*!*********************************************************!*\
  !*** ./app/widget/index/Brand/CustomerOverview/main.js ***!
  \*********************************************************/
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

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/CustomerOverview/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomerOverview = function (_React$Component) {
    _inherits(CustomerOverview, _React$Component);

    function CustomerOverview(props) {
        _classCallCheck(this, CustomerOverview);

        var _this = _possibleConstructorReturn(this, (CustomerOverview.__proto__ || Object.getPrototypeOf(CustomerOverview)).call(this, props));

        _this.handlePlatformChange = function (value) {
            _this.setState({
                platform_code: value
            });
            _this.getBrainData({ platformcode: value, noFirst: true });
        };

        _this.getShopInPlatformPercent = function () {
            _ajax2.default.get('/hcm/hcmShop/getHcmShopProportionByPlatform').then(function (res) {
                var _res$data = res.data,
                    data = _res$data.data,
                    status = _res$data.status,
                    message = _res$data.message;

                if (status === '10000') {
                    _this.setState({
                        shopInPlatformData: data.shopsGroupPing,
                        shopLoyalRank: data.markPrenctList,
                        shopProductsRank: data.goodsList,
                        orderExceptionRank: data.lowpriceList,
                        salesRank: data.salesList
                    });
                } else {
                    _message3.default.error(message);
                }
            }).catch(function (err) {
                _message3.default.error('系统繁忙，请稍后再试！');
            });
        };

        _this.getBrainData = function (params) {
            _ajax2.default.get('/hcm/hcmShop/getDealerShopByPlatform', { params: params }).then(function (res) {
                var _res$data2 = res.data,
                    data = _res$data2.data,
                    status = _res$data2.status,
                    message = _res$data2.message;

                if (status === '10000') {
                    _this.setState({
                        brainData: data
                    }, function () {
                        params.noFirst && _this.ChartTree.current.inChart();
                    });
                } else {
                    _message3.default.error(message);
                }
            }).catch(function (err) {
                _message3.default.error('系统繁忙，请稍后再试！');
            });
        };

        _this.getDepartmentData = function () {
            _ajax2.default.get('/hcm/department/getTree').then(function (res) {
                // console.log('---res', res)
                var _res$data3 = res.data,
                    data = _res$data3.data,
                    status = _res$data3.status,
                    message = _res$data3.message;

                if (status === '10000') {
                    _this.setState({
                        departmentTree: data
                    });
                    _this.generateList(data);
                } else {
                    _message3.default.error(message);
                }
            }).catch(function (err) {
                _message3.default.error('系统繁忙，请稍后再试！');
            });
        };

        _this.generateList = function (tree) {
            tree.forEach(function (v) {
                _this.state.departmentList.push({ name: v.name, id: v.id });
                _this.state.expandedKeys.push(v.id);
                if (v.children && v.children.length) {
                    _this.generateList(v.children);
                }
            });
        };

        _this.handleExpand = function (expandedKeys) {
            _this.setState({
                expandedKeys: expandedKeys,
                autoExpandParent: false
            });
        };

        _this.getParentKey = function (key, tree) {
            var parentKey = void 0;
            for (var i = 0; i < tree.length; i++) {
                var node = tree[i];
                if (node.children && node.children.length) {
                    if (node.children.some(function (item) {
                        return item.id === key;
                    })) {
                        parentKey = node.id;
                    } else if (_this.getParentKey(key, node.children)) {
                        parentKey = _this.getParentKey(key, node.children);
                    }
                }
            }
            return parentKey;
        };

        _this.getPlatformList = function () {
            // ajax.get('/hcm/sys/GetList', {
            //     params: {
            //         dictcode: 'platform'
            //     }
            // }).then(res => {
            //     const { data, status, message } = res.data
            //     if (status === '10000') {
            _this.setState({
                platformList: can.platform || []
            });
            //     } else {
            //         Msg.error(message)
            //     }
            // }).catch(err => {
            //     Msg.error('系统繁忙，请稍后再试！')
            // })
        };

        _this.searchDepartment = function (value, e) {
            var _this$state = _this.state,
                departmentList = _this$state.departmentList,
                departmentTree = _this$state.departmentTree;

            var arr = [];
            var expandedKeys = departmentList.map(function (v) {
                if (value !== '' && v.name.indexOf(value) > -1) {
                    arr.push(v.id);
                    return _this.getParentKey(v.id, departmentTree);
                }
                return null;
            }).filter(function (item, i, self) {
                return item && self.indexOf(item) === i;
            });
            _this.setState({
                expandedKeys: expandedKeys,
                searchValue: value,
                autoExpandParent: true,
                currentSelectedKeys: arr
            });
        };

        _this.getChinaCodeTree = function () {
            _ajax2.default.get('/hcm/chinaCode/getChinaCodeTree').then(function (res) {
                _this.setState({
                    chinaCodeTree: res.data
                });
            }).catch(function (err) {
                _message3.default.error('系统繁忙，请稍后再试！');
            });
        };

        _this.handleTabChange = function (key) {
            _this.setState({
                tabKey: key
            });
        };

        _this.ChartTree = React.createRef();
        _this.state = {
            platform_code: '',
            tabKey: 'shop',
            platformList: [],
            shopInPlatformData: [],
            shopLoyalRank: [],
            shopProductsRank: [],
            salesRank: [],
            orderExceptionRank: [],

            chinaCodeTree: [],
            brainData: {},
            departmentTree: [], // 嵌套数据
            departmentList: [], // 平行数据
            searchValue: '',
            expandedKeys: [],
            autoExpandParent: true,
            currentSelectedKeys: []
        };
        return _this;
    }

    _createClass(CustomerOverview, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.getPlatformList();
            this.getShopInPlatformPercent();

            this.getChinaCodeTree();
            this.getDepartmentData();
            this.getBrainData({ platformcode: this.state.platform_code });
        }
        // 切换平台

        // 获取店铺所在平台占比数据

        // 获取脑图数据

        // 获取部门结构数据

        // 获取平台数据

        // 品牌部门搜索

        // 获取大区数据

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return CustomerOverview;
}(React.Component);

exports.default = CustomerOverview;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=252_110e7542614fcb9da205.js.map