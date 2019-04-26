(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[247],{

/***/ "./app/widget/index/Brand/CustomFields/main.js":
/*!*****************************************************!*\
  !*** ./app/widget/index/Brand/CustomFields/main.js ***!
  \*****************************************************/
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Brand/CustomFields/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomFields = function (_React$Component) {
    _inherits(CustomFields, _React$Component);

    function CustomFields(props) {
        _classCallCheck(this, CustomFields);

        var _this = _possibleConstructorReturn(this, (CustomFields.__proto__ || Object.getPrototypeOf(CustomFields)).call(this, props));
        // document.title = '自定义字段';


        _this.remove = function (k) {
            var form = _this.props.form;
            // can use data-binding to get

            var keys = form.getFieldValue('keys');
            console.log(keys);
            // We need at least one passenger
            if (keys.length === 1) {
                return;
            }

            // can use data-binding to set
            console.log(keys.filter(function (key) {
                return key !== k;
            }));
            form.setFieldsValue({
                keys: keys.filter(function (key) {
                    return key !== k;
                })
            });
        };

        _this.add = function () {

            //console.log(this.state.uuid,"1")
            var form = _this.props.form;

            var keys = form.getFieldValue('keys');
            console.log(keys);
            var nextKeys = keys.concat(_this.state.uuid);
            _this.state.uuid++;
            form.setFieldsValue({
                keys: nextKeys
            });
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        };

        _this.NewJ = function () {
            //新增
            var _this$props$form = _this.props.form,
                resetFields = _this$props$form.resetFields,
                getFieldsValue = _this$props$form.getFieldsValue;
            var form = _this.props.form;

            var keys = form.getFieldValue('keys');
            console.log(keys);
            var nextKeys = keys.concat([]);
            console.log(nextKeys);
            form.setFieldsValue({
                keys: nextKeys
            });
            //console.log(this.props)
            resetFields();
            _this.setState({
                visible: true,
                uuid: 0,
                confirmLoading: true,
                type: "新增",
                FORMtitHides: false,
                FieldName: "", //字段名称
                FieldOccupancy: "", //字段占位
                FieldType: "请选择" //字段类型
            });
        };

        _this.Edit = function (index) {
            //编辑
            //  console.log(index)
            var form = _this.props.form;

            if (index.opotion != undefined && index.opotion != "" && index.opotion != null) {
                _this.setState({
                    bBRRay: index.opotion.split(","),
                    uuid: index.opotion.split(",").length
                }, function () {
                    form.setFieldsValue({
                        names: _this.state.bBRRay
                    });
                });
            }

            var _this$props$form2 = _this.props.form,
                resetFields = _this$props$form2.resetFields,
                getFieldsValue = _this$props$form2.getFieldsValue;
            //console.log(this.props)

            resetFields();
            if (index.fieldtype == "TEXT" || index.fieldtype == "文本框") {
                _this.setState({
                    FieldType: "文本框", //字段类型

                    FORMtitHides: false
                });
            } else if (index.fieldtype == "Single" || index.fieldtype == "文本域") {
                _this.setState({
                    FieldType: "文本域", //字段类型

                    FORMtitHides: false
                });
            } else if (index.fieldtype == "SINGLESELECT" || index.fieldtype == "单选下拉框") {
                _this.setState({
                    FieldType: "单选下拉框", //字段类型，
                    FORMtitHides: true,
                    ajson: index.opotion
                });
            } else if (index.fieldtype == "MULTISELECT" || index.fieldtype == "多选下拉框") {
                _this.setState({
                    FieldType: "多选下拉框", //字段类型
                    FORMtitHides: true,
                    ajson: index.opotion
                });
            }

            _this.setState({
                visible: true,
                Editvisible: true,
                type: "编辑",
                FieldName: index.fieldname, //字段名称
                FieldOccupancy: index.prompt, //字段占位
                Bmcid: index.id
            });
        };

        _this.DeleteBtn = function (index) {
            //删除列表
            //console.log(index)
            _ajax2.default.post('/hcm/hcmCustomModel/delete', {
                id: index.id,
                module: 'DEALER'
            }).then(function (res) {
                //console.log(res)
                _this.fetch();
            });
        };

        _this.onChangeValue = function (e) {
            console.log(e.target.value);
            var arr = [];
            arr.push(e.target.value);
            _this.setState({
                onChangeValue: arr
            });
        };

        _this.removeDuplicatedItem = function (str) {
            var ar2 = str.split(",");
            var array = new Array();
            var j = 0;
            for (var i = 0; i < ar2.length; i++) {
                if ((array == "" || array.toString().match(new RegExp(ar2[i], "g")) == null) && ar2[i] != "") {
                    array[j] = ar2[i];
                    array.sort();
                    j++;
                }
            }
            return array.toString();
        };

        _this.ForgetSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                console.log(values, "123");

                var FieldName = values.FieldName,
                    FieldOccupancy = values.FieldOccupancy,
                    FieldType = values.FieldType,
                    aaw = _objectWithoutProperties(values, ['FieldName', 'FieldOccupancy', 'FieldType']);

                if (!err) {
                    console.log(_this.state.onChangeValue);
                    if (_this.state.confirmLoading == true) {
                        if (values.FieldName != undefined && values.FieldName != "") {
                            if (values.FieldName.length <= 6) {
                                if (values.FieldType != "请选择" && values.FieldType != "") {
                                    if (_this.state.FORMtitHides == true) {
                                        if (values.keys.length != 0) {
                                            console.log(_this.removeDuplicatedItem(values.keys.map(function (e, v) {
                                                return aaw.names[e];
                                            }).join(',')));
                                            _ajax2.default.post('/hcm/hcmCustomModel/save', {
                                                fieldClassify: "add",
                                                fieldname: values.FieldName,
                                                fieldtype: values.FieldType,
                                                opotion: _this.removeDuplicatedItem(values.keys.map(function (e, v) {
                                                    return aaw.names[e];
                                                }).join(',')),
                                                prompt: values.FieldOccupancy,
                                                module: "DEALER"
                                            }).then(function (res) {
                                                if (res.data.status == 10000) {
                                                    _this.setState({
                                                        visible: false,
                                                        confirmLoading: false,
                                                        Editvisible: false,
                                                        bBRRay: [],
                                                        uuid: 0
                                                    });
                                                    _this.fetch();
                                                } else {
                                                    _message3.default.error(res.data.message);
                                                }
                                            });
                                        } else {
                                            _message3.default.error("请填写字段类型！");
                                        }
                                    } else {
                                        _ajax2.default.post('/hcm/hcmCustomModel/save', {
                                            fieldClassify: "add",
                                            fieldname: values.FieldName,
                                            fieldtype: values.FieldType,
                                            opotion: [],
                                            prompt: values.FieldOccupancy,
                                            module: "DEALER"
                                        }).then(function (res) {

                                            if (res.data.status == 10000) {
                                                _this.setState({
                                                    visible: false,
                                                    confirmLoading: false,
                                                    Editvisible: false,
                                                    bBRRay: [],
                                                    uuid: 0
                                                });
                                                _this.fetch();
                                            } else {
                                                _message3.default.error(res.data.message);
                                            }
                                        });
                                    }
                                } else {
                                    _message3.default.error("请选择字段类型！");
                                }
                            } else {
                                _message3.default.error("请输入6个字以内！");
                            }
                        } else {
                            _message3.default.error("请输入字段名称！");
                        }
                    } else if (_this.state.Editvisible == true) {
                        if (_this.state.Bmcid != "") {
                            if (values.FieldName != undefined && values.FieldName != "") {
                                if (values.FieldName.length <= 6) {
                                    if (values.FieldType != "请选择" && values.FieldType != "") {

                                        if (_this.state.FieldType == "文本框") {
                                            if (_this.state.FORMtitHides == true) {

                                                if (values.keys.length != 0) {

                                                    _ajax2.default.post('/hcm/hcmCustomModel/save', {
                                                        id: _this.state.Bmcid,
                                                        fieldname: values.FieldName,
                                                        fieldtype: "TEXT",
                                                        opotion: _this.removeDuplicatedItem(values.keys.map(function (e, v) {
                                                            return aaw.names[e];
                                                        }).join(',')),
                                                        prompt: values.FieldOccupancy,
                                                        module: "DEALER"
                                                    }).then(function (res) {
                                                        if (res.data.status == 10000) {
                                                            _this.setState({
                                                                visible: false,
                                                                confirmLoading: false,
                                                                Editvisible: false,
                                                                bBRRay: [],
                                                                uuid: 0
                                                            });
                                                            var _this$props$form3 = _this.props.form,
                                                                resetFields = _this$props$form3.resetFields,
                                                                getFieldsValue = _this$props$form3.getFieldsValue;


                                                            resetFields();
                                                            _this.fetch();
                                                        } else {
                                                            _message3.default.error(res.data.message);
                                                        }
                                                    });
                                                } else {
                                                    _ajax2.default.post('/hcm/hcmCustomModel/save', {
                                                        bmcid: "1", //品牌商ID
                                                        id: _this.state.Bmcid,
                                                        fieldname: values.FieldName,
                                                        fieldtype: "TEXT",
                                                        opotion: _this.state.ajson,
                                                        prompt: values.FieldOccupancy,
                                                        module: "DEALER"
                                                    }).then(function (res) {
                                                        if (res.data.status == 10000) {
                                                            _this.setState({
                                                                visible: false,
                                                                confirmLoading: false,
                                                                Editvisible: false,
                                                                bBRRay: [],
                                                                uuid: 0
                                                            });
                                                            var _this$props$form4 = _this.props.form,
                                                                resetFields = _this$props$form4.resetFields,
                                                                getFieldsValue = _this$props$form4.getFieldsValue;
                                                            //console.log(this.props)

                                                            resetFields();
                                                            _this.fetch();
                                                        } else {
                                                            _message3.default.error(res.data.message);
                                                        }
                                                    });
                                                }
                                            } else {
                                                _ajax2.default.post('/hcm/hcmCustomModel/save', {
                                                    id: _this.state.Bmcid,
                                                    fieldname: values.FieldName,
                                                    fieldtype: "TEXT",
                                                    opotion: [],
                                                    prompt: values.FieldOccupancy,
                                                    module: "DEALER"
                                                }).then(function (res) {

                                                    if (res.data.status == 10000) {
                                                        _this.setState({
                                                            visible: false,
                                                            confirmLoading: false,
                                                            Editvisible: false,
                                                            bBRRay: [],
                                                            uuid: 0
                                                        });
                                                        var _this$props$form5 = _this.props.form,
                                                            resetFields = _this$props$form5.resetFields,
                                                            getFieldsValue = _this$props$form5.getFieldsValue;
                                                        //console.log(this.props)

                                                        resetFields();
                                                        _this.fetch();
                                                    } else {
                                                        _message3.default.error(res.data.message);
                                                    }
                                                });
                                            }
                                        } else if (_this.state.FieldType == "文本域") {
                                            if (_this.state.FORMtitHides == true) {

                                                if (values.keys.length != 0) {

                                                    _ajax2.default.post('/hcm/hcmCustomModel/save', {
                                                        id: _this.state.Bmcid,
                                                        fieldname: values.FieldName,
                                                        fieldtype: "Single",
                                                        opotion: _this.removeDuplicatedItem(values.keys.map(function (e, v) {
                                                            return aaw.names[e];
                                                        }).join(',')),
                                                        prompt: values.FieldOccupancy,
                                                        module: "DEALER"
                                                    }).then(function (res) {
                                                        if (res.data.status == 10000) {
                                                            _this.setState({
                                                                visible: false,
                                                                confirmLoading: false,
                                                                Editvisible: false,
                                                                bBRRay: [],
                                                                uuid: 0
                                                            });
                                                            var _this$props$form6 = _this.props.form,
                                                                resetFields = _this$props$form6.resetFields,
                                                                getFieldsValue = _this$props$form6.getFieldsValue;


                                                            resetFields();
                                                            _this.fetch();
                                                        } else {
                                                            _message3.default.error(res.data.message);
                                                        }
                                                    });
                                                } else {
                                                    _ajax2.default.post('/hcm/hcmCustomModel/save', {
                                                        bmcid: "1", //品牌商ID
                                                        id: _this.state.Bmcid,
                                                        fieldname: values.FieldName,
                                                        fieldtype: "Single",
                                                        opotion: _this.state.ajson,
                                                        prompt: values.FieldOccupancy,
                                                        module: "DEALER"
                                                    }).then(function (res) {
                                                        if (res.data.status == 10000) {
                                                            _this.setState({
                                                                visible: false,
                                                                confirmLoading: false,
                                                                Editvisible: false,
                                                                bBRRay: [],
                                                                uuid: 0
                                                            });
                                                            var _this$props$form7 = _this.props.form,
                                                                resetFields = _this$props$form7.resetFields,
                                                                getFieldsValue = _this$props$form7.getFieldsValue;
                                                            //console.log(this.props)

                                                            resetFields();
                                                            _this.fetch();
                                                        } else {
                                                            _message3.default.error(res.data.message);
                                                        }
                                                    });
                                                }
                                            } else {
                                                _ajax2.default.post('/hcm/hcmCustomModel/save', {
                                                    id: _this.state.Bmcid,
                                                    fieldname: values.FieldName,
                                                    fieldtype: "Single",
                                                    opotion: [],
                                                    prompt: values.FieldOccupancy,
                                                    module: "DEALER"
                                                }).then(function (res) {

                                                    if (res.data.status == 10000) {
                                                        _this.setState({
                                                            visible: false,
                                                            confirmLoading: false,
                                                            Editvisible: false,
                                                            bBRRay: [],
                                                            uuid: 0
                                                        });
                                                        var _this$props$form8 = _this.props.form,
                                                            resetFields = _this$props$form8.resetFields,
                                                            getFieldsValue = _this$props$form8.getFieldsValue;
                                                        //console.log(this.props)

                                                        resetFields();
                                                        _this.fetch();
                                                    } else {
                                                        _message3.default.error(res.data.message);
                                                    }
                                                });
                                            }
                                        } else if (_this.state.FieldType == "单选下拉框") {
                                            if (_this.state.FORMtitHides == true) {

                                                if (values.keys.length != 0) {

                                                    _ajax2.default.post('/hcm/hcmCustomModel/save', {
                                                        id: _this.state.Bmcid,
                                                        fieldname: values.FieldName,
                                                        fieldtype: "SINGLESELECT",
                                                        opotion: _this.removeDuplicatedItem(values.keys.map(function (e, v) {
                                                            return aaw.names[e];
                                                        }).join(',')),
                                                        prompt: values.FieldOccupancy,
                                                        module: "DEALER"
                                                    }).then(function (res) {
                                                        if (res.data.status == 10000) {
                                                            _this.setState({
                                                                visible: false,
                                                                confirmLoading: false,
                                                                Editvisible: false,
                                                                bBRRay: [],
                                                                uuid: 0
                                                            });
                                                            var _this$props$form9 = _this.props.form,
                                                                resetFields = _this$props$form9.resetFields,
                                                                getFieldsValue = _this$props$form9.getFieldsValue;


                                                            resetFields();
                                                            _this.fetch();
                                                        } else {
                                                            _message3.default.error(res.data.message);
                                                        }
                                                    });
                                                } else {
                                                    _ajax2.default.post('/hcm/hcmCustomModel/save', {
                                                        bmcid: "1", //品牌商ID
                                                        id: _this.state.Bmcid,
                                                        fieldname: values.FieldName,
                                                        fieldtype: "SINGLESELECT",
                                                        opotion: _this.state.ajson,
                                                        prompt: values.FieldOccupancy,
                                                        module: "DEALER"
                                                    }).then(function (res) {
                                                        if (res.data.status == 10000) {
                                                            _this.setState({
                                                                visible: false,
                                                                confirmLoading: false,
                                                                Editvisible: false,
                                                                bBRRay: [],
                                                                uuid: 0
                                                            });
                                                            var _this$props$form10 = _this.props.form,
                                                                resetFields = _this$props$form10.resetFields,
                                                                getFieldsValue = _this$props$form10.getFieldsValue;
                                                            //console.log(this.props)

                                                            resetFields();
                                                            _this.fetch();
                                                        } else {
                                                            _message3.default.error(res.data.message);
                                                        }
                                                    });
                                                }
                                            } else {
                                                _ajax2.default.post('/hcm/hcmCustomModel/save', {
                                                    id: _this.state.Bmcid,
                                                    fieldname: values.FieldName,
                                                    fieldtype: "SINGLESELECT",
                                                    opotion: [],
                                                    prompt: values.FieldOccupancy,
                                                    module: "DEALER"
                                                }).then(function (res) {

                                                    if (res.data.status == 10000) {
                                                        _this.setState({
                                                            visible: false,
                                                            confirmLoading: false,
                                                            Editvisible: false,
                                                            bBRRay: [],
                                                            uuid: 0
                                                        });
                                                        var _this$props$form11 = _this.props.form,
                                                            resetFields = _this$props$form11.resetFields,
                                                            getFieldsValue = _this$props$form11.getFieldsValue;
                                                        //console.log(this.props)

                                                        resetFields();
                                                        _this.fetch();
                                                    } else {
                                                        _message3.default.error(res.data.message);
                                                    }
                                                });
                                            }
                                        } else if (_this.state.FieldType == "多选下拉框") {
                                            if (_this.state.FORMtitHides == true) {

                                                if (values.keys.length != 0) {

                                                    _ajax2.default.post('/hcm/hcmCustomModel/save', {
                                                        id: _this.state.Bmcid,
                                                        fieldname: values.FieldName,
                                                        fieldtype: "MULTISELECT",
                                                        opotion: _this.removeDuplicatedItem(values.keys.map(function (e, v) {
                                                            return aaw.names[e];
                                                        }).join(',')),
                                                        prompt: values.FieldOccupancy,
                                                        module: "DEALER"
                                                    }).then(function (res) {
                                                        if (res.data.status == 10000) {
                                                            _this.setState({
                                                                visible: false,
                                                                confirmLoading: false,
                                                                Editvisible: false,
                                                                bBRRay: [],
                                                                uuid: 0
                                                            });
                                                            var _this$props$form12 = _this.props.form,
                                                                resetFields = _this$props$form12.resetFields,
                                                                getFieldsValue = _this$props$form12.getFieldsValue;


                                                            resetFields();
                                                            _this.fetch();
                                                        } else {
                                                            _message3.default.error(res.data.message);
                                                        }
                                                    });
                                                } else {
                                                    _ajax2.default.post('/hcm/hcmCustomModel/save', {
                                                        bmcid: "1", //品牌商ID
                                                        id: _this.state.Bmcid,
                                                        fieldname: values.FieldName,
                                                        fieldtype: "MULTISELECT",
                                                        opotion: _this.state.ajson,
                                                        prompt: values.FieldOccupancy,
                                                        module: "DEALER"
                                                    }).then(function (res) {
                                                        if (res.data.status == 10000) {
                                                            _this.setState({
                                                                visible: false,
                                                                confirmLoading: false,
                                                                Editvisible: false,
                                                                bBRRay: [],
                                                                uuid: 0
                                                            });
                                                            var _this$props$form13 = _this.props.form,
                                                                resetFields = _this$props$form13.resetFields,
                                                                getFieldsValue = _this$props$form13.getFieldsValue;
                                                            //console.log(this.props)

                                                            resetFields();
                                                            _this.fetch();
                                                        } else {
                                                            _message3.default.error(res.data.message);
                                                        }
                                                    });
                                                }
                                            } else {
                                                _ajax2.default.post('/hcm/hcmCustomModel/save', {
                                                    id: _this.state.Bmcid,
                                                    fieldname: values.FieldName,
                                                    fieldtype: "MULTISELECT",
                                                    opotion: [],
                                                    prompt: values.FieldOccupancy,
                                                    module: "DEALER"
                                                }).then(function (res) {

                                                    if (res.data.status == 10000) {
                                                        _this.setState({
                                                            visible: false,
                                                            confirmLoading: false,
                                                            Editvisible: false,
                                                            bBRRay: [],
                                                            uuid: 0
                                                        });
                                                        var _this$props$form14 = _this.props.form,
                                                            resetFields = _this$props$form14.resetFields,
                                                            getFieldsValue = _this$props$form14.getFieldsValue;
                                                        //console.log(this.props)

                                                        resetFields();
                                                        _this.fetch();
                                                    } else {
                                                        _message3.default.error(res.data.message);
                                                    }
                                                });
                                            }
                                        }
                                    } else {
                                        _message3.default.error("请选择字段类型！");
                                    }
                                } else {
                                    _message3.default.error("请输入6个字以内！");
                                }
                            } else {
                                _message3.default.error("请输入字段名称！");
                            }
                        }
                    }
                }
            });
        };

        _this.handleOk = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                console.log(values);
            });
        };

        _this.handleCancel = function () {

            _this.setState({
                visible: false,
                confirmLoading: false,
                Editvisible: false,
                bBRRay: [],
                uuid: 0
            });
        };

        _this.changePagination = function (current, pageSize) {
            console.log(current, pageSize);
            _ajax2.default.post('/hcm/hcmCustomModel/getPagination', {
                module: "DEALER",
                pageNo: current,
                pageSize: pageSize
            }).then(function (res) {
                console.log(res);
                if (res.data.status == 10000) {
                    _this.fetch();
                    _this.setState({
                        pageNo: current
                    });
                }
            });
        };

        _this.onPaginationSize = function (current, size) {
            console.log(size);
            _ajax2.default.post('/hcm/hcmCustomModel/getPagination', {
                module: "DEALER",
                pageNo: current,
                pageSize: size
            }).then(function (res) {
                console.log(res, "123312");
                if (res.data.status == 10000) {
                    _this.fetch();
                    _this.setState({
                        pageNo: current,
                        pageSize: size
                    });
                }
            });
        };

        _this.handleTableChange = function (pagination, filters, sorter) {
            console.log(pagination, filters, sorter);
            var pager = _extends({}, _this.state.pagination);
            pager.current = pagination.current;
            _this.setState({
                pagination: pager
            });
            _this.fetch(_extends({
                results: pagination.pageSize,
                page: pagination.current,
                sortField: sorter.field,
                sortOrder: sorter.order
            }, filters));
        };

        _this.handleChange = function (value) {
            //字段类型
            if (value == "SINGLESELECT" || value == "MULTISELECT" || value == "单选下拉框" || value == "多选下拉框") {
                _this.setState({
                    FORMtitHides: true
                });
                if (value == "SINGLESELECT") {
                    _this.setState({
                        FieldType: "单选下拉框"
                    });
                } else if (value == "TEXT") {
                    _this.setState({
                        FieldType: "文本框"
                    });
                } else if (value == "Single") {
                    _this.setState({
                        FieldType: "文本域"
                    });
                } else if (value == "MULTISELECT") {
                    _this.setState({
                        FieldType: "多选下拉框"
                    });
                }
            } else {
                _this.setState({
                    FORMtitHides: false
                });
                if (value == "SINGLESELECT") {
                    _this.setState({
                        FieldType: "单选下拉框"
                    });
                } else if (value == "TEXT") {
                    _this.setState({
                        FieldType: "文本框"
                    });
                } else if (value == "Single") {
                    _this.setState({
                        FieldType: "文本域"
                    });
                } else if (value == "MULTISELECT") {
                    _this.setState({
                        FieldType: "多选下拉框"
                    });
                }
            }
        };

        _this.AddField = function () {

            _this.state.FieldTypesA.push("");
            _this.setState({
                FieldTypes: _this.state.FieldTypesA
            });
        };

        _this.DeleteInp = function (index) {
            var lists = _this.state.FieldTypes;
            lists.splice(index, 1);
            _this.setState({ FieldTypes: lists });
        };

        _this.fetch = function () {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            console.log('params:', params);
            _this.setState({ loading: true });
            _ajax2.default.post('/hcm/hcmCustomModel/getBybmcidAndModule', {
                module: "DEALER"
            }).then(function (res) {
                // const pagination = { ...this.state.pagination };
                console.log(res, "541541");
                // Read total count from server
                // pagination.total = data.totalCount;
                // pagination.total = 200;
                if (res.data.status == 10000) {

                    _this.setState({
                        data: res.data.data.add.data,
                        loading: false,
                        totalNum: res.data.data.add.data.length

                    });
                }
            });
        };

        var columns = [{
            title: '序号',
            dataIndex: 'index',
            width: '10%',
            render: function render(text, item, index) {
                return index + 1;
            }
        }, {
            title: '字段名称',
            dataIndex: 'fieldname',
            width: '30%'
        }, {
            title: '字段类型',
            dataIndex: '',
            width: '40%',
            render: function render(text, record, index) {
                return React.createElement(
                    'span',
                    null,
                    text.fieldtype == "TEXT" ? React.createElement(
                        'span',
                        null,
                        '\u6587\u672C\u6846'
                    ) : text.fieldtype == "Single" ? React.createElement(
                        'span',
                        null,
                        '\u6587\u672C\u57DF'
                    ) : text.fieldtype == "SINGLESELECT" ? React.createElement(
                        'span',
                        null,
                        '\u5355\u9009\u4E0B\u62C9\u6846'
                    ) : text.fieldtype == "MULTISELECT" ? React.createElement(
                        'span',
                        null,
                        '\u591A\u9009\u4E0B\u62C9\u6846'
                    ) : null
                );
            }
        }, {
            title: '操作',
            dataIndex: '',
            width: '20%',
            render: function render(text, record, index) {
                return React.createElement(
                    'span',
                    null,
                    React.createElement(
                        'a',
                        { className: 'BJ', onClick: _this.Edit.bind(_this, text) },
                        React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_edit.png' }),
                        '\u7F16\u8F91'
                    ),
                    React.createElement(
                        'a',
                        { onClick: _this.DeleteBtn.bind(_this, text) },
                        React.createElement('img', { style: { verticalAlign: 'text-bottom', paddingRight: '4px' }, src: '../../../img/icon/icon_operating_del.png' }),
                        '\u5220\u9664'
                    )
                );
            }
        }];
        _this.state = {
            CustomFields_list: columns,
            data: [],
            type: "新增",
            pagination: {},
            loading: false,
            pageNo: 1,
            pageSize: 10,
            totalNum: "",
            visible: false, //新增弹框
            Editvisible: false, //编辑弹框
            confirmLoading: false,
            FORMtitHides: false,
            FieldNameValue: "",
            Bmcid: "", //品牌商ID 判断编辑保存
            FieldName: "", //字段名称
            FieldOccupancy: "", //字段占位
            FieldType: "", //字段类型
            FieldOccupancyValue: "",
            onChangeValue: [],
            uuid: 0,
            id: "",
            arr: [],
            ajson: "",
            bBRRay: []

        };

        return _this;
    }

    _createClass(CustomFields, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetch();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return CustomFields;
}(React.Component);

exports.default = _form2.default.create()(CustomFields);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=247_b9e75d919e9140f619a4.js.map