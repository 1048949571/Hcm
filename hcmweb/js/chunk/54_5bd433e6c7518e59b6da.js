(window.webpackJsonp=window.webpackJsonp||[]).push([[54,360],{1157:function(e,t){},1158:function(e,t){},1159:function(e,t){},1160:function(e,t){},1161:function(e,t){},1162:function(e,t){},1163:function(e,t){},1164:function(e,t){},1165:function(e,t){},1166:function(e,t){},25:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(54));n(53);var o=r(n(28));function r(e){return e&&e.__esModule?e:{default:e}}n(1157);var i=function(t){return e.createElement("div",{className:"layout-wrapper "+(t.className||"")},e.createElement("div",{className:"header-wrapper"},e.createElement(a.default,{className:"breadcrumb"},t.breadcrumbList.map(function(n,o){return""===t.linkList[o]?e.createElement(a.default.Item,{key:n},n):e.createElement(a.default.Item,{href:"javascript:;",key:n},e.createElement("span",{onClick:function(){t.history.go(-t.linkList[o])}},n))}))),e.createElement("div",{className:"layout-content"},t.children),e.createElement("div",{className:"copyright"},e.createElement(o.default,null)))};i.defaultProps={title:"标题",breadcrumbList:[],linkList:[]},t.default=i}).call(this,n(1))},28:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var a=function(t){function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),n(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),a}();t.default=a}).call(this,n(1))},433:function(e,t){},615:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0});var o=f(n(45)),r=f(n(37)),i=f(n(14)),l=f(n(24)),c=f(n(48));n(46),n(36),n(18),n(23),n(47),n(805);var s=f(n(17)),u=f(n(25));f(n(28));function f(e){return e&&e.__esModule?e:{default:e}}var p=c.default.RangePicker,m=(l.default.Item,(0,s.default)(function(t){t.props.form.getFieldDecorator;return e.createElement(u.default,{breadcrumbList:["数据中心","数据提报"],linkList:["",""],history:t.props.history},e.createElement("div",{className:"DataPresentation"},e.createElement("div",{className:"ChangeHistoryBOXs"},e.createElement("div",{className:"DataTit"},e.createElement("span",{style:{color:"#333",fontSize:"16px",fontWeight:"bold",marginTop:"10px",display:"inline-block"}},"每日销售数据报表提报记录"),e.createElement("span",{className:"DataSpan"},e.createElement(i.default,{style:{marginRight:"10px"},onClick:t.zrsj},"昨日数据提报统计"))),e.createElement("div",{className:"DataTits",style:{marginBottom:"20px"}},e.createElement("span",{className:"DataSpan",style:{fontWeight:"500",fontSize:"14px"}},"数据时间",e.createElement(p,{defaultValue:[a(Date.now()-26784e5),a(Date.now()-864e5)],style:{marginLeft:"10px",width:"250px"},onChange:t.onChange,format:"YYYY-MM-DD"}))),e.createElement(r.default,{pagination:!1,rowKey:"daydate",scroll:{x:200*(t.state.ProductInformation_list.length-1)},columns:t.state.ProductInformation_list,dataSource:t.state.link_taobao}),e.createElement("div",{className:"footer"},e.createElement("div",{className:"info"},"共 "+t.state.totalNum+" 条记录 ","  ","第  "+t.state.pageNo+"  / "+Math.ceil(t.state.totalNum/t.state.pageSize)+" 页"),e.createElement(o.default,{pageSize:t.state.pageSize,current:t.state.pageNo,total:t.state.totalNum,onChange:t.changePagination,onShowSizeChange:t.onPaginationSize,showSizeChanger:!0,showQuickJumper:!0})))))}));t.default=m}).call(this,n(1),n(10))},765:function(e,t){},805:function(e,t){}}]);