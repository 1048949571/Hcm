(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1157:function(e,t){},1158:function(e,t){},1164:function(e,t){},1167:function(e,t){},1168:function(e,t){},1170:function(e,t){},25:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(54));a(53);var l=r(a(28));function r(e){return e&&e.__esModule?e:{default:e}}a(1157);var c=function(t){return e.createElement("div",{className:"layout-wrapper "+(t.className||"")},e.createElement("div",{className:"header-wrapper"},e.createElement(n.default,{className:"breadcrumb"},t.breadcrumbList.map(function(a,l){return""===t.linkList[l]?e.createElement(n.default.Item,{key:a},a):e.createElement(n.default.Item,{href:"javascript:;",key:a},e.createElement("span",{onClick:function(){t.history.go(-t.linkList[l])}},a))}))),e.createElement("div",{className:"layout-content"},t.children),e.createElement("div",{className:"copyright"},e.createElement(l.default,null)))};c.defaultProps={title:"标题",breadcrumbList:[],linkList:[]},t.default=c}).call(this,a(1))},28:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var n=function(t){function n(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),a(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),n}();t.default=n}).call(this,a(1))},433:function(e,t){},574:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=p(a(73)),l=p(a(181)),r=p(a(90)),c=p(a(14)),s=p(a(33)),i=p(a(11)),u=p(a(32)),o=p(a(54));a(72),a(205),a(91),a(18),a(41),a(22),a(42),a(53);var m=p(a(17)),d=p(a(25));p(a(28));function p(e){return e&&e.__esModule?e:{default:e}}o.default.Item;var f=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],E=(0,m.default)(function(t){var a=t.state,n=a.selectedIndex,l=a.moreButton,r=a.sevenData,o=a.currentShopBtn,m=a.shopBtnList;return e.createElement("div",{className:"activity-date"},e.createElement("section",{className:"date-card"},r.map(function(a,l){var r=new Date(a.my_date),c=f[r.getDay()],s=r.getDate()+"",i=r.getFullYear()+"-"+String(r.getMonth()+1).padStart(2,"0")+"-"+s.padStart(2,"0");return e.createElement("div",{className:"card "+(n===l?"activite":""),onClick:function(){return t.switchActivity(i,l)},key:a.my_date},e.createElement("div",null,e.createElement("span",null,c,"  ",6===n&&6===l?e.createElement("p",{className:"today"},"昨日"):null),e.createElement("span",null,s.padStart(2,"0"))),e.createElement("div",null,e.createElement("p",null,"不合格活动（"+a.all_count+"）")))})),e.createElement("section",{className:"date-info"},e.createElement("div",{className:"activity-shops"},e.createElement(s.default,{type:"flex",justify:"space-between",className:"row"},e.createElement(u.default,{span:4,className:"title"},"活动店铺（",m.length||0,"）"),e.createElement(u.default,{span:2,className:"more",onClick:t.moreButton},l?e.createElement("span",null,"收起更多 ",e.createElement(i.default,{type:"up"})):e.createElement("span",null,"展开更多 ",e.createElement(i.default,{type:"down"})))),l?e.createElement(s.default,{className:"row"},e.createElement(c.default,{className:"btn-item",type:"all"===o?"primary":"",onClick:function(){t.switchShopBtn("all")}},"全部（",m.length||0,"）"),m.length?m.map(function(a,n){return e.createElement(c.default,{key:a.shop_id,type:o===a.shop_id?"primary":"",onClick:function(){t.switchShopBtn(a.shop_id)},className:"show btn-item"},a.shop_name+"（"+a.act_count+"）")}):null):null)))}),h=(0,m.default)(function(t){var a=t.state,i=a.inspectInfoList,o=a.pagination,m=o.count,p=o.pageSize,f=o.pageNum,h=function(a){return e.createElement("div",{className:"img-wrapper"},a.length?a.map(function(n,l){return e.createElement("img",{src:n,key:n,onClick:function(){t.handleImgClick({bl:!0,close:!0,urls:a,index:l})},style:{width:"72px",height:"72px",borderRadius:"3px"}})}):null)};return e.createElement(d.default,{breadcrumbList:["活动信息","活动稽查公示"],linkList:["",""]},e.createElement("div",{className:"activity-inspection-publicity-wrapper"},e.createElement("section",{className:"content"},e.createElement(E,{that:t}),i.length?i.map(function(a,c){var i,o=a.screenshot_b,m=a.screenshot_c,d=a.screenshot_o,p=a.system_review,f=a.system_review_explain,E=a.brand_review,y=a.brand_review_username,v=a.brand_review_view,_=(a.campaign_id,!!o&&JSON.parse(o)),N=!!m&&JSON.parse(m),b=!!d&&JSON.parse(d);return e.createElement(n.default,{title:(i=a,e.createElement("div",{className:"card-title"},e.createElement("div",{className:"top"},e.createElement(s.default,{className:"row"},e.createElement(u.default,{span:24},"所属客户：",i.dealername)),e.createElement(s.default,{className:"row"},e.createElement(u.default,{span:12},"店铺名称：",i.shop_name),e.createElement(u.default,{span:12},"活动时间：",t.formatTime(i.start_time,!0)," ~ ",t.formatTime(i.end_time,!0))),e.createElement(s.default,{className:"row"},e.createElement(u.default,{span:12,className:"overflow-hidden"},"产品信息：",i.product_name),e.createElement(u.default,{span:12},"商品链接：",e.createElement("a",{href:i.product_url,target:"_blank"},i.product_url)))),e.createElement(r.default,{dashed:!0}),e.createElement("div",{className:"bottom"},e.createElement(s.default,{className:"row"},e.createElement(u.default,{span:8},"活动标价：¥",i.apply_price),e.createElement(u.default,{span:8},"活动类型：",i.campaign_type),e.createElement(u.default,{span:8},"赠品情况：",i.gift_situation)),e.createElement(s.default,{className:"row"},e.createElement(u.default,{span:8},"实际成交价：¥",i.actual_price),e.createElement(u.default,{span:8},"玩法说明：",i.play_content))))),className:"inspect-detail",key:c},e.createElement("div",{className:"body-top"},e.createElement(s.default,{className:"row"},e.createElement(u.default,{span:8,className:"img"},"标价截图：",h(_||[])),e.createElement(u.default,{span:8,className:"img"},"成交价截图：",h(N||[])),e.createElement(u.default,{span:8,className:"img"},"其他截图：",h(b||[]))),e.createElement(s.default,{className:"row"},e.createElement(u.default,{span:8},"系统稽查结果：",p?"合格"===p?e.createElement(l.default,{color:"green"},"合格"):e.createElement(l.default,{color:"red"},"不合格"):null),e.createElement(u.default,{span:8},"结果说明：",e.createElement("span",null,f)))),e.createElement(r.default,null),e.createElement("div",{className:"body-bottom"},e.createElement(s.default,null,e.createElement(u.default,{span:8},"稽查结果：",E?"合格"===E?e.createElement(l.default,{color:"green"},"合格"):e.createElement(l.default,{color:"red"},"不合格"):null),e.createElement(u.default,{span:8},"稽查人：",y),e.createElement(u.default,{span:8},"稽查意见：",v))))}):null,f*p>m?null:e.createElement("div",{className:"loadMore"},e.createElement(c.default,{onClick:t.handleLoadMoreClick},"加载更多···")))))});t.default=h}).call(this,a(1))}}]);