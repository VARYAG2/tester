;
(self.AMP=self.AMP||[]).push({m:0,v:"2310271806000",n:"amp-soundcloud",ev:"0.1",l:!0,f:function(n,t){!function(){function t(n,r){return(t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,r)}function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,t){if(t&&("object"===e(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function u(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(r)return(r=r.call(n)).next.bind(r);if(Array.isArray(n)||(r=function(n,t){if(n){if("string"==typeof n)return o(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var e=0;return function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Array.isArray;var a=Object.prototype,f=(a.hasOwnProperty,a.toString,"fixed");function c(n){var t=Object.getOwnPropertyDescriptor(n,"message");if(null!=t&&t.writable)return n;var r=n.message,e=n.stack,i=new Error(r);for(var o in n)i[o]=n[o];return i.stack=e,i}function l(n){for(var t,r=null,e="",i=u(arguments,!0);!(t=i()).done;){var o=t.value;o instanceof Error&&!r?r=c(o):(e&&(e+=" "),e+=o)}return r?e&&(r.message=e+": "+r.message):r=new Error(e),r}function s(n){var t,r;null===(t=(r=self).__AMP_REPORT_ERROR)||void 0===t||t.call(r,n)}function d(n){var t=l.apply(null,arguments);setTimeout((function(){throw s(t),t}))}function h(n){try{for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];return n.apply(null,r)}catch(n){d(n)}}var v={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}},p=/vertical/,y=new WeakMap,m=new WeakMap,b=new WeakMap;function w(n){var t=y.get(n);return t||(t=new n.ResizeObserver(S),y.set(n,t)),t}function S(n){for(var t=new Set,r=n.length-1;r>=0;r--){var e=n[r],i=e.target;if(!t.has(i)){t.add(i);var o=m.get(i);if(o){b.set(i,e);for(var u=0;u<o.length;u++){var a=o[u],f=a.callback;k(a.type,f,e)}}}}}function k(n,t,r){if(0==n){var e=r.contentRect,i=e.height;h(t,{width:e.width,height:i})}else if(1==n){var o,u=r.borderBoxSize;if(u)o=u.length>0?u[0]:{inlineSize:0,blockSize:0};else{var a,f,c=r.target,l=((b=c).ownerDocument||b).defaultView,s=p.test(function(n,t){return n.getComputedStyle(t)||v}(l,c).writingMode),d=c,y=d.offsetHeight,m=d.offsetWidth;s?(f=m,a=y):(a=m,f=y),o={inlineSize:a,blockSize:f}}h(t,o)}var b}var j=function(){function n(n){this.Yl=n,this.ib=!1,this.ub=!1,this.ab=this.ab.bind(this)}var t=n.prototype;return t.updatePlaying=function(n){n!==this.ib&&(this.ib=n,n?(this.ub=!1,function(n,t,r){var e=n.ownerDocument.defaultView;if(e){var i=m.get(n);if(i||(i=[],m.set(n,i),w(e).observe(n)),!i.some((function(n){return n.callback===r&&1===n.type}))){i.push({type:1,callback:r});var o=b.get(n);o&&setTimeout((function(){return k(1,r,o)}))}}}(this.Yl,0,this.ab)):function(n,t){!function(n,t,r){var e=m.get(n);if(e&&(function(n,t){for(var e=[],i=0,o=0;o<n.length;o++){var u=n[o];(a=u).callback===r&&1===a.type?e.push(u):(i<o&&(n[i]=u),i++)}var a;i<n.length&&(n.length=i)}(e),0==e.length)){m.delete(n),b.delete(n);var i=n.ownerDocument.defaultView;i&&w(i).unobserve(n)}}(n,0,t)}(this.Yl,this.ab))},t.ab=function(n){var t=n.blockSize,r=n.inlineSize>0&&t>0;if(r!==this.ub){this.ub=r;var e=this.Yl;r||e.pause()}},n}();self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var g=self.__AMP_LOG;function O(n){return function(n,t){throw new Error("failed to call initLogConstructor")}()}function E(n,t,r,e,i,o,u,a,f,c,l){return n}var R=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&t(n,r)}(a,n);var e,o,u=(e=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=r(e);if(o){var u=r(this).constructor;n=Reflect.construct(t,arguments,u)}else n=t.apply(this,arguments);return i(this,n)});function a(n){var t;return(t=u.call(this,n)).eb=null,t.mb=new j(t.element),t}var c=a.prototype;return c.preconnectCallback=function(n){var t,r,e;(t=this.win,r=t,e="preconnect",function(n,t){E(function(n,t){var r=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!r||!r.ctor)}(n,t));var r=function(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}(n)[t];return r.obj||(E(r.ctor),E(r.context),r.obj=new r.ctor(r.context),E(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}(r=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(r),e)).url(this.getAmpDoc(),"https://api.soundcloud.com/",n)},c.isLayoutSupported=function(n){return function(n){return n==f||"fixed-height"==n||"responsive"==n||"fill"==n||"flex-item"==n||"fluid"==n||"intrinsic"==n}(n)},c.buildCallback=function(){this.element.classList.add("i-amphtml-media-component")},c.layoutCallback=function(){var n,t,r=this.element.getAttribute("height"),e=this.element.getAttribute("data-color"),i=this.element.getAttribute("data-visual"),o="https://api.soundcloud.com/"+(this.element.hasAttribute("data-trackid")?"tracks":"playlists")+"/",u=(n=this.element.getAttribute("data-trackid")||this.element.getAttribute("data-playlistid"),"data-trackid or data-playlistid is required for <amp-soundcloud> %s",t=this.element,(g.user||(g.user=O()),void g.user.win?g.userForEmbed||(g.userForEmbed=O()):g.user).assert(n,"data-trackid or data-playlistid is required for <amp-soundcloud> %s",t,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),a=this.element.getAttribute("data-secret-token"),f=this.element.ownerDocument.createElement("iframe");f.setAttribute("frameborder","no"),f.setAttribute("scrolling","no");var c="https://w.soundcloud.com/player/?url="+encodeURIComponent(o+u);return a&&(c+=encodeURIComponent("?secret_token="+a)),"true"===i?c+="&visual=true":e&&(c+="&color="+encodeURIComponent(e)),f.src=c,f.classList.add("i-amphtml-fill-content"),f.height=r,this.element.appendChild(f),this.eb=f,this.mb.updatePlaying(!0),this.loadPromise(f)},c.unlayoutCallback=function(){var n=this.eb;return n&&(this.element.removeChild(n),this.eb=null),this.mb.updatePlaying(!1),!0},c.unlayoutCallback=function(){var n=this.eb;return n&&(this.element.removeChild(n),this.eb=null),!0},c.pauseCallback=function(){this.eb&&this.eb.contentWindow&&this.eb.contentWindow.postMessage(JSON.stringify({"method":"pause"}),"https://w.soundcloud.com")},a}(n.BaseElement);n.registerElement("amp-soundcloud",R)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-soundcloud-0.1.js.map