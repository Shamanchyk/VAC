"use strict";(self["webpackChunkvac"]=self["webpackChunkvac"]||[]).push([[643],{1877:function(t,i,a){a.d(i,{Z:function(){return o}});var e=a(6252),n=a(3577);const s={class:"terms"};function r(t,i,a,r,l,h){return(0,e.wg)(),(0,e.iD)("div",s,[(0,e._)("h2",null,(0,n.zw)(a.title),1)])}var l={props:{title:{type:String}},data(){return{}}},h=a(3744);const c=(0,h.Z)(l,[["render",r]]);var o=c},643:function(t,i,a){a.r(i),a.d(i,{default:function(){return C}});var e=a(6252),n=a(3577);const s={class:"blog"},r={class:"container"},l={class:"blog-main"},h=["onClick"],c=["src"],o={class:"interesting-slide_main"},g=(0,e._)("p",null,"10 May, 2020",-1),d={class:"btn-toolbar"},u={class:"btn-group"},p=["onClick"];function w(t,i,a,w,P,v){const b=(0,e.up)("TitleVac");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(b,{title:P.title},null,8,["title"]),(0,e._)("div",s,[(0,e._)("div",r,[(0,e._)("div",l,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(P.dataPagination,((t,i)=>((0,e.wg)(),(0,e.iD)("div",{class:"blog-main_for",key:i},[(0,e._)("div",{class:"interesting-slide_content",onClick:i=>v.cartClick(t.id)},[(0,e._)("img",{src:t.image},null,8,c),(0,e._)("div",o,[g,(0,e._)("h5",null,(0,n.zw)(t.titleCart),1)])],8,h)])))),128))]),(0,e._)("div",d,[(0,e._)("div",u,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(v.totalPaginas(),(t=>((0,e.wg)(),(0,e.iD)("button",{onClick:i=>v.getDataPaginas(t),class:(0,n.C_)(["buttonP",v.isActive(t)])},null,10,p)))),256))])])])])],64)}a(7658),a(7097);var P=a(1877),v={data(){return{title:"Our blog",perPage:null,dataPagination:[],paginaActual:1,width:null}},computed:{blogCarts(){return this.$store.getters.blogCarts}},methods:{innerWidth(){this.width=window.innerWidth,this.width>769&&(this.perPage=9),this.width<=768&&this.width>=577&&(this.perPage=8),this.width<=576&&(this.perPage=6)},totalPaginas(){return Math.ceil(this.blogCarts.length/this.perPage)},getDataPaginas(t){this.dataPagination=[],this.paginaActual=t;let i=t*this.perPage-this.perPage,a=t*this.perPage;this.dataPagination=this.blogCarts.slice(i,a),window.scrollTo(0,0)},cartClick(t){this.$router.push({name:"Article",query:{blog:t}})},isActive(t){return t==this.paginaActual?"activeP":""}},created(){window.addEventListener("resize",this.innerWidth),this.innerWidth()},mounted(){this.getDataPaginas(1)},components:{TitleVac:P.Z},watch:{perPage(){this.width>769&&(this.perPage=9),this.width<=768&&this.width>=577&&(this.perPage=8),this.width<=576&&(this.perPage=6),this.getDataPaginas(1)}}},b=a(3744);const _=(0,b.Z)(v,[["render",w]]);var C=_}}]);
//# sourceMappingURL=643.b4007996.js.map