(window.webpackJsonp=window.webpackJsonp||[]).push([[113,125],{1157:function(e,t){},1158:function(e,t){},1167:function(e,t){},1168:function(e,t){},1170:function(e,t){},1175:function(e,t){},25:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(54));a(53);var r=l(a(28));function l(e){return e&&e.__esModule?e:{default:e}}a(1157);var c=function(t){return e.createElement("div",{className:"layout-wrapper "+(t.className||"")},e.createElement("div",{className:"header-wrapper"},e.createElement(n.default,{className:"breadcrumb"},t.breadcrumbList.map(function(a,r){return""===t.linkList[r]?e.createElement(n.default.Item,{key:a},a):e.createElement(n.default.Item,{href:"javascript:;",key:a},e.createElement("span",{onClick:function(){t.history.go(-t.linkList[r])}},a))}))),e.createElement("div",{className:"layout-content"},t.children),e.createElement("div",{className:"copyright"},e.createElement(r.default,null)))};c.defaultProps={title:"标题",breadcrumbList:[],linkList:[]},t.default=c}).call(this,a(1))},28:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var n=function(t){function n(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),a(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),n}();t.default=n}).call(this,a(1))},433:function(e,t){},572:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=h(a(73)),r=h(a(90)),l=h(a(14)),c=h(a(236)),i=h(a(27)),o=h(a(11)),u=h(a(33)),s=h(a(32)),d=h(a(24)),p=h(a(54)),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};a(72),a(91),a(18),a(235),a(26),a(22),a(41),a(42),a(23),a(53);var f=h(a(17)),y=h(a(25)),E=(h(a(28)),h(a(10)));function h(e){return e&&e.__esModule?e:{default:e}}p.default.Item;var b=d.default.Item,_=(0,f.default)(function(t){var a=t.state,p=(a.expandPriceIndex,a.detail),f=void 0===p?{}:p,h=a.status,_=(a.selectIndex,a.cplist),v=f.shop_name,g=f.campaign_name,w=f.ping_name,x=f.start_time,k=f.end_time,N=f.createtime,O=f.campaign_desc,P=f.dealer_name,j=(0,E.default)(x),C=(0,E.default)(k),M=(0,E.default)(N),D=e.createElement("div",{className:"shop-status-wrapper"},e.createElement("h1",{className:"title"},g),e.createElement(u.default,null,e.createElement(s.default,{span:8,className:"col"},e.createElement("p",null,"店铺：",v),e.createElement("p",null,"所属客户：",P),e.createElement("p",null,"活动时间：",j.format("YYYY-MM-DD HH:mm:ss"),"  ~  ",C.format("YYYY-MM-DD HH:mm:ss"))),e.createElement(s.default,{span:8,className:"col"},e.createElement("p",null,"平台：",w),e.createElement("p",null,"申请时间：",M.format("YYYY-MM-DD HH:mm:ss")),e.createElement("p",null,"活动说明：",O)),e.createElement(s.default,{span:8,className:"col img-wrapper"},e.createElement("p",{className:"image"}),e.createElement("span",{className:"text"},h)))),I=d.default.create()(function(a){var n=a.form.getFieldDecorator,r=a.dataObj;return t._forms.splice(a.index,0,a.form),e.createElement(d.default,{onSubmit:t.handleEditSubmit.bind(t,a.id,a.index,a.campaignId)},e.createElement(u.default,null,[{label:"商品链接",required:!0,type:"text",key:"product_url"},{label:"申请标价",required:!0,type:"number",key:"apply_price"},{label:"实际成交价",required:!0,type:"number",key:"actual_price"},{label:"活动类型",required:!0,type:"text",key:"campaign_type"},{label:"赠品情况",required:!0,type:"text",key:"gift_situation"},{label:"玩法说明",required:!1,type:"text",key:"play_content"}].map(function(t){return e.createElement(s.default,{span:8,key:t.key},e.createElement(b,{label:t.label},n(t.key,{initialValue:r[t.key]||"",rules:[{required:t.required,message:"请输入"+t.label+"!"}]})("text"===t.type?e.createElement(i.default,{placeholder:"请输入",style:{width:"300px"}}):e.createElement(c.default,{placeholder:"请输入",min:0,style:{width:"300px"}}))))})),e.createElement(u.default,null,e.createElement(s.default,{span:24,style:{textAlign:"right"}},e.createElement(l.default,{type:"primary",htmlType:"submit"},"确认"),"   ",e.createElement(l.default,{onClick:t.handleReeditClick.bind(t,a.index,!1)},"取消"))))}),R=function(a){var c=a.index,i=a.campaign_id,d=a.apply_price,p=a.campaign_type,m=a.actual_price,f=a.gift_situation,y=a.play_content,E=a.price_map,h=a.product_name,b=a.product_url,_=(a.product_id,a.campaign_node),v=a.campaignExamine,g=void 0===v?{}:v,w=a.id,x=a._isShowReeditForm,k=a._isExpandPrice,N=a.startTime;return e.createElement(n.default,{className:"product-item-wrapper",title:function(a){return e.createElement("div",{className:"card-title"},e.createElement(u.default,null,e.createElement(s.default,{span:10,className:"product-info overflow-hidden"},"产品信息：",a.product_name),e.createElement(s.default,{span:10,className:"overflow-hidden"},"商品链接：",e.createElement("a",{href:a.product_url,target:"_blank"},a.product_url)),e.createElement(s.default,{span:4,style:{textAlign:"right"},onClick:t.handleExpandPrice.bind(t,a.index)},e.createElement("span",{className:"toggle"},a._isExpandPrice?"收起":"展开","参考价格",e.createElement(o.default,{type:a._isExpandPrice?"up":"down"})))))}({index:c,product_name:h,product_url:b,_isExpandPrice:k}),key:w},k?e.createElement(e.Fragment,null,e.createElement("div",{className:"top"},e.createElement(u.default,{className:"row"},Object.entries(E).map(function(t){return e.createElement(s.default,{span:8,key:t[0],className:"col"},t[0],"：¥",t[1])}))),e.createElement(r.default,{dashed:!0})):null,e.createElement("div",{className:"bottom"},"待审核"===_?e.createElement(u.default,{className:"row waitReview"},e.createElement(s.default,{span:8},"申请标价：¥",d),e.createElement(s.default,{span:8},"活动类型：",p),e.createElement(s.default,{span:8},"赠品情况：",f),e.createElement(s.default,{span:8},"实际成交价：¥",m),e.createElement(s.default,{span:8},"玩法说明：",y)):x?e.createElement(I,{id:w,index:c,campaignId:i,dataObj:{product_url:b,apply_price:d,actual_price:m,campaign_type:p,play_content:y,gift_situation:f}}):e.createElement(u.default,{className:"row reviewed"},e.createElement(s.default,{span:7},e.createElement("p",null,"申请标价：¥",d),e.createElement("p",null,"实际成交价：¥",m),e.createElement("p",{style:{overflow:"hidden"}},"玩法说明：",y)),e.createElement(s.default,{span:8,style:{borderRight:"1px solid #ccc",marginLeft:"10px"}},e.createElement("p",{style:{overflow:"hidden"}},"活动类型：",p),e.createElement("p",{style:{display:"flex",justifyContent:"space-between",paddingRight:"20px",overflow:"hidden"}},e.createElement("span",null,"赠品情况：",f),"审核驳回"===_&&Date.now()<N?e.createElement(l.default,{type:"primary",style:{backgroundColor:"#f00",borderColor:"#f00"},onClick:t.handleReeditClick.bind(t,c,!0)},"重新编辑"):null)),e.createElement(s.default,{span:7,offset:1},e.createElement("p",null,"审核人：",g?g.examine_username:""),e.createElement("p",null,"审核结果：","审核通过"===_?e.createElement(l.default,{type:"primary",icon:"check-circle"},"通过"):e.createElement(l.default,{type:"primary",style:{backgroundColor:"#faad14",borderColor:"#faad14"},icon:"info-circle"},"驳回")),e.createElement("p",null,"审核意见：",g?g.examine_view:"")))))};return e.createElement(y.default,{breadcrumbList:["活动信息","审批查询","活动详情"],linkList:["","1",""],history:t.props.history},e.createElement("div",{className:"activity-details-wrapper"},e.createElement("section",{className:"content"},e.createElement("div",{className:"main"},D,_.map(function(e,t){return R(m({},e,{index:t,startTime:x}))})))))});t.default=_}).call(this,a(1))},765:function(e,t){},888:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(24)),r=u(a(15)),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(23),a(16);var i=u(a(572)),o=u(a(12));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(t){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.getActiveDetail=function(){var e=t.state.id;(0,o.default)({method:"post",url:"/hcm/campgign/Detail",data:{id:e}}).then(function(e){var a=e.data,n=a.data;a.status;t.setState({detail:n,cplist:n.cplist.map(function(e){return Object.assign({},e,{_isShowReeditForm:!1,_isExpandPrice:!1})})})}).catch(function(e){})},t.handleEditSubmit=function(e,a,n,c){c.preventDefault(),t._forms[a].validateFields(function(a,c){a||(LoadingModal({bl:!0}),(0,o.default)({method:"post",url:"/hcm/campgign/Reapply",data:l({id:e,campaign_id:n},c)}).then(function(e){LoadingModal({bl:!1});var a=e.data,n=(a.data,a.status),l=a.message;"10000"===n&&(r.default.success(l),t.getActiveDetail())}).catch(function(e){LoadingModal({bl:!1}),r.default.error("系统繁忙，请稍后再试！")}))})},t.handleCancelEdit=function(){t.setState({selectIndex:-1})},t.handleReeditClick=function(e,a){var n=t.state.cplist.slice();n[e]._isShowReeditForm=a,t.setState({cplist:n})},t.handleExpandPrice=function(e){var a=t.state,n=(a.expandPriceIndex,a.cplist.slice());n[e]._isExpandPrice=!n[e]._isExpandPrice,t.setState({cplist:n})},t.state={expandPriceIndex:-1,id:e.match.params.id,status:e.match.params.status,detail:{},cplist:[],selectIndex:-1},t._forms=[],t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),c(a,[{key:"componentWillMount",value:function(){this.getActiveDetail()}},{key:"render",value:function(){return e.createElement(i.default,{that:this})}}]),a}();t.default=n.default.create()(s)}).call(this,a(1))}}]);