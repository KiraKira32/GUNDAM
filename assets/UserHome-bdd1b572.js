import{S as k,_ as v,r as l,o,c as a,d as c,b as s,w as i,F as y,h as f,i as w,t as r,e as b,j as N}from"./index-0af1ca70.js";import{A as P}from"./autoplay-00c017ba.js";import{S as T,a as L}from"./swiper-slide-092307d0.js";const D="/GUNDAM/assets/hot-7988840f.png",x="/GUNDAM/assets/balloon-6953ea8b.png",B="/GUNDAM/assets/new-558677fb.png";k.use([P]);const S={components:{Swiper:T,SwiperSlide:L},data(){return{isLoading:!1,hotProducts:[],newProdicts:[]}},methods:{getProducts(){const n="https://vue3-course-api.hexschool.io/v2/api/asher_api/products/all";this.Loading=!0,this.$http.get(n).then(e=>{this.hotProducts=e.data.products.filter(p=>p.price<500),this.newProdicts=e.data.products.filter(p=>p.category==="水星的魔女"),this.Loading=!1}).catch(()=>{console.log("err")})}},mounted(){this.getProducts()}},U={class:"products-list"},V=s("img",{class:"img-fluid title-hot mt-3",src:D,alt:"熱門商品"},null,-1),A={class:"mx-4 mt-5"},C={class:"card card-shadow",style:{width:"16rem"}},G=["src"],j={class:"card-body p-0"},M={class:"card-title p-2"},O={class:"text-end mx-3"},q={key:0,class:"text-danger h5 mb-3"},H={key:1,class:"mb-3"},E={class:"h6"},F={class:"h5 text-danger"},I={class:"card-footer py-3"},z=N('<div class="decoration-img mb-5"><div class="d-flex justify-content-center align-items-center bg-light"><img class="img-balloon m-4" src="'+x+'" alt=""><div class="coupon"><h3 class="text-danger d-flex justify-content-center align-items-center">歡慶開幕</h3><p class="text-secondary"> 全館商品結帳時，輸入 <span style="color:#dc0000;">gundam77</span> 即可享有7折優惠！ </p></div><img class="img-balloon m-4" src="'+x+'" alt=""></div></div><img class="img-fluid title-new" src="'+B+'" alt="最新商品">',2),J={class:"mx-4 mt-5"},K={class:"card card-shadow",style:{width:"16rem"}},R=["src"],Z={class:"card-body p-0"},Q={class:"card-title p-3"},W={class:"text-end mx-3"},X={key:0,class:"text-danger h5 mb-3"},Y={key:1,class:"mb-3"},ss={class:"h6"},ts={class:"h5 text-danger"},es={class:"card-footer py-3"};function os(n,e,p,$,g,u){const m=l("Loading"),d=l("router-link"),h=l("swiper-slide"),_=l("swiper");return o(),a("div",U,[c(m,{active:g.isLoading,class:"vld-overlay"},null,8,["active"]),V,s("div",A,[c(_,{class:"swiper-display",loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{1140:{slidesPerView:4,spaceBetween:5},1024:{slidesPerView:4,spaceBetween:5},768:{slidesPerView:3,spaceBetween:10},600:{slidesPerView:2,spaceBetween:10},430:{slidesPerView:1,spaceBetween:20}}},{default:i(()=>[(o(!0),a(y,null,f(g.hotProducts,t=>(o(),w(h,{class:"d-flex justify-content-center mb-5",key:t.id},{default:i(()=>[s("div",C,[c(d,{to:`/product/${t.id}`},{default:i(()=>[s("img",{src:t.imageUrl,class:"card-img-top card-img",alt:""},null,8,G)]),_:2},1032,["to"]),s("div",j,[s("h5",M,r(t.title),1),s("div",O,[t.price===t.origin_price?(o(),a("div",q," NT$"+r(t.price),1)):(o(),a("div",H,[s("del",E," NT$"+r(t.origin_price),1),s("span",F," NT$"+r(t.price),1)]))]),s("div",I,[c(d,{to:`/product/${t.id}`,class:"btn btn-danger w-100"},{default:i(()=>[b("馬上來看看")]),_:2},1032,["to"])])])])]),_:2},1024))),128))]),_:1})]),z,s("div",J,[c(_,{class:"swiper-display",loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:4,spaceBetween:5},768:{slidesPerView:3,spaceBetween:10},600:{slidesPerView:2,spaceBetween:10},480:{slidesPerView:1,spaceBetween:20}}},{default:i(()=>[(o(!0),a(y,null,f(g.newProdicts,t=>(o(),w(h,{class:"d-flex justify-content-center mb-5",key:t.id},{default:i(()=>[s("div",K,[c(d,{to:`/product/${t.id}`},{default:i(()=>[s("img",{src:t.imageUrl,class:"card-img-top card-img shadow-sm p-1 img-fluid",alt:""},null,8,R)]),_:2},1032,["to"]),s("div",Z,[s("h5",Q,r(t.title),1),s("div",W,[t.price===t.origin_price?(o(),a("div",X," NT$"+r(t.price),1)):(o(),a("div",Y,[s("del",ss," NT$"+r(t.origin_price),1),s("span",ts," NT$"+r(t.price),1)]))]),s("div",es,[c(d,{to:`/product/${t.id}`,class:"btn btn-danger w-100"},{default:i(()=>[b("馬上來看看")]),_:2},1032,["to"])])])])]),_:2},1024))),128))]),_:1})])])}const cs=v(S,[["render",os]]);const is={},as={class:"title-text-block"},ns=s("div",{class:"banner-title fw-bold text-white"},[s("span",null,"勝負並不是只靠機體的性能"),s("div",null,"不只是靠操縱者的技巧"),s("div",{class:"dynamic-text"},"結果本身就是唯一的真相！")],-1),rs=[ns];function ls(n,e){return o(),a("div",as,rs)}const ds=v(is,[["render",ls]]),_s="/GUNDAM/assets/bKJg50Z-944a6848.jpg",ps="/GUNDAM/assets/gundam-9c8bc03b.png",gs="/GUNDAM/assets/水星的魔女LOGO-3a0c9e1b.png",us="/GUNDAM/assets/logo_orphans-aff8a63b.png",hs="/GUNDAM/assets/dkqPCm4-40d08971.webp",ms="/GUNDAM/assets/x45RfEt-154c8158.webp";const ys={components:{DisplayProducts:cs,SloganTitle:ds},data(){return{isNavOpen:!1,isLoading:!0,isHovering:!1}},methods:{Loading(){this.isLoading===!0&&setTimeout(()=>{this.isLoading=!1},1e3)},toggleNav(){this.isNavOpen=!this.isNavOpen},category(n){this.$router.push({path:"/products",query:{category:n}})},redirectToCategory(n){const e=n.target.dataset.category;this.$router.push({path:"/products",query:{category:e}})},scrollTop(){window.scrollTo(0,0)}},mounted(){this.Loading(),this.scrollTop()}},vs=s("div",{class:"loadingio-spinner-ripple-j9w2wm5soxm"},[s("div",{class:"ldio-3c1sqxz2ek1"},[s("div"),s("div")])],-1),fs={class:"banner-block"},ws=s("div",{class:"banner-img d-flex justify-content-center"},[s("img",{src:_s,alt:""})],-1),bs={class:"main-block main-home"},xs={class:"container container-block shadow-sm px-0"},$s=s("div",null,[s("img",{class:"img-title mt-5 img-fluid",src:ps,alt:"鋼彈系列作品"}),s("div",{class:"sub-title py-2 m-3"},"請選擇您有興趣的作品，以選擇適合您的商品類別。")],-1),ks={class:"character-block d-flex justify-content-center showcase-img mt-5"},Ns=s("img",{class:"logo-mercury",src:gs,alt:""},null,-1),Ps=s("img",{class:"logp-mars",src:us,alt:""},null,-1),Ts=s("div",{class:"decoration-block p-4 mt-5"},null,-1);function Ls(n,e,p,$,g,u){const m=l("Loading"),d=l("SloganTitle"),h=l("DisplayProducts");return o(),a(y,null,[c(m,{active:g.isLoading,class:"vld-overlay"},{default:i(()=>[vs]),_:1},8,["active"]),c(d),s("div",fs,[ws,s("main",bs,[s("div",xs,[$s,s("div",ks,[Ns,Ps,s("img",{class:"img-mercury character",src:hs,alt:"水星",onClick:e[0]||(e[0]=(..._)=>u.redirectToCategory&&u.redirectToCategory(..._)),"data-category":"水星的魔女",style:{cursor:"pointer"}}),s("img",{class:"img-mars character",src:ms,alt:"火星",onClick:e[1]||(e[1]=(..._)=>u.redirectToCategory&&u.redirectToCategory(..._)),"data-category":"鐵血的孤兒",style:{cursor:"pointer"}})]),Ts,c(h)])])])],64)}const Us=v(ys,[["render",Ls]]);export{Us as default};