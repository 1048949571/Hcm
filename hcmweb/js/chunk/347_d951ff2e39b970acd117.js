(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[347],{

/***/ "./app/widget/index/Taobao/TaoBaocomplaints/main.js":
/*!**********************************************************!*\
  !*** ./app/widget/index/Taobao/TaoBaocomplaints/main.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Taobao/TaoBaocomplaints/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaoBaocomplaints = function (_React$Component) {
    _inherits(TaoBaocomplaints, _React$Component);

    function TaoBaocomplaints(props) {
        _classCallCheck(this, TaoBaocomplaints);

        var _this = _possibleConstructorReturn(this, (TaoBaocomplaints.__proto__ || Object.getPrototypeOf(TaoBaocomplaints)).call(this, props));

        _this.reurl = function () {

            var url = location.href;

            var times = url.split("?");

            if (times[1] != 1) {

                url += "?1";

                window.location.replace(url);
            }
        };

        _this.handleImageErrored = function () {
            _this.setState({
                null: "加载失败"
            });
            console.log(1);
        };

        _this.handleImageLoaded = function () {
            _this.setState({
                null: "加载成功"
            });
            console.log(2);
        };

        _this.HistoryFile_taobao = function () {
            _ajax2.default.post('/hcm/complaint/HistoryFile_taobao', {
                batchId: _this.props.match.params.batch_id,
                id: _this.props.match.params.id,
                accountId: _this.props.match.params.accountId
            }).then(function (res) {
                // console.log(res)
                if (res.data.status == 10000) {
                    if (res.data.data != null && res.data.data != "" && res.data.data != undefined) {
                        _this.setState({
                            HistoryFile_taobao: res.data.data
                        });
                        // console.log(res.data.data[0].historyFile[0].fileUrl.toLowerCase().split('.'))
                    }
                } else {
                    _message3.default.error(res.data.message);
                }
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.state = {
            HistoryFile_taobao: [],
            batch_id: "",
            id: "",
            accountId: "",
            null: ""
        };

        return _this;
    }

    _createClass(TaoBaocomplaints, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.HistoryFile_taobao();

            this.setState({
                batch_id: this.props.match.params.batch_id,
                ID: this.props.match.params.IDx,
                accountId: this.props.match.params.accountId
            });
            // window.location.href=="/index.html?#/TaoBaocomplaints/"+this.props.match.params.accountId+"/"+this.props.match.params.id+"/"+this.props.match.params.batch_id+"/"+this.props.match.params.id
            //window.location.reload()
            //window.setInterval(this.reurl(), 2000);
            //this.reurl()
            //console.log(this.props.match.params)
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return TaoBaocomplaints;
}(React.Component);

exports.default = _form2.default.create()(TaoBaocomplaints);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_assignValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_assignValue.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/_lodash@4.17.11@lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/_lodash@4.17.11@lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_baseAssignValue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_baseAssignValue.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/_lodash@4.17.11@lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/_lodash@4.17.11@lodash/_defineProperty.js":
/*!****************************************************************!*\
  !*** ./node_modules/_lodash@4.17.11@lodash/_defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/_lodash@4.17.11@lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ })

}]);
//# sourceMappingURL=347_d951ff2e39b970acd117.js.map