(function(e){function t(t){for(var r,i,n=t[0],a=t[1],m=t[2],u=0,d=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&d.push(l[i][0]),l[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);c&&c(t);while(d.length)d.shift()();return s.push.apply(s,m||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],r=!0,i=1;i<o.length;i++){var n=o[i];0!==l[n]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},i={app:0},l={app:0},s=[];function n(e){return a.p+"assets/js/"+({home:"home"}[e]||e)+"."+{"chunk-384c13ac":"dbdf87bd",home:"f3d4e36a"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var t=[],o={home:1};i[e]?t.push(i[e]):0!==i[e]&&o[e]&&t.push(i[e]=new Promise((function(t,o){for(var r="assets/css/"+({home:"home"}[e]||e)+"."+{"chunk-384c13ac":"31d6cfe0",home:"5c15733d"}[e]+".css",l=a.p+r,s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var m=s[n],u=m.getAttribute("data-href")||m.getAttribute("href");if("stylesheet"===m.rel&&(u===r||u===l))return t()}var d=document.getElementsByTagName("style");for(n=0;n<d.length;n++){m=d[n],u=m.getAttribute("data-href");if(u===r||u===l)return t()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=t,c.onerror=function(t){var r=t&&t.target&&t.target.src||l,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete i[e],c.parentNode.removeChild(c),o(s)},c.href=l;var f=document.getElementsByTagName("head")[0];f.appendChild(c)})).then((function(){i[e]=0})));var r=l[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,o){r=l[e]=[t,o]}));t.push(r[2]=s);var m,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=n(e);var d=new Error;m=function(t){u.onerror=u.onload=null,clearTimeout(c);var o=l[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,o[1](d)}l[e]=void 0}};var c=setTimeout((function(){m({type:"timeout",target:u})}),12e4);u.onerror=u.onload=m,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/yl-form-design/",a.oe=function(e){throw console.error(e),e};var m=window["webpackJsonp"]=window["webpackJsonp"]||[],u=m.push.bind(m);m.push=t,m=m.slice();for(var d=0;d<m.length;d++)t(m[d]);var c=u;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"4ce1":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},l=[],s=(o("034f"),o("2877")),n={},a=Object(s["a"])(n,i,l,!1,null,null,null),m=a.exports,u=(o("d3b7"),o("8c4f"));r["default"].use(u["a"]);var d=[{path:"/",name:"Home",component:function(){return o.e("home").then(o.bind(null,"bb51"))}}],c=new u["a"]({routes:d}),f=c,p=o("2f62");r["default"].use(p["a"]);var v=new p["a"].Store({state:{},mutations:{},actions:{},modules:{}}),b=(o("4160"),o("b0c0"),o("159b"),o("fb9a")),h=o.n(b),I=(o("c789"),o("04f2"),o("ec45"));o("411c"),o("7b16");r["default"].use(h.a),r["default"].use(I["default"]);var y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"d-form-wrap"}},[o("aside",{staticClass:"components-wrap"},[o("components-list",{attrs:{baseList:e.baseComponents,layoutList:e.layoutComponents}})],1),o("section",{staticClass:"form-wrap"},[o("navbar",{attrs:{formJson:e.formJson},on:{clear:e.handleClear,save:e.handleSave}}),o("form-layout",{attrs:{listObj:e.formJson,config:e.formJson.config,currEditItem:e.currEditItem},on:{"updata-form-list":e.handleUpdateFormList,"change-curr-edit-item":e.handleChangeCurrEditItem,"delete-node":e.handleDeleteNode}})],1),o("aside",{staticClass:"property-wrap"},[o("component-property",{attrs:{formItem:e.currEditItem}})],1)])},g=[],_=[{type:"input",icon:"edit",label:"输入框",options:{label:"输入框",defaultValue:"",placeholder:"请输入",hidden:!1,disabled:!1},field:"",key:"",rules:[{required:!1,message:"必填项",trigger:"blur"}]},{type:"checkbox",icon:"check_box",label:"多选框",options:{label:"多选框",defaultValue:[],options:[{value:"1",label:"选项1"},{value:"2",label:"选项2"},{value:"3",label:"选项3"}],disabled:!1},field:"",key:"",rules:[{required:!1,message:"必填项",trigger:"blur"}]},{type:"radio",icon:"radio_button_checked",label:"单选框",options:{label:"单选框",defaultValue:null,options:[{value:"1",label:"选项1"},{value:"2",label:"选项2"},{value:"3",label:"选项3"}],disabled:!1},field:"",key:"",rules:[{required:!1,message:"必填项",trigger:"blur"}]},{type:"textarea",icon:"article",label:"文本域",options:{label:"文本域",placeholder:"请输入",defaultValue:"",counter:200,width:"100%",rows:8,disabled:!1},field:"",key:"",rules:[{required:!1,message:"必填项",trigger:"blur"}]},{type:"switch",icon:"toggle_off",label:"开关",options:{label:"开关",defaultValue:!1,onText:"开",offText:"关",color:"primary",disabled:!1},field:"",key:"",rules:[{required:!1,message:"必填项",trigger:"blur"}]},{type:"select",icon:"arrow_drop_down_circle",label:"下拉选择框",options:{label:"下拉选择框",placeholder:"请选择",singleValue:null,multipleValue:[],multiple:!0,color:"primary",options:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}],disabled:!1},field:"",key:"",rules:[{required:!1,message:"必填项",trigger:"blur"}]},{type:"input-number",icon:"calculate",label:"计数器",options:{label:"计数器",defaultValue:0,color:"primary",min:0,max:10,size:"default",step:5,disabled:!1},field:"",key:"",rules:[{required:!1,message:"必填项",trigger:"blur"}]},{type:"datepicker",icon:"today",label:"日期选择器",options:{label:"日期选择器",defaultValue:null,placeholder:"请选择",hidden:!1,disabled:!1},field:"",key:"",rules:[{required:!1,message:"必填项",trigger:"blur"}]},{type:"button",icon:"thumb_up_off_alt",label:"按钮",options:{label:"按钮",type:"filled",color:"primary",size:"default",left:"90",disabled:!1},field:"",key:""}],w=[{type:"divider",label:"分割线",icon:"power_input",options:{label:""},key:"",model:""},{type:"grid",label:"栅格布局",icon:"grid_view",options:{},columns:[{key:"",span:6,list:[]},{key:"",span:6,list:[]}],key:"",model:""}],k={baseList:_,layoutList:w},x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"form-conent"},[o("draggable",{staticClass:"drag-wrap",attrs:{tag:"ul",group:"form-draggable",animation:660,sort:!0},on:{add:function(t){return e.handleAddItem(t,e.formList)},start:function(t){return e.handleStartItem(t,e.formList)}},model:{value:e.formList,callback:function(t){e.formList=t},expression:"formList"}},e._l(e.formList,(function(t){return o("div",{key:t.key,staticClass:"drag-box"},[o("div",{staticClass:"form-item-wrap",class:{active:e.currEditItem.key===t.key,grid:"grid"===t.type},on:{click:function(o){return o.stopPropagation(),e.handleClickItem(t)}}},[o("vs-icon",{staticClass:"trash-btn",attrs:{icon:"delete"},on:{click:function(o){return e.handleDelete(t.key)}}}),"grid"===t.type?[o("vs-row",e._l(t.columns,(function(t,r){return o("vs-col",{key:r,attrs:{"vs-w":t.span}},[o("form-layout",{staticClass:"grid-drag-wrap",attrs:{listObj:t,config:e.config,currEditItem:e.currEditItem},on:{"updata-form-list":e.handleUpdateFormList,"change-curr-edit-item":e.handleChangeCurrEditItem,"delete-node":e.handleDeleteNode}})],1)})),1)]:[o("form-node",{attrs:{formItem:t,formLayout:e.config}})]],2)])})),0)],1)},C=[],V=(o("c740"),o("b76a")),O=o.n(V),L=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{width:"100%"}},[o("div",{staticClass:"form-item-components",class:{lr:"left"===e.formLayout.labelPosition}},[o("h1",{directives:[{name:"show",rawName:"v-show",value:e.showLabelTitle,expression:"showLabelTitle"}],staticClass:"label"},[e._v(e._s(e.formItem.options.label))]),"divider"===e.formItem.type&&e.formItem.options.label?o("vs-divider",[e._v(" "+e._s(e.formItem.options.label)+" ")]):e._e(),"divider"!==e.formItem.type||e.formItem.options.label?e._e():o("vs-divider"),"input"===e.formItem.type?o("vs-input",{attrs:{placeholder:e.formItem.options.placeholder,disabled:e.formItem.options.disabled},model:{value:e.formItem.options.defaultValue,callback:function(t){e.$set(e.formItem.options,"defaultValue",t)},expression:"formItem.options.defaultValue"}}):e._e(),"input-number"===e.formItem.type?o("vs-input-number",{attrs:{size:e.formItem.options.size,step:e.formItem.options.step,color:e.formItem.options.color,min:e.formItem.options.min,max:e.formItem.options.max,disabled:e.formItem.options.disabled},model:{value:e.formItem.options.defaultValue,callback:function(t){e.$set(e.formItem.options,"defaultValue",t)},expression:"formItem.options.defaultValue"}}):e._e(),"textarea"===e.formItem.type?o("vs-textarea",{attrs:{placeholder:e.formItem.options.placeholder,rows:e.formItem.options.rows,width:e.formItem.options.width,counter:e.formItem.options.counter,disabled:e.formItem.options.disabled},model:{value:e.formItem.options.defaultValue,callback:function(t){e.$set(e.formItem.options,"defaultValue",t)},expression:"formItem.options.defaultValue"}}):e._e(),"switch"===e.formItem.type?o("vs-switch",{attrs:{color:e.formItem.options.color,disabled:e.formItem.options.disabled},model:{value:e.formItem.options.defaultValue,callback:function(t){e.$set(e.formItem.options,"defaultValue",t)},expression:"formItem.options.defaultValue"}},[o("span",{attrs:{slot:"on"},slot:"on"},[e._v(e._s(e.formItem.options.onText))]),o("span",{attrs:{slot:"off"},slot:"off"},[e._v(e._s(e.formItem.options.offText))])]):e._e(),"checkbox"===e.formItem.type?o("ul",{staticClass:"checkbox-ul"},e._l(e.formItem.options.options,(function(t){return o("li",{key:t.value},[o("vs-checkbox",{attrs:{"vs-value":t,disabled:e.formItem.options.disabled},model:{value:e.formItem.options.defaultValue,callback:function(t){e.$set(e.formItem.options,"defaultValue",t)},expression:"formItem.options.defaultValue"}},[e._v(" "+e._s(t.label)+" ")])],1)})),0):e._e(),"radio"===e.formItem.type?o("ul",{staticClass:"radio-ul"},e._l(e.formItem.options.options,(function(t){return o("li",{key:t.value},[o("vs-radio",{attrs:{"vs-value":t,disabled:e.formItem.options.disabled},model:{value:e.formItem.options.defaultValue,callback:function(t){e.$set(e.formItem.options,"defaultValue",t)},expression:"formItem.options.defaultValue"}},[e._v(" "+e._s(t.label)+" ")])],1)})),0):e._e(),"select"!==e.formItem.type||e.formItem.options.multiple?e._e():o("vs-select",{attrs:{placeholder:e.formItem.options.placeholder,width:"100%",disabled:e.formItem.options.disabled},model:{value:e.formItem.options.singleValue,callback:function(t){e.$set(e.formItem.options,"singleValue",t)},expression:"formItem.options.singleValue"}},e._l(e.formItem.options.options,(function(e,t){return o("vs-select-item",{key:t,attrs:{value:e.value,text:e.label}})})),1),"select"===e.formItem.type&&e.formItem.options.multiple?o("vs-select",{attrs:{placeholder:e.formItem.options.placeholder,width:"100%",multiple:"",disabled:e.formItem.options.disabled},model:{value:e.formItem.options.multipleValue,callback:function(t){e.$set(e.formItem.options,"multipleValue",t)},expression:"formItem.options.multipleValue"}},e._l(e.formItem.options.options,(function(e,t){return o("vs-select-item",{key:t,attrs:{value:e.value,text:e.label}})})),1):e._e(),"datepicker"===e.formItem.type?o("date-picker",{staticStyle:{width:"100%"},attrs:{disabled:e.formItem.options.disabled,"value-type":"format"},model:{value:e.formItem.options.defaultValue,callback:function(t){e.$set(e.formItem.options,"defaultValue",t)},expression:"formItem.options.defaultValue"}}):e._e(),"button"===e.formItem.type?o("vs-button",{style:{"margin-left":e.formItem.options.left+"%"},attrs:{type:e.formItem.options.type,color:e.formItem.options.color,size:e.formItem.options.size,disabled:e.formItem.options.disabled}},[e._v(" "+e._s(e.formItem.options.label)+" ")]):e._e()],1)])},j=[],$={name:"FormNode",props:{formItem:{type:Object,required:!0},formLayout:{type:Object,required:!0}},computed:{showLabelTitle:function(){var e=this,t=["button","grid","divider"];return t.findIndex((function(t){return t===e.formItem.type}))<0}}},S=$,E=Object(s["a"])(S,L,j,!1,null,null,null),J=E.exports,N={name:"FormLayout",components:{draggable:O.a,FormNode:J},props:{listObj:{type:Object,required:!0},config:{type:Object,required:!0},currEditItem:{type:Object,required:!0}},computed:{formList:{get:function(){return this.listObj.list},set:function(e){var t=JSON.parse(JSON.stringify(e));this.$emit("updata-form-list",t,this.listObj.key)}}},methods:{handleAddItem:function(e,t){this.$emit("change-curr-edit-item",t[e.newIndex])},handleStartItem:function(e,t){this.$emit("change-curr-edit-item",t[e.oldIndex])},handleClickItem:function(e){this.$emit("change-curr-edit-item",e)},handleDelete:function(e){this.$emit("delete-node",e)},handleUpdateFormList:function(e,t){if(t)for(var o=0;o<this.formList.length;o++)if(this.formList[o].columns){var r=this.formList[o].columns.findIndex((function(e){return e.key===t}));if(r>=0)return void(this.formList[o].columns[r].list=e)}},handleChangeCurrEditItem:function(e){this.$emit("change-curr-edit-item",e)},handleDeleteNode:function(e){this.$emit("delete-node",e)}}},q=N,T=Object(s["a"])(q,x,C,!1,null,null,null),A=T.exports,F=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"components-list"},[e._m(0),o("vs-divider",[e._v("基础控件")]),o("draggable",{staticClass:"drag-wrap",attrs:{tag:"ul",group:{name:"form-draggable",pull:"clone",put:!1},value:e.baseList,animation:660,sort:!1},on:{start:function(t){return e.handleStart(t,e.baseList)}}},e._l(e.baseList,(function(t){return o("li",{key:t.type,staticClass:"drag-wrap-btn"},[o("vs-icon",{staticStyle:{"margin-right":"2px"},attrs:{icon:t.icon}}),e._v(" "+e._s(t.label)+" ")],1)})),0),o("vs-divider",[e._v("布局控件")]),o("draggable",{staticClass:"drag-wrap",attrs:{tag:"ul",group:{name:"form-draggable",pull:"clone",put:!1},value:e.layoutList,animation:660,sort:!1},on:{start:function(t){return e.handleStart(t,e.layoutList)}}},e._l(e.layoutList,(function(t){return o("li",{key:t.type,staticClass:"drag-wrap-btn"},[o("vs-icon",{staticStyle:{"margin-right":"2px"},attrs:{icon:t.icon}}),e._v(" "+e._s(t.label)+" ")],1)})),0)],1)},P=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"title"},[o("h1",[e._v("表单项选择")])])}],z=(o("d81d"),o("ec26")),D={name:"ComponentsList",components:{draggable:O.a},props:{baseList:{type:Array,required:!0},layoutList:{type:Array,required:!0}},methods:{handleStart:function(e,t){var o=t[e.oldIndex];"grid"===o.type&&(t[e.oldIndex].columns=o.columns.map((function(e){return{key:Object(z["a"])(),span:e.span,list:e.list}}))),t[e.oldIndex].key=Object(z["a"])()}}},B=D,M=Object(s["a"])(B,F,P,!1,null,null,null),U=M.exports,Y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"navbar-wrap"},[o("vs-tooltip",{attrs:{text:"保存",position:"bottom"}},[o("vs-button",{attrs:{radius:"",size:"small",color:"primary",type:"gradient",icon:"save"},on:{click:function(t){return e.$emit("save")}}})],1),o("vs-tooltip",{attrs:{text:"预览",position:"bottom"}},[o("vs-button",{attrs:{radius:"",size:"small",color:"primary",type:"gradient",icon:"visibility"},on:{click:e.handlePreview}})],1),o("vs-tooltip",{attrs:{text:"生成JSON",position:"bottom"}},[o("vs-button",{attrs:{radius:"",size:"small",color:"primary",type:"gradient",icon:"upload_file"},on:{click:e.handleBuildJson}})],1),o("vs-tooltip",{attrs:{text:"清空",position:"bottom"}},[o("vs-button",{attrs:{radius:"",size:"small",color:"danger",type:"gradient",icon:"delete"},on:{click:function(t){return e.$emit("clear")}}})],1),o("vs-popup",{attrs:{title:"表单JSON",active:e.jsonActive,"buttons-hidden":!0},on:{"update:active":function(t){e.jsonActive=t}}},[o("codemirror",{staticStyle:{height:"100%"},attrs:{value:e.jsonStr}})],1),o("vs-popup",{attrs:{fullscreen:"",title:"表单预览",active:e.formActive,"buttons-hidden":!0},on:{"update:active":function(t){e.formActive=t}}},[o("yl-form-build",{staticStyle:{padding:"0 20px"},attrs:{formJson:e.formJson}})],1)],1)},H=[],K=o("c884"),G=(o("f9d4"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"b-form-wrap"}},[o("form-layout",{attrs:{listObj:e.formJson,config:e.formConfig}})],1)}),Q=[],R=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",e._l(e.formList,(function(t,r){return o("div",{key:r,staticClass:"form-item-wrap"},["grid"===t.type?[o("vs-row",e._l(t.columns,(function(t,r){return o("vs-col",{key:r,attrs:{"vs-w":t.span}},[o("form-layout",{attrs:{listObj:t,config:e.config}})],1)})),1)]:[o("form-node",{attrs:{formItem:t,formLayout:e.config}})]],2)})),0)},W=[],X=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{width:"100%"}},[o("div",{staticClass:"form-item-components",class:{lr:"left"===e.formLayout.labelPosition}},[o("h1",{directives:[{name:"show",rawName:"v-show",value:e.showLabelTitle,expression:"showLabelTitle"}],staticClass:"label"},[e._v(e._s(e.formItem.options.label))]),"divider"===e.formItem.type&&e.formItem.options.label?o("vs-divider",[e._v(" "+e._s(e.formItem.options.label)+" ")]):e._e(),"divider"!==e.formItem.type||e.formItem.options.label?e._e():o("vs-divider"),"input"===e.formItem.type?o("vs-input",{attrs:{placeholder:e.formItem.options.placeholder,disabled:e.formItem.options.disabled},model:{value:e.formItem.options.defaultValue,callback:function(t){e.$set(e.formItem.options,"defaultValue",t)},expression:"formItem.options.defaultValue"}}):e._e(),"input-number"===e.formItem.type?o("vs-input-number",{attrs:{size:e.formItem.options.size,step:e.formItem.options.step,color:e.formItem.options.color,min:e.formItem.options.min,max:e.formItem.options.max,disabled:e.formItem.options.disabled},model:{value:e.formItem.options.defaultValue,callback:function(t){e.$set(e.formItem.options,"defaultValue",t)},expression:"formItem.options.defaultValue"}}):e._e(),"textarea"===e.formItem.type?o("vs-textarea",{attrs:{placeholder:e.formItem.options.placeholder,rows:e.formItem.options.rows,width:e.formItem.options.width,counter:e.formItem.options.counter,disabled:e.formItem.options.disabled},model:{value:e.formItem.options.defaultValue,callback:function(t){e.$set(e.formItem.options,"defaultValue",t)},expression:"formItem.options.defaultValue"}}):e._e(),"switch"===e.formItem.type?o("vs-switch",{attrs:{color:e.formItem.options.color,disabled:e.formItem.options.disabled},model:{value:e.formItem.options.defaultValue,callback:function(t){e.$set(e.formItem.options,"defaultValue",t)},expression:"formItem.options.defaultValue"}},[o("span",{attrs:{slot:"on"},slot:"on"},[e._v(e._s(e.formItem.options.onText))]),o("span",{attrs:{slot:"off"},slot:"off"},[e._v(e._s(e.formItem.options.offText))])]):e._e(),"checkbox"===e.formItem.type?o("ul",{staticClass:"checkbox-ul"},e._l(e.formItem.options.options,(function(t){return o("li",{key:t.value},[o("vs-checkbox",{attrs:{"vs-value":t,disabled:e.formItem.options.disabled},model:{value:e.formItem.options.defaultValue,callback:function(t){e.$set(e.formItem.options,"defaultValue",t)},expression:"formItem.options.defaultValue"}},[e._v(" "+e._s(t.label)+" ")])],1)})),0):e._e(),"radio"===e.formItem.type?o("ul",{staticClass:"radio-ul"},e._l(e.formItem.options.options,(function(t){return o("li",{key:t.value},[o("vs-radio",{attrs:{"vs-value":t,disabled:e.formItem.options.disabled},model:{value:e.formItem.options.defaultValue,callback:function(t){e.$set(e.formItem.options,"defaultValue",t)},expression:"formItem.options.defaultValue"}},[e._v(" "+e._s(t.label)+" ")])],1)})),0):e._e(),"select"!==e.formItem.type||e.formItem.options.multiple?e._e():o("vs-select",{attrs:{placeholder:e.formItem.options.placeholder,width:"100%",disabled:e.formItem.options.disabled},model:{value:e.formItem.options.singleValue,callback:function(t){e.$set(e.formItem.options,"singleValue",t)},expression:"formItem.options.singleValue"}},e._l(e.formItem.options.options,(function(e,t){return o("vs-select-item",{key:t,attrs:{value:e.value,text:e.label}})})),1),"select"===e.formItem.type&&e.formItem.options.multiple?o("vs-select",{attrs:{placeholder:e.formItem.options.placeholder,width:"100%",multiple:"",disabled:e.formItem.options.disabled},model:{value:e.formItem.options.multipleValue,callback:function(t){e.$set(e.formItem.options,"multipleValue",t)},expression:"formItem.options.multipleValue"}},e._l(e.formItem.options.options,(function(e,t){return o("vs-select-item",{key:t,attrs:{value:e.value,text:e.label}})})),1):e._e(),"datepicker"===e.formItem.type?o("date-picker",{staticStyle:{width:"100%"},attrs:{disabled:e.formItem.options.disabled,"value-type":"format"},model:{value:e.formItem.options.defaultValue,callback:function(t){e.$set(e.formItem.options,"defaultValue",t)},expression:"formItem.options.defaultValue"}}):e._e(),"button"===e.formItem.type?o("vs-button",{style:{"margin-left":e.formItem.options.left+"%"},attrs:{type:e.formItem.options.type,color:e.formItem.options.color,size:e.formItem.options.size,disabled:e.formItem.options.disabled}},[e._v(" "+e._s(e.formItem.options.label)+" ")]):e._e()],1)])},Z=[],ee={name:"FormNode",props:{formItem:{type:Object,required:!0},formLayout:{type:Object,required:!0}},computed:{showLabelTitle:function(){var e=this,t=["button","grid","divider"];return t.findIndex((function(t){return t===e.formItem.type}))<0}}},te=ee,oe=Object(s["a"])(te,X,Z,!1,null,null,null),re=oe.exports,ie={name:"FormLayout",components:{FormNode:re},props:{listObj:{type:Object,required:!0},config:{type:Object,required:!0}},computed:{formList:function(){return this.listObj.list}}},le=ie,se=Object(s["a"])(le,R,W,!1,null,null,null),ne=se.exports,ae={name:"YlFormBuild",components:{FormLayout:ne},props:{formJson:{type:Object,required:!0}},computed:{formConfig:function(){return this.formJson.config}}},me=ae,ue=Object(s["a"])(me,G,Q,!1,null,null,null),de=ue.exports;o.e("chunk-384c13ac").then(o.t.bind(null,"693d",7));var ce={name:"Navbar",components:{codemirror:K["codemirror"],YlFormBuild:de},data:function(){return{jsonActive:!1,jsonStr:"",formActive:!1}},props:{formJson:{type:Object,required:!0}},methods:{handlePreview:function(){this.formActive=!0},handleBuildJson:function(){this.jsonStr=JSON.stringify(this.formJson),this.jsonActive=!0}}},fe=ce,pe=Object(s["a"])(fe,Y,H,!1,null,null,null),ve=pe.exports,be=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"property"},[e._m(0),e.formItem.key?o("div",{staticClass:"content"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.baseShow,expression:"baseShow"}],staticClass:"base"},[o("vs-divider",[e._v("基础信息")]),o("vs-input",{staticClass:"item",attrs:{label:"标签名称",placeholder:"请输入标签名称"},model:{value:e.formItem.options.label,callback:function(t){e.$set(e.formItem.options,"label",t)},expression:"formItem.options.label"}}),o("vs-input",{staticClass:"item",attrs:{label:"输入提示信息",placeholder:"请输入提示信息"},model:{value:e.formItem.options.placeholder,callback:function(t){e.$set(e.formItem.options,"placeholder",t)},expression:"formItem.options.placeholder"}}),o("vs-input",{staticClass:"item",attrs:{label:"数据字段",placeholder:"请输入数据字段"},model:{value:e.formItem.field,callback:function(t){e.$set(e.formItem,"field",t)},expression:"formItem.field"}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:e.textShow,expression:"textShow"}]},[o("vs-input",{attrs:{label:"文字",placeholder:"请输入"},model:{value:e.formItem.options.label,callback:function(t){e.$set(e.formItem.options,"label",t)},expression:"formItem.options.label"}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showOptions,expression:"showOptions"}]},[o("vs-divider",[e._v("可选项信息")]),e.formItem.options.options?o("div",{staticClass:"item options"},[o("p",{staticClass:"title"},[e._v("选项数据")]),e._l(e.formItem.options.options,(function(t,r){return o("div",{key:r,staticClass:"options-item"},[o("vs-input",{staticClass:"options-item-item",attrs:{placeholder:"选项名称"},model:{value:t.label,callback:function(o){e.$set(t,"label",o)},expression:"item.label"}}),o("vs-input",{staticClass:"options-item-item",attrs:{placeholder:"选项值"},model:{value:t.value,callback:function(o){e.$set(t,"value",o)},expression:"item.value"}}),o("vs-button",{staticClass:"options-item-item",attrs:{radius:"",icon:"delete",color:"danger",size:"small"}})],1)})),o("vs-button",{attrs:{color:"primary",type:"line"}},[e._v("增加选项")])],2):e._e()],1),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showOperate,expression:"showOperate"}]},[o("vs-divider",[e._v("操作属性")]),o("div",{staticClass:"item operation"},[o("vs-checkbox",{model:{value:e.formItem.options.disabled,callback:function(t){e.$set(e.formItem.options,"disabled",t)},expression:"formItem.options.disabled"}},[e._v("禁用")]),e.showMultiple?o("vs-checkbox",{model:{value:e.formItem.options.multiple,callback:function(t){e.$set(e.formItem.options,"multiple",t)},expression:"formItem.options.multiple"}},[e._v("可多选")]):e._e()],1)],1)]):e._e()])},he=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"title"},[o("h1",[e._v("控件属性编辑")])])}],Ie={name:"ComponentProperty",data:function(){return{}},props:{formItem:{type:Object,required:!0}},computed:{showOptions:function(){var e=this,t=["select","radio","checkbox"];return t.findIndex((function(t){return t===e.formItem.type}))>=0},showOperate:function(){var e=this,t=["divider","grid"];return t.findIndex((function(t){return t===e.formItem.type}))<0},showMultiple:function(){return"select"===this.formItem.type},baseShow:function(){var e=this,t=["divider","grid","button"];return t.findIndex((function(t){return t===e.formItem.type}))<0},textShow:function(){var e=this,t=["divider","button"];return t.findIndex((function(t){return t===e.formItem.type}))>=0}}},ye=Ie,ge=Object(s["a"])(ye,be,he,!1,null,null,null),_e=ge.exports,we=(o("a434"),function e(t,o){if(t.list){for(var r=0;r<t.list.length;r++){if(t.list[r].key===o.key)return t.list[r]=o,t;if("grid"===t.list[r].type)for(var i=0;i<t.list[r].columns.length;i++)t.list[r].columns[i]=e(t.list[r].columns[i],o)}return t}}),ke=function e(t,o){if(t.list){for(var r=0;r<t.list.length;r++){if(t.list[r].key===o)return t.list.splice(r,1),t;if("grid"===t.list[r].type)for(var i=0;i<t.list[r].columns.length;i++)t.list[r].columns[i]=e(t.list[r].columns[i],o)}return t}},xe={name:"YlFormDesign",components:{FormLayout:A,ComponentsList:U,Navbar:ve,ComponentProperty:_e},data:function(){return{baseComponents:k.baseList,layoutComponents:k.layoutList,formJson:{config:{labelPosition:"top"},list:[]},currEditItem:{key:null}}},watch:{currEditItem:{deep:!0,handler:function(e){if(e.key){var t=JSON.parse(JSON.stringify(this.formJson));this.formJson=we(t,e)}}}},methods:{handleUpdateFormList:function(e){this.formJson.list=e},handleChangeCurrEditItem:function(e){this.currEditItem=JSON.parse(JSON.stringify(e))},handleDeleteNode:function(e){var t=JSON.parse(JSON.stringify(this.formJson));this.formJson=ke(t,e)},handleClear:function(){this.formJson.list=[],this.currEditItem={key:null}},handleSave:function(){this.$emit("save",JSON.parse(JSON.stringify(this.formJson)))}}},Ce=xe,Ve=Object(s["a"])(Ce,y,g,!1,null,null,null),Oe=Ve.exports,Le=(o("7473"),o("4ce1"),[de,Oe]),je=function(e){Le.forEach((function(t){e.component(t.name,t)}))};"undefined"!==typeof window&&window.Vue&&je(window.Vue);var $e={install:je,YlFormBuild:de,YlFormDesign:Oe};r["default"].use($e),r["default"].config.productionTip=!1,new r["default"]({router:f,store:v,render:function(e){return e(m)}}).$mount("#app")},7473:function(e,t,o){},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.282558ff.js.map