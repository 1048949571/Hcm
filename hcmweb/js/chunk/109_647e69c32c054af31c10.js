(window.webpackJsonp=window.webpackJsonp||[]).push([[109,119],{113:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.AddIcon=function(t){function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),n(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props,n=t.style,a=t.className;return e.createElement("img",{className:a,style:n,src:"../../../../img/icon/add2.png"})}}]),a}()}).call(this,n(1))},1157:function(e,t){},1158:function(e,t){},1159:function(e,t){},1160:function(e,t){},1161:function(e,t){},1162:function(e,t){},1163:function(e,t){},25:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(54));n(53);var r=o(n(28));function o(e){return e&&e.__esModule?e:{default:e}}n(1157);var i=function(t){return e.createElement("div",{className:"layout-wrapper "+(t.className||"")},e.createElement("div",{className:"header-wrapper"},e.createElement(a.default,{className:"breadcrumb"},t.breadcrumbList.map(function(n,r){return""===t.linkList[r]?e.createElement(a.default.Item,{key:n},n):e.createElement(a.default.Item,{href:"javascript:;",key:n},e.createElement("span",{onClick:function(){t.history.go(-t.linkList[r])}},n))}))),e.createElement("div",{className:"layout-content"},t.children),e.createElement("div",{className:"copyright"},e.createElement(r.default,null)))};i.defaultProps={title:"标题",breadcrumbList:[],linkList:[]},t.default=i}).call(this,n(1))},28:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var a=function(t){function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),n(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),a}();t.default=a}).call(this,n(1))},581:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=s(n(45)),r=s(n(37)),o=s(n(14)),i=s(n(27));n(46),n(36),n(18),n(26);var c=n(113),l=s(n(17)),u=s(n(25));function s(e){return e&&e.__esModule?e:{default:e}}var f=i.default.Search,p=(0,l.default)(function(t){var n=t.state,i=n.title,l=n.pageNo,s=n.pageSize,p=n.totalNum,d=n.dataList;return e.createElement(u.default,{breadcrumbList:["个人中心","工单信息"],linkList:["",""]},e.createElement("div",{className:"feedback"},e.createElement("div",{className:"content"},e.createElement("div",{className:"search-box"},e.createElement("div",null,"ADMIN"==localStorage.logintype?null:e.createElement("a",{href:"/index.html#/AddFeedback"},e.createElement(o.default,{style:{color:"#fff"},className:"btn1-main addgd"},e.createElement(c.AddIcon,{style:{paddingRight:8}}),"新增"))),e.createElement(f,{onSearch:function(){return t.onSearch()},onChange:function(e){return t.onChange(e,"title")},value:i,placeholder:"ADMIN"==localStorage.logintype?"请输入工单标题或提交用户":"请输入工单标题",style:{width:250}})),e.createElement("div",{className:"content-tab"},e.createElement(r.default,{rowKey:"id",pagination:!1,columns:t.formatColumn(),dataSource:d}),e.createElement("div",{className:"footer"},e.createElement("div",{className:"info"},"共 "+p+" 条记录 ","  ","第  "+l+"  / "+Math.ceil(p/s)+" 页"),e.createElement(a.default,{pageSize:s,current:l,total:p,onChange:t.changePagination,onShowSizeChange:t.onPaginationSize,showSizeChanger:!0,showQuickJumper:!0}))))))});t.default=p}).call(this,n(1))},900:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(15)),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(16);var i=l(n(581)),c=l(n(12));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(t){function n(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return o.onSearch=function(){o.setState({pageNo:1},function(){o.getList()})},o.getList=function(){var e=o.state,t=e.pageNo,n=e.pageSize,a=e.title;e.totalNum;c.default.get("/hcm/hcmWorkOrder/getListWorkOrder",{params:{title:a,sysType:localStorage.logintype,pageNo:t,pageSize:n,userid:23}}).then(function(e){var t=e.data.data;o.setState({dataList:t.content,pageNo:t.pageNumber,pageSize:t.pageSize,totalNum:t.totalElements})}).catch(function(e){r.default.error(e.statusText)})},o.onChange=function(e,t){var n=o.state;n[t]=e.target.value,o.setState(n)},o.changePagination=function(e,t){o.setState({pageNo:e,pageSize:t},function(){o.getList()})},o.onPaginationSize=function(e,t){o.setState({pageNo:1,pageSize:t},function(){o.getList()})},o.formatColumn=function(){return[{title:"序号",dataIndex:"name",key:"name",width:"15%",align:"left",render:function(e,t,n){return n+1}},{title:"工单标题",dataIndex:"work_title",key:"work_title",width:"35%",render:function(t,n,a){return"ADMIN"==localStorage.logintype?e.createElement("a",{className:n.adminstatus?"title-text ":"title-text red-ck",href:"/index.html#/InfoFeedback/"+n.id},t):e.createElement("a",{className:n.userstatus?"title-text ":"title-text red-ck",href:"/index.html#/InfoFeedback/"+n.id},t)}},{title:"提交用户",dataIndex:"realname",key:"realname",width:"25%"},{title:"回复时间",dataIndex:"updatetime",key:"updatetime",align:"right",width:"25%",render:function(e,t,n){return a(e).format("YYYY年MM月DD日 HH:mm:ss")}}]},o.state={title:null,pageNo:1,pageSize:10,totalNum:null,dataList:[]},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),o(n,[{key:"componentDidMount",value:function(){this.getList()}},{key:"render",value:function(){return e.createElement(i.default,{that:this})}}]),n}();t.default=u}).call(this,n(1),n(10))}}]);