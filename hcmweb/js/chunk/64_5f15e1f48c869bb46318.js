(window.webpackJsonp=window.webpackJsonp||[]).push([[64,80,291],{1157:function(e,t){},1158:function(e,t){},1160:function(e,t){},1164:function(e,t){},1165:function(e,t){},1166:function(e,t){},1176:function(e,t){},25:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(54));a(53);var r=o(a(28));function o(e){return e&&e.__esModule?e:{default:e}}a(1157);var l=function(t){return e.createElement("div",{className:"layout-wrapper "+(t.className||"")},e.createElement("div",{className:"header-wrapper"},e.createElement(n.default,{className:"breadcrumb"},t.breadcrumbList.map(function(a,r){return""===t.linkList[r]?e.createElement(n.default.Item,{key:a},a):e.createElement(n.default.Item,{href:"javascript:;",key:a},e.createElement("span",{onClick:function(){t.history.go(-t.linkList[r])}},a))}))),e.createElement("div",{className:"layout-content"},t.children),e.createElement("div",{className:"copyright"},e.createElement(r.default,null)))};l.defaultProps={title:"标题",breadcrumbList:[],linkList:[]},t.default=l}).call(this,a(1))},28:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var n=function(t){function n(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),a(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),n}();t.default=n}).call(this,a(1))},433:function(e,t){},544:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0});var r=m(a(14)),o=m(a(27)),l=m(a(204)),i=m(a(48)),s=m(a(30)),u=m(a(24)),d=m(a(397));a(18),a(26),a(203),a(47),a(31),a(23),a(396),a(781);var p=m(a(17)),c=m(a(25));function m(e){return e&&e.__esModule?e:{default:e}}d.default.Step;var f=u.default.Item,h=s.default.Option,_=i.default.RangePicker,v=(l.default.SHOW_PARENT,[]),E=[],y=(0,p.default)(function(t){var a=t.props.form.getFieldDecorator,d=[];return d.push(t.state.Brrby),e.createElement(c.default,{breadcrumbList:["客户盘点","客户信息","编辑"],linkList:["","1",""],history:t.props.history},e.createElement("div",{className:"CustomerEditor"},e.createElement("div",{className:"CustomerEditorBOX"},e.createElement(u.default,{onSubmit:t.ForgetSubmit,className:"forget-form",style:{marginLeft:"20px",width:"400px"}},e.createElement("div",{className:"FORMtit"},e.createElement("div",{className:t.state.USERS,style:{float:"right"}},e.createElement("img",{src:t.state.IMGS,style:{float:"left",marginRight:"10px",marginTop:"7px"}})," ",e.createElement("b",{style:{lineHeight:"32px",float:"left"}},t.state.IMGStxt)," ")),e.createElement("div",{className:"FORMtit"}," ",e.createElement("div",{className:"FORMus"},"客户名称："),"APPLYING"==t.state.apply_statuS?e.createElement(f,{className:"tops"},a("CustomerName",{initialValue:t.state.dealername||""})(e.createElement(o.default,{className:"user-name",maxLength:"50",disabled:!0}))):e.createElement(f,{className:"tops"},a("CustomerName",{initialValue:t.state.dealername||""})(e.createElement(o.default,{className:"user-name",maxLength:"50"})))),e.createElement("div",{className:"FORMtit"}," ",e.createElement("div",{className:"FORMus"},"备注名称："),e.createElement(f,{className:"tops"},a("NameOfNote",{initialValue:t.state.dutynumber||""})(e.createElement(o.default,{className:"user-name",maxLength:"50"})))),t.state.treeData?e.createElement("div",{id:"areaxb",className:"FORMtit",style:{position:"relative"}}," ",e.createElement("div",{className:"FORMus"},"直属上级："),e.createElement(f,{className:"tops"},a("Subordinate",{initialValue:t.state.subordinate})(e.createElement(l.default,{getPopupContainer:function(){return document.getElementById("areaxb")},style:{width:320},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:t.state.treeData,placeholder:"请选择部门人员",treeDefaultExpandAll:!0,onChange:t.onChangeSubor})))):e.createElement("div",{className:"FORMtit"}," ",e.createElement("div",{className:"FORMus"},"直属上级："),e.createElement(f,{className:"tops"},"请在账号管理中添加直属上级 ")," "),e.createElement("div",{className:"FORMtit"},e.createElement("div",{className:"FORMus"},"授权期限："),e.createElement(f,{className:"tops"},a("approve_start",{initialValue:t.state.approve_start?[n(t.state.approve_start),n(t.state.approve_end)]:[n(),n()]})(e.createElement(_,{className:"user-name",style:{display:"inline-block",width:"320px"},onChange:t.onChange})))),e.createElement("div",{className:"FORMtit"}," ",e.createElement("div",{className:"FORMus"},"授权编码："),e.createElement(f,{className:"tops"},a("authorize_num",{initialValue:t.state.authorize_num||""})(e.createElement(o.default,{className:"user-name",maxLength:"50"})))),e.createElement("div",{className:"FORMtit"},e.createElement("div",{className:"FORMus"},"审批日期："),e.createElement(f,{className:"tops"},a("approve_date",{initialValue:t.state.approve_date?n(t.state.approve_date):n()})(e.createElement(i.default,{className:"user-name",style:{display:"inline-block",width:"320px"},onChange:t.onChangeX})))),t.state.Array?e.createElement("div",null,t.state.Array.map(function(n,r){return e.createElement("div",{key:r},d?e.createElement("div",null,d.map(function(r,l){return e.createElement("div",{key:l},"TEXT"==n.fieldtype?e.createElement("div",{className:"FORMtit",style:{marginTop:"10px"}},e.createElement("div",{className:"FORMus"},n.fieldname,"："),e.createElement(f,{className:"tops"},a(n.fieldvalue,{initialValue:r[n.fieldvalue]})(e.createElement(o.default,{className:"user-name",maxLength:"50",placeholder:n.prompt?n.prompt:"请输入内容"})))):"MULTISELECT"==n.fieldtype?e.createElement("div",{id:"areaxbn",className:"FORMtit",style:{marginTop:"20px",position:"relative"}},e.createElement("div",{className:"FORMus"},n.fieldname,"："),n.opotion.split(",")?e.createElement(f,{className:"tops"},a(n.fieldvalue,{initialValue:r[n.fieldvalue]})(e.createElement(s.default,{getPopupContainer:function(){return document.getElementById("areaxbn")},mode:"multiple",style:{width:"100%"},placeholder:n.prompt?n.prompt:"请选择内容",onChange:t.handle},n.opotion.split(",").map(function(t,a){return e.createElement(h,{key:a,value:t},t)})))):e.createElement(f,{className:"tops"},a(n.fieldvalue,{initialValue:r[n.fieldvalue]})(e.createElement(s.default,{getPopupContainer:function(){return document.getElementById("areaxbn")},mode:"multiple",style:{width:"100%"},placeholder:n.prompt?n.prompt:"请选择内容",onChange:t.handle},v)))):"Single"==n.fieldtype?e.createElement("div",{className:"FORMtit",style:{marginTop:"20px"}},e.createElement("div",{className:"FORMus"},n.fieldname,"："),e.createElement(f,{className:"tops"},a(n.fieldvalue,{initialValue:r[n.fieldvalue]})(e.createElement("textarea",{className:"user-name",placeholder:n.prompt?n.prompt:"请输入内容",maxLength:"100",style:{width:"320px",height:"60px"}})))):e.createElement("div",{id:"areax",className:"FORMtit",style:{marginTop:"20px",position:"relative"}},e.createElement("div",{className:"FORMus"},n.fieldname,"："),n.opotion.split(",")?e.createElement(f,{className:"tops"},a(n.fieldvalue,{initialValue:r[n.fieldvalue]})(e.createElement(s.default,{style:{width:"100%"},placeholder:n.prompt?n.prompt:"请选择内容",onChange:t.handle,getPopupContainer:function(){return document.getElementById("areax")}},n.opotion.split(",").map(function(t,a){return e.createElement(h,{key:a,value:t},t)})))):e.createElement(f,{className:"tops"},a(n.fieldvalue,{initialValue:"请选择"})(e.createElement(s.default,{getPopupContainer:function(){return document.getElementById("areax")},style:{width:"100%"},placeholder:n.prompt?n.prompt:"请选择内容",onChange:t.handle},E)))))})):null)})):null,e.createElement("div",{className:"FORMtit",style:{marginTop:"20px",marginBottom:"20px"}},e.createElement(r.default,{className:"btn2-main",htmlType:"submit",onClick:function(){return t.SuccessBTN()},style:{marginLeft:150}},"确认"),e.createElement(r.default,{className:"ErrorBTN",onClick:function(){return t.ErrorBTN()},style:{marginLeft:10}},"取消"))))))});t.default=y}).call(this,a(1),a(10))},765:function(e,t){},769:function(e,t){},781:function(e,t){},858:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(24)),o=u(a(15)),l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(23),a(16);var i=u(a(544)),s=u(a(12));function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}var p=function(t){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.createJson=function(e,t,a){void 0===t?delete a[e]:a[e]=t},t.lolo=function(e){e.children.forEach(function(e,a){"dept"===e.type?(t.createJson("disabled",!0,e),null!=e.children&&t.lolo(e)):"user"===e.type&&t.createJson("disabled",!1,e)})},t.Subordinate=function(){s.default.post("/hcm/userout/getUserTreeByDepartId").then(function(e){1e4==e.data.status&&(e.data.data.forEach(function(e,a){"dept"===e.type?(t.createJson("disabled",!0,e),null!=e.children&&t.lolo(e)):"user"===e.type&&t.createJson("disabled",!1,e)}),console.log(e.data.data,"21"),t.setState({treeData:e.data.data,treetitle:e.data.data.length?e.data.data[0].title:null}))})},t.onChangeSubor=function(e){t.setState({value:e})},t.component=function(){s.default.post("/hcm/dealer/update_page",{id:t.props.match.params.id}).then(function(e){if(console.log(e,"123"),null!=e.data.data||null!=e.data.data){var a=e.data.data,n=(a.brand_take_people,a.contact,a.dealer_id,a.dealername,a.dutynumber,a.id,a.status,a.status_info,a.take_people,a.bmcid,d(a,["brand_take_people","contact","dealer_id","dealername","dutynumber","id","status","status_info","take_people","bmcid"]));t.setState({subordinate:e.data.data.brand_take_people,dealername:e.data.data.dealername,dutynumber:e.data.data.memo_dealername,approve_start:e.data.data.authorize_start,approve_end:e.data.data.authorize_end,approve_date:e.data.data.approve_date,authorize_num:e.data.data.authorize_num,Brrby:n}),"APPLYING"==e.data.data.apply_status||"DISAGREE"==e.data.data.apply_status?t.setState({IMGS:"../../../img/userTB.jpg",IMGStxt:"客户暂未入驻",USERS:"usersTS",apply_statuS:"APPLYING"}):"CON_EXPIRE"==e.data.data.status_info.info_type?t.setState({IMGS:"../../../img/userTB.jpg",IMGStxt:e.data.data.status_info.title,USERS:"usersBS",apply_statuS:"APPLYING"}):"WAIT_APPROVE"==e.data.data.status_info.info_type?t.setState({IMGS:"../../../img/userTB.jpg",IMGStxt:e.data.data.status_info.info,USERS:"usersBS",apply_statuS:"APPLYING"}):"UN_INVITED"==e.data.data.status_info.info_type?t.setState({IMGS:"../../../img/icon_Login_prompt_failure.png",IMGStxt:e.data.data.status_info.info,USERS:"usersBS",apply_statuS:"APPLYING"}):"WRONG_NAME"==e.data.data.status_info.info_type?t.setState({IMGS:"../../../img/icon_Login_prompt_failure.png",IMGStxt:e.data.data.status_info.info,USERS:"usersBS",apply_statuS:"WRONG_NAME",WRONG_NAME:!1}):t.setState({IMGS:"../../../img/userBS.jpg",IMGStxt:"客户成功入驻",USERS:"usersBS",apply_statuS:"APPLYING"})}})},t.component_list=function(){s.default.post("/hcm/hcmCustomModel/getBybmcidAndModule",{module:"DEALER",fieldSource:2}).then(function(e){console.log(e,"12");t.setState({Array:e.data.data.add.data})})},t.handle=function(e){},t.iptChange=function(e,a){var n=t.state.Array,r=(n.CustomerName,n.NameOfNote,n.approve_start,n.approve_date,n.AuthorizedContent,n.Applicant,d(n,["CustomerName","NameOfNote","approve_start","approve_date","AuthorizedContent","Applicant"]));t.setState({addField:r});var o=t.state.addField;o[a]=e.target.value,t.setState({addField:o})},t.add0=function(e){return e<10?"0"+e:e},t.format=function(e){var a=new Date(e),n=a.getFullYear(),r=a.getMonth()+1,o=a.getDate()+1,l=a.getHours()+1,i=a.getMinutes()+1,s=a.getSeconds()+1;return n+"-"+t.add0(r)+"-"+t.add0(o)+" "+t.add0(l)+":"+t.add0(i)+":"+t.add0(s)},t.ForgetSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){a.CustomerName,a.NameOfNote,a.approve_start,a.approve_date,a.AuthorizedContent,a.authorize_num,a.Subordinate,a.Applicant;var r=d(a,["CustomerName","NameOfNote","approve_start","approve_date","AuthorizedContent","authorize_num","Subordinate","Applicant"]);e||(console.log(a),null!=t.state.approve_start&&""!=t.state.approve_start?null!=a.approve_start&&""!=a.approve_start&&null!=a.approve_start?null!=t.state.approve_date&&""!=t.state.approve_date?(console.log(r),s.default.post("/hcm/dealer/update",{module:"DEALER",fieldSource:2,dealername:a.CustomerName,id:t.props.match.params.id,memoDealername:a.NameOfNote,authorizeStart:n(t.state.approve_start).format("YYYY-MM-DD"),authorizeEnd:n(t.state.approve_end).format("YYYY-MM-DD"),authorizeNum:a.authorize_num,brandTakePeople:a.Subordinate,approveDate:n(t.state.approve_date).format("YYYY-MM-DD HH:mm:ss"),addField:JSON.stringify(r)}).then(function(e){1e4==e.data.status?window.location="/index.html#/ClientCheck":(e.data.status,o.default.error(e.data.message))})):(console.log(t.state.approve_date,"3"),s.default.post("/hcm/dealer/update",{module:"DEALER",fieldSource:2,dealername:a.CustomerName,id:t.props.match.params.id,memoDealername:a.NameOfNote,authorizeStart:n(t.state.approve_start).format("YYYY-MM-DD"),authorizeEnd:n(t.state.approve_end).format("YYYY-MM-DD"),authorizeNum:a.authorize_num,brandTakePeople:a.Subordinate,approveDate:n(Date.now()._i).format("YYYY-MM-DD HH:mm:ss"),addField:JSON.stringify(r)}).then(function(e){1e4==e.data.status?window.location="/index.html#/ClientCheck":(e.data.status,o.default.error(e.data.message))})):o.default.error("请选择授权期限！"):null!=a.approve_start&&""!=a.approve_start&&null!=a.approve_start?null!=t.state.approve_date&&""!=t.state.approve_date?(console.log(t.state.approve_date,"1"),s.default.post("/hcm/dealer/update",{module:"DEALER",fieldSource:2,dealername:a.CustomerName,id:t.props.match.params.id,memoDealername:a.NameOfNote,authorizeStart:n(Date.now()._i).format("YYYY-MM-DD"),authorizeEnd:n(Date.now()._i).format("YYYY-MM-DD"),authorizeNum:a.authorize_num,brandTakePeople:a.Subordinate,approveDate:n(t.state.approve_date).format("YYYY-MM-DD HH:mm:ss"),addField:JSON.stringify(r)}).then(function(e){1e4==e.data.status?window.location="/index.html#/ClientCheck":o.default.error(e.data.message)})):(console.log(t.state.approve_date,"2"),s.default.post("/hcm/dealer/update",{module:"DEALER",fieldSource:2,dealername:a.CustomerName,id:t.props.match.params.id,memoDealername:a.NameOfNote,authorizeStart:n(Date.now()._i).format("YYYY-MM-DD"),authorizeEnd:n(Date.now()._i).format("YYYY-MM-DD"),authorizeNum:a.authorize_num,brandTakePeople:a.Subordinate,approveDate:n(Date.now()._i).format("YYYY-MM-DD HH:mm:ss"),addField:JSON.stringify(r)}).then(function(e){1e4==e.data.status?window.location="/index.html#/ClientCheck":o.default.error(e.data.message)})):o.default.error("请选择授权期限！"))})},t.SuccessBTN=function(){},t.ErrorBTN=function(){window.location="/index.html#/ClientCheck"},t.handleChange=function(e){},t.onChange=function(e,a){t.setState({approve_end:a[1],approve_start:a[0]})},t.onChangeX=function(e,a){console.log(e._i,a),t.setState({approve_date:a+" 00:00:00"}),console.log(t.state.approve_date)};return t.state={TShow:!1,IMGS:"",IMGStxt:"",USERS:"",dealername:"",dutynumber:"",approve_start:"",approve_end:"",approve_date:"",apply_person:"",apply_content:"",subordinate:"",Array:"",Brrby:[],addField:{},authorize_num:"",value:void 0,treeData:"",apply_statuS:"",treetitle:"",treeid:"",showX:!1,WRONG_NAME:!0},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),l(a,[{key:"componentDidMount",value:function(){this.component_list(),this.component(),this.Subordinate()}},{key:"render",value:function(){return e.createElement(i.default,{that:this})}}]),a}();t.default=r.default.create()(p)}).call(this,a(1),a(10))}}]);