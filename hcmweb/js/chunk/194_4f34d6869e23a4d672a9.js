(window.webpackJsonp=window.webpackJsonp||[]).push([[194,203,336],{1158:function(e,t){},1164:function(e,t){},1165:function(e,t){},1166:function(e,t){},591:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=u(n(14)),a=u(n(27)),l=u(n(54)),r=u(n(24)),s=u(n(48));n(18),n(26),n(53),n(23),n(47),n(795);var c=u(n(17)),i=u(n(28));u(n(155));function u(e){return e&&e.__esModule?e:{default:e}}s.default.RangePicker;var f=r.default.Item,m=(0,c.default)(function(t){var n=t.props.form.getFieldDecorator,s={display:t.state.shows?" none ":"block"},c={display:t.state.forgetxs?" block ":"none"};return e.createElement("div",{className:"ModifyPhone"},e.createElement("div",{className:"Breadcrumb"},e.createElement(l.default,null,e.createElement(l.default.Item,null,e.createElement("a",{style:{margin:"0"},onClick:t.HistoryGo},"个人中心")),e.createElement(l.default.Item,null,e.createElement("a",{style:{margin:"0"},onClick:t.HistoryGo},"资料信息")),e.createElement(l.default.Item,null,"绑定手机"))),e.createElement("div",{className:"ModifyPhoneBOXs"},e.createElement("div",{className:"ChangeBodyn"},e.createElement(r.default,{onSubmit:t.ForgetSubmit,className:"forget-form",style:{display:"inline-block",width:"100%"}},e.createElement("div",null,e.createElement("div",{className:"userTS",style:c}," ",e.createElement("img",{src:"../../../img/icon_Login_failure.png"})," ",e.createElement("b",null,"手机号被占用，请更换。"))),e.createElement("div",{className:"FORMtit"},e.createElement("div",{className:"FORMus"},"手机号"),e.createElement(f,{className:"tops"},n("pones")(e.createElement(a.default,{className:"user-name",maxLength:"11",placeholder:"请输入手机号"})))),e.createElement("div",{className:"FORMtit"},e.createElement("div",{className:"FORMus"},"验证码"),e.createElement(f,{className:"topsxs"},n("yzms")(e.createElement(a.default,{className:"user-yzm",style:{height:"32px"},maxLength:"6",placeholder:"输入验证码"}))),e.createElement(o.default,{className:"get-code",style:{marginTop:"3px"},onClick:function(){return t.getAuthCode()}},t.state.yzm)),e.createElement("div",{className:"ForgetTS",style:s},e.createElement("span",null,e.createElement("img",{src:"../../../img/icon_Login_success.png"})),e.createElement("span",null,"验证码已发送到你的手机，5分钟内输入有效验证码等同于密码，打死也不能告诉别人!")),e.createElement("div",{className:"FORMtit"},e.createElement(f,null,n("SucceBTN",{initialValue:"提交信息"})(e.createElement(o.default,{className:"TJBTN",type:"primary",htmlType:"submit",onClick:function(){return t.MEbtn()}},"提交")),e.createElement(o.default,{className:"FHBTN",type:"primary",onClick:function(){return t.HistoryGo()}},"取消")))))),e.createElement(i.default,{className:"Copyright"}))});t.default=m}).call(this,n(1))},795:function(e,t){},910:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=c(n(24)),a=c(n(15)),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(23),n(16);var r=c(n(591)),s=c(n(12));function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.HistoryGo=function(){window.history.go(-1)},t.DidMountText=function(){},t.BJBtn=function(){t.setState({visible:!0,confirmLoading:!0})},t.MEbtn=function(e){t.props.form.validateFields(function(e,t){null!=t.pones&&""!=t.pones?null!=t.yzms&&""!=t.yzms||a.default.error("请输入验证码！"):a.default.error("请输入手机号！")})},t.Trim=function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},t.ForgetSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,n){if(console.log(n),null!=n.pones&&""!=n.pones){/[\u4E00-\u9FA5]/i.test(n.pones)?a.default.error("请输入正确格式！"):null!=n.yzms&&""!=n.yzms&&(t.Trim(n.pones).length>=6&&t.Trim(n.pones).length<=16?s.default.post("/hcm/login/validateSMS",{mobile:n.pones,code:n.yzms}).then(function(e){console.log(e),1==e.data&&200==e.status&&s.default.post("/hcm/user/updatemobile",{mobile:n.pones}).then(function(e){console.log(e),window.history.go(-1)})}):a.default.error("格式长度不对！"))}})},t.getAuthCode=function(){t.setState({forgetxs:!1}),t.props.form.validateFields(function(e,n){if(console.log(n),null!=n.pones&&""!=n.pones){/[\u4E00-\u9FA5]/i.test(n.pones)?a.default.error("请输入正确格式！"):"获取验证码"==t.state.yzm&&(t.state.seconds,s.default.post("/hcm/login/sendSMS",{mobile:n.pones,codeType:"HCM_BIND",usertype:t.props.match.params.type}).then(function(e){if(1e4==e.data.status)var n=setInterval(function(){t.setState(i({yzm:t.state.seconds--+"s后重新发送",shows:!1,forgetxs:!1},"shows",!1),function(){1==t.state.seconds&&(clearInterval(n),t.setState({yzm:"获取验证码",shows:!0,seconds:59}))})},1e3);else 400==e.data.status&&t.setState({forgetxs:!0});console.log(e)}))}else a.default.error("请输入手机号！")})},t.state={yzm:"获取验证码",forgetxs:!1,shows:!0,seconds:59},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e.Component),l(n,[{key:"componentDidMount",value:function(){this.DidMountText()}},{key:"render",value:function(){return e.createElement(r.default,{that:this})}}]),n}();t.default=o.default.create()(u)}).call(this,n(1))}}]);