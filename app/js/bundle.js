!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build/",n(n.s=3)}([function(e,t,n){"use strict";var o,i,c;o=$(".welcome-form"),i=$(".welcome__link"),c="run-index-animation",i.click(function(e){e.preventDefault(),o.each(function(){$(this).hasClass(c)&&$(this).removeClass(c),$(this).hasClass("back")?$(this).removeClass("back"):($(this).addClass("back"),$(this).addClass(c))}),$.when(i.animate({opacity:0},700)).then(function(){i.hide()})})},function(e,t,n){"use strict";!function(){var e=document.querySelector("#mobile-checkbox"),t=document.querySelector("#mobile-cont"),n=document.getElementsByClassName("mobile-menu__link"),o=document.querySelector("#mobile-btn");if(e){e.addEventListener("click",function(){var e=t.classList.contains("mobile-menu__container--active");e||(t.classList.add("mobile-menu__container--active"),document.body.style.overflow="hidden",o.classList.add("mobile-menu__btn--active")),e&&(t.classList.remove("mobile-menu__container--active"),document.body.style.overflow="auto",o.classList.remove("mobile-menu__btn--active"))});for(var i=0;i<n.length;i++)n[i].addEventListener("click",function(){t.classList.remove("mobile-menu__container--active"),document.body.style.overflow="auto",o.classList.remove("mobile-menu__btn--active")})}}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];console.log("WebPack is ready")}},function(e,t,n){"use strict";var o=i(n(2));i(n(1)),i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}(0,o.default)()}]);
//# sourceMappingURL=bundle.js.map