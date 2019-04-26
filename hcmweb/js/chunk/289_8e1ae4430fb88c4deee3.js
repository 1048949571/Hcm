(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[289],{

/***/ "./app/widget/index/ComplaintReport/main.js":
/*!**************************************************!*\
  !*** ./app/widget/index/ComplaintReport/main.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, moment) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/_antd@3.10.1@antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style/css */ "./node_modules/_antd@3.10.1@antd/es/message/style/css.js");

var _tpl = __webpack_require__(/*! ./tpl */ "./app/widget/index/ComplaintReport/tpl.js");

var _tpl2 = _interopRequireDefault(_tpl);

var _echarts = __webpack_require__(/*! echarts */ "./node_modules/_echarts@4.1.0@echarts/index.js");

var _echarts2 = _interopRequireDefault(_echarts);

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
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.getAllData = function (platform, ipr) {
      if (platform === 'taobao') {
        _this.getComplaintLinkSummary(ipr);
        _this.getShopComplaintCount(ipr);
        _this.getComplaintList(ipr);
      }
      if (platform === '1688') {
        // 默认获取全部
        _this.getComplaintLinkSummary_1688(ipr);
        _this.getShopComplaintCount_1688(ipr);
        _this.getComplaintList_1688(ipr);
      }
    };

    _this.handleTabChange = function (key) {
      // console.log('-------tab', key)
      _this.setState({
        currentTab: key,
        tablePage: {
          pageNo: 1,
          pageSize: 10
        },
        pagination: {
          pageNo: 1,
          pageSize: 10
        }
      }, function () {
        var platform = _this.state.platform;
        var ipr = _this.state.alreadyComplaintList.filter(function (v) {
          return v.report_id === key;
        });
        var str = ipr.length ? ipr[0].complaintModelList.map(function (v) {
          if (platform === 'taobao') {
            return v.ipr_name;
          }
          if (platform === '1688') {
            return v.ipr_id;
          }
        }).join(',') : '';
        _this.setState({
          currentIpr: str
        });
        _this.getAllData(platform, key ? str : key);
      });
    };

    _this.goTo = function (path) {
      _this.props.history.push(path);
    };

    _this.getAlreadyComplaintList = function () {
      _ajax2.default.post('/hcm/complaint/report_list', { type: _this.state.platform }).then(function (res) {
        var _res$data = res.data,
            data = _res$data.data,
            status = _res$data.status,
            message = _res$data.message;

        if (status === '10000') {
          _this.setState({
            alreadyComplaintList: data
          });
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.getComplaintLinkSummary_1688 = function (iprNum) {
      var _this$state = _this.state,
          start_time = _this$state.start_time,
          end_time = _this$state.end_time,
          alreadyComplaintList = _this$state.alreadyComplaintList,
          currentTab = _this$state.currentTab;
      // const list = alreadyComplaintList.length?alreadyComplaintList.map(v => v.complaintModelList).reduce((a,b) => a.concat(b), []):[]
      // const account_ids = list.length?list.map(v => v.account_id).join(','):''
      // console.log('--account', account_ids, currentTab === '')

      _ajax2.default.post('/hcm/complaint/link_1688', {
        start_time: start_time.format('YYYY-MM-DD'),
        end_time: end_time.format('YYYY-MM-DD'),
        ipr_num: iprNum
        // account_id: currentTab === '' ? '' : account_ids,
      }).then(function (res) {
        // console.log(res)
        var _res$data2 = res.data,
            data = _res$data2.data,
            status = _res$data2.status,
            message = _res$data2.message;

        if (status === '10000') {
          _this.setState({
            data: data
          }, function () {
            _this.myChart();
          });
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.getShopComplaintCount_1688 = function (iprNum) {
      _this.getData('/hcm/complaint/reportSort_1688', 'shopComplaintRank', iprNum, '1688', 'pagination');
    };

    _this.getComplaintList_1688 = function (iprNum) {
      _this.getData('/hcm/complaint/reportList_1688', 'complaintListDetail', iprNum, '1688', 'tablePage');
    };

    _this.getComplaintLinkSummary = function (iprName) {
      var _this$state2 = _this.state,
          start_time = _this$state2.start_time,
          end_time = _this$state2.end_time;

      _ajax2.default.post('/hcm/complaint/reportStatus_taobao', {
        start_time: start_time.format('YYYY-MM-DD'),
        end_time: end_time.format('YYYY-MM-DD'),
        iprName: iprName
      }).then(function (res) {
        // console.log(res)
        var _res$data3 = res.data,
            data = _res$data3.data,
            status = _res$data3.status,
            message = _res$data3.message;

        if (status === '10000') {
          _this.setState({
            data: data
          }, function () {
            _this.myChart();
          });
        }
      }).catch(function (err) {
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.getShopComplaintCount = function (iprName) {
      _this.getData('/hcm/complaint/reportSort_taobao', 'shopComplaintRank', iprName, 'taobao', 'pagination');
    };

    _this.getComplaintList = function (iprName) {
      _this.getData('/hcm/complaint/reportList_taobao', 'complaintListDetail', iprName, 'taobao', 'tablePage');
    };

    _this.rankPageChange = function (page) {
      // console.log(page)
      var _this$state3 = _this.state,
          platform = _this$state3.platform,
          alreadyComplaintList = _this$state3.alreadyComplaintList,
          currentTab = _this$state3.currentTab,
          currentIpr = _this$state3.currentIpr;
      // const list = alreadyComplaintList.length?alreadyComplaintList.map(v => v.complaintModelList).reduce((a,b) => a.concat(b), []):[]
      // const ipr_names = list.length?list.map(v => v.ipr_name).join(','):''
      // const ipr_nums = list.length?list.map(v => v.ipr_id).join(','):''

      _this.setState({
        pagination: Object.assign({}, _this.state.pagination, {
          pageNo: page
        })
      }, function () {
        if (platform === 'taobao') {
          _this.getShopComplaintCount(currentTab === '' ? '' : currentIpr);
        }
        if (platform === '1688') {
          _this.getShopComplaintCount_1688(currentTab === '' ? '' : currentIpr);
        }
      });
    };

    _this.tablePageChange = function (page) {
      var _this$state4 = _this.state,
          platform = _this$state4.platform,
          alreadyComplaintList = _this$state4.alreadyComplaintList,
          currentTab = _this$state4.currentTab,
          currentIpr = _this$state4.currentIpr;
      // const list = alreadyComplaintList.length?alreadyComplaintList.map(v => v.complaintModelList).reduce((a,b) => a.concat(b), []):[]
      // const ipr_names = list.length?list.map(v => v.ipr_name).join(','):''
      // const ipr_nums = list.length?list.map(v => v.ipr_id).join(','):''

      _this.setState({
        tablePage: Object.assign({}, _this.state.tablePage, {
          pageNo: page
        })
      }, function () {
        if (platform === 'taobao') {
          _this.getComplaintList(currentTab === '' ? '' : currentIpr);
        }
        if (platform === '1688') {
          _this.getComplaintList_1688(currentTab === '' ? '' : currentIpr);
        }
      });
    };

    _this.dateChange = function (dates) {
      // console.log(dates)
      // return
      if (!dates.length) {
        return;
      }
      var _this$state5 = _this.state,
          platform = _this$state5.platform,
          alreadyComplaintList = _this$state5.alreadyComplaintList,
          currentTab = _this$state5.currentTab;

      var list = alreadyComplaintList.length ? alreadyComplaintList.map(function (v) {
        return v.complaintModelList;
      }).reduce(function (a, b) {
        return a.concat(b);
      }, []) : [];
      var ipr_names = list.length ? list.map(function (v) {
        return v.ipr_name;
      }).join(',') : '';
      var ipr_nums = list.length ? list.map(function (v) {
        return v.ipr_id;
      }).join(',') : '';
      // if (platform === 'taobao') {
      _this.setState({
        start_time: dates[0],
        end_time: dates[1],
        pagination: Object.assign({}, _this.state.pagination, {
          pageNo: 1
        }),
        tablePage: Object.assign({}, _this.state.tablePage, {
          pageNo: 1
        })
      }, function () {
        // this.getComplaintLinkSummary()
        _this.getAllData(platform, currentTab === '' ? '' : platform === 'taobao' ? ipr_names : ipr_nums);
      });
      // }
      // if (platform === '1688') {

      // }
    };

    _this.getData = function (url, key, ipr, flag, pageKey) {
      var isPage = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      var _this$state6 = _this.state,
          inner_platform = _this$state6.inner_platform,
          start_time = _this$state6.start_time,
          end_time = _this$state6.end_time,
          alreadyComplaintList = _this$state6.alreadyComplaintList,
          currentTab = _this$state6.currentTab;

      var data = {
        // iprName: 'FLYCO飞科',
        // platformCode: inner_platform,
        start_time: start_time.format('YYYY-MM-DD'),
        end_time: end_time.format('YYYY-MM-DD')
      };
      if (isPage) {
        // data.pageNo = pagination.pageNo
        // data.pageSize = pagination.pageSize
        data.pageNo = _this.state[pageKey].pageNo;
        data.pageSize = _this.state[pageKey].pageSize;
      }
      if (flag === 'taobao') {
        data.iprName = ipr;
      }
      if (flag === '1688') {
        // const list = alreadyComplaintList.length?alreadyComplaintList.map(v => v.complaintModelList).reduce((a,b) => a.concat(b), []):[]
        // const account_ids = list.length?list.map(v => v.account_id).join(','):''
        data.ipr_num = ipr;
        // data.account_id = currentTab === '' ? '' : account_ids
      }
      LoadingModal({ bl: true });
      _ajax2.default.post(url, data).then(function (res) {
        // console.log(res)
        LoadingModal({ bl: false });
        var _res$data4 = res.data,
            data = _res$data4.data,
            status = _res$data4.status,
            message = _res$data4.message;

        if (status === '10000') {
          var _this$setState;

          _this.setState((_this$setState = {}, _defineProperty(_this$setState, key, data.content), _defineProperty(_this$setState, pageKey, Object.assign({}, _this.state[pageKey], {
            pageNo: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements
          })), _this$setState));
        }
      }).catch(function (err) {
        LoadingModal({ bl: false });
        _message3.default.error('系统繁忙，请稍后再试！');
      });
    };

    _this.handleDisabledDate = function (current) {
      // return current > moment() || current < moment().subtract(90, 'd')
      return current > moment();
    };

    _this.myChart = function () {
      var data = _this.state.data;

      var myChart = _echarts2.default.init(document.getElementById('echarts'));
      var totnum = 0;

      if (data.length) {
        totnum = data.map(function (item) {
          return item.value;
        }).reduce(function (total, currentValue, index, arr) {
          return total + currentValue;
        });
      }
      myChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: "{b}: {c} ({d}%)"
        },
        legend: {
          width: '100%',
          orient: 'horizontal',
          right: 'center',
          bottom: '20',
          itemGap: 20,
          data: data.map(function (item) {
            return item.name;
          })
        },

        series: [{
          name: '总提交数',
          type: 'pie',
          radius: ['0%', '30%'],
          center: ['50%', '48%'],
          color: ['#fff'],
          silent: true,
          label: {
            position: 'center',
            formatter: '{c| {c}}\n{a|{a}}',
            color: '#333',
            fontSize: 20,
            rich: {
              a: {
                fontSize: 14,
                color: '#999',
                align: 'center'
              },
              c: {
                color: '#333',
                fontSize: 20,
                padding: 10,
                align: 'center'
              }
            }
          },
          data: [{ value: totnum, name: '' }]
        }, {
          type: 'pie',
          radius: ['50%', '70%'],
          center: ['50%', '48%'],
          label: {
            formatter: '{b}：{c}  ({d}%)'
          },
          avoidLabelOverlap: true,
          color: ['#55a0f8', '#66c8ca', '#72c77c', '#f4d358', '#e17c7d', '#8e66dd', '#2b5fb9', '#50e667', '#e650cf'],
          data: data
        }]
      });
    };

    _this.state = {
      platform: props.match.params.platform,
      data: [],
      inner_platform: 'taobao',
      start_time: moment().subtract(90, 'd'),
      end_time: moment(),
      pagination: {
        pageNo: 1,
        pageSize: 10
      },
      tablePage: {
        pageNo: 1,
        pageSize: 10
      },
      shopComplaintRank: [],
      complaintListDetail: [],

      alreadyComplaintList: [],
      currentTab: '',
      currentIpr: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getAlreadyComplaintList();
      this.getAllData(this.state.platform, '');
    }
    // 获取已设置投诉报表列表

    // 1688投诉链接情况概览数据

    // 1688获取店铺投诉次数

    // 1688获取投诉列表

    // taobao投诉链接概览数据

    // taobao获取店铺被投诉次数

    // taobao获取投诉列表

    // 获取数据

    // 90天之内的可以选择

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
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
//# sourceMappingURL=289_8e1ae4430fb88c4deee3.js.map