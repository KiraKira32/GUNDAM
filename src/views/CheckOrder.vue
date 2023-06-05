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
        <h3
          v-if="!order.is_paid"
          class="mb-4 text-center text-white py-2"
          style="background: #bf0000"
        >
          付款確認
        </h3>
        <h3
          v-if="order.is_paid"
          class="mb-4 text-center text-white py-2"
          style="background: #bf0000"
        >
          成功購買
        </h3>
        <div class="shopList p-2">
          <!-- shopping list -->
          <table v-if="!order.is_paid" class="table align-middle">
            <tbody>
              <tr v-for="item in order.products" :key="item.id" style="background: #f4f4f4">
                <td class="check-img">
                  <img
                    class="check-img"
                    :src="item.product.imageUrl"
                    alt="item.product.imageUrl"
                    style="width: 130px;"
                  />
                </td>
                <td class="checkOrder-content">{{ item.product.title }}</td>
                <td width="50">
                  <div class="input-group input-group-sm">
                    <div class="input-group checkOrder-content">{{ item.qty }} 台</div>
                  </div>
                </td>
                <td width="100" class="check-price">
                  NT$ {{ $filters.currency(item.product.price) }}
                </td>
                <td class="text-danger align-middle checkOrder-content">
                  NT${{ $filters.currency(item.product.price * item.qty) }}
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="!order.is_paid" class="d-flex justify-content-end align-items-center pb-3 pt-2">
            <div class="text-secondary">小計</div>
            <div class="text-danger mx-4 fs-4 mt-0">NT$ {{ $filters.currency(order.total) }}</div>
          </div>
          <hr v-if="!order.is_paid" class="mx-3" />
          <div class="Customer-Infor">
            <h4 class="text-center py-3" style="background: #f4f4f4">客戶訂單資料</h4>
            <table class="table my-5 d-flex justify-content-center">
              <tbody v-if="order.user">
                <tr>
                  <th width="200" class="order-num">訂單編號</th>
                  <td>{{ order.id }}</td>
                </tr>
                <tr>
                  <th>訂單日期</th>
                  <td>{{ $moment(new Date (order.create_at * 1000)).format('YYYY-MM-DD HH:mm') }}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th>姓名</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th>收件人電話</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th>收件人地址</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td>
                    <span v-if="!order.is_paid" class="text-danger">尚未付款</span>
                    <span v-else class="text-success"><i class="bi bi-check-circle me-1"></i>付款完成</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="order.is_paid === false" class="d-flex justify-content-between mt-4">
          <button
            type="button"
            class="total-btn check-btn btn btn-color text-white py-2"
            @click="$router.push(`/products`)"
          >
            取消付款
          </button>
          <button type="button" class="total-btn check-btn btn btn-danger py-2" @click="payOrder">確認付款</button>
        </div>
        <div v-if="order.is_paid === true" class="d-flex justify-content-center mt-4">
          <button
            type="button"
            class="total-btn btn btn-color text-white py-2"
            @click="$router.push(`/`)"
          >
            回首頁
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Swal from 'sweetalert2'
// import scrollMixin from '../mixins/scrollMixin'

export default {
  // mixins: [scrollMixin],
  data() {
    return {
      isLoading: false,
      order: {
        // user: {}
      },
      orderId: ''
    }
  },
  methods: {
    getOrders() {
      // this.isLoading = true
      this.orderId = this.$route.params.id // 獲取動態參數
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/order/${
        this.orderId
      }`
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false
          this.order = res.data.order
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    payOrder() {
      this.orderId = this.$route.params.id // 獲取動態參數
      // this.isLoading = true
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/pay/${
        this.orderId
      }`
      this.$http
        .post(url)
        .then((res) => {
          this.scrollTop()
          if (res.data.success) {
            this.getOrders()
          }
          Swal.fire({
            icon: 'success',
            title: '付款成功！',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          alert(err)
        })
    },
    scrollTop() {
      window.scrollTo(0, 0)
    },
  },
  mounted() {
    this.orderId = this.$route.params.orderId
    this.getOrders()
    this.scrollTop()
  }
}
</script>

<style>

@media screen and (max-width: 1024px) {
  .main-cart{
    margin-top: 74px;
  }
  .breadcrumb {
    margin-top: 16px !important;
  }
}

@media screen and (max-width: 992px) {
  .cart-text {
    padding-left: 1% !important;
    padding-right: 1% !important;
  }
}

@media screen and (max-width: 768px) {
  .check-img {
    width: 80px !important;
  }
  .checkOrder-content {
    font-size: 12px;
  }
  .check-price {
    display: none;
  }
  .check-btn {
    padding: 60px;
  }
  .cart-text {
    margin-left: 3% !important;
    margin-right: 3% !important;
  }
}
@media screen and (max-width: 480px) {
  .check-btn {
    padding: 40px;
  }
  .check-price {
    display: none;
  }
  .order-num {
    width: 100px;
  }
  .checkOrder-content {
    font-size: 12px;
  }
}

</style>
