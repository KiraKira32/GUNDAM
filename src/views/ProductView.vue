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
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-product mt-3">
          <li class="breadcrumb-item breadcrumb-home">
            <router-link to="/" class="breadcrumb-link text-decoration-none">首頁</router-link>
          </li>
          <li class="breadcrumb-item text-decoration-none">
            <router-link :to="{ path: '/products' }" class="breadcrumb-link text-decoration-none"
              >商品</router-link
            >
          </li>
          <li class="breadcrumb-item pe-2 active " aria-current="page">
            {{ product.title }}
          </li>
        </ol>
      </nav>
    </div>

    <div class="container container-productu shape-border shadow-sm p-0">
      <div class="modal-content">
        <div class="modal-body p-5">
          <div class="row">
            <div class="col-12 col-md-6 product-swiper">
              <swiper
                :style="{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff'
                }"
                :spaceBetween="10"
                :navigation="true"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules"
                class="mySwiper2 swiper-style2 mb-3 product-width"
                style="width: 550px; height: 450px"
              >
                <swiper-slide>
                  <img class="img-product" :src="product.imageUrl" />
                </swiper-slide>
                <swiper-slide
                  v-for="(imageUrl, index) in product.imagesUrl"
                  :key="'image-' + index"
                >
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
                class="mySwiper swiper-style img-product-width"
                style="width: 550px; height: 130px"
              >
                <swiper-slide>
                  <img class="img-product img-preview" :src="product.imageUrl" />
                </swiper-slide>

                <swiper-slide
                  v-for="(imageUrl, index) in product.imagesUrl"
                  :key="'image-' + index"
                >
                  <img class="img-product img-preview" :src="imageUrl" />
                </swiper-slide>
              </swiper>
            </div>
            <!-- 商品資訊 -->
            <div class="col-12 col-md-6 product-content">
              <div class="ps-4">
                <h4>{{ product.title }}</h4>
                <div class="text-secondary pb-2">商品編號: {{ product.id }}</div>
                <div>
                  <div class="product-price my-4 d-flex justify-content-end">
                    <div
                      v-if="product.price === product.origin_price"
                      class="text-danger mx-2 fw-bold fs-3"
                    >
                      NT${{ product.price }} 元
                    </div>
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
                        <button
                          class="btn btn-danger custom-left-rounded"
                          type="button"
                          @click="qty > 1 ? qty-- : null"
                          :disabled="qty === 1"
                        >
                          <i class="bi bi-dash"></i>
                        </button>
                      </div>
                      <span class="form-control text-center">{{ qty }}</span>
                      <div class="input-group-append">
                        <button
                          class="btn btn-danger custom-right-rounded"
                          type="button"
                          @click="qty++"
                        >
                          <i class="bi bi-plus"></i>
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn btn-danger product-add w-50 ms-4"
                      @click.prevent="addToCart(product.id, qty)"
                    >
                      <i class="bi bi-cart4"></i>
                      加入購物車
                    </button>
                  </div>
                  <div class="py-2">客約商品：請於結帳時在備註欄位填寫可收貨日期</div>
                  <hr />
                  <div class="product-tote">
                    <div class="product freight">
                      <div style="font-size: 18px">
                        <i class="bi bi-box-seam-fill"></i>
                        <span class="ms-1">配送及相關說明</span>
                      </div>
                      <div class="py-2">
                        線上購物的消費者，都可以依照消費者保護法的規定，享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，請留意，您所退回的商品必須回復原狀。
                      </div>
                    </div>
                    <div class="freight-content mt-3">
                      <div class="p-3">
                        <div class="mb-3">
                          <div class="fw-bold">運送方式：</div>
                          <div>宅配、超商取貨、一般宅配、貨到付款</div>
                        </div>
                        <div class="fw-bold">付款方式：</div>
                        <div>宅配代收、7-11取貨、付款全家取貨付款、信用卡付款</div>
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
    <div class="container container-productu p-0">
      <div class="product-show">
        <div class="fs-4 my-4 pt-4 fw-bold mx-4">你可能有興趣</div>
        <div class="mx-4">
          <swiper
            class="swiper-display"
            :loop="true"
            :breakpoints="{
              1140: {
                slidesPerView: 4,
                spaceBetween: 5
              },
              1024: {
                slidesPerView: 3,
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
              v-for="item in filteredProducts"
              :key="item.id"
              @click="
                selectedProductId = item.id;
                getProductId()
              "
            >
              <div class="card card-shadow" style="width: 16rem">
                <router-link :to="`/product/${item.id}`">
                  <img
                    :src="item.imageUrl"
                    class="card-img-top card-img"
                    alt=""
                    @click="scrollTop"
                  />
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
      </div>
    </div>
  </main>
  <router-view></router-view>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// eslint-disable-next-line no-unused-vars
import Swal from 'sweetalert2'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { mapActions, mapState } from 'pinia'
import cartStore from '../stores/cart'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      product: {},
      products: [],
      isLoading: false,
      isLoadingItem: '',
      imagesUrl: [],
      thumbsSwiper: null,
      modules: [FreeMode, Navigation, Thumbs],
      // selectedProduct:{},
      selectedProductId: null,
      qty: 1
    }
  },
  computed: {
    // 過濾列表，只顯示未選擇的商品
    filteredProducts() {
      return this.products.filter((item) => item.id !== this.selectedProductId)
    },
    ...mapState(cartStore, ['cartData'])
  },
  methods: {
    getProductId() {
      // 取出單一產品頁面的 ID
      const { id } = this.$route.params
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/product/${id}`
      this.$http
        .get(url)
        .then((res) => {
          this.scrollTop()
          this.product = res.data.product
          this.selectedProduct = this.product
        })
        .catch((err) => {
          alert(err)
        })
    },
    getProductsAll() {
      this.isLoading = true
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/products/all`
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products.filter((products) => products.price < 500) // 興趣篩選
          this.isLoading = false
        })
        .catch((err) => {
          alert(err)
        })
    },
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper
    },
    scrollTop() {
      window.scrollTo(0, 0)
    },
    ...mapActions(cartStore, ['addToCart', 'getCart'])
  },
  mounted() {
    this.getProductId()
    this.getProductsAll()
    this.imagesUrl.unshift(this.product.imageUrl)
  }
}
</script>

<style lang="scss">
.modal-body {
  background: white;
}

@media screen and (max-width: 1200px) {
  .modal-body {
    padding: 1% !important;
  }
  .breadcrumb-product {
    padding-left: 20px;
  }
}
@media screen and (max-width: 1080px) {
  .product-swiper {
    width: 100%;
    padding: 0px !important;
  }
  .product-content {
    margin-top: 3%;
    width: 550px;
  }
  .ps-4 {
    padding-left: 0px !important;
  }
  .row {
    margin-right: 0px;
    margin-left: 0px;
    display: flex;
    justify-content: center;
  }
  .modal-body {
    padding-top: 50px !important;
    padding-bottom: 50px !important;
  }
}
@media screen and (max-width: 1024px) {
  
  .main-product {
    margin-top: 0px;
  }
  .main-product {
    margin-top: 5px;
  }
  .breadcrumb-product {
    margin-top: 80px !important;
    padding-left: 0px;
  }
  .modal-body {
    padding: 0px m !important;
  }
}

@media screen and (max-width: 768px) {
  .product-width {
    max-width: 100%;
  }
  .img-product-width {
    max-width: 100%;
  }
  .modal-body {
    padding-top: 0px !important;
    padding-bottom: 30px !important;
  }
  .breadcrumb-product {
    padding-left: 10px !important;
  }
  .product-swiper {
    padding-top: 30px !important;
  }
}
@media screen and (max-width: 576px) {
  .breadcrumb-product {
    padding-left: 10px;
  }
  
}

@media screen and (max-width: 480px) {
  .main-product {
    padding-top: 1% !important;
  }
  .product-width {
    max-width: 100%;
    height: 300px !important;
  }
  .img-preview {
    
    max-width: 100%;
    height: 90px !important;
  }
  .product-swiper {
    height: 30%;
  }
  .breadcrumb-product{
    font-size: 14px;
  }
}
</style>
