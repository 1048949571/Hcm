(window.webpackJsonp=window.webpackJsonp||[]).push([[63,78,276],{1157:function(e,t){},1158:function(e,t){},1159:function(e,t){},1160:function(e,t){},1161:function(e,t){},1162:function(e,t){},1163:function(e,t){},1164:function(e,t){},1165:function(e,t){},1166:function(e,t){},25:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(54));n(53);var o=r(n(28));function r(e){return e&&e.__esModule?e:{default:e}}n(1157);var i=function(t){return e.createElement("div",{className:"layout-wrapper "+(t.className||"")},e.createElement("div",{className:"header-wrapper"},e.createElement(a.default,{className:"breadcrumb"},t.breadcrumbList.map(function(n,o){return""===t.linkList[o]?e.createElement(a.default.Item,{key:n},n):e.createElement(a.default.Item,{href:"javascript:;",key:n},e.createElement("span",{onClick:function(){t.history.go(-t.linkList[o])}},n))}))),e.createElement("div",{className:"layout-content"},t.children),e.createElement("div",{className:"copyright"},e.createElement(o.default,null)))};i.defaultProps={title:"标题",breadcrumbList:[],linkList:[]},t.default=i}).call(this,n(1))},28:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var a=function(t){function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),n(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),a}();t.default=a}).call(this,n(1))},530:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0});var o=u(n(45)),r=u(n(37)),i=u(n(14)),c=u(n(54)),l=u(n(48));n(46),n(36),n(18),n(53),n(47),n(780);var s=u(n(17));u(n(25));function u(e){return e&&e.__esModule?e:{default:e}}var f=(0,s.default)(function(t){var n=l.default.RangePicker;return e.createElement("div",{className:"UpgradeVersion"},e.createElement("div",{className:"Breadcrumb"},e.createElement(c.default,null,e.createElement(c.default.Item,null,"系统设置"),e.createElement(c.default.Item,null,"升级版本客户"))),e.createElement("div",{className:"content"},e.createElement("div",{style:{marginBottom:"20px"}},e.createElement("a",{href:"/hcm/HcmUpgradedVersion/downUpgradedVersionlist?begintime="+t.state.begintime+"&endtime="+t.state.endtime+"&pageSize="+t.state.pageSize+"&pageNo="+t.state.pageNo},e.createElement(i.default,{className:"btn6"},"下载数据")),e.createElement("span",{style:{float:"right"}},"提交时间：",e.createElement(n,{style:{width:"300px"},defaultValue:[a(Date.now()-2592e6),a(Date.now())],onChange:t.onChange,format:"YYYY-MM-DD"}))),e.createElement(r.default,{pagination:!1,rowKey:"id",scroll:{x:200*(t.state.ProductInformation_list.length-1)},columns:t.state.ProductInformation_list,dataSource:t.state.link_taobao}),e.createElement("div",{className:"ProductInformationFooter"},e.createElement("div",{className:"footer"},e.createElement("div",{className:"info"},"共 "+t.state.totalNum+" 条记录 ","  ","第  "+t.state.pageNo+"  / "+Math.ceil(t.state.totalNum/t.state.pageSize)+" 页"),e.createElement(o.default,{pageSize:t.state.pageSize,current:t.state.pageNo,total:t.state.totalNum,onChange:t.changePagination,onShowSizeChange:t.onPaginationSize,showSizeChanger:!0,showQuickJumper:!0})))))});t.default=f}).call(this,n(1),n(10))},780:function(e,t){},841:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=c(n(530)),i=c(n(12));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(t){function n(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));o.GetDateStr=function(e){var t=new Date;return t.setDate(t.getDate()+e),t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())},o.getListByBmcid=function(e,t,n,a){i.default.get("/hcm/HcmUpgradedVersion/getList",{params:{begintime:e,endtime:t,pageSize:n,pageNo:a}}).then(function(e){console.log(e),1e4==e.data.status?e.data.data.content.length>0&&o.setState({link_taobao:e.data.data.content,totalNum:e.data.data.totalElements}):message.error(e.data.message)})},o.onChange=function(e,t){console.log(e,t),""!=e&&e!=[]&&null!=e?o.setState({start_time:t[0]+" 00:00:00",end_time:t[1]+" 23:59:59",link_taobao:[],pageSize:10,totalNum:0,pageNo:1},function(){o.getListByBmcid(o.state.start_time,o.state.end_time,o.state.pageSize,o.state.pageNo)}):o.setState({start_time:o.GetDateStr(-90),end_time:o.GetDateStr(0),link_taobao:[],pageSize:10,totalNum:0,pageNo:1},function(){o.getListByBmcid(o.state.start_time,o.state.end_time,o.state.pageSize,o.state.pageNo)})},o.changePagination=function(e,t){o.setState({pageNo:e,link_taobao:[]},function(){o.getListByBmcid(o.state.start_time,o.state.end_time,o.state.pageSize,o.state.pageNo)})},o.onPaginationSize=function(e,t){o.setState({pageSize:t,link_taobao:[]},function(){o.getListByBmcid(o.state.start_time,o.state.end_time,o.state.pageSize,o.state.pageNo)})};var r=[{title:"序号",render:function(t,n,a){return e.createElement("span",{key:a},a+1)}},{title:"公司名称",dataIndex:"companyname"},{title:"用户名",dataIndex:"username"},{title:"联系方式",width:"200px",dataIndex:"phonenum"},{title:"当前使用版本",dataIndex:"current_version"},{title:"提交时间",dataIndex:"createtime",render:function(t,n,o){return e.createElement("span",null,a(n.createtime).format("YYYY-MM-DD HH:mm:ss"))}},{title:"需要升级版本",dataIndex:"upgrade_version"}];return o.state={ProductInformation_list:r,link_taobao:[],pageSize:10,totalNum:0,pageNo:1},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),o(n,[{key:"componentDidMount",value:function(){this.setState({begintime:this.GetDateStr(-30)+" 00:00:00",endtime:this.GetDateStr(0)+" 23:59:59"}),this.getListByBmcid(this.GetDateStr(-30)+" 00:00:00",this.GetDateStr(0)+" 23:59:59",this.state.pageSize,this.state.pageNo)}},{key:"render",value:function(){return e.createElement(r.default,{that:this})}}]),n}();t.default=l}).call(this,n(1),n(10))}}]);