<template>
  <div class="products-list">
    <!-- 熱門商品 -->
    <img class="img-fluid mt-3" src="../assets/title/hot.png" alt="熱門商品" />
    <div class="mx-4 my-5">
      <swiper
        class="swiper-display"
        :slides-per-view="4"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
      >
        <swiper-slide
          class="d-flex justify-content-center"
          v-for="item in hotProducts"
          :key="item.id"
        >
          <div class="card card-shadow" style="width: 16rem">
            <img :src="item.imageUrl" class="card-img-top card-img" alt="" />
            <div class="card-body p-0">
              <h5 class="card-title p-2">{{ item.title }}</h5>
              <p class="card-text text-end me-3 fw-bold">NT$ {{ item.price }}</p>
              <div class="card-footer py-3">
                <router-link :to="`/product/${item.id}`" class="btn btn-danger w-100"
                  >馬上來看看</router-link
                >
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 歡慶開幕 -->
    <div class="decoration-img mb-5">
      <div class="d-flex justify-content-center align-items-center bg-light">
        <img class="img-balloon m-4" src="../assets/img/balloon.png" alt="" />
        <div class="coupon">
          <h3 class="text-danger d-flex justify-content-center align-items-center">歡慶開幕</h3>
          <p class="text-secondary">
            全館商品結帳時，輸入 <span style="color: #dc0000">gundma77</span> 即可享有7折優惠！
          </p>
        </div>
        <img class="img-balloon m-4" src="../assets/img/balloon.png" alt="" />
      </div>
    </div>

    <!-- 最新商品 -->
    <img class="img-fluid" src="../assets/title/new.png" alt="最新商品" />
    <div class="mx-4 my-5">
      <swiper
        :slides-per-view="4"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :loop="true"
        :autoplay="{
          delay: 3500,
          disableOnInteraction: false
        }"
      >
        <swiper-slide
          class="d-flex justify-content-center mb-5"
          v-for="item in newProdicts"
          :key="item.id"
        >
          <div class="card card-shadow" style="width: 16rem">
            <img :src="item.imageUrl" class="card-img-top card-img" alt="" />
            <div class="card-body p-0">
              <h5 class="card-title p-3">{{ item.title }}</h5>
              <p class="card-text text-end me-3 fw-bold">NT$ {{ item.price }}</p>
              <div class="card-footer py-3">
                <router-link :to="`/product/${item.id}`" class="btn btn-danger w-100"
                  >馬上來看看</router-link
                >
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss">
@media screen and (max-width: 480px) {
  .card {
    width: 18rem !important;
  }
  .swiper-slide {
    // width: calc(100% / 4) !important;
    width: 100% !important;
    overflow: hidden;
  }
}

.card-shadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px;
}
.article-block {
  background: #000;
  .data-text {
    background: #bf0000;
    padding: 4px;
    border-radius: 8px;
  }
}
.main-title {
  font-size: 28px;
  color: #bf0000;
}
.card-title {
  font-size: 16px;
}
.card-img {
  height: 200px;
  object-fit: cover;
}
</style>

<script>
import SwiperCore, { Autoplay } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Autoplay])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      hotProducts: [],
      newProdicts: []
    }
  },
  methods: {
    getProducts() {
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.hotProducts = res.data.products.filter((products) => products.price < 500)
        this.newProdicts = res.data.products.filter(
          (products) => products.category === '水星的魔女'
        )
        console.log(res.data.products)
      })
    }
  },
  setup() {
    const onSwiper = () => {}
    const onSlideChange = () => {}
    return {
      onSwiper,
      onSlideChange
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>
