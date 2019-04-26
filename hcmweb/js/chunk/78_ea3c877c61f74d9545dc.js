(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

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

/***/ "./app/widget/components/FullSpin.js":
/*!*******************************************!*\
  !*** ./app/widget/components/FullSpin.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _spin = __webpack_require__(/*! antd/es/spin */ "./node_modules/_antd@3.10.1@antd/es/spin/index.js");

var _spin2 = _interopRequireDefault(_spin);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/spin/style/css */ "./node_modules/_antd@3.10.1@antd/es/spin/style/css.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullSpin = function (_React$Component) {
    _inherits(FullSpin, _React$Component);

    function FullSpin(props) {
        _classCallCheck(this, FullSpin);

        return _possibleConstructorReturn(this, (FullSpin.__proto__ || Object.getPrototypeOf(FullSpin)).call(this, props));
    }

    _createClass(FullSpin, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                _modal2.default,
                { maskClosable: false, className: 'full-spin', bodyStyle: { textAlign: 'center' }, footer: null, closable: false, visible: this.props.spinning },
                React.createElement(_spin2.default, { size: 'large', delay: 100, spinning: true, className: 'example', tip: 'Loading...' })
            );
        }
    }]);

    return FullSpin;
}(React.Component);

exports.default = FullSpin;
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

/***/ "./app/widget/components/SetTable/main.js":
/*!************************************************!*\
  !*** ./app/widget/components/SetTable/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkbox = __webpack_require__(/*! antd/es/checkbox */ "./node_modules/_antd@3.10.1@antd/es/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/checkbox/style/css */ "./node_modules/_antd@3.10.1@antd/es/checkbox/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/components/SetTable/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.formAtDom = function (type) {
            var arr = [];
            var data = _this.props.data;

            if (type) {
                var _loop = function _loop(key) {
                    arr.unshift(React.createElement(
                        'div',
                        { className: 'item', key: key },
                        React.createElement(
                            'p',
                            null,
                            data[key].title
                        ),
                        data[key].data.map(function (item, index) {
                            return React.createElement(
                                _checkbox2.default,
                                { onChange: function onChange(e) {
                                        return _this.props.oCheckitem(e, key, item, index);
                                    }, className: 'Checkbox', disabled: item.fieldRequired == '1', key: index, checked: item.isChecked },
                                item.fieldname
                            );
                        })
                    ));
                };

                for (var key in data) {
                    _loop(key);
                }
            } else {
                var _loop2 = function _loop2(key) {

                    data[key].data.forEach(function (item, index) {
                        if (item.isChecked) {
                            item.target = [key, index, item.fieldRequired];
                            return arr.push(item);
                        }
                    });
                };

                for (var key in data) {
                    _loop2(key);
                }
            }

            return arr;
        };

        _this.onDrop = function (info) {
            _this.setState({
                endId: info.node.props.eventKey
            }, function () {

                var dropPos = info.node.props.pos.split('-');
                var dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

                var _this$state = _this.state,
                    stateID = _this$state.stateID,
                    endId = _this$state.endId;

                var state = stateID.split(',');
                var end = endId.split(',');
                var data = _this.props.data;
                var endnum = data[end[0]].data[end[1]].sort;
                var statenum = data[state[0]].data[state[1]].sort;
                if (dropPosition === 0) {
                    data[end[0]].data[end[1]].sort = statenum;
                    data[state[0]].data[state[1]].sort = endnum;
                } else if (dropPosition > 0) {
                    data[state[0]].data[state[1]].sort = endnum + 0.01;
                } else if (dropPosition < 0) {
                    data[state[0]].data[state[1]].sort = endnum - 0.01;
                }
                _this.props.onSortList(data);
            });
        };

        _this.canCelItem = function (item) {
            _this.props.oCheckitem({ target: { checked: 0 } }, item.target[0], item, item.target[1]);
        };

        _this.onDragStart = function (info) {
            _this.setState({
                stateID: info.node.props.eventKey
            });
        };

        _this.state = {
            menuList: [],
            sortList: [],
            stateID: null,
            endId: null
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/components/SetTable/tpl.js":
/*!***********************************************!*\
  !*** ./app/widget/components/SetTable/tpl.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _tree = __webpack_require__(/*! antd/es/tree */ "./node_modules/_antd@3.10.1@antd/es/tree/index.js");

var _tree2 = _interopRequireDefault(_tree);

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/tree/style/css */ "./node_modules/_antd@3.10.1@antd/es/tree/style/css.js");

var _That = __webpack_require__(/*! ../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeNode = _tree2.default.TreeNode;
var Tpl = (0, _That2.default)(function (that) {
    var _that$props = that.props,
        data = _that$props.data,
        visible = _that$props.visible,
        clazzName = _that$props.clazzName,
        setTableStatus = _that$props.setTableStatus,
        onSubmit = _that$props.onSubmit;

    var checkData = that.formAtDom(false).sort(function (a, b) {
        return a.sort - b.sort;
    });

    return React.createElement(
        _modal2.default,
        {
            maskClosable: false,
            title: '设置表格',
            className: clazzName,
            visible: visible,
            onCancel: function onCancel() {
                return setTableStatus(false);
            },
            onOk: function onOk() {
                return onSubmit(checkData);
            },
            okButtonProps: { className: 'btn2-main' },
            cancelButtonProps: { className: 'btn2-sub' }
        },
        React.createElement(
            'div',
            { className: 'set-table-box' },
            React.createElement(
                'div',
                { className: 'info' },
                React.createElement(
                    'h3',
                    null,
                    '\u53EF\u7528\u5B57\u6BB5'
                ),
                React.createElement(
                    'div',
                    { className: 'box' },
                    that.formAtDom(true)
                )
            ),
            React.createElement(
                'div',
                { className: 'sort' },
                React.createElement(
                    'p',
                    null,
                    '\u5DF2\u9009\u5B57\u6BB5'
                ),
                React.createElement(
                    _tree2.default,
                    {
                        className: 'draggable-tree',
                        draggable: true,

                        onDragStart: function onDragStart(e) {
                            return that.onDragStart(e);
                        },
                        onDrop: function onDrop(e) {
                            return that.onDrop(e);
                        }
                    },
                    checkData.map(function (item, index) {
                        return React.createElement(TreeNode, { title: React.createElement(
                                'div',
                                { className: 'TreeNode-title' },
                                React.createElement(
                                    'span',
                                    null,
                                    item.fieldname
                                ),
                                item.fieldRequired == '1' ? null : React.createElement(_icon2.default, { onClick: function onClick() {
                                        return that.canCelItem(item);
                                    }, type: 'close-circle' })
                            ), key: item.target.join(',') });
                    })
                ),
                React.createElement(
                    'h6',
                    null,
                    '\u6309\u4F4F\u4E0A\u4E0B\u62D6\u52A8\u53EF\u6392\u5E8F'
                )
            )
        )
    );
});
exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./app/widget/index/Brand/ClientCheck/tpl.js":
/*!***************************************************!*\
  !*** ./app/widget/index/Brand/ClientCheck/tpl.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _switch = __webpack_require__(/*! antd/es/switch */ "./node_modules/_antd@3.10.1@antd/es/switch/index.js");

var _switch2 = _interopRequireDefault(_switch);

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _pagination = __webpack_require__(/*! antd/es/pagination */ "./node_modules/_antd@3.10.1@antd/es/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

var _table = __webpack_require__(/*! antd/es/table */ "./node_modules/_antd@3.10.1@antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _alert = __webpack_require__(/*! antd/es/alert */ "./node_modules/_antd@3.10.1@antd/es/alert/index.js");

var _alert2 = _interopRequireDefault(_alert);

var _dropdown = __webpack_require__(/*! antd/es/dropdown */ "./node_modules/_antd@3.10.1@antd/es/dropdown/index.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = __webpack_require__(/*! antd/es/menu */ "./node_modules/_antd@3.10.1@antd/es/menu/index.js");

var _menu2 = _interopRequireDefault(_menu);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/_antd@3.10.1@antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/switch/style/css */ "./node_modules/_antd@3.10.1@antd/es/switch/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/_antd@3.10.1@antd/es/pagination/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "./node_modules/_antd@3.10.1@antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/alert/style/css */ "./node_modules/_antd@3.10.1@antd/es/alert/style/css.js");

__webpack_require__(/*! antd/es/dropdown/style/css */ "./node_modules/_antd@3.10.1@antd/es/dropdown/style/css.js");

__webpack_require__(/*! antd/es/menu/style/css */ "./node_modules/_antd@3.10.1@antd/es/menu/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/_antd@3.10.1@antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

var _That = __webpack_require__(/*! ../../../HOC/That */ "./app/widget/HOC/That.js");

var _That2 = _interopRequireDefault(_That);

var _Layout = __webpack_require__(/*! ../../../components/Layout */ "./app/widget/components/Layout/index.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _Component = __webpack_require__(/*! ../../../components/Component */ "./app/widget/components/Component.js");

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/_react-copy-to-clipboard@5.0.1@react-copy-to-clipboard/lib/index.js");

var _main = __webpack_require__(/*! ../../../components/TagInput/main */ "./app/widget/components/TagInput/main.js");

var _main2 = _interopRequireDefault(_main);

var _main3 = __webpack_require__(/*! ../ClientDetail/main */ "./app/widget/index/Brand/ClientDetail/main.js");

var _main4 = _interopRequireDefault(_main3);

var _FullSpin = __webpack_require__(/*! ../../../components/FullSpin */ "./app/widget/components/FullSpin.js");

var _FullSpin2 = _interopRequireDefault(_FullSpin);

var _main5 = __webpack_require__(/*! ../../../components/SetTable/main */ "./app/widget/components/SetTable/main.js");

var _main6 = _interopRequireDefault(_main5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tpl = (0, _That2.default)(function (that) {
    return React.createElement(
        _Layout2.default,
        {
            breadcrumbList: ['渠道盘点', '经销商档案'],
            linkList: ['', '']
        },
        React.createElement(
            'div',
            { className: 'clientcheck' },
            React.createElement(ClientCheck, { that: that })
        )
    );
});

var ClientCheck = (0, _That2.default)(function (that) {
    var _that$state = that.state,
        dataList = _that$state.dataList,
        spinning = _that$state.spinning,
        setTableData = _that$state.setTableData,
        selectedRowKeys = _that$state.selectedRowKeys,
        dealername = _that$state.dealername,
        bossid = _that$state.bossid,
        takePeople = _that$state.takePeople,
        contact = _that$state.contact,
        memoDealername = _that$state.memoDealername,
        setTableStatus = _that$state.setTableStatus,
        totalNum = _that$state.totalNum,
        pageSize = _that$state.pageSize,
        pageNo = _that$state.pageNo,
        checkAll = _that$state.checkAll;

    var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: function onChange(selectedRowKeys) {
            return that.onTableCheckChange(selectedRowKeys);
        }
    };
    var clearIconStyle = {
        width: '14px',
        height: '14px',
        opacity: 0.25,
        cursor: 'pointer'
    };
    var clearIcon = function clearIcon(fieldName) {
        return that.state[fieldName] && that.state[fieldName].length ? React.createElement(_icon2.default, {
            type: 'close-circle',
            onClick: function onClick() {
                return that.handleClearIconClick(fieldName);
            },
            style: clearIconStyle
        }) : null;
    };
    return React.createElement(
        'div',
        { className: 'content ClientCheck' },
        React.createElement(
            'div',
            { className: 'search-box' },
            React.createElement(
                'div',
                { className: 'input-box' },
                React.createElement(
                    'div',
                    { className: 'item' },
                    React.createElement(
                        'span',
                        { className: 'lab' },
                        '\u5BA2\u6237\u540D\u79F0:'
                    ),
                    React.createElement(_input2.default, {
                        placeholder: '\u8BF7\u8F93\u5165',
                        onChange: function onChange(e) {
                            return that.chSearchIpt(e, 'dealername');
                        },
                        value: dealername,
                        suffix: clearIcon('dealername'),
                        className: 'ipt' })
                ),
                React.createElement(
                    'div',
                    { className: 'item' },
                    React.createElement(
                        'span',
                        { className: 'lab' },
                        '\u5907\u6CE8\u540D\u79F0:'
                    ),
                    React.createElement(_input2.default, {
                        placeholder: '\u8BF7\u8F93\u5165',
                        onChange: function onChange(e) {
                            return that.chSearchIpt(e, 'memoDealername');
                        },
                        value: memoDealername,
                        suffix: clearIcon('memoDealername'),
                        className: 'ipt' })
                ),
                React.createElement(
                    'div',
                    { className: 'item' },
                    React.createElement(
                        'span',
                        { className: 'lab' },
                        '\u76F4\u5C5E\u4E0A\u7EA7:'
                    ),
                    React.createElement(_input2.default, {
                        placeholder: '\u8BF7\u8F93\u5165',
                        onChange: function onChange(e) {
                            return that.chSearchIpt(e, 'bossid');
                        },
                        value: bossid,
                        suffix: clearIcon('bossid'),
                        className: 'ipt' })
                )
            ),
            React.createElement(
                'div',
                { className: 'input-box' },
                React.createElement(
                    'div',
                    { className: 'item' },
                    React.createElement(
                        'span',
                        { className: 'lab' },
                        '\u5BF9\u63A5\u4EBA:'
                    ),
                    React.createElement(_input2.default, {
                        placeholder: '\u8BF7\u8F93\u5165',
                        onChange: function onChange(e) {
                            return that.chSearchIpt(e, 'takePeople');
                        },
                        value: takePeople,
                        suffix: clearIcon('takePeople'),
                        className: 'ipt' })
                ),
                React.createElement(
                    'div',
                    { className: 'item' },
                    React.createElement(
                        'span',
                        { className: 'lab' },
                        '\u8054\u7CFB\u65B9\u5F0F:'
                    ),
                    React.createElement(_input2.default, {
                        placeholder: '\u8BF7\u8F93\u5165',
                        onChange: function onChange(e) {
                            return that.chSearchIpt(e, 'contact');
                        },
                        value: contact,
                        suffix: clearIcon('contact'),
                        className: 'ipt' })
                ),
                React.createElement(
                    'div',
                    { style: { justifyContent: 'flex-end' }, className: 'item' },
                    React.createElement(
                        _button2.default,
                        { className: 'btn6 seh', onClick: function onClick(e) {
                                return that.onSearch();
                            } },
                        '\u67E5\u8BE2'
                    )
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'button-box' },
            React.createElement(
                'div',
                { className: 'action' },
                React.createElement(
                    _button2.default,
                    { className: 'btn1-main', onClick: function onClick() {
                            return that.addModalStatus(true);
                        }, type: 'primary' },
                    React.createElement(_Component.AddIcon, { style: { paddingRight: 8 } }),
                    '\u65B0\u589E'
                ),
                React.createElement(
                    _button2.default,
                    { className: 'btn1-sub', onClick: function onClick() {
                            return that.allStopConfirm('all', null);
                        } },
                    '\u6279\u91CF\u5408\u540C\u5230\u671F'
                ),
                React.createElement(
                    'a',
                    { href: '/hcm/dealer/download?' + (dealername ? 'dealername=' + dealername : '') + (bossid ? '&bossid=' + bossid : '') + (takePeople ? '&takePeople=' + takePeople : '') + (contact ? '&contact=' + contact : '') + (memoDealername ? '&memoDealername=' + memoDealername : '') },
                    React.createElement(
                        _button2.default,
                        { className: 'btn1-sub' },
                        '\u4E0B\u8F7D\u6570\u636E'
                    )
                ),
                React.createElement(
                    _button2.default,
                    { className: 'btn1-sub', onClick: function onClick() {
                            return that.inviteLinkStatus(true);
                        } },
                    '\u83B7\u53D6\u9080\u8BF7\u94FE\u63A5'
                )
            ),
            React.createElement(
                'div',
                { className: 'info' },
                +dataList.waitApprovedCount > 0 ? React.createElement(
                    _button2.default,
                    { href: '/index.html#/PendingClient', className: 'TYPE1-BUTTON' },
                    '\u5F85\u5BA1\u6279\u5BA2\u6237(',
                    dataList.waitApprovedCount,
                    ')'
                ) : null,
                React.createElement(
                    _button2.default,
                    { href: '/index.html#/ExpiringClientList', className: 'TYPE1-BUTTON' },
                    '\u5408\u540C\u5230\u671F(',
                    dataList.statusStopCount,
                    ')'
                ),
                React.createElement(
                    _button2.default,
                    { className: 'btn1-sub', href: '/index.html#/ChangeHistorys/DEALER_DELETE' },
                    '\u53D8\u66F4\u5386\u53F2'
                ),
                React.createElement(
                    _dropdown2.default,
                    { overlay: React.createElement(
                            _menu2.default,
                            null,
                            React.createElement(
                                _menu2.default.Item,
                                null,
                                React.createElement(
                                    'a',
                                    { href: '/index.html#/CustomFields' },
                                    '\u81EA\u5B9A\u4E49\u5B57\u6BB5'
                                )
                            ),
                            React.createElement(
                                _menu2.default.Item,
                                null,
                                React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return that.setTableStatus(true);
                                        } },
                                    '\u8BBE\u7F6E\u8868\u683C'
                                )
                            )
                        ) },
                    React.createElement(_icon2.default, { type: 'setting' })
                )
            )
        ),
        React.createElement(
            'div',
            { style: { padding: '11px 10px 0px 10px' } },
            React.createElement(_alert2.default, { message: React.createElement(
                    'div',
                    null,
                    '\u5171 ',
                    React.createElement(
                        'a',
                        null,
                        totalNum
                    ),
                    ' \u9879\uFF0C\u5DF2\u9009\u62E9 ',
                    React.createElement(
                        'a',
                        null,
                        checkAll ? totalNum : selectedRowKeys.length
                    ),
                    ' \u9879 ',
                    React.createElement(
                        'a',
                        { onClick: function onClick() {
                                return that.checkAll(true);
                            } },
                        '\u52FE\u9009\u5168\u90E8'
                    ),
                    '/',
                    React.createElement(
                        'a',
                        { onClick: function onClick() {
                                return that.checkAll(false);
                            } },
                        '\u53D6\u6D88\u52FE\u9009'
                    )
                ), type: 'info', showIcon: true })
        ),
        React.createElement(
            'div',
            { className: 'content-tab' },
            React.createElement(_table2.default, { rowKey: 'id', pagination: false, scroll: { x: that.formatColumn().length - 1 * 300 + 100 }, rowSelection: rowSelection, columns: that.formatColumn(), dataSource: dataList.dealer_list }),
            React.createElement(
                'div',
                { className: 'footer' },
                React.createElement(
                    'div',
                    { className: 'info' },
                    '\u5171 ' + totalNum + ' \u6761\u8BB0\u5F55 ',
                    '\xA0\xA0',
                    '\u7B2C  ' + pageNo + '  / ' + Math.ceil(totalNum / pageSize) + ' \u9875'
                ),
                React.createElement(_pagination2.default, { pageSize: pageSize, current: pageNo, total: totalNum, onChange: that.changePagination, onShowSizeChange: that.onPaginationSize, showSizeChanger: true, showQuickJumper: true })
            )
        ),
        React.createElement(_main6.default, { onSubmit: function onSubmit(data) {
                return that.onSortSubmit(data);
            }, onSortList: function onSortList(data) {
                return that.onSortList(data);
            }, oCheckitem: function oCheckitem(e, key, item, index) {
                return that.oCheckitem(e, key, item, index);
            }, data: setTableData, visible: setTableStatus, setTableStatus: function setTableStatus(bl) {
                return that.setTableStatus(bl);
            }, clazzName: 'set-table' }),
        React.createElement(InviteLink, { that: that }),
        React.createElement(AppLink, { that: that }),
        React.createElement(AddModal, { that: that }),
        React.createElement(_FullSpin2.default, { spinning: spinning }),
        React.createElement(_main4.default, { appLinkStatusStatus: function appLinkStatusStatus() {
                return that.appLinkStatusStatus(true);
            }, ref: that.ClientDetail })
    );
});

var AddModal = (0, _That2.default)(function (that) {
    var _that$state2 = that.state,
        addModalStatus = _that$state2.addModalStatus,
        clientNames = _that$state2.clientNames,
        tokenSeparators = _that$state2.tokenSeparators;


    return React.createElement(
        _modal2.default,
        {
            maskClosable: false,
            title: '新增',
            wrapClassName: 'boxModal',
            visible: addModalStatus,
            onOk: function onOk() {
                return that.onSubClients();
            },
            onCancel: function onCancel() {
                return that.addModalStatus(false);
            },
            okButtonProps: { className: 'btn2-main' },
            cancelButtonProps: { className: 'btn2-sub' }
        },
        React.createElement(
            'div',
            { className: 'Selectbox' },
            React.createElement(
                'p',
                null,
                '\u5BA2\u6237\u540D\u79F0:'
            ),
            React.createElement(_main2.default, {
                className: '',
                style: { width: 376, height: 300 },
                value: clientNames,
                placeholder: ' \u8BF7\u8F93\u5165\u5BA2\u6237\u516C\u53F8\u540D\u79F0,\u4E00\u884C\u4E00\u4E2A\uFF0C\u53EF\u591A\u4E2A\uFF0C\u6700\u591A300\u4E2A.',
                onChange: function onChange(value) {
                    return that.addClientChange(value);
                },
                maxText: 64
            })
        ),
        React.createElement(
            'div',
            { className: 'alertbox' },
            React.createElement(
                'p',
                null,
                '\u8BF4\u660E:'
            ),
            React.createElement(
                'p',
                null,
                '\u4E3A\u4E86\u4FDD\u8BC1\u4FE1\u606F\u5339\u914D\u7CBE\u51C6\u5EA6\uFF0C\u8BF7\u8F93\u5165\u5BA2\u6237\u516C\u53F8\u7684\u5168\u79F0\u3002\u6682\u4E0D\u652F\u6301\u975E\u516C\u53F8\u7C7B\u578B\u5BA2\u6237\u3002'
            )
        )
    );
});
var InviteLink = (0, _That2.default)(function (that) {
    var _that$state3 = that.state,
        inviteLinkStatus = _that$state3.inviteLinkStatus,
        linkSwitch = _that$state3.linkSwitch,
        dataList = _that$state3.dataList;


    return React.createElement(
        _modal2.default,
        {
            maskClosable: false,
            title: '邀请链接',
            visible: inviteLinkStatus,
            footer: [React.createElement(
                _button2.default,
                { className: 'btn2-sub noneFloat', key: 'back', onClick: function onClick() {
                        return that.inviteLinkStatus(false);
                    } },
                '\u53D6\u6D88'
            )],
            onCancel: function onCancel() {
                return that.inviteLinkStatus(false);
            }
        },
        React.createElement(
            'div',
            { className: 'inviteLinkbox' },
            React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    'span',
                    { className: 'title' },
                    '\u9080\u8BF7\u72B6\u6001\uFF1A'
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement(_switch2.default, { checked: linkSwitch, onChange: function onChange(checked) {
                            return that.inviteLinkSwitch(checked);
                        } }),
                    React.createElement(
                        'span',
                        { style: { marginLeft: '20px', color: '#999' } },
                        '\u5173\u95ED\u540E\uFF0C\u9080\u8BF7\u94FE\u63A5\u5C06\u5931\u6548\u3002'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    'span',
                    { className: 'title' },
                    '\u9080\u8BF7\u94FE\u63A5\uFF1A'
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement(_input2.default, { disabled: !linkSwitch, onChange: function onChange() {
                            return null;
                        }, value: window.location.origin + '/user.html#/Registered/' + (dataList.bmainCustomer ? dataList.bmainCustomer.invitecode : null) })
                )
            ),
            React.createElement(
                'div',
                { className: 'item', style: { padding: '0 0 50px 100px' } },
                React.createElement(
                    _reactCopyToClipboard.CopyToClipboard,
                    { text: window.location.origin + '/user.html#/Registered/' + (dataList.bmainCustomer ? dataList.bmainCustomer.invitecode : null),
                        onCopy: function onCopy() {
                            return _message3.default.success('链接成功复制至粘贴板');
                        } },
                    React.createElement(
                        _button2.default,
                        { disabled: !linkSwitch },
                        '\u590D\u5236\u9080\u8BF7\u94FE\u63A5'
                    )
                )
            )
        )
    );
});
var AppLink = (0, _That2.default)(function (that) {
    var appLinkStatus = that.state.appLinkStatus;


    return React.createElement(
        _modal2.default,
        {
            title: '获取应用订购链接',
            visible: appLinkStatus,
            maskClosable: false,
            footer: [React.createElement(
                _button2.default,
                { key: 'back', onClick: function onClick() {
                        return that.appLinkStatusStatus(false);
                    } },
                '\u53D6\u6D88'
            )],
            onCancel: function onCancel() {
                return that.appLinkStatusStatus(false);
            }
        },
        React.createElement(
            'div',
            { className: 'inviteLinkbox' },
            React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    'span',
                    { className: 'title' },
                    '\u8BA2\u8D2D\u94FE\u63A5\uFF1A'
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement(_input2.default, { onChange: function onChange() {
                            return null;
                        }, value: 'https://tb.cn/5VFmCNw' })
                )
            ),
            React.createElement(
                'div',
                { className: 'item', style: { padding: '0 0 10px 100px', marginTop: '13px' } },
                React.createElement(
                    _reactCopyToClipboard.CopyToClipboard,
                    { text: 'https://tb.cn/5VFmCNw',
                        onCopy: function onCopy() {
                            return _message3.default.success('链接成功复制至粘贴板');
                        } },
                    React.createElement(
                        _button2.default,
                        null,
                        '\u590D\u5236\u8BA2\u8D2D\u94FE\u63A5'
                    )
                )
            ),
            React.createElement(
                'p',
                { style: { padding: '0 0 10px 100px' } },
                '\u590D\u5236\u8BA2\u8D2D\u94FE\u63A5\uFF0C\u53D1\u9001\u7ED9\u7ECF\u9500\u5546\u5E97\u94FA\u8BA2\u8D2D\u5E94\u7528'
            )
        )
    );
});

exports.default = Tpl;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=78_ea3c877c61f74d9545dc.js.map