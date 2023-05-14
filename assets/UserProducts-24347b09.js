import{i as Y,j as J,k as K,l as R,m as Q,p as V,q as W,_ as j,o as L,c as k,a as l,n as O,e as H,F as q,g as G,t as B,S as Z,r as I,b as S,w as M,d as w}from"./index-c8dd8e5d.js";import{A as tt,S as et,a as at}from"./swiper-slide-73288452.js";function st(t,r,s,p){return t.params.createElements&&Object.keys(p).forEach(i=>{if(!s[i]&&s.auto===!0){let c=Y(t.el,`.${p[i]}`)[0];c||(c=J("div",p[i]),c.className=p[i],t.el.append(c)),s[i]=c,r[i]=c}}),s}function D(t=""){return`.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function nt({swiper:t,extendParams:r,on:s,emit:p}){const i="swiper-pagination";r({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),t.pagination={el:null,bullets:[]};let c,o=0;const u=e=>(Array.isArray(e)||(e=[e].filter(a=>!!a)),e);function g(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function y(e,a){const{bulletActiveClass:n}=t.params.pagination;e&&(e=e[`${a==="prev"?"previous":"next"}ElementSibling`],e&&(e.classList.add(`${n}-${a}`),e=e[`${a==="prev"?"previous":"next"}ElementSibling`],e&&e.classList.add(`${n}-${a}-${a}`)))}function f(e){const a=e.target.closest(D(t.params.pagination.bulletClass));if(!a)return;e.preventDefault();const n=R(a)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===n)return;const d=t.getSlideIndexByData(n),_=t.getSlideIndexByData(t.realIndex);d>t.slides.length-t.loopedSlides&&t.loopFix({direction:d>_?"next":"prev",activeSlideIndex:d,slideTo:!1}),t.slideToLoop(n)}else t.slideTo(n)}function h(){const e=t.rtl,a=t.params.pagination;if(g())return;let n=t.pagination.el;n=u(n);let d,_;const A=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,N=t.params.loop?Math.ceil(A/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(_=t.previousRealIndex||0,d=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(d=t.snapIndex,_=t.previousSnapIndex):(_=t.previousIndex||0,d=t.activeIndex||0),a.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const m=t.pagination.bullets;let P,b,z;if(a.dynamicBullets&&(c=K(m[0],t.isHorizontal()?"width":"height",!0),n.forEach(v=>{v.style[t.isHorizontal()?"width":"height"]=`${c*(a.dynamicMainBullets+4)}px`}),a.dynamicMainBullets>1&&_!==void 0&&(o+=d-(_||0),o>a.dynamicMainBullets-1?o=a.dynamicMainBullets-1:o<0&&(o=0)),P=Math.max(d-o,0),b=P+(Math.min(m.length,a.dynamicMainBullets)-1),z=(b+P)/2),m.forEach(v=>{const C=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(x=>`${a.bulletActiveClass}${x}`)].map(x=>typeof x=="string"&&x.includes(" ")?x.split(" "):x).flat();v.classList.remove(...C)}),n.length>1)m.forEach(v=>{const C=R(v);C===d&&v.classList.add(...a.bulletActiveClass.split(" ")),a.dynamicBullets&&(C>=P&&C<=b&&v.classList.add(...`${a.bulletActiveClass}-main`.split(" ")),C===P&&y(v,"prev"),C===b&&y(v,"next"))});else{const v=m[d];if(v&&v.classList.add(...a.bulletActiveClass.split(" ")),a.dynamicBullets){const C=m[P],x=m[b];for(let T=P;T<=b;T+=1)m[T]&&m[T].classList.add(...`${a.bulletActiveClass}-main`.split(" "));y(C,"prev"),y(x,"next")}}if(a.dynamicBullets){const v=Math.min(m.length,a.dynamicMainBullets+4),C=(c*v-c)/2-z*c,x=e?"right":"left";m.forEach(T=>{T.style[t.isHorizontal()?x:"top"]=`${C}px`})}}n.forEach((m,P)=>{if(a.type==="fraction"&&(m.querySelectorAll(D(a.currentClass)).forEach(b=>{b.textContent=a.formatFractionCurrent(d+1)}),m.querySelectorAll(D(a.totalClass)).forEach(b=>{b.textContent=a.formatFractionTotal(N)})),a.type==="progressbar"){let b;a.progressbarOpposite?b=t.isHorizontal()?"vertical":"horizontal":b=t.isHorizontal()?"horizontal":"vertical";const z=(d+1)/N;let v=1,C=1;b==="horizontal"?v=z:C=z,m.querySelectorAll(D(a.progressbarFillClass)).forEach(x=>{x.style.transform=`translate3d(0,0,0) scaleX(${v}) scaleY(${C})`,x.style.transitionDuration=`${t.params.speed}ms`})}a.type==="custom"&&a.renderCustom?(m.innerHTML=a.renderCustom(t,d+1,N),P===0&&p("paginationRender",m)):(P===0&&p("paginationRender",m),p("paginationUpdate",m)),t.params.watchOverflow&&t.enabled&&m.classList[t.isLocked?"add":"remove"](a.lockClass)})}function $(){const e=t.params.pagination;if(g())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let n=t.pagination.el;n=u(n);let d="";if(e.type==="bullets"){let _=t.params.loop?Math.ceil(a/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&_>a&&(_=a);for(let A=0;A<_;A+=1)e.renderBullet?d+=e.renderBullet.call(t,A,e.bulletClass):d+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`}e.type==="fraction"&&(e.renderFraction?d=e.renderFraction.call(t,e.currentClass,e.totalClass):d=`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),e.type==="progressbar"&&(e.renderProgressbar?d=e.renderProgressbar.call(t,e.progressbarFillClass):d=`<span class="${e.progressbarFillClass}"></span>`),t.pagination.bullets=[],n.forEach(_=>{e.type!=="custom"&&(_.innerHTML=d||""),e.type==="bullets"&&t.pagination.bullets.push(..._.querySelectorAll(D(e.bulletClass)))}),e.type!=="custom"&&p("paginationRender",n[0])}function E(){t.params.pagination=st(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let a;typeof e.el=="string"&&t.isElement&&(a=t.el.shadowRoot.querySelector(e.el)),!a&&typeof e.el=="string"&&(a=[...document.querySelectorAll(e.el)]),a||(a=e.el),!(!a||a.length===0)&&(t.params.uniqueNavElements&&typeof e.el=="string"&&Array.isArray(a)&&a.length>1&&(a=[...t.el.querySelectorAll(e.el)],a.length>1&&(a=a.filter(n=>Q(n,".swiper")[0]===t.el)[0])),Array.isArray(a)&&a.length===1&&(a=a[0]),Object.assign(t.pagination,{el:a}),a=u(a),a.forEach(n=>{e.type==="bullets"&&e.clickable&&n.classList.add(e.clickableClass),n.classList.add(e.modifierClass+e.type),n.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.type==="bullets"&&e.dynamicBullets&&(n.classList.add(`${e.modifierClass}${e.type}-dynamic`),o=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),e.type==="progressbar"&&e.progressbarOpposite&&n.classList.add(e.progressbarOppositeClass),e.clickable&&n.addEventListener("click",f),t.enabled||n.classList.add(e.lockClass)}))}function F(){const e=t.params.pagination;if(g())return;let a=t.pagination.el;a&&(a=u(a),a.forEach(n=>{n.classList.remove(e.hiddenClass),n.classList.remove(e.modifierClass+e.type),n.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&n.removeEventListener("click",f)})),t.pagination.bullets&&t.pagination.bullets.forEach(n=>n.classList.remove(...e.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const e=t.params.pagination;let{el:a}=t.pagination;a=u(a),a.forEach(n=>{n.classList.remove(e.horizontalClass,e.verticalClass),n.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)})}),s("init",()=>{t.params.pagination.enabled===!1?U():(E(),$(),h())}),s("activeIndexChange",()=>{typeof t.snapIndex>"u"&&h()}),s("snapIndexChange",()=>{h()}),s("snapGridLengthChange",()=>{$(),h()}),s("destroy",()=>{F()}),s("enable disable",()=>{let{el:e}=t.pagination;e&&(e=u(e),e.forEach(a=>a.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),s("lock unlock",()=>{h()}),s("click",(e,a)=>{const n=a.target;let{el:d}=t.pagination;if(Array.isArray(d)||(d=[d].filter(_=>!!_)),t.params.pagination.el&&t.params.pagination.hideOnClick&&d&&d.length>0&&!n.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&n===t.navigation.nextEl||t.navigation.prevEl&&n===t.navigation.prevEl))return;const _=d[0].classList.contains(t.params.pagination.hiddenClass);p(_===!0?"paginationShow":"paginationHide"),d.forEach(A=>A.classList.toggle(t.params.pagination.hiddenClass))}});const X=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=u(e),e.forEach(a=>a.classList.remove(t.params.pagination.paginationDisabledClass))),E(),$(),h()},U=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=u(e),e.forEach(a=>a.classList.add(t.params.pagination.paginationDisabledClass))),F()};Object.assign(t.pagination,{enable:X,disable:U,render:$,update:h,init:E,destroy:F})}function lt(t){const{effect:r,swiper:s,on:p,setTranslate:i,setTransition:c,overwriteParams:o,perspective:u,recreateShadows:g,getEffectParams:y}=t;p("beforeInit",()=>{if(s.params.effect!==r)return;s.classNames.push(`${s.params.containerModifierClass}${r}`),u&&u()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const h=o?o():{};Object.assign(s.params,h),Object.assign(s.originalParams,h)}),p("setTranslate",()=>{s.params.effect===r&&i()}),p("setTransition",(h,$)=>{s.params.effect===r&&c($)}),p("transitionEnd",()=>{if(s.params.effect===r&&g){if(!y||!y().slideShadows)return;s.slides.forEach(h=>{h.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach($=>$.remove())}),g()}});let f;p("virtualUpdate",()=>{s.params.effect===r&&(s.slides.length||(f=!0),requestAnimationFrame(()=>{f&&s.slides&&s.slides.length&&(i(),f=!1)}))})}function it(t,r){const s=V(r);return s!==r&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function ot({swiper:t,duration:r,transformElements:s,allSlides:p}){const{activeIndex:i}=t,c=o=>o.parentElement?o.parentElement:t.slides.filter(g=>g.shadowEl&&g.shadowEl===o.parentNode)[0];if(t.params.virtualTranslate&&r!==0){let o=!1,u;p?u=s:u=s.filter(g=>{const y=g.classList.contains("swiper-slide-transform")?c(g):g;return t.getSlideIndex(y)===i}),u.forEach(g=>{W(g,()=>{if(o||!t||t.destroyed)return;o=!0,t.animating=!1;const y=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(y)})})}}function rt({swiper:t,extendParams:r,on:s}){r({fadeEffect:{crossFade:!1}}),lt({effect:"fade",swiper:t,on:s,setTranslate:()=>{const{slides:c}=t,o=t.params.fadeEffect;for(let u=0;u<c.length;u+=1){const g=t.slides[u];let f=-g.swiperSlideOffset;t.params.virtualTranslate||(f-=t.translate);let h=0;t.isHorizontal()||(h=f,f=0);const $=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(g.progress),0):1+Math.min(Math.max(g.progress,-1),0),E=it(o,g);E.style.opacity=$,E.style.transform=`translate3d(${f}px, ${h}px, 0px)`}},setTransition:c=>{const o=t.slides.map(u=>V(u));o.forEach(u=>{u.style.transitionDuration=`${c}ms`}),ot({swiper:t,duration:c,transformElements:o,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}const ct={props:["pages"],methods:{updatePage(t){this.$emit("emitPages",t)}}},dt={class:"pagintion-container"},ut={"aria-label":"Page navigation example"},ft={class:"pagination justify-content-center"},pt=l("span",{"aria-hidden":"true"},"«",-1),gt=[pt],mt=["onClick"],ht=l("span",{"aria-hidden":"true"},"»",-1),_t=[ht];function vt(t,r,s,p,i,c){return L(),k("div",dt,[l("nav",ut,[l("ul",ft,[l("li",{class:O(["page-item",{disabled:!s.pages.has_pre}])},[l("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:r[0]||(r[0]=H(o=>c.updatePage(s.pages.current_page-1),["prevent"]))},gt)],2),(L(!0),k(q,null,G(s.pages.total_pages,o=>(L(),k("li",{class:O(["page-item",{active:o===s.pages.current_page}]),key:o+"page"},[l("a",{class:"page-link",href:"#",onClick:H(u=>c.updatePage(o),["prevent"])},B(o),9,mt)],2))),128)),l("li",{class:O(["page-item",{disabled:!s.pages.has_next}])},[l("a",{class:"page-link",href:"#","aria-label":"Next",onClick:r[1]||(r[1]=H(o=>c.updatePage(s.pages.current_page+1),["prevent"]))},_t)],2)])])])}const yt=j(ct,[["render",vt]]);const bt="/GUNDAM/assets/開幕優惠-f1ef7a26.png",Ct="/GUNDAM/assets/限時滿額免運-7b305fdd.png",xt="/GUNDAM/assets/模型宣傳圖-5bacf141.png",$t="/GUNDAM/assets/recruit-6a3d3cef.png";Z.use([tt]);const Lt={components:{Swiper:et,SwiperSlide:at},data(){return{modules:[nt,rt]}}},kt={class:"container p-0"},Pt={class:"products-banner"},St=l("img",{class:"shadow-sm",src:bt,alt:""},null,-1),At=l("img",{class:"shadow-sm",src:Ct,alt:""},null,-1),Bt=l("img",{class:"shadow-sm",src:xt,alt:""},null,-1),Mt=l("img",{class:"shadow-sm",src:$t,alt:""},null,-1);function Et(t,r,s,p,i,c){const o=I("swiper-slide"),u=I("swiper");return L(),k("div",kt,[l("div",Pt,[S(u,{spaceBetween:1,loop:!0,autoplay:{delay:6e3,disableOnInteraction:!1},modules:i.modules,class:"mySwiper"},{default:M(()=>[S(o,{class:"d-flex justify-content-center"},{default:M(()=>[St]),_:1}),S(o,{class:"d-flex justify-content-center"},{default:M(()=>[At]),_:1}),S(o,{class:"d-flex justify-content-center"},{default:M(()=>[Bt]),_:1}),S(o,{class:"d-flex justify-content-center"},{default:M(()=>[Mt]),_:1})]),_:1},8,["modules"])])])}const Tt=j(Lt,[["render",Et]]);const It={components:{PaginationComponent:yt,ProductsBanner:Tt},data(){return{page:{},isLoading:!1,products:[],productsAll:[],category:"",categories:[]}},methods:{getProducts(t=1){this.isLoading=!0;const r=`https://vue3-course-api.hexschool.io/v2/api/asher_api/products?page=${t}&category=${this.category}`;this.$http.get(r).then(s=>{this.isLoading=!1,this.products=s.data.products,this.page=s.data.pagination})},getProductsAll(){const t="https://vue3-course-api.hexschool.io/v2/api/asher_api/products/all";this.isLoading=!0,this.$http.get(t).then(r=>{this.productsAll=r.data.products,this.isLoading=!1,this.createCategories()})},createCategories(){if(this.productsAll.length!==0){const t=this.productsAll.map(r=>r.category);this.categories=[...new Set(t)]}},setCategory(t=""){this.category=t},productLink(t){this.$router.push(`/product/${t}`)}},watch:{category(){this.getProducts()}},mounted(){this.getProducts(),this.getProductsAll()}},zt={class:"container"},Dt=l("div",{class:"loadingio-spinner-ripple-j9w2wm5soxm"},[l("div",{class:"ldio-3c1sqxz2ek1"},[l("div"),l("div")])],-1),Ot={"aria-label":"breadcrumb"},Ft={class:"breadcrumb pt-3"},Nt={class:"breadcrumb-item"},Ht=l("li",{class:"breadcrumb-item active","aria-current":"page"},"商品",-1),qt={class:"productlist"},Gt={class:"row"},jt={class:"col-3"},Ut=l("div",{class:"input-group flex-nowrap"},[l("span",{class:"input-group-text group-color",id:"addon-wrapping"},[l("i",{class:"fas fa-search",style:{color:"#fff"}})]),l("input",{type:"text",class:"form-control",placeholder:"請輸入產品名稱","aria-label":"Username","aria-describedby":"addon-wrapping"})],-1),Rt={class:"list-group text-center my-4"},Vt=["onClick"],Xt={class:"col-9"},Yt={class:"row"},Jt=["onClick"],Kt=["src"],Qt={class:"card-body"},Wt={class:"badge bg-secondary mb-3",style:{"font-size":"14px"}},Zt={class:"card-title",style:{"font-size":"16px"}},wt={key:0,class:"text-danger h5 mb-3"},te={key:1,class:"mb-3"},ee={class:"h6"},ae={class:"h5 text-danger"},se=l("button",{type:"button",class:"btn btn-danger w-100"},"加入購物車",-1);function ne(t,r,s,p,i,c){const o=I("Loading"),u=I("ProductsBanner"),g=I("router-link"),y=I("PaginationComponent");return L(),k("div",zt,[S(o,{active:i.isLoading,class:"vld-overlay"},{default:M(()=>[Dt]),_:1},8,["active"]),S(u),l("nav",Ot,[l("ol",Ft,[l("li",Nt,[S(g,{to:"/",class:"breadcrumb-link text-decoration-none"},{default:M(()=>[w("首頁")]),_:1})]),Ht])]),l("div",qt,[l("div",Gt,[l("div",jt,[Ut,l("div",Rt,[l("button",{type:"button",class:O(["list-group-item list-group-item-action",{active:i.category===""}]),onClick:r[0]||(r[0]=f=>c.setCategory(""))}," 全部的商品 ",2),(L(!0),k(q,null,G(i.categories,(f,h)=>(L(),k("button",{key:`${h}-${f}`,type:"button",class:O(["list-group-item list-group-item-action",{active:i.category===f}]),onClick:$=>c.setCategory(f)},B(f),11,Vt))),128))])]),l("div",Xt,[l("div",Yt,[(L(!0),k(q,null,G(i.products,f=>(L(),k("div",{key:f.id,class:"col-md-6 col-lg-4 mb-4"},[l("div",{onClick:h=>c.productLink(f.id),class:"card",style:{width:"18rem background-repeat:no-repeat","background-position":"center"}},[l("img",{class:"card-img-top card-products-img",src:f.imageUrl,alt:""},null,8,Kt),l("div",Qt,[l("span",Wt,B(f.category),1),l("h5",Zt,B(f.title),1),f.price===f.origin_price?(L(),k("div",wt," NT$"+B(f.price),1)):(L(),k("div",te,[l("del",ee," NT$"+B(f.origin_price),1),l("span",ae," NT$"+B(f.price),1)])),se])],8,Jt)]))),128)),S(y,{pages:i.page,"get-products":c.getProducts,onEmitPages:c.getProducts},null,8,["pages","get-products","onEmitPages"])])])])])])}const oe=j(It,[["render",ne]]);export{oe as default};
