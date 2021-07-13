(window.webpackJsonp=window.webpackJsonp||[]).push([[7,9,14],{264:function(t,e,r){"use strict";r.r(e);r(37),r(45),r(124);var o={name:"Heading",props:{type:{type:String,required:!1,default:"h1",validator:function(t){return["h1","h2","h3"].includes(t)}},text:{type:String,required:!1,default:""},hasCustomPath:{type:Boolean,required:!1,default:!0}},data:function(){return{textSplitted:this.text.split(" ")}},computed:{firstWord:function(){return this.textSplitted.length<2?this.text:this.textSplitted[0]},restOfWords:function(){return this.textSplitted.length<2?"":this.textSplitted.reduce((function(t,e,r){return 0!==r&&(t+="".concat(e," ")),t}),"")}}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["h1"===t.type?r("h1",{staticClass:"text-2xl text-left"},[r("span",{class:{"custom-path-bg":t.hasCustomPath,"px-2":t.hasCustomPath}},[t._v(t._s(t.firstWord))]),t._v("\n    "+t._s(t.restOfWords)+"\n  ")]):t._e(),t._v(" "),"h2"===t.type?r("h2",{staticClass:"text-2xl text-left"},[r("span",{class:{"custom-path-bg":t.hasCustomPath,"px-2":t.hasCustomPath}},[t._v(t._s(t.firstWord))]),t._v("\n    "+t._s(t.restOfWords)+"\n  ")]):t._e(),t._v(" "),"h3"===t.type?r("h3",{staticClass:"text-xl text-left"},[r("span",{class:{"custom-path-bg":t.hasCustomPath,"px-2":t.hasCustomPath}},[t._v(t._s(t.firstWord))]),t._v("\n    "+t._s(t.restOfWords)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,r){var content=r(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("53ea0d36",content,!0,{sourceMap:!1})},279:function(t,e,r){"use strict";r(269)},280:function(t,e,r){var o=r(21)((function(i){return i[1]}));o.push([t.i,".repository-card[data-v-79ff5743]{\n  --tw-border-opacity:1;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity));\n  border-radius:0.25rem;\n  border-width:1px;\n  display:flex;\n  flex-direction:column;\n  padding:1rem;\n  transition:all .3s ease\n}\n.repository-card[data-v-79ff5743]:hover{\n  transform:translateY(-.75rem)\n}",""]),t.exports=o},283:function(t,e,r){"use strict";r.r(e);r(9),r(14),r(23),r(90);var o={name:"RepositoryCard",components:{OcticonRepo:function(){return r.e(31).then(r.t.bind(null,350,7))}},props:{href:{type:String,required:!0},name:{type:String,required:!0},description:{type:String,required:!1,default:""},language:{type:String,required:!0}},computed:{circleColorClass:function(){return{"bg-green-600":"vue"===this.language.toLowerCase(),"bg-blue-600":this.language.toLowerCase().startsWith("dart"),"bg-yellow-400":"javascript"===this.language.toLowerCase()}}}},n=(r(279),r(5)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"repository-card hover:no-underline hover:shadow-lg",attrs:{href:t.href,target:"_blank"}},[r("div",{staticClass:"flex items-center"},[r("OcticonRepo",{staticClass:"mr-1"}),t._v(" "),r("h3",[t._v(t._s(t.name))])],1),t._v(" "),r("p",{staticClass:"flex-grow"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"w-3 h-3 rounded-full mr-1",class:t.circleColorClass}),t._v(" "),r("p",{staticClass:"text-xs m-0"},[t._v(t._s(t.language))])])])}),[],!1,null,"79ff5743",null);e.default=component.exports},307:function(t,e,r){"use strict";r.r(e);var o=r(5),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"xl-container p-8"},[r("Heading",{staticClass:"mb-4 xl:mb-8",attrs:{type:"h2",text:"repos en github"}}),t._v(" "),r("div",{staticClass:"flex flex-col justify-between xl:flex-row"},[r("RepositoryCard",{staticClass:"w-75 m-3 xl:w-1/3",attrs:{href:"https://github.com/achamorro-dev/albertochamorro.dev",description:"Repositorio de mi página personal y mi blog hecha con Vue, Nuxt y Tailwind.",name:"albertochamorro.dev",language:"Vue"}}),t._v(" "),r("RepositoryCard",{staticClass:"w-75 m-3 xl:w-1/3",attrs:{href:"https://github.com/achamorro-dev/fast.cli",description:"Fork del repositorio de Fast, un CLI para Flutter con el que poder crear tu propio CLI y automatizar pasos como la creación de nuevos proyectos.",name:"fast.cli",language:"Dart / Flutter"}}),t._v(" "),r("RepositoryCard",{staticClass:"w-75 m-3 xl:w-1/3",attrs:{href:"https://github.com/achamorro-dev/flutter_glassmorphism",description:"Repositorio del ejemplo de Glassmorphism con Flutter que mostré en Twitch/YouTube de Flutter España.",name:"flutter_glassmorphism",language:"Dart / Flutter"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heading:r(264).default,RepositoryCard:r(283).default})}}]);