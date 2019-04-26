(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/_antd@3.10.1@antd/es/time-picker/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/time-picker/index.js ***!
  \****************************************************************/
/*! exports provided: generateShowHourMinuteSecond, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateShowHourMinuteSecond", function() { return generateShowHourMinuteSecond; });
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/_react-lifecycles-compat@3.0.4@react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var rc_time_picker_es_TimePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-time-picker/es/TimePicker */ "./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/TimePicker.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/_antd@3.10.1@antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _locale_en_US__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./locale/en_US */ "./node_modules/_antd@3.10.1@antd/es/time-picker/locale/en_US.js");
/* harmony import */ var _util_interopDefault__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_util/interopDefault */ "./node_modules/_antd@3.10.1@antd/es/_util/interopDefault.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");















function generateShowHourMinuteSecond(format) {
    // Ref: http://momentjs.com/docs/#/parsing/string-format/
    return {
        showHour: format.indexOf('H') > -1 || format.indexOf('h') > -1 || format.indexOf('k') > -1,
        showMinute: format.indexOf('m') > -1,
        showSecond: format.indexOf('s') > -1
    };
}

var TimePicker = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TimePicker, _React$Component);

    function TimePicker(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TimePicker);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

        _this.handleChange = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                _this$props$format = _this$props.format,
                format = _this$props$format === undefined ? 'HH:mm:ss' : _this$props$format;

            if (onChange) {
                onChange(value, value && value.format(format) || '');
            }
        };
        _this.handleOpenClose = function (_ref) {
            var open = _ref.open;
            var onOpenChange = _this.props.onOpenChange;

            if (onOpenChange) {
                onOpenChange(open);
            }
        };
        _this.saveTimePicker = function (timePickerRef) {
            _this.timePickerRef = timePickerRef;
        };
        _this.renderTimePicker = function (locale) {
            var _classNames2;

            var props = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props);
            delete props.defaultValue;
            var format = _this.getDefaultFormat();
            var className = classnames__WEBPACK_IMPORTED_MODULE_10___default()(props.className, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.prefixCls + '-' + props.size, !!props.size));
            var addon = function addon(panel) {
                return props.addon ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: props.prefixCls + '-panel-addon' },
                    props.addon(panel)
                ) : null;
            };
            var suffixIcon = props.suffixIcon,
                prefixCls = props.prefixCls;

            var clockIcon = suffixIcon && (react__WEBPACK_IMPORTED_MODULE_6__["isValidElement"](suffixIcon) ? react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](suffixIcon, {
                className: classnames__WEBPACK_IMPORTED_MODULE_10___default()((_classNames2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames2, suffixIcon.props.className, suffixIcon.props.className), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames2, prefixCls + '-clock-icon', true), _classNames2))
            }) : react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: prefixCls + '-clock-icon' },
                suffixIcon
            )) || react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_14__["default"], { type: 'clock-circle', className: prefixCls + '-clock-icon', theme: 'outlined' });
            var inputIcon = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: prefixCls + '-icon' },
                clockIcon
            );
            var clearIcon = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_14__["default"], { type: 'close-circle', className: prefixCls + '-panel-clear-btn-icon', theme: 'filled' });
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_time_picker_es_TimePicker__WEBPACK_IMPORTED_MODULE_9__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, generateShowHourMinuteSecond(format), props, { ref: _this.saveTimePicker, format: format, className: className, value: _this.state.value, placeholder: props.placeholder === undefined ? locale.placeholder : props.placeholder, onChange: _this.handleChange, onOpen: _this.handleOpenClose, onClose: _this.handleOpenClose, addon: addon, inputIcon: inputIcon, clearIcon: clearIcon }));
        };
        var value = props.value || props.defaultValue;
        if (value && !Object(_util_interopDefault__WEBPACK_IMPORTED_MODULE_13__["default"])(moment__WEBPACK_IMPORTED_MODULE_7__).isMoment(value)) {
            throw new Error('The value/defaultValue of TimePicker must be a moment object after `antd@2.0`, ' + 'see: https://u.ant.design/time-picker-value');
        }
        _this.state = {
            value: value
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TimePicker, [{
        key: 'focus',
        value: function focus() {
            this.timePickerRef.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.timePickerRef.blur();
        }
    }, {
        key: 'getDefaultFormat',
        value: function getDefaultFormat() {
            var _props = this.props,
                format = _props.format,
                use12Hours = _props.use12Hours;

            if (format) {
                return format;
            } else if (use12Hours) {
                return 'h:mm:ss a';
            }
            return 'HH:mm:ss';
        }
    }, {
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_11__["default"],
                { componentName: 'TimePicker', defaultLocale: _locale_en_US__WEBPACK_IMPORTED_MODULE_12__["default"] },
                this.renderTimePicker
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps) {
            if ('value' in nextProps) {
                return { value: nextProps.value };
            }
            return null;
        }
    }]);

    return TimePicker;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

TimePicker.defaultProps = {
    prefixCls: 'ant-time-picker',
    align: {
        offset: [0, -2]
    },
    disabled: false,
    disabledHours: undefined,
    disabledMinutes: undefined,
    disabledSeconds: undefined,
    hideDisabledOptions: false,
    placement: 'bottomLeft',
    transitionName: 'slide-up',
    focusOnOpen: true
};
Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__["polyfill"])(TimePicker);
/* harmony default export */ __webpack_exports__["default"] = (TimePicker);

/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/time-picker/style/css.js":
/*!********************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/time-picker/style/css.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/_antd@3.10.1@antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/_antd@3.10.1@antd/es/time-picker/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");


// style dependencies


/***/ }),

/***/ "./node_modules/_antd@3.10.1@antd/es/time-picker/style/index.css":
/*!***********************************************************************!*\
  !*** ./node_modules/_antd@3.10.1@antd/es/time-picker/style/index.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/Combobox.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/Combobox.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Select */ "./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/Select.js");








var formatOption = function formatOption(option, disabledOptions) {
  var value = '' + option;
  if (option < 10) {
    value = '0' + option;
  }

  var disabled = false;
  if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
    disabled = true;
  }

  return {
    value: value,
    disabled: disabled
  };
};

var Combobox = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Combobox, _Component);

  function Combobox() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Combobox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_ref = Combobox.__proto__ || Object.getPrototypeOf(Combobox)).call.apply(_ref, [this].concat(args))), _this), _this.onItemChange = function (type, itemValue) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          defaultOpenValue = _this$props.defaultOpenValue,
          use12Hours = _this$props.use12Hours;

      var value = (_this.props.value || defaultOpenValue).clone();

      if (type === 'hour') {
        if (use12Hours) {
          if (_this.props.isAM) {
            value.hour(+itemValue % 12);
          } else {
            value.hour(+itemValue % 12 + 12);
          }
        } else {
          value.hour(+itemValue);
        }
      } else if (type === 'minute') {
        value.minute(+itemValue);
      } else if (type === 'ampm') {
        var ampm = itemValue.toUpperCase();
        if (use12Hours) {
          if (ampm === 'PM' && value.hour() < 12) {
            value.hour(value.hour() % 12 + 12);
          }

          if (ampm === 'AM') {
            if (value.hour() >= 12) {
              value.hour(value.hour() - 12);
            }
          }
        }
      } else {
        value.second(+itemValue);
      }
      onChange(value);
    }, _this.onEnterSelectPanel = function (range) {
      _this.props.onCurrentSelectPanelChange(range);
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Combobox, [{
    key: 'getHourSelect',
    value: function getHourSelect(hour) {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          hourOptions = _props.hourOptions,
          disabledHours = _props.disabledHours,
          showHour = _props.showHour,
          use12Hours = _props.use12Hours;

      if (!showHour) {
        return null;
      }
      var disabledOptions = disabledHours();
      var hourOptionsAdj = void 0;
      var hourAdj = void 0;
      if (use12Hours) {
        hourOptionsAdj = [12].concat(hourOptions.filter(function (h) {
          return h < 12 && h > 0;
        }));
        hourAdj = hour % 12 || 12;
      } else {
        hourOptionsAdj = hourOptions;
        hourAdj = hour;
      }

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        prefixCls: prefixCls,
        options: hourOptionsAdj.map(function (option) {
          return formatOption(option, disabledOptions);
        }),
        selectedIndex: hourOptionsAdj.indexOf(hourAdj),
        type: 'hour',
        onSelect: this.onItemChange,
        onMouseEnter: this.onEnterSelectPanel.bind(this, 'hour')
      });
    }
  }, {
    key: 'getMinuteSelect',
    value: function getMinuteSelect(minute) {
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          minuteOptions = _props2.minuteOptions,
          disabledMinutes = _props2.disabledMinutes,
          defaultOpenValue = _props2.defaultOpenValue,
          showMinute = _props2.showMinute;

      if (!showMinute) {
        return null;
      }
      var value = this.props.value || defaultOpenValue;
      var disabledOptions = disabledMinutes(value.hour());

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        prefixCls: prefixCls,
        options: minuteOptions.map(function (option) {
          return formatOption(option, disabledOptions);
        }),
        selectedIndex: minuteOptions.indexOf(minute),
        type: 'minute',
        onSelect: this.onItemChange,
        onMouseEnter: this.onEnterSelectPanel.bind(this, 'minute')
      });
    }
  }, {
    key: 'getSecondSelect',
    value: function getSecondSelect(second) {
      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          secondOptions = _props3.secondOptions,
          disabledSeconds = _props3.disabledSeconds,
          showSecond = _props3.showSecond,
          defaultOpenValue = _props3.defaultOpenValue;

      if (!showSecond) {
        return null;
      }
      var value = this.props.value || defaultOpenValue;
      var disabledOptions = disabledSeconds(value.hour(), value.minute());

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        prefixCls: prefixCls,
        options: secondOptions.map(function (option) {
          return formatOption(option, disabledOptions);
        }),
        selectedIndex: secondOptions.indexOf(second),
        type: 'second',
        onSelect: this.onItemChange,
        onMouseEnter: this.onEnterSelectPanel.bind(this, 'second')
      });
    }
  }, {
    key: 'getAMPMSelect',
    value: function getAMPMSelect() {
      var _props4 = this.props,
          prefixCls = _props4.prefixCls,
          use12Hours = _props4.use12Hours,
          format = _props4.format;

      if (!use12Hours) {
        return null;
      }

      var AMPMOptions = ['am', 'pm'] // If format has A char, then we should uppercase AM/PM
      .map(function (c) {
        return format.match(/\sA/) ? c.toUpperCase() : c;
      }).map(function (c) {
        return { value: c };
      });

      var selected = this.props.isAM ? 0 : 1;

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
        prefixCls: prefixCls,
        options: AMPMOptions,
        selectedIndex: selected,
        type: 'ampm',
        onSelect: this.onItemChange,
        onMouseEnter: this.onEnterSelectPanel.bind(this, 'ampm')
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          prefixCls = _props5.prefixCls,
          defaultOpenValue = _props5.defaultOpenValue;

      var value = this.props.value || defaultOpenValue;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        'div',
        { className: prefixCls + '-combobox' },
        this.getHourSelect(value.hour()),
        this.getMinuteSelect(value.minute()),
        this.getSecondSelect(value.second()),
        this.getAMPMSelect(value.hour())
      );
    }
  }]);

  return Combobox;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

Combobox.propTypes = {
  format: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  defaultOpenValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  showHour: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  showMinute: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  showSecond: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  hourOptions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  minuteOptions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  secondOptions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  disabledHours: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  disabledMinutes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  disabledSeconds: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onCurrentSelectPanelChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  use12Hours: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  isAM: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};


/* harmony default export */ __webpack_exports__["default"] = (Combobox);

/***/ }),

/***/ "./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/Header.js":
/*!************************************************************************!*\
  !*** ./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/Header.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);








var Header = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Header, _Component);

  function Header(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Header);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value,
        format = props.format;

    _this.state = {
      str: value && value.format(format) || '',
      invalid: false
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.focusOnOpen) {
        // Wait one frame for the panel to be positioned before focusing
        var requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
        requestAnimationFrame(function () {
          _this2.refs.input.focus();
          _this2.refs.input.select();
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value,
          format = nextProps.format;

      this.setState({
        str: value && value.format(format) || '',
        invalid: false
      });
    }
  }, {
    key: 'getClearButton',
    value: function getClearButton() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          allowEmpty = _props.allowEmpty,
          clearIcon = _props.clearIcon;

      if (!allowEmpty) {
        return null;
      }
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        'a',
        {
          role: 'button',
          className: prefixCls + '-clear-btn',
          title: this.props.clearText,
          onMouseDown: this.onClear
        },
        clearIcon || react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('i', { className: prefixCls + '-clear-btn-icon' })
      );
    }
  }, {
    key: 'getProtoValue',
    value: function getProtoValue() {
      return this.props.value || this.props.defaultOpenValue;
    }
  }, {
    key: 'getInput',
    value: function getInput() {
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          placeholder = _props2.placeholder,
          inputReadOnly = _props2.inputReadOnly;
      var _state = this.state,
          invalid = _state.invalid,
          str = _state.str;

      var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('input', {
        className: prefixCls + '-input  ' + invalidClass,
        ref: 'input',
        onKeyDown: this.onKeyDown,
        value: str,
        placeholder: placeholder,
        onChange: this.onInputChange,
        readOnly: !!inputReadOnly
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var prefixCls = this.props.prefixCls;

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        'div',
        { className: prefixCls + '-input-wrap' },
        this.getInput(),
        this.getClearButton()
      );
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

Header.propTypes = {
  format: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  disabledDate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  clearText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  inputReadOnly: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  hourOptions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  minuteOptions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  secondOptions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  disabledHours: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  disabledMinutes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  disabledSeconds: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onClear: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onEsc: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  allowEmpty: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  defaultOpenValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  currentSelectPanel: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  focusOnOpen: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  clearIcon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node
};
Header.defaultProps = {
  inputReadOnly: false
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onInputChange = function (event) {
    var str = event.target.value;
    _this3.setState({
      str: str
    });
    var _props3 = _this3.props,
        format = _props3.format,
        hourOptions = _props3.hourOptions,
        minuteOptions = _props3.minuteOptions,
        secondOptions = _props3.secondOptions,
        disabledHours = _props3.disabledHours,
        disabledMinutes = _props3.disabledMinutes,
        disabledSeconds = _props3.disabledSeconds,
        onChange = _props3.onChange,
        allowEmpty = _props3.allowEmpty;


    if (str) {
      var originalValue = _this3.props.value;
      var value = _this3.getProtoValue().clone();
      var parsed = moment__WEBPACK_IMPORTED_MODULE_6___default()(str, format, true);
      if (!parsed.isValid()) {
        _this3.setState({
          invalid: true
        });
        return;
      }
      value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

      // if time value not allowed, response warning.
      if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
        _this3.setState({
          invalid: true
        });
        return;
      }

      // if time value is disabled, response warning.
      var disabledHourOptions = disabledHours();
      var disabledMinuteOptions = disabledMinutes(value.hour());
      var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());
      if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
        _this3.setState({
          invalid: true
        });
        return;
      }

      if (originalValue) {
        if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
          // keep other fields for rc-calendar
          var changedValue = originalValue.clone();
          changedValue.hour(value.hour());
          changedValue.minute(value.minute());
          changedValue.second(value.second());
          onChange(changedValue);
        }
      } else if (originalValue !== value) {
        onChange(value);
      }
    } else if (allowEmpty) {
      onChange(null);
    } else {
      _this3.setState({
        invalid: true
      });
      return;
    }

    _this3.setState({
      invalid: false
    });
  };

  this.onKeyDown = function (e) {
    var _props4 = _this3.props,
        onEsc = _props4.onEsc,
        onKeyDown = _props4.onKeyDown;

    if (e.keyCode === 27) {
      onEsc();
    }

    onKeyDown(e);
  };

  this.onClear = function () {
    _this3.setState({ str: '' });
    _this3.props.onClear();
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/Panel.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/Panel.js ***!
  \***********************************************************************/
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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ "./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/Header.js");
/* harmony import */ var _Combobox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Combobox */ "./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/Combobox.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);












function noop() {}

function generateOptions(length, disabledOptions, hideDisabledOptions) {
  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  var arr = [];
  for (var value = 0; value < length; value += step) {
    if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
      arr.push(value);
    }
  }
  return arr;
}

var Panel = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Panel, _Component);

  function Panel(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Panel);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

    _this.onChange = function (newValue) {
      _this.setState({ value: newValue });
      _this.props.onChange(newValue);
    };

    _this.onCurrentSelectPanelChange = function (currentSelectPanel) {
      _this.setState({ currentSelectPanel: currentSelectPanel });
    };

    _this.disabledHours = function () {
      var _this$props = _this.props,
          use12Hours = _this$props.use12Hours,
          disabledHours = _this$props.disabledHours;

      var disabledOptions = disabledHours();
      if (use12Hours && Array.isArray(disabledOptions)) {
        if (_this.isAM()) {
          disabledOptions = disabledOptions.filter(function (h) {
            return h < 12;
          }).map(function (h) {
            return h === 0 ? 12 : h;
          });
        } else {
          disabledOptions = disabledOptions.map(function (h) {
            return h === 12 ? 12 : h - 12;
          });
        }
      }
      return disabledOptions;
    };

    _this.state = {
      value: props.value,
      selectionRange: []
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Panel, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value;
      if (value) {
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: 'close',


    // https://github.com/ant-design/ant-design/issues/5829
    value: function close() {
      this.props.onEsc();
    }
  }, {
    key: 'isAM',
    value: function isAM() {
      var value = this.state.value || this.props.defaultOpenValue;
      return value.hour() >= 0 && value.hour() < 12;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          placeholder = _props.placeholder,
          disabledMinutes = _props.disabledMinutes,
          disabledSeconds = _props.disabledSeconds,
          hideDisabledOptions = _props.hideDisabledOptions,
          allowEmpty = _props.allowEmpty,
          showHour = _props.showHour,
          showMinute = _props.showMinute,
          showSecond = _props.showSecond,
          format = _props.format,
          defaultOpenValue = _props.defaultOpenValue,
          clearText = _props.clearText,
          onEsc = _props.onEsc,
          addon = _props.addon,
          use12Hours = _props.use12Hours,
          onClear = _props.onClear,
          focusOnOpen = _props.focusOnOpen,
          onKeyDown = _props.onKeyDown,
          hourStep = _props.hourStep,
          minuteStep = _props.minuteStep,
          secondStep = _props.secondStep,
          inputReadOnly = _props.inputReadOnly,
          clearIcon = _props.clearIcon;
      var _state = this.state,
          value = _state.value,
          currentSelectPanel = _state.currentSelectPanel;

      var disabledHourOptions = this.disabledHours();
      var disabledMinuteOptions = disabledMinutes(value ? value.hour() : null);
      var disabledSecondOptions = disabledSeconds(value ? value.hour() : null, value ? value.minute() : null);
      var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions, hourStep);
      var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions, minuteStep);
      var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions, secondStep);

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        { className: classnames__WEBPACK_IMPORTED_MODULE_10___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-inner', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, className, !!className), _classNames)) },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
          clearText: clearText,
          prefixCls: prefixCls,
          defaultOpenValue: defaultOpenValue,
          value: value,
          currentSelectPanel: currentSelectPanel,
          onEsc: onEsc,
          format: format,
          placeholder: placeholder,
          hourOptions: hourOptions,
          minuteOptions: minuteOptions,
          secondOptions: secondOptions,
          disabledHours: this.disabledHours,
          disabledMinutes: disabledMinutes,
          disabledSeconds: disabledSeconds,
          onChange: this.onChange,
          onClear: onClear,
          allowEmpty: allowEmpty,
          focusOnOpen: focusOnOpen,
          onKeyDown: onKeyDown,
          inputReadOnly: inputReadOnly,
          clearIcon: clearIcon
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Combobox__WEBPACK_IMPORTED_MODULE_8__["default"], {
          prefixCls: prefixCls,
          value: value,
          defaultOpenValue: defaultOpenValue,
          format: format,
          onChange: this.onChange,
          showHour: showHour,
          showMinute: showMinute,
          showSecond: showSecond,
          hourOptions: hourOptions,
          minuteOptions: minuteOptions,
          secondOptions: secondOptions,
          disabledHours: this.disabledHours,
          disabledMinutes: disabledMinutes,
          disabledSeconds: disabledSeconds,
          onCurrentSelectPanelChange: this.onCurrentSelectPanelChange,
          use12Hours: use12Hours,
          isAM: this.isAM()
        }),
        addon(this)
      );
    }
  }]);

  return Panel;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Panel.propTypes = {
  clearText: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  defaultOpenValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  format: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  inputReadOnly: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  disabledHours: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  disabledMinutes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  disabledSeconds: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  hideDisabledOptions: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onEsc: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  allowEmpty: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  showHour: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  showMinute: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  showSecond: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  onClear: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  use12Hours: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  hourStep: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  minuteStep: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  secondStep: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  addon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  focusOnOpen: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  clearIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node
};
Panel.defaultProps = {
  prefixCls: 'rc-time-picker-panel',
  onChange: noop,
  onClear: noop,
  disabledHours: noop,
  disabledMinutes: noop,
  disabledSeconds: noop,
  defaultOpenValue: moment__WEBPACK_IMPORTED_MODULE_9___default()(),
  use12Hours: false,
  addon: noop,
  onKeyDown: noop,
  inputReadOnly: false
};


/* harmony default export */ __webpack_exports__["default"] = (Panel);

/***/ }),

/***/ "./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/Select.js":
/*!************************************************************************!*\
  !*** ./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/Select.js ***!
  \************************************************************************/
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/_react-dom@16.5.2@react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);










var scrollTo = function scrollTo(element, to, duration) {
  var requestAnimationFrame = window.requestAnimationFrame || function requestAnimationFrameTimeout() {
    return setTimeout(arguments[0], 10);
  };
  // jump to target if duration zero
  if (duration <= 0) {
    element.scrollTop = to;
    return;
  }
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  requestAnimationFrame(function () {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  });
};

var Select = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Select, _Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false
    }, _this.onSelect = function (value) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          type = _this$props.type;

      onSelect(type, value);
    }, _this.handleMouseEnter = function (e) {
      _this.setState({ active: true });
      _this.props.onMouseEnter(e);
    }, _this.handleMouseLeave = function () {
      _this.setState({ active: false });
    }, _this.saveList = function (node) {
      _this.list = node;
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Select, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // jump to selected option
      this.scrollToSelected(0);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // smooth scroll to selected option
      if (prevProps.selectedIndex !== this.props.selectedIndex) {
        this.scrollToSelected(120);
      }
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      var _this2 = this;

      var _props = this.props,
          options = _props.options,
          selectedIndex = _props.selectedIndex,
          prefixCls = _props.prefixCls;

      return options.map(function (item, index) {
        var _classnames;

        var cls = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classnames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, prefixCls + '-select-option-selected', selectedIndex === index), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, prefixCls + '-select-option-disabled', item.disabled), _classnames));
        var onclick = null;
        if (!item.disabled) {
          onclick = _this2.onSelect.bind(_this2, item.value);
        }
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'li',
          {
            className: cls,
            key: index,
            onClick: onclick,
            disabled: item.disabled
          },
          item.value
        );
      });
    }
  }, {
    key: 'scrollToSelected',
    value: function scrollToSelected(duration) {
      // move to selected item
      var select = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(this);
      var list = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(this.list);
      if (!list) {
        return;
      }
      var index = this.props.selectedIndex;
      if (index < 0) {
        index = 0;
      }
      var topOption = list.children[index];
      var to = topOption.offsetTop;
      scrollTo(select, to, duration);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames2;

      if (this.props.options.length === 0) {
        return null;
      }

      var prefixCls = this.props.prefixCls;

      var cls = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classnames2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames2, prefixCls + '-select', 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames2, prefixCls + '-select-active', this.state.active), _classnames2));

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        {
          className: cls,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'ul',
          { ref: this.saveList },
          this.getOptions()
        )
      );
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Select.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  options: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  selectedIndex: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  type: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};


/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/TimePicker.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/TimePicker.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-trigger */ "./node_modules/_rc-trigger@2.6.2@rc-trigger/es/index.js");
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Panel */ "./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/Panel.js");
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./placements */ "./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/placements.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);











function noop() {}

function refFn(field, component) {
  this[field] = component;
}

var Picker = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Picker, _Component);

  function Picker(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Picker);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

    _initialiseProps.call(_this);

    _this.saveInputRef = refFn.bind(_this, 'picker');
    _this.savePanelRef = refFn.bind(_this, 'panelInstance');
    var defaultOpen = props.defaultOpen,
        defaultValue = props.defaultValue,
        _props$open = props.open,
        open = _props$open === undefined ? defaultOpen : _props$open,
        _props$value = props.value,
        value = _props$value === undefined ? defaultValue : _props$value;

    _this.state = {
      open: open,
      value: value
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Picker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value,
          open = nextProps.open;

      if ('value' in nextProps) {
        this.setState({
          value: value
        });
      }
      if (open !== undefined) {
        this.setState({ open: open });
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        });
      }
      this.props.onChange(value);
    }
  }, {
    key: 'getFormat',
    value: function getFormat() {
      var _props = this.props,
          format = _props.format,
          showHour = _props.showHour,
          showMinute = _props.showMinute,
          showSecond = _props.showSecond,
          use12Hours = _props.use12Hours;

      if (format) {
        return format;
      }

      if (use12Hours) {
        var fmtString = [showHour ? 'h' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
          return !!item;
        }).join(':');

        return fmtString.concat(' a');
      }

      return [showHour ? 'HH' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
        return !!item;
      }).join(':');
    }
  }, {
    key: 'getPanelElement',
    value: function getPanelElement() {
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          placeholder = _props2.placeholder,
          disabledHours = _props2.disabledHours,
          disabledMinutes = _props2.disabledMinutes,
          disabledSeconds = _props2.disabledSeconds,
          hideDisabledOptions = _props2.hideDisabledOptions,
          inputReadOnly = _props2.inputReadOnly,
          allowEmpty = _props2.allowEmpty,
          showHour = _props2.showHour,
          showMinute = _props2.showMinute,
          showSecond = _props2.showSecond,
          defaultOpenValue = _props2.defaultOpenValue,
          clearText = _props2.clearText,
          addon = _props2.addon,
          use12Hours = _props2.use12Hours,
          focusOnOpen = _props2.focusOnOpen,
          onKeyDown = _props2.onKeyDown,
          hourStep = _props2.hourStep,
          minuteStep = _props2.minuteStep,
          secondStep = _props2.secondStep,
          clearIcon = _props2.clearIcon;

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Panel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        clearText: clearText,
        prefixCls: prefixCls + '-panel',
        ref: this.savePanelRef,
        value: this.state.value,
        inputReadOnly: inputReadOnly,
        onChange: this.onPanelChange,
        onClear: this.onPanelClear,
        defaultOpenValue: defaultOpenValue,
        showHour: showHour,
        showMinute: showMinute,
        showSecond: showSecond,
        onEsc: this.onEsc,
        allowEmpty: allowEmpty,
        format: this.getFormat(),
        placeholder: placeholder,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        hideDisabledOptions: hideDisabledOptions,
        use12Hours: use12Hours,
        hourStep: hourStep,
        minuteStep: minuteStep,
        secondStep: secondStep,
        addon: addon,
        focusOnOpen: focusOnOpen,
        onKeyDown: onKeyDown,
        clearIcon: clearIcon
      });
    }
  }, {
    key: 'getPopupClassName',
    value: function getPopupClassName() {
      var _props3 = this.props,
          showHour = _props3.showHour,
          showMinute = _props3.showMinute,
          showSecond = _props3.showSecond,
          use12Hours = _props3.use12Hours,
          prefixCls = _props3.prefixCls;

      var popupClassName = this.props.popupClassName;
      // Keep it for old compatibility
      if ((!showHour || !showMinute || !showSecond) && !use12Hours) {
        popupClassName += ' ' + prefixCls + '-panel-narrow';
      }
      var selectColumnCount = 0;
      if (showHour) {
        selectColumnCount += 1;
      }
      if (showMinute) {
        selectColumnCount += 1;
      }
      if (showSecond) {
        selectColumnCount += 1;
      }
      if (use12Hours) {
        selectColumnCount += 1;
      }
      popupClassName += ' ' + prefixCls + '-panel-column-' + selectColumnCount;
      return popupClassName;
    }
  }, {
    key: 'setOpen',
    value: function setOpen(open) {
      var _props4 = this.props,
          onOpen = _props4.onOpen,
          onClose = _props4.onClose;

      if (this.state.open !== open) {
        if (!('open' in this.props)) {
          this.setState({ open: open });
        }
        if (open) {
          onOpen({ open: open });
        } else {
          onClose({ open: open });
        }
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.picker.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.picker.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          prefixCls = _props5.prefixCls,
          placeholder = _props5.placeholder,
          placement = _props5.placement,
          align = _props5.align,
          id = _props5.id,
          disabled = _props5.disabled,
          transitionName = _props5.transitionName,
          style = _props5.style,
          className = _props5.className,
          getPopupContainer = _props5.getPopupContainer,
          name = _props5.name,
          autoComplete = _props5.autoComplete,
          onFocus = _props5.onFocus,
          onBlur = _props5.onBlur,
          autoFocus = _props5.autoFocus,
          inputReadOnly = _props5.inputReadOnly,
          inputIcon = _props5.inputIcon;
      var _state = this.state,
          open = _state.open,
          value = _state.value;

      var popupClassName = this.getPopupClassName();
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_trigger__WEBPACK_IMPORTED_MODULE_6__["default"],
        {
          prefixCls: prefixCls + '-panel',
          popupClassName: popupClassName,
          popup: this.getPanelElement(),
          popupAlign: align,
          builtinPlacements: _placements__WEBPACK_IMPORTED_MODULE_8__["default"],
          popupPlacement: placement,
          action: disabled ? [] : ['click'],
          destroyPopupOnHide: true,
          getPopupContainer: getPopupContainer,
          popupTransitionName: transitionName,
          popupVisible: open,
          onPopupVisibleChange: this.onVisibleChange
        },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'span',
          { className: prefixCls + ' ' + className, style: style },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('input', {
            className: prefixCls + '-input',
            ref: this.saveInputRef,
            type: 'text',
            placeholder: placeholder,
            name: name,
            onKeyDown: this.onKeyDown,
            disabled: disabled,
            value: value && value.format(this.getFormat()) || '',
            autoComplete: autoComplete,
            onFocus: onFocus,
            onBlur: onBlur,
            autoFocus: autoFocus,
            onChange: noop,
            readOnly: !!inputReadOnly,
            id: id
          }),
          inputIcon || react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('span', { className: prefixCls + '-icon' })
        )
      );
    }
  }]);

  return Picker;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

Picker.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  clearText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  defaultOpenValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  inputReadOnly: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  allowEmpty: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  open: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  defaultOpen: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  align: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  getPopupContainer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  format: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  showHour: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  showMinute: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  showSecond: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  popupClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  disabledHours: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  disabledMinutes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  disabledSeconds: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  hideDisabledOptions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  addon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  use12Hours: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  hourStep: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  minuteStep: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  secondStep: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  focusOnOpen: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  inputIcon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
  clearIcon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node
};
Picker.defaultProps = {
  clearText: 'clear',
  prefixCls: 'rc-time-picker',
  defaultOpen: false,
  inputReadOnly: false,
  style: {},
  className: '',
  popupClassName: '',
  id: '',
  align: {},
  defaultOpenValue: moment__WEBPACK_IMPORTED_MODULE_9___default()(),
  allowEmpty: true,
  showHour: true,
  showMinute: true,
  showSecond: true,
  disabledHours: noop,
  disabledMinutes: noop,
  disabledSeconds: noop,
  hideDisabledOptions: false,
  placement: 'bottomLeft',
  onChange: noop,
  onOpen: noop,
  onClose: noop,
  onFocus: noop,
  onBlur: noop,
  addon: noop,
  use12Hours: false,
  focusOnOpen: false,
  onKeyDown: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onPanelChange = function (value) {
    _this2.setValue(value);
  };

  this.onPanelClear = function () {
    _this2.setValue(null);
    _this2.setOpen(false);
  };

  this.onVisibleChange = function (open) {
    _this2.setOpen(open);
  };

  this.onEsc = function () {
    _this2.setOpen(false);
    _this2.focus();
  };

  this.onKeyDown = function (e) {
    if (e.keyCode === 40) {
      _this2.setOpen(true);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Picker);

/***/ }),

/***/ "./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/placements.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_rc-time-picker@3.4.0@rc-time-picker/es/placements.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  bottomLeft: {
    points: ['tl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -3],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -3],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 3],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 3],
    targetOffset: targetOffset
  }
};

/* harmony default export */ __webpack_exports__["default"] = (placements);

/***/ })

}]);
//# sourceMappingURL=12_6d9787cf9228027674cd.js.map