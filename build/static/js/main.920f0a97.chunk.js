(this.webpackJsonpreacttemplate=this.webpackJsonpreacttemplate||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),i=c(6),s=c.n(i),o=(c(13),c(4)),u=c.n(o),l=c(7),p=c(2),b=(c(15),c(5)),j=c.n(b),h=function(e){var t=e.title,c=e.calories,a=e.image,r=e.ingredients;return Object(n.jsxs)("div",{className:j.a.recipe,children:[Object(n.jsx)("h3",{children:t}),Object(n.jsx)("ol",{children:r.map((function(e){return Object(n.jsx)("li",{children:e.text})}))}),Object(n.jsx)("p",{children:c}),Object(n.jsx)("img",{className:j.a.image,src:a,alt:""})]})},d=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)(""),s=Object(p.a)(i,2),o=s[0],b=s[1],j=Object(a.useState)("chicken"),d=Object(p.a)(j,2),f=d[0],m=d[1];Object(a.useEffect)((function(){O()}),[f]);var O=function(){var e=Object(l.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("f659e4a2","&app_key=").concat("775ed1cd5fb9b8bbc7bcc5b1045858a8"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(o),b("")},className:"search-form",children:[Object(n.jsx)("input",{className:"search-bar",type:"text",value:o,onChange:function(e){e.preventDefault(),b(e.target.value),console.log(o)}}),Object(n.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(n.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(n.jsx)(h,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root")),f()},5:function(e,t,c){e.exports={recipe:"recipe_recipe__BdaUe",image:"recipe_image__BtdIE"}}},[[16,1,2]]]);
//# sourceMappingURL=main.920f0a97.chunk.js.map