(window.webpackJsonp=window.webpackJsonp||[]).push([[220,230,361],{28:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var n=function(t){function n(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),a(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),n}();t.default=n}).call(this,a(1))},616:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(14)),r=i(a(97));a(18),a(92),a(806);var c=i(a(17)),o=i(a(28));function i(e){return e&&e.__esModule?e:{default:e}}var u=(0,c.default)(function(t){return e.createElement("div",{className:"shop_home"},e.createElement("div",{className:"ShopContent",style:{padding:"0 24px"}},e.createElement(m,{that:t}),e.createElement(s,{that:t}),e.createElement(d,{that:t})),e.createElement("div",{className:"copyright"},e.createElement(o.default,null)))}),m=(0,c.default)(function(t){var a=t.state,n=a.noticeNotReadCount,l=a.productNotReadCount,c=a.huanbi,o=a.lastMonthCount,i=a.huanbiState,u=e.createElement("div",null,e.createElement("p",null,"未阅读的通知公告")),m=e.createElement("div",null,e.createElement("p",null,"未阅读的售价变更信息")),s=e.createElement("div",null,e.createElement("p",null,"所属本品牌方商品的成交额"));return e.createElement("div",{className:"Summary"},e.createElement("ul",{className:"SummaryUl"},e.createElement("li",{className:"SummaryUlLi1"},e.createElement("p",null,e.createElement("span",{onClick:t.activityDeclaration},"+申报活动")),e.createElement("p",null,"快捷申报活动")),e.createElement("li",{className:"SummaryUlLi2"},e.createElement("div",null,e.createElement("img",{src:"../../../../img/icon1.1/notice.png",alt:""})),e.createElement("div",{className:"SummaryUlLi2_D"},e.createElement("p",null,n),e.createElement("p",null,"最新通知公告",e.createElement(r.default,{content:u,placement:"bottom",trigger:"hover"},e.createElement("img",{src:"../../../../img/icon1.1/i.png",alt:""}))))),e.createElement("li",{className:"SummaryUlLi2"},e.createElement("div",null,e.createElement("img",{src:"../../../../img/icon1.1/price.png",alt:""})),e.createElement("div",{className:"SummaryUlLi2_D"},e.createElement("p",null,l),e.createElement("p",null,"最新售价变更",e.createElement(r.default,{content:m,placement:"bottom",trigger:"hover"},e.createElement("img",{src:"../../../../img/icon1.1/i.png",alt:""}))))),e.createElement("li",{className:"SummaryUlLi3"},e.createElement("div",null,e.createElement("img",{src:"../../../../img/icon1.1/money.png",alt:""})),e.createElement("div",{className:"SummaryUlLi2_D"},e.createElement("p",null,o,"（万元）"),e.createElement("p",null,"上月总销售金额",e.createElement(r.default,{content:s,placement:"bottom",trigger:"hover"},e.createElement("img",{src:"../../../../img/icon1.1/i.png",alt:""})))),e.createElement("div",{className:"SummaryUlLi3_DHB"},e.createElement("p",null,i?e.createElement("img",{src:"../../../../img/icon1.1/upper.png",alt:""}):e.createElement("img",{src:"../../../../img/icon1.1/lower.png",alt:""}),"  ",c),e.createElement("p",null,"环比")))))}),s=(0,c.default)(function(t){var a=t.state,l=a.tabsData,r=a.days,c=a.shops,o=a.hotCommodity,i=l.map(function(a,l){return e.createElement("div",{className:"0"==l?"item active":"item",key:l,onClick:function(){t.sevendaysTab(l,a.my_date)}},e.createElement("div",{className:"date"},e.createElement("span",null,r[n(a.my_date).day()]),"0"==l?e.createElement("div",{className:"today"},"今日"):null,e.createElement("span",null,n(a.my_date).format("DD"))),e.createElement("p",{className:"text"},"0"==l?"进行中":"已审核","活动（",a.all_count,"）"))}),u=c.map(function(t,a){return e.createElement("li",{key:a},e.createElement("p",null,t.shop_name),e.createElement("p",null,"活动数：",t.act_count))}),m=[],s=[],d=o.map(function(t,a){for(var n in m=[],s=[],t.product_map)"product_name"!=n&&"floor_transaction_price"!=n&&"floor_price"!=n&&"brand_name"!=n&&(m.push(t.product_map[n]),s.push(n));return e.createElement("ul",{key:a},e.createElement("li",null,e.createElement("div",{className:"Shop_left"},e.createElement("p",null,t.product_map.product_name),e.createElement("p",null,e.createElement("span",null,"产品分类：",t.class_name),e.createElement("span",null,"品牌:",t.product_map.brand_name),m.length?m.map(function(t,a){return e.createElement("span",{key:a},s[a],"：",t)}):null)),e.createElement("div",{className:"Shop_right"},"活动商品数：",e.createElement("span",null,t.ins_count))))});return e.createElement("div",{className:"RecentActivity"},e.createElement("div",{className:"recentlyTitle"},"近日活动概览"),e.createElement("div",{className:"RecentActivityTabs"},e.createElement("section",{className:"items"},i),e.createElement("div",{className:"RecentActivityTabs_shop"},e.createElement("div",{className:"ActivityShop"},e.createElement("div",{className:"ActivityShop_title"},"活动店铺"),e.createElement("div",{className:"ActivityShop_zhankai",onClick:t.openRetract},"···")),e.createElement("div",{className:"ActivityShop_content"},e.createElement("ul",{className:c.length?null:"act"},u.length?u:e.createElement("p",{style:{textAlign:"center"}},"暂无数据")))),e.createElement("div",{className:"RecentActivityTabs_commodity"},e.createElement("div",{className:"ActivityShop"},e.createElement("div",{className:"ActivityShop_title"},"热门活动商品")),e.createElement("div",{className:o.length?"sellwellcommodity":"sellwellcommodity sellwellactive"},d.length?d:"暂无数据"))))}),d=(0,c.default)(function(t){var a=t.state.reportforms.map(function(a,r){return e.createElement("li",{key:r},e.createElement("div",null,e.createElement("p",null,n(a.submit_time).format("YYYY-MM-DD")),e.createElement("p",null,"状态：",a.submit_status?"已提报":"未提报")),e.createElement("div",null,a.submit_status?null:e.createElement(l.default,{onClick:function(){t.ljtb(n(a.submit_time).format("YYYY-MM-DD"))}},"立即提报")))});return e.createElement("div",{className:"DailyData"},e.createElement("div",{className:"DailyTitle"},"每日销售数据提报"),e.createElement("div",{className:"DailyFour"},e.createElement("ul",null,a.length?a:"暂无数据")))});t.default=u}).call(this,a(1),a(10))},806:function(e,t){},937:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(15)),r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(16);var c=i(a(616)),o=i(a(12));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(t){function a(e){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var r,c,i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return i.activityDeclaration=function(){window.location.hash="/ActivityDeclaration"},i.shopindex=function(){var e=i.state,t=e.noticeNotReadCount,a=e.productNotReadCount,n=e.huanbi,r=e.lastMonthCount,c=e.reportforms,u=e.huanbiState;o.default.get("/hcm/Index/shopIndex").then(function(e){1e4==e.data.status&&(t=e.data.data.noticeNotReadCount,a=e.data.data.productNotReadCount,n=e.data.data.huanbi,r=e.data.data.lastMonthCount,c=e.data.data.list,u=e.data.data.huanbiState,i.setState({noticeNotReadCount:t,productNotReadCount:a,huanbi:n,lastMonthCount:r,reportforms:c,huanbiState:u}))}).catch(function(){l.default.error("获取信息失败")})},i.tabs=function(){var e=i.state.tabsData;LoadingModal({bl:!0}),o.default.get("/hcm/campgign/ScheduleBMCSeven").then(function(t){LoadingModal({bl:!1}),1e4==t.data.status&&(e=t.data.data,i.setState({tabsData:e},function(){i.sevendaysTab(0,e[0].my_date)}))}).catch(function(){LoadingModal({bl:!1}),l.default.error("获取信息失败")})},i.sevendaysTab=(r=regeneratorRuntime.mark(function e(a,r){var c,u,m,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=i.state,u=c.shops,m=c.hotCommodity,(s=document.querySelectorAll(".item")).forEach(function(e,t){s[t].className="item"}),s[a].className="item active",r=n(r).format("YYYY-MM-DD"),LoadingModal({bl:!0}),e.next=8,o.default.get("/hcm/campgign/findCampaignShopsPageList",{params:{campaign_node:"已审核",ser_day:r,pageNum:1,pageSize:6}}).then(function(e){1e4==e.data.status&&(u=e.data.data.list,i.setState({shops:u}))}).catch(function(){LoadingModal({bl:!1}),l.default.error("获取信息失败")});case 8:return e.next=10,o.default.get("/hcm/campgign/findProductPublicListShop",{params:{ser_day:r,pageNum:1,pageSize:3}}).then(function(e){LoadingModal({bl:!1}),1e4==e.data.status&&(m=e.data.data.list,i.setState({hotCommodity:m}))}).catch(function(){LoadingModal({bl:!1}),l.default.error("获取信息失败")});case 10:case"end":return e.stop()}},e,t)}),c=function(){var e=r.apply(this,arguments);return new Promise(function(t,a){return function n(l,r){try{var c=e[l](r),o=c.value}catch(e){return void a(e)}if(!c.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});t(o)}("next")})},function(e,t){return c.apply(this,arguments)}),i.openRetract=function(){window.location.hash="/ActivityPublicity"},i.ljtb=function(e){window.location.hash="/DataDetails/"+e},i.state={tabsData:[],days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],noticeNotReadCount:0,productNotReadCount:0,huanbi:"0%",huanbiState:!0,lastMonthCount:0,reportforms:[],shops:[],hotCommodity:[]},i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),r(a,[{key:"componentDidMount",value:function(){this.tabs(),this.shopindex()}},{key:"render",value:function(){return e.createElement(c.default,{that:this})}}]),a}();t.default=u}).call(this,a(1),a(10))}}]);