(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./app/widget/components/ActivityInspectCard/index.js":
/*!************************************************************!*\
  !*** ./app/widget/components/ActivityInspectCard/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@3.10.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _tag = __webpack_require__(/*! antd/es/tag */ "./node_modules/_antd@3.10.1@antd/es/tag/index.js");

var _tag2 = _interopRequireDefault(_tag);

var _divider = __webpack_require__(/*! antd/es/divider */ "./node_modules/_antd@3.10.1@antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/tag/style/css */ "./node_modules/_antd@3.10.1@antd/es/tag/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "./node_modules/_antd@3.10.1@antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _ImgModal = __webpack_require__(/*! ../ImgModal/ImgModal */ "./app/widget/components/ImgModal/ImgModal.js");

__webpack_require__(/*! ./index.less */ "./app/widget/components/ActivityInspectCard/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORMAT_TIME = 'YYYY-MM-DD HH:mm:ss';
var imgStyle = {
  width: '72px',
  height: '72px',
  borderRadius: '3px',
  marginLeft: '11px',
  cursor: 'pointer'
};
var tagStyle = {
  'boxSizing': 'border-box',
  'height': '32px',
  'lineHeight': '32px',
  'padding': '0 17px',
  'fontSize': '14px'
};

var ActivityInspectCard = function ActivityInspectCard(props) {
  var _props$infos = props.infos,
      shop_name = _props$infos.shop_name,
      start_time = _props$infos.start_time,
      end_time = _props$infos.end_time,
      product_name = _props$infos.product_name,
      product_url = _props$infos.product_url,
      apply_price = _props$infos.apply_price,
      actual_price = _props$infos.actual_price,
      campaign_type = _props$infos.campaign_type,
      play_content = _props$infos.play_content,
      gift_situation = _props$infos.gift_situation,
      screenshot_b = _props$infos.screenshot_b,
      screenshot_c = _props$infos.screenshot_c,
      screenshot_o = _props$infos.screenshot_o,
      campaignExamine = _props$infos.campaignExamine,
      brand_review_username = _props$infos.brand_review_username,
      brand_review_view = _props$infos.brand_review_view,
      brand_review = _props$infos.brand_review,
      inspect_id = _props$infos.inspect_id,
      id = _props$infos.id,
      system_review = _props$infos.system_review,
      system_review_explain = _props$infos.system_review_explain,
      _isShowInspectInput = _props$infos._isShowInspectInput,
      _index = _props$infos._index,
      now_time = _props$infos.now_time;

  var sshot_b = JSON.parse(screenshot_b);
  var sshot_c = JSON.parse(screenshot_c);
  var sshot_o = JSON.parse(screenshot_o);
  var cardTitle = React.createElement(
    _row2.default,
    null,
    React.createElement(
      _col2.default,
      { span: 12, className: 'text-overflow-hidden' },
      '\u4EA7\u54C1\u4FE1\u606F\uFF1A',
      product_name
    ),
    React.createElement(
      _col2.default,
      { span: 12 },
      '\u4EA7\u54C1\u94FE\u63A5\uFF1A',
      React.createElement(
        'a',
        { href: product_url, target: '_blank' },
        product_url
      )
    )
  );
  return React.createElement(
    'div',
    { className: 'activity-inspect-card' },
    React.createElement(
      _row2.default,
      { className: 'head' },
      React.createElement(
        _col2.default,
        { span: 12, className: 'text-overflow-hidden' },
        '\u5E97\u94FA\u540D\u79F0\uFF1A',
        shop_name
      ),
      React.createElement(
        _col2.default,
        { span: 12 },
        '\u6D3B\u52A8\u65F6\u95F4\uFF1A',
        (0, _moment2.default)(start_time).format(FORMAT_TIME) + '~' + (0, _moment2.default)(end_time).format(FORMAT_TIME)
      )
    ),
    React.createElement(
      _card2.default,
      { title: cardTitle },
      React.createElement(
        _row2.default,
        { className: 'activity-baseinfo' },
        React.createElement(
          _col2.default,
          { span: 8 },
          '\u6D3B\u52A8\u6807\u4EF7\uFF1A',
          '\xA5' + apply_price
        ),
        React.createElement(
          _col2.default,
          { span: 8, className: 'text-overflow-hidden' },
          '\u6D3B\u52A8\u7C7B\u578B\uFF1A',
          campaign_type
        ),
        React.createElement(
          _col2.default,
          { span: 8, className: 'text-overflow-hidden' },
          '\u8D60\u54C1\u60C5\u51B5\uFF1A',
          gift_situation
        ),
        React.createElement(
          _col2.default,
          { span: 8 },
          '\u5B9E\u9645\u6210\u4EA4\u4EF7\uFF1A',
          '\xA5' + actual_price
        ),
        React.createElement(
          _col2.default,
          { span: 8, className: 'text-overflow-hidden' },
          '\u73A9\u6CD5\u8BF4\u660E\uFF1A',
          play_content
        )
      ),
      React.createElement(_divider2.default, { dashed: true }),
      React.createElement(
        _row2.default,
        { className: 'screenshot', type: 'flex' },
        React.createElement(
          _col2.default,
          { span: 8 },
          React.createElement(
            'span',
            null,
            '\u6807\u4EF7\u622A\u56FE\uFF1A'
          ),
          !!sshot_b ? sshot_b.map(function (value, index) {
            return React.createElement('img', {
              src: value,
              key: value,
              style: imgStyle,
              onClick: function onClick() {
                props.imgClick({ bl: true, urls: sshot_b, index: index, close: true });
              }
            });
          }) : null
        ),
        React.createElement(
          _col2.default,
          { span: 8 },
          React.createElement(
            'span',
            null,
            '\u6210\u4EA4\u4EF7\u622A\u56FE\uFF1A'
          ),
          !!sshot_c ? sshot_c.map(function (value, index) {
            return React.createElement('img', {
              src: value,
              key: value,
              style: imgStyle,
              onClick: function onClick() {
                props.imgClick({ bl: true, urls: sshot_c, index: index, close: true });
              }
            });
          }) : null
        ),
        React.createElement(
          _col2.default,
          { span: 8 },
          React.createElement(
            'span',
            null,
            '\u5176\u4ED6\u622A\u56FE\uFF1A'
          ),
          !!sshot_o ? sshot_o.map(function (value, index) {
            return !!value ? React.createElement('img', {
              src: value,
              key: value,
              style: imgStyle,
              onClick: function onClick() {
                props.imgClick({ bl: true, urls: sshot_o, index: index, close: true });
              }
            }) : null;
          }) : null
        ),
        React.createElement(
          _col2.default,
          { span: 8 },
          '\u7CFB\u7EDF\u7A3D\u67E5\u7ED3\u679C\uFF1A',
          !!system_review ? system_review === '合格' ? React.createElement(
            _tag2.default,
            { style: tagStyle, color: 'green' },
            '\u5408\u683C'
          ) : React.createElement(
            _tag2.default,
            { style: tagStyle, color: 'red' },
            '\u4E0D\u5408\u683C'
          ) : null
        ),
        React.createElement(
          _col2.default,
          { span: 8, className: 'text-overflow-hidden' },
          '\u7ED3\u679C\u8BF4\u660E\uFF1A',
          system_review_explain
        )
      ),
      !!brand_review ? React.createElement(
        React.Fragment,
        null,
        React.createElement(_divider2.default, { dashed: true }),
        React.createElement(
          _row2.default,
          null,
          React.createElement(
            _col2.default,
            { span: 8 },
            '\u7A3D\u67E5\u7ED3\u679C\uFF1A',
            brand_review === '合格' ? React.createElement(
              _tag2.default,
              {
                style: tagStyle,
                color: 'green' },
              '\u5408\u683C'
            ) : React.createElement(
              _tag2.default,
              {
                style: tagStyle,
                color: 'red' },
              '\u4E0D\u5408\u683C'
            )
          ),
          React.createElement(
            _col2.default,
            { span: 8 },
            '\u7A3D\u67E5\u4EBA\uFF1A',
            brand_review_username
          ),
          React.createElement(
            _col2.default,
            { span: 8 },
            '\u7A3D\u67E5\u610F\u89C1\uFF1A',
            brand_review_view
          )
        )
      ) : null
    ),

    // (
    //   // 活动期间中 三天之内 的未稽查 活动可以稽查
    //   !brand_review &&
    //   !_isShowInspectInput &&
    //   moment(props.startTime).valueOf() > moment(now_time).subtract(2, 'd').valueOf() &&
    //   moment(props.startTime).valueOf() < moment(now_time).valueOf() &&
    //   moment(now_time).valueOf() > moment(start_time).valueOf() &&
    //   moment(now_time).valueOf() < moment(end_time).valueOf()
    // )
    //   ||

    // 当天或者三天之内 在活动期间内 的活动可以稽查
    !brand_review && !_isShowInspectInput && (
    // 三天之内的条件
    (0, _moment2.default)(props.startTime).valueOf() > (0, _moment2.default)(now_time).subtract(2, 'd').valueOf() && (0, _moment2.default)(props.startTime).valueOf() < (0, _moment2.default)(now_time).valueOf() ||
    // 当天的条件
    (0, _moment2.default)(props.startTime).format('YYYY-MM-DD') === (0, _moment2.default)(now_time).format('YYYY-MM-DD')) &&
    // 活动进行中的条件
    (0, _moment2.default)(now_time).valueOf() > (0, _moment2.default)(start_time).valueOf() && (0, _moment2.default)(now_time).valueOf() < (0, _moment2.default)(end_time).valueOf() ? React.createElement(
      'div',
      { style: { textAlign: 'right', marginTop: '20px' } },
      React.createElement(
        _button2.default,
        {
          type: 'primary',
          style: { backgroundColor: '#f00', borderColor: '#f00' },
          onClick: props.toggleClick.bind(undefined, true, _index)
        },
        '\u6211\u8981\u4ECB\u5165'
      )
    ) : null,
    _isShowInspectInput ? React.createElement(
      _row2.default,
      { style: { marginTop: '20px' } },
      React.createElement(
        _col2.default,
        { span: 8 },
        '\u7A3D\u67E5\u7ED3\u679C\uFF1A',
        React.createElement(
          'button',
          {
            className: props.inspectResultBtn[_index] === 0 ? 'qualify customeBtn' : 'customeBtn',
            onClick: props.inspectOption.bind(undefined, '合格', _index) },
          '\u5408\u683C'
        ),
        '\xA0\xA0',
        React.createElement(
          'button',
          {
            className: props.inspectResultBtn[_index] === 1 ? 'disQualify customeBtn' : 'customeBtn',
            onClick: props.inspectOption.bind(undefined, '不合格', _index) },
          '\u4E0D\u5408\u683C'
        )
      ),
      React.createElement(
        _col2.default,
        { span: 8 },
        '\u7A3D\u67E5\u610F\u89C1\uFF1A',
        React.createElement(_input2.default, {
          placeholder: '\u8BF7\u8F93\u5165',
          style: { width: '242px' },
          onChange: props.inspectOption.bind(undefined, 'input', _index)
        })
      ),
      React.createElement(
        _col2.default,
        { span: 8 },
        React.createElement(
          _button2.default,
          {
            type: 'primary',
            style: { backgroundColor: '#CFA972', borderColor: '#CFA972' },
            onClick: props.confirmBtn.bind(undefined, {
              type: 'bmc',
              id: inspect_id,
              cam_pro_id: id
            }, _index)
          },
          '\u786E\u5B9A'
        ),
        '\xA0\xA0',
        React.createElement(
          _button2.default,
          { onClick: props.toggleClick.bind(undefined, false, _index) },
          '\u53D6\u6D88'
        )
      )
    ) : null
  );
};

exports.default = ActivityInspectCard;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/ActivityInspectCard/index.less":
/*!**************************************************************!*\
  !*** ./app/widget/components/ActivityInspectCard/index.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

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

/***/ "./app/widget/index/Brand/ActivityInspect/tpl.js":
/*!*******************************************************!*\
  !*** ./app/widget/index/Brand/ActivityInspect/tpl.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@3.10.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@3.10.1@antd/es/tabs/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _ActivityInspectCard = __webpack_require__(/*! ../../../components/ActivityInspectCard */ "./app/widget/components/ActivityInspectCard/index.js");

var _ActivityInspectCard2 = _interopRequireDefault(_ActivityInspectCard);

var _moment = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;

var Tpl = (0, _That2.default)(function (that) {
  var _that$state = that.state,
      activityNums = _that$state.activityNums,
      detailList = _that$state.detailList,
      isShowInspectInput = _that$state.isShowInspectInput,
      inspectResultBtn = _that$state.inspectResultBtn,
      start_time = _that$state.start_time,
      shop_name = _that$state.shop_name,
      currentTab = _that$state.currentTab;


  var clearIconStyle = {
    width: '14px',
    height: '14px',
    opacity: 0.25,
    cursor: 'pointer'
  };

  var searchBox = React.createElement(
    'div',
    { className: 'search-wrapper' },
    React.createElement(
      _row2.default,
      { className: 'conditions' },
      React.createElement(
        _col2.default,
        { span: 7 },
        React.createElement(
          'label',
          null,
          '\u5E97\u94FA\u540D\u79F0\uFF1A',
          React.createElement(_input2.default, {
            value: shop_name,
            placeholder: '\u8BF7\u8F93\u5165',
            style: { width: '242px' },
            onChange: that.handleInputChange,
            suffix: !!shop_name ? React.createElement(_icon2.default, {
              onClick: that.handleClearIconClick,
              type: 'close-circle',
              style: clearIconStyle }) : null
          })
        )
      ),
      React.createElement(
        _col2.default,
        { span: 7 },
        React.createElement(
          'label',
          null,
          '\u7CFB\u7EDF\u7ED3\u679C\uFF1A',
          React.createElement(
            _select2.default,
            {
              defaultValue: '',
              style: { width: '242px' },
              getPopupContainer: function getPopupContainer(trigger) {
                return trigger.parentNode;
              },
              onChange: that.handleChange.bind(undefined, 'sys_result') },
            React.createElement(
              Option,
              { value: '' },
              '\u5168\u90E8'
            ),
            React.createElement(
              Option,
              { value: '\u5408\u683C' },
              '\u5408\u683C'
            ),
            React.createElement(
              Option,
              { value: '\u4E0D\u5408\u683C' },
              '\u4E0D\u5408\u683C'
            )
          )
        )
      ),
      React.createElement(
        _col2.default,
        { span: 7 },
        React.createElement(
          'div',
          null,
          '\u6D3B\u52A8\u65E5\u671F\uFF1A',
          React.createElement(_datePicker2.default, {
            defaultValue: (0, _moment2.default)(),
            getCalendarContainer: function getCalendarContainer(trigger) {
              return trigger.parentNode;
            },
            format: 'YYYY-MM-DD',
            style: { width: '242px' },
            onChange: that.handleChange.bind(undefined, 'start_time')
          })
        )
      ),
      React.createElement(
        _col2.default,
        { span: 3 },
        React.createElement(
          _button2.default,
          { style: { color: '#1890ff', borderColor: '#1890ff' }, onClick: that.handleSearchClick },
          '\u67E5\u8BE2'
        )
      )
    ),
    React.createElement(
      _row2.default,
      null,
      React.createElement(
        _tabs2.default,
        { activeKey: currentTab, onChange: that.handleTabChange },
        React.createElement(_tabs2.default.TabPane, { tab: '\u5168\u90E8\uFF08' + (activityNums.act_count + activityNums.reject_count || 0) + '\uFF09', key: '1' }),
        React.createElement(_tabs2.default.TabPane, { tab: '\u5F85\u7A3D\u67E5\uFF08' + (activityNums.act_count || 0) + '\uFF09', key: '2' }),
        React.createElement(_tabs2.default.TabPane, { tab: '\u5DF2\u7A3D\u67E5\uFF08' + (activityNums.reject_count || 0) + '\uFF09', key: '3' })
      )
    )
  );
  return React.createElement(
    _Layout2.default,
    {
      title: '\u6D3B\u52A8\u7A3D\u67E5',
      breadcrumbList: ['活动信息', '活动稽查'],
      className: 'activity-inspect-wrapper',
      linkList: ['', '']
    },
    searchBox,
    detailList.length === 0 ? React.createElement(
      'div',
      { style: { textAlign: 'center', fontSize: '16px', margin: '50px' } },
      React.createElement(
        'span',
        null,
        '\u6682\u65E0\u6570\u636E'
      )
    ) : detailList.map(function (value, index) {
      return React.createElement(
        'div',
        { className: 'detail', key: value.id },
        React.createElement(_ActivityInspectCard2.default, {
          infos: _extends({}, value, { _index: index }),
          isShowInspectInput: isShowInspectInput,
          toggleClick: that.handleComToggleClick,
          inspectOption: that.handleComInspectInfo,
          confirmBtn: that.handleComSubmitResult,
          inspectResultBtn: inspectResultBtn,
          imgClick: that.handleComImageClick,
          startTime: start_time
        })
      );
    })
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=73_98a2327f558c01bb9024.js.map