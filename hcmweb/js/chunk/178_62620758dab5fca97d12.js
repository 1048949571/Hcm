(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{1167:function(e,t){},1168:function(e,t){},1182:function(e,t){},1187:function(e,t){},28:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var a=function(t){function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),n(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),a}();t.default=a}).call(this,n(1))},433:function(e,t){},552:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=s(n(33)),r=s(n(435)),l=s(n(32)),i=s(n(11)),c=s(n(73));n(41),n(436),n(42),n(22),n(72);var o=s(n(17)),u=(s(n(28)),s(n(773)));function s(e){return e&&e.__esModule?e:{default:e}}var m=function(t){return e.createElement("div",null,t)},d=(0,o.default)(function(t){var n=t.state.dataList,o=n.binding,s=n.userid,d=n.campaign_examine_apply,f=void 0===d?"-":d,p=n.campaign_inspect_num,h=void 0===p?"-":p,g=n.dealer_applying_num,E=void 0===g?"-":g,v=n.danlian_yc_num,b=void 0===v?"-":v,y=n.guanjianci_yc_num,w=void 0===y?"-":y,_=n.dingdan_yc_num,N=void 0===_?"-":_,x=n.huodong_yc_num,k=void 0===x?"-":x,C=n.shoujia_yc_num,O=void 0===C?"-":C,j=function(e){window.location.href=e};return e.createElement("div",{className:"brand-home"},s?e.createElement(u.default,{userId:s,binding:o}):null,e.createElement("div",{className:"content"},e.createElement("div",{className:"flex-row"},e.createElement(c.default,{className:"warning-box",bodyStyle:{padding:16,flex:"1 0"},hoverable:!0,title:m("异常提醒")},e.createElement(c.default.Grid,{onClick:function(){return j("/index.html#/PriceMonitor")},className:"item"},e.createElement("span",null,O),e.createElement("img",{src:"../../../../img/icon1.1/home_Price.png"}),e.createElement("p",null,"售价表监控异常")),e.createElement(c.default.Grid,{onClick:function(){return j("/index.html#/keywordMonitor")},className:"item"},e.createElement("span",null,w),e.createElement("img",{src:"../../../../img/icon1.1/home_Keywords.png"}),e.createElement("p",null,"关键词监控异常")),e.createElement(c.default.Grid,{onClick:function(){return j("/index.html#/UrlMonitor")},className:"item"},e.createElement("span",null,b),e.createElement("img",{src:"../../../../img/icon1.1/home_Singlelink.png"}),e.createElement("p",null,"单链接监控异常")),e.createElement(c.default.Grid,{onClick:function(){return j("/index.html#/OrderMonitor")},className:"item"},e.createElement("span",null,N),e.createElement("img",{src:"../../../../img/icon1.1/home_Order.png"}),e.createElement("p",null,"订单监控异常")),e.createElement(c.default.Grid,{onClick:function(){return j("/index.html#/ActivityInspect")},className:"item"},e.createElement("span",null,k),e.createElement("img",{src:"../../../../img/icon1.1/home_Inspection.png"}),e.createElement("p",null,"活动稽查结果异常"))),e.createElement(c.default,{className:"todo-list",hoverable:!0,title:m("代办事宜")},e.createElement(c.default.Grid,{onClick:function(){return j("/index.html#/PendingClient")},className:"item"},e.createElement("div",null,e.createElement("img",{src:"../../../../img/icon1.1/home_Dealer.png"}),e.createElement("p",null,"经销商入驻待审批")),e.createElement("span",null,E)),e.createElement(c.default.Grid,{onClick:function(){return j("/index.html#/ActivityReview")},className:"item"},e.createElement("div",null,e.createElement("img",{src:"../../../../img/icon1.1/home_Pending.png"}),e.createElement("p",null,"活动申请待审批")),e.createElement("span",null,f)),e.createElement(c.default.Grid,{onClick:function(){return j("/index.html#/ActivityInspect")},className:"item"},e.createElement("div",null,e.createElement("img",{src:"../../../../img/icon1.1/Pending_intervention.png"}),e.createElement("p",null,"活动稽查待稽查")),e.createElement("span",null,h)))),e.createElement("div",{style:{marginTop:10},className:"flex-row"},e.createElement(c.default,{className:"brand-box",hoverable:!0,title:m("品牌商品库信息概览")},e.createElement(a.default,{type:"flex",justify:"space-between",align:"middle"},e.createElement(l.default,{onClick:function(){return t.CarouselHome.current.prev()},className:"but",span:1},e.createElement(i.default,{type:"left"})),e.createElement(l.default,{span:22},e.createElement(r.default,{ref:t.CarouselHome,dots:!1,effect:"fade"},t.carouselItem())),e.createElement(l.default,{onClick:function(){return t.CarouselHome.current.next()},className:"but",span:1},e.createElement(i.default,{type:"right"}))))),e.createElement("div",{style:{marginTop:10},className:"flex-row"},e.createElement(c.default,{className:"dealer-box",hoverable:!0,title:m("经销商所在大区分布概览")},e.createElement("div",{id:"chart-dealers"})),e.createElement(c.default,{className:"shop-box",hoverable:!0,title:m("店铺所属平台占比")},e.createElement("div",{id:"chart-shops"})))))});t.default=d}).call(this,n(1))},773:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(14)),r=c(n(15)),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(18),n(16);var i=c(n(12));function c(e){return e&&e.__esModule?e:{default:e}}n(1182);var o=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.getData=function(){var e="";e="DEALER"===window.localStorage.getItem("logintype")?"/hcm/Index/dealerIndex":"/hcm/Index/bmaincustomerIndex",i.default.get(e).then(function(e){"10000"===e.data.status&&(t.setState({isBinding:e.data.data.binding}),e.data.data.binding&&clearInterval(t.timer))}).catch(function(e){r.default.error("系统繁忙，请稍后再试！")})},t.getQrcode=function(){i.default.post("/hcm/wechat/getQRcode",{userid:t.props.userId,usertype:"c"}).then(function(e){var n=e.data,a=n.data,l=n.message;"10000"===n.status?t.setState({qrCodeUrl:"https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket="+a}):r.default.error(l)}).catch(function(e){r.default.error("网络繁忙，请稍后再试！")})},t.handleClickFn=function(){window.sessionStorage.setItem("wechatModalStatus","123"),t.setState({show:!1}),clearInterval(t.timer)},t.state={show:!0,isBinding:e.binding,qrCodeUrl:""},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),l(n,[{key:"componentWillMount",value:function(){window.sessionStorage.getItem("wechatModalStatus")||this.state.isBinding||(this.getQrcode(),this.timer=setInterval(this.getData,5e3))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=this.state,n=t.isBinding,r=t.show,l=t.qrCodeUrl;return n||!r||window.sessionStorage.getItem("wechatModalStatus")?null:e.createElement("div",{className:"out-wrapper"},e.createElement("div",{className:"mask"}),e.createElement("div",{className:"wechat-bind-wrapper"},e.createElement("div",{className:"qrcode"},e.createElement("img",{src:l,alt:"二维码"})),e.createElement("h6",null,"关注微信公众号，绑定微信"),e.createElement("p",{className:"text"},"关注后："),e.createElement("p",{className:"text"},"1、你可以便捷接收业务提醒，查看业务消息。"),e.createElement("p",{className:"text"},"2、你可以在登录时使用微信扫码登录。"),e.createElement(a.default,{className:"btn",onClick:this.handleClickFn},"稍后绑定")))}}]),n}();t.default=o}).call(this,n(1))}}]);