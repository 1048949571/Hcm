(window.webpackJsonp=window.webpackJsonp||[]).push([[16,283],{1159:function(e,t){},1160:function(e,t){},1161:function(e,t){},1162:function(e,t){},1163:function(e,t){},1167:function(e,t){},1168:function(e,t){},1187:function(e,t){},120:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{width:"20px",height:"20px"};return{TB:e.createElement("img",{style:n,src:"../../../../img/platform/1_taobao.svg"}),TM:e.createElement("img",{style:n,src:"../../../../img/platform/2_tall.svg"}),JD:e.createElement("img",{style:n,src:"../../../../img/platform/3_jd.svg"}),SN:e.createElement("img",{style:n,src:"../../../../img/platform/4_suning.svg"}),GM:e.createElement("img",{style:n,src:"../../../../img/platform/5_gome.svg"}),PDD:e.createElement("img",{style:n,src:"../../../../img/platform/6_pinduoduo.svg"}),AMAZON:e.createElement("img",{style:n,src:"../../../../img/platform/7_a.svg"}),WPH:e.createElement("img",{style:n,src:"../../../../img/platform/8_weipinhui.svg"}),1688:e.createElement("img",{style:n,src:"../../../../img/platform/9_1688.svg"}),SMT:e.createElement("img",{style:n,src:"../../../../img/platform/10_sumaitong.svg"}),DD:e.createElement("img",{style:n,src:"../../../../img/platform/11_dangdang.svg"}),ALST:e.createElement("img",{style:n,src:"../../../../img/platform/12_lingshoutong.svg"}),"1HD":e.createElement("img",{style:n,src:"../../../../img/platform/13_1haodian.svg"}),YJWD:e.createElement("img",{style:n,src:"../../../../img/platform/14_yunji.svg"}),YLW:e.createElement("img",{style:n,src:"../../../../img/platform/15_youle.svg"}),XY:e.createElement("img",{style:n,src:"../../../../img/platform/16_xainyu.svg"}),WECD:e.createElement("img",{style:n,src:"../../../../img/platform/17_weixin.svg"}),MGJ:e.createElement("img",{style:n,src:"../../../../img/platform/18_mogujie.svg"}),JMYP:e.createElement("img",{style:n,src:"../../../../img/platform/19_jumei.svg"}),CCJ:e.createElement("img",{style:n,src:"../../../../img/platform/20_chuchujie.svg"}),BBWG:e.createElement("img",{style:n,src:"../../../../img/platform/21_beibeiwang.svg"}),platform_OTHER:e.createElement("img",{style:n,src:"../../../../img/platform/22_qita.svg"})}[t]}}).call(this,n(1))},28:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}();var l=function(t){function l(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,e.Component),n(l,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),l}();t.default=l}).call(this,n(1))},433:function(e,t){},633:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=g(n(45)),a=g(n(37)),r=g(n(435)),i=g(n(33)),o=g(n(32)),s=g(n(73)),m=g(n(11));n(46),n(36),n(436),n(41),n(42),n(72),n(22),n(816);var c=g(n(17)),p=g(n(28)),d=g(n(120));function g(e){return e&&e.__esModule?e:{default:e}}var f=(0,c.default)(function(t){var n={cursor:"pointer",border:"1px solid dodgerblue"},c={cursor:"pointer",border:"1px solid #fff"},g=["rgba(24,144,255,1)","rgba(55,203,203,1)","rgba(250,211,55,1)","rgba(242,99,123,1)","rgba(151,95,228,1)","#ccc"];return e.createElement("div",{className:"BrandMerchandise"},e.createElement("div",{className:"content"},e.createElement("div",{className:"contentBox"},e.createElement(s.default,{bodyStyle:{padding:"0px",display:"flex",flexGrow:"1"},title:"品牌商品库信息概览",bordered:!1,style:{width:"100%",display:"flex",height:"100%",flexDirection:"column",color:"#333"}},e.createElement("div",null,e.createElement(m.default,{type:"left",theme:"outlined",style:{fontSize:"30px",lineHeight:"344px",margin:"0px 5px",color:"#D9D9D9"},onClick:t.handlePrev})),""!=t.state.JingPinPTx?e.createElement(r.default,{style:{width:"95%",height:"320px"},dots:!1,beforeChange:t.beforeChange,afterChange:t.onChange,ref:t.refx},e.createElement("div",{style:{height:"320px",marginTop:"10px"}},e.createElement(i.default,{gutter:16},e.createElement(o.default,{span:7,style:{padding:"0px",background:"rgba(255,255,255,1)",boxShadow:"0px 3px 8px 0px rgba(11,72,120,0.15)",marginLeft:"20px"}},e.createElement(s.default,{style:t.state.CardStyle==t.state.JingPinPTx[0].platform_code?n:c,onClick:function(){return t.CardStyle(t.state.JingPinPTx[0].platform_code)},title:e.createElement("div",{style:{width:"150px",marginLeft:"30%"}}," ",(0,d.default)("TB",{float:"left",width:"34px",height:"34px"})," ",e.createElement("b",{style:{fontSize:"14px",color:"#666",float:"left",marginTop:" 5px",marginLeft:"6px"}},t.state.JingPinPTx[0].platform_name)),bordered:!1},e.createElement("div",{className:"CardDivs",style:{float:"left",textAlign:"left"}},e.createElement("h4",null,"店铺数"),e.createElement("h5",null,"商品数  "),e.createElement("h5",null,"平均铺货密度")),e.createElement("div",{className:"CardDivs",style:{float:"right",textAlign:"right"}},e.createElement("h5",null,t.state.JingPinPTx[0].my_brand.shopcount," "),e.createElement("h5",null,t.state.JingPinPTx[0].my_brand.itemcount),e.createElement("h5",null,t.state.JingPinPTx[0].my_brand.shopcount>0?parseInt(t.state.JingPinPTx[0].my_brand.itemcount/t.state.JingPinPTx[0].my_brand.shopcount):0,"个/店")))),e.createElement(o.default,{span:7,style:{padding:"0px",background:"rgba(255,255,255,1)",boxShadow:"0px 3px 8px 0px rgba(11,72,120,0.15)",margin:"0 30px"}},e.createElement(s.default,{style:t.state.CardStyle==t.state.JingPinPTx[3].platform_code?n:c,onClick:function(){return t.CardStyle(t.state.JingPinPTx[3].platform_code)},title:e.createElement("div",{style:{width:"150px",marginLeft:"30%"}},(0,d.default)("JD",{float:"left",width:"34px",height:"34px"})," ",e.createElement("b",{style:{fontSize:"14px",color:"#666",float:"left",marginTop:" 5px",marginLeft:"6px"}},t.state.JingPinPTx[3].platform_name)),bordered:!1},e.createElement("div",{className:"CardDivs",style:{float:"left",textAlign:"left"}},e.createElement("h4",null,"店铺数"),e.createElement("h5",null,"商品数  "),e.createElement("h5",null,"平均铺货密度")),e.createElement("div",{className:"CardDivs",style:{float:"right",textAlign:"right"}},e.createElement("h5",null,t.state.JingPinPTx[3].my_brand.shopcount," "),e.createElement("h5",null,t.state.JingPinPTx[3].my_brand.itemcount),e.createElement("h5",null,t.state.JingPinPTx[3].my_brand.shopcount>0?parseInt(t.state.JingPinPTx[3].my_brand.itemcount/t.state.JingPinPTx[3].my_brand.shopcount):0,"个/店")))),e.createElement(o.default,{span:7,style:{padding:"0px",background:"rgba(255,255,255,1)",boxShadow:"0px 3px 8px 0px rgba(11,72,120,0.15)",marginRight:"30px"}},e.createElement(s.default,{style:t.state.CardStyle==t.state.JingPinPTx[4].platform_code?n:c,onClick:function(){return t.CardStyle(t.state.JingPinPTx[4].platform_code)},title:e.createElement("div",{style:{width:"150px",marginLeft:"30%"}}," ",(0,d.default)("PDD",{float:"left",width:"34px",height:"34px"})," ",e.createElement("b",{style:{fontSize:"14px",color:"#666",float:"left",marginTop:" 5px",marginLeft:"6px"}},t.state.JingPinPTx[4].platform_name)),bordered:!1},e.createElement("div",{className:"CardDivs",style:{float:"left",textAlign:"left"}},e.createElement("h4",null,"店铺数"),e.createElement("h5",null,"商品数  "),e.createElement("h5",null,"平均铺货密度")),e.createElement("div",{className:"CardDivs",style:{float:"right",textAlign:"right"}},e.createElement("h5",null,t.state.JingPinPTx[4].my_brand.shopcount," "),e.createElement("h5",null,t.state.JingPinPTx[4].my_brand.itemcount),e.createElement("h5",null,t.state.JingPinPTx[4].my_brand.shopcount>0?parseInt(t.state.JingPinPTx[4].my_brand.itemcount/t.state.JingPinPTx[4].my_brand.shopcount):0,"个/店")))))),e.createElement("div",{style:{height:"320px",marginTop:"10px"}},e.createElement(i.default,{gutter:16},e.createElement(o.default,{span:7,style:{padding:"0px",background:"rgba(255,255,255,1)",boxShadow:"0px 3px 8px 0px rgba(11,72,120,0.15)",marginLeft:"20px"}},e.createElement(s.default,{style:t.state.CardStyle==t.state.JingPinPTx[1].platform_code?n:c,onClick:function(){return t.CardStyle(t.state.JingPinPTx[1].platform_code)},title:e.createElement("div",{style:{width:"150px",marginLeft:"30%"}}," ",(0,d.default)("1688",{float:"left",width:"34px",height:"34px"})," ",e.createElement("b",{style:{fontSize:"14px",color:"#666",float:"left",marginTop:" 5px",marginLeft:"6px"}},t.state.JingPinPTx[1].platform_name)),bordered:!1},e.createElement("div",{className:"CardDivs",style:{float:"left",textAlign:"left"}},e.createElement("h4",null,"店铺数"),e.createElement("h5",null,"商品数  "),e.createElement("h5",null,"平均铺货密度")),e.createElement("div",{className:"CardDivs",style:{float:"right",textAlign:"right"}},e.createElement("h5",null,t.state.JingPinPTx[1].my_brand.shopcount," "),e.createElement("h5",null,t.state.JingPinPTx[1].my_brand.itemcount),e.createElement("h5",null,t.state.JingPinPTx[1].my_brand.shopcount>0?parseInt(t.state.JingPinPTx[1].my_brand.itemcount/t.state.JingPinPTx[1].my_brand.shopcount):0,"个/店")))),e.createElement(o.default,{span:7,style:{padding:"0px",background:"rgba(255,255,255,1)",boxShadow:"0px 3px 8px 0px rgba(11,72,120,0.15)",margin:"0 30px"}},e.createElement(s.default,{style:t.state.CardStyle==t.state.JingPinPTx[5].platform_code?n:c,onClick:function(){return t.CardStyle(t.state.JingPinPTx[5].platform_code)},title:e.createElement("div",{style:{width:"150px",marginLeft:"30%"}},(0,d.default)("SN",{float:"left",width:"34px",height:"34px"})," ",e.createElement("b",{style:{fontSize:"14px",color:"#666",float:"left",marginTop:" 5px",marginLeft:"6px"}},t.state.JingPinPTx[5].platform_name)),bordered:!1},e.createElement("div",{className:"CardDivs",style:{float:"left",textAlign:"left"}},e.createElement("h4",null,"店铺数"),e.createElement("h5",null,"商品数  "),e.createElement("h5",null,"平均铺货密度")),e.createElement("div",{className:"CardDivs",style:{float:"right",textAlign:"right"}},e.createElement("h5",null,t.state.JingPinPTx[5].my_brand.shopcount," "),e.createElement("h5",null,t.state.JingPinPTx[5].my_brand.itemcount),e.createElement("h5",null,t.state.JingPinPTx[5].my_brand.shopcount>0?parseInt(t.state.JingPinPTx[5].my_brand.itemcount/t.state.JingPinPTx[5].my_brand.shopcount):0,"个/店")))),e.createElement(o.default,{span:7,style:{padding:"0px",background:"rgba(255,255,255,1)",boxShadow:"0px 3px 8px 0px rgba(11,72,120,0.15)",marginRight:"30px"}},e.createElement(s.default,{style:t.state.CardStyle==t.state.JingPinPTx[2].platform_code?n:c,onClick:function(){return t.CardStyle(t.state.JingPinPTx[2].platform_code)},title:e.createElement("div",{style:{width:"150px",marginLeft:"30%"}}," ",(0,d.default)("DD",{float:"left",width:"34px",height:"34px"})," ",e.createElement("b",{style:{fontSize:"14px",color:"#666",float:"left",marginTop:" 5px",marginLeft:"6px"}},t.state.JingPinPTx[2].platform_name)),bordered:!1},e.createElement("div",{className:"CardDivs",style:{float:"left",textAlign:"left"}},e.createElement("h4",null,"店铺数"),e.createElement("h5",null,"商品数  "),e.createElement("h5",null,"平均铺货密度")),e.createElement("div",{className:"CardDivs",style:{float:"right",textAlign:"right"}},e.createElement("h5",null,t.state.JingPinPTx[2].my_brand.shopcount," "),e.createElement("h5",null,t.state.JingPinPTx[2].my_brand.itemcount),e.createElement("h5",null,t.state.JingPinPTx[2].my_brand.shopcount>0?parseInt(t.state.JingPinPTx[2].my_brand.itemcount/t.state.JingPinPTx[2].my_brand.shopcount):0,"个/店")))))),e.createElement("div",{style:{height:"320px",marginTop:"10px"}},e.createElement(i.default,{gutter:16},e.createElement(o.default,{span:7,style:{padding:"0px",background:"rgba(255,255,255,1)",boxShadow:"0px 3px 8px 0px rgba(11,72,120,0.15)",marginLeft:"20px"}},e.createElement(s.default,{style:t.state.CardStyle==t.state.JingPinPTx[7].platform_code?n:c,onClick:function(){return t.CardStyle(t.state.JingPinPTx[7].platform_code)},title:e.createElement("div",{style:{width:"150px",marginLeft:"30%"}}," ",(0,d.default)("XY",{float:"left",width:"34px",height:"34px"})," ",e.createElement("b",{style:{fontSize:"14px",color:"#666",float:"left",marginTop:" 5px",marginLeft:"6px"}},t.state.JingPinPTx[7].platform_name)),bordered:!1},e.createElement("div",{className:"CardDivs",style:{float:"left",textAlign:"left"}},e.createElement("h4",null,"店铺数"),e.createElement("h5",null,"商品数  "),e.createElement("h5",null,"平均铺货密度")),e.createElement("div",{className:"CardDivs",style:{float:"right",textAlign:"right"}},e.createElement("h5",null,t.state.JingPinPTx[7].my_brand.shopcount," "),e.createElement("h5",null,t.state.JingPinPTx[7].my_brand.itemcount),e.createElement("h5",null,t.state.JingPinPTx[7].my_brand.shopcount>0?parseInt(t.state.JingPinPTx[7].my_brand.itemcount/t.state.JingPinPTx[7].my_brand.shopcount):0,"个/店")))),e.createElement(o.default,{span:7,style:{padding:"0px",background:"rgba(255,255,255,1)",boxShadow:"0px 3px 8px 0px rgba(11,72,120,0.15)",margin:"0 30px"}},e.createElement(s.default,{style:t.state.CardStyle==t.state.JingPinPTx[6].platform_code?n:c,onClick:function(){return t.CardStyle(t.state.JingPinPTx[6].platform_code)},title:e.createElement("div",{style:{width:"150px",marginLeft:"30%"}},(0,d.default)("WPH",{float:"left",width:"34px",height:"34px"})," ",e.createElement("b",{style:{fontSize:"14px",color:"#666",float:"left",marginTop:" 5px",marginLeft:"6px"}},t.state.JingPinPTx[6].platform_name)),bordered:!1},e.createElement("div",{className:"CardDivs",style:{float:"left",textAlign:"left"}},e.createElement("h4",null,"店铺数"),e.createElement("h5",null,"商品数  "),e.createElement("h5",null,"平均铺货密度")),e.createElement("div",{className:"CardDivs",style:{float:"right",textAlign:"right"}},e.createElement("h5",null,t.state.JingPinPTx[6].my_brand.shopcount," "),e.createElement("h5",null,t.state.JingPinPTx[6].my_brand.itemcount),e.createElement("h5",null,t.state.JingPinPTx[6].my_brand.shopcount>0?parseInt(t.state.JingPinPTx[6].my_brand.itemcount/t.state.JingPinPTx[6].my_brand.shopcount):0,"个/店")))),e.createElement(o.default,{span:7,style:{padding:"0px",background:"rgba(255,255,255,1)",boxShadow:"0px 3px 8px 0px rgba(11,72,120,0.15)",marginRight:"30px"}})))):e.createElement(r.default,{style:{width:"95%",height:"320px"},dots:!1,beforeChange:t.beforeChange,afterChange:t.onChange,ref:t.refx},e.createElement("div",{style:{height:"320px",marginTop:"10px"}})),e.createElement("div",null,e.createElement(m.default,{type:"right",theme:"outlined",style:{fontSize:"30px",lineHeight:"344px",margin:"0px 5px",color:"#D9D9D9"},onClick:t.handleNext})))),e.createElement("div",{className:"contentBoxs",style:{width:"40%"}},e.createElement(s.default,{bodyStyle:{padding:"0px",display:"flex",flexGrow:"1"},title:"授权、白名单店铺占比",bordered:!1,style:{width:"100%",display:"flex",flex:"1",height:"100%",flexDirection:"column",color:"#333"}},e.createElement("div",{style:{width:"100%",marginTop:"10px"}},e.createElement("div",{style:{height:"200px"}},e.createElement("div",{className:"echarts"},e.createElement("div",null,e.createElement("h4",null,""!=t.state.shopGroupData&&null!=t.state.shopGroupData?t.state.shopGroupData.authlist[1].value:0),e.createElement("h5",null,"授权店铺"))),e.createElement("div",{id:"echartsxx",style:{background:"#fff"}})),e.createElement("div",{style:{height:"200px"}},e.createElement("div",{className:"echartsb"},e.createElement("div",null,e.createElement("h4",null,""!=t.state.shopGroupData&&null!=t.state.shopGroupData?t.state.shopGroupData.whitelist[1].value:0),e.createElement("h5",null,"白名单店铺"))),e.createElement("div",{id:"echartsxxb",style:{background:"#fff"}}))))),e.createElement("div",{className:"contentBoxs",style:{width:"57%",marginLeft:"30px",overflowX:"scroll"}},e.createElement(s.default,{bodyStyle:{padding:"0px",display:"flex",flexGrow:"1",width:"1000px"},title:"价格区间内商品数量及占比分布",bordered:!1,style:{width:"100%",display:"flex",flex:"1",height:"100%",flexDirection:"column",color:"#333"}},e.createElement("div",{id:"container",style:{width:"1000px"}}))),e.createElement("div",{className:"contentBoxs",style:{width:"45%",height:"690px"}},e.createElement(s.default,{bodyStyle:{padding:"0px",display:"flex",flexGrow:"1"},title:"商品所在地排行",bordered:!1,style:{width:"100%",display:"flex",flex:"1",height:"100%",flexDirection:"column",color:"#333"}},e.createElement(a.default,{pagination:!1,style:{width:"100%",marginTop:"10px"},columns:t.state.columns,dataSource:t.state.Tabledata}),e.createElement(l.default,{pageSize:t.state.pageSize,current:t.state.pageNo,total:t.state.totalNum,onChange:t.changePagination,onShowSizeChange:t.onPaginationSize}))),e.createElement("div",{className:"contentBoxs",style:{width:"52%",height:"690px",marginLeft:"30px"}},e.createElement(s.default,{bodyStyle:{padding:"0px",display:"flex",flexGrow:"1"},title:"店铺等级占比",bordered:!1,style:{width:"100%",display:"flex",flex:"1",height:"100%",flexDirection:"column",color:"#333"}},e.createElement("div",{style:{width:"70%",marginTop:"50px"}},e.createElement("div",{id:"carvarCard",style:{background:"#fff"}})),e.createElement("div",{style:{width:"30%",marginTop:"50px"}},t.state.shopLevelZhanbi?e.createElement("ul",{style:{marginTop:"50%"}},t.state.shopLevelZhanbi.map(function(t,n){return e.createElement("li",{key:n,style:{display:"flex",marginTop:"10px"}},e.createElement("span",{style:{flex:"1"}},e.createElement("span",{style:{display:"inline-block",width:"10px",height:"10px",borderRadius:"50%",marginRight:"10px",background:g[n]}}),t.name),e.createElement("span",{style:{flex:"1"}},t.value,"（",(0!=t.total?t.value/t.total*100:t.total).toFixed(2),"%）"))})):e.createElement("ul",{style:{marginTop:"50%"}},e.createElement("li",{style:{display:"flex",marginTop:"10px"}},e.createElement("span",{style:{flex:"1"}},e.createElement("span",{style:{display:"inline-block",width:"10px",height:"10px",background:"rgba(24,144,255,1)",borderRadius:"50%",marginRight:"10px"}}),"天猫"),e.createElement("span",{style:{flex:"1"}},"0（0%）")),e.createElement("li",{style:{display:"flex",marginTop:"10px"}},e.createElement("span",{style:{flex:"1"}},e.createElement("span",{style:{display:"inline-block",width:"10px",height:"10px",background:"rgba(55,203,203,1)",borderRadius:"50%",marginRight:"10px"}}),"黄冠级"),e.createElement("span",{style:{flex:"1"}},"0（0%）")),e.createElement("li",{style:{display:"flex",marginTop:"10px"}},e.createElement("span",{style:{flex:"1"}},e.createElement("span",{style:{display:"inline-block",width:"10px",height:"10px",background:"rgba(250,211,55,1)",borderRadius:"50%",marginRight:"10px"}}),"蓝冠级"),e.createElement("span",{style:{flex:"1"}},"0（0%）")),e.createElement("li",{style:{display:"flex",marginTop:"10px"}},e.createElement("span",{style:{flex:"1"}},e.createElement("span",{style:{display:"inline-block",width:"10px",height:"10px",background:"rgba(242,99,123,1)",borderRadius:"50%",marginRight:"10px"}}),"钻级"),e.createElement("span",{style:{flex:"1"}},"0（0%）")),e.createElement("li",{style:{display:"flex",marginTop:"10px"}},e.createElement("span",{style:{flex:"1"}},e.createElement("span",{style:{display:"inline-block",width:"10px",height:"10px",background:"rgba(151,95,228,1)",borderRadius:"50%",marginRight:"10px"}}),"心级"),e.createElement("span",{style:{flex:"1"}},"0（0%）"))))))),e.createElement(p.default,{clazzName:"copyright"}))});t.default=f}).call(this,n(1))},816:function(e,t){}}]);