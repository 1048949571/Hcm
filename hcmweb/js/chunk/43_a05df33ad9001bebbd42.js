(window.webpackJsonp=window.webpackJsonp||[]).push([[43,76],{113:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.AddIcon=function(t){function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),n(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props,n=t.style,a=t.className;return e.createElement("img",{className:a,style:n,src:"../../../../img/icon/add2.png"})}}]),a}()}).call(this,n(1))},1158:function(e,t){},1159:function(e,t){},1160:function(e,t){},1161:function(e,t){},1162:function(e,t){},1163:function(e,t){},1167:function(e,t){},1169:function(e,t){},28:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var a=function(t){function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),n(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),a}();t.default=a}).call(this,n(1))},433:function(e,t){},521:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=g(n(35)),o=g(n(45)),r=g(n(37)),l=g(n(80)),i=g(n(14)),c=g(n(54)),u=g(n(99)),s=g(n(27)),d=g(n(24)),f=g(n(30));n(34),n(46),n(36),n(81),n(18),n(53),n(106),n(26),n(23),n(31);var m=g(n(17)),p=g(n(28)),h=n(113);function g(e){return e&&e.__esModule?e:{default:e}}f.default.Option;var b=d.default.Item,v=s.default.Search,y=u.default.TabPane,E=(0,m.default)(function(t){var n=t.state,a=n.pageNo,s=n.pageSize,d=n.totalNum,f=n.checkAll,m=n.platform,g=n.title,b=n.selectedRowKeys,E=n.dataList,k={selectedRowKeys:b,onChange:function(e){return t.onTableCheckChange(e)}};return e.createElement("div",{className:"ComplaintsAccount"},e.createElement("div",{className:"Breadcrumb"},e.createElement(c.default,null,e.createElement(c.default.Item,null,"用户管理"),e.createElement(c.default.Item,null,"投诉账号管理"))),e.createElement("div",{className:"content"},e.createElement(u.default,{style:{display:"flex",flexDirection:"column"},activeKey:m,onChange:t.changeTabs},e.createElement(y,{tab:"阿里投诉账号",key:"ALIBABA"},e.createElement("div",{className:"list-box"},e.createElement("div",null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("div",null,e.createElement(i.default,{className:" btn1-main",onClick:function(){return t.onAddBoxFrom(!0)},style:{marginRight:"10px",color:"#fff"}},e.createElement(h.AddIcon,{style:{paddingRight:"8px"}}),"新增"),e.createElement(i.default,{onClick:function(){return t.allStopStart()},style:{marginRight:"10px"}},"批量删除")),e.createElement(v,{placeholder:"请输入",value:g,onSearch:t.onSearch,onChange:t.searchChange,style:{width:250}})),e.createElement("div",{style:{padding:"10px 0px"}},e.createElement(l.default,{message:e.createElement("div",null,"共 ",e.createElement("a",null,d)," 项，已选择 ",e.createElement("a",null,f?d:b.length)," 项 ",e.createElement("a",{onClick:function(){return t.checkAll(!0)}},"勾选全部"),"/",e.createElement("a",{onClick:function(){return t.checkAll(!1)}},"取消勾选")),type:"info",showIcon:!0})),e.createElement(r.default,{rowKey:"id",pagination:!1,rowSelection:k,columns:t.formatColumn(),dataSource:E})),e.createElement("div",{className:"footer"},e.createElement("div",{className:"info"},"共 "+d+" 条记录 ","  ","第  "+a+"  / "+Math.ceil(d/s)+" 页"),e.createElement(o.default,{pageSize:s,current:a,total:d,onChange:t.changePagination,onShowSizeChange:t.onPaginationSize,showSizeChanger:!0,showQuickJumper:!0})))),e.createElement(y,{tab:"京东投诉账号",key:"JINGDONG"},e.createElement("div",{className:"list-box"},e.createElement("div",null,e.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},e.createElement("div",null,e.createElement(i.default,{className:" btn1-main",onClick:function(){return t.onAddBoxFrom(!0)},style:{marginRight:"10px"}},"新增"),e.createElement(i.default,{onClick:function(){return t.allStopStart()},style:{marginRight:"10px"}},"批量删除")),e.createElement(v,{placeholder:"请输入",value:g,onSearch:t.onSearch,onChange:t.searchChange,style:{width:250}})),e.createElement("div",{style:{padding:"10px 0px"}},e.createElement(l.default,{message:e.createElement("div",null,"共 ",e.createElement("a",null,d)," 项，已选择 ",e.createElement("a",null,f?d:b.length)," 项 ",e.createElement("a",{onClick:function(){return t.checkAll(!0)}},"勾选全部"),"/",e.createElement("a",{onClick:function(){return t.checkAll(!1)}},"取消勾选")),type:"info",showIcon:!0})),e.createElement(r.default,{rowKey:"id",pagination:!1,rowSelection:k,columns:t.formatColumn(),dataSource:E})),e.createElement("div",{className:"footer"},e.createElement("div",{className:"info"},"共 "+d+" 条记录 ","  ","第  "+a+"  / "+Math.ceil(d/s)+" 页"),e.createElement(o.default,{pageSize:s,current:a,total:d,onChange:t.changePagination,onShowSizeChange:t.onPaginationSize,showSizeChanger:!0,showQuickJumper:!0})))))),e.createElement(w,{that:t}),e.createElement(p.default,{clazzName:"copyright"}))});t.default=E;var w=d.default.create()(function(t){var n=t.form,o=n.getFieldDecorator,r=n.resetFields,l=n.validateFields,i=t.that,c=i.state,u=i.onAddBoxFrom,f=i.onSubmit,m=function(e){e.preventDefault(),l(function(e,t){e||f(t,r)})};return e.createElement(a.default,{maskClosable:!1,title:c.targetData.id?"编辑":"新增",onCancel:function(e){e.preventDefault(),r(),u(!1)},visible:c.actionVisible,onOk:m,className:"YellowWhite"},e.createElement(d.default,{onSubmit:m},e.createElement(b,{label:e.createElement("span",null,"名称"),labelCol:{span:7},wrapperCol:{span:12}},o("title",{initialValue:c.targetData.title,rules:[{required:!0,message:"请输入名称"}]})(e.createElement(s.default,{placeholder:"请输入名称，并保持在25个字以内",maxLength:25}))),e.createElement(b,{label:e.createElement("span",null,"账号"),labelCol:{span:7},wrapperCol:{span:12}},o("username",{initialValue:c.targetData.username,rules:[{required:!0,message:"请输入账号"}]})(e.createElement(s.default,{placeholder:"请输入",maxLength:45}))),e.createElement(b,{label:e.createElement("span",null,"密码"),labelCol:{span:7},wrapperCol:{span:12}},o("password",{initialValue:c.targetData.password,rules:[{required:!0,message:"请输入密码"}]})(e.createElement(s.default,{placeholder:"请输入",maxLength:45}))),e.createElement(b,{label:e.createElement("span",null,"ALIBABA"==c.platform?"淘宝Cookie":"京东Cookie"),labelCol:{span:7},wrapperCol:{span:12}},o("cookie",{initialValue:c.targetData.cookie,rules:[{required:!0,message:"请输入淘宝Cookie"}]})(e.createElement(s.default,{placeholder:"请输入"}))),"ALIBABA"==c.platform?e.createElement(b,{label:e.createElement("span",null,"1688Cookie"),labelCol:{span:7},wrapperCol:{span:12}},o("cookie1688",{initialValue:c.targetData.cookie1688})(e.createElement(s.default,{placeholder:"请输入"}))):null))})}).call(this,n(1))},62:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={onVisibilityChange:function(e,t){var n="hidden"in document?"hidden":"webkitHidden"in document?"webkitHidden":"mozHidden"in document?"mozHidden":null,a=n.replace(/hidden/i,"visibilitychange"),o=function(){document[n]||console.log("页面非激活"+new Date),document[n]&&console.log("页面激活"+new Date)};document.addEventListener(a,o)},formatAccount:function(e){return e=e.replace(/[\s]/g,"").replace(/(\d{4})(?=\d)/g,"$1 ")},formatThousandMoney:function(t,n){return isNaN(t)?"":(n=n||"",!1===e.isNumeric(t)||0==t?"0.00":0==(t=(t=+t).toFixed(2))?"0.00":n+" "+(t+"").replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,"$&,"))},encryption:function(){return(""+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")).replace(/(\d{3})\d*([0-9a-zA-Z]{4})/,"$1****$2")},browser:{versions:function(){var e=navigator.userAgent,t=(navigator.appVersion,"");if(e.indexOf("Ourydc.Yuebaobao")>-1){var n=e.match(/Ourydc.Yuebaobao.*/);if(n.length>0){var a=n[0];t=a.substr(a.indexOf("/")+1)}}return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Adr")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari"),weixin:e.indexOf("MicroMessenger")>-1,weibo:"WeiBo"==e.match(/WeiBo/i)||"Weibo"==e.match(/Weibo/i)||"weibo"==e.match(/weibo/i),qq:"qq"==e.match(/qq/i)||"QQ"==e.match(/QQ/i),qqBrower:-1==e.indexOf("Mobile MQQBrowser")&&-1!=e.indexOf("MQQBrowser"),isInApp:e.indexOf("Ourydc.Yuebaobao")>-1,locAppVersion:t}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()},checkAccount:function(e){return/^[a-zA-Z](\w|\s+){5,15}$/.test(this.trim(e||""))},checkUrl:function(e){return/^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/.test(this.trim(e||""))},Reg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/^[^\u4e00-\u9fa5]{5,31}$/.test(this.trim(e||""))},checkPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/^.{6,16}$/.test(this.trim(e||""))},trim:function(e){return(e=""+e).replace(/(^\s*)|(\s*$)/g,"")},getCookie:function(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null},required:function(e){var t=this.trim(e||"");return!(!t||!t.length)},legnthCheck:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"INPUT";return this.trim(e||"").length<this.LENGTH[t]},LENGTH:{URL:500,TEXTAREA:200,INPUT:50},getQueryString:function(e){var t=new RegExp("(^|&|[?])"+e+"=([^&]*)(&|$)"),n=window.location.href.substr(1).match(t);return null!=n?n[2]:""},getParamString:function(e,t){var n=new RegExp("(^|&|[?])"+t+"=([^&]*)(&|$)"),a=e.substr(1).match(n);return null!=a?a[2]:""},Trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},deviceCheck:function(){return browser.versions.mobile?browser.versions.android?"android":browser.versions.ios?"ios":"mobile":"web"}}}).call(this,n(112))},765:function(e,t){},766:function(e,t){},831:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(15)),o=c(n(35)),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(16),n(34);var l=c(n(521)),i=c(n(12));c(n(62));function c(e){return e&&e.__esModule?e:{default:e}}var u=o.default.confirm,s=function(t){function n(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return o.onAddBoxFrom=function(e){e?o.setState({actionVisible:e}):o.setState({actionVisible:e,targetData:{}})},o.changeTabs=function(e){o.setState({platform:e,pageNo:1,pageSize:10,selectedRowKeys:[],title:null,targetData:{}},function(){o.getList()})},o.onSearch=function(){o.setState({pageNo:1,pageSize:10,selectedRowKeys:[],targetData:{}},function(){o.getList()})},o.searchChange=function(e){o.setState({title:e.target.value})},o.onSubmit=function(e,t){e.platform=o.state.platform,e.id=o.state.targetData.id,e.cookie=e.cookie.trim(),e.cookie1688=e.cookie1688?e.cookie1688.trim():null,i.default.post("/hcm/complaiont/save",e).then(function(e){"10000"==e.data.status?(o.getList(),t(),o.onAddBoxFrom(!1),a.default.success(e.data.message)):a.default.error(e.data.message)})},o.getList=function(){var e=o.state,t=e.pageNo,n=e.pageSize,r=e.platform,l=e.title;i.default.get("/hcm/complaiont/getPage",{params:{title:l,platform:r,pageNo:t,pageSize:n}}).then(function(e){o.setState({dataList:e.data.data.content,pageNo:e.data.data.pageNumber,pageSize:e.data.data.pageSize,totalNum:e.data.data.totalElements,checkAll:!1,oldTitle:l,selectedRowKeys:[]})}).catch(function(e){a.default.error(e.statusText)})},o.onTableCheckChange=function(e){o.setState({selectedRowKeys:e,checkAll:!1})},o.changePagination=function(e,t){o.setState({pageNo:e,pageSize:t},function(){o.getList()})},o.onPaginationSize=function(e,t){o.setState({pageNo:1,pageSize:t},function(){o.getList()})},o.formatColumn=function(){var t=[{title:"No",dataIndex:"index",width:"80px",key:"index",render:function(t,n,a){return e.createElement("div",{style:{width:"40px"}},a+1)}},{title:"名称",dataIndex:"title",key:"title"},{title:"账号",dataIndex:"username",key:"username"},{title:"淘宝Cookie",dataIndex:"cookie",key:"cookie",render:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";arguments[1],arguments[2];return e.createElement("div",null,t?t.substring(0,20):null,t&&t.length>=20?"...":null)}},{title:"1688Cookie",dataIndex:"cookie1688",key:"cookie1688",render:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";arguments[1],arguments[2];return e.createElement("div",null,t?t.substring(0,20):null,t&&t.length>=20?"...":null)}},{title:"操作",dataIndex:"action",key:"action",align:"right",render:function(t,n,a){return e.createElement(e.Fragment,null,e.createElement("a",{style:{marginRight:"20px"},onClick:function(){return o.editItem(n)}},"编辑"),e.createElement("a",{onClick:function(){return o.rmItem(n)}},"删除"))}}];return"JINGDONG"==o.state.platform&&(t.splice(4,1),t[3].title="京东Cookie"),t},o.editItem=function(e){o.setState({targetData:e},function(){o.onAddBoxFrom(!0)})},o.rmItem=function(t){var n=o,r=o.state.platform;u({title:null,className:"alert-item-confirm YellowWhite",content:e.createElement("div",null,e.createElement("div",{className:"tips"},"提示"),e.createElement("div",{className:"pline"}),e.createElement("p",{className:"Dtitle"},"你确认要删除这一项吗?"),e.createElement("p",null,"删除后",e.createElement("span",{className:"red"},"将无法恢复!"))),okText:"确定",cancelText:"取消",onOk:function(){i.default.post("/hcm/complaiont/delete",{ids:t.id,platform:r}).then(function(e){"10000"==e.data.status?(n.changeTabs(r),a.default.success(e.data.message)):a.default.error(e.data.message)}).catch(function(e){a.default.error(e.statusText)})}})},o.allStopStart=function(){var t=o.state,n=t.selectedRowKeys,r=t.totalNum,l=t.checkAll,c=t.oldTitle,s=t.platform,d=o;0!=n.length?u({title:null,className:"alert-item-confirm YellowWhite",content:e.createElement("div",null,e.createElement("div",{className:"tips"},"提示"),e.createElement("div",{className:"pline"}),e.createElement("p",{className:"Dtitle"},"你确认要删除",l?r:n.length,"项吗")),okText:"确定",cancelText:"取消",onOk:function(){i.default.post("/hcm/complaiont/delete",{ids:l?"checkAll":n.join(","),title:c,platform:s}).then(function(e){"10000"==e.data.status?(d.changeTabs(s),a.default.success(e.data.message)):a.default.error(e.data.message)}).catch(function(e){a.default.error(e.statusText)})}}):a.default.warning("至少选择一项")},o.checkAll=function(e){var t=o.state.selectedRowKeys;e?o.state.dataList.forEach(function(e,n){t.push(e.id)}):t=[],o.setState({checkAll:e,selectedRowKeys:t})},o.state={platform:"ALIBABA",title:null,dataList:[],pageNo:1,pageSize:10,totalNum:0,checkAll:!1,targetData:{},selectedRowKeys:[],actionVisible:!1},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),r(n,[{key:"componentDidMount",value:function(){this.getList()}},{key:"render",value:function(){return e.createElement(l.default,{that:this})}}]),n}();t.default=s}).call(this,n(1))}}]);