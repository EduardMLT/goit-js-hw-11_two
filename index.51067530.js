!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var i={headers:{Authorization:"4330ebfabc654a6992c2aa792f3173a3"}},a=function(){"use strict";function r(){e(t)(this,r),this.searchQuery="",this.page=1}return e(n)(r,[{key:"fetchArticles",value:function(){var e=this,t="".concat("https://newsapi.org/v2","/everything?q=").concat(this.searchQuery,"&language=en&pageSize=4&page=").concat(this.page);return fetch(t,i).then((function(e){return e.json()})).then((function(t){var n=t.articles;return e.incrementPage(),n}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),r}(),s=function(){"use strict";function r(n){var i=n.selector,a=n.hidden,s=void 0!==a&&a;e(t)(this,r),this.refs=this.getRefs(i),s&&this.hide()}return e(n)(r,[{key:"getRefs",value:function(e){var t={};return t.button=document.querySelector(e),t.label=t.button.querySelector(".label"),t.spinner=t.button.querySelector(".spinner"),t}},{key:"enable",value:function(){this.refs.button.disabled=!1,this.refs.label.textContent="Показать ещё",this.refs.spinner.classList.add("is-hidden")}},{key:"disable",value:function(){this.refs.button.disabled=!0,this.refs.label.textContent="Загружаем...",this.refs.spinner.classList.remove("is-hidden")}},{key:"show",value:function(){this.refs.button.classList.remove("is-hidden")}},{key:"hide",value:function(){this.refs.button.classList.add("is-hidden")}}]),r}(),c={searchForm:document.querySelector(".js-search-form"),articlesContainer:document.querySelector(".js-articles-container")},o=new s({selector:'[data-action="load-more"]',hidden:!0}),u=new a;function l(){o.disable(),u.fetchArticles().then((function(e){!function(e){var t=e.map((function(e){var t=e.url,n=e.urlToImage,r=e.title,i=e.author,a=e.description;return'\n  <li>\n    <a href="'.concat(t,'" target="_blank" rel="noopener noreferrer">\n      <article>\n        <img src="').concat(n,'" alt="" width="480">\n        <h2>').concat(r,"</h2>\n        <p>Posted by: ").concat(i,"</p>\n        <p>").concat(a,"</p>\n      </article>\n    </a>\n  </li>")})).join("");c.articlesContainer.insertAdjacentHTML("beforeend",t)}(e),o.enable()}))}c.searchForm.addEventListener("submit",(function(e){if(e.preventDefault(),u.query=e.currentTarget.elements.query.value,""===u.query)return alert("Введите что-то нормальное");o.show(),u.resetPage(),c.articlesContainer.innerHTML="",l()})),o.refs.button.addEventListener("click",l)}();
//# sourceMappingURL=index.51067530.js.map