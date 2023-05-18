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
                    class="position-absolute top-1 start-100 translate-middle badge badge-num rounded-pill bg-danger"
                  >
                    99+
                    <span class="visually-hidden"></span>
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

<style></style>

<script>
export default {
  data() {
    return {
      isNavOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },
    closeNav() {
      this.isNavOpen = false
    }
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
