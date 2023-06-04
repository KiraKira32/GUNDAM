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
        <div class="col-md-3">
          <!-- search -->
          <div class="input-group flex-nowrap">
            <span class="input-group-text group-color" id="addon-wrapping" @click="filterSearch">
              <i class="fas fa-search" style="color: #fff"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="請輸入產品名稱"
              aria-label="Search"
              v-model="search"
              @keyup.enter="filterSearch"
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
        <div class="col-md-9">
          <div class="row">
            <div
              v-for="products in filterProducts"
              :key="products.id"
              class="col-md-6 col-lg-4 mb-4"
            >
              <div
                v-cloak
                class="card card-all shadow-sm"
                style="width: 18rem background-repeat:no-repeat; background-position: center"
              >
                <img
                  class="card-img-top card-products-img shadow-sm p-2"
                  :src="products.imageUrl"
                  alt=""
                  @click="productLink(products.id)"
                  style="cursor: pointer"
                />
                <div class="card-body">
                  <span class="badge bg-secondary mb-3" style="font-size: 14px">{{
                    products.category
                  }}</span>
                  <h5 class="card-title" style="font-size: 16px">{{ products.title }}</h5>
                  <div class="text-end mx-3">
                    <div
                      v-if="products.price === products.origin_price"
                      class="text-danger h5 mb-3"
                    >
                      NT${{ products.price }}
                    </div>
                    <div v-else class="mb-3">
                      <del class="h6"> NT${{ products.origin_price }}</del>
                      <span class="h5 text-danger"> NT${{ products.price }}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-danger w-100"
                    @click.prevent="addToCart(products.id)"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
            <Pagination :pages="page" :get-products="getProducts" @emit-pages="getProducts">
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Swal from 'sweetalert2'

import Pagination from '@/components/PaginationComponent.vue'
import ProductsBanner from '@/components/ProductsBanner.vue'

import { mapActions, mapState } from 'pinia'
import cartStore from '../stores/cart'

export default {
  components: {
    Pagination,
    ProductsBanner
  },
  data() {
    return {
      page: {},
      isLoading: false,
      products: [],
      productsAll: [],
      filterProducts: [],
      category: '',
      categories: [], 
      // cart: {},
      search: ''
    }
  },
  methods: {
    // 取得分頁資訊與產品分類
    getProducts(page = 1) {
      this.isLoading = true
      let url = `${import.meta.env.VITE_API}/v2/api/${
        import.meta.env.VITE_PATH
      }/products?page=${page}&category=${this.category}`
      this.$http.get(url).then((res) => {
        this.isLoading = false
        this.products = res.data.products
        this.page = res.data.pagination
        this.filterProducts = this.products
      })
    },
    // 取得所有商品資料
    getProductsAll() {
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.productsAll = res.data.products
        this.isLoading = false
        this.createCategories() // 觸發 category過濾
      })
    },
    // 建立category
    createCategories() {
      if (this.productsAll.length !== 0) {
        const categoriesMap = this.productsAll.map((item) => item.category)
        this.categories = [...new Set(categoriesMap)] // 去除重複&儲存 category
      } else {
        this.filterProducts = this.products
      }
    },
    // 設置分類並觸發
    setCategory(category = '') {
      this.category = category
      this.getProducts()
    },
    // 連結指向單一產品
    productLink(id) {
      this.$router.push(`/product/${id}`)
    },
    ...mapActions(cartStore, ['addToCart', 'getCart']),
    // 關鍵字搜尋 過濾產品
    filterSearch() {
      this.isLoading = true
      setTimeout(() => {
        this.filterProducts = this.productsAll.filter((item) => item.title.match(this.search))
        this.isLoading = false
        // 更新頁數
        if (this.search && this.filterProducts.length < 10) {
          this.page = {
            total_pages: 1,
            current_page: 1,
            has_pre: false,
            has_next: false
          }
        } else {
          this.page = {
            total_pages: 1,
            current_page: 1,
            has_pre: false,
            has_next: false
          }
        }
      }, 1000)
    },
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
  watch: {
    category() {
      this.getProducts()
    },
    search() {
      !this.search ? this.createCategories() : this.filterSearch()
    }
  },
  computed: {
    ...mapState(cartStore, ['cartData'])
  },
  mounted() {
    // 導向產品類別
    const selectedCategory = this.$route.query.category
    if (selectedCategory) {
      this.category = selectedCategory
    }
    this.getCart()
    this.scrollTop()
    this.getProducts()
    this.getProductsAll()
  }
}
</script>

<style lang="scss">

@media screen and (min-width: 1024px) {
  .breadcrumb {
    margin-left: 0% !important;
  }
  .card-products-img {
    max-width: 100%;
    height: 100%;
  }
}

@media screen and (max-width: 767px) {
  .card-products-img  {
    max-width: 100%;
    height: 100%;
  }
}

@media screen and (max-width: 480px) {
  .card-products-img  {
    max-width: 100%;
    height: 100%;
  }
  .card-all {
    width: 100% !important;
  }
}

</style>