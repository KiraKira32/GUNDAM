import{m as g,a as x,_ as u,r as i,o as r,c as d,b as t,d as e,w as a,n as N,e as c,t as C,f as k,g as v}from"./index-0af1ca70.js";import{c as m}from"./cart-7b3fcaed.js";import"./sweetalert2.all-e8c98f31.js";const w="/GUNDAM/assets/LOGO-6dcead3d.png";const $={data(){return{isNavOpen:!1}},methods:{toggleNav(){this.isNavOpen=!this.isNavOpen},closeNav(){this.isNavOpen=!1},...g(m,["getCart"])},computed:{...x(m,["cartData"])},mounted(){this.getCart()}},y={class:"container"},O={class:"row"},V={class:"navbar navbar-expand-lg navbar-block py-3 px-4"},D={class:"container-fluid"},F=t("div",null,[t("img",{class:"navbar-logo ms-3",src:w,alt:""})],-1),M=t("span",{class:"navbar-toggler-icon"},null,-1),j=[M],A={class:"navbar-nav"},B={class:"nev-item active"},G={class:"nev-item"},S={class:"nev-item"},E={class:"nev-item"},L=t("i",{class:"fas fa-shopping-cart"},null,-1),R={key:0,class:"position-absolute top-1 start-100 translate-middle badge badge-num rounded-pill bg-danger"};function T(l,s,h,f,p,o){const n=i("router-link");return r(),d("div",y,[t("div",O,[t("nav",V,[t("div",D,[e(n,{to:"/",class:"d-flex navbar-480 me-md-auto navbar-logo text-decoration-none"},{default:a(()=>[F]),_:1}),t("button",{class:"navbar-toggler",type:"button",onClick:s[0]||(s[0]=(..._)=>o.toggleNav&&o.toggleNav(..._))},j),t("div",{class:N(["collapse navbar-collapse justify-content-end me-4",{show:p.isNavOpen}]),id:"navbarNav"},[t("ul",A,[t("li",B,[e(n,{to:"/",class:"nav-link text-shadow",onClick:o.closeNav},{default:a(()=>[c("首頁")]),_:1},8,["onClick"])]),t("li",G,[e(n,{to:"/faq",class:"nav-link text-shadow",onClick:o.closeNav},{default:a(()=>[c("常見問題")]),_:1},8,["onClick"])]),t("li",S,[e(n,{to:"/products",class:"nav-link text-shadow",onClick:o.closeNav},{default:a(()=>[c("商品")]),_:1},8,["onClick"])]),t("li",E,[e(n,{to:"/carts",class:"nav-link text-shadow position-relative",onClick:o.closeNav},{default:a(()=>[c(" 購物車 "),L,l.cartData.carts.length!==0?(r(),d("span",R,C(l.cartData.carts.length),1)):k("",!0)]),_:1},8,["onClick"])])])],2)])])])])}const U=u($,[["render",T]]);const q={},z={class:"footer container-fluid footer-color"},H={class:"container"},I={class:"row p-4"},J={class:"col-md-7"},K={class:"row"},P={class:"col-sm-6 mb-3"},Q={class:"navbar-nav text-white"},W=t("li",null,"關於鋼彈GUNDAM",-1),X=t("div",{class:"col-sm-6 mb-3"},[t("ul",{class:"navbar-nav text-white"},[t("li",null,"聯絡我們"),t("li",null,"TEL : 02-2793-1031"),t("li",null,"Mail : allstar@gmail.com"),t("li",null,"地址 : 台北市內湖區內湖路二段261號")])],-1),Y=t("div",{class:"col-md-5 d-flex justify-content-sm-end pb-3"},[t("div",{class:"flex-column d-flex justify-content-between"},[t("div",{class:"text-white mt-auto"}," ©2023 Vue相關作品，無其他用途。 ")])],-1);function Z(l,s){return r(),d("div",z,[t("div",H,[t("div",I,[t("div",J,[t("div",K,[t("div",P,[t("ul",Q,[W,t("li",null,[t("a",{href:"#",class:"text-white",onClick:s[0]||(s[0]=v(()=>{},["prevent"]))},"加入我們")]),t("li",null,[t("a",{href:"#",class:"text-white",onClick:s[1]||(s[1]=v(()=>{},["prevent"]))},"相關條款")]),t("li",null,[t("a",{href:"#",class:"text-white",onClick:s[2]||(s[2]=v(()=>{},["prevent"]))},"隱私權政策")])])]),X])]),Y])])])}const tt=u(q,[["render",Z]]),st={components:{Navbar:U,FooterComponent:tt}},et={class:"wrapper"},ot={class:"content"},nt={class:"footer"};function at(l,s,h,f,p,o){const n=i("Navbar"),_=i("RouterView"),b=i("FooterComponent");return r(),d("div",et,[e(n),t("div",ot,[e(_)]),t("div",nt,[e(b)])])}const rt=u(st,[["render",at]]);export{rt as default};