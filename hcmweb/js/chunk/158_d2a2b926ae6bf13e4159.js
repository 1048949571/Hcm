(window.webpackJsonp=window.webpackJsonp||[]).push([[158,199,364],{1158:function(e,t){},1171:function(e,t){},132:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.ImgModal=void 0;var o,r=n(11),l=(o=r)&&o.__esModule?o:{default:o},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(22),n(1171);var c=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={index:t.props.index,rotate:0,size:1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),i(n,[{key:"componentDidMount",value:function(){}},{key:"onSwitch",value:function(e){var t=this.state,n=t.index,a=(t.rotate,t.size,this.props.urls);e?n==a.length-1?n=0:n++:n<=0?n=a.length-1:n--,this.setState({index:n,rotate:0,size:1})}},{key:"onSize",value:function(e){var t=this.state.size;e?t+=.5:t=t<=.5?.5:t-.5,this.setState({size:t})}},{key:"onRotate",value:function(e){var t=this.state.rotate;e?t+=90:t-=90,this.setState({rotate:t})}},{key:"colse",value:function(){a.unmountComponentAtNode(document.getElementById("ImgModal")),document.getElementsByTagName("body")[0].removeChild(document.getElementById("ImgModal"))}},{key:"render",value:function(){var t=this,n=this.props,a=n.urls,o=void 0===a?[]:a,r=n.close,i=void 0!==r&&r,c=this.state,u=c.index,s=void 0===u?0:u,m=c.rotate,d=c.size,f=document.createElement("img");f.src=o[s];var p=f.naturalWidth?f.naturalWidth:400;f.naturalHeight&&f.naturalHeight;return console.log(p),e.createElement("div",{className:"flexbox"},e.createElement("div",{className:"imgbox"},i?e.createElement(l.default,{className:"close",onClick:function(){return t.colse()},type:"close-circle"}):null,e.createElement("div",{className:"box"},e.createElement("img",{style:{width:d*(p>500?.7*p:p)+"px",transform:"rotate("+m+"deg)"},src:o[s]})),e.createElement("div",{className:"buts"},e.createElement(l.default,{onClick:function(){return t.onSwitch(!1)},type:"left"}),e.createElement(l.default,{onClick:function(){return t.onSwitch(!0)},type:"right"}),e.createElement(l.default,{onClick:function(){return t.onSize(!0)},type:"plus"}),e.createElement(l.default,{onClick:function(){return t.onSize(!1)},type:"minus"}),e.createElement(l.default,{onClick:function(){return t.onRotate(!1)},className:"left",type:"reload"}),e.createElement(l.default,{onClick:function(){return t.onRotate(!0)},className:"right",type:"reload"})),e.createElement("div",{style:{textAlign:"center",fontSize:"12px"}},e.createElement("a",{target:"_blank",href:o[s]},"查看原图"))))}}]),n}();t.ImgModal=function(t){var n=t.bl,o=void 0!==n&&n,r=(t.urls,document.createElement("div"));r.setAttribute("id","ImgModal"),o?(document.body.appendChild(r),a.render(e.createElement(c,t),document.getElementById("ImgModal"))):(a.unmountComponentAtNode(document.getElementById("ImgModal")),document.getElementsByTagName("body")[0].removeChild(document.getElementById("ImgModal")))}}).call(this,n(1),n(13))},28:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var a=function(t){function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),n(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),a}();t.default=a}).call(this,n(1))},433:function(e,t){},618:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0});var o=c(n(54));n(53),n(808);var r=c(n(17)),l=c(n(28)),i=n(132);function c(e){return e&&e.__esModule?e:{default:e}}var u=(0,r.default)(function(t){return e.createElement("div",{className:"TaoBaocomplaints"},e.createElement("div",{className:"Breadcrumb"},e.createElement(o.default,null,e.createElement(o.default.Item,null,"投诉查询"),e.createElement(o.default.Item,null,e.createElement("a",{href:"/index.html#/TaobaoInquiries",target:"_blank"},"淘宝投诉查询")),e.createElement(o.default.Item,null,e.createElement("a",{href:"/index.html?#/TaoBaoAppealDetails/"+t.state.batch_id+"/"+t.state.ID+"/"+t.state.accountId,target:"_blank"},"投诉详情")),e.createElement(o.default.Item,null,"申诉详情"))),t.state.HistoryFile_taobao?e.createElement("div",{className:"content"},t.state.HistoryFile_taobao.map(function(n,o){return e.createElement("div",{className:"contentTop",style:{marginBottom:"20px"},key:o},e.createElement("div",{className:"contentTopDiv"},e.createElement("h4",null,"申诉详情")),e.createElement("div",{className:"contentTopDiv"},e.createElement("ul",null,e.createElement("li",{style:{textIndent:"2em"}}," ",e.createElement("span",null,"提交时间：")," ",e.createElement("span",null,a(n.gmtCreate).format("YYYY-MM-DD HH:mm:ss"))),e.createElement("li",{style:{textIndent:"2em"}}," ",e.createElement("span",null,"申诉说明："),n.description),e.createElement("li",null," ",e.createElement("span",null,"申诉材料类型："),n.type_of_complaint),e.createElement("li",{style:{textIndent:"2em"}}," ",e.createElement("span",null,"申诉材料：")),e.createElement("li",{style:{textIndent:"2em"}}," ",e.createElement("span",null)," ",n.historyFile?e.createElement("span",null,n.historyFile.map(function(n,a){return e.createElement("img",{style:{width:"96px",height:"96px",marginRight:"50px",marginTop:"20px",cursor:"pointer"},onLoad:t.handleImageLoaded.bind(void 0),onError:function(e){document.getElementById("v-img-"+o+"-"+a).setAttribute("src","../../../../img/5-121204193R0-50.gif");var t=document.getElementById("v-img-"+o+"-"+a).getAttribute("num")||0;+t<=10?setTimeout(function(){document.getElementById("v-img-"+o+"-"+a).setAttribute("src",n.fileUrl),document.getElementById("v-img-"+o+"-"+a).setAttribute("num",+t+1)},5e3):document.getElementById("v-img-"+o+"-"+a).setAttribute("src","../../../../img/errors.png")},key:a,id:"v-img-"+o+"-"+a,onClick:function(){return(0,i.ImgModal)({bl:!0,urls:[n.fileUrl],index:0,close:!0})},src:n.fileUrl})})):null))))})):e.createElement("div",{className:"contentTop"},e.createElement("div",{className:"contentTopDiv"},e.createElement("h4",null,"申诉详情")),e.createElement("div",{className:"contentTopDiv"},e.createElement("ul",null,e.createElement("li",{style:{textIndent:"2em"}}," ",e.createElement("span",null,"提交时间：")," ",e.createElement("span",null)),e.createElement("li",{style:{textIndent:"2em"}}," ",e.createElement("span",null)," 申诉说明："),e.createElement("li",null," ",e.createElement("span",null)," 申诉材料类型："),e.createElement("li",{style:{textIndent:"2em"}}," ",e.createElement("span",null)," 申诉材料："),e.createElement("li",{style:{textIndent:"2em"}}," ",e.createElement("span",null)," 提交时间：")))),e.createElement(l.default,{clazzName:"copyright"}))});t.default=u}).call(this,n(1),n(10))},765:function(e,t){},808:function(e,t){},940:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(24)),o=c(n(15)),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(23),n(16);var l=c(n(618)),i=c(n(12));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.reurl=function(){var e=location.href;1!=e.split("?")[1]&&(e+="?1",window.location.replace(e))},t.handleImageErrored=function(){t.setState({null:"加载失败"}),console.log(1)},t.handleImageLoaded=function(){t.setState({null:"加载成功"}),console.log(2)},t.HistoryFile_taobao=function(){i.default.post("/hcm/complaint/HistoryFile_taobao",{batchId:t.props.match.params.batch_id,id:t.props.match.params.id,accountId:t.props.match.params.accountId}).then(function(e){1e4==e.data.status?null!=e.data.data&&""!=e.data.data&&null!=e.data.data&&t.setState({HistoryFile_taobao:e.data.data}):o.default.error(e.data.message)}).catch(function(e){o.default.error(e.statusText)})},t.state={HistoryFile_taobao:[],batch_id:"",id:"",accountId:"",null:""},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),r(n,[{key:"componentDidMount",value:function(){this.HistoryFile_taobao(),this.setState({batch_id:this.props.match.params.batch_id,ID:this.props.match.params.IDx,accountId:this.props.match.params.accountId})}},{key:"render",value:function(){return e.createElement(l.default,{that:this})}}]),n}();t.default=a.default.create()(u)}).call(this,n(1))}}]);