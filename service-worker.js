if(!self.define){let l,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const l=document.createElement("script");l.src=n,l.onload=i,document.head.appendChild(l)}else l=n,importScripts(n),i()})).then((()=>{let l=i[n];if(!l)throw new Error(`Module ${n} didn’t register its module`);return l})));self.define=(r,e)=>{const s=l||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const u=l=>n(l,s),g={module:{uri:s},exports:o,require:u};i[s]=Promise.all(r.map((l=>g[l]||u(l)))).then((l=>(e(...l),o)))}}define(["./workbox-db5fc017"],(function(l){"use strict";l.setCacheNameDetails({prefix:"vac"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"/VAC/css/150.fa10efad.css",revision:null},{url:"/VAC/css/225.ff6812d6.css",revision:null},{url:"/VAC/css/302.46b90b7d.css",revision:null},{url:"/VAC/css/428.30d27056.css",revision:null},{url:"/VAC/css/577.daf4ac3c.css",revision:null},{url:"/VAC/css/643.c38555de.css",revision:null},{url:"/VAC/css/723.510a2e41.css",revision:null},{url:"/VAC/css/772.e8e7a07d.css",revision:null},{url:"/VAC/css/app.0553d32e.css",revision:null},{url:"/VAC/fonts/Gilroy-Bold.72ac7da4.woff",revision:null},{url:"/VAC/fonts/Gilroy-Bold.da918b94.woff2",revision:null},{url:"/VAC/fonts/Gilroy-Extrabold.22d8c416.woff",revision:null},{url:"/VAC/fonts/Gilroy-Heavy.1ba50f1f.woff2",revision:null},{url:"/VAC/fonts/Gilroy-Medium.325b7de6.woff2",revision:null},{url:"/VAC/fonts/Gilroy-Medium.f2851256.woff",revision:null},{url:"/VAC/fonts/Gilroy-Regular.3fe0f5ed.woff",revision:null},{url:"/VAC/fonts/Gilroy-Regular.bf665241.woff2",revision:null},{url:"/VAC/fonts/Gilroy-Semibold.2be39dd8.woff2",revision:null},{url:"/VAC/fonts/Gilroy-Semibold.b67fed32.woff",revision:null},{url:"/VAC/img/Bg.b9a5e351.png",revision:null},{url:"/VAC/img/Bg.f0c1adb3.jpg",revision:null},{url:"/VAC/img/BgCar.dca5bed7.png",revision:null},{url:"/VAC/img/CAR.09f267bc.png",revision:null},{url:"/VAC/img/Cars.ddc7fa5a.png",revision:null},{url:"/VAC/img/Chevrolet.3f2116e2.png",revision:null},{url:"/VAC/img/Facebook.335cff2e.svg",revision:null},{url:"/VAC/img/FordEscape.9328c734.png",revision:null},{url:"/VAC/img/Honda-Accord.de124d64.png",revision:null},{url:"/VAC/img/Image.1bc9c30b.png",revision:null},{url:"/VAC/img/Image2.0985d2a3.png",revision:null},{url:"/VAC/img/Instagram.3541d9a1.svg",revision:null},{url:"/VAC/img/Lexus.2d49bcd1.png",revision:null},{url:"/VAC/img/Logo.15ca6f12.svg",revision:null},{url:"/VAC/img/LogoFooter.a91e42c2.svg",revision:null},{url:"/VAC/img/Nissan.f4d93bf4.png",revision:null},{url:"/VAC/img/Photo.5c3f623d.png",revision:null},{url:"/VAC/img/Photo2.e3a111b4.png",revision:null},{url:"/VAC/img/Photo3.dc9c4e8b.png",revision:null},{url:"/VAC/img/Photo4.f507fe67.png",revision:null},{url:"/VAC/img/Photo5.0bdb9f3c.png",revision:null},{url:"/VAC/img/Photo6.7ad2d0b3.png",revision:null},{url:"/VAC/img/Photo7.cec2049e.png",revision:null},{url:"/VAC/img/Photo8.9d31309e.png",revision:null},{url:"/VAC/img/Photo9.535630fa.png",revision:null},{url:"/VAC/img/SUV.086414da.png",revision:null},{url:"/VAC/img/TRUCK.e43ec8f9.png",revision:null},{url:"/VAC/img/TeamPhoto.151d4b75.png",revision:null},{url:"/VAC/img/TeamPhoto2.c08d8d38.png",revision:null},{url:"/VAC/img/VAN.996965de.png",revision:null},{url:"/VAC/img/Vector.cb418f6a.png",revision:null},{url:"/VAC/img/Vector2.b308d4e3.png",revision:null},{url:"/VAC/img/Video1.00e8ebc0.png",revision:null},{url:"/VAC/img/Video2.aada3450.png",revision:null},{url:"/VAC/img/Video3.a6bc99fe.png",revision:null},{url:"/VAC/img/Video4.c450b420.png",revision:null},{url:"/VAC/img/YouTube.0027bdf3.svg",revision:null},{url:"/VAC/img/whatour-slider.a8ae50b7.png",revision:null},{url:"/VAC/index.html",revision:"48c8c94d37e526e0206cc1a742c454c1"},{url:"/VAC/js/150.e29f4c1b.js",revision:null},{url:"/VAC/js/225.e1fa8a39.js",revision:null},{url:"/VAC/js/302.4e8d9168.js",revision:null},{url:"/VAC/js/428.721a755c.js",revision:null},{url:"/VAC/js/577.f9cdc657.js",revision:null},{url:"/VAC/js/643.b4007996.js",revision:null},{url:"/VAC/js/70.96a1b7e3.js",revision:null},{url:"/VAC/js/723.fe4825fc.js",revision:null},{url:"/VAC/js/772.aa4a3ca6.js",revision:null},{url:"/VAC/js/app.426bc6a9.js",revision:null},{url:"/VAC/js/chunk-vendors.51021e9c.js",revision:null},{url:"/VAC/manifest.json",revision:"0d2e84485b80b87baa66edad68e32791"},{url:"/VAC/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
