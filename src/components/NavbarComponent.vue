<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-block py-3">
        <div class="container-fluid custom-container">
          <router-link to="/" class="d-flex navbar-480 me-md-auto navbar-logo text-decoration-none">
            <div>
              <img class="navbar-logo ms-3" src="../assets/img/LOGO.png" alt="" />
            </div>
          </router-link>

          <button class="navbar-toggler" type="button" @click="toggleNav">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end me-4"
            :class="{ show: isNavOpen }"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nev-item active">
                <router-link to="/" class="nav-link text-shadow" @click="closeNav"
                  >首頁</router-link
                >
              </li>
              <li class="nev-item">
                <router-link to="/faq" class="nav-link text-shadow" @click="closeNav"
                  >常見問題</router-link
                >
              </li>
              <li class="nev-item">
                <router-link to="/products" class="nav-link text-shadow" @click="closeNav"
                  >商品</router-link
                >
              </li>
              <li class="nev-item">
                <router-link
                  to="/carts"
                  class="nav-link text-shadow position-relative"
                  @click="closeNav"
                >
                  購物車
                  <i class="fas fa-shopping-cart"></i>
                  <span
                  v-if="cartData.carts.length !== 0" class="position-absolute top-1 start-100 translate-middle badge badge-num rounded-pill bg-danger"
                  >
                    {{ cartData.carts.length }}
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
// import getCart from '@/mixins/getCart'
import emitter from '@/methods/emitter'
// import emitter from '@/methods/emitter'

export default {
  // mixins: [getCart],
  data() {
    return {
      isNavOpen: false,
      cartData: {
        carts:[]
      }, 
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },
    closeNav() {
      this.isNavOpen = false
    },
    // getCartNum () {
    //   const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/cart`
    //   this.$http
    //     .get(url)
    //     .then((res) => {
    //       this.cartData = res.data.data
    //       console.log('購物車：', this.cartData.carts);
    //     })
    //     .catch(() => {
    //       this.isLoading = false;
    //     });
    // }
    updateCartNum() {
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.cartData = res.data.data;
          console.log("購物車：", this.cartData.carts);
        })
        .catch(() => {
          this.isLoading = false;
        });
    }
  },
  mounted() {
    // this.getCartNum()
    // emitter.on('getCartNum', () => {
    //   this.getCartNum()
    // })
    this.updateCartNum();

// 發送'getCartNum'事件以更新購物車數量
emitter.on("getCartNum", () => {
  this.updateCartNum();
});

// 監聽'addToCart'事件並更新購物車數量
emitter.on("addToCart", () => {
  this.updateCartNum();
});
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 480px) {
  // .navbar-480 {
  //   width: 250px;
  // }
  .navbar-logo {
    width: 60%;
    margin-left: 0px !important;
  }
  .badge-num {
    left: 90px !important;
  }
}

@media screen and (max-width: 1024px) {
  .badge-num {
    left: 90px !important;
  }
}
</style>
