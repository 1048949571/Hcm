(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1157:function(e,t){},1158:function(e,t){},1171:function(e,t){},1179:function(e,t){},132:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.ImgModal=void 0;var r,o=n(11),l=(r=o)&&r.__esModule?r:{default:r},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(22),n(1171);var c=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={index:t.props.index,rotate:0,size:1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),i(n,[{key:"componentDidMount",value:function(){}},{key:"onSwitch",value:function(e){var t=this.state,n=t.index,a=(t.rotate,t.size,this.props.urls);e?n==a.length-1?n=0:n++:n<=0?n=a.length-1:n--,this.setState({index:n,rotate:0,size:1})}},{key:"onSize",value:function(e){var t=this.state.size;e?t+=.5:t=t<=.5?.5:t-.5,this.setState({size:t})}},{key:"onRotate",value:function(e){var t=this.state.rotate;e?t+=90:t-=90,this.setState({rotate:t})}},{key:"colse",value:function(){a.unmountComponentAtNode(document.getElementById("ImgModal")),document.getElementsByTagName("body")[0].removeChild(document.getElementById("ImgModal"))}},{key:"render",value:function(){var t=this,n=this.props,a=n.urls,r=void 0===a?[]:a,o=n.close,i=void 0!==o&&o,c=this.state,s=c.index,u=void 0===s?0:s,f=c.rotate,d=c.size,m=document.createElement("img");m.src=r[u];var p=m.naturalWidth?m.naturalWidth:400;m.naturalHeight&&m.naturalHeight;return console.log(p),e.createElement("div",{className:"flexbox"},e.createElement("div",{className:"imgbox"},i?e.createElement(l.default,{className:"close",onClick:function(){return t.colse()},type:"close-circle"}):null,e.createElement("div",{className:"box"},e.createElement("img",{style:{width:d*(p>500?.7*p:p)+"px",transform:"rotate("+f+"deg)"},src:r[u]})),e.createElement("div",{className:"buts"},e.createElement(l.default,{onClick:function(){return t.onSwitch(!1)},type:"left"}),e.createElement(l.default,{onClick:function(){return t.onSwitch(!0)},type:"right"}),e.createElement(l.default,{onClick:function(){return t.onSize(!0)},type:"plus"}),e.createElement(l.default,{onClick:function(){return t.onSize(!1)},type:"minus"}),e.createElement(l.default,{onClick:function(){return t.onRotate(!1)},className:"left",type:"reload"}),e.createElement(l.default,{onClick:function(){return t.onRotate(!0)},className:"right",type:"reload"})),e.createElement("div",{style:{textAlign:"center",fontSize:"12px"}},e.createElement("a",{target:"_blank",href:r[u]},"查看原图"))))}}]),n}();t.ImgModal=function(t){var n=t.bl,r=void 0!==n&&n,o=(t.urls,document.createElement("div"));o.setAttribute("id","ImgModal"),r?(document.body.appendChild(o),a.render(e.createElement(c,t),document.getElementById("ImgModal"))):(a.unmountComponentAtNode(document.getElementById("ImgModal")),document.getElementsByTagName("body")[0].removeChild(document.getElementById("ImgModal")))}}).call(this,n(1),n(13))},25:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(54));n(53);var r=o(n(28));function o(e){return e&&e.__esModule?e:{default:e}}n(1157);var l=function(t){return e.createElement("div",{className:"layout-wrapper "+(t.className||"")},e.createElement("div",{className:"header-wrapper"},e.createElement(a.default,{className:"breadcrumb"},t.breadcrumbList.map(function(n,r){return""===t.linkList[r]?e.createElement(a.default.Item,{key:n},n):e.createElement(a.default.Item,{href:"javascript:;",key:n},e.createElement("span",{onClick:function(){t.history.go(-t.linkList[r])}},n))}))),e.createElement("div",{className:"layout-content"},t.children),e.createElement("div",{className:"copyright"},e.createElement(r.default,null)))};l.defaultProps={title:"标题",breadcrumbList:[],linkList:[]},t.default=l}).call(this,n(1))},28:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var a=function(t){function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),n(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),a}();t.default=a}).call(this,n(1))},767:function(e,t){},899:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0});var r=m(n(14)),o=m(n(180)),l=m(n(11)),i=m(n(15)),c=m(n(27)),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(18),n(179),n(22),n(16),n(26);var u=m(n(12)),f=(m(n(28)),m(n(25))),d=n(132);function m(e){return e&&e.__esModule?e:{default:e}}var p=c.default.TextArea,h=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={dataList:[],details:"",screenshotUrls:[],id:t.props.match.params.id},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),s(n,[{key:"componentDidMount",value:function(){this.getDetail()}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.props.match.params.id!==e.match.params.id&&this.setState({id:e.match.params.id},function(){t.getDetail()})}},{key:"lookImg",value:function(e,t){(0,d.ImgModal)({bl:!0,urls:e,index:t,close:!0})}},{key:"getDetail",value:function(){var e=this;u.default.get("/hcm/hcmWorkOrder/selectdetail",{params:{id:this.state.id,replyId:this.state.id}}).then(function(t){e.setState({details:null,screenshotUrls:[],dataList:t.data.data})}).catch(function(e){i.default.error(e.statusText)})}},{key:"onChanges",value:function(e,t){var n=this.state;n[t]=e.target.value,this.setState(n)}},{key:"changeUpload",value:function(e){var t=!!e.file.type.length&&-1!="image/jpeg image/jpg image/png".indexOf(e.file.type);e.file.size/1024/1024<10&&t&&this.setState({screenshotUrls:e.fileList})}},{key:"onSubmit",value:function(){var e=this,t=this.state,n=t.details,a=t.screenshotUrls;!n||n.length<=0?i.default.error("请输入详情"):n&&n.length>500?i.default.error("详情长度不允许超过500字符，当前字符长度"+n.length):(LoadingModal({bl:!0,text:"提交中,请稍后..."}),u.default.get("/hcm/hcmWorkOrder/saveWorkOrder",{params:{workTitle:"",sysType:localStorage.logintype,details:n,screenshotUrls:a.map(function(e,t){return e.response.data.data}).join(","),status:1,replyId:this.props.match.params.id}}).then(function(t){LoadingModal({bl:!1}),"10000"==t.data.status&&(i.default.success(t.data.message),e.getDetail())}).catch(function(e){LoadingModal({bl:!1}),i.default.error(e.statusText)}))}},{key:"render",value:function(){var t=this,n=this.state,c=n.dataList,s=n.details,u=void 0===s?"":s,d=n.screenshotUrls;return e.createElement(f.default,{breadcrumbList:["工单信息","工单详情"],linkList:["1",""],history:this.props.history},e.createElement("div",{className:"infofeedback"},c.length?e.createElement("div",{className:"content"},e.createElement("h2",null,c[0].workTitle),e.createElement("ul",{className:"infolist"},c.map(function(n,r){var o=n.realname,l=n.details,i=n.screenshotUrls,c=n.createtime,s=void 0===c?0:c,u=null==i||""==i?[]:i.split(",");return e.createElement("li",{className:"infolist-item",key:r},e.createElement("h6",null,o),e.createElement("p",null,a(s).format("YYYY-MM-DD HH:mm:ss")),e.createElement("pre",{style:{whiteSpace:"inherit"}},l),e.createElement("div",{className:"imgBox"},u.length?u.map(function(n,a){return e.createElement("img",{onClick:function(){return t.lookImg(u,a)},key:a,src:n})}):null))})),e.createElement("h3",null,"回复"),e.createElement("div",{style:{position:"relative"},className:"info item"},e.createElement(p,{value:u,onChange:function(e){return t.onChanges(e,"details")},placeholder:"回复内容",className:"textArea"}),e.createElement("p",{style:u&&u.length>500?{color:"red"}:{color:"#999"},className:"length-alert"},(u?u.length:0)+"/500")),e.createElement("div",{className:"upload item"},e.createElement("div",{style:{width:"100%"}},e.createElement(o.default,{action:"/hcm/hcmWorkOrder/headImgUpload",listType:"picture-card",accept:"image/*",onChange:function(e){return t.changeUpload(e)},beforeUpload:function(e){var t=e.size/1024/1024<10,n=!!e.type.length&&-1!="image/jpeg image/jpg image/png".indexOf(e.type);return t||i.default.error("图片不能大于10MB!"),n||i.default.error("支持图片格式jpeg，jpg，png。请重新选择"),t&&n},fileList:d},e.createElement("div",null,e.createElement(l.default,{type:"plus"}),e.createElement("div",{className:"ant-upload-text"},"上传截图"))))),e.createElement("div",{className:"buts"},e.createElement(r.default,{className:"btn2-main",onClick:function(){return t.onSubmit()}},"提交"),e.createElement("a",{href:"/index.html#/Feedback"},e.createElement(r.default,null,"取消")))):null))}}]),n}();t.default=h}).call(this,n(1),n(10))}}]);