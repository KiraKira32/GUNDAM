import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

// 目前這個環境不屬於 Vue 因此要使用 axios
const cartStore = defineStore('cart', {
  state: () => {
    return {
      cartData: {
        carts:[]
      }, 
    }
  },
  actions: {
    //取得購物車列表
    getCart() {
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/cart`
      axios.get(url)
        .then((res) => {
          this.cartData = res.data.data
        })
        .catch((err) => {
          alert(err)
        })

    },
    addToCart(product_id, qty=1) {
      const data = {
        data: {
          product_id,
          qty
        }
      }
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/cart`
      axios.post(url, data )
        .then(() => {
          this.getCart()
          Swal.fire({
            icon: 'success',
            title: '加入購物車成功！',
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    deleteProduct(item) {
      this.isLoading = true
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/cart/${item.id}`
      axios
        .delete(url)
        .then(() => {
          this.getCart()
          this.isLoading = false
        })
        .catch((err) => {
          alert(err)
        })
    },
    deleteCartAll() {
      const url = `${import.meta.env.VITE_API}/v2/api/${import.meta.env.VITE_PATH}/carts`
      axios
        .delete(url)
        .then(() => {
          this.isLoading = false
          this.getCart()
        })
        .catch((err) => {
          alert(err)
        })
    },
  },
});

export default cartStore;