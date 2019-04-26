(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[292],{

/***/ "./app/widget/index/Dealers/ActivityInformation/main.js":
/*!**************************************************************!*\
  !*** ./app/widget/index/Dealers/ActivityInformation/main.js ***!
  \**************************************************************/
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@5.0.7@react-redux/es/index.js");

var _dealer = __webpack_require__(/*! ../../../../js/actions/dealer */ "./app/js/actions/dealer.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Dealers/ActivityInformation/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActivityInformation = (_dec = (0, _reactRedux.connect)(function (state) {
    return {
        sevenActivity: state.dealer.sevenActivity
    };
}), _dec(_class = function (_React$Component) {
    _inherits(ActivityInformation, _React$Component);

    function ActivityInformation(props) {
        _classCallCheck(this, ActivityInformation);

        var _this = _possibleConstructorReturn(this, (ActivityInformation.__proto__ || Object.getPrototypeOf(ActivityInformation)).call(this, props));

        _this.switchActivity = function (date, index, type) {
            var activityObj = _this.state.activityObj;

            _this.setState({
                selectedIndex: index,
                selectedDate: date
            });
            activityObj[date] === undefined && _this.getActivityDayInfo({ date: date, type: type });
        };

        _this.getActivityDayInfo = function (obj) {
            var activityObj = _this.state.activityObj;

            (0, _ajax2.default)({
                method: 'post',
                url: '/hcm/campgign/ScheduleMy',
                data: {
                    campaign_node: '已审核',
                    ser_day: obj.date,
                    type: obj.type
                }
            }).then(function (res) {
                var _res$data = res.data,
                    data = _res$data.data,
                    status = _res$data.status,
                    message = _res$data.message;

                if (status === '10000') {
                    _this.setState({
                        activityObj: Object.assign({}, activityObj, _defineProperty({}, obj.date, data)),
                        selectedDate: obj.date
                    });
                } else {
                    _message3.default.error(message);
                }
            }).catch(function (err) {
                _message3.default.error('网络异常，请稍后再试！');
            });
        };

        _this.state = {
            selectedIndex: 0,
            activityObj: {},
            selectedDate: ''
        };
        return _this;
    }

    _createClass(ActivityInformation, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var dispatch = this.props.dispatch;

            dispatch((0, _dealer.getDealerSeven)());
            var date = new Date();
            var str = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
            this.getActivityDayInfo({ date: str, type: 1 });
        }
        // 查询活动日程信息

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return ActivityInformation;
}(React.Component)) || _class);
exports.default = ActivityInformation;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=292_ed3ca35ed90c170a69b3.js.map