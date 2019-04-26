(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[307],{

/***/ "./app/widget/index/KeywordMonitorDetail/main.js":
/*!*******************************************************!*\
  !*** ./app/widget/index/KeywordMonitorDetail/main.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/KeywordMonitorDetail/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _ajax = __webpack_require__(/*! ../../../js/common/ajax */ "./app/js/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this$state;

    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.add0 = function (m) {
      return m < 10 ? '0' + m : m;
    };

    _this.format = function (shijianchuo) {
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(shijianchuo);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate() + 1;
      var h = time.getHours() + 1;
      var mm = time.getMinutes() + 1;
      var s = time.getSeconds() + 1;
      return y + '-' + _this.add0(m) + '-' + _this.add0(d) + ' ' + _this.add0(h) + ':' + _this.add0(mm) + ':' + _this.add0(s);
    };

    _this.functions = function (time) {
      var s = '';

      var hour = time.split(':')[0];
      var min = time.split(':')[1];

      s = Number(hour * 3600) + Number(min * 60);

      return s;
    };

    _this.HeaderList = function (Time) {

      _ajax2.default.post('/hcm/keyword_monitor/obj', {
        id: _this.props.match.params.id, //（number--关键词id）
        createtime: _this.state.createtime ? _this.state.createtime : moment(parseInt(_this.props.match.params.platform)).format('YYYY-MM-DD HH:mm:ss') //（Date—创建时间）

      }).then(function (res) {

        console.log(res);
        if (res.data.status == 10000 && res.data.data != null && res.data.data != "") {
          var d = new Date();
          var Times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

          _this.setState({
            createtimes: moment(parseInt(res.data.data.updatetime)).format('YYYY-MM-DD HH:mm:ss'),
            key_name: res.data.data.key_name, //（String—关键词）
            key_price: res.data.data.key_price, //（number—限价）
            key_range: res.data.data.key_range, //（String—监控范围）
            frequency: res.data.data.frequency, //（String—监控频次）
            key_times: res.data.data.key_times, //（String—监控时间）
            platform: res.data.data.platform, //（String—平台）
            platform_code: res.data.data.platform_code,
            keyword_id: _this.props.match.params.id, //String--关键词id）
            createtime: Time,
            MaxTime: moment(parseInt(res.data.data.updatetime)),
            MinTime: Times,
            loading: true,
            value: res.data.data.key_times.split(",")
          }, function () {
            // console.log(moment(parseInt(res.data.data.updatetime)).format('YYYY-MM-DD'),Times)
            var min = [];
            var index = 0;
            var timeDate = new Date().getHours() + ":" + new Date().getMinutes();
            var v = [];
            var a = [];
            //console.log(res.data.data.key_times.split(",").sort())
            res.data.data.key_times.split(",").sort().forEach(function (element, i) {
              // a.push(this.functions(timeDate) - this.functions(res.data.data.key_times.split(",")[i]))

              if (_this.functions(timeDate) < _this.functions(res.data.data.key_times.split(",").sort()[i])) {
                // console.log(1)
                v.push(_this.functions(timeDate) - _this.functions(res.data.data.key_times.split(",").sort()[i]));
                _this.setState({
                  values: res.data.data.key_times.split(",").sort()[v.indexOf(Math.max.apply([], v))],
                  keytime: res.data.data.key_times.split(",").sort()[v.indexOf(Math.max.apply([], v))]
                }, function () {
                  _this.list(_this.state.platform_code, _this.state.keyword_id, _this.state.createtime, _this.state.keytime, _this.state.pageNo, _this.state.pageSize);
                });
              } else if (_this.functions(timeDate) > _this.functions(res.data.data.key_times.split(",").sort()[i])) {
                //  console.log(2)
                a.push(_this.functions(timeDate) - _this.functions(res.data.data.key_times.split(",").sort()[i]));
                _this.setState({
                  values: res.data.data.key_times.split(",").sort()[a.indexOf(Math.min.apply([], a))],
                  keytime: res.data.data.key_times.split(",").sort()[a.indexOf(Math.min.apply([], a))]
                }, function () {
                  _this.list(_this.state.platform_code, _this.state.keyword_id, _this.state.createtime, _this.state.keytime, _this.state.pageNo, _this.state.pageSize);
                });
              } else {}
            }, function () {
              //  console.log(1)
            });
          });
        }
      });
    };

    _this.dataFx = function () {
      window.location.href = "/index.html#/monitorDataAnalysis/" + _this.props.match.params.id + "/" + _this.props.match.params.platform;
    };

    _this.DLSju = function () {

      _ajax2.default.post('/hcm/keyword_monitor/downLoad', {
        platform: _this.state.platform, //（String—平台）
        keyword_id: _this.props.match.params.id, //String--关键词id）
        createtime: _this.state.createtime, //String—创建时间）yyyy-MM-dd
        key_times: _this.state.keytime //String—监控时间）
      }).then(function (res) {
        console.log(res);
        if (res.status == 200) {
          window.location.href = "/hcm/keyword_monitor/downLoad?keyword_id=" + _this.props.match.params.id + "&createtime=" + moment(parseInt(_this.props.match.params.platform)).format('YYYY-MM-DD HH:mm:ss') + "&key_times=" + _this.state.keytime;
        }
      });
    };

    _this.onChangeTime = function (time) {
      console.log(time);
      _this.setState({
        keytime: time,
        values: time,
        loading: true
      }, function () {
        _this.list(_this.state.platform_code, _this.state.keyword_id, _this.state.createtime, _this.state.keytime, _this.state.pageNo, _this.state.pageSize);
      });
    };

    _this.onmomentTime = function (date, dateString) {
      var _this$setState;

      _this.setState((_this$setState = {
        key_name: "", //（String—关键词）
        key_price: "", //（number—限价）
        key_range: "", //（String—监控范围）
        frequency: "", //（String—监控频次）
        key_times: "", //（String—监控时间）
        platform: "", //（String—平台）
        keyword_id: "" }, _defineProperty(_this$setState, 'key_times', ""), _defineProperty(_this$setState, 'value', []), _defineProperty(_this$setState, 'values', []), _defineProperty(_this$setState, 'keytime', ""), _defineProperty(_this$setState, 'loading', true), _defineProperty(_this$setState, 'createtime', dateString + " 00:00:00"), _this$setState), function () {
        //console.log(this.state.values)
        _this.HeaderList(dateString + " 00:00:00");
        // this.list(this.state.platform, this.state.keyword_id, this.state.createtime, this.state.keytime, this.state.pageNo, this.state.pageSize)
      });
    };

    _this.list = function (platform, keyword_id, createtime, key_times, pageNo, pageSize) {

      _ajax2.default.post('/hcm/keyword_monitor/list', {
        platform_code: platform, //（String—平台）
        keyword_id: keyword_id, //String--关键词id）
        createtime: createtime, //String—创建时间）yyyy-MM-dd
        key_times: key_times, //String—监控时间）
        pageNo: pageNo, //
        pageSize: pageSize //

      }).then(function (res) {
        if (res.data.status == 10000) {
          _this.setState({
            data: res.data.data.content,
            pageSize: res.data.data.pageSize,
            pageNo: res.data.data.pageNumber,
            totalNum: res.data.data.totalElements,
            loading: false
          });
        } else {
          _this.setState({
            loading: false
          });
        }
        // console.log(res)
      }).catch(function (error) {
        message.error(error.statusText);
        _this.setState({
          loading: false
        });
      });
    };

    _this.goTo = function (path) {
      _this.props.history.push(path);
    };

    _this.changePagination = function (a, b) {
      _this.setState({
        pageNo: a,
        pageSize: b,
        loading: true
      }, function () {
        _this.list(_this.state.platform_code, _this.state.keyword_id, _this.state.createtime, _this.state.keytime, _this.state.pageNo, _this.state.pageSize);
      });
    };

    _this.onPaginationSize = function (a, b) {
      _this.setState({
        pageNo: a,
        pageSize: b,
        loading: true
      }, function () {
        _this.list(_this.state.platform_code, _this.state.keyword_id, _this.state.createtime, _this.state.keytime, _this.state.pageNo, _this.state.pageSize);
      });
    };

    var taobaocolumns = [{
      title: '序号',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          index + 1
        );
      }
    }, {
      title: '商品信息',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          React.createElement('img', { style: { width: "50px", float: "left" }, src: record.logopicurl, alt: '' }),
          React.createElement(
            'a',
            { href: record.itemlink, target: '_blank', style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden" } },
            record.itemtitle
          )
        );
      }
    }, {
      title: '店铺信息',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.shopname
        );
      }
    }, {
      title: '价格',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          '\uFFE5',
          record.itemprice
        );
      }
    }, {
      title: '30天销量',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.salevolume
        );
      }
    }, {
      title: '优惠信息',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.discount
        );
      }
    }, {
      title: '发货地',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.area
        );
      }
    }, {
      title: '低价次数',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.low_count,
          React.createElement(
            'a',
            { href: '/index.html#/monitorLowPriceScreenshot/' + record.id + '/' + _this.state.platform_code },
            '(\u4F4E\u4EF7\u622A\u56FE)'
          )
        );
      }
    }];
    var JDcolumns = [{
      title: '序号',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          index + 1
        );
      }
    }, {
      title: '商品信息',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          React.createElement('img', { style: { width: "50px", float: "left" }, src: record.logopicurl, alt: '' }),
          React.createElement(
            'a',
            { href: record.itemlink, target: '_blank', style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden" } },
            record.itemtitle
          )
        );
      }
    }, {
      title: '店铺名称',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.shopname
        );
      }
    }, {
      title: '价格',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          '\uFFE5',
          record.itemprice
        );
      }
    }, {
      title: '评价数',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.evaluate_num
        );
      }
    }, {
      title: '优惠信息',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.discount
        );
      }
    }, {
      title: '低价次数',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.low_count,
          React.createElement(
            'a',
            { href: '/index.html#/monitorLowPriceScreenshot/' + record.id + '/' + _this.state.platform_code },
            '(\u4F4E\u4EF7\u622A\u56FE)'
          )
        );
      }
    }];
    var PDDcolumns = [{
      title: '序号',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          index + 1
        );
      }
    }, {
      title: '商品信息',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          React.createElement('img', { style: { width: "50px", float: "left" }, src: record.logopicurl, alt: '' }),
          React.createElement(
            'a',
            { href: record.itemlink, target: '_blank', style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden" } },
            record.itemtitle
          )
        );
      }
    }, {
      title: '店铺名称',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.shopname
        );
      }
    }, {
      title: '拼单价',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          '\uFFE5',
          record.itemprice
        );
      }
    }, {
      title: '已拼件数',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.salevolume
        );
      }
    }, {
      title: '评价数',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.evaluate_num
        );
      }
    }, {
      title: '低价次数',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.low_count,
          React.createElement(
            'a',
            { href: '/index.html#/monitorLowPriceScreenshot/' + record.id + '/' + _this.state.platform_code },
            '(\u4F4E\u4EF7\u622A\u56FE)'
          )
        );
      }
    }];
    var BBcolumns = [{
      title: '序号',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          index + 1
        );
      }
    }, {
      title: '商品信息',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          React.createElement('img', { style: { width: "50px", float: "left" }, src: record.logopicurl, alt: '' }),
          React.createElement(
            'a',
            { href: record.itemlink, target: '_blank', style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden" } },
            record.itemtitle
          )
        );
      }
    }, {
      title: '公司名称',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.shopname
        );
      }
    }, {
      title: '价格',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          '\uFFE5',
          record.itemprice
        );
      }
    }, {
      title: '30天成交数',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.salevolume
        );
      }
    }, {
      title: '发货地',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.area
        );
      }
    }, {
      title: '低价次数',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.low_count,
          React.createElement(
            'a',
            { href: '/index.html#/monitorLowPriceScreenshot/' + record.id + '/' + _this.state.platform_code },
            '(\u4F4E\u4EF7\u622A\u56FE)'
          )
        );
      }
    }];
    var XYcolumns = [{
      title: '序号',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          index + 1
        );
      }
    }, {
      title: '商品信息',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          React.createElement('img', { style: { width: "50px", float: "left" }, src: record.logopicurl, alt: '' }),
          React.createElement(
            'a',
            { href: record.itemlink, target: '_blank', style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden" } },
            record.itemtitle
          )
        );
      }
    }, {
      title: '旺旺名称',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.shopnick
        );
      }
    }, {
      title: '价格',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          '\uFFE5',
          record.itemprice
        );
      }
    }, {
      title: '所在地',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.area
        );
      }
    }, {
      title: '低价次数',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.low_count,
          React.createElement(
            'a',
            { href: '/index.html#/monitorLowPriceScreenshot/' + record.id + '/' + _this.state.platform_code },
            '(\u4F4E\u4EF7\u622A\u56FE)'
          )
        );
      }
    }];
    var wphcolumns = [{
      title: '序号',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          index + 1
        );
      }
    }, {
      title: '商品信息',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          React.createElement('img', { style: { width: "50px", float: "left" }, src: record.logopicurl, alt: '' }),
          React.createElement(
            'a',
            { href: record.itemlink, target: '_blank', style: { width: "150px", float: "left", marginLeft: "10px", overflow: "hidden" } },
            record.itemtitle
          )
        );
      }
    }, {
      title: '店铺名称',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.shopname
        );
      }
    }, {
      title: '价格',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          '\uFFE5',
          record.itemprice
        );
      }
    }, {
      title: '原价',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.original_price
        );
      }
    }, {
      title: '折扣率',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.rebate
        );
      }
    }, {
      title: '优惠信息',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.discount
        );
      }
    }, {
      title: '低价次数',
      render: function render(content, record, index) {
        return React.createElement(
          'span',
          { key: index },
          record.low_count,
          React.createElement(
            'a',
            { href: '/index.html#/monitorLowPriceScreenshot/' + record.id + '/' + _this.state.platform_code },
            '(\u4F4E\u4EF7\u622A\u56FE)'
          )
        );
      }
    }];
    _this.state = (_this$state = {
      pageSize: 10,
      pageNo: 1,
      totalNum: 0,
      loading: false,
      data: [],
      taobao_list: taobaocolumns,
      JD_list: JDcolumns,
      PDD_list: PDDcolumns,
      BB_list: BBcolumns,
      XY_list: XYcolumns,
      wph_list: wphcolumns,
      JKXX: "",
      TimeB: "",
      key_name: "", //（String—关键词）
      key_price: "", //（number—限价）
      key_range: "", //（String—监控范围）
      frequency: "", //（String—监控频次）
      key_times: "", //（String—监控时间）
      platform: "", //（String—平台）
      keyword_id: "", //String--关键词id）
      createtime: "" }, _defineProperty(_this$state, 'key_times', ""), _defineProperty(_this$state, 'platform_code', ""), _defineProperty(_this$state, 'value', []), _defineProperty(_this$state, 'values', []), _defineProperty(_this$state, 'keytime', ""), _defineProperty(_this$state, 'createtimes', ""), _defineProperty(_this$state, 'MaxTime', ""), _defineProperty(_this$state, 'MinTime', ""), _this$state);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log(this.props.match.params.platform)

      var d = new Date();
      var Time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      // let moment=moment(parseInt(this.props.match.params.platform)).format('YYYY-MM-DD HH:mm:ss')
      this.HeaderList(Time);
      //  console.log(moment(parseInt(this.props.match.params.platform)).format('YYYY-MM-DD HH:mm:ss'))
      // this.setState({
      //   createtimes:moment(parseInt(this.props.match.params.platform)).format('YYYY-MM-DD HH:mm:ss')
      // })
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(_tpl2.default, { that: this });
    }
  }]);

  return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/_react@16.5.2@react/index.js"), __webpack_require__(/*! moment */ "./node_modules/_moment@2.22.2@moment/moment.js")))

/***/ })

}]);
//# sourceMappingURL=307_c54fa103b2e22be28a14.js.map