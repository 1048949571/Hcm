(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/_antd@3.10.1@antd/es/tree-select/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/tree-select/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_tree_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-tree-select */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/_antd@3.10.1@antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_util/warning */ "./node_modules/_antd@3.10.1@antd/es/_util/warning.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! omit.js */ "./node_modules/_omit.js@1.0.0@omit.js/es/index.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};








var TreeSelect = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TreeSelect, _React$Component);

    function TreeSelect(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TreeSelect);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (TreeSelect.__proto__ || Object.getPrototypeOf(TreeSelect)).call(this, props));

        _this.saveTreeSelect = function (node) {
            _this.rcTreeSelect = node;
        };
        _this.renderSwitcherIcon = function (_ref) {
            var isLeaf = _ref.isLeaf,
                loading = _ref.loading;
            var prefixCls = _this.props.prefixCls;

            if (loading) {
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_11__["default"], { type: 'loading', className: prefixCls + '-switcher-loading-icon' });
            }
            if (isLeaf) {
                return null;
            }
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_11__["default"], { type: 'caret-down', className: prefixCls + '-switcher-icon' });
        };
        _this.renderTreeSelect = function (locale) {
            var _classNames;

            var _a = _this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                size = _a.size,
                notFoundContent = _a.notFoundContent,
                dropdownStyle = _a.dropdownStyle,
                dropdownClassName = _a.dropdownClassName,
                suffixIcon = _a.suffixIcon,
                restProps = __rest(_a, ["prefixCls", "className", "size", "notFoundContent", "dropdownStyle", "dropdownClassName", "suffixIcon"]);
            var rest = Object(omit_js__WEBPACK_IMPORTED_MODULE_12__["default"])(restProps, ['inputIcon', 'removeIcon', 'clearIcon', 'switcherIcon']);
            var cls = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-lg', size === 'large'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-sm', size === 'small'), _classNames), className);
            var checkable = rest.treeCheckable;
            if (checkable) {
                checkable = react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('span', { className: prefixCls + '-tree-checkbox-inner' });
            }
            var inputIcon = suffixIcon && (react__WEBPACK_IMPORTED_MODULE_6__["isValidElement"](suffixIcon) ? react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](suffixIcon) : suffixIcon) || react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_11__["default"], { type: 'down', className: prefixCls + '-arrow-icon' });
            var removeIcon = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_11__["default"], { type: 'close', className: prefixCls + '-remove-icon' });
            var clearIcon = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_11__["default"], { type: 'close-circle', className: prefixCls + '-clear-icon', theme: 'filled' });
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_tree_select__WEBPACK_IMPORTED_MODULE_7__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ switcherIcon: _this.renderSwitcherIcon, inputIcon: inputIcon, removeIcon: removeIcon, clearIcon: clearIcon }, rest, { dropdownClassName: classnames__WEBPACK_IMPORTED_MODULE_8___default()(dropdownClassName, prefixCls + '-tree-dropdown'), prefixCls: prefixCls, className: cls, dropdownStyle: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ maxHeight: '100vh', overflow: 'auto' }, dropdownStyle), treeCheckable: checkable, notFoundContent: notFoundContent || locale.notFoundContent, ref: _this.saveTreeSelect }));
        };
        Object(_util_warning__WEBPACK_IMPORTED_MODULE_10__["default"])(props.multiple !== false || !props.treeCheckable, '`multiple` will alway be `true` when `treeCheckable` is true');
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TreeSelect, [{
        key: 'focus',
        value: function focus() {
            this.rcTreeSelect.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcTreeSelect.blur();
        }
    }, {
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_9__["default"],
                { componentName: 'Select', defaultLocale: {} },
                this.renderTreeSelect
            );
        }
    }]);

    return TreeSelect;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TreeSelect);

TreeSelect.TreeNode = rc_tree_select__WEBPACK_IMPORTED_MODULE_7__["TreeNode"];
TreeSelect.SHOW_ALL = rc_tree_select__WEBPACK_IMPORTED_MODULE_7__["SHOW_ALL"];
TreeSelect.SHOW_PARENT = rc_tree_select__WEBPACK_IMPORTED_MODULE_7__["SHOW_PARENT"];
TreeSelect.SHOW_CHILD = rc_tree_select__WEBPACK_IMPORTED_MODULE_7__["SHOW_CHILD"];
TreeSelect.defaultProps = {
    prefixCls: 'ant-select',
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
    showSearch: false
};

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/tree-select/style/css.js":
/*!********************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/tree-select/style/css.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/tree-select/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _select_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");
/* harmony import */ var _checkbox_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../checkbox/style/css */ "./node_modules/_antd@3.10.1@antd/es/checkbox/style/css.js");


// style dependencies



/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/tree-select/style/index.css":
/*!***********************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/tree-select/style/index.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Base/BasePopup.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Base/BasePopup.js ***!
  \********************************************************************************/
/*! exports provided: popupContextTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupContextTypes", function() { return popupContextTypes; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/_react-lifecycles-compat@3.0.4@react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var rc_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-tree */ "./node_modules/_rc-tree@1.14.8@rc-tree/es/index.js");










var popupContextTypes = {
  onPopupKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  onTreeNodeSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  onTreeNodeCheck: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};

var BasePopup = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(BasePopup, _React$Component);

  function BasePopup(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BasePopup);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (BasePopup.__proto__ || Object.getPrototypeOf(BasePopup)).call(this));

    _initialiseProps.call(_this);

    var treeDefaultExpandAll = props.treeDefaultExpandAll,
        treeDefaultExpandedKeys = props.treeDefaultExpandedKeys,
        keyEntities = props.keyEntities;

    // TODO: make `expandedKeyList` control

    var expandedKeyList = treeDefaultExpandedKeys;
    if (treeDefaultExpandAll) {
      expandedKeyList = Object.keys(keyEntities);
    }

    _this.state = {
      keyList: [],
      expandedKeyList: expandedKeyList,
      loadedKeys: []
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BasePopup, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          keyList = _state.keyList,
          expandedKeyList = _state.expandedKeyList,
          loadedKeys = _state.loadedKeys;
      var _props = this.props,
          prefixCls = _props.prefixCls,
          treeNodes = _props.treeNodes,
          filteredTreeNodes = _props.filteredTreeNodes,
          treeIcon = _props.treeIcon,
          treeLine = _props.treeLine,
          treeCheckable = _props.treeCheckable,
          treeCheckStrictly = _props.treeCheckStrictly,
          multiple = _props.multiple,
          loadData = _props.loadData,
          ariaId = _props.ariaId,
          renderSearch = _props.renderSearch,
          switcherIcon = _props.switcherIcon;
      var _context$rcTreeSelect = this.context.rcTreeSelect,
          onPopupKeyDown = _context$rcTreeSelect.onPopupKeyDown,
          onTreeNodeSelect = _context$rcTreeSelect.onTreeNodeSelect,
          onTreeNodeCheck = _context$rcTreeSelect.onTreeNodeCheck;


      var treeProps = {};

      if (treeCheckable) {
        treeProps.checkedKeys = keyList;
      } else {
        treeProps.selectedKeys = keyList;
      }

      var $notFound = void 0;
      var $treeNodes = void 0;
      if (filteredTreeNodes) {
        if (filteredTreeNodes.length) {
          treeProps.checkStrictly = true;
          $treeNodes = filteredTreeNodes;
        } else {
          $notFound = this.renderNotFound();
        }
      } else if (!treeNodes.length) {
        $notFound = this.renderNotFound();
      } else {
        $treeNodes = treeNodes;
      }

      var $tree = void 0;
      if ($notFound) {
        $tree = $notFound;
      } else {
        $tree = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          rc_tree__WEBPACK_IMPORTED_MODULE_8__["default"],
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            prefixCls: prefixCls + '-tree',
            showIcon: treeIcon,
            showLine: treeLine,
            selectable: !treeCheckable,
            checkable: treeCheckable,
            checkStrictly: treeCheckStrictly,
            multiple: multiple,
            loadData: loadData,
            loadedKeys: loadedKeys,
            expandedKeys: expandedKeyList,
            filterTreeNode: this.filterTreeNode,
            onSelect: onTreeNodeSelect,
            onCheck: onTreeNodeCheck,
            onExpand: this.onTreeExpand,
            onLoad: this.onLoad,
            switcherIcon: switcherIcon
          }, treeProps),
          $treeNodes
        );
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        {
          role: 'listbox',
          id: ariaId,
          onKeyDown: onPopupKeyDown,
          tabIndex: -1
        },
        renderSearch ? renderSearch() : null,
        $tree
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var _ref = prevState || {},
          _ref$prevProps = _ref.prevProps,
          prevProps = _ref$prevProps === undefined ? {} : _ref$prevProps,
          loadedKeys = _ref.loadedKeys;

      var valueList = nextProps.valueList,
          valueEntities = nextProps.valueEntities,
          keyEntities = nextProps.keyEntities,
          filteredTreeNodes = nextProps.filteredTreeNodes;


      var newState = {
        prevProps: nextProps
      };

      // Check value update
      if (valueList !== prevProps.valueList) {
        newState.keyList = valueList.map(function (_ref2) {
          var value = _ref2.value;
          return valueEntities[value];
        }).filter(function (entity) {
          return entity;
        }).map(function (_ref3) {
          var key = _ref3.key;
          return key;
        });
      }

      // Show all when tree is in filter mode
      if (!nextProps.treeExpandedKeys && filteredTreeNodes && filteredTreeNodes.length && filteredTreeNodes !== prevProps.filteredTreeNodes) {
        newState.expandedKeyList = Object.keys(keyEntities);
      }

      // Use expandedKeys if provided
      if (prevProps.treeExpandedKeys !== nextProps.treeExpandedKeys) {
        newState.expandedKeyList = nextProps.treeExpandedKeys;
      }

      // Clean loadedKeys if key not exist in keyEntities anymore
      if (nextProps.loadData) {
        newState.loadedKeys = loadedKeys.filter(function (key) {
          return key in keyEntities;
        });
      }

      return newState;
    }

    /**
     * This method pass to Tree component which is used for add filtered class
     * in TreeNode > li
     */

  }]);

  return BasePopup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

BasePopup.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  upperSearchValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  valueList: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  valueEntities: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  keyEntities: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  treeIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  treeLine: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  treeNodeFilterProp: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  treeCheckable: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node]),
  treeCheckStrictly: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  treeDefaultExpandAll: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  treeDefaultExpandedKeys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  treeExpandedKeys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  loadData: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  onTreeExpand: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  treeNodes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
  filteredTreeNodes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
  notFoundContent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,

  ariaId: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  switcherIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func]),

  // HOC
  renderSearch: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onTreeExpanded: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
BasePopup.contextTypes = {
  rcTreeSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, popupContextTypes))
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onTreeExpand = function (expandedKeyList) {
    var _props2 = _this2.props,
        treeExpandedKeys = _props2.treeExpandedKeys,
        onTreeExpand = _props2.onTreeExpand,
        onTreeExpanded = _props2.onTreeExpanded;

    // Set uncontrolled state

    if (!treeExpandedKeys) {
      _this2.setState({ expandedKeyList: expandedKeyList }, onTreeExpanded);
    }

    if (onTreeExpand) {
      onTreeExpand(expandedKeyList);
    }
  };

  this.onLoad = function (loadedKeys) {
    _this2.setState({ loadedKeys: loadedKeys });
  };

  this.filterTreeNode = function (treeNode) {
    var _props3 = _this2.props,
        upperSearchValue = _props3.upperSearchValue,
        treeNodeFilterProp = _props3.treeNodeFilterProp;


    var filterVal = treeNode.props[treeNodeFilterProp];
    if (typeof filterVal === 'string') {
      return upperSearchValue && filterVal.toUpperCase().indexOf(upperSearchValue) !== -1;
    }

    return false;
  };

  this.renderNotFound = function () {
    var _props4 = _this2.props,
        prefixCls = _props4.prefixCls,
        notFoundContent = _props4.notFoundContent;


    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      'span',
      { className: prefixCls + '-not-found' },
      notFoundContent
    );
  };
};

Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_7__["polyfill"])(BasePopup);

/* harmony default export */ __webpack_exports__["default"] = (BasePopup);

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Base/BaseSelector.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Base/BaseSelector.js ***!
  \***********************************************************************************/
/*! exports provided: selectorPropTypes, selectorContextTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorPropTypes", function() { return selectorPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorContextTypes", function() { return selectorContextTypes; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/_react-lifecycles-compat@3.0.4@react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/util.js");






/**
 * Input Box is in different position for different mode.
 * This not the same design as `Select` cause it's followed by antd 0.x `Select`.
 * We will not follow the new design immediately since antd 3.x is already released.
 *
 * So this file named as Selector to avoid confuse.
 */







var selectorPropTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  open: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  valueList: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array, // Name as valueList to diff the single value
  allowClear: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  showArrow: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  removeSelected: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  // Pass by component
  ariaId: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  inputIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func]),
  clearIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func])
};

var selectorContextTypes = {
  onSelectorFocus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  onSelectorBlur: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  onSelectorKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  onSelectorClear: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (function (modeName) {
  var BaseSelector = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BaseSelector, _React$Component);

    function BaseSelector() {
      babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, BaseSelector);

      var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (BaseSelector.__proto__ || Object.getPrototypeOf(BaseSelector)).call(this));

      _this.onFocus = function () {
        var _this$props = _this.props,
            onFocus = _this$props.onFocus,
            focused = _this$props.focused;
        var onSelectorFocus = _this.context.rcTreeSelect.onSelectorFocus;


        if (!focused) {
          onSelectorFocus();
        }

        if (onFocus) {
          onFocus.apply(undefined, arguments);
        }
      };

      _this.onBlur = function () {
        var onBlur = _this.props.onBlur;
        var onSelectorBlur = _this.context.rcTreeSelect.onSelectorBlur;

        // TODO: Not trigger when is inner component get focused

        onSelectorBlur();

        if (onBlur) {
          onBlur.apply(undefined, arguments);
        }
      };

      _this.focus = function () {
        _this.domRef.current.focus();
      };

      _this.blur = function () {
        _this.domRef.current.focus();
      };

      _this.domRef = Object(_util__WEBPACK_IMPORTED_MODULE_10__["createRef"])();
      return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(BaseSelector, [{
      key: 'renderClear',
      value: function renderClear() {
        var _props = this.props,
            prefixCls = _props.prefixCls,
            allowClear = _props.allowClear,
            valueList = _props.valueList,
            clearIcon = _props.clearIcon;
        var onSelectorClear = this.context.rcTreeSelect.onSelectorClear;


        if (!allowClear || !valueList.length || !valueList[0].value) {
          return null;
        }

        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          'span',
          {
            key: 'clear',
            className: prefixCls + '-selection__clear',
            onClick: onSelectorClear
          },
          typeof clearIcon === 'function' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(clearIcon, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props)) : clearIcon
        );
      }
    }, {
      key: 'renderArrow',
      value: function renderArrow() {
        var _props2 = this.props,
            prefixCls = _props2.prefixCls,
            showArrow = _props2.showArrow,
            inputIcon = _props2.inputIcon;

        if (!showArrow) {
          return null;
        }

        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          'span',
          {
            key: 'arrow',
            className: prefixCls + '-arrow',
            style: { outline: 'none' }
          },
          typeof inputIcon === 'function' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(inputIcon, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props)) : inputIcon
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames;

        var _props3 = this.props,
            prefixCls = _props3.prefixCls,
            className = _props3.className,
            style = _props3.style,
            open = _props3.open,
            focused = _props3.focused,
            disabled = _props3.disabled,
            allowClear = _props3.allowClear,
            onClick = _props3.onClick,
            ariaId = _props3.ariaId,
            renderSelection = _props3.renderSelection,
            renderPlaceholder = _props3.renderPlaceholder,
            tabIndex = _props3.tabIndex;
        var onSelectorKeyDown = this.context.rcTreeSelect.onSelectorKeyDown;


        var myTabIndex = tabIndex;
        if (disabled) {
          myTabIndex = null;
        }

        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          'span',
          {
            style: style,
            onClick: onClick,
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, prefixCls, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-open', open), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-focused', open || focused), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-disabled', disabled), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-enabled', !disabled), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-allow-clear', allowClear), _classNames)),
            ref: this.domRef,
            role: 'combobox',
            'aria-expanded': open,
            'aria-owns': open ? ariaId : undefined,
            'aria-controls': open ? ariaId : undefined,
            'aria-haspopup': 'listbox',
            'aria-disabled': disabled,
            tabIndex: myTabIndex,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onKeyDown: onSelectorKeyDown
          },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            'span',
            {
              key: 'selection',
              className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls + '-selection', prefixCls + '-selection--' + modeName)
            },
            renderSelection(),
            this.renderClear(),
            this.renderArrow(),
            renderPlaceholder && renderPlaceholder()
          )
        );
      }
    }]);

    return BaseSelector;
  }(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

  BaseSelector.propTypes = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, selectorPropTypes, {

    // Pass by HOC
    renderSelection: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
    renderPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number
  });
  BaseSelector.contextTypes = {
    rcTreeSelect: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, selectorContextTypes))
  };
  BaseSelector.defaultProps = {
    tabIndex: 0
  };


  Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__["polyfill"])(BaseSelector);

  return BaseSelector;
});

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Popup/MultiplePopup.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Popup/MultiplePopup.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_BasePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/BasePopup */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Base/BasePopup.js");


/* harmony default export */ __webpack_exports__["default"] = (_Base_BasePopup__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Popup/SinglePopup.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Popup/SinglePopup.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Base_BasePopup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Base/BasePopup */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Base/BasePopup.js");
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SearchInput */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/SearchInput.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/util.js");











var SinglePopup = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SinglePopup, _React$Component);

  function SinglePopup() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SinglePopup);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (SinglePopup.__proto__ || Object.getPrototypeOf(SinglePopup)).call(this));

    _this.onPlaceholderClick = function () {
      _this.inputRef.current.focus();
    };

    _this.renderPlaceholder = function () {
      var _this$props = _this.props,
          searchPlaceholder = _this$props.searchPlaceholder,
          searchValue = _this$props.searchValue,
          prefixCls = _this$props.prefixCls;


      if (!searchPlaceholder) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'span',
        {
          style: {
            display: searchValue ? 'none' : 'block'
          },
          onClick: _this.onPlaceholderClick,
          className: prefixCls + '-search__field__placeholder'
        },
        searchPlaceholder
      );
    };

    _this.renderSearch = function () {
      var _this$props2 = _this.props,
          showSearch = _this$props2.showSearch,
          dropdownPrefixCls = _this$props2.dropdownPrefixCls;


      if (!showSearch) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'span',
        { className: dropdownPrefixCls + '-search' },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_SearchInput__WEBPACK_IMPORTED_MODULE_8__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.props, {
          ref: _this.inputRef,
          renderPlaceholder: _this.renderPlaceholder
        }))
      );
    };

    _this.inputRef = Object(_util__WEBPACK_IMPORTED_MODULE_9__["createRef"])();
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SinglePopup, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Base_BasePopup__WEBPACK_IMPORTED_MODULE_7__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {
        renderSearch: this.renderSearch
      }));
    }
  }]);

  return SinglePopup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

SinglePopup.propTypes = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _Base_BasePopup__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  searchValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  showSearch: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  dropdownPrefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  searchPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
});


/* harmony default export */ __webpack_exports__["default"] = (SinglePopup);

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/SearchInput.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/SearchInput.js ***!
  \*****************************************************************************/
/*! exports provided: searchContextTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchContextTypes", function() { return searchContextTypes; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/_react-lifecycles-compat@3.0.4@react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/util.js");





/**
 * Since search box is in different position with different mode.
 * - Single: in the popup box
 * - multiple: in the selector
 * Move the code as a SearchInput for easy management.
 */






var searchContextTypes = {
  onSearchInputChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};

var SearchInput = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SearchInput, _React$Component);

  function SearchInput() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SearchInput);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).call(this));

    _this.alignInputWidth = function () {
      _this.inputRef.current.style.width = _this.mirrorInputRef.current.clientWidth + 'px';
    };

    _this.focus = function (isDidMount) {
      if (_this.inputRef.current) {
        _this.inputRef.current.focus();
        if (isDidMount) {
          setTimeout(function () {
            _this.inputRef.current.focus();
          }, 0);
        }
      }
    };

    _this.blur = function () {
      if (_this.inputRef.current) {
        _this.inputRef.current.blur();
      }
    };

    _this.inputRef = Object(_util__WEBPACK_IMPORTED_MODULE_8__["createRef"])();
    _this.mirrorInputRef = Object(_util__WEBPACK_IMPORTED_MODULE_8__["createRef"])();
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SearchInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          open = _props.open,
          needAlign = _props.needAlign;

      if (needAlign) {
        this.alignInputWidth();
      }

      if (open) {
        this.focus(true);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          open = _props2.open,
          searchValue = _props2.searchValue,
          needAlign = _props2.needAlign;


      if (open && prevProps.open !== open) {
        this.focus();
      }

      if (needAlign && searchValue !== prevProps.searchValue) {
        this.alignInputWidth();
      }
    }

    /**
     * `scrollWidth` is not correct in IE, do the workaround.
     * ref: https://github.com/react-component/tree-select/issues/65
     */


    /**
     * Need additional timeout for focus cause parent dom is not ready when didMount trigger
     */

  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          searchValue = _props3.searchValue,
          prefixCls = _props3.prefixCls,
          disabled = _props3.disabled,
          renderPlaceholder = _props3.renderPlaceholder,
          open = _props3.open,
          ariaId = _props3.ariaId;
      var _context$rcTreeSelect = this.context.rcTreeSelect,
          onSearchInputChange = _context$rcTreeSelect.onSearchInputChange,
          onSearchInputKeyDown = _context$rcTreeSelect.onSearchInputKeyDown;


      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'span',
        { className: prefixCls + '-search__field__wrap' },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('input', {
          type: 'text',
          ref: this.inputRef,
          onChange: onSearchInputChange,
          onKeyDown: onSearchInputKeyDown,
          value: searchValue,
          disabled: disabled,
          className: prefixCls + '-search__field',

          'aria-label': 'filter select',
          'aria-autocomplete': 'list',
          'aria-controls': open ? ariaId : undefined,
          'aria-multiline': 'false'
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'span',
          {
            ref: this.mirrorInputRef,
            className: prefixCls + '-search__field__mirror'
          },
          searchValue,
          '\xA0'
        ),
        renderPlaceholder ? renderPlaceholder() : null
      );
    }
  }]);

  return SearchInput;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

SearchInput.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  searchValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  renderPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  needAlign: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  ariaId: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
SearchInput.contextTypes = {
  rcTreeSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, searchContextTypes))
};


Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_7__["polyfill"])(SearchInput);

/* harmony default export */ __webpack_exports__["default"] = (SearchInput);

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Select.js":
/*!************************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Select.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/_react-lifecycles-compat@3.0.4@react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/_rc-util@4.6.0@rc-util/es/KeyCode.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shallowequal */ "./node_modules/_shallowequal@1.1.0@shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raf */ "./node_modules/_raf@3.4.0@raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _SelectTrigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SelectTrigger */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/SelectTrigger.js");
/* harmony import */ var _Base_BaseSelector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Base/BaseSelector */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Base/BaseSelector.js");
/* harmony import */ var _Base_BasePopup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Base/BasePopup */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Base/BasePopup.js");
/* harmony import */ var _Selector_SingleSelector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Selector/SingleSelector */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Selector/SingleSelector.js");
/* harmony import */ var _Selector_MultipleSelector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Selector/MultipleSelector */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Selector/MultipleSelector/index.js");
/* harmony import */ var _Popup_SinglePopup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Popup/SinglePopup */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Popup/SinglePopup.js");
/* harmony import */ var _Popup_MultiplePopup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Popup/MultiplePopup */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Popup/MultiplePopup.js");
/* harmony import */ var _strategies__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./strategies */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/strategies.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./util */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/util.js");
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./propTypes */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/propTypes.js");
/* harmony import */ var _SelectNode__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SelectNode */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/SelectNode.js");






/**
 * ARIA: https://www.w3.org/TR/wai-aria/#combobox
 * Sample 1: https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/combobox/aria1.1pattern/listbox-combo.html
 * Sample 2: https://www.w3.org/blog/wai-components-gallery/widget/combobox-with-aria-autocompleteinline/
 *
 * Tab logic:
 * Popup is close
 * 1. Focus input (mark component as focused)
 * 2. Press enter to show the popup
 * 3. If popup has input, focus it
 *
 * Popup is open
 * 1. press tab to close the popup
 * 2. Focus back to the selection input box
 * 3. Let the native tab going on
 *
 * TreeSelect use 2 design type.
 * In single mode, we should focus on the `span`
 * In multiple mode, we should focus on the `input`
 */






















var Select = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Select, _React$Component);

  function Select(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Select);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _initialiseProps.call(_this);

    var prefixAria = props.prefixAria,
        defaultOpen = props.defaultOpen,
        open = props.open;


    _this.state = {
      open: open || defaultOpen,
      valueList: [],
      missValueList: [], // Contains the value not in the tree
      selectorValueList: [], // Used for multiple selector
      valueEntities: {},
      keyEntities: {},
      searchValue: '',

      init: true
    };

    _this.selectorRef = Object(_util__WEBPACK_IMPORTED_MODULE_20__["createRef"])();
    _this.selectTriggerRef = Object(_util__WEBPACK_IMPORTED_MODULE_20__["createRef"])();

    // ARIA need `aria-controls` props mapping
    // Since this need user input. Let's generate ourselves
    _this.ariaId = Object(_util__WEBPACK_IMPORTED_MODULE_20__["generateAriaId"])(prefixAria + '-list');
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Select, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        rcTreeSelect: {
          onSelectorFocus: this.onSelectorFocus,
          onSelectorBlur: this.onSelectorBlur,
          onSelectorKeyDown: this.onComponentKeyDown,
          onSelectorClear: this.onSelectorClear,
          onMultipleSelectorRemove: this.onMultipleSelectorRemove,

          onTreeNodeSelect: this.onTreeNodeSelect,
          onTreeNodeCheck: this.onTreeNodeCheck,
          onPopupKeyDown: this.onComponentKeyDown,

          onSearchInputChange: this.onSearchInputChange,
          onSearchInputKeyDown: this.onSearchInputKeyDown
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          autoFocus = _props.autoFocus,
          disabled = _props.disabled;


      if (autoFocus && !disabled) {
        this.focus();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_, prevState) {
      if (prevState.valueList !== this.state.valueList) {
        this.forcePopupAlign();
      }
    }

    // ==================== Selector ====================


    // Handle key board event in both Selector and Popup


    // ===================== Popup ======================


    // ==================== Trigger =====================

    /**
     * Only update the value which is not in props
     */


    // [Legacy] Origin provide `documentClickClose` which triggered by `Trigger`
    // Currently `TreeSelect` align the hide popup logic as `Select` which blur to hide.
    // `documentClickClose` is not accurate anymore. Let's just keep the key word.


    // Tree checkable is also a multiple case


    // [Legacy] To align with `Select` component,
    // We use `searchValue` instead of `inputValue`
    // but currently still need support that.
    // Add this method the check if is controlled


    // TODO: onChoiceAnimationLeave


    /**
     * 1. Update state valueList.
     * 2. Fire `onChange` event to user.
     */

  }, {
    key: 'focus',
    value: function focus() {
      this.selectorRef.current.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.selectorRef.current.blur();
    }

    // ===================== Render =====================

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          valueList = _state.valueList,
          missValueList = _state.missValueList,
          selectorValueList = _state.selectorValueList,
          valueEntities = _state.valueEntities,
          keyEntities = _state.keyEntities,
          searchValue = _state.searchValue,
          open = _state.open,
          focused = _state.focused,
          treeNodes = _state.treeNodes,
          filteredTreeNodes = _state.filteredTreeNodes;
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          treeExpandedKeys = _props2.treeExpandedKeys,
          onTreeExpand = _props2.onTreeExpand;

      var isMultiple = this.isMultiple();

      var passProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props, {
        isMultiple: isMultiple,
        valueList: valueList,
        selectorValueList: [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(missValueList), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(selectorValueList)),
        valueEntities: valueEntities,
        keyEntities: keyEntities,
        searchValue: searchValue,
        upperSearchValue: (searchValue || '').toUpperCase(), // Perf save
        open: open,
        focused: focused,
        dropdownPrefixCls: prefixCls + '-dropdown',
        ariaId: this.ariaId
      });

      var Popup = isMultiple ? _Popup_MultiplePopup__WEBPACK_IMPORTED_MODULE_18__["default"] : _Popup_SinglePopup__WEBPACK_IMPORTED_MODULE_17__["default"];
      var $popup = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Popup, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, passProps, {
        onTreeExpanded: this.delayForcePopupAlign,
        treeNodes: treeNodes,
        filteredTreeNodes: filteredTreeNodes
        // Tree expanded control
        , treeExpandedKeys: treeExpandedKeys,
        onTreeExpand: onTreeExpand
      }));

      var Selector = isMultiple ? _Selector_MultipleSelector__WEBPACK_IMPORTED_MODULE_16__["default"] : _Selector_SingleSelector__WEBPACK_IMPORTED_MODULE_15__["default"];
      var $selector = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Selector, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, passProps, {
        ref: this.selectorRef
      }));

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        _SelectTrigger__WEBPACK_IMPORTED_MODULE_12__["default"],
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, passProps, {

          ref: this.selectTriggerRef,
          popupElement: $popup,

          onKeyDown: this.onKeyDown,
          onDropdownVisibleChange: this.onDropdownVisibleChange
        }),
        $selector
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var _prevState$prevProps = prevState.prevProps,
          prevProps = _prevState$prevProps === undefined ? {} : _prevState$prevProps;
      var treeCheckable = nextProps.treeCheckable,
          treeCheckStrictly = nextProps.treeCheckStrictly,
          filterTreeNode = nextProps.filterTreeNode,
          treeNodeFilterProp = nextProps.treeNodeFilterProp,
          treeDataSimpleMode = nextProps.treeDataSimpleMode;

      var newState = {
        prevProps: nextProps,
        init: false
      };

      // Process the state when props updated
      function processState(propName, updater) {
        if (prevProps[propName] !== nextProps[propName]) {
          updater(nextProps[propName], prevProps[propName]);
          return true;
        }
        return false;
      }

      var valueRefresh = false;

      // Open
      processState('open', function (propValue) {
        newState.open = propValue;
      });

      // Tree Nodes
      var treeNodes = void 0;
      var treeDataChanged = false;
      var treeDataModeChanged = false;
      processState('treeData', function (propValue) {
        treeNodes = Object(_util__WEBPACK_IMPORTED_MODULE_20__["convertDataToTree"])(propValue);
        treeDataChanged = true;
      });

      processState('treeDataSimpleMode', function (propValue, prevValue) {
        if (!propValue) return;

        var prev = !prevValue || prevValue === true ? {} : prevValue;

        // Shallow equal to avoid dynamic prop object
        if (!shallowequal__WEBPACK_IMPORTED_MODULE_10___default()(propValue, prev)) {
          treeDataModeChanged = true;
        }
      });

      // Parse by `treeDataSimpleMode`
      if (treeDataSimpleMode && (treeDataChanged || treeDataModeChanged)) {
        var simpleMapper = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
          id: 'id',
          pId: 'pId',
          rootPId: null
        }, treeDataSimpleMode !== true ? treeDataSimpleMode : {});
        treeNodes = Object(_util__WEBPACK_IMPORTED_MODULE_20__["convertDataToTree"])(Object(_util__WEBPACK_IMPORTED_MODULE_20__["parseSimpleTreeData"])(nextProps.treeData, simpleMapper));
      }

      // If `treeData` not provide, use children TreeNodes
      if (!nextProps.treeData) {
        processState('children', function (propValue) {
          treeNodes = Array.isArray(propValue) ? propValue : [propValue];
        });
      }

      // Convert `treeData` to entities
      if (treeNodes) {
        var entitiesMap = Object(_util__WEBPACK_IMPORTED_MODULE_20__["convertTreeToEntities"])(treeNodes);
        newState.treeNodes = treeNodes;
        newState.posEntities = entitiesMap.posEntities;
        newState.valueEntities = entitiesMap.valueEntities;
        newState.keyEntities = entitiesMap.keyEntities;

        valueRefresh = true;
      }

      // Value List
      if (prevState.init) {
        processState('defaultValue', function (propValue) {
          newState.valueList = Object(_util__WEBPACK_IMPORTED_MODULE_20__["formatInternalValue"])(propValue, nextProps);
          valueRefresh = true;
        });
      }

      processState('value', function (propValue) {
        newState.valueList = Object(_util__WEBPACK_IMPORTED_MODULE_20__["formatInternalValue"])(propValue, nextProps);
        valueRefresh = true;
      });

      // Selector Value List
      if (valueRefresh) {
        // Find out that value not exist in the tree
        var missValueList = [];
        var filteredValueList = [];
        var keyList = [];

        // Get latest value list
        var latestValueList = newState.valueList;
        if (!latestValueList) {
          // Also need add prev missValueList to avoid new treeNodes contains the value
          latestValueList = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(prevState.valueList), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(prevState.missValueList));
        }

        // Get key by value
        latestValueList.forEach(function (wrapperValue) {
          var value = wrapperValue.value;

          var entity = (newState.valueEntities || prevState.valueEntities)[value];

          if (entity) {
            keyList.push(entity.key);
            filteredValueList.push(wrapperValue);
            return;
          }

          // If not match, it may caused by ajax load. We need keep this
          missValueList.push(wrapperValue);
        });

        // We need calculate the value when tree is checked tree
        if (treeCheckable && !treeCheckStrictly) {
          // Calculate the keys need to be checked
          var _conductCheck = Object(_util__WEBPACK_IMPORTED_MODULE_20__["conductCheck"])(keyList, true, newState.keyEntities || prevState.keyEntities),
              checkedKeys = _conductCheck.checkedKeys;

          // Format value list again for internal usage


          newState.valueList = checkedKeys.map(function (key) {
            return {
              value: (newState.keyEntities || prevState.keyEntities)[key].value
            };
          });
        } else {
          newState.valueList = filteredValueList;
        }

        // Fill the missValueList, we still need display in the selector
        newState.missValueList = missValueList;

        // Calculate the value list for `Selector` usage
        newState.selectorValueList = Object(_util__WEBPACK_IMPORTED_MODULE_20__["formatSelectorValue"])(newState.valueList, nextProps, newState.valueEntities || prevState.valueEntities);
      }

      // [Legacy] To align with `Select` component,
      // We use `searchValue` instead of `inputValue` but still keep the api
      // `inputValue` support `null` to work as `autoClearSearchValue`
      processState('inputValue', function (propValue) {
        if (propValue !== null) {
          newState.searchValue = propValue;
        }
      });

      // Search value
      processState('searchValue', function (propValue) {
        newState.searchValue = propValue;
      });

      // Do the search logic
      if (newState.searchValue !== undefined || prevState.searchValue && treeNodes) {
        var searchValue = newState.searchValue !== undefined ? newState.searchValue : prevState.searchValue;
        var upperSearchValue = String(searchValue).toUpperCase();

        var filterTreeNodeFn = filterTreeNode;
        if (filterTreeNode === false) {
          // Don't filter if is false
          filterTreeNodeFn = function filterTreeNodeFn() {
            return true;
          };
        } else if (typeof filterTreeNodeFn !== 'function') {
          // When is not function (true or undefined), use inner filter
          filterTreeNodeFn = function filterTreeNodeFn(_, node) {
            var nodeValue = String(node.props[treeNodeFilterProp]).toUpperCase();
            return nodeValue.indexOf(upperSearchValue) !== -1;
          };
        }

        newState.filteredTreeNodes = Object(_util__WEBPACK_IMPORTED_MODULE_20__["getFilterTree"])(newState.treeNodes || prevState.treeNodes, searchValue, filterTreeNodeFn, newState.valueEntities || prevState.valueEntities);
      }

      // Checked Strategy
      processState('showCheckedStrategy', function () {
        newState.selectorValueList = newState.selectorValueList || Object(_util__WEBPACK_IMPORTED_MODULE_20__["formatSelectorValue"])(newState.valueList || prevState.valueList, nextProps, newState.valueEntities || prevState.valueEntities);
      });

      return newState;
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Select.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  prefixAria: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  showArrow: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  open: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  value: _propTypes__WEBPACK_IMPORTED_MODULE_21__["valueProp"],
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  defaultOpen: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  defaultValue: _propTypes__WEBPACK_IMPORTED_MODULE_21__["valueProp"],

  showSearch: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, // [Legacy] Deprecated. Use `searchValue` instead.
  searchValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  autoClearSearchValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  searchPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, // [Legacy] Confuse with placeholder
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
  labelInValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  maxTagCount: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  maxTagPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func]),
  maxTagTextLength: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  showCheckedStrategy: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf([_strategies__WEBPACK_IMPORTED_MODULE_19__["SHOW_ALL"], _strategies__WEBPACK_IMPORTED_MODULE_19__["SHOW_PARENT"], _strategies__WEBPACK_IMPORTED_MODULE_19__["SHOW_CHILD"]]),

  dropdownMatchSelectWidth: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  treeData: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  treeDataSimpleMode: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object]),
  treeNodeFilterProp: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  treeNodeLabelProp: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  treeCheckable: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node]),
  treeCheckStrictly: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  treeIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  treeLine: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  treeDefaultExpandAll: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  treeDefaultExpandedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  treeExpandedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  loadData: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  filterTreeNode: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool]),

  notFoundContent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  onSearch: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDeselect: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDropdownVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  onTreeExpand: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  inputIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func]),
  clearIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func]),
  removeIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func]),
  switcherIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func])
};
Select.childContextTypes = {
  rcTreeSelect: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _Base_BaseSelector__WEBPACK_IMPORTED_MODULE_13__["selectorContextTypes"], _Selector_MultipleSelector__WEBPACK_IMPORTED_MODULE_16__["multipleSelectorContextTypes"], _Base_BasePopup__WEBPACK_IMPORTED_MODULE_14__["popupContextTypes"], {

    onSearchInputChange: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    onSearchInputKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
  }))
};
Select.defaultProps = {
  prefixCls: 'rc-tree-select',
  prefixAria: 'rc-tree-select',
  showArrow: true,
  showSearch: true,
  autoClearSearchValue: true,
  showCheckedStrategy: _strategies__WEBPACK_IMPORTED_MODULE_19__["SHOW_CHILD"],

  // dropdownMatchSelectWidth change the origin design, set to false now
  // ref: https://github.com/react-component/select/blob/4cad95e098a341a09de239ad6981067188842020/src/Select.jsx#L344
  // ref: https://github.com/react-component/select/pull/71
  treeNodeFilterProp: 'value',
  treeNodeLabelProp: 'title',
  treeIcon: false,
  notFoundContent: 'Not Found'
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onSelectorFocus = function () {
    _this2.setState({ focused: true });
  };

  this.onSelectorBlur = function () {
    _this2.setState({ focused: false });

    // TODO: Close when Popup is also not focused
    // this.setState({ open: false });
  };

  this.onComponentKeyDown = function (event) {
    var open = _this2.state.open;
    var keyCode = event.keyCode;


    if (!open) {
      if ([rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_9__["default"].ENTER, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_9__["default"].DOWN].indexOf(keyCode) !== -1) {
        _this2.setOpenState(true);
      }
    } else if (rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_9__["default"].ESC === keyCode) {
      _this2.setOpenState(false);
    } else if ([rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_9__["default"].UP, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_9__["default"].DOWN, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_9__["default"].LEFT, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_9__["default"].RIGHT].indexOf(keyCode) !== -1) {
      // TODO: Handle `open` state
      event.stopPropagation();
    }
  };

  this.onDeselect = function (wrappedValue, node, nodeEventInfo) {
    var onDeselect = _this2.props.onDeselect;

    if (!onDeselect) return;

    onDeselect(wrappedValue, node, nodeEventInfo);
  };

  this.onSelectorClear = function (event) {
    var disabled = _this2.props.disabled;

    if (disabled) return;

    _this2.triggerChange([], []);

    if (!_this2.isSearchValueControlled()) {
      _this2.setUncontrolledState({
        searchValue: '',
        filteredTreeNodes: null
      });
    }

    event.stopPropagation();
  };

  this.onMultipleSelectorRemove = function (event, removeValue) {
    event.stopPropagation();

    var _state2 = _this2.state,
        valueList = _state2.valueList,
        missValueList = _state2.missValueList,
        valueEntities = _state2.valueEntities;
    var _props3 = _this2.props,
        treeCheckable = _props3.treeCheckable,
        treeCheckStrictly = _props3.treeCheckStrictly,
        treeNodeLabelProp = _props3.treeNodeLabelProp,
        disabled = _props3.disabled;

    if (disabled) return;

    // Find trigger entity
    var triggerEntity = valueEntities[removeValue];

    // Clean up value
    var newValueList = valueList;
    if (triggerEntity) {
      // If value is in tree
      if (treeCheckable && !treeCheckStrictly) {
        newValueList = valueList.filter(function (_ref) {
          var value = _ref.value;

          var entity = valueEntities[value];
          return !Object(_util__WEBPACK_IMPORTED_MODULE_20__["isPosRelated"])(entity.pos, triggerEntity.pos);
        });
      } else {
        newValueList = valueList.filter(function (_ref2) {
          var value = _ref2.value;
          return value !== removeValue;
        });
      }
    }

    var triggerNode = triggerEntity ? triggerEntity.node : null;

    var extraInfo = {
      triggerValue: removeValue,
      triggerNode: triggerNode
    };
    var deselectInfo = {
      node: triggerNode
    };

    // [Legacy] Little hack on this to make same action as `onCheck` event.
    if (treeCheckable) {
      var filteredEntityList = newValueList.map(function (_ref3) {
        var value = _ref3.value;
        return valueEntities[value];
      });

      deselectInfo.event = 'check';
      deselectInfo.checked = false;
      deselectInfo.checkedNodes = filteredEntityList.map(function (_ref4) {
        var node = _ref4.node;
        return node;
      });
      deselectInfo.checkedNodesPositions = filteredEntityList.map(function (_ref5) {
        var node = _ref5.node,
            pos = _ref5.pos;
        return { node: node, pos: pos };
      });

      if (treeCheckStrictly) {
        extraInfo.allCheckedNodes = deselectInfo.checkedNodes;
      } else {
        // TODO: It's too expansive to get `halfCheckedKeys` in onDeselect. Not pass this.
        extraInfo.allCheckedNodes = Object(_util__WEBPACK_IMPORTED_MODULE_20__["flatToHierarchy"])(filteredEntityList).map(function (_ref6) {
          var node = _ref6.node;
          return node;
        });
      }
    } else {
      deselectInfo.event = 'select';
      deselectInfo.selected = false;
      deselectInfo.selectedNodes = newValueList.map(function (_ref7) {
        var value = _ref7.value;
        return (valueEntities[value] || {}).node;
      });
    }

    // Some value user pass prop is not in the tree, we also need clean it
    var newMissValueList = missValueList.filter(function (_ref8) {
      var value = _ref8.value;
      return value !== removeValue;
    });

    var wrappedValue = void 0;
    if (_this2.isLabelInValue()) {
      wrappedValue = {
        label: triggerNode ? triggerNode.props[treeNodeLabelProp] : null,
        value: removeValue
      };
    } else {
      wrappedValue = removeValue;
    }

    _this2.onDeselect(wrappedValue, triggerNode, deselectInfo);

    _this2.triggerChange(newMissValueList, newValueList, extraInfo);
  };

  this.onValueTrigger = function (isAdd, nodeList, nodeEventInfo, nodeExtraInfo) {
    var node = nodeEventInfo.node;
    var value = node.props.value;
    var _state3 = _this2.state,
        missValueList = _state3.missValueList,
        valueEntities = _state3.valueEntities,
        keyEntities = _state3.keyEntities;
    var _props4 = _this2.props,
        disabled = _props4.disabled,
        inputValue = _props4.inputValue,
        treeNodeLabelProp = _props4.treeNodeLabelProp,
        onSelect = _props4.onSelect,
        treeCheckable = _props4.treeCheckable,
        treeCheckStrictly = _props4.treeCheckStrictly,
        autoClearSearchValue = _props4.autoClearSearchValue;

    var label = node.props[treeNodeLabelProp];

    if (disabled) return;

    // Wrap the return value for user
    var wrappedValue = void 0;
    if (_this2.isLabelInValue()) {
      wrappedValue = {
        value: value,
        label: label
      };
    } else {
      wrappedValue = value;
    }

    // [Legacy] Origin code not trigger `onDeselect` every time. Let's align the behaviour.
    if (isAdd) {
      if (onSelect) {
        onSelect(wrappedValue, node, nodeEventInfo);
      }
    } else {
      _this2.onDeselect(wrappedValue, node, nodeEventInfo);
    }

    // Get wrapped value list.
    // This is a bit hack cause we use key to match the value.
    var newValueList = nodeList.map(function (_ref9) {
      var props = _ref9.props;
      return {
        value: props.value,
        label: props[treeNodeLabelProp]
      };
    });

    // When is `treeCheckable` and with `searchValue`, `valueList` is not full filled.
    // We need calculate the missing nodes.
    if (treeCheckable && !treeCheckStrictly) {
      var keyList = newValueList.map(function (_ref10) {
        var val = _ref10.value;
        return valueEntities[val].key;
      });
      if (isAdd) {
        keyList = Object(_util__WEBPACK_IMPORTED_MODULE_20__["conductCheck"])(keyList, true, keyEntities).checkedKeys;
      } else {
        keyList = Object(_util__WEBPACK_IMPORTED_MODULE_20__["conductCheck"])([valueEntities[value].key], false, keyEntities, { checkedKeys: keyList }).checkedKeys;
      }
      newValueList = keyList.map(function (key) {
        var props = keyEntities[key].node.props;

        return {
          value: props.value,
          label: props[treeNodeLabelProp]
        };
      });
    }

    // Clean up `searchValue` when this prop is set
    if (!_this2.isSearchValueControlled() && (autoClearSearchValue || inputValue === null)) {
      _this2.setUncontrolledState({
        searchValue: '',
        filteredTreeNodes: null
      });
    }

    // [Legacy] Provide extra info
    var extraInfo = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, nodeExtraInfo, {
      triggerValue: value,
      triggerNode: node
    });

    _this2.triggerChange(missValueList, newValueList, extraInfo);
  };

  this.onTreeNodeSelect = function (_, nodeEventInfo) {
    var _state4 = _this2.state,
        valueList = _state4.valueList,
        valueEntities = _state4.valueEntities;
    var _props5 = _this2.props,
        treeCheckable = _props5.treeCheckable,
        multiple = _props5.multiple;

    if (treeCheckable) return;

    if (!multiple) {
      _this2.setOpenState(false);
    }

    var isAdd = nodeEventInfo.selected;
    var selectedValue = nodeEventInfo.node.props.value;


    var newValueList = void 0;

    if (!multiple) {
      newValueList = [{ value: selectedValue }];
    } else {
      newValueList = valueList.filter(function (_ref11) {
        var value = _ref11.value;
        return value !== selectedValue;
      });
      if (isAdd) {
        newValueList.push({ value: selectedValue });
      }
    }

    var selectedNodes = newValueList.map(function (_ref12) {
      var value = _ref12.value;
      return valueEntities[value];
    }).filter(function (entity) {
      return entity;
    }).map(function (_ref13) {
      var node = _ref13.node;
      return node;
    });

    _this2.onValueTrigger(isAdd, selectedNodes, nodeEventInfo, { selected: isAdd });
  };

  this.onTreeNodeCheck = function (_, nodeEventInfo) {
    var _state5 = _this2.state,
        searchValue = _state5.searchValue,
        keyEntities = _state5.keyEntities,
        valueEntities = _state5.valueEntities,
        valueList = _state5.valueList;
    var treeCheckStrictly = _this2.props.treeCheckStrictly;
    var checkedNodes = nodeEventInfo.checkedNodes,
        checkedNodesPositions = nodeEventInfo.checkedNodesPositions;

    var isAdd = nodeEventInfo.checked;

    var extraInfo = {
      checked: isAdd
    };

    var checkedNodeList = checkedNodes;

    // [Legacy] Check event provide `allCheckedNodes`.
    // When `treeCheckStrictly` or internal `searchValue` is set, TreeNode will be unrelated:
    // - Related: Show the top checked nodes and has children prop.
    // - Unrelated: Show all the checked nodes.

    if (treeCheckStrictly) {
      extraInfo.allCheckedNodes = nodeEventInfo.checkedNodes;
    } else if (searchValue) {
      var oriKeyList = valueList.map(function (_ref14) {
        var value = _ref14.value;
        return valueEntities[value];
      }).filter(function (entity) {
        return entity;
      }).map(function (_ref15) {
        var key = _ref15.key;
        return key;
      });

      var keyList = void 0;
      if (isAdd) {
        keyList = Array.from(new Set([].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(oriKeyList), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(checkedNodeList.map(function (_ref16) {
          var value = _ref16.props.value;
          return valueEntities[value].key;
        })))));
      } else {
        keyList = Object(_util__WEBPACK_IMPORTED_MODULE_20__["conductCheck"])([nodeEventInfo.node.props.eventKey], false, keyEntities, { checkedKeys: oriKeyList }).checkedKeys;
      }

      checkedNodeList = keyList.map(function (key) {
        return keyEntities[key].node;
      });

      // Let's follow as not `treeCheckStrictly` format
      extraInfo.allCheckedNodes = keyList.map(function (key) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_20__["cleanEntity"])(keyEntities[key]);
      });
    } else {
      extraInfo.allCheckedNodes = Object(_util__WEBPACK_IMPORTED_MODULE_20__["flatToHierarchy"])(checkedNodesPositions);
    }

    _this2.onValueTrigger(isAdd, checkedNodeList, nodeEventInfo, extraInfo);
  };

  this.onDropdownVisibleChange = function (open) {
    _this2.setOpenState(open, true);
  };

  this.onSearchInputChange = function (_ref17) {
    var value = _ref17.target.value;
    var _state6 = _this2.state,
        treeNodes = _state6.treeNodes,
        valueEntities = _state6.valueEntities;
    var _props6 = _this2.props,
        onSearch = _props6.onSearch,
        filterTreeNode = _props6.filterTreeNode,
        treeNodeFilterProp = _props6.treeNodeFilterProp;


    if (onSearch) {
      onSearch(value);
    }

    var isSet = false;

    if (!_this2.isSearchValueControlled()) {
      isSet = _this2.setUncontrolledState({
        searchValue: value
      });
      _this2.setOpenState(true);
    }

    if (isSet) {
      // Do the search logic
      var upperSearchValue = String(value).toUpperCase();

      var filterTreeNodeFn = filterTreeNode;
      if (!filterTreeNodeFn) {
        filterTreeNodeFn = function filterTreeNodeFn(_, node) {
          var nodeValue = String(node.props[treeNodeFilterProp]).toUpperCase();
          return nodeValue.indexOf(upperSearchValue) !== -1;
        };
      }

      _this2.setState({
        filteredTreeNodes: Object(_util__WEBPACK_IMPORTED_MODULE_20__["getFilterTree"])(treeNodes, value, filterTreeNodeFn, valueEntities)
      });
    }
  };

  this.onSearchInputKeyDown = function (event) {
    var _state7 = _this2.state,
        searchValue = _state7.searchValue,
        valueList = _state7.valueList;
    var keyCode = event.keyCode;


    if (rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_9__["default"].BACKSPACE === keyCode && _this2.isMultiple() && !searchValue && valueList.length) {
      var lastValue = valueList[valueList.length - 1].value;
      _this2.onMultipleSelectorRemove(event, lastValue);
    }
  };

  this.setUncontrolledState = function (state) {
    var needSync = false;
    var newState = {};

    Object.keys(state).forEach(function (name) {
      if (name in _this2.props) return;

      needSync = true;
      newState[name] = state[name];
    });

    if (needSync) {
      _this2.setState(newState);
    }

    return needSync;
  };

  this.setOpenState = function (open) {
    var byTrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var onDropdownVisibleChange = _this2.props.onDropdownVisibleChange;


    if (onDropdownVisibleChange && onDropdownVisibleChange(open, { documentClickClose: !open && byTrigger }) === false) {
      return;
    }

    _this2.setUncontrolledState({ open: open });
  };

  this.isMultiple = function () {
    var _props7 = _this2.props,
        multiple = _props7.multiple,
        treeCheckable = _props7.treeCheckable;

    return !!(multiple || treeCheckable);
  };

  this.isLabelInValue = function () {
    return Object(_util__WEBPACK_IMPORTED_MODULE_20__["isLabelInValue"])(_this2.props);
  };

  this.isSearchValueControlled = function () {
    var inputValue = _this2.props.inputValue;

    if ('searchValue' in _this2.props) return true;
    return 'inputValue' in _this2.props && inputValue !== null;
  };

  this.forcePopupAlign = function () {
    var $trigger = _this2.selectTriggerRef.current;

    if ($trigger) {
      $trigger.forcePopupAlign();
    }
  };

  this.delayForcePopupAlign = function () {
    // Wait 2 frame to avoid dom update & dom algin in the same time
    // https://github.com/ant-design/ant-design/issues/12031
    raf__WEBPACK_IMPORTED_MODULE_11___default()(function () {
      raf__WEBPACK_IMPORTED_MODULE_11___default()(_this2.forcePopupAlign);
    });
  };

  this.triggerChange = function (missValueList, valueList) {
    var extraInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var valueEntities = _this2.state.valueEntities;
    var _props8 = _this2.props,
        onChange = _props8.onChange,
        disabled = _props8.disabled;


    if (disabled) return;

    // Trigger
    var extra = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      // [Legacy] Always return as array contains label & value
      preValue: _this2.state.selectorValueList.map(function (_ref18) {
        var label = _ref18.label,
            value = _ref18.value;
        return { label: label, value: value };
      })
    }, extraInfo);

    // Format value by `treeCheckStrictly`
    var selectorValueList = Object(_util__WEBPACK_IMPORTED_MODULE_20__["formatSelectorValue"])(valueList, _this2.props, valueEntities);

    if (!('value' in _this2.props)) {
      _this2.setState({
        missValueList: missValueList,
        valueList: valueList,
        selectorValueList: selectorValueList
      });
    }

    // Only do the logic when `onChange` function provided
    if (onChange) {
      var connectValueList = void 0;

      // Get value by mode
      if (_this2.isMultiple()) {
        connectValueList = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(missValueList), babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(selectorValueList));
      } else {
        connectValueList = selectorValueList.slice(0, 1);
      }

      var labelList = null;
      var returnValue = void 0;

      if (_this2.isLabelInValue()) {
        returnValue = connectValueList.map(function (_ref19) {
          var label = _ref19.label,
              value = _ref19.value;
          return { label: label, value: value };
        });
      } else {
        labelList = [];
        returnValue = connectValueList.map(function (_ref20) {
          var label = _ref20.label,
              value = _ref20.value;

          labelList.push(label);
          return value;
        });
      }

      if (!_this2.isMultiple()) {
        returnValue = returnValue[0];
      }

      onChange(returnValue, labelList, extra);
    }
  };
};

Select.TreeNode = _SelectNode__WEBPACK_IMPORTED_MODULE_22__["default"];
Select.SHOW_ALL = _strategies__WEBPACK_IMPORTED_MODULE_19__["SHOW_ALL"];
Select.SHOW_PARENT = _strategies__WEBPACK_IMPORTED_MODULE_19__["SHOW_PARENT"];
Select.SHOW_CHILD = _strategies__WEBPACK_IMPORTED_MODULE_19__["SHOW_CHILD"];

// Let warning show correct component name
Select.displayName = 'TreeSelect';

Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__["polyfill"])(Select);

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/SelectNode.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/SelectNode.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-tree */ "./node_modules/_rc-tree@1.14.8@rc-tree/es/index.js");
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propTypes */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/propTypes.js");





/**
 * SelectNode wrapped the tree node.
 * Let's use SelectNode instead of TreeNode
 * since TreeNode is so confuse here.
 */
var SelectNode = function SelectNode(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tree__WEBPACK_IMPORTED_MODULE_2__["TreeNode"], props);
};

SelectNode.propTypes = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rc_tree__WEBPACK_IMPORTED_MODULE_2__["TreeNode"].propTypes, {
  value: _propTypes__WEBPACK_IMPORTED_MODULE_3__["valueProp"]
});

// Let Tree trade as TreeNode to reuse this for performance saving.
SelectNode.isTreeNode = 1;

/* harmony default export */ __webpack_exports__["default"] = (SelectNode);

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/SelectTrigger.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/SelectTrigger.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/_react-lifecycles-compat@3.0.4@react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-trigger */ "./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/util.js");













var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    },
    ignoreShake: true
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    },
    ignoreShake: true
  }
};

var SelectTrigger = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SelectTrigger, _React$Component);

  function SelectTrigger() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SelectTrigger);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (SelectTrigger.__proto__ || Object.getPrototypeOf(SelectTrigger)).call(this));

    _this.getDropdownTransitionName = function () {
      var _this$props = _this.props,
          transitionName = _this$props.transitionName,
          animation = _this$props.animation,
          dropdownPrefixCls = _this$props.dropdownPrefixCls;

      if (!transitionName && animation) {
        return dropdownPrefixCls + '-' + animation;
      }
      return transitionName;
    };

    _this.forcePopupAlign = function () {
      var $trigger = _this.triggerRef.current;

      if ($trigger) {
        $trigger.forcePopupAlign();
      }
    };

    _this.triggerRef = Object(_util__WEBPACK_IMPORTED_MODULE_10__["createRef"])();
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SelectTrigger, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          disabled = _props.disabled,
          isMultiple = _props.isMultiple,
          dropdownPopupAlign = _props.dropdownPopupAlign,
          dropdownMatchSelectWidth = _props.dropdownMatchSelectWidth,
          dropdownClassName = _props.dropdownClassName,
          dropdownStyle = _props.dropdownStyle,
          onDropdownVisibleChange = _props.onDropdownVisibleChange,
          getPopupContainer = _props.getPopupContainer,
          dropdownPrefixCls = _props.dropdownPrefixCls,
          popupElement = _props.popupElement,
          open = _props.open,
          children = _props.children;

      // TODO: [Legacy] Use new action when trigger fixed: https://github.com/react-component/trigger/pull/86

      // When false do nothing with the width
      // ref: https://github.com/ant-design/ant-design/issues/10927

      var stretch = void 0;
      if (dropdownMatchSelectWidth !== false) {
        stretch = dropdownMatchSelectWidth ? 'width' : 'minWidth';
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        rc_trigger__WEBPACK_IMPORTED_MODULE_8__["default"],
        {
          ref: this.triggerRef,
          action: disabled ? [] : ['click'],
          popupPlacement: 'bottomLeft',
          builtinPlacements: BUILT_IN_PLACEMENTS,
          popupAlign: dropdownPopupAlign,
          prefixCls: dropdownPrefixCls,
          popupTransitionName: this.getDropdownTransitionName(),
          onPopupVisibleChange: onDropdownVisibleChange,
          popup: popupElement,
          popupVisible: open,
          getPopupContainer: getPopupContainer,
          stretch: stretch,
          popupClassName: classnames__WEBPACK_IMPORTED_MODULE_9___default()(dropdownClassName, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, dropdownPrefixCls + '--multiple', isMultiple), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, dropdownPrefixCls + '--single', !isMultiple), _classNames)),
          popupStyle: dropdownStyle
        },
        children
      );
    }
  }]);

  return SelectTrigger;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

SelectTrigger.propTypes = {
  // Pass by outside user props
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  showSearch: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  dropdownPopupAlign: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  dropdownClassName: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  dropdownStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  getPopupContainer: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,

  dropdownMatchSelectWidth: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  // Pass by Select
  isMultiple: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  dropdownPrefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  onDropdownVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  popupElement: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
  open: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
};


Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_7__["polyfill"])(SelectTrigger);

/* harmony default export */ __webpack_exports__["default"] = (SelectTrigger);

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Selector/MultipleSelector/Selection.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Selector/MultipleSelector/Selection.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/util.js");









var Selection = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Selection, _React$Component);

  function Selection() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Selection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = Selection.__proto__ || Object.getPrototypeOf(Selection)).call.apply(_ref, [this].concat(args))), _this), _this.onRemove = function (event) {
      var _this$props = _this.props,
          onRemove = _this$props.onRemove,
          value = _this$props.value;

      onRemove(event, value);

      event.stopPropagation();
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Selection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          maxTagTextLength = _props.maxTagTextLength,
          label = _props.label,
          value = _props.value,
          onRemove = _props.onRemove,
          removeIcon = _props.removeIcon;


      var content = label || value;
      if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
        content = content.slice(0, maxTagTextLength) + '...';
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'li',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          style: _util__WEBPACK_IMPORTED_MODULE_7__["UNSELECTABLE_STYLE"]
        }, _util__WEBPACK_IMPORTED_MODULE_7__["UNSELECTABLE_ATTRIBUTE"], {
          role: 'menuitem',
          className: prefixCls + '-selection__choice',
          title: Object(_util__WEBPACK_IMPORTED_MODULE_7__["toTitle"])(label)
        }),
        onRemove && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'span',
          {
            className: prefixCls + '-selection__choice__remove',
            onClick: this.onRemove
          },
          typeof removeIcon === 'function' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(removeIcon, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props)) : removeIcon
        ),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'span',
          { className: prefixCls + '-selection__choice__content' },
          content
        )
      );
    }
  }]);

  return Selection;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Selection.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  maxTagTextLength: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  label: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
  value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  removeIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func])
};


/* harmony default export */ __webpack_exports__["default"] = (Selection);

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Selector/MultipleSelector/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Selector/MultipleSelector/index.js ***!
  \*************************************************************************************************/
/*! exports provided: multipleSelectorContextTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multipleSelectorContextTypes", function() { return multipleSelectorContextTypes; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-animate */ "./node_modules/_rc-animate@3.0.0-rc.6@rc-animate/es/index.js");
/* harmony import */ var _Base_BaseSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Base/BaseSelector */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Base/BaseSelector.js");
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../SearchInput */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/SearchInput.js");
/* harmony import */ var _Selection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Selection */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Selector/MultipleSelector/Selection.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/util.js");














var Selector = Object(_Base_BaseSelector__WEBPACK_IMPORTED_MODULE_8__["default"])('multiple');

var multipleSelectorContextTypes = {
  onMultipleSelectorRemove: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};

var MultipleSelector = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MultipleSelector, _React$Component);

  function MultipleSelector() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MultipleSelector);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (MultipleSelector.__proto__ || Object.getPrototypeOf(MultipleSelector)).call(this));

    _this.onPlaceholderClick = function () {
      _this.inputRef.current.focus();
    };

    _this.focus = function () {
      _this.inputRef.current.focus();
    };

    _this.blur = function () {
      _this.inputRef.current.blur();
    };

    _this.renderPlaceholder = function () {
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          placeholder = _this$props.placeholder,
          searchPlaceholder = _this$props.searchPlaceholder,
          searchValue = _this$props.searchValue,
          selectorValueList = _this$props.selectorValueList;


      var currentPlaceholder = placeholder || searchPlaceholder;

      if (!currentPlaceholder) return null;

      var hidden = searchValue || selectorValueList.length;

      // [Legacy] Not remove the placeholder
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'span',
        {
          style: {
            display: hidden ? 'none' : 'block'
          },
          onClick: _this.onPlaceholderClick,
          className: prefixCls + '-search__field__placeholder'
        },
        currentPlaceholder
      );
    };

    _this.renderSelection = function () {
      var _this$props2 = _this.props,
          selectorValueList = _this$props2.selectorValueList,
          choiceTransitionName = _this$props2.choiceTransitionName,
          prefixCls = _this$props2.prefixCls,
          onChoiceAnimationLeave = _this$props2.onChoiceAnimationLeave,
          labelInValue = _this$props2.labelInValue,
          maxTagCount = _this$props2.maxTagCount,
          maxTagPlaceholder = _this$props2.maxTagPlaceholder;
      var onMultipleSelectorRemove = _this.context.rcTreeSelect.onMultipleSelectorRemove;

      // Check if `maxTagCount` is set

      var myValueList = selectorValueList;
      if (maxTagCount >= 0) {
        myValueList = selectorValueList.slice(0, maxTagCount);
      }

      // Selector node list
      var selectedValueNodes = myValueList.map(function (_ref) {
        var label = _ref.label,
            value = _ref.value;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Selection__WEBPACK_IMPORTED_MODULE_10__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.props, {
          key: value,
          label: label,
          value: value,
          onRemove: onMultipleSelectorRemove
        }));
      });

      // Rest node count
      if (maxTagCount >= 0 && maxTagCount < selectorValueList.length) {
        var content = '+ ' + (selectorValueList.length - maxTagCount) + ' ...';
        if (typeof maxTagPlaceholder === 'string') {
          content = maxTagPlaceholder;
        } else if (typeof maxTagPlaceholder === 'function') {
          var restValueList = selectorValueList.slice(maxTagCount);
          content = maxTagPlaceholder(labelInValue ? restValueList : restValueList.map(function (_ref2) {
            var value = _ref2.value;
            return value;
          }));
        }

        var restNodeSelect = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Selection__WEBPACK_IMPORTED_MODULE_10__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.props, {
          key: 'rc-tree-select-internal-max-tag-counter',
          label: content,
          value: null
        }));

        selectedValueNodes.push(restNodeSelect);
      }

      selectedValueNodes.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'li',
        {
          className: prefixCls + '-search ' + prefixCls + '-search--inline',
          key: '__input'
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_SearchInput__WEBPACK_IMPORTED_MODULE_9__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.props, { ref: _this.inputRef, needAlign: true }))
      ));
      var className = prefixCls + '-selection__rendered';
      if (choiceTransitionName) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          rc_animate__WEBPACK_IMPORTED_MODULE_7__["default"],
          {
            className: className,
            component: 'ul',
            transitionName: choiceTransitionName,
            onLeave: onChoiceAnimationLeave
          },
          selectedValueNodes
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'ul',
        { className: className, role: 'menubar' },
        selectedValueNodes
      );
    };

    _this.inputRef = Object(_util__WEBPACK_IMPORTED_MODULE_11__["createRef"])();
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MultipleSelector, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Selector, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {
        tabIndex: -1,
        showArrow: false,
        renderSelection: this.renderSelection,
        renderPlaceholder: this.renderPlaceholder
      }));
    }
  }]);

  return MultipleSelector;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

MultipleSelector.propTypes = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _Base_BaseSelector__WEBPACK_IMPORTED_MODULE_8__["selectorPropTypes"], {
  selectorValueList: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  searchValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  labelInValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  maxTagCount: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  maxTagPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func]),

  onChoiceAnimationLeave: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
});
MultipleSelector.contextTypes = {
  rcTreeSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, multipleSelectorContextTypes, {

    onSearchInputChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
  }))
};


/* harmony default export */ __webpack_exports__["default"] = (MultipleSelector);

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Selector/SingleSelector.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Selector/SingleSelector.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Base_BaseSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Base/BaseSelector */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Base/BaseSelector.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/util.js");









var Selector = Object(_Base_BaseSelector__WEBPACK_IMPORTED_MODULE_6__["default"])('single');

var SingleSelector = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SingleSelector, _React$Component);

  function SingleSelector() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SingleSelector);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (SingleSelector.__proto__ || Object.getPrototypeOf(SingleSelector)).call(this));

    _this.focus = function () {
      _this.selectorRef.current.focus();
    };

    _this.blur = function () {
      _this.selectorRef.current.blur();
    };

    _this.renderSelection = function () {
      var _this$props = _this.props,
          selectorValueList = _this$props.selectorValueList,
          placeholder = _this$props.placeholder,
          prefixCls = _this$props.prefixCls;


      var innerNode = void 0;

      if (selectorValueList.length) {
        var _selectorValueList$ = selectorValueList[0],
            label = _selectorValueList$.label,
            value = _selectorValueList$.value;

        innerNode = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'span',
          {
            key: 'value',
            title: Object(_util__WEBPACK_IMPORTED_MODULE_7__["toTitle"])(label),
            className: prefixCls + '-selection-selected-value'
          },
          label || value
        );
      } else {
        innerNode = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'span',
          {
            key: 'placeholder',
            className: prefixCls + '-selection__placeholder'
          },
          placeholder
        );
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'span',
        { className: prefixCls + '-selection__rendered' },
        innerNode
      );
    };

    _this.selectorRef = Object(_util__WEBPACK_IMPORTED_MODULE_7__["createRef"])();
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SingleSelector, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Selector, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {
        ref: this.selectorRef,
        renderSelection: this.renderSelection
      }));
    }
  }]);

  return SingleSelector;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

SingleSelector.propTypes = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _Base_BaseSelector__WEBPACK_IMPORTED_MODULE_6__["selectorPropTypes"]);


/* harmony default export */ __webpack_exports__["default"] = (SingleSelector);

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/index.js ***!
  \***********************************************************************/
/*! exports provided: SHOW_ALL, SHOW_CHILD, SHOW_PARENT, TreeNode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return TreeNode; });
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/Select.js");
/* harmony import */ var _SelectNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectNode */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/SelectNode.js");
/* harmony import */ var _strategies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strategies */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/strategies.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHOW_ALL", function() { return _strategies__WEBPACK_IMPORTED_MODULE_2__["SHOW_ALL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHOW_CHILD", function() { return _strategies__WEBPACK_IMPORTED_MODULE_2__["SHOW_CHILD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHOW_PARENT", function() { return _strategies__WEBPACK_IMPORTED_MODULE_2__["SHOW_PARENT"]; });





var TreeNode = _SelectNode__WEBPACK_IMPORTED_MODULE_1__["default"];

/* harmony default export */ __webpack_exports__["default"] = (_Select__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/propTypes.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/propTypes.js ***!
  \***************************************************************************/
/*! exports provided: genArrProps, valueProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genArrProps", function() { return genArrProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueProp", function() { return valueProp; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/util.js");



var internalValProp = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]);

function genArrProps(propType) {
  return prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([propType, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(propType)]);
}

/**
 * Origin code check `multiple` is true when `treeCheckStrictly` & `labelInValue`.
 * But in process logic is already cover to array.
 * Check array is not necessary. Let's simplify this check logic.
 */
function valueProp() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var props = args[0],
      propName = args[1],
      Component = args[2];


  if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isLabelInValue"])(props)) {
    var _err = genArrProps(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
      value: internalValProp
    })).apply(undefined, args);
    if (_err) {
      return new Error('Invalid prop `' + propName + '` supplied to `' + Component + '`. ' + 'You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead.');
    }
    return null;
  }

  var err = genArrProps(internalValProp).apply(undefined, args);
  if (err) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + Component + '`. ' + 'You should use string or [string] instead.');
  }
  return null;
}

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/strategies.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/strategies.js ***!
  \****************************************************************************/
/*! exports provided: SHOW_ALL, SHOW_PARENT, SHOW_CHILD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ALL", function() { return SHOW_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_PARENT", function() { return SHOW_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_CHILD", function() { return SHOW_CHILD; });
var SHOW_ALL = 'SHOW_ALL';
var SHOW_PARENT = 'SHOW_PARENT';
var SHOW_CHILD = 'SHOW_CHILD';

/***/ }),

/***/ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/util.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/util.js ***!
  \**********************************************************************/
/*! exports provided: toTitle, toArray, createRef, UNSELECTABLE_STYLE, UNSELECTABLE_ATTRIBUTE, flatToHierarchy, resetAriaId, generateAriaId, isLabelInValue, parseSimpleTreeData, isPosRelated, cleanEntity, getFilterTree, formatInternalValue, getLabel, formatSelectorValue, convertDataToTree, convertTreeToEntities, conductCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTitle", function() { return toTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSELECTABLE_STYLE", function() { return UNSELECTABLE_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSELECTABLE_ATTRIBUTE", function() { return UNSELECTABLE_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatToHierarchy", function() { return flatToHierarchy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAriaId", function() { return resetAriaId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateAriaId", function() { return generateAriaId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLabelInValue", function() { return isLabelInValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSimpleTreeData", function() { return parseSimpleTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPosRelated", function() { return isPosRelated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanEntity", function() { return cleanEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterTree", function() { return getFilterTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatInternalValue", function() { return formatInternalValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabel", function() { return getLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatSelectorValue", function() { return formatSelectorValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDataToTree", function() { return convertDataToTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTreeToEntities", function() { return convertTreeToEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conductCheck", function() { return conductCheck; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/_warning@4.0.2@warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_tree_es_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-tree/es/util */ "./node_modules/_rc-tree@1.14.8@rc-tree/es/util.js");
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/_rc-util@4.6.0@rc-util/es/Children/toArray.js");
/* harmony import */ var _SelectNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectNode */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/SelectNode.js");
/* harmony import */ var _strategies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strategies */ "./node_modules/_rc-tree-select@2.3.1@rc-tree-select/es/strategies.js");








var warnDeprecatedLabel = false;

// =================== MISC ====================
function toTitle(title) {
  if (typeof title === 'string') {
    return title;
  }
  return null;
}

function toArray(data) {
  if (!data) return [];

  return Array.isArray(data) ? data : [data];
}

// Shallow copy of React 16.3 createRef api
function createRef() {
  var func = function setRef(node) {
    func.current = node;
  };
  return func;
}

// =============== Legacy ===============
var UNSELECTABLE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none'
};

var UNSELECTABLE_ATTRIBUTE = {
  unselectable: 'unselectable'
};

/**
 * Convert position list to hierarchy structure.
 * This is little hack since use '-' to split the position.
 */
function flatToHierarchy(positionList) {
  if (!positionList.length) {
    return [];
  }

  var entrances = {};

  // Prepare the position map
  var posMap = {};
  var parsedList = positionList.slice().map(function (entity) {
    var clone = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, entity, {
      fields: entity.pos.split('-')
    });
    delete clone.children;
    return clone;
  });

  parsedList.forEach(function (entity) {
    posMap[entity.pos] = entity;
  });

  parsedList.sort(function (a, b) {
    return a.fields.length - b.fields.length;
  });

  // Create the hierarchy
  parsedList.forEach(function (entity) {
    var parentPos = entity.fields.slice(0, -1).join('-');
    var parentEntity = posMap[parentPos];

    if (!parentEntity) {
      entrances[entity.pos] = entity;
    } else {
      parentEntity.children = parentEntity.children || [];
      parentEntity.children.push(entity);
    }

    // Some time position list provide `key`, we don't need it
    delete entity.key;
    delete entity.fields;
  });

  return Object.keys(entrances).map(function (key) {
    return entrances[key];
  });
}

// =============== Accessibility ===============
var ariaId = 0;

function resetAriaId() {
  ariaId = 0;
}

function generateAriaId(prefix) {
  ariaId += 1;
  return prefix + '_' + ariaId;
}

function isLabelInValue(props) {
  var treeCheckable = props.treeCheckable,
      treeCheckStrictly = props.treeCheckStrictly,
      labelInValue = props.labelInValue;

  if (treeCheckable && treeCheckStrictly) {
    return true;
  }
  return labelInValue || false;
}

// =================== Tree ====================
function parseSimpleTreeData(treeData, _ref) {
  var id = _ref.id,
      pId = _ref.pId,
      rootPId = _ref.rootPId;

  var keyNodes = {};
  var rootNodeList = [];

  // Fill in the map
  var nodeList = treeData.map(function (node) {
    var clone = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, node);
    var key = clone[id];
    keyNodes[key] = clone;
    clone.key = clone.key || key;
    return clone;
  });

  // Connect tree
  nodeList.forEach(function (node) {
    var parentKey = node[pId];
    var parent = keyNodes[parentKey];

    // Fill parent
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(node);
    }

    // Fill root tree node
    if (parentKey === rootPId || !parent && rootPId === null) {
      rootNodeList.push(node);
    }
  });

  return rootNodeList;
}

/**
 * Detect if position has relation.
 * e.g. 1-2 related with 1-2-3
 * e.g. 1-3-2 related with 1
 * e.g. 1-2 not related with 1-21
 */
function isPosRelated(pos1, pos2) {
  var fields1 = pos1.split('-');
  var fields2 = pos2.split('-');

  var minLen = Math.min(fields1.length, fields2.length);
  for (var i = 0; i < minLen; i += 1) {
    if (fields1[i] !== fields2[i]) {
      return false;
    }
  }
  return true;
}

/**
 * This function is only used on treeNode check (none treeCheckStrictly but has searchInput).
 * We convert entity to { node, pos, children } format.
 * This is legacy bug but we still need to do with it.
 * @param entity
 */
function cleanEntity(_ref2) {
  var node = _ref2.node,
      pos = _ref2.pos,
      children = _ref2.children;

  var instance = {
    node: node,
    pos: pos
  };

  if (children) {
    instance.children = children.map(cleanEntity);
  }

  return instance;
}

/**
 * Get a filtered TreeNode list by provided treeNodes.
 * [Legacy] Since `Tree` use `key` as map but `key` will changed by React,
 * we have to convert `treeNodes > data > treeNodes` to keep the key.
 * Such performance hungry!
 */
function getFilterTree(treeNodes, searchValue, filterFunc, valueEntities) {
  if (!searchValue) {
    return null;
  }

  function mapFilteredNodeToData(node) {
    if (!node) return null;

    var match = false;
    if (filterFunc(searchValue, node)) {
      match = true;
    }

    var children = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_4__["default"])(node.props.children).map(mapFilteredNodeToData).filter(function (n) {
      return n;
    });

    if (children.length || match) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        _SelectNode__WEBPACK_IMPORTED_MODULE_5__["default"],
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, node.props, {
          key: valueEntities[node.props.value].key
        }),
        children
      );
    }

    return null;
  }

  return treeNodes.map(mapFilteredNodeToData).filter(function (node) {
    return node;
  });
}

// =================== Value ===================
/**
 * Convert value to array format to make logic simplify.
 */
function formatInternalValue(value, props) {
  var valueList = toArray(value);

  // Parse label in value
  if (isLabelInValue(props)) {
    return valueList.map(function (val) {
      if (typeof val !== 'object' || !val) {
        return {
          value: '',
          label: ''
        };
      }

      return val;
    });
  }

  return valueList.map(function (val) {
    return {
      value: val
    };
  });
}

function getLabel(wrappedValue, entity, treeNodeLabelProp) {
  if (wrappedValue.label) {
    return wrappedValue.label;
  }

  if (entity && entity.node.props) {
    return entity.node.props[treeNodeLabelProp];
  }

  // Since value without entity will be in missValueList.
  // This code will never reached, but we still need this in case.
  return wrappedValue.value;
}

/**
 * Convert internal state `valueList` to user needed value list.
 * This will return an array list. You need check if is not multiple when return.
 *
 * `allCheckedNodes` is used for `treeCheckStrictly`
 */
function formatSelectorValue(valueList, props, valueEntities) {
  var treeNodeLabelProp = props.treeNodeLabelProp,
      treeCheckable = props.treeCheckable,
      treeCheckStrictly = props.treeCheckStrictly,
      showCheckedStrategy = props.showCheckedStrategy;

  // Will hide some value if `showCheckedStrategy` is set

  if (treeCheckable && !treeCheckStrictly) {
    var values = {};
    valueList.forEach(function (wrappedValue) {
      values[wrappedValue.value] = wrappedValue;
    });
    var hierarchyList = flatToHierarchy(valueList.map(function (_ref3) {
      var value = _ref3.value;
      return valueEntities[value];
    }));

    if (showCheckedStrategy === _strategies__WEBPACK_IMPORTED_MODULE_6__["SHOW_PARENT"]) {
      // Only get the parent checked value
      return hierarchyList.map(function (_ref4) {
        var value = _ref4.node.props.value;
        return {
          label: getLabel(values[value], valueEntities[value], treeNodeLabelProp),
          value: value
        };
      });
    } else if (showCheckedStrategy === _strategies__WEBPACK_IMPORTED_MODULE_6__["SHOW_CHILD"]) {
      // Only get the children checked value
      var targetValueList = [];

      // Find the leaf children
      var traverse = function traverse(_ref5) {
        var value = _ref5.node.props.value,
            children = _ref5.children;

        if (!children || children.length === 0) {
          targetValueList.push({
            label: getLabel(values[value], valueEntities[value], treeNodeLabelProp),
            value: value
          });
          return;
        }

        children.forEach(function (entity) {
          traverse(entity);
        });
      };

      hierarchyList.forEach(function (entity) {
        traverse(entity);
      });

      return targetValueList;
    }
  }

  return valueList.map(function (wrappedValue) {
    return {
      label: getLabel(wrappedValue, valueEntities[wrappedValue.value], treeNodeLabelProp),
      value: wrappedValue.value
    };
  });
}

/**
 * Use `rc-tree` convertDataToTree to convert treeData to TreeNodes.
 * This will change the label to title value
 */
function processProps(props) {
  var title = props.title,
      label = props.label,
      key = props.key,
      value = props.value;

  var cloneProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props);

  // Warning user not to use deprecated label prop.
  if (label && !title) {
    if (!warnDeprecatedLabel) {
      warning__WEBPACK_IMPORTED_MODULE_2___default()(false, '\'label\' in treeData is deprecated. Please use \'title\' instead.');
      warnDeprecatedLabel = true;
    }

    cloneProps.title = label;
  }

  if (!key) {
    cloneProps.key = value;
  }

  return cloneProps;
}

function convertDataToTree(treeData) {
  return Object(rc_tree_es_util__WEBPACK_IMPORTED_MODULE_3__["convertDataToTree"])(treeData, { processProps: processProps });
}

/**
 * Use `rc-tree` convertTreeToEntities for entities calculation.
 * We have additional entities of `valueEntities`
 */
function initWrapper(wrapper) {
  return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, wrapper, {
    valueEntities: {}
  });
}

function processEntity(entity, wrapper) {
  var value = entity.node.props.value;
  entity.value = value;
  wrapper.valueEntities[value] = entity;
}

function convertTreeToEntities(treeNodes) {
  return Object(rc_tree_es_util__WEBPACK_IMPORTED_MODULE_3__["convertTreeToEntities"])(treeNodes, {
    initWrapper: initWrapper,
    processEntity: processEntity
  });
}

var conductCheck = rc_tree_es_util__WEBPACK_IMPORTED_MODULE_3__["conductCheck"];

/***/ }),

/***/ "./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/LazyRenderBox.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/LazyRenderBox.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







var LazyRenderBox = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(LazyRenderBox, _Component);

  function LazyRenderBox() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LazyRenderBox);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_props, ['hiddenClassName', 'visible']);

    if (hiddenClassName || react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('div', props);
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(props.children);
  };

  return LazyRenderBox;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

LazyRenderBox.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  hiddenClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};


/* harmony default export */ __webpack_exports__["default"] = (LazyRenderBox);

/***/ }),

/***/ "./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/Popup.js":
/*!********************************************************************!*\
  !*** ./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/Popup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/_react-dom@16.5.2@react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_align__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-align */ "./node_modules/_rc-align@2.4.3@rc-align/es/index.js");
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-animate */ "./node_modules/_rc-animate@3.0.0-rc.6@rc-animate/es/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raf */ "./node_modules/_raf@3.4.0@raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _PopupInner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PopupInner */ "./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/PopupInner.js");
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LazyRenderBox */ "./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/LazyRenderBox.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/utils.js");














var Popup = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Popup, _Component);

  function Popup(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Popup);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      // Used for stretch
      stretchChecked: false,
      targetWidth: undefined,
      targetHeight: undefined
    };

    _this.savePopupRef = _utils__WEBPACK_IMPORTED_MODULE_12__["saveRef"].bind(_this, 'popupInstance');
    _this.saveAlignRef = _utils__WEBPACK_IMPORTED_MODULE_12__["saveRef"].bind(_this, 'alignInstance');
    return _this;
  }

  Popup.prototype.componentDidMount = function componentDidMount() {
    this.rootNode = this.getPopupDomNode();
    this.setStretchSize();
  };

  Popup.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setStretchSize();
  };

  // Record size if stretch needed


  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
    return react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(this.popupInstance);
  };

  // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align


  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
    var props = this.props;
    var transitionName = props.maskTransitionName;
    var animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }
    return transitionName;
  };

  Popup.prototype.getTransitionName = function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }
    return transitionName;
  };

  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
  };

  Popup.prototype.getPopupElement = function getPopupElement() {
    var _this2 = this;

    var savePopupRef = this.savePopupRef;
    var _state = this.state,
        stretchChecked = _state.stretchChecked,
        targetHeight = _state.targetHeight,
        targetWidth = _state.targetWidth;
    var _props = this.props,
        align = _props.align,
        visible = _props.visible,
        prefixCls = _props.prefixCls,
        style = _props.style,
        getClassNameFromAlign = _props.getClassNameFromAlign,
        destroyPopupOnHide = _props.destroyPopupOnHide,
        stretch = _props.stretch,
        children = _props.children,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave;

    var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
    var hiddenClassName = prefixCls + '-hidden';

    if (!visible) {
      this.currentAlignClassName = null;
    }

    var sizeStyle = {};
    if (stretch) {
      // Stretch with target
      if (stretch.indexOf('height') !== -1) {
        sizeStyle.height = targetHeight;
      } else if (stretch.indexOf('minHeight') !== -1) {
        sizeStyle.minHeight = targetHeight;
      }
      if (stretch.indexOf('width') !== -1) {
        sizeStyle.width = targetWidth;
      } else if (stretch.indexOf('minWidth') !== -1) {
        sizeStyle.minWidth = targetWidth;
      }

      // Delay force align to makes ui smooth
      if (!stretchChecked) {
        sizeStyle.visibility = 'hidden';
        raf__WEBPACK_IMPORTED_MODULE_9___default()(function () {
          if (_this2.alignInstance) {
            _this2.alignInstance.forceAlign();
          }
        });
      }
    }

    var newStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, sizeStyle, style, this.getZIndexStyle());

    var popupInnerProps = {
      className: className,
      prefixCls: prefixCls,
      ref: savePopupRef,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      style: newStyle
    };

    if (destroyPopupOnHide) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"],
        {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName(),
          onLeave: this.onAnimateLeaved
        },
        visible ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          rc_align__WEBPACK_IMPORTED_MODULE_7__["default"],
          {
            target: this.getAlignTarget(),
            key: 'popup',
            ref: this.saveAlignRef,
            monitorWindowResize: true,
            align: align,
            onAlign: this.onAlign
          },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            _PopupInner__WEBPACK_IMPORTED_MODULE_10__["default"],
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
              visible: true
            }, popupInnerProps),
            children
          )
        ) : null
      );
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"],
      {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible',
        onLeave: this.onAnimateLeaved
      },
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_align__WEBPACK_IMPORTED_MODULE_7__["default"],
        {
          target: this.getAlignTarget(),
          key: 'popup',
          ref: this.saveAlignRef,
          monitorWindowResize: true,
          xVisible: visible,
          childrenProps: { visible: 'xVisible' },
          disabled: !visible,
          align: align,
          onAlign: this.onAlign
        },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          _PopupInner__WEBPACK_IMPORTED_MODULE_10__["default"],
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            hiddenClassName: hiddenClassName
          }, popupInnerProps),
          children
        )
      )
    );
  };

  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
    var style = {};
    var props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  };

  Popup.prototype.getMaskElement = function getMaskElement() {
    var props = this.props;
    var maskElement = void 0;
    if (props.mask) {
      var maskTransition = this.getMaskTransitionName();
      maskElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_LazyRenderBox__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: this.getZIndexStyle(),
        key: 'mask',
        className: props.prefixCls + '-mask',
        hiddenClassName: props.prefixCls + '-mask-hidden',
        visible: props.visible
      });
      if (maskTransition) {
        maskElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"],
          {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          },
          maskElement
        );
      }
    }
    return maskElement;
  };

  Popup.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      'div',
      null,
      this.getMaskElement(),
      this.getPopupElement()
    );
  };

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

Popup.propTypes = {
  visible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  getClassNameFromAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  getRootDomNode: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  align: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  destroyPopupOnHide: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  stretch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
  point: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    pageX: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    pageY: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
  })
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onAlign = function (popupDomNode, align) {
    var props = _this3.props;
    var currentAlignClassName = props.getClassNameFromAlign(align);
    // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79
    if (_this3.currentAlignClassName !== currentAlignClassName) {
      _this3.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = _this3.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  };

  this.onAnimateLeaved = function () {
    var stretch = _this3.props.stretch;
    var stretchChecked = _this3.state.stretchChecked;

    if (stretch && stretchChecked) {
      _this3.setState({ stretchChecked: false });
    }
  };

  this.setStretchSize = function () {
    var getRootDomNode = _this3.props.getRootDomNode;
    var _state2 = _this3.state,
        stretchChecked = _state2.stretchChecked,
        targetHeight = _state2.targetHeight,
        targetWidth = _state2.targetWidth;


    var $ele = getRootDomNode();
    if (!$ele) return;

    var height = $ele.offsetHeight;
    var width = $ele.offsetWidth;

    if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
      _this3.setState({
        stretchChecked: true,
        targetHeight: height,
        targetWidth: width
      });
    }
  };

  this.getTargetElement = function () {
    return _this3.props.getRootDomNode();
  };

  this.getAlignTarget = function () {
    var point = _this3.props.point;

    if (point) {
      return point;
    }
    return _this3.getTargetElement;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/PopupInner.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/PopupInner.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LazyRenderBox */ "./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/LazyRenderBox.js");







var PopupInner = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(PopupInner, _Component);

  function PopupInner() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PopupInner);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _Component.apply(this, arguments));
  }

  PopupInner.prototype.render = function render() {
    var props = this.props;
    var className = props.className;
    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'div',
      {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        style: props.style
      },
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        _LazyRenderBox__WEBPACK_IMPORTED_MODULE_5__["default"],
        { className: props.prefixCls + '-content', visible: props.visible },
        props.children
      )
    );
  };

  return PopupInner;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

PopupInner.propTypes = {
  hiddenClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};


/* harmony default export */ __webpack_exports__["default"] = (PopupInner);

/***/ }),

/***/ "./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/_react-dom@16.5.2@react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/_rc-util@4.6.0@rc-util/es/Dom/contains.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/_rc-util@4.6.0@rc-util/es/Dom/addEventListener.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Popup */ "./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/Popup.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/utils.js");
/* harmony import */ var rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/ContainerRender */ "./node_modules/_rc-util@4.6.0@rc-util/es/ContainerRender.js");
/* harmony import */ var rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-util/es/Portal */ "./node_modules/_rc-util@4.6.0@rc-util/es/Portal.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);















function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

var IS_REACT_16 = !!react_dom__WEBPACK_IMPORTED_MODULE_6__["createPortal"];

var Trigger = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Trigger, _React$Component);

  function Trigger(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Trigger);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var popupVisible = void 0;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }

    _this.prevPopupVisible = popupVisible;

    _this.state = {
      popupVisible: popupVisible
    };
    return _this;
  }

  Trigger.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    ALL_HANDLERS.forEach(function (h) {
      _this2['fire' + h] = function (e) {
        _this2.fireEvents(h, e);
      };
    });
  };

  Trigger.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  };

  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  };

  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    };
    if (!IS_REACT_16) {
      this.renderComponent(null, triggerAfterPopupVisibleChange);
    }

    this.prevPopupVisible = prevState.popupVisible;

    // We must listen to `mousedown` or `touchstart`, edge case:
    // https://github.com/ant-design/ant-design/issues/5804
    // https://github.com/react-component/calendar/issues/250
    // https://github.com/react-component/trigger/issues/50
    if (state.popupVisible) {
      var currentDocument = void 0;
      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(currentDocument, 'mousedown', this.onDocumentClick);
      }
      // always hide on mobile
      if (!this.touchOutsideHandler) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(currentDocument, 'touchstart', this.onDocumentClick);
      }
      // close popup when trigger type contains 'onContextMenu' and document is scrolling.
      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
        currentDocument = currentDocument || props.getDocument();
        this.contextMenuOutsideHandler1 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(currentDocument, 'scroll', this.onContextMenuClose);
      }
      // close popup when trigger type contains 'onContextMenu' and window is blur.
      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
        this.contextMenuOutsideHandler2 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(window, 'blur', this.onContextMenuClose);
      }
      return;
    }

    this.clearOutsideHandler();
  };

  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
  };

  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
    // for test
    if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }
    return null;
  };

  Trigger.prototype.getPopupAlign = function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getAlignFromPlacement"])(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  };

  /**
   * @param popupVisible    Show or not the popup element
   * @param event           SyntheticEvent, used for `pointAlign`
   */
  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible, event) {
    var alignPoint = this.props.alignPoint;


    this.clearDelayTimer();

    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({ popupVisible: popupVisible });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }

    // Always record the point position since mouseEnterDelay will delay the show
    if (alignPoint && event) {
      this.setPoint(event);
    }
  };

  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS, event) {
    var _this3 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      var point = event ? { pageX: event.pageX, pageY: event.pageY } : null;
      this.delayTimer = setTimeout(function () {
        _this3.setPopupVisible(visible, point);
        _this3.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible, event);
    }
  };

  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  };

  Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.contextMenuOutsideHandler1) {
      this.contextMenuOutsideHandler1.remove();
      this.contextMenuOutsideHandler1 = null;
    }

    if (this.contextMenuOutsideHandler2) {
      this.contextMenuOutsideHandler2.remove();
      this.contextMenuOutsideHandler2 = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  };

  Trigger.prototype.createTwoChains = function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  };

  Trigger.prototype.isClickToShow = function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
    var _props2 = this.props,
        action = _props2.action,
        showAction = _props2.showAction;

    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
  };

  Trigger.prototype.isClickToHide = function isClickToHide() {
    var _props3 = this.props,
        action = _props3.action,
        hideAction = _props3.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
    var _props4 = this.props,
        action = _props4.action,
        showAction = _props4.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  };

  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
    var _props5 = this.props,
        action = _props5.action,
        hideAction = _props5.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  };

  Trigger.prototype.isFocusToShow = function isFocusToShow() {
    var _props6 = this.props,
        action = _props6.action,
        showAction = _props6.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  };

  Trigger.prototype.isBlurToHide = function isBlurToHide() {
    var _props7 = this.props,
        action = _props7.action,
        hideAction = _props7.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  };

  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
    if (this.state.popupVisible && this._component && this._component.alignInstance) {
      this._component.alignInstance.forceAlign();
    }
  };

  Trigger.prototype.fireEvents = function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  };

  Trigger.prototype.close = function close() {
    this.setPopupVisible(false);
  };

  Trigger.prototype.render = function render() {
    var _this4 = this;

    var popupVisible = this.state.popupVisible;
    var _props8 = this.props,
        children = _props8.children,
        forceRender = _props8.forceRender,
        alignPoint = _props8.alignPoint,
        className = _props8.className;

    var child = react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(children);
    var newChildProps = { key: 'trigger' };

    if (this.isContextMenuToShow()) {
      newChildProps.onContextMenu = this.onContextMenu;
    } else {
      newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
    }

    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
      if (alignPoint) {
        newChildProps.onMouseMove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    var childrenClassName = classnames__WEBPACK_IMPORTED_MODULE_13___default()(child && child.props && child.props.className, className);
    if (childrenClassName) {
      newChildProps.className = childrenClassName;
    }
    var trigger = react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, newChildProps);

    if (!IS_REACT_16) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_11__["default"],
        {
          parent: this,
          visible: popupVisible,
          autoMount: false,
          forceRender: forceRender,
          getComponent: this.getComponent,
          getContainer: this.getContainer
        },
        function (_ref2) {
          var renderComponent = _ref2.renderComponent;

          _this4.renderComponent = renderComponent;
          return trigger;
        }
      );
    }

    var portal = void 0;
    // prevent unmounting after it's rendered
    if (popupVisible || this._component || forceRender) {
      portal = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_12__["default"],
        {
          key: 'portal',
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        },
        this.getComponent()
      );
    }

    return [trigger, portal];
  };

  return Trigger;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Trigger.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  action: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string)]),
  showAction: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  hideAction: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  getPopupClassNameFromAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  onPopupVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  afterPopupVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  popup: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func]).isRequired,
  popupStyle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  popupClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  popupPlacement: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  builtinPlacements: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  popupTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object]),
  popupAnimation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  mouseEnterDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  mouseLeaveDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  focusDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  blurDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  getPopupContainer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  getDocument: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  destroyPopupOnHide: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  mask: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  maskClosable: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onPopupAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  popupAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  popupVisible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  defaultPopupVisible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  maskTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object]),
  maskAnimation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  stretch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  alignPoint: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool // Maybe we can support user pass position in the future
};
Trigger.defaultProps = {
  prefixCls: 'rc-trigger-popup',
  getPopupClassNameFromAlign: returnEmptyString,
  getDocument: returnDocument,
  onPopupVisibleChange: noop,
  afterPopupVisibleChange: noop,
  onPopupAlign: noop,
  popupClassName: '',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  focusDelay: 0,
  blurDelay: 0.15,
  popupStyle: {},
  destroyPopupOnHide: false,
  popupAlign: {},
  defaultPopupVisible: false,
  mask: false,
  maskClosable: true,
  action: [],
  showAction: [],
  hideAction: []
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.onMouseEnter = function (e) {
    var mouseEnterDelay = _this5.props.mouseEnterDelay;

    _this5.fireEvents('onMouseEnter', e);
    _this5.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
  };

  this.onMouseMove = function (e) {
    _this5.fireEvents('onMouseMove', e);
    _this5.setPoint(e);
  };

  this.onMouseLeave = function (e) {
    _this5.fireEvents('onMouseLeave', e);
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onPopupMouseEnter = function () {
    _this5.clearDelayTimer();
  };

  this.onPopupMouseLeave = function (e) {
    // https://github.com/react-component/trigger/pull/13
    // react bug?
    if (e.relatedTarget && !e.relatedTarget.setTimeout && _this5._component && _this5._component.getPopupDomNode && Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__["default"])(_this5._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onFocus = function (e) {
    _this5.fireEvents('onFocus', e);
    // incase focusin and focusout
    _this5.clearDelayTimer();
    if (_this5.isFocusToShow()) {
      _this5.focusTime = Date.now();
      _this5.delaySetPopupVisible(true, _this5.props.focusDelay);
    }
  };

  this.onMouseDown = function (e) {
    _this5.fireEvents('onMouseDown', e);
    _this5.preClickTime = Date.now();
  };

  this.onTouchStart = function (e) {
    _this5.fireEvents('onTouchStart', e);
    _this5.preTouchTime = Date.now();
  };

  this.onBlur = function (e) {
    _this5.fireEvents('onBlur', e);
    _this5.clearDelayTimer();
    if (_this5.isBlurToHide()) {
      _this5.delaySetPopupVisible(false, _this5.props.blurDelay);
    }
  };

  this.onContextMenu = function (e) {
    e.preventDefault();
    _this5.fireEvents('onContextMenu', e);
    _this5.setPopupVisible(true, e);
  };

  this.onContextMenuClose = function () {
    if (_this5.isContextMenuToShow()) {
      _this5.close();
    }
  };

  this.onClick = function (event) {
    _this5.fireEvents('onClick', event);
    // focus will trigger click
    if (_this5.focusTime) {
      var preTime = void 0;
      if (_this5.preClickTime && _this5.preTouchTime) {
        preTime = Math.min(_this5.preClickTime, _this5.preTouchTime);
      } else if (_this5.preClickTime) {
        preTime = _this5.preClickTime;
      } else if (_this5.preTouchTime) {
        preTime = _this5.preTouchTime;
      }
      if (Math.abs(preTime - _this5.focusTime) < 20) {
        return;
      }
      _this5.focusTime = 0;
    }
    _this5.preClickTime = 0;
    _this5.preTouchTime = 0;
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    var nextVisible = !_this5.state.popupVisible;
    if (_this5.isClickToHide() && !nextVisible || nextVisible && _this5.isClickToShow()) {
      _this5.setPopupVisible(!_this5.state.popupVisible, event);
    }
  };

  this.onDocumentClick = function (event) {
    if (_this5.props.mask && !_this5.props.maskClosable) {
      return;
    }
    var target = event.target;
    var root = Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(_this5);
    var popupNode = _this5.getPopupDomNode();
    if (!Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__["default"])(root, target) && !Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__["default"])(popupNode, target)) {
      _this5.close();
    }
  };

  this.getRootDomNode = function () {
    return Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(_this5);
  };

  this.getPopupClassNameFromAlign = function (align) {
    var className = [];
    var _props9 = _this5.props,
        popupPlacement = _props9.popupPlacement,
        builtinPlacements = _props9.builtinPlacements,
        prefixCls = _props9.prefixCls,
        alignPoint = _props9.alignPoint,
        getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;

    if (popupPlacement && builtinPlacements) {
      className.push(Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getAlignPopupClassName"])(builtinPlacements, prefixCls, align, alignPoint));
    }
    if (getPopupClassNameFromAlign) {
      className.push(getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  };

  this.getComponent = function () {
    var _props10 = _this5.props,
        prefixCls = _props10.prefixCls,
        destroyPopupOnHide = _props10.destroyPopupOnHide,
        popupClassName = _props10.popupClassName,
        action = _props10.action,
        onPopupAlign = _props10.onPopupAlign,
        popupAnimation = _props10.popupAnimation,
        popupTransitionName = _props10.popupTransitionName,
        popupStyle = _props10.popupStyle,
        mask = _props10.mask,
        maskAnimation = _props10.maskAnimation,
        maskTransitionName = _props10.maskTransitionName,
        zIndex = _props10.zIndex,
        popup = _props10.popup,
        stretch = _props10.stretch,
        alignPoint = _props10.alignPoint;
    var _state = _this5.state,
        popupVisible = _state.popupVisible,
        point = _state.point;


    var align = _this5.getPopupAlign();

    var mouseProps = {};
    if (_this5.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = _this5.onPopupMouseEnter;
    }
    if (_this5.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = _this5.onPopupMouseLeave;
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      _Popup__WEBPACK_IMPORTED_MODULE_9__["default"],
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        prefixCls: prefixCls,
        destroyPopupOnHide: destroyPopupOnHide,
        visible: popupVisible,
        point: alignPoint && point,
        className: popupClassName,
        action: action,
        align: align,
        onAlign: onPopupAlign,
        animation: popupAnimation,
        getClassNameFromAlign: _this5.getPopupClassNameFromAlign
      }, mouseProps, {
        stretch: stretch,
        getRootDomNode: _this5.getRootDomNode,
        style: popupStyle,
        mask: mask,
        zIndex: zIndex,
        transitionName: popupTransitionName,
        maskAnimation: maskAnimation,
        maskTransitionName: maskTransitionName,
        ref: _this5.savePopup
      }),
      typeof popup === 'function' ? popup() : popup
    );
  };

  this.getContainer = function () {
    var props = _this5.props;

    var popupContainer = document.createElement('div');
    // Make sure default popup container will never cause scrollbar appearing
    // https://github.com/react-component/trigger/issues/41
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    var mountNode = props.getPopupContainer ? props.getPopupContainer(Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(_this5)) : props.getDocument().body;
    mountNode.appendChild(popupContainer);
    return popupContainer;
  };

  this.setPoint = function (point) {
    var alignPoint = _this5.props.alignPoint;

    if (!alignPoint || !point) return;

    _this5.setState({
      point: {
        pageX: point.pageX,
        pageY: point.pageY
      }
    });
  };

  this.handlePortalUpdate = function () {
    if (_this5.prevPopupVisible !== _this5.state.popupVisible) {
      _this5.props.afterPopupVisibleChange(_this5.state.popupVisible);
    }
  };

  this.savePopup = function (node) {
    _this5._component = node;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Trigger);

/***/ }),

/***/ "./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/utils.js":
/*!********************************************************************!*\
  !*** ./node_modules/_rc-trigger@3.0.0-rc.3@rc-trigger/es/utils.js ***!
  \********************************************************************/
/*! exports provided: getAlignFromPlacement, getAlignPopupClassName, saveRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignFromPlacement", function() { return getAlignFromPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignPopupClassName", function() { return getAlignPopupClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRef", function() { return saveRef; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);

function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, baseAlign, align);
}

function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}

function saveRef(name, component) {
  this[name] = component;
}

/***/ })

}]);
//# sourceMappingURL=26_7b5d6a55ffdde723f71d.js.map