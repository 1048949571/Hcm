(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{1158:function(e,t){},1179:function(e,t){},28:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var a=function(t){function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),n(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),a}();t.default=a}).call(this,n(1))},767:function(e,t){},898:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=p(n(14)),r=p(n(180)),l=p(n(11)),o=p(n(54)),c=p(n(15)),i=p(n(27)),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(18),n(179),n(22),n(53),n(16),n(26);var s=p(n(12)),f=p(n(28));function p(e){return e&&e.__esModule?e:{default:e}}var d=i.default.TextArea,m=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={workTitle:null,details:"",screenshotUrls:[]},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),u(n,[{key:"componentDidMount",value:function(){}},{key:"onChanges",value:function(e,t){var n=this.state;n[t]=e.target.value,this.setState(n)}},{key:"onSubmit",value:function(){var e=this.state,t=e.workTitle,n=e.details,a=e.screenshotUrls;!t||t.length<=0?c.default.error("请输入标题"):t&&t.length>30?c.default.error("标题长度不允许超过30字符，当前字符长度"+t.length):!n||n.length<=0?c.default.error("请输入详情"):n&&n.length>500?c.default.error("详情长度不允许超过500字符，当前字符长度"+n.length):(LoadingModal({bl:!0,text:"提交中,请稍后..."}),s.default.get("/hcm/hcmWorkOrder/saveWorkOrder",{params:{sysType:localStorage.logintype,workTitle:t,details:n,screenshotUrls:a.length?a.map(function(e,t){return e.response.data.data}).join(","):null,status:1}}).then(function(e){LoadingModal({bl:!1}),"10000"==e.data.status&&(c.default.success(e.data.message),window.location.href="/index.html#/Feedback")}).catch(function(e){LoadingModal({bl:!1}),c.default.error(e.statusText)}))}},{key:"changeUpload",value:function(e){var t=!!e.file.type.length&&-1!="image/jpeg image/jpg image/png".indexOf(e.file.type);e.file.size/1024/1024<10&&t&&this.setState({screenshotUrls:e.fileList})}},{key:"render",value:function(){var t=this,n=this.state,u=n.workTitle,s=n.details,p=n.screenshotUrls;return e.createElement("div",{className:"addfeedback"},e.createElement("div",{className:"Breadcrumb"},e.createElement(o.default,null,e.createElement(o.default.Item,null,e.createElement("a",{href:"/index.html#/Feedback"},"工单信息")),e.createElement(o.default.Item,null,"新增工单"))),e.createElement("div",{className:"content"},e.createElement("div",{className:"tit item"},e.createElement("span",{className:"red-ck text"},"工单标题："),e.createElement(i.default,{value:u,onChange:function(e){return t.onChanges(e,"workTitle")},placeholder:"请输入，30字以内",className:"input"})),e.createElement("div",{style:{position:"relative"},className:"info item"},e.createElement("span",{className:"red-ck text"},"工单详情："),e.createElement(d,{value:s,onChange:function(e){return t.onChanges(e,"details")},placeholder:"请输入，500字以内",className:"textArea"}),e.createElement("p",{style:s.length>500?{color:"red"}:{color:"#999"},className:"length-alert"},s.length+"/500")),e.createElement("div",{className:"upload item"},e.createElement("span",{className:"text"},"上传截图："),e.createElement("div",{style:{width:"100%"}},e.createElement(r.default,{action:"/hcm/hcmWorkOrder/headImgUpload",listType:"picture-card",accept:"image/*",onChange:function(e){return t.changeUpload(e)},beforeUpload:function(e){var t=e.size/1024/1024<10,n=!!e.type.length&&-1!="image/jpeg image/jpg image/png".indexOf(e.type);return t||c.default.error("图片不能大于10MB!"),n||c.default.error("支持图片格式jpeg，jpg，png。请重新选择"),t&&n},fileList:p},e.createElement("div",null,e.createElement(l.default,{type:"plus"}),e.createElement("div",{className:"ant-upload-text"},"Upload"))))),e.createElement("div",{className:"buts"},e.createElement(a.default,{className:"gdsubm",onClick:function(){return t.onSubmit()}},"提交"),e.createElement("a",{href:"/index.html#/Feedback"},e.createElement(a.default,null,"取消")))),e.createElement(f.default,{clazzName:"copyright"}))}}]),n}();t.default=m}).call(this,n(1))}}]);