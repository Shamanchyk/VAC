if(!self.define){let l,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const l=document.createElement("script");l.src=n,l.onload=i,document.head.appendChild(l)}else l=n,importScripts(n),i()})).then((()=>{let l=i[n];if(!l)throw new Error(`Module ${n} didn’t register its module`);return l})));self.define=(r,e)=>{const s=l||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const u=l=>n(l,s),f={module:{uri:s},exports:o,require:u};i[s]=Promise.all(r.map((l=>f[l]||u(l)))).then((l=>(e(...l),o)))}}define(["./workbox-db5fc017"],(function(l){"use strict";l.setCacheNameDetails({prefix:"vac"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"/VAC/css/41.fb0fdad7.css",revision:null},{url:"/VAC/css/484.7a5743c4.css",revision:null},{url:"/VAC/css/84.e3bef25b.css",revision:null},{url:"/VAC/css/app.07b5b7c4.css",revision:null},{url:"/VAC/fonts/Gilroy-Bold.72ac7da4.woff",revision:null},{url:"/VAC/fonts/Gilroy-Bold.da918b94.woff2",revision:null},{url:"/VAC/fonts/Gilroy-Extrabold.22d8c416.woff",revision:null},{url:"/VAC/fonts/Gilroy-Heavy.1ba50f1f.woff2",revision:null},{url:"/VAC/fonts/Gilroy-Regular.3fe0f5ed.woff",revision:null},{url:"/VAC/fonts/Gilroy-Regular.bf665241.woff2",revision:null},{url:"/VAC/fonts/Gilroy-Semibold.2be39dd8.woff2",revision:null},{url:"/VAC/fonts/Gilroy-Semibold.b67fed32.woff",revision:null},{url:"/VAC/img/Bg.b9a5e351.png",revision:null},{url:"/VAC/img/Bg.f0c1adb3.jpg",revision:null},{url:"/VAC/img/CAR.09f267bc.png",revision:null},{url:"/VAC/img/Cars.ddc7fa5a.png",revision:null},{url:"/VAC/img/Facebook.335cff2e.svg",revision:null},{url:"/VAC/img/Honda-Accord.de124d64.png",revision:null},{url:"/VAC/img/Image.1bc9c30b.png",revision:null},{url:"/VAC/img/Image2.0985d2a3.png",revision:null},{url:"/VAC/img/Instagram.3541d9a1.svg",revision:null},{url:"/VAC/img/Lexus.2d49bcd1.png",revision:null},{url:"/VAC/img/Logo.15ca6f12.svg",revision:null},{url:"/VAC/img/LogoFooter.a91e42c2.svg",revision:null},{url:"/VAC/img/SUV.086414da.png",revision:null},{url:"/VAC/img/TRUCK.e43ec8f9.png",revision:null},{url:"/VAC/img/VAN.996965de.png",revision:null},{url:"/VAC/img/Vector.cb418f6a.png",revision:null},{url:"/VAC/img/Vector2.b308d4e3.png",revision:null},{url:"/VAC/img/YouTube.0027bdf3.svg",revision:null},{url:"/VAC/img/interesting1.5c3f623d.png",revision:null},{url:"/VAC/img/interesting2.e3a111b4.png",revision:null},{url:"/VAC/img/interesting3.dc9c4e8b.png",revision:null},{url:"/VAC/img/whatour-slider.a8ae50b7.png",revision:null},{url:"/VAC/index.html",revision:"3eac45640b79da278d07331a42484a70"},{url:"/VAC/js/150.b24ec26a.js",revision:null},{url:"/VAC/js/359.2e3acd36.js",revision:null},{url:"/VAC/js/41.758ff86c.js",revision:null},{url:"/VAC/js/435.cfaf7cee.js",revision:null},{url:"/VAC/js/484.a7039c93.js",revision:null},{url:"/VAC/js/70.1452624f.js",revision:null},{url:"/VAC/js/84.42f21359.js",revision:null},{url:"/VAC/js/891.aa75f823.js",revision:null},{url:"/VAC/js/app.2e59a174.js",revision:null},{url:"/VAC/js/chunk-vendors.f4f332d0.js",revision:null},{url:"/VAC/manifest.json",revision:"0d2e84485b80b87baa66edad68e32791"},{url:"/VAC/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
