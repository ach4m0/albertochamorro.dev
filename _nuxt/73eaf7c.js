(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4,6,9],{264:function(t,e,n){"use strict";n.r(e);n(37),n(45),n(124);var r={name:"Heading",props:{type:{type:String,required:!1,default:"h1",validator:function(t){return["h1","h2","h3"].includes(t)}},text:{type:String,required:!1,default:""},hasCustomPath:{type:Boolean,required:!1,default:!0}},data:function(){return{textSplitted:this.text.split(" ")}},computed:{firstWord:function(){return this.textSplitted.length<2?this.text:this.textSplitted[0]},restOfWords:function(){return this.textSplitted.length<2?"":this.textSplitted.reduce((function(t,e,n){return 0!==n&&(t+="".concat(e," ")),t}),"")}}},l=n(5),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["h1"===t.type?n("h1",{staticClass:"text-2xl text-left"},[n("span",{class:{"custom-path-bg":t.hasCustomPath,"px-2":t.hasCustomPath}},[t._v(t._s(t.firstWord))]),t._v("\n    "+t._s(t.restOfWords)+"\n  ")]):t._e(),t._v(" "),"h2"===t.type?n("h2",{staticClass:"text-2xl text-left"},[n("span",{class:{"custom-path-bg":t.hasCustomPath,"px-2":t.hasCustomPath}},[t._v(t._s(t.firstWord))]),t._v("\n    "+t._s(t.restOfWords)+"\n  ")]):t._e(),t._v(" "),"h3"===t.type?n("h3",{staticClass:"text-xl text-left"},[n("span",{class:{"custom-path-bg":t.hasCustomPath,"px-2":t.hasCustomPath}},[t._v(t._s(t.firstWord))]),t._v("\n    "+t._s(t.restOfWords)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,n){"use strict";function r(t){return new Date(t).toLocaleDateString("es",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}n.r(e),n.d(e,"formatDate",(function(){return r}))},266:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("3d1f1beb",content,!0,{sourceMap:!1})},270:function(t,e,n){"use strict";n(266)},271:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"article[data-v-5a23d82a]{\n  transition:all .5s ease\n}\nimg[data-v-5a23d82a]{\n  max-height:15rem\n}\n@media (min-width:768px){\nimg[data-v-5a23d82a]{\n    max-height:none\n}\n}",""]),t.exports=r},272:function(t,e,n){"use strict";n.r(e);var r={filters:{formatDate:n(265).formatDate},props:{article:{type:Object,required:!0}}},l=(n(270),n(5)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"flex flex-col justify-center items-center hover:shadow-xl"},[n("img",{staticClass:"mt-4 rounded px-3",attrs:{src:t.article.thumbnail,alt:t.article.alt}}),t._v(" "),n("div",{staticClass:"\n      flex flex-col\n      justify-items-start\n      align-middle\n      w-full\n      mt-3\n      py-1\n      px-3\n    "},[n("small",{staticClass:"block text-custom-gray text-center md:text-left"},[t._v("\n      "+t._s(t._f("formatDate")(t.article.updatedAt))+"\n    ")]),t._v(" "),n("Heading",{attrs:{type:"h2",text:t.article.title,"has-custom-path":!1}}),t._v(" "),n("p",{staticClass:"w-full"},[t._v(t._s(t.article.description))])],1)])}),[],!1,null,"5a23d82a",null);e.default=component.exports;installComponents(component,{Heading:n(264).default})},303:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(46),{name:"LatestArticles",data:function(){return{latestArticles:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles").only(["title","description","thumbnail","alt","slug","updatedAt"]).sortBy("createdAt","asc").fetch();case 2:t.latestArticles=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),c=n(5),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xl-container p-8"},[n("Heading",{staticClass:"mb-4 xl:mb-8",attrs:{type:"h2",text:"últimos artículos"}}),t._v(" "),t.latestArticles&&t.latestArticles.length>0?n("ul",{staticClass:"my-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:col-gap-6"},t._l(t.latestArticles,(function(article,t){return n("li",{key:t},[n("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("BlogCardSmall",{staticClass:"mb-6 px-0",attrs:{article:article}})],1)],1)})),0):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heading:n(264).default,BlogCardSmall:n(272).default})}}]);