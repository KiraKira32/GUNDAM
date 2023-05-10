<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-block py-3">
        <div class="container-fluid custom-container px-3">
          <router-link to="/" class="d-flex me-md-auto text-decoration-none">
            <div >
              <img class="navbar-logo" src="../assets/img/LOGO.png" alt="">
            </div>
          </router-link>

          <button class="navbar-toggler" type="button" @click="toggleNav">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end"
            :class="{ show: isNavOpen }"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nev-item active">
                <router-link to="/" class="nav-link text-shadow" @click="closeNav">首頁</router-link>
              </li>
              <li class="nev-item">
                <router-link to="/products" class="nav-link text-shadow" @click="closeNav">商品</router-link>
              </li>
              <li class="nev-item">
                <router-link to="/faq" class="nav-link text-shadow" @click="closeNav">常見問題</router-link>
              </li>
              <li class="nev-item">
                <router-link to="/carts" class="nav-link text-shadow" @click="closeNav">
                  購物車
                  <i class="fas fa-shopping-cart"></i>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style>


</style>

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
    },
  },
}
</script>

<style lang="scss">

@media screen and (max-width: 480px) {
  .navbar-logo {
    width: 60%;
  }
  .navbar > .container-fluid {
    flex-wrap: nowrap;
  }
}
@media screen and (max-width: 768px) {
  header {
    display: flex;
    justify-content: space-between;
  }
  .navbar > .container-fluid {
    flex-wrap: nowrap;
  }
}

</style>
