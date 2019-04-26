(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

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

/***/ "./app/widget/components/NoneData/index.js":
/*!*************************************************!*\
  !*** ./app/widget/components/NoneData/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! ./index.less */ "./app/widget/components/NoneData/index.less");

var NoneData = function NoneData(props) {
  return React.createElement(
    "div",
    { className: "none-data-wrapper " + props.className, style: props.style },
    React.createElement("span", { className: "icon" }),
    React.createElement(
      "p",
      { className: "text" },
      props.text
    )
  );
};

NoneData.defaultProps = {
  text: '数据空空如也',
  className: '',
  style: {}
};

exports.default = NoneData;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/NoneData/index.less":
/*!***************************************************!*\
  !*** ./app/widget/components/NoneData/index.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/CustomerOverview/ChartPie.js":
/*!*************************************************************!*\
  !*** ./app/widget/index/Brand/CustomerOverview/ChartPie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, $) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _echarts = __webpack_require__(/*! echarts */ "./node_modules/_echarts@4.1.0@echarts/index.js");

var _echarts2 = _interopRequireDefault(_echarts);

var _china = __webpack_require__(/*! ./china.json */ "./app/widget/index/Brand/CustomerOverview/china.json");

var _china2 = _interopRequireDefault(_china);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartPie = function (_React$Component) {
    _inherits(ChartPie, _React$Component);

    function ChartPie() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ChartPie);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChartPie.__proto__ || Object.getPrototypeOf(ChartPie)).call.apply(_ref, [this].concat(args))), _this), _this.initChart = function () {
            var data = [];
            for (var i = 0; i < _this.props.data.length; i++) {
                for (var j = 0; j < _this.props.data[i].children.length; j++) {
                    data.push({
                        name: _this.props.data[i].children[j].name,
                        value: _this.props.data[i].children[j].value
                    });
                }
            }
            data.push({ name: '南海诸岛', value: 0, itemStyle: { normal: { opacity: 0, label: { show: false } } } });
            _echarts2.default.registerMap('china', _china2.default);
            var myChart = _echarts2.default.init(document.getElementById('pie-container'));
            console.log(data);
            myChart.setOption({

                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br/>经销商数量 /{c} 家)'
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        dataView: { readOnly: false },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                visualMap: {
                    realtime: false,
                    calculable: true,
                    inRange: {
                        color: ['lightskyblue', 'rgba(0, 80, 179, 1)', 'rgba(186, 231, 255, 1)']
                    }
                },
                series: [{
                    type: 'map',
                    map: 'china',
                    itemStyle: {
                        normal: { label: { show: true } },
                        emphasis: { label: { show: true } }
                    },
                    data: data,

                    nameMap: {
                        '台湾': '台湾',
                        '河北': '河北省',
                        '山西': '山西省',
                        '内蒙古': '内蒙古自治区',
                        '辽宁': '辽宁省',
                        '吉林': '吉林省',
                        '黑龙江': '黑龙江省',
                        '江苏': '江苏省',
                        '浙江': '浙江省',
                        '安徽': '安徽省',
                        '福建': '福建省',
                        '江西': '江西省',
                        '山东': '山东省',
                        '河南': '河南省',
                        '湖北': '湖北省',
                        '湖南': '湖南省',
                        '广东': '广东省',
                        '广西': '广西壮族自治区',
                        '海南': '海南省',
                        '四川': '四川省',
                        '贵州': '贵州省',
                        '云南': '云南省',
                        '西藏': '西藏自治区',
                        '陕西': '陕西省',
                        '甘肃': '甘肃省',
                        '青海': '青海省',
                        '宁夏': '宁夏回族自治区',
                        '新疆': '新疆维吾尔自治区',
                        '北京': '北京市',
                        '天津': '天津市',
                        '上海': '上海市',
                        '重庆': '重庆市',
                        '香港': '香港',
                        '澳门': '澳门'
                    }
                }]

            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ChartPie, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dom = $('#' + this.props.nodeDom);
            $('#pie-container').css({
                width: dom.width() + 'px',
                height: dom.height() + 'px'
            });
            this.initChart();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement('div', { id: 'pie-container' });
        }
    }]);

    return ChartPie;
}(React.Component);

exports.default = ChartPie;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.3.1@jquery/dist/jquery.js")))

/***/ }),

/***/ "./app/widget/index/Brand/CustomerOverview/CustomerOverview.less":
/*!***********************************************************************!*\
  !*** ./app/widget/index/Brand/CustomerOverview/CustomerOverview.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/Brand/CustomerOverview/ShopPie.js":
/*!************************************************************!*\
  !*** ./app/widget/index/Brand/CustomerOverview/ShopPie.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, $) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _echarts = __webpack_require__(/*! echarts */ "./node_modules/_echarts@4.1.0@echarts/index.js");

var _echarts2 = _interopRequireDefault(_echarts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShopPie = function (_React$Component) {
    _inherits(ShopPie, _React$Component);

    function ShopPie() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ShopPie);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShopPie.__proto__ || Object.getPrototypeOf(ShopPie)).call.apply(_ref, [this].concat(args))), _this), _this.myChart = function () {
            var shopGroupData = _this.props.data;
            var myChart = _echarts2.default.init(document.getElementById('shop-pie-container'));
            var totnum = 0;
            if (shopGroupData.length) {
                shopGroupData.forEach(function (v) {
                    totnum += parseInt(v.value, 10);
                });
            }

            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    right: '20%',
                    top: 'center',
                    itemGap: 20,
                    data: shopGroupData.map(function (item) {
                        return item.name;
                    }),
                    icon: 'pin'
                },
                series: [{
                    name: '店铺总数量',
                    type: 'pie',
                    radius: ['0%', '30%'],
                    center: ['38%', '50%'],
                    color: ['#fff'],
                    silent: true,
                    label: {
                        position: 'center',
                        formatter: '{c| {c}}\n{a|{a}}',
                        color: '#333',
                        fontSize: 20,
                        rich: {
                            a: {
                                fontSize: 14,
                                color: '#999',
                                align: 'center'
                            },
                            c: {
                                color: '#333',
                                fontSize: 20,
                                padding: 10,
                                align: 'center'
                            }
                        }
                    },
                    data: [{ value: totnum, name: '' }]
                }, {
                    type: 'pie',
                    radius: ['35%', '45%'],
                    center: ['38%', '50%'],
                    avoidLabelOverlap: true,
                    label: {
                        formatter: '{b}：{c}\n占比：{d}%'
                    },
                    color: ['#55a0f8', '#66c8ca', '#72c77c', '#f4d358', '#e17c7d', '#8e66dd'],
                    data: shopGroupData
                }]
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ShopPie, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dom = $('#' + this.props.nodeDom);
            $('#shop-pie-container').css({
                width: dom.width() + 'px',
                height: dom.height() + 'px'
            });
            this.myChart();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'shop-pie-container' },
                ' '
            );
        }
    }]);

    return ShopPie;
}(React.Component);

exports.default = ShopPie;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.3.1@jquery/dist/jquery.js")))

/***/ }),

/***/ "./app/widget/index/Brand/CustomerOverview/tpl.js":
/*!********************************************************!*\
  !*** ./app/widget/index/Brand/CustomerOverview/tpl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _progress = __webpack_require__(/*! antd/es/progress */ "./node_modules/_antd@3.10.1@antd/es/progress/index.js");

var _progress2 = _interopRequireDefault(_progress);

var _popover = __webpack_require__(/*! antd/es/popover */ "./node_modules/_antd@3.10.1@antd/es/popover/index.js");

var _popover2 = _interopRequireDefault(_popover);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _list = __webpack_require__(/*! antd/es/list */ "./node_modules/_antd@3.10.1@antd/es/list/index.js");

var _list2 = _interopRequireDefault(_list);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@3.10.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _tree = __webpack_require__(/*! antd/es/tree */ "./node_modules/_antd@3.10.1@antd/es/tree/index.js");

var _tree2 = _interopRequireDefault(_tree);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@3.10.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

__webpack_require__(/*! antd/es/progress/style/css */ "./node_modules/_antd@3.10.1@antd/es/progress/style/css.js");

__webpack_require__(/*! antd/es/popover/style/css */ "./node_modules/_antd@3.10.1@antd/es/popover/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/list/style/css */ "./node_modules/_antd@3.10.1@antd/es/list/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/tree/style/css */ "./node_modules/_antd@3.10.1@antd/es/tree/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@3.10.1@antd/es/tabs/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! ./CustomerOverview.less */ "./app/widget/index/Brand/CustomerOverview/CustomerOverview.less");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _ChartPie = __webpack_require__(/*! ./ChartPie */ "./app/widget/index/Brand/CustomerOverview/ChartPie.js");

var _ChartPie2 = _interopRequireDefault(_ChartPie);

var _ShopPie = __webpack_require__(/*! ./ShopPie */ "./app/widget/index/Brand/CustomerOverview/ShopPie.js");

var _ShopPie2 = _interopRequireDefault(_ShopPie);

var _NoneData = __webpack_require__(/*! ../../../components/NoneData */ "./app/widget/components/NoneData/index.js");

var _NoneData2 = _interopRequireDefault(_NoneData);

var _ChartTree = __webpack_require__(/*! ./ChartTree */ "./app/widget/index/Brand/CustomerOverview/ChartTree.js");

var _ChartTree2 = _interopRequireDefault(_ChartTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = _input2.default.Search;
var TabPane = _tabs2.default.TabPane;
var Option = _select2.default.Option;
var TreeNode = _tree2.default.TreeNode;

var COLORS = ['#3AA0FF', '#36CBCB', '#4FCA78', '#FAD43B', '#F2657D', '#9962E4', '#FD8838', '#726FFC'];

var Tpl = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        tabKey = _that$state.tabKey,
        platformList = _that$state.platformList,
        chinaCodeTree = _that$state.chinaCodeTree,
        shopInPlatformData = _that$state.shopInPlatformData,
        shopProductsRank = _that$state.shopProductsRank,
        shopLoyalRank = _that$state.shopLoyalRank,
        brainData = _that$state.brainData,
        departmentTree = _that$state.departmentTree,
        searchValue = _that$state.searchValue,
        expandedKeys = _that$state.expandedKeys,
        autoExpandParent = _that$state.autoExpandParent,
        platform_code = _that$state.platform_code,
        orderExceptionRank = _that$state.orderExceptionRank,
        salesRank = _that$state.salesRank,
        currentSelectedKeys = _that$state.currentSelectedKeys;

    var arr = [];
    expandedKeys;
    var renderTreeNode = function renderTreeNode(list, flag) {
        return list.map(function (v) {

            if (v.children && v.children.length) {
                arr.push(v.id);
                return React.createElement(
                    TreeNode,
                    {
                        title: React.createElement(
                            'span',
                            { className: (flag ? '' : 'parentNode') + ' ' + (currentSelectedKeys.includes(v.id) ? 'activeTreeNode' : '') },
                            v.name
                        ),
                        key: v.id },
                    renderTreeNode(v.children, true)
                );
            }
            return React.createElement(TreeNode, {
                title: React.createElement(
                    'span',
                    { className: (flag ? '' : 'parentNode') + ' ' + (currentSelectedKeys.includes(v.id) ? 'activeTreeNode' : '') },
                    v.name
                ),
                key: v.id });
        });
    };
    return React.createElement(
        _Layout2.default,
        {
            breadcrumbList: ['渠道盘点', '渠道总览'],
            linkList: ['', '']
        },
        React.createElement(
            'div',
            { className: 'CustomerOverview' },
            React.createElement(
                _tabs2.default,
                { defaultActiveKey: tabKey, className: 'tabs-wrapper' },
                React.createElement(
                    TabPane,
                    { key: 'shop', tab: '\u5E97\u94FA\u6863\u6848\u4FE1\u606F\u603B\u89C8', className: 'tabs-item-wrapper' },
                    React.createElement(
                        'div',
                        { className: 'content-wrapper' },
                        React.createElement(
                            'section',
                            { className: 'top-container' },
                            React.createElement(
                                _card2.default,
                                {
                                    className: 'dealer-shop-percent-wrapper',
                                    title: '\u5BA2\u6237\u5E97\u94FA\u5E73\u53F0\u5360\u6BD4',
                                    bordered: false,
                                    style: { width: '66.22%', float: 'left' } },
                                React.createElement(
                                    'div',
                                    { id: 'shop-pie-wrapper' },
                                    shopInPlatformData.length ? React.createElement(_ShopPie2.default, { data: shopInPlatformData, nodeDom: 'shop-pie-wrapper' }) : React.createElement(_NoneData2.default, { style: { marginTop: '50px' } })
                                )
                            ),
                            React.createElement(
                                _card2.default,
                                {
                                    title: '\u5E97\u94FA\u8FD130\u5929\u9500\u552E\u989D\u6392\u540D',
                                    bordered: false,
                                    className: 'shop-sales-rank-wrapper',
                                    style: { width: '33.11%', float: 'right' } },
                                React.createElement(_list2.default, {
                                    dataSource: salesRank,
                                    locale: { emptyText: React.createElement(_NoneData2.default, null) },
                                    renderItem: function renderItem(item, index) {
                                        return React.createElement(
                                            _row2.default,
                                            { className: 'list-item-row' },
                                            React.createElement(
                                                _col2.default,
                                                { span: 3 },
                                                React.createElement(
                                                    'span',
                                                    { className: 'index-num ' + (index + 1 < 4 ? 'active' : '') },
                                                    index + 1
                                                )
                                            ),
                                            React.createElement(
                                                _col2.default,
                                                { span: 11, className: 'overflow-ellipsis' },
                                                item.shop_name
                                            ),
                                            React.createElement(
                                                _col2.default,
                                                { span: 10, style: { textAlign: 'right' } },
                                                '' + (item.sales !== undefined ? '￥' + item.sales : '暂无销量')
                                            )
                                        );
                                    }
                                })
                            )
                        ),
                        React.createElement(
                            'section',
                            { className: 'middle-container' },
                            React.createElement(
                                _card2.default,
                                {
                                    title: React.createElement(
                                        'span',
                                        null,
                                        '\u54C1\u724C\u5FE0\u8BDA\u5EA6\u6392\u540D\xA0',
                                        React.createElement(
                                            _popover2.default,
                                            { content: '\u5E97\u94FA\u5185\u672C\u54C1\u724C\u5546\u54C1\u5360\u5E97\u94FA\u603B\u5546\u54C1\u6570\u7684\u6BD4\u4F8B', trigger: 'hover' },
                                            React.createElement(_icon2.default, { style: { verticalAlign: 'middle', cursor: 'pointer' }, type: 'exclamation-circle' })
                                        )
                                    ),
                                    bordered: false
                                },
                                React.createElement(
                                    _row2.default,
                                    { className: 'progress-wrapper' },
                                    shopLoyalRank.length ? shopLoyalRank.map(function (v, i) {
                                        return i < 8 ? React.createElement(
                                            _col2.default,
                                            { span: 3, key: i },
                                            React.createElement(
                                                'span',
                                                { className: 'rank-num ' + (i + 1 < 4 ? 'active' : '') },
                                                i + 1
                                            ),
                                            React.createElement(_progress2.default, {
                                                strokeLinecap: 'square',
                                                strokeColor: COLORS[i],
                                                strokeWidth: 12,
                                                type: 'circle',
                                                format: function format(percent) {
                                                    return React.createElement(
                                                        'span',
                                                        { style: { color: '#333', fontSize: 16 } },
                                                        percent
                                                    );
                                                },
                                                percent: v.bili == null ? 0 : v.bili * 100 }),
                                            React.createElement(
                                                'p',
                                                { className: 'shop-name' },
                                                v.shop_nick
                                            )
                                        ) : null;
                                    }) : null
                                )
                            )
                        ),
                        React.createElement(
                            'section',
                            { className: 'bottom-container' },
                            React.createElement(
                                _card2.default,
                                {
                                    title: '\u5E97\u94FA\u8BA2\u5355\u5F02\u5E38\u6B21\u6570\u6392\u540D',
                                    bordered: false
                                },
                                React.createElement(_list2.default, {
                                    dataSource: orderExceptionRank,
                                    renderItem: function renderItem(item, index) {
                                        return React.createElement(
                                            _row2.default,
                                            { className: 'list-item-wrapper' },
                                            React.createElement(
                                                _col2.default,
                                                { span: 3 },
                                                React.createElement(
                                                    'span',
                                                    { className: 'list-index ' + (index + 1 < 4 ? 'bg-container index' + (index + 1) : '') },
                                                    index + 1 < 4 ? '' : index + 1
                                                )
                                            ),
                                            React.createElement(
                                                _col2.default,
                                                { span: 9, className: 'overflow-ellipsis' },
                                                item.shop_name
                                            ),
                                            React.createElement(
                                                _col2.default,
                                                { span: 12 },
                                                React.createElement(_progress2.default, {
                                                    format: function format(percent) {
                                                        return percent + '';
                                                    },
                                                    percent: item.lowprice == null ? 0 : item.lowprice })
                                            )
                                        );
                                    }
                                })
                            ),
                            React.createElement(
                                _card2.default,
                                {
                                    title: '\u5E97\u94FA\u6D3B\u52A8\u5546\u54C1\u6570\u6392\u540D',
                                    bordered: false
                                },
                                React.createElement(_list2.default, {
                                    dataSource: shopProductsRank,
                                    renderItem: function renderItem(item, index) {
                                        return React.createElement(
                                            _row2.default,
                                            { className: 'list-item-wrapper' },
                                            React.createElement(
                                                _col2.default,
                                                { span: 3 },
                                                React.createElement(
                                                    'span',
                                                    { className: 'list-index ' + (index + 1 < 4 ? 'bg-container index' + (index + 1) : '') },
                                                    index + 1 < 4 ? '' : index + 1
                                                )
                                            ),
                                            React.createElement(
                                                _col2.default,
                                                { span: 9, className: 'overflow-ellipsis' },
                                                item.shop_name
                                            ),
                                            React.createElement(
                                                _col2.default,
                                                { span: 12 },
                                                React.createElement(_progress2.default, {
                                                    format: function format(percent) {
                                                        return percent + '';
                                                    },
                                                    percent: parseInt(item.camcount, 10) })
                                            )
                                        );
                                    }
                                })
                            )
                        )
                    )
                ),
                React.createElement(
                    TabPane,
                    { key: 'dealer', tab: '\u7ECF\u9500\u5546\u6863\u6848\u4FE1\u606F\u603B\u89C8', className: 'tabs-item-wrapper' },
                    React.createElement(
                        _tabs2.default,
                        { tabPosition: 'left' },
                        React.createElement(
                            TabPane,
                            { key: '1', tab: '\u7ECF\u9500\u5546\u5E97\u94FA\u5173\u7CFB\u6982\u89C8', className: 'sub-tabpane-item shop-document-info' },
                            React.createElement(
                                'div',
                                { className: 'condition-container' },
                                React.createElement(
                                    _select2.default,
                                    { defaultValue: platform_code, style: { width: 280 }, onChange: that.handlePlatformChange },
                                    React.createElement(
                                        Option,
                                        { value: '' },
                                        '\u5168\u90E8'
                                    ),
                                    platformList.map(function (v) {
                                        return React.createElement(
                                            Option,
                                            { key: v.dictCode, value: v.dictCode },
                                            v.dictName
                                        );
                                    })
                                ),
                                React.createElement(Search, {
                                    placeholder: '\u8BF7\u641C\u7D22',
                                    onSearch: function onSearch(value) {
                                        return that.ChartTree.current.inChart(value.toUpperCase());
                                    }
                                })
                            ),
                            React.createElement(
                                'div',
                                { id: 'tree-container' },
                                Object.keys(brainData).length ? React.createElement(_ChartTree2.default, { ref: that.ChartTree, data: brainData, nodeDom: '#tree-container' }) : null
                            )
                        ),
                        React.createElement(
                            TabPane,
                            { key: '2', tab: '\u7ECF\u9500\u5546\u6240\u5C5E\u90E8\u95E8\u5C42\u7EA7\u6982\u89C8', className: 'sub-tabpane-item' },
                            React.createElement(
                                'div',
                                { className: 'department-search-container' },
                                React.createElement(
                                    'h6',
                                    null,
                                    localStorage.getItem('realname')
                                ),
                                React.createElement(Search, {
                                    onSearch: that.searchDepartment,
                                    style: { width: 280 },
                                    placeholder: '\u8BF7\u641C\u7D22' })
                            ),
                            React.createElement(
                                _tree2.default,
                                {
                                    showLine: true,
                                    onExpand: that.handleExpand,
                                    expandedKeys: expandedKeys,
                                    autoExpandParent: autoExpandParent,
                                    className: 'tree-container'
                                },
                                departmentTree.length ? renderTreeNode(departmentTree) : null
                            )
                        ),
                        React.createElement(
                            TabPane,
                            { key: '3', tab: '\u7ECF\u9500\u5546\u6240\u5728\u5927\u533A\u5206\u5E03', className: 'sub-tabpane-item' },
                            React.createElement(
                                'div',
                                { id: 'piechart-container' },
                                React.createElement(_ChartPie2.default, { data: chinaCodeTree, nodeDom: 'piechart-container' })
                            )
                        )
                    )
                )
            )
        )
    );
});
exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/checkbox/style/css.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/checkbox/style/css.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/checkbox/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/checkbox/style/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/checkbox/style/index.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_Symbol.js":
/*!********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_Symbol.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/_lodash@4.17.11@lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_baseGetTag.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_baseGetTag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/_lodash@4.17.11@lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/_lodash@4.17.11@lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/_lodash@4.17.11@lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_freeGlobal.js":
/*!************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_freeGlobal.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../_webpack@4.21.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.21.0@webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_getRawTag.js":
/*!***********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_getRawTag.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/_lodash@4.17.11@lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_objectToString.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_objectToString.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_root.js":
/*!******************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_root.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/_lodash@4.17.11@lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/isObject.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/isObject.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/isObjectLike.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/isObjectLike.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/isSymbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/isSymbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/_lodash@4.17.11@lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/_lodash@4.17.11@lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ })

}]);
//# sourceMappingURL=83_f9770f2860b83ac82639.js.map