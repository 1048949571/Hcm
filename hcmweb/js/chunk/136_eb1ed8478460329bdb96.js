(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[136],{

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

/***/ "./app/widget/index/SetComplaintReport/tpl.js":
/*!****************************************************!*\
  !*** ./app/widget/index/SetComplaintReport/tpl.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = __webpack_require__(/*! antd/es/card */ "./node_modules/_antd@3.10.1@antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _cascader = __webpack_require__(/*! antd/es/cascader */ "./node_modules/_antd@3.10.1@antd/es/cascader/index.js");

var _cascader2 = _interopRequireDefault(_cascader);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

__webpack_require__(/*! antd/es/card/style/css */ "./node_modules/_antd@3.10.1@antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/cascader/style/css */ "./node_modules/_antd@3.10.1@antd/es/cascader/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

var _That = __webpack_require__(/*! ../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tpl = (0, _That2.default)(function (that) {
  var _that$state = that.state,
      reportList = _that$state.reportList,
      alreadyReportList = _that$state.alreadyReportList,
      complatinAccountList = _that$state.complatinAccountList,
      platform = _that$state.platform;


  var cardTitle = function cardTitle(value, index) {
    return React.createElement(
      'div',
      { className: 'card-title' },
      React.createElement(
        'div',
        null,
        '\u62A5\u8868\u540D\u79F0\uFF1A',
        React.createElement(_input2.default, { value: value.name, onChange: that.handleInputChange.bind(that, index), style: { width: '440px' }, placeholder: '\u8BF7\u8F93\u5165' })
      ),
      React.createElement(
        'div',
        { className: 'operation' },
        React.createElement(
          'span',
          { onClick: that.handleSaveReport.bind(that, value, index) },
          '\u4FDD\u5B58'
        ),
        React.createElement(
          'span',
          { onClick: that.handleDeleteReport.bind(that, index) },
          '\u53D6\u6D88'
        )
      )
    );
  };

  var alreadyCardTitle = function alreadyCardTitle(value, index) {
    return React.createElement(
      'div',
      { className: 'card-title' },
      React.createElement(
        'div',
        null,
        '\u62A5\u8868\u540D\u79F0\uFF1A',
        value._isEdit ? React.createElement(_input2.default, {
          value: value.report_name,
          onChange: that.handleEditInputChange.bind(that, index),
          style: { width: '440px' }, placeholder: '\u8BF7\u8F93\u5165' }) : value.report_name
      ),
      React.createElement(
        'div',
        { className: 'operation' },
        value._isEdit ? React.createElement(
          'span',
          { onClick: that.handleSaveReport.bind(that, value, index) },
          '\u63D0\u4EA4'
        ) : React.createElement(
          'span',
          { onClick: that.handleEdit.bind(that, index, true) },
          '\u7F16\u8F91'
        ),
        value._isEdit ? React.createElement(
          'span',
          { onClick: that.handleEdit.bind(that, index, false) },
          '\u53D6\u6D88'
        ) : React.createElement(
          'span',
          { onClick: that.handleDeleteAlreadyComplaintReport.bind(that, value.report_id) },
          '\u5220\u9664'
        )
      )
    );
  };

  return React.createElement(
    _Layout2.default,
    {
      className: 'set-complaint-report-wrapper',
      linkList: ['', 1, ''],
      history: that.props.history,
      breadcrumbList: ['维权报表', (platform === 'taobao' ? '淘宝' : '1688') + '\u7EF4\u6743\u62A5\u8868', '设置报表'] },
    React.createElement(
      'section',
      { className: 'add-report', onClick: that.handleAddReport },
      React.createElement(_icon2.default, { type: 'plus' }),
      React.createElement(
        'span',
        null,
        '\u65B0\u589E\u6295\u8BC9\u62A5\u8868'
      )
    ),
    React.createElement(
      'section',
      { className: 'main-wrapper' },
      reportList.map(function (val, idx) {
        return React.createElement(
          _card2.default,
          { title: cardTitle(val, idx), key: val.id },
          React.createElement(
            _row2.default,
            null,
            React.createElement(
              _col2.default,
              { span: 2 },
              React.createElement(
                'span',
                null,
                '\u77E5\u8BC6\u4EA7\u6743\uFF1A'
              )
            ),
            React.createElement(
              _col2.default,
              { span: 22 },
              val.list.map(function (v, i) {
                return React.createElement(
                  'div',
                  { key: v + i, className: 'knowledgeright-item' },
                  React.createElement(_cascader2.default, {
                    getPopupContainer: function getPopupContainer(trigger) {
                      return trigger.parentNode;
                    },
                    style: { width: '440px' },
                    onChange: that.handleCascaderChange.bind(that, idx, i, 'add'),
                    value: v,
                    options: complatinAccountList,
                    loadData: that.handleLoadData,
                    placeholder: '\u8BF7\u9009\u62E9' }),
                  '\xA0\xA0\xA0',
                  React.createElement(_icon2.default, {
                    type: 'minus-circle',
                    style: { cursor: 'pointer' },
                    onClick: that.handleDeleteKnowledgeRight.bind(that, idx, i) })
                );
              }),
              React.createElement(
                'div',
                { className: 'add-knowledge-right', onClick: that.handleAddKnowledgeRight.bind(that, idx) },
                React.createElement(_icon2.default, { type: 'plus' }),
                React.createElement(
                  'span',
                  null,
                  '\u6DFB\u52A0\u77E5\u8BC6\u4EA7\u6743'
                )
              )
            )
          )
        );
      })
    ),
    React.createElement(
      'section',
      { className: 'report-list' },
      alreadyReportList.map(function (val, idx) {
        return React.createElement(
          _card2.default,
          { title: alreadyCardTitle(val, idx), key: val.report_id },
          React.createElement(
            _row2.default,
            null,
            React.createElement(
              _col2.default,
              { span: 2 },
              React.createElement(
                'span',
                null,
                '\u77E5\u8BC6\u4EA7\u6743\uFF1A'
              )
            ),
            React.createElement(
              _col2.default,
              { span: 22 },
              val.complaintModelList.map(function (v, i) {
                return React.createElement(
                  'div',
                  { key: v.account_id + i, className: 'knowledgeright-item' },
                  val._isEdit ? React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(_cascader2.default, {
                      getPopupContainer: function getPopupContainer(trigger) {
                        return trigger.parentNode;
                      },
                      style: { width: '440px' },
                      onChange: that.handleCascaderChange.bind(that, idx, i, 'edit'),
                      defaultValue: [v.account_id, v.ipr_id],
                      options: complatinAccountList,
                      loadData: that.handleLoadData,
                      placeholder: '\u8BF7\u9009\u62E9' }),
                    '\xA0\xA0\xA0',
                    React.createElement(_icon2.default, {
                      type: 'minus-circle',
                      style: { cursor: 'pointer' },
                      onClick: that.handleDeleteAlreadyKnowledge.bind(that, idx, i) })
                  ) : React.createElement(
                    'p',
                    null,
                    v.account_id + ' / ' + v.ipr_name
                  )
                );
              })
            )
          )
        );
      })
    )
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=136_eb1ed8478460329bdb96.js.map