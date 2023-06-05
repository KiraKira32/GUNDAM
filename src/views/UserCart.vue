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
            <IconTrash color="#DF0000" size="20" />
            <span class="text-danger text-delete" @click="deleteCartAll()" style="cursor: pointer"
              >清空購物車</span
            >
          </div>
          <hr class="border-line" />

          <table class="table align-middle">
            <tbody>
              <tr v-for="item in cartData.carts" :key="item.id">
                <td width="100" class="cart-img-block">
                  <img
                    class="carts-img"
                    :src="item.product.imageUrl"
                    alt="item.product.imageUrl"
                    @click="$router.push(`/product/${item.product_id}`)"
                    style="cursor: pointer"
                  />
                </td>
                <td
                  width="440"
                  class="card-text-product px-0"
                  @click="$router.push(`/product/${item.product_id}`)"
                >
                  {{ item.product.title }}
                </td>
                <td width="90" class="num-box">
                  <div class="input-group input-group-sm">
                    <div class="input-group">
                      <input
                        min="1"
                        type="number"
                        class="form-control text-center card-text-product"
                        v-model.number="item.qty"
                        @change="updataCart(item)"
                      />
                    </div>
                  </div>
                </td>
                <td width="100" class="card-text-product card-text-price text-price">
                  NT${{ $filters.currency(item.product.price) }}
                </td>
                <td width="100" class="text-danger align-middle card-text-product card-text-price">
                  NT${{ $filters.currency(item.product.price * item.qty) }}
                </td>
                <td class="card-text-icon" style="width: 24px">
                  <div @click="deleteProduct(item)">
                    <IconX class="card-text-icon" color="#DF0000" style="cursor: pointer" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="coupon-block">
          <div class="coupon py-1">
            <div>
              <div v-if="couponApplied" class="text-success text-end">已套用優惠券</div>
              <div v-else-if="couponExpired" class="text-danger text-end">
                優惠券無法使用或已過期
              </div>
            </div>
            <div class="input-group input-group-sm">
              <input
                type="text"
                placeholder="請輸入優惠碼"
                class="form-control"
                v-model="couponInfo"
              />
              <div class="input-group-append">
                <button type="button" class="btn btn-danger coupon-button" @click="addCoupon">
                  套用優惠碼
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="total-block">
          <div class="d-flex justify-content-end pt-4 pb-4">
            <div v-if="cartData.carts" class="text-secondary mx-4">
              共 {{ getTotalQty() }} 件商品
            </div>
            <div class="products-num text-end text-secondary">商品金額</div>
            <div class="products-price mx-4 text-secondary">
              NT$ {{ $filters.currency(cartData.total) }}
            </div>
          </div>
          <div
            v-if="cartData.total == cartData.total"
            class="d-flex justify-content-end align-items-center pb-3 pt-2"
          >
            <hr class="mx-4" />
            <div class="text-secondary">小計</div>
            <div class="text-danger mx-4 fs-4">NT$ {{ $filters.currency(cartData.total) }}</div>
          </div>
          <div v-if="cartData.final_total !== cartData.total" class="couponTotal">
            <div class="d-flex justify-content-end py-2">
              <div class="text-danger">優惠折扣</div>
              <div class="text-danger mx-4">
                - NT$ {{ $filters.currency(cartData.final_total) }}
              </div>
            </div>
            <hr class="mx-4" />
            <div class="d-flex justify-content-end align-items-center pb-3 pt-2">
              <div class="text-secondary">小計</div>
              <div class="text-danger mx-4 fs-4">
                NT$ {{ $filters.currency(`${cartData.total - cartData.final_total}`) }}
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-4">
          <button
            type="button"
            class="total-btn btn btn-color text-white py-2"
            @click="$router.push(`/products`)"
          >
            繼續購物
          </button>
          <button
            type="button"
            class="total-btn btn btn-danger py-2"
            @click="$router.push(`/cartorder`)"
          >
            下一步
          </button>
        </div>
      </div>
    </div>
  </main>
  <ToastMessages :title="title" :message="message"></ToastMessages>
</template>

<script>
import Swal from 'sweetalert2'

import { IconTrash } from '@tabler/icons-vue'
import { IconX } from '@tabler/icons-vue'
import { Toast } from 'bootstrap'
// import Swal from 'sweetalert2'

import ToastMessages from '@/components/ToastMessages.vue'

import { mapActions, mapState } from 'pinia'
import cartStore from '../stores/cart'

export default {
  components: {
    IconTrash,
    IconX,
    ToastMessages
  },
  data() {
    return {
      isLoading: false,
      // products: [],
      // productId: '',
      showToast: false,
      title: '',
      message: '',
      couponInfo: '',
      couponApplied: false,
      couponExpired: false
    }
  },
  methods: {
    // 顯示總數量
    getTotalQty() {
      return this.cartData.carts.reduce((total, cart) => total + cart.qty, 0)
    },
    // 調整購物車數量
    updataCart(item) {
      this.isLoading = true
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/cart/${item.id}`
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.$http
        .put(url, { data })
        .then(() => {
          this.isLoading = false
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
    ...mapActions(cartStore, ['getCart', 'deleteProduct', 'deleteCartAll']),
    // 優惠卷
    addCoupon() {
      this.isLoading = true
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/coupon`
      const coupon = {
        code: this.couponInfo
      }
      this.$http
        .post(url, { data: coupon })
        .then(() => {
          this.isLoading = false
          this.getCart()
          this.couponInfo = ''
          this.couponApplied = true
          this.couponExpired = false
        })
        .catch(() => {
          this.isLoading = false
          this.couponInfo = ''
          this.couponApplied = false
          this.couponExpired = true
          Swal.fire({
            icon: 'error',
            title: '優惠卷輸入失敗！',
            showConfirmButton: false,
            text: '優惠券無法使用或已過期',
            timer: 2000
          })
        })
    },
    scrollTop() {
      window.scrollTo(0, 0)
    }
  },
  computed: {
    ...mapState(cartStore, ['cartData'])
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
}
@media screen and (max-width: 991px) {
  .carts-img {
    width: 80px;
    height: 50px;
  }
  .cart-text {
    padding: 1% !important;
    padding-bottom: 5% !important;
    padding-top: 5% !important;
  }
  .coupon-block {
    padding-left: 60%;
  }
  .card-text-product {
    font-size: 14px;
  }
  .cart-text {
    margin-right: 4% !important;
    margin-left: 4% !important;
  }
}
@media screen and (max-width: 767px) {
  .cart-text {
    margin-top: 5% !important;
    padding-bottom: 5% !important;
    padding-top: 5% !important;
  }
  .cart-text {
    margin-right: 2% !important;
    margin-left: 2% !important;
  }
  .card-text-product {
    font-size: 10px;
  }
  .card-text-icon {
    width: 18px;
  }
  .coupon-block {
    padding-left: 50%;
  }
}
@media screen and (max-width: 575px) {
  .cart-text {
    margin-top: 0px !important;
  }
  .total-btn {
    padding: 10%;
  }
  .coupon-block {
    padding-left: 40%;
  }
}
@media screen and (max-width: 480px) {
  .card-text-price {
    padding: 1px !important;
    width: 60px !important;
  }
  .num-box {
    width: 70px;
  }
  .text-price {
    display: none;
  }
  .text-delete {
    margin-top: 0px !important;
  }
}

@media screen and (max-width: 375px) {
  .shopList {
    padding: 4px !important;
  }
  .coupon-block {
    padding-left: 30%;
  }
}
</style>
