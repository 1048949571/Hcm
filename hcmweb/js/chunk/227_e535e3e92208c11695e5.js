(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{17:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();t.default=function(t){return function(s){function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),n(a,[{key:"render",value:function(){return e.createElement(t,this.props.that)}}]),a}()}}).call(this,n(1))},511:function(e,t,n){var s={"./af":239,"./af.js":239,"./ar":240,"./ar-dz":241,"./ar-dz.js":241,"./ar-kw":242,"./ar-kw.js":242,"./ar-ly":243,"./ar-ly.js":243,"./ar-ma":244,"./ar-ma.js":244,"./ar-sa":245,"./ar-sa.js":245,"./ar-tn":246,"./ar-tn.js":246,"./ar.js":240,"./az":247,"./az.js":247,"./be":248,"./be.js":248,"./bg":249,"./bg.js":249,"./bm":250,"./bm.js":250,"./bn":251,"./bn.js":251,"./bo":252,"./bo.js":252,"./br":253,"./br.js":253,"./bs":254,"./bs.js":254,"./ca":255,"./ca.js":255,"./cs":256,"./cs.js":256,"./cv":257,"./cv.js":257,"./cy":258,"./cy.js":258,"./da":259,"./da.js":259,"./de":260,"./de-at":261,"./de-at.js":261,"./de-ch":262,"./de-ch.js":262,"./de.js":260,"./dv":263,"./dv.js":263,"./el":264,"./el.js":264,"./en-au":265,"./en-au.js":265,"./en-ca":266,"./en-ca.js":266,"./en-gb":267,"./en-gb.js":267,"./en-ie":268,"./en-ie.js":268,"./en-il":269,"./en-il.js":269,"./en-nz":270,"./en-nz.js":270,"./eo":271,"./eo.js":271,"./es":272,"./es-do":273,"./es-do.js":273,"./es-us":274,"./es-us.js":274,"./es.js":272,"./et":275,"./et.js":275,"./eu":276,"./eu.js":276,"./fa":277,"./fa.js":277,"./fi":278,"./fi.js":278,"./fo":279,"./fo.js":279,"./fr":280,"./fr-ca":281,"./fr-ca.js":281,"./fr-ch":282,"./fr-ch.js":282,"./fr.js":280,"./fy":283,"./fy.js":283,"./gd":284,"./gd.js":284,"./gl":285,"./gl.js":285,"./gom-latn":286,"./gom-latn.js":286,"./gu":287,"./gu.js":287,"./he":288,"./he.js":288,"./hi":289,"./hi.js":289,"./hr":290,"./hr.js":290,"./hu":291,"./hu.js":291,"./hy-am":292,"./hy-am.js":292,"./id":293,"./id.js":293,"./is":294,"./is.js":294,"./it":295,"./it.js":295,"./ja":296,"./ja.js":296,"./jv":297,"./jv.js":297,"./ka":298,"./ka.js":298,"./kk":299,"./kk.js":299,"./km":300,"./km.js":300,"./kn":301,"./kn.js":301,"./ko":302,"./ko.js":302,"./ky":303,"./ky.js":303,"./lb":304,"./lb.js":304,"./lo":305,"./lo.js":305,"./lt":306,"./lt.js":306,"./lv":307,"./lv.js":307,"./me":308,"./me.js":308,"./mi":309,"./mi.js":309,"./mk":310,"./mk.js":310,"./ml":311,"./ml.js":311,"./mn":312,"./mn.js":312,"./mr":313,"./mr.js":313,"./ms":314,"./ms-my":315,"./ms-my.js":315,"./ms.js":314,"./mt":316,"./mt.js":316,"./my":317,"./my.js":317,"./nb":318,"./nb.js":318,"./ne":319,"./ne.js":319,"./nl":320,"./nl-be":321,"./nl-be.js":321,"./nl.js":320,"./nn":322,"./nn.js":322,"./pa-in":323,"./pa-in.js":323,"./pl":324,"./pl.js":324,"./pt":325,"./pt-br":326,"./pt-br.js":326,"./pt.js":325,"./ro":327,"./ro.js":327,"./ru":328,"./ru.js":328,"./sd":329,"./sd.js":329,"./se":330,"./se.js":330,"./si":331,"./si.js":331,"./sk":332,"./sk.js":332,"./sl":333,"./sl.js":333,"./sq":334,"./sq.js":334,"./sr":335,"./sr-cyrl":336,"./sr-cyrl.js":336,"./sr.js":335,"./ss":337,"./ss.js":337,"./sv":338,"./sv.js":338,"./sw":339,"./sw.js":339,"./ta":340,"./ta.js":340,"./te":341,"./te.js":341,"./tet":342,"./tet.js":342,"./tg":343,"./tg.js":343,"./th":344,"./th.js":344,"./tl-ph":345,"./tl-ph.js":345,"./tlh":346,"./tlh.js":346,"./tr":347,"./tr.js":347,"./tzl":348,"./tzl.js":348,"./tzm":349,"./tzm-latn":350,"./tzm-latn.js":350,"./tzm.js":349,"./ug-cn":351,"./ug-cn.js":351,"./uk":352,"./uk.js":352,"./ur":353,"./ur.js":353,"./uz":354,"./uz-latn":355,"./uz-latn.js":355,"./uz.js":354,"./vi":356,"./vi.js":356,"./x-pseudo":357,"./x-pseudo.js":357,"./yo":358,"./yo.js":358,"./zh-cn":359,"./zh-cn.js":359,"./zh-hk":360,"./zh-hk.js":360,"./zh-tw":361,"./zh-tw.js":361};function a(e){var t=l(e);return n(t)}function l(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(s)},a.resolve=l,e.exports=a,a.id=511},625:function(e,t,n){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(11));n(22);var l=c(n(17)),r=c(n(814)),i=c(n(1208));function c(e){return e&&e.__esModule?e:{default:e}}var o={taobao:"淘宝",tmall:"天猫",tmallhk:"天猫国际",international:"国际站(Alibaba.com)",china:"中文站",aliexpress:"国际站(Aliexpress.com)",jd:"京东"},u=(0,l.default)(function(t){var n=t.state,l=n.start_time,c=n.end_time,u=n.platform,j=n.isShowPlatformList,m=n.dataList;return e.createElement("div",{className:"daily-wrapper"},e.createElement("header",null,e.createElement("section",null,e.createElement("span",{onClick:t.showPlatformList,style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},e.createElement("span",null,o[u]),e.createElement(a.default,{type:j?"up":"down",theme:"outlined"})),j?e.createElement("ul",{className:"list-view-wrapper"},Object.keys(o).map(function(n){return e.createElement("li",{onClick:t.handleClickPlatform,"data-platform":n,"data-type":"jd"===n?"jd":"taobao"===n||"tmall"===n||"tmallhk"===n?"tb":"1688",className:u===n?"active":"",key:n},o[n])})):null),e.createElement("section",null,e.createElement(r.default,{okText:"完成",dismissText:"取消",datePicker:e.createElement(i.default,{defaultDate:l}),transitionName:"rmc-picker-popup-slide-fade",maskTransitionName:"rmc-picker-popup-fade",onChange:t.handleConfirm.bind(t,"start_time")},e.createElement("span",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},e.createElement("span",null,s(l).format("YYYY-MM-DD")),e.createElement(a.default,{type:"calendar",theme:"outlined"})))),e.createElement("section",null,e.createElement(r.default,{okText:"完成",dismissText:"取消",datePicker:e.createElement(i.default,{defaultDate:c}),transitionName:"rmc-picker-popup-slide-fade",maskTransitionName:"rmc-picker-popup-fade",onChange:t.handleConfirm.bind(t,"end_time")},e.createElement("span",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},e.createElement("span",null,s(c).format("YYYY-MM-DD")),e.createElement(a.default,{type:"calendar",theme:"outlined"}))))),e.createElement("main",null,m.length?m.map(function(n,s){return e.createElement("div",{key:s,className:"info-item"},e.createElement("div",{className:"info",onClick:t.toggleClick.bind(t,s)},e.createElement("p",null,e.createElement("span",null,n.shop_name?n.shop_name:""),e.createElement("span",null,n.wangwang?"（"+n.wangwang+"）":"")),e.createElement("p",null,e.createElement("span",null,n.entity_content)),e.createElement("p",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},e.createElement("span",null,n.status_str),e.createElement("span",null,e.createElement(a.default,{type:n.isShowDetail?"up":"down",theme:"outlined"})))),n.isShowDetail?e.createElement("div",{className:"detail"},e.createElement("p",null,"商品名称：",n.item_title),e.createElement("p",null,"价格：",n.sale_price?"￥ "+n.sale_price:""),e.createElement("p",null,"销量：",n.total_sold_quantity),e.createElement("p",null,"发货地：",n.item_local),e.createElement("br",null),e.createElement("p",null,"投诉单号：",n.batch_id),e.createElement("p",null,"知识产权：",n.ipr_name),e.createElement("p",null,"投诉时间：",n.gmt_create),e.createElement("p",null,"投诉账号：",n.account_id)):null)}):e.createElement("div",{style:{textAlign:"center",paddingTop:"20px"}},"暂无数据")))});t.default=u}).call(this,n(1),n(10))}}]);