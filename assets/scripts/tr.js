!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=13)}([function(e,t,r){e.exports=function(){"use strict";var e={read:function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function t(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}return function r(n,i){function o(e,r,o){if("undefined"!=typeof document){"number"==typeof(o=t({},i,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),r=n.write(r,e),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var s in o)o[s]&&(a+="; "+s,!0!==o[s]&&(a+="="+o[s].split(";")[0]));return document.cookie=e+"="+r+a}}return Object.create({set:o,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var r=document.cookie?document.cookie.split("; "):[],i={},o=0;o<r.length;o++){var a=r[o].split("="),s=a.slice(1).join("=");'"'===s[0]&&(s=s.slice(1,-1));try{var u=e.read(a[0]);if(i[u]=n.read(s,u),t===u)break}catch(e){}}return t?i[t]:i}},remove:function(e,r){o(e,"",t({},r,{expires:-1}))},withAttributes:function(e){return r(this.converter,t({},this.attributes,e))},withConverter:function(e){return r(t({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(n)}})}(e,{path:"/"})}()},function(e,t,r){var n=r(3)((function(e,t){return null==t||t!=t?e:t}));e.exports=n},function(e,t){e.exports=function(e,t){return t=t||{},new Promise((function(r,n){var i=new XMLHttpRequest,o=[],a=[],s={},u=function(){return{ok:2==(i.status/100|0),statusText:i.statusText,status:i.status,url:i.responseURL,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(JSON.parse(i.responseText))},blob:function(){return Promise.resolve(new Blob([i.response]))},clone:u,headers:{keys:function(){return o},entries:function(){return a},get:function(e){return s[e.toLowerCase()]},has:function(e){return e.toLowerCase()in s}}}};for(var f in i.open(t.method||"get",e,!0),i.onload=function(){i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,r){o.push(t=t.toLowerCase()),a.push([t,r]),s[t]=s[t]?s[t]+","+r:r})),r(u())},i.onerror=n,i.withCredentials="include"==t.credentials,t.headers)i.setRequestHeader(f,t.headers[f]);i.send(t.body||null)}))}},function(e,t,r){var n=r(11),i=r(5);e.exports=function(e){return function t(r,o){switch(arguments.length){case 0:return t;case 1:return i(r)?t:n((function(t){return e(r,t)}));default:return i(r)&&i(o)?t:i(r)?n((function(t){return e(t,o)})):i(o)?n((function(t){return e(r,t)})):e(r,o)}}}},function(e,t,r){"use strict";(function(t){var r,n,i,o=window.crypto||window.msCrypto;if(!r&&o&&o.getRandomValues)try{var a=new Uint8Array(16);i=r=function(){return o.getRandomValues(a),a},r()}catch(e){}if(!r){var s=new Array(16);n=r=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),s[t]=e>>>((3&t)<<3)&255;return s},"undefined"!=typeof console&&console.warn&&console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()")}for(var u="function"==typeof t?t:Array,f=[],c={},h=0;h<256;h++)f[h]=(h+256).toString(16).substr(1),c[f[h]]=h;function l(e,t){var r=t||0,n=f;return n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]}var d=r(),p=[1|d[0],d[1],d[2],d[3],d[4],d[5]],g=16383&(d[6]<<8|d[7]),w=0,y=0;function m(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new u(16):null,e=null);var o=(e=e||{}).random||(e.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var a=0;a<16;a++)t[i+a]=o[a];return t||l(o)}var v=m;v.v1=function(e,t,r){var n=t&&r||0,i=t||[],o=null!=(e=e||{}).clockseq?e.clockseq:g,a=null!=e.msecs?e.msecs:(new Date).getTime(),s=null!=e.nsecs?e.nsecs:y+1,u=a-w+(s-y)/1e4;if(u<0&&null==e.clockseq&&(o=o+1&16383),(u<0||a>w)&&null==e.nsecs&&(s=0),s>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");w=a,y=s,g=o;var f=(1e4*(268435455&(a+=122192928e5))+s)%4294967296;i[n++]=f>>>24&255,i[n++]=f>>>16&255,i[n++]=f>>>8&255,i[n++]=255&f;var c=a/4294967296*1e4&268435455;i[n++]=c>>>8&255,i[n++]=255&c,i[n++]=c>>>24&15|16,i[n++]=c>>>16&255,i[n++]=o>>>8|128,i[n++]=255&o;for(var h=e.node||p,d=0;d<6;d++)i[n+d]=h[d];return t||l(i)},v.v4=m,v.parse=function(e,t,r){var n=t&&r||0,i=0;for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,(function(e){i<16&&(t[n+i++]=c[e])}));i<16;)t[n+i++]=0;return t},v.unparse=l,v.BufferClass=u,v._rng=r,v._mathRNG=n,v._whatwgRNG=i,e.exports={uuid:v,quick4:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}}}).call(this,r(6).Buffer)},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}},function(e,t,r){"use strict";(function(e){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var n=r(8),i=r(9),o=r(10);function a(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(e,t){if(a()<t)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=u.prototype:(null===e&&(e=new u(t)),e.length=t),e}function u(e,t,r){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return h(this,e)}return f(this,e,t,r)}function f(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n);u.TYPED_ARRAY_SUPPORT?(e=t).__proto__=u.prototype:e=l(e,t);return e}(e,t,r,n):"string"==typeof t?function(e,t,r){"string"==typeof r&&""!==r||(r="utf8");if(!u.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|p(t,r),i=(e=s(e,n)).write(t,r);i!==n&&(e=e.slice(0,i));return e}(e,t,r):function(e,t){if(u.isBuffer(t)){var r=0|d(t.length);return 0===(e=s(e,r)).length?e:(t.copy(e,0,0,r),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(n=t.length)!=n?s(e,0):l(e,t);if("Buffer"===t.type&&o(t.data))return l(e,t.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function c(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function h(e,t){if(c(t),e=s(e,t<0?0:0|d(t)),!u.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function l(e,t){var r=t.length<0?0:0|d(t.length);e=s(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function d(e){if(e>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|e}function p(e,t){if(u.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return N(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return W(e).length;default:if(n)return N(e).length;t=(""+t).toLowerCase(),n=!0}}function g(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return _(this,t,r);case"utf8":case"utf-8":return B(this,t,r);case"ascii":return R(this,t,r);case"latin1":case"binary":return P(this,t,r);case"base64":return S(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function w(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function y(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=u.from(t,n)),u.isBuffer(t))return 0===t.length?-1:m(e,t,r,n,i);if("number"==typeof t)return t&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):m(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function m(e,t,r,n,i){var o,a=1,s=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,s/=2,u/=2,r/=2}function f(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var c=-1;for(o=r;o<s;o++)if(f(e,o)===f(t,-1===c?0:o-c)){if(-1===c&&(c=o),o-c+1===u)return c*a}else-1!==c&&(o-=o-c),c=-1}else for(r+u>s&&(r=s-u),o=r;o>=0;o--){for(var h=!0,l=0;l<u;l++)if(f(e,o+l)!==f(t,l)){h=!1;break}if(h)return o}return-1}function v(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;a<n;++a){var s=parseInt(t.substr(2*a,2),16);if(isNaN(s))return a;e[r+a]=s}return a}function b(e,t,r,n){return F(N(t,e.length-r),e,r,n)}function x(e,t,r,n){return F(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function A(e,t,r,n){return x(e,t,r,n)}function O(e,t,r,n){return F(W(t),e,r,n)}function E(e,t,r,n){return F(function(e,t){for(var r,n,i,o=[],a=0;a<e.length&&!((t-=2)<0);++a)r=e.charCodeAt(a),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(t,e.length-r),e,r,n)}function S(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function B(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var o,a,s,u,f=e[i],c=null,h=f>239?4:f>223?3:f>191?2:1;if(i+h<=r)switch(h){case 1:f<128&&(c=f);break;case 2:128==(192&(o=e[i+1]))&&(u=(31&f)<<6|63&o)>127&&(c=u);break;case 3:o=e[i+1],a=e[i+2],128==(192&o)&&128==(192&a)&&(u=(15&f)<<12|(63&o)<<6|63&a)>2047&&(u<55296||u>57343)&&(c=u);break;case 4:o=e[i+1],a=e[i+2],s=e[i+3],128==(192&o)&&128==(192&a)&&128==(192&s)&&(u=(15&f)<<18|(63&o)<<12|(63&a)<<6|63&s)>65535&&u<1114112&&(c=u)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),i+=h}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}t.Buffer=u,t.SlowBuffer=function(e){+e!=e&&(e=0);return u.alloc(+e)},t.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=a(),u.poolSize=8192,u._augment=function(e){return e.__proto__=u.prototype,e},u.from=function(e,t,r){return f(null,e,t,r)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(e,t,r){return function(e,t,r,n){return c(t),t<=0?s(e,t):void 0!==r?"string"==typeof n?s(e,t).fill(r,n):s(e,t).fill(r):s(e,t)}(null,e,t,r)},u.allocUnsafe=function(e){return h(null,e)},u.allocUnsafeSlow=function(e){return h(null,e)},u.isBuffer=function(e){return!(null==e||!e._isBuffer)},u.compare=function(e,t){if(!u.isBuffer(e)||!u.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(e,t){if(!o(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return u.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=u.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var a=e[r];if(!u.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(n,i),i+=a.length}return n},u.byteLength=p,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)w(this,t,t+1);return this},u.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)w(this,t,t+3),w(this,t+1,t+2);return this},u.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)w(this,t,t+7),w(this,t+1,t+6),w(this,t+2,t+5),w(this,t+3,t+4);return this},u.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?B(this,0,e):g.apply(this,arguments)},u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===u.compare(this,e)},u.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},u.prototype.compare=function(e,t,r,n,i){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(this===e)return 0;for(var o=(i>>>=0)-(n>>>=0),a=(r>>>=0)-(t>>>=0),s=Math.min(o,a),f=this.slice(n,i),c=e.slice(t,r),h=0;h<s;++h)if(f[h]!==c[h]){o=f[h],a=c[h];break}return o<a?-1:a<o?1:0},u.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},u.prototype.indexOf=function(e,t,r){return y(this,e,t,r,!0)},u.prototype.lastIndexOf=function(e,t,r){return y(this,e,t,r,!1)},u.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return v(this,e,t,r);case"utf8":case"utf-8":return b(this,e,t,r);case"ascii":return x(this,e,t,r);case"latin1":case"binary":return A(this,e,t,r);case"base64":return O(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function R(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function P(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function _(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=t;o<r;++o)i+=j(e[o]);return i}function T(e,t,r){for(var n=e.slice(t,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function k(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function C(e,t,r,n,i,o){if(!u.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function U(e,t,r,n){t<0&&(t=65535+t+1);for(var i=0,o=Math.min(e.length-r,2);i<o;++i)e[r+i]=(t&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function M(e,t,r,n){t<0&&(t=4294967295+t+1);for(var i=0,o=Math.min(e.length-r,4);i<o;++i)e[r+i]=t>>>8*(n?i:3-i)&255}function I(e,t,r,n,i,o){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function Y(e,t,r,n,o){return o||I(e,0,r,4),i.write(e,t,r,n,23,4),r+4}function L(e,t,r,n,o){return o||I(e,0,r,8),i.write(e,t,r,n,52,8),r+8}u.prototype.slice=function(e,t){var r,n=this.length;if((e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e),u.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=u.prototype;else{var i=t-e;r=new u(i,void 0);for(var o=0;o<i;++o)r[o]=this[o+e]}return r},u.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||k(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n},u.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||k(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},u.prototype.readUInt8=function(e,t){return t||k(e,1,this.length),this[e]},u.prototype.readUInt16LE=function(e,t){return t||k(e,2,this.length),this[e]|this[e+1]<<8},u.prototype.readUInt16BE=function(e,t){return t||k(e,2,this.length),this[e]<<8|this[e+1]},u.prototype.readUInt32LE=function(e,t){return t||k(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},u.prototype.readUInt32BE=function(e,t){return t||k(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},u.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||k(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},u.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||k(e,t,this.length);for(var n=t,i=1,o=this[e+--n];n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},u.prototype.readInt8=function(e,t){return t||k(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},u.prototype.readInt16LE=function(e,t){t||k(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(e,t){t||k(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(e,t){return t||k(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},u.prototype.readInt32BE=function(e,t){return t||k(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},u.prototype.readFloatLE=function(e,t){return t||k(e,4,this.length),i.read(this,e,!0,23,4)},u.prototype.readFloatBE=function(e,t){return t||k(e,4,this.length),i.read(this,e,!1,23,4)},u.prototype.readDoubleLE=function(e,t){return t||k(e,8,this.length),i.read(this,e,!0,52,8)},u.prototype.readDoubleBE=function(e,t){return t||k(e,8,this.length),i.read(this,e,!1,52,8)},u.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||C(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},u.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||C(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},u.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,1,255,0),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},u.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):U(this,e,t,!0),t+2},u.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):U(this,e,t,!1),t+2},u.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):M(this,e,t,!0),t+4},u.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):M(this,e,t,!1),t+4},u.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);C(this,e,t,r,i-1,-i)}var o=0,a=1,s=0;for(this[t]=255&e;++o<r&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+r},u.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);C(this,e,t,r,i-1,-i)}var o=r-1,a=1,s=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+r},u.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,1,127,-128),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},u.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):U(this,e,t,!0),t+2},u.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):U(this,e,t,!1),t+2},u.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):M(this,e,t,!0),t+4},u.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||C(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):M(this,e,t,!1),t+4},u.prototype.writeFloatLE=function(e,t,r){return Y(this,e,t,!0,r)},u.prototype.writeFloatBE=function(e,t,r){return Y(this,e,t,!1,r)},u.prototype.writeDoubleLE=function(e,t,r){return L(this,e,t,!0,r)},u.prototype.writeDoubleBE=function(e,t,r){return L(this,e,t,!1,r)},u.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i,o=n-r;if(this===e&&r<t&&t<n)for(i=o-1;i>=0;--i)e[i+t]=this[i+r];else if(o<1e3||!u.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+o),t);return o},u.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var o;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var a=u.isBuffer(e)?e:N(new u(e,n).toString()),s=a.length;for(o=0;o<r-t;++o)this[o+t]=a[o%s]}return this};var D=/[^+\/0-9A-Za-z-_]/g;function j(e){return e<16?"0"+e.toString(16):e.toString(16)}function N(e,t){var r;t=t||1/0;for(var n=e.length,i=null,o=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function W(e){return n.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(D,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function F(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}}).call(this,r(7))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";t.byteLength=function(e){var t=f(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,n=f(e),a=n[0],s=n[1],u=new o(function(e,t,r){return 3*(t+r)/4-r}(0,a,s)),c=0,h=s>0?a-4:a;for(r=0;r<h;r+=4)t=i[e.charCodeAt(r)]<<18|i[e.charCodeAt(r+1)]<<12|i[e.charCodeAt(r+2)]<<6|i[e.charCodeAt(r+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===s&&(t=i[e.charCodeAt(r)]<<2|i[e.charCodeAt(r+1)]>>4,u[c++]=255&t);1===s&&(t=i[e.charCodeAt(r)]<<10|i[e.charCodeAt(r+1)]<<4|i[e.charCodeAt(r+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},t.fromByteArray=function(e){for(var t,r=e.length,i=r%3,o=[],a=0,s=r-i;a<s;a+=16383)o.push(c(e,a,a+16383>s?s:a+16383));1===i?(t=e[r-1],o.push(n[t>>2]+n[t<<4&63]+"==")):2===i&&(t=(e[r-2]<<8)+e[r-1],o.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"="));return o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,u=a.length;s<u;++s)n[s]=a[s],i[a.charCodeAt(s)]=s;function f(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function c(e,t,r){for(var i,o,a=[],s=t;s<r;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return a.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(e,t){t.read=function(e,t,r,n,i){var o,a,s=8*i-n-1,u=(1<<s)-1,f=u>>1,c=-7,h=r?i-1:0,l=r?-1:1,d=e[t+h];for(h+=l,o=d&(1<<-c)-1,d>>=-c,c+=s;c>0;o=256*o+e[t+h],h+=l,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=n;c>0;a=256*a+e[t+h],h+=l,c-=8);if(0===o)o=1-f;else{if(o===u)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,n),o-=f}return(d?-1:1)*a*Math.pow(2,o-n)},t.write=function(e,t,r,n,i,o){var a,s,u,f=8*o-i-1,c=(1<<f)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:o-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),(t+=a+h>=1?l/u:l*Math.pow(2,1-h))*u>=2&&(a++,u/=2),a+h>=c?(s=0,a=c):a+h>=1?(s=(t*u-1)*Math.pow(2,i),a+=h):(s=t*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;e[r+d]=255&s,d+=p,s/=256,i-=8);for(a=a<<i|s,f+=i;f>0;e[r+d]=255&a,d+=p,a/=256,f-=8);e[r+d-p]|=128*g}},function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,r){var n=r(5);e.exports=function(e){return function t(r){return 0===arguments.length||n(r)?t:e.apply(this,arguments)}}},function(e,t){"undefined"==typeof window||function(){"use strict";var e,t;e=function(e){var r,n,i;switch(e=e||navigator.userAgent,r={browser:{name:null,version:null},cookies:null,flash:{version:null},ip:null,java:{version:null},os:{name:null,version:null},screen:{colors:null,dppx:null,height:null,width:null},scripts:!0,userAgent:e,viewport:{height:null,layout:{height:null,width:null},width:null,zoom:null},websockets:null},(e.indexOf("Trident")>=0||e.indexOf("MSIE")>=0)&&(e.indexOf("Mobile")>=0?r.browser.name="IE Mobile":r.browser.name="Internet Explorer"),e.indexOf("Firefox")>=0&&-1===e.indexOf("Seamonkey")&&(e.indexOf("Android")>=0?r.browser.name="Firefox for Android":r.browser.name="Firefox"),e.indexOf("Safari")>=0&&-1===e.indexOf("Chrome")&&-1===e.indexOf("Chromium")&&-1===e.indexOf("Android")&&(e.indexOf("CriOS")>=0?r.browser.name="Chrome for iOS":e.indexOf("FxiOS")>=0?r.browser.name="Firefox for iOS":r.browser.name="Safari"),e.indexOf("Chrome")>=0&&(e.match(/\bChrome\/[.0-9]* Mobile\b/)?e.match(/\bVersion\/\d+\.\d+\b/)||e.match(/\bwv\b/)?r.browser.name="WebView on Android":r.browser.name="Chrome for Android":r.browser.name="Chrome"),e.indexOf("Android")>=0&&-1===e.indexOf("Chrome")&&-1===e.indexOf("Chromium")&&-1===e.indexOf("Trident")&&-1===e.indexOf("Firefox")&&(r.browser.name="Android Browser"),e.indexOf("Edge")>=0&&(r.browser.name="Edge"),e.indexOf("UCBrowser")>=0&&(r.browser.name="UC Browser for Android"),e.indexOf("SamsungBrowser")>=0&&(r.browser.name="Samsung Internet"),(e.indexOf("OPR")>=0||e.indexOf("Opera")>=0)&&(e.indexOf("Opera Mini")>=0?r.browser.name="Opera Mini":e.indexOf("Opera Mobi")>=0||e.indexOf("Opera Tablet")>=0||e.indexOf("Mobile")>=0?r.browser.name="Opera Mobile":r.browser.name="Opera"),(e.indexOf("BB10")>=0||e.indexOf("PlayBook")>=0||e.indexOf("BlackBerry")>=0)&&(r.browser.name="BlackBerry"),n=null,r.browser.name){case"Chrome":case"Chrome for Android":case"WebView on Android":n=e.match(/Chrome\/((\d+\.)+\d+)/);break;case"Firefox":case"Firefox for Android":n=e.match(/Firefox\/((\d+\.)+\d+)/);break;case"Firefox for iOS":n=e.match(/FxiOS\/((\d+\.)+\d+)/);break;case"Edge":case"Internet Explorer":case"IE Mobile":e.indexOf("Edge")>=0?n=e.match(/Edge\/((\d+\.)+\d+)/):e.indexOf("rv:11")>=0?n=e.match(/rv:((\d+\.)+\d+)/):e.indexOf("MSIE")>=0&&(n=e.match(/MSIE\ ((\d+\.)+\d+)/));break;case"Safari":n=e.match(/Version\/((\d+\.)+\d+)/);break;case"Android Browser":n=e.match(/Android ((\d+\.)+\d+)/);break;case"UC Browser for Android":n=e.match(/UCBrowser\/((\d+\.)+\d+)/);break;case"Samsung Internet":n=e.match(/SamsungBrowser\/((\d+\.)+\d+)/);break;case"Opera Mini":n=e.match(/Opera Mini\/((\d+\.)+\d+)/);break;case"Opera":n=e.match(/OPR/)?e.match(/OPR\/((\d+\.)+\d+)/):e.match(/Version/)?e.match(/Version\/((\d+\.)+\d+)/):e.match(/Opera\/((\d+\.)+\d+)/);break;case"BlackBerry":n=e.match(/Version\/((\d+\.)+\d+)/);break;default:n=e.match(/\/((\d+\.)+\d+)$/)}n&&n[1]&&(r.browser.version=n[1]),r.viewport.width=window.innerWidth||document.documentElement.clientWidth,r.viewport.height=window.innerHeight||document.documentElement.clientHeight;try{Object.defineProperty({},"x",{}),t=!0}catch(e){t=!1}function o(e){window.console&&(console.warn?console.warn(e):console.log(e))}switch(t&&Object.defineProperty(r.browser,"size",{get:function(){return o("browser.size is deprecated; use viewport.width and viewport.height"),r.viewport.width+" x "+r.viewport.height}}),r.viewport.layout.width=document.documentElement.clientWidth,r.viewport.layout.height=document.documentElement.clientHeight,r.viewport.zoom=r.viewport.layout.width/r.viewport.width,i=(i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").replace(/[xy]/g,(function(e){var t;return t=16*Math.random()|0,("x"===e?t:3&t|8).toString(16)})),document.cookie=`${i}=${i}`,document.cookie.indexOf(i)>=0?r.cookies=!0:r.cookies=!1,document.cookie=i+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",function(e){var t,i,o;if(e)for(i=e.length,t=0;t<i;t+=1)(o=e.item(t)).name.indexOf("Flash")>=0&&(n=o.description.match(/\b((\d+\.)+\d+)\b/))&&n[1]&&(r.flash.version=n[1]),o.name.indexOf("Java")>=0&&(n=o.description.match(/\b((\d+\.)+\d+)\b/))&&n[1]&&(r.java.version=n[1])}(navigator.plugins),e.indexOf("Windows")>=0&&(e.indexOf("Windows Phone")>=0?r.os.name="Windows Phone":r.os.name="Windows"),e.indexOf("OS X")>=0&&-1===e.indexOf("Android")&&(r.os.name="OS X"),e.indexOf("Linux")>=0&&(r.os.name="Linux"),e.indexOf("like Mac OS X")>=0&&(r.os.name="iOS"),(e.indexOf("Android")>=0||e.indexOf("Adr")>=0)&&-1===e.indexOf("Windows Phone")&&(r.os.name="Android"),e.indexOf("BB10")>=0&&(r.os.name="BlackBerry"),e.indexOf("RIM Tablet OS")>=0&&(r.os.name="BlackBerry Tablet OS"),e.indexOf("BlackBerry")>=0&&(r.os.name="BlackBerryOS"),n=null,r.os.name){case"Windows":case"Windows Phone":if(e.indexOf("Win16")>=0)r.os.version="3.1.1";else if(e.indexOf("Windows CE")>=0)r.os.version="CE";else if(e.indexOf("Windows 95")>=0)r.os.version="95";else if(e.indexOf("Windows 98")>=0)e.indexOf("Windows 98; Win 9x 4.90")>=0?r.os.version="Millennium Edition":r.os.version="98";else if((n=e.match(/Win(?:dows)?(?: Phone)?[\ _]?(?:(?:NT|9x)\ )?((?:(\d+\.)*\d+)|XP|ME|CE)\b/))&&n[1])switch(n[1]){case"6.4":n[1]="10.0";break;case"6.3":n[1]="8.1";break;case"6.2":n[1]="8";break;case"6.1":n[1]="7";break;case"6.0":n[1]="Vista";break;case"5.2":n[1]="Server 2003";break;case"5.1":n[1]="XP";break;case"5.01":n[1]="2000 SP1";break;case"5.0":n[1]="2000";break;case"4.0":n[1]="4.0"}break;case"OS X":n=e.match(/OS\ X\ ((\d+[._])+\d+)\b/);break;case"Linux":r.os.version=null;break;case"iOS":n=e.match(/OS\ ((\d+[._])+\d+)\ like\ Mac\ OS\ X/);break;case"Android":n=e.match(/(?:Android|Adr)\ ((\d+[._])+\d+)/);break;case"BlackBerry":case"BlackBerryOS":n=e.match(/Version\/((\d+\.)+\d+)/);break;case"BlackBerry Tablet OS":n=e.match(/RIM Tablet OS ((\d+\.)+\d+)/);break;default:r.os.version=null}return n&&n[1]&&(n[1]=n[1].replace(/_/g,"."),r.os.version=n[1]),r.screen.width=window.screen.width,r.screen.height=window.screen.height,r.screen.colors=window.screen.colorDepth,window.devicePixelRatio&&!isNaN(window.devicePixelRatio)?r.screen.dppx=window.devicePixelRatio:r.screen.dppx=1,t&&Object.defineProperty(r.screen,"size",{get:function(){return o("screen.size is deprecated; use screen.width and screen.height"),r.screen.width+" x "+r.screen.height}}),t&&Object.defineProperty(r.screen,"resolution",{get:function(){return o("screen.resolution is deprecated; multiply screen.width and screen.height by screen.dppx"),r.screen.dppx*r.screen.width+" x "+r.screen.dppx*r.screen.height}}),r.websockets=!!window.WebSocket,r.lang=navigator.languages||navigator.language,r.timestamp=(new Date).toString(),r},window.browserReportSync=window.browserReportSync||function(t){return e(t)}}()},function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n);new Date(864e13);var o=r(4),a=r(1),s=r.n(a),u=r(3),f=r.n(u)()((function(e,t){for(var r=t,n=0;n<e.length;){if(null==r)return;r=r[e[n]],n+=1}return r})),c=r(2),h=r.n(c);const l=/^(?!CloudFront-)([A-Z])|[_](\w)/g;function d(e){if(!e)return e;let t;return Object.keys(e).map((function(r,n){"object"==typeof e[r]&&null!==e[r]&&(e[r]=d(e[r])),t=r.replace(l,(function(e,t,r,n){return r?r.toUpperCase():t.toLowerCase()})),r!==t&&(Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(e,r)),delete e[r])})),e}function p(e){return/application\/json/i.test(e.headers.get("content-type"))?e.json():null}function g(e){if(e.status>=200&&e.status<300)return e;const t=new Error(e.statusText);return t.response=e,Promise.reject(t)}function w(e){throw e}r(12);window.tr=function(e,t){let r={};try{for(var n,a=/\+/g,u=/([^&=]+)=?([^&]*)/g,c=function(e){return decodeURIComponent(e.replace(a," "))},l=window.location.search.substring(1),y={};n=u.exec(l);)y[c(n[1])]=c(n[2]);e={...y||{},...e||{}}}catch{}if(r.last=i.a.get("ref")||document.referrer,r.url=window.location.href,r.last===r.url&&!s()(!1)(t))return;i.a.set("ref",r.url);let m=i.a.get("ex");s()(!1)(m)&&(r.xid=m);let v=JSON.parse(i.a.get("exp")||"null");r.params={...v||{},...e||{}};let b=Date.now(),x=s()(b)(i.a.get("trc"));r.created=b,r.duration=b-x,i.a.set("trc",r.created,{expires:99999});let A=i.a.get("vid");s()(!1)(A)?(r.vid=A,r.first="false"):(r.vid=o.uuid.v1(),r.first="true",i.a.set("vid",r.vid,{expires:99999}));let O=i.a.get("sid");var E,S;s()(!1)(O)?(r.sid=O,r.first="false"==r.first?"false":"true"):(r.sid=o.uuid.v1(),r.first="true",i.a.set("sid",r.sid)),r.tz=Intl.DateTimeFormat().resolvedOptions().timeZone,r.device=(E="",(S={Android:function(){return navigator.userAgent.match(/Android/i)},Datalogic:function(){return navigator.userAgent.match(/DL-AXIS/i)},Bluebird:function(){return navigator.userAgent.match(/EF500/i)},Honeywell:function(){return navigator.userAgent.match(/CT50/i)},Zebra:function(){return navigator.userAgent.match(/TC70|TC55/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod|iOS/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return S.Datalogic()||S.Bluebird()||S.Honeywell()||S.Zebra()||S.BlackBerry()||S.Android()||S.iOS()||S.Windows()}}).Datalogic()?E="Datalogic":S.Bluebird()?E="Bluebird":S.Honeywell()?E="Honeywell":S.Zebra()?E="Zebra":S.BlackBerry()?E="BlackBerry":S.iOS()?E="iOS":S.Android()?E="Android":S.Windows()?E="Windows Mobile":navigator.userAgent.match(/Linux/i)?E="Linux":navigator.userAgent.match(/Samsung/i)?E="Samsung":navigator.userAgent.match(/Windows/i)?E="Windows":navigator.userAgent.match(/Mac/i)?E="Mac":navigator.userAgent.match(/osx/i)?E="Mac":navigator.userAgent.match(/Safari/i)?E="Safari":navigator.userAgent.match(/Explorer/i)?E="Windows":navigator.userAgent.match(/Opera/i)&&(E="Opera"),E),r.os=f(["os","name"],browserReportSync()),r.w=f(["viewport","width"],browserReportSync()),r.h=f(["viewport","height"],browserReportSync()),r.sink=f(["params","sink"],r),r.score=f(["params","score"],r),r.ename=f(["params","ename"],r),r.outcome=f(["params","outcome"],r),r.aff=f(["params","aff"],r),r.ref=f(["params","ref"],r),r.app="sfplwww",r.rel="1",delete r.params.ename,delete r.params.sink,delete r.params.score,delete r.params.outcome;let B=i.a.get("ajwt"),R={};if(s()(!1)(B)){R.headers={Authorization:"Bearer "+B};let e=JSON.parse(B);r.uid=f(["sfpl","pub","uid"],e),r.uname=f(["sfpl","pub","uname"],e)}!function(e,t){let r="sfplwww".toLocaleLowerCase(),n=s()(null)(f([r],JSON.parse(i.a.get("ajwt")||"null"))),o=null!==typeof n&&"object"==typeof n?{Authorization:"Bearer "+JSON.stringify(n)}:{},a=s()({})(t),u=s()(!1)(a.track),c=s()(!0)(a.camelize);u&&(setTimeout((function(){let e=s()(null)(f([r],JSON.parse(i.a.get("ajwt")||"null")));if(null!==e&&"object"==typeof n){let t={Authorization:"Bearer "+JSON.stringify(e)};h()("https://tr.sfpl.io",{method:"POST",body:JSON.stringify(u),headers:t})}}),3e3),delete a.track),"object"==typeof a.body&&(a.body=JSON.stringify(a.body)),a.headers=s()({})(a.headers),a.headers={"Content-Type":"text/plain",...a.headers,...o},c?h()(e,a).then(g).then(p).then(d).catch(w):h()(e,a).then(g).then(p).catch(w)}("https://tr.sfpl.io/tr/v1/",{method:"POST",body:JSON.stringify(r),...R})},window.tr({ename:"page_opened"},!0)}]);