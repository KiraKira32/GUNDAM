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
      <div v-if="cartData.carts?.length === 0" class="cart-text text-center p-5">
        <h3 class="mb-4">購物車</h3>
        <div class="cart-block py-5">
          <div class="fs-5 mb-4">您尚未選購任何商品，請先挑選您喜愛的商品。</div>
          <div>
            <router-link :to="`/products`" class="btn btn-danger">前往選購</router-link>
          </div>
        </div>
      </div>

      <!-- 購物車列表 -->
      <div v-else class="cart-text p-5 mx-5">
        <h3 class="mb-4 text-center">購物車</h3>
        <div class="shopList p-2">
          <div class="text-end d-flex justify-content-end align-items-center mx-2 pt-1">
            <a href="#"></a>
            <IconTrash color="#DF0000" size="20" />
            <span class="text-danger" @click="deleteCartAll()" style="cursor: pointer;">清空購物車</span>
          </div>
          <hr class="border-line" />

          <table class="table align-middle">
            <tbody>
              <tr v-for="item in cartData.carts" :key="item.id" class="">
                <td>
                  <img
                    class="carts-img"
                    :src="item.product.imageUrl"
                    alt="item.product.imageUrl"
                    @click="$router.push(`/product/${item.product_id}`)"
                    style="cursor: pointer;"
                  />
                </td>
                <td>{{ item.product.title }}</td>
                <td style="width: 80px">
                  <div class="input-group input-group-sm" style="width: 80px">
                    <div class="input-group">
                      <input
                        min="1"
                        type="number"
                        class="form-control text-center"
                        v-model.number="item.qty"
                        @change="updataCart(item)"
                      />
                    </div>
                  </div>
                </td>
                <td class="text-danger text-right">
                  NT$ {{ $filters.currency(item.product.price) }}
                </td>
                <td class="align-middle text-right px-0">
                  NT${{ $filters.currency(item.product.price * item.qty) }}
                </td>
                <td class="text-right" style="width: 24px">
                  <div @click="deleteProduct(item)">
                    <IconX color="#DF0000" style="cursor: pointer;"/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="total-block d-flex justify-content-end py-4">
          <div v-if="cartData.carts" class="text-secondary mx-4">共 {{ getTotalQty() }} 件商品</div>
          <div class="products-num text-end text-secondary">商品總金額</div>
          <div class="products-price mx-4 text-danger">
            NT${{ $filters.currency(cartData.total) }}
          </div>
        </div>
        <div class="d-flex justify-content-between mt-5">
          <button
            type="button"
            class="total-btn btn btn-color text-white py-2"
            @click="$router.push(`/products`)"
          >
            繼續購物
          </button>
          <button type="button" class="total-btn btn btn-danger py-2">前往結帳</button>
        </div>
      </div>
    </div>
  </main>
  <ToastMessages :title="title" :message="message"></ToastMessages>
</template>

<script>
import getCart from '@/mixins/getCart'

import { IconTrash } from '@tabler/icons-vue'
import { IconX } from '@tabler/icons-vue'
import { Toast } from 'bootstrap'
// import Swal from 'sweetalert2'

import ToastMessages from '@/components/ToastMessages.vue'

export default {
  mixins: [getCart],
  components: {
    IconTrash,
    IconX,
    ToastMessages
  },
  data() {
    return {
      isLoading: false,
      products: [],
      productId: '',
      cartData: {},
      cartStatus: false,
      showToast: false,
      title: '',
      message: ''
    }
  },
  methods: {
    getTotalQty() {
      return this.cartData.carts.reduce((total, cart) => total + cart.qty, 0)
    },
    // 調整購物車數量
    updataCart(item) {
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/cart/${item.id}`
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.$http
        .put(url, { data })
        .then(() => {
          this.getCart()
          this.toastShow('購物車訊息', '商品數量更新成功', 2000)
        })
        .catch(() => {
          this.toastShow('購物車訊息', '商品數量更新失敗', 2000)
          this.isLoading = false
        })
    },
    toastShow(title, message, duration) {
      this.title = title
      this.message = message
      this.toastMessage.show()
      setTimeout(() => {
        this.toastMessage.hide()
      }, duration)
    },
    deleteProduct(item) {
      this.isLoading = true
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/cart/${item.id}`
      this.$http
        .delete(url)
        .then(() => {
          this.getCart()
          this.toastShow('購物車訊息', '刪除商品成功', 2000)
          this.isLoading = false
        })
        .catch(() => {
          this.toastShow('購物車訊息', '刪除商品失敗', 2000)
          this.isLoading = false
        })
    },
    deleteCartAll() {
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/carts`
      this.isLoading = true
      this.$http
        .delete(url)
        .then(() => {
          this.getCart()
          this.isLoading = false
          this.toastShow('購物車訊息', '購物車清空成功', 2000)
        })
        .catch(() => {
          this.toastShow('購物車訊息', '購物車清空失敗', 2000)
          this.isLoading = false
        })
    },
    scrollTop() {
      window.scrollTo(0, 0)
    }
  },
  mounted() {
    this.getCart()
    this.scrollTop()
    this.toastMessage = new Toast('#toastMessage')
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
