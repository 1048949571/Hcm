(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{17:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}();t.default=function(t){return function(n){function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),s(a,[{key:"render",value:function(){return e.createElement(t,this.props.that)}}]),a}()}}).call(this,s(1))},507:function(e,t){},511:function(e,t,s){var n={"./af":239,"./af.js":239,"./ar":240,"./ar-dz":241,"./ar-dz.js":241,"./ar-kw":242,"./ar-kw.js":242,"./ar-ly":243,"./ar-ly.js":243,"./ar-ma":244,"./ar-ma.js":244,"./ar-sa":245,"./ar-sa.js":245,"./ar-tn":246,"./ar-tn.js":246,"./ar.js":240,"./az":247,"./az.js":247,"./be":248,"./be.js":248,"./bg":249,"./bg.js":249,"./bm":250,"./bm.js":250,"./bn":251,"./bn.js":251,"./bo":252,"./bo.js":252,"./br":253,"./br.js":253,"./bs":254,"./bs.js":254,"./ca":255,"./ca.js":255,"./cs":256,"./cs.js":256,"./cv":257,"./cv.js":257,"./cy":258,"./cy.js":258,"./da":259,"./da.js":259,"./de":260,"./de-at":261,"./de-at.js":261,"./de-ch":262,"./de-ch.js":262,"./de.js":260,"./dv":263,"./dv.js":263,"./el":264,"./el.js":264,"./en-au":265,"./en-au.js":265,"./en-ca":266,"./en-ca.js":266,"./en-gb":267,"./en-gb.js":267,"./en-ie":268,"./en-ie.js":268,"./en-il":269,"./en-il.js":269,"./en-nz":270,"./en-nz.js":270,"./eo":271,"./eo.js":271,"./es":272,"./es-do":273,"./es-do.js":273,"./es-us":274,"./es-us.js":274,"./es.js":272,"./et":275,"./et.js":275,"./eu":276,"./eu.js":276,"./fa":277,"./fa.js":277,"./fi":278,"./fi.js":278,"./fo":279,"./fo.js":279,"./fr":280,"./fr-ca":281,"./fr-ca.js":281,"./fr-ch":282,"./fr-ch.js":282,"./fr.js":280,"./fy":283,"./fy.js":283,"./gd":284,"./gd.js":284,"./gl":285,"./gl.js":285,"./gom-latn":286,"./gom-latn.js":286,"./gu":287,"./gu.js":287,"./he":288,"./he.js":288,"./hi":289,"./hi.js":289,"./hr":290,"./hr.js":290,"./hu":291,"./hu.js":291,"./hy-am":292,"./hy-am.js":292,"./id":293,"./id.js":293,"./is":294,"./is.js":294,"./it":295,"./it.js":295,"./ja":296,"./ja.js":296,"./jv":297,"./jv.js":297,"./ka":298,"./ka.js":298,"./kk":299,"./kk.js":299,"./km":300,"./km.js":300,"./kn":301,"./kn.js":301,"./ko":302,"./ko.js":302,"./ky":303,"./ky.js":303,"./lb":304,"./lb.js":304,"./lo":305,"./lo.js":305,"./lt":306,"./lt.js":306,"./lv":307,"./lv.js":307,"./me":308,"./me.js":308,"./mi":309,"./mi.js":309,"./mk":310,"./mk.js":310,"./ml":311,"./ml.js":311,"./mn":312,"./mn.js":312,"./mr":313,"./mr.js":313,"./ms":314,"./ms-my":315,"./ms-my.js":315,"./ms.js":314,"./mt":316,"./mt.js":316,"./my":317,"./my.js":317,"./nb":318,"./nb.js":318,"./ne":319,"./ne.js":319,"./nl":320,"./nl-be":321,"./nl-be.js":321,"./nl.js":320,"./nn":322,"./nn.js":322,"./pa-in":323,"./pa-in.js":323,"./pl":324,"./pl.js":324,"./pt":325,"./pt-br":326,"./pt-br.js":326,"./pt.js":325,"./ro":327,"./ro.js":327,"./ru":328,"./ru.js":328,"./sd":329,"./sd.js":329,"./se":330,"./se.js":330,"./si":331,"./si.js":331,"./sk":332,"./sk.js":332,"./sl":333,"./sl.js":333,"./sq":334,"./sq.js":334,"./sr":335,"./sr-cyrl":336,"./sr-cyrl.js":336,"./sr.js":335,"./ss":337,"./ss.js":337,"./sv":338,"./sv.js":338,"./sw":339,"./sw.js":339,"./ta":340,"./ta.js":340,"./te":341,"./te.js":341,"./tet":342,"./tet.js":342,"./tg":343,"./tg.js":343,"./th":344,"./th.js":344,"./tl-ph":345,"./tl-ph.js":345,"./tlh":346,"./tlh.js":346,"./tr":347,"./tr.js":347,"./tzl":348,"./tzl.js":348,"./tzm":349,"./tzm-latn":350,"./tzm-latn.js":350,"./tzm.js":349,"./ug-cn":351,"./ug-cn.js":351,"./uk":352,"./uk.js":352,"./ur":353,"./ur.js":353,"./uz":354,"./uz-latn":355,"./uz-latn.js":355,"./uz.js":354,"./vi":356,"./vi.js":356,"./x-pseudo":357,"./x-pseudo.js":357,"./yo":358,"./yo.js":358,"./zh-cn":359,"./zh-cn.js":359,"./zh-hk":360,"./zh-hk.js":360,"./zh-tw":361,"./zh-tw.js":361};function a(e){var t=r(e);return s(t)}function r(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id=511},626:function(e,t,s){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0});var a=m(s(11)),r=m(s(438)),l=m(s(14)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e};s(22),s(437),s(18);var c=m(s(17)),i=s(1209),u=m(s(1210)),j=m(s(814));function m(e){return e&&e.__esModule?e:{default:e}}var f=l.default.Group,d=(0,c.default)(function(t){document.title="维权报表";var s=t.state,c=s.tabs,m=s.platform,d=s.statr_date,p=s.end_time,h=s.page,b=s.shopList,y=(t.props,e.createElement(u.default,{maxDate:new Date}));return e.createElement("div",{className:"month"},e.createElement("div",{className:"but-box"},e.createElement(f,null,e.createElement(l.default,{className:"taobao"==m?"active":null,onTouchStart:function(){return t.onActive("taobao")}},"淘宝维权报表"),e.createElement(l.default,{className:"1688"==m?"active":null,onTouchStart:function(){return t.onActive("1688")}},"1688维权报表"))),e.createElement("div",{className:"date-box"},e.createElement("span",{className:"title"},"投诉时间："),e.createElement("div",{style:{display:"flex",justifyContent:"space-between",flexGrow:"1"}},e.createElement("div",{className:"statr-time",style:{width:"49%"}},e.createElement(j.default,{datePicker:y,transitionName:"rmc-picker-popup-slide-fade",maskTransitionName:"rmc-picker-popup-fade",date:d,okText:"完成",dismissText:"取消",onDismiss:t.onDismiss,onChange:function(e){return t.onChange(e,"statr_date")}},e.createElement("button",{className:"statr-time-box",onClick:t.show},n(d).format("YYYY-MM-DD"),e.createElement(a.default,{type:"calendar",theme:"outlined"})))),e.createElement("div",{className:"end-time",style:{width:"49%"}},e.createElement(j.default,{datePicker:y,transitionName:"rmc-picker-popup-slide-fade",maskTransitionName:"rmc-picker-popup-fade",date:p,okText:"完成",dismissText:"取消",onDismiss:t.onDismiss,onChange:function(e){return t.onChange(e,"end_time")}},e.createElement("button",{className:"statr-time-box",onClick:t.show},n(p).format("YYYY-MM-DD"),e.createElement(a.default,{type:"calendar",theme:"outlined"})))))),e.createElement(i.Tabs,{distanceToChangeTa:.5,page:h,onChange:function(e,s){t.onTabchange(s)},tabs:c,renderTabBar:function(t){return e.createElement(i.Tabs.DefaultTabBar,o({},t,{page:3}))}},function(t){return e.createElement("div",{className:"tab-item"},e.createElement("h5",null,e.createElement("span",null,"投诉链接情况概览")),e.createElement("div",{className:"echarts"}),e.createElement("h5",null,e.createElement("span",null,"店铺被投次数排行")),e.createElement("ul",{className:"shop-items"},b.length?b.map(function(t,s){return e.createElement("li",{key:s,className:"item"},e.createElement("div",{className:"left"},e.createElement(r.default,{style:s>2?{backgroundColor:"#f0f2f5",color:"#333"}:{backgroundColor:"#c1a569"},count:s+1})),e.createElement("div",{className:"right"},e.createElement("h6",null,t.entity_owner_name),e.createElement("div",null,e.createElement("span",null,"被投诉：",t.all_count,"次"),e.createElement("span",null,"撤诉：",t.c_count,"次"))))}):e.createElement("li",{style:{textAlign:"center",listStyle:"none",paddingTop:"20px"}},"暂无数据")))}))});t.default=d}).call(this,s(1),s(10))},822:function(e,t){}}]);