(window.webpackJsonp=window.webpackJsonp||[]).push([[18,255],{1157:function(e,t){},1158:function(e,t){},1162:function(e,t){},1164:function(e,t){},1179:function(e,t){},25:function(e,t,l){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=r(l(54));l(53);var n=r(l(28));function r(e){return e&&e.__esModule?e:{default:e}}l(1157);var c=function(t){return e.createElement("div",{className:"layout-wrapper "+(t.className||"")},e.createElement("div",{className:"header-wrapper"},e.createElement(a.default,{className:"breadcrumb"},t.breadcrumbList.map(function(l,n){return""===t.linkList[n]?e.createElement(a.default.Item,{key:l},l):e.createElement(a.default.Item,{href:"javascript:;",key:l},e.createElement("span",{onClick:function(){t.history.go(-t.linkList[n])}},l))}))),e.createElement("div",{className:"layout-content"},t.children),e.createElement("div",{className:"copyright"},e.createElement(n.default,null)))};c.defaultProps={title:"标题",breadcrumbList:[],linkList:[]},t.default=c}).call(this,l(1))},28:function(e,t,l){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}();var a=function(t){function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),l(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return e.createElement("div",{className:this.props.clazzName?this.props.clazzName:"Copyright"},"Copyright © 杭州久点网络技术有限公司")}}]),a}();t.default=a}).call(this,l(1))},433:function(e,t){},620:function(e,t,l){"use strict";(function(e){function l(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}Object.defineProperty(t,"__esModule",{value:!0});var a={"frontReason.trademark.fake.sfxzpj":{placeholder:"补充说明，您可以补充侵权理由",label:"判决书案号",text:"司法判决或行政裁决",field:"verdictId",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"通过司法判决或者行政裁决确认为假货"),e.createElement("p",null,"该理由需提供人民法院出具的判定被投诉方商品为假冒商品的司法判决或行政机关（如市场监督管理部门等）出具的被投诉方商品为假冒商品的行政裁决文书"))},"frontReason.trademark.fake.gmjd":{placeholder:"补充说明，您可以补充侵权理由",label:"鉴定订单号",text:"购买鉴定",field:"orderId",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"权利人通过购买并对实物进行鉴定认定假冒商品"),e.createElement("p",null,"该理由为权利人通过购买被投诉方的商品后对实物进行鉴定，出具盖章/签字的购买鉴定报告认定被投诉方商品为假冒商品。")),template:{text:"假货/盗版购买鉴定报告",linkText:"模板下载",link:"http://download.taobaocdn.com/freedom/41266/word/IPRForm-TestBuyReport-zh.doc?spm=a2o2l.10374759.0.0.7458747bJ6lOrI&file=IPRForm-TestBuyReport-zh.doc"}},"frontReason.trademark.fake.wsc":l({desc:"该理由为商品宣传为权利人品牌商品，但该商品的款式或者型号、样式实际并不存在。如权利人确有生产该款式或者型号、样式商品但认为卖家商品为假货，请通过真假对比或者购买鉴定等其他理由发起投诉。",placeholder:"补充说明，您可以补充侵权理由",text:"不存在此样式或型号"},"desc",e.createElement(e.Fragment,null,e.createElement("h6",null,"权利人从未在全球范围内生产也未授权他人生产该样式或型号的产品"),e.createElement("p",null,"该理由为商品宣传为权利人品牌商品，但该商品的款式或者型号、样式实际不存在或者权利人从未生产过。 如权利人有生产该款式或型号、样式商品但认为被投诉商品为假货的，该理由不适用，请通过真假对比或购买鉴定等其他理由发起投诉。",e.createElement("a",{href:"https://ipp.alibabagroup.com/infoContent.htm?spm=a2o2l.10374759.0.0.7458747bJryoN7&skyWindowUrl=faq/complaint/ipp/trademark/Counterfeit-01-cn",target:"_blank"},"点击此处查看案列解读")))),"frontReason.trademark.fake.zjdb":{text:"真假对比",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"权利人从商品描述、产品图判断商家售假"),e.createElement("p",null,"该理由为权利人通过被投诉方的商品页面描述、产品图与权利人商品的对比，认定被投诉方的商品为假冒商品。对比建议以图片结合文字的方式指出具体区别。",e.createElement("a",{href:"https://ipp.alibabagroup.com/infoContent.htm?spm=a2o2l.10374759.0.0.7458747b7oc57Q&skyWindowUrl=faq/complaint/ipp/trademark/Counterfeit-02-cn",target:"_blank"},"点击此处查看案例解读")))},"frontReason.trademark.fake.mxjh":{text:"明显假冒",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"商品页面有明显假冒词或描述"),e.createElement("p",null,"该理由为被投诉方在主图或者详情信息页中明显的假冒描述与自认。建议以截图的方式指出具体描述位置。",e.createElement("a",{href:"https://ipp.alibabagroup.com/infoContent.htm?spm=a2o2l.10374759.0.0.7458747b8tYWJS&skyWindowUrl=faq/complaint/ipp/trademark/Counterfeit-03-cn",target:"_blank"},"点击此处查看案例解读")))},"frontReason.trademark.fake.wwzrsj":{text:"旺旺自认售假",placeholder:"补充说明，您可以补充侵权理由",label:"旺旺聊天举证号",field:"wangwangProofId",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"卖家通过旺旺聊天承认销售假冒商品"),e.createElement("p",null,"该理由为权利人与被投诉方通过旺旺聊天的方式确认被投诉商品为假冒商品。需提供旺旺举证号进行核实。")),template:{text:"旺旺聊天举证号",linkText:"查看获取方式",link:"http://service.taobao.com/support/seller/knowledge-13048162.htm?spm=a2o2l.10374759.0.0.7458747bJ6lOrI"}},"frontReason.trademark.fake.zdsbxx":{text:"遮挡商标信息",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"遮挡商标规避假货认定"),e.createElement("p",null,"该理由为被投诉方通过明显涂抹、遮挡等方式恶意遮挡商品实物上的权利人商标。需提供卖家明显遮挡商标的截图及权利人未遮挡商标的正品截图。"))},"frontReason.trademark.budang.sfxzpj":{placeholder:"补充说明，您可以补充侵权理由",label:"判决书案号",text:"司法判决或行政裁决",field:"verdictId",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"通过司法判决或者行政裁决确认为假货"),e.createElement("p",null,"该理由需提供人民法院出具的判定被投诉方商品为假冒商品的司法判决或行政机关（如市场监督管理部门等）出具的被投诉方商品为假冒商品的行政裁决文书"))},"frontReason.trademark.budang.lysbgjz":l({text:"滥用商标关键词",desc:"该理由为卖家在商品标题或产品描述中除自身品牌/商标外，还使用了权利人商标（不含商品本身使用权利人商标的情形，如认为是假货请通过假货类型下理由投诉，如认为是不当侵权请通过不当类型下的其他商标侵权投诉）。可用截图指明权利人商标和卖家自身品牌出现的具体位置。。",placeholder:"补充说明，您可以补充侵权理由"},"desc",e.createElement(e.Fragment,null,e.createElement("h6",null,"非权利人商品，但卖家在商品标题或产品描述中使用了权利人商标"),e.createElement("p",null,"该理由为卖家在商品标题或产品描述中除自身品牌/商标外，还使用了权利人商标（可截图或文字描述指明权利人商标和卖家自身品牌出现的具体位置）。如商品本身使用了权利人商标，请在假货或其他商标侵权下发起投诉。 请注意！若产品描述或商品实物上的文字或图形仅仅作为型号、质量、数量等元素进行使用，且未举证构成商标使用，平台无法判断为“滥用商标关键词”。",e.createElement("a",{href:"https://ipp.alibabagroup.com/infoContent.htm?spm=a2o2l.10374759.0.0.7458747bxETNRO&skyWindowUrl=faq/complaint/ipp/trademark/Unfair-01-cn",target:"_blank"},"点击此处查看案例解读")))),"frontReason.trademark.budang.wsqzssb":l({text:"在图片上不当展示商标标识",desc:"该理由为主图或者详情信息页（详情信息页建议能用截图指明）不当展示权利人商标标识，且展示的标识与权利人注册商标完全一致。",placeholder:"补充说明，您可以补充侵权理由"},"desc",e.createElement(e.Fragment,null,e.createElement("h6",null,"卖家在商品信息页面突出展示的标识与投诉方商标完全一致，但不包括为描述商品信息以常规方式使用商品名称的情形。"),e.createElement("p",null,"本理由不包括在产品本身或品牌描述中对商品品牌的描述。 若为产品本身的商标使用，请选择“假货”投诉理由发起投诉。",e.createElement("a",{href:"https://ipp.alibabagroup.com/infoContent.htm?spm=a2o2l.10374759.0.0.7458747bJNQ4V8&skyWindowUrl=faq/complaint/ipp/trademark/Unfair-02-cn",target:"_blank"},"点击此处查看案例解读")))),"frontReason.trademark.budang.other":{text:"其他商标侵权",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"除上述理由以外的商标侵权"),e.createElement("p",null,"请提供被投诉方商品使用权利人商标的具体位置截图，并说明不当使用权利人商标的具体情况。 发布商品或信息不符合淘宝规则及要求的问题等，请进入阿里巴巴全网举报页面(地址：https://jubao.taobao.com/index.htm)进行举报。"))},"frontReason.copyright.fake.sfxzpj":{placeholder:"补充说明，您可以补充侵权理由",label:"判决书案号",text:"司法判决或行政裁决",field:"verdictId",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"通过司法判决或者行政裁决确认为假货"),e.createElement("p",null,"该理由需提供人民法院出具的判定被投诉方商品为假冒商品的司法判决或行政机关（如市场监督管理部门等）出具的被投诉方商品为假冒商品的行政裁决文书"))},"frontReason.copyright.fake.gmjd":{placeholder:"补充说明，您可以补充侵权理由",label:"鉴定订单号",text:"购买鉴定",field:"orderId",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"权利人通过购买并对实物进行鉴定认定假冒商品"),e.createElement("p",null,"该理由为权利人通过购买被投诉方的商品后对实物进行鉴定，出具盖章/签字的购买鉴定报告认定被投诉方商品为假冒商品。")),template:{text:"假货/盗版购买鉴定报告",linkText:"模板下载",link:"http://download.taobaocdn.com/freedom/41266/word/IPRForm-TestBuyReport-zh.doc?spm=a2o2l.10374759.0.0.7458747b9Wtc5Q&file=IPRForm-TestBuyReport-zh.doc"}},"frontReason.copyright.fake.wsc":{text:"不存在此样式或型号",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"权利人从未在全球范围内生产也未授权他人生产该样式或型号的产品"),e.createElement("p",null,"该理由为商品宣传为权利人商品，但该作品的款式或者型号、样式实际不存在或者权利人从未生产/出版过。 如权利人有生产该款式或型号、样式商品但认为被投诉商品为盗版的，该理由不适用，请通过真假对比或购买鉴定等其他理由发起投诉。"))},"frontReason.copyright.fake.zjdb":{text:"真假对比",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"权利人从商品描述、产品图判断商家售假"),e.createElement("p",null,"该理由为权利人通过被投诉方的商品页面描述、产品图与权利人商品的对比，认定被投诉方的商品为盗版商品。对比建议以图片结合文字的方式指出具体区别。",e.createElement("a",{href:"https://ipp.alibabagroup.com/infoContent.htm?spm=a2o2l.10374759.0.0.7458747b9Wtc5Q&skyWindowUrl=faq/complaint/ipp/copyright-Counterfeit-01-cn",target:"_blank"},"点击此处查看案例解读")))},"frontReason.copyright.fake.mxdb":{text:"明显盗版词",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"商品页面有明显盗版词或描述"),e.createElement("p",null,"该理由为被投诉方在主图或者详情信息页中明显的盗版描述与自认。建议以截图的方式指出具体描述位置。",e.createElement("a",{href:"https://ipp.alibabagroup.com/infoContent.htm?spm=a2o2l.10374759.0.0.7458747b9Wtc5Q&skyWindowUrl=faq/complaint/ipp/copyright-Counterfeit-02-cn",target:"_blank"},"点击此处查看案例解读")))},"frontReason.copyright.fake.wwzrsj":{text:"旺旺自认售假",placeholder:"补充说明，您可以补充侵权理由",label:"旺旺聊天举证号",field:"wangwangProofId",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"卖家通过旺旺聊天承认销售假冒商品"),e.createElement("p",null,"该理由为权利人与被投诉方通过旺旺聊天的方式确认被投诉商品为假冒商品。需提供旺旺举证号进行核实。")),template:{text:"旺旺聊天举证号",linkText:"查看获取方式",link:"http://service.taobao.com/support/seller/knowledge-13048162.htm?spm=a2o2l.10374759.0.0.7458747b9Wtc5Q"}},"frontReason.copyright.budang.sfxzpj":{placeholder:"补充说明，您可以补充侵权理由",label:"判决书案号",text:"司法判决或行政裁决",field:"verdictId",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"通过司法判决或者行政裁决确认为假货"),e.createElement("p",null,"该理由需提供人民法院出具的判定被投诉方商品为假冒商品的司法判决或行政机关（如市场监督管理部门等）出具的被投诉方商品为假冒商品的行政裁决文书"))},"frontReason.copyright.budang.dt":{text:"盗用图片",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"卖家盗用权利人品牌官网或品牌旗舰店享有著作权的图片/视频"),e.createElement("p",null,"投诉盗用问题，请提供被侵权图片/视频在品牌官方网站的具体位置截图及URL链接地址，截图中需要包括官网链接地址信息。 提请您注意，贵方提交的附件内容会转给被投诉方知悉，故建议按示例提供投诉文件即可，不需要附加其他内容。",e.createElement("a",{href:"https://ipp.alibabagroup.com/infoContent.htm?spm=a2o2l.10374759.0.0.7458747b9Wtc5Q&skyWindowUrl=faq/complaint/ipp/copyright-Counterfeit-03-cn",target:"_blank"},"点击此处查看案例解读"))),template:{text:"盗图说明贵方若主张的知识产权是官网图片，官网作为知识产权的一种初步证明和展示形式，具有不确定性和不稳定性，为了避免信息的丢失和修改，同时有利于快速和有效处理您的投诉，烦请您在提交投诉时提供“被侵权图片的官网链接”的基础上，补充该信息在贵方官网上的截图（截图中需要同时包括官网网址和用以投诉的图片）或对您方官网链接中的用以投诉的图片进行公证或保全后提供，感谢您的理解与配合。",linkText:"示例下载",link:"http://download.taobaocdn.com/freedom/40086/word/IPRForm-ExampleforCopyrightWebisite.docx?spm=a2o2l.10374759.0.0.7458747b9Wtc5Q&file=IPRForm-ExampleforCopyrightWebisite.docx"}},"frontReason.copyright.budang.wg":{text:"外挂产品",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"侵犯著作权的外挂产品"),e.createElement("p",null,"本理由是指破坏合法出版、他人享有著作权的游戏作品的技术保护措施，修改作品数据。"))},"frontReason.copyright.budang.zpqq":{text:"美术、文字作品侵权",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"非权利人商品，但卖家在商品或描述中使用了权利人美术、文字作品内容"),e.createElement("p",null,"请提供判断侵权商品非贵方生产或授权生产的判断依据，同时指出商品或信息中何处使用了贵方美术、文字等作品内容。",e.createElement("a",{href:"https://ipp.alibabagroup.com/infoContent.htm?spm=a2o2l.10374759.0.0.7458747b9Wtc5Q&skyWindowUrl=faq/complaint/ipp/copyright-Counterfeit-04-cn",target:"_blank"},"点击此处查看案例解读")))},"frontReason.copyright.budang.other":{text:"其他著作权侵权",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"除上述理由以外的著作权侵权"),e.createElement("p",null,"该理由请提供被投诉方商品使用权利人著作权的具体位置截图，并说明不当使用权利人著作权的具体情况。"))},"frontReason.designPatent.budang.sfxzpj":{text:"有司法判决或行政裁决",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"通过司法判决或者行政裁决确认为专利侵权"),e.createElement("p",null,"该理由需提供人民法院出具的判定被投诉方商品为专利侵权商品的司法判决或行政机关（如专利管理部门等）出具的被投诉方商品为专利侵权商品的行政裁决文书。")),label:"判决书案号",field:"verdictId"},"frontReason.designPatent.budang.wsfxzpj":{text:"无司法判决或行政裁决",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"非权利人商品，但涉嫌侵犯贵方外观设计专利权")),template:{text:"外观专利侵权分析报告",linkText:"模板下载",link:"http://download.taobaocdn.com/freedom/33662/word/IPRForm-DesignPatentInfringementAnalysisForm-zh.doc?spm=a2o2l.10374759.0.0.7458747b1QyIvI&file=IPRForm-DesignPatentInfringementAnalysisForm-zh.doc"}},"frontReason.other.bzdjz":{text:"不正当竞争",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"卖家发布的商品信息或所使用的其他信息构成对权利人的不正当竞争"))},"frontReason.other.xjxc":{text:"虚假宣传",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"商品信息有与权利人相关的虚假宣传行为"))},"frontReason.other.xxqqq":{text:"肖像权侵权",placeholder:"补充说明，您可以补充侵权理由",desc:e.createElement(e.Fragment,null,e.createElement("h6",null,"未经肖像权人许可，在商品或描述中使用了肖像权人的肖像"))}};t.default=a}).call(this,l(1))},645:function(e,t,l){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=h(l(181)),n=h(l(180)),r=h(l(14)),c=h(l(11)),o=h(l(97)),i=h(l(27)),m=h(l(24)),s=h(l(387)),u=h(l(30));l(205),l(179),l(18),l(22),l(92),l(26),l(23),l(629),l(31);var p=h(l(17)),d=h(l(25)),f=h(l(620));function h(e){return e&&e.__esModule?e:{default:e}}var E=u.default.Option,g=u.default.OptGroup,b=s.default.Group,k=m.default.Item,y="taobao",x="tmall",v="tmallhk",w="item",R="shop",N=(0,p.default)(function(t){var l=t.state,p=l.linkList,h=l.link_textarea_value,N=l.current_link_item,C=l.complaintAccount,F=l.complatinAccountList,_=l.knowledgeRightTypeList,z=l.knowledgeRightTypeDetailList,I=l.complaintPlatform,j=l.complaintLinkType,P=l.complaintReasonList,L=l.complaintReasonId,T=l.fileList,q=l.isVerifyLink,O=t.props.form.getFieldDecorator,W=p.filter(function(e){return"string"!=typeof e}).length,U=f.default[L];return e.createElement(d.default,{breadcrumbList:["淘宝发起投诉"],linkList:[""]},e.createElement("div",{className:"taobao-complaint-wrapper"},e.createElement(m.default,{onSubmit:t.handleSubmit,layout:"inline"},e.createElement("div",{className:"account-change"},e.createElement("section",{className:"account verticle-middle",style:{position:"relative"}},e.createElement("span",{className:"label"},e.createElement("i",null,"*"),"投诉账号"),e.createElement(k,null,O("complaintAccount",{rules:[{required:!0,message:"请选择投诉账号"}]})(e.createElement(u.default,{getPopupContainer:function(e){return e.parentNode},style:{width:"320px"},placeholder:"请选择",onChange:t.handleSelect.bind(t,"complaintAccount")},e.createElement(E,{value:"",disabled:!0},"请选择"),F.map(function(t){return e.createElement(E,{key:t.id,value:t.id},t.username)}))))),e.createElement("section",{className:"platform"},e.createElement("span",{className:"label"},e.createElement("i",null,"*"),"投诉平台"),e.createElement(b,{defaultValue:I,onChange:t.handleRadioChange.bind(t,"complaintPlatform")},e.createElement(s.default,{value:y},"淘宝网"),e.createElement(s.default,{value:x},"天猫商城"),e.createElement(s.default,{value:v},"天猫国际")))),e.createElement("div",{className:"form-content"},e.createElement("h3",{className:"title"},"投诉基础信息"),e.createElement("section",{className:"short-label verticle-middle",style:{position:"relative"}},e.createElement("span",{className:"label"},e.createElement("i",null,"*"),"知识产权"),e.createElement(k,null,O("knowledgeRightType",{rules:[{required:!0,message:"请选择知识产权信息"}]})(e.createElement(u.default,{getPopupContainer:function(e){return e.parentNode},style:{width:"275px",marginRight:"10px"},onChange:t.handleSelect.bind(t,"knowledgeRightType")},_.map(function(t){return e.createElement(E,{key:t.id,value:t.id},t.text)})))),e.createElement(k,null,O("knowledgeRightTypeDetail",{rules:[{required:!0,message:"请选择知识产权信息"}]})(e.createElement(u.default,{getPopupContainer:function(e){return e.parentNode},style:{width:"275px"}},z.map(function(t){return e.createElement(E,{key:t.id,value:t.id},t.text)}))))),e.createElement("section",{className:"long-label"},e.createElement("span",{className:"label"},"投诉链接类型"),e.createElement(b,{defaultValue:j,onChange:t.handleRadioChange.bind(t,"complaintLinkType")},e.createElement(s.default,{value:w},"商品"),e.createElement(s.default,{value:R},"店铺招牌、店铺公告等等"))),e.createElement("section",{className:"short-label verticle-middle",style:{marginBottom:"20px",position:"relative"}},e.createElement("span",{className:"label"},e.createElement("i",null,"*"),"投诉理由"),e.createElement(k,null,j===w?O("reason",{rules:[{required:!0,message:"请选择投诉理由"}]})(e.createElement(u.default,{onChange:t.handleSelect.bind(t,"complaintReasonId"),style:{width:"560px"},getPopupContainer:function(e){return e.parentNode}},P.map(function(t){return e.createElement(g,{key:t.id,label:t.text},t.items.map(function(t){return e.createElement(E,{key:t.id,value:t.id},t.text)}))}))):O("reportComment",{rules:[{required:!0,message:"请输入投诉理由"}]})(e.createElement(i.default.TextArea,{placeholder:"请输入投诉理由，投诉理由不能超过1500个字符",style:{width:"560px",verticalAlign:"text-top"},autosize:{minRows:6}}))),U&&j===w&&U.desc?e.createElement("section",{className:"text-description",style:{width:"560px",margin:"20px 80px"}},U.desc):null),e.createElement("section",{className:"short-label"},e.createElement("span",{className:"label"},e.createElement("i",null,"*"),"投诉链接"),e.createElement("span",{className:"links"},p.length?p.map(function(l,a){return r=a,s=(m="string"==typeof(n=l))?n:n.errorLink,e.createElement("div",{style:{position:"relative"},key:r},e.createElement(o.default,{content:s,trigger:"hover"},e.createElement(i.default,{value:s,readOnly:N!==r,onBlur:t.handleLinkItemBlur,onChange:t.handleLinkItemChange.bind(t,r),className:"link-item "+(N===r?"":"link-item-readonly")+" "+(m?"":"error")})),m?null:e.createElement(c.default,{type:"exclamation-circle",className:"link-icon error"}),e.createElement(c.default,{className:"link-icon edit",type:"edit",onClick:t.handleLinkItemEdit.bind(t,r)}),e.createElement(c.default,{className:"link-icon close",type:"close",onClick:t.handleLinkItemDelete.bind(t,r)}));var n,r,m,s}):null,e.createElement(i.default.TextArea,{onBlur:t.handleLinkBlur,onChange:t.handleLinkChange,placeholder:"一条链接一行，最多300条",className:"textarea",value:h,autosize:{maxRows:300}})),e.createElement("div",{className:"verify-link"},e.createElement(r.default,{onClick:t.verifyLink.bind(t,void 0)},"验证链接"),p.length&&q?W?e.createElement("span",{className:"verify-result fail"},e.createElement(c.default,{className:"icon",type:"close-circle"}),"存在 "+W+" 条未验证通过链接"):e.createElement("span",{className:"verify-result success"},e.createElement(c.default,{className:"icon",type:"check-circle"}),"所有链接验证通过"):null)),e.createElement("h3",{className:"title"},"投诉举证材料"),U&&j===w&&U.label?e.createElement("section",{className:"spectial-label "+("旺旺聊天举证号"===U.label?"wangwang":"")},e.createElement("span",{className:"label"},e.createElement("i",null,"*"),U.label),O(U.field,{rules:[{required:!0,message:"请输入"+U.label}]})(e.createElement(i.default,{placeholder:"请输入",autoComplete:"off",style:{width:"560px"}}))):null,U&&j===w?e.createElement("section",{className:"short-label"},e.createElement("span",{className:"label"},e.createElement("i",null,"*"),"理由说明"),O("reportComment",{rules:[{required:!0,message:"请输入投诉理由"}]})(e.createElement(i.default.TextArea,{autosize:{maxRows:9,minRows:6},placeholder:"补充说明，您可以补充侵权理由 (最多1500字)",style:{width:"560px",verticalAlign:"text-top"}}))):null,e.createElement("section",{className:"no-must-label"},e.createElement("span",{className:"label"},"举证证明"),e.createElement(n.default,{fileList:T,action:"/hcm/fileUpload",data:{id:C},disabled:T.length>3,onChange:t.handleUploadChange,onRemove:t.handleRemoveFile,className:"upload-style"},e.createElement(r.default,{icon:"upload",disabled:T.length>3},"添加文件")),e.createElement(a.default,{color:"rgba(102,102,102,0.05)",className:"tag",style:{color:"#999",float:"left",fontSize:"14px",marginLeft:"9px"}},"支持zip/rar/jpg/png/bmp/pdf/doc/docx格式，每个5MB以内，最多4个文件")),U&&U.template?e.createElement("section",{className:"template-refer"},e.createElement("span",null,"举证模板参考"),e.createElement("div",null,e.createElement("span",null,U.template.text),e.createElement("a",{href:U.template.link,target:"_blank"},U.template.linkText))):null,e.createElement(r.default,{size:"large",type:"primary",htmlType:"submit",style:{backgroundColor:"#CFA972",borderColor:"#CFA972",margin:"50px 0 0 153px"}},"提交")))))});t.default=N}).call(this,l(1))},765:function(e,t){},767:function(e,t){}}]);