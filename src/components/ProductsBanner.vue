<template>
  <div class="container p-0">
    <div class="products-banner">
      <swiper
        :spaceBetween="1"
        :loop="true"
        :autoplay="{
          delay: 6000,
          disableOnInteraction: false
        }"

        :modules="modules"

        class="mySwiper"
      >
        <swiper-slide class="d-flex justify-content-center"
          ><img class="shadow-sm" src="../assets/banner/開幕優惠.png" alt=""
        /></swiper-slide>
        <swiper-slide class="d-flex justify-content-center"
          ><img class="shadow-sm" src="../assets/banner/限時滿額免運.png" alt=""
        /></swiper-slide>
        <swiper-slide class="d-flex justify-content-center"
          ><img class="shadow-sm" src="../assets/banner/模型宣傳圖.png" alt=""
        /></swiper-slide>
        <swiper-slide class="d-flex justify-content-center"
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
    SwiperSlide,

  },
  data() {
    return {
      modules: [Pagination, EffectFade],
    }
  },
}

</script>

<style>
.products-banner{
  background: #282828;
}
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

</style>