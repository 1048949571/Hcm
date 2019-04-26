(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[345],{

/***/ "./app/widget/components/ImgModal/ImgModal.js":
/*!****************************************************!*\
  !*** ./app/widget/components/ImgModal/ImgModal.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, ReactDom) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImgModal = undefined;

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! ./ImgModal.less */ "./app/widget/components/ImgModal/ImgModal.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 图片弹层
// ImgModal({bl:true,urls:urls,index:index,close:true})
// bl:true||false  展示隐藏  默认false 
// urls:arr 图片集合
// index： 默认展示数组中的第几张图片 默认值0
// close: 是否展示关闭按钮


var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            index: _this.props.index,
            rotate: 0,
            size: 1
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'onSwitch',
        value: function onSwitch(bl) {
            var _state = this.state,
                index = _state.index,
                rotate = _state.rotate,
                size = _state.size;
            var urls = this.props.urls;

            if (bl) {
                if (index == urls.length - 1) {
                    index = 0;
                } else {
                    index++;
                }
            } else {
                if (index <= 0) {
                    index = urls.length - 1;
                } else {
                    index--;
                }
            }
            this.setState({
                index: index,
                rotate: 0,
                size: 1
            });
        }
    }, {
        key: 'onSize',
        value: function onSize(bl) {
            var size = this.state.size;

            if (bl) {
                size += 0.5;
            } else {
                size = size <= 0.5 ? 0.5 : size - 0.5;
            }
            this.setState({
                size: size
            });
        }
    }, {
        key: 'onRotate',
        value: function onRotate(bl) {
            var rotate = this.state.rotate;

            if (bl) {
                rotate += 90;
            } else {
                rotate -= 90;
            }
            this.setState({
                rotate: rotate
            });
        }
    }, {
        key: 'colse',
        value: function colse() {
            ReactDom.unmountComponentAtNode(document.getElementById('ImgModal'));
            document.getElementsByTagName("body")[0].removeChild(document.getElementById('ImgModal'));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                _props$urls = _props.urls,
                urls = _props$urls === undefined ? [] : _props$urls,
                _props$close = _props.close,
                close = _props$close === undefined ? false : _props$close;
            var _state2 = this.state,
                _state2$index = _state2.index,
                index = _state2$index === undefined ? 0 : _state2$index,
                rotate = _state2.rotate,
                size = _state2.size;

            var oImg = document.createElement('img');
            oImg.src = urls[index];
            var naturalWidth = oImg.naturalWidth ? oImg.naturalWidth : 400;
            var naturalHeight = oImg.naturalHeight ? oImg.naturalHeight : 400;
            console.log(naturalWidth);
            return React.createElement(
                'div',
                { className: 'flexbox' },
                React.createElement(
                    'div',
                    { className: 'imgbox' },
                    close ? React.createElement(_icon2.default, { className: 'close', onClick: function onClick() {
                            return _this2.colse();
                        }, type: 'close-circle' }) : null,
                    React.createElement(
                        'div',
                        { className: 'box' },
                        React.createElement('img', { style: { width: size * (naturalWidth > 500 ? naturalWidth * 0.7 : naturalWidth) + 'px', transform: 'rotate(' + rotate + 'deg)' },
                            src: urls[index]
                        })
                    ),
                    React.createElement(
                        'div',
                        { className: 'buts' },
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onSwitch(false);
                            }, type: 'left' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onSwitch(true);
                            }, type: 'right' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onSize(true);
                            }, type: 'plus' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onSize(false);
                            }, type: 'minus' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onRotate(false);
                            }, className: 'left', type: 'reload' }),
                        React.createElement(_icon2.default, { onClick: function onClick() {
                                return _this2.onRotate(true);
                            }, className: 'right', type: 'reload' })
                    ),
                    React.createElement(
                        'div',
                        { style: { textAlign: 'center', fontSize: '12px' } },
                        React.createElement(
                            'a',
                            { target: '_blank', href: urls[index] },
                            '\u67E5\u770B\u539F\u56FE'
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

var ImgModal = exports.ImgModal = function ImgModal(page) {
    var _page$bl = page.bl,
        bl = _page$bl === undefined ? false : _page$bl,
        urls = page.urls;

    var div = document.createElement('div');
    div.setAttribute("id", "ImgModal");
    if (bl) {
        document.body.appendChild(div);
        ReactDom.render(React.createElement(App, page), document.getElementById('ImgModal'));
    } else {
        ReactDom.unmountComponentAtNode(document.getElementById('ImgModal'));
        document.getElementsByTagName("body")[0].removeChild(document.getElementById('ImgModal'));
    }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! react-dom */ "./node_modules/_react-dom@16.5.2@react-dom/index.js")))

/***/ }),

/***/ "./app/widget/components/ImgModal/ImgModal.less":
/*!******************************************************!*\
  !*** ./app/widget/components/ImgModal/ImgModal.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/components/platform.js":
/*!*******************************************!*\
  !*** ./app/widget/components/platform.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (name) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { width: '20px', height: '20px' };

    var data = {
        "TB": React.createElement('img', { style: style, src: '../../../../img/platform/1_taobao.svg' }),
        "TM": React.createElement('img', { style: style, src: '../../../../img/platform/2_tall.svg' }),
        "JD": React.createElement('img', { style: style, src: '../../../../img/platform/3_jd.svg' }),
        "SN": React.createElement('img', { style: style, src: '../../../../img/platform/4_suning.svg' }),
        "GM": React.createElement('img', { style: style, src: '../../../../img/platform/5_gome.svg' }),
        "PDD": React.createElement('img', { style: style, src: '../../../../img/platform/6_pinduoduo.svg' }),
        "AMAZON": React.createElement('img', { style: style, src: '../../../../img/platform/7_a.svg' }),
        "WPH": React.createElement('img', { style: style, src: '../../../../img/platform/8_weipinhui.svg' }),
        "1688": React.createElement('img', { style: style, src: '../../../../img/platform/9_1688.svg' }),
        "SMT": React.createElement('img', { style: style, src: '../../../../img/platform/10_sumaitong.svg' }),
        "DD": React.createElement('img', { style: style, src: '../../../../img/platform/11_dangdang.svg' }),
        "ALST": React.createElement('img', { style: style, src: '../../../../img/platform/12_lingshoutong.svg' }),
        "1HD": React.createElement('img', { style: style, src: '../../../../img/platform/13_1haodian.svg' }),
        "YJWD": React.createElement('img', { style: style, src: '../../../../img/platform/14_yunji.svg' }),
        "YLW": React.createElement('img', { style: style, src: '../../../../img/platform/15_youle.svg' }),
        "XY": React.createElement('img', { style: style, src: '../../../../img/platform/16_xainyu.svg' }),
        "WECD": React.createElement('img', { style: style, src: '../../../../img/platform/17_weixin.svg' }),
        "MGJ": React.createElement('img', { style: style, src: '../../../../img/platform/18_mogujie.svg' }),
        "JMYP": React.createElement('img', { style: style, src: '../../../../img/platform/19_jumei.svg' }),
        "CCJ": React.createElement('img', { style: style, src: '../../../../img/platform/20_chuchujie.svg' }),
        "BBWG": React.createElement('img', { style: style, src: '../../../../img/platform/21_beibeiwang.svg' }),
        "platform_OTHER": React.createElement('img', { style: style, src: '../../../../img/platform/22_qita.svg' })
    };
    return data[name];
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/ptchat.js":
/*!*****************************************!*\
  !*** ./app/widget/components/ptchat.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (name) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { width: '16px', height: '16px' };

    var data = {
        "TB": React.createElement('img', { style: style, src: '../../../../img/icon1.1/tao_mes.png' }),
        "TM": React.createElement('img', { style: style, src: '../../../../img/icon1.1/tao_mes.png' }),
        "1688": React.createElement('img', { style: style, src: '../../../../img/icon1.1/tao_mes.png' }),
        "JD": React.createElement('img', { style: style, src: '../../../../img/icon1.1/jd_mes.png' })
    };
    if (name == 'TB' || name == 'TM' || name == '1688' || name == 'JD') {
        return data[name];
    }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/index/SpecialComplaint/main.js":
/*!***************************************************!*\
  !*** ./app/widget/index/SpecialComplaint/main.js ***!
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

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/SpecialComplaint/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _platform = __webpack_require__(/*! ../../components/platform */ "./app/widget/components/platform.js");

var _platform2 = _interopRequireDefault(_platform);

var _ptchat = __webpack_require__(/*! ../../components/ptchat */ "./app/widget/components/ptchat.js");

var _ptchat2 = _interopRequireDefault(_ptchat);

var _ImgModal = __webpack_require__(/*! ../../components/ImgModal/ImgModal */ "./app/widget/components/ImgModal/ImgModal.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Loading from '../../components/Loading';
// import PlatformLink from '../../components/platformLink';
var confirm = _modal2.default.confirm;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        var _this2 = this,
            _this$state15;

        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.tabsKey = function (key) {
            var _this$setState;

            var tabskey = _this.state.tabskey;
            // console.log(key)

            _this.setState((_this$setState = { tabskey: key, querySJ: '', queryPT: '', queryZT: '', queryTIMEp: '', queryTIMEn: '', querybtnSJ: '', querybtnPT: '', querybtnZT: '', querybtnTIMEp: '', querybtnTIMEn: '', pageSize: 10, pageNo: 1, checkAll: false, selectedRowKeys: [] }, _defineProperty(_this$setState, 'queryTIMEp', ''), _defineProperty(_this$setState, 'queryTIMEn', ''), _this$setState), function () {
                _this.querycontent();
            });
        };

        _this.getinfo = function () {
            var Identity = _this.state.Identity;

            Identity = localStorage.getItem("logintype");
            _this.setState({ Identity: Identity });
        };

        _this.platform = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this$state, platform, platformData;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this$state = _this.state, platform = _this$state.platform, platformData = _this$state.platformData;

                            _this.setState({
                                platformData: can.platform || []
                            });

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));

        _this.querysj = function (ev) {
            var querySJ = _this.state.querySJ;

            querySJ = ev.target.value;
            // let {value:querySJ} = ev.target;
            // querySJ
            _this.setState({ querySJ: querySJ });
            // console.log(querySJ)
        };

        _this.queryzt = function (value) {
            var queryZT = _this.state.queryZT;

            if (value.key == '请选择') {
                queryZT = '';
            } else {
                queryZT = value.key;
            }
            // console.log(queryZT)
            _this.setState({ queryZT: queryZT });
        };

        _this.selecttime = function (dates, dateStrings) {
            var _this$state2 = _this.state,
                queryTIMEp = _this$state2.queryTIMEp,
                queryTIMEn = _this$state2.queryTIMEn;
            //判断是否有选择时间 上一个时间dateStrings[0] 下一个时间dateStrings[1]

            if (dateStrings[0]) {
                queryTIMEp = dateStrings[0] + ' 00:00:00';
                queryTIMEn = dateStrings[1] + ' 23:59:59';
                // console.log('有树枝')
            } else {
                queryTIMEp = '';
                queryTIMEn = '';
            }
            _this.setState({ queryTIMEp: queryTIMEp, queryTIMEn: queryTIMEn });
        };

        _this.querypt = function (value) {
            var queryPT = _this.state.queryPT;

            if (value.key == '请选择') {
                queryPT = '';
            } else {
                queryPT = value.key;
            }

            _this.setState({ queryPT: queryPT });
        };

        _this.querycontent = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(que) {
                var _this$state3, selectedRowKeys, checkAll, totalArr, tabskey, querySJ, queryPT, queryZT, queryTIMEp, queryTIMEn, querybtnSJ, querybtnPT, querybtnZT, querybtnTIMEp, querybtnTIMEn, pageSize, SCdata, pageNo, totalElements, statusAll1, statusAll2, statusAll3, statusAll4;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                // console.log(que)
                                _this$state3 = _this.state, selectedRowKeys = _this$state3.selectedRowKeys, checkAll = _this$state3.checkAll, totalArr = _this$state3.totalArr, tabskey = _this$state3.tabskey, querySJ = _this$state3.querySJ, queryPT = _this$state3.queryPT, queryZT = _this$state3.queryZT, queryTIMEp = _this$state3.queryTIMEp, queryTIMEn = _this$state3.queryTIMEn, querybtnSJ = _this$state3.querybtnSJ, querybtnPT = _this$state3.querybtnPT, querybtnZT = _this$state3.querybtnZT, querybtnTIMEp = _this$state3.querybtnTIMEp, querybtnTIMEn = _this$state3.querybtnTIMEn, pageSize = _this$state3.pageSize, SCdata = _this$state3.SCdata, pageNo = _this$state3.pageNo, totalElements = _this$state3.totalElements, statusAll1 = _this$state3.statusAll1, statusAll2 = _this$state3.statusAll2, statusAll3 = _this$state3.statusAll3, statusAll4 = _this$state3.statusAll4;

                                querySJ = querySJ.replace(/(^\s*)|(\s*$)/g, "");
                                if (que == 'query') {
                                    selectedRowKeys = [];
                                }
                                if (queryTIMEn != '' && queryTIMEp != '') {
                                    LoadingModal({ bl: true });
                                    _ajax2.default.get('/hcm/hcmComplaintHandling/getList', {
                                        params: {
                                            shopName: que == 'query' ? querySJ : querybtnSJ == '' ? null : querybtnSJ,
                                            platform: que == 'query' ? queryPT : querybtnPT == '' ? null : querybtnPT,
                                            status: que == 'query' ? queryZT : querybtnZT == '' ? null : querybtnZT,
                                            pageNo: que == 'query' ? '1' : pageNo,
                                            pageSize: pageSize,
                                            begintime: que == 'query' ? queryTIMEp : querybtnTIMEp == '' ? queryTIMEp : querybtnTIMEp,
                                            endtime: que == 'query' ? queryTIMEn : querybtnTIMEn == '' ? queryTIMEn : querybtnTIMEn,
                                            processingtype: tabskey
                                        }
                                    }).then(function (res) {
                                        // console.log(res)
                                        LoadingModal({ bl: false });
                                        // console.log('111111111111')
                                        if (res.data.status == 10000) {
                                            var data = res.data.data.content;
                                            totalElements = res.data.data.totalElements;
                                            totalArr = res.data.data.obj;
                                            totalArr.splice(tabskey - 1, 1, totalElements);
                                            // console.log(data,res,totalElements,totalArr)
                                            SCdata = data.map(function (e, i) {
                                                return {
                                                    key: que == 'query' ? i + 1 : pageSize * (pageNo - 1) + (i + 1),
                                                    onumber: que == 'query' ? i + 1 : pageSize * (pageNo - 1) + (i + 1),
                                                    pticon: (0, _platform2.default)(e.platform),
                                                    ptchat: (0, _ptchat2.default)(e.platform),
                                                    shopname: e.shop_name,
                                                    shoplink: e.shoplink,
                                                    shopid: e.shopid,
                                                    bmcid: e.bmcid,
                                                    clockstatus: e.clockstatus == '1' ? React.createElement('img', { style: { cursor: 'pointer' }, src: '../../../img/icon1.1/Alarm_clock.png', alt: '' }) : null, //脑中线是状态
                                                    // clockstatus:<img src="../../../img/icon1.1/Alarm_clock.png" alt=""/>,
                                                    send_number: e.send_number,
                                                    againtime: e.againtime,
                                                    // status:statusAll[e.status],
                                                    status: e.status,
                                                    tableStatus: tabskey == '1' ? statusAll1[e.status] : tabskey == '2' ? statusAll2[e.status] : tabskey == '3' ? statusAll3[e.status] : statusAll4[e.status],
                                                    updatetime: moment(e.updatetime).format('YYYY-MM-DD HH:mm:ss'),
                                                    id: e.id,
                                                    processing_times: e.processing_times,
                                                    platform: e.platform
                                                };
                                            });
                                            if (que == 'query') {
                                                _this.setState({ totalArr: totalArr, SCdata: SCdata, totalElements: totalElements, querybtnSJ: querySJ, querybtnPT: queryPT, querybtnZT: queryZT, querybtnTIMEp: queryTIMEp, querybtnTIMEn: queryTIMEn, pageNo: 1, checkAll: false, selectedRowKeys: selectedRowKeys });
                                            } else {
                                                _this.setState({ totalArr: totalArr, SCdata: SCdata, totalElements: totalElements, queryTIMEp: queryTIMEp, queryTIMEn: queryTIMEn }, function () {
                                                    if (checkAll) {
                                                        _this.DelecheckAll();
                                                        _this.setState({ checkAll: true });
                                                    }
                                                });
                                            }
                                        }
                                    }).catch(function () {
                                        LoadingModal({ bl: false });
                                        _message3.default.error('获取信息失败');
                                    });
                                    // console.log(queryTIMEn,queryTIMEp)
                                } else {
                                    queryTIMEp = moment().subtract(3, 'months').format('YYYY-MM-DD ') + '00:00:00';
                                    queryTIMEn = moment().format('YYYY-MM-DD ') + '23:59:59';
                                    // console.log(queryTIMEp,queryTIMEn)
                                    LoadingModal({ bl: true });
                                    _ajax2.default.get('/hcm/hcmComplaintHandling/getList', {
                                        params: {
                                            shopName: que == 'query' ? querySJ : querybtnSJ == '' ? null : querybtnSJ,
                                            platform: que == 'query' ? queryPT : querybtnPT == '' ? null : querybtnPT,
                                            status: que == 'query' ? queryZT : querybtnZT == '' ? null : querybtnZT,
                                            pageNo: que == 'query' ? '1' : pageNo,
                                            pageSize: pageSize,
                                            begintime: que == 'query' ? queryTIMEp : querybtnTIMEp == '' ? queryTIMEp : querybtnTIMEp,
                                            endtime: que == 'query' ? queryTIMEn : querybtnTIMEn == '' ? queryTIMEn : querybtnTIMEn,
                                            processingtype: tabskey
                                        }
                                    }).then(function (res) {
                                        // console.log(res)
                                        LoadingModal({ bl: false });
                                        if (res.data.status == 10000) {
                                            var data = res.data.data.content;
                                            totalElements = res.data.data.totalElements;
                                            totalArr = res.data.data.obj;
                                            totalArr.splice(tabskey - 1, 1, totalElements);
                                            // console.log(data,res,totalElements,totalArr)
                                            SCdata = data.map(function (e, i) {
                                                return {
                                                    key: que == 'query' ? i + 1 : pageSize * (pageNo - 1) + (i + 1),
                                                    onumber: que == 'query' ? i + 1 : pageSize * (pageNo - 1) + (i + 1),
                                                    pticon: (0, _platform2.default)(e.platform),
                                                    ptchat: (0, _ptchat2.default)(e.platform),
                                                    shopname: e.shop_name,
                                                    shoplink: e.shoplink,
                                                    shopid: e.shopid,
                                                    bmcid: e.bmcid,
                                                    clockstatus: e.clockstatus == '1' ? React.createElement('img', { style: { cursor: 'pointer' }, src: '../../../img/icon1.1/Alarm_clock.png', alt: '' }) : null, //脑中线是状态
                                                    send_number: e.send_number,
                                                    againtime: e.againtime,
                                                    tableStatus: tabskey == '1' ? statusAll1[e.status] : tabskey == '2' ? statusAll2[e.status] : tabskey == '3' ? statusAll3[e.status] : statusAll4[e.status],
                                                    status: e.status,
                                                    updatetime: moment(e.updatetime).format('YYYY-MM-DD HH:mm:ss'),
                                                    id: e.id,
                                                    processing_times: e.processing_times,
                                                    platform: e.platform
                                                };
                                            });
                                            if (que == 'query') {
                                                _this.setState({ totalArr: totalArr, SCdata: SCdata, totalElements: totalElements, querybtnSJ: querySJ, querybtnPT: queryPT, querybtnZT: queryZT, querybtnTIMEp: queryTIMEp, querybtnTIMEn: queryTIMEn, pageNo: 1, checkAll: false, selectedRowKeys: selectedRowKeys });
                                            } else {
                                                _this.setState({ totalArr: totalArr, SCdata: SCdata, totalElements: totalElements, queryTIMEp: queryTIMEp, queryTIMEn: queryTIMEn }, function () {
                                                    if (checkAll) {
                                                        _this.DelecheckAll();
                                                        _this.setState({ checkAll: true });
                                                    }
                                                });
                                            }
                                        }
                                    }).catch(function () {
                                        LoadingModal({ bl: false });
                                        _message3.default.error('获取信息失败');
                                    });
                                }

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }();

        _this.onTableCheckChange = function (selectedRowKeys) {
            var _this$state4 = _this.state,
                SCdata = _this$state4.SCdata,
                pageSize = _this$state4.pageSize;

            var idAll = [];
            // console.log(selectedRowKeys)
            selectedRowKeys.forEach(function (e, i) {
                idAll.push(SCdata[(selectedRowKeys[i] % 10 ? selectedRowKeys[i] % 10 : 10) - 1].id);
            });
            // console.log(SCdata,idAll,selectedRowKeys)
            _this.setState({
                selectedRowKeys: selectedRowKeys,
                checkAll: false,
                idAll: idAll
            });
        };

        _this.cancelcheckAll = function (status) {
            var selectedRowKeys = _this.state.selectedRowKeys;

            selectedRowKeys.length = 0;
            _this.setState({ checkAll: status, selectedRowKeys: selectedRowKeys });
        };

        _this.DelecheckAll = function (status) {
            var _this$state5 = _this.state,
                selectedRowKeys = _this$state5.selectedRowKeys,
                SCdata = _this$state5.SCdata,
                pageNo = _this$state5.pageNo,
                pageSize = _this$state5.pageSize;

            selectedRowKeys = [];
            for (var i = pageSize * (pageNo - 1); i < pageSize * (pageNo - 1) + SCdata.length; i++) {
                selectedRowKeys.push(i + 1);
            }
            // console.log(selectedRowKeys)
            _this.setState({ selectedRowKeys: selectedRowKeys, checkAll: status });
        };

        _this.DeleteComplaint = function (item) {
            var _this$state6 = _this.state,
                tabskey = _this$state6.tabskey,
                querybtnSJ = _this$state6.querybtnSJ,
                querybtnPT = _this$state6.querybtnPT,
                querybtnZT = _this$state6.querybtnZT,
                querybtnTIMEp = _this$state6.querybtnTIMEp,
                querybtnTIMEn = _this$state6.querybtnTIMEn,
                selectedRowKeys = _this$state6.selectedRowKeys,
                totalElements = _this$state6.totalElements,
                checkAll = _this$state6.checkAll,
                idAll = _this$state6.idAll,
                querySJ = _this$state6.querySJ,
                queryPT = _this$state6.queryPT,
                queryZT = _this$state6.queryZT,
                queryTIMEp = _this$state6.queryTIMEp,
                queryTIMEn = _this$state6.queryTIMEn;

            var that = _this;
            idAll = checkAll == true ? 'checkAll' : idAll.join(",");
            if (selectedRowKeys.length == 0) {
                _message3.default.error('请选择删除的数据');
                return;
            }
            confirm({
                title: null,
                className: 'alert-item-confirm YellowWhite',
                content: React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { className: 'tips' },
                        '\u63D0\u793A'
                    ),
                    React.createElement('div', { className: 'pline' }),
                    React.createElement(
                        'p',
                        { className: 'Dtitle' },
                        '\u4F60\u786E\u8BA4\u8981\u5220\u9664\u8FD9',
                        selectedRowKeys.length == 0 ? 0 : checkAll == true ? totalElements : selectedRowKeys.length,
                        '\u9879\u5417?'
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u5220\u9664\u540E',
                        React.createElement(
                            'span',
                            { className: 'red' },
                            '\u5C06\u65E0\u6CD5\u6062\u590D!'
                        )
                    )
                ),
                okText: '确定',
                cancelText: '取消',
                onOk: function onOk() {
                    LoadingModal({ bl: true });
                    // console.log(querySJ+'----1',queryPT+'----2',queryZT+'----3',queryTIMEp+'------4',queryTIMEn+'----5')
                    // console.log(idAll+'----1',querybtnSJ+'----2',querybtnPT+'----3',querybtnZT+'------4',querybtnTIMEp+'----5',querybtnTIMEn)
                    _ajax2.default.post('/hcm/hcmComplaintHandling/delectHcmComplaintHandling', {
                        ids: idAll,
                        shopName: checkAll == true ? querybtnSJ == '' ? null : querybtnSJ : null,
                        platform: checkAll == true ? querybtnPT == '' ? null : querybtnPT : null,
                        status: checkAll == true ? querybtnZT == '' ? null : querybtnZT : null,
                        begintime: checkAll == true ? querybtnTIMEp == '' ? queryTIMEp : querybtnTIMEp : null,
                        endtime: checkAll == true ? querybtnTIMEn == '' ? queryTIMEn : querybtnTIMEn : null,
                        processingtype: checkAll == true ? tabskey : null
                    }).then(function (response) {
                        // console.log(response)
                        LoadingModal({ bl: false });
                        if (response.data.status == '10000') {
                            that.querycontent();
                            that.setState({ selectedRowKeys: [] });
                            _message3.default.success(response.data.message);
                        } else {
                            _message3.default.error(response.data.message);
                        }
                    }).catch(function (error) {
                        LoadingModal({ bl: false });
                        _message3.default.error('删除失败');
                    });
                }
            });
        };

        _this.bubblehidden = function (ev) {
            var grandfather = ev.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            grandfather.className = 'ant-popover  ant-popover-placement-top  ant-popover-hidden';
        };

        _this.showDrawer = function (id, shopname, status, shoplink, processing_times, platform) {
            // console.log(id,shopname,status,shoplink,processing_times,platform)
            var remind = document.querySelector('.remind');
            // remind.style.display = 'none'
            var historyList = _this.state.historyList;

            var ic = (0, _platform2.default)(platform, { width: '15px', height: '15px', marginLeft: '5px', marginTop: '4px' });
            // console.log(platform)
            LoadingModal({ bl: true });
            _ajax2.default.get('/hcm/hcmComplaintHandling/selectHistoryList', {
                params: {
                    handlingid: id
                }
            }).then(function (res) {
                // console.log(res)
                LoadingModal({ bl: false });
                if (res.data.status == 10000) {
                    historyList = res.data.data.list;
                    // console.log(historyList)
                    _this.setState({ historyList: historyList });
                }
            }).catch(function () {
                LoadingModal({ bl: false });
                _message3.default.error('获取信息失败');
            });

            _this.setState({
                Draweroff: true,
                shopname: shopname,
                status: status,
                shoplink: shoplink,
                processing_times: processing_times,
                id: id,
                Shopicon: ic,
                platform: platform
            });
        };

        _this.newState = function (value) {
            var newZT = _this.state.newZT;
            // console.log(value.key)

            _this.setState({ newZT: value.key });
        };

        _this.upfilechange = function (info) {
            var upfileList = _this.state.upfileList;

            upfileList = info.fileList;
            // console.log(upfileList)
            if (_this.upfile(info.file, false)) {
                _this.setState({ upfileList: upfileList });
            }
        };

        _this.upfile = function (file) {
            var bl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var type = '.rar .zip .doc .docx .xls .xlsx .ppt .pptx .pdf';
            var filename = file.name;
            var index = filename.lastIndexOf(".");
            var ext = filename.substr(index + 1);
            var isLt20M = file.size / 1024 / 1024 < 20;
            if (!isLt20M) {
                _message3.default.error('\u6587\u4EF6\u4E0D\u80FD\u5927\u4E8E20MB!');
                return false;
            }
            if (type.indexOf(ext) === -1) {
                if (bl) {
                    _message3.default.error('\u6682\u4E0D\u652F\u6301' + filename + '\u6587\u4EF6\u683C\u5F0F');
                }
                return false;
            }
            return true;
        };

        _this.remark = function (ev) {
            var Remark = _this.state.Remark;

            Remark = ev.target.value.replace(/(^\s*)|(\s*$)/g, "");
            _this.setState({ Remark: Remark });
            // console.log(Remark)
        };

        _this.newHistory = function () {
            var _this$state7 = _this.state,
                newlogisticsNum = _this$state7.newlogisticsNum,
                newcomplainNum = _this$state7.newcomplainNum,
                tabskey = _this$state7.tabskey,
                newZT = _this$state7.newZT,
                status = _this$state7.status,
                id = _this$state7.id,
                Remark = _this$state7.Remark,
                nextTIME = _this$state7.nextTIME,
                fileList = _this$state7.fileList,
                upfileList = _this$state7.upfileList,
                processing_times = _this$state7.processing_times;
            // console.log(status)

            if (status == '4' && tabskey == '1' || status == '9' && tabskey == '2' || status == '4' && tabskey == '3' || status == '4' && tabskey == '4') {
                _message3.default.warning('流程已完结');
                return;
            }
            if (newZT == '2' && tabskey == '2' && newlogisticsNum == '') {
                _message3.default.warning('请输入物流单号');
                return;
            }
            if (newZT == '8' && tabskey == '2' && newcomplainNum == '') {
                _message3.default.warning('请输入投诉单号');
                return;
            }
            // console.log(moment(nextTIME).isBefore(moment().format('YYYY-MM-DD HH:mm:ss')))
            if (moment(nextTIME).isBefore(moment().format('YYYY-MM-DD HH:mm:ss'))) {
                _message3.default.warning('下次跟进时间已过,请重新选择时间');
                return;
            }
            // console.log()
            if (newZT != status && newZT != '') {
                LoadingModal({ bl: true });
                _ajax2.default.post('/hcm/hcmComplaintHandling/saveHistory', {
                    handlingid: id,
                    status: newZT,
                    againtime: nextTIME ? nextTIME : null, //// 下次跟进时间,
                    image: fileList.length ? fileList.map(function (item, index) {
                        return item.response.data.data;
                    }).join(',') : null,
                    file: upfileList.length ? upfileList.map(function (item, index) {
                        return item.response.data.data + '/////' + item.name;
                    }).join(',') : null, // 附件,
                    remark: Remark ? Remark : null, // 备注,
                    processingTimes: processing_times, // 链接处理次数 必传
                    processingtype: tabskey,
                    logisticsNumber: newlogisticsNum ? newlogisticsNum : null,
                    complaintsId: newcomplainNum ? newcomplainNum : null

                }).then(function (res) {
                    // console.log(res)
                    LoadingModal({ bl: false });
                    if (res.data.status == '10000') {
                        _message3.default.success(res.data.message);
                        _this.querycontent();
                        _this.setState({ Draweroff: false, newZT: '', nextTIME: '', fileList: [], upfileList: [], Remark: '', newlogisticsNum: '', newcomplainNum: '' });
                    } else {
                        _message3.default.error(res.data.message);
                    }
                }).catch(function (error) {
                    LoadingModal({ bl: false });
                    _message3.default.error(error.statusText);
                });
            } else {
                _message3.default.error('状态不能与当前状态一致');
            }
        };

        _this.newLogisticsNum = function (ev) {
            var newlogisticsNum = _this.state.newlogisticsNum;

            newlogisticsNum = ev.target.value.replace(/(^\s*)|(\s*$)/g, "").replace(/[^\w\.\/]/ig, '');
            // console.log(newlogisticsNum)
            _this.setState({ newlogisticsNum: newlogisticsNum });
        };

        _this.newComplainNum = function (ev) {
            var newcomplainNum = _this.state.newcomplainNum;

            newcomplainNum = ev.target.value.replace(/(^\s*)|(\s*$)/g, "").replace(/[^\w\.\/]/ig, '');
            // console.log(newcomplainNum)
            _this.setState({ newcomplainNum: newcomplainNum });
        };

        _this.deleNewesthistory = function (hisid) {
            var id = _this.state.id;
            // console.log(id)

            LoadingModal({ bl: true });
            _ajax2.default.post('/hcm/hcmComplaintHandling/delectHandlingHistory', {
                id: hisid
            }).then(function (res) {
                LoadingModal({ bl: false });
                // console.log(res)
                if (res.data.status == 10000) {
                    _message3.default.success(res.data.message);
                    _this.querycontent();
                    _this.setState({ Draweroff: false });
                } else {
                    _message3.default.error(res.data.message);
                }
            }).catch(function () {
                LoadingModal({ bl: false });
                _message3.default.error('删除失败');
            });
        };

        _this.onClose = function () {
            _this.setState({
                Draweroff: false, newZT: '', nextTIME: '', fileList: [], upfileList: [], Remark: '', newlogisticsNum: '', newcomplainNum: ''
            });
        };

        _this.newAchange = function (value) {
            var _this$state8 = _this.state,
                newPT = _this$state8.newPT,
                op = _this$state8.op;
            // console.log(value);

            _this.setState({ newPT: value.key });
        };

        _this.newsj = function (ev) {
            var newSJ = ev.target.value;
            // newSJ = newSJ.replace(/(^\s*)|(\s*$)/g, "")

            _this.setState({ newSJ: newSJ });
        };

        _this.newsp = function (ev) {
            var _this$state9 = _this.state,
                shopid = _this$state9.shopid,
                newSPD = _this$state9.newSPD;
            var newSP = ev.target.value;

            var SP = newSP.replace(/\s+/g, '');

            // console.log(SP)
            _this.setState({ newSP: SP, newSPD: SP });
        };

        _this.showModal = function () {
            _this.setState({
                NewComplaint: true
            });
        };

        _this.Newcomplaints = function () {
            var _this$state10 = _this.state,
                tabskey = _this$state10.tabskey,
                newPT = _this$state10.newPT,
                newSPD = _this$state10.newSPD,
                newSJ = _this$state10.newSJ,
                shopid = _this$state10.shopid;
            //淘宝天猫
            // console.log(newSPD)

            if (newPT == 'TB' || newPT == 'TM' || newPT == '1688') {
                shopid = '10009';
            }
            newSJ = newSJ.replace(/(^\s*)|(\s*$)/g, "");
            if (newSPD.indexOf('.com') == -1 && newSPD.indexOf('.cn') == -1 && newSPD.indexOf('.net') == -1 && newSPD.indexOf('.vip') == -1 && newSPD.indexOf('.top') == -1 && newSPD.indexOf('.hk') == -1) {
                _message3.default.error('链接格式不正确或者有空白项');
                return;
            }
            if (newSPD.indexOf('tmall.com') != -1 || newSPD.indexOf('taobao.com') != -1 || newSPD.indexOf('tmall.hk') != -1) {
                // console.log(newSPD)
                if (newSPD.indexOf('?') != -1) {
                    var Website = newSPD.split('?')[0];
                    if (newSPD.indexOf('?') != -1 && newSPD.indexOf('&') != -1) {
                        var arr = newSPD.split('?')[1].split('&').map(function (e) {
                            return e.split('=');
                        });
                        var id = '';
                        arr.forEach(function (e, i) {
                            if (e[0] == 'id') {
                                id = e[1];
                            }
                        });

                        newSPD = Website + '?id=' + id;
                        shopid = id;
                        // console.log(newSPD,id)
                    } else {
                        shopid = '10009';
                    }
                }
            } else if (newSPD.indexOf('jd.com') != -1) {
                shopid = newSPD.replace(/[^0-9]/ig, "");
                newSPD = newSPD;
                // console.log(shopid,newSPD)
            } else if (newSPD.indexOf('1688.com') != -1) {
                if (newSPD.indexOf('?') != -1) {
                    newSPD = newSPD.split('?')[0];
                } else {
                    newSPD = newSPD;
                }
                shopid = '1688';
                // console.log(newSPD)
            } else if (newSPD.indexOf('suning.com') != -1 || newSPD.indexOf('gome.com') != -1 || newSPD.indexOf('amazon') != -1 || newSPD.indexOf('vip.com') != -1 || newSPD.indexOf('aliexpress.com') != -1 || newSPD.indexOf('ule.com') != -1 || newSPD.indexOf('mogujie.com') != -1 || newSPD.indexOf('jumeiglobal.com') != -1) {
                if (newSPD.indexOf('?') != -1) {
                    newSPD = newSPD.split('?')[0];
                    // console.log(shopid,newSPD)
                    _this.setState({ newSPD: newSPD });
                }
            } else if (newSPD.indexOf('yangkeduo.com') != -1) {
                if (newSPD.indexOf('?') != -1) {
                    var _Website = newSPD.split('?')[0];
                    if (newSPD.indexOf('?') != -1 && newSPD.indexOf('&') != -1) {
                        var _arr = newSPD.split('?')[1].split('&').map(function (e) {
                            return e.split('=');
                        });
                        var goods_id = '';
                        _arr.forEach(function (e, i) {
                            if (e[0] == 'goods_id') {
                                goods_id = e[1];
                            }
                        });

                        newSPD = _Website + '?goods_id=' + goods_id;
                        // console.log(newSPD)
                        _this.setState({ newSPD: newSPD });
                    }
                }
            }
            // console.log(newPT,newSPD,newSJ)
            if (newPT && newSPD && newSJ) {
                // console.log(newPT,newSJ,newSPD,shopid)
                LoadingModal({ bl: true });
                _ajax2.default.post('/hcm/hcmComplaintHandling/save', {

                    platform: newPT,
                    shopName: newSJ,
                    shoplink: newSPD,
                    shopid: shopid,
                    processingtype: tabskey

                }).then(function (res) {
                    // console.log(res)
                    LoadingModal({ bl: false });
                    if (res.data.status == 10000) {
                        _message3.default.success(res.data.message);

                        _this.setState({ newSJ: '', newSP: '', newPT: '' }, function () {
                            _this.querycontent();
                        });
                    } else {
                        _message3.default.error(res.data.message);
                        _this.setState({ newSJ: '', newSP: '', newPT: '' });
                    }
                }).catch(function () {
                    LoadingModal({ bl: false });
                    _message3.default.error('新增失败');
                });
                _this.setState({
                    NewComplaint: false,
                    selectedRowKeys: [],
                    checkAll: false
                });
            } else {
                _message3.default.error('至少有一项未填');
            }
        };

        _this.Closecomplaints = function () {
            var _this$state11 = _this.state,
                NewComplaint = _this$state11.NewComplaint,
                newSJ = _this$state11.newSJ,
                newSP = _this$state11.newSP;

            _this.setState({
                NewComplaint: false,
                newSJ: '',
                newSP: '',
                newPT: ''
            });
        };

        _this.onuploadVisible = function (zt) {
            _this.setState({ uploadVisible: zt, fileList: [] });
        };

        _this.propsUpload = function () {
            var fileList = _this.state.fileList;

            return {
                action: '/hcm/hcmComplaintHandling/readExcelFile',
                accept: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                onRemove: function onRemove(file) {
                    // console.log(file)
                    _this.setState(function (_ref3) {
                        var fileList = _ref3.fileList;

                        var index = fileList.indexOf(file);
                        var newFileList = fileList.slice();
                        newFileList.splice(index, 1);
                        return {
                            fileList: newFileList
                        };
                    });
                },
                beforeUpload: function beforeUpload(file) {
                    // console.log(file)
                    // this.setState(() => ({
                    //     fileList: [file],
                    // }));
                    _this.setState({ fileList: [file] });
                    return false;
                },
                fileList: fileList
            };
        };

        _this.handleUpload = function () {
            var _this$state12 = _this.state,
                fileList = _this$state12.fileList,
                tabskey = _this$state12.tabskey,
                selectedRowKeys = _this$state12.selectedRowKeys;

            var formData = new FormData();
            fileList.forEach(function (file) {
                formData.append('file', file);
                formData.append('processingtype', tabskey);
            });
            // console.log(formData)

            // this.setState({
            //     uploading: true,
            // });
            LoadingModal({ bl: true });
            (0, _ajax2.default)({
                method: 'post',
                url: '/hcm/hcmComplaintHandling/readExcelFile',
                headers: { 'Content-Type': 'multipart/form-data' },
                data: formData,
                onUploadProgress: function onUploadProgress(progressEvent) {
                    var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);

                    _this.setState({
                        percent: percentCompleted
                    });
                }
            }).then(function (rep) {
                // console.log(fileList)
                LoadingModal({ bl: false });
                if (rep.data.status == '10000') {

                    // console.log(rep)
                    _message3.default.success(rep.data.message);
                } else {
                    _message3.default.warning(rep.data.message);
                    // console.log(rep)
                }
                _this.setState({
                    fileList: [],
                    uploading: false,
                    uploadVisible: false,
                    selectedRowKeys: [],
                    checkAll: false
                }, function () {
                    _this.querycontent();
                });
            }).catch(function () {
                LoadingModal({ bl: false });
                _this.setState({
                    uploading: false
                });
                _message3.default.error('upload failed.');
            });
        };

        _this.nexttime = function (value, dateString) {
            var nextTIME = _this.state.nextTIME;
            // console.log(dateString)

            _this.setState({ nextTIME: dateString });
        };

        _this.onOk = function (value) {
            // console.log('onOk: ', value);
        };

        _this.disabledDate = function (current) {
            // Can not select days before today and today
            // console.log(moment().endOf('day'),current)
            return current && current < moment().endOf('day');
        };

        _this.range = function (start, end) {
            var result = [];
            for (var i = start; i < end; i++) {
                result.push(i);
            }
            return result;
        };

        _this.handleCancel = function () {
            return _this.setState({ previewVisible: false });
        };

        _this.handlePreview = function (file) {
            // console.log(file.thumbUrl,file.url)
            _this.setState({
                previewImage: file.url || file.thumbUrl,
                previewVisible: true
            });
        };

        _this.handleChange = function (info) {
            // console.log(fileList)
            // this.setState({ fileList })
            // console.log(info)
            var type = 'image/jpeg image/jpg image/png';
            var iStype = info.file.type.length ? type.indexOf(info.file.type) == -1 ? false : true : false;
            if (info.file.size / 1024 / 1024 < 10 && iStype) {
                _this.setState({
                    fileList: info.fileList
                });
            }
        };

        _this.ImgUpload = function (file) {
            // console.log(file)
            var isLt10M = file.size / 1024 / 1024 < 10;
            var type = 'image/jpeg image/jpg image/png';
            var iStype = file.type.length ? type.indexOf(file.type) == -1 ? false : true : false;

            if (!isLt10M) {
                _message3.default.error('图片不能大于10MB!');
            }
            if (!iStype) {
                _message3.default.error('支持图片格式jpeg，jpg，png请重新选择');
            }

            return isLt10M && iStype;
        };

        _this.changePagination = function (page, pageSize) {
            // console.log(page, pageSize)
            var _this$state13 = _this.state,
                checkAll = _this$state13.checkAll,
                selectedRowKeys = _this$state13.selectedRowKeys;


            _this.setState({ pageNo: page, pageSize: pageSize, selectedRowKeys: [] }, function () {
                _this.querycontent();
                if (checkAll) {
                    _this.DelecheckAll();
                    _this.setState({ checkAll: true });
                }
            });
        };

        _this.onPaginationSize = function (page, pageSize) {
            var _this$state14 = _this.state,
                checkAll = _this$state14.checkAll,
                selectedRowKeys = _this$state14.selectedRowKeys;
            // console.log(page,pageSize)

            _this.setState({ pageNo: page, pageSize: pageSize, selectedRowKeys: [] }, function () {
                _this.querycontent();
                // if (checkAll) {
                //     this.DelecheckAll()
                //     this.setState({checkAll:true})
                // }
            });
        };

        _this.handleComImageClick = function (params) {
            // console.log(params)
            (0, _ImgModal.ImgModal)(params);
        };

        _this.openLogistics = function (ev) {
            var evBrother = ev.target.parentNode.previousElementSibling;
            var me = ev.target;
            if (evBrother.className == 'ant-timeline logisticsContent loglist') {
                evBrother.className = 'ant-timeline logisticsContent loglist active';
                me.innerHTML = '收起';
                me.nextElementSibling.children[0].className = '';
                me.nextElementSibling.children[1].className = 'active';
            } else {
                evBrother.className = 'ant-timeline logisticsContent loglist';
                me.innerHTML = '展开';
                me.nextElementSibling.children[0].className = 'active';
                me.nextElementSibling.children[1].className = '';
            }
        };

        _this.state = (_this$state15 = {
            totalArr: [0, 0, 0, 0],
            tabskey: '1',
            Identity: '', //用户身份信息
            size: 'large',
            checkAll: false,
            selectedRowKeys: [],
            Draweroff: false, //抽屉是否可见
            NewComplaint: false, //新增对话框是否可见
            uploadVisible: false,
            platformData: [],
            endValue: null, //下次跟进时间
            endOpen: false, //下次跟进时间
            startValue: null,
            newPT: '', //商家平台
            newSJ: '', //商家名称
            newSP: '', //商品链接
            shopid: '10003', //商品ID，10003为默认不存在商品ID唤醒对话框
            newSPD: '', //新增商品短连接
            querySJ: '', //查询商家名称
            queryPT: '', //查询商家平台
            queryZT: '', //查询状态
            queryTIMEp: '', //查询时间上个
            queryTIMEn: '', //查询时间下个
            querybtnSJ: '', //查询商家名称缓存
            querybtnPT: '', //查询商家平台缓存
            querybtnZT: '', //查询状态缓存
            querybtnTIMEp: '', //查询时间上个缓存
            querybtnTIMEn: '', //查询时间下个缓存
            pageNumber: 1, //页码
            pageNo: 1, //页码
            pageSize: 10, //数量
            SCdata: [], //table数据
            shopname: '', //抽屉店铺名
            status: '', //抽屉店铺状态
            tableStatus: '', //列表状态
            Remark: '', //备注
            statusAll1: ['邮件待发送', '邮件已发送', '邮件已驳回', '邮件已回复', '完结'],
            statusAll2: ['购买中', '已购买，发货中', '卖家已发货', '未发货：申请退款中', '未发货：举报中', '退款完成', '发错货：申请退/换货中', '已到货，报告制作中', '报告已提交平台处理', '完结'],
            statusAll3: ['通知进行中', '已通知待整改', '卖家拒绝整改', '卖家已整改', '完结'],
            statusAll4: ['举报中', '已举报', '举报成功', '举报失败', '完结'],
            shoplink: '', //抽屉店铺链接
            processing_times: '', //抽屉第几次处理
            id: '', //数据库ID
            Shopicon: null, //抽屉平台图标
            newZT: '', //抽屉添加时状态
            nextTIME: '', //新增历史记录下次跟进时间
            previewVisible: false, //shanchuan
            previewImage: '',
            fileList: [],
            upfileList: [],
            totalElements: 0, //列表总条数
            idAll: [], //删除ID数组
            historyList: [], //历史记录数组
            uploading: false
        }, _defineProperty(_this$state15, 'fileList', []), _defineProperty(_this$state15, 'newlogisticsNum', ''), _defineProperty(_this$state15, 'newcomplainNum', ''), _defineProperty(_this$state15, 'platform', ''), _this$state15);
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.platform();
            this.querycontent();
            this.getinfo();
        }
        //tab栏切换

        //获取用户身份信息

        //获取平台信息


        //搜索商家名称change

        //搜索下拉框状态选择change

        //时间选择框change

        //平台change


        //查询按钮

        //内容勾选框

        //取消勾选全部

        //勾选全部
        // DelecheckAll = (status) =>{
        //     let {selectedRowKeys,SCdata,pageNo,pageSize} = this.state;
        //     selectedRowKeys = [];
        //     for (let i = pageSize*(pageNo-1); i < pageSize*pageNo; i++) {
        //         selectedRowKeys.push(i+1)
        //     }
        //     console.log(selectedRowKeys)
        //     this.setState({selectedRowKeys,checkAll:status})
        // }

        //批量删除对话框


        //点击查看气泡hidden


        ///打开抽屉

        //抽屉投诉状态处理

        // 抽屉备注

        //历史记录新增确定

        //快递单号input change事件

        //投诉单号input change事件

        //最新历史记录删除

        //历史记录获取
        // Drawertabschange = (key) => {
        //     console.log(key);
        //     let {id,historyList} = this.state;
        //     // if (key == '2') {
        //         LoadingModal({bl:true})
        //         ajax.get('/hcm/hcmComplaintHandling/selectHistoryList', {
        //             params: {
        //                 handlingid:id
        //             }
        //         }).then(res => {
        //             console.log(res)
        //             LoadingModal({bl:false})
        //             if(res.data.status == 10000){
        //                 historyList = res.data.data.list
        //                 console.log(historyList)
        //                 this.setState({historyList})
        //             }

        //         })
        //         .catch(() => {
        //             LoadingModal({bl:false})
        //             message.error('获取信息失败');
        //         });
        //     // }
        // }
        ///关闭抽屉


        //新增对话框
        //--新增平台下拉change

        //打开新增对话框

        //新增确定按钮事件

        //关闭对话框事件


        //批量导入按钮

        //

        //批量导入导入按钮


        //未来时间选择


        //图片上传


        //页码跳转

        //查看图片大图

        //展开关闭物流记录

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
//# sourceMappingURL=345_1504d26765c8f22010cc.js.map