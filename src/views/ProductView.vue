<template>
  <Loading :active="isLoading" class="vld-overlay">
    <div class="loadingio-spinner-ripple-j9w2wm5soxm">
      <div class="ldio-3c1sqxz2ek1">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>

  <main class="main-product main-block py-3">
    <div class="container p-0">
      <nav aria-label="breadcrumb breadcrumb-cart">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="breadcrumb-link text-decoration-none">首頁</router-link>
          </li>
          <li class="breadcrumb-item text-decoration-none">
            <router-link :to="{ path: '/products' }" class="breadcrumb-link text-decoration-none"
              >商品</router-link
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ product.title }}
          </li>
        </ol>
      </nav>
    </div>

    <div class="container container-block shape-border shadow-sm">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6 p-4">
              <swiper
                :style="{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff'
                }"
                :spaceBetween="10"
                :navigation="true"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules"
                class="mySwiper2 swiper-style2 mb-3"
                style="width: 550px; height: 550px"
              >
                <swiper-slide>
                  <img class="img-product" :src="product.imageUrl" />
                </swiper-slide>

                <swiper-slide v-for="imageUrl in product.imagesUrl" :key="imageUrl">
                  <img class="img-product" :src="imageUrl" />
                </swiper-slide>
              </swiper>

              <swiper
                @swiper="setThumbsSwiper"
                :spaceBetween="10"
                :slidesPerView="4"
                :freeMode="true"
                :watchSlidesProgress="true"
                :modules="modules"
                class="mySwiper swiper-style"
                style="width: 550px; height: 130px"
              >
                <swiper-slide>
                  <img class="img-product" :src="product.imageUrl" />
                </swiper-slide>

                <swiper-slide v-for="imageUrl in product.imagesUrl" :key="imageUrl">
                  <img class="img-product" :src="imageUrl" />
                </swiper-slide>
              </swiper>
            </div>
            <div class="col-md-6 p-0 pt-4 pe-5">
              <div class="">
                <div class="text-secondary pb-2">商品編號: {{ product.id }}</div>
                <h4>{{ product.title }}</h4>
                <div>
                  <div class="product-price my-4 d-flex justify-content-end">
                    <div v-if="product.price === product.origin_price">{{ product.price }} 元</div>
                    <div v-else class="d-flex align-items-center">
                      <div class="text-danger me-2 fw-bold fs-3">NT$ {{ product.price }}</div>
                      <span
                        ><del class="fs-4" style="color: rgb(196, 196, 196)"
                          >NT$ {{ product.origin_price }}</del
                        ></span
                      >
                    </div>
                  </div>
                  <!-- <hr /> -->
                  <div class="d-flex align-items-center py-3">
                    <div class="input-group w-50 me-4">
                      <div class="input-group-prepend">
                        <button class="btn btn-danger custom-left-rounded" type="button">
                          <i class="bi bi-dash"></i>
                        </button>
                      </div>
                      <span class="form-control text-center">1</span>
                      <div class="input-group-append">
                        <button class="btn btn-danger custom-right-rounded" type="button">
                          <i class="bi bi-plus"></i>
                        </button>
                      </div>
                    </div>
                    <button type="button" class="btn btn-danger w-50 ms-4">
                      <i class="bi bi-cart4"></i>
                      加入購物車
                    </button>
                  </div>
                  <hr>
                  <div class="product-tote">
                    <div class="product freight">
                      <div style="font-size: 18px;">
                          <i class="bi bi-box-seam-fill"></i>
                          <span class="ms-1">運送&付款</span>
                      </div>
                    </div>
                    <div class="freight-content mt-3">
                      <div class="p-3">
                        <div class="mb-3">
                          <div class="fw-bold">運送方式：</div>
                          <div>7-11取貨、全家取貨、實體門市取貨、一般宅配貨到付款</div>
                        </div>
                        <div class="fw-bold">付款方式：</div>
                        <div>宅配代收、7-11取貨付款、全家取貨、付款信用卡、分期付款</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      product: {},
      isLoading: false,
      imagesUrl: [],
      thumbsSwiper: null,
      modules: [FreeMode, Navigation, Thumbs]
    }
  },
  methods: {
    getProduct() {
      // 取出單一產品頁面的 ID
      this.isLoading = true
      const { id } = this.$route.params
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/product/${id}`
      this.$http
        .get(url)
        .then((res) => {
          this.product = res.data.product
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper
    }
  },
  mounted() {
    this.getProduct()
    this.imagesUrl.unshift(this.product.imageUrl)
  }
}
</script>
