!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=19)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(22))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(10),o=e(25);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(3),o=e(13),i=e(9);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(0),o=e(6);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(3),o=e(23),i=e(9),u=e(4),c=e(11),a=e(2),f=e(12),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=e(24),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(3),o=e(1),i=e(26);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(3),o=e(12),i=e(14),u=e(11),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(16),o=Function.toString;t.exports=r("inspectSource",(function(t){return o.call(t)}))},function(t,n,e){var r=e(28),o=e(29);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.7",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports={}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){"use strict";e.r(n);e(20);!function(){jQuery.extend(BookReader.defaultOptions,{enableMenuToggle:!0});var t=!1;function n(t){t.refs&&t.refs.$BRnav&&t.refs.$BRnav.children(".BRnavCntl").css("display","none")}var e,r,o=function(t){t.refs.$brPageViewEl&&t.refs.$brPageViewEl[0].removeEventListener("click",a,!0),t.refs.$brTwoPageView&&t.refs.$brTwoPageView[0].removeEventListener("click",a,!0)},i=!1,u=function(n,e,r){if(!t){var o,u,c=(o=document.querySelector(".BRcontainer")).scrollWidth>o.offsetWidth?n.refs.$brContainer[0]:e.currentTarget,a=n.constMode1up===n.mode||function(t,n){var e=t.clientX,r=n.offsetWidth,o=n.offsetLeft,i=Math.round(r/3),u=Math.round(i+o),c=Math.round(r-i+o),a=e>u&&e<c;return a}(e,c);(r?a:(u=e.target,$(u).hasClass("BookReader")||$(u).hasClass("BRcontainer")||$(u).hasClass("BRemptypage")||$(u).hasClass("BRpageview")||$(u).hasClass("BRtwopageview")))&&(!function(t){if(!i){i=!0;$(document).on("BookReader:navToggled",(function t(){i=!1,window.removeEventListener("BookReader:navToggled",t)})),t.navigationIsVisible()?t.hideNavigation():t.showNavigation()}}(n),r&&e.stopPropagation())}};function c(t,n){u(t,n)}function a(t,n){u(t,n,!0)}function f(n){var o=document.querySelector(".BookReader");if(o){o.addEventListener("click",c.bind(null,n),{capture:!0,passive:!0});var i=(document.querySelector(".BRcontainer")||{}).firstChild;i&&(i.addEventListener("click",a.bind(null,n),!0),function(){var n=document.querySelector(".BookReader");n&&(n.addEventListener("mousedown",(function(n){e=n.screenX,r=n.screenY,t=!0}),!0),n.addEventListener("mouseup",(function(n){Math.abs(e-n.screenX)>5||Math.abs(r-n.screenY)>5||(t=!1,e=0,r=0)}),!0))}())}}var s,l=function(t){var e=!1;try{e=t.navigationIsVisible()}catch(t){e=!1}if(e){var r=function(n){f(t)},i=function(e){!function(t){n(t),f(t)}(t)};$(document).on(["BookReader:3PageViewSelected"].join(" "),(function(e){!function(t){n(t),o(t),t.showNavigation()}(t)})),$(document).on(["BookReader:1PageViewSelected","BookReader:2PageViewSelected","BookReader:zoomIn","BookReader:zoomOut","BookReader:resize"].join(" "),r),$(window).on("orientationchange",r),$(document).on("BookReader:fullscreenToggled",i),$(window).on("DOMContentLoaded",i),i()}};BookReader.prototype.setup=(s=BookReader.prototype.setup,function(t){s.call(this,t)}),BookReader.prototype.init=function(t){return function(){t.call(this),this.options.enableMenuToggle&&l(this)}}(BookReader.prototype.init)}()},function(t,n,e){"use strict";var r=e(21),o=e(10),i=e(4),u=e(46),c=[].join,a=o!=Object,f=u("join",",");r({target:"Array",proto:!0,forced:a||f},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},function(t,n,e){var r=e(0),o=e(8).f,i=e(6),u=e(27),c=e(7),a=e(34),f=e(45);t.exports=function(t,n){var e,s,l,p,v,d=t.target,g=t.global,y=t.stat;if(e=g?r:y?r[d]||c(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(g?s:d+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(0),o=e(5),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(6),i=e(2),u=e(7),c=e(15),a=e(30),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},function(t,n){t.exports=!1},function(t,n,e){var r=e(0),o=e(7),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r,o,i,u=e(31),c=e(0),a=e(5),f=e(6),s=e(2),l=e(32),p=e(17),v=c.WeakMap;if(u){var d=new v,g=d.get,y=d.has,h=d.set;r=function(t,n){return h.call(d,t,n),n},o=function(t){return g.call(d,t)||{}},i=function(t){return y.call(d,t)}}else{var b=l("state");p[b]=!0,r=function(t,n){return f(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(15),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(16),o=e(33),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(2),o=e(35),i=e(8),u=e(13);t.exports=function(t,n){for(var e=o(n),c=u.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||c(t,s,a(n,s))}}},function(t,n,e){var r=e(36),o=e(38),i=e(44),u=e(14);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(37),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(39),o=e(43).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(2),o=e(4),i=e(40).indexOf,u=e(17);t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)!r(u,e)&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(4),o=e(41),i=e(42),u=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(18),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(18),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r=e(1);t.exports=function(t,n){var e=[][t];return!e||!r((function(){e.call(null,n||function(){throw 1},1)}))}}]);
//# sourceMappingURL=plugin.menu_toggle.js.map