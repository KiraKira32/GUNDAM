<template>
  <div class="container">
    <Loading :active="isLoading" class="vld-overlay">
      <div class="loadingio-spinner-ripple-j9w2wm5soxm">
        <div class="ldio-3c1sqxz2ek1">
          <div></div>
          <div></div>
        </div>
      </div>
    </Loading>
    <ProductsBanner></ProductsBanner>
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
              class="list-group-item list-group-item-action"
              :class="{ active: category === '' }"
              @click="setCategory('')"
            >
              全部的商品
            </button>
            <template v-for="(item, index) in categories" :key="`${index}-${item}`">
              <button
                type="button"
                class="list-group-item list-group-item-action"
                :class="{ active: category === item }"
                @click="setCategory(item)"
              >
                {{ item }}
              </button>
            </template>
          </div>
        </div>
        <!-- 產品列表 -->
        <div class="col-9">
          <div class="row">
            <div v-for="item in products" :key="item.id" class="col-md-6 col-lg-4 mb-4">
              <div
                v-cloak
                @click="productLink(item.id)"
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
import ProductsBanner from '@/components/ProductsBanner.vue'

export default {
  components: {
    PaginationComponent,
    ProductsBanner
  },
  data() {
    return {
      page: {},
      isLoading: false,
      products: [],
      productsAll: [],
      category: '',
      categories: []
    }
  },
  methods: {
    // 取得分頁資訊與產品分類
    getProducts(page = 1) {
      this.isLoading = true
      const url = `${import.meta.env.VITE_API}/v2/api/${
        import.meta.env.VITE_PATH
      }/products?page=${page}&category=${this.category}`
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false
          this.products = res.data.products
          this.page = res.data.pagination
      })
    },
    // 取得所有商品資料
    getProductsAll() {
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.productsAll = res.data.products
        this.isLoading = false
        this.createCategories(); // 觸發 category過濾
      })
    },
    // 建立所有 category 的資料
    createCategories() {
      if (this.productsAll.length !== 0) {
        const categoriesMap = this.productsAll.map((item) => item.category)
        this.categories = [...new Set(categoriesMap)] // 去除重複的category
      }
    },
    setCategory(category = '') {
      this.category = category
    },
    // 連結指向單一產品
    productLink(id) {
      this.$router.push(`/product/${id}`)
    }
  },
  watch: {
    category() {
      this.getProducts()
    }
  },
  mounted() {
    this.getProducts()
    this.getProductsAll();
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
