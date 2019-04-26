(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[218],{

/***/ "./app/widget/index/Administrator/Department/main.js":
/*!***********************************************************!*\
  !*** ./app/widget/index/Administrator/Department/main.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _row = __webpack_require__(/*! antd/es/row */ "./node_modules/_antd@3.10.1@antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! antd/es/col */ "./node_modules/_antd@3.10.1@antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/_antd@3.10.1@antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _select = __webpack_require__(/*! antd/es/select */ "./node_modules/_antd@3.10.1@antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _form = __webpack_require__(/*! antd/es/form */ "./node_modules/_antd@3.10.1@antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _tree = __webpack_require__(/*! antd/es/tree */ "./node_modules/_antd@3.10.1@antd/es/tree/index.js");

var _tree2 = _interopRequireDefault(_tree);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/row/style/css */ "./node_modules/_antd@3.10.1@antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "./node_modules/_antd@3.10.1@antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "./node_modules/_antd@3.10.1@antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "./node_modules/_antd@3.10.1@antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "./node_modules/_antd@3.10.1@antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/tree/style/css */ "./node_modules/_antd@3.10.1@antd/es/tree/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/Administrator/Department/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var TreeNode = _tree2.default.TreeNode;
var FormItem = _form2.default.Item;
var Option = _select2.default.Option;

var AddItemFrom = _form2.default.create()(function (props) {
    var getFieldDecorator = props.form.getFieldDecorator;

    var removeDepartNext = function removeDepartNext() {
        var addBoxx = props.state.addBox;
        // let expandedKeys = new Set(props.state.expandedKeys);
        // expandedKeys.delete(`${props.item.id}`)
        addBoxx.delete(props.item.id);
        props.state.addBox = addBoxx;
        // props.state.expandedKeys = [...expandedKeys]
        props.getList();
    };
    var addHandleSubmit = function addHandleSubmit(e) {
        e.preventDefault();
        props.form.validateFields(function (err, values) {
            if (!err) {
                console.log(values);
                if (values.departName != undefined && values.departName != "") {
                    if (values.departName.length <= 50) {
                        _ajax2.default.post('/hcm/departmentin/savaDepartment', {
                            parentId: props.item.id,
                            departName: values.departName,
                            departLeader: []
                        }).then(function (res) {
                            if (res.data.status == 10000) {
                                props.getList();
                                removeDepartNext();
                            } else if (res.data.status == 10400) {
                                _message3.default.error(res.data.message);
                                props.getList();
                                removeDepartNext();
                            }
                        });
                    } else {
                        _message3.default.error("部门名称限制50个字符以内！");
                    }
                } else {
                    _message3.default.error("请输入新增的部门名称！");
                }
            }
        });
    };

    return React.createElement(
        _form2.default,
        null,
        React.createElement(
            _row2.default,
            { style: { justifyContent: 'space-between', alignItems: 'center', height: 40, marginTop: 8 }, type: 'flex', justify: 'space-between' },
            React.createElement(
                _col2.default,
                { span: 9 },
                React.createElement(
                    FormItem,
                    null,
                    getFieldDecorator('departName', {})(React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0', style: { position: "absolute", width: "240px", bottom: "-20px" } }))
                )
            ),
            React.createElement(
                _col2.default,
                { span: 9 },
                React.createElement(
                    FormItem,
                    { style: { width: "100%" } },
                    getFieldDecorator('departLeader', {})(React.createElement(
                        _select2.default,
                        {
                            style: { position: "absolute", width: "240px", bottom: "-20px" },
                            mode: 'multiple',
                            placeholder: '\u8BF7\u9009\u62E9\u8D1F\u8D23\u4EBA'
                        },
                        React.createElement(
                            Option,
                            { value: 'disabled', disabled: true },
                            '\u6682\u65E0\u6570\u636E'
                        )
                    ))
                )
            ),
            React.createElement(
                _col2.default,
                { className: 'text-right', span: 4 },
                React.createElement(
                    FormItem,
                    null,
                    React.createElement(
                        _row2.default,
                        { type: 'flex', justify: 'space-between' },
                        React.createElement(
                            _col2.default,
                            null,
                            React.createElement(
                                'a',
                                { onClick: addHandleSubmit },
                                ' \u786E\u5B9A'
                            )
                        ),
                        React.createElement(
                            _col2.default,
                            null,
                            React.createElement(
                                'a',
                                { onClick: removeDepartNext },
                                '\u53D6\u6D88'
                            )
                        )
                    )
                )
            )
        )
    );
});

var AxlomisdBox = _form2.default.create()(function (props, p) {
    var getFieldDecorator = props.form.getFieldDecorator;
    // console.log(props.childrenString.childrenStrings)

    console.log(props.item);

    var handleChange = function handleChange(value) {

        props.childrenString.onChangeSele = value;
        // console.log(props.childrenString.onChangeSele)
    };
    var hSumChangedele = function hSumChangedele() {
        var addBoxx = props.childrenString.addBoxtwo;
        var expandedKeys = new Set(props.childrenString.expandedKeystwo);
        expandedKeys.delete('' + props.item.id);
        //console.log(addBoxx)
        addBoxx.delete(props.item.id);
        //console.log(addBoxx)
        props.childrenString.addBoxtwo = addBoxx;
        props.childrenString.expandedKeystwo = [].concat(_toConsumableArray(expandedKeys));
        props.getList();
    };

    var hSumChange = function hSumChange(e) {
        e.preventDefault();
        props.form.validateFields(function (err, values) {
            if (!err) {
                if (values.departNamel != undefined && values.departNamel != "") {
                    if (values.departNamel.length <= 50) {

                        _ajax2.default.post('/hcm/departmentin/savaDepartment', {
                            parentId: props.item.parentid,
                            id: props.item.id,
                            departName: values.departNamel,
                            departLeader: values.departName
                        }).then(function (res) {
                            if (res.data.status == 10000) {
                                hSumChangedele();
                            } else if (res.data.status == 10400) {
                                _message3.default.error(res.data.message);
                                hSumChangedele();
                            }
                        });
                    } else {
                        _message3.default.error("部门名称限制50个字符以内！");
                    }
                } else {

                    _message3.default.error("请输入新增的部门名称！");
                }
            }
        });
    };
    return React.createElement(
        _row2.default,
        { className: 'item', type: 'flex', justify: 'space-between' },
        React.createElement(
            _col2.default,
            { span: 9 },
            React.createElement(
                FormItem,
                null,
                getFieldDecorator('departNamel', {
                    initialValue: props.item.departName
                })(React.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0' }))
            )
        ),
        React.createElement(
            _col2.default,
            { span: 9 },
            React.createElement(
                FormItem,
                null,
                getFieldDecorator('departName', {
                    initialValue: props.item.leaderid ? +props.item.leaderid : null
                })(React.createElement(
                    _select2.default,
                    {
                        style: { display: "block", width: '250px', marginTop: "5px" },
                        placeholder: '\u8BF7\u9009\u62E9\u8D1F\u8D23\u4EBA'
                    },
                    props.childrenString.childrenString != "" ? props.childrenString.childrenString[0].map(function (d, i) {
                        return React.createElement(
                            Option,
                            { key: i, value: d.id },
                            d.realname
                        );
                    }) : ""
                ))
            )
        ),
        React.createElement(
            _col2.default,
            { span: 4 },
            React.createElement(
                _row2.default,
                { type: 'flex', justify: 'space-between' },
                React.createElement(
                    _col2.default,
                    null,
                    React.createElement(
                        'a',
                        { onClick: hSumChange },
                        '\u4FDD\u5B58'
                    )
                ),
                React.createElement(
                    _col2.default,
                    null,
                    React.createElement(
                        'a',
                        { onClick: hSumChangedele },
                        '\u53D6\u6D88'
                    )
                )
            )
        )
    );
});

var DepartmentManagement = function (_React$Component) {
    _inherits(DepartmentManagement, _React$Component);

    function DepartmentManagement(props) {
        _classCallCheck(this, DepartmentManagement);

        var _this = _possibleConstructorReturn(this, (DepartmentManagement.__proto__ || Object.getPrototypeOf(DepartmentManagement)).call(this, props));

        _this.addStatus = function (bl) {
            _this.setState({
                addshow: bl
            });
        };

        _this.handleCancels = function () {
            _this.setState({
                visible: false
            });
        };

        _this.handleOk = function () {
            if (_this.state.handleOk.subSysDepartmentIn == null) {
                _this.setState({
                    ModalText: '你确认要删除该部门嘛？',
                    confirmLoading: true
                });
                _ajax2.default.post('/hcm/departmentin/deleteDepartment', {
                    id: _this.state.handleOk.id
                }).then(function (res) {
                    // console.log(res)
                    if (res.data.status == 10000) {
                        setTimeout(function () {
                            _this.setState({
                                visible: false,
                                confirmLoading: false
                            });
                            _this.getList();
                        }, 2000);
                    } else if (res.data.status == 10420) {

                        _message3.default.error(res.data.message);
                        setTimeout(function () {
                            _this.setState({
                                visible: false,
                                confirmLoading: false
                            });
                            _this.getList();
                        }, 2000);
                    }
                });
            } else {
                _this.setState({
                    ModalText: '您暂时不能删除该部门',
                    ModalTexts: "原因该部门下存在子级或子账号！",
                    confirmLoading: false,
                    visible: false
                });
            }
        };

        _this.getList = function (fun) {
            _ajax2.default.get('/hcm/departmentin/fuByIds', {
                params: {
                    id: 0
                }
            }).then(function (response) {
                _this.setState({
                    treeData: response.data.data
                }, function () {
                    return fun ? fun() : null;
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        };

        _this.creatTreeDom = function (data) {
            var addBox = _this.state.addBox;
            return data.map(function (item, index) {

                return React.createElement(
                    TreeNode,
                    { className: item.subSysDepartmentIn || addBox.has(item.id) ? '' : 'leaf', title: _this.titleTreeNode(item), key: item.id },
                    addBox.has(item.id) ? React.createElement(TreeNode, { className: 'leaf', title: React.createElement(AddItemFrom, { state: _this.state, getList: _this.getList, item: item }), key: 'add' + item.id }) : null,
                    item.subSysDepartmentIn ? _this.creatTreeDom(item.subSysDepartmentIn) : null
                );
            });
        };

        _this.BJDepartNext = function (item) {
            _ajax2.default.post('/hcm/userin/getListByDepartment', { //负责人
                departmentId: item.id
            }).then(function (res) {
                if (res.data.status == 10000) {
                    var result = res.data.data;
                    var data = [];
                    var date = [];
                    result.forEach(function (r) {
                        //   console.log(r)
                        data.push({
                            realname: r.realname,
                            id: r.id
                        });
                        date.push(r.id);
                    });
                    // console.log()
                    _this.setState({
                        childrenString: [],
                        childrenStrings: []
                    }, function () {
                        _this.state.childrenString.push(data);
                        _this.state.childrenStrings.push(date);
                        var addBoxtwo = _this.state.addBoxtwo;
                        var expandedKeys = new Set();
                        expandedKeys.add('' + item.id);
                        addBoxtwo.clear();
                        addBoxtwo.add(item.id);

                        _this.setState({
                            addBoxtwo: addBoxtwo,
                            expandedKeystwo: [].concat(_toConsumableArray(expandedKeys))
                        });
                    });
                }
            });
        };

        _this.RemoveDepartNext = function (item) {
            _this.setState({
                visible: true,
                handleOk: item
            });
            if (item.subSysDepartmentIn == null) {
                _this.setState({
                    ModalText: '你确认要删除该部门嘛？',
                    ModalTexts: ""
                });
            } else {
                _this.setState({
                    ModalText: '您暂时不能删除该部门,',
                    ModalTexts: "原因该部门下存在子级或子账号！"
                });
            }
        };

        _this.addDepartNext = function (item) {
            var addBox = _this.state.addBox;
            var expandedKeys = new Set(_this.state.expandedKeys);
            expandedKeys.add('' + item.id);
            addBox.add(item.id);
            console.log(addBox);
            _this.setState({
                addBox: addBox,
                expandedKeys: [].concat(_toConsumableArray(expandedKeys))
            });
        };

        _this.titleTreeNode = function (item) {
            var _this$state = _this.state,
                addBoxtwo = _this$state.addBoxtwo,
                expandedKeystwo = _this$state.expandedKeystwo;

            return React.createElement(
                React.Fragment,
                null,
                addBoxtwo.has(item.id) ? React.createElement(AxlomisdBox, { childrenString: _this.state, getList: _this.getList, removeDepartNext: _this.removeDepartNext, item: item }) : React.createElement(
                    _row2.default,
                    { className: 'item', type: 'flex', justify: 'space-between' },
                    React.createElement(
                        _col2.default,
                        { span: 9, style: { overflow: "hidden" } },
                        item.departName
                    ),
                    React.createElement(
                        _col2.default,
                        { span: 9 },
                        '\u8D1F\u8D23\u4EBA:',
                        item.departLeader
                    ),
                    React.createElement(
                        _col2.default,
                        { span: 4 },
                        React.createElement(
                            _row2.default,
                            { type: 'flex', style: { height: '100%' }, justify: 'space-between' },
                            React.createElement(
                                _col2.default,
                                null,
                                React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return _this.addDepartNext(item);
                                        } },
                                    '\u65B0\u589E\u4E0B\u7EA7'
                                )
                            ),
                            React.createElement(
                                _col2.default,
                                null,
                                React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return _this.BJDepartNext(item);
                                        } },
                                    '\u7F16\u8F91'
                                )
                            ),
                            React.createElement(
                                _col2.default,
                                null,
                                React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return _this.RemoveDepartNext(item);
                                        } },
                                    '\u5220\u9664'
                                )
                            )
                        )
                    )
                )
            );
        };

        _this.onExpand = function (expandedKeys, evtnt) {
            _this.setState({
                expandedKeys: expandedKeys
            });
        };

        _this.state = {
            treeData: [],
            addshow: false,
            expandedKeys: [],
            expandedKeystwo: [],
            visible: false,
            confirmLoading: false,
            handleOk: "",
            handleOkEId: "",
            ModalText: '',
            ModalTexts: "",
            m: false,
            onChangeSele: [],
            childrenString: [],
            childrenStrings: [],
            addBox: new Set(),
            addBoxtwo: new Set()
        };
        return _this;
    }

    _createClass(DepartmentManagement, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.getList(function () {
                var treeData = _this2.state.treeData;
                var arr = [];
                function loop(data) {
                    data.forEach(function (item, index) {
                        if (item.subSysDepartmentIn) {
                            arr.push('' + item.id);
                            loop(item.subSysDepartmentIn);
                        }
                    });
                }
                loop(treeData);
                _this2.setState({
                    expandedKeys: arr
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(_tpl2.default, { that: this });
        }
    }]);

    return DepartmentManagement;
}(React.Component);

exports.default = DepartmentManagement;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=218_96bd4ef3ea4532406bcc.js.map