<template>
  <main class="main-question main-block py-3">
    <div class="container container-block shadow-sm p-0 mb-4">
      <div class="cart-text text-center p-5">
        <div class="fw-bold mb-4 fs-2">常見問題</div>
        <!-- Accordion -->
        <div class="accordion p-5" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                1. 如何選擇適合的鋼彈模型？
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body text-start cordion-text-color">
                在選擇鋼彈模型時，您可以考慮不同的系列、尺寸、難度級別以及您個人的喜好。
                我們網站上有詳細的產品描述和圖片，您可以根據自己的興趣和偏好進行選擇。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                2. 如何進行付款？
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body text-start cordion-text-color">
                我們接受多種付款方式
                <div>
                  包括信用卡、網路銀行轉帳、行動支付，以及面交付款等。在結帳過程中，您可以選擇最適合您的付款方式進行支付。
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                3. 運送方式和時間？
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body text-start cordion-text-color">
                您的訂單將在收到付款後的三至五個工作日內處理並安排發貨。運送時間根據您所在地區的距離和運輸方式而有所不同。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                4. 退換貨政策？
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body text-start cordion-text-color">
                如果您收到的商品有任何瑕疵或損壞，請立即與我們的客戶服務聯絡。我們將協助您進行退換貨處理。請確保商品在退換貨過程中保持完整且符合退換貨政策的相關要求。
                客服專線：(02)0412-5252
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFive">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                5. 客戶隱私和安全？
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body text-start cordion-text-color">
                我們重視客戶隱私和資料安全。在收集和處理客戶資料時，我們遵守相關法律法規並採取相應的保護措施。您的個人資料僅用於處理訂單和提供客戶服務，我們不會將其提供給第三方。
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingSix">
              <button
                class="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                6. 客服聯絡方式
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body text-start cordion-text-color">
                如有任何問題或需要協助，請隨時聯繫我們的客戶服務團隊。
                <div class="mt-2">客服專線：(02)0412-5252</div>
                <div>電子郵件：customerservice@example.com</div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.scrollTop();
  },
};
</script>

<style scoped>
.main-question {
  margin-top: 74px;
}
.cordion-text-color{
  color: #383838;
}
.accordion-item .accordion-button:not(.collapsed) {
  background-color: #BF0000;
  color: #FFF;
}
.accordion-button:not(.collapsed):after {
  background-image: url(../assets/img/chevron-down.svg);
  color: red;
  transform: rotate(-180deg);
}

</style>

<style lang="scss">

@media screen and (max-width: 1024px){
  .main-question {
    margin-top: 0px;
  }
  .cart-text {
    margin-top: 50px !important;
  }
}
@media screen and (max-width: 768px) {
  .accordion {
    padding: 1% !important;
  }

}

@media screen and (min-width: 480px) {
  .breadcrumb {
    margin-left: 2% ;
  }
  .accordion {
    padding: 1% !important;
  }
}

@media screen and (max-width: 480px) {
  .breadcrumb {
    margin-left: 2% ;
  }
  .accordion {
    padding: 1% !important;
  }
  .main-question{
    padding-top: 1px !important;
  }
  .cart-text {
    padding-left: 2% !important;
    padding-right: 2% !important;
  } 
}
</style>