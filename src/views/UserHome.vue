<template>
  <SloganTitle></SloganTitle>
  <div class="banner-block">
    <div class="banner-img d-flex justify-content-center">
      <img src="../assets/img/bKJg50Z.jpg" alt="" />
    </div>
    <!-- product title -->
    <main class="main-block main-home">
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
          <img
            class="img-mercury character"
            src="../assets/img/dkqPCm4.webp"
            alt="水星"
            @click="redirectToCategory('水星的魔女')"
            style="cursor: pointer"
          />
          <img
            class="img-mars character"
            src="../assets/img/x45RfEt.webp"
            alt="火星"
            @click="redirectToCategory('鐵血的孤兒')"
            style="cursor: pointer"
          />
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
      isLoading: true,
      isHovering: false
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },
    // 導向產品分類類別
    redirectToCategory(category) {
      this.$router.push({ path: '/products', query: { category: category } })
    },
    scrollTop() {
      window.scrollTo(0, 0)
    }
  },
  mounted() {
    this.scrollTop()
  }
}
</script>

<style lang="scss">
.banner-img img {
  max-width: 100%;
  height: auto;
  background-color: #000000;
}
.showcase-img {
  position: relative;
  .logo-mercury {
    top: 85%;
    width: 35%;
    left: 3%;
    z-index: 7;
    position: absolute;
  }
  .logp-mars {
    width: 13%;
    left: 48%;
    z-index: 6;
    position: absolute;
  }
}
.character {
  width: 48%;
}
.img-ornament {
  width: 50%;
}
.img-element {
  width: 8%;
}
.img-balloon {
  width: 10%;
}

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

  .img-balloon {
    width: 15%;
  }
}

/* 螢幕寬度小於 768px 時的樣式 */
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    padding: 1rem;
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
    padding: 2rem;
  }
}

@media screen and (min-width: 1920px) {
  .banner-img {
    background: #000;
  }
}
</style>
