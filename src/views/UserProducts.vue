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
        <div class="col-9">
          <div class="row">
            <div
              v-for="products in filterProducts"
              :key="products.id"
              class="col-md-6 col-lg-4 mb-4"
            >
              <div
                v-cloak
                class="card shadow-sm"
                style="width: 18rem background-repeat:no-repeat; background-position: center"
              >
                <img
                  class="card-img-top card-products-img"
                  :src="products.imageUrl"
                  alt=""
                  @click="productLink(products.id)"
                />
                <div class="card-body">
                  <span class="badge bg-secondary mb-3" style="font-size: 14px">{{
                    products.category
                  }}</span>
                  <h5 class="card-title" style="font-size: 16px">{{ products.title }}</h5>
                  <div v-if="products.price === products.origin_price" class="text-danger h5 mb-3">
                    NT${{ products.price }}
                  </div>
                  <div v-else class="mb-3">
                    <del class="h6"> NT${{ products.origin_price }}</del>
                    <span class="h5 text-danger"> NT${{ products.price }}</span>
                  </div>
                  <button
                    type="button"
                    class="btn btn-danger w-100"
                    @click.prevent="addToCart(item.id)"
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
import Swal from 'sweetalert2'

import Pagination from '@/components/PaginationComponent.vue'
import ProductsBanner from '@/components/ProductsBanner.vue'
import getCart from '@/mixins/getCart'

export default {
  mixins: [getCart],
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
      cart: {},
      cartStatus: false,
      search: ''
    }
  },
  methods: {
    // 取得分頁資訊與產品分類
    getProducts(page = 1) {
      this.isLoading = true
      const url = `${import.meta.env.VITE_API}/v2/api/${
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
        this.categories = [...new Set(categoriesMap)] // 去除重複的category
      } else {
        this.filterProducts = this.products
      }
    },
    setCategory(category = '') {
      this.category = category
    },
    // 連結指向單一產品
    productLink(id) {
      this.$router.push(`/product/${id}`)
    },
    // 加入購物車
    addToCart(product_id, qty = 1) {
      const data = {
        product_id,
        qty
      }
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/cart`
      this.$http
        .post(url, { data })
        .then(() => {
          this.getCart()
          Swal.fire({
            icon: 'success',
            title: '加入購物車成功！',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          alert(err)
        })
    },
    filterSearch() {
      // this.filterProducts = this.productsAll.filter((item) => item.title.match(this.search))
      this.isLoading = true;

  // 模擬搜尋的延遲時間
  setTimeout(() => {
    this.filterProducts = this.productsAll.filter((item) => item.title.match(this.search));
    this.isLoading = false;
  }, 1000);
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
  mounted() {
    this.getProducts()
    this.getProductsAll()
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
