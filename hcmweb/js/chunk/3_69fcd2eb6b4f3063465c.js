(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1159:function(e,t){},1160:function(e,t){},1161:function(e,t){},1162:function(e,t){},1163:function(e,t){},1164:function(e,t){},1165:function(e,t){},1166:function(e,t){},1167:function(e,t){},1169:function(e,t){},1170:function(e,t){},1174:function(e,t){},120:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{width:"20px",height:"20px"};return{TB:e.createElement("img",{style:n,src:"../../../../img/platform/1_taobao.svg"}),TM:e.createElement("img",{style:n,src:"../../../../img/platform/2_tall.svg"}),JD:e.createElement("img",{style:n,src:"../../../../img/platform/3_jd.svg"}),SN:e.createElement("img",{style:n,src:"../../../../img/platform/4_suning.svg"}),GM:e.createElement("img",{style:n,src:"../../../../img/platform/5_gome.svg"}),PDD:e.createElement("img",{style:n,src:"../../../../img/platform/6_pinduoduo.svg"}),AMAZON:e.createElement("img",{style:n,src:"../../../../img/platform/7_a.svg"}),WPH:e.createElement("img",{style:n,src:"../../../../img/platform/8_weipinhui.svg"}),1688:e.createElement("img",{style:n,src:"../../../../img/platform/9_1688.svg"}),SMT:e.createElement("img",{style:n,src:"../../../../img/platform/10_sumaitong.svg"}),DD:e.createElement("img",{style:n,src:"../../../../img/platform/11_dangdang.svg"}),ALST:e.createElement("img",{style:n,src:"../../../../img/platform/12_lingshoutong.svg"}),"1HD":e.createElement("img",{style:n,src:"../../../../img/platform/13_1haodian.svg"}),YJWD:e.createElement("img",{style:n,src:"../../../../img/platform/14_yunji.svg"}),YLW:e.createElement("img",{style:n,src:"../../../../img/platform/15_youle.svg"}),XY:e.createElement("img",{style:n,src:"../../../../img/platform/16_xainyu.svg"}),WECD:e.createElement("img",{style:n,src:"../../../../img/platform/17_weixin.svg"}),MGJ:e.createElement("img",{style:n,src:"../../../../img/platform/18_mogujie.svg"}),JMYP:e.createElement("img",{style:n,src:"../../../../img/platform/19_jumei.svg"}),CCJ:e.createElement("img",{style:n,src:"../../../../img/platform/20_chuchujie.svg"}),BBWG:e.createElement("img",{style:n,src:"../../../../img/platform/21_beibeiwang.svg"}),platform_OTHER:e.createElement("img",{style:n,src:"../../../../img/platform/22_qita.svg"})}[t]}}).call(this,n(1))},1200:function(e,t){},564:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0});var l=h(n(627)),r=h(n(80)),i=h(n(14)),c=h(n(176)),s=h(n(45)),m=h(n(37)),o=h(n(90)),u=h(n(70)),d=h(n(11)),f=h(n(48)),g=h(n(99));n(541),n(81),n(18),n(175),n(46),n(36),n(91),n(85),n(22),n(47),n(106);var p=h(n(17)),E=h(n(62)),v=h(n(120));function h(e){return e&&e.__esModule?e:{default:e}}var y=g.default.TabPane,w=f.default.RangePicker,b=function(t){return e.createElement("div",{className:"no-authed"},e.createElement("img",{src:"../../../../img/no_data.jpg"}),e.createElement("p",{style:{color:"#999"}},"抱歉，本店铺还未订购应用"),e.createElement("p",null,"店铺订购应用后，则会显示订购店铺的销售数据，",e.createElement("a",{onClick:function(){return t.props.inviteLinkStatus()}},"获取应用订购链接")))},N=(0,p.default)(function(t){var n=t.state,f=(n.id,n.visible),p=n.baseInfo,h=n.titleList,N=n.activeKey,x=n.activity,_=n.salesData,k=n.abnormalOrders;return e.createElement(l.default,{className:"shop-detail",title:function(t){var n=t.shopName,a=t.wangwang,l=t.goodsnum,r=t.username,i=t.userstatus,c=t.loyal,s=t.sales,m=t.ratio,o=t.platformCode,u=t.isauthed,f=t.shopUrl;return e.createElement("div",{className:"title"},e.createElement("h3",null,e.createElement("a",{target:"_blank",href:f},n),(0,v.default)(o,{width:"20px",height:"20px",verticalAlign:"-3px",marginLeft:"10px"}),"AUTHED"==u?e.createElement("img",{style:{paddingLeft:10,verticalAlign:"-2px"},src:"../../../../img/dinggou.jpg"}):null,e.createElement("span",null,a)),e.createElement("p",{className:"shop-user-info"},e.createElement("img",{src:"../../../../img/loginuser_1s.png"}),"用户名：",r,i?e.createElement("span",{className:"open"},"已启用"):e.createElement("span",{className:"close"},"已禁用")),e.createElement("div",{className:"info"},e.createElement("div",{className:"item"},e.createElement("p",null,c),"品牌忠诚度"),e.createElement("div",{className:"item"},e.createElement("p",null,l),"品牌商品数"),e.createElement("div",{className:"item"},e.createElement("div",{style:{textAlign:"center"}},e.createElement("p",null,"¥ ",E.default.formatThousandMoney(s)),"近30天销售额"),e.createElement("div",null,e.createElement("p",{style:{fontSize:12}},m?+m>0?e.createElement(d.default,{style:{color:"#F5222D"},type:"caret-up"}):e.createElement(d.default,{style:{color:"#52C41A"},type:"caret-down"}):null,m),"环比"))))}(p),placement:"right",width:715,onClose:t.onClose,visible:f},e.createElement(g.default,{activeKey:N,onChange:function(e){return t.onTabsChange(e)}},e.createElement(y,{tab:"店铺档案",key:"1"},function(t,n){return e.createElement("div",{className:"baseInfo"},e.createElement("ul",{className:"items"},e.createElement("li",null,e.createElement("span",null,"店铺名称："),e.createElement("a",{target:"_blank",href:t.shopUrl},t.shopName)),e.createElement("li",null,e.createElement("span",null,"平台名称："),t.platformname),e.createElement("li",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},e.createElement("span",null,"首页地址："),e.createElement("a",{style:{color:"#108CEE"},target:"_blank",href:t.shopUrl},t.shopUrl)),e.createElement("li",null,e.createElement("span",null,"旺旺名称："),t.wangwang),e.createElement("li",null,e.createElement("span",null,"经销商名称："),t.dealername,t.status&&"{}"!=JSON.stringify(t.status)?e.createElement(u.default,{placement:"bottom",title:t.status.info},e.createElement("span",{style:{marginLeft:10},className:t.status.info_type},t.status.title)):null),e.createElement("li",null,e.createElement("span",null,"经营品类："),t.productClassifyName?t.productClassifyName.join(","):null),n.add&&n.add.data.length?e.createElement(e.Fragment,null,e.createElement(o.default,{style:{fontSize:14},orientation:"left",dashed:!0},"自定义字段"),n.add.data.map(function(n,a){if(0!=n.isChecked)return e.createElement("li",{key:a},e.createElement("span",null,n.fieldname,"："),t[n.fieldvalue])})):null))}(p,h)),e.createElement(y,{tab:"每日销售额提报",key:"2"},"AUTHED"==p.isauthed?function(t,n){var a=t.totalNum,l=t.pageNo,r=t.pageSize,i=t.list,c=[{title:"序号",dataIndex:"index",key:"index",render:function(e,t,n){return n+1}},{title:"月份",dataIndex:"daydate",key:"daydate"},{title:"销售额",dataIndex:"daymoney",key:"daymoney",render:function(e){return"¥ "+E.default.formatThousandMoney(e)}},{title:"环比",dataIndex:"HB",key:"HB",render:function(t){return e.createElement("div",null,t?+t>0?e.createElement(d.default,{style:{color:"#F5222D"},type:"caret-up"}):e.createElement(d.default,{style:{color:"#52C41A"},type:"caret-down"}):null,Math.abs(t)||"--")}}];return e.createElement("div",{className:"sales-data"},e.createElement("div",{className:"table-box"},e.createElement(m.default,{rowKey:"createtime",pagination:!1,columns:c,dataSource:i})),e.createElement("div",{className:"footer"},e.createElement("div",{className:"info"},"共 "+a+" 条记录 "),e.createElement(s.default,{size:"small",pageSize:r,current:l,total:a,onChange:n.onSalesDataPagination,onShowSizeChange:n.onSalesDataPaginationSize,showSizeChanger:!0,showQuickJumper:!0})))}(_,t):b(t)),e.createElement(y,{tab:"活动申报情况",key:"3"},function(t,n){var l=t.date,r=t.list,s=t.show,m=e.createElement("span",{className:"dot"});return e.createElement("div",{className:"activity"},e.createElement("div",{className:"activity-title"},e.createElement("span",null,"申请时间："),e.createElement(w,{disabledDate:function(e){return e&&e>a()},value:l,onChange:function(e){return n.activityRangePicker(e)}})),e.createElement("div",{className:"time-line-box"},e.createElement(c.default,null,r.length?r.map(function(t,n){return e.createElement(c.default.Item,{key:n,dot:m},e.createElement("dl",null,e.createElement("dt",null,a(t.createtime).format("YYYY年MM月DD日 HH:mm:ss")),e.createElement("dd",null,"活动主题：",t.campaign_name),e.createElement("dd",null,"活动时间：",a(t.start_time).format("YYYY年MM月DD日 HH:mm:ss")," ~ ",a(t.end_time).format("YYYY年MM月DD日 HH:mm:ss")),e.createElement("dd",null,"活动产品数：",t.act_count)))}):e.createElement(c.default.Item,{dot:m},"暂无数据")),e.createElement("div",{className:"get-data-box"},"1"==s?e.createElement(i.default,{onClick:function(){return n.getActivityList()}},"加载更多..."):null)))}(x,t)),e.createElement(y,{tab:"订单异常情况",key:"4"},"AUTHED"==p.isauthed?function(t,n){var l=t.date,s=t.list,m=t.show;console.log(l,s,m);var o=e.createElement("span",{className:"dot"});return e.createElement("div",{className:"abnormal-orders"},e.createElement("div",{className:"abnormal-orders-title"},e.createElement("span",null,"申请时间："),e.createElement(w,{disabledDate:function(e){return e&&e>a()},value:l,onChange:function(e){return n.abnormalOrdersRangePicker(e)}})),e.createElement("div",{className:"time-line-box"},e.createElement(c.default,null,s.length?s.map(function(t,n){return e.createElement(c.default.Item,{key:n,dot:o},e.createElement("h6",null,a(t.createtime).format("YYYY年MM月DD日 HH:mm:ss")),e.createElement("div",{className:"item"},e.createElement("p",{className:"item-title"},"卖家旺旺：",t.wangwang),e.createElement("div",{className:"item-num-sum"},e.createElement("span",null,"订单编号：",t.tid),e.createElement("span",null,"订单金额：¥",E.default.formatThousandMoney(t.itemprice))),e.createElement("div",{className:"item-info"},e.createElement("img",{src:t.itempic}),e.createElement("div",{className:"product-info"},e.createElement("p",{style:{display:"flex",color:"#9E7E6B"}},e.createElement("span",{style:{whiteSpace:"nowrap"}},"商品名称："),e.createElement("span",null,t.itemtitle)),e.createElement("p",{style:{display:"flex",color:"#9E7E6B"}},e.createElement("span",{style:{whiteSpace:"nowrap"}},"SKU信息："),e.createElement("span",null,t.itemskuprop)),e.createElement("p",{style:{display:"flex"}},e.createElement("span",{style:{whiteSpace:"nowrap"}},"所属产品："),e.createElement("span",null,t.productMessage)),e.createElement("p",null,"最低成交价：¥",E.default.formatThousandMoney(t.floorTransactionPrice)),t.lowpricemessage?e.createElement(r.default,{message:t.lowpricemessage,type:"error",showIcon:!0}):null))))}):e.createElement(c.default.Item,{dot:o},"暂无数据")),e.createElement("div",{className:"get-data-box"},"1"==m?e.createElement(i.default,{onClick:function(e){n.getAbnormalOrdersList()}},"加载更多..."):null)))}(k,t):b(t))))});t.default=N}).call(this,n(1),n(10))},62:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={onVisibilityChange:function(e,t){var n="hidden"in document?"hidden":"webkitHidden"in document?"webkitHidden":"mozHidden"in document?"mozHidden":null,a=n.replace(/hidden/i,"visibilitychange"),l=function(){document[n]||console.log("页面非激活"+new Date),document[n]&&console.log("页面激活"+new Date)};document.addEventListener(a,l)},formatAccount:function(e){return e=e.replace(/[\s]/g,"").replace(/(\d{4})(?=\d)/g,"$1 ")},formatThousandMoney:function(t,n){return isNaN(t)?"":(n=n||"",!1===e.isNumeric(t)||0==t?"0.00":0==(t=(t=+t).toFixed(2))?"0.00":n+" "+(t+"").replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,"$&,"))},encryption:function(){return(""+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")).replace(/(\d{3})\d*([0-9a-zA-Z]{4})/,"$1****$2")},browser:{versions:function(){var e=navigator.userAgent,t=(navigator.appVersion,"");if(e.indexOf("Ourydc.Yuebaobao")>-1){var n=e.match(/Ourydc.Yuebaobao.*/);if(n.length>0){var a=n[0];t=a.substr(a.indexOf("/")+1)}}return{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Adr")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari"),weixin:e.indexOf("MicroMessenger")>-1,weibo:"WeiBo"==e.match(/WeiBo/i)||"Weibo"==e.match(/Weibo/i)||"weibo"==e.match(/weibo/i),qq:"qq"==e.match(/qq/i)||"QQ"==e.match(/QQ/i),qqBrower:-1==e.indexOf("Mobile MQQBrowser")&&-1!=e.indexOf("MQQBrowser"),isInApp:e.indexOf("Ourydc.Yuebaobao")>-1,locAppVersion:t}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()},checkAccount:function(e){return/^[a-zA-Z](\w|\s+){5,15}$/.test(this.trim(e||""))},checkUrl:function(e){return/^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/.test(this.trim(e||""))},Reg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/^[^\u4e00-\u9fa5]{5,31}$/.test(this.trim(e||""))},checkPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/^.{6,16}$/.test(this.trim(e||""))},trim:function(e){return(e=""+e).replace(/(^\s*)|(\s*$)/g,"")},getCookie:function(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null},required:function(e){var t=this.trim(e||"");return!(!t||!t.length)},legnthCheck:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"INPUT";return this.trim(e||"").length<this.LENGTH[t]},LENGTH:{URL:500,TEXTAREA:200,INPUT:50},getQueryString:function(e){var t=new RegExp("(^|&|[?])"+e+"=([^&]*)(&|$)"),n=window.location.href.substr(1).match(t);return null!=n?n[2]:""},getParamString:function(e,t){var n=new RegExp("(^|&|[?])"+t+"=([^&]*)(&|$)"),a=e.substr(1).match(n);return null!=a?a[2]:""},Trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},deviceCheck:function(){return browser.versions.mobile?browser.versions.android?"android":browser.versions.ios?"ios":"mobile":"web"}}}).call(this,n(112))}}]);