(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[293],{

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

/***/ "./app/widget/index/Dealers/ActivityInspectionPublicity/main.js":
/*!**********************************************************************!*\
  !*** ./app/widget/index/Dealers/ActivityInspectionPublicity/main.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Dealers/ActivityInspectionPublicity/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ImgModal = __webpack_require__(/*! ../../../components/ImgModal/ImgModal */ "./app/widget/components/ImgModal/ImgModal.js");

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActivityInspectionPublicity = function (_React$Component) {
  _inherits(ActivityInspectionPublicity, _React$Component);

  function ActivityInspectionPublicity(props) {
    _classCallCheck(this, ActivityInspectionPublicity);

    var _this = _possibleConstructorReturn(this, (ActivityInspectionPublicity.__proto__ || Object.getPrototypeOf(ActivityInspectionPublicity)).call(this, props));

    _this.formatTime = function (timestamp) {
      var showTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var date = new Date(timestamp);
      var str = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
      if (showTime) {
        str += ' ' + String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');
      }
      return str;
    };

    _this.getInspectPublicList = function (params) {
      console.log(params.date);
      var ser_date = params.date;
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/PublicInspectList',
        data: {
          pageSize: params.pageSize,
          pageNum: params.pageNum,
          ser_date: params.date,
          shop_ids: params.shop_id === 'all' ? '' : params.shop_id
        }
      }).then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status;

        _this.setState({
          inspectInfoList: data.list,
          pagination: Object.assign({}, _this.state.pagination, { count: data.count }),
          ser_date: ser_date
        });
      }).catch(function (err) {});
    };

    _this.getShopNum = function (date) {
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/PublicInspectShops',
        data: {
          ser_date: date
        }
      }).then(function (res) {
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status;

        _this.setState({
          // sevenActivity: Object.assign({}, this.state.sevenActivity, {
          //   [date]: data
          // })
          shopBtnList: data
        });
      }).catch(function (err) {});
    };

    _this.switchShopBtn = function (id) {
      var ser_date = _this.state.ser_date;

      _this.setState({
        currentShopBtn: id
      });
      _this.getInspectPublicList(_extends({}, _this.state.pagination, {
        date: _this.state.currentDate === '' ? ser_date : _this.state.currentDate,
        shop_id: id === 'all' ? 'all' : '\'' + id + '\''
      }));
    };

    _this.switchActivity = function (date, index, type) {
      _this.setState({
        selectedIndex: index,
        currentDate: date
      });
      _this.getShopNum(date);
      _this.getInspectPublicList(_extends({
        date: date,
        shop_ids: _this.state.currentShopBtn
      }, _this.state.pagination));
    };

    _this.getInspectPublicSeven = function () {
      (0, _ajax2.default)({
        method: 'post',
        url: '/hcm/campgign/InspectPublicSeven'
      }).then(function (res) {
        var _res$data3 = res.data,
            data = _res$data3.data,
            status = _res$data3.status;

        var list = data.sort(function (a, b) {
          return a.my_date - b.my_date;
        });
        _this.setState({
          sevenData: list
        });
      }).catch(function (err) {});
    };

    _this.handleLoadMoreClick = function () {
      var _this$state = _this.state,
          pagination = _this$state.pagination,
          currentDate = _this$state.currentDate,
          currentShopBtn = _this$state.currentShopBtn;

      _this.setState({
        pagination: Object.assign({}, pagination, {
          pageNum: pagination.pageNum + 1
        })
      }, function () {
        _this.getInspectPublicList(_extends({
          date: currentDate === '' ? _this.formatTime(Date.now()) : currentDate,
          shop_id: currentShopBtn === 'all' ? 'all' : '\'' + currentShopBtn + '\''
        }, _this.state.pagination));
      });
    };

    _this.handleImgClick = function (params) {
      (0, _ImgModal.ImgModal)(params);
    };

    _this.moreButton = function () {
      _this.setState({
        moreButton: !_this.state.moreButton
      });
    };

    _this.state = {
      selectedIndex: 6,
      moreButton: false,
      sevenData: [],
      currentShopBtn: 'all',
      shopBtnList: [],
      inspectInfoList: [],
      pagination: {
        pageNum: 1,
        pageSize: 10
      },
      ser_date: '',
      // sevenActivity: {},  // 缓存每日活动店铺对象信息
      // sevenProductInfo: {}, // 缓存每日活动产品对象信息
      // productInfoList: [],    // 当前产品信息对象列表
      currentDate: '' // 当前选中日期
      // priceImgModal: false,       // 标价截图模态框
      // dealPriceImgModal: false,   // 成交价截图模态框
      // otherPriceImgModal: false   // 其他截图模态框
    };
    return _this;
  }

  _createClass(ActivityInspectionPublicity, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // 先拿日期
      this.getInspectPublicSeven();
      // 再获取店铺
      this.getShopNum((0, _moment2.default)().subtract(1, 'd').format('YYYY-MM-DD'));
      // 最后查产品列表
      this.getInspectPublicList(_extends({
        date: this.formatTime((0, _moment2.default)().subtract(1, 'd').format('YYYY-MM-DD')),
        shop_id: this.state.currentShopBtn
      }, this.state.pagination));
    }
    // 获取稽查公示列表

    // 获取不合格店铺数量

    // 切换店铺

    // 切换日期对应的数据

    // 获取稽查公示7日不合格数量

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(_tpl2.default, { that: this });
    }
  }]);

  return ActivityInspectionPublicity;
}(React.Component);

exports.default = ActivityInspectionPublicity;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=293_b9ba45078471c9875c38.js.map