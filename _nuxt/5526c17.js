(window.webpackJsonp=window.webpackJsonp||[]).push([[21,6,16],{265:function(t,e,n){"use strict";function r(t){return new Date(t).toLocaleDateString("es",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}n.r(e),n.d(e,"formatDate",(function(){return r}))},274:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7b59b505",content,!0,{sourceMap:!1})},289:function(t,e,n){"use strict";n(274)},290:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".dark span[data-v-51d400a8]{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity))\n}",""]),t.exports=r},297:function(t,e,n){var content=n(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("8bc8142e",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";n.r(e);var r={props:{text:{type:String,required:!0},selected:{type:Boolean,required:!1,default:!1}}},c=(n(289),n(5)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"hover:no-underline",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("tag-clicked")}}},[n("span",{staticClass:"\n      py-1\n      px-4\n      rounded-full\n      border border-custom-green\n      text-sm\n      font-display\n    ",class:{"bg-custom-green":t.selected,"text-gray-100":t.selected,"text-custom-gray":!t.selected}},[t._v(t._s(t.text)+"\n  ")])])}),[],!1,null,"51d400a8",null);e.default=component.exports},312:function(t,e,n){"use strict";n(297)},313:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"article[data-v-19dfe0e0]{\n  max-width:50rem\n}",""]),t.exports=r},351:function(t,e,n){"use strict";n.r(e);var r=n(7),c=(n(67),n(30),n(49),n(46),"Alberto Chamorro - Frontend developer - Javascript, Vue NuxtJS y TailwindCSS - Flutter lover"),o={filters:{formatDate:n(265).formatDate},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.$content,e.next=3,r("articles",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.article.title," | ").concat(c),meta:[{hid:"description",name:"description",content:this.article.description},{hid:"twitter:title",name:"twitter:title",content:"".concat(this.article.title," | ").concat(c)},{hid:"twitter:description",name:"twitter:description",content:this.article.description},{hid:"og:title",name:"og:title",content:"".concat(this.article.title," | ").concat(c)},{hid:"og:description",name:"og:description",content:this.article.description},{hid:"og:image",property:"og:image",content:this.article.image},{hid:"og:image:secure_url",property:"og:image",content:this.article.image},{hid:"og:image:alt",property:"og:image:alt",content:this.article.title}]}},methods:{onTagClicked:function(t){this.$router.push({name:"blog",query:{tag:t}})}}},l=(n(312),n(5)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"xl-container p-8"},[n("h1",{staticClass:"text-3xl xl:text-center"},[t._v(t._s(t.article.title))]),t._v(" "),n("small",{staticClass:"block xl:text-center"},[t._v("\n    "+t._s(t._f("formatDate")(t.article.updatedAt))+"\n  ")]),t._v(" "),n("ul",{staticClass:"flex justify-center mt-4"},t._l(t.article.tags,(function(e,r){return n("li",{key:r,staticClass:"mr-3"},[n("Tag",{attrs:{text:e},on:{"tag-clicked":function(n){return t.onTagClicked(e)}}})],1)})),0),t._v(" "),n("img",{staticClass:"mt-4 rounded",attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),n("nuxt-content",{attrs:{document:t.article}})],1)}),[],!1,null,"19dfe0e0",null);e.default=component.exports;installComponents(component,{Tag:n(301).default})}}]);