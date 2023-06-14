<template>
  <div class="products-list">
    <Loading :active="isLoading" class="vld-overlay"></Loading>
    <!-- 熱門商品 -->
    <img class="img-fluid title-hot mt-3" src="../assets/title/hot.png" alt="熱門商品" />
    <div class="mx-4 mt-5">
      <swiper
        class="swiper-display"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        :breakpoints="{
          1140: {
            slidesPerView: 4,
            spaceBetween: 5
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          430: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }"
      >
        <swiper-slide
          class="d-flex justify-content-center mb-5"
          v-for="item in hotProducts"
          :key="item.id"
        >
          <div class="card card-shadow" style="width: 16rem">
            <router-link :to="`/product/${item.id}`">
              <img :src="item.imageUrl" class="card-img-top card-img" alt="" />
            </router-link>
            <div class="card-body p-0">
              <h5 class="card-title p-2">{{ item.title }}</h5>
              <div class="text-end mx-3">
                <div v-if="item.price === item.origin_price" class="text-danger h5 mb-3">
                  NT${{ item.price }}
                </div>
                <div v-else class="mb-3">
                  <del class="h6"> NT${{ item.origin_price }}</del>
                  <span class="h5 text-danger"> NT${{ item.price }}</span>
                </div>
              </div>
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
            全館商品結帳時，輸入 <span style="color: #dc0000">gundam77</span> 即可享有7折優惠！
          </p>
        </div>
        <img class="img-balloon m-4" src="../assets/img/balloon.png" alt="" />
      </div>
    </div>

    <!-- 最新商品 -->
    <img class="img-fluid title-new" src="../assets/title/new.png" alt="最新商品" />
    <div class="mx-4 mt-5">
      <swiper
        class="swiper-display"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        :breakpoints="{
          '1024': {
            slidesPerView: 4,
            spaceBetween: 5
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 10
          },
          '600': {
            slidesPerView: 2,
            spaceBetween: 10
          },
          '480': {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }"
      >
        <swiper-slide
          class="d-flex justify-content-center mb-5"
          v-for="item in newProdicts"
          :key="item.id"
        >
          <div class="card card-shadow" style="width: 16rem">
            <router-link :to="`/product/${item.id}`">
              <img :src="item.imageUrl" class="card-img-top card-img shadow-sm p-1 img-fluid" alt="" />
            </router-link>
            <div class="card-body p-0">
              <h5 class="card-title p-3">{{ item.title }}</h5>
              <div class="text-end mx-3">
                <div v-if="item.price === item.origin_price" class="text-danger h5 mb-3">
                  NT${{ item.price }}
                </div>
                <div v-else class="mb-3">
                  <del class="h6"> NT${{ item.origin_price }}</del>
                  <span class="h5 text-danger"> NT${{ item.price }}</span>
                </div>
              </div>
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
      isLoading: false,
      hotProducts: [],
      newProdicts: []
    }
  },
  methods: {
    getProducts() {
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/products/all`
      this.Loading = true
      this.$http
        .get(url)
        .then((res) => {
          this.hotProducts = res.data.products.filter((products) => products.price < 500)
          this.newProdicts = res.data.products.filter(
            (products) => products.category === '水星的魔女'
          )
          this.Loading = false
        })
        .catch(() => {
          console.log('err')
        })
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style lang="scss">
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


@media screen and (max-width: 480px) {
  .card {
    width: 20rem !important;
  }
  .card-shadow {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px;
  }
  .img-balloon {
    width: 20%;
    margin: 10px !important;
  }
  .text-danger {
    margin-top: 20px;
  }
}

@media screen and (max-width: 768px) {
  .title-hot {
    margin-top: 0px !important;
    content: url('../assets/title/hot_768.png');
  }
  .title-new {
    margin-top: 0px !important;
    content: url('../assets/title/new_768.png');
  }
}
</style>