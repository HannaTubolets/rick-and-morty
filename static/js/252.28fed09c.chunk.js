"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[252],{252:function(e,a,r){r.r(a),r.d(a,{HomePage:function(){return g},default:function(){return y}});var t=r(439),n=r(791),c=r(861),s=r(687),i=r.n(s),u=r(924);function l(){return(l=(0,c.Z)(i().mark((function e(){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://rickandmortyapi.com/api/character");case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var o=r(87),h=r(689),m=r(184),d=function(e){var a=e.id,r=e.name,t=e.species,n=e.image,c=(0,h.TH)();return(0,m.jsx)("li",{className:d.CharacterGalleryItem,children:(0,m.jsxs)(o.OL,{to:"/character/".concat(a),state:{from:c},className:d.NavLink,children:[(0,m.jsx)("img",{className:d.CharacterGalleryItemImage,src:n,alt:r,"min-width":"100px"}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{className:d.CharacterName,children:r}),(0,m.jsx)("p",{children:t})]})]})},a)},p=function(e){var a=e.characters;return console.log(a),(0,m.jsx)("ul",{className:p.CharacterGallery,children:a.map((function(e){var a=e.id,r=e.name,t=e.species,n=e.image;return(0,m.jsx)(d,{id:a,name:r,species:t,image:n},a)}))})};var f=r.p+"static/media/search-icon.c77a50f238257623b5e066b03e852c00.svg",x={},v=function(e){var a=(0,n.useState)(""),r=(0,t.Z)(a,2),c=r[0],s=r[1];return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("form",{className:x.searchForm,onSubmit:function(e){e.preventDefault()},children:[(0,m.jsx)("button",{className:x.searchFormBtn,type:"submit",children:(0,m.jsx)("img",{src:f,alt:"search"})}),(0,m.jsx)("input",{className:x.searchFormInput,onChange:function(a){s(a.target.value),e.handleFilter({value:a.target.value,key:a.target.id})},type:"text",value:c,name:"searchBox",id:"searchBox",placeholder:"Filter by name",autoFocus:!0})]})})},j={};function g(){var e=(0,n.useState)([]),a=(0,t.Z)(e,2),r=a[0],c=a[1],s=(0,n.useState)(""),i=(0,t.Z)(s,2),u=i[0],o=i[1];(0,n.useEffect)((function(){(function(){return l.apply(this,arguments)})().then((function(e){c(e)}))}),[]);var h=r.filter((function(e){return e.name.toUpperCase().includes(u.toUpperCase())}));return(0,m.jsx)("main",{className:j.Section,children:(0,m.jsxs)("div",{children:[(0,m.jsx)(v,{handleFilter:function(e){"searchBox"===e.key&&o(e.value)}}),h.length>0&&(0,m.jsx)(p,{characters:h})]})})}var y=g}}]);
//# sourceMappingURL=252.28fed09c.chunk.js.map