<template>
  <Loading :active="isLoading" class="vld-overlay">
    <div class="loadingio-spinner-ripple-j9w2wm5soxm">
      <div class="ldio-3c1sqxz2ek1">
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
  <main class="main-block main-cart py-3">
    <div class="container p-0">
      <!-- breadcrumb -->
      <nav aria-label="breadcrumb breadcrumb-cart">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="breadcrumb-link text-decoration-none">首頁</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">購物車</li>
        </ol>
      </nav>
    </div>
    <div class="container container-block shadow-sm p-0 mb-4">
      <!-- 購物車 沒有產品 -->

      <!-- <div class="cart-text text-center p-5">
        <h3 class="mb-4">購物車</h3>
        <div class="cart-block py-4">
          <div class="fs-5 mb-4">您尚未選購任何商品，請先挑選您喜愛的商品。</div>
          <div>
            <router-link :to="`/products`" class="btn btn-danger">馬上來看看</router-link>
          </div>
        </div>
      </div> -->
      <!-- 購物車列表 -->

      <div class="cart-text p-5 mx-5">
        <h3 class="mb-4 text-center">購物車</h3>
          <div class="shopList p-2">
            <div class="text-end d-flex justify-content-end  align-items-center">
              <IconTrash color="#DF0000" size="20"/>
              <a href="" class="text-decoration-none">
                <span class="text-danger">清空購物車</span>
              </a>
            </div>
            <hr class="border-line">
            <div class="d-flex">
              <div>產品圖片</div>
              <div>產品名稱</div>
              <div>購買數量</div>
              <div>價格</div>
              <div>x</div>
            </div>
          </div>
          <div>
            <div class="d-flex justify-content-end ">
              <div class="products-num col-2">總計</div>
              <div class="products-price"> NT$9999</div>
            </div>
          </div>
      </div>
    </div>
  </main>
</template>

<script>

import { IconTrash } from '@tabler/icons-vue';

export default {
  components: {
    IconTrash
  },
  data() {
    return {
      isLoading: false,
      products: [],
      productId: '',
      cartData: {},
      cartStatus: false,
    }
  },
  methods: {
    // 取得購物車資料
    getCart() {
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/cart`
      this.$http
        .get(url)
        .then((res) => {
          this.cartData = res.data.data
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    updataCart() {

    }
  }
}
</script>

<style>
.main-cart {
  margin-top: 74px;
}
.cart-block {
  background: #f5f5f5;
  border-radius: 5px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

@media screen and (min-width: 1025px) {
  .container {
    max-width: 1200px;
  }
}
</style>
