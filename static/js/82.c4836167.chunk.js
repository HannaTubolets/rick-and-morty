"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[82],{82:function(e,a,r){r.r(a),r.d(a,{HomePage:function(){return k},default:function(){return b}});var t=r(439),n=r(791),c=r(685),s=r(184),i=function(e){for(var a=e.currentPage,r=e.itemsPerPage,t=e.totalItems,n=e.onPageChange,c=Math.ceil(t/r),i=[],u=function(e){i.push((0,s.jsx)("li",{className:"page-item".concat(e===a?" active":""),children:(0,s.jsx)("button",{className:"page-link",onClick:function(){return n(e)},children:e})},e))},o=1;o<=c;o++)u(o);return(0,s.jsx)("nav",{"aria-label":"Page navigation example",children:(0,s.jsxs)("ul",{className:"pagination mt-5",children:[(0,s.jsx)("li",{className:"page-item".concat(1===a?" disabled":""),children:(0,s.jsx)("button",{className:"page-link",onClick:function(){return n(a-1)},children:"Previous"})}),i,(0,s.jsx)("li",{className:"page-item".concat(a===c?" disabled":""),children:(0,s.jsx)("button",{className:"page-link",onClick:function(){return n(a+1)},children:"Next"})})]})})},u=r(87),o=r(689),l="CharacterItemCard_CharacterItemImage__BKWip",m="CharacterItemCard_NavLink__-2+E9",h="CharacterItemCard_TxtWrapper__wsweP",p="CharacterItemCard_CharacterName__MQ29d",d="CharacterItemCard_CharacterSpecies__U27zT",f="CharacterItemCard_CharacterGalleryItem__cTA9y",x=function(e){var a=e.id,r=e.name,t=e.species,n=e.image,c=(0,o.TH)();return(0,s.jsx)("li",{className:f,children:(0,s.jsxs)(u.OL,{to:"/character/".concat(a),state:{from:c},className:m,children:[(0,s.jsx)("img",{className:l,src:n,alt:r,"max-width":"240px"}),(0,s.jsxs)("div",{className:h,children:[(0,s.jsx)("h2",{className:p,children:r}),(0,s.jsx)("p",{className:d,children:t})]})]})},a)},g={CharacterGallery:"CharacterCardList_CharacterGallery__IwYsU"},_=function(e){var a=e.characters,r=(0,n.useState)(1),c=(0,t.Z)(r,2),u=c[0],o=c[1],l=40*u,m=l-40,h=a.slice(m,l),p=a.length;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("ul",{className:g.CharacterGallery,children:h.map((function(e){var a=e.id,r=e.name,t=e.species,n=e.image;return(0,s.jsx)(x,{id:a,name:r,species:t,image:n},a)}))}),(0,s.jsx)("div",{className:g.Pagination,children:(0,s.jsx)(i,{currentPage:u,itemsPerPage:40,totalItems:p,onPageChange:function(e){o(e)}})})]})};var C=r.p+"static/media/search-icon.c77a50f238257623b5e066b03e852c00.svg",v={searchFormInput:"SearchForm_searchFormInput__3mF-P",InputWrapper:"SearchForm_InputWrapper__XHwM3",searchFormBtn:"SearchForm_searchFormBtn__wsLs5"},j=function(e){var a=(0,n.useState)(""),r=(0,t.Z)(a,2),c=r[0],i=r[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("form",{className:v.searchForm,onSubmit:function(e){e.preventDefault()},children:(0,s.jsxs)("div",{className:v.InputWrapper,children:[(0,s.jsx)("button",{className:v.searchFormBtn,type:"submit",children:(0,s.jsx)("img",{src:C,alt:"search"})}),(0,s.jsx)("input",{className:v.searchFormInput,onChange:function(a){i(a.target.value),e.handleFilter({value:a.target.value,key:a.target.id})},type:"text",value:c,name:"searchBox",id:"searchBox",placeholder:"Filter by name",autoFocus:!0})]})})})},N={Container:"HomePage_Container__1wZVs"};function k(){var e=(0,n.useState)([]),a=(0,t.Z)(e,2),r=a[0],i=a[1],u=(0,n.useState)(""),o=(0,t.Z)(u,2),l=o[0],m=o[1];(0,n.useEffect)((function(){(0,c.f)().then((function(e){i(e)}))}),[]),r.sort((function(e,a){var r=e.name.toUpperCase(),t=a.name.toUpperCase();return r<t?-1:r>t?1:0}));var h=r.filter((function(e){return e.name.toUpperCase().includes(l.toUpperCase())}));return(0,s.jsx)("main",{className:N.Section,children:(0,s.jsxs)("div",{className:N.Container,children:[(0,s.jsx)(j,{handleFilter:function(e){"searchBox"===e.key&&m(e.value)}}),h.length>0&&(0,s.jsx)(_,{characters:h})]})})}var b=k},685:function(e,a,r){r.d(a,{T:function(){return o},f:function(){return m}});var t=r(433),n=r(861),c=r(687),s=r.n(c),i=r(243),u="https://rickandmortyapi.com/api";function o(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(a){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/character/").concat(a));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(){var a,r,n,c,i,o,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],r=1,n=1;case 3:if(!(n<=r)){e.next=17;break}return e.next=6,fetch("".concat(u,"/character/?page=").concat(n));case 6:return c=e.sent,e.next=9,c.json();case 9:i=e.sent,o=i.info,l=i.results,a=[].concat((0,t.Z)(a),(0,t.Z)(l)),r=o.pages,n++,e.next=3;break;case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m().then((function(e){return console.log(e)}))}}]);
//# sourceMappingURL=82.c4836167.chunk.js.map