(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1157:function(e,t){},1158:function(e,t){},1167:function(e,t){},1168:function(e,t){},120:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{width:"20px",height:"20px"};return{TB:e.createElement("img",{style:a,src:"../../../../img/platform/1_taobao.svg"}),TM:e.createElement("img",{style:a,src:"../../../../img/platform/2_tall.svg"}),JD:e.createElement("img",{style:a,src:"../../../../img/platform/3_jd.svg"}),SN:e.createElement("img",{style:a,src:"../../../../img/platform/4_suning.svg"}),GM:e.createElement("img",{style:a,src:"../../../../img/platform/5_gome.svg"}),PDD:e.createElement("img",{style:a,src:"../../../../img/platform/6_pinduoduo.svg"}),AMAZON:e.createElement("img",{style:a,src:"../../../../img/platform/7_a.svg"}),WPH:e.createElement("img",{style:a,src:"../../../../img/platform/8_weipinhui.svg"}),1688:e.createElement("img",{style:a,src:"../../../../img/platform/9_1688.svg"}),SMT:e.createElement("img",{style:a,src:"../../../../img/platform/10_sumaitong.svg"}),DD:e.createElement("img",{style:a,src:"../../../../img/platform/11_dangdang.svg"}),ALST:e.createElement("img",{style:a,src:"../../../../img/platform/12_lingshoutong.svg"}),"1HD":e.createElement("img",{style:a,src:"../../../../img/platform/13_1haodian.svg"}),YJWD:e.createElement("img",{style:a,src:"../../../../img/platform/14_yunji.svg"}),YLW:e.createElement("img",{style:a,src:"../../../../img/platform/15_youle.svg"}),XY:e.createElement("img",{style:a,src:"../../../../img/platform/16_xainyu.svg"}),WECD:e.createElement("img",{style:a,src:"../../../../img/platform/17_weixin.svg"}),MGJ:e.createElement("img",{style:a,src:"../../../../img/platform/18_mogujie.svg"}),JMYP:e.createElement("img",{style:a,src:"../../../../img/platform/19_jumei.svg"}),CCJ:e.createElement("img",{style:a,src:"../../../../img/platform/20_chuchujie.svg"}),BBWG:e.createElement("img",{style:a,src:"../../../../img/platform/21_beibeiwang.svg"}),platform_OTHER:e.createElement("img",{style:a,src:"../../../../img/platform/22_qita.svg"})}[t]}}).call(this,a(1))},25:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(54));a(53);var l=r(a(28));function r(e){return e&&e.__esModule?e:{default:e}}a(1157);var c=function(t){return e.createElement("div",{className:"layout-wrapper "+(t.className||"")},e.createElement("div",{className:"header-wrapper"},e.createElement(n.default,{className:"breadcrumb"},t.breadcrumbList.map(function(a,l){return""===t.linkList[l]?e.createElement(n.default.Item,{key:a},a):e.createElement(n.default.Item,{href:"javascript:;",key:a},e.createElement("span",{onClick:function(){t.history.go(-t.linkList[l])}},a))}))),e.createElement("div",{className:"layout-content"},t.children),e.createElement("div",{className:"copyright"},e.createElement(l.default,null)))};c.defaultProps={title:"标题",breadcrumbList:[],linkList:[]},t.default=c}).call(this,a(1))},28:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var n=function(t){function n(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),a(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),n}();t.default=n}).call(this,a(1))},433:function(e,t){},609:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0});var l=E(a(73)),r=E(a(33)),c=E(a(14)),i=E(a(32)),m=E(a(97)),s=E(a(11)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&i.return&&i.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();a(72),a(41),a(18),a(42),a(92),a(22);var p=E(a(17)),f=E(a(25)),d=E(a(120));function E(e){return e&&e.__esModule?e:{default:e}}var g=(0,p.default)(function(t){var a=t.state,p=a.detailType,E=a.status,g=a.breadcrumbName,y=a.myActivityDetail,v=a.proDetail,_=a.shopDetail,h=function(t){var a=t.apply_price,n=t.price_map,l=void 0===n?{}:n,o=t.actual_price,p=t.gift_situation,f=t.campaign_type,d=t.play_content,E=t.campaignExamine,g=t.isShowMorePrice;return e.createElement(r.default,{className:"activity-baseinfo-wrapper"},e.createElement(i.default,{span:8,className:"item"},e.createElement("span",null,"申请标价："),e.createElement("span",null,a),Object.keys(l).length&&g?e.createElement(m.default,{content:e.createElement(e.Fragment,null,Object.entries(l).map(function(t){var a=u(t,2),n=a[0],l=a[1];return e.createElement("p",{key:n},n+"："+l)}))},e.createElement(s.default,{className:"icon",type:"question-circle"})):null),e.createElement(i.default,{span:8,className:"item"},e.createElement("span",null,"实际成交价："),e.createElement("span",null,o)),e.createElement(i.default,{span:8,className:"item"},e.createElement("span",null,"赠品情况："),e.createElement("span",null,p)),e.createElement(i.default,{span:8,className:"item"},e.createElement("span",null,"活动类型："),e.createElement("span",null,f)),e.createElement(i.default,{span:8,className:"item"},e.createElement("span",null,"玩法说明："),e.createElement("span",null,d)),E?e.createElement(i.default,{className:"review-info",span:24},e.createElement(r.default,{className:"content"},e.createElement(i.default,{span:8},e.createElement("span",null,"审核结果："),"审核通过"===E.examine_result?e.createElement(c.default,{type:"primary",style:{backgroundColor:"#52C41A",borderColor:"#52C41A"}},e.createElement(s.default,{type:"check-circle"}),"通过"):e.createElement(c.default,{type:"primary",style:{backgroundColor:"#FAAD14",borderColor:"#FAAD14"}},e.createElement(s.default,{type:"rollback"}),"驳回")),e.createElement(i.default,{span:8},e.createElement("span",null,"审核意见：",E.examine_view),e.createElement("span",null)),e.createElement(i.default,{span:8},e.createElement("span",null,"审核人：",E.examine_username),e.createElement("span",null)))):null)},b=function(t){var a=t.isShowTitle,c=void 0===a||a,m=t.product_name,u=t.product_url,f=t.shop_name,g=t.start_time,y=t.end_time,v=t.ping_name,_=t.isShowMorePrice,b=void 0!==_&&_;return e.createElement("div",{className:"product-item-wrapper"},c?e.createElement("h5",{className:"title"},"店铺名称：",f,v&&window.can.platform.filter(function(e){return e.dictName===v}).length?(0,d.default)(window.can.platform.filter(function(e){return e.dictName===v})[0].dictCode):""):null,e.createElement(l.default,{className:"content",title:"review"===p?e.createElement(r.default,{className:"card-title"},e.createElement(i.default,{span:10,className:"item"},"产品信息：",m),e.createElement(i.default,{span:10,className:"item over-ellipsis"},"商品链接：",e.createElement("a",{href:u,target:"_blank"},u)),e.createElement(i.default,{span:4,style:{fontSize:"14px",color:"#333"}},"活动待审核"===E?e.createElement(e.Fragment,null,e.createElement(s.default,{style:{color:"#FAAD14",marginRight:"10px",fontSize:"16px"},type:"clock-circle",theme:"filled"}),E):"待审核已过期"===E?e.createElement(e.Fragment,null,e.createElement(s.default,{style:{color:"#FAAD14",marginRight:"10px",fontSize:"16px"},type:"minus-circle",theme:"filled"}),E):null)):e.createElement(r.default,{className:"card-title"},e.createElement(i.default,{span:12,className:"item"},"活动时间：",n(g).format("YYYY-MM-DD HH:mm")+" ~ "+n(y).format("YYYY-MM-DD HH:mm")),e.createElement(i.default,{span:12,className:"item"},"链接地址：",e.createElement("a",{href:u,target:"_blank"},u)))},e.createElement(h,o({isShowMorePrice:b},t))))};return e.createElement(f.default,{breadcrumbList:["活动信息",g,"活动详情"],linkList:["","1",""],history:t.props.history},e.createElement("div",{className:"activity-detail-wrapper"},"review"===p?e.createElement("section",{className:"detail-type-review-wrapper"},e.createElement(function(t){var a=t.campaign_name,l=t.start_time,c=t.end_time,m=t.campaign_desc,s=t.createtime;return e.createElement(r.default,{className:"review-status-wrapper"},e.createElement(i.default,{span:24,className:"title"},a),e.createElement(i.default,{span:8,className:"item"},"活动时间：",n(l).format("YYYY-MM-DD HH:mm")+" ~ "+n(c).format("YYYY-MM-DD HH:mm")),e.createElement(i.default,{span:16,className:"item"},"申请时间：",n(s).format("YYYY-MM-DD HH:mm:ss")),e.createElement(i.default,{span:8,className:"item"},"活动说明：",m),e.createElement("div",{className:"status-icon"},e.createElement("span",{className:"icon "+("活动待审核"===E||"待审核已过期"===E?"inspecting":"inspected")}),e.createElement("span",{className:"text"},E)))},y),y.cplist&&y.cplist.length?y.cplist.map(function(t){return e.createElement(b,o({key:t.campaign_id,isShowTitle:!1},t))}):null):null,"shop"===p?e.createElement("section",{className:"detail-type-shop-wrapper"},t.props.location.state?e.createElement(function(t){return e.createElement("div",{className:"shop-baseinfo-wrapper"},e.createElement("h5",{className:"title"},t.shop_name),e.createElement("div",{className:"info"},"共有",e.createElement("span",null,t.act_count),"商品正在活动"))},t.props.location.state):null,_&&_.list&&_.list.length?_.list.map(function(t,a){return e.createElement("div",{className:"detail-type-shop-item",key:a},e.createElement(b,o({isShowMorePrice:!0},t)))}):null):null,"product"===p?e.createElement("section",{className:"detail-type-product-wrapper"},v&&v.pro_list?e.createElement(function(t){var a=t.data,n=a.product_name,l=a.brand_name,c=["product_name","brand_name","floor_transaction_price","floor_price"];return e.createElement(r.default,{className:"activity-product-baseinfo-wrapper"},e.createElement(i.default,{span:24,className:"title"},n),e.createElement(i.default,{span:8,className:"item"},e.createElement("span",null,"品牌："),e.createElement("span",null,l)),Object.entries(t.data).map(function(t){var a=u(t,2),n=a[0],l=a[1];if(!c.includes(n))return e.createElement(i.default,{key:n,span:8,className:"item"},e.createElement("span",null,n,"："),e.createElement("span",null,l))}))},{data:v.pro_list}):null,v&&v.list&&v.list.length?v.list.map(function(t,a){return e.createElement("div",{className:"detail-type-product-item",key:a},e.createElement(b,t))}):null):null,"shop"===p&&_.count>_.pageNum*_.pageSize||"product"===p&&v.count>v.pageNum*v.pageSize?e.createElement("div",{className:"more-btn"},e.createElement(c.default,{onClick:t.handleMoreClick.bind(t,"shop"===p?_.pageNum+1:v.pageNum+1)},"加载更多")):null))});t.default=g}).call(this,a(1),a(10))}}]);