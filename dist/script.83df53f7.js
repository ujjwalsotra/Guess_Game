parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
"use strict";var e=Math.trunc(20*Math.random())+1,t=20,o=0;document.querySelector(".check").addEventListener("click",function(){if(1==t)return document.querySelector(".message").textContent="You Lost Try again!",t--,void(document.querySelector(".score").textContent=t);var r=Number(document.querySelector(".guess").value);r||(document.querySelector(".message").textContent="🙅🙅 NO NUMBER ENTERED!"),r==e?(document.querySelector(".message").textContent="❤️🔥🔥You win...",document.querySelector("body").style.backgroundColor="#7849fe",document.querySelector(".number").style.width="30rem",document.querySelector(".number").textContent=e,t>o&&(o=t,document.querySelector(".highscore").textContent=o)):(document.querySelector(".message").textContent=r>e?"Guess too high":"Guess too low",t--,document.querySelector(".score").textContent=t)}),document.querySelector(".again").addEventListener("click",function(){t=20,document.querySelector(".score").textContent=t,e=Math.trunc(20*Math.random())+1,document.querySelector("body").style.backgroundColor="#222",document.querySelector(".number").style.width="15rem",document.querySelector(".message").textContent="Start guessing...",document.querySelector(".number").textContent="?",document.querySelector(".guess").value=""});
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.83df53f7.js.map