(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{11:function(e,c,t){},14:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t.n(a),n=t(5),i=t.n(n),r=(t(11),t(4)),j=t.n(r),l=t(6),b=t(2),p=t(0),h=function(e){var c=e.title,t=e.calories,a=e.image,s=e.cuisineType,n=e.ingredients;return Object(p.jsx)("div",{className:"card-container",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsxs)("figure",{className:"front",children:[Object(p.jsx)("h1",{className:"cardTitle",children:c}),Object(p.jsx)("img",{src:a,alt:"loading..",className:"img"}),Object(p.jsx)("br",{}),Object(p.jsxs)("h5",{children:["Cuisine: ",s]}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"Calories:"})," ",t]}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("figure",{className:"back",children:[Object(p.jsx)("h3",{children:"Ingredients"}),Object(p.jsx)("ol",{children:n.map((function(e){return Object(p.jsx)("li",{children:e.text})}))})]})]})})};t(14);var o=function(){var e=Object(a.useState)([]),c=Object(b.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)(""),i=Object(b.a)(n,2),r=i[0],o=i[1],d=Object(a.useState)("chicken"),u=Object(b.a)(d,2),f=u[0],O=u[1];Object(a.useEffect)((function(){m()}),[f]);var m=function(){var e=Object(l.a)(j.a.mark((function e(){var c,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("2fbfa884","&app_key=").concat("a73e98871637710016698ceb0b29f793"));case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,s(t.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"title",children:"The Recipe App"}),Object(p.jsxs)("form",{className:"search_form",children:[Object(p.jsx)("input",{type:"text",className:"search_bar",placeholder:"Search Recipe..",value:r,onChange:function(e){o(e.target.value)}}),Object(p.jsx)("button",{type:"submit",className:"search_btn ",onClick:function(e){e.preventDefault(),O(r),o("")},children:Object(p.jsx)("i",{class:"fa fa-search"})})]}),Object(p.jsx)("div",{className:"recipes",children:t.map((function(e){return Object(p.jsx)(h,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,cuisineType:e.recipe.cuisineType,ingredients:e.recipe.ingredients},e.recipe.label)}))}),Object(p.jsxs)("footer",{className:"footer",children:[Object(p.jsxs)("p",{children:["Developed by:",Object(p.jsx)("b",{children:"Nadeem Ansari"})]}),"Connect:   ",Object(p.jsxs)("a",{className:"insta",href:"https://www.instagram.com/_nadeem_07_/",target:"_blank",children:[" ",Object(p.jsx)("i",{class:"fa fa-instagram"})]})," ",Object(p.jsx)("a",{className:"linkdin",href:"https://www.linkedin.com/in/nadeem-ansari-537368200",target:"_blank",children:Object(p.jsx)("i",{class:"fa fa-linkedin-square"})}),Object(p.jsx)("a",{className:"whatsapp",children:Object(p.jsx)("i",{class:"fa fa-whatsapp"})})]})]})},d=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(o,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.aa63689a.chunk.js.map