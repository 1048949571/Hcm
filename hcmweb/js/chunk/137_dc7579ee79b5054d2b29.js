(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1158:function(e,t){},1160:function(e,t){},1162:function(e,t){},1176:function(e,t){},1179:function(e,t){},28:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var a=function(t){function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),n(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),a}();t.default=a}).call(this,n(1))},62:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={onVisibilityChange:function(e,t){var n="hidden"in document?"hidden":"webkitHidden"in document?"webkitHidden":"mozHidden"in document?"mozHidden":null,a=n.replace(/hidden/i,"visibilitychange"),i=function(){document[n]||console.log("页面非激活"+new Date),document[n]&&console.log("页面激活"+new Date)};document.addEventListener(a,i)},formatAccount:function(e){return e=e.replace(/[\s]/g,"").replace(/(\d{4})(?=\d)/g,"$1 ")},formatThousandMoney:function(t,n){return isNaN(t)?"":(n=n||"",!1===e.isNumeric(t)||0==t?"0.00":0==(t=(t=+t).toFixed(2))?"0.00":n+" "+(t+"").replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,"$&,"))},encryption:function(){return(""+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")).replace(/(\d{3})\d*([0-9a-zA-Z]{4})/,"$1****$2")},browser:{versions:function(){var e=navigator.userAgent,t=(navigator.appVersion,"");if(e.indexOf("Ourydc.Yuebaobao")>-1){var n=e.match(/Ourydc.Yuebaobao.*/);if(n.length>0){var a=n[0];t=a.substr(a.indexOf("/")+1)}}return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Adr")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari"),weixin:e.indexOf("MicroMessenger")>-1,weibo:"WeiBo"==e.match(/WeiBo/i)||"Weibo"==e.match(/Weibo/i)||"weibo"==e.match(/weibo/i),qq:"qq"==e.match(/qq/i)||"QQ"==e.match(/QQ/i),qqBrower:-1==e.indexOf("Mobile MQQBrowser")&&-1!=e.indexOf("MQQBrowser"),isInApp:e.indexOf("Ourydc.Yuebaobao")>-1,locAppVersion:t}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()},checkAccount:function(e){return/^[a-zA-Z](\w|\s+){5,15}$/.test(this.trim(e||""))},checkUrl:function(e){return/^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/.test(this.trim(e||""))},Reg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/^[^\u4e00-\u9fa5]{5,31}$/.test(this.trim(e||""))},checkPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/^.{6,16}$/.test(this.trim(e||""))},trim:function(e){return(e=""+e).replace(/(^\s*)|(\s*$)/g,"")},getCookie:function(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null},required:function(e){var t=this.trim(e||"");return!(!t||!t.length)},legnthCheck:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"INPUT";return this.trim(e||"").length<this.LENGTH[t]},LENGTH:{URL:500,TEXTAREA:200,INPUT:50},getQueryString:function(e){var t=new RegExp("(^|&|[?])"+e+"=([^&]*)(&|$)"),n=window.location.href.substr(1).match(t);return null!=n?n[2]:""},getParamString:function(e,t){var n=new RegExp("(^|&|[?])"+t+"=([^&]*)(&|$)"),a=e.substr(1).match(n);return null!=a?a[2]:""},Trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},deviceCheck:function(){return browser.versions.mobile?browser.versions.android?"android":browser.versions.ios?"ios":"mobile":"web"}}}).call(this,n(112))},767:function(e,t){},812:function(e,t){},842:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=y(n(180)),i=y(n(14)),r=y(n(11)),o=y(n(27)),l=y(n(54)),c=y(n(15)),s=y(n(387)),u=y(n(204)),d=y(n(30)),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(179),n(18),n(22),n(26),n(53),n(16),n(629),n(203),n(31);var m=y(n(12)),h=y(n(62)),g=y(n(28)),v=y(n(823));function y(e){return e&&e.__esModule?e:{default:e}}n(812);var b=d.default.Option,w=u.default.SHOW_ALL,E=s.default.Group,x=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleChange=function(e){t.setState({notice_content:e})},t.getCategoryList=function(){t.state.categoryList;m.default.get("/hcm/ProductClassify/list").then(function(e){if(console.log(e),"10000"==e.data.status&&e.data.data){var n=e.data.data;t.setState({categoryList:n})}}).catch(function(e){c.default.error(e.statusText)})},t.categoryListChange=function(e){console.log("selected "+e),t.setState({categoryListID:e})},t.getDepartmentList=function(){m.default.get("/hcm/department/fuByIds",{params:{id:0}}).then(function(e){if("10000"==e.data.status&&e.data.data){var n=e.data.data,a=t.state.departmentList;a=[{title:"全部",value:"all",key:"all",children:function e(t){return t.map(function(t,n){return null!=t.subSysDepartment?{title:t.departName,value:""+t.id,key:""+t.id,children:e(t.subSysDepartment)}:{title:t.departName,value:""+t.id,key:""+t.id}})}(n)}],t.setState({departmentList:a})}}).catch(function(e){c.default.error(e.statusText)})},t.chTreeSelect=function(e,n,a,i){var r=t.state;if("receive_departids"==i)if("all"===a.triggerValue)r[i]=a.checked?t.checkAll():[];else{var o=e.filter(function(e,t){return"all"==e.value});e.length==t.checkAll().length-1&&0==o.length?r[i]=t.checkAll():(o.length&&e.splice(0,1),r[i]=e)}else r[i]=e;t.setState(r)},t.onSubmit=function(){var e=t.state,n=e.releasetypevalue,a=e.categoryListID,i=e.notice_title,r=e.receive_departids,o=e.notice_type,l=e.notice_content,s=e.fileList;if(console.log(a),console.log(a),i&&0!=i.length)if(h.default.legnthCheck(i.trim(),"INPUT"))if(o)if(0!=a.length||0!=r.length){var u=document.createElement("div");u.innerHTML=l,null!=l&&0!=u.innerText.length?(LoadingModal({bl:!0,text:"提交中,请稍后..."}),-1!==r.findIndex(function(e){return"all"==e.value})&&r.splice(r.findIndex(function(e){return"all"==e.value}),1),m.default.post("/hcm/notice/Create",{notice_title:i,receive_departids:n?null:r.map(function(e,t){return e.value}).join(","),notice_type:o,notice_content:l,attach_urls:JSON.stringify(s),notice_send_type:n,receive_classifyids:n?a.join(","):null}).then(function(e){LoadingModal({bl:!1}),"10000"==e.data.status?(c.default.success("成功"),t.setState({fileList:[],receive_departids:[],notice_title:null,notice_type:null,notice_content:null,categoryListID:[]},function(){window.location.href="/index.html#/Announcements"})):c.default.error(e.data.message)}).catch(function(e){c.default.error(e.statusText),LoadingModal({bl:!1})})):c.default.error("请输入内容")}else c.default.error("请选择接收部门或品类");else c.default.error("请选择类型");else c.default.error("公告主题字符长度不能超过50");else c.default.error("请输入公告主题")},t.upChange=function(e){var n=e.fileList;t.beforeUpload(e.file,!1)&&t.setState({fileList:n})},t.beforeUpload=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.name,a=n.lastIndexOf("."),i=n.substr(a+1);return-1!==".rar .zip .doc .docx .xls .xlsx .ppt .pptx .pdf .jpg .png".indexOf(i)||(t&&c.default.error("暂不支持"+n+"文件格式"),!1)},t.releasetype=function(e){t.setState({releasetypevalue:e.target.value,receive_departids:[],categoryListID:[]})},t.state={dataList:[],noticeTypeList:[],departmentList:[],fileList:[],receive_departids:[],notice_title:null,notice_type:null,notice_content:null,releasetypevalue:0,categoryList:[],categoryListID:[]},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),p(n,[{key:"componentDidMount",value:function(){this.getNoticeTypeList(),this.getDepartmentList(),this.getCategoryList()}},{key:"getNoticeTypeList",value:function(){var e=this;m.default.get("/hcm/sys/GetList",{params:{dictcode:"notice_type"}}).then(function(t){e.setState({noticeTypeList:t.data.data})}).catch(function(e){c.default.error(e.statusText)})}},{key:"checkAll",value:function(){var e=this.state.departmentList,t=[];return function e(n){n.forEach(function(n,a){var i=n.title,r=n.value;t.push({label:i,value:r}),n.children&&e(n.children)})}(e),console.log(t),t}},{key:"render",value:function(){var t=this,n=this.state,c=n.categoryList,p=n.noticeTypeList,m=n.departmentList,h=n.notice_title,y=n.receive_departids,x=n.notice_type,_=n.notice_content,O=n.fileList,L=n.releasetypevalue,k=c.map(function(t,n){return e.createElement(b,{key:t.id},t.productClassifyName)}),N={contentFormat:"html",media:{allowPasteImage:!1,image:!1,video:!1,audio:!1},placeholder:"请输入公告内容",onChange:this.handleChange,initialContent:_,controls:["undo","redo","split","font-size","font-family","line-height","letter-spacing","indent","text-color","bold","italic","underline","strike-through","superscript","subscript","remove-styles","emoji","text-align","split","list_ul","list_ol","blockquote","code","split","link","split","clear"]},C={action:"/hcm/hcmWorkOrder/headUpload",onChange:this.upChange,beforeUpload:this.beforeUpload,multiple:!0};return e.createElement("div",{className:"add-announcements"},e.createElement("div",{className:"Breadcrumb"},e.createElement(l.default,null,e.createElement(l.default.Item,null,e.createElement("a",{href:"/index.html#/Announcements"},"通知公告")),e.createElement(l.default.Item,null,"新增公告"))),e.createElement("div",{className:"content"},e.createElement("ul",{className:"items"},e.createElement("li",{className:"item"},e.createElement("span",{className:"title red-ck"},"公告主题"),e.createElement("div",{className:"ipt-box"},e.createElement(o.default,{onChange:function(e){t.setState({notice_title:e.target.value})},value:h,placeholder:"请输入"}))),e.createElement("li",{className:"item"},e.createElement("span",{className:"title red-ck"},"公告类型"),e.createElement("div",{style:{position:"relative"},id:"alert-type",className:"ipt-box"},e.createElement(d.default,{style:{width:"100%"},showSearch:!0,placeholder:"请选择",getPopupContainer:function(){return document.getElementById("alert-type")},value:x||void 0,onChange:function(e,n,a){return t.chTreeSelect(e,n,a,"notice_type")},filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},p.map(function(t,n){return e.createElement(b,{key:n,value:t.id},t.dictName)})))),e.createElement("li",{className:"item"},e.createElement("span",{className:"title red-ck"},"发布方式"),e.createElement("div",{style:{position:"relative"},id:"department",className:"ipt-box"},e.createElement(E,{onChange:this.releasetype,value:L},e.createElement(s.default,{value:0},"按部门发布"),e.createElement(s.default,{value:1},"按品类发布")))),e.createElement("li",{className:"item"},e.createElement("span",{className:"title red-ck"},L?"接收品类":"接收部门"),e.createElement("div",{style:{position:"relative"},id:"department",className:"ipt-box"},L?e.createElement(d.default,{mode:"multiple",style:{width:"100%"},placeholder:"请选择",onChange:this.categoryListChange},k):e.createElement(u.default,{allowClear:!0,multiple:!0,showSearch:!0,getPopupContainer:function(){return document.getElementById("department")},treeCheckStrictly:!0,placeholder:"请选择",treeCheckable:!0,showCheckedStrategy:w,treeDefaultExpandedKeys:["all"],style:{width:"100%"},dropdownStyle:{maxHeight:300,overflow:"auto"},value:y,treeData:m,onChange:function(e,n,a){return t.chTreeSelect(e,n,a,"receive_departids")}}))),e.createElement("li",{style:{width:"100%",alignItems:"end"},className:"item"},e.createElement("span",{className:"title red-ck"},"公告内容"),e.createElement("div",{style:{width:"80%",border:"1px solid #e5e5e5",borderRadius:"2px"},className:"ipt-box"},e.createElement(v.default,f({ref:function(e){return t.editorInstance=e}},N)))),e.createElement("li",{style:{width:"100%",alignItems:"end"},className:"item"},e.createElement("span",{style:{paddingTop:"8px"},className:"title"},"上传附件"),e.createElement("div",{className:"ipt-box"},e.createElement(a.default,f({},C,{fileList:O}),e.createElement(i.default,null,e.createElement(r.default,{type:"upload"})," 选择文件"),e.createElement("span",null,"支持扩展名：.rar .zip .doc .docx .xls .xlsx .ppt .pptx .pdf .jpg .png")))),e.createElement("li",{className:"item"},e.createElement("span",{className:"title"}),e.createElement("div",{className:"ipt-box"},e.createElement(i.default,{className:"upsure",onClick:function(){return t.onSubmit()}},"提交"),e.createElement("a",{href:"/index.html#/Announcements"},e.createElement(i.default,null,"取消")))))),e.createElement(g.default,{clazzName:"copyright"}))}}]),n}();t.default=x}).call(this,n(1))}}]);