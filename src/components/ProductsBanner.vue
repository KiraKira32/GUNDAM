<template>
  <div class="container products-banner-container p-0 ">
    <div class="products-banner">
      <swiper
        :spaceBetween="1"
        :loop="true"
        :autoplay="{
          delay: 6000,
          disableOnInteraction: false
        }"
        :modules="modules"
        class="mySwiper-products"
      >
        <swiper-slide class="open-banner d-flex justify-content-center"
          ><img class="shadow-sm" src="../assets/banner/開幕優惠.png" alt=""
        /></swiper-slide>
        <swiper-slide class="freight-banner d-flex justify-content-center"
          ><img class="shadow-sm" src="../assets/banner/限時滿額免運.png" alt=""
        /></swiper-slide>
        <swiper-slide class="publicity-banner d-flex justify-content-center"
          ><img class="shadow-sm" src="../assets/banner/模型宣傳圖.png" alt=""
        /></swiper-slide>
        <swiper-slide class="recruit-banner d-flex justify-content-center"
          ><img class="shadow-sm" src="../assets/banner/recruit.png" alt=""
        /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Autoplay } from 'swiper/core'
import { EffectFade } from 'swiper'

SwiperCore.use([Autoplay])

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
// import required modules
import { Pagination } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Pagination, EffectFade]
    }
  }
}
</script>

<style>
.swiper-pagination-bullet-active,
.swiper-pagination-bullet {
  width: 48px;
  height: 3px;
  border-radius: 2px;
  background-color: #000000;
  opacity: 0.18;
}
.swiper-pagination-bullet-active {
  background-color: #df0000;
  opacity: 1;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom {
  height: 15px;
}

.mySwiper-products {
  width: 100%;
  height: 450px;
}

@media screen and (max-width: 1080px)  {
  .mySwiper-products {
    max-width: 100%;
    height: 400px;
  }
  .products-banner {
    margin-top: 100px;
  }
}
@media screen and (max-width: 1024px) {
  .mySwiper-products {
    max-width: 100%;
    height: 380px;
  }
  .products-banner {
    margin-top: 100px;
  }
}

@media screen and (max-width: 991px) {
  .mySwiper-products {
    width: 100%;
    height: 265px;
  }
}

@media screen and (max-width: 768px) {
  .mySwiper-products {
    max-width: 100%;
    height: 200px;
  }
  
}

@media screen and (max-width: 576px) {
  .mySwiper-products {
    width: 100%;
    height: 200px;
  }
}

@media screen and (max-width: 480px) {
  .mySwiper-products {
    width: 100%;
    height: 100%;
  }

  .recruit-banner {
    content: url('../assets/banner/recruit_480px.png');
  }
  .open-banner{
    content: url('../assets/banner/開幕優惠_480px.png')
  }
  .publicity-banner {
    content: url('../assets/banner/模型宣傳圖_480px.png');
  }
  .freight-banner {
    content: url('../assets/banner/限時滿額免運_480px.png');
  }
}
</style>
