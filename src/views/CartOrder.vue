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
      <div class="cart-text p-5 mx-5 mt-4">
        <h3 class="mb-4 text-center">訂單填寫</h3>
        <div class="shopList p-5 d-flex justify-content-center">
          <v-form ref="form" class="col-md-6" v-slot="{ errors }">
            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名<span class="text-danger">*</span></label>
              <v-field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></v-field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email<span class="text-danger">*</span></label>
              <v-field
                id="email"
                name="email"
                type="email"
                class="form-control"
                placeholder="請輸入 Email"
                rules="required|email"
                v-model="form.user.email"
                :class="{ 'is-invalid': errors.email }"
              >
              </v-field>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話<span class="text-danger">*</span></label>
              <v-field
                id="tel"
                name="電話"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                :rules="isPhone"
                maxlength="10"
                v-model="form.user.tel"
              ></v-field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址<span class="text-danger">*</span></label>
              <v-field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              >
              </v-field>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">備註</label>
              <textarea
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              >
              </textarea>
            </div>
          </v-form>
        </div>
        <div class="d-flex justify-content-between mt-4">
          <button
            type="button"
            class="total-btn btn btn-color text-white py-2"
            @click="$router.push(`/carts`)"
          >
            返回上頁
          </button>
          <button type="submit" class="total-btn btn btn-danger py-2" @click="createOrder">
            送出訂單
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import getCart from '@/mixins/getCart'
import scrollMixin from '../mixins/scrollMixin'

import Swal from 'sweetalert2'

export default {
  mixins: [getCart, scrollMixin],
  data() {
    return {
      isLoading: false,
      products: [],
      cartData: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼,範例: 0978197878'
    },
    // 送出訂單
    createOrder() {
      this.isLoading = true
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/order`
      this.$http
        .post(url, { data: this.form })
        .then((res) => {
          this.getCart()
          this.isLoading = false

          // 表單內容重置
          this.$refs.form.resetForm()
          this.form.message = ''
          this.$router.push(`/checkorder/${res.data.orderId}`)
        })
        .catch(() => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: '送出訂單失敗！',
            showConfirmButton: false,
            text: '請將表單內容填寫完畢。',
            timer: 2000
          })
          // 表單內容重置
          this.$refs.form.resetForm()
          this.form.message = ''
        })
    },
    getProductsAll() {
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.productsAll = res.data.products
        this.isLoading = false
        this.createCategories() // 觸發 category過濾
      })
    }
  },
  mounted() {
    this.getCart
  }
}
</script>
