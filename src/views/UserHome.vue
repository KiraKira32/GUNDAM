<template>
  <Loading :active="isLoading" class="vld-overlay">
    <div class="loadingio-spinner-rolling-y3x6rt20h2g">
      <div class="ldio-dg3xh3l51l9">
        <div></div>
      </div>
    </div>
  </Loading>
  <SloganTitle></SloganTitle>
  <div class="banner-block">
    <div class="banner-img">
      <img src="https://i.imgur.com/bKJg50Z.png" alt="" />
    </div>
    <!-- product title -->
    <main class="main-block">
      <div class="container container-block shadow-sm px-0">
        <div>
          <img
            class="img-title mt-5 img-fluid"
            src="../assets/title/gundam.png"
            alt="鋼彈系列作品"
          />
          <div class="sub-title py-2 m-3">請選擇您有興趣的作品，以選擇適合您的商品類別。</div>
        </div>
        <div class="character-block d-flex justify-content-center showcase-img mt-5">
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
import SloganTitle from '../components/SloganTitle.vue'

export default {
  components: {
    DisplayProducts,
    SloganTitle
  },
  data() {
    return {
      isNavOpen: false,
      isLoading: true
    }
  },
  methods: {
    Loading() {
      if (this.isLoading === true) {
        setTimeout(() => {
          this.isLoading = false
        }, 1500)
      }
    },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    }
  },
  mounted() {
    // this.getProducts()
    this.Loading()
  }
}
</script>

<style lang="scss">
/* 螢幕寬度小於 480px 時的樣式 */
@media screen and (max-width: 480px) {
  .img-title {
    margin-top: 0px !important;
  }

  div.container .sub-title {
    font-size: 14px;
    padding-top: 1px !important;
    padding-bottom: 1px !important;
    padding-left: 10px;
    margin: 8px !important;
  }

  .banner-title {
    position: absolute;
    font-size: 16px;
    top: 40px;
    left: 30px;
  }

  .character-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5% !important;
    margin-bottom: 5%;

    .character {
      width: 85%;
    }

    .img-mercury {
      margin-bottom: 13%;
    }
  }

  .showcase-img .logo-mercury {
    left: 60px;
    top: 38%;
    width: 60%;
  }

  .showcase-img .logp-mars {
    left: 65%;
    top: 55%;
    width: 22%;
  }

  .decoration-block {
    padding: 0px !important;
    margin: 0px !important;
  }
}

/* 螢幕寬度小於 768px 時的樣式 */
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    padding: 1rem; //要修改 05/07
  }

  .img-title {
    margin-top: 0px !important;
    content: url('../assets/title/gundam_768.png');
  }
}

/* 螢幕寬度小於 1024px 時的樣式 */
@media screen and (max-width: 1024px) {
  .container {
    max-width: 768px;
    padding: 2rem; //要修改 05/07
  }
}

/* 螢幕寬度大於 1024px 時的樣式 */
@media screen and (min-width: 1025px) {
  .container {
    max-width: 1200px;
  }
}
</style>
