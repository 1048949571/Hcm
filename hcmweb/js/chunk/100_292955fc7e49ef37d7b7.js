(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1157:function(e,t){},1158:function(e,t){},1159:function(e,t){},1160:function(e,t){},1161:function(e,t){},1162:function(e,t){},1163:function(e,t){},25:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(54));a(53);var n=r(a(28));function r(e){return e&&e.__esModule?e:{default:e}}a(1157);var i=function(t){return e.createElement("div",{className:"layout-wrapper "+(t.className||"")},e.createElement("div",{className:"header-wrapper"},e.createElement(l.default,{className:"breadcrumb"},t.breadcrumbList.map(function(a,n){return""===t.linkList[n]?e.createElement(l.default.Item,{key:a},a):e.createElement(l.default.Item,{href:"javascript:;",key:a},e.createElement("span",{onClick:function(){t.history.go(-t.linkList[n])}},a))}))),e.createElement("div",{className:"layout-content"},t.children),e.createElement("div",{className:"copyright"},e.createElement(n.default,null)))};i.defaultProps={title:"标题",breadcrumbList:[],linkList:[]},t.default=i}).call(this,a(1))},28:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}();var l=function(t){function l(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,e.Component),a(l,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),l}();t.default=l}).call(this,a(1))},433:function(e,t){},543:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=d(a(35)),n=d(a(37)),r=d(a(14)),i=d(a(11)),o=d(a(27)),s=d(a(30)),c=d(a(24)),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e};a(34),a(36),a(18),a(22),a(26),a(31),a(23);var m=d(a(17)),f=d(a(25));function d(e){return e&&e.__esModule?e:{default:e}}var p=(0,m.default)(function(t){var a={fontSize:"14px",fontFamily:"PingFang-SC-Medium",color:"rgba(51,51,51,1)",lineHeight:"40px",height:"40px",marginRight:"5px",marginTop:"10px",width:"100%",float:"left"},m=t.state.FORMtitHides?" block ":"none",d={fontSize:"14px",fontFamily:"PingFang-SC-Medium",color:"rgba(51,51,51,1)",lineHeight:"40px",marginRight:"5px",marginTop:"10px",width:"100%",float:"left",display:m},p=c.default.Item,y=s.default.Option,h=t.props.form,E=h.getFieldDecorator,b=h.getFieldValue,g={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},v={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}};if(1==t.state.Editvisible){var w=t.state.bBRRay.map(function(e,t){return t});E("keys",{initialValue:w})}else E("keys",{initialValue:[]});var N=b("keys"),C=N.map(function(a,l){return e.createElement(p,u({},0===l?g:v,{label:0===l?"选项：":"",required:!1,key:a,style:{}}),E("names["+a+"]",{validateTrigger:["onChange","onBlur"]})(e.createElement(o.default,{placeholder:"",style:{width:"320px",marginRight:8}})),N.length>1?e.createElement(i.default,{className:"dynamic-delete-button",type:"minus-circle-o",disabled:1===N.length,onClick:function(){return t.remove(a)}}):null)});return document.getElementsByClassName("ant-btn-primary").style="submit",e.createElement(f.default,{title:"活动详情",breadcrumbList:["客户盘点","客户信息","自定义字段"],linkList:["","1",""],history:t.props.history},e.createElement("div",{className:"CustomFields"},e.createElement("div",{className:"CustomFieldsBOX"},e.createElement("div",{className:"CustomFieldsHeader"},e.createElement(r.default,{className:"NewJ",type:"primary",onClick:function(){return t.NewJ()}},e.createElement(i.default,{type:"plus",style:{fontWeight:"700",fontSize:"14px"}}),"新增")),e.createElement("div",{className:"CustomFieldsBody"},e.createElement(n.default,{pagination:!1,rowKey:"id",columns:t.state.CustomFields_list,dataSource:t.state.data,loading:t.state.loading,onChange:t.handleTableChange}))),e.createElement(l.default,{maskClosable:!1,title:t.state.type,visible:t.state.visible,footer:null,confirmLoading:t.state.confirmLoading,onCancel:function(){return t.handleCancel()}},e.createElement(c.default,{onSubmit:t.ForgetSubmit,className:"forget-form",style:{display:"inline-block"}},e.createElement("div",{className:"FORMtit",style:a}," ",e.createElement("div",{className:"FORMus",style:{width:"auto",float:"left"}}," ",e.createElement("b",{style:{color:"red"}},"*")," 字段名称："),e.createElement(p,{className:"tops",style:{width:"320px",height:"60px",float:"left",borderRadius:"2px"}},E("FieldName",{initialValue:t.state.FieldName||""})(e.createElement(o.default,{className:"user-name",placeholder:"请使用简短的字段名称，6字以内。"})))),e.createElement("div",{className:"FORMtit",style:a}," ",e.createElement("div",{className:"FORMus",style:{width:"auto",float:"left"}}," ",e.createElement("b",{style:{color:"#fff"}},"*")," 字段占位："),e.createElement(p,{className:"tops",style:{width:"320px",height:"60px",float:"left",borderRadius:"2px"}},E("FieldOccupancy",{initialValue:t.state.FieldOccupancy||""})(e.createElement(o.default,{className:"user-name",maxLength:"50",placeholder:"请输入字段占位"})))),e.createElement("div",{style:{marginLeft:"80px",fontSize:"14px",color:"#999"}}," 请填写字段占位，例如：“请输入姓名”"),e.createElement("div",{className:"FORMtit",style:a}," ",e.createElement("div",{className:"FORMus",style:{width:"auto",float:"left"}}," ",e.createElement("b",{style:{color:"red"}},"*")," 字段类型："),e.createElement(p,{className:"tops",style:{width:"320px",height:"60px",float:"left",borderRadius:"2px"}},E("FieldType",{initialValue:t.state.FieldType})(e.createElement(s.default,{showSearch:!0,style:{width:320},placeholder:"请选择",optionFilterProp:"children",onChange:t.handleChange,filterOption:function(e,t){return(void 0).option.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},e.createElement(y,{value:"TEXT"},"文本框"),e.createElement(y,{value:"Single"},"文本域"),e.createElement(y,{value:"SINGLESELECT"},"单选下拉框"),e.createElement(y,{value:"MULTISELECT"},"多选下拉框"))))),e.createElement("div",{className:"FORMtit",style:d},e.createElement("div",{className:"FORMus",style:{width:"auto",float:"left",marginLeft:"30px",position:"absolute"}}),C,e.createElement(p,v,e.createElement(r.default,{type:"dashed",onClick:t.add,style:{width:"320px",color:"#1890ff",borderColor:"#1890ff"}},e.createElement(i.default,{type:"plus"})))),e.createElement("div",{className:"FORMtit",style:a},e.createElement(p,{style:{float:"left",marginLeft:"54%",marginRight:"0px"}},e.createElement(r.default,{className:"btn2-main",type:"primary",htmlType:"submit"},"确认")),e.createElement(p,{style:{float:"left",width:"60px",height:"40px"}},e.createElement(r.default,{className:"btn2-sub noneFloat",onClick:function(){return t.handleCancel()}},"取消")))))))});t.default=p}).call(this,a(1))},765:function(e,t){},766:function(e,t){}}]);