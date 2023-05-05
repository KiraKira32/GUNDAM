<template>
  <div class="banner-block">
    <div class="banner-img">
      <img class="desktop" src="https://i.imgur.com/bKJg50Z.png" alt="" />
      <img class="mobile" src="https://i.imgur.com/yf0WTQF.png" alt="" />
      <div class="banner-title fw-bold text-white">
        <span>勝負並不是只靠機動的性能</span>
        <div>不只是靠操縱者的技巧</div>
        <div class="dynamic-text">結果本身就是唯一的真相！</div>
      </div>
    </div>
    <!-- product title -->
    <main class="main-block">
      <div class="container shadow-sm px-0">
        <div>
          <img
            class="img-title mt-5 img-fluid"
            src="../assets/title/gundam.png"
            alt="鋼彈系列作品"
          />
          <div class="py-2 m-3">請選擇您有興趣的作品，以選擇適合您的商品類別。</div>
        </div>
        <div class="d-flex justify-content-center showcase-img mt-5">
          <img class="logo-mercury" src="../assets/img/水星的魔女LOGO.png" alt="" />
          <img class="logp-mars" src="../assets/img/logo_orphans.png" alt="" />
          <img class="img-mercury character" src="https://i.imgur.com/dkqPCm4.png" alt="水星" />
          <img class="img-mars character" src="https://i.imgur.com/x45RfEt.png" alt="火星" />
        </div>

        <div class="decoration-block p-4 mt-5"></div>

        <DisplayProducts></DisplayProducts>
      </div>
    </main>
  </div>
</template>

<script>
import DisplayProducts from '../components/DisplayProducts.vue'

export default {
  components: {
    DisplayProducts
  },
  data() {
    return {
      isNavOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    }
  },
  mounted() {
    // this.getProducts()
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 1400px) {
  .img-mercury {
    max-width: 100%;
    height: auto;
  }
  .img-mars {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .character {
    width: 50%;
  }
}

@media screen and (max-width: 1280px) {
  .banner-block {
    position: absolute;
    .banner-title {
      font-size: 26px;
      position: absolute;
      top: 160px;
      left: 200px;
    }
    .banner-img img {
      max-width: 100%;
      height: auto;
      .dynamic-text {
        font-size: 36px;
      }
    }
  }
}

// @media screen and (max-width: 900px) {
//   .banner-block {
//     position: absolute;
//     .banner-title {
//       font-size: 24px;
//       position: absolute;
//       top: 150px;
//       left: 150px;
//     }
//     .banner-img img {
//       height: auto;
//       .dynamic-text {
//         font-size: 32px;
//       }
//     }
//   }
// }

@media screen and (max-width: 768px) {
  .banner-block {
    position: absolute;
    .banner-title {
      font-size: 18px;
      position: absolute;
      top: 200px;
      left: 100px;
    }
    .banner-img img {
      max-width: 100%;
      height: auto;
    }
    .dynamic-text {
      font-size: 23px;
    }
  }
}

@media screen and (max-width: 375px) {
  .banner-img .desktop {
    display: none;
  }
  .banner-img .mobile {
    display: block;
  }
  .banner-block {
    position: absolute;
    .banner-title {
      font-size: 10px;
      position: absolute;
      top: 260px;
      left: 30px;
    }
    .banner-img img {
      max-width: 100%;
      height: auto;
    }
    .dynamic-text {
      font-size: 20px;
    }
  }
}
@media screen and (min-width: 376px) {
  .banner-img .desktop {
    display: block;
  }

  .banner-img .mobile {
    display: none;
  }
}
</style>
