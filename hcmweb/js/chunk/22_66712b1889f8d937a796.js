(window.webpackJsonp=window.webpackJsonp||[]).push([[22,23],{1157:function(e,t){},1158:function(e,t){},1159:function(e,t){},1160:function(e,t){},1161:function(e,t){},1162:function(e,t){},1163:function(e,t){},1164:function(e,t){},1165:function(e,t){},1166:function(e,t){},1167:function(e,t){},1168:function(e,t){},1173:function(e,t){},1194:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(73)),r=c(a(202)),o=c(a(97)),l=c(a(33)),i=c(a(32));function c(e){return e&&e.__esModule?e:{default:e}}a(72),a(199),a(92),a(41),a(42),a(1195);t.default=function(t){var a=t.data,c=t.platform,u=t.pageChange,p=t.pagination,s=p.pageNo,m=p.pageSize,f=e.createElement("h5",{className:"card-title"},"店铺被投次数排行");return e.createElement(n.default,{className:"card-wrapper",title:f,bordered:!1},e.createElement(r.default,{size:"small",split:!1,dataSource:a,pagination:{simple:!0,onChange:u,current:p.pageNo,total:p.totalElements},header:e.createElement(l.default,{className:"row",type:"flex",justify:"space-between"},e.createElement(i.default,{span:2},e.createElement("span",null,"排名")),e.createElement(i.default,{span:6},e.createElement("span",{className:"ellipsis"},"旺旺名称")),e.createElement(i.default,{span:6},e.createElement("span",null,"被投诉次数")),e.createElement(i.default,{span:6},e.createElement("span",null,"撤诉次数"))),renderItem:function(t,a){var n={};return"taobao"===c&&(n.wangwang=t.entity_owner_name,n.complaintCount=t.all_count,n.withdrawCount=t.c_count),"1688"===c&&(n.wangwang=t.company_name,n.complaintCount=t.tscs,n.withdrawCount=t.cscs),function(t,a){var n=t.wangwang,r=t.complaintCount,c=t.withdrawCount,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"body";return e.createElement(l.default,{className:"row "+("body"===u?"body-row":""),type:"flex",justify:"space-between"},e.createElement(i.default,{span:2},e.createElement("span",{className:"body"===u&&m*(s-1)+a+1<4?"circle":""},m*(s-1)+a+1)),e.createElement(i.default,{span:6},e.createElement(o.default,{trigger:"hover",content:n},e.createElement("span",{className:"ellipsis"},n))),e.createElement(i.default,{span:6},e.createElement("span",null,r)),e.createElement(i.default,{span:6},e.createElement("span",null,c)))}(n,a)}}))}}).call(this,a(1))},1195:function(e,t){},1196:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(73)),o=l(a(37));function l(e){return e&&e.__esModule?e:{default:e}}a(72),a(36),a(1197);var i="withdrawal";t.default=function(t){var a=t.data,l=t.platform,c=t.pagination,u=t.pageChange,p=[{title:"序号",render:function(e,t,a){return a+1},key:"xuhao"},{title:"商品信息",render:function(t,a){return e.createElement(e.Fragment,null,e.createElement("p",{style:{color:"#333"}},a.company_name),e.createElement("p",null,a.item_title||""),e.createElement("p",null,e.createElement("a",{href:a.tort_link,target:"_blank"},a.tort_link)),e.createElement("p",{style:{color:"#999"}},e.createElement("span",null,a.sale_price?"价格:￥"+a.sale_price:""),"  ",e.createElement("span",null,a.total_sold_quantity?"30天销量:"+a.total_sold_quantity:""),"  ",e.createElement("span",null,a.item_local?"发货地:"+a.item_local:"")))},key:"goods-info",width:500},{title:"投诉信息",key:"complaint-info",render:function(t,a){return e.createElement(e.Fragment,null,e.createElement("p",null,"投诉账号：",a.account_id),e.createElement("p",null,"知识产权名称：",a.ipr_name?a.ipr_name:""),e.createElement("p",null,"投诉单号：",a.complaint_num),e.createElement("p",null,"投诉时间：",n(a.complaint_time).format("YYYY-MM-DD")))}},{title:"所属站点",key:"website",dataIndex:"site"},{title:"状态",key:"status",dataIndex:"state"}],s=[{key:"xuhao",title:"序号",render:function(e,t,a){return a+1}},{key:"goods-info",title:"商品信息",render:function(t,a){return e.createElement(e.Fragment,null,e.createElement("p",{style:{color:"#333"}},a.shop_name||"",a.wangwang?"（"+a.wangwang+"）":""),e.createElement("p",null,a.item_title||""),e.createElement("p",null,e.createElement("a",{href:a.entity_content,target:"_blank"},a.entity_content)),e.createElement("p",{style:{color:"#999"}},e.createElement("span",null,a.sale_price?"价格:￥"+a.sale_price:""),"  ",e.createElement("span",null,a.total_sold_quantity?"销量:"+a.total_sold_quantity:""),"  ",e.createElement("span",null,a.item_local?"发货地:"+a.item_local:"")))},width:500},{title:"投诉信息",key:"tousu",render:function(t,a){return e.createElement(e.Fragment,null,e.createElement("p",null,"投诉账号：",a.account_id),e.createElement("p",null,"知识产权：",a.ipr_name),e.createElement("p",null,"投诉单号：",a.batch_id),e.createElement("p",null,"投诉时间：",n(a.gmt_create).format("YYYY-MM-DD HH:mm")))}},{title:"状态/申诉信息",key:"status",width:300,render:function(t,a){return e.createElement(e.Fragment,null,e.createElement("p",null,"状态：",a.status_str),a.status!==i?e.createElement(e.Fragment,null,e.createElement("p",null,"申诉时间：",a.appeal_date),e.createElement("p",null,"申诉理由：",a.appeal_comment)):null)}}];return e.createElement(r.default,{bordered:!1,title:e.createElement("h5",{className:"card-title"},"投诉信息详情")},e.createElement(o.default,{pagination:{showQuickJumper:!0,showTotal:function(e){return"共 "+e+" 条数据"},total:c.totalElements,onChange:u,current:c.pageNo},rowKey:function(e){return"taobao"===l?e.id:"1688"===l?e.case_id:void 0},columns:"taobao"===l?s:p,dataSource:a}))}}).call(this,a(1),a(10))},1197:function(e,t){},1198:function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();t.default=function(t){return function(o){function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,e.Component),r(l,[{key:"render",value:function(){var r=this,o=[{text:"最近7天",num:7},{text:"最近30天",num:30},{text:"最近90天",num:90},{text:"最近365天",num:365}],l={};return this.props.showAllFooterButton&&(l.renderExtraFooter=function(){return e.createElement(e.Fragment,null,o.map(function(t){return e.createElement("span",{key:t.num,style:{color:"#1890ff",cursor:"pointer",marginRight:"10px"},onClick:function(){r.props.onChange([a().subtract(t.num,"d"),a()]),r.refs._picker.picker.setState({open:!1})}},t.text)}))}),e.createElement(t,n({ref:"_picker"},this.props,l))}}]),l}()}}).call(this,a(1),a(10))},25:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(54));a(53);var r=o(a(28));function o(e){return e&&e.__esModule?e:{default:e}}a(1157);var l=function(t){return e.createElement("div",{className:"layout-wrapper "+(t.className||"")},e.createElement("div",{className:"header-wrapper"},e.createElement(n.default,{className:"breadcrumb"},t.breadcrumbList.map(function(a,r){return""===t.linkList[r]?e.createElement(n.default.Item,{key:a},a):e.createElement(n.default.Item,{href:"javascript:;",key:a},e.createElement("span",{onClick:function(){t.history.go(-t.linkList[r])}},a))}))),e.createElement("div",{className:"layout-content"},t.children),e.createElement("div",{className:"copyright"},e.createElement(r.default,null)))};l.defaultProps={title:"标题",breadcrumbList:[],linkList:[]},t.default=l}).call(this,a(1))},28:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var n=function(t){function n(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),a(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),n}();t.default=n}).call(this,a(1))},433:function(e,t){},570:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0});var r=g(a(14)),o=g(a(33)),l=g(a(11)),i=g(a(32)),c=g(a(99)),u=g(a(48));a(18),a(41),a(22),a(42),a(106),a(47);var p=g(a(17)),s=g(a(25)),m=g(a(1194)),f=g(a(1196)),d=g(a(1198));function g(e){return e&&e.__esModule?e:{default:e}}var b=u.default.RangePicker,h=c.default.TabPane,_=((0,d.default)(b),(0,p.default)(function(t){var a=t.state,u=a.platform,p=(a.inner_platform,a.start_time),d=a.end_time,g=a.shopComplaintRank,_=a.complaintListDetail,y=a.alreadyComplaintList,E=a.currentTab,v=a.pagination,C=a.tablePage,w=a.currentIpr,k=p.format("YYYY-MM-DD"),S=d.format("YYYY-MM-DD"),N="";"taobao"===u&&(N="/hcm/complaint/downReport_taobao?iprName="+w+"&start_time="+k+"&end_time="+S),"1688"===u&&(N="/hcm/complaint/downLoadReport_1688?ipr_num="+w+"&start_time="+k+"&end_time="+S);var L="taobao"===u?"/taobaoSetComplaintReport/taobao":"/aliSetComplaintReport/1688";return e.createElement(s.default,{breadcrumbList:["投诉报表",("taobao"===u?"淘宝":"1688")+"投诉报表"],linkList:["",""]},e.createElement("div",{className:"top-wrapper"},e.createElement(o.default,{className:"top-row"},e.createElement(i.default,{span:"KEFU"===localStorage.getItem("logintype")?22:24},e.createElement(c.default,{type:"card",onChange:t.handleTabChange,defaultValue:E},e.createElement(h,{tab:"全部知识产权",key:""}),y.map(function(t){return e.createElement(h,{tab:t.report_name,key:t.report_id},e.createElement("p",null,"知识产权：",(a=t.complaintModelList).map(function(t,n){return e.createElement("span",{key:n},t.ipr_name+"（"+t.account_id+"）"+(n===a.length-1?"":"、"))})));var a}))),"KEFU"===localStorage.getItem("logintype")?e.createElement(i.default,{onClick:t.goTo.bind(t,L),span:2},e.createElement(l.default,{type:"setting",theme:"outlined"}),"   设置报表"):null),e.createElement("div",{className:"condition"},e.createElement("span",null,"数据时间：",e.createElement(b,{ranges:{"最近7天":[n().subtract(6,"d"),n()],"最近30天":[n().subtract(29,"d"),n()],"最近90天":[n().subtract(89,"d"),n()],"最近365天":[n().subtract(364,"d"),n()]},onChange:t.dateChange,defaultValue:[p,d],disabledDate:t.handleDisabledDate,getCalendarContainer:function(e){return e.parentNode}})),e.createElement("a",{href:N},e.createElement(r.default,{type:"primary"},"下载报表")))),e.createElement("div",{className:"middle-wrapper"},e.createElement("div",{id:"echarts",className:"complaint-link-overview"}),e.createElement("div",{className:"shop-complaint-rank-wrapper"},e.createElement(m.default,{pageChange:t.rankPageChange,pagination:v,data:g,platform:u}))),e.createElement("div",{className:"bottom-wrapper"},e.createElement(f.default,{pageChange:t.tablePageChange,pagination:C,data:_,platform:u})))}));t.default=_}).call(this,a(1),a(10))},886:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(15)),o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(16);var l=u(a(570)),i=u(a(135)),c=u(a(12));function u(e){return e&&e.__esModule?e:{default:e}}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s=function(t){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.getAllData=function(e,a){"taobao"===e&&(t.getComplaintLinkSummary(a),t.getShopComplaintCount(a),t.getComplaintList(a)),"1688"===e&&(t.getComplaintLinkSummary_1688(a),t.getShopComplaintCount_1688(a),t.getComplaintList_1688(a))},t.handleTabChange=function(e){t.setState({currentTab:e,tablePage:{pageNo:1,pageSize:10},pagination:{pageNo:1,pageSize:10}},function(){var a=t.state.platform,n=t.state.alreadyComplaintList.filter(function(t){return t.report_id===e}),r=n.length?n[0].complaintModelList.map(function(e){return"taobao"===a?e.ipr_name:"1688"===a?e.ipr_id:void 0}).join(","):"";t.setState({currentIpr:r}),t.getAllData(a,e?r:e)})},t.goTo=function(e){t.props.history.push(e)},t.getAlreadyComplaintList=function(){c.default.post("/hcm/complaint/report_list",{type:t.state.platform}).then(function(e){var a=e.data,n=a.data,r=a.status;a.message;"10000"===r&&t.setState({alreadyComplaintList:n})}).catch(function(e){r.default.error("系统繁忙，请稍后再试！")})},t.getComplaintLinkSummary_1688=function(e){var a=t.state,n=a.start_time,o=a.end_time;a.alreadyComplaintList,a.currentTab;c.default.post("/hcm/complaint/link_1688",{start_time:n.format("YYYY-MM-DD"),end_time:o.format("YYYY-MM-DD"),ipr_num:e}).then(function(e){var a=e.data,n=a.data,r=a.status;a.message;"10000"===r&&t.setState({data:n},function(){t.myChart()})}).catch(function(e){r.default.error("系统繁忙，请稍后再试！")})},t.getShopComplaintCount_1688=function(e){t.getData("/hcm/complaint/reportSort_1688","shopComplaintRank",e,"1688","pagination")},t.getComplaintList_1688=function(e){t.getData("/hcm/complaint/reportList_1688","complaintListDetail",e,"1688","tablePage")},t.getComplaintLinkSummary=function(e){var a=t.state,n=a.start_time,o=a.end_time;c.default.post("/hcm/complaint/reportStatus_taobao",{start_time:n.format("YYYY-MM-DD"),end_time:o.format("YYYY-MM-DD"),iprName:e}).then(function(e){var a=e.data,n=a.data,r=a.status;a.message;"10000"===r&&t.setState({data:n},function(){t.myChart()})}).catch(function(e){r.default.error("系统繁忙，请稍后再试！")})},t.getShopComplaintCount=function(e){t.getData("/hcm/complaint/reportSort_taobao","shopComplaintRank",e,"taobao","pagination")},t.getComplaintList=function(e){t.getData("/hcm/complaint/reportList_taobao","complaintListDetail",e,"taobao","tablePage")},t.rankPageChange=function(e){var a=t.state,n=a.platform,r=(a.alreadyComplaintList,a.currentTab),o=a.currentIpr;t.setState({pagination:Object.assign({},t.state.pagination,{pageNo:e})},function(){"taobao"===n&&t.getShopComplaintCount(""===r?"":o),"1688"===n&&t.getShopComplaintCount_1688(""===r?"":o)})},t.tablePageChange=function(e){var a=t.state,n=a.platform,r=(a.alreadyComplaintList,a.currentTab),o=a.currentIpr;t.setState({tablePage:Object.assign({},t.state.tablePage,{pageNo:e})},function(){"taobao"===n&&t.getComplaintList(""===r?"":o),"1688"===n&&t.getComplaintList_1688(""===r?"":o)})},t.dateChange=function(e){if(e.length){var a=t.state,n=a.platform,r=a.alreadyComplaintList,o=a.currentTab,l=r.length?r.map(function(e){return e.complaintModelList}).reduce(function(e,t){return e.concat(t)},[]):[],i=l.length?l.map(function(e){return e.ipr_name}).join(","):"",c=l.length?l.map(function(e){return e.ipr_id}).join(","):"";t.setState({start_time:e[0],end_time:e[1],pagination:Object.assign({},t.state.pagination,{pageNo:1}),tablePage:Object.assign({},t.state.tablePage,{pageNo:1})},function(){t.getAllData(n,""===o?"":"taobao"===n?i:c)})}},t.getData=function(e,a,n,o,l){var i=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],u=t.state,s=(u.inner_platform,u.start_time),m=u.end_time,f=(u.alreadyComplaintList,u.currentTab,{start_time:s.format("YYYY-MM-DD"),end_time:m.format("YYYY-MM-DD")});i&&(f.pageNo=t.state[l].pageNo,f.pageSize=t.state[l].pageSize),"taobao"===o&&(f.iprName=n),"1688"===o&&(f.ipr_num=n),LoadingModal({bl:!0}),c.default.post(e,f).then(function(e){LoadingModal({bl:!1});var n,r=e.data,o=r.data,i=r.status;r.message;"10000"===i&&t.setState((p(n={},a,o.content),p(n,l,Object.assign({},t.state[l],{pageNo:o.pageNumber,pageSize:o.pageSize,totalElements:o.totalElements})),n))}).catch(function(e){LoadingModal({bl:!1}),r.default.error("系统繁忙，请稍后再试！")})},t.handleDisabledDate=function(e){return e>n()},t.myChart=function(){var e=t.state.data,a=i.default.init(document.getElementById("echarts")),n=0;e.length&&(n=e.map(function(e){return e.value}).reduce(function(e,t,a,n){return e+t})),a.setOption({tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},legend:{width:"100%",orient:"horizontal",right:"center",bottom:"20",itemGap:20,data:e.map(function(e){return e.name})},series:[{name:"总提交数",type:"pie",radius:["0%","30%"],center:["50%","48%"],color:["#fff"],silent:!0,label:{position:"center",formatter:"{c| {c}}\n{a|{a}}",color:"#333",fontSize:20,rich:{a:{fontSize:14,color:"#999",align:"center"},c:{color:"#333",fontSize:20,padding:10,align:"center"}}},data:[{value:n,name:""}]},{type:"pie",radius:["50%","70%"],center:["50%","48%"],label:{formatter:"{b}：{c}  ({d}%)"},avoidLabelOverlap:!0,color:["#55a0f8","#66c8ca","#72c77c","#f4d358","#e17c7d","#8e66dd","#2b5fb9","#50e667","#e650cf"],data:e}]})},t.state={platform:e.match.params.platform,data:[],inner_platform:"taobao",start_time:n().subtract(90,"d"),end_time:n(),pagination:{pageNo:1,pageSize:10},tablePage:{pageNo:1,pageSize:10},shopComplaintRank:[],complaintListDetail:[],alreadyComplaintList:[],currentTab:"",currentIpr:""},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),o(a,[{key:"componentWillMount",value:function(){this.getAlreadyComplaintList(),this.getAllData(this.state.platform,"")}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement(l.default,{that:this})}}]),a}();t.default=s}).call(this,a(1),a(10))}}]);