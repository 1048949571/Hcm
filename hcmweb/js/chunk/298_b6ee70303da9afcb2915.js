(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[298],{

/***/ "./app/widget/index/Dealers/PricePublicity/main.js":
/*!*********************************************************!*\
  !*** ./app/widget/index/Dealers/PricePublicity/main.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Dealers/PricePublicity/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PricePublicity = function (_React$Component) {
    _inherits(PricePublicity, _React$Component);

    function PricePublicity(props) {
        _classCallCheck(this, PricePublicity);

        var _this = _possibleConstructorReturn(this, (PricePublicity.__proto__ || Object.getPrototypeOf(PricePublicity)).call(this, props));
        // document.title = '售价公示';


        _this.onLoading = function () {
            var _this$state = _this.state,
                cus_name = _this$state.cus_name,
                des = _this$state.des,
                page_info = _this$state.page_info;

            console.log(_this.state.page_info.pageNo, _this.state.page_info.pageNo++);
            _ajax2.default.post('/hcm/ProductClassify/seletProductClassify', {
                pageNum: _this.state.page_info.pageSize,
                pageSize: _this.state.page_info.pageNo++
            }).then(function (res) {
                console.log(res);

                if (res.data.status == 10000) {
                    _this.setState({
                        PricePublicity_list: res.data.data.data.list,
                        count: res.data.data.data.count

                    });
                    console.log(res.data.data.data.count.length);
                    if (res.data.data.data.list.length == res.data.data.data.count) {
                        _this.setState({
                            SubmitStyle: true
                        });
                    }
                }
            });
        };

        _this.handleClearIconClick = function () {
            var _this$props$form = _this.props.form,
                resetFields = _this$props$form.resetFields,
                getFieldsValue = _this$props$form.getFieldsValue;

            resetFields();
            _this.setState({
                productClassifyName: ""
            });
        };

        _this.onChange = function (e) {
            _this.setState({
                productClassifyName: e.target.value
            });
            console.log(e.target.value);
        };

        _this.ForgetSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                // console.log(values)
                if (!err) {
                    _ajax2.default.post('/hcm/ProductClassify/seletProductClassify', {
                        pageNum: _this.state.page_info.pageSize,
                        pageSize: _this.state.page_info.pageNo,
                        productClassifyName: values.FieldName
                    }).then(function (res) {
                        if (res.data.status == 10000) {
                            _this.setState({
                                PricePublicity_list: res.data.data.data.list
                            });
                            // if(this.state.page_info.pageSize<res.data.data.data.count){
                            //     this.setState({
                            //         SubmitStyle:true
                            //     })
                            // }
                            //console.log(values.FieldName)
                            if (values.FieldName != undefined && values.FieldName != "") {
                                _this.setState({
                                    SubmitStyle: true
                                });
                            } else {
                                _this.setState({
                                    SubmitStyle: false
                                });
                            }
                        }
                    });
                }
            });
        };

        _this.PricePublicity_list = function () {
            //console.log(this.state.page_info.pageSize)
            _ajax2.default.post('/hcm/ProductClassify/seletProductClassify', {
                pageNum: _this.state.page_info.pageSize,
                pageSize: _this.state.page_info.pageNo
            }).then(function (res) {
                console.log(res, "21321");
                if (res.data.status == 10000) {
                    _this.setState({
                        PricePublicity_list: res.data.data.data.list,
                        count: res.data.data.data.count
                    });
                    // if(this.state.page_info.pageSize<res.data.data.data.count){
                    //     this.setState({
                    //         SubmitStyle:true
                    //     })
                    // }
                }
            });
        };

        _this.bmids = function (e) {

            window.location = "/index.html#/ProductInformation/" + e.target.getAttribute("tit") + "/" + e.target.getAttribute("id");
        };

        _this.state = {
            cus_name: '',
            des: "",
            spinning: false,
            PricePublicity_list: [],
            productClassifyName: "",
            page_info: {
                pageNo: 1,
                pageSize: 6,
                totalNum: 0,
                SubmitStyle: false
            },
            sumx: 6,
            targetId: null,
            count: 0
        };
        return _this;
    }

    _createClass(PricePublicity, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.PricePublicity_list();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return PricePublicity;
}(React.Component);

exports.default = _form2.default.create()(PricePublicity);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=298_b6ee70303da9afcb2915.js.map