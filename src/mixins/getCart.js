export default {

  data() {
    return {
      isLoading: false,
      products: [],
      cartData: {}, // 購物車資料
    }
  },
  methods: {
    // 取得購物車
    getCart() {
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/cart`
      this.$http
        .get(url)
        .then((res) => {
          this.cartData = res.data.data
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
  }
}