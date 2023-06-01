import{S as z,a as U}from"./swiper-slide-6d2785dd.js";import{u as R,x as F,y as H,z as V,p as D,_ as G,r as I,o as T,c as P,b as S,w as b,a as n,t as E,A as X,f as Y,d as L,F as B,i as J,g as N,h as O}from"./index-ce255eb7.js";import{c as K}from"./swiper.min-94b5dbbe.js";import{S as Q}from"./sweetalert2.all-0cb6e233.js";import{g as W}from"./getCart-e8b3a81a.js";function Z({swiper:e,extendParams:h,on:f,emit:_}){h({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const c=o=>(Array.isArray(o)||(o=[o].filter(s=>!!s)),o);function p(o){let s;return o&&typeof o=="string"&&e.isElement&&(s=e.el.shadowRoot.querySelector(o),s)?s:(o&&(typeof o=="string"&&(s=[...document.querySelectorAll(o)]),e.params.uniqueNavElements&&typeof o=="string"&&s.length>1&&e.el.querySelectorAll(o).length===1&&(s=e.el.querySelector(o))),o&&!s?o:s)}function g(o,s){const d=e.params.navigation;o=c(o),o.forEach(i=>{i&&(i.classList[s?"add":"remove"](...d.disabledClass.split(" ")),i.tagName==="BUTTON"&&(i.disabled=s),e.params.watchOverflow&&e.enabled&&i.classList[e.isLocked?"add":"remove"](d.lockClass))})}function u(){const{nextEl:o,prevEl:s}=e.navigation;if(e.params.loop){g(s,!1),g(o,!1);return}g(s,e.isBeginning&&!e.params.rewind),g(o,e.isEnd&&!e.params.rewind)}function t(o){o.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),_("navigationPrev"))}function l(o){o.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),_("navigationNext"))}function m(){const o=e.params.navigation;if(e.params.navigation=K(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(o.nextEl||o.prevEl))return;let s=p(o.nextEl),d=p(o.prevEl);Object.assign(e.navigation,{nextEl:s,prevEl:d}),s=c(s),d=c(d);const i=(v,y)=>{v&&v.addEventListener("click",y==="next"?l:t),!e.enabled&&v&&v.classList.add(...o.lockClass.split(" "))};s.forEach(v=>i(v,"next")),d.forEach(v=>i(v,"prev"))}function a(){let{nextEl:o,prevEl:s}=e.navigation;o=c(o),s=c(s);const d=(i,v)=>{i.removeEventListener("click",v==="next"?l:t),i.classList.remove(...e.params.navigation.disabledClass.split(" "))};o.forEach(i=>d(i,"next")),s.forEach(i=>d(i,"prev"))}f("init",()=>{e.params.navigation.enabled===!1?k():(m(),u())}),f("toEdge fromEdge lock unlock",()=>{u()}),f("destroy",()=>{a()}),f("enable disable",()=>{let{nextEl:o,prevEl:s}=e.navigation;o=c(o),s=c(s),[...o,...s].filter(d=>!!d).forEach(d=>d.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass))}),f("click",(o,s)=>{let{nextEl:d,prevEl:i}=e.navigation;d=c(d),i=c(i);const v=s.target;if(e.params.navigation.hideOnClick&&!i.includes(v)&&!d.includes(v)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===v||e.pagination.el.contains(v)))return;let y;d.length?y=d[0].classList.contains(e.params.navigation.hiddenClass):i.length&&(y=i[0].classList.contains(e.params.navigation.hiddenClass)),_(y===!0?"navigationShow":"navigationHide"),[...d,...i].filter(M=>!!M).forEach(M=>M.classList.toggle(e.params.navigation.hiddenClass))}});const r=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),m(),u()},k=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),a()};Object.assign(e.navigation,{enable:r,disable:k,update:u,init:m,destroy:a})}function $({swiper:e,extendParams:h,on:f}){h({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let _=!1,c=!1;e.thumbs={swiper:null};function p(){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const l=t.clickedIndex,m=t.clickedSlide;if(m&&m.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof l>"u"||l===null)return;let a;t.params.loop?a=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10):a=l,e.params.loop?e.slideToLoop(a):e.slideTo(a)}function g(){const{thumbs:t}=e.params;if(_)return!1;_=!0;const l=e.constructor;if(t.swiper instanceof l)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(F(t.swiper)){const m=Object.assign({},t.swiper);Object.assign(m,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new l(m),c=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",p),!0}function u(t){const l=e.thumbs.swiper;if(!l||l.destroyed)return;const m=l.params.slidesPerView==="auto"?l.slidesPerViewDynamic():l.params.slidesPerView;let a=1;const r=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(a=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(a=1),a=Math.floor(a),l.slides.forEach(s=>s.classList.remove(r)),l.params.loop||l.params.virtual&&l.params.virtual.enabled)for(let s=0;s<a;s+=1)H(l.slidesEl,`[data-swiper-slide-index="${e.realIndex+s}"]`).forEach(d=>{d.classList.add(r)});else for(let s=0;s<a;s+=1)l.slides[e.realIndex+s]&&l.slides[e.realIndex+s].classList.add(r);const k=e.params.thumbs.autoScrollOffset,o=k&&!l.params.loop;if(e.realIndex!==l.realIndex||o){const s=l.activeIndex;let d,i;if(l.params.loop){const v=l.slides.filter(y=>y.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];d=l.slides.indexOf(v),i=e.activeIndex>e.previousIndex?"next":"prev"}else d=e.realIndex,i=d>e.previousIndex?"next":"prev";o&&(d+=i==="next"?k:-1*k),l.visibleSlidesIndexes&&l.visibleSlidesIndexes.indexOf(d)<0&&(l.params.centeredSlides?d>s?d=d-Math.floor(m/2)+1:d=d+Math.floor(m/2)-1:d>s&&l.params.slidesPerGroup,l.slideTo(d,t?0:void 0))}}f("beforeInit",()=>{const{thumbs:t}=e.params;if(!(!t||!t.swiper))if(typeof t.swiper=="string"||t.swiper instanceof HTMLElement){const l=R(),m=()=>{const r=typeof t.swiper=="string"?l.querySelector(t.swiper):t.swiper;if(r&&r.swiper)t.swiper=r.swiper,g(),u(!0);else if(r){const k=o=>{t.swiper=o.detail[0],r.removeEventListener("init",k),g(),u(!0),t.swiper.update(),e.update()};r.addEventListener("init",k)}return r},a=()=>{if(e.destroyed)return;m()||requestAnimationFrame(a)};requestAnimationFrame(a)}else g(),u(!0)}),f("slideChange update resize observerUpdate",()=>{u()}),f("setTransition",(t,l)=>{const m=e.thumbs.swiper;!m||m.destroyed||m.setTransition(l)}),f("beforeDestroy",()=>{const t=e.thumbs.swiper;!t||t.destroyed||c&&t.destroy()}),Object.assign(e.thumbs,{init:g,update:u})}function w({swiper:e,extendParams:h,emit:f,once:_}){h({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function c(){const u=e.getTranslate();e.setTranslate(u),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function p(){const{touchEventsData:u,touches:t}=e;u.velocities.length===0&&u.velocities.push({position:t[e.isHorizontal()?"startX":"startY"],time:u.touchStartTime}),u.velocities.push({position:t[e.isHorizontal()?"currentX":"currentY"],time:V()})}function g({currentPos:u}){const{params:t,wrapperEl:l,rtlTranslate:m,snapGrid:a,touchEventsData:r}=e,o=V()-r.touchStartTime;if(u<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(u>-e.maxTranslate()){e.slides.length<a.length?e.slideTo(a.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(r.velocities.length>1){const x=r.velocities.pop(),C=r.velocities.pop(),j=x.position-C.position,q=x.time-C.time;e.velocity=j/q,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(q>150||V()-x.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,r.velocities.length=0;let s=1e3*t.freeMode.momentumRatio;const d=e.velocity*s;let i=e.translate+d;m&&(i=-i);let v=!1,y;const M=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let A;if(i<e.maxTranslate())t.freeMode.momentumBounce?(i+e.maxTranslate()<-M&&(i=e.maxTranslate()-M),y=e.maxTranslate(),v=!0,r.allowMomentumBounce=!0):i=e.maxTranslate(),t.loop&&t.centeredSlides&&(A=!0);else if(i>e.minTranslate())t.freeMode.momentumBounce?(i-e.minTranslate()>M&&(i=e.minTranslate()+M),y=e.minTranslate(),v=!0,r.allowMomentumBounce=!0):i=e.minTranslate(),t.loop&&t.centeredSlides&&(A=!0);else if(t.freeMode.sticky){let x;for(let C=0;C<a.length;C+=1)if(a[C]>-i){x=C;break}Math.abs(a[x]-i)<Math.abs(a[x-1]-i)||e.swipeDirection==="next"?i=a[x]:i=a[x-1],i=-i}if(A&&_("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(m?s=Math.abs((-i-e.translate)/e.velocity):s=Math.abs((i-e.translate)/e.velocity),t.freeMode.sticky){const x=Math.abs((m?-i:i)-e.translate),C=e.slidesSizesGrid[e.activeIndex];x<C?s=t.speed:x<2*C?s=t.speed*1.5:s=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&v?(e.updateProgress(y),e.setTransition(s),e.setTranslate(i),e.transitionStart(!0,e.swipeDirection),e.animating=!0,D(l,()=>{!e||e.destroyed||!r.allowMomentumBounce||(f("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(y),D(l,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(f("_freeModeNoMomentumRelease"),e.updateProgress(i),e.setTransition(s),e.setTranslate(i),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,D(l,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(i),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&f("_freeModeNoMomentumRelease");(!t.freeMode.momentum||o>=t.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:c,onTouchMove:p,onTouchEnd:g}})}const ee={mixins:[W],components:{Swiper:z,SwiperSlide:U},data(){return{product:{},products:[],isLoading:!1,isLoadingItem:"",imagesUrl:[],thumbsSwiper:null,modules:[w,Z,$],selectedProductId:null,qty:1}},computed:{filteredProducts(){return this.products.filter(e=>e.id!==this.selectedProductId)}},methods:{getProductId(){const{id:e}=this.$route.params,h=`https://vue3-course-api.hexschool.io/v2/api/asher_api/product/${e}`;this.$http.get(h).then(f=>{this.scrollTop(),this.product=f.data.product,this.selectedProduct=this.product}).catch(f=>{alert(f)})},getProductsAll(){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/v2/api/asher_api/products/all";this.$http.get(e).then(h=>{this.products=h.data.products.filter(f=>f.price<500),this.isLoading=!1}).catch(h=>{alert(h)})},setThumbsSwiper(e){this.thumbsSwiper=e},scrollTop(){window.scrollTo(0,0)},addToCart(e,h=1){const f={product_id:e,qty:h},_="https://vue3-course-api.hexschool.io/v2/api/asher_api/cart";this.$http.post(_,{data:f}).then(()=>{this.getCart(),this.qty=1,Q.fire({icon:"success",title:"加入購物車成功！",showConfirmButton:!1,timer:1500})}).catch(c=>{alert(c)})}},mounted(){this.getProductId(),this.getProductsAll(),this.imagesUrl.unshift(this.product.imageUrl)}},te=n("div",{class:"loadingio-spinner-ripple-j9w2wm5soxm"},[n("div",{class:"ldio-3c1sqxz2ek1"},[n("div"),n("div")])],-1),se={class:"main-product main-block py-3"},ie={class:"container p-0"},ne={"aria-label":"breadcrumb breadcrumb-cart"},oe={class:"breadcrumb"},ae={class:"breadcrumb-item"},le={class:"breadcrumb-item text-decoration-none"},ce={class:"breadcrumb-item active","aria-current":"page"},de={class:"container container-block shape-border shadow-sm p-0"},re={class:"modal-content"},ue={class:"modal-body"},me={class:"row p-5"},fe={class:"col-md-6"},he=["src"],ve=["src"],pe=["src"],ge=["src"],be={class:"col-md-6"},_e={class:"ps-4"},ye={class:"text-secondary pb-2"},xe={class:"product-price my-4 d-flex justify-content-end"},Te={key:0,class:"text-danger mx-2 fw-bold fs-3"},Se={key:1,class:"d-flex align-items-center"},Ee={class:"text-danger me-2 fw-bold fs-3"},ke={class:"fs-4",style:{color:"rgb(196, 196, 196)"}},Ce={class:"d-flex align-items-center py-3"},Me={class:"input-group w-50 me-4"},Pe={class:"input-group-prepend"},Ie=["disabled"],Le=n("i",{class:"bi bi-dash"},null,-1),Be=[Le],Ae={class:"form-control text-center"},Ve={class:"input-group-append"},De=n("i",{class:"bi bi-plus"},null,-1),Ne=[De],Oe=n("i",{class:"bi bi-cart4"},null,-1),qe=J('<div class="py-2">客約商品：請於結帳時在備註欄位填寫可收貨日期</div><hr><div class="product-tote"><div class="product freight"><div style="font-size:18px;"><i class="bi bi-box-seam-fill"></i><span class="ms-1">配送及相關說明</span></div><div class="py-2"> 線上購物的消費者，都可以依照消費者保護法的規定，享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，請留意，您所退回的商品必須回復原狀。 </div></div><div class="freight-content mt-3"><div class="p-3"><div class="mb-3"><div class="fw-bold">運送方式：</div><div>宅配、超商取貨、一般宅配、貨到付款</div></div><div class="fw-bold">付款方式：</div><div>宅配代收、7-11取貨、付款全家取貨付款、信用卡付款</div></div></div></div>',3),je={class:"container container-block p-0"},ze={class:"product-show"},Ue=n("div",{class:"fs-4 my-4 pt-4 fw-bold mx-4"},"你可能有興趣",-1),Re={class:"mx-4"},Fe={class:"card card-shadow",style:{width:"16rem"}},He=["src"],Ge={class:"card-body p-0"},Xe={class:"card-title p-2"},Ye={class:"text-end mx-3"},Je={key:0,class:"text-danger h5 mb-3"},Ke={key:1,class:"mb-3"},Qe={class:"h6"},We={class:"h5 text-danger"},Ze={class:"card-footer py-3"};function $e(e,h,f,_,c,p){const g=I("Loading"),u=I("router-link"),t=I("swiper-slide"),l=I("swiper"),m=I("router-view");return T(),P(B,null,[S(g,{active:c.isLoading,class:"vld-overlay"},{default:b(()=>[te]),_:1},8,["active"]),n("main",se,[n("div",ie,[n("nav",ne,[n("ol",oe,[n("li",ae,[S(u,{to:"/",class:"breadcrumb-link text-decoration-none"},{default:b(()=>[L("首頁")]),_:1})]),n("li",le,[S(u,{to:{path:"/products"},class:"breadcrumb-link text-decoration-none"},{default:b(()=>[L("商品")]),_:1})]),n("li",ce,E(c.product.title),1)])])]),n("div",de,[n("div",re,[n("div",ue,[n("div",me,[n("div",fe,[S(l,{style:X([{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},{width:"550px",height:"450px"}]),spaceBetween:10,navigation:!0,thumbs:{swiper:c.thumbsSwiper},modules:c.modules,class:"mySwiper2 swiper-style2 mb-3"},{default:b(()=>[S(t,null,{default:b(()=>[n("img",{class:"img-product",src:c.product.imageUrl},null,8,he)]),_:1}),(T(!0),P(B,null,N(c.product.imagesUrl,(a,r)=>(T(),O(t,{key:"image-"+r},{default:b(()=>[n("img",{class:"img-product",src:a},null,8,ve)]),_:2},1024))),128))]),_:1},8,["thumbs","modules"]),S(l,{onSwiper:p.setThumbsSwiper,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:c.modules,class:"mySwiper swiper-style",style:{width:"550px",height:"130px"}},{default:b(()=>[S(t,null,{default:b(()=>[n("img",{class:"img-product",src:c.product.imageUrl},null,8,pe)]),_:1}),(T(!0),P(B,null,N(c.product.imagesUrl,(a,r)=>(T(),O(t,{key:"image-"+r},{default:b(()=>[n("img",{class:"img-product",src:a},null,8,ge)]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"])]),n("div",be,[n("div",_e,[n("h4",null,E(c.product.title),1),n("div",ye,"商品編號: "+E(c.product.id),1),n("div",null,[n("div",xe,[c.product.price===c.product.origin_price?(T(),P("div",Te," NT$"+E(c.product.price)+" 元 ",1)):(T(),P("div",Se,[n("div",Ee,"NT$ "+E(c.product.price),1),n("span",null,[n("del",ke,"NT$ "+E(c.product.origin_price),1)])]))]),n("div",Ce,[n("div",Me,[n("div",Pe,[n("button",{class:"btn btn-danger custom-left-rounded",type:"button",onClick:h[0]||(h[0]=a=>c.qty>1?c.qty--:null),disabled:c.qty===1},Be,8,Ie)]),n("span",Ae,E(c.qty),1),n("div",Ve,[n("button",{class:"btn btn-danger custom-right-rounded",type:"button",onClick:h[1]||(h[1]=a=>c.qty++)},Ne)])]),n("button",{type:"button",class:"btn btn-danger w-50 ms-4",onClick:h[2]||(h[2]=Y(a=>p.addToCart(c.product.id,c.qty),["prevent"]))},[Oe,L(" 加入購物車 ")])]),qe])])])])])])]),n("div",je,[n("div",ze,[Ue,n("div",Re,[S(l,{class:"swiper-display",loop:!0,breakpoints:{1140:{slidesPerView:4,spaceBetween:5},1024:{slidesPerView:3,spaceBetween:5},768:{slidesPerView:3,spaceBetween:10},600:{slidesPerView:2,spaceBetween:10},430:{slidesPerView:1,spaceBetween:20}}},{default:b(()=>[(T(!0),P(B,null,N(p.filteredProducts,a=>(T(),O(t,{class:"d-flex justify-content-center mb-5",key:a.id,onClick:r=>{c.selectedProductId=a.id,p.getProductId()}},{default:b(()=>[n("div",Fe,[S(u,{to:`/product/${a.id}`},{default:b(()=>[n("img",{src:a.imageUrl,class:"card-img-top card-img",alt:"",onClick:h[3]||(h[3]=(...r)=>p.scrollTop&&p.scrollTop(...r))},null,8,He)]),_:2},1032,["to"]),n("div",Ge,[n("h5",Xe,E(a.title),1),n("div",Ye,[a.price===a.origin_price?(T(),P("div",Je," NT$"+E(a.price),1)):(T(),P("div",Ke,[n("del",Qe," NT$"+E(a.origin_price),1),n("span",We," NT$"+E(a.price),1)]))]),n("div",Ze,[S(u,{to:`/product/${a.id}`,class:"btn btn-danger w-100"},{default:b(()=>[L("馬上來看看")]),_:2},1032,["to"])])])])]),_:2},1032,["onClick"]))),128))]),_:1})])])])]),S(m)],64)}const nt=G(ee,[["render",$e]]);export{nt as default};
