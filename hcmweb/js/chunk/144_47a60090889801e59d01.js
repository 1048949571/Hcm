(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[144],{

/***/ "./app/widget/components/Component.js":
/*!********************************************!*\
  !*** ./app/widget/components/Component.js ***!
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

/**
 *
 *
 * @export
 * @description style:object,className:str
 * @class AddIcon 
 * @extends {React.Component}
 */
var AddIcon = exports.AddIcon = function (_React$Component) {
    _inherits(AddIcon, _React$Component);

    function AddIcon(props) {
        _classCallCheck(this, AddIcon);

        return _possibleConstructorReturn(this, (AddIcon.__proto__ || Object.getPrototypeOf(AddIcon)).call(this, props));
    }

    _createClass(AddIcon, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                style = _props.style,
                className = _props.className;

            return React.createElement("img", { className: className, style: style, src: "../../../../img/icon/add2.png" });
        }
    }]);

    return AddIcon;
}(React.Component);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

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

/***/ "./app/widget/index/SpecialComplaint/SpecialComplaint.less":
/*!*****************************************************************!*\
  !*** ./app/widget/index/SpecialComplaint/SpecialComplaint.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/widget/index/SpecialComplaint/tpl.js":
/*!**************************************************!*\
  !*** ./app/widget/index/SpecialComplaint/tpl.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _alert = __webpack_require__(/*! antd/es/alert */ "./node_modules/_antd@3.10.1@antd/es/alert/index.js");

var _alert2 = _interopRequireDefault(_alert);

var _drawer = __webpack_require__(/*! antd/es/drawer */ "./node_modules/_antd@3.10.1@antd/es/drawer/index.js");

var _drawer2 = _interopRequireDefault(_drawer);

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _timeline = __webpack_require__(/*! antd/es/timeline */ "./node_modules/_antd@3.10.1@antd/es/timeline/index.js");

var _timeline2 = _interopRequireDefault(_timeline);

var _popover = __webpack_require__(/*! antd/es/popover */ "./node_modules/_antd@3.10.1@antd/es/popover/index.js");

var _popover2 = _interopRequireDefault(_popover);

var _datePicker = __webpack_require__(/*! antd/es/date-picker */ "./node_modules/_antd@3.10.1@antd/es/date-picker/index.js");

var _datePicker2 = _interopRequireDefault(_datePicker);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _steps = __webpack_require__(/*! antd/es/steps */ "./node_modules/_antd@3.10.1@antd/es/steps/index.js");

var _steps2 = _interopRequireDefault(_steps);

var _tabs = __webpack_require__(/*! antd/es/tabs */ "./node_modules/_antd@3.10.1@antd/es/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _upload = __webpack_require__(/*! antd/es/upload */ "./node_modules/_antd@3.10.1@antd/es/upload/index.js");

var _upload2 = _interopRequireDefault(_upload);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/alert/style/css */ "./node_modules/_antd@3.10.1@antd/es/alert/style/css.js");

__webpack_require__(/*! antd/es/drawer/style/css */ "./node_modules/_antd@3.10.1@antd/es/drawer/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/timeline/style/css */ "./node_modules/_antd@3.10.1@antd/es/timeline/style/css.js");

__webpack_require__(/*! antd/es/popover/style/css */ "./node_modules/_antd@3.10.1@antd/es/popover/style/css.js");

__webpack_require__(/*! antd/es/date-picker/style/css */ "./node_modules/_antd@3.10.1@antd/es/date-picker/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/steps/style/css */ "./node_modules/_antd@3.10.1@antd/es/steps/style/css.js");

__webpack_require__(/*! antd/es/tabs/style/css */ "./node_modules/_antd@3.10.1@antd/es/tabs/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/upload/style/css */ "./node_modules/_antd@3.10.1@antd/es/upload/style/css.js");

__webpack_require__(/*! ./SpecialComplaint.less */ "./app/widget/index/SpecialComplaint/SpecialComplaint.less");

var _That = __webpack_require__(/*! ../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _Component = __webpack_require__(/*! ../../components/Component */ "./app/widget/components/Component.js");

var _Loading = __webpack_require__(/*! ../../components/Loading */ "./app/widget/components/Loading.js");

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import PicturesWall from '../../components/PicturesWall/PicturesWall';
var Dragger = _upload2.default.Dragger;

var Tpl = (0, _That2.default)(function (that) {
    return React.createElement(
        _Layout2.default,
        {
            title: '\u7EF4\u6743\u670D\u52A1',
            breadcrumbList: ['维权服务', '特殊投诉处理'],
            linkList: ['', ''],
            className: 'activity-review-wrapper'
        },
        React.createElement(
            'div',
            { className: 'specialComplaint' },
            React.createElement(SpecialComplaint, { that: that })
        )
    );
});
//上传图片
var PicturesWall = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        previewVisible = _that$state.previewVisible,
        previewImage = _that$state.previewImage,
        fileList = _that$state.fileList;

    var uploadButton = React.createElement(
        'div',
        null,
        React.createElement(_icon2.default, { type: 'plus' }),
        React.createElement(
            'div',
            { className: 'ant-upload-text' },
            'Upload'
        )
    );
    return React.createElement(
        'div',
        { className: 'clearfix' },
        React.createElement(
            _upload2.default,
            {
                name: 'file',
                action: '/hcm/hcmWorkOrder/headImgUpload',
                listType: 'picture-card',
                fileList: fileList,
                onPreview: that.handlePreview,
                onChange: function onChange(info) {
                    return that.handleChange(info);
                },
                beforeUpload: that.ImgUpload
            },
            fileList.length >= 9 ? null : uploadButton
        ),
        React.createElement(
            _modal2.default,
            { visible: previewVisible, footer: null, onCancel: that.handleCancel },
            React.createElement('img', { alt: 'example', style: { width: '100%' }, src: previewImage })
        )
    );
});
//批量导入
var UploadModal = (0, _That2.default)(function (that) {
    // const { uploading,  fileList, percent } = that.state;
    var _that$state2 = that.state,
        uploadVisible = _that$state2.uploadVisible,
        fileList = _that$state2.fileList,
        uploading = _that$state2.uploading;

    return React.createElement(
        _modal2.default,
        {
            title: '\u6279\u91CF\u5BFC\u5165',
            visible: uploadVisible,
            maskClosable: false,
            onCancel: function onCancel() {
                return that.onuploadVisible(false);
            },
            footer: [React.createElement(
                _button2.default,
                { key: 'back2', className: 'btn2-main upload-demo-start', type: 'primary', onClick: function onClick() {
                        return that.handleUpload();
                    }, disabled: fileList.length === 0, loading: uploading },
                uploading ? '上传中' : '上传'
            ), React.createElement(
                _button2.default,
                { className: 'btn2-sub noneFloat', key: 'back', onClick: function onClick() {
                        return that.onuploadVisible(false);
                    } },
                '\u53D6\u6D88'
            )]
        },
        React.createElement(
            Dragger,
            _extends({ multiple: false }, that.propsUpload()),
            React.createElement(
                'p',
                { className: 'ant-upload-drag-icon' },
                React.createElement('img', { style: { paddingTop: 20 }, src: '../../../img/upload_files.png' })
            ),
            React.createElement(
                'p',
                { className: 'ant-upload-text' },
                '\u70B9\u51FB\u8FD9\u91CC\u9009\u62E9\u6587\u4EF6\u4E0A\u4F20'
            ),
            React.createElement(
                'p',
                { className: 'ant-upload-hint' },
                '\u652F\u6301\u6269\u5C55\u540D\uFF1A.xls .xlsx'
            )
        )
    );
});
//主体
var SpecialComplaint = (0, _That2.default)(function (that) {
    var _React$createElement;

    var _that$state3 = that.state,
        platform = _that$state3.platform,
        queryTIMEp = _that$state3.queryTIMEp,
        queryTIMEn = _that$state3.queryTIMEn,
        newlogisticsNum = _that$state3.newlogisticsNum,
        newcomplainNum = _that$state3.newcomplainNum,
        totalArr = _that$state3.totalArr,
        tabskey = _that$state3.tabskey,
        newZT = _that$state3.newZT,
        Identity = _that$state3.Identity,
        totalElements = _that$state3.totalElements,
        historyList = _that$state3.historyList,
        upfileList = _that$state3.upfileList,
        Remark = _that$state3.Remark,
        statusAll1 = _that$state3.statusAll1,
        statusAll2 = _that$state3.statusAll2,
        statusAll3 = _that$state3.statusAll3,
        statusAll4 = _that$state3.statusAll4,
        checkAll = _that$state3.checkAll,
        selectedRowKeys = _that$state3.selectedRowKeys,
        shopname = _that$state3.shopname,
        status = _that$state3.status,
        shoplink = _that$state3.shoplink,
        processing_times = _that$state3.processing_times,
        id = _that$state3.id,
        Shopicon = _that$state3.Shopicon,
        platformData = _that$state3.platformData,
        pageNo = _that$state3.pageNo,
        pageSize = _that$state3.pageSize,
        newPT = _that$state3.newPT,
        newSP = _that$state3.newSP,
        newSJ = _that$state3.newSJ,
        querySJ = _that$state3.querySJ,
        SCdata = _that$state3.SCdata;
    //选项卡

    var TabPane = _tabs2.default.TabPane;
    var Step = _steps2.default.Step;
    //Select下拉选择
    var Option = _select2.default.Option;
    //日历
    var RangePicker = _datePicker2.default.RangePicker;
    var MonthPicker = _datePicker2.default.MonthPicker;

    //内容列表

    var columns = [{
        title: '序号',
        dataIndex: 'onumber',
        className: 'onumber',
        width: '57px'
    }, {
        title: '商家名称',
        dataIndex: 'shopname',
        render: function render(text, e) {
            return React.createElement(
                'a',
                { href: 'javascript:;', onClick: function onClick() {
                        that.showDrawer(e.id, e.shopname, e.status, e.shoplink, e.processing_times, e.platform);
                    } },
                text
            );
        },
        className: 'shopname',
        width: '200px'
    }, {
        title: null,
        dataIndex: 'pticon', //平台图标
        className: 'pticon',
        width: '25px'
    }, {
        title: null,
        dataIndex: 'ptchat', //聊天
        render: function render(text, e) {
            return React.createElement(
                'a',
                { target: '_blank', href: e.shopid == '10003' ? 'javascript:;' : e.platform == 'JD' ? 'https://jdcs.jd.com/index.action?pid=' + e.shopid : e.platform == '1688' ? 'https://amos.alicdn.com/getcid.aw?v=3&groupid=0&s=1&charset=utf-8&uid=' + e.shopname + '&site=cnalichn' : 'https://amos.alicdn.com/getcid.aw?v=3&groupid=0&s=1&charset=utf-8&uid=' + e.shopname + '&site=cntaobao' },
                text
            );
        },
        className: 'ptchat',
        width: '25px'
    }, {
        title: '商品链接',
        dataIndex: 'shoplink',
        render: function render(text, e) {
            return React.createElement(
                'a',
                { target: '_blank', href: text },
                text
            );
        },
        className: 'shoplink'
    }, {
        title: '处理状态',
        dataIndex: 'tableStatus',
        className: 'tableStatus',
        width: '100px'
    }, {
        title: null,
        dataIndex: 'clockstatus',
        render: function render(text, e) {
            return React.createElement(
                _popover2.default,
                {
                    content: React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'div',
                            { style: { fontWeight: "bold", marginBottom: '4px' } },
                            '\u5DF2\u5230\u8FBE\u63D0\u9192\u65F6\u95F4'
                        ),
                        React.createElement(
                            'div',
                            null,
                            moment(e.againtime).format('YYYY-MM-DD HH:mm:ss'),
                            React.createElement(
                                'span',
                                { style: { marginLeft: '10px' }, onClick: that.bubblehidden },
                                React.createElement(
                                    'a',
                                    { href: 'javascript:;', onClick: function onClick() {
                                            that.showDrawer(e.id, e.shopname, e.status, e.shoplink, e.processing_times, e.platform);
                                        } },
                                    '\u67E5\u770B'
                                )
                            )
                        )
                    ),
                    trigger: 'click',
                    className: 'remind',
                    style: { zIndex: 9 }
                },
                Identity == 'KEFU' ? text : null
            );
            // <a href="javascript:;" onClick={()=>{that.showDrawer(e.id,e.shopname,e.status,e.shoplink,e.processing_times,e.platform)}}>{text}</a>
        },
        className: 'clockstatus',
        width: '46px'
    }, {
        title: '最后修改时间',
        dataIndex: 'updatetime',
        className: 'updatetime',
        width: '160px'
    }];
    var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: function onChange(selectedRowKeys) {
            // console.log(selectedRowKeys)
            that.onTableCheckChange(selectedRowKeys);
        }
    };
    //上传文件
    var props = {
        name: 'file',
        action: '/hcm/hcmWorkOrder/headUpload',
        headers: {
            authorization: 'authorization-text'
        },
        onChange: that.upfilechange,
        beforeUpload: that.upfile

    };
    //渲染商家平台下拉菜单
    var platformDatalist = platformData.map(function (e, i) {
        return React.createElement(
            Option,
            { key: i, value: e.dictCode },
            e.dictName
        );
    });
    //渲染投诉历史记录
    var HistoryList = historyList.map(function (e, i) {
        return React.createElement(
            _timeline2.default.Item,
            { key: i },
            React.createElement(
                'div',
                { className: 'Latesttime' },
                moment(e.createtime).format('YYYY-MM-DD HH:mm:ss'),
                ' ',
                React.createElement(
                    'span',
                    null,
                    Identity == 'KEFU' ? e.deleteState ? React.createElement('img', { onClick: function onClick() {
                            return that.deleNewesthistory(e.id);
                        }, src: '../../../img/icon/icon_operating_del.png', alt: '' }) : null : null
                )
            ),
            React.createElement(
                'div',
                { className: 'lszt' },
                '\u5904\u7406\u72B6\u6001\uFF1A',
                e.status == '1' ? '第' + e.sendNumber + '次' : null,
                tabskey == '1' ? statusAll1[e.status] : tabskey == '2' ? statusAll2[e.status] : tabskey == '3' ? statusAll3[e.status] : statusAll4[e.status],
                historyList[0].status == '4' && tabskey == '1' || historyList[0].status == '4' && tabskey == '3' || historyList[0].status == '4' && tabskey == '4' || historyList[0].status == '9' && tabskey == '2' ? React.createElement(
                    'span',
                    null,
                    React.createElement('i', null),
                    ' ',
                    e.status == '4' && tabskey == '1' || e.status == '4' && tabskey == '3' || e.status == '4' && tabskey == '4' || e.status == '9' && tabskey == '2' ? null : '耗时：',
                    e.timeConsuming
                ) : i == '0' ? //只有一条数据的时候没有耗时
                null : React.createElement(
                    'span',
                    null,
                    React.createElement('i', null),
                    ' \u8017\u65F6\uFF1A',
                    e.timeConsuming
                )
            ),
            e.image ? React.createElement(
                'div',
                { className: 'lsimg' },
                React.createElement(
                    'ul',
                    null,
                    e.image.split(',').map(function (el, ii) {
                        return React.createElement(
                            'li',
                            { key: ii },
                            React.createElement('img', { onClick: function onClick() {
                                    return that.handleComImageClick({ bl: true, urls: e.image.split(','), index: ii, close: true });
                                }, src: el, alt: '' })
                        );
                    })
                )
            ) : null,
            React.createElement(
                'div',
                { className: 'lsbz' },
                '\u5907\u6CE8\uFF1A\xA0',
                e.remark ? e.remark : '无'
            ),
            e.file ? React.createElement(
                'div',
                { className: 'lsfj' },
                ' \u9644\u4EF6\uFF1A',
                e.file.split(',').map(function (el, ii) {
                    return React.createElement(
                        'span',
                        { key: ii, style: { position: 'relative' } },
                        React.createElement('img', { style: { position: 'absolute', top: '1px' }, src: '../../../img/icon1.1/Enclosure.svg', alt: '' }),
                        React.createElement(
                            'a',
                            { href: '/hcm/hcmWorkOrder/downLoadFile?filename=' + el.split('/////')[0], style: { marginRight: '10px', marginLeft: '20px' } },
                            el.split('/////')[1]
                        )
                    );
                })
            ) : null,
            tabskey == '2' ? e.logistics ? JSON.parse(e.logistics).status == '0' ? React.createElement(
                'div',
                { className: 'logistics' },
                React.createElement(
                    'div',
                    { className: 'logisticsTitle' },
                    React.createElement('img', { src: '../../../img/icon1.1/Logistics.png', alt: '' }),
                    React.createElement(
                        'span',
                        { className: 'logisticsInfo' },
                        '\u7269\u6D41\u4FE1\u606F'
                    ),
                    React.createElement(
                        'span',
                        { className: 'courierNum' },
                        '\u7269\u6D41\u5355\u53F7\uFF1A',
                        e.logisticsNumber
                    )
                ),
                React.createElement(
                    _timeline2.default,
                    { className: 'logisticsContent loglist' },
                    JSON.parse(e.logistics).result.list.map(function (el, it) {
                        return React.createElement(
                            _timeline2.default.Item,
                            { key: it },
                            React.createElement(
                                'p',
                                { className: 'logisticsContentInfo' },
                                el.status
                            ),
                            React.createElement(
                                'p',
                                { className: 'logisticsContentTime' },
                                el.time
                            )
                        );
                    })
                ),
                React.createElement(
                    'div',
                    { className: 'openret', style: { display: 'flex', justifyContent: 'center' } },
                    React.createElement(
                        'a',
                        { onClick: that.openLogistics, href: 'javascript:;' },
                        '\u5C55\u5F00 '
                    ),
                    React.createElement(
                        'span',
                        { style: { margin: '4px 0 0 7px' } },
                        React.createElement('img', { className: 'active', src: '../../../img/icon1.1/open.png', alt: '' }),
                        React.createElement('img', { src: '../../../img/icon1.1/retract.png', alt: '' })
                    )
                )
            ) : React.createElement(
                'div',
                null,
                '\u5FEB\u9012\u5355\u53F7\u9519\u8BEF'
            ) : null : null,
            tabskey == '2' ? e.details == '未获取到对应品牌方的投诉信息' ? React.createElement(
                'div',
                null,
                '\u672A\u83B7\u53D6\u5230\u5E73\u53F0\u5904\u7406\u8BE6\u60C5'
            ) : e.details ? React.createElement(
                'div',
                { className: 'logistics' },
                React.createElement(
                    'div',
                    { className: 'logisticsTitle' },
                    React.createElement('img', { src: '../../../img/icon1.1/platform.png', alt: '' }),
                    React.createElement(
                        'span',
                        { className: 'logisticsInfo' },
                        '\u5E73\u53F0\u5904\u7406\u8BE6\u60C5'
                    ),
                    React.createElement(
                        'span',
                        { className: 'courierNum' },
                        '\u6295\u8BC9\u5355\u53F7\uFF1A',
                        e.details.data.batchId
                    )
                ),
                React.createElement(
                    _timeline2.default,
                    { className: 'logisticsContent Complaintnumber' },
                    e.details.data.log.map(function (el, it) {
                        return React.createElement(
                            _timeline2.default.Item,
                            { key: it },
                            React.createElement(
                                'p',
                                { className: 'logisticsContentInfo' },
                                el.type
                            )
                        );
                    })
                )
            ) : null : null,
            e.againtime ? React.createElement(
                'div',
                null,
                React.createElement(
                    'span',
                    { style: { color: '#000' } },
                    '\u4E0B\u6B21\u8DDF\u8FDB\u65F6\u95F4\uFF1A'
                ),
                moment(e.againtime).format('YYYY-MM-DD HH:mm:ss')
            ) : null
        );
    });

    //内容区共用搜索
    var content_search = React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { className: 'search_row', style: { height: '74px', padding: '23px 24px 0px 24px' } },
            React.createElement(
                'div',
                { className: 'ser_row' },
                '\u5546\u5BB6\u540D\u79F0',
                React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165', value: querySJ, onChange: that.querysj, className: 'sj', maxLength: '24' })
            ),
            React.createElement(
                'div',
                { className: 'ser_row' },
                '\u5904\u7406\u72B6\u6001',
                tabskey == '1' ? React.createElement(
                    _select2.default,
                    { labelInValue: true, defaultValue: { key: '请选择' }, style: { width: 120 }, onChange: that.queryzt },
                    React.createElement(
                        Option,
                        { value: '\u8BF7\u9009\u62E9' },
                        '\u8BF7\u9009\u62E9'
                    ),
                    React.createElement(
                        Option,
                        { value: '0' },
                        '\u90AE\u4EF6\u5F85\u53D1\u9001'
                    ),
                    React.createElement(
                        Option,
                        { value: '1' },
                        '\u90AE\u4EF6\u5DF2\u53D1\u9001'
                    ),
                    React.createElement(
                        Option,
                        { value: '2' },
                        '\u90AE\u4EF6\u5DF2\u9A73\u56DE'
                    ),
                    React.createElement(
                        Option,
                        { value: '3' },
                        '\u90AE\u4EF6\u5DF2\u56DE\u590D'
                    ),
                    React.createElement(
                        Option,
                        { value: '4' },
                        '\u5B8C\u7ED3'
                    )
                ) : null,
                tabskey == '2' ? React.createElement(
                    _select2.default,
                    { labelInValue: true, defaultValue: { key: '请选择' }, style: { width: 120 }, onChange: that.queryzt },
                    React.createElement(
                        Option,
                        { value: '\u8BF7\u9009\u62E9' },
                        '\u8BF7\u9009\u62E9'
                    ),
                    React.createElement(
                        Option,
                        { value: '0' },
                        '\u8D2D\u4E70\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '1' },
                        '\u5DF2\u8D2D\u4E70\uFF0C\u53D1\u8D27\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '2' },
                        '\u5356\u5BB6\u5DF2\u53D1\u8D27'
                    ),
                    React.createElement(
                        Option,
                        { value: '3' },
                        '\u672A\u53D1\u8D27\uFF1A\u7533\u8BF7\u9000\u6B3E\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '4' },
                        '\u672A\u53D1\u8D27\uFF1A\u4E3E\u62A5\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '5' },
                        '\u9000\u6B3E\u5B8C\u6210'
                    ),
                    React.createElement(
                        Option,
                        { value: '6' },
                        '\u53D1\u9519\u8D27\uFF1A\u7533\u8BF7\u9000/\u6362\u8D27\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '7' },
                        '\u5DF2\u5230\u8D27\uFF0C\u62A5\u544A\u5236\u4F5C\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '8' },
                        '\u62A5\u544A\u5DF2\u63D0\u4EA4\u5E73\u53F0\u5904\u7406'
                    ),
                    React.createElement(
                        Option,
                        { value: '9' },
                        '\u5B8C\u7ED3'
                    )
                ) : null,
                tabskey == '3' ? React.createElement(
                    _select2.default,
                    { labelInValue: true, defaultValue: { key: '请选择' }, style: { width: 120 }, onChange: that.queryzt },
                    React.createElement(
                        Option,
                        { value: '\u8BF7\u9009\u62E9' },
                        '\u8BF7\u9009\u62E9'
                    ),
                    React.createElement(
                        Option,
                        { value: '0' },
                        '\u901A\u77E5\u8FDB\u884C\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '1' },
                        '\u5DF2\u901A\u77E5\u5F85\u6574\u6539'
                    ),
                    React.createElement(
                        Option,
                        { value: '2' },
                        '\u5356\u5BB6\u62D2\u7EDD\u6574\u6539'
                    ),
                    React.createElement(
                        Option,
                        { value: '3' },
                        '\u5356\u5BB6\u5DF2\u6574\u6539'
                    ),
                    React.createElement(
                        Option,
                        { value: '4' },
                        '\u5B8C\u7ED3'
                    )
                ) : null,
                tabskey == '4' ? React.createElement(
                    _select2.default,
                    { labelInValue: true, defaultValue: { key: '请选择' }, style: { width: 120 }, onChange: that.queryzt },
                    React.createElement(
                        Option,
                        { value: '\u8BF7\u9009\u62E9' },
                        '\u8BF7\u9009\u62E9'
                    ),
                    React.createElement(
                        Option,
                        { value: '0' },
                        '\u4E3E\u62A5\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '1' },
                        '\u5DF2\u4E3E\u62A5'
                    ),
                    React.createElement(
                        Option,
                        { value: '2' },
                        '\u4E3E\u62A5\u6210\u529F'
                    ),
                    React.createElement(
                        Option,
                        { value: '3' },
                        '\u4E3E\u62A5\u5931\u8D25'
                    ),
                    React.createElement(
                        Option,
                        { value: '4' },
                        '\u5B8C\u7ED3'
                    )
                ) : null
            ),
            React.createElement(
                'div',
                { className: 'ser_row', style: { display: 'flex' } },
                React.createElement(
                    'div',
                    { style: { width: '86px', fontSize: '14px', float: 'left', lineHeight: '34px' } },
                    '\u6700\u540E\u4FEE\u6539\u65F6\u95F4'
                ),
                React.createElement(RangePicker, {
                    allowClear: false
                    // rangesranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                    , onChange: that.selecttime
                    // defaultValue = {[moment().subtract(3, 'months'), moment()]}
                    , value: [moment(queryTIMEp, 'YYYY-MM-DD'), moment(queryTIMEn, 'YYYY-MM-DD')]
                })
            )
        ),
        React.createElement(
            'div',
            { className: 'search_row', style: { height: '52px', padding: '0 24px' } },
            React.createElement(
                'div',
                { className: 'ser_row' },
                '\u5546\u5BB6\u5E73\u53F0',
                React.createElement(
                    _select2.default,
                    { labelInValue: true, defaultValue: { key: '请选择' }, style: { width: 120 }, onChange: that.querypt },
                    React.createElement(
                        Option,
                        { value: '\u8BF7\u9009\u62E9' },
                        '\u8BF7\u9009\u62E9'
                    ),
                    platformDatalist
                )
            ),
            React.createElement(
                'div',
                { className: 'ser_btn' },
                React.createElement(
                    _button2.default,
                    { type: 'primary', onClick: function onClick() {
                            return that.querycontent('query');
                        }, ghost: true },
                    '\u67E5\u8BE2'
                )
            )
        ),
        React.createElement('div', { style: { height: '20px', width: '100%' } })
    );
    //操作按钮
    var btngroup = React.createElement(
        'div',
        { className: 'content_Sbtn' },
        React.createElement(
            _button2.default,
            { className: ' btn1-main', onClick: function onClick() {
                    return that.showModal();
                }, style: { marginRight: '10px', color: '#fff' } },
            React.createElement(_Component.AddIcon, { style: { paddingRight: '8px' } }),
            '\u65B0\u589E'
        ),
        React.createElement(
            _button2.default,
            { onClick: function onClick() {
                    return that.DeleteComplaint();
                }, style: { marginRight: '10px' } },
            '\u6279\u91CF\u5220\u9664'
        ),
        React.createElement(
            _button2.default,
            { onClick: function onClick() {
                    return that.onuploadVisible(true);
                }, style: { marginRight: '10px' } },
            '\u6279\u91CF\u5BFC\u5165'
        ),
        React.createElement(
            'a',
            { href: '/hcm/hcmWorkOrder/downLoadFile?filename=' + (tabskey == '1' ? 'ceshi/1544405931287_20181128y.xlsx' : tabskey == '2' ? 'ceshi/1544405999959_20181128g.xlsx' : tabskey == '3' ? 'ceshi/1544406027106_20181128t.xlsx' : 'ceshi/1544406048585_20181128z.xlsx') },
            React.createElement(
                _button2.default,
                { style: { marginRight: '10px' } },
                '\u5BFC\u5165\u6A21\u677F\u4E0B\u8F7D'
            )
        )
    );
    //非客服历史记录
    var hisList = React.createElement(
        _timeline2.default,
        { className: 'kefuHistorical' },
        HistoryList
    );
    //客服历史记录及新增
    var KEFUhisList = React.createElement(
        _tabs2.default,
        {
            defaultActiveKey: '1',
            onChange: that.Drawertabschange,
            animated: false,
            className: 'DrawerTabs'
        },
        React.createElement(
            TabPane,
            { tab: '\u66F4\u6539\u72B6\u6001', key: '1', className: 'newAHistory' },
            React.createElement(
                'div',
                { className: 'newstate' },
                React.createElement(
                    'div',
                    { className: 'newstate_left' },
                    '\u5904\u7406\u72B6\u6001',
                    React.createElement(
                        'span',
                        { style: { color: 'red' } },
                        '*'
                    )
                ),
                tabskey == '1' ? React.createElement(
                    _select2.default,
                    { labelInValue: true, defaultValue: { key: status }, style: { width: 195 }, onChange: that.newState },
                    React.createElement(
                        Option,
                        { value: '0' },
                        '\u90AE\u4EF6\u5F85\u53D1\u9001'
                    ),
                    React.createElement(
                        Option,
                        { value: '1' },
                        '\u90AE\u4EF6\u5DF2\u53D1\u9001'
                    ),
                    React.createElement(
                        Option,
                        { value: '2' },
                        '\u90AE\u4EF6\u5DF2\u9A73\u56DE'
                    ),
                    React.createElement(
                        Option,
                        { value: '3' },
                        '\u90AE\u4EF6\u5DF2\u56DE\u590D'
                    ),
                    React.createElement(
                        Option,
                        { value: '4' },
                        '\u5B8C\u7ED3'
                    )
                ) : null,
                tabskey == '2' ? React.createElement(
                    _select2.default,
                    { labelInValue: true, defaultValue: { key: status }, style: { width: 195 }, onChange: that.newState },
                    React.createElement(
                        Option,
                        { value: '0' },
                        '\u8D2D\u4E70\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '1' },
                        '\u5DF2\u8D2D\u4E70\uFF0C\u53D1\u8D27\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '2' },
                        '\u5356\u5BB6\u5DF2\u53D1\u8D27'
                    ),
                    React.createElement(
                        Option,
                        { value: '3' },
                        '\u672A\u53D1\u8D27\uFF1A\u7533\u8BF7\u9000\u6B3E\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '4' },
                        '\u672A\u53D1\u8D27\uFF1A\u4E3E\u62A5\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '5' },
                        '\u9000\u6B3E\u5B8C\u6210'
                    ),
                    React.createElement(
                        Option,
                        { value: '6' },
                        '\u53D1\u9519\u8D27\uFF1A\u7533\u8BF7\u9000/\u6362\u8D27\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '7' },
                        '\u5DF2\u5230\u8D27\uFF0C\u62A5\u544A\u5236\u4F5C\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '8' },
                        '\u62A5\u544A\u5DF2\u63D0\u4EA4\u5E73\u53F0\u5904\u7406'
                    ),
                    React.createElement(
                        Option,
                        { value: '9' },
                        '\u5B8C\u7ED3'
                    )
                ) : null,
                tabskey == '3' ? React.createElement(
                    _select2.default,
                    { labelInValue: true, defaultValue: { key: status }, style: { width: 195 }, onChange: that.newState },
                    React.createElement(
                        Option,
                        { value: '0' },
                        '\u901A\u77E5\u8FDB\u884C\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '1' },
                        '\u5DF2\u901A\u77E5\u5F85\u6574\u6539'
                    ),
                    React.createElement(
                        Option,
                        { value: '2' },
                        '\u5356\u5BB6\u62D2\u7EDD\u6574\u6539'
                    ),
                    React.createElement(
                        Option,
                        { value: '3' },
                        '\u5356\u5BB6\u5DF2\u6574\u6539'
                    ),
                    React.createElement(
                        Option,
                        { value: '4' },
                        '\u5B8C\u7ED3'
                    )
                ) : null,
                tabskey == '4' ? React.createElement(
                    _select2.default,
                    { labelInValue: true, defaultValue: { key: status }, style: { width: 195 }, onChange: that.newState },
                    React.createElement(
                        Option,
                        { value: '0' },
                        '\u4E3E\u62A5\u4E2D'
                    ),
                    React.createElement(
                        Option,
                        { value: '1' },
                        '\u5DF2\u4E3E\u62A5'
                    ),
                    React.createElement(
                        Option,
                        { value: '2' },
                        '\u4E3E\u62A5\u6210\u529F'
                    ),
                    React.createElement(
                        Option,
                        { value: '3' },
                        '\u4E3E\u62A5\u5931\u8D25'
                    ),
                    React.createElement(
                        Option,
                        { value: '4' },
                        '\u5B8C\u7ED3'
                    )
                ) : null
            ),
            tabskey == '2' && newZT == '2' ? React.createElement(
                'div',
                { className: 'newstate' },
                React.createElement(
                    'div',
                    { className: 'newstate_left' },
                    '\u7269\u6D41\u5355\u53F7',
                    React.createElement(
                        'span',
                        { style: { color: 'red' } },
                        '*'
                    )
                ),
                React.createElement(_input2.default, { style: { width: '195px' }, placeholder: '\u8BF7\u8F93\u5165', value: newlogisticsNum, onChange: that.newLogisticsNum, className: '', maxLength: '24' })
            ) : null,
            tabskey == '2' && newZT == '8' && platform == 'TB' || tabskey == '2' && newZT == '8' && platform == 'TM' ? React.createElement(
                'div',
                { className: 'newstate' },
                React.createElement(
                    'div',
                    { className: 'newstate_left' },
                    '\u6295\u8BC9\u5355\u53F7*'
                ),
                React.createElement(_input2.default, { style: { width: '195px' }, placeholder: '\u8BF7\u8F93\u5165', value: newcomplainNum, onChange: that.newComplainNum, className: '', maxLength: '24' })
            ) : null,
            React.createElement(
                'div',
                { className: 'newstate' },
                React.createElement(
                    'div',
                    { className: 'newstate_left' },
                    '\u4E0B\u6B21\u8DDF\u8FDB\u65F6\u95F4'
                ),
                React.createElement(_datePicker2.default, {
                    // showTime
                    disabled: newZT == '4' ? true : false,
                    format: 'YYYY-MM-DD HH:mm:ss',
                    placeholder: '\u8BF7\u9009\u62E9\u65F6\u95F4',
                    onChange: that.nexttime,
                    onOk: that.onOk,
                    disabledDate: function disabledDate(currentDate) {
                        return currentDate && currentDate < moment().subtract(1, 'days');
                    },
                    showTime: { defaultValue: moment(moment().format('HH:mm:ss'), 'HH:mm:ss') }
                })
            ),
            React.createElement(
                'div',
                { className: 'newstate newImg' },
                React.createElement(
                    'div',
                    { className: 'newstate_left', style: { lineHeight: '24px' } },
                    '\u4E0A\u4F20\u622A\u56FE'
                ),
                React.createElement(PicturesWall, { that: that })
            ),
            React.createElement(
                'div',
                { className: 'newstate Attachment' },
                React.createElement(
                    'div',
                    { className: 'newstate_left' },
                    '\u4E0A\u4F20\u9644\u4EF6'
                ),
                React.createElement(
                    _upload2.default,
                    _extends({}, props, {
                        fileList: upfileList
                    }),
                    React.createElement(
                        _button2.default,
                        { className: 'imgupload' },
                        React.createElement(_icon2.default, { type: 'upload' }),
                        '\u9009\u62E9\u6587\u4EF6'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'newstate' },
                React.createElement(
                    'p',
                    { className: 'tips' },
                    '\u652F\u6301\u6269\u5C55\u540D\uFF1Axls.xlsx.ppt.rar.zip.doc.docx.pdf.\u6587\u4EF6\u4E0D\u5F97\u8D85\u8FC720M\u3002'
                )
            ),
            React.createElement(
                'div',
                { className: 'newstate' },
                React.createElement(
                    'div',
                    { className: 'newstate_left', style: { lineHeight: '24px' } },
                    '\u5907\u6CE8'
                ),
                React.createElement('textarea', { name: '', id: '', cols: '63', rows: '6', maxLength: '200', value: Remark, onChange: that.remark })
            ),
            React.createElement(
                'div',
                { className: 'newstate' },
                React.createElement(
                    'div',
                    { className: 'newbutton' },
                    React.createElement(
                        _button2.default,
                        { onClick: that.onClose, style: { float: 'right' } },
                        '\u53D6\u6D88'
                    ),
                    React.createElement(
                        _button2.default,
                        { onClick: that.newHistory, className: 'btn2-main', type: 'primary', style: { float: 'right', marginRight: 20 } },
                        '\u786E\u5B9A'
                    )
                )
            )
        ),
        React.createElement(
            TabPane,
            { tab: '\u5386\u53F2\u8BB0\u5F55', key: '2', className: 'Historical' },
            React.createElement(
                _timeline2.default,
                null,
                HistoryList
            )
        )
    );
    var bubble = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            shopname
        )
    );
    return React.createElement(
        'div',
        { className: 'content SpecialComplaint' },
        React.createElement(
            _drawer2.default,
            (_React$createElement = {
                title: null,
                placement: 'right',
                closable: false,
                onClose: that.onClose
                // maskClosable = {false}
                , visible: that.state.Draweroff,
                className: 'SpecialComplaint_Drawer'
            }, _defineProperty(_React$createElement, 'closable', true), _defineProperty(_React$createElement, 'destroyOnClose', true), _React$createElement),
            React.createElement(
                'div',
                { className: 'D_title' },
                React.createElement(
                    _row2.default,
                    { className: 'D_title_rowt' },
                    React.createElement(
                        _col2.default,
                        { span: 9, className: 'D_title_row_c9 ' },
                        React.createElement(
                            _popover2.default,
                            { content: bubble },
                            React.createElement(
                                'h3',
                                { className: 'titleowhidenn', style: { maxWidth: '243px' } },
                                shopname
                            )
                        ),
                        React.createElement(
                            'span',
                            { style: { float: 'left' } },
                            Shopicon
                        )
                    ),
                    React.createElement(
                        _col2.default,
                        { span: 15, className: 'D_title_row_c15', style: { paddingLeft: '35px' } },
                        React.createElement(
                            'p',
                            null,
                            '\u5F53\u524D\u72B6\u6001\uFF1A',
                            tabskey == '1' ? statusAll1[status] : tabskey == '2' ? statusAll2[status] : tabskey == '3' ? statusAll3[status] : statusAll4[status]
                        )
                    )
                ),
                React.createElement(
                    _row2.default,
                    { className: 'D_title_rowa' },
                    React.createElement(
                        _col2.default,
                        { span: 17, className: 'D_title_row_c15', style: {} },
                        React.createElement(
                            'span',
                            { style: { float: 'left' } },
                            '\u5546\u54C1\u94FE\u63A5\uFF1A'
                        ),
                        React.createElement(
                            'a',
                            { style: { WebkitBoxOrient: 'vertical' }, target: '_blank', href: shoplink },
                            shoplink
                        )
                    ),
                    React.createElement(
                        _col2.default,
                        { span: 4, className: 'D_title_row_c9', style: { float: 'right' } },
                        React.createElement(
                            'p',
                            null,
                            '\u7B2C',
                            React.createElement(
                                'span',
                                null,
                                '('
                            ),
                            React.createElement(
                                'span',
                                null,
                                processing_times
                            ),
                            ')',
                            React.createElement('span', null),
                            '\u6B21\u5904\u7406'
                        )
                    )
                )
            ),
            Identity == 'KEFU' ? null : hisList,
            Identity == 'KEFU' ? KEFUhisList : null
        ),
        React.createElement(
            _modal2.default,
            {
                title: '\u65B0\u589E',
                visible: that.state.NewComplaint,
                onOk: that.Newcomplaints,
                onCancel: that.Closecomplaints,
                className: 'newC',
                destroyOnClose: true
            },
            React.createElement(
                'div',
                { className: 'new_pss' },
                React.createElement(
                    'div',
                    { style: { width: '70px', float: 'left' } },
                    React.createElement(
                        'span',
                        null,
                        '\u5E73\u53F0\uFF1A'
                    )
                ),
                React.createElement(
                    _select2.default,
                    { labelInValue: true, defaultValue: { key: '请选择' }, style: { width: 120 }, onChange: that.newAchange },
                    React.createElement(
                        Option,
                        { value: '\u8BF7\u9009\u62E9' },
                        '\u8BF7\u9009\u62E9'
                    ),
                    platformDatalist
                )
            ),
            React.createElement(
                'div',
                { className: 'new_pss' },
                React.createElement(
                    'div',
                    { style: { width: '70px', float: 'left' } },
                    React.createElement(
                        'span',
                        null,
                        '\u5546\u5BB6\u540D\u79F0\uFF1A'
                    )
                ),
                React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165\uFF08\u963F\u91CC\u7CFB\u8BF7\u586B\u5199\u65FA\u65FA\u540D\u79F0\uFF09', value: newSJ, onChange: that.newsj, style: { width: '300px' }, maxLength: '24' })
            ),
            React.createElement(
                'div',
                { className: 'new_pss' },
                React.createElement(
                    'div',
                    { style: { width: '70px', float: 'left' } },
                    React.createElement(
                        'span',
                        null,
                        '\u5546\u54C1\u94FE\u63A5\uFF1A'
                    )
                ),
                React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165', value: newSP, onChange: that.newsp, style: { width: '300px' }, maxLength: '200' })
            )
        ),
        React.createElement(UploadModal, { that: that }),
        React.createElement(
            _tabs2.default,
            { defaultActiveKey: '1',
                animated: false,
                onChange: that.tabsKey
            },
            React.createElement(
                TabPane,
                { tab: '邮件处理(' + totalArr[0] + ')', key: '1' },
                content_search,
                React.createElement(
                    'div',
                    { className: 'content_S' },
                    Identity == 'KEFU' ? btngroup : null,
                    Identity == 'KEFU' ? React.createElement(
                        'div',
                        null,
                        React.createElement(_alert2.default, { className: 'checkNumber', message: React.createElement(
                                'div',
                                null,
                                '\u5171 ',
                                React.createElement(
                                    'a',
                                    null,
                                    totalElements
                                ),
                                ' \u9879\uFF0C\u5DF2\u9009\u62E9 ',
                                React.createElement(
                                    'a',
                                    null,
                                    selectedRowKeys.length == 0 ? 0 : checkAll == true ? totalElements : selectedRowKeys.length
                                ),
                                ' \u9879 ',
                                React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return that.DelecheckAll(true);
                                        } },
                                    '\u52FE\u9009\u5168\u90E8'
                                ),
                                '/',
                                React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return that.cancelcheckAll(false);
                                        } },
                                    '\u53D6\u6D88\u52FE\u9009'
                                )
                            ), type: 'info', showIcon: true })
                    ) : null,
                    React.createElement(_table2.default, { pagination: false, rowSelection: Identity == 'KEFU' ? rowSelection : null, columns: columns, dataSource: SCdata }),
                    React.createElement(
                        'div',
                        { className: 'footer' },
                        React.createElement('div', { className: 'info' }),
                        React.createElement(_pagination2.default, { total: totalElements, pageSize: pageSize, current: pageNo, showSizeChanger: true, showQuickJumper: true, onChange: that.changePagination, onShowSizeChange: that.onPaginationSize })
                    )
                )
            ),
            React.createElement(
                TabPane,
                { tab: '购买鉴定(' + totalArr[1] + ')', key: '2' },
                content_search,
                React.createElement(
                    'div',
                    { className: 'content_S' },
                    Identity == 'KEFU' ? btngroup : null,
                    Identity == 'KEFU' ? React.createElement(
                        'div',
                        null,
                        React.createElement(_alert2.default, { className: 'checkNumber', message: React.createElement(
                                'div',
                                null,
                                '\u5171 ',
                                React.createElement(
                                    'a',
                                    null,
                                    totalElements
                                ),
                                ' \u9879\uFF0C\u5DF2\u9009\u62E9 ',
                                React.createElement(
                                    'a',
                                    null,
                                    selectedRowKeys.length == 0 ? 0 : checkAll == true ? totalElements : selectedRowKeys.length
                                ),
                                ' \u9879 ',
                                React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return that.DelecheckAll(true);
                                        } },
                                    '\u52FE\u9009\u5168\u90E8'
                                ),
                                '/',
                                React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return that.cancelcheckAll(false);
                                        } },
                                    '\u53D6\u6D88\u52FE\u9009'
                                )
                            ), type: 'info', showIcon: true })
                    ) : null,
                    React.createElement(_table2.default, { pagination: false, rowSelection: Identity == 'KEFU' ? rowSelection : null, columns: columns, dataSource: SCdata }),
                    React.createElement(
                        'div',
                        { className: 'footer' },
                        React.createElement('div', { className: 'info' }),
                        React.createElement(_pagination2.default, { total: totalElements, pageSize: pageSize, current: pageNo, showSizeChanger: true, showQuickJumper: true, onChange: that.changePagination, onShowSizeChange: that.onPaginationSize })
                    )
                )
            ),
            React.createElement(
                TabPane,
                { tab: '通知处理(' + totalArr[2] + ')', key: '3' },
                content_search,
                React.createElement(
                    'div',
                    { className: 'content_S' },
                    Identity == 'KEFU' ? btngroup : null,
                    Identity == 'KEFU' ? React.createElement(
                        'div',
                        null,
                        React.createElement(_alert2.default, { className: 'checkNumber', message: React.createElement(
                                'div',
                                null,
                                '\u5171 ',
                                React.createElement(
                                    'a',
                                    null,
                                    totalElements
                                ),
                                ' \u9879\uFF0C\u5DF2\u9009\u62E9 ',
                                React.createElement(
                                    'a',
                                    null,
                                    selectedRowKeys.length == 0 ? 0 : checkAll == true ? totalElements : selectedRowKeys.length
                                ),
                                ' \u9879 ',
                                React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return that.DelecheckAll(true);
                                        } },
                                    '\u52FE\u9009\u5168\u90E8'
                                ),
                                '/',
                                React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return that.cancelcheckAll(false);
                                        } },
                                    '\u53D6\u6D88\u52FE\u9009'
                                )
                            ), type: 'info', showIcon: true })
                    ) : null,
                    React.createElement(_table2.default, { pagination: false, rowSelection: Identity == 'KEFU' ? rowSelection : null, columns: columns, dataSource: SCdata }),
                    React.createElement(
                        'div',
                        { className: 'footer' },
                        React.createElement('div', { className: 'info' }),
                        React.createElement(_pagination2.default, { total: totalElements, pageSize: pageSize, current: pageNo, showSizeChanger: true, showQuickJumper: true, onChange: that.changePagination, onShowSizeChange: that.onPaginationSize })
                    )
                )
            ),
            React.createElement(
                TabPane,
                { tab: '直接举报(' + totalArr[3] + ')', key: '4' },
                content_search,
                React.createElement(
                    'div',
                    { className: 'content_S' },
                    Identity == 'KEFU' ? btngroup : null,
                    Identity == 'KEFU' ? React.createElement(
                        'div',
                        null,
                        React.createElement(_alert2.default, { className: 'checkNumber', message: React.createElement(
                                'div',
                                null,
                                '\u5171 ',
                                React.createElement(
                                    'a',
                                    null,
                                    totalElements
                                ),
                                ' \u9879\uFF0C\u5DF2\u9009\u62E9 ',
                                React.createElement(
                                    'a',
                                    null,
                                    selectedRowKeys.length == 0 ? 0 : checkAll == true ? totalElements : selectedRowKeys.length
                                ),
                                ' \u9879 ',
                                React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return that.DelecheckAll(true);
                                        } },
                                    '\u52FE\u9009\u5168\u90E8'
                                ),
                                '/',
                                React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return that.cancelcheckAll(false);
                                        } },
                                    '\u53D6\u6D88\u52FE\u9009'
                                )
                            ), type: 'info', showIcon: true })
                    ) : null,
                    React.createElement(_table2.default, { pagination: false, rowSelection: Identity == 'KEFU' ? rowSelection : null, columns: columns, dataSource: SCdata }),
                    React.createElement(
                        'div',
                        { className: 'footer' },
                        React.createElement('div', { className: 'info' }),
                        React.createElement(_pagination2.default, { total: totalElements, pageSize: pageSize, current: pageNo, showSizeChanger: true, showQuickJumper: true, onChange: that.changePagination, onShowSizeChange: that.onPaginationSize })
                    )
                )
            )
        )
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/col/index.js":
/*!********************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/col/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grid */ "./node_modules/_antd@3.10.1@antd/es/grid/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_grid__WEBPACK_IMPORTED_MODULE_0__["Col"]);

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js":
/*!************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/col/style/css.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../grid/style/index.css */ "./node_modules/_antd@3.10.1@antd/es/grid/style/index.css");
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/grid/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/grid/index.js ***!
  \*********************************************************/
/*! exports provided: Row, Col */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row */ "./node_modules/_antd@3.10.1@antd/es/grid/row.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _row__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./col */ "./node_modules/_antd@3.10.1@antd/es/grid/col.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _col__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/grid/style/index.css":
/*!****************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/grid/style/index.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/row/index.js":
/*!********************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/row/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grid */ "./node_modules/_antd@3.10.1@antd/es/grid/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_grid__WEBPACK_IMPORTED_MODULE_0__["Row"]);

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js":
/*!************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/row/style/css.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../grid/style/index.css */ "./node_modules/_antd@3.10.1@antd/es/grid/style/index.css");
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_hasPath.js":
/*!*********************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_hasPath.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/_lodash@4.17.11@lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/_lodash@4.17.11@lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/_lodash@4.17.11@lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/_lodash@4.17.11@lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/_lodash@4.17.11@lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/_lodash@4.17.11@lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ })

}]);
//# sourceMappingURL=144_47a60090889801e59d01.js.map