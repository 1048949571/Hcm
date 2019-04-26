(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[297],{

/***/ "./app/widget/index/Dealers/Home/main.js":
/*!***********************************************!*\
  !*** ./app/widget/index/Dealers/Home/main.js ***!
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

var _dec, _class;

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Dealers/Home/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _redux = __webpack_require__(/*! redux */ "./node_modules/_redux@4.0.1@redux/es/redux.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@5.0.7@react-redux/es/index.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _dealer = __webpack_require__(/*! ../../../../js/actions/dealer */ "./app/js/actions/dealer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        currentBrand: state.dealer.currentBrand
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return (0, _redux.bindActionCreators)({ getBrandList: _dealer.getBrandList }, dispatch);
};
var App = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.reSubmitApply = function () {
            (0, _ajax2.default)({
                method: 'post',
                url: '/hcm/dealer/reSubmitApplying'
            }).then(function (res) {
                var _res$data = res.data,
                    data = _res$data.data,
                    status = _res$data.status,
                    message = _res$data.message;

                if (status === '10000') {
                    _message3.default.success(message);
                    _this.props.getBrandList();
                }
            }).catch();
        };

        _this.handleDateClick = function (index, date) {
            _this.setState({
                selectDateIndex: index,
                currentDate: date
            });
            _this.getBrandActivityPublicShop(date);
        };

        _this.handleToggleClick = function () {
            _this.setState({
                isExpandShop: !_this.state.isExpandShop
            });
        };

        _this.getList = function () {
            (0, _ajax2.default)({
                method: 'post',
                url: '/hcm/Index/dealerIndex'
            }).then(function (res) {
                var _res$data2 = res.data,
                    data = _res$data2.data,
                    status = _res$data2.status,
                    message = _res$data2.message;

                if (status === '10000') {
                    _this.setState({
                        productList: data.productList,
                        noticeList: data.noticeList,
                        binding: data.binding,
                        userId: data.userid
                    });
                }
            }).catch();
        };

        _this.getBrandActivityPublicShop = function (date) {
            (0, _ajax2.default)({
                method: 'post',
                url: '/hcm/campgign/PublicShops',
                data: {
                    campaign_node: '已审核',
                    type: (0, _moment2.default)().format('YYYY-MM-DD') === date ? 1 : 2,
                    ser_day: date
                }
            }).then(function (res) {
                var _res$data3 = res.data,
                    data = _res$data3.data,
                    status = _res$data3.status,
                    message = _res$data3.message;

                if (status === '10000') {
                    _this.setState({
                        shopBtnList: data
                    });
                }
            }).catch();
        };

        _this.getBrandActivityPublicDate = function () {
            (0, _ajax2.default)({
                method: 'post',
                url: '/hcm/campgign/ScheduleBMCSeven'
            }).then(function (res) {
                var _res$data4 = res.data,
                    data = _res$data4.data,
                    status = _res$data4.status,
                    message = _res$data4.message;

                if (status === '10000') {
                    _this.setState({
                        sevenActivity: data
                    });
                }
            }).catch();
        };

        _this.goTo = function (path) {
            _this.props.history.push({
                pathname: path
            });
        };

        _this.state = {
            dataList: [],
            selectDateIndex: 0,
            isExpandShop: true,
            selectShopIndex: -1,
            sevenActivity: [],
            shopBtnList: [],
            currentDate: (0, _moment2.default)().format('YYYY-MM-DD'),
            productList: [],
            noticeList: [],
            binding: null,
            userId: null
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.getBrandActivityPublicDate();
            this.getBrandActivityPublicShop(this.state.currentDate);
            this.getList();
            //    notification.config({
            //        duration: null,
            //        top: 60
            //    })
        }

        // componentDidMount() {
        //     setTimeout(() => {
        //         try {
        //             if (!sessionStorage.getItem('exdate')) {
        //                 sessionStorage.setItem('exdate', true)
        //                 const { end_days, authorize_end } = this.props.currentBrand
        //                 !!end_days && end_days < 30 ?
        //                 notification.warning({
        //                     key: '999',
        //                     message: '账号即将到期提醒',
        //                     description: `你的账号有效期至${moment(authorize_end).format('YYYY-MM-DD')}日，使用期限仅剩${end_days}天，过期后账号将不能使用，请及时联系管理员续期`,
        //                 }) : null
        //             }
        //         } catch (error) {
        //             // Msg.warning('请关闭浏览器的无痕模式！')
        //         }
        //     }, 500);
        // }

        // componentWillUnmount() {
        //     notification.close('999')
        // }

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return App;
}(React.Component)) || _class);
exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=297_b1863b5ca55c559193d4.js.map