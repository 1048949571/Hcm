(window.webpackJsonp=window.webpackJsonp||[]).push([[39,84,332],{1157:function(e,t){},1158:function(e,t){},1159:function(e,t){},1160:function(e,t){},1161:function(e,t){},1162:function(e,t){},1163:function(e,t){},1164:function(e,t){},1165:function(e,t){},1166:function(e,t){},25:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(54));n(53);var o=r(n(28));function r(e){return e&&e.__esModule?e:{default:e}}n(1157);var s=function(t){return e.createElement("div",{className:"layout-wrapper "+(t.className||"")},e.createElement("div",{className:"header-wrapper"},e.createElement(a.default,{className:"breadcrumb"},t.breadcrumbList.map(function(n,o){return""===t.linkList[o]?e.createElement(a.default.Item,{key:n},n):e.createElement(a.default.Item,{href:"javascript:;",key:n},e.createElement("span",{onClick:function(){t.history.go(-t.linkList[o])}},n))}))),e.createElement("div",{className:"layout-content"},t.children),e.createElement("div",{className:"copyright"},e.createElement(o.default,null)))};s.defaultProps={title:"标题",breadcrumbList:[],linkList:[]},t.default=s}).call(this,n(1))},28:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var a=function(t){function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),n(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),a}();t.default=a}).call(this,n(1))},433:function(e,t){},587:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(45)),o=l(n(37)),r=l(n(14)),s=l(n(48));n(46),n(36),n(18),n(47),n(791);var i=l(n(17)),c=l(n(25));l(n(28));function l(e){return e&&e.__esModule?e:{default:e}}s.default.RangePicker;var u={ClientCheck:{name:"客户信息",type:"ClientCheck",path:"/index.html#/ChangeHistory"},PricePublicity:{name:"泸州老窖",type:"PricePublicity",path:"/index.html#/ProductInformation"}},p=[];for(var f in u)window.location.hash.substring(2).indexOf(f)>-1&&(console.log(u[f]),p.push(u[f]));var m=(0,i.default)(function(t){var n,s,i,l=t.state,u=l.loadings,p=l.loading,f={selectedRowKeys:l.selectedRowKeys,onChange:t.onSelectChange};return e.createElement(c.default,{breadcrumbList:["个人中心","消息中心"],linkList:["",""]},e.createElement("div",{className:"MessageCenter"},e.createElement("div",{className:"ChangeHistoryBOX"},e.createElement("div",{className:"ChangeBody"},e.createElement("div",{style:(n={marginBottom:"16px",marginTop:"10px"},s="marginBottom",i="10px",s in n?Object.defineProperty(n,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[s]=i,n)},e.createElement(r.default,{onClick:t.start,loading:p},"标为已读"),e.createElement(r.default,{style:{marginLeft:"10px"},onClick:t.startError,loading:u},"批量删除")),e.createElement(o.default,{pagination:!1,rowKey:"id",rowSelection:f,columns:t.state.MessageCenter_list,dataSource:t.state.data})),e.createElement("div",{className:"ProductInformationFooter"},e.createElement("div",{className:"footer"},e.createElement("div",{className:"info"},"共 "+t.state.totalNum+" 条记录 ","  ","第  "+t.state.pageNo+"  / "+Math.ceil(t.state.totalNum/t.state.pageSize)+" 页"),e.createElement(a.default,{pageSize:t.state.pageSize,current:t.state.pageNo,total:t.state.totalNum,onChange:t.changePagination,onShowSizeChange:t.onPaginationSize,showSizeChanger:!0,showQuickJumper:!0}))))))});t.default=m}).call(this,n(1))},765:function(e,t){},791:function(e,t){},906:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0});var o=l(n(24)),r=l(n(15)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(23),n(16);var i=l(n(587)),c=l(n(12));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(t){function n(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));o.start=function(){""!=o.state.AppayIDs.join(",")&&null!=o.state.AppayIDs.join(",")?(o.setState({loading:!0}),setTimeout(function(){c.default.post("/hcm/hcmMessageCenter/Read",{message_id:o.state.AppayIDs.join(",")}).then(function(e){1e4==e.data.status&&(o.setState({selectedRowKeys:[],loading:!1,AppayIDs:[]}),o.DidMountText())})},1e3)):r.default.error("请选择要已读的内容")},o.startError=function(){""!=o.state.AppayIDs.join(",")&&null!=o.state.AppayIDs.join(",")?(o.setState({loadings:!0}),setTimeout(function(){c.default.post("/hcm/hcmMessageCenter/Delete",{message_id:o.state.AppayIDs.join(",")}).then(function(e){1e4==e.data.status&&(o.setState({selectedRowKeys:[],loadings:!1,AppayIDs:[]}),o.DidMountText())})},1e3)):r.default.error("请选择要删除的内容")},o.onSelectChange=function(e,t){var n=[];t.forEach(function(e,t){n.push(e.id)}),o.setState({selectedRowKeys:e,AppayIDs:n})},o.changePagination=function(e,t){c.default.post("/hcm/hcmMessageCenter/Getlist",{pageNo:e,pageSize:t}).then(function(t){1e4==t.data.status&&o.setState({data:t.data.data.content,totalNum:t.data.data.totalElements,pageNo:e})})},o.onPaginationSize=function(e,t){c.default.post("/hcm/hcmMessageCenter/Getlist",{pageNo:e,pageSize:t}).then(function(n){1e4==n.data.status&&(console.log(n),o.setState({data:n.data.data.content,pageNo:e,pageSize:t}))})},o.HistoryGo=function(){window.history.go(-1)},o.MessageCenters=function(e,t,n){window.location="/index.html#/MessageDetails/"+t.id+"/"+t.sys_type+"/"+t.messagetype},o.DidMountText=function(){c.default.post("/hcm/hcmMessageCenter/Getlist",{pageNo:o.state.pageNo,pageSize:o.state.pageSize}).then(function(e){1e4==e.data.status&&(console.log(e),o.setState({data:e.data.data.content,totalNum:e.data.data.totalElements}))})};var s=[{title:"序号",dataIndex:"index",width:"10%",render:function(e,t,n){return n+1}},{title:"标题",dataIndex:"topic",render:function(t,n,a){return e.createElement("span",{key:a},0==n.isread?e.createElement("a",{className:"WEIDU",onClick:o.MessageCenters.bind(o,t,n,a)},n.topic):e.createElement("span",{className:"YIDU",onClick:o.MessageCenters.bind(o,t,n,a)},n.topic))}},{title:"内容",width:"30%",height:"50px",overflow:"hidden",dataIndex:"content",render:function(t,n,a){return e.createElement("span",{key:a},"JGGSXXBG"==n.messagetype?e.createElement("span",null,"所属客户：",JSON.parse(n.content).change_people,", 所属分类：",JSON.parse(n.content).obj.map(function(t,n){return e.createElement("span",{key:n},t.classify)})):"HDSQYSH"==n.messagetype?e.createElement("span",null,"活动主题：",JSON.parse(n.content).campaign_name,",店铺名称：",JSON.parse(n.content).shop_name):"HDJCBHG"==n.messagetype?e.createElement("span",null,"活动主题：",JSON.parse(n.content).campaign_name,",店铺名称：",JSON.parse(n.content).shop_name):"TZGG"==n.messagetype?e.createElement("span",null,"公告主题：",JSON.parse(n.content).notice_title):"SJGSXXBG"==n.messagetype?e.createElement("span",null,"所属客户：",JSON.parse(n.content).change_people,", 所属分类：",JSON.parse(n.content).obj.map(function(t,n){return e.createElement("span",{key:n},t.classify)})):"HDDSH"==n.messagetype?e.createElement("span",null,"活动主题：",JSON.parse(n.content).campaign_name,",店铺名称：",JSON.parse(n.content).shop_name):"KHXXBG"==n.messagetype?e.createElement("span",null,"客户名称：",JSON.parse(n.content).dealername,",变更人：",JSON.parse(n.content).change_user):"KHXXDSH"==n.messagetype?e.createElement("span",null,"客户名称：",JSON.parse(n.content).dealername,",公司税号：",JSON.parse(n.content).dutynumber):"SPKPCDSZ"==n.messagetype?e.createElement("span",null,"新客户：",JSON.parse(n.content).companynames):"SJJKDSZ"==n.messagetype?e.createElement("span",null,"所属客户：",JSON.parse(n.content).change_people,", 所属分类：",JSON.parse(n.content).obj.map(function(t,n){return e.createElement("span",{key:n},t.classify)})):"DPXZ"==n.messagetype||"DPSC"==n.messagetype?e.createElement("span",null,"店铺名称：",JSON.parse(n.content).shop_name,", 旺旺：",JSON.parse(n.content).wangwang):null)}},{title:"时间",dataIndex:"createtime",render:function(t,n,o){return e.createElement("span",{key:o},a(n.createtime).format("YYYY-MM-DD HH:mm:ss"))}}];return o.state={MessageCenter_list:s,selectedRowKeys:[],loading:!1,loadings:!1,data:[],totalNum:10,pageNo:1,pageSize:10,AppayIDs:[]},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),s(n,[{key:"componentDidMount",value:function(){this.DidMountText()}},{key:"render",value:function(){return e.createElement(i.default,{that:this})}}]),n}();t.default=o.default.create()(u)}).call(this,n(1),n(10))}}]);