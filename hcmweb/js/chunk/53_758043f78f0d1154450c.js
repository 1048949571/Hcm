(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./app/widget/index/Brand/ShopFile/SetTable.js":
/*!*****************************************************!*\
  !*** ./app/widget/index/Brand/ShopFile/SetTable.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "./node_modules/_antd@3.10.1@antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _popconfirm = __webpack_require__(/*! antd/es/popconfirm */ "./node_modules/_antd@3.10.1@antd/es/popconfirm/index.js");

var _popconfirm2 = _interopRequireDefault(_popconfirm);

var _checkbox = __webpack_require__(/*! antd/es/checkbox */ "./node_modules/_antd@3.10.1@antd/es/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _tooltip = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/_antd@3.10.1@antd/es/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = __webpack_require__(/*! antd/es/icon */ "./node_modules/_antd@3.10.1@antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _tree = __webpack_require__(/*! antd/es/tree */ "./node_modules/_antd@3.10.1@antd/es/tree/index.js");

var _tree2 = _interopRequireDefault(_tree);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/_antd@3.10.1@antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/popconfirm/style/css */ "./node_modules/_antd@3.10.1@antd/es/popconfirm/style/css.js");

__webpack_require__(/*! antd/es/checkbox/style/css */ "./node_modules/_antd@3.10.1@antd/es/checkbox/style/css.js");

__webpack_require__(/*! antd/es/tooltip/style/css */ "./node_modules/_antd@3.10.1@antd/es/tooltip/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/_antd@3.10.1@antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

__webpack_require__(/*! antd/es/tree/style/css */ "./node_modules/_antd@3.10.1@antd/es/tree/style/css.js");

var _ajax = __webpack_require__(/*! ../../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeNode = _tree2.default.TreeNode;

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.getByProduct = function () {
            LoadingModal({ bl: true });
            _ajax2.default.get('/hcm/hcmCustomModel/getBybmcidAndModule', {
                params: {
                    module: 'SHOP'
                }
            }).then(function (response) {
                var dataList = response.data.data;
                _this.setState({
                    dataList: dataList
                });
                LoadingModal({ bl: false });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
                LoadingModal({ bl: false });
            });
        };

        _this.num = 100;

        _this.formAtDom = function (type) {
            var arr = [];
            var data = _this.state.dataList;
            var showid = _this.state.showid;

            if (type) {
                var _loop = function _loop(key) {
                    arr.push(React.createElement(
                        'div',
                        { className: 'item', key: key },
                        React.createElement(
                            'p',
                            null,
                            data[key].title
                        ),
                        React.createElement(
                            'div',
                            { className: 'info' },
                            data[key].data.map(function (item, index) {
                                if (item.edit) {
                                    return React.createElement(
                                        'div',
                                        { key: index, className: 'inputbox' },
                                        React.createElement('input', { ref: item.id, defaultValue: item.fieldname, className: 'editinput' }),
                                        React.createElement(
                                            'span',
                                            { className: 'anticonbox' },
                                            React.createElement(_icon2.default, { onClick: function onClick() {
                                                    return _this.onSubItem(key, index);
                                                }, type: 'check' }),
                                            React.createElement(_icon2.default, { onClick: function onClick() {
                                                    return _this.onEdititem(key, item, index, false);
                                                }, type: 'close' })
                                        )
                                    );
                                } else {
                                    return React.createElement(
                                        'div',
                                        { key: index, onMouseMove: function onMouseMove() {
                                                return _this.onMouseOver(key, item, index);
                                            }, className: 'checkbox' },
                                        React.createElement(
                                            _checkbox2.default,
                                            { onChange: function onChange(e) {
                                                    return _this.oCheckitem(e, key, item, index);
                                                }, disabled: item.fieldRequired == '1', checked: item.isChecked },
                                            React.createElement(
                                                _tooltip2.default,
                                                { placement: 'topLeft', title: item.fieldname },
                                                item.fieldname
                                            )
                                        ),
                                        item.fieldRequired == '1' || key == 'basic' ? null : item.id == showid ? React.createElement(
                                            'span',
                                            { className: 'anticonbox' },
                                            React.createElement(_icon2.default, { onClick: function onClick() {
                                                    return _this.onEdititem(key, item, index, true);
                                                }, type: 'edit' }),
                                            React.createElement(
                                                _popconfirm2.default,
                                                { title: React.createElement(
                                                        'div',
                                                        null,
                                                        React.createElement(
                                                            'p',
                                                            { style: { fontWeight: 'bold' } },
                                                            '\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5B57\u6BB5\u5417\uFF1F'
                                                        ),
                                                        React.createElement(
                                                            'p',
                                                            null,
                                                            '\u5220\u9664\u540E\u5F55\u5165\u7684\u4FE1\u606F\u4F1A\u88AB\u5220\u9664'
                                                        )
                                                    ), onConfirm: function onConfirm() {
                                                        return _this.onRmitem(key, item, index);
                                                    }, okText: '\u786E\u5B9A', cancelText: '\u53D6\u6D88' },
                                                React.createElement(_icon2.default, { type: 'delete' })
                                            )
                                        ) : null
                                    );
                                }
                            }),
                            key == 'add' ? React.createElement(
                                'div',
                                { className: 'inputbox' },
                                data[key].addStatus ? React.createElement(
                                    React.Fragment,
                                    null,
                                    React.createElement('input', { ref: key, className: 'editinput' }),
                                    React.createElement(
                                        'span',
                                        { className: 'anticonbox' },
                                        React.createElement(_icon2.default, { onClick: function onClick() {
                                                return _this.addSubItem(key);
                                            }, type: 'check' }),
                                        React.createElement(_icon2.default, { onClick: function onClick() {
                                                return _this.addButStatus(key, false);
                                            }, type: 'close' })
                                    )
                                ) : React.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return _this.addButStatus(key, true);
                                        } },
                                    React.createElement(_icon2.default, { style: { paddingRight: '6px' }, type: 'plus-circle-o' }),
                                    '\u65B0\u589E'
                                )
                            ) : null
                        )
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
                var data = _this.state.dataList;
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
                _this.setState({
                    dataList: data
                });
            });
        };

        _this.onDragStart = function (info) {
            _this.setState({
                stateID: info.node.props.eventKey
            });
        };

        _this.canCelItem = function (item) {
            console.log(item);
            _this.oCheckitem({ target: { checked: 0 } }, item.target[0], item, item.target[1]);
        };

        _this.state = {

            dataList: {},
            showid: null,
            stateID: null,
            endId: null
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: 'onMouseOver',
        value: function onMouseOver(key, item, index) {
            var data = this.state.dataList;
            var showid = this.state.showid;
            if (data[key].data[index].id == showid) {
                return;
            }
            showid = data[key].data[index].id;
            this.setState({
                showid: showid
            });
        }
    }, {
        key: 'onRmitem',
        value: function onRmitem(key, item, index) {
            var _this2 = this;

            var data = this.state.dataList;
            _ajax2.default.get('/hcm/hcmCustomModel/delete', {
                params: {
                    id: data[key].data[index].id,
                    module: 'SHOP'
                }
            }).then(function (response) {
                _message3.default.success(response.data.message);
                _this2.getByProduct();
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        }
    }, {
        key: 'onEdititem',
        value: function onEdititem(key, item, index, bl) {
            var data = this.state.dataList;
            data[key].data[index].edit = bl;
            this.setState({
                data: data,
                showid: null
            });
        }
    }, {
        key: 'onSubItem',
        value: function onSubItem(key, index) {
            var _this3 = this;

            var data = this.state.dataList;
            var item = data[key].data[index];
            if (!this.refs[item.id].value.trim().length) {
                _message3.default.error('请输入字段名');
                return;
            }
            if (this.refs[item.id].value.trim().length > 20) {
                _message3.default.error('字段名过长 请限制在20字符以内');
                return;
            }
            data[key].data[index].edit = false;
            data[key].data[index].fieldname = this.refs[item.id].value;

            _ajax2.default.get('/hcm/hcmCustomModel/save', {
                params: {
                    id: item.id,
                    fieldClassify: item.fieldClassify,
                    fieldname: this.refs[item.id].value,
                    module: 'SHOP'
                }
            }).then(function (response) {
                _message3.default.success(response.data.message);
                _this3.setState({
                    dataList: data
                });
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        }
    }, {
        key: 'oCheckitem',
        value: function oCheckitem(e, key, item, index) {
            var setTableData = this.state.dataList;
            setTableData[key].data[index].isChecked = e.target.checked ? 1 : 0;
            setTableData[key].data[index].sort = this.num++;
            this.setState({
                dataList: setTableData
            });
        }
    }, {
        key: 'onSortSubmit',
        value: function onSortSubmit(fn) {
            var _this4 = this;

            var arr = [];
            var data = this.formAtDom(false).sort(function (a, b) {
                return a.sort - b.sort;
            });
            data.forEach(function (item, index) {
                arr.push(item.id);
            });

            _ajax2.default.get('/hcm/hcmCustomModel/saveSort', {
                params: {
                    ids: arr.join(','),
                    module: 'SHOP'
                }
            }).then(function (response) {
                if (response.data.status == '10000') {
                    _message3.default.success(response.data.message);
                    _this4.props.onShow(false, 'getlist');
                }
            }).catch(function (error) {

                _message3.default.error(error.statusText);
            });
        }
    }, {
        key: 'addButStatus',
        value: function addButStatus(key, bl) {
            var data = this.state.dataList;
            data[key].addStatus = bl;
            this.setState({
                dataList: data
            });
        }
    }, {
        key: 'addSubItem',
        value: function addSubItem(key) {
            var _this5 = this;

            if (!this.refs[key].value.trim().length) {
                _message3.default.error('请输入字段名');
                return;
            }
            if (this.refs[key].value.trim().length > 20) {
                _message3.default.error('字段名过长 请限制在20字符以内');
                return;
            }
            var data = this.state.dataList;
            data[key].addStatus = false;
            _ajax2.default.get('/hcm/hcmCustomModel/save', {
                params: {
                    fieldClassify: key,
                    fieldname: this.refs[key].value,
                    module: 'SHOP'
                }
            }).then(function (response) {
                if (response.data.status == '10000') {
                    response.data.data.sort = _this5.num++;
                    data[key].data.push(response.data.data);
                    _this5.setState({
                        dataList: data
                    });
                }
                _message3.default.success(response.data.message);
            }).catch(function (error) {
                _message3.default.error(error.statusText);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var visible = this.state.visible;

            var checkData = this.formAtDom(false).sort(function (a, b) {
                return a.sort - b.sort;
            });
            return React.createElement(
                _modal2.default,
                {
                    title: '\u8BBE\u7F6E\u8868\u683C',
                    visible: this.props.visible,
                    maskClosable: false,
                    onOk: function onOk() {
                        return _this6.onSortSubmit();
                    },
                    onCancel: function onCancel() {
                        return _this6.props.onShow(false);
                    },
                    className: 'set-table-header',
                    okButtonProps: { className: 'btn2-main' },
                    cancelButtonProps: { className: 'btn2-sub' }
                },
                React.createElement(
                    'div',
                    { className: 'box' },
                    React.createElement(
                        'div',
                        { className: 'left' },
                        React.createElement(
                            'p',
                            { className: 'title' },
                            '\u53EF\u7528\u5B57\u6BB5'
                        ),
                        React.createElement(
                            'div',
                            { className: 'items' },
                            this.formAtDom(true)
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'right' },
                        React.createElement(
                            'p',
                            { className: 'title' },
                            '\u5DF2\u9009\u5B57\u6BB5'
                        ),
                        React.createElement(
                            _tree2.default,
                            {
                                className: 'draggable-tree',
                                draggable: true,
                                onDragStart: function onDragStart(e) {
                                    return _this6.onDragStart(e);
                                },
                                onDrop: function onDrop(e) {
                                    return _this6.onDrop(e);
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
                                                return _this6.canCelItem(item);
                                            }, type: 'close-circle' })
                                    ), key: item.target.join(',') });
                            })
                        ),
                        React.createElement(
                            'p',
                            { className: 'footer' },
                            '\u6309\u4E0A\u4E0B\u62D6\u52A8\u53EF\u6392\u5E8F'
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js")))

/***/ })

}]);
//# sourceMappingURL=53_758043f78f0d1154450c.js.map