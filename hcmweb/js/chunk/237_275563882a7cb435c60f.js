(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{851:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=c(a(15)),o=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}();a(16);var r=c(a(633)),i=c(a(12)),l=c(a(135));function c(t){return t&&t.__esModule?t:{default:t}}var s=function(e){function a(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));o.JingPinPT=function(){i.default.post("/hcm/search/itemlistInfo").then(function(t){console.log(t),1e4==t.data.status?""!=t.data.data&&t.data.data!=[]&&o.setState({JingPinPTx:t.data.data,CardStyle:t.data.data[0].platform_code},function(){console.log(o.state.JingPinPTx[0].platform_name),o.shopGroupData(o.state.CardStyle),o.brandItemAreaSort(o.state.pageNo,o.state.pageSize,o.state.CardStyle),o.shopLevelZhanbi(o.state.CardStyle)}):n.default.error(t.data.message)}).catch(function(t){n.default.error(t.statusText)})},o.shopGroupData=function(t){i.default.post("/hcm/search/brandPriceSectionRatio",{platform_code:t}).then(function(t){1e4==t.data.status?""!=t.data.data&&t.data.data!=[]&&o.setState({shopGroupData:t.data.data[0],contertier:t.data.data[0]},function(){o.myChart(o.state.shopGroupData),o.contertier(o.state.contertier)}):n.default.error(t.data.message)}).catch(function(t){n.default.error(t.statusText)})},o.shopLevelZhanbi=function(t){i.default.post("/hcm/search/shopLevelZhanbi",{platform_code:t}).then(function(t){console.log(t),1e4==t.data.status?""!=t.data.data&&t.data.data!=[]&&o.setState({shopLevelZhanbi:t.data.data},function(){}):n.default.error(t.data.message)}).catch(function(t){n.default.error(t.statusText)})},o.myChart=function(t){var e=o.state.shopLevelZhanbi,a=l.default.init(document.getElementById("echartsxx")),n=l.default.init(document.getElementById("echartsxxb")),r=l.default.init(document.getElementById("carvarCard")),i=0;t.length&&(i=t.map(function(t){return t.value}).reduce(function(t,e,a,n){return t+e})),a.setOption({tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},series:[{name:"占比",type:"pie",radius:["0%","30%"],center:["50%","60%"],color:["#fff"],silent:!0,label:{position:"center",formatter:function(e){var a=t.authlist[1].value,n=t.authlist[0].value;return 0!=a&&0!=n?(a/n*100).toFixed(2)+"%\n占比":"0\n占比"},color:"#333",fontSize:14,rich:{a:{fontSize:14,color:"#999",align:"center"},c:{color:"#333",fontSize:20,padding:10,align:"center"}}},data:[{value:i,name:""}]},{type:"pie",radius:["50%","70%"],center:["50%","60%"],color:["#36CBCB","#ccc"],data:o.state.shopGroupData.authlist}]}),n.setOption({tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},series:[{name:"占比",type:"pie",radius:["0%","30%"],center:["50%","60%"],color:["#fff"],silent:!0,label:{position:"center",formatter:function(e){var a=t.whitelist[1].value,n=t.whitelist[0].value;return 0!=a&&0!=n?(a/n*100).toFixed(2)+"%\n占比":"0\n占比"},color:"#333",fontSize:14,rich:{a:{fontSize:14,color:"#999",align:"center"},c:{color:"#333",fontSize:20,padding:10,align:"center"}}},data:[{value:i,name:""}]},{type:"pie",radius:["50%","70%"],center:["50%","60%"],color:["#FAD43B","#ccc"],data:o.state.shopGroupData.whitelist}]}),r.setOption({tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},series:[{name:"总店铺数",type:"pie",radius:["0%","30%"],center:["50%","40%"],color:["#fff"],silent:!0,label:{position:"center",formatter:function(t){return console.log(e[0]),""!=e&&e!=[]?e[0].total+"\n总店铺数":"0\n总店铺数"},color:"#333",fontSize:14,rich:{a:{fontSize:14,color:"#999",align:"center"},c:{color:"#333",fontSize:20,padding:10,align:"center"}}},data:[{value:i,name:""}]},{type:"pie",radius:["50%","70%"],center:["50%","40%"],color:["#1890FF","#37CBCB","#FAD337","#F2637B","#975FE4","#ccc"],data:o.state.shopLevelZhanbi?o.state.shopLevelZhanbi:[{name:"天猫",value:0},{name:"黄冠级",value:0},{name:"蓝冠级",value:0},{name:"钻级",value:0},{name:"心级",value:0}]}]})},o.CardStyle=function(t){o.setState({CardStyle:t,shopLevelZhanbi:[],pageNo:1,pageSize:10,totalNum:0,Tabledata:[]},function(){o.shopGroupData(o.state.CardStyle),"TBTM"==t&&(o.brandItemAreaSort(o.state.pageNo,o.state.pageSize,o.state.CardStyle),o.shopLevelZhanbi(o.state.CardStyle))})},o.handlePrev=function(){o.refx.current.prev()},o.handleNext=function(){o.refx.current.next()},o.contertier=function(t){l.default.init(document.getElementById("container")).setOption({color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){return"价格区间："+e[0].axisValue+"<br/>"+e[0].seriesName+":"+e[0].data+"<br/>占比:"+t.zhanbi_list[e[0].dataIndex]+"%"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:""!=o.state.contertier.section_list?o.state.contertier.section_list:["0-100","101-200","201-300","301-400"],axisTick:{alignWithLabel:!0},axisLabel:{interval:0}}],yAxis:[{type:"value",data:""!=o.state.contertier.zhanbi_list?o.state.contertier.zhanbi_list:["0","25","50","70","100"],axisLine:{onZero:!1},axisTick:{alignWithLabel:!0},axisLabel:{formatter:"{value}"}}],series:[{name:"数量",type:"bar",barWidth:"40%",color:"#108CEE",data:o.state.contertier.shulianglist,axisLabel:{formatter:"{value}%"}}]},!0)},o.brandItemAreaSort=function(t,e,a){i.default.post("/hcm/search/brandItemAreaSort",{pageNo:t,pageSize:e,platform_code:a}).then(function(t){console.log(t),1e4==t.data.status?""!=t.data.data.content&&t.data.data.content!=[]&&o.setState({Tabledata:t.data.data.content,pageNo:t.data.data.pageNumber,totalNum:t.data.data.totalElements},function(){}):n.default.error(t.data.message)}).catch(function(t){n.default.error(t.statusText)})},o.changePagination=function(t,e){console.log(t,e),o.setState({pageNo:t,Tabledata:[]},function(){o.brandItemAreaSort(o.state.pageNo,o.state.pageSize,o.state.CardStyle)})},o.onPaginationSize=function(t,e){console.log(t,e)};var r=[{title:"排名",render:function(e,a,n){return t.createElement("span",{key:n},n+1=="1"||n+1=="2"||n+1=="3"?t.createElement("span",{style:{textAlign:"center",width:"20px",height:"20px",background:"rgba(189,165,113,1)",borderRadius:"50%",display:"inline-block",color:"#fff"}},n+1):n+1)}},{title:"地区",dataIndex:"area"},{title:"商品数",dataIndex:"count"},{title:"占比",dataIndex:"zhanbi"}];return o.refx=t.createRef(),o.state={JingPinPTx:[],CardStyle:"",shopGroupData:[],contertier:[],columns:r,pageNo:1,pageSize:10,totalNum:0,Tabledata:[],shopLevelZhanbi:[]},o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(a,t.Component),o(a,[{key:"componentDidMount",value:function(){this.JingPinPT()}},{key:"render",value:function(){return t.createElement(r.default,{that:this})}}]),a}();e.default=s}).call(this,a(1))}}]);