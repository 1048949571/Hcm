(window.webpackJsonp=window.webpackJsonp||[]).push([[19,325],{113:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}();t.AddIcon=function(t){function l(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,e.Component),a(l,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props,a=t.style,l=t.className;return e.createElement("img",{className:l,style:a,src:"../../../../img/icon/add2.png"})}}]),l}()}).call(this,a(1))},1157:function(e,t){},1158:function(e,t){},120:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{width:"20px",height:"20px"};return{TB:e.createElement("img",{style:a,src:"../../../../img/platform/1_taobao.svg"}),TM:e.createElement("img",{style:a,src:"../../../../img/platform/2_tall.svg"}),JD:e.createElement("img",{style:a,src:"../../../../img/platform/3_jd.svg"}),SN:e.createElement("img",{style:a,src:"../../../../img/platform/4_suning.svg"}),GM:e.createElement("img",{style:a,src:"../../../../img/platform/5_gome.svg"}),PDD:e.createElement("img",{style:a,src:"../../../../img/platform/6_pinduoduo.svg"}),AMAZON:e.createElement("img",{style:a,src:"../../../../img/platform/7_a.svg"}),WPH:e.createElement("img",{style:a,src:"../../../../img/platform/8_weipinhui.svg"}),1688:e.createElement("img",{style:a,src:"../../../../img/platform/9_1688.svg"}),SMT:e.createElement("img",{style:a,src:"../../../../img/platform/10_sumaitong.svg"}),DD:e.createElement("img",{style:a,src:"../../../../img/platform/11_dangdang.svg"}),ALST:e.createElement("img",{style:a,src:"../../../../img/platform/12_lingshoutong.svg"}),"1HD":e.createElement("img",{style:a,src:"../../../../img/platform/13_1haodian.svg"}),YJWD:e.createElement("img",{style:a,src:"../../../../img/platform/14_yunji.svg"}),YLW:e.createElement("img",{style:a,src:"../../../../img/platform/15_youle.svg"}),XY:e.createElement("img",{style:a,src:"../../../../img/platform/16_xainyu.svg"}),WECD:e.createElement("img",{style:a,src:"../../../../img/platform/17_weixin.svg"}),MGJ:e.createElement("img",{style:a,src:"../../../../img/platform/18_mogujie.svg"}),JMYP:e.createElement("img",{style:a,src:"../../../../img/platform/19_jumei.svg"}),CCJ:e.createElement("img",{style:a,src:"../../../../img/platform/20_chuchujie.svg"}),BBWG:e.createElement("img",{style:a,src:"../../../../img/platform/21_beibeiwang.svg"}),platform_OTHER:e.createElement("img",{style:a,src:"../../../../img/platform/22_qita.svg"})}[t]}}).call(this,a(1))},25:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(54));a(53);var n=r(a(28));function r(e){return e&&e.__esModule?e:{default:e}}a(1157);var i=function(t){return e.createElement("div",{className:"layout-wrapper "+(t.className||"")},e.createElement("div",{className:"header-wrapper"},e.createElement(l.default,{className:"breadcrumb"},t.breadcrumbList.map(function(a,n){return""===t.linkList[n]?e.createElement(l.default.Item,{key:a},a):e.createElement(l.default.Item,{href:"javascript:;",key:a},e.createElement("span",{onClick:function(){t.history.go(-t.linkList[n])}},a))}))),e.createElement("div",{className:"layout-content"},t.children),e.createElement("div",{className:"copyright"},e.createElement(n.default,null)))};i.defaultProps={title:"标题",breadcrumbList:[],linkList:[]},t.default=i}).call(this,a(1))},28:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}();var l=function(t){function l(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,e.Component),a(l,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),l}();t.default=l}).call(this,a(1))},433:function(e,t){},642:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=m(a(35)),n=m(a(14)),r=m(a(27)),i=m(a(24)),o=m(a(30));a(34),a(18),a(26),a(23),a(31),a(819);var s=m(a(17)),c=m(a(25));a(113),m(a(120));function m(e){return e&&e.__esModule?e:{default:e}}var u=(0,s.default)(function(t){var a=o.default.Option,s=i.default.Item,m=t.props.form.getFieldDecorator,u=r.default.Search,f={display:t.state.WangWAN?"block":"none",float:"left",marginLeft:"26px"},p=t.props.brandList.filter(function(e){return"APPROVED"===e.apply_status}),d=p?p.map(function(t,l){return e.createElement(a,{key:t.bmcid},t.companyname)}):"";return e.createElement(c.default,{breadcrumbList:["店铺档案"],linkList:[""],history:t.props.history},e.createElement("div",{className:"StoreManagement"},e.createElement("div",{className:"StoreManagementBOX"},e.createElement("div",{className:"StoreManagementtit"},e.createElement("div",{className:"DIV",style:{height:"40px"}},e.createElement(u,{className:"SEAR",placeholder:"请输入店铺或旺旺名",onSearch:function(e){return t.SearchFun(e)},style:{width:215,fontSize:"12px"}}))),""!=t.state.StoreManagement_list&&null!=t.state.StoreManagement_list?e.createElement("div",{className:"StoreManagementTXT"},e.createElement("ul",null,t.state.StoreManagement_list.map(function(t,a){return e.createElement("li",{key:a,className:"StoreManagementLI"},e.createElement("h6",null,t.shop_name,e.createElement("span",null,t.wangwang)),e.createElement("div",null,e.createElement("span",{style:{paddingRight:"20%"}},"平台：",t.platform_name),e.createElement("span",null,"店铺首页地址："),e.createElement("a",{href:t.shop_url},t.shop_url)))}))):e.createElement("div",{className:"StoreManagementTXT",style:{background:"#fff",textAlign:"center"}},"暂无数据"),e.createElement(l.default,{title:t.state.type,visible:t.state.visible,footer:null,maskClosable:!1,confirmLoading:t.state.confirmLoading,onCancel:function(){return t.handleCancel()}},e.createElement(i.default,{onSubmit:t.ForgetSubmit,className:"forget-form",style:{display:"inline-block",width:"100%",paddingLeft:20}},t.state.StoreManagement?e.createElement("div",{className:"FORMtit",style:{float:"left",marginLeft:"56px"}}," ",e.createElement("div",{className:"FORMus",style:{width:"auto",float:"left",lineHeight:"40px"}}," ",e.createElement("b",{style:{fontSize:"14px",color:"red"}},"*")," ",e.createElement("b",null,"平台：")),e.createElement(s,{className:"tops",style:{width:"320px",height:"40px",float:"left",borderRadius:"2px"}},m("FieldName",{initialValue:{key:t.state.FieldID,label:t.state.FieldName}})(e.createElement(o.default,{labelInValue:!0,showSearch:!0,initialValue:{key:"lucy",value:"a"},style:{width:320},placeholder:"请选择平台",optionFilterProp:"children",onChange:t.handleChange,filterOption:function(e,t){return(void 0).option.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},t.state.childrenx)))):null,e.createElement("div",{className:"FORMtit",style:{float:"left",marginLeft:"26px"}}," ",e.createElement("div",{className:"FORMus",style:{width:"auto",float:"left",lineHeight:"40px"}},e.createElement("b",{style:{fontSize:"14px",color:"red"}},"*")," ",e.createElement("b",null,"店铺名称：")),e.createElement(s,{className:"tops",style:{width:"320px",height:"40px",float:"left",borderRadius:"2px"}},m("shop_name",{initialValue:t.state.shop_name||""})(e.createElement(r.default,{className:"user-name",maxLength:"50",placeholder:"请输入店铺名称"})))),e.createElement("div",{className:"FORMtit",style:f},e.createElement("div",{className:"FORMus",style:{width:"auto",float:"left",lineHeight:"40px"}},e.createElement("b",{style:{fontSize:"14px",color:"red"}},"*")," ",e.createElement("b",null,"旺旺名称：")),e.createElement(s,{className:"tops",style:{width:"320px",height:"40px",float:"left",borderRadius:"2px"}},m("wangwang",{initialValue:t.state.wangwang||""})(e.createElement(r.default,{className:"user-name",maxLength:"50",placeholder:"请输入旺旺名称"})))),e.createElement("div",{className:"FORMtit",style:{float:"left"}}," ",e.createElement("div",{className:"FORMus",style:{width:"auto",float:"left",lineHeight:"40px"}},e.createElement("b",{style:{fontSize:"14px",color:"red"}},"*")," ",e.createElement("b",null,"店铺首页地址：")),e.createElement(s,{className:"tops",style:{width:"320px",height:"40px",float:"left",borderRadius:"2px"}},m("shop_url",{initialValue:t.state.shop_url||""})(e.createElement(r.default,{className:"user-name",maxLength:"500",placeholder:"请输入店铺地址"})))),e.createElement("div",{className:"FORMtit",style:{float:"left",marginLeft:"26px"}}," ",e.createElement("div",{className:"FORMus",style:{width:"auto",float:"left",lineHeight:"40px"}},e.createElement("b",{style:{fontSize:"14px",color:"red"}},"*")," ",e.createElement("b",null,"店铺类型：")),e.createElement(s,{className:"tops",style:{width:"320px",height:"40px",float:"left",borderRadius:"2px"}},m("shop_type",{initialValue:t.state.shop_type||""})(e.createElement(o.default,{showSearch:!0,style:{width:320},placeholder:"请选择店铺类型",optionFilterProp:"children",filterOption:function(e,t){return(void 0).option.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},e.createElement(a,{value:"自营店铺"},"自营店铺"),e.createElement(a,{value:"分销店铺"},"分销店铺"))))),e.createElement("div",{className:"FORMtit",style:{float:"left",marginLeft:"15px"}}," ",e.createElement("div",{className:"FORMus",style:{width:"auto",float:"left",lineHeight:"40px"}},e.createElement("b",{style:{fontSize:"14px",color:"red"}},"*")," ",e.createElement("b",null,"授权品牌方：")),e.createElement(s,{className:"tops",style:{width:"320px",height:"40px",float:"left",borderRadius:"2px"}},m("mcids",{initialValue:t.state.bmcShopList.map(function(e,t){return e.bmcid})})(e.createElement(o.default,{mode:"multiple",style:{width:"100%"},placeholder:"请选择授权品牌方",onChange:t.handleChangesx,onFocus:t.onFocusChang},d)))),e.createElement("div",{className:"FORMtit ",style:{float:"left",width:"100%",textAlign:"right",paddingRight:"22px"}},e.createElement(n.default,{className:"btn2-main",style:{marginRight:"20px"},htmlType:"submit"},"确认"),e.createElement(n.default,{className:"btn2-sub",onClick:function(){return t.handleCancel()}},"取消")))))))});t.default=u}).call(this,a(1))},765:function(e,t){},766:function(e,t){},819:function(e,t){}}]);