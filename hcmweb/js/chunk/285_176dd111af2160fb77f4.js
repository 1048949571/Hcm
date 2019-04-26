(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[285],{

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

/***/ "./app/widget/index/ChangeHistory/ChangeHistory.less":
/*!***********************************************************!*\
  !*** ./app/widget/index/ChangeHistory/ChangeHistory.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/ChangeHistory/main.js":
/*!************************************************!*\
  !*** ./app/widget/index/ChangeHistory/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/ChangeHistory/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChangeHistory = function (_React$Component) {
    _inherits(ChangeHistory, _React$Component);

    function ChangeHistory(props) {
        _classCallCheck(this, ChangeHistory);

        var _this = _possibleConstructorReturn(this, (ChangeHistory.__proto__ || Object.getPrototypeOf(ChangeHistory)).call(this, props));
        // document.title = '变更历史';


        _this.onLoading = function () {
            // this.DidMountText()
            _this.setState({
                onLoading: _this.state.onLoading + 10
            }, function () {
                _this.DidMountText();
            });
        };

        _this.onChange = function (date, dateString) {
            // console.log(this.props);

            if (_this.props.match.params.type == "TYpe") {
                _ajax2.default.post('/hcm/hcmChangeHistory/getList', {
                    pageSize: _this.state.onLoading,
                    pageNum: 1,
                    begintime: dateString[0] + " 00:00:00",
                    endtime: dateString[1] + " 23:59:59",
                    modulename: _this.props.match.params.tit,
                    objectid: _this.props.match.params.FJId,
                    classifyid: _this.props.match.params.FJId
                }).then(function (res) {
                    //  console.log(res)
                    //  this.DidMountText()
                    if (res.data.status == 10000) {
                        _this.setState({
                            ChangeHistory_list: res.data.data
                        });
                        // this.DidMountText()
                    }
                });
            } else if (_this.props.match.params.tit == "ipr_keyword") {
                _ajax2.default.post('/hcm/hcmChangeHistory/getList', {
                    pageSize: _this.state.onLoading,
                    pageNum: 1,
                    begintime: dateString[0] + " 00:00:00",
                    endtime: dateString[1] + " 23:59:59",
                    modulename: _this.props.match.params.tit,
                    objectid: _this.props.match.params.type
                }).then(function (res) {
                    //  console.log(res)
                    //  this.DidMountText()
                    if (res.data.status == 10000) {
                        _this.setState({
                            ChangeHistory_list: res.data.data
                        });
                        // this.DidMountText()
                    }
                });
            } else {
                _ajax2.default.post('/hcm/hcmChangeHistory/getList', {
                    pageSize: _this.state.onLoading,
                    pageNum: 1,
                    begintime: dateString[0] + " 00:00:00",
                    endtime: dateString[1] + " 23:59:59",
                    modulename: _this.props.match.params.tit,
                    objectid: _this.props.match.params.id,
                    classifyid: _this.props.match.params.FJId
                }).then(function (res) {
                    //  console.log(res)
                    //  this.DidMountText()
                    if (res.data.status == 10000) {
                        _this.setState({
                            ChangeHistory_list: res.data.data
                        });
                        // this.DidMountText()
                    }
                });
            }
        };

        _this.HistoryGo = function () {
            window.history.go(-1);
        };

        _this.DidMountText = function () {
            //console.log(this.props.match.params.type)
            var d = new Date();
            var Time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            // let Times= d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + (d.getDate()-90) + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            _this.setState({
                paths: +_this.props.match.params.id,
                TWOtit: _this.props.match.params.twotit
            });
            //console.log(Times)
            // console.log( moment(Date.now() - 2160 * 60 * 60 * 1000))
            //  console.log( moment(Date.now(), "YYYY-MM-DD"))
            if (_this.props.match.params.type == "TYpe") {
                _ajax2.default.post('/hcm/hcmChangeHistory/getList', {
                    pageSize: _this.state.onLoading,
                    pageNum: 1,
                    begintime: moment(moment(Date.now() - 2160 * 60 * 60 * 1000)._i).format('YYYY-MM-DD HH:mm:ss'),
                    endtime: Time,
                    objectid: _this.props.match.params.FJId,
                    itemid: _this.props.match.params.id,
                    modulename: _this.props.match.params.tit,
                    classifyid: _this.props.match.params.FJId
                }).then(function (res) {
                    console.log(res);
                    if (res.data.status == 10000) {
                        _this.setState({
                            ChangeHistory_list: res.data.data
                        });
                        // if(res.data.data){

                        // }
                    }
                });
            } else if (_this.props.match.params.plp == "Sjsj") {
                _ajax2.default.post('/hcm/hcmChangeHistory/getList', {
                    pageSize: _this.state.onLoading,
                    pageNum: 1,
                    begintime: moment(moment(Date.now() - 2160 * 60 * 60 * 1000)._i).format('YYYY-MM-DD HH:mm:ss'),
                    endtime: Time,
                    objectid: _this.props.match.params.id,
                    modulename: _this.props.match.params.tit,
                    classifyid: _this.props.match.params.FJId
                }).then(function (res) {
                    console.log(res);
                    if (res.data.status == 10000) {
                        _this.setState({
                            ChangeHistory_list: res.data.data
                        });
                    }
                });
            } else if (_this.props.match.params.tit == "ipr_keyword") {

                _ajax2.default.post('/hcm/hcmChangeHistory/getList', {
                    pageSize: _this.state.onLoading,
                    pageNum: 1,
                    begintime: moment(moment(Date.now() - 2160 * 60 * 60 * 1000)._i).format('YYYY-MM-DD HH:mm:ss'),
                    endtime: Time,
                    objectid: _this.props.match.params.type,
                    modulename: _this.props.match.params.tit
                }).then(function (res) {
                    console.log(res);
                    if (res.data.status == 10000) {
                        _this.setState({
                            ChangeHistory_list: res.data.data
                        });
                    }
                });
            } else {

                // console.log(this.props.match.params) 
                _ajax2.default.post('/hcm/hcmChangeHistory/getList', {
                    pageSize: _this.state.onLoading,
                    pageNum: 1,
                    begintime: moment(moment(Date.now() - 2160 * 60 * 60 * 1000)._i).format('YYYY-MM-DD HH:mm:ss'),
                    endtime: Time,
                    objectid: _this.props.match.params.id,
                    modulename: _this.props.match.params.tit,
                    classifyid: _this.props.match.params.FJId
                }).then(function (res) {
                    console.log(res);
                    if (res.data.status == 10000) {
                        _this.setState({
                            ChangeHistory_list: res.data.data
                        });
                    }
                });
            }
        };

        _this.state = {
            ChangeHistory_list: "",
            onLoading: 10,
            ChangeHistory: "",
            TwoTitle: "",
            paths: "",
            TWOtit: "",
            typeos: ""
        };

        return _this;
    }

    _createClass(ChangeHistory, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.DidMountText();
            this.setState({
                typeos: this.props.match.params.tit
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return ChangeHistory;
}(React.Component);

exports.default = _form2.default.create()(ChangeHistory);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ }),

/***/ "./app/widget/index/ChangeHistory/tpl.js":
/*!***********************************************!*\
  !*** ./app/widget/index/ChangeHistory/tpl.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _timeline = __webpack_require__(/*! antd/es/timeline */ "./node_modules/_antd@3.10.1@antd/es/timeline/index.js");

var _timeline2 = _interopRequireDefault(_timeline);

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/timeline/style/css */ "./node_modules/_antd@3.10.1@antd/es/timeline/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/_antd@3.10.1@antd/es/breadcrumb/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

__webpack_require__(/*! ./ChangeHistory.less */ "./app/widget/index/ChangeHistory/ChangeHistory.less");

var _That = __webpack_require__(/*! ../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Copyright = __webpack_require__(/*! ../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangePicker = _datePicker2.default.RangePicker;

var json = {
    ClientCheck: {
        name: '客户信息',
        type: 'ClientCheck',
        path: '/index.html#/ChangeHistory'
    },
    PricePublicity: {
        name: '泸州老窖',
        type: 'PricePublicity',
        path: '/index.html#/ProductInformation'
    }
};
var arr = [];
for (var key in json) {
    if (window.location.hash.substring(2).indexOf(key) > -1) {
        console.log(json[key]);
        arr.push(json[key]);
    }
}
//console.log(arr)

var Tpl = (0, _That2.default)(function (that) {
    // console.log(that.props.match.params)
    return React.createElement(
        'div',
        { className: 'ChangeHistory' },
        React.createElement(
            'div',
            { className: 'Breadcrumb' },
            React.createElement(
                _breadcrumb2.default,
                null,
                that.state.typeos == "DEALER" || that.state.typeos == "DEALER_DELETE" ? React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u6E20\u9053\u76D8\u70B9'
                ) : that.state.typeos == "Product" ? React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u552E\u4EF7\u516C\u5F0F'
                ) : that.state.typeos == "HcmProductClassify" ? null : null,
                that.state.TWOtit ? React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    React.createElement(
                        'a',
                        { style: { margin: '0' }, onClick: that.HistoryGo },
                        that.state.TWOtit
                    )
                ) : that.state.typeos == "HcmProductClassify" || that.state.typeos == "HcmCustomModel" ? React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    React.createElement(
                        'a',
                        { style: { margin: '0' }, href: '/index.html#/PriceNotice' },
                        '\u552E\u4EF7\u516C\u793A'
                    )
                ) : that.state.typeos == "DEALER" || that.state.typeos == "DEALER_DELETE" ? React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    React.createElement(
                        'a',
                        { style: { margin: '0' }, href: '/index.html#/ClientCheck' },
                        '\u5BA2\u6237\u4FE1\u606F'
                    )
                ) : that.state.typeos == "MonitorLink_Delete" ? React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    React.createElement(
                        'a',
                        { style: { margin: '0' }, href: '/index.html#/UrlMonitor' },
                        '\u5355\u94FE\u63A5\u76D1\u63A7'
                    )
                ) : null,
                React.createElement(
                    _breadcrumb2.default.Item,
                    null,
                    '\u53D8\u66F4\u5386\u53F2'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'ChangeHistoryBOX' },
            React.createElement(
                'div',
                { className: 'ChangeHeader' },
                React.createElement(
                    'span',
                    null,
                    '\u53D8\u66F4\u65F6\u95F4'
                ),
                React.createElement(RangePicker, {
                    defaultValue: [moment(Date.now() - 2160 * 60 * 60 * 1000), moment(Date.now())],
                    onChange: that.onChange })
            ),
            React.createElement(
                'div',
                { className: 'ChangeBody' },
                React.createElement(
                    _timeline2.default,
                    null,
                    that.state.ChangeHistory_list.length > 0 ? that.state.ChangeHistory_list.map(function (val, index) {
                        return React.createElement(
                            _timeline2.default.Item,
                            { key: index },
                            React.createElement(
                                'h3',
                                null,
                                moment(val.changetime).format('YYYY-MM-DD HH:mm:ss')
                            ),
                            React.createElement(
                                'h5',
                                null,
                                '\u53D8\u66F4\u4EBA\uFF1A',
                                val.realname
                            ),
                            React.createElement(
                                'span',
                                { className: 'ChangeTit' },
                                val.changeMessage ? val.changeMessage : null,
                                React.createElement('br', null),
                                val.contentAfter,
                                ' ',
                                React.createElement('br', null),
                                val.contentBefore
                            )
                        );
                    }) : React.createElement(
                        _timeline2.default.Item,
                        null,
                        '\u6682\u65E0\u6570\u636E'
                    )
                )
            ),
            that.state.ChangeHistory_list.length > 0 ? React.createElement(
                'div',
                { className: 'ChangeFooter' },
                that.state.onLoading == that.state.ChangeHistory_list.length ? React.createElement(
                    _button2.default,
                    { onClick: that.onLoading, className: 'loading-button' },
                    '\u52A0\u8F7D\u66F4\u591A...'
                ) : null
            ) : null
        ),
        React.createElement(_Copyright2.default, { className: 'Copyright' })
    );
});
exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_assignValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_assignValue.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/_lodash@4.17.11@lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/_lodash@4.17.11@lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_baseAssignValue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_baseAssignValue.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/_lodash@4.17.11@lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_defineProperty.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/_lodash@4.17.11@lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ })

}]);
//# sourceMappingURL=285_176dd111af2160fb77f4.js.map