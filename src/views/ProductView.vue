<template>
  <h3>單一產品頁面</h3>
  <div>
    <div>{{ product.title }}</div>
    <img :src="product.imageUrl" alt="">
  </div>
</template>

<script>

export default {
  data() {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      // 取出單一產品頁面的 ID
      const { id } = this.$route.params
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/product/${id}`
      this.$http
        .get(url)
        .then((res) => {
          this.product = res.data.product
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}


</script>