function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=s),s.register("kyEFX",(function(n,t){var o,s;e(n.exports,"register",(function(){return o}),(function(e){return o=e})),e(n.exports,"resolve",(function(){return s}),(function(e){return s=e}));var i={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},s=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),s("kyEFX").register(JSON.parse('{"7nZc1":"shoping-list.865f98fc.js","kHHEE":"image-am.a7ec3af8.png","bWEkM":"image-ap.a9f158e0.png","hm5VY":"icons.f10f58bf.svg","2x3PB":"shoping-list.eefc7358.js"}')),s("hai3r"),s("bUb57"),s("ghT7p");const i=[];var r;r=new URL(s("kyEFX").resolve("kHHEE"),import.meta.url).toString();const a=new URL(r);var l;l=new URL(s("kyEFX").resolve("bWEkM"),import.meta.url).toString();const c=new URL(l);var p;p=new URL(s("kyEFX").resolve("hm5VY"),import.meta.url).toString();const d=new URL(p),u={booksContainerShop:document.querySelector(".books-container-shop-list"),containerShopList:document.querySelector(".container-shop-list"),shoppingWrapDesk:document.querySelector(".shopping-wrap-desk"),homeLink:document.querySelector(".header-link-nav-li.home"),mobHomeLink:document.querySelector(".burger-link-nav-li.home"),shoppingListLink:document.querySelector(".header-link-nav-li.shopping"),mobShoppingListLink:document.querySelector(".burger-link-nav-li.shopping")};function h(e){if(!e.target.classList.contains("delete-btn-shop-list"))return;const n=e.target.closest(".book-card-shop-list"),t=n.getAttribute("data-title");n.remove();const o=i.findIndex((e=>e.title===t));-1!==o&&(i.splice(o,1),localStorage.setItem("booksShopingList",JSON.stringify(i))),0===i.length&&(localStorage.removeItem("booksShopingList"),u.containerShopList.classList.add("visually-hidden"),u.shoppingWrapDesk.classList.remove("visually-hidden"))}u.homeLink.classList.remove("current"),u.shoppingListLink.classList.add("current"),u.mobHomeLink.classList.remove("current"),u.mobShoppingListLink.classList.add("current"),function(e){const n=localStorage.getItem(e);n&&i.push(...JSON.parse(n))}("booksShopingList"),0===i.length?u.containerShopList.classList.add("visually-hidden"):(u.shoppingWrapDesk.classList.add("visually-hidden"),function(e){const n=e.map((({img:e,title:n,category:t,description:o,author:s,amazon:i,apple:r})=>`\n        <li class="book-card-shop-list" data-title="${n}">\n          <img class="img-shop-list" src="${e}" alt="${n}" loading="lazy" />\n          <div class="right-card-part">\n            <div class="card-top-shop-list">\n              <p class="title-shop-list">${n}</p>\n              <p class="category-shop-list">${t}</p>\n              <p class="description-shop-list">${o}</p>\n            </div>\n            <div class="card-bottom-shop-list">\n              <p class="author-shop-list">${s}</p>\n              <ul class="links-shop-list">\n                <li>\n                  <a\n                    href="${i}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    >\n                    <img class="amazon-img-shop-list" src="${a}" alt="Amazon">\n                  </a>\n                </li>\n                <li>\n                  <a\n                    href="${r}"\n                    target="_blank"\n                    rel="noopener noreferrer"\n                    >\n                    <img class="apple-img-shop-list" src="${c}" alt="Apple">\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <button class="delete-btn-shop-list" type="button">\n            <svg class="trash-icon">\n             <use href="${d}#icon-trash"></use>\n            </svg>\n          </button>\n        </li>\n      `)).join("");u.booksContainerShop.insertAdjacentHTML("beforeend",n),u.booksContainerShop.addEventListener("click",h)}(i));
//# sourceMappingURL=shoping-list.865f98fc.js.map