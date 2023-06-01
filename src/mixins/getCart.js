
export default {
  data() {
    return {
      isLoading: false,
      products: [],
      cartData: {
        carts:[]
      }, 
    }
  },
  methods: {
    // 取得購物車
    getCart() {
      // this.isLoading = true
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/cart`
      this.$http
        .get(url)
        .then((res) => {
          this.cartData = res.data.data
          // console.log(res);
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getCart()
  },
}