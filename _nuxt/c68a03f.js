(window.webpackJsonp=window.webpackJsonp||[]).push([[20,9,12,13,15,17,18],{264:function(t,e,n){"use strict";n.r(e);n(37),n(45),n(124);var o={name:"Heading",props:{type:{type:String,required:!1,default:"h1",validator:function(t){return["h1","h2","h3"].includes(t)}},text:{type:String,required:!1,default:""},hasCustomPath:{type:Boolean,required:!1,default:!0}},data:function(){return{textSplitted:this.text.split(" ")}},computed:{firstWord:function(){return this.textSplitted.length<2?this.text:this.textSplitted[0]},restOfWords:function(){return this.textSplitted.length<2?"":this.textSplitted.reduce((function(t,e,n){return 0!==n&&(t+="".concat(e," ")),t}),"")}}},l=n(5),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["h1"===t.type?n("h1",{staticClass:"text-2xl text-left"},[n("span",{class:{"custom-path-bg":t.hasCustomPath,"px-2":t.hasCustomPath}},[t._v(t._s(t.firstWord))]),t._v("\n    "+t._s(t.restOfWords)+"\n  ")]):t._e(),t._v(" "),"h2"===t.type?n("h2",{staticClass:"text-2xl text-left"},[n("span",{class:{"custom-path-bg":t.hasCustomPath,"px-2":t.hasCustomPath}},[t._v(t._s(t.firstWord))]),t._v("\n    "+t._s(t.restOfWords)+"\n  ")]):t._e(),t._v(" "),"h3"===t.type?n("h3",{staticClass:"text-xl text-left"},[n("span",{class:{"custom-path-bg":t.hasCustomPath,"px-2":t.hasCustomPath}},[t._v(t._s(t.firstWord))]),t._v("\n    "+t._s(t.restOfWords)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);n(9),n(14),n(23),n(37),n(57),n(42),n(187);var o=[{key:"js",component:"JsImage"},{key:"ts",component:"TsImage"},{key:"vue",component:"VueImage"},{key:"nuxt",component:"NuxtImage"},{key:"sass",component:"SassImage"},{key:"tailwind",component:"TailwindImage"},{key:"flutter",component:"FlutterImage"},{key:"firebase",component:"FirebaseImage"},{key:"jest",component:"JestImage"},{key:"storybook",component:"StorybookImage"},{key:"git",component:"GitImage"},{key:"github",component:"GitHubImage"},{key:"terminal",component:"TerminalImage"},{key:"figma",component:"FigmaImage"},{key:"vscode",component:"VSCodeImage"},{key:"atlassian",component:"AtlassianImage"},{key:"notion",component:"NotionImage"},{key:"adobexd",component:"AdobeXDImage"}],l={name:"LogoImage",components:{JsImage:function(){return n.e(41).then(n.t.bind(null,332,7))},TsImage:function(){return n.e(48).then(n.t.bind(null,333,7))},VueImage:function(){return n.e(50).then(n.t.bind(null,334,7))},NuxtImage:function(){return n.e(43).then(n.t.bind(null,335,7))},SassImage:function(){return n.e(44).then(n.t.bind(null,336,7))},TailwindImage:function(){return n.e(46).then(n.t.bind(null,337,7))},FlutterImage:function(){return n.e(37).then(n.t.bind(null,338,7))},FirebaseImage:function(){return n.e(36).then(n.t.bind(null,339,7))},JestImage:function(){return n.e(40).then(n.t.bind(null,340,7))},GitImage:function(){return n.e(38).then(n.t.bind(null,341,7))},GitHubImage:function(){return n.e(39).then(n.t.bind(null,342,7))},TerminalImage:function(){return n.e(47).then(n.t.bind(null,343,7))},FigmaImage:function(){return n.e(35).then(n.t.bind(null,344,7))},VSCodeImage:function(){return n.e(49).then(n.t.bind(null,345,7))},AtlassianImage:function(){return n.e(34).then(n.t.bind(null,346,7))},NotionImage:function(){return n.e(42).then(n.t.bind(null,347,7))},AdobeXDImage:function(){return n.e(33).then(n.t.bind(null,348,7))},StorybookImage:function(){return n.e(45).then(n.t.bind(null,349,7))}},props:{link:{type:String,required:!0},type:{type:String,required:!0,validator:function(t){return o.map((function(t){return t.key})).includes(t)}},title:{type:String,required:!1,default:""},text:{type:String,required:!1,default:""},color:{type:String,required:!1,default:""}},computed:{componentSelected:function(){var t=this;return o.find((function(e){return e.key===t.type})).component}}},r=n(5),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"flex flex-col items-center font-medium",class:t.color,attrs:{target:"_blank",href:t.link,title:t.title}},[n(t.componentSelected,{tag:"component",staticClass:"w-12 h-12"})],1)}),[],!1,null,null,null);e.default=component.exports},284:function(t,e,n){"use strict";n.r(e);var o=n(5),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"flex flex-row flex-wrap gap-4 items-center"},[n("li",[n("LogoImage",{attrs:{type:"js",title:"JavaScript",link:"https://developer.mozilla.org/es/docs/Web/JavaScript"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"ts",title:"TypeScript",link:"https://www.typescriptlang.org/"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"vue",title:"Vue.js",link:"https://vuejs.org/"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"nuxt",title:"Nuxt.js",link:"https://nuxtjs.org/"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"storybook",title:"Storybook",link:"https://storybook.js.org/"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"jest",title:"Jest",link:"https://jestjs.io/"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"sass",title:"Sass",link:"https://sass-lang.com/"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"tailwind",title:"Tailwind CSS",link:"https://tailwindcss.com/"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"flutter",title:"Flutter",link:"https://flutter.dev/"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"firebase",title:"Firebase",link:"https://firebase.google.com/"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LogoImage:n(267).default})},285:function(t,e,n){"use strict";n.r(e);var o=n(5),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"flex flex-row flex-wrap gap-4 items-center"},[n("li",[n("LogoImage",{attrs:{type:"git",title:"Git",link:"https://git-scm.com/"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"github",title:"GitHub",link:"https://github.com/"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"terminal",title:"iTerm2",link:"https://iterm2.com/"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"vscode",title:"Visual Studio Code",link:"https://code.visualstudio.com/"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"figma",title:"Figma",link:"https://figma.com/"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"adobexd",title:"Adobe XD",link:"https://www.adobe.com/es/products/xd.html"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"atlassian",title:"Atlassian",link:"https://www.atlassian.com/"}})],1),t._v(" "),n("li",[n("LogoImage",{attrs:{type:"notion",title:"Notion",link:"https://www.notion.so/"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LogoImage:n(267).default})},286:function(t,e,n){t.exports=n.p+"img/me.a13f079.jpeg"},295:function(t,e,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("57bcd2e2",content,!0,{sourceMap:!1})},305:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"text-container m-auto"},[o("img",{staticClass:"w-56 h-56 rounded-full m-auto",attrs:{src:n(286),alt:"Foto de Alberto Chamorro"}}),t._v(" "),o("small",[t._v("Trabajando en 🏡  desde Madrid")]),t._v(" "),o("section",{staticClass:"flex flex-col align-middle text-left mt-5"},[o("p",{staticClass:"text-lg"},[t._v("\n      ¡Hola! Mi nombre es "),o("b",[t._v("Alberto Chamorro")]),t._v(" y actualmente soy Frontend\n      Developer en\n      "),o("a",{attrs:{href:"https://www.vivelibre.es/",target:"_blank"}},[t._v("@vivelibre")]),t._v("\n      trabajando principalmente con tecnologías JavaScript como VueJS y\n      Typescript. También a nivel personal utilizo Flutter para crear\n      aplicaciones multiplataforma para iOS y Android.\n    ")]),t._v(" "),o("p",{staticClass:"text-lg"},[t._v("\n      Me considero alguien abierto y siempre dispuesto a ayudar a quien lo\n      necesite, sin ningún problema para trabajar en equipo. Con muchas ganas\n      de aprender y de avanzar en mi carrera profesional como desarrollador\n      probando nuevos avances o adoptando nuevas tecnologías siempre con\n      lógica.\n    ")]),t._v(" "),o("p",{staticClass:"text-lg"},[t._v("\n      En mi blog escribo artículos para poder compartir lo que aprendo en mi\n      día a día y que espero pueda servir a más gente.\n    ")])])])}],l=n(5),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,null,null);e.default=component.exports},306:function(t,e,n){"use strict";n.r(e);var o=n(5),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"text-container m-auto"},[n("Heading",{staticClass:"mb-5",attrs:{type:"h2",text:"🧑‍💻 tecnologías","has-custom-path":!1}}),t._v(" "),n("TechnologiesList"),t._v(" "),n("Heading",{staticClass:"mt-16 mb-5",attrs:{type:"h2",text:"🛠️ herramientas","has-custom-path":!1}}),t._v(" "),n("ToolsList")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heading:n(264).default,TechnologiesList:n(284).default,ToolsList:n(285).default})},308:function(t,e,n){"use strict";n(295)},309:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,"section[data-v-5302b285]{\n  min-height:80vh\n}",""]),t.exports=o},356:function(t,e,n){"use strict";n.r(e);n(308);var o=n(5),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"xl-container text-center"},[n("h1",{staticClass:"mb-4 text-4xl text-center"},[t._v("sobre mí")]),t._v(" "),n("MeSummary"),t._v(" "),n("SkillsAndTools")],1)}),[],!1,null,"5302b285",null);e.default=component.exports;installComponents(component,{MeSummary:n(305).default,SkillsAndTools:n(306).default})}}]);