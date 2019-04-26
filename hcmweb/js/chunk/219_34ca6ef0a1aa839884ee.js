(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[219],{

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

/***/ "./app/widget/index/Administrator/DepartmentManagement/main.js":
/*!*********************************************************************!*\
  !*** ./app/widget/index/Administrator/DepartmentManagement/main.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _tree = __webpack_require__(/*! antd/es/tree */ "./node_modules/_antd@3.10.1@antd/es/tree/index.js");

var _tree2 = _interopRequireDefault(_tree);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/tree/style/css */ "./node_modules/_antd@3.10.1@antd/es/tree/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Administrator/DepartmentManagement/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeNode = _tree2.default.TreeNode;
var Option = _select2.default.Option;

var FormItem = _form2.default.Item;

var DepartmentManagement = function (_React$Component) {
    _inherits(DepartmentManagement, _React$Component);

    function DepartmentManagement(props) {
        _classCallCheck(this, DepartmentManagement);

        var _this = _possibleConstructorReturn(this, (DepartmentManagement.__proto__ || Object.getPrototypeOf(DepartmentManagement)).call(this, props));
        // document.title = '部门管理';


        _this.onLoading = function () {

            _ajax2.default.post('/hcm/department/fuByIds', { //部门列表
                id: 0,
                bmcid: _this.props.match.params.id
            }).then(function (res) {
                if (res.data.status == 10000) {
                    _this.setState({
                        treeData: res.data.data,
                        HtWO: _this.props.match.params.tits
                    });
                }
            });
        };

        _this.onExpand = function (expandedKeys, type) {
            console.log(expandedKeys, type);
            _this.setState({
                expandedKeys: expandedKeys,
                autoExpandParent: false
            });
        };

        _this.handle = function () {
            _this.setState({
                NewFor: false
            });
        };

        _this.onSelect = function (selectedKeys, info) {
            _this.setState({
                selectedKeys: selectedKeys
            });
        };

        _this.renderTreeNodes = function (data) {

            // console.log(this.state.Addnew)
            return data.map(function (item, index) {
                if (item.subSysDepartment) {
                    var _getFieldDecorator = _this.props.form.getFieldDecorator;


                    return React.createElement(
                        TreeNode,
                        { title: React.createElement(
                                _form2.default,
                                { className: 'TreeBox', key: item.id, style: { display: "flex", width: "100%" } },
                                React.createElement(
                                    'div',
                                    { className: 'TreeBoxDiv' },
                                    React.createElement(
                                        'span',
                                        { className: 'TreeBoxSpan' },
                                        item.departName
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'TreeBoxDiv' },
                                    React.createElement(
                                        'span',
                                        { className: 'TreeBoxSpan' },
                                        '\u8D1F\u8D23\u4EBA\uFF1A',
                                        item.departLeader
                                    )
                                )
                            ), key: item.id, dataRef: item },
                        _this.renderTreeNodes(item.subSysDepartment)
                    );
                }
                var getFieldDecorator = _this.props.form.getFieldDecorator;


                return React.createElement(TreeNode, _extends({ key: item.id, title: React.createElement(
                        _form2.default,
                        { className: 'TreeBox', key: item.id, style: { display: "flex", width: "100%" } },
                        React.createElement(
                            'div',
                            { className: 'TreeBoxDiv' },
                            React.createElement(
                                'span',
                                { className: 'TreeBoxSpan' },
                                item.departName
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'TreeBoxDiv' },
                            React.createElement(
                                'span',
                                { className: 'TreeBoxSpan' },
                                '\u8D1F\u8D23\u4EBA\uFF1A',
                                item.departLeader
                            )
                        )
                    ) }, item));
            });
        };

        _this.state = {
            treeData: null,
            state: {
                expandedKeys: ['0-0-0', '0-0-1'],
                autoExpandParent: true,
                checkedKeys: ['0-0-0'],
                selectedKeys: []
            },
            children: [],
            childrenString: "",
            childrenBTPl: "",
            Edit: false,
            EditNone: false,
            NewFor: false,
            Addnew: false,
            subSysDepartment: "",
            HtWO: ""
        };
        return _this;
    }

    _createClass(DepartmentManagement, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.onLoading();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return DepartmentManagement;
}(React.Component);

exports.default = _form2.default.create()(DepartmentManagement);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/index/Administrator/DepartmentManagement/tpl.js":
/*!********************************************************************!*\
  !*** ./app/widget/index/Administrator/DepartmentManagement/tpl.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alert = __webpack_require__(/*! antd/es/alert */ "./node_modules/_antd@3.10.1@antd/es/alert/index.js");

var _alert2 = _interopRequireDefault(_alert);

var _tree = __webpack_require__(/*! antd/es/tree */ "./node_modules/_antd@3.10.1@antd/es/tree/index.js");

var _tree2 = _interopRequireDefault(_tree);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

__webpack_require__(/*! antd/es/alert/style/css */ "./node_modules/_antd@3.10.1@antd/es/alert/style/css.js");

__webpack_require__(/*! antd/es/tree/style/css */ "./node_modules/_antd@3.10.1@antd/es/tree/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _Copyright = __webpack_require__(/*! ../../../components/Copyright */ "./app/widget/components/Copyright.js");

var _Copyright2 = _interopRequireDefault(_Copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tpl = (0, _That2.default)(function (that) {

    var FormItem = _form2.default.Item;
    var Option = _select2.default.Option;
    var getFieldDecorator = that.props.form.getFieldDecorator;

    var TreeNode = _tree2.default.TreeNode;

    return React.createElement(
        _Layout2.default,
        {
            breadcrumbList: ['用户管理', '品牌方账号', '部门管理'],
            linkList: ['', '1', ''],
            history: that.props.history
        },
        React.createElement(
            'div',
            { className: 'DepartmentManagementb' },
            React.createElement(
                'div',
                { className: 'DepartmentManagementBOX' },
                React.createElement(
                    'h2',
                    null,
                    that.state.HtWO
                ),
                React.createElement(
                    'div',
                    { className: 'DepartmentManagementtit' },
                    that.state.treeData ? React.createElement(
                        _tree2.default,
                        {
                            showLine: true,
                            onExpand: that.onExpand,
                            expandedKeys: that.state.expandedKeys,
                            autoExpandParent: that.state.autoExpandParent,
                            checkedKeys: that.state.checkedKeys,
                            onSelect: that.onSelect,
                            selectedKeys: that.state.selectedKeys
                        },
                        that.renderTreeNodes(that.state.treeData)
                    ) : React.createElement(_alert2.default, { style: { textAlign: 'center' }, message: '\u6682\u65E0\u6570\u636E', type: 'error' })
                )
            )
        )
    );
});
exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=219_34ca6ef0a1aa839884ee.js.map