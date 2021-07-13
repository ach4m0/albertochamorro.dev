(window.webpackJsonp=window.webpackJsonp||[]).push([[24,2,4,5,6,7,8,9,10,14],{264:function(t,e,r){"use strict";r.r(e);r(37),r(45),r(124);var n={name:"Heading",props:{type:{type:String,required:!1,default:"h1",validator:function(t){return["h1","h2","h3"].includes(t)}},text:{type:String,required:!1,default:""},hasCustomPath:{type:Boolean,required:!1,default:!0}},data:function(){return{textSplitted:this.text.split(" ")}},computed:{firstWord:function(){return this.textSplitted.length<2?this.text:this.textSplitted[0]},restOfWords:function(){return this.textSplitted.length<2?"":this.textSplitted.reduce((function(t,e,r){return 0!==r&&(t+="".concat(e," ")),t}),"")}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["h1"===t.type?r("h1",{staticClass:"text-2xl text-left"},[r("span",{class:{"custom-path-bg":t.hasCustomPath,"px-2":t.hasCustomPath}},[t._v(t._s(t.firstWord))]),t._v("\n    "+t._s(t.restOfWords)+"\n  ")]):t._e(),t._v(" "),"h2"===t.type?r("h2",{staticClass:"text-2xl text-left"},[r("span",{class:{"custom-path-bg":t.hasCustomPath,"px-2":t.hasCustomPath}},[t._v(t._s(t.firstWord))]),t._v("\n    "+t._s(t.restOfWords)+"\n  ")]):t._e(),t._v(" "),"h3"===t.type?r("h3",{staticClass:"text-xl text-left"},[r("span",{class:{"custom-path-bg":t.hasCustomPath,"px-2":t.hasCustomPath}},[t._v(t._s(t.firstWord))]),t._v("\n    "+t._s(t.restOfWords)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,r){"use strict";function n(t){return new Date(t).toLocaleDateString("es",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}r.r(e),r.d(e,"formatDate",(function(){return n}))},266:function(t,e,r){var content=r(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("3d1f1beb",content,!0,{sourceMap:!1})},268:function(t,e,r){var content=r(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("52dc3dd7",content,!0,{sourceMap:!1})},269:function(t,e,r){var content=r(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("53ea0d36",content,!0,{sourceMap:!1})},270:function(t,e,r){"use strict";r(266)},271:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,"article[data-v-5a23d82a]{\n  transition:all .5s ease\n}\nimg[data-v-5a23d82a]{\n  max-height:15rem\n}\n@media (min-width:768px){\nimg[data-v-5a23d82a]{\n    max-height:none\n}\n}",""]),t.exports=n},272:function(t,e,r){"use strict";r.r(e);var n={filters:{formatDate:r(265).formatDate},props:{article:{type:Object,required:!0}}},o=(r(270),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"flex flex-col justify-center items-center hover:shadow-xl"},[r("img",{staticClass:"mt-4 rounded px-3",attrs:{src:t.article.thumbnail,alt:t.article.alt}}),t._v(" "),r("div",{staticClass:"\n      flex flex-col\n      justify-items-start\n      align-middle\n      w-full\n      mt-3\n      py-1\n      px-3\n    "},[r("small",{staticClass:"block text-custom-gray text-center md:text-left"},[t._v("\n      "+t._s(t._f("formatDate")(t.article.updatedAt))+"\n    ")]),t._v(" "),r("Heading",{attrs:{type:"h2",text:t.article.title,"has-custom-path":!1}}),t._v(" "),r("p",{staticClass:"w-full"},[t._v(t._s(t.article.description))])],1)])}),[],!1,null,"5a23d82a",null);e.default=component.exports;installComponents(component,{Heading:r(264).default})},275:function(t,e,r){var content=r(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("a4f02606",content,!0,{sourceMap:!1})},276:function(t,e,r){t.exports=r.p+"img/avatar_home.31ca9dd.png"},277:function(t,e,r){"use strict";r(268)},278:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".avatar-bg{\n  border-radius:9999px;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  height:16rem;\n  margin-left:1rem;\n  margin-right:1rem;\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  width:16rem;\n  min-width:16rem;\n  -webkit-animation:avatar-appear .2s ease-out;\n          animation:avatar-appear .2s ease-out\n}\n@-webkit-keyframes avatar-appear{\n0%{\n    transform:scale(0)\n}\n80%{\n    transform:scale(1.2)\n}\nto{\n    transform:scale(1)\n}\n}\n@keyframes avatar-appear{\n0%{\n    transform:scale(0)\n}\n80%{\n    transform:scale(1.2)\n}\nto{\n    transform:scale(1)\n}\n}",""]),t.exports=n},279:function(t,e,r){"use strict";r(269)},280:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".repository-card[data-v-79ff5743]{\n  --tw-border-opacity:1;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity));\n  border-radius:0.25rem;\n  border-width:1px;\n  display:flex;\n  flex-direction:column;\n  padding:1rem;\n  transition:all .3s ease\n}\n.repository-card[data-v-79ff5743]:hover{\n  transform:translateY(-.75rem)\n}",""]),t.exports=n},281:function(t,e,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("5e506fac",content,!0,{sourceMap:!1})},282:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"avatar-bg bg-custom-green"},[e("img",{staticClass:"w-56 h-56 rounded-full",attrs:{src:r(276),alt:"Avatar Alberto Chamorro"}})])}],o={name:"Avatar"},l=(r(277),r(5)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,null,null);e.default=component.exports},283:function(t,e,r){"use strict";r.r(e);r(9),r(14),r(23),r(90);var n={name:"RepositoryCard",components:{OcticonRepo:function(){return r.e(31).then(r.t.bind(null,350,7))}},props:{href:{type:String,required:!0},name:{type:String,required:!0},description:{type:String,required:!1,default:""},language:{type:String,required:!0}},computed:{circleColorClass:function(){return{"bg-green-600":"vue"===this.language.toLowerCase(),"bg-blue-600":this.language.toLowerCase().startsWith("dart"),"bg-yellow-400":"javascript"===this.language.toLowerCase()}}}},o=(r(279),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"repository-card hover:no-underline hover:shadow-lg",attrs:{href:t.href,target:"_blank"}},[r("div",{staticClass:"flex items-center"},[r("OcticonRepo",{staticClass:"mr-1"}),t._v(" "),r("h3",[t._v(t._s(t.name))])],1),t._v(" "),r("p",{staticClass:"flex-grow"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"w-3 h-3 rounded-full mr-1",class:t.circleColorClass}),t._v(" "),r("p",{staticClass:"text-xs m-0"},[t._v(t._s(t.language))])])])}),[],!1,null,"79ff5743",null);e.default=component.exports},291:function(t,e,r){"use strict";r(275)},292:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".home-container[data-v-1a582d88]{\n  min-height:70vh\n}",""]),t.exports=n},293:function(t,e,r){"use strict";r(281)},294:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,"label[data-v-ab4c739a]{\n  display:block;\n  font-family:Poppins, sans-serif;\n  --tw-text-opacity:1;\n  color:rgba(62, 62, 62, var(--tw-text-opacity))\n}",""]),t.exports=n},298:function(t,e,r){var content=r(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("78cf8928",content,!0,{sourceMap:!1})},302:function(t,e,r){"use strict";r.r(e);var n={name:"Greetings",methods:{goToCoffee:function(){window.open("https://www.buymeacoffee.com/albertochamorro","_blank")},goToContact:function(){var t=document.getElementById("contacto");t&&t.scrollIntoView()}}},o=(r(291),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"\n    xl-container\n    flex flex-col\n    justify-center\n    items-center\n    home-container\n    lg:flex-row\n  "},[r("Avatar"),t._v(" "),r("div",{staticClass:"text-container"},[r("p",{staticClass:"text-xl"},[t._v("👋 ¡Hola!")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"flex justify-start"},[r("Button",{attrs:{icon:"chevron-right"},on:{"btn-clicked":t.goToContact}},[t._v("contacto\n      ")]),t._v(" "),r("Button",{staticClass:"ml-3",attrs:{icon:"coffee",type:"secondary"},on:{"btn-clicked":t.goToCoffee}},[t._v("¿café?")])],1)])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-xl"},[t._v("\n      Soy "),r("b",[t._v("Alberto Chamorro")]),t._v(", Frontend Developer en\n      "),r("a",{attrs:{href:"https://www.vivelibre.es/",target:"_blank"}},[t._v("@vivelibre")]),t._v(". Me\n      encanta el café, la Fórmula 1 y la tecnología en general.\n    ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-xl"},[t._v("\n      Ahora mismo tengo mi corazón dividido por el lado del desarrollo web con\n      "),r("b",[t._v("#VueJs #NuxtJS")]),t._v(" y "),r("b",[t._v("#TailwindCSS")]),t._v(" y por el lado del desarrollo\n      multiplataforma con "),r("b",[t._v("#Flutter")]),t._v(".\n    ")])}],!1,null,"1a582d88",null);e.default=component.exports;installComponents(component,{Avatar:r(282).default,Button:r(125).default})},303:function(t,e,r){"use strict";r.r(e);var n=r(7),o=(r(46),{name:"LatestArticles",data:function(){return{latestArticles:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles").only(["title","description","thumbnail","alt","slug","updatedAt"]).sortBy("createdAt","asc").fetch();case 2:t.latestArticles=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),l=r(5),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"xl-container p-8"},[r("Heading",{staticClass:"mb-4 xl:mb-8",attrs:{type:"h2",text:"últimos artículos"}}),t._v(" "),t.latestArticles&&t.latestArticles.length>0?r("ul",{staticClass:"my-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:col-gap-6"},t._l(t.latestArticles,(function(article,t){return r("li",{key:t},[r("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("BlogCardSmall",{staticClass:"mb-6 px-0",attrs:{article:article}})],1)],1)})),0):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heading:r(264).default,BlogCardSmall:r(272).default})},304:function(t,e,r){"use strict";r.r(e);var n=r(7),o=(r(46),r(9),{name:"ContactForm",data:function(){return{nameValue:"",emailValue:"",messageValue:"",formSent:!1,inProgress:!1,hasError:!1}},methods:{sendForm:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.inProgress){e.next=2;break}return e.abrupt("return");case 2:if(t.emailValue&&t.messageValue){e.next=5;break}return t.hasError=!0,e.abrupt("return");case 5:return t.hasError=!1,t.inProgress=!0,e.prev=7,e.next=10,fetch("https://formspree.io/f/mnqlpdwk",{method:"POST",body:JSON.stringify({name:t.nameValue,_replyto:t.emailValue,message:t.messageValue}),headers:{Accept:"application/json"}});case 10:e.sent.ok&&(t.inProgress=!1,t.formSent=!0),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(7),t.inProgress=!1,t.hasError=!0;case 18:case"end":return e.stop()}}),e,null,[[7,14]])})))()}}}),l=(r(293),r(5)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"xl-container p-8",attrs:{id:"contacto"}},[r("Heading",{staticClass:"mb-4 xl:mb-8",attrs:{type:"h2",text:"contacto"}}),t._v(" "),t.formSent?r("h3",[t._v("👌 Muchas gracias por contactar conmigo.")]):r("form",{ref:"contactForm",on:{submit:function(e){return e.preventDefault(),t.sendForm(e)}}},[r("label",{staticClass:"text-lg mb-2",attrs:{for:"nameForm"}},[t._v("nombre")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.nameValue,expression:"nameValue"}],staticClass:"w-full lg:w-1/3",attrs:{id:"nameForm",name:"name",type:"text",required:""},domProps:{value:t.nameValue},on:{input:function(e){e.target.composing||(t.nameValue=e.target.value)}}}),t._v(" "),r("label",{staticClass:"text-lg mt-6 mb-2",attrs:{for:"emailForm"}},[t._v("\n      correo electrónico\n    ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.emailValue,expression:"emailValue"}],staticClass:"w-full lg:w-1/3",attrs:{id:"emailForm",name:"_replyto",type:"email",required:""},domProps:{value:t.emailValue},on:{input:function(e){e.target.composing||(t.emailValue=e.target.value)}}}),t._v(" "),r("label",{staticClass:"text-lg mt-6 mb-2",attrs:{for:"messageForm"}},[t._v("mensaje")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.messageValue,expression:"messageValue"}],staticClass:"w-full xl:w-1/2",attrs:{id:"messageForm",name:"message",required:""},domProps:{value:t.messageValue},on:{input:function(e){e.target.composing||(t.messageValue=e.target.value)}}}),t._v(" "),r("Button",{staticClass:"mt-6",attrs:{type:t.inProgress?"outline":"primary"},on:{"btn-clicked":t.sendForm}},[t._v("\n      "+t._s(t.inProgress?"enviando":"enviar")+"\n    ")]),t._v(" "),t.hasError?r("span",{staticClass:"text-sm text-red-600"},[t._v("Lo siento, no he podido enviar el formulario. Inténtalo otra vez.")]):t._e()],1)],1)}),[],!1,null,"ab4c739a",null);e.default=component.exports;installComponents(component,{Heading:r(264).default,Button:r(125).default})},307:function(t,e,r){"use strict";r.r(e);var n=r(5),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"xl-container p-8"},[r("Heading",{staticClass:"mb-4 xl:mb-8",attrs:{type:"h2",text:"repos en github"}}),t._v(" "),r("div",{staticClass:"flex flex-col justify-between xl:flex-row"},[r("RepositoryCard",{staticClass:"w-75 m-3 xl:w-1/3",attrs:{href:"https://github.com/achamorro-dev/albertochamorro.dev",description:"Repositorio de mi página personal y mi blog hecha con Vue, Nuxt y Tailwind.",name:"albertochamorro.dev",language:"Vue"}}),t._v(" "),r("RepositoryCard",{staticClass:"w-75 m-3 xl:w-1/3",attrs:{href:"https://github.com/achamorro-dev/fast.cli",description:"Fork del repositorio de Fast, un CLI para Flutter con el que poder crear tu propio CLI y automatizar pasos como la creación de nuevos proyectos.",name:"fast.cli",language:"Dart / Flutter"}}),t._v(" "),r("RepositoryCard",{staticClass:"w-75 m-3 xl:w-1/3",attrs:{href:"https://github.com/achamorro-dev/flutter_glassmorphism",description:"Repositorio del ejemplo de Glassmorphism con Flutter que mostré en Twitch/YouTube de Flutter España.",name:"flutter_glassmorphism",language:"Dart / Flutter"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heading:r(264).default,RepositoryCard:r(283).default})},314:function(t,e,r){"use strict";r(298)},315:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".home-container[data-v-5c78afc2]{\n  min-height:70vh\n}",""]),t.exports=n},354:function(t,e,r){"use strict";r.r(e);var n={},o=(r(314),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Greetings"),t._v(" "),r("LatestArticles"),t._v(" "),r("GithubRepositories"),t._v(" "),r("ContactForm")],1)}),[],!1,null,"5c78afc2",null);e.default=component.exports;installComponents(component,{Greetings:r(302).default,LatestArticles:r(303).default,GithubRepositories:r(307).default,ContactForm:r(304).default})}}]);