<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-block py-3 px-4">
        <div class="container-fluid">
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
                  <!-- v-if="cartData.carts.length !== 0"  -->
                  <span
                  v-if="cartData.carts.length !== 0"
                  class="position-absolute top-1 start-100 translate-middle badge badge-num rounded-pill bg-danger"
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

import { mapActions, mapState } from 'pinia'
import cartStore from '../stores/cart'

export default {
  data() {
    return {
      isNavOpen: false,
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },
    closeNav() {
      this.isNavOpen = false
    },
    ...mapActions(cartStore, ['getCart']),
  },
  computed: {
    ...mapState(cartStore, ['cartData'])
  },
  mounted() {
    this.getCart()
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 1025px) {
  .navbar-logo {
    width: 50% !important;
    margin-left: 0px !important;
  }
}
@media screen and (max-width: 1024px) {
  .navbar-logo {
    // width: 50% !important;
    margin-left: 0px !important;
  }
  .badge-num {
    left: 90px !important;
  }
  .navbar-block{
    padding-left: 0% !important;
    padding-right: 0% !important;
  }
}

@media screen and (max-width: 768px) {
  .navbar-logo {
    width: 50%;
    margin-left: 0px !important;
  }
  .navbar-block{
    padding-left: 2% !important;
    padding-right: 2% !important;
  }
}

@media screen and (min-width: 480px) {
  .navbar-logo {
    width: 70%;
    margin-left: 0px !important;
  }
}

@media screen and (max-width: 480px) {
  .navbar-logo {
    width: 75%;
    margin-left: 0px !important;
  }
  .badge-num {
    left: 90px !important;
  }
}
</style>
