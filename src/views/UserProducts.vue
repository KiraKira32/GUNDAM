<template>
  <div class="container">
    <Loading :active="isLoading" class="vld-overlay">
      <div class="loadingio-spinner-rolling-y3x6rt20h2g">
        <div class="ldio-dg3xh3l51l9">
          <div></div>
        </div>
      </div>
    </Loading>
    <ProductsBannerVue></ProductsBannerVue>
    <!-- breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb pt-3">
        <li class="breadcrumb-item">
          <router-link to="/" class="breadcrumb-link text-decoration-none">首頁</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">商品</li>
      </ol>
    </nav>
    <!-- productlist -->
    <div class="productlist">
      <div class="row">
        <div class="col-3">
          <!-- search -->
          <div class="input-group flex-nowrap">
            <span class="input-group-text group-color" id="addon-wrapping">
              <i class="fas fa-search" style="color: #fff"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="請輸入產品名稱"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <!-- 商品分類 -->
          <div class="list-group text-center my-4">
            <button
              type="button"
              class="list-group-item list-group-item-action active"
              aria-current="true"
            >
              全部的商品
            </button>
            <button type="button" class="list-group-item list-group-item-action">水星的魔女</button>
            <button type="button" class="list-group-item list-group-item-action">鐵血的孤兒</button>
            <button type="button" class="list-group-item list-group-item-action">我還沒想到</button>
          </div>
        </div>
        <div class="col-9">
          <!-- 產品列表 -->
          <div v-if="filterProducts.length" class="row">
            <div v-for="item in filterProducts" :key="item.id" class="col-md-6 col-lg-4 mb-4">
              <div
                class="card"
                style="width: 18rem background-repeat:no-repeat; background-position: center"
              >
                <img class="card-img-top card-products-img" :src="item.imageUrl" alt="" />
                <div class="card-body">
                  <span class="badge bg-secondary mb-3" style="font-size: 14px">{{
                    item.category
                  }}</span>
                  <h5 class="card-title" style="font-size: 16px">{{ item.title }}</h5>
                  <div v-if="item.price === item.origin_price" class="text-danger h5 mb-3">
                    NT${{ item.price }}
                  </div>
                  <div v-else class="mb-3">
                    <del class="h6"> NT${{ item.origin_price }}</del>
                    <span class="h5 text-danger"> NT${{ item.price }}</span>
                  </div>
                  <button type="button" class="btn btn-danger w-100">加入購物車</button>
                </div>
              </div>
            </div>
            <PaginationComponent
              :pages="page"
              :get-products="getProducts"
              @emit-pages="getProducts"
            >
            </PaginationComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent.vue'
import ProductsBannerVue from '@/components/ProductsBanner.vue'

export default {
  components: {
    // Swiper,
    // SwiperSlide,
    PaginationComponent,
    ProductsBannerVue
  },
  data() {
    return {
      // modules: [Pagination, EffectFade],
      isLoading: false,
      page: {},
      product: {},
      products: [], // 儲存資料
      allproducts: [],
      filterProducts: [],
      productCategory: ''
    }
  },
  methods: {
    getProducts(page = 1) {
      const url = `${import.meta.env.VITE_API}/v2/api/${
        import.meta.env.VITE_PATH
      }/products/?page=${page}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false
          this.products = res.data.products
          this.page = res.data.pagination
          this.filterProducts = this.products
          this.productCategory = res.data.products.category
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 資料篩選
    siftProducts() {
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.allproducts = res.data.products
        if (this.productCategory !== '') {
          this.filterProducts = this.allproducts.filter((item) => {
            item.category === this.productCategory
          })
        } else {
          this.filterProducts = this.products
        }
      })
    }
  },
  mounted() {
    this.getProducts()
    this.siftProducts()
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 1025px) {
  .container {
    max-width: 1200px;
  }
}
</style>
