(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{269:function(e,t,r){var content=r(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("53ea0d36",content,!0,{sourceMap:!1})},279:function(e,t,r){"use strict";r(269)},280:function(e,t,r){var n=r(21)((function(i){return i[1]}));n.push([e.i,".repository-card[data-v-79ff5743]{\n  --tw-border-opacity:1;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity));\n  border-radius:0.25rem;\n  border-width:1px;\n  display:flex;\n  flex-direction:column;\n  padding:1rem;\n  transition:all .3s ease\n}\n.repository-card[data-v-79ff5743]:hover{\n  transform:translateY(-.75rem)\n}",""]),e.exports=n},283:function(e,t,r){"use strict";r.r(t);r(9),r(14),r(23),r(90);var n={name:"RepositoryCard",components:{OcticonRepo:function(){return r.e(31).then(r.t.bind(null,350,7))}},props:{href:{type:String,required:!0},name:{type:String,required:!0},description:{type:String,required:!1,default:""},language:{type:String,required:!0}},computed:{circleColorClass:function(){return{"bg-green-600":"vue"===this.language.toLowerCase(),"bg-blue-600":this.language.toLowerCase().startsWith("dart"),"bg-yellow-400":"javascript"===this.language.toLowerCase()}}}},o=(r(279),r(5)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"repository-card hover:no-underline hover:shadow-lg",attrs:{href:e.href,target:"_blank"}},[r("div",{staticClass:"flex items-center"},[r("OcticonRepo",{staticClass:"mr-1"}),e._v(" "),r("h3",[e._v(e._s(e.name))])],1),e._v(" "),r("p",{staticClass:"flex-grow"},[e._v("\n    "+e._s(e.description)+"\n  ")]),e._v(" "),r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"w-3 h-3 rounded-full mr-1",class:e.circleColorClass}),e._v(" "),r("p",{staticClass:"text-xs m-0"},[e._v(e._s(e.language))])])])}),[],!1,null,"79ff5743",null);t.default=component.exports}}]);