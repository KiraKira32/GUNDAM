import{_,r as c,o as r,c as v,a as s,b as o,w as a,n as b,d as l,e as d}from"./index-a4b5719f.js";const x="/GUNDAM/assets/LOGO-6dcead3d.png";const g={data(){return{isNavOpen:!1}},methods:{toggleNav(){this.isNavOpen=!this.isNavOpen},closeNav(){this.isNavOpen=!1}}},N={class:"container"},w={class:"row"},k={class:"navbar navbar-expand-lg navbar-block py-3"},C={class:"container-fluid custom-container"},$=s("div",null,[s("img",{class:"navbar-logo ms-3",src:x,alt:""})],-1),y=s("span",{class:"navbar-toggler-icon"},null,-1),O=[y],V={class:"navbar-nav"},F={class:"nev-item active"},M={class:"nev-item"},j={class:"nev-item"},B={class:"nev-item"},G=s("i",{class:"fas fa-shopping-cart"},null,-1),A=s("span",{class:"position-absolute top-1 start-100 translate-middle badge badge-num rounded-pill bg-danger"},[l(" 99+ "),s("span",{class:"visually-hidden"})],-1);function D(u,t,h,m,p,e){const n=c("router-link");return r(),v("div",N,[s("div",w,[s("nav",k,[s("div",C,[o(n,{to:"/",class:"d-flex navbar-480 me-md-auto navbar-logo text-decoration-none"},{default:a(()=>[$]),_:1}),s("button",{class:"navbar-toggler",type:"button",onClick:t[0]||(t[0]=(...i)=>e.toggleNav&&e.toggleNav(...i))},O),s("div",{class:b(["collapse navbar-collapse justify-content-end me-4",{show:p.isNavOpen}]),id:"navbarNav"},[s("ul",V,[s("li",F,[o(n,{to:"/",class:"nav-link text-shadow",onClick:e.closeNav},{default:a(()=>[l("首頁")]),_:1},8,["onClick"])]),s("li",M,[o(n,{to:"/faq",class:"nav-link text-shadow",onClick:e.closeNav},{default:a(()=>[l("常見問題")]),_:1},8,["onClick"])]),s("li",j,[o(n,{to:"/products",class:"nav-link text-shadow",onClick:e.closeNav},{default:a(()=>[l("商品")]),_:1},8,["onClick"])]),s("li",B,[o(n,{to:"/carts",class:"nav-link text-shadow position-relative",onClick:e.closeNav},{default:a(()=>[l(" 購物車 "),G,A]),_:1},8,["onClick"])])])],2)])])])])}const E=_(g,[["render",D]]);const L={},R={class:"footer container-fluid footer-color"},T={class:"container"},U={class:"row p-4"},q={class:"col-md-7"},z={class:"row"},H={class:"col-sm-6 mb-3"},I={class:"navbar-nav text-white"},J=s("li",null,"關於鋼彈GUNDAM",-1),K=s("div",{class:"col-sm-6 mb-3"},[s("ul",{class:"navbar-nav text-white"},[s("li",null,"聯絡我們"),s("li",null,"TEL : 02-2793-1031"),s("li",null,"Mail : allstar@gmail.com"),s("li",null,"地址 : 台北市內湖區內湖路二段261號")])],-1),P=s("div",{class:"col-md-5 d-flex justify-content-sm-end pb-3"},[s("div",{class:"flex-column d-flex justify-content-between"},[s("div",{class:"text-white mt-auto"}," ©2023 Vue相關作品，無其他用途。 ")])],-1);function Q(u,t){return r(),v("div",R,[s("div",T,[s("div",U,[s("div",q,[s("div",z,[s("div",H,[s("ul",I,[J,s("li",null,[s("a",{href:"#",class:"text-white",onClick:t[0]||(t[0]=d(()=>{},["prevent"]))},"加入我們")]),s("li",null,[s("a",{href:"#",class:"text-white",onClick:t[1]||(t[1]=d(()=>{},["prevent"]))},"相關條款")]),s("li",null,[s("a",{href:"#",class:"text-white",onClick:t[2]||(t[2]=d(()=>{},["prevent"]))},"隱私權政策")])])]),K])]),P])])])}const S=_(L,[["render",Q]]),W={components:{Navbar:E,FooterComponent:S}},X={class:"wrapper"},Y={class:"content"},Z={class:"footer"};function ss(u,t,h,m,p,e){const n=c("Navbar"),i=c("RouterView"),f=c("FooterComponent");return r(),v("div",X,[o(n),s("div",Y,[o(i)]),s("div",Z,[o(f)])])}const os=_(W,[["render",ss]]);export{os as default};
