(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1157:function(e,t){},1158:function(e,t){},1159:function(e,t){},1160:function(e,t){},1161:function(e,t){},1162:function(e,t){},1163:function(e,t){},1169:function(e,t){},25:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(54));n(53);var l=r(n(28));function r(e){return e&&e.__esModule?e:{default:e}}n(1157);var c=function(t){return e.createElement("div",{className:"layout-wrapper "+(t.className||"")},e.createElement("div",{className:"header-wrapper"},e.createElement(a.default,{className:"breadcrumb"},t.breadcrumbList.map(function(n,l){return""===t.linkList[l]?e.createElement(a.default.Item,{key:n},n):e.createElement(a.default.Item,{href:"javascript:;",key:n},e.createElement("span",{onClick:function(){t.history.go(-t.linkList[l])}},n))}))),e.createElement("div",{className:"layout-content"},t.children),e.createElement("div",{className:"copyright"},e.createElement(l.default,null)))};c.defaultProps={title:"标题",breadcrumbList:[],linkList:[]},t.default=c}).call(this,n(1))},28:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var a=function(t){function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),n(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),a}();t.default=a}).call(this,n(1))},524:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=f(n(45)),l=f(n(37)),r=f(n(80)),c=f(n(14)),i=f(n(27)),o=f(n(11)),u=f(n(30));n(46),n(36),n(81),n(18),n(26),n(22),n(31);var s=f(n(17)),m=f(n(25));f(n(28));function f(e){return e&&e.__esModule?e:{default:e}}var d=u.default.Option,p=(0,s.default)(function(t){var n=t.state,s=n.pageNo,f=n.pageSize,p=n.totalNum,h=n.checkAll,E=n.dealername,v=n.takePeople,y=n.username,b=n.status,g=n.selectedRowKeys,N=n.dataList,k={selectedRowKeys:g,onChange:function(e){return t.onTableCheckChange(e)}},C={width:"14px",height:"14px",opacity:.25,cursor:"pointer"},w=function(n){return t.state[n]&&t.state[n].length?e.createElement(o.default,{type:"close-circle",onClick:function(){return t.handleClearIconClick(n)},style:C}):null};return e.createElement(m.default,{breadcrumbList:["用户管理","经销商账号"],linkList:["",""],history:t.props.history},e.createElement("div",{className:"dealerlist"},e.createElement("div",{className:"content"},e.createElement("div",{className:"search-box"},e.createElement("div",{className:"input-box"},e.createElement("div",{className:"item"},e.createElement("span",{className:"lab"},"客户名称:"),e.createElement(i.default,{onChange:function(e){return t.chSearchIpt(e,"dealername")},value:E,suffix:w("dealername"),className:"ipt"})),e.createElement("div",{className:"item"},e.createElement("span",{className:"lab"},"对接人:"),e.createElement(i.default,{onChange:function(e){return t.chSearchIpt(e,"takePeople")},value:v,suffix:w("takePeople"),className:"ipt"})),e.createElement("div",{className:"item"},e.createElement("span",{className:"lab"},"用户名:"),e.createElement(i.default,{onChange:function(e){return t.chSearchIpt(e,"username")},value:y,suffix:w("username"),className:"ipt"}))),e.createElement("div",{className:"input-box"},e.createElement("div",{style:{position:"relative"},id:"status",className:"item"},e.createElement("span",{className:"lab"},"状态:"),e.createElement(u.default,{style:{width:"100%"},value:b,onChange:function(e){return t.handleChange(e,"status")},getPopupContainer:function(){return document.getElementById("status")}},e.createElement(d,{value:null},"全部"),e.createElement(d,{value:1},"启用"),e.createElement(d,{value:0},"禁用"))),e.createElement("div",{style:{justifyContent:"flex-end"},className:"item"},e.createElement(c.default,{onClick:function(e){return t.onSearch()}},"查询")))),e.createElement("div",{className:"list-box"},e.createElement("div",null,e.createElement("div",null,e.createElement(c.default,{onClick:function(){return t.allStopStart(1)},style:{marginRight:"10px"}},"批量启用"),e.createElement(c.default,{onClick:function(){return t.allStopStart(0)},type:"danger"},"批量停用")),e.createElement("div",{style:{padding:"10px 0px"}},e.createElement(r.default,{message:e.createElement("div",null,"共 ",e.createElement("a",null,p)," 项，已选择 ",e.createElement("a",null,h?p:g.length)," 项 ",e.createElement("a",{onClick:function(){return t.checkAll(!0)}},"勾选全部"),"/",e.createElement("a",{onClick:function(){return t.checkAll(!1)}},"取消勾选")),type:"info",showIcon:!0})),e.createElement(l.default,{rowKey:"id",pagination:!1,rowSelection:k,columns:t.formatColumn(),dataSource:N})),e.createElement("div",{className:"footer"},e.createElement("div",{className:"info"},"共 "+p+" 条记录 ","  ","第  "+s+"  / "+Math.ceil(p/f)+" 页"),e.createElement(a.default,{pageSize:f,current:s,total:p,onChange:t.changePagination,onShowSizeChange:t.onPaginationSize,showSizeChanger:!0,showQuickJumper:!0}))))))});t.default=p}).call(this,n(1))}}]);