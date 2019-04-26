(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[148],{

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

/***/ "./app/widget/index/TaobaoComplaint/tpl.js":
/*!*************************************************!*\
  !*** ./app/widget/index/TaobaoComplaint/tpl.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tag = __webpack_require__(/*! antd/es/tag */ "./node_modules/_antd@3.10.1@antd/es/tag/index.js");

var _tag2 = _interopRequireDefault(_tag);

var _upload = __webpack_require__(/*! antd/es/upload */ "./node_modules/_antd@3.10.1@antd/es/upload/index.js");

var _upload2 = _interopRequireDefault(_upload);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _popover = __webpack_require__(/*! antd/es/popover */ "./node_modules/_antd@3.10.1@antd/es/popover/index.js");

var _popover2 = _interopRequireDefault(_popover);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _radio = __webpack_require__(/*! antd/es/radio */ "./node_modules/_antd@3.10.1@antd/es/radio/index.js");

var _radio2 = _interopRequireDefault(_radio);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! antd/es/tag/style/css */ "./node_modules/_antd@3.10.1@antd/es/tag/style/css.js");

__webpack_require__(/*! antd/es/upload/style/css */ "./node_modules/_antd@3.10.1@antd/es/upload/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/popover/style/css */ "./node_modules/_antd@3.10.1@antd/es/popover/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/radio/style/css */ "./node_modules/_antd@3.10.1@antd/es/radio/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

var _That = __webpack_require__(/*! ../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _template_map = __webpack_require__(/*! ./template_map */ "./app/widget/index/TaobaoComplaint/template_map.js");

var _template_map2 = _interopRequireDefault(_template_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var OptGroup = _select2.default.OptGroup;
var RadioGroup = _radio2.default.Group;
var FormItem = _form2.default.Item;

var PLATFORM = {
  tb: 'taobao',
  tm: 'tmall',
  tmhk: 'tmallhk'
};
var COMPLAINT_LINK_TYPE = {
  goods: 'item',
  shops: 'shop'
};

var Tpl = (0, _That2.default)(function (that) {
  var _that$state = that.state,
      linkList = _that$state.linkList,
      link_textarea_value = _that$state.link_textarea_value,
      current_link_item = _that$state.current_link_item,
      complaintAccount = _that$state.complaintAccount,
      complatinAccountList = _that$state.complatinAccountList,
      knowledgeRightTypeList = _that$state.knowledgeRightTypeList,
      knowledgeRightTypeDetailList = _that$state.knowledgeRightTypeDetailList,
      complaintPlatform = _that$state.complaintPlatform,
      complaintLinkType = _that$state.complaintLinkType,
      complaintReasonList = _that$state.complaintReasonList,
      complaintReasonId = _that$state.complaintReasonId,
      fileList = _that$state.fileList,
      isVerifyLink = _that$state.isVerifyLink;
  var getFieldDecorator = that.props.form.getFieldDecorator;


  var errorLinkLength = linkList.filter(function (v) {
    return typeof v !== 'string';
  }).length;
  var complaintReasonData = _template_map2.default[complaintReasonId];

  var single_link = function single_link(value, index) {
    // if (value) {
    var val_is_string = typeof value === 'string';
    var val = val_is_string ? value : value.errorLink;
    return React.createElement(
      'div',
      { style: { position: 'relative' }, key: index },
      React.createElement(
        _popover2.default,
        { content: val, trigger: 'hover' },
        React.createElement(_input2.default, {
          value: val,
          readOnly: current_link_item === index ? false : true,
          onBlur: that.handleLinkItemBlur,
          onChange: that.handleLinkItemChange.bind(that, index),
          className: 'link-item ' + (current_link_item === index ? '' : 'link-item-readonly') + ' ' + (val_is_string ? '' : 'error') })
      ),
      val_is_string ? null : React.createElement(_icon2.default, { type: 'exclamation-circle', className: 'link-icon error' }),
      React.createElement(_icon2.default, { className: 'link-icon edit', type: 'edit', onClick: that.handleLinkItemEdit.bind(that, index) }),
      React.createElement(_icon2.default, { className: 'link-icon close', type: 'close', onClick: that.handleLinkItemDelete.bind(that, index) })
    );
    // } else {
    //   return null
    // }
  };

  return React.createElement(
    _Layout2.default,
    {
      breadcrumbList: ['淘宝发起投诉'],
      linkList: ['']
    },
    React.createElement(
      'div',
      { className: 'taobao-complaint-wrapper' },
      React.createElement(
        _form2.default,
        { onSubmit: that.handleSubmit, layout: 'inline' },
        React.createElement(
          'div',
          { className: 'account-change' },
          React.createElement(
            'section',
            { className: 'account verticle-middle', style: { position: 'relative' } },
            React.createElement(
              'span',
              { className: 'label' },
              React.createElement(
                'i',
                null,
                '*'
              ),
              '\u6295\u8BC9\u8D26\u53F7'
            ),
            React.createElement(
              FormItem,
              null,
              getFieldDecorator('complaintAccount', {
                // initialValue: complaintAccount,
                rules: [{ required: true, message: '请选择投诉账号' }]
              })(React.createElement(
                _select2.default,
                {
                  // defaultValue={complaintAccount} 
                  getPopupContainer: function getPopupContainer(trigger) {
                    return trigger.parentNode;
                  },
                  style: { width: '320px' },
                  placeholder: '\u8BF7\u9009\u62E9',
                  onChange: that.handleSelect.bind(that, 'complaintAccount') },
                React.createElement(
                  Option,
                  { value: '', disabled: true },
                  '\u8BF7\u9009\u62E9'
                ),
                complatinAccountList.map(function (v) {
                  return React.createElement(
                    Option,
                    { key: v.id, value: v.id },
                    v.username
                  );
                })
              ))
            )
          ),
          React.createElement(
            'section',
            { className: 'platform' },
            React.createElement(
              'span',
              { className: 'label' },
              React.createElement(
                'i',
                null,
                '*'
              ),
              '\u6295\u8BC9\u5E73\u53F0'
            ),
            React.createElement(
              RadioGroup,
              { defaultValue: complaintPlatform, onChange: that.handleRadioChange.bind(that, 'complaintPlatform') },
              React.createElement(
                _radio2.default,
                { value: PLATFORM.tb },
                '\u6DD8\u5B9D\u7F51'
              ),
              React.createElement(
                _radio2.default,
                { value: PLATFORM.tm },
                '\u5929\u732B\u5546\u57CE'
              ),
              React.createElement(
                _radio2.default,
                { value: PLATFORM.tmhk },
                '\u5929\u732B\u56FD\u9645'
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'form-content' },
          React.createElement(
            'h3',
            { className: 'title' },
            '\u6295\u8BC9\u57FA\u7840\u4FE1\u606F'
          ),
          React.createElement(
            'section',
            { className: 'short-label verticle-middle', style: { position: 'relative' } },
            React.createElement(
              'span',
              { className: 'label' },
              React.createElement(
                'i',
                null,
                '*'
              ),
              '\u77E5\u8BC6\u4EA7\u6743'
            ),
            React.createElement(
              FormItem,
              null,
              getFieldDecorator('knowledgeRightType', {
                // initialValue: knowledgeRightType,
                rules: [{ required: true, message: '请选择知识产权信息' }]
              })(React.createElement(
                _select2.default,
                {
                  getPopupContainer: function getPopupContainer(trigger) {
                    return trigger.parentNode;
                  },
                  style: { width: '275px', marginRight: '10px' },
                  onChange: that.handleSelect.bind(that, 'knowledgeRightType')
                },
                knowledgeRightTypeList.map(function (v) {
                  return React.createElement(
                    Option,
                    { key: v.id, value: v.id },
                    v.text
                  );
                })
              ))
            ),
            React.createElement(
              FormItem,
              null,
              getFieldDecorator('knowledgeRightTypeDetail', {
                // initialValue: !!knowledgeRight.b?knowledgeRight.b:'',
                rules: [{ required: true, message: '请选择知识产权信息' }]
              })(React.createElement(
                _select2.default,
                {
                  getPopupContainer: function getPopupContainer(trigger) {
                    return trigger.parentNode;
                  },
                  style: { width: '275px' }
                  // onChange={that.handleSelect}
                },
                knowledgeRightTypeDetailList.map(function (v) {
                  return React.createElement(
                    Option,
                    { key: v.id, value: v.id },
                    v.text
                  );
                })
              ))
            )
          ),
          React.createElement(
            'section',
            { className: 'long-label' },
            React.createElement(
              'span',
              { className: 'label' },
              '\u6295\u8BC9\u94FE\u63A5\u7C7B\u578B'
            ),
            React.createElement(
              RadioGroup,
              { defaultValue: complaintLinkType, onChange: that.handleRadioChange.bind(that, 'complaintLinkType') },
              React.createElement(
                _radio2.default,
                { value: COMPLAINT_LINK_TYPE.goods },
                '\u5546\u54C1'
              ),
              React.createElement(
                _radio2.default,
                { value: COMPLAINT_LINK_TYPE.shops },
                '\u5E97\u94FA\u62DB\u724C\u3001\u5E97\u94FA\u516C\u544A\u7B49\u7B49'
              )
            )
          ),
          React.createElement(
            'section',
            { className: 'short-label verticle-middle', style: { marginBottom: '20px', position: 'relative' } },
            React.createElement(
              'span',
              { className: 'label' },
              React.createElement(
                'i',
                null,
                '*'
              ),
              '\u6295\u8BC9\u7406\u7531'
            ),
            React.createElement(
              FormItem,
              null,
              complaintLinkType === COMPLAINT_LINK_TYPE.goods ? getFieldDecorator('reason', {
                // initialValue: complaintReasonId,
                rules: [{ required: true, message: '请选择投诉理由' }]
              })(React.createElement(
                _select2.default,
                {
                  onChange: that.handleSelect.bind(that, 'complaintReasonId'),
                  style: { width: '560px' },
                  getPopupContainer: function getPopupContainer(trigger) {
                    return trigger.parentNode;
                  } },
                complaintReasonList.map(function (v) {
                  return React.createElement(
                    OptGroup,
                    { key: v.id, label: v.text },
                    v.items.map(function (val) {
                      return React.createElement(
                        Option,
                        { key: val.id, value: val.id },
                        val.text
                      );
                    })
                  );
                })
              )) : getFieldDecorator('reportComment', {
                rules: [{ required: true, message: '请输入投诉理由' }]
              })(React.createElement(_input2.default.TextArea, {
                placeholder: '\u8BF7\u8F93\u5165\u6295\u8BC9\u7406\u7531\uFF0C\u6295\u8BC9\u7406\u7531\u4E0D\u80FD\u8D85\u8FC71500\u4E2A\u5B57\u7B26',
                style: { width: '560px', verticalAlign: 'text-top' },
                autosize: { minRows: 6 }
              }))
            ),
            !!complaintReasonData && complaintLinkType === COMPLAINT_LINK_TYPE.goods ? !!complaintReasonData.desc ? React.createElement(
              'section',
              { className: 'text-description', style: { width: '560px', margin: '20px 80px' } },
              complaintReasonData.desc
            ) : null : null
          ),
          React.createElement(
            'section',
            { className: 'short-label' },
            React.createElement(
              'span',
              { className: 'label' },
              React.createElement(
                'i',
                null,
                '*'
              ),
              '\u6295\u8BC9\u94FE\u63A5'
            ),
            React.createElement(
              'span',
              { className: 'links' },
              !!linkList.length ? linkList.map(function (v, i) {
                return single_link(v, i);
              }) : null,
              React.createElement(_input2.default.TextArea, {
                onBlur: that.handleLinkBlur,
                onChange: that.handleLinkChange,
                placeholder: '\u4E00\u6761\u94FE\u63A5\u4E00\u884C\uFF0C\u6700\u591A300\u6761',
                className: 'textarea',
                value: link_textarea_value,
                autosize: { maxRows: 300 } })
            ),
            React.createElement(
              'div',
              { className: 'verify-link' },
              React.createElement(
                _button2.default,
                { onClick: that.verifyLink.bind(that, undefined) },
                '\u9A8C\u8BC1\u94FE\u63A5'
              ),
              linkList.length && isVerifyLink ? !errorLinkLength ? React.createElement(
                'span',
                { className: 'verify-result success' },
                React.createElement(_icon2.default, { className: 'icon', type: 'check-circle' }),
                '\u6240\u6709\u94FE\u63A5\u9A8C\u8BC1\u901A\u8FC7'
              ) : React.createElement(
                'span',
                { className: 'verify-result fail' },
                React.createElement(_icon2.default, { className: 'icon', type: 'close-circle' }),
                '\u5B58\u5728 ' + errorLinkLength + ' \u6761\u672A\u9A8C\u8BC1\u901A\u8FC7\u94FE\u63A5'
              ) : null
            )
          ),
          React.createElement(
            'h3',
            { className: 'title' },
            '\u6295\u8BC9\u4E3E\u8BC1\u6750\u6599'
          ),
          !!complaintReasonData && complaintLinkType === COMPLAINT_LINK_TYPE.goods ? !!complaintReasonData.label ? React.createElement(
            'section',
            { className: 'spectial-label ' + (complaintReasonData.label === '旺旺聊天举证号' ? 'wangwang' : '') },
            React.createElement(
              'span',
              { className: 'label' },
              React.createElement(
                'i',
                null,
                '*'
              ),
              complaintReasonData.label
            ),
            getFieldDecorator(complaintReasonData.field, {
              rules: [{ required: true, message: '\u8BF7\u8F93\u5165' + complaintReasonData.label }]
            })(React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165', autoComplete: 'off', style: { width: '560px' } }))
          ) : null : null,
          !!complaintReasonData && complaintLinkType === COMPLAINT_LINK_TYPE.goods ? React.createElement(
            'section',
            { className: 'short-label' },
            React.createElement(
              'span',
              { className: 'label' },
              React.createElement(
                'i',
                null,
                '*'
              ),
              '\u7406\u7531\u8BF4\u660E'
            ),
            getFieldDecorator('reportComment', {
              rules: [{ required: true, message: '请输入投诉理由' }]
            })(React.createElement(_input2.default.TextArea, {
              autosize: { maxRows: 9, minRows: 6 }
              // placeholder={complaintReasonData.placeholder} 
              , placeholder: '\u8865\u5145\u8BF4\u660E\uFF0C\u60A8\u53EF\u4EE5\u8865\u5145\u4FB5\u6743\u7406\u7531 (\u6700\u591A1500\u5B57)',
              style: { width: '560px', verticalAlign: 'text-top' } }))
          ) : null,
          React.createElement(
            'section',
            { className: 'no-must-label' },
            React.createElement(
              'span',
              { className: 'label' },
              '\u4E3E\u8BC1\u8BC1\u660E'
            ),
            React.createElement(
              _upload2.default,
              {
                // action="/hcm/hcmWorkOrder/headImgUpload"
                fileList: fileList,
                action: '/hcm/fileUpload',
                data: { id: complaintAccount },
                disabled: fileList.length > 3
                // beforeUpload={that.handleBeforeUpload}
                , onChange: that.handleUploadChange,
                onRemove: that.handleRemoveFile,
                className: 'upload-style' },
              React.createElement(
                _button2.default,
                { icon: 'upload', disabled: fileList.length > 3 },
                '\u6DFB\u52A0\u6587\u4EF6'
              )
            ),
            React.createElement(
              _tag2.default,
              {
                color: 'rgba(102,102,102,0.05)',
                className: 'tag',
                style: { color: '#999', float: 'left', fontSize: '14px', marginLeft: '9px' } },
              '\u652F\u6301zip/rar/jpg/png/bmp/pdf/doc/docx\u683C\u5F0F\uFF0C\u6BCF\u4E2A5MB\u4EE5\u5185\uFF0C\u6700\u591A4\u4E2A\u6587\u4EF6'
            )
          ),
          !!complaintReasonData && complaintReasonData.template ? React.createElement(
            'section',
            { className: 'template-refer' },
            React.createElement(
              'span',
              null,
              '\u4E3E\u8BC1\u6A21\u677F\u53C2\u8003'
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                'span',
                null,
                complaintReasonData.template.text
              ),
              React.createElement(
                'a',
                { href: complaintReasonData.template.link, target: '_blank' },
                complaintReasonData.template.linkText
              )
            )
          ) : null,
          React.createElement(
            _button2.default,
            {
              size: 'large',
              type: 'primary',
              htmlType: 'submit',
              style: { backgroundColor: '#CFA972', borderColor: '#CFA972', margin: '50px 0 0 153px' } },
            '\u63D0\u4EA4'
          )
        )
      )
    )
  );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=148_22f95dcd4d40fd13cbff.js.map